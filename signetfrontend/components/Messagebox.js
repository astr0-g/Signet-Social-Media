import Image from "next/image"
import { EmojiHappyIcon, SparklesIcon, PhotographIcon, XIcon } from "@heroicons/react/outline"
import { useState, useEffect, useRef } from "react"
import styles from "../styles/Dashbaord.module.css"
import creatorcontract from "../constants/abi.json"
import { useToasts } from "react-toast-notifications"
import signetorcontract from "../constants/Signetor.json"
import { ConnectButton } from "@rainbow-me/rainbowkit"
// Import the NFTStorage class and File constructor from the 'nft.storage' package
import { NFTStorage, File } from "nft.storage"
import {
    usePrepareContractWrite,
    useAccount,
    useConnect,
    useContract,
    useContractRead,
    useContractWrite,
    useNetwork,
    useWaitForTransaction,
} from "wagmi"
const nonepic = new File([], "thismeansthissignetdoesnothavephoto.png", { type: "image/png" })

export default function Messagebox() {
    const NFT_STORAGE_KEY = process.env.NEXT_PUBLIC_NFT_STORAGE_KEY
    const [input, setInput] = useState("")
    const [File, setFile] = useState("")
    const [results, setResults] = useState(0)
    const [selectedFile, setSelectedFile] = useState(null)
    const [show, setShow] = useState(false)
    const [CIDnumber, setCIDnumber] = useState()
    const [numberowned, setnumberowned] = useState(0)
    const [loading, setLoading] = useState(false)
    const [ready, setReady] = useState(false)
    const [post, setpost] = useState(false)
    const [ipfs, setipfs] = useState("")
    const [tokenURL, setTokenURL] = useState("")
    const [ownersignetoraddress, setownersignetoraddress] = useState("")
    const [ownersignetnum, setownersignetnum] = useState("")
    const [Inumber, setInumber] = useState("")
    const [explorestutes, setexplorestutes] = useState(false)
    const [disable, setDisable] = useState(false)
    const filePickerRef = useRef(null)
    const { addToast } = useToasts()
    const { address } = useAccount()
    const { chains } = useNetwork()
    const { data: ownercontractaddress } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "getOwnerContractForSignetor",
        watch: true,
        args: address,
    })
    const addImageToPost = (e) => {
        const reader = new FileReader()

        if (e.target.files[0] && verificationPicFile(e.target) != false) {
            reader.readAsDataURL(e.target.files[0])
            addToast("Picture Uploaded Successfully", { appearance: "success" })
            setFile(e.target.files[0])
            setReady(false)
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result)
        }
    }
    function verificationPicFile(file) {
        var fileSize = 0
        var fileMaxSize = 20480 //1M
        var filePath = file.value
        if (filePath) {
            fileSize = file.files[0].size
            var size = fileSize / 1024
            if (size > fileMaxSize) {
                addToast("File size could not exceed 20MB!", { appearance: "warning" })
                file.value = ""
                return false
            } else if (size <= 0) {
                addToast("File size could not be 0!", { appearance: "warning" })
                file.value = ""
                return false
            }
        } else {
            return false
        }
    }
    const { config } = usePrepareContractWrite({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        functionName: "sendmessage",
        args: [ownersignetoraddress, tokenURL],
    })
    const { data: resultss, write: controllorsendmessage } = useContractWrite(config)
    const {
        isLoading: CreateSignetorisLoading,
        isError: sendmessageerror,
        isSuccess: CreateSignetorisSuccess,
    } = useWaitForTransaction({
        hash: resultss?.hash,
    })
    useEffect(() => {
        if (sendmessageerror) {
            addToast("Transaction error...", { appearance: "error" })
            setReady(false)
        }
    }, [CreateSignetorisLoading])
    useEffect(() => {
        if (CreateSignetorisLoading) {
            addToast("Transaction Submitted...", { appearance: "success" })
            setpost(true)
        }
    }, [CreateSignetorisLoading])
    useEffect(() => {
        if (CreateSignetorisSuccess) {
            setpost(false)
            setSelectedFile(null)
            setInput("")
            setReady(false)
            setShow(true)
            setDisable(false)
            addToast("Message sent successful!", { appearance: "success" })
        }
    }, [CreateSignetorisSuccess])
    async function storeNFT(imagefile, name, description) {
        // load the file from disk
        const image = imagefile

        // create a new NFTStorage client using our API key
        const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })

        // call client.store, passing in the image & metadata
        return nftstorage.store({
            image,
            name,
            description,
        })
    }
    const sendPost = async () => {
        if (loading) return
        addToast("Filecoin: Uploading signet to IPFS...", { appearance: "success" })
        setLoading(true)
        var formdata = new FormData()
        if (selectedFile) {
            formdata.append("image", File)
            const result = await storeNFT(File, "signet", input)
            console.log(`Filecoin x nft.storage ipfs storage CID result: ${result["url"]}`)
            setipfs(result["url"])
            formdata.append("imageurl", result["url"])
        } else {
            formdata.append("image", "")
            const result = await storeNFT(nonepic, "signet", input)
            console.log(`Filecoin x nft.storage ipfs storage CID result: ${result["url"]}`)
            setipfs(result["url"])
            formdata.append("imageurl", result["url"])
        }

        formdata.append("description", input)

        var requestOptions = {
            statusCode: 200,
            method: "POST",
            body: formdata,
            redirect: "follow",
            // mode: "no-cors",
        }

        await fetch("https://api.signet.ink/tokenurl/", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                setCIDnumber(result)
            })
            .catch((error) => console.log("error", error))
        setLoading(false)
        setReady(true)
        addToast("Filecoin: Uploading to IPFS successful, Feel free to sign your signet!", {
            appearance: "success",
        })
    }

    const contractreact = async () => {
        setDisable(true)
        controllorsendmessage()
    }

    useEffect(() => {
        if (CIDnumber) {
            setTokenURL(ipfs)
        }
    }, [CIDnumber])
    useEffect(() => {
        if (ownercontractaddress) {
            setownersignetoraddress(ownercontractaddress)
        }
    }, [ownercontractaddress])
    return (
        <div>
            <div className="flex  border-b border-gray-200 p-3 space-x-3">
                <ConnectButton
                    accountStatus="address"
                    showBalance={{
                        smallScreen: false,
                        largeScreen: false,
                    }}
                    chainStatus="none"
                />
                <div className="w-full divide-y divide-gray-200">
                    <div className="">
                        <textarea
                            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
                            rows="2"
                            placeholder="What's popping?"
                            value={input}
                            disabled={ready}
                            onChange={(e) => setInput(e.target.value)}
                        ></textarea>
                    </div>
                </div>
            </div>
            {selectedFile && (
                <div className="relative">
                    <XIcon
                        onClick={() => setSelectedFile(null)}
                        className="border h-7 text-black absolute cursor-pointer shadow-md border-white m-1 rounded-full"
                    />
                    <img
                        src={selectedFile}
                        height="300px"
                        width="300px"
                        className={`${loading && "animate-pulse"}`}
                    />
                </div>
            )}
            <div className="flex items-center justify-between pt-2.5">
                {!loading && (
                    <>
                        <div className="flex">
                            <div className="" onClick={() => filePickerRef.current.click()}>
                                <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-black hover:bg-sky-100" />
                                <input
                                    type="file"
                                    hidden
                                    ref={filePickerRef}
                                    onChange={addImageToPost}
                                />
                            </div>
                        </div>
                        {!ready && !post && (
                            <button
                                onClick={sendPost}
                                disabled={!input.trim()}
                                className="bg-black text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
                            >
                                Generate Signet
                            </button>
                        )}
                        {ready && !CreateSignetorisLoading && (
                            <button
                                onClick={contractreact}
                                disabled={!input.trim()}
                                className="bg-black text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
                            >
                                {"Sign"}
                            </button>
                        )}
                        {ready && CreateSignetorisLoading && (
                            <button
                                onClick={contractreact}
                                disabled={(!input.trim(), disable)}
                                className="bg-black text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
                            >
                                {"Posting..."}
                            </button>
                        )}
                    </>
                )}
            </div>

            {!loading && ready && !CreateSignetorisLoading && (
                <div className="flex items-center justify-between pt-5">
                    <button
                        onClick={() => setReady(false)}
                        disabled={!input.trim()}
                        className="bg-black text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50 absolute right-0"
                    >
                        Cancel
                    </button>
                </div>
            )}
            <div className="flex items-center justify-between pt-6"></div>
        </div>
    )
}
