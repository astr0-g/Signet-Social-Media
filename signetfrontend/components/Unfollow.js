import { useRouter } from "next/router"
import styles from "../styles/Home.module.css"
import styles1 from "../styles/Dashbaord.module.css"
import creatorcontract from "../constants/abi.json"
import { useToasts } from "react-toast-notifications"
import signetorcontract from "../constants/Signetor.json"
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

export default function Ununfollow() {
    const router = useRouter()
    const { useraddress } = router.query
    const { addToast } = useToasts()
    const [disable, setDisable] = useState(false)

    const { config } = usePrepareContractWrite({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        functionName: "unfollow",
        args: useraddress,
    })
    const { data: unfollowresults, write: unfollow } = useContractWrite(config)
    const {
        isLoading: unfollowisLoading,
        isError: unfollowerror,
        isSuccess: unfollowisSuccess,
    } = useWaitForTransaction({
        hash: unfollowresults?.hash,
    })
    useEffect(() => {
        if (unfollowerror) {
            addToast("Transaction error...", { appearance: "error" })
        }
    }, [unfollowerror])
    useEffect(() => {
        if (unfollowisLoading) {
            addToast("unfollowing...", { appearance: "success" })
        }
    }, [unfollowisLoading])
    useEffect(() => {
        if (unfollowisSuccess) {
            // setDisable(false)
            addToast("unfollowed successful!", { appearance: "success" })
        }
    }, [unfollowisSuccess])
    return (
        <div>
            <button className={styles1.button17} onClick={unfollow}>
                <div className="btn btn-primary btn-sm">unfollow </div>
            </button>
        </div>
    )
}
