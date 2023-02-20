import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import EC from "./Encrypted.js"
import styles from "../styles/Dashbaord.module.css"
import creatorcontract from "../constants/abi.json"
import Signetorname from "./Signetorname.js"
import Router from "next/router"
import OwnerAssetsContractAddress from "./OwnerAssetsContractAddress"
import Signetorpfpchangefromassets from "./Signetorpfpchangefromassets"
import { useToasts } from "react-toast-notifications"
import styles1 from "../styles/Dashbaord.module.css"
import stylesprofile from "../styles/profile.module.css"
import OwnerAssets from "./OwnerAssets"
import { motion, AnimatePresence } from "framer-motion"
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
    useSignTypedData,
} from "wagmi"
import { serializeTransaction } from "ethers/lib/utils"
import elements from "../img/elements"

import styled, { keyframes } from "styled-components"

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

const Section = styled.div`
    width: 100%;
    max-width: 1920px;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`

const GIF = styled.img`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`

const Overlay = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(32, 32, 32, 0.67);
`

const MidBar = styled.div`
    min-width: 24rem;
    height: 12.5rem;
    max-width: 60rem;
    display: block;
    justify-content: center;
    align-items: center;
    background-image: url(${elements.container2.src});
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgba(32, 32, 32, 0.9);
    border-radius: 12px;

    @media only screen and (min-width: 1024px) {
        margin-top: 2rem;
        min-width: 32rem;
        height: 18rem;
    }
`

const Title = styled.div`
    width: 100%;
    margin-top: 1.5rem;
    text-align: center;
    font-size: 18px;
    color: white;
    font-weight: 700;

    @media only screen and (min-width: 1024px) {
        margin-top: 2.5rem;
        font-size: 24px;
    }
`

const Subtitle = styled.div`
    width: 100%;
    margin-top: 0.25rem;
    text-align: center;
    font-size: 14px;
    color: white;
    font-weight: 400;

    @media only screen and (min-width: 1024px) {
        margin-top: 0.5rem;
        font-size: 16px;
    }
`

const PostSection = styled(motion.div)`
    width: 100%;
    max-width: 1920px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding: 0.15rem;

    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (min-width: 1216px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media only screen and (min-width: 1408px) {
        width: 84vw;
    }
    @media only screen and (min-width: 1680px) {
        width: 72vw;
    }
`

const Button = styled.button`
    display: inline-block;
    background-color: rgba(32, 32, 32, 1);
    color: white;
    outline: none;
    border: none;

    font-size: 1rem;
    padding: 0.5rem 2rem;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    border: 0.175rem solid white;
    margin-bottom: 0.125rem;

    background: linear-gradient(
        315deg,
        rgba(89, 56, 115, 1) 3%,
        rgba(77, 48, 121, 1) 38%,
        rgba(48, 40, 90, 1) 68%,
        rgba(43, 22, 68, 1) 98%
    );
    animation: ${Gradient} 36s ease infinite;
    background-size: 400% 400%;
    background-attachment: fixed;

    &:hover {
        transform: scale(1, 1);
    }

    &::after {
        content: " ";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        width: 100%;
        height: 100%;
        transition: all 0.2s ease;
    }

    &:hover::after {
        transform: translate(-50%, -50%) scale(1);
        padding: 0.3rem;
    }

    @media only screen and (min-width: 1024px) {
        margin-top: 2rem;
        font-size: 18px;
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
const Post = styled.div`
    overflow: hidden;
    background-color: rgba(32, 32, 32, 0.75);
    border-radius: 10px;
    padding: 20px;
    padding-top: 23px;
    padding-bottom: 10px;
    margin: 0.45rem;
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &:hover {
        scale: 1.025;
        transition: 0.25s;
        animation-delay: 0.15s;
    }
`
const NameContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: white;
`

const ImageContainer = styled.div`
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    justify-content: start;
    align-items: start;
`
const BottomContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    bottom: 0;
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

export default function Signetor() {
    const { address } = useAccount()
    const [register, setregister] = useState("")
    const [chooseNFT, setchooseNFT] = useState(Boolean)
    const [NFTname, setNFTname] = useState("")
    const [NFTurl, setNFTurl] = useState("")
    const [NFTcontractaddress, setNFTcontractaddress] = useState("")
    const [NFTtokenid, setNFTtokenid] = useState("")
    const [NFTcontracttype, setNFTcontracttype] = useState("")
    const [choosenamestate, setchoosenamestate] = useState(true)
    const [input, setInput] = useState("")
    const [File, setFile] = useState("")
    const [RR, setRR] = useState(false)
    const [signstate, setsignstate] = useState(true)
    const [registerstate, setregisterstate] = useState("")
    const [ready, setready] = useState(false)
    const [emessage, setemessage] = useState("")
    const [sigmessage, setsigmessage] = useState("")
    const [gene, setgene] = useState(false)
    const [uploadFile, setuploadFile] = useState("")
    const { addToast } = useToasts()
    const [chainnow, setchainnow] = useState("")
    const filePickerRef = useRef(null)
    const { chain, chains } = useNetwork()

    useEffect(() => {
        if (chain) {
            if (chain["id"]) {
                setchainnow(chain["id"])
                pulljson()
            }
        }
    }, [chain])
    function errortoaste(e) {
        addToast(e, { appearance: "error" })
    }

    function successtoaste(e) {
        addToast(e, { appearance: "success" })
    }
    const domain = {
        name: "SIGNET",
        version: "➢ ➣➢ ➣➣ ➣",
        chainId: chainnow,
        verifyingContract: creatorcontract.address,
    }

    const types = {
        signetAction: [
            { name: "from", type: "address" },
            { name: "to", type: "address" },
            { name: "notice", type: "string" },
        ],
    }

    const value = {
        from: address,
        to: creatorcontract.address,
        notice: "Please sign this message to approve your action for signet",
    }
    const {
        data: message,
        isError,
        isLoading: signisLoading,
        isSuccess: signSuccess,
        signTypedData,
    } = useSignTypedData({
        domain,
        types,
        value,
    })

    useEffect(() => {
        if (signSuccess) {
            // setemessage(EC(message, address))
            setsigmessage(message)
        }
    }, [signSuccess])
    useEffect(() => {
        if (sigmessage.length > 130) {
            submitsigmessageforuser()
        }
    }, [sigmessage])
    function submitsigmessageforuser() {
        successtoaste("successful signed!")
        setsignstate(false)
        setregisterstate(true)
    }
    function errortoast(e) {
        addToast(e, { appearance: "error" })
    }

    function successtoast() {
        addToast("Name is available!", { appearance: "success" })
    }
    let displayData
    async function pulljson() {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_APIENDPOINT}/fetch/assets/${address}/goerli/1/20/`
        )
        const responseData = await response.json()
        if (parseInt(responseData.length) >= 3) {
            setchooseNFT(true)
            const n = Math.random()
            const num = parseInt(n * 100000) % parseInt(responseData.length)
            const msg = responseData[num]
            setNFTname(msg.normalized_metadata["name"])
            setNFTurl(msg.normalized_metadata["image"])
            setNFTcontractaddress(msg.token_address)
            setNFTtokenid(msg.token_id)
            setNFTcontracttype(msg.contract_type.split("ERC")[1].toString())
        }
    }
    const { config } = usePrepareContractWrite({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        functionName: "register",
        args: [domain["name"], domain["version"], value["from"], value["notice"], sigmessage],
    })
    const { data: resultss, write: registerSignet } = useContractWrite(config)

    const { isLoading: registerSignetisLoading, isSuccess: registerSignetisSuccess } =
        useWaitForTransaction({
            hash: resultss?.hash,
        })
    useEffect(() => {
        if (registerSignetisLoading) {
            addToast("Transaction Submitted...", { appearance: "success" })
        }
    }, [registerSignetisLoading])
    useEffect(() => {
        if (registerSignetisSuccess) {
            addToast("Signetor Registered Successful!", { appearance: "success" })
            setgene(true)
        }
    }, [registerSignetisSuccess])
    function CreateSignetor() {
        registerSignet()
    }
    async function submit() {
        registerSignet()
    }
    const { data: hasPfp } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "hasPfp",
        watch: true,
        args: address,
    })
    const { data: hasName } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "hasName",
        watch: true,
        args: address,
    })
    const { data: ifRegistered } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "checkRegistered",
        watch: true,
        args: address,
    })
    useEffect(() => {
        if (ifRegistered) {
            setregister(ifRegistered)
            if (ifRegistered == true) {
                pulljson()
            }
        }
    }, [ifRegistered])
    function changeNFT() {
        setNFTurl(
            "https://aws1.discourse-cdn.com/sitepoint/original/3X/e/3/e352b26bbfa8b233050087d6cb32667da3ff809c.gif"
        )
        pulljson()
    }
    function skip1() {
        setchoosenamestate(false)
        if (chooseNFT == false) {
            Router.reload(window.location.pathname)
        }
    }
    function skip2() {
        Router.reload(window.location.pathname)
    }
    return (
        <Section>
            <TopNav>
                <button className="flex justify-center align-center item-center cursor-pointer">
                    <img src="/logoTextWhite.png" className="w-28" />
                </button>
                <TopRight>
                    <OnSignal />
                </TopRight>
            </TopNav>
            <Whitespace />
            <MidBar>
                {!register && <Title>Hi There, Welcome to Signet!</Title>}
                {!register && <Subtitle>
                    Let's create an account for you <br /> Simply clicking on the generate button:
                </Subtitle>}

                <div className="mt-3 flex flex-col justify-center items-center text-white">
                    {!register && signstate && (
                        <Button
                            disabled={!signTypedData || signisLoading}
                            onClick={() => signTypedData()}
                        >
                            {signisLoading ? "Signing..." : "Sign"}
                        </Button>
                    )}
                    {!register && registerstate && (
                        <Button
                            disabled={!registerSignet || registerSignetisLoading}
                            onClick={CreateSignetor}
                        >
                            {registerSignetisLoading ? "Register..." : "Register"}
                        </Button>
                    )}
                    {register && choosenamestate && <Signetorname />}
                    {register && choosenamestate && (
                        <Button onClick={() => skip1()}>
                            {!hasName && chooseNFT && "Skip"}
                            {hasName && chooseNFT && "Next"}
                            {!hasName && !chooseNFT && "Skip and Enter SIGNET"}
                            {hasName && !chooseNFT && "Enter SIGNET"}
                        </Button>
                    )}
                    {register && chooseNFT && !choosenamestate && (
                        <Post>
                            <div className="w-full block justify-start items-center">
                                <NameContainer>{NFTname}</NameContainer>
                                <div className="w-full grid items-center justify-center pt-2">
                                    <ImageContainer>
                                        <Image
                                            loader={() => NFTurl}
                                            src={NFTurl}
                                            height={390}
                                            width={390}
                                        />
                                    </ImageContainer>
                                </div>
                            </div>
                            <div className="w-full flex flex-col justify-between items-center mt-1">
                                <BottomContainer>
                                    <div className="w-full flex justify-between items-baseline px-1">
                                        <div className="flex justify-center align-center text-white">
                                            <span className="text-[12px] font-semibold">
                                                {NFTcontracttype && `${NFTcontracttype} `}
                                            </span>
                                        </div>
                                        <OwnerAssetsContractAddress
                                            token_address={NFTcontractaddress}
                                        />
                                    </div>
                                    <div className="w-full h-0.5 bg-slate-400 mt-1.5 mb-2" />
                                </BottomContainer>
                            </div>
                        </Post>
                    )}
                    {register && chooseNFT && !choosenamestate && (
                        <Signetorpfpchangefromassets
                            url={NFTurl}
                            collectionaddress={NFTcontractaddress}
                            token_Id={NFTtokenid}
                            typeOf={NFTcontracttype}
                            reloadpage={false}
                        />
                    )}
                    {register && chooseNFT && !choosenamestate && (
                        <Button onClick={() => changeNFT()}>
                            Dont like this NFT?
                            <br />
                            Lets change a NFT of yours
                        </Button>
                    )}
                    {register && chooseNFT && !choosenamestate && (
                        <Button onClick={() => skip2()}>
                            {hasPfp ? "Enter SIGNET" : "Skip and enter SIGNET"}
                        </Button>
                    )}
                    {chain && (
                        <p className="mt-2 text-center text-sm font-normal text-white px-6 font-thin">
                            {" "}
                            Network: connected to {chain.name}
                        </p>
                    )}
                </div>
            </MidBar>
        </Section>
    )
}
