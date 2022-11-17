const creatorcontract = require("./abi.json")
const ethers = require("ethers")
const FormData = require("form-data")
const fetch = require("node-fetch")
require("dotenv").config()
const api = process.env.api
const rpc = process.env.rpc
async function main() {
    const provider = new ethers.providers.WebSocketProvider(rpc)
    const CONTRACT_ADDRESS = creatorcontract.address
    const CONTRACT_ABI = creatorcontract.abi
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider)

    contract.on("Followed", (isfollowing, isfollowed) => {
        console.log(isfollowing, isfollowed)
        var formdata = new FormData()
        formdata.append("isfollowing", isfollowing)
        formdata.append("isfollowed", isfollowed)

        var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow",
        }

        fetch(`https://${api}/follow/fo/`, requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error))
    })
}

main()
