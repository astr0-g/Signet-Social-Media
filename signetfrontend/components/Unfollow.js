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

export default function Unfollow() {
    const router = useRouter()
    const { useraddress } = router.query
    const { addToast } = useToasts()
    const [disable, setDisable] = useState(false)

    const { config } = usePrepareContractWrite({
        address: creatorcontract.address,
        abi: creatorcontract.abi,
        functionName: "unfollow",
        args: useraddress,
    })
    const { write } = useContractWrite(config)
    // const { data: unfollowresults, write: unfollow } = useContractWrite(config)
    // const {
    //     isLoading: unfollowisLoading,
    //     isError: unfollowerror,
    //     isSuccess: unfollowisSuccess,
    // } = useWaitForTransaction({
    //     hash: unfollowresults?.hash,
    // })
    // useEffect(() => {
    //     if (unfollowerror) {
    //         addToast("Transaction error...", { appearance: "error" })
    //     }
    // }, [unfollowerror])
    // useEffect(() => {
    //     if (unfollowisLoading) {
    //         addToast("Following...", { appearance: "success" })
    //     }
    // }, [unfollowisLoading])
    // useEffect(() => {
    //     if (unfollowisSuccess) {
    //         setDisable(false)
    //         addToast("Message sent successful!", { appearance: "success" })
    //     }
    // }, [unfollowisSuccess])
    return (
        <form className={styles1.button17} onSubmit={write}>
            <div className="btn btn-primary btn-sm">unfollow</div>
        </form>
    )
}
