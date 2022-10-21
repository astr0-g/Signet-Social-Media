import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import creatorcontract from "../constants/abi.json"
import { useToasts } from "react-toast-notifications"
import signetorcontract from "../constants/Signetor.json"
import Loading from "./Loading"
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
import Followtrigger from "./Targettrigger"
export default function FollowerList() {
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

    let displayData

    async function pulljson() {
        const response = await fetch(`https://api.signet.ink/follow/follower/${useraddress}`)
        const responseData = await response.json()
        console.log(responseData)
        // if (responseData.length > 10) {
        //     setmoreloading(true)
        // }
        displayData = responseData.map(function (msg) {
            return (
                <div
                    key={msg.follower}
                    className="p-2 rounded-sm border-2 border-inherit border-r border-l"
                >
                    <div className="flex items-center justify-between pt-2.5 flex-no-wrap">
                        {/* <div>#{msg.messageId}</div> */}
                        {/* <div className="italic text-sm">Owned by {msg.messageSender}</div> */}
                        <Link href={"/" + msg.follower}>
                            <button className="px-4 py-2 m-2 italic text-sm">
                                {" "}
                                {`${
                                    msg.follower.slice(0, 6) +
                                    "..." +
                                    msg.follower.slice(
                                        msg.follower.length - 6,
                                        msg.follower.length
                                    )
                                }   `}
                            </button>
                        </Link>
                        <Followtrigger address={msg.follower} />
                    </div>
                </div>
            )
        })
        setMessagejson(displayData)
        setLoading(false)
    }

    // async function Loadmore() {
    //     setismoreLoading(true)
    //     const response = await fetch(`https://api.signet.ink/signet/all/`)
    //     const responseData = await response.json()

    //     displayData = responseData.slice(10, responseData.length).map(function (msg) {
    //         return (
    //             <div
    //                 key={msg.messageId}
    //                 className="p-2 rounded-sm border-2 border-inherit border-r border-l"
    //             >
    //                 <div className="flex items-center justify-between pt-2.5 flex-no-wrap">
    //                     {/* <div>#{msg.messageId}</div> */}
    //                     {/* <div className="italic text-sm">Owned by {msg.messageSender}</div> */}

    //                     {msg.tokenimageURL != "null" && (
    //                         <Image
    //                             className="px-4 py-2 m-2"
    //                             loader={() => msg.tokenimageURL}
    //                             src={msg.tokenimageURL}
    //                             height="100"
    //                             width="100"
    //                         />
    //                     )}

    //                     <div className="px-4 py-2 m-2 italic text-sm">{msg.tokendescription}</div>
    //                     <Link href={"/" + msg.messageSender}>
    //                         <button className="px-4 py-2 m-2 italic text-sm right-0">
    //                             from{" "}
    //                             {`${
    //                                 msg.messageSender.slice(0, 4) +
    //                                 msg.messageSender.slice(
    //                                     msg.messageSender.length - 3,
    //                                     msg.messageSender.length
    //                                 )
    //                             }   `}
    //                             {"--"}
    //                             {Datachange(parseInt(msg.time))}
    //                         </button>
    //                     </Link>
    //                 </div>
    //             </div>
    //         )
    //     })
    //     setMoreMessagejson(displayData)
    //     setLoading(false)
    //     setismoreLoading(false)
    // }

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

    return (
        <div className="justify-between items-center">
            <div className="border-l border-r bg-slate-100 border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow">
                <div className="flex py-2 px-3 top-0 z-50 border-b border-gray-200 items-center ">
                    <button onClick={() => Refresh()} className="text-lg sm:text-xl font-bold">
                        <div className="text-lg sm:text-xl font-bold">followers</div>
                    </button>
                </div>
                {messagejson == "" && (
                    <div className="text-sm flex flex-col justify-center items-center">
                        User don't have any followers!
                    </div>
                )}
                {isLoading && <Loading />}
                {!isLoading && <div>{messagejson}</div>}
                {/* {!ismoreLoading && !MoreMessagejson && moreloading && (
                    <div className="text-sm flex flex-col justify-center items-center">
                        <button onClick={() => Loadmore()}>Load more</button>
                    </div>
                )}
                {MoreMessagejson && <div>{MoreMessagejson}</div>}
                {ismoreLoading && <Loading />} */}
                <div> </div>
            </div>
        </div>
    )
}
