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
    const DiamondCutFacet = await deploy("DiamondCutFacet", {
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
    arguments = [deployer, DiamondCutFacet.address]
    const Diamond = await deploy("sDiamond", {
        from: deployer,
        args: arguments,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })
    console.log("Diamond deployed:", Diamond.address)
    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        console.log("verifying...")
        await verify(Diamond.address, arguments)
    }
    console.log("-----------------")
    console.log("Deploying DiamondInit")
    // deploy DiamondInit
    // DiamondInit provides a function that is called when the diamond is upgraded to initialize state variables
    // Read about how the diamondCut function works here: https://eips.ethereum.org/EIPS/eip-2535#addingreplacingremoving-functions
    arguments = []
    const DiamondInit = await deploy("DiamondInit", {
        from: deployer,
        args: arguments,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })
    console.log("DiamondInit deployed:", DiamondInit.address)
    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        console.log("verifying...")
        await verify(DiamondInit.address, arguments)
    }
    console.log("-----------------")
    // deploy facets
    console.log("")
    console.log("Deploying facets")
    const FacetNames = [
        "DiamondLoupeFacet",
        "OwnershipFacet",
        "VaultFaucet",
        "ControllorFacet",
        "FollowFacet",
        "ProfileFacet",
    ]
    const cut = []
    for (const FacetName of FacetNames) {
        console.log(`Deploying ${FacetName}`)
        arguments = []
        const Facet = await deploy(FacetName, {
            from: deployer,
            args: arguments,
            log: true,
            waitConfirmations: network.config.blockConfirmations || 1,
        })
        const facet = await ethers.getContractFactory(FacetName)

        console.log(`${FacetName} deployed: ${Facet.address}`)
        if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
            console.log("verifying...")
            await verify(Facet.address, arguments)
        }
        console.log("-----------------")
        cut.push({
            facetAddress: Facet.address,
            action: FacetCutAction.Add,
            functionSelectors: getSelectors(facet),
        })
    }
    // for (var i = 0; i < cut.length; i++) {
    //     for (var a = 0; a < cut[i]["functionSelectors"].length; a++) {
    //         if (cut[i]["functionSelectors"][a] == "0x01ffc9a7") {
    //             cut[i]["functionSelectors"].splice(a, 1)
    //             console.log("delete success at index: ", i, a)
    //         }
    //     }
    // }
    // upgrade diamond with facets
    const DI = await ethers.getContractFactory("DiamondInit")
    const diamondInit = await DI.deploy()
    console.log("")
    console.log("Diamond Cut:", cut)

    const diamondCut = await ethers.getContractAt("IDiamondCut", Diamond.address)
    let tx
    let receipt
    // call to init function
    let functionCall = diamondInit.interface.encodeFunctionData("init")
    tx = await diamondCut.diamondCut(cut, DiamondInit.address, functionCall)
    console.log("Diamond cut tx: ", tx.hash)
    receipt = await tx.wait()
    if (!receipt.status) {
        throw Error(`Diamond upgrade failed: ${tx.hash}`)
    }
    console.log("Completed diamond cut")
    return Diamond.address
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
