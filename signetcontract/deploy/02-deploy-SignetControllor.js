const { getContractFactory } = require("@nomiclabs/hardhat-ethers/types");
const { network, ethers } = require("hardhat");
const { verify } = require("../utils/verify");
const {
  networkConfig,
  developmentChains,
  get,
} = require("../helper-hardhat-config");
module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  log("-----------------");

  const SignetFollowSys = await deployments.get("SignetFollowSys");

  const SignetProfileSys = await deployments.get("SignetProfileSys");

  const arguments = [SignetProfileSys.address, SignetFollowSys.address];
  const SignetControllor = await deploy("SignetControllor", {
    from: deployer,
    args: arguments,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });
 
  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    log("verifying...");
    await verify(SignetControllor.address, arguments);
  }
  log("-----------------");
};

module.exports.tags = ["all", "main", "frontend"];
