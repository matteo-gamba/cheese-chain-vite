const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Cheese Chain", function () {
  let cheeseChain;
  let newLotId;

  beforeEach(async () => {
    const CheeseChain = await ethers.getContractFactory("CheeseChain");
    cheeseChain = await CheeseChain.deploy();
    await cheeseChain.deployed();
  });

  it("Should increase totalLots on addLot()", async function () {
    const added = await cheeseChain.addLot();
    const events = (await added.wait()).events;
    const event = events.find((event) => event.event === "LotAdded");
    newLotId = event.args._lotId.toNumber();
    expect(await cheeseChain.totalLots()).to.equal(newLotId);
  });

  it("Should increase totalSteps and lastStep on LotNr 1", async function () {
    const added = await cheeseChain.addStep(newLotId); //add step to Lot #1
    const events = (await added.wait()).events;
    const event = events.find((event) => event.event === "StepAdded");
    const stepId = event.args._stepId.toNumber();
    expect(await cheeseChain.totalSteps()).to.equal(stepId);
    const lot = await cheeseChain.lots(newLotId);
    expect(lot.lastStep.toNumber()).to.equal(stepId);
  });

  it("Should initiate lab results on addLot()", async function () {
    await cheeseChain.addLot();
    const lot = await cheeseChain.lots(newLotId);
    expect(lot.testResult.result).to.equal(false);
    expect(lot.testResult.timestamp.toNumber()).to.equal(0);
  });

  it("Should accept positive lab result", async function () {
    const tx = await cheeseChain.addLabResult(1, true);
    const lot = await cheeseChain.lots(1);
    expect(lot.testResult.result).to.equal(true);
    expect(lot.testResult.timestamp).to.not.equal(0);
  });

  it("Should accept negative lab result", async function () {
    await cheeseChain.addLabResult(1, false);
    const lot = await cheeseChain.lots(1);
    expect(lot.testResult.result).to.equal(false);
    expect(lot.testResult.timestamp).to.not.equal(0);
  });

  // lab result after initiating lot
  // add positive lab result
  // add negative lab result
});

// tests to write

//
