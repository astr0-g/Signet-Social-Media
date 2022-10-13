import Image from "next/image"
import { EmojiHappyIcon, SparklesIcon, PhotographIcon, XIcon } from "@heroicons/react/outline"
import { useState, useEffect, useRef } from "react"
import styles from "../styles/Dashbaord.module.css"
import creatorcontract from "../constants/abi.json"
import { useToasts } from "react-toast-notifications"
import signetorcontract from "../constants/Signetor.json"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import Signetor from "./Signetor"
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
export default function Dashboard() {
    const [input, setInput] = useState("")
    const [results, setResults] = useState(0)
    const [selectedFile, setSelectedFile] = useState(null)
    const [CIDnumber, setCIDnumber] = useState()
    const [numberowned, setnumberowned] = useState(0)
    const [loading, setLoading] = useState(false)
    const [newimg, setnewimg] = useState("")
    const [newpost, setnewpost] = useState("")
    const [tokenURL, setTokenURL] = useState("")
    const [ownersignetoraddress, setownersignetoraddress] = useState("")
    const filePickerRef = useRef(null)
    const { addToast } = useToasts()
    const { address } = useAccount()
    const { chains } = useNetwork()
    const { data: number } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "getOwnerNumContractOfSignetor",
        watch: true,
        args: address,
    })

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
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result)
        }
    }

    function verificationPicFile(file) {
        var fileSize = 0
        var fileMaxSize = 2048 //1M
        var filePath = file.value
        if (filePath) {
            fileSize = file.files[0].size
            var size = fileSize / 1024
            if (size > fileMaxSize) {
                addToast("File size could not exceed 2MB!", { appearance: "warning" })
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
    const sendPost = async () => {
        if (loading) return
        setLoading(true)
        var formdata = new FormData()

        formdata.append("imageurl", selectedFile)
        formdata.append("description", input)
        var requestOptions = {
            statusCode: 200,
            method: "POST",
            body: formdata,
            redirect: "follow",
            // mode: "no-cors",
        }

        await fetch("https://www.kulaingxd.com/tokenurl/", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                setCIDnumber(result)
            })
            .catch((error) => console.log("error", error))
        controllorsendmessage()

        setLoading(false)
    }
    const { config } = usePrepareContractWrite({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        functionName: "sendmessage",
        args: [ownersignetoraddress, tokenURL],
    })
    const { data: resultss, write: controllorsendmessage } = useContractWrite(config)
    const { isLoading: CreateSignetorisLoading, isSuccess: CreateSignetorisSuccess } =
        useWaitForTransaction({
            hash: resultss?.hash,
        })
    useEffect(() => {
        if (CreateSignetorisLoading) {
            addToast("Transaction Submitted...", { appearance: "success" })
        }
    }, [CreateSignetorisLoading])
    useEffect(() => {
        if (CreateSignetorisSuccess) {
            setSelectedFile(null)
            setInput("")
            addToast("Message sent successful!", { appearance: "success" })
        }
    }, [CreateSignetorisSuccess])

    useEffect(() => {
        if (CIDnumber) {
            setTokenURL(`https://www.kulaingxd.com/tokenurl/read/${CIDnumber}`)
            var requestOptions = {
                method: "GET",

                redirect: "follow",
            }

            fetch(`https://www.kulaingxd.com/tokenurl/read/${CIDnumber}`, requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    setnewimg("")
                    if (result.image != "") {
                        setnewimg(result.image)
                    }

                    setnewpost(result.description)
                })
                .catch((error) => console.log("error", error))
        }
    }, [CIDnumber])

    useEffect(() => {
        if (ownercontractaddress) {
            setownersignetoraddress(ownercontractaddress.toString())
        }
    }, [ownercontractaddress])

    useEffect(() => {
        if (number) {
            setnumberowned(number.toString())
        }
    }, [number])

    return (
        <div>
            <div>
                {numberowned == 0 ? (
                    <Signetor />
                ) : (
                    <div className="h-[100vh] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
                        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
                        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">
                                    Home
                                </h2>
                        </div>
                        <div className="flex  border-b border-gray-200 p-3 space-x-3">
                            <ConnectButton
                                accountStatus="avatar"
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
                                        placeholder="What's happening?"
                                        value={input}
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
                                    className={`${loading && "animate-pulse"}`}
                                />
                            </div>
                        )}
                        <div className="flex items-center justify-between pt-2.5">
                            {!loading && (
                                <>
                                    <div className="flex">
                                        <div
                                            className=""
                                            onClick={() => filePickerRef.current.click()}
                                        >
                                            <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-black hover:bg-sky-100" />
                                            <input
                                                type="file"
                                                hidden
                                                ref={filePickerRef}
                                                onChange={addImageToPost}
                                            />
                                        </div>
                                    </div>
                                    <button
                                        onClick={sendPost}
                                        disabled={!input.trim()}
                                        className="bg-black text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
                                    >
                                        Post
                                    </button>
                                    {/* <button
                                        onClick={controllorsendmessage}
                                        className="bg-black text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
                                    >
                                        Post
                                    </button> */}
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
            {/* <div>
                {newpost && (
                    <div className="relative">
                        <div>{newpost}</div>
                        {newimg != "null" && (
                            <img
                                src={newimg}
                                height="100px"
                                width="100px"
                                className={`${loading && "animate-pulse"}`}
                            />
                        )}
                    </div>
                )}
            </div> */}
        </div>
    )
}
