import React from "react"
import styled, { keyframes } from "styled-components"
import Image from "next/image"
import Head from "next/head"
import { BsSearch, BsArrowRight } from "react-icons/bs"
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

import Welcome from "../components/Welcome"
import styles1 from "../styles/Home.module.css"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import images from "../img"

import { BsArrowRepeat, BsArrowClockwise } from "react-icons/bs"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
import { MdExpandMore } from "react-icons/md"
import Filter from "../components/Filter"
import { motion, AnimatePresence } from "framer-motion"

const SectionContainer = styled(motion.div)`
    width: 100vw;
    display: flex;
    justify-content: center;
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

const Section = styled.div`
    width: 100vw;
    max-width: 1920px;
    min-height: 100vh;
    overflow: auto;
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

const Search = styled.div`
    width: 100vw;
    max-width: 1920px;
    height: 3rem;
    display: flex;
    justify-items: center;
    align-items: center;
    margin-top: 0.5rem;
`

const SearchBox = styled.div`
    width: 66%;
    margin: 0.5rem auto;
    color: white;
    display: flex;
    border-radius: 5rem;
    align-items: center;
    box-shadow: gray;
    background-color: rgba(32, 32, 32, 0.45);

    @media only screen and (min-width: 1024px) {
        width: 33%;
    }
`

const SearchBoxIcon = styled.div`
    font-size: 1rem;
    padding: 0.5rem 0.8rem;
    color: white;
`

const GroupContainer = styled.div`
    max-width: 1920px;
    color: white;
    display: grid;
    justify-content: center;
`

const Group = styled(motion.div)`
    width: 96vw;
    max-width: 1920px;
    display: flex;
    justify-content: flex-start;
    padding: 0.75rem;
    border-radius: 10px;
    padding-bottom: 1rem;
    background-color: rgba(32, 32, 32, 0.9);
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);
    margin-top: 0.5rem;
`

const GroupInfo = styled.div`
    width: 57%;
    margin-left: 1rem;
    display: block;
    overflow: hidden;
`
const GroupTitle = styled.h1`
    font-size: 1rem;
    font-weight: 500;
`

const GroupDescription = styled.p`
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 400;
    height: 2.25rem;
`

const UpdateTime = styled.div`
    font-size: 0.75rem;
    font-weight: 300;
    position: relative;
    right: 0rem;
`

const Whitespace = styled.div`
    width: 100vw;
    height: 4rem;
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

const OffSignal = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 0.17rem solid white;
    background-color: red;
    margin-right: 0.75rem;
    margin-top: 0.65rem;
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

const groups = () => {
    const { address } = useAccount()

    const colors = [
        {
            sapphire: "#0B1354",
        },
        {
            denim: "#165BAA",
        },
        {
            lilac: "#A155B9",
        },
        {
            rose: "#F765A3",
        },
        {
            pink: "#FFA486",
        },
        {
            pale: "#F9D1D1",
        },
    ]

    const groupArray = [
        {
            logo: images.logo1,
            banner: images.banner1,
            name: "BAYC",
            time: "3:02pm",
            description:
                "The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit www.BoredApeYachtClub.com for more details.",
        },
        {
            logo: images.logo2,
            banner: images.banner2,
            name: "RTFKT",
            time: "5:37pm",
            description: "20,000 next-gen Avatars, by RTFKT and Takashi Murakami 🌸",
        },
        {
            logo: images.logo3,
            banner: images.banner3,
            name: "Doodles",
            time: "10:55am",
            description:
                "A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range of colors, traits and sizes with a collection size of 10,000. Each Doodle allows its owner to vote for experiences and activations paid for by the Doodles Community Treasury.",
        },
    ]

    return (
        <SectionContainer
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
            <Section>
                <Head>
                    <title>Signet</title>
                    <meta name="description" content="2" />
                    <link rel="icon" href="/logoBlack.png" />
                </Head>
                {!address ? (
                    <>
                        <Whitespace />
                        <Welcome />
                    </>
                ) : (
                    <>
                        <div>
                            <Whitespace />
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
                                        <button onClick={() => window.location.reload(false)}>
                                            <BsArrowClockwise color="white" size={36} />
                                        </button>
                                    </TopRight>
                                </TopNav>
                            ) : (
                                <TopNav>
                                    <a
                                        className="flex justify-left align-center item-center cursor-pointer"
                                        href="/"
                                    >
                                        <img src="/logoTextWhite.png" className="w-28" />
                                    </a>
                                    <OffSignal />
                                    <button onClick={() => Refresh()}>
                                        <BsArrowClockwise color="white" size={36} />
                                    </button>
                                </TopNav>
                            )}
                        </div>
                        <motion.div
                            key="box4"
                            initial={{ x: "-100vw", opacity: 1, scale: 1 }}
                            animate={{ x: 0, opacity: 1, scale: 1, transition: { delay: 0.5 } }}
                            transition={{ ease: "easeIn" }}
                        >
                            <Filter />
                        </motion.div>

                        <GroupContainer>
                            {groupArray.map((el, i) => (
                                <Group
                                    key={i + 1}
                                    i={i}
                                    el={el}
                                    initial={{ x: "100vw", opacity: 1, scale: 1 }}
                                    animate={{
                                        x: 0,
                                        opacity: 1,
                                        scale: 1,
                                        transition: { delay: 0.5 },
                                    }}
                                    transition={{ ease: "easeIn" }}
                                >
                                    <Image
                                        src={el.logo}
                                        alt="profile background"
                                        width={75}
                                        height={75}
                                        // objectFit="covers"
                                        className="rounded-full"
                                    />
                                    <GroupInfo>
                                        <GroupTitle>{el.name}</GroupTitle>
                                        <GroupDescription>{el.description}</GroupDescription>
                                    </GroupInfo>

                                    <UpdateTime>{el.time}</UpdateTime>
                                </Group>
                            ))}
                        </GroupContainer>
                    </>
                )}
            </Section>
        </SectionContainer>
    )
}

export default groups
