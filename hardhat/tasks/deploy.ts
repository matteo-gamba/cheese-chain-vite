import "@nomiclabs/hardhat-waffle";
import { task } from "hardhat/config";

task("deploy", "Deploy CheeseChain contract").setAction(async (_, hre) => {
  const CheeseChain = await hre.ethers.getContractFactory("CheeseChainV2");
  const cheeseChain = await CheeseChain.deploy();

  await cheeseChain.deployed();
  const receipt = await cheeseChain.deployTransaction.wait();
  console.log(receipt.gasUsed);

  console.log("CheeseChain deployed to:", cheeseChain.address);
});
