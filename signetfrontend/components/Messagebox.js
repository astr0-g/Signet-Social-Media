import Image from "next/image"
import { EmojiHappyIcon, SparklesIcon, PhotographIcon, XIcon } from "@heroicons/react/outline"
import { useState, useEffect, useRef } from "react"
import styles from "../styles/Dashbaord.module.css"
import creatorcontract from "../constants/abi.json"
import { useToasts } from "react-toast-notifications"
import signetorcontract from "../constants/Signetor.json"
import { ConnectButton } from "@rainbow-me/rainbowkit"
// Import the NFTStorage class and File constructor from the 'nft.storage' package
import { NFTStorage, File } from "nft.storage"
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
const nonepic = new File([], "thismeansthissignetdoesnothavephoto.png", { type: "image/png" })

import styled, { keyframes } from "styled-components"
import { BsDashLg } from "react-icons/bs"
import PfpImage from "./PfpImage"

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
    height: 67vh;
    display: block;
    justify-content: center;
    align-items: center;
    /* background: linear-gradient(
        315deg,
        rgba(89, 56, 115, 0.99) 3%,
        rgba(77, 48, 121, 0.99) 38%,
        rgba(48, 40, 90, 0.99) 68%,
        rgba(43, 22, 68, 0.99) 98%
    );
    animation: ${Gradient} 28s ease infinite;
    background-size: 400% 400%;
    background-attachment: fixed; */

    background-color: rgba(42, 32, 64, 1);

    @media only screen and (min-width: 1024px) {
        display: none;
    }
`

const Title = styled.div`
    width: 100%;
    font-size: 1rem;
    text-align: center;
    padding: 0.75rem;
    color: white;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const PfpContainer = styled.div`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1.5px solid white;
`

const IconContainer = styled.button`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const InputContainer = styled.div`
    width: 100vw;
    background-color: rgba(32, 32, 32, 0.75);
`

const ButtonContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0.75rem;
`

const ImgContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-top: 0.5rem;
`

const SelectedImg = styled.img`
    max-height: 33vh;
    object-fit: contain;

    @media only screen and (max-width: 389px) {
        max-height: 28vh;
    }
`

const Button = styled.button`
    display: inline-block;
    color: white;
    outline: none;
    border: none;
    font-weight: 600;
    font-size: 15px;
    padding: 0.5rem 1.5rem;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    border: 2px solid white;

    @media (max-width: 48em) {
        padding: 1rem 2rem;
    }
    @media (max-width: 30em) {
        padding: 0.5rem 2rem;
        font-size: 14px;
    }

    &:hover {
        transform: scale(0.9);
    }

    &::after {
        content: " ";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        border: white;
        width: 100%;
        height: 100%;
        border-radius: 50px;
        transition: all 0.2s ease;
    }

    &:hover::after {
        transform: translate(-50%, -50%) scale(1);
        padding: 0.3rem;
    }
`

export default function Messagebox({ showbox, timeout, children, isPosting, setIsPosting }) {
    const NFT_STORAGE_KEY = process.env.NEXT_PUBLIC_NFT_STORAGE_KEY

    const [input, setInput] = useState("")
    const [File, setFile] = useState("")
    const [results, setResults] = useState(0)
    const [selectedFile, setSelectedFile] = useState(null)
    const [show, setShow] = useState(false)
    const [CIDnumber, setCIDnumber] = useState()
    const [numberowned, setnumberowned] = useState(0)
    const [loading, setLoading] = useState(false)
    const [ready, setReady] = useState(false)
    const [post, setpost] = useState(false)
    const [ipfs, setipfs] = useState("")
    const [value2send, setvalue2send] = useState("")
    const [tokenURL, setTokenURL] = useState("")
    const [ownersignetnum, setownersignetnum] = useState("")
    const [Inumber, setInumber] = useState("")
    const [explorestutes, setexplorestutes] = useState(false)
    const [disable, setDisable] = useState(false)
    const filePickerRef = useRef(null)
    const { addToast } = useToasts()
    const { address } = useAccount()
    const { chains } = useNetwork()

    const { data: valuetosend } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "getValueForSendMessage",
        watch: true,
    })
    const addImageToPost = (e) => {
        const reader = new FileReader()

        if (e.target.files[0] && verificationPicFile(e.target) != false) {
            reader.readAsDataURL(e.target.files[0])
            addToast("Picture Uploaded Successfully", { appearance: "success" })
            setFile(e.target.files[0])
            setReady(false)
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result)
        }
    }
    function verificationPicFile(file) {
        var fileSize = 0
        var fileMaxSize = 20480 //1M
        var filePath = file.value
        if (filePath) {
            fileSize = file.files[0].size
            var size = fileSize / 1024
            if (size > fileMaxSize) {
                addToast("File size could not exceed 20MB!", { appearance: "warning" })
                file.value = ""
                return false
            } else if (size <= 0) {
                addToast("File size could not be 0!", { appearance: "warning" })
                file.value = ""
                return false
            }
        } else {
            return false
        }
    }
    const { config } = usePrepareContractWrite({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        functionName: "sendMessage",
        overrides: {
            from: address,
            value: value2send,
        },
        args: [tokenURL],
    })
    const { data: resultss, write: controllorsendmessage } = useContractWrite(config)
    const {
        isLoading: CreateSignetorisLoading,
        isError: sendmessageerror,
        isSuccess: CreateSignetorisSuccess,
    } = useWaitForTransaction({
        hash: resultss?.hash,
    })
    useEffect(() => {
        if (sendmessageerror) {
            addToast("Transaction error...", { appearance: "error" })
            setReady(false)
        }
    }, [CreateSignetorisLoading])
    useEffect(() => {
        if (CreateSignetorisLoading) {
            addToast("Transaction Submitted...", { appearance: "success" })
            setpost(true)
        }
    }, [CreateSignetorisLoading])
    useEffect(() => {
        if (CreateSignetorisSuccess) {
            setpost(false)
            setSelectedFile(null)
            setInput("")
            setReady(false)
            setShow(true)
            setDisable(false)
            addToast("Message sent successful!", { appearance: "success" })
            setIsPosting(false)
        }
    }, [CreateSignetorisSuccess])

    async function storeNFT(imagefile, name, description) {
        // load the file from disk
        const image = imagefile

        // create a new NFTStorage client using our API key
        const nftstorage = new NFTStorage({
            token: `${NFT_STORAGE_KEY}`,
        })

        // call client.store, passing in the image & metadata
        return nftstorage.store({
            image,
            name,
            description,
        })
    }
    const sendPost = async () => {
        if (loading) return
        addToast("Filecoin: Uploading signet to IPFS...", { appearance: "success" })
        setLoading(true)
        var formdata = new FormData()
        formdata.append("description", input)
        if (selectedFile) {
            formdata.append("image", File)
            const result = await storeNFT(File, "signet", input)
            console.log(`Filecoin x nft.storage ipfs storage CID result: ${result["url"]}`)
            setipfs(result["url"])
            formdata.append("imageurl", result["url"])
        } else {
            formdata.append("image", "")
            const result = await storeNFT(nonepic, "signet", input)
            console.log(`Filecoin x nft.storage ipfs storage CID result: ${result["url"]}`)
            setipfs(result["url"])
            formdata.append("imageurl", result["url"])
        }
        // ----------------------------------------------------------
        // --------below is the Estuary IPFS service code------------
        // --------------since It is about NFT -----------------------
        // ---------so signet will only run with nft.storage---------
        // ----------------------------------------------------------
        // const estuary_KEY = process.env.NEXT_PUBLIC_estuary_KEY
        // const formData = new FormData()
        // formData.append("data", File)
        // await fetch("https://upload.estuary.tech/content/add", {
        //     method: "POST",
        //     headers: {
        //         Authorization: `Bearer ${estuary_KEY}`,
        //     },
        //     body: formData,
        // })
        //     .then((response) => response.text())
        //     .then((result) => {
        //         console.log(result['cid'])
        //     })
        //     .catch((error) => console.log("error", error))
        // ----------------------------------------------------------
        // --------above is the Estuary IPFS service code------------
        // ----------------------------------------------------------
        var requestOptions = {
            statusCode: 200,
            method: "POST",
            body: formdata,
            redirect: "follow",
            // mode: "no-cors",
        }

        await fetch(`${process.env.NEXT_PUBLIC_APIENDPOINT}/tokenurl/`, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                setCIDnumber(result)
            })
            .catch((error) => console.log("error", error))
        setLoading(false)
        setReady(true)
        addToast("Filecoin: Uploading to IPFS successful, Feel free to sign your signet!", {
            appearance: "success",
        })
    }

    const contractreact = async () => {
        setDisable(true)
        controllorsendmessage()
    }

    useEffect(() => {
        if (CIDnumber) {
            setTokenURL(ipfs)
        }
    }, [CIDnumber])
    useEffect(() => {
        if (valuetosend) {
            setvalue2send(valuetosend)
        }
    }, [valuetosend])

    const closeModal = () => {
        setIsPosting(false)
    }

    return (
        <Section>
            <Title>
                <PfpContainer>
                    <PfpImage address={address} />
                </PfpContainer>
                <h1>Post</h1>
                <IconContainer onClick={closeModal}>
                    <BsDashLg size={24} />
                </IconContainer>
            </Title>
            <InputContainer>
                <textarea
                    className="w-full focus:ring-0 text-md placeholder-white tracking-wide min-h-[50px] text-white bg-transparent pl-3 pt-1 text-[12px]"
                    rows="5"
                    placeholder="What's popping?"
                    value={input}
                    disabled={ready}
                    onChange={(e) => setInput(e.target.value)}
                ></textarea>
            </InputContainer>
            {/* <div className="flex border-b border-gray-200 p-3 space-x-3 text-xs">
                <ConnectButton
                    accountStatus="address"
                    showBalance={{
                        smallScreen: false,
                        largeScreen: false,
                    }}
                    chainStatus="none"
                />
            </div> */}

            {selectedFile && (
                <ImgContainer>
                    <XIcon
                        onClick={() => setSelectedFile(null)}
                        className="text-white white w-8 h-8"
                    />
                    <SelectedImg
                        src={selectedFile}
                        className={`${loading && "animate-pulse"}`}
                    ></SelectedImg>
                </ImgContainer>
            )}
            <ButtonContainer>
                <div className="flex items-center justify-between">
                    {!loading && (
                        <div className="w-full flex justify-center items-center mt-2">
                            <div className="mr-2">
                                <div className="" onClick={() => filePickerRef.current.click()}>
                                    <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-white white hover:bg-sky-100 ml-2" />
                                    <input
                                        type="file"
                                        hidden
                                        ref={filePickerRef}
                                        onChange={addImageToPost}
                                    />
                                </div>
                            </div>
                            <div>
                                {!ready && !post && (
                                    <Button onClick={sendPost} disabled={!input.trim()}>
                                        Generate Signet
                                    </Button>
                                )}
                            </div>
                            <div className="mr-2">
                                {ready && !CreateSignetorisLoading && (
                                    <Button onClick={contractreact} disabled={!input.trim()}>
                                        {"Sign"}
                                    </Button>
                                )}
                            </div>
                            <div className="flex">
                                {ready && CreateSignetorisLoading && (
                                    <Button
                                        onClick={contractreact}
                                        disabled={(!input.trim(), disable)}
                                    >
                                        {"Posting..."}
                                    </Button>
                                )}
                            </div>
                            {!loading && ready && !CreateSignetorisLoading && (
                                <Button onClick={() => setReady(false)} disabled={!input.trim()}>
                                    Cancel
                                </Button>
                            )}
                        </div>
                    )}
                </div>
            </ButtonContainer>
            <div className="flex items-center justify-between pt-2"></div>
        </Section>
    )
}
