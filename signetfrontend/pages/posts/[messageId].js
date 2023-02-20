import React, { useState, useEffect, useRef, useCallback } from "react"
import styled, { keyframes } from "styled-components"
import Signetprofile from "../../components/SignetorProfile"
import SignetLikeandStar from "../../components/SignetLikeandStar"
import { RxExit } from "react-icons/rx"
import Link from "next/link"
import Dropdown from "../../components/Dropdown"
import { RiArrowDropDownLine, RiArrowDropUpLine, RiSettings2Line } from "react-icons/ri"
import { FaQuoteLeft, FaQuoteRight, FaEye } from "react-icons/fa"
import { IoChevronBackSharp } from "react-icons/io5"
import { useRouter } from "next/router"
import { motion, AnimatePresence } from "framer-motion"
import Comment from "../../components/Comment.js"
import { useAccount } from "wagmi"
import Loading from "../../components/Loading"
import { useBetween } from "use-between"
import Starscape from "../../components/Starscape"
import elements from "../../img/elements"

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
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    overflow: hidden;
    background-color: rgba(32, 32, 32, 1);
    color: white;
`

const NameContainer = styled(motion.div)`
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 13px;
    font-weight: 500;
    color: white;
`

const HeaderBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    margin-top: 0.25rem;

    @media only screen and (min-width: 1024px) {
        justify-content: space-evenly;
        scale: 1.28;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
`

const ImageContainer = styled(motion.div)`
    width: 100%;
    max-width: 800px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    box-shadow: 1px 3px 3px rgba(32, 32, 32, 0.2);

    @media only screen and (min-width: 1024px) {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
`

const TextContainer = styled(motion.div)`
    width: 100%;
    max-width: 1920px;
    margin-bottom: 0.5rem;
    font-size: 21px;
    margin-top: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    color: white;

    @media only screen and (min-width: 1024px) {
        margin-top: 2rem;
        max-width: 900px;
        font-size: 24px;
    }
`

const Text = styled.div`
    max-width: 88%;
    overflow: auto;
    text-align: center;
    font-weight: 400;
`

const IconContainer = styled.div`
    width: 4%;
    height: 4%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TimeContainer = styled(motion.div)`
    font-size: 12px;
    font-style: italic;
    margin-top: 1.5rem;
    margin-bottom: 0.15rem;

    @media only screen and (min-width: 1024px) {
        margin-top: 5rem;
        font-size: 15px;
        font-style: italic;
    }
`

const ButtonSection = styled.div`
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    scale: 1.25;
    overflow: hidden;
    margin-top: 2rem;

    @media only screen and (min-width: 1024px) {
        margin-top: 5rem;
    }
`

const Buttons = styled(motion.div)`
    background-color: rgba(32, 32, 32, 0.75);
    padding: 0.35rem 0.65rem;
    border-radius: 10px;
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.45);
    backdrop-filter: blur(6px);
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
`

const CommentContainer = styled(motion.div)`
    width: 100%;
    max-width: 1920px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
`

const ViewContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;

    @media only screen and (min-width: 1024px) {
        font-size: 17px;
    }
`

const TopNav = styled.nav`
    width: 100vw;
    max-width: 1920px;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    backdrop-filter: blur(12px);
    position: fixed;
    top: 0;
    z-index: 49;
    box-shadow: 1px 3px 3px rgba(32, 32, 32, 0.2);

    @media only screen and (min-width: 1024px) {
        justify-content: start;
    }
`

const TopRight = styled.div`
    width: 25%;
    display: flex;
    justify-content: start;
    align-items: center;

    @media only screen and (min-width: 1024px) {
        width: auto;
        margin-right: 0.5rem;
    }
`

const TopLeft = styled.div`
    width: 25%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 0.35rem;

    @media only screen and (min-width: 1024px) {
        width: auto;
        margin-left: 0.5rem;
    }
`

const OnSignal = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 0.14rem solid white;
    background-color: green;
    margin-left: 0.75rem;
`

const OffSignal = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 0.14rem solid white;
    background-color: red;
`

const Whitespace = styled.div`
    width: 100vw;
    height: 4rem;
`

const DropdownMenu = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    font-size: 14px;
    padding: 0.5rem;
    z-index: 10;
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
`

const Icon = styled.button`
    padding: 0 0.25rem;
    padding-bottom: 0.25rem;
`

const Button = styled.button`
    width: 22.5%;
    font-size: 13px;
    font-weight: 500;
    color: white;
    text-align: center;
    padding: 6px 18px;
    border-radius: 6px;
    box-shadow: -3px -5px -5px rgba(32, 32, 32, 0.2);
    margin: 0 auto;

    &:hover {
        transform: scale(1.1);
    }

    &::after {
        content: " ";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
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

const easing = [0.6, -0.05, 0.01, 0.99]

const fadeInSide = {
    initial: {
        x: "-100",
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing,
            delay: 0.25,
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

const Background = styled(motion.img)`
    width: 100vw;
    height: 200vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
    position: fixed;
    top: 0;
    object-fit: cover;

    @media only screen and (min-width: 1024px) {
        height: 300vh;
    }
`

// export const getStaticPaths = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_APIENDPOINT}/signet/signetid/1`)
//     const data = await res.json()

//     const paths = data.map((post) => {
//         return {
//             params: { messageId: post.messageId.toString() },
//         }
//     })

//     return {
//         paths,
//         fallback: false,
//     }
// }

// export const getStaticProps = async (context) => {
//     const messageId = context.params.messageId
//     const res = await fetch(`${process.env.NEXT_PUBLIC_APIENDPOINT}/signet/signetid/` + messageId)
//     const data = await res.json()

//     if (!data) {
//         return {
//             notFound: true,
//         }
//     }
//     return {
//         props: { post: data },
//     }
// }

export const getServerSideProps = async (context) => {
    const messageId = context.params.messageId
    const res = await fetch(`${process.env.NEXT_PUBLIC_APIENDPOINT}/signet/signetid/` + messageId)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: { post: data },
    }
}

const MessageDetails = ({ post }) => {
    const [postLoading, setPostLoading] = useState(true)
    const [isDropped, setIsDropped] = useState(false)
    const [isConnected, setIsConnected] = useState()
    // const [postLoading2, setPostLoading2] = useState(true)
    const address = useAccount()
    const router = useRouter()
    useEffect(() => {
        if (address.address == undefined) {
            setIsConnected(false)
        } else {
            setIsConnected(true)
        }
    }, [])
    useEffect(() => {
        if (post.length == 1) {
            setPostLoading(false)
        }
    }, [post])

    // console.log(isConnected)

    const dropthemenu = () => {
        setIsDropped(true)
    }

    const foldthemenu = () => {
        setIsDropped(false)
    }

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

    return (
        <Section
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
            <Starscape />
            <Background
                src={elements.background2.src}
                key="background1"
                initial={{ y: 0, opacity: 0, scale: 1 }}
                animate={{ y: 0, opacity: 0.67, scale: 1 }}
                exit={{ y: 0, opacity: 0, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeIn", delay: 0.3 }}
            />
            <TopNav>
                <TopRight>
                    <Icon onClick={() => router.back()}>
                        <IoChevronBackSharp color="white" size={24} />
                    </Icon>
                </TopRight>
                <a
                    className="flex justify-left align-center item-center cursor-pointer"
                    onClick={() => router.reload()}
                >
                    <img src="/logoTextWhite.png" className="w-28" />
                </a>
                <TopLeft>{isConnected ? <OnSignal /> : <OffSignal />}</TopLeft>
            </TopNav>
            <AnimatePresence>
                {postLoading ? (
                    <motion.div
                        key="box"
                        initial={{ x: 0, opacity: 0, scale: 0.5 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        exit={{
                            x: "-100%",
                            opacity: 0,
                            scale: 0.5,
                            transition: { ease: "easeOut", delay: 0.15 },
                        }}
                        transition={{ ease: "easeIn", delay: 0.25 }}
                        className="flex flex-col justify-center"
                    >
                        <Whitespace />
                        <Loading />
                    </motion.div>
                ) : (
                    <motion.div
                        key="content1"
                        initial={{ x: "100%", opacity: 0, scale: 1 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        exit={{
                            x: "100%",
                            opacity: 0,
                            scale: 1,
                            transition: { ease: "easeOut", delay: 0.4 },
                        }}
                        transition={{ duration: 0.4, ease: "easeIn", delay: 0.4 }}
                        className="w-[full] flex flex-col justify-start items-center"
                    >
                        <Whitespace />
                        {isDropped && (
                            <DropdownMenu>
                                <Button>Share</Button>
                                <Button>Follow</Button>
                                <Button>Save</Button>
                                <Button>Report</Button>
                            </DropdownMenu>
                        )}
                        <HeaderBar>
                            <NameContainer variants={fadeInSide}>
                                <Signetprofile address={post[0].messageSender} />
                            </NameContainer>
                            {isDropped ? (
                                <Icon onClick={foldthemenu}>
                                    <RiArrowDropUpLine color="white" size={30} />
                                </Icon>
                            ) : (
                                <Icon onClick={dropthemenu}>
                                    <RiArrowDropDownLine color="white" size={30} />
                                </Icon>
                            )}
                        </HeaderBar>
                        <ImageContainer
                            initial={{ x: "100%", opacity: 0, scale: 1 }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    duration: 0.8,
                                    type: "spring",
                                    bounce: 0.5,
                                    delay: 0.7,
                                },
                            }}
                            key={post[0].messageId}
                        >
                            <img src={post[0].tokenimageURL} />
                        </ImageContainer>

                        <TextContainer variants={fadeInSide}>
                            <IconContainer>
                                <FaQuoteLeft size={8} />
                            </IconContainer>
                            <Text>{post[0].tokendescription} </Text>
                            <IconContainer>
                                <FaQuoteRight size={8} />
                            </IconContainer>
                        </TextContainer>
                        <ButtonSection>
                            <Buttons variants={fadeInSide}>
                                <SignetLikeandStar
                                    SignetId={post[0].messageId}
                                    SignetIdOwner={post[0].messageSender}
                                    commentNumber={post[0].commentsNumber}
                                />
                            </Buttons>
                        </ButtonSection>

                        <CommentContainer>
                            <Comment
                                messageId={post[0].messageId}
                                senderaddress={post[0].messageSender}
                                commentNumber={post[0].commentsNumber}
                                isConnected={isConnected}
                            />
                        </CommentContainer>

                        <TimeContainer variants={fadeInSide}>
                            {Datachange(parseInt(post[0].time))}
                        </TimeContainer>
                        <motion.div
                            variants={fadeInSide}
                            className="w-[33%] h-0.5 bg-slate-300 my-1.5 rounded-full"
                        />
                        <ViewContainer variants={fadeInSide}>{post[0].views} views</ViewContainer>

                        <div className="w-full h-[12rem] z-0" />
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    )
}

export default MessageDetails
