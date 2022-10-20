import { useRouter } from "next/router"
import Head from "next/head"
import Link from "next/link"
import Follow from "../components/Follow"
import Unfollow from "../components/Unfollow"
import stylesprofile from "../styles/profile.module.css"
import styles from "../styles/Home.module.css"
import styles1 from "../styles/Dashbaord.module.css"
import Dashboard from "../components/Dashboard"
import Welcome from "../components/Welcome"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import creatorcontract from "../constants/abi.json"
import { useToasts } from "react-toast-notifications"
import signetorcontract from "../constants/Signetor.json"
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
import { useState, useEffect } from "react"
export default function Signetor() {
    const router = useRouter()
    const { useraddress } = router.query
    const { address } = useAccount()
    const [ownersignetoraddress, setownersignetoraddress] = useState("")
    const [followingsnum, setfollowingsnum] = useState("")
    const [followersnum, setfollowersnum] = useState("")
    const [showwalletaddress, setshowwalletaddress] = useState(false)
    const [signetsnum, setsignetsnum] = useState(false)
    const [showcontractaddress, setshowcontractaddress] = useState(false)
    const [followstatue, setfollowstatue] = useState(false)
    const [disable, setDisable] = useState(false)
    const { addToast } = useToasts()
    const { data: followstatues } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "checkfollowed",
        watch: true,
        args: [useraddress, address],
    })
    const { data: ownercontractaddress } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "getOwnerContractForSignetor",
        watch: true,
        args: useraddress,
    })
    const { data: signets } = useContractRead({
        addressOrName: ownersignetoraddress,
        contractInterface: signetorcontract.abi,
        chains: 5,
        functionName: "token_Id",
        watch: true,
    })
    const { data: followings } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "following",
        watch: true,
        args: useraddress,
    })
    const { data: followers } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "follower",
        watch: true,
        args: useraddress,
    })
    useEffect(() => {
        if (followstatues) {
            setfollowstatue(followstatues)
        }
    }, [followstatues])
    useEffect(() => {
        if (ownercontractaddress) {
            setownersignetoraddress(ownercontractaddress)
        }
    }, [ownercontractaddress])
    useEffect(() => {
        if (followings) {
            setfollowingsnum(followings.toString())
        }
    }, [followings])
    useEffect(() => {
        if (followers) {
            setfollowersnum(followers.toString())
        }
    }, [followers])
    useEffect(() => {
        if (signets) {
            setsignetsnum(signets.toString())
        }
    }, [signets])

    function shortenaddress(address) {
        const resultaddress =
            address.slice(0, 5) + "..." + address.slice(address.length - 5, address.length)
        return resultaddress
    }
    function show1() {
        setshowwalletaddress(!showwalletaddress)
    }
    function show2() {
        setshowcontractaddress(!showcontractaddress)
    }

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
                    {<ConnectButton showBalance={true} accountStatus="address" />}
                </nav>
            </div>
            <p>
                {useraddress != address && (
                    <div>
                        <div>
                            <div className="justify-between items-center">
                                <div className="flex flex-col justify-center items-center border-l border-r bg-slate-100 border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow">
                                    <div className="flex space-x-5 py-2 px-3 top-0 z-50 ">
                                        <Link href={"/"}>
                                            <button className={styles1.button85}>Home</button>
                                        </Link>

                                        <Link href={"/explore"}>
                                            <button className={styles1.button85}>Explore</button>
                                        </Link>

                                        <button className={styles1.button85}>
                                            <a>Profile</a>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className={stylesprofile.card}>
                                        <div className={stylesprofile.upper}>
                                            <img
                                                src="/background-03.jpg"
                                                className={stylesprofile.upperimg}
                                            />
                                        </div>

                                        <div className={stylesprofile.user}>
                                            <div className="text-center">
                                                <button className={stylesprofile.profile}>
                                                    <img
                                                        src="https://www.pngkey.com/png/detail/52-522921_kathrine-vangen-profile-pic-empty-png.png"
                                                        className="rounded-full"
                                                        width="83"
                                                    />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-15 text-center flex flex-col justify-center items-center">
                                            <h4 className="mt-10 text-white">
                                                {useraddress && `wallet address: `}
                                            </h4>
                                            <button
                                                className="nderline-offset-auto max-w-none mb-2 text-white"
                                                onClick={show1}
                                            >
                                                {!showwalletaddress &&
                                                    useraddress &&
                                                    `${shortenaddress(useraddress)}`}
                                                {showwalletaddress && useraddress}
                                            </button>

                                            <h4 className="mt-2 text-white">
                                                {ownersignetoraddress && `signetor address:`}
                                            </h4>
                                            <button
                                                className="nderline-offset-auto max-w-none mb-2 text-white"
                                                onClick={show2}
                                            >
                                                {!showcontractaddress &&
                                                    ownersignetoraddress &&
                                                    `${shortenaddress(ownersignetoraddress)}`}
                                                {showcontractaddress && ownersignetoraddress}
                                            </button>

                                            {!ownersignetoraddress && (
                                                <h4 className="mt-0 text-white">
                                                    signetor have not
                                                </h4>
                                            )}

                                            {!ownersignetoraddress && (
                                                <button className="nderline-offset-auto max-w-none mb-2 text-white">
                                                    been created yet
                                                </button>
                                            )}

                                            {!followstatue && ownersignetoraddress && <Follow />}
                                            {followstatue && ownersignetoraddress && <Unfollow />}

                                            {ownersignetoraddress && (
                                                <div className="flex items-center justify-between pt-2.5 space-x-5">
                                                    <div className={stylesprofile.statsspan}>
                                                        <h6 className="mt-0">Following</h6>
                                                        <span>
                                                            {followingsnum && followingsnum}
                                                        </span>
                                                    </div>

                                                    <div className={stylesprofile.statsspan}>
                                                        <h6 className="mt-0">Follower</h6>
                                                        <span>{followersnum && followersnum}</span>
                                                    </div>

                                                    {signetsnum && (
                                                        <div className={stylesprofile.statsspan}>
                                                            <h6 className="mt-0">Signets</h6>
                                                            <span>{signetsnum && signetsnum}</span>
                                                        </div>
                                                    )}
                                                    {!signetsnum && (
                                                        <div className={stylesprofile.statsspan}>
                                                            <h6 className="mt-0">Signets</h6>
                                                            <span>{"0"}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                            {!ownersignetoraddress && (
                                                <div className="flex items-center justify-between pt-2.5 space-x-5">
                                                    <div className={stylesprofile.statsspan}>
                                                        <h6 className="mt-9">Following</h6>
                                                        <span>
                                                            {followingsnum && followingsnum}
                                                        </span>
                                                    </div>

                                                    <div className={stylesprofile.statsspan}>
                                                        <h6 className="mt-9">Follower</h6>
                                                        <span>{followersnum && followersnum}</span>
                                                    </div>

                                                    {signetsnum && (
                                                        <div className={stylesprofile.statsspan}>
                                                            <h6 className="mt-9">Signets</h6>
                                                            <span>{signetsnum && signetsnum}</span>
                                                        </div>
                                                    )}
                                                    {!signetsnum && (
                                                        <div className={stylesprofile.statsspan}>
                                                            <h6 className="mt-9">Signets</h6>
                                                            <span>{"0"}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </p>
            <p>
                {useraddress == address && (
                    <div>
                        <div>
                            <div className="justify-between items-center">
                                <div className="flex flex-col justify-center items-center border-l border-r bg-slate-100 border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow">
                                    <div className="flex space-x-5 py-2 px-3 top-0 z-50 ">
                                        <Link href={"/"}>
                                            <button className={styles1.button85}>Home</button>
                                        </Link>

                                        <Link href={"/explore"}>
                                            <button className={styles1.button85}>Explore</button>
                                        </Link>

                                        <button className={styles1.button85}>
                                            <a>Profile</a>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <div className={stylesprofile.card}>
                                        <div className={stylesprofile.upper}>
                                            <img
                                                src="/background-03.jpg"
                                                className={stylesprofile.upperimg}
                                            />
                                        </div>

                                        <div className={stylesprofile.user}>
                                            <div className="text-center">
                                                <button className={stylesprofile.profile}>
                                                    <img
                                                        src="https://www.pngkey.com/png/detail/52-522921_kathrine-vangen-profile-pic-empty-png.png"
                                                        className="rounded-full"
                                                        width="83"
                                                    />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-15 text-center flex flex-col justify-center items-center">
                                            <h4 className="mt-10 text-white">
                                                {useraddress && `wallet address: `}
                                            </h4>
                                            <button
                                                className="nderline-offset-auto max-w-none mb-2 text-white"
                                                onClick={show1}
                                            >
                                                {!showwalletaddress &&
                                                    useraddress &&
                                                    `${shortenaddress(useraddress)}`}
                                                {showwalletaddress && useraddress}
                                            </button>
                                            <h4 className="mt-2 text-white">
                                                {ownersignetoraddress && `signetor address:`}
                                            </h4>
                                            <button
                                                className="nderline-offset-auto max-w-none mb-2 text-white"
                                                onClick={show2}
                                            >
                                                {!showcontractaddress &&
                                                    ownersignetoraddress &&
                                                    `${shortenaddress(ownersignetoraddress)}`}
                                                {showcontractaddress && ownersignetoraddress}
                                            </button>

                                            <div className="flex items-center justify-between pt-2.5 space-x-5">
                                                <div className={stylesprofile.statsspan}>
                                                    <h6 className="mt-9">Following</h6>
                                                    <span>{followingsnum && followingsnum}</span>
                                                </div>

                                                <div className={stylesprofile.statsspan}>
                                                    <h6 className="mt-9">Follower</h6>
                                                    <span>{followersnum && followersnum}</span>
                                                </div>

                                                <div className={stylesprofile.statsspan}>
                                                    <h6 className="mt-9">Signets</h6>
                                                    <span>{signetsnum && signetsnum}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </p>
            
        </div>
    )
}
