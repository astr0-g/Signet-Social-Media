import Link from "next/link"
import Image from "next/image"
import Signetprofile from "./SignetorProfile"
import { useState, useEffect, useRef } from "react"
import creatorcontract from "../constants/abi.json"
import { useToasts } from "react-toast-notifications"
import SignetLikeandStar from "./SignetLikeandStar"
import signetorcontract from "../constants/Signetor.json"
import Loading from "./Loading"
import { useBetween } from "use-between"
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
import { BsArrowRepeat, BsArrowClockwise } from "react-icons/bs"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
import { MdExpandMore } from "react-icons/md"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import Filter from "./Filter"

const Section = styled.div`
    width: 100vw;
    max-width: 1920px;
    display: grid;
    text-align: center;
    justify-content: center;
    overflow: hidden;
`
const Section2 = styled.div`
    width: 100vw;
    display: flex;
    text-align: center;
    justify-content: center;
`

const TopNav = styled.nav`
    width: 100vw;
    max-width: 1920px;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
    backdrop-filter: blur(25px);
    position: fixed;
    top: 0;
    z-index: 100;
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);
`

const Content = styled.div`
    max-width: 1920px;
`

const PSContainer = styled.div`
    width: 100%;
    max-width: 1920px;
    display: flex;
    justify-content: center;
    align-items: center;
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

const TopRight = styled.div`
    width: 33%;
    display: flex;
    justify-content: right;
    align-items: center;
`

const PostSection = styled(motion.div)`
    width: 90%;
    max-width: 1920px;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
    padding: 0.15rem;
    @media only screen and (min-width: 389px) {
        width: 94%;
    }
    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media only screen and (min-width: 1216px) {
        grid-template-columns: repeat(5, 1fr);
    }
    @media only screen and (min-width: 1408px) {
        width: 84vw;
    }
    @media only screen and (min-width: 1680px) {
        width: 72vw;
    }
`

const Post = styled.div`
    overflow: hidden;
    background-color: rgba(32, 32, 32, 1);
    border-radius: 10px;
    padding: 12px;
    margin: 0.25rem;
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

    @media only screen and (min-width: 389px) {
        margin: 0.35rem;
    }
`

const LoadSection = styled.div`
    width: 100vw;
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

const TextSection = styled.div`
    width: 100%;
    max-width: 1920px;
    margin-bottom: 1rem;
    font-size: 11px;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    color: white;

    @media only screen and (min-width: 768px) {
        font-size: 12px;
    }
    @media only screen and (min-width: 1024px) {
        font-size: 13px;
    }
`

const Text = styled.div`
    max-width: 90%;
    overflow: auto;
    text-align: center;
    font-weight: 300;
    cursor: pointer;
`

const IconContainer = styled.div`
    width: 0.35rem;
    height: 0.35rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImageContainer = styled.div`
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    justify-content: start;
    align-items: start;
    margin-top: 0.75rem;
`

const BottomContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
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
`

const NameContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 10px;
    font-weight: 500;
    color: white;
`

const useShareableState = () => {
    const [viewtype, setviewtype] = useState("all")
    const [timeago, settime] = useState("100")
    return {
        viewtype,
        setviewtype,
        timeago,
        settime,
    }
}
export default function AllMessagelist() {
    const { viewtype, setviewtype, timeago, settime } = useBetween(useShareableState)
    const [fetchnumber, setfetchnumber] = useState(10)
    const [startmessagefetch, setstartmessagefetch] = useState("")
    const [messagejson, setMessagejson] = useState([])
    const [MoreMessagejson, setMoreMessagejson] = useState()
    const [moreloading, setmoreloading] = useState(false)
    const [loadtime, setloadtime] = useState(false)
    const { address } = useAccount()
    const [isLoading, setLoading] = useState(false)
    const [ismoreLoading, setismoreLoading] = useState(false)
    const [expand, setExpand] = useState()
    const [postLoading, setPostLoading] = useState(false)

    function ShortenMessage(str) {
        return str.length > 99 ? str.substring(0, 96) + " ..." : str
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
                dateObject.getDate()
            return humanDateFormat
        }
    }

    async function pulljson(e) {
        const response = await fetch(e)
        const responseData = await response.json()
        setMessagejson([
            ...messagejson.slice(0, messagejson.length + fetchnumber),
            ...responseData.slice(0, fetchnumber),
        ])
        if (responseData.length == fetchnumber + 1) {
            setmoreloading(true)
        } else {
            setmoreloading(false)
        }
        if (responseData.length == 0) {
            setMessagejson("")
        }
        setLoading(false)
        setPostLoading(false)
    }

    async function Loadmore() {
        await pulljson(
            `${process.env.NEXT_PUBLIC_APIENDPOINT}/signet/${viewtype}/${timeago}/${
                messagejson.length + 1
            }/${messagejson.length + fetchnumber + 1}/`
        )
        setismoreLoading(false)
    }
    useEffect(() => {
        if (ismoreLoading == true) {
            Loadmore()
        }
    }, [ismoreLoading])
    useEffect(() => {
        if (messagejson.length == 0) {
            pulljson(
                `${process.env.NEXT_PUBLIC_APIENDPOINT}/signet/${viewtype}/${timeago}/${
                    messagejson.length + 1
                }/${messagejson.length + fetchnumber + 1}/`
            )
        }
    }, [viewtype, timeago, messagejson])
    useEffect(() => {
        if (viewtype && timeago) {
            Refresh()
        }
    }, [viewtype, timeago])
    function Refresh() {
        setMessagejson([])
        setmoreloading(false)
        setLoading(true)
    }

    return (
        <Section className="justify-between items-center">
            {address ? (
                <TopNav>
                    <a
                        className="flex justify-left align-center item-center cursor-pointer"
                        href="/"
                    >
                        <img src="/logoTextWhite.png" className="w-28" />
                    </a>
                    <TopRight>
                        <OnSignal />
                        <button onClick={() => Refresh()}>
                            <BsArrowClockwise color="white" size={36} />
                        </button>
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
            <div className="w-full flex justify-center">
                <motion.div
                    className="w-[94%]"
                    key="box4"
                    initial={{ x: "100vw", opacity: 1, scale: 1 }}
                    animate={{ x: 0, opacity: 1, scale: 1, transition: { delay: 0.5 } }}
                    transition={{ ease: "easeIn" }}
                >
                    <Filter
                        Refresh={Refresh}
                        viewtype={viewtype}
                        setviewtype={setviewtype}
                        timeago={timeago}
                        settime={settime}
                    />
                </motion.div>
            </div>
            <Content>
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
                <AnimatePresence mode="wait">
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
                            {postLoading ? (
                                <Loading />
                            ) : (
                                <PostSection
                                    key="box"
                                    initial={{ y: "100", opacity: 0, scale: 1 }}
                                    animate={{ y: 0, opacity: 1, scale: 1 }}
                                    exit={{
                                        x: "-100%",
                                        opacity: 0,
                                        scale: 1,
                                        transition: { ease: "easeOut", delay: 0.3 },
                                    }}
                                    transition={{ ease: "easeIn", delay: 0.3 }}
                                >
                                    {messagejson.map(function (msg) {
                                        return (
                                            <Post key={msg.messageId}>
                                                <Link
                                                    href={"/posts/" + msg.messageId}
                                                    key={msg.messageId}
                                                >
                                                    <div
                                                        className="w-full block justify-start items-center"
                                                        // onClick={setPostLoading(true)}
                                                    >
                                                        <NameContainer>
                                                            <Signetprofile
                                                                address={msg.messageSender}
                                                            />
                                                        </NameContainer>
                                                        {msg.tokenimageURL.length > 20 && (
                                                            <ImageContainer>
                                                                <Image
                                                                    loader={() =>
                                                                        msg.tokenimageURL
                                                                    }
                                                                    src={msg.tokenimageURL}
                                                                    height={390}
                                                                    width={390}
                                                                    priority={42}
                                                                    // objectFit="cover"
                                                                />
                                                            </ImageContainer>
                                                        )}
                                                        <TextSection>
                                                            <IconContainer>
                                                                <FaQuoteLeft size={8} />
                                                            </IconContainer>
                                                            <Text>
                                                                &nbsp;
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
                                                    <div className="w-full min-w-[350px] h-[0.125rem]" />
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
                                                            <div className="italic text-[10px] text-white">
                                                                {Datachange(parseInt(msg.time))}
                                                            </div>
                                                        </BottomContainer>
                                                    </div>
                                                </div>
                                            </Post>
                                        )
                                    })}
                                </PostSection>
                            )}
                        </PSContainer>
                    )}
                    {moreloading && !ismoreLoading && (
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
                </AnimatePresence>
                <AnimatePresence mode="wait">
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
                </AnimatePresence>
            </Content>
        </Section>
    )
}
