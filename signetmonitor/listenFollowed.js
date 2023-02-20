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

    contract.on("Followed", (isfollowing, isfollowed, time) => {
        console.log(isfollowing, isfollowed)
        var formdata = new FormData()
        formdata.append("isfollowing", isfollowing)
        formdata.append("isfollowed", isfollowed)

        var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow",
        }

        fetch(`${process.env.api_endpoint}/follow/fo/`, requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error))

        var formdata1 = new FormData()
        formdata1.append("typeOfNotification", "follow")
        formdata1.append("messageId", "0")
        formdata1.append("userRecived", isfollowed)
        formdata1.append("userSend", isfollowing)
        formdata1.append("time", time.toString())

        var requestOptions1 = {
            method: "POST",
            body: formdata1,
            redirect: "follow",
        }

        fetch(`${process.env.api_endpoint}/notification/post/`, requestOptions1)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error))
    })
}

main()
