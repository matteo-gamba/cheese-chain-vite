import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-gas-reporter";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import * as dotenv from "dotenv";

dotenv.config();

// TASKS
import "./tasks/deploy";
import "./tasks/cost";
import "./tasks/accounts";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      gasPrice: "auto",
    },
    ropsten: {
      url: process.env.ROPSTEN_NODE,
      accounts: [process.env.DEV_PRIVATE_KEY],
    },
    polygonMumbai: {
      url: "https://speedy-nodes-nyc.moralis.io/b3ce02fbe3b3433611cd9ac3/polygon/mumbai",
      accounts: [process.env.DEV_PRIVATE_KEY],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "../frontend/src/artifacts",
  },
  mocha: {
    timeout: 40000,
  },
  etherscan: {
    apiKey: {
      ropsten: process.env.ETHERSCAN_API_KEY,
      polygonMumbai: process.env.POLYGON_API_KEY,
    },
  },
  gasReporter: {
    currency: "CHF",
    token: "ETH",
    gasPriceApi:
      "https://api.etherscan.io/api?module=proxy&action=eth_gasPrice",
    coinmarketcap: "511a97b9-9b9f-4120-abf5-0bb524e24429",
  },
  typechain: {
    outDir: "./types",
    target: "ethers-v5",
    alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
    externalArtifacts: ["externalArtifacts/*.json"], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
    dontOverrideCompile: false, // defaults to false
  },
};
