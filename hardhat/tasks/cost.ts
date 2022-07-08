import { ethers } from "ethers";

require("@nomiclabs/hardhat-waffle");
import { task } from "hardhat/config";
import { mean, median } from "mathjs";
import { randomBytes } from "crypto";
import { CheeseChainV2 } from "../types";

const ITERATIONS = 5;

///////////////// HELPERS ////////////////////////

function generateAddress() {
  const id = randomBytes(32).toString("hex");
  const privateKey = "0x" + id;
  const wallet = new ethers.Wallet(privateKey);
  return wallet.address;
}

function makeId(length: number): string {
  let result: string = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function calculateStats(metrics: PerformanceRecords): PerformanceMetrics {
  let statsObject: Record<
    string,
    { records: number[]; stats: PerformanceStats }
  > = {};

  function calculate(stats: number[]): {
    min: number;
    max: number;
    mean: number;
    median: number;
  } {
    return {
      min: Math.min(...stats),
      max: Math.max(...stats),
      mean: mean(stats),
      median: median(stats),
    };
  }

  for (let key in metrics) {
    statsObject = {
      ...statsObject,
      [key]: {
        records: metrics[key],
        stats: calculate(metrics[key]),
      },
    };
  }

  return statsObject;
}

function unixToMinutes(time: number): string {
  time = time / 1000;
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return `${minutes}min ${seconds}s`;
}

//////////////////////////////////////////////////

///////////////// FUNCTION CALLS ////////////////////////

type PerformanceStats = {
  min: number;
  max: number;
  mean: number;
  median: number;
};

type PerformanceRecords = Record<string, number[]>;

type PerformanceMetrics = Record<
  string,
  { records: number[]; stats: PerformanceStats }
>;

const performance: PerformanceRecords = {
  time: [],
  gas: [],
};

const deployContract = async (
  hre: any
): Promise<{
  cheeseChain: CheeseChainV2;
  performanceMetrics: PerformanceMetrics;
}> => {
  console.log("deploy contract");
  const performanceMetrics = JSON.parse(JSON.stringify(performance));
  const CheeseChain = await hre.ethers.getContractFactory("CheeseChainV2");
  const start = Date.now();
  const cheeseChain = await CheeseChain.deploy();
  const receipt = await cheeseChain.deployTransaction.wait();
  const duration = Date.now() - start;
  performanceMetrics.time.push(duration);
  const gasUsed = receipt.gasUsed.toNumber();
  performanceMetrics.gas.push(gasUsed);
  console.log(`deployed in ${unixToMinutes(duration)}`);
  return {
    cheeseChain: cheeseChain as CheeseChainV2,
    performanceMetrics: calculateStats(performanceMetrics),
  };
};

const addParticipant = async ({
  contract,
  role,
  deployNewContract,
  hre,
}: {
  contract: CheeseChainV2;
  role?: number;
  deployNewContract?: boolean;
  hre: any;
}): Promise<PerformanceMetrics> => {
  const performanceMetrics = JSON.parse(JSON.stringify(performance));
  contract = deployNewContract
    ? (await deployContract(hre)).cheeseChain
    : contract;
  for (let i = 0; i < ITERATIONS; i++) {
    console.log(`addParticipant ${i + 1}`);
    const start = Date.now();
    const tx = await contract.addParticipant({
      name: makeId(10),
      role: role ? role : getRandomInt(3),
      owner: generateAddress(),
    });
    const receipt = await tx.wait();
    const duration = Date.now() - start;
    const gasUsed = receipt.gasUsed.toNumber();
    performanceMetrics.time.push(duration);
    performanceMetrics.gas.push(gasUsed);
    console.log(`added Participant in ${unixToMinutes(duration)}`);
  }
  return calculateStats(performanceMetrics);
};

const removeParticipant = async (
  contract: CheeseChainV2,
  role?: number
): Promise<PerformanceMetrics> => {
  const performanceMetrics = JSON.parse(JSON.stringify(performance));

  for (let i = 0; i < ITERATIONS; i++) {
    console.log(`removeParticipant ${i + 1}`);
    const address = generateAddress();
    const pre = await contract.addParticipant({
      name: makeId(getRandomInt(20)),
      role: role ? role : getRandomInt(3),
      owner: address,
    });
    await pre.wait();

    if (
      (await contract.participants(address)).owner ===
      ethers.constants.AddressZero
    ) {
      console.log("zero address!");
      continue;
    }
    const start = Date.now();
    try {
      const tx = await contract.removeParticipant(address);
      const receipt = await tx.wait();
      const duration = Date.now() - start;
      const gasUsed = receipt.gasUsed.toNumber();
      performanceMetrics.time.push(duration);
      performanceMetrics.gas.push(gasUsed);
      console.log(`removed participant in ${unixToMinutes(duration)}`);
    } catch {
      console.log(`tx error with address: ${address}`);
      continue;
    }
  }
  return calculateStats(performanceMetrics);
};
const changeParticipantRole = async (
  contract: CheeseChainV2,
  from?: number,
  to?: number
): Promise<PerformanceMetrics> => {
  const performanceMetrics = JSON.parse(JSON.stringify(performance));
  for (let i = 0; i < ITERATIONS; i++) {
    console.log(`changeRole ${i + 1}`);
    const address = generateAddress();
    const name = makeId(1000);
    try {
      const pre = await contract.addParticipant({
        name: name,
        role: from ? from : getRandomInt(3),
        owner: address,
      });
      await pre.wait();

      const start = Date.now();
      const tx = await contract.changeParticipantRole(
        address,
        to ? to : getRandomInt(3)
      );
      const receipt = await tx.wait();
      const duration = Date.now() - start;

      const gasUsed = receipt.gasUsed.toNumber();
      performanceMetrics.time.push(duration);
      performanceMetrics.gas.push(gasUsed);
      console.log(`changed role in ${unixToMinutes(duration)}`);
    } catch {
      console.log("error changing role");
      continue;
    }
  }
  return calculateStats(performanceMetrics);
};

const callFunction = async (
  name: string,
  fn: () => any,
  deployContract?: boolean
): Promise<Record<string, PerformanceMetrics>> => {
  const performanceMetrics = JSON.parse(JSON.stringify(performance));
  for (let i = 0; i < ITERATIONS; i++) {
    console.log(`${name} ${i + 1}`);
    const start = Date.now();
    const tx = await fn();
    const receipt = await tx.wait();
    const duration = Date.now() - start;
    const gasUsed = receipt.gasUsed.toNumber();
    performanceMetrics.time.push(duration);
    performanceMetrics.gas.push(gasUsed);
    console.log(`${name} in ${unixToMinutes(duration)}`);
  }

  return {
    [name]: calculateStats(performanceMetrics),
  };
};

//////////////////////////////////////////////////

///////////////// TASK ////////////////////////

task("cost", "Determine execution cost").setAction(async (_, hre) => {
  const cheeseChain: CheeseChainV2 = (await deployContract(hre)).cheeseChain;
  const testCoordinates = {
    latitude: "",
    longitude: "",
  };
  const milkBatch = await cheeseChain.addMilkBatch(testCoordinates);
  await milkBatch.wait();

  const results: Record<string, PerformanceMetrics> = {
    deployContract: (await deployContract(hre)).performanceMetrics,
    ...(await callFunction("addMilkBatch", () =>
      cheeseChain.addMilkBatch({ longitude: "", latitude: "" })
    )),
    ...(await callFunction("addLot", () => cheeseChain.addLot([1]))),
    ...(await callFunction("addStep", () =>
      cheeseChain.addStep(1, testCoordinates)
    )),
    ...(await callFunction("addStep2", () =>
      cheeseChain.addStep(2, testCoordinates)
    )),
    ...(await callFunction("addResultFalse", () =>
      cheeseChain.addLabResult(1, false)
    )),
    ...(await callFunction("addResultTrue", () =>
      cheeseChain.addLabResult(1, true)
    )),
    addParticipant: await addParticipant({
      contract: cheeseChain,
      hre,
    }),
    addViewParticipant: await addParticipant({
      contract: cheeseChain,
      hre,
      role: 1,
    }),
    addBasicParticipant: await addParticipant({
      contract: cheeseChain,
      hre,
      role: 1,
    }),
    addLabParticipant: await addParticipant({
      contract: cheeseChain,
      hre,
      role: 2,
    }),
    removeParticipant: await removeParticipant(cheeseChain),
    removeViewParticipant: await removeParticipant(cheeseChain, 0),
    removeBasicParticipant: await removeParticipant(cheeseChain, 1),
    removeLabParticipant: await removeParticipant(cheeseChain, 2),
    changeRole: await changeParticipantRole(cheeseChain),
    changeFromBasicToLab: await changeParticipantRole(cheeseChain, 1, 2),
    changeFromLabToBasic: await changeParticipantRole(cheeseChain, 1, 2),
    changeFromViewToBasic: await changeParticipantRole(cheeseChain, 0, 1),
    changeFromBasicToView: await changeParticipantRole(cheeseChain, 1, 0),
    changeFromViewToLab: await changeParticipantRole(cheeseChain, 0, 2),
    changeFromLabToView: await changeParticipantRole(cheeseChain, 2, 0),
  };

  console.dir(results, { depth: null });
});
