const creatorcontract = require("./abi.json")
const ethers = require("ethers")
const FormData = require("form-data")
const fetch = require("node-fetch")
require("dotenv").config()

const rpc = process.env.rpc
async function main() {
    const provider = new ethers.providers.WebSocketProvider(rpc)
    const CONTRACT_ADDRESS = creatorcontract.address
    const CONTRACT_ABI = creatorcontract.abi
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider)

    contract.on("UnFollowed", (isunfollowing, isunfollowed) => {
        console.log(isunfollowing, isunfollowed)
        var formdata = new FormData()
        formdata.append("isfollowing", isunfollowing)
        formdata.append("isfollowed", isunfollowed)

        var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow",
        }

        fetch(`https://${api}/follow/unfo/`, requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error))
    })
}

main()
