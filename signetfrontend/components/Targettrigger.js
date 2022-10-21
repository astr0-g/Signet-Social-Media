import { useRouter } from "next/router"
import styles from "../styles/Home.module.css"
import styles1 from "../styles/Dashbaord.module.css"
import creatorcontract from "../constants/abi.json"
import { useToasts } from "react-toast-notifications"
import Followtarget from "./Followtarget"
import Unfollowtarget from "./Unfollowtarget"
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

export default function Followtrigger(props) {
    const router = useRouter()
    const { useraddress } = router.query
    const { address } = useAccount()
    const { connector: activeConnector, isConnected } = useAccount()

    const [unfollowtrue, setunfollowtrue] = useState(false)
    const [Word, setWord] = useState()
    const [stylea, setstylea] = useState(styles1.button171)
    const [followstatue, setfollowstatue] = useState(false)
    const [disable, setDisable] = useState(false)
    const { addToast } = useToasts()
    const { data: followstatues } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "checkfollowed",
        watch: true,
        args: [props.address, address],
    })
    useEffect(() => {
        if (followstatues) {
            setfollowstatue(followstatues)
        }
    }, [followstatues])
    return (
        <div>
            {!followstatue && props.address && <Followtarget address={props.address} />}
            {followstatue && props.address && <Unfollowtarget address={props.address} />}
        </div>
    )
}
