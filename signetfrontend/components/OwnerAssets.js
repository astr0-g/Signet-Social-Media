import Link from "next/link"
import Image from "next/image"
import OwnerAssetsContractAddress from "./OwnerAssetsContractAddress"
import { useState, useEffect, useRef } from "react"
import creatorcontract from "../constants/abi.json"
import { useToasts } from "react-toast-notifications"
import Signetorpfpchangefromassets from "./Signetorpfpchangefromassets"
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
import styled from "styled-components"

import { BsArrowRepeat, BsArrowClockwise } from "react-icons/bs"
import { FaQuoteLeft, FaQuoteRight, FaRProject } from "react-icons/fa"
import { MdExpandMore } from "react-icons/md"
import SearchBar from "./SearchBar"
import { motion, AnimatePresence } from "framer-motion"

const Section = styled.div`
    width: 100vw;
    max-width: 1920px;
    overflow: hidden;
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
    z-index: 100000;
`

const OffSignal = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 0.17rem solid white;
    background-color: red;
    margin-right: 0.75rem;
    margin-top: 0.65rem;
`

const LoadSection = styled.div`
    width: 100vw;
    max-width: 1920px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.75rem;
`
const LoadButton = styled(motion.button)`
    background-color: rgba(32, 32, 32, 0.75);
    border-radius: 5px;
    padding: 0.5rem 3rem;
    margin: 0.5rem;
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);
`

const Note = styled(motion.div)`
    width: 100%;
    max-width: 1920px;
    height: 15vh;
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
const NameContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: white;
`

const PSContainer = styled.div`
    width: 100vw;
    max-width: 1920px;
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 0.15rem;
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

export default function OwnerAssets(props) {
    const { address } = useAccount()
    const [messagejson, setMessagejson] = useState([])
    const [moreloading, setmoreloading] = useState(false)
    const [fetchnumber, setfetchnumber] = useState(8)
    const [isLoading, setLoading] = useState(false)
    const [ismoreLoading, setismoreLoading] = useState(false)
    const [showwalletaddress, setshowwalletaddress] = useState(false)

    let displayData

    useEffect(() => {
        // pulljson()
    }, [showwalletaddress])

    async function pulljson() {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_APIENDPOINT}/fetch/assets/${props.address}/goerli/${
                messagejson.length + 1
            }/${messagejson.length + fetchnumber + 1}/`
        )
        const responseData = await response.json()

        // let newList = messagejson.concat(responseData)
        setMessagejson([
            ...messagejson.slice(0, messagejson.length + fetchnumber),
            ...responseData.slice(0, fetchnumber),
        ])

        if (responseData.length == fetchnumber + 1) {
            setmoreloading(true)
            // setstartnum(startnum + 10)
            // setendnum(endnum + 10)
        } else if (responseData.length == 0) {
            setMessagejson("")
        } else {
            setmoreloading(false)
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
    useEffect(() => {
        if (props.address && messagejson.length == 0) {
            setLoading(true)
            pulljson()
        }
    }, [messagejson])

    function Refresh() {
        setMessagejson([])
        setmoreloading(false)
        setLoading(true)
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
                                Looks like you dont have any assets yet.
                            </Note>
                        </div>
                    )}

                    {!isLoading && messagejson != "" && (
                        <div className="w-full flex justify-center">
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
                                        <Post key={msg.token_hash}>
                                            <div className="w-full block justify-start items-center">
                                                <NameContainer>
                                                    {msg.normalized_metadata["name"]}
                                                </NameContainer>

                                                <div className="w-full grid items-center justify-center pt-2">
                                                    <ImageContainer>
                                                        <Image
                                                            loader={() =>
                                                                msg.normalized_metadata["image"]
                                                            }
                                                            src={msg.normalized_metadata["image"]}
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
                                                                {msg.contract_type &&
                                                                    `${msg.contract_type} `}
                                                            </span>
                                                        </div>
                                                        <OwnerAssetsContractAddress
                                                            token_address={msg.token_address}
                                                        />
                                                    </div>
                                                    <div className="w-full h-0.5 bg-slate-400 mt-1.5 mb-2" />
                                                    {address == props.address && (
                                                        <div className="w-full flex justify-center mt-1">
                                                            <Signetorpfpchangefromassets
                                                                url={
                                                                    msg.normalized_metadata[
                                                                        "image"
                                                                    ]
                                                                }
                                                                collectionaddress={
                                                                    msg.token_address
                                                                }
                                                                token_Id={msg.token_id}
                                                                typeOf={msg.contract_type
                                                                    .split("ERC")[1]
                                                                    .toString()}
                                                                reloadpage={true}
                                                            />
                                                        </div>
                                                    )}
                                                </BottomContainer>
                                            </div>
                                        </Post>
                                    )
                                })}
                            </PostSection>
                        </div>
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
