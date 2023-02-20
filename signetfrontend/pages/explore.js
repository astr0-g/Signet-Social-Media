import Head from "next/head"
import AllMessagelist from "../components/AllMessagelist"
import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"

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
    width: 100%;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Whitespace = styled.div`
    width: 100%;
    max-width: 1920px;
    height: 4rem;
`

export default function Dashboard() {
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
                <Whitespace />
                <AllMessagelist />
                <div className="mt-20" />
            </Section>
        </SectionContainer>
    )
}
