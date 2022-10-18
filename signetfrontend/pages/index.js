import Head from "next/head"
import styles from "../styles/Home.module.css"
import Dashboard from "../components/Dashboard"
import Welcome from "../components/Welcome"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"
import Footer from "../components/Footer"
export default function Home() {
    const { address } = useAccount()
    return (
        <div>
            <Head>
                <title>Signet</title>
                <meta name="description" content="2" />
                <link rel="icon" href="/logo.ico" />
            </Head>
            <div>
                <nav className={styles.navBar}>
                    <img src="/logo2.png" />
                    {!address ? <div /> : <ConnectButton />}
                </nav>
            </div>
            {!address ? <Welcome /> : <Dashboard />}
            {/* <Footer /> */}
        </div>
    )
}
