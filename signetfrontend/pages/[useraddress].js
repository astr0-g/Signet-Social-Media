import { useRouter } from "next/router"
import styled, { keyframes } from "styled-components"
import Head from "next/head"
import EC from "../components/Encrypted"
import * as React from "react"
import Follow from "../components/Follow"
import Unfollow from "../components/Unfollow"
import FollowingList from "../components/Following"
import FollowerList from "../components/Followers"
import Messagelist from "../components/Messagelist"
import Signetor from "../components/Signetor"
import creatorcontract from "../constants/abi.json"
import { useToasts } from "react-toast-notifications"
import Welcome from "../components/Welcome"
import OwnerAssets from "../components/OwnerAssets"
import {
    usePrepareContractWrite,
    useAccount,
    useContractRead,
    useContractWrite,
    useNetwork,
    useWaitForTransaction,
    useSignTypedData,
} from "wagmi"
import { useState, useEffect } from "react"
import { MdExpandMore, MdMode, MdPersonAddAlt1 } from "react-icons/md"
import {
    RiArrowDropDownLine,
    RiArrowDropUpLine,
    RiSettings2Line,
    RiSendPlaneFill,
    RiMessageFill,
} from "react-icons/ri"
import Setting from "../components/Setting"
import { motion, AnimatePresence } from "framer-motion"

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
    width: 100vw;
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
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

const Whitespace = styled.div`
    width: 100vw;
    max-width: 1920px;
    height: 4rem;
`

const InfoBar = styled.div`
    width: 96%;
    max-width: 1920px;
    display: flex;
    justify-content: center;
    border-radius: 15px;
`

const InfoBarContainer = styled.div`
    width: 100%;
    max-width: 1920px;
    display: flex;
    justify-content: center;
`

const TopNav = styled.nav`
    width: 100vw;
    max-width: 1920px;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
    backdrop-filter: blur(25px);
    position: fixed;
    top: 0;
    z-index: 100;
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);
`

const OffSignal = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 0.17rem solid white;
    background-color: red;
    margin-right: 0.75rem;
    margin-top: 0.65rem;
`

const OnSignal = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 0.14rem solid white;
    background-color: green;
    margin-right: 0.75rem;
`

const TopRight = styled.div`
    width: 33%;
    display: flex;
    justify-content: right;
    align-items: center;
`

const Button = styled.button`
    width: 4rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 10px;
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);

    &:hover {
        scale: 1.1;
        transition: 0.25s;
        animation-delay: 0.15s;
    }
`

const IconButton = styled.button`
    width: 4.75rem;
    border-radius: 10px;
    display: flex;
    padding: 0.5rem;
`

const IntroContainer = styled.div`
    width: 100%;
    max-width: 1920px;
    display: flex;
    justify-content: center;
    overflow: hidden;

    @media only screen and (min-width: 1024px) {
        width: 60rem;
    }
`

const Intro = styled(motion.div)`
    background-color: rgba(32, 32, 32, 1);
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);
    border-radius: 10px;
    width: 96vw;
    max-width: 1920px;
    display: inline-block;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    overflow: hidden;
    z-index: 10;

    @media only screen and (min-width: 1408px) {
        width: 84vw;
    }
    @media only screen and (min-width: 1680px) {
        width: 72vw;
    }
`

const Intro2 = styled.div`
    border-radius: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0.5rem;
    padding-top: 0.25rem;
    padding-bottom: 0;
    overflow: hidden;
`

const Intro3 = styled.div`
    width: 67%;
    max-width: 1920px;
    overflow: hidden;
    display: block;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    padding-bottom: 0;
    padding-top: 0;
    margin-left: 0.5rem;

    @media only screen and (min-width: 1024px) {
        width: 20rem;
        margin-left: 2rem;
    }
`

const BioContainer = styled.div`
    width: 100%;
    display: grid;
    justify-content: start;
    align-items: center;
    padding-top: 0;
`

const ModifySection = styled.div`
    width: 100%;
    display: grid;
    justify-content: start;
    align-items: center;
    padding: 1rem;
    padding-left: 0;
`

const BioDisplay = styled.div`
    width: 100%;
    max-width: 1920px;
    display: grid;
    justify-content: start;
    align-items: center;
    color: white;
    font-size: 12px;
`

const DropdownBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    @media only screen and (min-width: 1024px) {
        justify-content: end;
    }
`

const IconText = styled.p`
    width: 100%;
    color: white;
    font-size: 12px;
    padding-left: 0.25rem;

    @media only screen and (min-width: 1024px) {
        font-size: 13px;
    }
`

const IconContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Icon = styled.button`
    padding: 0 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        scale: 1.1;
        transition: 0.25s;
        animation-delay: 0.15s;
    }

    @media only screen and (min-width: 1024px) {
        width: 7rem;
        padding: 0.3rem 0.7rem;
        margin: 0.5rem 0;
        border-radius: 6px;
        background-color: transparent;
        border: 1px solid white;
    }
`

const IconPCUSER = styled.button`
    padding: 0 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    &:hover {
        scale: 1.1;
        transition: 0.25s;
        animation-delay: 0.15s;
    }
`

const DropdownMenuContainer = styled(motion.div)`
    width: 96vw;
    max-width: 1920px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(32, 32, 32, 0.56);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 0.5rem;
    padding-bottom: 0;
    overflow: hidden;
    @media only screen and (min-width: 1408px) {
        width: 84vw;
    }
    @media only screen and (min-width: 1680px) {
        width: 72vw;
    }
`

const DropdownMenu = styled(motion.div)`
    width: 100%;
    background-color: rgba(32, 32, 32, 0.6);
    display: block;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 12px;
    padding: 1rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

const DropdownMenuContainerBox = styled(motion.div)`
    width: 100%;
    max-width: 1920px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    overflow: hidden;

    @media only screen and (min-width: 1024px) {
        width: 60rem;
    }
`

const ShadowBox = styled(motion.div)`
    width: 96%;
    max-width: 1920px;
    height: 3rem;
    background-color: rgba(32, 32, 32, 0.5);
    position: absolute;
    z-index: 1;

    @media only screen and (min-width: 1024px) {
        width: 60rem;
    }
`

const Title = styled(motion.h1)`
    color: white;
    font-size: 12px;
    font-weight: 500;
    margin-top: 0.25rem;
    margin-bottom: 0.75rem;
`

const ProfileSection = styled.div`
    width: 100vw;
    max-width: 1920px;
    overflow: hidden;
    display: grid;
    justify-content: center;
    align-items: center;
`

const PFPContainer = styled.div`
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 1024px) {
        width: 10rem;
        height: 10rem;
    }
`

const ModifyButton = styled.button`
    border-radius: 3px;
    background-color: rgba(101, 101, 159, 0.9);
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);
    font-size: 10px;
    color: white;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.125rem;
    padding-bottom: 0.125rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
`

const Edit = styled.div`
    width: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
`

const EditButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
`

const FollowingButton = styled.button`
    width: 3rem;
    height: 3rem;
    text-align: center;
    padding: left;
`

const ButtonContainer = styled.div`
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: 1024px) {
        display: none;
    }
`

const ButtonContainerPC = styled.div`
    width: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    margin-right: 1.5rem;
    margin-top: 0.5rem;
    border-radius: 12px;

    @media only screen and (max-width: 1023px) {
        display: none;
    }
`

export default function Signetors() {
    const router = useRouter()
    const { useraddress } = router.query
    const { address } = useAccount()
    const { chain, chains } = useNetwork()
    const [chainnow, setchainnow] = useState("")
    const [mottomessage, setmottomessage] = useState("")
    const [input, setInput] = useState("")
    const [ChangeProfile, setChangeProfile] = useState(false)
    const [ownersignetoraddress, setownersignetoraddress] = useState("")
    const [followingsnum, setfollowingsnum] = useState("")
    const [starNum, setstarNum] = useState("")
    const [assetNum, setAssetNum] = useState(0)
    const [followersnum, setfollowersnum] = useState("")
    const [showwalletaddress, setshowwalletaddress] = useState(false)
    const [signetsnum, setsignetsnum] = useState(0)
    const [showcontractaddress, setshowcontractaddress] = useState(false)
    const [followstatue, setfollowstatue] = useState(false)
    const [changename, setchangename] = useState(false)
    const [disable, setDisable] = useState(false)
    const [changeNameReady, setchangeNameReady] = useState(false)
    const [Name, setName] = useState()
    const [Pfp, setPfp] = useState()
    const { addToast } = useToasts()
    const [motto, setMotto] = useState("")
    const [watchstatus, setwatchstatues] = useState("signets")
    const [changenameresult, setchangenameresult] = useState("")
    const [isShow, setIsShow] = useState(true)
    const [changemo, setchangeMotto] = useState(false)
    const [inputmotto, setInputmotto] = useState("")
    const [isDropped, setIsDropped] = useState(false)
    const [isEditing, setIsEditing] = useState(false)

    const [openSetting, setOpenSetting] = useState(false)
    useEffect(() => {
        if (chain) {
            if (chain["id"]) {
                setchainnow(chain["id"])
            }
        }
    }, [chain])
    const { data: ifRegistered } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "checkRegistered",
        watch: true,
        args: address,
    })
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
    const { data: signets } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "checkNumOfSignetsSent",
        watch: true,
        args: useraddress,
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
    const domain = {
        name: "SIGNET",
        version: "➢ ➣➢ ➣➣ ➣",
        chainId: chainnow,
        verifyingContract: creatorcontract.address,
    }

    const types = {
        signetAction: [
            { name: "from", type: "address" },
            { name: "to", type: "address" },
            { name: "notice", type: "string" },
        ],
    }

    const value = {
        from: address,
        to: creatorcontract.address,
        notice: "Please sign this message to approve your action for signet",
    }
    const {
        data: message,
        isError,
        isLoading,
        isSuccess: signSuccess,
        signTypedData,
    } = useSignTypedData({
        domain,
        types,
        value,
    })
    useEffect(() => {
        if (signSuccess) {
            setmottomessage(message)
        }
    }, [signSuccess])
    useEffect(() => {
        if (mottomessage.length > 130) {
            addToast("submitting...", { appearance: "success" })
            submitMotto()
        }
    }, [mottomessage])
    function checkassetsnum() {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        }
        fetch(
            `${process.env.NEXT_PUBLIC_APIENDPOINT}/fetch/number/${useraddress}/goerli/`,
            requestOptions
        )
            .then((response) => response.text())
            .then((result) => setAssetNum(result))
            .catch((error) => console.log("error", error))
    }
    function checkmotto() {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        }
        fetch(
            `${process.env.NEXT_PUBLIC_APIENDPOINT}/suf/searchaddress/${useraddress}/`,
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => {
                if (result["userBio"] != "None") {
                    setMotto(`${result["userBio"]}`)
                }
            })
            .catch((error) => console.log("error", error))
    }
    function checknameavaila() {
        if (input.length <= 14) {
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

    function changeprofilefunction() {
        setChangeProfile(!ChangeProfile)
    }
    async function finishchange() {
        setChangeProfile(!ChangeProfile)
        router.reload(window.location.pathname)
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

    function submitMotto() {
        var record = EC(mottomessage, useraddress)
        var numberR = Math.random() * 100000000
        var formdata = new FormData()
        formdata.append("userId", parseInt(numberR))
        formdata.append("userAddress", useraddress)
        formdata.append("userBio", inputmotto)
        formdata.append("userSignatrue", mottomessage)
        formdata.append("userRecord", record)

        var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow",
        }

        fetch(`${process.env.NEXT_PUBLIC_APIENDPOINT}/suf/bioupdate/`, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                if (result == `"verification failed"`) {
                    console.log("verification failed")
                    errortoaste("verification failed, please contact customer service at signet.")
                } else {
                    addToast("success!", { appearance: "success" })
                    setMotto(`${inputmotto}`)
                    setInputmotto("")
                }
            })
            .catch((error) => console.log("error", error))
        setchangeMotto(false)
    }
    useEffect(() => {
        if (useraddress) {
            checkassetsnum()
            checkmotto()
        }
    }, [useraddress])
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
        if (
            userNameData ==
            "You seeing this message is becuase this address don't have any name created!"
        ) {
            setName("Unname")
        } else {
            setName(userNameData)
        }
        if (
            userPfpData !=
            "You seeing this message is becuase this address don't have any pfp created!"
        ) {
            setPfp(userPfpData)
        } else {
            setPfp(
                "https://route.signet.ink/render/token/73ltkPWvskh5jCazATxLoPcwkUmXbfREAb0ehInh6SfBD1FPpBHL0gLXR7jIYQsjICy.webp"
            )
        }
    }, [userNameData, userPfpData])
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
        setIsShow(false)
    }
    function seefollwing() {
        setwatchstatues("follwing")
        setIsShow(false)
    }
    function seesignets() {
        setwatchstatues("signets")
        setIsShow(true)
    }
    function seeassets() {
        setwatchstatues("assets")
        setIsShow(false)
    }
    function changeMotto() {
        setchangeMotto(true)
        setIsEditing(true)
    }
    function changenamefunction() {
        setchangename(true)
    }
    function changenamefunction1() {
        setchangename(false)
    }
    function changeMottocancel() {
        setchangeMotto(false)
        setIsEditing(false)
    }

    const dropthemenu = () => {
        setIsDropped(true)
    }

    const foldthemenu = () => {
        setIsDropped(false)
    }

    const edit = () => {
        changenamefunction()
        changeMotto()
        setchangename(true)
        setchangeMotto(true)
    }

    const editcancel = () => {
        changenamefunction1()
        changeMottocancel()
        setchangename(false)
        setchangeMotto(false)
    }

    const OpenEditingMenu = () => {
        setOpenSetting(true)
    }

    
    useEffect(() => {
        followstatue
    }, [watchstatus])

    useEffect(() => {
        setwatchstatues("signets")
        setIsShow(true)
    }, [useraddress])

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

                <div>
                    <Whitespace />
                    {address ? (
                        <TopNav>
                            <a
                                className="flex justify-left align-center item-center cursor-pointer"
                                href="/"
                            >
                                <img src="/logoTextWhite.png" className="w-28" />
                            </a>
                            <TopRight>
                                <OnSignal />
                                <AnimatePresence>
                                    {useraddress == address && (
                                        <button onClick={OpenEditingMenu}>
                                            <RiSettings2Line color="white" size={33} />
                                        </button>
                                    )}
                                </AnimatePresence>
                            </TopRight>
                        </TopNav>
                    ) : (
                        <TopNav>
                            <a
                                className="flex justify-left align-center item-center cursor-pointer"
                                href="/"
                            >
                                <img src="/logoTextWhite.png" className="w-28" />
                            </a>
                            <OffSignal />
                        </TopNav>
                    )}
                </div>
                {/* {!address && <Welcome />} */}
                {address && !ifRegistered && (
                    <div className="justify-between items-center fixed bottom-0 w-full z-50">
                        <Signetor />
                    </div>
                )}

                <div>
                    {useraddress != address && useraddress != "undefined" && (
                        <div>
                            <ProfileSection>
                                <DropdownMenuContainerBox>
                                    <DropdownMenuContainer
                                        key="box4"
                                        initial={{ x: "100%", opacity: 1, scale: 1 }}
                                        animate={{ x: 0, opacity: 1, scale: 1 }}
                                        exit={{
                                            x: "100%",
                                            opacity: 1,
                                            scale: 1,
                                            transition: { duration: 0.15, ease: "easeOut" },
                                        }}
                                        transition={{ duration: 0.25, ease: "easeIn" }}
                                    >
                                        <Title>Account Detail</Title>
                                        {isDropped && (
                                            <DropdownMenu
                                                key="box"
                                                initial={{ y: "100%", opacity: 1, scale: 1 }}
                                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                                exit={{
                                                    y: "100%",
                                                    opacity: 1,
                                                    scale: 1,
                                                    transition: {
                                                        duration: 0.1,
                                                        ease: "easeOut",
                                                    },
                                                }}
                                                transition={{ duration: 0.15, ease: "easeIn" }}
                                            >
                                                <div>
                                                    <div className="w-[100%] flex justify-between items-center m">
                                                        <p className="text-medium text-[10px] font-medium text-white">
                                                            {useraddress && `Wallet Address: `}
                                                        </p>
                                                        <button
                                                            className="italic text-[10px] right-4 text-white"
                                                            onClick={show1}
                                                        >
                                                            {!showwalletaddress &&
                                                                useraddress &&
                                                                `${shortenaddress(useraddress)}`}
                                                            {showwalletaddress && useraddress}
                                                        </button>
                                                    </div>
                                                </div>
                                            </DropdownMenu>
                                        )}
                                    </DropdownMenuContainer>
                                </DropdownMenuContainerBox>
                                <IntroContainer>
                                    <ShadowBox
                                        key="box4"
                                        initial={{ x: 0, opacity: 0, scale: 1 }}
                                        animate={{ x: 0, opacity: 1, scale: 1 }}
                                        exit={{
                                            x: 0,
                                            opacity: 0,
                                            scale: 1,
                                            transition: { ease: "easeOut", delay: "0.25" },
                                        }}
                                        transition={{ ease: "easeIn", delay: "0.25" }}
                                    />
                                    <Intro
                                        key="box5"
                                        initial={{ x: "100%", opacity: 1, scale: 1 }}
                                        animate={{ x: 0, opacity: 1, scale: 1 }}
                                        exit={{
                                            x: "100%",
                                            opacity: 1,
                                            scale: 1,
                                            transition: { duration: 0.15, ease: "easeOut" },
                                        }}
                                        transition={{ duration: 0.25, ease: "easeIn" }}
                                    >
                                        <DropdownBar>
                                            <ButtonContainer>
                                                {!followstatues && (
                                                    <Icon>
                                                        <Follow />
                                                        <IconText>Follow </IconText>
                                                    </Icon>
                                                )}

                                                {followstatues && (
                                                    <Icon>
                                                        <Unfollow />
                                                        <IconText>Following </IconText>
                                                    </Icon>
                                                )}

                                                <div>
                                                    <Icon>
                                                        <RiMessageFill color="white" size={18} />
                                                        <IconText>Message </IconText>
                                                    </Icon>
                                                </div>
                                                <div>
                                                    <Icon>
                                                        <RiSendPlaneFill color="white" size={18} />
                                                        <IconText>Send ETH </IconText>
                                                    </Icon>
                                                </div>
                                            </ButtonContainer>
                                            {isDropped ? (
                                                <div>
                                                    <div onClick={foldthemenu}>
                                                        <RiArrowDropUpLine
                                                            color="white"
                                                            size={30}
                                                        />
                                                    </div>
                                                </div>
                                            ) : (
                                                <div>
                                                    <div onClick={dropthemenu}>
                                                        <RiArrowDropDownLine
                                                            color="white"
                                                            size={30}
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </DropdownBar>
                                        <Intro2>
                                            <PFPContainer>
                                                <img src={Pfp} className="rounded-full" />
                                            </PFPContainer>
                                            <Intro3>
                                                <div className="flex">
                                                    <button className="text-white text-[15px] font-medium">
                                                        {useraddress && Name}
                                                    </button>

                                                    <div>
                                                        <IconButton>
                                                            <p className="flex text-xs text-white justify-center">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="yellow"
                                                                    viewBox="0 0 24 24"
                                                                    stroke-width="0"
                                                                    stroke="currentColor"
                                                                    class="w-8 h-8"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                                                                    />
                                                                </svg>
                                                            </p>
                                                            <p className="text-md font-medium px-1 text-white mt-1">
                                                                {starNum && starNum}
                                                            </p>
                                                        </IconButton>
                                                    </div>
                                                </div>

                                                <BioContainer>
                                                    <BioDisplay>
                                                        {motto != " " && motto}

                                                        {motto == " " && " "}
                                                    </BioDisplay>
                                                </BioContainer>
                                            </Intro3>
                                            <ButtonContainerPC>
                                                {!followstatues && (
                                                    <Icon>
                                                        <Follow />
                                                        <IconText>Follow </IconText>
                                                    </Icon>
                                                )}

                                                {followstatues && (
                                                    <Icon>
                                                        <Unfollow />
                                                        <IconText>Following </IconText>
                                                    </Icon>
                                                )}

                                                <Icon>
                                                    <RiMessageFill color="white" size={18} />
                                                    <IconText>Message </IconText>
                                                </Icon>

                                                <Icon>
                                                    <RiSendPlaneFill color="white" size={18} />
                                                    <IconText>Send ETH </IconText>
                                                </Icon>
                                            </ButtonContainerPC>
                                        </Intro2>

                                        <InfoBarContainer>
                                            <InfoBar>
                                                <div className="w-11/12 flex space-x-4 justify-center">
                                                    <div>
                                                        <Button
                                                            onClick={seefollwing}
                                                            className="w-16 mt-3 mb-3 rounded-xl"
                                                        >
                                                            <p className="text-md font-medium mt-2 px-1 text-white">
                                                                {followingsnum && followingsnum}
                                                            </p>
                                                            <p className="text-xs mb-2.5 px-1 text-white">
                                                                Following
                                                            </p>
                                                        </Button>
                                                    </div>

                                                    <div>
                                                        <Button
                                                            onClick={seefollower}
                                                            className="w-16 mt-3 mb-3 rounded-xl"
                                                        >
                                                            <p className="text-md font-medium mt-2 px-1 text-white">
                                                                {followersnum && followersnum}
                                                            </p>
                                                            <p className="text-xs mb-2.5 px-1 text-white">
                                                                Follower
                                                            </p>
                                                        </Button>
                                                    </div>

                                                    {signetsnum && (
                                                        <div>
                                                            <Button
                                                                onClick={seesignets}
                                                                className="w-16 mt-3 mb-3 rounded-xl"
                                                            >
                                                                <p className="text-md font-medium mt-2 px-1 text-white">
                                                                    {signetsnum && signetsnum}
                                                                </p>
                                                                <p className="text-xs mb-2.5 px-1 text-white">
                                                                    Signets
                                                                </p>
                                                            </Button>
                                                        </div>
                                                    )}
                                                    {!signetsnum && (
                                                        <div>
                                                            <Button
                                                                onClick={seesignets}
                                                                className="w-16 mt-3 mb-3 rounded-xl"
                                                            >
                                                                <p className="text-md font-medium mt-2 px-1 text-white">
                                                                    {"0"}
                                                                </p>
                                                                <p className="text-xs mb-2.5 px-1 text-white">
                                                                    Signets
                                                                </p>
                                                            </Button>
                                                        </div>
                                                    )}
                                                    <div>
                                                        <Button
                                                            onClick={seeassets}
                                                            className="w-16 mt-3 mb-3 rounded-xl"
                                                        >
                                                            <p className="text-md font-medium mt-2 px-1 text-white">
                                                                {assetNum}
                                                            </p>
                                                            <p className="text-xs mb-2.5 px-1 text-white">
                                                                Assets
                                                            </p>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </InfoBar>
                                        </InfoBarContainer>
                                    </Intro>
                                </IntroContainer>
                            </ProfileSection>
                            <div>
                                <AnimatePresence mode="wait">
                                    {watchstatus == "follwing" && (
                                        <motion.div
                                            key="box"
                                            initial={{ y: "100%", opacity: 1, scale: 1 }}
                                            animate={{ y: 0, opacity: 1, scale: 1 }}
                                            exit={{
                                                y: "100%",
                                                opacity: 1,
                                                scale: 1,
                                                transition: { duration: 0.4, ease: "easeOut" },
                                            }}
                                            transition={{ duration: 0.3, ease: "easeIn" }}
                                        >
                                            <FollowingList />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <AnimatePresence mode="wait">
                                    {watchstatus == "follower" && (
                                        <motion.div
                                            key="box"
                                            initial={{ y: "100%", opacity: 1, scale: 1 }}
                                            animate={{ y: 0, opacity: 1, scale: 1 }}
                                            exit={{
                                                y: "100%",
                                                opacity: 1,
                                                scale: 1,
                                                transition: { duration: 0.4, ease: "easeOut" },
                                            }}
                                            transition={{ duration: 0.3, ease: "easeIn" }}
                                        >
                                            <FollowerList />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <AnimatePresence mode="wait">
                                    {watchstatus == "assets" && (
                                        <motion.div
                                            key="box"
                                            initial={{ y: "100%", opacity: 1, scale: 1 }}
                                            animate={{ y: 0, opacity: 1, scale: 1 }}
                                            exit={{
                                                y: "100%",
                                                opacity: 1,
                                                scale: 1,
                                                transition: { duration: 0.4, ease: "easeOut" },
                                            }}
                                            transition={{ duration: 0.3, ease: "easeIn" }}
                                        >
                                            <OwnerAssets address={useraddress} number={assetNum} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <AnimatePresence mode="wait">
                                {isShow && (
                                    <motion.div
                                        key="box"
                                        initial={{ y: "100%", opacity: 1, scale: 1 }}
                                        animate={{ y: 0, opacity: 1, scale: 1 }}
                                        exit={{
                                            y: "100%",
                                            opacity: 1,
                                            scale: 1,
                                            transition: { duration: 0.4, ease: "easeOut" },
                                        }}
                                        transition={{ duration: 0.3, ease: "easeIn" }}
                                    >
                                        <Messagelist
                                            useraddress={useraddress}
                                            number={parseInt(signetsnum)}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )}
                </div>
                <div>
                    {useraddress == address && (
                        <div>
                            <AnimatePresence className="z-[100]">
                                {openSetting && (
                                    <motion.div>
                                        <Setting
                                            openSetting={openSetting}
                                            setOpenSetting={setOpenSetting}
                                            Pfp={Pfp}
                                            Name={Name}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <ProfileSection>
                                <DropdownMenuContainerBox>
                                    <AnimatePresence mode="wait">
                                        <DropdownMenuContainer
                                            key="box3"
                                            initial={{ x: "100%", opacity: 1, scale: 1 }}
                                            animate={{ x: 0, opacity: 1, scale: 1 }}
                                            exit={{
                                                x: "100%",
                                                opacity: 1,
                                                scale: 1,
                                                transition: { duration: 0.15, ease: "easeOut" },
                                            }}
                                            transition={{ duration: 0.25, ease: "easeIn" }}
                                        >
                                            <Title>Account Detail</Title>
                                            {isDropped && (
                                                <DropdownMenu
                                                    key="box"
                                                    initial={{ y: "100%", opacity: 1, scale: 1 }}
                                                    animate={{ y: 0, opacity: 1, scale: 1 }}
                                                    exit={{
                                                        y: "100%",
                                                        opacity: 1,
                                                        scale: 1,
                                                        transition: {
                                                            duration: 0.1,
                                                            ease: "easeOut",
                                                        },
                                                    }}
                                                    transition={{ duration: 0.25, ease: "easeIn" }}
                                                >
                                                    <div>
                                                        <div className="w-[100%] flex justify-between items-center m">
                                                            <p className="text-medium text-[10px] font-medium text-white">
                                                                {useraddress && `Wallet Address: `}
                                                            </p>
                                                            <button
                                                                className="italic text-[10px] right-4 text-white"
                                                                onClick={show1}
                                                            >
                                                                {!showwalletaddress &&
                                                                    useraddress &&
                                                                    `${shortenaddress(
                                                                        useraddress
                                                                    )}`}
                                                                {showwalletaddress && useraddress}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </DropdownMenu>
                                            )}
                                        </DropdownMenuContainer>
                                    </AnimatePresence>
                                </DropdownMenuContainerBox>
                                <IntroContainer>
                                    <ShadowBox
                                        key="box7"
                                        initial={{ x: 0, opacity: 0, scale: 1 }}
                                        animate={{ x: 0, opacity: 1, scale: 1 }}
                                        exit={{
                                            x: 0,
                                            opacity: 0,
                                            scale: 1,
                                            transition: { ease: "easeOut", delay: "0.25" },
                                        }}
                                        transition={{ ease: "easeIn", delay: "0.25" }}
                                    />
                                    <Intro
                                        key="box2"
                                        initial={{ x: "100%", opacity: 1, scale: 1 }}
                                        animate={{ x: 0, opacity: 1, scale: 1 }}
                                        exit={{
                                            x: "100%",
                                            opacity: 1,
                                            scale: 1,
                                            transition: { duration: 0.15, ease: "easeOut" },
                                        }}
                                        transition={{ duration: 0.25, ease: "easeIn" }}
                                    >
                                        <DropdownBar>
                                            {isEditing ? (
                                                <IconPCUSER onClick={editcancel}>
                                                    <MdMode color="white" size={18} />
                                                    <IconText>Cancel </IconText>
                                                </IconPCUSER>
                                            ) : (
                                                <IconPCUSER onClick={edit}>
                                                    <MdMode color="white" size={18} />
                                                    <IconText>Edit </IconText>
                                                </IconPCUSER>
                                            )}

                                            {isDropped ? (
                                                <IconPCUSER onClick={foldthemenu}>
                                                    <RiArrowDropUpLine color="white" size={30} />
                                                </IconPCUSER>
                                            ) : (
                                                <IconPCUSER onClick={dropthemenu}>
                                                    <RiArrowDropDownLine color="white" size={30} />
                                                </IconPCUSER>
                                            )}
                                        </DropdownBar>
                                        <Intro2>
                                            <PFPContainer>
                                                <img src={Pfp} className="rounded-full" />
                                            </PFPContainer>
                                            <Intro3>
                                                <div className="flex">
                                                    <button className="text-white text-[15px] font-medium">
                                                        {useraddress && Name}
                                                    </button>

                                                    <div>
                                                        <IconButton>
                                                            <p className="flex text-xs text-white justify-center">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="yellow"
                                                                    viewBox="0 0 24 24"
                                                                    stroke-width="0"
                                                                    stroke="currentColor"
                                                                    class="w-8 h-8"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                                                                    />
                                                                </svg>
                                                            </p>
                                                            <p className="text-md font-medium px-1 text-white mt-1">
                                                                {starNum && starNum}
                                                            </p>
                                                        </IconButton>
                                                    </div>
                                                </div>
                                                <BioContainer>
                                                    <BioDisplay>
                                                        {motto != " " && motto}

                                                        {motto == " " && " "}
                                                    </BioDisplay>
                                                </BioContainer>
                                                <ModifySection>
                                                    {changename && (
                                                        <Edit>
                                                            <input
                                                                className="w-[90%] text-left bg-gray-700 rounded-md text-xs text-white py-1 px-2"
                                                                rows="1"
                                                                placeholder="Username"
                                                                value={input}
                                                                onChange={(e) => {
                                                                    setInput(e.target.value)
                                                                    setchangeNameReady(false)
                                                                }}
                                                            />
                                                            <EditButton>
                                                                {!changeNameReady ? (
                                                                    <ModifyButton
                                                                        onClick={checknameavaila}
                                                                    >
                                                                        check
                                                                    </ModifyButton>
                                                                ) : (
                                                                    <ModifyButton
                                                                        onClick={changeName}
                                                                    >
                                                                        submit
                                                                    </ModifyButton>
                                                                )}
                                                                <ModifyButton
                                                                    onClick={changenamefunction1}
                                                                >
                                                                    cancel
                                                                </ModifyButton>
                                                            </EditButton>
                                                        </Edit>
                                                    )}
                                                    {changemo == true && (
                                                        <Edit>
                                                            <input
                                                                className="w-full text-left bg-gray-700 rounded-md text-xs text-white py-1 px-2"
                                                                rows="4"
                                                                placeholder="Personal Bio"
                                                                value={inputmotto}
                                                                onChange={(e) => {
                                                                    setInputmotto(e.target.value)
                                                                    setchangeNameReady(false)
                                                                }}
                                                            />
                                                            <EditButton>
                                                                <ModifyButton
                                                                    disabled={isLoading}
                                                                    onClick={() => signTypedData()}
                                                                >
                                                                    Submit
                                                                </ModifyButton>
                                                                <ModifyButton
                                                                    onClick={changeMottocancel}
                                                                >
                                                                    Cancel
                                                                </ModifyButton>
                                                            </EditButton>
                                                        </Edit>
                                                    )}
                                                </ModifySection>
                                            </Intro3>
                                        </Intro2>
                                        <InfoBarContainer>
                                            <InfoBar>
                                                <div className="w-11/12 flex space-x-4 justify-center">
                                                    <div>
                                                        <Button
                                                            onClick={seefollwing}
                                                            className="w-16 mt-3 mb-3 rounded-xl"
                                                        >
                                                            <p className="text-md font-medium mt-2 px-1 text-white">
                                                                {followingsnum && followingsnum}
                                                            </p>
                                                            <p className="text-xs mb-2.5 px-1 text-white">
                                                                Following
                                                            </p>
                                                        </Button>
                                                    </div>

                                                    <div>
                                                        <Button
                                                            onClick={seefollower}
                                                            className="w-16 mt-3 mb-3 rounded-xl"
                                                        >
                                                            <p className="text-md font-medium mt-2 px-1 text-white">
                                                                {followersnum && followersnum}
                                                            </p>
                                                            <p className="text-xs mb-2.5 px-1 text-white">
                                                                Follower
                                                            </p>
                                                        </Button>
                                                    </div>

                                                    {signetsnum && (
                                                        <div>
                                                            <Button
                                                                onClick={seesignets}
                                                                className="w-16 mt-3 mb-3 rounded-xl"
                                                            >
                                                                <p className="text-md font-medium mt-2 px-1 text-white">
                                                                    {signetsnum && signetsnum}
                                                                </p>
                                                                <p className="text-xs mb-2.5 px-1 text-white">
                                                                    Signets
                                                                </p>
                                                            </Button>
                                                        </div>
                                                    )}
                                                    {!signetsnum && (
                                                        <div>
                                                            <Button
                                                                onClick={seesignets}
                                                                className="w-16 mt-3 mb-3 rounded-xl"
                                                            >
                                                                <p className="text-md font-medium mt-2 px-1 text-white">
                                                                    {"0"}
                                                                </p>
                                                                <p className="text-xs mb-2.5 px-1 text-white">
                                                                    Signets
                                                                </p>
                                                            </Button>
                                                        </div>
                                                    )}
                                                    <div>
                                                        <Button
                                                            onClick={seeassets}
                                                            className="w-16 mt-3 mb-3 rounded-xl"
                                                        >
                                                            <p className="text-md font-medium mt-2 px-1 text-white">
                                                                {assetNum}
                                                            </p>
                                                            <p className="text-xs mb-2.5 px-1 text-white">
                                                                Assets
                                                            </p>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </InfoBar>
                                        </InfoBarContainer>
                                    </Intro>
                                </IntroContainer>
                            </ProfileSection>
                            <div>
                                <AnimatePresence mode="wait">
                                    {watchstatus == "follwing" && (
                                        <motion.div
                                            key="box"
                                            initial={{ y: "100%", opacity: 1, scale: 1 }}
                                            animate={{ y: 0, opacity: 1, scale: 1 }}
                                            exit={{
                                                y: "100%",
                                                opacity: 1,
                                                scale: 1,
                                                transition: { duration: 0.4, ease: "easeOut" },
                                            }}
                                            transition={{ duration: 0.3, ease: "easeIn" }}
                                        >
                                            <FollowingList />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <AnimatePresence mode="wait">
                                    {watchstatus == "follower" && (
                                        <motion.div
                                            key="box"
                                            initial={{ y: "100%", opacity: 1, scale: 1 }}
                                            animate={{ y: 0, opacity: 1, scale: 1 }}
                                            exit={{
                                                y: "100%",
                                                opacity: 1,
                                                scale: 1,
                                                transition: { duration: 0.4, ease: "easeOut" },
                                            }}
                                            transition={{ duration: 0.3, ease: "easeIn" }}
                                        >
                                            <FollowerList />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <AnimatePresence mode="wait">
                                    {watchstatus == "assets" && (
                                        <motion.div
                                            key="box"
                                            initial={{ y: "100%", opacity: 1, scale: 1 }}
                                            animate={{ y: 0, opacity: 1, scale: 1 }}
                                            exit={{
                                                y: "100%",
                                                opacity: 1,
                                                scale: 1,
                                                transition: { duration: 0.4, ease: "easeOut" },
                                            }}
                                            transition={{ duration: 0.3, ease: "easeIn" }}
                                        >
                                            <OwnerAssets address={useraddress} number={assetNum} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            {/* {!ownersignetoraddress && (
                            <h4 className="mt-0 text-black">signetor have not</h4>
                        )}

                        {!ownersignetoraddress && (
                            <button className="nderline-offset-auto max-w-none mb-2 text-black">
                                been created yet
                            </button>
                        )} */}
                            <AnimatePresence mode="wait">
                                {isShow && (
                                    <motion.div
                                        key="box"
                                        initial={{ y: "100%", opacity: 1, scale: 1 }}
                                        animate={{ y: 0, opacity: 1, scale: 1 }}
                                        exit={{
                                            y: "100%",
                                            opacity: 1,
                                            scale: 1,
                                            transition: { duration: 0.4, ease: "easeOut" },
                                        }}
                                        transition={{ duration: 0.3, ease: "easeIn" }}
                                    >
                                        <Messagelist
                                            useraddress={useraddress}
                                            number={parseInt(signetsnum)}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )}
                </div>
            </Section>
        </SectionContainer>
        //     )}
        // </div>
    )
}
