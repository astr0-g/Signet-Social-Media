import React from "react"
import EC from "../components/Encrypted"
import { useSignTypedData, useAccount, useNetwork } from "wagmi"
import creatorcontract from "../constants/abi.json"
import Signetprofile from "./SignetorProfile"
import { useState, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import { BsDashLg } from "react-icons/bs"
import PfpImage from "./PfpImage"
import { motion, AnimatePresence } from "framer-motion"

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 0.5rem;
    overflow: hidden;
`

const Section2 = styled.div`
    width: 100%;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 0.5rem;
    position: fixed;
    bottom: 4rem;
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
    overflow: hidden;
    position: fixed;
    z-index: 100;
`

const Section3 = styled(motion.div)`
    width: 60rem;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 0.5rem;
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
    overflow: hidden;
    z-index: 100;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    padding: 1rem;
    border-radius: 12px;
`

const InputBar = styled(motion.div)`
    width: 100%;
    max-width: 1920px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    overflow: hidden;
    position: fixed;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    bottom: 4rem;
    z-index: 100;
`

const InputContainer = styled.div`
    width: 100%;
    padding-top: 0.125rem;
    padding-bottom: 0.125rem;
    border-radius: 12px;
    background-color: rgba(64, 64, 96, 1);
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.75rem;
`

const InputContainer2 = styled.div`
    width: 100%;
    margin-top: 0.5rem;
    padding-top: 0.125rem;
    padding-bottom: 0.125rem;
    background-color: rgba(32, 32, 32, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`

const PfpContainer = styled.div`
    width: 2.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.75rem;
`

const ButtonContainer = styled.div`
    width: 96%;
    margin-top: 1rem;
    margin-bottom: 5rem;
    display: flex;
    justify-content: end;
`

const Title = styled.div`
    width: 100%;
    text-align: left;
    font-size: 18px;
    font-weight: 500;
    margin-left: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
    margin-bottom: 1rem;

    @media only screen and (min-width: 1024px) {
        justify-content: center;
    }
`

const Title2 = styled.div`
    width: 100%;
    text-align: left;
    font-size: 18px;
    font-weight: 500;
    margin-left: 1.5rem;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 0.125rem;
    margin-bottom: 0.75rem;
`

const Button = styled.button`
    display: inline-block;
    color: white;
    outline: none;
    border: none;
    font-weight: 600;
    font-size: 15px;
    padding: 0.5rem 1.5rem;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    border: 2px solid white;

    @media (max-width: 48em) {
        padding: 1rem 2rem;
    }
    @media (max-width: 30em) {
        padding: 0.5rem 2rem;
        font-size: 14px;
    }

    &:hover {
        transform: scale(0.9);
    }

    &::after {
        content: " ";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        border: white;
        width: 100%;
        height: 100%;
        border-radius: 50px;
        transition: all 0.2s ease;
    }

    &:hover::after {
        transform: translate(-50%, -50%) scale(1);
        padding: 0.3rem;
    }
`

const CommentSection = styled.div`
    width: 96vw;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgb(64, 64, 64);
    padding: 0.5rem 0.5rem;

    @media only screen and (min-width: 1024px) {
        width: 100%;
    }
`

const CommentHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
`

const TimeContainer = styled.div`
    font-size: 10px;
    font-style: italic;
`

const Content = styled.div`
    width: 96%;
    display: flex;
    justify-content: start;
    text-align: left;
    margin-left: 2.45rem;
    font-size: 15px;
    font-style: oblique;
    font-weight: 300;
    margin-bottom: 0.25rem;

    @media only screen and (min-width: 1024px) {
        font-size: 18px;
    }
`

export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(query)
        if (media.matches !== matches) {
            setMatches(media.matches)
        }
        const listener = () => {
            setMatches(media.matches)
        }
        media.addListener(listener)
        return () => media.removeListener(listener)
    }, [matches, query])

    return matches
}

export default function Comment(props) {
    let mobile = useMediaQuery("(max-width: 1023px)")
    let desktop = useMediaQuery("(min-width: 1024px)")
    const recoveredAddress = React.useRef()
    const { address } = useAccount()
    const { chain } = useNetwork()
    const [input, setInput] = useState("")
    const [ready, setReady] = useState(false)
    const [messagejson, setMessagejson] = useState()
    const [vmessage, setvmessage] = useState("")
    const [expand, setExpand] = useState(false)
    const [isConnected, setIsConnected] = useState()
    const [chainnow, setchainnow] = useState("")
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
        isLoading,
        isSuccess: signSuccess,
        signTypedData,
    } = useSignTypedData({
        domain,
        types,
        value,
    })

    useEffect(() => {
        if (chain) {
            if (chain["id"]) {
                setchainnow(chain["id"])
            }
        }
    }, [chain])
    useEffect(() => {
        if (address == undefined) {
            setIsConnected(false)
        } else {
            setIsConnected(true)
        }
    }, [])

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
    let displayData
    async function pulljson(e) {
        const response = await fetch(e)
        const responseData = await response.json()
        displayData = await responseData.map(function (msg) {
            return (
                <CommentSection key={msg.messageId}>
                    <CommentHeader>
                        <Signetprofile address={msg.commenter} />

                        <TimeContainer>{Datachange(parseInt(msg.time) - 2)}</TimeContainer>
                    </CommentHeader>
                    <Content>{msg.comment}</Content>
                </CommentSection>
            )
        })
        setMessagejson(displayData)
    }
    function submitComment() {
        var record = EC(vmessage, address)
        var numberR = Math.random() * 100000000
        var formdata = new FormData()
        formdata.append("userId", parseInt(numberR))
        formdata.append("userAddress", address)
        formdata.append("userBio", "")
        formdata.append("comments", input)
        formdata.append("messageId", props.messageId)
        formdata.append("userSignatrue", vmessage)
        formdata.append("userRecord", record)
        formdata.append("created_on", 0)

        var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow",
        }

        fetch(`${process.env.NEXT_PUBLIC_APIENDPOINT}/comments/post/`, requestOptions)
            .then((response) => response.text())
            .catch((error) => console.log("error", error))
        setInput("")
        setvmessage("")
        pulljson(`${process.env.NEXT_PUBLIC_APIENDPOINT}/comments/read/${props.messageId}/`)
    }

    const ExpandComment = () => {
        setExpand(!expand)
    }

    useEffect(() => {
        pulljson(`${process.env.NEXT_PUBLIC_APIENDPOINT}/comments/read/${props.messageId}/`)
        setExpand(false)
    }, [signSuccess])
    useEffect(() => {
        if (signSuccess) {
            setvmessage(message)
        }
    }, [signSuccess])
    useEffect(() => {
        if (vmessage.length > 130) {
            submitComment()
        }
    }, [vmessage])
    return (
        <Section>
            {mobile && (
                <>
                    {expand ? (
                        <Section2>
                            <Title>
                                {parseInt(props.commentNumber) > 0 && (
                                    <h2 className="ml-1">Comments </h2>
                                )}
                                <div className="mr-6" onClick={() => ExpandComment()}>
                                    <BsDashLg size={21} />
                                </div>
                            </Title>
                            <InputContainer2>
                                <textarea
                                    className=" w-full focus:ring-0 placeholder-white tracking-wide text-white bg-transparent pl-2 pt-1 text-[12px]"
                                    rows="5"
                                    placeholder="Reply"
                                    value={input}
                                    disabled={ready}
                                    onChange={(e) => setInput(e.target.value)}
                                ></textarea>
                            </InputContainer2>
                            <ButtonContainer>
                                <Button
                                    className="border-2 border-white"
                                    onClick={() => signTypedData()}
                                >
                                    Submit
                                </Button>
                            </ButtonContainer>
                        </Section2>
                    ) : (
                        <>
                            {isConnected && (
                                <AnimatePresence>
                                    <InputBar
                                        key="input1"
                                        initial={{ x: "100vw", opacity: 1, scale: 1 }}
                                        animate={{
                                            x: 0,
                                            opacity: 1,
                                            scale: 1,
                                            transition: { delay: 0.3 },
                                        }}
                                        exit={{
                                            x: "100vw",
                                            opacity: 1,
                                            scale: 1,
                                            transition: { delay: 0.3 },
                                        }}
                                        transition={{ ease: "easeIn" }}
                                    >
                                        <PfpContainer>
                                            <PfpImage address={address} />
                                        </PfpContainer>
                                        <InputContainer onClick={() => ExpandComment()}>
                                            <textarea
                                                className="w-full focus:ring-0 placeholder-white tracking-wide text-white bg-transparent pl-2 py-1 text-[12px] "
                                                rows="1"
                                                placeholder="Reply"
                                                value={input}
                                                disabled={ready}
                                                onChange={(e) => setInput(e.target.value)}
                                            ></textarea>
                                        </InputContainer>
                                    </InputBar>
                                </AnimatePresence>
                            )}
                        </>
                    )}
                    {parseInt(props.commentNumber) > 0 && (
                        <motion.h2
                            className="ml-1 "
                            key="input2"
                            initial={{ x: "100vw", opacity: 1, scale: 1 }}
                            animate={{ x: 0, opacity: 1, scale: 1, transition: { delay: 0.4 } }}
                            transition={{ ease: "easeIn" }}
                        >
                            Comments ({props.commentNumber})
                        </motion.h2>
                    )}
                    <motion.div
                        key="input1"
                        initial={{ x: "-100vw", opacity: 1, scale: 1 }}
                        animate={{ x: 0, opacity: 1, scale: 1, transition: { delay: 0.5 } }}
                        transition={{ ease: "easeIn" }}
                        className="mt-3"
                    >
                        {messagejson}
                    </motion.div>
                    <div className="mt-6" />
                </>
            )}
            {desktop && (
                <>
                    {isConnected && (
                        <Section3
                            initial={{ x: 0, opacity: 0, scale: 0, rotate: 0 }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                scale: 1,
                                rotateX: 360,
                                transition: {
                                    duration: 0.5,
                                    type: "spring",
                                    bounce: 0.2,
                                    delay: 0.3,
                                },
                            }}
                            tranisition={{ delay: 0.2 }}
                            key="comment1"
                        >
                            <Title>
                                <h2 className="ml-1">Comments ({props.commentNumber})</h2>
                            </Title>

                            <InputContainer2>
                                <textarea
                                    className=" w-full focus:ring-0 placeholder-white tracking-wide text-white bg-transparent pl-2 pt-1 text-[18px]"
                                    rows="5"
                                    placeholder="Reply"
                                    value={input}
                                    disabled={ready}
                                    onChange={(e) => setInput(e.target.value)}
                                />
                            </InputContainer2>
                            <ButtonContainer>
                                <Button
                                    className="border-2 border-white"
                                    onClick={() => signTypedData()}
                                >
                                    Submit
                                </Button>
                            </ButtonContainer>
                        </Section3>
                    )}

                    <motion.div
                        key="input2"
                        initial={{ x: "-100vw", opacity: 1, scale: 1 }}
                        animate={{ x: 0, opacity: 1, scale: 1, transition: { delay: 0.5 } }}
                        transition={{ ease: "easeIn" }}
                        className="w-[60rem] mt-8"
                    >
                        {messagejson}
                    </motion.div>
                    <div className="mt-6" />
                </>
            )}
        </Section>
    )
}
