import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import SignetLikeandStar from "./SignetLikeandStar"
import creatorcontract from "../constants/abi.json"
import { useToasts } from "react-toast-notifications"
import signetorcontract from "../constants/Signetor.json"
import Loading from "./Loading"
import { useRouter } from "next/router"
import Signetprofile from "./SignetorProfile"
import Dropdown from "./Dropdown"
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

import styled from "styled-components"
import { BsArrowRepeat, BsArrowClockwise, BsWindowSidebar } from "react-icons/bs"
import { FaQuoteLeft, FaQuoteRight, FaFilter, FaAngleDown, FaAngleUp } from "react-icons/fa"
import { MdExpandMore } from "react-icons/md"
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri"
import SearchBar from "./SearchBar"
import { motion, AnimatePresence } from "framer-motion"

const Section = styled.div`
    width: 100vw;
    max-width: 1920px;
    overflow: hidden;
    display: grid;
    justify-content: center;
    align-items: center;
`

const Note = styled(motion.div)`
    width: 96%;
    max-width: 1920px;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    color: white;
    border-radius: 10px;
    margin-top: 0.75rem;
    padding: 1rem;
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);
    background-color: rgba(32, 32, 32, 0.75);
    overflow: hidden;
`

const PostSection = styled(motion.div)`
    width: 100%;
    max-width: 1920px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin: 0 auto;
    padding: 0.15rem;
    margin-top: 0.5rem;
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
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 0.15rem;
`

const Post = styled.div`
    overflow: hidden;
    background-color: rgba(32, 32, 32, 0.9);
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

const RefreshSection = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
`
const RefreshButton = styled.button`
    background-color: rgba(32, 32, 32, 0.75);
    border-radius: 5px;
    padding: 0.5rem 3rem;
    margin: 0.5rem;
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);
`

const SearchBarContainer = styled(motion.div)`
    width: 60rem;
    max-width: 1920px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(32, 32, 32, 0.75);
    padding: 1rem 1rem;
    border-radius: 10px;
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);
    margin-top: 0.75rem;

    @media only screen and (max-width: 376px) {
        width: 94%;
        display: flex;
        justify-content: center;
        gap: 0;
    }
    @media screen and (min-device-width: 377px) and (max-device-width: 425px) {
        display: flex;
        justify-content: center;
        gap: 0.75rem;
        width: 94%;
    }
    @media screen and (min-device-width: 426px) and (max-device-width: 1024px) {
        display: flex;
        justify-content: center;
        gap: 0.75rem;
        width: 94%;
    }
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

const NameContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 12px;
    font-weight: 500;
    margin-top: 0.25rem;
    color: white;
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
`

const DropdownBar = styled.div`
    width: 100%;
    position: relative;
    top: 0;
    display: flex;
    justify-content: end;
`

const Icon = styled.button``

const DropdownMenu = styled.div`
    background-color: rgba(32, 32, 32, 0.5);
    display: grid;
    justify-content: start;
    align-items: center;
    right: 2rem;
    color: white;
    font-size: 12px;
    padding: 1rem;
    border-radius: 10px;
    z-index: 1000;
`

const RightBox = styled.div`
    padding: 0.5rem 2.5rem;
    border-radius: 10px;
    color: white;
    background-color: rgba(32, 32, 32, 0.75);
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-device-width: 767px) {
        display: none;
    }
`

const RightBoxPc = styled.div`
    padding: 0.5rem 0.75rem;
    border-radius: 10px;
    color: white;
    background-color: rgba(32, 32, 32, 0.75);
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 0.45rem;

    @media only screen and (min-width: 389px) {
        margin-left: 0;
    }
    @media only screen and (min-width: 768px) {
        display: none;
    }
`

const ImageContainer = styled.div`
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    justify-content: start;
    align-items: start;
`

export default function Messagelist(props) {
    const [messagejson, setMessagejson] = useState([])
    const [moreloading, setmoreloading] = useState(false)
    const [fetchnumber, setfetchnumber] = useState(8)
    const [loadtime, setloadtime] = useState(false)
    const { address } = useAccount()
    const [isLoading, setLoading] = useState(false)
    const [ismoreLoading, setismoreLoading] = useState(false)
    const [isDropped, setIsDropped] = useState(false)
    const [filter, setFilter] = useState(true)
    const [expand, setExpand] = useState(false)

    // console.log(address)

    const ExpandText = () => {
        setExpand(!expand)
    }

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
            // console.log(humanDateFormat)
            return humanDateFormat
        }
    }

    const dropthemenu = () => {
        setIsDropped(true)
    }

    const foldthemenu = () => {
        setIsDropped(false)
    }

    const openFilter = () => {
        if (!filter) {
            setFilter(true)
        } else {
            setFilter(false)
        }
    }

    // useEffect(() => {
    //     if (props.useraddress) {
    //         if (props.useraddress.length > 40 && messagejson.length == 0) {
    //             setLoading(true)
    //             pulljson()
    //         }
    //     }
    // })

    async function pulljson() {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_APIENDPOINT}/signet/read/${props.useraddress}/${
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
        await pulljson()
        setismoreLoading(false)
    }
    useEffect(() => {
        if (ismoreLoading == true) {
            Loadmore()
        }
    }, [ismoreLoading])
    // useEffect(() => {
    //     if (props.useraddress) {
    //         setLoading(true)
    //         pulljson()
    //     }
    // }, [])
    useEffect(() => {
        if (props.useraddress) {
            if (props.useraddress.length > 40 && messagejson.length == 0) {
                setLoading(true)
                pulljson()
            }
        }
    }, [messagejson])
    function Refresh() {
        setLoading(true)
        setMessagejson([])
    }

    return (
        <Section>
            <SearchBarContainer
                key="box4"
                initial={{ x: "-100vw", opacity: 1, scale: 1 }}
                animate={{ x: 0, opacity: 1, scale: 1, transition: { delay: 0.5 } }}
                transition={{ ease: "easeIn" }}
            >
                <SearchBar />
                <RightBox onClick={() => Refresh()}>
                    <BsArrowClockwise color="white" size={30} />
                </RightBox>
                <RightBoxPc onClick={() => Refresh()}>
                    <BsArrowClockwise color="white" size={30} />
                </RightBoxPc>
            </SearchBarContainer>

            <PSContainer>
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
                    {!isLoading && messagejson == "" && (
                        <div className="w-full flex justify-center text-center">
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

                    {!isLoading && messagejson != "" && (
                        <PostSection
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
                            {messagejson.map(function (msg) {
                                return (
                                    <Post key={msg.messageId}>
                                        <Link href={"/posts/" + msg.messageId} key={msg.messageId}>
                                            <div className="w-full block justify-start items-center">
                                                {msg.tokenimageURL.length > 20 && (
                                                    <ImageContainer>
                                                        {/* <video autoPlay loop muted controls>
                                                            <source src="https://route.signet.ink/render/token/24.mp4" />
                                                        </video> */}
                                                        <Image
                                                            loader={() => msg.tokenimageURL}
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
                                                <Dropdown
                                                    useraddress={props.useraddress}
                                                    address={address}
                                                    messageId={msg.messageId}
                                                />
                                            </div>
                                        </div>
                                        {/* <div>#{msg.messageId}</div> */}
                                        {/* <div className="italic text-sm">Owned by {msg.messageSender}</div> */}
                                    </Post>
                                )
                            })}
                        </PostSection>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {!ismoreLoading && moreloading && (
                        <LoadSection>
                            <LoadButton
                                key="box"
                                initial={{ y: "100", opacity: 0, scale: 1 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                exit={{
                                    x: 0,
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
                </AnimatePresence>
            </PSContainer>
            <div className="w-full h-[6rem]" />
        </Section>
    )
}
