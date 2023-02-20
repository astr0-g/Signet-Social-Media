import React, { useState, useEffect } from "react"
import elements from "../img/elements"
import Image from "next/image"
import styled from "styled-components"
import { motion } from "framer-motion"
import Typewriter from "typewriter-effect"
import Link from "next/link"
import PfpImage from "./PfpImage"
import Signetprofile from "./SignetorProfile"

const Section = styled.div`
    width: 356px;
    height: 356px;
    display: flex;
    justify-content: start;
    background-image: url(${elements.controlpanel1.src});
    background-repeat: no-repeat;
    background-position: center;

    @media only screen and (min-width: 1024px) {
        width: 640px;
        height: 640px;
    }
`

const ButtonOn = styled(motion.button)`
    width: 7rem;
    background-image: url(${elements.buttoncontrolpanel2.src});
    background-color: rgba(32, 32, 42, 1);
    background-repeat: no-repeat;
    background-position: center;
    height: 3rem;
    text-align: center;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0.3rem;
    padding-left: 0.3rem;

    &:hover {
        background-image: url(${elements.buttoncontrolpanel1.src});
        scale: 1.05;
    }
    &:hover::after {
        background-image: url(${elements.buttoncontrolpanel1.src});
    }

    @media only screen and (min-width: 1024px) {
        width: 12.6rem;
        height: 5.4rem;
    }
`

const ButtonOff = styled.button`
    width: 7rem;
    background-image: url(${elements.buttoncontrolpanel2.src});
    background-color: rgba(32, 32, 48, 0.84);
    background-repeat: no-repeat;
    background-position: center;
    height: 3rem;
    z-index: 100;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0.3rem;
    padding-left: 0.3rem;

    &:hover {
        transform: scale(1, 1);
    }
`

const Title = styled.div`
    width: 13.25rem;
    background-image: url(${elements.titlecontrolpanel1.src});
    background-repeat: no-repeat;
    background-position: center;
    height: 4rem;
    margin-right: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    font-size: 15px;
`

const ButtonContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    margin-bottom: 2rem;
    z-index: 10;

    @media only screen and (min-width: 1024px) {
        margin-bottom: 4rem;
    }
`

const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    margin-top: 1.5rem;
`

const Circle = styled(motion.div)`
    width: 7rem;
    height: 7rem;
    background-repeat: no-repeat;
    background-position: center;
    display: relative;
    z-index: 10;

    &:hover {
        scale: 1.1;
    }

    @media only screen and (min-width: 1024px) {
        width: 12.6rem;
        height: 12.6rem;
    }
`

const Left = styled.div`
    width: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 0;
    position: relative;
`

const MapContainer = styled.div`
    width: 240px;
    height: 275px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: absolute;
    left: -1rem;
    bottom: 3rem;
    z-index: 0;

    @media only screen and (min-width: 1024px) {
        width: 400px;
        height: 510px;
        left: 5rem;
        bottom: 4.5rem;
    }
`

const ButtonText = styled.h1`
    font-size: 15px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media only screen and (min-width: 1024px) {
        font-size: 21px;
    }
`

const ProfileImg = styled(motion.div)`
    width: 6rem;
    height: 6rem;
    position: absolute;
    margin-left: 0.45rem;
    margin-top: 0.1rem;
    border-radius: 50%;
    object-fit: cover;
    overflow: hidden;
    border: 2px groove rgba(128, 128, 128, 0.75);
    padding: 0.5rem;

    @media only screen and (min-width: 1024px) {
        width: 9rem;
        height: 9rem;
        margin-top: 1.25rem;
        margin-left: 1.75rem;
    }
`

const PfpImg = styled.img`
    border-radius: 50%;
    border: 0.5px solid white;
`

const ButtonTitle = styled.h1`
    font-size: 21px;
    color: white;
    font-weight: 700;
    margin-top: 0.5rem;
`

const UserSection = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: absolute;
    z-index: 0;
`

const UserPfp = styled(motion.div)`
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid rgba(32, 32, 32, 1);
    box-shadow: 0px 4px 2px rgba(32, 32, 32, 1);
    z-index: 0;
`

const UserMsg = styled(motion.div)`
    max-width: 10rem;
    font-size: 11px;
    padding: 0.25rem 0.5rem;
    border-radius: 6px;
    background-color: rgba(216, 216, 216, 0.84);
    margin-bottom: 1.75rem;
    border: 2px solid rgba(32, 32, 32, 1);
    color: rgba(32, 32, 32, 1);
    box-shadow: 0 4px 2px rgba(32, 32, 32, 1);
    z-index: 0;
`

const easing = [0.6, -0.05, 0.01, 0.99]

const path1 = {
    animate: {
        y: [0, 100, 50, 28, 34, 43],
        x: [0, 27, -57, 42, 19, -26],
        z: [0, 57, -14, 66, 33, 17],
        opacity: 1,
        scale: 1,
    },
    transition: { duration: 25, ease: "easeIn", delay: 0.4 },
}

const ControlPanel = ({ russo, michroma }) => {
    const [messagejson, setMessagejson] = useState()
    let displayData
    const [click, setClick] = useState(false)
    const scrollTo = (id) => {
        let element = document.getElementById(id)

        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        })

        setClick(!click)
    }

    function shortenaddress(address) {
        const resultaddress = address.slice(0, 24) + "..."
        return resultaddress
    }

    async function pulljson() {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APIENDPOINT}/signet/pull/3/`)
        const responseData = await response.json()

        displayData = responseData.map(function (msg) {
            let random1 = Math.floor(Math.random() * 199) - 98
            let random2 = Math.floor(Math.random() * 199) - 98
            let random3 = Math.floor(Math.random() * 199) - 98
            let random4 = Math.floor(Math.random() * 199) - 98
            let random5 = Math.floor(Math.random() * 199) - 98
            let random6 = Math.floor(Math.random() * 199) - 98
            let random7 = Math.floor(Math.random() * 199) - 98
            let random8 = Math.floor(Math.random() * 199) - 98
            let random9 = Math.floor(Math.random() * 199) - 98
            let random10 = Math.floor(Math.random() * 199) - 98
            let random11 = Math.floor(Math.random() * 299) - 148
            let random12 = Math.floor(Math.random() * 299) - 148
            let random13 = Math.floor(Math.random() * 299) - 148
            let random14 = Math.floor(Math.random() * 299) - 148
            let random15 = Math.floor(Math.random() * 299) - 148
            let random16 = Math.floor(Math.random() * 299) - 148
            let random17 = Math.floor(Math.random() * 299) - 148
            let random18 = Math.floor(Math.random() * 299) - 148
            let random19 = Math.floor(Math.random() * 299) - 148
            let random20 = Math.floor(Math.random() * 299) - 148
            let random21 = Math.floor(Math.random() * 299) - 148
            let random22 = Math.floor(Math.random() * 299) - 148
            let random23 = Math.floor(Math.random() * 299) - 148
            let random24 = Math.floor(Math.random() * 299) - 148
            let random25 = Math.floor(Math.random() * 299) - 148
            let random26 = Math.floor(Math.random() * 299) - 148
            let random27 = Math.floor(Math.random() * 299) - 148
            let random28 = Math.floor(Math.random() * 299) - 148
            let random29 = Math.floor(Math.random() * 299) - 148
            let random0 = Math.floor(Math.random() * 30) + 60
            let random30 = Math.floor(Math.random() * 4)
            let random31 = Math.floor(Math.random() * 35) + 5
            return (
                <UserSection
                    key={msg.id}
                    animate={{
                        y: [
                            random1,
                            random2,
                            random3,
                            random4,
                            random5,
                            random7,
                            random6,
                            random9,
                            random10,
                            random3,
                            random8,
                        ],
                        x: [
                            random7,
                            random22,
                            random8,
                            random9,
                            random10,
                            random11,
                            random12,
                            random21,
                            random21,
                            random26,
                            random7,
                        ],
                        z: [
                            random13,
                            random14,
                            random14,
                            random16,
                            random29,
                            random17,
                            random18,
                            random23,
                            random24,
                            random13,
                        ],
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: random0,
                        ease: "easeIn",
                        delay: random30,
                        repeat: Infinity,
                    }}
                >
                    <UserPfp>
                        <PfpImage address={msg.messageSender} />
                    </UserPfp>
                    <UserMsg
                        className={michroma}
                        key={msg.messageId}
                        animate={{
                            opacity: [0, 1, 1, 1, 1, 0],
                            scale: 1,
                            transition: {
                                duration: 8,
                                ease: "easeOut",
                                delay: random31,
                                repeat: Infinity,
                            },
                        }}
                    >
                        "{shortenaddress(msg.tokendescription)}"
                    </UserMsg>
                </UserSection>
            )
        })
        setMessagejson(displayData)
    }
    useEffect(() => {
        pulljson()
    }, [])

    return (
        <Section>
            <Left>
                <Circle
                    key="circle1"
                    initial={{ y: "100%", scale: 0, opacity: 0 }}
                    animate={{
                        y: 0,
                        scale: 1,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1,
                        delay: 6,
                        type: "spring",
                        mass: 1,
                        bounce: 0.6,
                    }}
                >
                    <ProfileImg
                        key="pfpimg"
                        animate={{
                            opacity: [0.9, 1, 0.9],
                            scale: [1, 1.025, 1],
                            transition: {
                                duration: 3,
                                ease: "easeIn",
                                delay: 3,
                                repeat: Infinity,
                            },
                        }}
                    >
                        <PfpImg src="./logoWhite.png" />
                    </ProfileImg>
                    <motion.svg
                        key="box"
                        animate={{ rotate: [0, 360, 0] }}
                        transition={{
                            duration: 24,
                            repeat: Infinity,
                            type: "spring",
                            damping: 10,
                        }}
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 71.3 63.54"
                        fill="#fff"
                    >
                        <g>
                            <motion.path
                                class="cls-1"
                                d="m57.75,54.41c-12.24,12.24-32.25,12.16-44.6-.19C.8,41.87.71,21.86,12.95,9.61c3.36-3.36,7.33-5.86,11.8-7.41l.11.31c-4.42,1.53-8.35,4-11.68,7.33-12.11,12.11-12.03,31.91.19,44.14,12.22,12.22,32.02,12.31,44.14.19,7.8-7.8,10.85-19.31,7.97-30.04l.32-.09c2.91,10.84-.18,22.48-8.06,30.35Z"
                            />
                            <motion.path
                                class="cls-1"
                                d="m66.11,24.56c-.08.08-.18.14-.29.17-.35.09-.71-.11-.8-.46-1.4-5.22-4.18-10.02-8.04-13.88C48.63,2.05,36.09-.86,25.02,2.98c-.34.12-.72-.06-.84-.4-.12-.34.06-.72.4-.84,11.54-4.01,24.62-.98,33.31,7.72,4.02,4.02,6.92,9.02,8.38,14.47.06.23,0,.47-.17.63Z"
                            />
                        </g>
                        <motion.path
                            key="box10"
                            animate={{ rotate: [0, 360] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                            }}
                            class="cls-1"
                            d="m55.86,52.7c-.45.45-.92.89-1.41,1.32-3.29,2.88-7.09,4.93-11.28,6.08l-.03-.11c4.18-1.15,7.96-3.19,11.24-6.06,5.75-5.03,9.19-12.02,9.69-19.67.51-7.75-2.05-15.24-7.19-21.1C46.32,1.15,28.02-.13,16.09,10.32c-7.68,6.72-11.2,17.17-9.19,27.25l-.11.02c-.98-4.9-.68-9.99.87-14.72,1.59-4.87,4.48-9.24,8.35-12.63C28-.26,46.36,1.03,56.96,13.1c5.16,5.88,7.73,13.41,7.22,21.18-.46,7.03-3.4,13.5-8.32,18.42Z"
                        />
                        <motion.path
                            class="cls-1"
                            d="m43.31,60.2s-.06.05-.1.06c-10.73,2.95-22.44-.58-29.83-9-3.41-3.89-5.75-8.61-6.75-13.64-.02-.12.05-.23.17-.26.12-.02.23.05.26.17.99,4.96,3.29,9.61,6.65,13.44,7.28,8.29,18.81,11.77,29.38,8.86.12-.03.24.04.27.15.02.08,0,.16-.06.21Z"
                        />
                        <motion.path
                            class="cls-1"
                            d="m10.68,56.68l-.23.23c-13.85-13.85-13.95-36.29-.22-50.02l.23.23c-13.6,13.6-13.5,35.83.22,49.55Z"
                        />
                        <motion.path
                            class="cls-1"
                            d="m60.72,7.26c13.63,13.96,13.63,36.31-.09,50.02-.17.17-.45.17-.62,0-.17-.17-.17-.45,0-.62,13.48-13.48,13.38-35.5-.22-49.1l-.31-.31h1.24Z"
                        />
                        <motion.path
                            key="box2"
                            animate={{ rotate: [0, 360] }}
                            transition={{
                                duration: 9,
                                ease: "easeIn",
                                repeat: Infinity,
                            }}
                            class="cls-1"
                            d="m7.49,36.94c.36.36.36.93,0,1.29-.35.35-.93.35-1.29,0-.36-.36-.36-.93,0-1.29.35-.35.93-.35,1.29,0Z"
                        />
                        <motion.path
                            key="box3"
                            animate={{ rotate: [0, 360] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                            }}
                            class="cls-1"
                            d="m43.8,59.41c.36.36.36.93,0,1.29-.35.35-.93.35-1.29,0-.36-.36-.36-.93,0-1.29.35-.35.93-.35,1.29,0Z"
                        />
                        <motion.path
                            class="cls-1"
                            d="m11.13,56.07c.36.36.36.93,0,1.29-.35.35-.93.35-1.29,0-.36-.36-.36-.93,0-1.29.35-.35.93-.35,1.29,0Z"
                        />
                        <motion.path
                            key="box5"
                            animate={{ rotate: [0, 360] }}
                            transition={{
                                duration: 3,
                                ease: "easeIn",
                                repeat: Infinity,
                            }}
                            class="cls-1"
                            d="m11.19,6.17c.36.36.36.93,0,1.29-.35.35-.93.35-1.29,0-.36-.36-.36-.93,0-1.29.35-.35.93-.35,1.29,0Z"
                        />
                        <motion.path
                            class="cls-1"
                            d="m63.26,7.05c5.82,6.27,8.02,14.09,8.04,14.17.02.06,0,.12-.04.16-.02.02-.04.03-.07.04-.09.02-.18-.03-.2-.11-.02-.08-2.23-7.93-8.07-14.15l-.11-.12h.46Z"
                        />
                    </motion.svg>
                </Circle>
                <ButtonContainer
                    key="bc1"
                    initial={{ x: -150, scale: 1, opacity: 0 }}
                    animate={{
                        x: 0,
                        scale: 1,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1,
                        delay: 5,
                        type: "spring",
                    }}
                >
                    <ButtonOn
                        onClick={() => scrollTo("about")}
                        key="k1"
                        animate={{
                            opacity: [0.4, 1, 1, 1, 1, 0.8, 0.6],
                            scale: [1, 1.02, 1.05, 1.05, 1.05, 1.03, 1],
                        }}
                        transition={{
                            duration: 5,
                            ease: "easeIn",
                            delay: 2,
                        }}
                    >
                        <ButtonText className={russo}>ABOUT</ButtonText>
                    </ButtonOn>
                    <ButtonOn
                        onClick={() => scrollTo("feature")}
                        key="k2"
                        animate={{
                            opacity: [0.4, 1, 1, 1, 0.8, 0.6],
                            scale: [1, 1.02, 1.05, 1.05, 1.05, 1.03, 1],
                        }}
                        transition={{
                            duration: 4,
                            ease: "easeIn",
                            delay: 3,
                        }}
                    >
                        <ButtonText className={russo}>FEATURE</ButtonText>
                    </ButtonOn>
                    <ButtonOn
                        onClick={() => scrollTo("roadmap")}
                        key="k3"
                        animate={{
                            opacity: [0.4, 1, 1, 0.8, 0.6],
                            scale: [1, 1.02, 1.05, 1.05, 1.05, 1.03, 1],
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeIn",
                            delay: 4,
                        }}
                    >
                        <ButtonText className={russo}>ROADMAP</ButtonText>
                    </ButtonOn>
                </ButtonContainer>
            </Left>
            <Right>
                {/* <TitleContainer className={michroma}>
                    <Title>signet
                    </Title>
                </TitleContainer>  */}
                <MapContainer>{messagejson}</MapContainer>
            </Right>
        </Section>
    )
}

export default ControlPanel
