import Head from "next/head"
import styles from "../styles/Home.module.css"
import Dashboard from "../components/Dashboard"
import Welcome from "../components/Welcome"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"

export default function Home() {
    const { address } = useAccount()
    return (
        <div>
            <Head>
                <title>Signet</title>
                <meta name="description" content="2" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <nav className={styles.navBar}>
                    <img src="https://preview.redd.it/t3ipyw3enu771.png?auto=webp&s=6d0ed817989d3328d4765d8563f9ed61dbf32aad" />
                    {!address ? <div /> : <ConnectButton />}
                </nav>
            </div>
            {!address ? <Welcome /> : <Dashboard />}
        </div>
    )
}
