import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import styles from "../styles/Dashbaord.module.css"
import creatorcontract from "../constants/abi.json"
import Signetorpfp from "./Signetorpfp.js"
import { useToasts } from "react-toast-notifications"
import styles1 from "../styles/Dashbaord.module.css"
import Router from "next/router"
import Link from "next/link"
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
export default function SignetStarButton(props) {
    const { address } = useAccount()
    const [price, setprice] = useState("0.1")
    const [ready, setReady] = useState(false)
    const { addToast } = useToasts()
    const { config } = usePrepareContractWrite({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        functionName: "star",
        overrides: {
            from: address,
            value: price,
        },
        args: [props.SignetIdOwner, props.SignetId],
    })
    const { data: starresults, write: star } = useContractWrite(config)
    const {
        isLoading: starisLoading,
        isError: starerror,
        isSuccess: starisSuccess,
    } = useWaitForTransaction({
        hash: starresults?.hash,
    })

    useEffect(() => {
        if (starerror) {
            addToast("Transaction error...", { appearance: "error" })
        }
    }, [starerror])
    useEffect(() => {
        if (starisLoading) {
            addToast("Staring...", { appearance: "success" })
        }
    }, [starisLoading])
    useEffect(() => {
        if (starisSuccess) {
            addToast("stard successful!", { appearance: "success" })
        }
    }, [starisSuccess])
    function sendto() {
        addToast("Please connect wallet", { appearance: "error" })
    }
    function sendto1() {
        addToast("You can't star yourself", { appearance: "error" })
    }

    function getprice() {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        }

        fetch(process.env.NEXT_PUBLIC_etherscanapi, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                // the smart contract I did is > 10$, so at here I put 11$ to be safe, and also signet is taking 5% of the payment as commission.
                setprice((11000000000000000000 / result["result"]["ethusd"]).toString())
                addToast(
                    `Chainlink Pricefeed: you are about to pay ${
                        11 / result["result"]["ethusd"]
                    } ethers in terms of $10 to star the user, click star again to confirm!`,
                    { appearance: "success" }
                )
            })
            .catch((error) => console.log("error", error))
    }
    function getpriceforstar() {
        getprice()
        setReady(true)
    }
    function contractstar() {
        star()
    }
    return (
        <>
            {!ready && (
                <button onClick={getpriceforstar}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="yellow"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="yellow"
                        className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                        />
                    </svg>
                </button>
            )}
            {ready && (
                <button onClick={contractstar}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                        />
                    </svg>
                </button>
            )}
        </>
    )
}
