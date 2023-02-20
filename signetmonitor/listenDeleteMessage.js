const creatorcontract = require("./abi.json")
const ethers = require("ethers")
const FormData = require("form-data")
const fetch = require("node-fetch")
require("dotenv").config()

async function main() {
    const provider = new ethers.providers.WebSocketProvider(
        "wss://goerli.infura.io/ws/v3/507a9993786546beacc0822640171c78"
    )
    const CONTRACT_ADDRESS = creatorcontract.address
    const CONTRACT_ABI = creatorcontract.abi
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider)
    contract.on("MessageDeleted", (messageSender, signetId, time) => {
        console.log(messageSender, signetId.toString(), time.toString())
        var formdata = new FormData()
        formdata.append("messageSender", messageSender)
        formdata.append("messageId", signetId.toString())
        formdata.append("tokenURI", "")
        formdata.append("time", time.toString())
        formdata.append("liked", 0)
        formdata.append("stared", 0)
        formdata.append("views", 0)
        var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow",
        }

        fetch(`${process.env.api_endpoint}/signet/delete/`, requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error))
    })
}

main()
