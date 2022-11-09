import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import styles from "../styles/Dashbaord.module.css"
import creatorcontract from "../constants/abi.json"
import Signetorpfp from "./Signetorpfp.js"
import { useToasts } from "react-toast-notifications"
import styles1 from "../styles/Dashbaord.module.css"
import Router from "next/router"
import Link from "next/link"
import SignetLikeButton from "./SignetLikeButton"
import SignetunlikeButton from "./SignetUnlikeButton"
import SignetStarButton from "./SignetStarButton"
import stylesprofile from "../styles/profile.module.css"
import { EmojiHappyIcon, SparklesIcon, PhotographIcon, XIcon } from "@heroicons/react/outline"
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
export default function SignetLikeandStar(props) {
    const { address } = useAccount()
    const [likenum, setlikenum] = useState("")
    const [Starednum, setStarednum] = useState("")
    const [liked, setLiked] = useState("")
    const { addToast } = useToasts()
    const { data: checkliked } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "checkliked",
        watch: true,
        args: [props.SignetId, address],
    })
    const { data: LikeNumdata } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "getLikedNum",
        watch: true,
        args: props.SignetId,
    })
    const { data: StaredNumdata } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "getStaredNum",
        watch: true,
        args: props.SignetId,
    })
    useEffect(() => {
        if (LikeNumdata) {
            setlikenum(LikeNumdata.toString())
        }
    }, [LikeNumdata])
    useEffect(() => {
        if (StaredNumdata) {
            setStarednum(StaredNumdata.toString())
        }
    }, [StaredNumdata])
    useEffect(() => {
        if (checkliked) {
            setLiked(checkliked)
        }
    }, [checkliked])
    function sendto1() {
        addToast("Sorry! You can't like yourself", { appearance: "error" })
    }
    function sendto2() {
        addToast("Sorry! You can't star yourself", { appearance: "error" })
    }
    const InfoSignetId = props.SignetId
    const InfoSignetIdOwner = props.SignetIdOwner
    return (
        <div>
            <div className="rounded-sm flex flex-row justify-center space-x-3 ">
                {liked == true && InfoSignetIdOwner != address && (
                    <SignetunlikeButton
                        SignetId={InfoSignetId}
                        SignetIdOwner={InfoSignetIdOwner}
                    />
                )}
                {liked == false && InfoSignetIdOwner != address && (
                    <SignetLikeButton SignetId={InfoSignetId} SignetIdOwner={InfoSignetIdOwner} />
                )}
                {InfoSignetIdOwner == address && (
                    <button onClick={sendto1}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                            />
                        </svg>
                    </button>
                )}

                <div>{likenum}</div>
                {InfoSignetIdOwner != address && (
                    <SignetStarButton SignetId={InfoSignetId} SignetIdOwner={InfoSignetIdOwner} />
                )}
                {InfoSignetIdOwner == address && (
                    <button onClick={sendto2}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                            />
                        </svg>
                    </button>
                )}
                <div>{Starednum}</div>
            </div>
        </div>
    )
}
