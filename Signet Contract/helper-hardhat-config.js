const networkConfig = {
  default: {
    name: "hardhat",
    subscriptionId: "62449",
    raffleEntranceFee: "100000000000000000",
    gasLane: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc", // 30 gwei
    callbackGasLimit: "5000000", // 500,000 gas
    Interval: "30",
    mintFee: "10000000000000000", // 0.01 ETH
    vrfCoordinatorV2: "0x6168499c0cFfCaCD319c818142124B7A15E857ab",
  },
  31337: {
    name: "hardhat",
    subscriptionId: "62533",
    raffleEntranceFee: "100000000000000000",
    gasLane: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc", // 30 gwei
    callbackGasLimit: "5000000", // 500,000 gas
    Interval: "30",
    mintFee: "10000000000000000", // 0.01 ETH
    vrfCoordinatorV2: "0x6168499c0cFfCaCD319c818142124B7A15E857ab",
  },
  4: {
    name: "rinkeby",
    subscriptionId: "18737",
    gasLane: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc", // 30 gwei
    Interval: "30",
    mintFee: "10000000000000000", // 0.01 ETH
    raffleEntranceFee: "100000000000000000", // 0.1 ETH
    callbackGasLimit: "500000", // 500,000 gas
    vrfCoordinatorV2: "0x6168499c0cFfCaCD319c818142124B7A15E857ab",
    ethUsdPriceFeed: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
  },
  1: {
    name: "mainnet",
    mintFee: "10000000000000000", // 0.01 ETH
    Interval: "30",
  },
  5: {
    name: "goerli",
    subscriptionId: "522",
    mintFee: "10000000000000000", // 0.01 ETH
    gasLane: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15", // 30 gwei
    Interval: "30",
    raffleEntranceFee: "10000000000000000", // 0.01 ETH
    callbackGasLimit: "500000", // 500,000 gas
    vrfCoordinatorV2: "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D",
    ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
  },
  137: {
    name: "polygon",
    mintFee: "10000000000000000", // 0.01 ETH
    ethUsdPriceFeed: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
  },
}

const developmentChains = ["hardhat", "localhost"]
const DECIMALS = 8
const INITIAL_ANSWER = 20000000000
const frontEndContractsFile = "C:/Users/Administrator/Desktop/NFT MARKET/nft-marketplace-frontend-thegraph/contants/contractAddresses.json"
const frontEndAbiFile = "C:/Users/Administrator/Desktop/NFT MARKET/nft-marketplace-frontend-thegraph/contants/abi.json"
module.exports = {
  networkConfig,
  developmentChains,
  DECIMALS,
  INITIAL_ANSWER,
  frontEndAbiFile,
  frontEndContractsFile
}
