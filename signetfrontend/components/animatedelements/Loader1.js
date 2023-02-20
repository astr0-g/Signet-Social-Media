import React, { useState, useEffect } from "react"
import styled from "styled-components"
import elements from "../../img/elements"
import { motion } from "framer-motion"
import { Inter, Michroma, Russo_One } from "@next/font/google"

const Section = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1a1224;
    color: white;
    position: relative;
    overflow: hidden;
`

const Frame1 = styled.img`
    width: 100%;
    opacity: 0.9;
    position: absolute;
    top: 0;
    padding: 1rem;
`

const Frame2 = styled.img`
    width: 100%;
    opacity: 0.9;
    position: absolute;
    bottom: 0;
    padding: 1rem;
`

const Grid = styled(motion.img)`
    width: 100%;
    height: 100%;
    opacity: 0.9;
    position: absolute;
    object-fit: cover;
    z-index: 0;
`
const Warning = styled(motion.img)`
    width: 10rem;
    height: 10rem;
    object-fit: contain;
    z-index: 10;

    @media only screen and (min-width: 1024px) {
        width: 16rem;
        height: 16rem;
    }
`

const ContentContainer = styled(motion.div)`
    width: 67%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid yellow;
    position: absolute;
`

const Content = styled(motion.div)`
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: 1024px) {
        width: 33vw;
        height: auto;
        justify-content: space-around;
    }
`

const Msg = styled(motion.div)`
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: yellow;
    z-index: 10;
    border: 0.5px solid yellow;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 1024px) {
        width: 14rem;
        font-size: 15px;
    }
`

const russo = Russo_One({
    weight: "400",
    subsets: ["latin"],
})

const Whitespace = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    background-color: white;
    position: absolute;
    z-index: 10;
`

const Logo = styled.img`
    width: 6rem;

    @media only screen and (min-width: 1024px) {
        width: 10rem;
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

const Loader1 = () => {
    let mobile = useMediaQuery("(max-width: 1023px)")
    let desktop = useMediaQuery("(min-width: 1024px)")
    return (
        <Section
            key="k15"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: { duration: 0.8, ease: "easeIn" },
            }}
            exit={{
                opacity: 0,
                transition: { duration: 0.8, ease: "easeOut" },
            }}
        >
            <motion.button
                className="flex justify-center items-center absolute top-[3%] z-10 "
                key="k14"
                animate={{
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.03, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    type: "spring",
                }}
            >
                <Logo src="/logoTextWhite.png"  />
            </motion.button>
            {mobile && (
                <ContentContainer>
                    <Whitespace
                        key="white1"
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                            transition: { duration: 2, ease: "easeIn", delay: 2.5 },
                        }}
                    />
                    <Grid
                        src={elements.loaderimg1pc.src}
                        key="k10"
                        animate={{
                            opacity: [0.6, 0.9, 0.6, 0.9],
                            scale: [1.5, 4],
                            x: [0, 1, 0, -1, 0, 1, 0, -1, 0],
                            y: [1, 0, -1, 0, 1, 0, -1, 0, 1],
                        }}
                        transition={{
                            duration: 5,
                            ease: "easeIn",
                            repeat: Infinity,
                        }}
                    />
                    <Content>
                        <Warning
                            src={elements.warning1.src}
                            key="k11"
                            animate={{
                                opacity: [0.4, 1, 0.4],
                                scale: [1, 1.03, 1],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                type: "spring",
                            }}
                        />
                        <Msg
                            className={russo.className}
                            key="k12"
                            animate={{
                                opacity: [0.4, 1, 0.4],
                                scale: [1, 1.03, 1],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                type: "spring",
                            }}
                        >
                            LEAVING EARTH
                        </Msg>
                    </Content>
                </ContentContainer>
            )}
            {desktop && (
                <ContentContainer>
                    <Whitespace
                        key="white1"
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                            transition: { duration: 2, ease: "easeIn", delay: 2.5 },
                        }}
                    />
                    <Grid
                        src={elements.loaderimg1.src}
                        key="k10"
                        animate={{
                            opacity: [0.6, 0.9, 0.6, 0.9],
                            scale: [1.5, 4],
                            x: [0, 1, 0, -1, 0, 1, 0, -1, 0],
                            y: [1, 0, -1, 0, 1, 0, -1, 0, 1],
                        }}
                        transition={{
                            duration: 5,
                            ease: "easeIn",
                            repeat: Infinity,
                        }}
                    />
                    <Content>
                        <Warning
                            src={elements.warning1.src}
                            key="k11"
                            animate={{
                                opacity: [0.4, 1, 0.4],
                                scale: [1, 1.03, 1],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                type: "spring",
                            }}
                        />
                        <Msg
                            className={russo.className}
                            key="k12"
                            animate={{
                                opacity: [0.4, 1, 0.4],
                                scale: [1, 1.03, 1],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                type: "spring",
                            }}
                        >
                            LEAVING EARTH
                        </Msg>
                    </Content>
                </ContentContainer>
            )}
        </Section>
    )
}

export default Loader1
