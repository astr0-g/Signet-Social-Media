import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

const Section = styled.div`
    width: 100%;
    overflow: hidden;
    
`

const SectionPC = styled.div`
    width: 100%;
    height: 4.25rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    object-fit: contain;
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

const ThickDiv1 = () => {
    let mobile = useMediaQuery("(max-width: 1023px)")
    let desktop = useMediaQuery("(min-width: 1024px)")
    return (
        <>
            {mobile && (
                <Section>
                    <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 538.36 85.61"
                        fill="#fff"
                    >
                        <motion.polygon
                            class="cls-1"
                            points="484.42 75.53 465.98 75.53 454.14 75.53 447.54 75.53 435.7 75.53 386.98 75.53 363.32 75.53 356.71 75.53 333.04 75.53 272.49 75.53 272.49 80.57 333.04 80.57 333.04 85.61 356.71 85.61 356.71 80.57 363.32 80.57 363.32 85.61 386.98 85.61 386.98 80.57 435.7 80.57 435.7 85.61 447.54 85.61 447.54 80.57 454.14 80.57 454.14 85.61 465.98 85.61 465.98 80.57 484.42 80.57 484.42 85.61 508.09 85.61 538.36 85.61 538.36 80.57 538.36 75.53 508.09 75.53 484.42 75.53"
                            key="k5"
                            animate={{ opacity: [0.1, 0.4, 0.1] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="242.21"
                            y="75.53"
                            width="23.67"
                            height="5.04"
                            key="p1"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="151.38"
                            y="75.53"
                            width="23.67"
                            height="10.07"
                            key="p2"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="78.3"
                            y="80.57"
                            width="5.92"
                            height="5.04"
                            key="p3"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="80.57"
                            width="5.92"
                            height="5.04"
                            key="p4"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="102.66"
                            y="80.57"
                            width="5.92"
                            height="5.04"
                            key="p5"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="114.5"
                            y="80.57"
                            width="5.92"
                            height="5.04"
                            key="p6"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="484.42"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="k4"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="465.98"
                            y="60.43"
                            width="11.83"
                            height="10.07"
                            key="p7"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="447.54"
                            y="60.43"
                            width="10.07"
                            height="10.07"
                            key="p8"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 3,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="393.59"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="k1"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="363.32"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="k2"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="333.04"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="k3"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="320.51"
                            y="60.43"
                            width="5.92"
                            height="10.07"
                            key="p9"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="308.68"
                            y="60.43"
                            width="5.92"
                            height="10.07"
                            key="p10"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 3,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="266.22"
                            y="60.43"
                            width="5.92"
                            height="10.07"
                            key="p11"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 3,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="181.66"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="p12"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="151.38"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.rect
                            class="cls-1"
                            x="121.11"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="p13"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="p14"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="60.55"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="p15"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="48.03"
                            y="60.43"
                            width="5.92"
                            height="10.07"
                            key="p16"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            y="65.46"
                            width="11.83"
                            height="5.04"
                            key="p17"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="526.53"
                            y="30.21"
                            width="11.83"
                            height="5.04"
                            key="p18"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="532.45"
                            y="40.28"
                            width="5.92"
                            height="5.04"
                            key="p16"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="284.32"
                            y="50.36"
                            width="11.83"
                            height="5.04"
                            key="p19"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="242.21"
                            y="50.36"
                            width="11.83"
                            height="5.04"
                            key="p20"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="181.66"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p21"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="151.38"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p22"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="121.11"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p23"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p24"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="60.55"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p25"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="30.28"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p26"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            y="50.36"
                            width="11.83"
                            height="5.04"
                            key="p27"
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            y="35.25"
                            width="11.83"
                            height="5.04"
                            key="p28"
                            animate={{ opacity: [0.4, 0.7, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            y="20.14"
                            width="5.92"
                            height="5.04"
                            key="p29"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="526.53"
                            y="15.11"
                            width="11.83"
                            height="5.04"
                            key="p30"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="484.42"
                            y="30.21"
                            width="11.83"
                            height="5.04"
                            key="p31"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="465.98"
                            y="30.21"
                            width="11.83"
                            height="5.04"
                            key="p32"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="211.93"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                            key="p33"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="242.21"
                            y="35.25"
                            width="5.92"
                            height="5.04"
                            key="p34"
                            animate={{ opacity: [0.4, 0.7, 0.4] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="254.04"
                            y="35.25"
                            width="5.92"
                            height="5.04"
                        />
                        <motion.polygon
                            class="cls-1"
                            points="356.71 35.25 326.43 35.25 326.43 30.21 302.76 30.21 302.76 35.25 272.49 35.25 272.49 40.28 302.76 40.28 326.43 40.28 356.71 40.28 356.71 35.25"
                        />
                        <motion.rect
                            class="cls-1"
                            x="181.66"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.rect
                            class="cls-1"
                            x="151.38"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.rect
                            class="cls-1"
                            x="121.11"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="35.25"
                            width="11.83"
                            height="5.04"
                            key="p35"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="60.55"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.rect
                            class="cls-1"
                            x="30.28"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.polygon
                            class="cls-1"
                            points="296.15 25.18 302.76 25.18 326.43 25.18 333.04 25.18 356.71 25.18 363.32 25.18 386.98 25.18 393.59 25.18 417.26 25.18 423.87 25.18 447.54 25.18 477.81 25.18 477.81 20.14 447.54 20.14 447.54 15.11 423.87 15.11 423.87 20.14 417.26 20.14 417.26 15.11 393.59 15.11 393.59 20.14 386.98 20.14 386.98 15.11 363.32 15.11 363.32 20.14 356.71 20.14 356.71 15.11 333.04 15.11 333.04 20.14 326.43 20.14 326.43 15.11 302.76 15.11 302.76 20.14 296.15 20.14 296.15 15.11 272.49 15.11 272.49 20.14 265.88 20.14 265.88 15.11 242.21 15.11 242.21 20.14 235.6 20.14 235.6 15.11 211.93 15.11 211.93 20.14 205.32 20.14 205.32 15.11 181.66 15.11 181.66 20.14 175.05 20.14 175.05 15.11 151.38 15.11 151.38 25.18 163.21 25.18 175.05 25.18 181.66 25.18 205.32 25.18 211.93 25.18 235.6 25.18 242.21 25.18 265.88 25.18 272.49 25.18 296.15 25.18"
                            key="k10"
                            animate={{ opacity: [0.6, 0.9, 0.6] }}
                            transition={{
                                duration: 8,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="121.11"
                            y="15.11"
                            width="23.67"
                            height="10.07"
                            key="k11"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="15.11"
                            width="23.67"
                            height="10.07"
                            key="k12"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="60.55"
                            y="15.11"
                            width="23.67"
                            height="10.07"
                            key="k13"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="30.28"
                            y="15.11"
                            width="23.67"
                            height="10.07"
                            key="k14"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="514.7"
                            y="5.04"
                            width="23.67"
                            height="5.04"
                            key="p36"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.polygon
                            class="cls-1"
                            points="508.09 10.07 508.09 5.04 477.81 5.04 477.81 0 454.14 0 454.14 5.04 454.14 10.07 477.81 10.07 508.09 10.07"
                            key="p39"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="423.87"
                            width="23.67"
                            height="10.07"
                            key="p38"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="393.59"
                            width="23.67"
                            height="10.07"
                            key="p37"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="363.32"
                            width="23.67"
                            height="10.07"
                            key="p40"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="333.04"
                            width="23.67"
                            height="10.07"
                            key="p41"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="302.76"
                            width="23.67"
                            height="10.07"
                            key="p42"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="272.49"
                            width="23.67"
                            height="10.07"
                            key="p43"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="151.38"
                            y="5.04"
                            width="23.67"
                            height="5.04"
                            key="p44"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="121.11"
                            y="5.04"
                            width="23.67"
                            height="5.04"
                            key="p44"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="5.04"
                            width="11.83"
                            height="5.04"
                            key="p45"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="60.55"
                            width="23.67"
                            height="10.07"
                            key="p46"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="30.28"
                            width="23.67"
                            height="10.07"
                            key="p47"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            width="23.67"
                            height="5.04"
                            key="p48"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                    </svg>
                </Section>
            )}
            {desktop && <SectionPC>
                    <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 538.36 85.61"
                        fill="#fff"
                    >
                        <motion.polygon
                            class="cls-1"
                            points="484.42 75.53 465.98 75.53 454.14 75.53 447.54 75.53 435.7 75.53 386.98 75.53 363.32 75.53 356.71 75.53 333.04 75.53 272.49 75.53 272.49 80.57 333.04 80.57 333.04 85.61 356.71 85.61 356.71 80.57 363.32 80.57 363.32 85.61 386.98 85.61 386.98 80.57 435.7 80.57 435.7 85.61 447.54 85.61 447.54 80.57 454.14 80.57 454.14 85.61 465.98 85.61 465.98 80.57 484.42 80.57 484.42 85.61 508.09 85.61 538.36 85.61 538.36 80.57 538.36 75.53 508.09 75.53 484.42 75.53"
                            key="k5"
                            animate={{ opacity: [0.1, 0.4, 0.1] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="242.21"
                            y="75.53"
                            width="23.67"
                            height="5.04"
                            key="p1"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="151.38"
                            y="75.53"
                            width="23.67"
                            height="10.07"
                            key="p2"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="78.3"
                            y="80.57"
                            width="5.92"
                            height="5.04"
                            key="p3"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="80.57"
                            width="5.92"
                            height="5.04"
                            key="p4"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="102.66"
                            y="80.57"
                            width="5.92"
                            height="5.04"
                            key="p5"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="114.5"
                            y="80.57"
                            width="5.92"
                            height="5.04"
                            key="p6"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="484.42"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="k4"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="465.98"
                            y="60.43"
                            width="11.83"
                            height="10.07"
                            key="p7"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="447.54"
                            y="60.43"
                            width="10.07"
                            height="10.07"
                            key="p8"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 3,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="393.59"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="k1"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="363.32"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="k2"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="333.04"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="k3"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="320.51"
                            y="60.43"
                            width="5.92"
                            height="10.07"
                            key="p9"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="308.68"
                            y="60.43"
                            width="5.92"
                            height="10.07"
                            key="p10"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 3,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="266.22"
                            y="60.43"
                            width="5.92"
                            height="10.07"
                            key="p11"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 3,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="181.66"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="p12"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="151.38"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.rect
                            class="cls-1"
                            x="121.11"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="p13"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="p14"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="60.55"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="p15"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="48.03"
                            y="60.43"
                            width="5.92"
                            height="10.07"
                            key="p16"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            y="65.46"
                            width="11.83"
                            height="5.04"
                            key="p17"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="526.53"
                            y="30.21"
                            width="11.83"
                            height="5.04"
                            key="p18"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="532.45"
                            y="40.28"
                            width="5.92"
                            height="5.04"
                            key="p16"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="284.32"
                            y="50.36"
                            width="11.83"
                            height="5.04"
                            key="p19"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="242.21"
                            y="50.36"
                            width="11.83"
                            height="5.04"
                            key="p20"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="181.66"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p21"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="151.38"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p22"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="121.11"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p23"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p24"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="60.55"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p25"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="30.28"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p26"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            y="50.36"
                            width="11.83"
                            height="5.04"
                            key="p27"
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            y="35.25"
                            width="11.83"
                            height="5.04"
                            key="p28"
                            animate={{ opacity: [0.4, 0.7, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            y="20.14"
                            width="5.92"
                            height="5.04"
                            key="p29"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="526.53"
                            y="15.11"
                            width="11.83"
                            height="5.04"
                            key="p30"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="484.42"
                            y="30.21"
                            width="11.83"
                            height="5.04"
                            key="p31"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="465.98"
                            y="30.21"
                            width="11.83"
                            height="5.04"
                            key="p32"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="211.93"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                            key="p33"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="242.21"
                            y="35.25"
                            width="5.92"
                            height="5.04"
                            key="p34"
                            animate={{ opacity: [0.4, 0.7, 0.4] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="254.04"
                            y="35.25"
                            width="5.92"
                            height="5.04"
                        />
                        <motion.polygon
                            class="cls-1"
                            points="356.71 35.25 326.43 35.25 326.43 30.21 302.76 30.21 302.76 35.25 272.49 35.25 272.49 40.28 302.76 40.28 326.43 40.28 356.71 40.28 356.71 35.25"
                        />
                        <motion.rect
                            class="cls-1"
                            x="181.66"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.rect
                            class="cls-1"
                            x="151.38"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.rect
                            class="cls-1"
                            x="121.11"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="35.25"
                            width="11.83"
                            height="5.04"
                            key="p35"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="60.55"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.rect
                            class="cls-1"
                            x="30.28"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.polygon
                            class="cls-1"
                            points="296.15 25.18 302.76 25.18 326.43 25.18 333.04 25.18 356.71 25.18 363.32 25.18 386.98 25.18 393.59 25.18 417.26 25.18 423.87 25.18 447.54 25.18 477.81 25.18 477.81 20.14 447.54 20.14 447.54 15.11 423.87 15.11 423.87 20.14 417.26 20.14 417.26 15.11 393.59 15.11 393.59 20.14 386.98 20.14 386.98 15.11 363.32 15.11 363.32 20.14 356.71 20.14 356.71 15.11 333.04 15.11 333.04 20.14 326.43 20.14 326.43 15.11 302.76 15.11 302.76 20.14 296.15 20.14 296.15 15.11 272.49 15.11 272.49 20.14 265.88 20.14 265.88 15.11 242.21 15.11 242.21 20.14 235.6 20.14 235.6 15.11 211.93 15.11 211.93 20.14 205.32 20.14 205.32 15.11 181.66 15.11 181.66 20.14 175.05 20.14 175.05 15.11 151.38 15.11 151.38 25.18 163.21 25.18 175.05 25.18 181.66 25.18 205.32 25.18 211.93 25.18 235.6 25.18 242.21 25.18 265.88 25.18 272.49 25.18 296.15 25.18"
                            key="k10"
                            animate={{ opacity: [0.6, 0.9, 0.6] }}
                            transition={{
                                duration: 8,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="121.11"
                            y="15.11"
                            width="23.67"
                            height="10.07"
                            key="k11"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="15.11"
                            width="23.67"
                            height="10.07"
                            key="k12"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="60.55"
                            y="15.11"
                            width="23.67"
                            height="10.07"
                            key="k13"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="30.28"
                            y="15.11"
                            width="23.67"
                            height="10.07"
                            key="k14"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="514.7"
                            y="5.04"
                            width="23.67"
                            height="5.04"
                            key="p36"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.polygon
                            class="cls-1"
                            points="508.09 10.07 508.09 5.04 477.81 5.04 477.81 0 454.14 0 454.14 5.04 454.14 10.07 477.81 10.07 508.09 10.07"
                            key="p39"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="423.87"
                            width="23.67"
                            height="10.07"
                            key="p38"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="393.59"
                            width="23.67"
                            height="10.07"
                            key="p37"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="363.32"
                            width="23.67"
                            height="10.07"
                            key="p40"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="333.04"
                            width="23.67"
                            height="10.07"
                            key="p41"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="302.76"
                            width="23.67"
                            height="10.07"
                            key="p42"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="272.49"
                            width="23.67"
                            height="10.07"
                            key="p43"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="151.38"
                            y="5.04"
                            width="23.67"
                            height="5.04"
                            key="p44"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="121.11"
                            y="5.04"
                            width="23.67"
                            height="5.04"
                            key="p44"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="5.04"
                            width="11.83"
                            height="5.04"
                            key="p45"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="60.55"
                            width="23.67"
                            height="10.07"
                            key="p46"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="30.28"
                            width="23.67"
                            height="10.07"
                            key="p47"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            width="23.67"
                            height="5.04"
                            key="p48"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                    </svg>
                    <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 538.36 85.61"
                        fill="#fff"
                    >
                        <motion.polygon
                            class="cls-1"
                            points="484.42 75.53 465.98 75.53 454.14 75.53 447.54 75.53 435.7 75.53 386.98 75.53 363.32 75.53 356.71 75.53 333.04 75.53 272.49 75.53 272.49 80.57 333.04 80.57 333.04 85.61 356.71 85.61 356.71 80.57 363.32 80.57 363.32 85.61 386.98 85.61 386.98 80.57 435.7 80.57 435.7 85.61 447.54 85.61 447.54 80.57 454.14 80.57 454.14 85.61 465.98 85.61 465.98 80.57 484.42 80.57 484.42 85.61 508.09 85.61 538.36 85.61 538.36 80.57 538.36 75.53 508.09 75.53 484.42 75.53"
                            key="k5"
                            animate={{ opacity: [0.1, 0.4, 0.1] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="242.21"
                            y="75.53"
                            width="23.67"
                            height="5.04"
                            key="p1"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="151.38"
                            y="75.53"
                            width="23.67"
                            height="10.07"
                            key="p2"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="78.3"
                            y="80.57"
                            width="5.92"
                            height="5.04"
                            key="p3"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="80.57"
                            width="5.92"
                            height="5.04"
                            key="p4"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="102.66"
                            y="80.57"
                            width="5.92"
                            height="5.04"
                            key="p5"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="114.5"
                            y="80.57"
                            width="5.92"
                            height="5.04"
                            key="p6"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="484.42"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="k4"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="465.98"
                            y="60.43"
                            width="11.83"
                            height="10.07"
                            key="p7"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="447.54"
                            y="60.43"
                            width="10.07"
                            height="10.07"
                            key="p8"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 3,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="393.59"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="k1"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="363.32"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="k2"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="333.04"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="k3"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="320.51"
                            y="60.43"
                            width="5.92"
                            height="10.07"
                            key="p9"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="308.68"
                            y="60.43"
                            width="5.92"
                            height="10.07"
                            key="p10"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 3,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="266.22"
                            y="60.43"
                            width="5.92"
                            height="10.07"
                            key="p11"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 3,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="181.66"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="p12"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="151.38"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.rect
                            class="cls-1"
                            x="121.11"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="p13"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="p14"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="60.55"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="p15"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="48.03"
                            y="60.43"
                            width="5.92"
                            height="10.07"
                            key="p16"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            y="65.46"
                            width="11.83"
                            height="5.04"
                            key="p17"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="526.53"
                            y="30.21"
                            width="11.83"
                            height="5.04"
                            key="p18"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="532.45"
                            y="40.28"
                            width="5.92"
                            height="5.04"
                            key="p16"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="284.32"
                            y="50.36"
                            width="11.83"
                            height="5.04"
                            key="p19"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="242.21"
                            y="50.36"
                            width="11.83"
                            height="5.04"
                            key="p20"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="181.66"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p21"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="151.38"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p22"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="121.11"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p23"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p24"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="60.55"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p25"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="30.28"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p26"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            y="50.36"
                            width="11.83"
                            height="5.04"
                            key="p27"
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            y="35.25"
                            width="11.83"
                            height="5.04"
                            key="p28"
                            animate={{ opacity: [0.4, 0.7, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            y="20.14"
                            width="5.92"
                            height="5.04"
                            key="p29"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="526.53"
                            y="15.11"
                            width="11.83"
                            height="5.04"
                            key="p30"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="484.42"
                            y="30.21"
                            width="11.83"
                            height="5.04"
                            key="p31"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="465.98"
                            y="30.21"
                            width="11.83"
                            height="5.04"
                            key="p32"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="211.93"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                            key="p33"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="242.21"
                            y="35.25"
                            width="5.92"
                            height="5.04"
                            key="p34"
                            animate={{ opacity: [0.4, 0.7, 0.4] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="254.04"
                            y="35.25"
                            width="5.92"
                            height="5.04"
                        />
                        <motion.polygon
                            class="cls-1"
                            points="356.71 35.25 326.43 35.25 326.43 30.21 302.76 30.21 302.76 35.25 272.49 35.25 272.49 40.28 302.76 40.28 326.43 40.28 356.71 40.28 356.71 35.25"
                        />
                        <motion.rect
                            class="cls-1"
                            x="181.66"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.rect
                            class="cls-1"
                            x="151.38"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.rect
                            class="cls-1"
                            x="121.11"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="35.25"
                            width="11.83"
                            height="5.04"
                            key="p35"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="60.55"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.rect
                            class="cls-1"
                            x="30.28"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.polygon
                            class="cls-1"
                            points="296.15 25.18 302.76 25.18 326.43 25.18 333.04 25.18 356.71 25.18 363.32 25.18 386.98 25.18 393.59 25.18 417.26 25.18 423.87 25.18 447.54 25.18 477.81 25.18 477.81 20.14 447.54 20.14 447.54 15.11 423.87 15.11 423.87 20.14 417.26 20.14 417.26 15.11 393.59 15.11 393.59 20.14 386.98 20.14 386.98 15.11 363.32 15.11 363.32 20.14 356.71 20.14 356.71 15.11 333.04 15.11 333.04 20.14 326.43 20.14 326.43 15.11 302.76 15.11 302.76 20.14 296.15 20.14 296.15 15.11 272.49 15.11 272.49 20.14 265.88 20.14 265.88 15.11 242.21 15.11 242.21 20.14 235.6 20.14 235.6 15.11 211.93 15.11 211.93 20.14 205.32 20.14 205.32 15.11 181.66 15.11 181.66 20.14 175.05 20.14 175.05 15.11 151.38 15.11 151.38 25.18 163.21 25.18 175.05 25.18 181.66 25.18 205.32 25.18 211.93 25.18 235.6 25.18 242.21 25.18 265.88 25.18 272.49 25.18 296.15 25.18"
                            key="k10"
                            animate={{ opacity: [0.6, 0.9, 0.6] }}
                            transition={{
                                duration: 8,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="121.11"
                            y="15.11"
                            width="23.67"
                            height="10.07"
                            key="k11"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="15.11"
                            width="23.67"
                            height="10.07"
                            key="k12"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="60.55"
                            y="15.11"
                            width="23.67"
                            height="10.07"
                            key="k13"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="30.28"
                            y="15.11"
                            width="23.67"
                            height="10.07"
                            key="k14"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="514.7"
                            y="5.04"
                            width="23.67"
                            height="5.04"
                            key="p36"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.polygon
                            class="cls-1"
                            points="508.09 10.07 508.09 5.04 477.81 5.04 477.81 0 454.14 0 454.14 5.04 454.14 10.07 477.81 10.07 508.09 10.07"
                            key="p39"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="423.87"
                            width="23.67"
                            height="10.07"
                            key="p38"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="393.59"
                            width="23.67"
                            height="10.07"
                            key="p37"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="363.32"
                            width="23.67"
                            height="10.07"
                            key="p40"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="333.04"
                            width="23.67"
                            height="10.07"
                            key="p41"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="302.76"
                            width="23.67"
                            height="10.07"
                            key="p42"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="272.49"
                            width="23.67"
                            height="10.07"
                            key="p43"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="151.38"
                            y="5.04"
                            width="23.67"
                            height="5.04"
                            key="p44"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="121.11"
                            y="5.04"
                            width="23.67"
                            height="5.04"
                            key="p44"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="5.04"
                            width="11.83"
                            height="5.04"
                            key="p45"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="60.55"
                            width="23.67"
                            height="10.07"
                            key="p46"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="30.28"
                            width="23.67"
                            height="10.07"
                            key="p47"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            width="23.67"
                            height="5.04"
                            key="p48"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                    </svg>
                    <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 538.36 85.61"
                        fill="#fff"
                    >
                        <motion.polygon
                            class="cls-1"
                            points="484.42 75.53 465.98 75.53 454.14 75.53 447.54 75.53 435.7 75.53 386.98 75.53 363.32 75.53 356.71 75.53 333.04 75.53 272.49 75.53 272.49 80.57 333.04 80.57 333.04 85.61 356.71 85.61 356.71 80.57 363.32 80.57 363.32 85.61 386.98 85.61 386.98 80.57 435.7 80.57 435.7 85.61 447.54 85.61 447.54 80.57 454.14 80.57 454.14 85.61 465.98 85.61 465.98 80.57 484.42 80.57 484.42 85.61 508.09 85.61 538.36 85.61 538.36 80.57 538.36 75.53 508.09 75.53 484.42 75.53"
                            key="k5"
                            animate={{ opacity: [0.1, 0.4, 0.1] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="242.21"
                            y="75.53"
                            width="23.67"
                            height="5.04"
                            key="p1"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="151.38"
                            y="75.53"
                            width="23.67"
                            height="10.07"
                            key="p2"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="78.3"
                            y="80.57"
                            width="5.92"
                            height="5.04"
                            key="p3"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="80.57"
                            width="5.92"
                            height="5.04"
                            key="p4"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="102.66"
                            y="80.57"
                            width="5.92"
                            height="5.04"
                            key="p5"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="114.5"
                            y="80.57"
                            width="5.92"
                            height="5.04"
                            key="p6"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="484.42"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="k4"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="465.98"
                            y="60.43"
                            width="11.83"
                            height="10.07"
                            key="p7"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="447.54"
                            y="60.43"
                            width="10.07"
                            height="10.07"
                            key="p8"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 3,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="393.59"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="k1"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="363.32"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="k2"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="333.04"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="k3"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="320.51"
                            y="60.43"
                            width="5.92"
                            height="10.07"
                            key="p9"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="308.68"
                            y="60.43"
                            width="5.92"
                            height="10.07"
                            key="p10"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 3,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="266.22"
                            y="60.43"
                            width="5.92"
                            height="10.07"
                            key="p11"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 3,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="181.66"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="p12"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="151.38"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.rect
                            class="cls-1"
                            x="121.11"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="p13"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="p14"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="60.55"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="p15"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="48.03"
                            y="60.43"
                            width="5.92"
                            height="10.07"
                            key="p16"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            y="65.46"
                            width="11.83"
                            height="5.04"
                            key="p17"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="526.53"
                            y="30.21"
                            width="11.83"
                            height="5.04"
                            key="p18"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="532.45"
                            y="40.28"
                            width="5.92"
                            height="5.04"
                            key="p16"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="284.32"
                            y="50.36"
                            width="11.83"
                            height="5.04"
                            key="p19"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="242.21"
                            y="50.36"
                            width="11.83"
                            height="5.04"
                            key="p20"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="181.66"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p21"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="151.38"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p22"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="121.11"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p23"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p24"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="60.55"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p25"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="30.28"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p26"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            y="50.36"
                            width="11.83"
                            height="5.04"
                            key="p27"
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            y="35.25"
                            width="11.83"
                            height="5.04"
                            key="p28"
                            animate={{ opacity: [0.4, 0.7, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            y="20.14"
                            width="5.92"
                            height="5.04"
                            key="p29"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="526.53"
                            y="15.11"
                            width="11.83"
                            height="5.04"
                            key="p30"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="484.42"
                            y="30.21"
                            width="11.83"
                            height="5.04"
                            key="p31"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="465.98"
                            y="30.21"
                            width="11.83"
                            height="5.04"
                            key="p32"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="211.93"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                            key="p33"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="242.21"
                            y="35.25"
                            width="5.92"
                            height="5.04"
                            key="p34"
                            animate={{ opacity: [0.4, 0.7, 0.4] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="254.04"
                            y="35.25"
                            width="5.92"
                            height="5.04"
                        />
                        <motion.polygon
                            class="cls-1"
                            points="356.71 35.25 326.43 35.25 326.43 30.21 302.76 30.21 302.76 35.25 272.49 35.25 272.49 40.28 302.76 40.28 326.43 40.28 356.71 40.28 356.71 35.25"
                        />
                        <motion.rect
                            class="cls-1"
                            x="181.66"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.rect
                            class="cls-1"
                            x="151.38"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.rect
                            class="cls-1"
                            x="121.11"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="35.25"
                            width="11.83"
                            height="5.04"
                            key="p35"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="60.55"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.rect
                            class="cls-1"
                            x="30.28"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.polygon
                            class="cls-1"
                            points="296.15 25.18 302.76 25.18 326.43 25.18 333.04 25.18 356.71 25.18 363.32 25.18 386.98 25.18 393.59 25.18 417.26 25.18 423.87 25.18 447.54 25.18 477.81 25.18 477.81 20.14 447.54 20.14 447.54 15.11 423.87 15.11 423.87 20.14 417.26 20.14 417.26 15.11 393.59 15.11 393.59 20.14 386.98 20.14 386.98 15.11 363.32 15.11 363.32 20.14 356.71 20.14 356.71 15.11 333.04 15.11 333.04 20.14 326.43 20.14 326.43 15.11 302.76 15.11 302.76 20.14 296.15 20.14 296.15 15.11 272.49 15.11 272.49 20.14 265.88 20.14 265.88 15.11 242.21 15.11 242.21 20.14 235.6 20.14 235.6 15.11 211.93 15.11 211.93 20.14 205.32 20.14 205.32 15.11 181.66 15.11 181.66 20.14 175.05 20.14 175.05 15.11 151.38 15.11 151.38 25.18 163.21 25.18 175.05 25.18 181.66 25.18 205.32 25.18 211.93 25.18 235.6 25.18 242.21 25.18 265.88 25.18 272.49 25.18 296.15 25.18"
                            key="k10"
                            animate={{ opacity: [0.6, 0.9, 0.6] }}
                            transition={{
                                duration: 8,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="121.11"
                            y="15.11"
                            width="23.67"
                            height="10.07"
                            key="k11"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="15.11"
                            width="23.67"
                            height="10.07"
                            key="k12"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="60.55"
                            y="15.11"
                            width="23.67"
                            height="10.07"
                            key="k13"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="30.28"
                            y="15.11"
                            width="23.67"
                            height="10.07"
                            key="k14"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="514.7"
                            y="5.04"
                            width="23.67"
                            height="5.04"
                            key="p36"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.polygon
                            class="cls-1"
                            points="508.09 10.07 508.09 5.04 477.81 5.04 477.81 0 454.14 0 454.14 5.04 454.14 10.07 477.81 10.07 508.09 10.07"
                            key="p39"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="423.87"
                            width="23.67"
                            height="10.07"
                            key="p38"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="393.59"
                            width="23.67"
                            height="10.07"
                            key="p37"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="363.32"
                            width="23.67"
                            height="10.07"
                            key="p40"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="333.04"
                            width="23.67"
                            height="10.07"
                            key="p41"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="302.76"
                            width="23.67"
                            height="10.07"
                            key="p42"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="272.49"
                            width="23.67"
                            height="10.07"
                            key="p43"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="151.38"
                            y="5.04"
                            width="23.67"
                            height="5.04"
                            key="p44"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="121.11"
                            y="5.04"
                            width="23.67"
                            height="5.04"
                            key="p44"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="5.04"
                            width="11.83"
                            height="5.04"
                            key="p45"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="60.55"
                            width="23.67"
                            height="10.07"
                            key="p46"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="30.28"
                            width="23.67"
                            height="10.07"
                            key="p47"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            width="23.67"
                            height="5.04"
                            key="p48"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                    </svg>
                    <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 538.36 85.61"
                        fill="#fff"
                    >
                        <motion.polygon
                            class="cls-1"
                            points="484.42 75.53 465.98 75.53 454.14 75.53 447.54 75.53 435.7 75.53 386.98 75.53 363.32 75.53 356.71 75.53 333.04 75.53 272.49 75.53 272.49 80.57 333.04 80.57 333.04 85.61 356.71 85.61 356.71 80.57 363.32 80.57 363.32 85.61 386.98 85.61 386.98 80.57 435.7 80.57 435.7 85.61 447.54 85.61 447.54 80.57 454.14 80.57 454.14 85.61 465.98 85.61 465.98 80.57 484.42 80.57 484.42 85.61 508.09 85.61 538.36 85.61 538.36 80.57 538.36 75.53 508.09 75.53 484.42 75.53"
                            key="k5"
                            animate={{ opacity: [0.1, 0.4, 0.1] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="242.21"
                            y="75.53"
                            width="23.67"
                            height="5.04"
                            key="p1"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="151.38"
                            y="75.53"
                            width="23.67"
                            height="10.07"
                            key="p2"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="78.3"
                            y="80.57"
                            width="5.92"
                            height="5.04"
                            key="p3"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="80.57"
                            width="5.92"
                            height="5.04"
                            key="p4"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="102.66"
                            y="80.57"
                            width="5.92"
                            height="5.04"
                            key="p5"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="114.5"
                            y="80.57"
                            width="5.92"
                            height="5.04"
                            key="p6"
                            animate={{ opacity: [0.4, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="484.42"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="k4"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="465.98"
                            y="60.43"
                            width="11.83"
                            height="10.07"
                            key="p7"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="447.54"
                            y="60.43"
                            width="10.07"
                            height="10.07"
                            key="p8"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 3,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="393.59"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="k1"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="363.32"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="k2"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="333.04"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="k3"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="320.51"
                            y="60.43"
                            width="5.92"
                            height="10.07"
                            key="p9"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="308.68"
                            y="60.43"
                            width="5.92"
                            height="10.07"
                            key="p10"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 3,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="266.22"
                            y="60.43"
                            width="5.92"
                            height="10.07"
                            key="p11"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 3,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="181.66"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="p12"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="151.38"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.rect
                            class="cls-1"
                            x="121.11"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="p13"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="p14"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="60.55"
                            y="60.43"
                            width="23.67"
                            height="10.07"
                            key="p15"
                            animate={{ opacity: [0.6, 1, 1, 0.8, 0.6] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="48.03"
                            y="60.43"
                            width="5.92"
                            height="10.07"
                            key="p16"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            y="65.46"
                            width="11.83"
                            height="5.04"
                            key="p17"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="526.53"
                            y="30.21"
                            width="11.83"
                            height="5.04"
                            key="p18"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="532.45"
                            y="40.28"
                            width="5.92"
                            height="5.04"
                            key="p16"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="284.32"
                            y="50.36"
                            width="11.83"
                            height="5.04"
                            key="p19"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="242.21"
                            y="50.36"
                            width="11.83"
                            height="5.04"
                            key="p20"
                            animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="181.66"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p21"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="151.38"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p22"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="121.11"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p23"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p24"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="60.55"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p25"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="30.28"
                            y="45.32"
                            width="23.67"
                            height="10.07"
                            key="p26"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            y="50.36"
                            width="11.83"
                            height="5.04"
                            key="p27"
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            y="35.25"
                            width="11.83"
                            height="5.04"
                            key="p28"
                            animate={{ opacity: [0.4, 0.7, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            y="20.14"
                            width="5.92"
                            height="5.04"
                            key="p29"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="526.53"
                            y="15.11"
                            width="11.83"
                            height="5.04"
                            key="p30"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="484.42"
                            y="30.21"
                            width="11.83"
                            height="5.04"
                            key="p31"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="465.98"
                            y="30.21"
                            width="11.83"
                            height="5.04"
                            key="p32"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="211.93"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                            key="p33"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="242.21"
                            y="35.25"
                            width="5.92"
                            height="5.04"
                            key="p34"
                            animate={{ opacity: [0.4, 0.7, 0.4] }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="254.04"
                            y="35.25"
                            width="5.92"
                            height="5.04"
                        />
                        <motion.polygon
                            class="cls-1"
                            points="356.71 35.25 326.43 35.25 326.43 30.21 302.76 30.21 302.76 35.25 272.49 35.25 272.49 40.28 302.76 40.28 326.43 40.28 356.71 40.28 356.71 35.25"
                        />
                        <motion.rect
                            class="cls-1"
                            x="181.66"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.rect
                            class="cls-1"
                            x="151.38"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.rect
                            class="cls-1"
                            x="121.11"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="35.25"
                            width="11.83"
                            height="5.04"
                            key="p35"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="60.55"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.rect
                            class="cls-1"
                            x="30.28"
                            y="30.21"
                            width="23.67"
                            height="10.07"
                        />
                        <motion.polygon
                            class="cls-1"
                            points="296.15 25.18 302.76 25.18 326.43 25.18 333.04 25.18 356.71 25.18 363.32 25.18 386.98 25.18 393.59 25.18 417.26 25.18 423.87 25.18 447.54 25.18 477.81 25.18 477.81 20.14 447.54 20.14 447.54 15.11 423.87 15.11 423.87 20.14 417.26 20.14 417.26 15.11 393.59 15.11 393.59 20.14 386.98 20.14 386.98 15.11 363.32 15.11 363.32 20.14 356.71 20.14 356.71 15.11 333.04 15.11 333.04 20.14 326.43 20.14 326.43 15.11 302.76 15.11 302.76 20.14 296.15 20.14 296.15 15.11 272.49 15.11 272.49 20.14 265.88 20.14 265.88 15.11 242.21 15.11 242.21 20.14 235.6 20.14 235.6 15.11 211.93 15.11 211.93 20.14 205.32 20.14 205.32 15.11 181.66 15.11 181.66 20.14 175.05 20.14 175.05 15.11 151.38 15.11 151.38 25.18 163.21 25.18 175.05 25.18 181.66 25.18 205.32 25.18 211.93 25.18 235.6 25.18 242.21 25.18 265.88 25.18 272.49 25.18 296.15 25.18"
                            key="k10"
                            animate={{ opacity: [0.6, 0.9, 0.6] }}
                            transition={{
                                duration: 8,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="121.11"
                            y="15.11"
                            width="23.67"
                            height="10.07"
                            key="k11"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="15.11"
                            width="23.67"
                            height="10.07"
                            key="k12"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="60.55"
                            y="15.11"
                            width="23.67"
                            height="10.07"
                            key="k13"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="30.28"
                            y="15.11"
                            width="23.67"
                            height="10.07"
                            key="k14"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="514.7"
                            y="5.04"
                            width="23.67"
                            height="5.04"
                            key="p36"
                            animate={{ opacity: [0.2, 0.5, 0.2] }}
                            transition={{
                                duration: 2,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.polygon
                            class="cls-1"
                            points="508.09 10.07 508.09 5.04 477.81 5.04 477.81 0 454.14 0 454.14 5.04 454.14 10.07 477.81 10.07 508.09 10.07"
                            key="p39"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="423.87"
                            width="23.67"
                            height="10.07"
                            key="p38"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="393.59"
                            width="23.67"
                            height="10.07"
                            key="p37"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1.5,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="363.32"
                            width="23.67"
                            height="10.07"
                            key="p40"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="333.04"
                            width="23.67"
                            height="10.07"
                            key="p41"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="302.76"
                            width="23.67"
                            height="10.07"
                            key="p42"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 2,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="272.49"
                            width="23.67"
                            height="10.07"
                            key="p43"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="151.38"
                            y="5.04"
                            width="23.67"
                            height="5.04"
                            key="p44"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="121.11"
                            y="5.04"
                            width="23.67"
                            height="5.04"
                            key="p44"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="90.83"
                            y="5.04"
                            width="11.83"
                            height="5.04"
                            key="p45"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="60.55"
                            width="23.67"
                            height="10.07"
                            key="p46"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            x="30.28"
                            width="23.67"
                            height="10.07"
                            key="p47"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                        <motion.rect
                            class="cls-1"
                            width="23.67"
                            height="5.04"
                            key="p48"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 6,
                                ease: "easeIn",
                                repeat: Infinity,
                                delay: 1,
                            }}
                        />
                    </svg>
                </SectionPC>}
        </>
    )
}

export default ThickDiv1
