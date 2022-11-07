import { useRouter } from "next/router"

import Head from "next/head"
import Link from "next/link"
import Follow from "../components/Follow"
import Unfollow from "../components/Unfollow"
import stylesprofile from "../styles/profile.module.css"
import styles from "../styles/Home.module.css"
import styles1 from "../styles/Dashbaord.module.css"
import Dashboard from "../components/Dashboard"
import FollowingList from "../components/Following"
import FollowerList from "../components/Followers"
import Messagelist from "../components/Messagelist"
import Signetorpfp from "../components/Signetorpfpchange"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import creatorcontract from "../constants/abi.json"
import { useToasts } from "react-toast-notifications"
import signetorcontract from "../constants/Signetor.json"
import Welcome from "../components/Welcome"
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
import { parseBytes32String } from "ethers/lib/utils"
export default function Signetor() {
    const router = useRouter()
    const { useraddress } = router.query
    const { address } = useAccount()
    const [input, setInput] = useState("")
    const [ChangeProfile, setChangeProfile] = useState(false)
    const [ownersignetoraddress, setownersignetoraddress] = useState("")
    const [followingsnum, setfollowingsnum] = useState("")
    const [starNum, setstarNum] = useState("")
    const [followersnum, setfollowersnum] = useState("")
    const [showwalletaddress, setshowwalletaddress] = useState(false)
    const [signetsnum, setsignetsnum] = useState(false)
    const [showcontractaddress, setshowcontractaddress] = useState(false)
    const [followstatue, setfollowstatue] = useState(false)
    const [changename, setchangename] = useState(false)
    const [disable, setDisable] = useState(false)
    const [changeNameReady, setchangeNameReady] = useState(false)
    const [Name, setName] = useState("")
    const [Pfp, setPfp] = useState("")
    const { addToast } = useToasts()
    const [watchstatus, setwatchstatues] = useState("")
    const [changenameresult, setchangenameresult] = useState("")
    const { data: followstatues } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "checkfollowed",
        watch: true,
        args: [useraddress, address],
    })
    const { data: userNameData } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "checkName",
        watch: true,
        args: useraddress,
    })
    const { data: userPfpData } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "checkPfp",
        watch: true,
        args: useraddress,
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
    const { data: StaredNum } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "getStaredNumForSignetor",
        watch: true,
        args: useraddress,
    })
    const { data: followings } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "getFollowingsNum",
        watch: true,
        args: useraddress,
    })
    const { data: followers } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "getFollowersNum",
        watch: true,
        args: useraddress,
    })
    const { data: nameavaila } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "checkNameAvalable",
        watch: true,
        args: input,
    })
    function checknameavaila() {
        if (input.length <= 13) {
            if (nameavaila == true) {
                successtoaste("Name is available!")
                setchangeNameReady(true)
            } else {
                errortoaste("Please choose your profile pic!")
            }
        } else {
            errortoaste(
                "Name can not exceed 12 letters, and also special charactors might not be able to set in the contract storage!"
            )
        }
    }
    function changenamefunction() {
        setchangename(true)
    }
    function changenamefunction1() {
        setchangename(false)
    }
    function changeprofilefunction() {
        setChangeProfile(!ChangeProfile)
    }
    async function finishchange() {
        setChangeProfile(!ChangeProfile)
        router.reload(window.location.pathname)
    }
    function errortoast() {
        addToast("Duplicate Name!", { appearance: "error" })
    }
    function successtoast() {
        addToast("Changed name succesful!", { appearance: "success" })
    }
    function errortoaste(e) {
        addToast(e, { appearance: "error" })
    }

    function successtoaste(e) {
        addToast(e, { appearance: "success" })
    }
    const { config } = usePrepareContractWrite({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        functionName: "modifyNameForUser",
        args: input,
    })
    const { data: resultss, write: createNameForUser } = useContractWrite(config)

    const { isLoading: createNameForNewUserisLoading, isSuccess: createNameForNewUserisSuccess } =
        useWaitForTransaction({
            hash: resultss?.hash,
        })
    useEffect(() => {
        if (createNameForNewUserisLoading) {
            addToast("Transaction Submitted...", { appearance: "success" })
        }
    }, [createNameForNewUserisLoading])
    useEffect(() => {
        if (createNameForNewUserisSuccess) {
            addToast("Signetor Name Successful!", { appearance: "success" })
            setchangename(false)
            setName(input)
        }
    }, [createNameForNewUserisSuccess])
    function changeName() {
        createNameForUser()
    }
    useEffect(() => {
        if (changenameresult) {
            if (changenameresult.toString() == "duplicate") {
            }
        }
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
        if (userNameData) {
            setName(userNameData)
        }
        if (
            userPfpData !=
            "You seeing this message is becuase this address don't have any pfp created!"
        ) {
            setPfp(userPfpData)
        } else {
            setPfp(
                "https://www.pngkey.com/png/detail/52-522921_kathrine-vangen-profile-pic-empty-png.png"
            )
        }
    }, [ownercontractaddress])
    useEffect(() => {
        if (followings) {
            setfollowingsnum(followings.toString())
        }
    }, [followings])
    useEffect(() => {
        if (StaredNum) {
            setstarNum(StaredNum.toString())
        }
    }, [StaredNum])
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
    function seefollower() {
        setwatchstatues("follower")

    }
    function seefollwing() {
        setwatchstatues("follwing")

    }
    function seesignets() {
        setwatchstatues("signets")

    }
    return (
        // <div>
        //     {!address ? (
        //         <Welcome />
        //     ) : (
        <div>
            <Head>
                <title>Signet</title>
                <meta name="description" content="2" />
                <link rel="icon" href="/logo.ico" />
            </Head>
            <div>
                <nav className={styles.navBar}>
                    <img src="/logo2.png" />
                    {<ConnectButton accountStatus="address" />}
                </nav>
            </div>
            <p>
                {useraddress == "undefined" && <Welcome />}
                {useraddress != address && useraddress != "undefined" && (
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
                                                <button
                                                    disabled={
                                                        ChangeProfile || !ownersignetoraddress
                                                    }
                                                    className={stylesprofile.profile}
                                                >
                                                    <img
                                                        src={Pfp}
                                                        className="rounded-full"
                                                        width="83"
                                                    />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-15 text-center flex flex-col justify-center items-center">
                                            <h4 className="mt-10 text-white">
                                                {useraddress &&
                                                Name !=
                                                    "You seeing this message is becuase this address don't have any name created!"
                                                    ? Name
                                                    : "Unname"}
                                            </h4>

                                            <h4 className="mt-0 text-white">
                                                {useraddress && `wallet address `}
                                            </h4>
                                            <button
                                                className="nderline-offset-auto max-w-none mb-2 text-white text-xs"
                                                onClick={show1}
                                            >
                                                {!showwalletaddress &&
                                                    useraddress &&
                                                    `${shortenaddress(useraddress)}`}
                                                {showwalletaddress && useraddress}
                                            </button>

                                            <h4 className="mt-2 text-white">
                                                {ownersignetoraddress && `signetor address`}
                                            </h4>
                                            <button
                                                className="nderline-offset-auto max-w-none mb-2 text-white text-xs"
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
                                                        <h5 className="mt-0">Following</h5>
                                                        <button onClick={seefollwing}>
                                                            {followingsnum && followingsnum}
                                                        </button>
                                                    </div>

                                                    <div className={stylesprofile.statsspan}>
                                                        <h5 className="mt-0">Follower</h5>
                                                        <button onClick={seefollower}>
                                                            {followersnum && followersnum}
                                                        </button>
                                                    </div>

                                                    {signetsnum && (
                                                        <div className={stylesprofile.statsspan}>
                                                            <h5 className="mt-0">Signets</h5>
                                                            <button onClick={seesignets}>
                                                                {signetsnum && signetsnum}
                                                            </button>
                                                        </div>
                                                    )}

                                                    {!signetsnum && (
                                                        <div className={stylesprofile.statsspan}>
                                                            <h5 className="mt-0">Signets</h5>
                                                            <button onClick={seesignets}>
                                                                {"0"}
                                                            </button>
                                                        </div>
                                                    )}
                                                    <div className={stylesprofile.statsspan}>
                                                        <h5 className="mt-0">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke-width="1.5"
                                                                stroke="currentColor"
                                                                class="w-6 h-6"
                                                            >
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                                                                />
                                                            </svg>
                                                        </h5>
                                                        {starNum && starNum}
                                                    </div>
                                                </div>
                                            )}
                                            {!ownersignetoraddress && (
                                                <div className="flex items-center justify-between pt-2.5 space-x-5">
                                                    <div className={stylesprofile.statsspan}>
                                                        <h5 className="mt-10">Following</h5>
                                                        <button onClick={seefollwing}>
                                                            {followingsnum && followingsnum}
                                                        </button>
                                                    </div>

                                                    <div className={stylesprofile.statsspan}>
                                                        <h5 className="mt-10">Follower</h5>
                                                        <button onClick={seefollower}>
                                                            {followersnum && followersnum}
                                                        </button>
                                                    </div>

                                                    {signetsnum && (
                                                        <div className={stylesprofile.statsspan}>
                                                            <h5 className="mt-10">Signets</h5>
                                                            <button onClick={seesignets}>
                                                                {signetsnum && signetsnum}
                                                            </button>
                                                        </div>
                                                    )}
                                                    {!signetsnum && (
                                                        <div className={stylesprofile.statsspan}>
                                                            <h5 className="mt-10">Signets</h5>
                                                            <button onClick={seesignets}>
                                                                {"0"}
                                                            </button>
                                                        </div>
                                                    )}
                                                    <div className={stylesprofile.statsspan}>
                                                        <h5 className="mt-10">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke-width="1.5"
                                                                stroke="currentColor"
                                                                class="w-6 h-6"
                                                            >
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                                                                />
                                                            </svg>
                                                        </h5>
                                                        {starNum && starNum}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {watchstatus == "follwing" && <FollowingList />}
                                {watchstatus == "follower" && <FollowerList />}
                                {watchstatus == "signets" && <Messagelist />}
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
                                                <button
                                                    disabled={
                                                        ChangeProfile || !ownersignetoraddress
                                                    }
                                                    className={stylesprofile.profile}
                                                    onClick={changeprofilefunction}
                                                >
                                                    {ChangeProfile == false && (
                                                        <img
                                                            src={Pfp}
                                                            className="rounded-full"
                                                            width="83"
                                                        />
                                                    )}
                                                    {ChangeProfile == true && <Signetorpfp />}
                                                    {ChangeProfile == true && (
                                                        <button
                                                            className={styles1.button18}
                                                            onClick={finishchange}
                                                        >
                                                            done
                                                        </button>
                                                    )}
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-15 text-center flex flex-col justify-center items-center">
                                            {!changename ? (
                                                <button
                                                    className="mt-10 text-white"
                                                    onClick={changenamefunction}
                                                >
                                                    {useraddress &&
                                                    Name !=
                                                        "You seeing this message is becuase this address don't have any name created!"
                                                        ? Name
                                                        : "Unname"}
                                                </button>
                                            ) : (
                                                <div className="mt-10 text-white ">
                                                    <div className="space-x-1">
                                                        <input
                                                            className="text-center bg-transparent border rounded-lg text-sm border-white text-white"
                                                            rows="1"
                                                            placeholder=""
                                                            value={input}
                                                            onChange={(e) => {
                                                                setInput(e.target.value)
                                                                setchangeNameReady(false)
                                                            }}
                                                        ></input>
                                                        {!changeNameReady ? (
                                                            <button
                                                                className={styles1.button18}
                                                                onClick={checknameavaila}
                                                            >
                                                                check
                                                            </button>
                                                        ) : (
                                                            <button
                                                                className={styles1.button18}
                                                                onClick={changeName}
                                                            >
                                                                submit
                                                            </button>
                                                        )}
                                                        <button
                                                            className={styles1.button18}
                                                            onClick={changenamefunction1}
                                                        >
                                                            cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                            <h4 className="mt-0 text-white">
                                                {useraddress && `wallet address `}
                                            </h4>
                                            <button
                                                className="nderline-offset-auto max-w-none mb-2 text-white text-xs"
                                                onClick={show1}
                                            >
                                                {!showwalletaddress &&
                                                    useraddress &&
                                                    `${shortenaddress(useraddress)}`}
                                                {showwalletaddress && useraddress}
                                            </button>
                                            <h4 className="mt-2 text-white">
                                                {ownersignetoraddress && `signetor address`}
                                            </h4>
                                            <button
                                                className="nderline-offset-auto max-w-none mb-2 text-white text-xs"
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
                                            <div className="flex items-center justify-between pt-2.5 space-x-5">
                                                <div className={stylesprofile.statsspan}>
                                                    <h5 className="mt-10">Following</h5>
                                                    <button onClick={seefollwing}>
                                                        {followingsnum && followingsnum}
                                                    </button>
                                                </div>

                                                <div className={stylesprofile.statsspan}>
                                                    <h5 className="mt-10">Follower</h5>
                                                    <button onClick={seefollower}>
                                                        {followersnum && followersnum}
                                                    </button>
                                                </div>

                                                {signetsnum && (
                                                    <div className={stylesprofile.statsspan}>
                                                        <h5 className="mt-10">Signets</h5>
                                                        <button onClick={seesignets}>
                                                            {signetsnum && signetsnum}
                                                        </button>
                                                    </div>
                                                )}
                                                {!signetsnum && (
                                                    <div className={stylesprofile.statsspan}>
                                                        <h5 className="mt-10">Signets</h5>
                                                        <button onClick={seesignets}>{"0"}</button>
                                                    </div>
                                                )}
                                                <div className={stylesprofile.statsspan}>
                                                    <h5 className="mt-10">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke-width="1.5"
                                                            stroke="currentColor"
                                                            class="w-6 h-6"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                                                            />
                                                        </svg>
                                                    </h5>
                                                    {starNum && starNum}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {watchstatus == "follwing" && <FollowingList />}
                                {watchstatus == "follower" && <FollowerList />}
                                {watchstatus == "signets" && <Messagelist />}
                            </div>
                        </div>
                    </div>
                )}
            </p>
        </div>
        //     )}
        // </div>
    )
}
