import Image from "next/image"
import { EmojiHappyIcon, SparklesIcon, PhotographIcon, XIcon } from "@heroicons/react/outline"
import { useState, useEffect, useRef } from "react"
import styles from "../styles/Dashbaord.module.css"
import creatorcontract from "../constants/abi.json"
import { useToasts } from "react-toast-notifications"
import signetorcontract from "../constants/Signetor.json"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import Signetor from "./Signetor"
import FollowedMessagelist from "./FollowedMessagelist"
import AllMessagelist from "./AllMessagelist"
import Messagebox from "./Messagebox"
import Link from "next/link"
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
    const [show, setShow] = useState(false)
    const [CIDnumber, setCIDnumber] = useState()
    const [numberowned, setnumberowned] = useState(0)
    const [loading, setLoading] = useState(false)
    const [ready, setReady] = useState(false)
    const [post, setpost] = useState(false)
    const [newimg, setnewimg] = useState("")
    const [newpost, setnewpost] = useState("")
    const [tokenURL, setTokenURL] = useState("")
    const [ownersignetoraddress, setownersignetoraddress] = useState("")
    const [ownersignetnum, setownersignetnum] = useState("")
    const [Inumber, setInumber] = useState("")
    const [disable, setDisable] = useState(false)
    const [Profile, setProfile] = useState("")
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

    const { data: NumTokenOwned } = useContractRead({
        addressOrName: ownersignetoraddress,
        contractInterface: signetorcontract.abi,
        chains: 5,
        functionName: "balanceOf",
        watch: true,
        args: address,
    })

    useEffect(() => {
        if (ownercontractaddress) {
            setownersignetoraddress(ownercontractaddress)
        }
    }, [ownercontractaddress])

    useEffect(() => {
        if (number) {
            setnumberowned(number.toString())
        }
    }, [number])

    useEffect(() => {
        if (NumTokenOwned) {
            setownersignetnum(NumTokenOwned.toString())
        }
    }, [NumTokenOwned])

    // useEffect(() => {
    //     if (address) {
    //         const route = `/api.signet.ink${address}`
    //         setProfile(route)
    //     }
    // }, [])
    //max-w-xl//
    return (
        <div>
            <div>
                {numberowned == 0 ? (
                    <Signetor />
                ) : (
                    <div className="justify-between items-center">
                        <div className="flex flex-col justify-center items-center border-l border-r bg-slate-100 border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow">
                            {" "}
                            <div className="flex space-x-5 py-2 px-3 top-0 z-50 ">
                                <button className={styles.button85}>Home</button>

                                <Link href={`/explore`}>
                                    <button className={styles.button85}>Explore</button>
                                </Link>

                                <Link href={`/${address}`}>
                                    <button className={styles.button85}>Profile</button>
                                </Link>
                            </div>
                        </div>
                        <Messagebox />
                    </div>
                )}
            </div>
            <div>{numberowned != 0 && <FollowedMessagelist />}</div>
        </div>
    )
}
