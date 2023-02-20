import React from "react"
import styled from "styled-components"
import {
    BsFillHouseFill,
    BsFillPersonLinesFill,
    BsFillStarFill,
    BsFillChatDotsFill,
    BsPlusLg,
    BsDashLg,
} from "react-icons/bs"

import { useState, useEffect, useRef, useCallback } from "react"
import creatorcontract from "../constants/abi.json"
import { useToasts } from "react-toast-notifications"
import signetorcontract from "../constants/Signetor.json"
import Messagebox from "./Messagebox"
import MessageboxPC from "./MessageboxPC"

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
import { motion, AnimatePresence } from "framer-motion"

const Section = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    z-index: 999;

    @media only screen and (min-width: 1024px) {
        width: 70%;
        top: 0.125rem;
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 15%;
    }
    @media only screen and (min-width: 2200px) {
        width: 60%;
        margin-left: 20%;
    }
    @media only screen and (min-width: 2600px) {
        width: 50%;
        margin-left: 25%;
    }
    @media only screen and (min-width: 3300px) {
        width: 100%;
        margin-left: 0;
    }
`

const PostContainer = styled.div`
    width: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;

    @media only screen and (min-width: 1024px) {
        display: none;
    }
`

const PostButton = styled.button`
    background-color: rgba(25, 69, 112, 0.75);
    color: white;
    border-radius: 50%;
    font-weight: 400;
    width: 3.75rem;
    height: 3.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    border: 6px solid white;
    backdrop-filter: blur(10px);
    padding: 0 1.35rem;
`

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;

    @media only screen and (min-width: 768px) {
        justify-content: center;
        width: 52%;
    }
    @media only screen and (min-width: 1024px) {
        display: none;
    }
`

const NavPC = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1920px;
    height: 4rem;
    padding: 0.75rem;

    @media only screen and (max-width: 1023px) {
        display: none;
    }
    @media only screen and (min-width: 1024px) {
        width: 66%;
    }
    @media only screen and (min-width: 1680px) {
        width: 33%;
    }
`

const Menu = styled.ul`
    background-color: rgba(32, 32, 48, 1);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    width: 100%;
    max-width: 1920px;
    z-index: 999;
    height: 4rem;

    @media only screen and (min-width: 1024px) {
        background-color: transparent;
    }
`

const Left = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    justify-items: center;
    list-style: none;
`

const Right = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
`

const MenuItem = styled.a`
    color: white;
    font-size: 9px;
    font-weight: 400;
    height: 3.5rem;
    display: grid;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.25rem;
    padding: 0 1rem;

    @media only screen and (min-width: 1024px) {
        padding: 0 1.5rem;
    }
`

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0.25rem;

    &:hover {
        transform: scale(1.2);
        transition-delay: 0.1s;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
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
        transition: all 0.3s ease;
    }

    &:hover::after {
        transform: translate(-50%, -50%) scale(1);
        padding: 0.3rem;
    }
`

const ImgContainer2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        transform: scale(1.2);
        transition-delay: 0.1s;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
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
        transition: all 0.3s ease;
    }

    &:hover::after {
        transform: translate(-50%, -50%) scale(1);
        padding: 0.3rem;
    }
`

const TextContainer = styled.div`
    text-align: center;
    margin-top: 2px;
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

const NavBar = () => {
    let mobile = useMediaQuery("(max-width: 1023px)")
    let desktop = useMediaQuery("(min-width: 1024px)")
    const [showbox, setShowbox] = useState(false)
    const [isPosting, setIsPosting] = useState(false)
    const { address } = useAccount()
    const [userAddress, setuserAddress] = useState()
    const [accountGenerated, setAccountGenerated] = useState(false)

    const toggleposting = () => {
        setIsPosting(true)
        setShowbox(true)
    }

    const toggleposting2 = () => {
        setIsPosting(false)
        setShowbox(false)
    }

    useEffect(() => {
        if (address != undefined) {
            setuserAddress(address)
        }
    }, [address])
    useEffect(() => {
        if (address == undefined) {
            setAccountGenerated(true)
        } else {
            setAccountGenerated(false)
        }
    }, [accountGenerated])

    return (
        <>
        {userAddress && (
        <Section
            initial={{ y: 0, opacity: 0, scale: 0 }}
            animate={{
                y: 0,
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 0.55,
                    type: "spring",
                    bounce: 0.45,
                    delay: 0.8,
                },
            }}
            exit={{
                y: 0,
                opacity: 0,
                scale: 1,
                transition: { duration: 0.15, ease: "easeOut", delay: 0.8 },
            }}
        >
            {mobile && (
                <>
                    {isPosting && (
                        <motion.div
                            key="box"
                            initial={{ y: "100%", opacity: 1, scale: 1 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{
                                y: "100%",
                                opacity: 0,
                                scale: 0,
                                transition: { duration: 0.15, ease: "easeOut" },
                            }}
                            transition={{ duration: 0.25, ease: "easeIn" }}
                        >
                            <Messagebox isPosting={isPosting} setIsPosting={setIsPosting} />
                        </motion.div>
                    )}
                </>
            )}

            {desktop && (
                <>
                    {isPosting && (
                        <motion.div>
                            <MessageboxPC isPosting={isPosting} setIsPosting={setIsPosting} />
                        </motion.div>
                    )}
                </>
            )}

                <Nav>
                    <Menu>
                        <MenuItem href="/">
                            <ImgContainer>
                                <BsFillHouseFill size={32} />
                            </ImgContainer>
                            <TextContainer>Home</TextContainer>
                        </MenuItem>
                        <MenuItem href="/explore">
                            <ImgContainer>
                                <BsFillStarFill size={32} />
                            </ImgContainer>
                            <TextContainer> Explore</TextContainer>
                        </MenuItem>

                        {!accountGenerated && (
                            <PostContainer>
                                {isPosting ? (
                                    <PostButton onClick={toggleposting2}>
                                        <ImgContainer2>
                                            <BsDashLg size={30} />
                                        </ImgContainer2>
                                    </PostButton>
                                ) : (
                                    <PostButton onClick={toggleposting}>
                                        <ImgContainer2>
                                            <BsPlusLg size={30} />
                                        </ImgContainer2>
                                    </PostButton>
                                )}
                            </PostContainer>
                        )}

                        <MenuItem href={"/groups"}>
                            <ImgContainer>
                                <BsFillChatDotsFill size={32} />
                            </ImgContainer>
                            <TextContainer> Groups</TextContainer>
                        </MenuItem>

                        <MenuItem href={`/${address}`}>
                            <ImgContainer>
                                <BsFillPersonLinesFill size={32} />
                            </ImgContainer>
                            <TextContainer> Profile</TextContainer>
                        </MenuItem>
                    </Menu>
                </Nav>

                <NavPC>
                    <MenuItem href="/">
                        <ImgContainer>
                            <BsFillHouseFill size={32} />
                        </ImgContainer>
                        <TextContainer>Home</TextContainer>
                    </MenuItem>
                    <MenuItem href="/explore">
                        <ImgContainer>
                            <BsFillStarFill size={32} />
                        </ImgContainer>
                        <TextContainer> Explore</TextContainer>
                    </MenuItem>
                    <MenuItem href={"/groups"}>
                        <ImgContainer>
                            <BsFillChatDotsFill size={32} />
                        </ImgContainer>
                        <TextContainer> Groups</TextContainer>
                    </MenuItem>

                    <MenuItem href={`/${address}`}>
                        <ImgContainer>
                            <BsFillPersonLinesFill size={32} />
                        </ImgContainer>
                        <TextContainer> Profile</TextContainer>
                    </MenuItem>

                    {!accountGenerated && (
                        <>
                            {isPosting ? (
                                <MenuItem onClick={toggleposting2}>
                                    <ImgContainer>
                                        <BsDashLg size={24} />
                                    </ImgContainer>
                                    <TextContainer> Cancel</TextContainer>
                                </MenuItem>
                            ) : (
                                <MenuItem onClick={toggleposting}>
                                    <ImgContainer>
                                        <BsPlusLg size={24} />
                                    </ImgContainer>
                                    <TextContainer> Post</TextContainer>
                                </MenuItem>
                            )}
                        </>
                    )}
                </NavPC>
        </Section>
        )}
        </>
    )
}

export default NavBar
