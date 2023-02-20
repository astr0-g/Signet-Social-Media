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
import { MdExpandMore, MdMode, MdPersonAddAlt1 } from "react-icons/md"
import styled from "styled-components"
import { RiUserAddFill } from "react-icons/ri";

const Icon = styled.div`
`

export default function Unfollow() {
    const router = useRouter()
    const { useraddress } = router.query
    const account = useAccount()
    const { connector: activeConnector, isConnected } = useAccount()

    const { addToast } = useToasts()
    const [disable, setDisable] = useState(false)
    const [unfollowtrue, setunfollowtrue] = useState(false)
    const [Word, setWord] = useState()
    const [stylea, setstylea] = useState(styles1.button171)
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
            setWord("unfollowed")
            setstylea(styles1.button17)
            setunfollowtrue(true)
            addToast("unfollowed successful!", { appearance: "success" })
        }
    }, [unfollowisSuccess])
    function sendto() {
        addToast("Please connect wallet", { appearance: "error" })
    }
    function sendtoast() {
        addToast("You have already unfollowed!", { appearance: "error" })
    }
    function contractunfollow() {
        unfollow()
    }
    return (
        <>
            {!unfollowtrue && isConnected && (
                <Icon disable={true} onClick={contractunfollow}>
                    <RiUserAddFill color="green" size={18} />
                </Icon>
            )}
            {unfollowtrue && isConnected && (
                <Icon disable={true} onClick={sendtoast}>
                    <RiUserAddFill color="white" size={16} />
                </Icon>
            )}
        </>
    )
}
