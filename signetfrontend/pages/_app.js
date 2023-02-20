import "../styles/globals.css"
import { WagmiConfig, configureChains, createClient, chain } from "wagmi"
import { infuraProvider } from "wagmi/providers/infura"
import { ToastProvider } from "react-toast-notifications"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit"
import "@rainbow-me/rainbowkit/styles.css"
import { connectorsForWallets } from "@rainbow-me/rainbowkit"
import { goerli } from "@wagmi/core"
import { Inter, Michroma, Russo_One } from "@next/font/google"
import { publicProvider } from "wagmi/providers/public"
import {
    injectedWallet,
    argentWallet,
    braveWallet,
    coinbaseWallet,
    ledgerWallet,
    trustWallet,
    imTokenWallet,
    omniWallet,
    metaMaskWallet,
    rainbowWallet,
    walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets"
import NavBar from "../components/NavBar"
import { motion, AnimatePresence } from "framer-motion"
import Starscape from "../components/Starscape"
import styled from "styled-components"
import elements from "../img/elements"

const NEXT_PUBLIC_Application_ID = process.env.NEXT_PUBLIC_APP_ID
const NEXT_PUBLIC_Dapp_URL = process.env.NEXT_PUBLIC_SERVER_URL
const { chains, provider } = configureChains(
    [/*chain.mainnet, chain.polygon, chain.polygonMumbai,*/ chain.goerli],
    [
        alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMYAPIKEY1, priority: 0 }),
        alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMYAPIKEY2, priority: 0 }),
        alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMYAPIKEY3, priority: 0 }),
        alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMYAPIKEY4, priority: 0 }),
        alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMYAPIKEY5, priority: 0 }),
        alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMYAPIKEY6, priority: 0 }),
        alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMYAPIKEY7, priority: 0 }),
        alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMYAPIKEY8, priority: 0 }),
        alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMYAPIKEY9, priority: 0 }),
        alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMYAPIKEY10, priority: 0 }),
        alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMYAPIKEY11, priority: 0 }),
        alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMYAPIKEY12, priority: 0 }),
        alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMYAPIKEY13, priority: 0 }),
        alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMYAPIKEY14, priority: 0 }),
        alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMYAPIKEY15, priority: 0 }),
        alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMYAPIKEY16, priority: 0 }),
        alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMYAPIKEY17, priority: 0 }),
        infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURAAPIKEY1, priority: 0 }),
        infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURAAPIKEY2, priority: 0 }),
        infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURAAPIKEY3, priority: 0 }),
        infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURAAPIKEY4, priority: 0 }),
        infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURAAPIKEY5, priority: 0 }),
        infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURAAPIKEY6, priority: 0 }),
        infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURAAPIKEY7, priority: 0 }),
        infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURAAPIKEY8, priority: 0 }),
        infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURAAPIKEY9, priority: 0 }),
        infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURAAPIKEY10, priority: 0 }),
        infuraProvider({ apiKey: process.env.NEXT_PUBLIC_INFURAAPIKEY11, priority: 0 }),
    ],
    { pollingInterval: 20_000, targetQuorum: 1 },
    { stallTimeout: 1000 }
)

const connectors = connectorsForWallets([
    {
        groupName: "Recommended",
        wallets: [
            metaMaskWallet({ chains }),
            coinbaseWallet({ chains }),
            walletConnectWallet({ chains }),
        ],
    },
    {
        groupName: "Others",
        wallets: [
            trustWallet({ chains }),
            braveWallet({ chains }),
            ledgerWallet({ chains }),
            argentWallet({ chains }),
            omniWallet({ chains }),
            imTokenWallet({ chains }),
        ],
    },
])

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
})

const Background = styled(motion.img)`
    width: 100vw;
    height: 200vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
    position: fixed;
    top: 0;
    object-fit: cover;

    @media only screen and (min-width: 1024px) {
        height: 300vh;
    }
`

function MyApp({ Component, pageProps, router }) {
    return (
        <div>
            <WagmiConfig client={wagmiClient}>
                {/* <SessionProvider refetchInterval={0} session={pageProps.session}>
                        <RainbowKitSiweNextAuthProvider> */}
                <RainbowKitProvider
                    chains={chains}
                    theme={darkTheme({
                        accentColor: "#37383b",
                        accentColorForeground: "white",
                        borderRadius: "large",
                        fontStack: "system",
                    })}
                >
                    <ToastProvider autoDismiss={true} autoDismissTimeout="4000">
                        <AnimatePresence mode="wait">
                            <Starscape />
                            <Background
                                src={elements.background2.src}
                                key="background1"
                                initial={{ y: 0, opacity: 0, scale: 1 }}
                                animate={{ y: 0, opacity: 0.67, scale: 1 }}
                                exit={{ y: 0, opacity: 0, scale: 1 }}
                                transition={{ duration: 1.5, ease: "easeIn", delay: 0.3 }}
                            />
                            <NavBar />
                            <Component
                                {...pageProps}
                                name="Access-Control-Allow-Origin"
                                value="*"
                                key={router.route}
                            ></Component>
                        </AnimatePresence>
                    </ToastProvider>
                </RainbowKitProvider>
                {/* </RainbowKitSiweNextAuthProvider>
                    </SessionProvider> */}
            </WagmiConfig>
        </div>
    )
}

export default MyApp
