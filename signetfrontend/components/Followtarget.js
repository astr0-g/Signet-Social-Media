import { useRouter } from "next/router"
import styles1 from "../styles/Dashbaord.module.css"
import creatorcontract from "../constants/abi.json"
import { useToasts } from "react-toast-notifications"
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
import { useState, useEffect } from "react"

export default function Followtarget(props) {
    const { connector: activeConnector, isConnected } = useAccount()
    const router = useRouter()
    const { useraddress } = router.query
    // const { useraddress } = router.query
    const { addToast } = useToasts()
    const [disable, setDisable] = useState(false)
    const [Word, setWord] = useState("follow")
    const [stylea, setstylea] = useState(styles1.button17)
    const { config } = usePrepareContractWrite({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        functionName: "follow",
        args: props.address,
    })
    const { data: followresults, write: follow } = useContractWrite(config)
    const {
        isLoading: followisLoading,
        isError: followerror,
        isSuccess: followisSuccess,
    } = useWaitForTransaction({
        hash: followresults?.hash,
    })
    useEffect(() => {
        if (followerror) {
            addToast("Transaction error...", { appearance: "error" })
        }
    }, [followerror])
    useEffect(() => {
        if (followisLoading) {
            setWord("Processing...")
            addToast("Following...", { appearance: "success" })
        }
    }, [followisLoading])
    useEffect(() => {
        if (followisSuccess) {
            setWord()
            setstylea(styles1.button171)
            addToast("Followed successful!", { appearance: "success" })
        }
    }, [followisSuccess])
    function sendto() {
        addToast("Please connect wallet", { appearance: "error" })
    }
    return (
        <div>
            {!isConnected && (
                <button className={stylea} disable={true} onClick={sendto}>
                    <div className="btn btn-primary btn-sm">{Word}</div>
                </button>
            )}
            {isConnected && (
                <button className={stylea} disable={true} onClick={follow}>
                    <div className="btn btn-primary btn-sm">{Word}</div>
                </button>
            )}
        </div>
    )
}