import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import creatorcontract from "../constants/abi.json"
import { useToasts } from "react-toast-notifications"
import signetorcontract from "../constants/Signetor.json"
import Signetprofile from "./SignetorProfile"
import SignetLikeandStar from "./SignetLikeandStar"
import Loading from "./Loading"
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

import { BsArrowRepeat, BsArrowClockwise, BsFullscreenExit } from "react-icons/bs"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
import { MdExpandMore } from "react-icons/md"
import { RiNotification4Line, RiSendPlaneFill } from "react-icons/ri"
import { IoIosNotificationsOutline } from "react-icons/io"
import { GrNotification } from "react-icons/gr"
import { AiOutlineNotification } from "react-icons/ai"
import { VscDebugStepBack } from "react-icons/vsc"
import { RxExit } from "react-icons/rx"
import Dropdown from "./Dropdown"
import { motion, AnimatePresence } from "framer-motion"
import { IoChevronBackSharp } from "react-icons/io5"

const Section = styled(motion.div)`
    width: 100%;
    max-width: 1920px;
    height: auto;
    margin-top: 0.5rem;
`
const Section2 = styled.div`
    width: 100%;
    max-width: 1920px;
    display: flex;
    text-align: center;
    justify-content: center;
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

const OffSignal = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 0.14rem solid white;
    background-color: red;
    margin-right: 0.75rem;
`

const OnSignal = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 0.14rem solid white;
    background-color: green;
    margin-right: 0.75rem;
`

const NotificationNumber = styled.div`
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    margin-top: -0.1rem;
    margin-left: 0.95rem;
    position: absolute;
    border-radius: 25%;
    background-color: rgba(253, 58, 45, 1);
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    font-weight: 700;
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);
`

const TopRight = styled.div`
    width: 33%;
    display: flex;
    justify-content: end;
    align-items: center;
`

const LoadSection = styled.div`
    width: 100%;
    max-width: 1920px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
`
const LoadButton = styled(motion.button)`
    background-color: rgba(32, 32, 32, 1);
    border-radius: 5px;
    padding: 0.5rem 3rem;
    margin: 0.5rem;
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);

    &:hover {
        scale: 1.08;
        transition: 0.25s;
        animation-delay: 0.15s;
    }
`

const Note = styled(motion.div)`
    width: 96vw;
    max-width: 80rem;
    height: 15vh;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    background-color: rgba(32, 32, 32, 0.75);
    color: white;
    border-radius: 10px;
    margin-top: 0.5rem;
    padding: 1rem;
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);
    overflow: hidden;
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

const NotificationSection = styled.div`
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

const PSContainer = styled.div`
    width: 100vw;
    max-width: 1920px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.15rem;
`
const NotificationContainer = styled(motion.div)`
    position: absolute;
    top: 4rem;
    width: 100%;
    max-width: 1920px;
    min-height: 100vh;
    height: auto;
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 0.15rem;
    z-index: 10;
    background-color: rgba(32, 32, 32, 1);
`
const Post = styled(motion.div)`
    overflow: hidden;
    background-color: rgba(32, 32, 32, 0.9);
    border-radius: 10px;
    padding: 20px;
    padding-top: 23px;
    padding-bottom: 12px;
    margin: 0.45rem;
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    &:hover {
        scale: 1.025;
        transition: 0.25s;
        animation-delay: 0.15s;
    }
`

const NotificationPost = styled(motion.div)`
    width: 96vw;
    overflow: hidden;
    background-color: rgba(32, 32, 32, 1);
    border-radius: 5px;
    padding: 12px;
    padding-left: 24px;
    padding-right: 24px;
    font-size: 150%;
    margin: 0.25rem;
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);
    background: linear-gradient(
        315deg,
        rgba(89, 56, 115, 1) 3%,
        rgba(77, 48, 121, 1) 38%,
        rgba(48, 40, 90, 1) 68%,
        rgba(43, 22, 68, 1) 98%
    );
    animation: ${Gradient} 28s ease infinite;
    background-size: 400% 400%;
    background-attachment: fixed;

    &:hover {
        scale: 1.025;
        transition: 0.25s;
        animation-delay: 0.15s;
    }

    @media only screen and (min-width: 768px) {
        width: auto;
    }
    @media only screen and (min-width: 1024px) {
        height: 6rem;
    }
`

const ActionMessage = styled.div`
    margin-left: 0.35rem;
    font-size: 12px;
    margin-bottom: 0.25rem;
`
const StarAction = styled.p`
    color: yellow;
    font-size: 13px;
`

const LikeAction = styled.p`
    color: rgba(253, 58, 45, 1);
    font-size: 13px;
`

const FollowAction = styled.p`
    color: green;
    font-size: 13px;
`

const TimeStamp = styled.div`
    position: relative;
    color: white;
    font-size: 10px;
    width: 100%;
    text-align: right;
`

const TextSection = styled.div`
    width: 100%;
    max-width: 1920px;
    margin-bottom: 1rem;
    font-size: 13px;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    color: white;

    @media only screen and (min-width: 768px) {
        font-size: 13px;
    }
    @media only screen and (min-width: 1024px) {
        font-size: 14px;
    }
`

const Text = styled.div`
    max-width: 88%;
    overflow: auto;
    text-align: left;
    font-weight: 400;
    cursor: pointer;
`

const IconContainer = styled.div`
    width: 5%;
    height: 5%;
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
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    bottom: 0;
`

const ButtonSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
    margin-top: 0.25rem;
    z-index: 10;
`

const NameContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 12px;
    font-weight: 500;
    margin-top: 0.25rem;
    color: white;
`

const Whitespace = styled.div`
    width: 100%;
    height: 4rem;
    position: absolute;
    top: 0;
    background-color: rgba(32, 32, 32, 1);
`

const easing = [0.6, -0.05, 0.01, 0.99]

const fadeInSide = {
    initial: {
        x: "60",
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing,
        },
    },
}

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.08,
        },
    },
}

export default function FollowedMessagelist() {
    const [startmessagefetch, setstartmessagefetch] = useState("")
    const [messagejson, setMessagejson] = useState([])
    const [messagejson2, setMessagejson2] = useState()
    const [moreloading, setmoreloading] = useState(false)
    const [loadtime, setloadtime] = useState(false)
    const [fetchnumber, setfetchnumber] = useState(8)
    const { address } = useAccount()
    const [isLoading, setLoading] = useState(false)
    const [ismoreLoading, setismoreLoading] = useState(false)
    const [messageCount, setMessageCount] = useState(0)
    //notification
    const [unreadNotification, setunreadNotification] = useState(0)
    const [isNotificiation, setIsNotificiation] = useState(false)
    const [expand, setExpand] = useState(false)
    const [postLoading, setPostLoading] = useState(false)

    function ShortenMessage(str) {
        return str.length > 150 ? str.substring(0, 148) + " ..." : str
    }

    let displayData

    function Datachange(time) {
        const timenow = Date.now() / 1000
        if (timenow - time < 60) {
            return `${parseInt(timenow - time)} seconds ago`
        }
        if (timenow - time < 3600) {
            return `${parseInt((timenow - time) / 60)} minutes ago`
        }
        if (timenow - time < 86400) {
            return `${parseInt((timenow - time) / 3600)} hours ago`
        }
        if (timenow - time > 86400) {
            const dateObject = new Date(time * 1000)
            const humanDateFormat =
                dateObject.getFullYear() +
                "/" +
                (dateObject.getMonth() + 1) +
                "/" +
                dateObject.getDate() +
                " "

            return humanDateFormat
        }
    }

    async function pullJson() {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_APIENDPOINT}/signet/followby/${address}/${
                messagejson.length + 1
            }/${messagejson.length + fetchnumber + 1}/`
        )
        const responseData = await response.json()
        setMessagejson([
            ...messagejson.slice(0, messagejson.length + fetchnumber),
            ...responseData.slice(0, fetchnumber),
        ])
        if (responseData.length == fetchnumber + 1) {
            setmoreloading(true)
            // setstartnum(startnum + 10)
            // setendnum(endnum + 10)
        } else {
            setmoreloading(false)
        }
        if (responseData.length == 0) {
            setMessagejson("")
        }
        setLoading(false)
    }

    async function Loadmore() {
        await pullJson()
        setismoreLoading(false)
    }
    useEffect(
        () => {
            if (ismoreLoading == true) {
                Loadmore()
            }
        },
        // [address],
        [ismoreLoading]
    )
    useEffect(
        () => {
            if (address && messagejson.length == 0) {
                setLoading(true)
                pullJson()
                fetchnotificationNum()
            }
        },
        // [address],
        [messagejson]
    )
    function fetchnotificationNum() {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        }

        fetch(
            `${process.env.NEXT_PUBLIC_APIENDPOINT}/notification/number/${address}`,
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => setunreadNotification(result["unreadmessagenumber"]))
            .catch((error) => console.log("error", error))
    }

    function Refresh() {
        setMessagejson([])
        fetchnotificationNum()
        setmoreloading(false)
        setLoading(true)
    }

    const opennotificiation = () => {
        setIsNotificiation(!isNotificiation)
        FetchNotification()
    }

    const closenotificiation = () => {
        setIsNotificiation(!isNotificiation)
        Refresh()
    }
    async function FetchNotification() {
        setLoading(true)
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_APIENDPOINT}/notification/read/${address}/1/100`
        )
        const responseData = await response.json()
        if (responseData.length > 10) {
            setmoreloading(true)
        }
        displayData = responseData.map(function (msg) {
            return (
                <NotificationPost
                    key={msg.messageId}
                    initial={{ y: "100", opacity: 0.5, scale: 1 }}
                    animate={{ y: 0, opacity: 1, scale: 1, transition: { delay: 0.3 } }}
                    exit={{ y: "100", opacity: 0.5, scale: 1 }}
                    transition={{ ease: "easeIn" }}
                >
                    <div className=" flex justify-start items-center align-center ml-2">
                        <div className="flex justify-left items-center text-[12px] font-semibold text-white">
                            <Signetprofile address={msg.sender} />

                            {/* <Signetprofile address={msg.reciver} /> */}
                        </div>
                        <ActionMessage>
                            {msg.typeOfNotification == "star" && (
                                <Link href={"/posts/" + msg.messageId} key={msg.messageId}>
                                    <StarAction>
                                        starred{" "}
                                        <span className="text-white text-[12px] font-normal">
                                            your "messageId {msg.messageId}"
                                        </span>
                                    </StarAction>
                                </Link>
                            )}

                            {msg.typeOfNotification == "comments" && (
                                <Link href={"/posts/" + msg.messageId} key={msg.messageId}>
                                    <StarAction>
                                        comments{" "}
                                        <span className="text-white text-[12px] font-normal">
                                            your "messageId {msg.messageId}"
                                        </span>
                                    </StarAction>
                                </Link>
                            )}
                            {msg.typeOfNotification == "like" && (
                                <Link href={"/posts/" + msg.messageId} key={msg.messageId}>
                                    <LikeAction>
                                        liked{" "}
                                        <span className="text-white text-[12px] font-normal">
                                            your "messageId {msg.messageId}"
                                        </span>
                                    </LikeAction>
                                </Link>
                            )}
                            <div className="text-white">
                                {msg.typeOfNotification == "unlike" && (
                                    <Link href={"/posts/" + msg.messageId} key={msg.messageId}>
                                        <div>unlike your "messageId {msg.messageId}"</div>
                                    </Link>
                                )}
                            </div>

                            <div className="text-green">
                                {msg.typeOfNotification == "follow" && (
                                    <FollowAction>
                                        followed{" "}
                                        <span className="text-white text-[12px] font-normal">
                                            you
                                        </span>
                                    </FollowAction>
                                )}
                            </div>
                            <div className="text-white">
                                {msg.typeOfNotification == "unfollow" && "unfollowed you"}
                            </div>
                        </ActionMessage>
                    </div>
                    <div className="w-full h-0.5 bg-slate-300 my-1.5 rounded-full" />
                    <TimeStamp>{Datachange(parseInt(msg.time))}</TimeStamp>
                </NotificationPost>
            )
        })
        setMessagejson2(displayData)
        setLoading(false)
    }
    return (
        <Section exit={{ opacity: 0 }} initial="initial" animate="animate">
            {address ? (
                <TopNav>
                    <button
                        className="flex justify-left align-center item-center cursor-pointer"
                        onClick={Refresh}
                    >
                        <img src="/logoTextWhite.png" className="w-28" />
                    </button>
                    <TopRight>
                        <OnSignal />
                        {isNotificiation ? (
                            <>
                                <button onClick={() => closenotificiation()}>
                                    <RxExit color="white" size={30} />
                                </button>
                            </>
                        ) : (
                            <>
                                <button onClick={() => opennotificiation()} className="mr-2">
                                    {unreadNotification > 0 && (
                                        <NotificationNumber>
                                            {unreadNotification}
                                        </NotificationNumber>
                                    )}
                                    <AiOutlineNotification
                                        color="white"
                                        size={30}
                                        stoke={"0.5px"}
                                    />
                                </button>
                                <button onClick={() => Refresh()}>
                                    <BsArrowClockwise color="white" size={36} />
                                </button>
                            </>
                        )}
                    </TopRight>
                </TopNav>
            ) : (
                <TopNav>
                    <button
                        className="flex justify-center align-center item-center cursor-pointer"
                        onClick={Refresh}
                    >
                        <img src="/logoTextWhite.png" className="w-28" />
                    </button>
                    <TopRight>
                        <OffSignal />
                        <button onClick={() => Refresh()}>
                            <BsArrowClockwise color="white" size={36} />
                        </button>
                    </TopRight>
                </TopNav>
            )}
            <div>
                <Section2>
                    <AnimatePresence>
                        {!isLoading && messagejson == "" && (
                            <div className="w-full flex justify-center">
                                <Note
                                    key="box"
                                    initial={{ y: "100", opacity: 0, scale: 1 }}
                                    animate={{ y: 0, opacity: 1, scale: 1 }}
                                    exit={{
                                        x: "-100%",
                                        opacity: 0,
                                        scale: 1,
                                        transition: { ease: "easeOut" },
                                    }}
                                    transition={{ ease: "easeIn" }}
                                >
                                    Looks like you haven't followed anyone or posted contents yet,
                                    let's do it now!
                                </Note>
                            </div>
                        )}
                    </AnimatePresence>
                </Section2>
                {isNotificiation ? (
                    <>
                        <Whitespace />
                        <NotificationContainer
                            initial={{ opacity: 0, scale: 1 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                transition: { duration: 0.4, ease: "easeIn" },
                            }}
                            exit={{
                                opacity: 0,
                                scale: 1,
                                transition: { duration: 0.4, ease: "easeOut" },
                            }}
                        >
                            <NotificationSection>
                                {messagejson2}
                                <div className="w-[100%] h-[20vh]" />
                            </NotificationSection>
                        </NotificationContainer>
                    </>
                ) : (
                    <>
                        {isLoading && (
                            <motion.div
                                key="box"
                                initial={{ x: 0, opacity: 0, scale: 0.5 }}
                                animate={{ x: 0, opacity: 1, scale: 1 }}
                                exit={{
                                    x: "-100%",
                                    opacity: 0,
                                    scale: 0.5,
                                    transition: { ease: "easeOut" },
                                }}
                                transition={{ ease: "easeIn" }}
                                className="flex justify-center"
                            >
                                <Loading />
                            </motion.div>
                        )}

                        {!isLoading && messagejson != "" && (
                            <PSContainer>
                                <PostSection
                                    key="box"
                                    initial={{ y: "100", opacity: 0, scale: 1 }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    exit={{
                                        x: "-100%",
                                        opacity: 0,
                                        scale: 1,
                                        transition: { ease: "easeOut", delay: 0.3 },
                                    }}
                                    transition={{ ease: "easeIn", delay: 0.3 }}
                                >
                                    {messagejson.map(function (msg) {
                                        // console.log(`liked ${msg.liked}`)
                                        // console.log(`stared ${msg.stared}`)
                                        return (
                                            <Post key={msg.messageId}>
                                                <Link
                                                    href={"/posts/" + msg.messageId}
                                                    key={msg.messageId}
                                                >
                                                    <div className="w-full block justify-start items-center">
                                                        {msg.tokenimageURL.length > 20 && (
                                                            <ImageContainer>
                                                                <Image
                                                                    loader={() =>
                                                                        msg.tokenimageURL
                                                                    }
                                                                    src={msg.tokenimageURL}
                                                                    height={390}
                                                                    width={390}
                                                                    // objectFit="cover"
                                                                />
                                                            </ImageContainer>
                                                        )}
                                                        <TextSection>
                                                            <IconContainer>
                                                                <FaQuoteLeft size={8} />
                                                            </IconContainer>
                                                            <Text>
                                                                &nbsp;{" "}
                                                                {expand
                                                                    ? msg.tokendescription
                                                                    : ShortenMessage(
                                                                          msg.tokendescription
                                                                      )}{" "}
                                                                &nbsp;
                                                            </Text>
                                                            <IconContainer>
                                                                <FaQuoteRight size={8} />
                                                            </IconContainer>
                                                        </TextSection>
                                                    </div>
                                                </Link>
                                                <div className="w-full flex flex-col justify-between">
                                                    <div className="w-full min-w-[350px] h-[0.5rem]" />
                                                    <div className="w-full">
                                                        <ButtonSection>
                                                            <SignetLikeandStar
                                                                SignetId={msg.messageId}
                                                                SignetIdOwner={msg.messageSender}
                                                                commentNumber={msg.commentsNumber}
                                                            />
                                                        </ButtonSection>

                                                        <div className="w-full h-0.5 bg-slate-400" />
                                                        <BottomContainer>
                                                            <NameContainer>
                                                                <Signetprofile
                                                                    address={msg.messageSender}
                                                                />
                                                            </NameContainer>
                                                            <div className="italic text-[10px] text-white">
                                                                {Datachange(parseInt(msg.time))}
                                                            </div>
                                                        </BottomContainer>
                                                    </div>
                                                </div>
                                                {/* <div>#{msg.messageId}</div> */}
                                                {/* <div className="italic text-sm">Owned by {msg.messageSender}</div> */}
                                            </Post>
                                        )
                                    })}
                                </PostSection>
                            </PSContainer>
                        )}

                        {!ismoreLoading && moreloading && (
                            <LoadSection>
                                <LoadButton
                                    key="box"
                                    initial={{ y: "100", opacity: 0, scale: 1 }}
                                    animate={{ y: 0, opacity: 1, scale: 1 }}
                                    exit={{
                                        x: "-100%",
                                        opacity: 0,
                                        scale: 1,
                                        transition: { ease: "easeOut" },
                                    }}
                                    transition={{ ease: "easeIn" }}
                                    onClick={() => setismoreLoading(true)}
                                >
                                    <MdExpandMore size={64} fill="white" />
                                </LoadButton>
                            </LoadSection>
                        )}

                        {ismoreLoading && (
                            <motion.div
                                key="box"
                                initial={{ x: 0, opacity: 0, scale: 0.5 }}
                                animate={{ x: 0, opacity: 1, scale: 1 }}
                                exit={{
                                    x: "-100%",
                                    opacity: 0,
                                    scale: 0.5,
                                    transition: { ease: "easeOut" },
                                }}
                                transition={{ ease: "easeIn" }}
                                className="flex justify-center"
                            >
                                <Loading />
                            </motion.div>
                        )}
                    </>
                )}

                <div className="w-full h-[6rem]" />
            </div>
        </Section>
    )
}
