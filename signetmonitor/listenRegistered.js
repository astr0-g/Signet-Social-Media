const creatorcontract = require("./abi.json")
const ethers = require("ethers")
const FormData = require("form-data")
const fetch = require("node-fetch")
const En = require("./Encrypted")
require("dotenv").config()

async function main() {
    const provider = new ethers.providers.WebSocketProvider(
        "wss://goerli.infura.io/ws/v3/be819d15039f41ca9e45081e212d1c9a"
    )
    const CONTRACT_ADDRESS = creatorcontract.address
    const CONTRACT_ABI = creatorcontract.abi
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider)
    contract.on("UserRegistered", (userAddress, userId, userSig, timeRegistered) => {
        console.log(userAddress, userId, userSig, timeRegistered)
        var record = En.EC(userSig, userAddress)
        console.log(record)
        var formdata = new FormData()
        formdata.append("userId", userId.toString())
        formdata.append("userAddress", userAddress)
        formdata.append("userSignatrue", userSig)
        formdata.append("userRecord", record)
        formdata.append("userRegisteredtime", timeRegistered.toString())

        var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow",
        }

        fetch(`${process.env.api_endpoint}/suf/register/`, requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error))
    })
}

main()
