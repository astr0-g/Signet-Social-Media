import Image from "next/image"
import { ethers } from "ethers"
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
    useProvider,
    useWaitForTransaction,
} from "wagmi"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Signetprofile(props) {
    const [pfp, setpfp] = useState(
        "https://route.signet.ink/render/token/73ltkPWvskh5jCazATxLoPcwkUmXbfREAb0ehInh6SfBD1FPpBHL0gLXR7jIYQsjICy.webp"
    )
    const [Name, setName] = useState("")

    // const [nameinfo, setnameinfo] = useState()
    // const [pfpinfo, setpfpinfo] = useState()
    // async function read() {
    //     const provider = new ethers.providers.WebSocketProvider(
    //         "wss://eth-goerli.g.alchemy.com/v2/LwCfn4XJFulYMDjkN-29D4vZOwlkiuVR"
    //     )
    //     const CONTRACT_ADDRESS = creatorcontract.address
    //     const CONTRACT_ABI = creatorcontract.abi
    //     const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider)
    //     const checkName = await contract.checkName(props.address)
    //     const checkPfp = await contract.checkPfp(props.address)
    //     setnameinfo(checkName.toString())
    //     setpfpinfo(checkPfp.toString())
    // }
    // useEffect(() => {
    //     if (props.address.length > 40) {
    //         read()
    //     }
    // }, [props.address])

    const { data: nameinfo } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "checkName",
        watch: true,
        args: props.address,
    })
    const { data: pfpinfo } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "checkPfp",
        watch: true,
        args: props.address,
    })

    useEffect(() => {
        if (
            nameinfo ==
            "You seeing this message is becuase this address don't have any name created!"
        ) {
            setName(
                ` ${
                    props.address.slice(0, 3) +
                    "..." +
                    props.address.slice(props.address.length - 3, props.address.length)
                }`
            )
        } else {
            setName(nameinfo)
        }
    }, [nameinfo])
    useEffect(() => {
        if (
            pfpinfo ==
            "You seeing this message is becuase this address don't have any pfp created!"
        ) {
            setpfp(
                "https://route.signet.ink/render/token/73ltkPWvskh5jCazATxLoPcwkUmXbfREAb0ehInh6SfBD1FPpBHL0gLXR7jIYQsjICy.webp"
            )
        } else {
            setpfp(pfpinfo)
        }
    }, [pfpinfo])

    return (
        <div>
            <Link href={"/" + props.address}>
                <button>
                    <Container>
                        <img src={pfp} className="rounded-full mr-1" width="30" height="30" />
                        <div className="py-1 ml-1">{Name}</div>
                    </Container>
                </button>
            </Link>
        </div>
    )
}
