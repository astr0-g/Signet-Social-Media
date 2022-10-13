import Image from "next/image"
import { EmojiHappyIcon, SparklesIcon, PhotographIcon, XIcon } from "@heroicons/react/outline"
import { useState, useEffect, useRef } from "react"
import styles from "../styles/Dashbaord.module.css"
import creatorcontract from "../constants/abi.json"
import { ConnectButton } from "@rainbow-me/rainbowkit"
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
    const filePickerRef = useRef(null)
    const { address } = useAccount()
    const { chains } = useNetwork()
    const { data: number } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "getOwnerNumContractOfCopyRight",
        watch: true,
        args: address,
    })

    const addImageToPost = (e) => {
        const reader = new FileReader()
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent) => {
            console.log(readerEvent.target.result)
            setSelectedFile(readerEvent.target.result)
        }
    }

    const sendPost = async () => {
        if (loading) return
        setLoading(true)
        var formdata = new FormData()
        formdata.append("imageurl", selectedFile)
        formdata.append("description", input)
        var requestOptions = {
            // headers: { "Content-Type": "application/json" },
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000/",
                "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": " Origin, Content-Type, X-Auth-Token",
            },
            method: "POST",
            body: formdata,
            redirect: "follow",
            // mode: "no-cors",
        }

        fetch("https://www.kulaingxd.com/tokenurl/", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                setCIDnumber(result)
                console.log(CIDnumber)
            })
            .catch((error) => console.log("error", error))

        setLoading(false)
    }

    if (selectedFile) {
        // await uploadString(imageRef, selectedFile, "data_url").then(async () => {
        //   const downloadURL = await getDownloadURL(imageRef);
        //   await updateDoc(doc(db, "posts", docRef.id), {
        //     image: downloadURL,
    }
    useEffect(() => {
        if (number) {
            setnumberowned(number.toString())
        }
    }, [number])

    const { config } = usePrepareContractWrite({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        functionName: "controllorCreateCopyRightCollection",
        args: [results, results],
    })
    const { data, isLoading, isSuccess, write } = useContractWrite(config)

    return (
        <div>
            {numberowned == 0 ? (
                <div className="h-[100vh] bg-black grid items-center justify-items-center text-center opacity-100 relative">
                    <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-white">
                        Looks like you don't have a message box contract yet, lets create one!
                    </h1>
                    <input
                        type="text"
                        placeholder="Your Signet Name"
                        onChange={(event) => {
                            setResults(event.target.value)
                        }}
                    />
                    <div className="flex flex-col justify-center items-center">
                        <button className={styles.button1} onClick={() => write()}>
                            Generate
                        </button>
                    </div>
                </div>
            ) : (
                <div className="h-[100vh] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
                    <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
                        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
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
                            <img src={selectedFile} className={`${loading && "animate-pulse"}`} />
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
                                    onClick={() => sendPost()}
                                    disabled={!input.trim()}
                                    className="bg-black text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
                                >
                                    Tweet
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
