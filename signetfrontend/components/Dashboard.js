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

import styled, { keyframes } from "styled-components"
import bg1 from "../img/bg-1.jpg"
import { motion, AnimatePresence } from "framer-motion"
import Welcome from "./Welcome"
import Starscape from "./Starscape"
import Loader1 from "./animatedelements/Loader1"

const SectionContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    overflow: hidden;
`

const Gradient = keyframes`
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 0% 0%;
    }
`

const Section = styled(motion.div)`
    width: 100vw;
    min-height: 100vh;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    /* background: linear-gradient(
        315deg,
        rgba(89, 56, 115, 1) 3%,
        rgba(77, 48, 121, 1) 38%,
        rgba(48, 40, 90, 1) 68%,
        rgba(43, 22, 68, 1) 98%
    );
    animation: ${Gradient} 28s ease infinite;
    background-size: 400% 400%;
    background-attachment: fixed; */
`

const WaveAnimation = keyframes`
    2% {
        transform: translateX(1);
    }

    25% {
        transform: translateX(-25%);
    }

    50% {
        transform: translateX(-50%);
    }

    75% {
        transform: translateX(-25%);
    }

    100% {
        transform: translateX(1);
    }
`

const TopNav = styled.nav`
    width: 100%;
    max-width: 1920px;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    backdrop-filter: blur(25px);
    position: fixed;
    top: 0;
    z-index: 49;
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);
`

const Whitespace = styled.div`
    width: 100vw;
    height: 4rem;
`

const TopRight = styled.div`
    width: 33%;
    display: flex;
    justify-content: right;
    align-items: center;
`

const OnSignal = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 0.14rem solid white;
    background-color: green;
    margin-right: 0.75rem;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function Dashboard(Refresh) {
    const [register, setregister] = useState(Boolean)
    const [firsttimeuser, setfirsttimeuser] = useState(Boolean)
    const [ownersignetoraddress, setownersignetoraddress] = useState("")
    const [ownersignetnum, setownersignetnum] = useState("")
    const [ProfileGood, setProfileGood] = useState(false)
    const filePickerRef = useRef(null)
    const { addToast } = useToasts()
    const { address } = useAccount()
    const { chains } = useNetwork()
    const { data: ifRegistered } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "checkRegistered",
        watch: true,
        args: address,
    })
    const [isLoadingPage, setIsLoadingPage] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsLoadingPage(true)
        }, 4500)
    }, [])
    // console.log(ifRegistered)
    useEffect(() => {
        if (ifRegistered == false) {
            setfirsttimeuser(true)
        }
        setregister(ifRegistered)
    }, [ifRegistered])
    return (
        <SectionContainer>
            <AnimatePresence>
                {isLoadingPage ? (
                    <Section>
                        {!address && !ifRegistered && (
                            <Container>
                                {/* <TopNav>
                                <button className="flex justify-center align-center item-center cursor-pointer">
                                    <img src="/logoTextWhite.png" className="w-28" />
                                </button>
                            </TopNav>
                            <Whitespace /> */}
                                <Welcome />
                            </Container>
                        )}
                        <Whitespace />
                        {address && firsttimeuser && <Signetor />}
                        {address && register && !firsttimeuser && <FollowedMessagelist />}
                    </Section>
                ) : (
                    <Loader1 />
                )}
            </AnimatePresence>
        </SectionContainer>
    )
}
