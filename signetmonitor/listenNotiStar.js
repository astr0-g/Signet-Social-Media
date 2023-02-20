const creatorcontract = require("./abi.json")
const ethers = require("ethers")
const FormData = require("form-data")
const fetch = require("node-fetch")
require("dotenv").config()

async function main() {
    const provider = new ethers.providers.WebSocketProvider(
        "wss://goerli.infura.io/ws/v3/be819d15039f41ca9e45081e212d1c9a"
    )
    const CONTRACT_ADDRESS = creatorcontract.address
    const CONTRACT_ABI = creatorcontract.abi
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider)
    contract.on("Stared", (messageSender, signetId, signetoraddress, time) => {
        console.log(messageSender, signetId, signetoraddress, time)
        var formdata = new FormData()
        formdata.append("typeOfNotification", "star")
        formdata.append("messageId", signetId.toString())
        formdata.append("userRecived", signetoraddress)
        formdata.append("userSend", messageSender)
        formdata.append("time", time.toString())

        var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow",
        }

        fetch(`${process.env.api_endpoint}/notification/post/`, requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error))

        var formdata1 = new FormData()
        formdata1.append("messageId", signetId.toString())
        formdata1.append("liked", "0")
        formdata1.append("stared", "1")

        var requestOptions1 = {
            method: "POST",
            body: formdata1,
            redirect: "follow",
        }

        fetch(`${process.env.api_endpoint}/signet/likestar/`, requestOptions1)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error))
    })
}

main()
