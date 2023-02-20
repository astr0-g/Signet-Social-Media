const creatorcontract = require("./abi1.json")
const ethers = require("ethers")
const FormData = require("form-data")
const fetch = require("node-fetch")
require("dotenv").config()

const rpc = process.env.rpc
async function main() {
    const provider = new ethers.providers.WebSocketProvider(
        "wss://goerli.infura.io/ws/v3/be819d15039f41ca9e45081e212d1c9a"
    )
    const CONTRACT_ADDRESS = creatorcontract.address
    const CONTRACT_ABI = creatorcontract.abi
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider)
    contract.on("Transfer", (from, to, tokenId) => {
        console.log(from, to, tokenId.toString())
        // var formdata = new FormData()
        // formdata.append("messageSender", messageSender)
        // formdata.append("signetoraddress", signetoraddress)
        // formdata.append("messageId", signetId.toString())
        // formdata.append("tokenURI", tokenURI_)
        // formdata.append("time", time.toString())

        // var requestOptions = {
        //     method: "POST",
        //     body: formdata,
        //     redirect: "follow",
        // }

        // fetch(`https://${api}/signet/`, requestOptions)
        //     .then((response) => response.text())
        //     .then((result) => console.log(result))
        //     .catch((error) => console.log("error", error))
    })
}

main()
