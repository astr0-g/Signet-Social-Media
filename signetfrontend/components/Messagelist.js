import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import SignetLikeandStar from "./SignetLikeandStar"
import creatorcontract from "../constants/abi.json"
import { useToasts } from "react-toast-notifications"
import signetorcontract from "../constants/Signetor.json"
import Loading from "./Loading"
import { useRouter } from "next/router"
import Signetprofile from "./SignetorProfile"
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

export default function Messagelist() {
    const router = useRouter()
    const { useraddress } = router.query
    const [ownersignetoraddress, setownersignetoraddress] = useState("")
    const [startmessagefetch, setstartmessagefetch] = useState("")
    const [messagejson, setMessagejson] = useState()
    const [MoreMessagejson, setMoreMessagejson] = useState()
    const [moreloading, setmoreloading] = useState(false)
    const [loadtime, setloadtime] = useState(false)
    const { address } = useAccount()
    const [isLoading, setLoading] = useState(false)
    const [ismoreLoading, setismoreLoading] = useState(false)

    // console.log(address)

    const { data: ownercontractaddress } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "getOwnerContractForSignetor",
        watch: true,
        args: address,
    })
    let displayData

    function Datachange(time) {
        const timenow = Date.now() / 1000
        if (timenow - time < 60) {
            return `${parseInt(timenow - time)} seconds ago`
        }
        if (timenow - time < 3600) {
            return `${parseInt((timenow - time) / 60)} minutes ago`
        }
        if (timenow - time < 86400) {
            return `${parseInt((timenow - time) / 3600)} hours ago`
        }
        if (timenow - time > 86400) {
            const dateObject = new Date(time * 1000)
            const humanDateFormat =
                dateObject.getFullYear() +
                "/" +
                (dateObject.getMonth() + 1) +
                "/" +
                dateObject.getDate() +
                " " +
                dateObject.getHours() +
                ":" +
                dateObject.getMinutes() +
                ":" +
                dateObject.getSeconds()
            console.log(humanDateFormat)
            return humanDateFormat
        }
    }

    async function pulljson() {
        const response = await fetch(`https://api.signet.ink/signet/read/${useraddress}`)
        const responseData = await response.json()
        // console.log(responseData.tokenURI)
        if (responseData.length > 10) {
            setmoreloading(true)
        }
        displayData = responseData.slice(0, 10).map(function (msg) {
            return (
                <div
                    key={msg.messageId}
                    className="p-2 rounded-sm border-2 border-inherit border-r border-l"
                >
                    <Signetprofile address={msg.messageSender} />
                    <div className="flex items-center justify-between pt-2.5 flex-no-wrap">
                        {/* <div>#{msg.messageId}</div> */}
                        {/* <div className="italic text-sm">Owned by {msg.messageSender}</div> */}

                        {msg.tokenimageURL != "null" && (
                            <Image
                                className="px-4 py-2 m-2"
                                loader={() => msg.tokenimageURL}
                                src={msg.tokenimageURL}
                                height="100px"
                                width="100px"
                            />
                        )}

                        <div className="px-4 py-2 m-2 italic text-sm">{msg.tokendescription}</div>
                        <div className="px-4 py-2 m-2 italic text-sm">
                            {Datachange(parseInt(msg.time))}
                        </div>
                    </div>
                    <SignetLikeandStar
                        SignetId={msg.messageId}
                        SignetIdOwner={msg.messageSender}
                    />
                </div>
            )
        })
        setMessagejson(displayData)
        setLoading(false)
    }

    async function Loadmore() {
        setismoreLoading(true)
        const response = await fetch(`https://api.signet.ink/signet/read/${useraddress}`)
        const responseData = await response.json()
        // console.log(responseData.tokenURI)

        displayData = responseData.slice(10, responseData.length).map(function (msg) {
            return (
                <div
                    key={msg.messageId}
                    className="p-2 rounded-sm border-2 border-inherit border-r border-l"
                >
                    <Signetprofile address={msg.messageSender} />
                    <div className="flex flex-no-wrap">
                        {/* <div>#{msg.messageId}</div> */}
                        {/* <div className="italic text-sm">Owned by {msg.messageSender}</div> */}

                        {msg.tokenimageURL != "null" && (
                            <Image
                                className="px-4 py-2 m-2"
                                loader={() => msg.tokenimageURL}
                                src={msg.tokenimageURL}
                                height="100"
                                width="100"
                            />
                        )}

                        <div className="px-4 py-2 m-2 italic text-sm">{msg.tokendescription}</div>
                        <div className="px-4 py-2 m-2 italic text-sm">
                            {Datachange(parseInt(msg.time))}
                        </div>
                    </div>
                    <SignetLikeandStar
                        SignetId={msg.messageId}
                        SignetIdOwner={msg.messageSender}
                    />
                </div>
            )
        })
        setMoreMessagejson(displayData)
        setLoading(false)
        setismoreLoading(false)
    }

    useEffect(() => {
        if (useraddress) {
            setLoading(true)
            pulljson()
        }
    }, [])

    function Refresh() {
        setMoreMessagejson("")
        setmoreloading(false)
        setLoading(true)
        pulljson()
    }
    useEffect(() => {
        if (ownercontractaddress) {
            setownersignetoraddress(ownercontractaddress)
        }
    }, [ownercontractaddress])
    return (
        <div className="justify-between items-center">
            <div className="border-l border-r bg-slate-100 border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow">
                <div className="flex py-2 px-3 top-0 z-50 border-b border-gray-200 items-center ">
                    <div className="text-lg sm:text-xl font-bold">signets</div>

                    <button onClick={() => Refresh()} className="text-lg sm:text-xl font-bold">
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                            />
                        </svg>
                    </button>
                </div>
                {messagejson == "" && (
                    <div className="text-sm flex flex-col justify-center items-center">
                        Looks like you don't have any signet yet, genearte and post one!
                    </div>
                )}
                {isLoading && <Loading />}
                {!isLoading && <div>{messagejson}</div>}
                {!ismoreLoading && !MoreMessagejson && moreloading && (
                    <div className="text-sm flex flex-col justify-center items-center">
                        <button onClick={() => Loadmore()}>Load more</button>
                    </div>
                )}
                {MoreMessagejson && <div>{MoreMessagejson}</div>}
                {ismoreLoading && <Loading />}
                <div> </div>
            </div>
        </div>
    )
}
