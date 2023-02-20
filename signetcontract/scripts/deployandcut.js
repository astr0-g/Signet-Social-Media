const { getSelectors, FacetCutAction } = require("./libraries/diamond.js")
const { network } = require("hardhat")
const { verify } = require("../utils/verify")
const { networkConfig, developmentChains, get } = require("../helper-hardhat-config")
const { getNamedAccounts, deployments } = require("hardhat")
async function deployDiamond() {
    const { deploy, log } = deployments

    const { deployer } = await getNamedAccounts()
    console.log("-----------------")
    console.log("Deploying DiamondCutFacet")
    // deploy DiamondCutFacet
    arguments = []
    const DiamondCutFacet = await deploy("Tyskos", {
        from: deployer,
        args: arguments,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })
    console.log("DiamondCutFacet deployed:", DiamondCutFacet.address)
    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        console.log("verifying...")
        await verify(DiamondCutFacet.address, arguments)
    }
    console.log("-----------------")
    console.log("Deploying Diamond")
    // deploy Diamond
    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
if (require.main === module) {
    deployDiamond()
        .then(() => process.exit(0))
        .catch((error) => {
            console.error(error)
            process.exit(1)
        })
}

exports.deployDiamond = deployDiamond
