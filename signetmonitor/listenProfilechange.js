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
    contract.on("ProfileUpdated", (messageSender, _name, _pfp) => {
        console.log(1)
        console.log(messageSender, _name, _pfp)
        var signatrue =
            "0xe903a3fdea22063f9ee2e1a0226afedd285bdc6d4d8d7d9834fbf468a51f87826b49125c9d778db1ef79bb46ef719353404e3ff1a29a31d4b8dea7cb9e5302991b"
        var record = En.EC(signatrue, messageSender)
        var formdata = new FormData()
        formdata.append("userId", 0)
        formdata.append("userAddress", messageSender)
        formdata.append("userSignatrue", signatrue)
        formdata.append("userRecord", record)
        if (_name.toString().length) {
            formdata.append("userName", _name.toString())
        }
        if (_pfp.toString().length) {
            formdata.append("userPfp", _pfp.toString())
        }

        var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow",
        }

        fetch(`${process.env.api_endpoint}/suf/profileupdate/`, requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error))
    })
}

main()
