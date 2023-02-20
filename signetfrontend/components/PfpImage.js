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
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Signetprofile(props) {
    const { address } = useAccount()
    const [pfp, setpfp] = useState(
        "https://route.signet.ink/render/token/73ltkPWvskh5jCazATxLoPcwkUmXbfREAb0ehInh6SfBD1FPpBHL0gLXR7jIYQsjICy.webp"
    )
    const [Name, setName] = useState("")
    const [selectedFile, setSelectedFile] = useState(null)
    const [ready, setready] = useState(false)
    const [gene, setgene] = useState(false)
    const [uploadFile, setuploadFile] = useState("")
    const { addToast } = useToasts()
    const filePickerRef = useRef(null)
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
        <Link href={"/" + props.address}>
            <img src={pfp} className="rounded-full" />
        </Link>
    )
}
