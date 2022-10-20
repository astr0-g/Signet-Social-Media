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

export default function Follow() {
    const router = useRouter()
    const { useraddress } = router.query
    const { addToast } = useToasts()
    const [disable, setDisable] = useState(false)
    const { config } = usePrepareContractWrite({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        functionName: "follow",
        args: useraddress,
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
            addToast("Following...", { appearance: "success" })
        }
    }, [followisLoading])
    useEffect(() => {
        if (followisSuccess) {
            // setDisable(false)
            addToast("Followed successful!", { appearance: "success" })
        }
    }, [followisSuccess])
    return (
        <div>
            <button className={styles1.button17} onClick={follow}>
                <div className="btn btn-primary btn-sm">Follow </div>
            </button>
        </div>
    )
}
