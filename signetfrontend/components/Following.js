import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"
import Router from "next/router"
import { useState, useEffect, useRef } from "react"
import creatorcontract from "../constants/abi.json"
import { useToasts } from "react-toast-notifications"
import signetorcontract from "../constants/Signetor.json"
import Loading from "./Loading"
import Signetprofile from "./SignetorProfile"
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
import Followtrigger from "./Targettrigger"

import styled from "styled-components"
import { BsArrowRepeat, BsArrowClockwise } from "react-icons/bs"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
import { MdExpandMore } from "react-icons/md"
import SearchBar from "./SearchBar"
import { motion, AnimatePresence } from "framer-motion"

const Section = styled.div`
    width: 100vw;
    max-width: 1920px;
    overflow: hidden;
`

const Note = styled.div`
    width: 96vw;
    max-width: 1920px;
    height: 15vh;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    background-color: rgba(32, 32, 32, 1);
    color: white;
    border-radius: 10px;
    margin-top: 0.5rem;
    padding: 1rem;
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);
    overflow: hidden;
`

const PostSection = styled.div`
    width: 100vw;
    height: auto;
    background-color: rgba(248, 240, 227, 0.25);
    display: flex;
    justify-content: center;
`

const LoadSection = styled.div`
    width: 100vw;
    max-width: 1920px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.75rem;
`
const LoadButton = styled.button`
    background-color: rgba(32, 32, 32, 0.75);
    border-radius: 10px;
    padding: 0.5rem 3rem;
    margin: 0.5rem;
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);
`

const UserSection = styled(motion.div)`
    width: 100%;
    max-width: 1920px;
    grid-template-columns: repeat(1, 1fr);
    padding: 0.15rem;
    display: grid;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 1024px) {
        width: 60rem;
    }
`

const User = styled.div`
    padding: 1rem;
    border-radius: 10px;
    background-color: rgba(32, 32, 32, 0.75);
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.75rem;
    padding-bottom: 0.5rem;
    margin-left: 0.45rem;
    margin-right: 0.45rem;
    margin-top: 0.45rem;

    &:hover {
        scale: 1.025;
        transition: 0.25s;
        animation-delay: 0.15s;
    }
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

const ListContainer = styled.div`
    width: 100vw;
    max-width: 1920px;
    display: inline-block;
    justify-content: center;
    align-items: center;
    padding: 0.15rem;

    @media only screen and (min-width: 1024px) {
        display: grid;
        width: 100%;
    }
`

export default function Following() {
    const router = useRouter()
    const { useraddress } = router.query
    const [ownersignetoraddress, setownersignetoraddress] = useState("")
    const [startmessagefetch, setstartmessagefetch] = useState("")
    const [messagejson, setMessagejson] = useState()
    const [MoreMessagejson, setMoreMessagejson] = useState()
    const [moreloading, setmoreloading] = useState(false)
    const [loadtime, setloadtime] = useState(false)
    const { address } = useAccount()
    const [isLoading, setLoading] = useState(false)
    const [ismoreLoading, setismoreLoading] = useState(false)

    // console.log(address)

    let displayData

    async function pulljson() {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APIENDPOINT}/follow/following/${useraddress}/`)
        const responseData = await response.json()

        displayData = responseData.map(function (msg) {
            return (
                <User key={msg.following}>
                    <div className="flex items-center justify-between text-white">
                        {/* <div>#{msg.messageId}</div> */}
                        {/* <div className="italic text-sm">Owned by {msg.messageSender}</div> */}
                        <Link href={"/" + msg.following}>
                            <Signetprofile address={msg.following} />
                            {/* <button className="px-4 py-2 m-2 italic text-sm">
                                {" "}
                                {`${
                                    msg.following.slice(0, 6) +
                                    "..." +
                                    msg.following.slice(
                                        msg.following.length - 6,
                                        msg.following.length
                                    )
                                }   `}
                            </button> */}
                        </Link>
                        <Followtrigger address={msg.following} />
                    </div>
                </User>
            )
        })
        setMessagejson(displayData)
        setLoading(false)
    }

    // async function Loadmore() {
    //     setismoreLoading(true)
    //     const response = await fetch(`${process.env.NEXT_PUBLIC_APIENDPOINT}/signet/all/`)
    //     const responseData = await response.json()

    //     displayData = responseData.slice(10, responseData.length).map(function (msg) {
    //         return (
    //             <div
    //                 key={msg.messageId}
    //                 className="p-2 rounded-sm border-2 border-inherit border-r border-l"
    //             >
    //                 <div className="flex items-center justify-between pt-2.5 flex-no-wrap">
    //                     {/* <div>#{msg.messageId}</div> */}
    //                     {/* <div className="italic text-sm">Owned by {msg.messageSender}</div> */}

    //                     {msg.tokenimageURL != "null" && (
    //                         <Image
    //                             className="px-4 py-2 m-2"
    //                             loader={() => msg.tokenimageURL}
    //                             src={msg.tokenimageURL}
    //                             height="100"
    //                             width="100"
    //                         />
    //                     )}

    //                     <div className="px-4 py-2 m-2 italic text-sm">{msg.tokendescription}</div>
    //                     <Link href={"/" + msg.messageSender}>
    //                         <button className="px-4 py-2 m-2 italic text-sm right-0">
    //                             from{" "}
    //                             {`${
    //                                 msg.messageSender.slice(0, 4) +
    //                                 msg.messageSender.slice(
    //                                     msg.messageSender.length - 3,
    //                                     msg.messageSender.length
    //                                 )
    //                             }   `}
    //                             {"--"}
    //                             {Datachange(parseInt(msg.time))}
    //                         </button>
    //                     </Link>
    //                 </div>
    //             </div>
    //         )
    //     })
    //     setMoreMessagejson(displayData)
    //     setLoading(false)
    //     setismoreLoading(false)
    // }

    useEffect(() => {
        if (useraddress) {
            setLoading(true)
            pulljson()
        }
    }, [])

    function Refresh() {
        setMoreMessagejson("")
        setmoreloading(false)
        setLoading(true)
        pulljson()
    }

    return (
        <Section>
            <SearchBarContainer
                key="box4"
                initial={{ x: "-100vw", opacity: 1, scale: 1 }}
                animate={{ x: 0, opacity: 1, scale: 1, transition: { delay: 0.3 } }}
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
            <ListContainer>
                {messagejson == "" && (
                    <div className="w-full flex justify-center text-center">
                        <Note>Looks like you haven't followed anyone yet, let's do it now!</Note>
                    </div>
                )}
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

                    {!isLoading && (
                        <UserSection
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
                            {messagejson}
                        </UserSection>
                    )}
                </AnimatePresence>
                {/* {!ismoreLoading && !MoreMessagejson && moreloading && (
                    <div className="text-sm flex flex-col justify-center items-center">
                        <button onClick={() => Loadmore()}>Load more</button>
                    </div>
                )}
                {MoreMessagejson && <div>{MoreMessagejson}</div>}
                {ismoreLoading && <Loading />} */}
            </ListContainer>
            <div className="w-full h-[6rem]" />
        </Section>
    )
}
