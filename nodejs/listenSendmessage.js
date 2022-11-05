const creatorcontract = require("./abi.json")
const ethers = require("ethers")
const FormData = require("form-data")
const fetch = require("node-fetch")
require("dotenv").config()

// ENTER A VALID RPC URL!

//ENTER SMART CONTRACT ADDRESS BELOW. see abi.js if you want to modify the abi

// async function getEvents() {
//   let latest_block = await web3.eth.getBlockNumber();
//   let historical_block = latest_block - 10000; // you can also change the value to 'latest' if you have a upgraded rpc
//   console.log("latest: ", latest_block, "historical block: ", historical_block);
//   const events = await contract.getPastEvents(
//     "NewMessageSent", // change if your looking for a different event
//     { fromBlock: historical_block, toBlock: "latest" }
//   );
//   await getTransferDetails(events);
// }

// async function getTransferDetails(data_events) {
//   for (i = 0; i < data_events.length; i++) {
//     let from = data_events[i]["returnValues"]["from"];
//     let to = data_events[i]["returnValues"]["to"];
//     let amount = data_events[i]["returnValues"]["amount"];
//     // let converted_amount = web3.utils.toWei("10", amount);

//     //checking for transcations with above 32 eth as an example
//     console.log(data_events);
//   }
// }

// getEvents(CONTRACT_ABI, CONTRACT_ADDRESS);
async function main() {
    const provider = new ethers.providers.WebSocketProvider(
        "wss://goerli.infura.io/ws/v3/be819d15039f41ca9e45081e212d1c9a"
    )
    const CONTRACT_ADDRESS = creatorcontract.address
    const CONTRACT_ABI = creatorcontract.abi
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider)
    contract.on(
        "NewMessageSent",
        (messageSender, signetoraddress, messageId, signetId, tokenURI_, time) => {
            // let info = {
            //   from: from,
            //   to: to,
            //   //   value: ethers.utils.formatUints(value, 6),
            //   data: event,
            // };
            console.log(
                messageSender,
                signetoraddress,
                signetId.toString(),
                tokenURI_,
                time.toString()
            )
            var formdata = new FormData()
            formdata.append("messageSender", messageSender)
            formdata.append("signetoraddress", signetoraddress)
            formdata.append("messageId", signetId.toString())
            formdata.append("tokenURI", tokenURI_)
            formdata.append("time", time.toString())

            var requestOptions = {
                method: "POST",
                body: formdata,
                redirect: "follow",
            }

            fetch("https://api.signet.ink/signet/", requestOptions)
                .then((response) => response.text())
                .then((result) => console.log(result))
                .catch((error) => console.log("error", error))
        }
    )
}

main()
