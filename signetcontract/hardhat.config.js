require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const GORRLI_RPC_URL = process.env.GOERLI_RPC_URL
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COINMARKET_KEY = process.env.COINMARKET_KEY
const ARB_RPC_URL = process.env.ARB_RPC_URL
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})
module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.7" },
      { version: "0.6.6" },
      { version: "0.8.4" },
      { version: "0.8.0" },
      { version: "0.8.8" },
      { version: "0.8.13" },
      { version: "0.8.14" },
    ],
  },
  networks: {
    polygon: {
      url: "https://polygon-mainnet.infura.io/v3/be819d15039f41ca9e45081e212d1c9a", //
      accounts: [RINKEBY_PRIVATE_KEY],
      chainId: 137,
    },
    arb: {
      chainId: 42161,
      url: ARB_RPC_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
      blockConfirmations: 6,
    },
    hardhat: {
      // // If you want to do some forking, uncomment this
      // forking: {
      //   url: MAINNET_RPC_URL
      // }
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
      chainId: 4,
      blockConfirmations: 6,
    },
    mumbai: {
      url: MUMBAI_RPC_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
      chainId: 80001,
      blockConfirmations: 6,
    },
    goerli: {
      url: GORRLI_RPC_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
      chainId: 5,
      blockConfirmations: 6,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    player: {
      default: 1,
    },
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-reports.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKET_KEY,
    coin: "ETH",
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  mocha: {
    timeout: 2000000,
  },
}
