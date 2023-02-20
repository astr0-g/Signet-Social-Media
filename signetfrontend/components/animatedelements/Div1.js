import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const Section = styled.div`
    width: 100%;
    height: 4.25rem;
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

const Div1 = () => {
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
                        viewBox="0 0 313.19 48.9"
                    >
                        <g>
                            <motion.polygon
                                class="cls-4"
                                points="12.01 8.1 .53 19.58 .53 11.06 3.49 8.1 12.01 8.1"
                                fill="#fff"
                                key="p1"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 11,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="23.85 8.1 4.11 27.84 .53 27.84 .53 22.91 15.33 8.1 23.85 8.1"
                                fill="#fff"
                                key="p2"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 10,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="35.69 8.1 15.96 27.84 7.44 27.84 27.18 8.1 35.69 8.1"
                                fill="#fff"
                                key="p3"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 9,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="47.54 8.1 27.8 27.84 19.28 27.84 39.02 8.1 47.54 8.1"
                                fill="#fff"
                                key="p4"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 8,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="59.38 8.1 39.64 27.84 31.12 27.84 50.87 8.1 59.38 8.1"
                                fill="#fff"
                                key="p5"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 7,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="71.23 8.1 51.49 27.84 42.97 27.84 62.71 8.1 71.23 8.1"
                                fill="#fff"
                                key="p6"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 6,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="83.07 8.1 63.33 27.84 54.81 27.84 74.56 8.1 83.07 8.1"
                                fill="#fff"
                                key="p7"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 5,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="94.92 8.1 75.17 27.84 66.66 27.84 86.4 8.1 94.92 8.1"
                                fill="#fff"
                                key="p8"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 4,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="106.76 8.1 87.02 27.84 78.5 27.84 98.24 8.1 106.76 8.1"
                                fill="#fff"
                                key="p9"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 3,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="118.6 8.1 98.86 27.84 90.35 27.84 110.09 8.1 118.6 8.1"
                                fill="#fff"
                                key="p10"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 2,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="130.45 8.1 110.71 27.84 102.19 27.84 121.93 8.1 130.45 8.1"
                                fill="#fff"
                                key="p11"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 1,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="142.29 8.1 122.55 27.84 114.03 27.84 133.77 8.1 142.29 8.1"
                                fill="#fff"
                                key="p12"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="154.13 8.1 134.4 27.84 125.87 27.84 145.62 8.1 154.13 8.1"
                                fill="#fff"
                                key="p13"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="165.98 8.1 146.24 27.84 137.72 27.84 157.46 8.1 165.98 8.1"
                                fill="#fff"
                                key="p14"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="177.82 8.1 158.08 27.84 149.56 27.84 169.31 8.1 177.82 8.1"
                                fill="#fff"
                                key="p15"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="189.67 8.1 169.93 27.84 161.41 27.84 181.15 8.1 189.67 8.1"
                                fill="#fff"
                                key="p16"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="201.51 8.1 181.77 27.84 173.25 27.84 193 8.1 201.51 8.1"
                                fill="#fff"
                                key="p17"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="213.35 8.1 193.61 27.84 185.1 27.84 204.84 8.1 213.35 8.1"
                                fill="#fff"
                                key="p18"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 1,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="225.2 8.1 205.46 27.84 196.94 27.84 216.68 8.1 225.2 8.1"
                                fill="#fff"
                                key="p19"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 2,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="237.04 8.1 217.3 27.84 208.78 27.84 228.53 8.1 237.04 8.1"
                                fill="#fff"
                                key="p20"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 3,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="248.89 8.1 229.15 27.84 220.63 27.84 240.37 8.1 248.89 8.1"
                                fill="#fff"
                                key="p21"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 4,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="260.73 8.1 240.99 27.84 232.47 27.84 252.21 8.1 260.73 8.1"
                                fill="#fff"
                                key="p22"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 5,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="272.57 8.1 252.84 27.84 244.31 27.84 264.06 8.1 272.57 8.1"
                                fill="#fff"
                                key="p23"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 6,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="284.42 8.1 264.68 27.84 256.16 27.84 275.9 8.1 284.42 8.1"
                                fill="#fff"
                                key="p24"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 7,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="296.26 8.1 276.52 27.84 268 27.84 287.75 8.1 296.26 8.1"
                                fill="#fff"
                                key="p25"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 8,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="308.11 8.1 288.37 27.84 279.85 27.84 299.59 8.1 308.11 8.1"
                                fill="#fff"
                                key="p26"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 9,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="312.76 8.1 312.76 15.29 300.21 27.84 291.69 27.84 311.44 8.1 312.76 8.1"
                                fill="#fff"
                                key="p27"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 10,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="312.76 18.62 312.76 27.14 312.05 27.84 303.54 27.84 312.76 18.62"
                                fill="#fff"
                                key="p28"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 11,
                                }}
                            />
                        </g>
                        <g>
                            <polyline
                                class="cls-3"
                                strokeWidth={0.73}
                                points=".53 48.9 .53 38.04 6.94 31.63 83.77 31.63 87.31 35.16 133.53 35.16"
                                fill="none"
                                stroke="#fff"
                            />
                            <motion.polygon
                                class="cls-3"
                                strokeWidth={0.73}
                                points=".36 35.58 4.31 31.63 .36 31.63 .36 35.58"
                                fill="none"
                                stroke="#fff"
                            />
                            <motion.polygon
                                class="cls-4"
                                points="84.43 34.42 83.11 33.11 48.07 33.11 48.81 33.85 81.3 33.85 81.84 34.38 84.43 34.42"
                                fill="#fff"
                            />
                            <polyline
                                class="cls-3"
                                strokeWidth={0.73}
                                points="131.36 34.14 135.44 34.14 135.44 36.08 134.08 37.44 121.15 37.44"
                                fill="none"
                                stroke="#fff"
                            />
                            <path
                                class="cls-4"
                                d="m93.47,35.16l.97-.97h11.93l.52-.52h11.83l.59.59h5.33s.88,1.01.94.94c.06-.06-32.12-.04-32.12-.04Z"
                                fill="#fff"
                            />
                        </g>
                        <g>
                            <polyline
                                class="cls-3"
                                strokeWidth={0.73}
                                points="312.59 48.9 312.59 38.04 306.18 31.63 229.35 31.63 225.82 35.16 179.59 35.16"
                                fill="none"
                                stroke="#fff"
                            />
                            <motion.polygon
                                class="cls-3"
                                strokeWidth={0.73}
                                points="312.76 35.58 308.81 31.63 312.76 31.63 312.76 35.58"
                                fill="none"
                                stroke="#fff"
                            />
                            <motion.polygon
                                class="cls-4"
                                points="228.7 34.42 230.01 33.11 265.05 33.11 264.31 33.85 231.82 33.85 231.29 34.38 228.7 34.42"
                                fill="#fff"
                            />
                            <polyline
                                class="cls-3"
                                strokeWidth={0.73}
                                points="181.76 34.14 177.69 34.14 177.69 36.08 179.04 37.44 191.97 37.44"
                                fill="none"
                                stroke="#fff"
                            />
                            <path
                                class="cls-4"
                                d="m219.66,35.16l-.97-.97h-11.93l-.52-.52h-11.83l-.59.59h-5.33s-.88,1.01-.94.94,32.12-.04,32.12-.04Z"
                                fill="#fff"
                            />
                        </g>
                        <motion.polygon
                            class="cls-1"
                            points="23.02 3.45 25.29 1.18 73.62 1.18 74.81 0 101.99 0 105.96 3.97 81.01 3.97 80.28 3.24 39.36 3.24 37.8 4.8 25.14 4.8 23.02 3.45"
                            fill="#fff"
                        />
                        <polyline
                            class="cls-2"
                            strokeWidth={0.47}
                            points="22.23 1.92 3.92 1.92 1.01 4.83"
                            stroke="#fff"
                            fill="none"
                        />
                        <polyline
                            class="cls-2"
                            strokeWidth={0.47}
                            points="108.53 1.21 122.33 1.21 125.77 4.66"
                            stroke="#fff"
                            fill="none"
                        />
                        <motion.polygon
                            class="cls-1"
                            points="291.02 3.45 288.75 1.18 240.41 1.18 239.23 0 212.05 0 208.08 3.97 233.03 3.97 233.76 3.24 274.68 3.24 276.24 4.8 288.9 4.8 291.02 3.45"
                            fill="#fff"
                        />
                        <polyline
                            class="cls-2"
                            strokeWidth={0.47}
                            points="291.81 1.92 310.12 1.92 313.03 4.83"
                            stroke="#fff"
                            fill="none"
                        />
                        <polyline
                            class="cls-2"
                            strokeWidth={0.47}
                            points="205.5 1.21 191.71 1.21 188.27 4.66"
                            stroke="#fff"
                            fill="none"
                        />
                    </svg>
                </Section>
            )}
            {desktop && (
                <SectionPC>
                    <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 313.19 48.9"
                    >
                        <g>
                            <motion.polygon
                                class="cls-4"
                                points="12.01 8.1 .53 19.58 .53 11.06 3.49 8.1 12.01 8.1"
                                fill="#fff"
                                key="p1"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 11,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="23.85 8.1 4.11 27.84 .53 27.84 .53 22.91 15.33 8.1 23.85 8.1"
                                fill="#fff"
                                key="p2"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 10,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="35.69 8.1 15.96 27.84 7.44 27.84 27.18 8.1 35.69 8.1"
                                fill="#fff"
                                key="p3"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 9,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="47.54 8.1 27.8 27.84 19.28 27.84 39.02 8.1 47.54 8.1"
                                fill="#fff"
                                key="p4"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 8,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="59.38 8.1 39.64 27.84 31.12 27.84 50.87 8.1 59.38 8.1"
                                fill="#fff"
                                key="p5"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 7,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="71.23 8.1 51.49 27.84 42.97 27.84 62.71 8.1 71.23 8.1"
                                fill="#fff"
                                key="p6"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 6,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="83.07 8.1 63.33 27.84 54.81 27.84 74.56 8.1 83.07 8.1"
                                fill="#fff"
                                key="p7"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 5,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="94.92 8.1 75.17 27.84 66.66 27.84 86.4 8.1 94.92 8.1"
                                fill="#fff"
                                key="p8"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 4,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="106.76 8.1 87.02 27.84 78.5 27.84 98.24 8.1 106.76 8.1"
                                fill="#fff"
                                key="p9"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 3,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="118.6 8.1 98.86 27.84 90.35 27.84 110.09 8.1 118.6 8.1"
                                fill="#fff"
                                key="p10"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 2,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="130.45 8.1 110.71 27.84 102.19 27.84 121.93 8.1 130.45 8.1"
                                fill="#fff"
                                key="p11"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 1,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="142.29 8.1 122.55 27.84 114.03 27.84 133.77 8.1 142.29 8.1"
                                fill="#fff"
                                key="p12"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="154.13 8.1 134.4 27.84 125.87 27.84 145.62 8.1 154.13 8.1"
                                fill="#fff"
                                key="p13"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="165.98 8.1 146.24 27.84 137.72 27.84 157.46 8.1 165.98 8.1"
                                fill="#fff"
                                key="p14"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="177.82 8.1 158.08 27.84 149.56 27.84 169.31 8.1 177.82 8.1"
                                fill="#fff"
                                key="p15"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="189.67 8.1 169.93 27.84 161.41 27.84 181.15 8.1 189.67 8.1"
                                fill="#fff"
                                key="p16"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="201.51 8.1 181.77 27.84 173.25 27.84 193 8.1 201.51 8.1"
                                fill="#fff"
                                key="p17"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="213.35 8.1 193.61 27.84 185.1 27.84 204.84 8.1 213.35 8.1"
                                fill="#fff"
                                key="p18"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 1,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="225.2 8.1 205.46 27.84 196.94 27.84 216.68 8.1 225.2 8.1"
                                fill="#fff"
                                key="p19"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 2,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="237.04 8.1 217.3 27.84 208.78 27.84 228.53 8.1 237.04 8.1"
                                fill="#fff"
                                key="p20"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 3,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="248.89 8.1 229.15 27.84 220.63 27.84 240.37 8.1 248.89 8.1"
                                fill="#fff"
                                key="p21"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 4,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="260.73 8.1 240.99 27.84 232.47 27.84 252.21 8.1 260.73 8.1"
                                fill="#fff"
                                key="p22"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 5,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="272.57 8.1 252.84 27.84 244.31 27.84 264.06 8.1 272.57 8.1"
                                fill="#fff"
                                key="p23"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 6,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="284.42 8.1 264.68 27.84 256.16 27.84 275.9 8.1 284.42 8.1"
                                fill="#fff"
                                key="p24"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 7,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="296.26 8.1 276.52 27.84 268 27.84 287.75 8.1 296.26 8.1"
                                fill="#fff"
                                key="p25"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 8,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="308.11 8.1 288.37 27.84 279.85 27.84 299.59 8.1 308.11 8.1"
                                fill="#fff"
                                key="p26"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 9,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="312.76 8.1 312.76 15.29 300.21 27.84 291.69 27.84 311.44 8.1 312.76 8.1"
                                fill="#fff"
                                key="p27"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 10,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="312.76 18.62 312.76 27.14 312.05 27.84 303.54 27.84 312.76 18.62"
                                fill="#fff"
                                key="p28"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 11,
                                }}
                            />
                        </g>
                        <g>
                            <polyline
                                class="cls-3"
                                strokeWidth={0.73}
                                points=".53 48.9 .53 38.04 6.94 31.63 83.77 31.63 87.31 35.16 133.53 35.16"
                                fill="none"
                                stroke="#fff"
                            />
                            <motion.polygon
                                class="cls-3"
                                strokeWidth={0.73}
                                points=".36 35.58 4.31 31.63 .36 31.63 .36 35.58"
                                fill="none"
                                stroke="#fff"
                            />
                            <motion.polygon
                                class="cls-4"
                                points="84.43 34.42 83.11 33.11 48.07 33.11 48.81 33.85 81.3 33.85 81.84 34.38 84.43 34.42"
                                fill="#fff"
                            />
                            <polyline
                                class="cls-3"
                                strokeWidth={0.73}
                                points="131.36 34.14 135.44 34.14 135.44 36.08 134.08 37.44 121.15 37.44"
                                fill="none"
                                stroke="#fff"
                            />
                            <path
                                class="cls-4"
                                d="m93.47,35.16l.97-.97h11.93l.52-.52h11.83l.59.59h5.33s.88,1.01.94.94c.06-.06-32.12-.04-32.12-.04Z"
                                fill="#fff"
                            />
                        </g>
                        <g>
                            <polyline
                                class="cls-3"
                                strokeWidth={0.73}
                                points="312.59 48.9 312.59 38.04 306.18 31.63 229.35 31.63 225.82 35.16 179.59 35.16"
                                fill="none"
                                stroke="#fff"
                            />
                            <motion.polygon
                                class="cls-3"
                                strokeWidth={0.73}
                                points="312.76 35.58 308.81 31.63 312.76 31.63 312.76 35.58"
                                fill="none"
                                stroke="#fff"
                            />
                            <motion.polygon
                                class="cls-4"
                                points="228.7 34.42 230.01 33.11 265.05 33.11 264.31 33.85 231.82 33.85 231.29 34.38 228.7 34.42"
                                fill="#fff"
                            />
                            <polyline
                                class="cls-3"
                                strokeWidth={0.73}
                                points="181.76 34.14 177.69 34.14 177.69 36.08 179.04 37.44 191.97 37.44"
                                fill="none"
                                stroke="#fff"
                            />
                            <path
                                class="cls-4"
                                d="m219.66,35.16l-.97-.97h-11.93l-.52-.52h-11.83l-.59.59h-5.33s-.88,1.01-.94.94,32.12-.04,32.12-.04Z"
                                fill="#fff"
                            />
                        </g>
                        <motion.polygon
                            class="cls-1"
                            points="23.02 3.45 25.29 1.18 73.62 1.18 74.81 0 101.99 0 105.96 3.97 81.01 3.97 80.28 3.24 39.36 3.24 37.8 4.8 25.14 4.8 23.02 3.45"
                            fill="#fff"
                        />
                        <polyline
                            class="cls-2"
                            strokeWidth={0.47}
                            points="22.23 1.92 3.92 1.92 1.01 4.83"
                            stroke="#fff"
                            fill="none"
                        />
                        <polyline
                            class="cls-2"
                            strokeWidth={0.47}
                            points="108.53 1.21 122.33 1.21 125.77 4.66"
                            stroke="#fff"
                            fill="none"
                        />
                        <motion.polygon
                            class="cls-1"
                            points="291.02 3.45 288.75 1.18 240.41 1.18 239.23 0 212.05 0 208.08 3.97 233.03 3.97 233.76 3.24 274.68 3.24 276.24 4.8 288.9 4.8 291.02 3.45"
                            fill="#fff"
                        />
                        <polyline
                            class="cls-2"
                            strokeWidth={0.47}
                            points="291.81 1.92 310.12 1.92 313.03 4.83"
                            stroke="#fff"
                            fill="none"
                        />
                        <polyline
                            class="cls-2"
                            strokeWidth={0.47}
                            points="205.5 1.21 191.71 1.21 188.27 4.66"
                            stroke="#fff"
                            fill="none"
                        />
                    </svg>
                    <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 313.19 48.9"
                    >
                        <g>
                            <motion.polygon
                                class="cls-4"
                                points="12.01 8.1 .53 19.58 .53 11.06 3.49 8.1 12.01 8.1"
                                fill="#fff"
                                key="p1"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 11,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="23.85 8.1 4.11 27.84 .53 27.84 .53 22.91 15.33 8.1 23.85 8.1"
                                fill="#fff"
                                key="p2"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 10,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="35.69 8.1 15.96 27.84 7.44 27.84 27.18 8.1 35.69 8.1"
                                fill="#fff"
                                key="p3"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 9,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="47.54 8.1 27.8 27.84 19.28 27.84 39.02 8.1 47.54 8.1"
                                fill="#fff"
                                key="p4"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 8,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="59.38 8.1 39.64 27.84 31.12 27.84 50.87 8.1 59.38 8.1"
                                fill="#fff"
                                key="p5"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 7,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="71.23 8.1 51.49 27.84 42.97 27.84 62.71 8.1 71.23 8.1"
                                fill="#fff"
                                key="p6"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 6,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="83.07 8.1 63.33 27.84 54.81 27.84 74.56 8.1 83.07 8.1"
                                fill="#fff"
                                key="p7"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 5,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="94.92 8.1 75.17 27.84 66.66 27.84 86.4 8.1 94.92 8.1"
                                fill="#fff"
                                key="p8"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 4,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="106.76 8.1 87.02 27.84 78.5 27.84 98.24 8.1 106.76 8.1"
                                fill="#fff"
                                key="p9"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 3,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="118.6 8.1 98.86 27.84 90.35 27.84 110.09 8.1 118.6 8.1"
                                fill="#fff"
                                key="p10"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 2,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="130.45 8.1 110.71 27.84 102.19 27.84 121.93 8.1 130.45 8.1"
                                fill="#fff"
                                key="p11"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 1,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="142.29 8.1 122.55 27.84 114.03 27.84 133.77 8.1 142.29 8.1"
                                fill="#fff"
                                key="p12"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="154.13 8.1 134.4 27.84 125.87 27.84 145.62 8.1 154.13 8.1"
                                fill="#fff"
                                key="p13"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="165.98 8.1 146.24 27.84 137.72 27.84 157.46 8.1 165.98 8.1"
                                fill="#fff"
                                key="p14"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="177.82 8.1 158.08 27.84 149.56 27.84 169.31 8.1 177.82 8.1"
                                fill="#fff"
                                key="p15"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="189.67 8.1 169.93 27.84 161.41 27.84 181.15 8.1 189.67 8.1"
                                fill="#fff"
                                key="p16"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="201.51 8.1 181.77 27.84 173.25 27.84 193 8.1 201.51 8.1"
                                fill="#fff"
                                key="p17"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="213.35 8.1 193.61 27.84 185.1 27.84 204.84 8.1 213.35 8.1"
                                fill="#fff"
                                key="p18"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 1,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="225.2 8.1 205.46 27.84 196.94 27.84 216.68 8.1 225.2 8.1"
                                fill="#fff"
                                key="p19"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 2,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="237.04 8.1 217.3 27.84 208.78 27.84 228.53 8.1 237.04 8.1"
                                fill="#fff"
                                key="p20"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 3,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="248.89 8.1 229.15 27.84 220.63 27.84 240.37 8.1 248.89 8.1"
                                fill="#fff"
                                key="p21"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 4,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="260.73 8.1 240.99 27.84 232.47 27.84 252.21 8.1 260.73 8.1"
                                fill="#fff"
                                key="p22"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 5,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="272.57 8.1 252.84 27.84 244.31 27.84 264.06 8.1 272.57 8.1"
                                fill="#fff"
                                key="p23"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 6,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="284.42 8.1 264.68 27.84 256.16 27.84 275.9 8.1 284.42 8.1"
                                fill="#fff"
                                key="p24"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 7,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="296.26 8.1 276.52 27.84 268 27.84 287.75 8.1 296.26 8.1"
                                fill="#fff"
                                key="p25"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 8,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="308.11 8.1 288.37 27.84 279.85 27.84 299.59 8.1 308.11 8.1"
                                fill="#fff"
                                key="p26"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 9,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="312.76 8.1 312.76 15.29 300.21 27.84 291.69 27.84 311.44 8.1 312.76 8.1"
                                fill="#fff"
                                key="p27"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 10,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="312.76 18.62 312.76 27.14 312.05 27.84 303.54 27.84 312.76 18.62"
                                fill="#fff"
                                key="p28"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 11,
                                }}
                            />
                        </g>
                        <g>
                            <polyline
                                class="cls-3"
                                strokeWidth={0.73}
                                points=".53 48.9 .53 38.04 6.94 31.63 83.77 31.63 87.31 35.16 133.53 35.16"
                                fill="none"
                                stroke="#fff"
                            />
                            <motion.polygon
                                class="cls-3"
                                strokeWidth={0.73}
                                points=".36 35.58 4.31 31.63 .36 31.63 .36 35.58"
                                fill="none"
                                stroke="#fff"
                            />
                            <motion.polygon
                                class="cls-4"
                                points="84.43 34.42 83.11 33.11 48.07 33.11 48.81 33.85 81.3 33.85 81.84 34.38 84.43 34.42"
                                fill="#fff"
                            />
                            <polyline
                                class="cls-3"
                                strokeWidth={0.73}
                                points="131.36 34.14 135.44 34.14 135.44 36.08 134.08 37.44 121.15 37.44"
                                fill="none"
                                stroke="#fff"
                            />
                            <path
                                class="cls-4"
                                d="m93.47,35.16l.97-.97h11.93l.52-.52h11.83l.59.59h5.33s.88,1.01.94.94c.06-.06-32.12-.04-32.12-.04Z"
                                fill="#fff"
                            />
                        </g>
                        <g>
                            <polyline
                                class="cls-3"
                                strokeWidth={0.73}
                                points="312.59 48.9 312.59 38.04 306.18 31.63 229.35 31.63 225.82 35.16 179.59 35.16"
                                fill="none"
                                stroke="#fff"
                            />
                            <motion.polygon
                                class="cls-3"
                                strokeWidth={0.73}
                                points="312.76 35.58 308.81 31.63 312.76 31.63 312.76 35.58"
                                fill="none"
                                stroke="#fff"
                            />
                            <motion.polygon
                                class="cls-4"
                                points="228.7 34.42 230.01 33.11 265.05 33.11 264.31 33.85 231.82 33.85 231.29 34.38 228.7 34.42"
                                fill="#fff"
                            />
                            <polyline
                                class="cls-3"
                                strokeWidth={0.73}
                                points="181.76 34.14 177.69 34.14 177.69 36.08 179.04 37.44 191.97 37.44"
                                fill="none"
                                stroke="#fff"
                            />
                            <path
                                class="cls-4"
                                d="m219.66,35.16l-.97-.97h-11.93l-.52-.52h-11.83l-.59.59h-5.33s-.88,1.01-.94.94,32.12-.04,32.12-.04Z"
                                fill="#fff"
                            />
                        </g>
                        <motion.polygon
                            class="cls-1"
                            points="23.02 3.45 25.29 1.18 73.62 1.18 74.81 0 101.99 0 105.96 3.97 81.01 3.97 80.28 3.24 39.36 3.24 37.8 4.8 25.14 4.8 23.02 3.45"
                            fill="#fff"
                        />
                        <polyline
                            class="cls-2"
                            strokeWidth={0.47}
                            points="22.23 1.92 3.92 1.92 1.01 4.83"
                            stroke="#fff"
                            fill="none"
                        />
                        <polyline
                            class="cls-2"
                            strokeWidth={0.47}
                            points="108.53 1.21 122.33 1.21 125.77 4.66"
                            stroke="#fff"
                            fill="none"
                        />
                        <motion.polygon
                            class="cls-1"
                            points="291.02 3.45 288.75 1.18 240.41 1.18 239.23 0 212.05 0 208.08 3.97 233.03 3.97 233.76 3.24 274.68 3.24 276.24 4.8 288.9 4.8 291.02 3.45"
                            fill="#fff"
                        />
                        <polyline
                            class="cls-2"
                            strokeWidth={0.47}
                            points="291.81 1.92 310.12 1.92 313.03 4.83"
                            stroke="#fff"
                            fill="none"
                        />
                        <polyline
                            class="cls-2"
                            strokeWidth={0.47}
                            points="205.5 1.21 191.71 1.21 188.27 4.66"
                            stroke="#fff"
                            fill="none"
                        />
                    </svg>
                    <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 313.19 48.9"
                    >
                        <g>
                            <motion.polygon
                                class="cls-4"
                                points="12.01 8.1 .53 19.58 .53 11.06 3.49 8.1 12.01 8.1"
                                fill="#fff"
                                key="p1"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 11,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="23.85 8.1 4.11 27.84 .53 27.84 .53 22.91 15.33 8.1 23.85 8.1"
                                fill="#fff"
                                key="p2"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 10,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="35.69 8.1 15.96 27.84 7.44 27.84 27.18 8.1 35.69 8.1"
                                fill="#fff"
                                key="p3"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 9,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="47.54 8.1 27.8 27.84 19.28 27.84 39.02 8.1 47.54 8.1"
                                fill="#fff"
                                key="p4"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 8,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="59.38 8.1 39.64 27.84 31.12 27.84 50.87 8.1 59.38 8.1"
                                fill="#fff"
                                key="p5"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 7,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="71.23 8.1 51.49 27.84 42.97 27.84 62.71 8.1 71.23 8.1"
                                fill="#fff"
                                key="p6"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 6,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="83.07 8.1 63.33 27.84 54.81 27.84 74.56 8.1 83.07 8.1"
                                fill="#fff"
                                key="p7"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 5,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="94.92 8.1 75.17 27.84 66.66 27.84 86.4 8.1 94.92 8.1"
                                fill="#fff"
                                key="p8"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 4,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="106.76 8.1 87.02 27.84 78.5 27.84 98.24 8.1 106.76 8.1"
                                fill="#fff"
                                key="p9"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 3,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="118.6 8.1 98.86 27.84 90.35 27.84 110.09 8.1 118.6 8.1"
                                fill="#fff"
                                key="p10"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 2,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="130.45 8.1 110.71 27.84 102.19 27.84 121.93 8.1 130.45 8.1"
                                fill="#fff"
                                key="p11"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 1,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="142.29 8.1 122.55 27.84 114.03 27.84 133.77 8.1 142.29 8.1"
                                fill="#fff"
                                key="p12"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="154.13 8.1 134.4 27.84 125.87 27.84 145.62 8.1 154.13 8.1"
                                fill="#fff"
                                key="p13"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="165.98 8.1 146.24 27.84 137.72 27.84 157.46 8.1 165.98 8.1"
                                fill="#fff"
                                key="p14"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="177.82 8.1 158.08 27.84 149.56 27.84 169.31 8.1 177.82 8.1"
                                fill="#fff"
                                key="p15"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="189.67 8.1 169.93 27.84 161.41 27.84 181.15 8.1 189.67 8.1"
                                fill="#fff"
                                key="p16"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="201.51 8.1 181.77 27.84 173.25 27.84 193 8.1 201.51 8.1"
                                fill="#fff"
                                key="p17"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="213.35 8.1 193.61 27.84 185.1 27.84 204.84 8.1 213.35 8.1"
                                fill="#fff"
                                key="p18"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 1,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="225.2 8.1 205.46 27.84 196.94 27.84 216.68 8.1 225.2 8.1"
                                fill="#fff"
                                key="p19"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 2,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="237.04 8.1 217.3 27.84 208.78 27.84 228.53 8.1 237.04 8.1"
                                fill="#fff"
                                key="p20"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 3,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="248.89 8.1 229.15 27.84 220.63 27.84 240.37 8.1 248.89 8.1"
                                fill="#fff"
                                key="p21"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 4,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="260.73 8.1 240.99 27.84 232.47 27.84 252.21 8.1 260.73 8.1"
                                fill="#fff"
                                key="p22"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 5,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="272.57 8.1 252.84 27.84 244.31 27.84 264.06 8.1 272.57 8.1"
                                fill="#fff"
                                key="p23"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 6,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="284.42 8.1 264.68 27.84 256.16 27.84 275.9 8.1 284.42 8.1"
                                fill="#fff"
                                key="p24"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 7,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="296.26 8.1 276.52 27.84 268 27.84 287.75 8.1 296.26 8.1"
                                fill="#fff"
                                key="p25"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 8,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="308.11 8.1 288.37 27.84 279.85 27.84 299.59 8.1 308.11 8.1"
                                fill="#fff"
                                key="p26"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 9,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="312.76 8.1 312.76 15.29 300.21 27.84 291.69 27.84 311.44 8.1 312.76 8.1"
                                fill="#fff"
                                key="p27"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 10,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="312.76 18.62 312.76 27.14 312.05 27.84 303.54 27.84 312.76 18.62"
                                fill="#fff"
                                key="p28"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 11,
                                }}
                            />
                        </g>
                        <g>
                            <polyline
                                class="cls-3"
                                strokeWidth={0.73}
                                points=".53 48.9 .53 38.04 6.94 31.63 83.77 31.63 87.31 35.16 133.53 35.16"
                                fill="none"
                                stroke="#fff"
                            />
                            <motion.polygon
                                class="cls-3"
                                strokeWidth={0.73}
                                points=".36 35.58 4.31 31.63 .36 31.63 .36 35.58"
                                fill="none"
                                stroke="#fff"
                            />
                            <motion.polygon
                                class="cls-4"
                                points="84.43 34.42 83.11 33.11 48.07 33.11 48.81 33.85 81.3 33.85 81.84 34.38 84.43 34.42"
                                fill="#fff"
                            />
                            <polyline
                                class="cls-3"
                                strokeWidth={0.73}
                                points="131.36 34.14 135.44 34.14 135.44 36.08 134.08 37.44 121.15 37.44"
                                fill="none"
                                stroke="#fff"
                            />
                            <path
                                class="cls-4"
                                d="m93.47,35.16l.97-.97h11.93l.52-.52h11.83l.59.59h5.33s.88,1.01.94.94c.06-.06-32.12-.04-32.12-.04Z"
                                fill="#fff"
                            />
                        </g>
                        <g>
                            <polyline
                                class="cls-3"
                                strokeWidth={0.73}
                                points="312.59 48.9 312.59 38.04 306.18 31.63 229.35 31.63 225.82 35.16 179.59 35.16"
                                fill="none"
                                stroke="#fff"
                            />
                            <motion.polygon
                                class="cls-3"
                                strokeWidth={0.73}
                                points="312.76 35.58 308.81 31.63 312.76 31.63 312.76 35.58"
                                fill="none"
                                stroke="#fff"
                            />
                            <motion.polygon
                                class="cls-4"
                                points="228.7 34.42 230.01 33.11 265.05 33.11 264.31 33.85 231.82 33.85 231.29 34.38 228.7 34.42"
                                fill="#fff"
                            />
                            <polyline
                                class="cls-3"
                                strokeWidth={0.73}
                                points="181.76 34.14 177.69 34.14 177.69 36.08 179.04 37.44 191.97 37.44"
                                fill="none"
                                stroke="#fff"
                            />
                            <path
                                class="cls-4"
                                d="m219.66,35.16l-.97-.97h-11.93l-.52-.52h-11.83l-.59.59h-5.33s-.88,1.01-.94.94,32.12-.04,32.12-.04Z"
                                fill="#fff"
                            />
                        </g>
                        <motion.polygon
                            class="cls-1"
                            points="23.02 3.45 25.29 1.18 73.62 1.18 74.81 0 101.99 0 105.96 3.97 81.01 3.97 80.28 3.24 39.36 3.24 37.8 4.8 25.14 4.8 23.02 3.45"
                            fill="#fff"
                        />
                        <polyline
                            class="cls-2"
                            strokeWidth={0.47}
                            points="22.23 1.92 3.92 1.92 1.01 4.83"
                            stroke="#fff"
                            fill="none"
                        />
                        <polyline
                            class="cls-2"
                            strokeWidth={0.47}
                            points="108.53 1.21 122.33 1.21 125.77 4.66"
                            stroke="#fff"
                            fill="none"
                        />
                        <motion.polygon
                            class="cls-1"
                            points="291.02 3.45 288.75 1.18 240.41 1.18 239.23 0 212.05 0 208.08 3.97 233.03 3.97 233.76 3.24 274.68 3.24 276.24 4.8 288.9 4.8 291.02 3.45"
                            fill="#fff"
                        />
                        <polyline
                            class="cls-2"
                            strokeWidth={0.47}
                            points="291.81 1.92 310.12 1.92 313.03 4.83"
                            stroke="#fff"
                            fill="none"
                        />
                        <polyline
                            class="cls-2"
                            strokeWidth={0.47}
                            points="205.5 1.21 191.71 1.21 188.27 4.66"
                            stroke="#fff"
                            fill="none"
                        />
                    </svg>
                    <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 313.19 48.9"
                    >
                        <g>
                            <motion.polygon
                                class="cls-4"
                                points="12.01 8.1 .53 19.58 .53 11.06 3.49 8.1 12.01 8.1"
                                fill="#fff"
                                key="p1"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 11,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="23.85 8.1 4.11 27.84 .53 27.84 .53 22.91 15.33 8.1 23.85 8.1"
                                fill="#fff"
                                key="p2"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 10,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="35.69 8.1 15.96 27.84 7.44 27.84 27.18 8.1 35.69 8.1"
                                fill="#fff"
                                key="p3"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 9,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="47.54 8.1 27.8 27.84 19.28 27.84 39.02 8.1 47.54 8.1"
                                fill="#fff"
                                key="p4"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 8,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="59.38 8.1 39.64 27.84 31.12 27.84 50.87 8.1 59.38 8.1"
                                fill="#fff"
                                key="p5"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 7,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="71.23 8.1 51.49 27.84 42.97 27.84 62.71 8.1 71.23 8.1"
                                fill="#fff"
                                key="p6"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 6,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="83.07 8.1 63.33 27.84 54.81 27.84 74.56 8.1 83.07 8.1"
                                fill="#fff"
                                key="p7"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 5,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="94.92 8.1 75.17 27.84 66.66 27.84 86.4 8.1 94.92 8.1"
                                fill="#fff"
                                key="p8"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 4,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="106.76 8.1 87.02 27.84 78.5 27.84 98.24 8.1 106.76 8.1"
                                fill="#fff"
                                key="p9"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 3,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="118.6 8.1 98.86 27.84 90.35 27.84 110.09 8.1 118.6 8.1"
                                fill="#fff"
                                key="p10"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 2,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="130.45 8.1 110.71 27.84 102.19 27.84 121.93 8.1 130.45 8.1"
                                fill="#fff"
                                key="p11"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 1,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="142.29 8.1 122.55 27.84 114.03 27.84 133.77 8.1 142.29 8.1"
                                fill="#fff"
                                key="p12"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="154.13 8.1 134.4 27.84 125.87 27.84 145.62 8.1 154.13 8.1"
                                fill="#fff"
                                key="p13"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="165.98 8.1 146.24 27.84 137.72 27.84 157.46 8.1 165.98 8.1"
                                fill="#fff"
                                key="p14"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="177.82 8.1 158.08 27.84 149.56 27.84 169.31 8.1 177.82 8.1"
                                fill="#fff"
                                key="p15"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="189.67 8.1 169.93 27.84 161.41 27.84 181.15 8.1 189.67 8.1"
                                fill="#fff"
                                key="p16"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="201.51 8.1 181.77 27.84 173.25 27.84 193 8.1 201.51 8.1"
                                fill="#fff"
                                key="p17"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 0,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="213.35 8.1 193.61 27.84 185.1 27.84 204.84 8.1 213.35 8.1"
                                fill="#fff"
                                key="p18"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 1,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="225.2 8.1 205.46 27.84 196.94 27.84 216.68 8.1 225.2 8.1"
                                fill="#fff"
                                key="p19"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 2,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="237.04 8.1 217.3 27.84 208.78 27.84 228.53 8.1 237.04 8.1"
                                fill="#fff"
                                key="p20"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 3,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="248.89 8.1 229.15 27.84 220.63 27.84 240.37 8.1 248.89 8.1"
                                fill="#fff"
                                key="p21"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 4,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="260.73 8.1 240.99 27.84 232.47 27.84 252.21 8.1 260.73 8.1"
                                fill="#fff"
                                key="p22"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 5,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="272.57 8.1 252.84 27.84 244.31 27.84 264.06 8.1 272.57 8.1"
                                fill="#fff"
                                key="p23"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 6,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="284.42 8.1 264.68 27.84 256.16 27.84 275.9 8.1 284.42 8.1"
                                fill="#fff"
                                key="p24"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 7,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="296.26 8.1 276.52 27.84 268 27.84 287.75 8.1 296.26 8.1"
                                fill="#fff"
                                key="p25"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 8,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="308.11 8.1 288.37 27.84 279.85 27.84 299.59 8.1 308.11 8.1"
                                fill="#fff"
                                key="p26"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 9,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="312.76 8.1 312.76 15.29 300.21 27.84 291.69 27.84 311.44 8.1 312.76 8.1"
                                fill="#fff"
                                key="p27"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 10,
                                }}
                            />
                            <motion.polygon
                                class="cls-4"
                                points="312.76 18.62 312.76 27.14 312.05 27.84 303.54 27.84 312.76 18.62"
                                fill="#fff"
                                key="p28"
                                animate={{ opacity: [0.4, 1, 1, 1, 0.8, 0.6, 0.4] }}
                                transition={{
                                    duration: 20,
                                    ease: "easeIn",
                                    repeat: Infinity,
                                    delay: 11,
                                }}
                            />
                        </g>
                        <g>
                            <polyline
                                class="cls-3"
                                strokeWidth={0.73}
                                points=".53 48.9 .53 38.04 6.94 31.63 83.77 31.63 87.31 35.16 133.53 35.16"
                                fill="none"
                                stroke="#fff"
                            />
                            <motion.polygon
                                class="cls-3"
                                strokeWidth={0.73}
                                points=".36 35.58 4.31 31.63 .36 31.63 .36 35.58"
                                fill="none"
                                stroke="#fff"
                            />
                            <motion.polygon
                                class="cls-4"
                                points="84.43 34.42 83.11 33.11 48.07 33.11 48.81 33.85 81.3 33.85 81.84 34.38 84.43 34.42"
                                fill="#fff"
                            />
                            <polyline
                                class="cls-3"
                                strokeWidth={0.73}
                                points="131.36 34.14 135.44 34.14 135.44 36.08 134.08 37.44 121.15 37.44"
                                fill="none"
                                stroke="#fff"
                            />
                            <path
                                class="cls-4"
                                d="m93.47,35.16l.97-.97h11.93l.52-.52h11.83l.59.59h5.33s.88,1.01.94.94c.06-.06-32.12-.04-32.12-.04Z"
                                fill="#fff"
                            />
                        </g>
                        <g>
                            <polyline
                                class="cls-3"
                                strokeWidth={0.73}
                                points="312.59 48.9 312.59 38.04 306.18 31.63 229.35 31.63 225.82 35.16 179.59 35.16"
                                fill="none"
                                stroke="#fff"
                            />
                            <motion.polygon
                                class="cls-3"
                                strokeWidth={0.73}
                                points="312.76 35.58 308.81 31.63 312.76 31.63 312.76 35.58"
                                fill="none"
                                stroke="#fff"
                            />
                            <motion.polygon
                                class="cls-4"
                                points="228.7 34.42 230.01 33.11 265.05 33.11 264.31 33.85 231.82 33.85 231.29 34.38 228.7 34.42"
                                fill="#fff"
                            />
                            <polyline
                                class="cls-3"
                                strokeWidth={0.73}
                                points="181.76 34.14 177.69 34.14 177.69 36.08 179.04 37.44 191.97 37.44"
                                fill="none"
                                stroke="#fff"
                            />
                            <path
                                class="cls-4"
                                d="m219.66,35.16l-.97-.97h-11.93l-.52-.52h-11.83l-.59.59h-5.33s-.88,1.01-.94.94,32.12-.04,32.12-.04Z"
                                fill="#fff"
                            />
                        </g>
                        <motion.polygon
                            class="cls-1"
                            points="23.02 3.45 25.29 1.18 73.62 1.18 74.81 0 101.99 0 105.96 3.97 81.01 3.97 80.28 3.24 39.36 3.24 37.8 4.8 25.14 4.8 23.02 3.45"
                            fill="#fff"
                        />
                        <polyline
                            class="cls-2"
                            strokeWidth={0.47}
                            points="22.23 1.92 3.92 1.92 1.01 4.83"
                            stroke="#fff"
                            fill="none"
                        />
                        <polyline
                            class="cls-2"
                            strokeWidth={0.47}
                            points="108.53 1.21 122.33 1.21 125.77 4.66"
                            stroke="#fff"
                            fill="none"
                        />
                        <motion.polygon
                            class="cls-1"
                            points="291.02 3.45 288.75 1.18 240.41 1.18 239.23 0 212.05 0 208.08 3.97 233.03 3.97 233.76 3.24 274.68 3.24 276.24 4.8 288.9 4.8 291.02 3.45"
                            fill="#fff"
                        />
                        <polyline
                            class="cls-2"
                            strokeWidth={0.47}
                            points="291.81 1.92 310.12 1.92 313.03 4.83"
                            stroke="#fff"
                            fill="none"
                        />
                        <polyline
                            class="cls-2"
                            strokeWidth={0.47}
                            points="205.5 1.21 191.71 1.21 188.27 4.66"
                            stroke="#fff"
                            fill="none"
                        />
                    </svg>
                </SectionPC>
            )}
        </>
    )
}

export default Div1
