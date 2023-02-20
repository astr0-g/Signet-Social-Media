import Head from "next/head"
import styles from "../styles/Home.module.css"
import Dashboard from "../components/Dashboard"
import Welcome from "../components/Welcome"
import NavBar from "../components/NavBar"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"
import Footer from "../components/Footer"
import styled from "styled-components"
import { motion } from "framer-motion"

export default function Home() {
    const { address } = useAccount()
    return (
        <motion.div
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
            <Head>
                <title>Signet</title>
                <meta name="description" content="2" />
                <link rel="icon" href="/logoBlack.png" />
            </Head>
            <Dashboard />
        </motion.div>
    )
}
