import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import styles from "../styles/Dashbaord.module.css"
import creatorcontract from "../constants/abi.json"
import Signetorpfp from "./Signetorpfp.js"
import { useToasts } from "react-toast-notifications"
import styles1 from "../styles/Dashbaord.module.css"


import stylesprofile from "../styles/profile.module.css"
import { EmojiHappyIcon, SparklesIcon, PhotographIcon, XIcon } from "@heroicons/react/outline"
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
export default function Signetorname() {
    const router = useRouter()
    const { address } = useAccount()
    const [input, setInput] = useState("")
    const [File, setFile] = useState("")
    const [selectedFile, setSelectedFile] = useState(null)
    const [ready, setready] = useState(false)
    const [gene, setgene] = useState(false)
    const [uploadFile, setuploadFile] = useState("")
    const { addToast } = useToasts()
    const filePickerRef = useRef(null)
    function setnewname() {
        var formdata = new FormData()
        formdata.append("address", address)
        formdata.append("name", input)
        if (File) {
            formdata.append("profilepic", File)
        } else {
            formdata.append("profilepic", "None")
        }
        var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow",
        }

        fetch("https://api.signet.ink/pfi/name/", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.toString() == "duplicate") {
                    errortoast("Duplicate Name!")
                } else {
                    successtoast()
                    fetch("https://api.signet.ink/pfi/pfp/", requestOptions)
                        .then((response) => response.json())
                        .then((result) => {
                            console.log(result)
                            if (result.toString() == "updated") {
                                setready(true)
                            } else {
                                errortoast("Please choose your profile pic!")
                            }
                        })
                        .catch((error) => console.log("error", error))
                }
            })
            .catch((error) => console.log("error", error))
    }
    function errortoast(e) {
        addToast(e, { appearance: "error" })
    }

    function successtoast() {
        addToast("Name is available!", { appearance: "success" })
    }
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
                addToast("Name is available!", { appearance: "success" })
                setready(true)
            } else {
                errortoast("Duplicated name, choose another name please!")
            }
        } else {
            errortoast(
                "Name can not exceed 12 letters, and also special charactors might not be able to set in the contract storage!"
            )
        }
    }
    const { config } = usePrepareContractWrite({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        functionName: "createNameForNewUser",
        args: input,
    })
    const { data: resultss, write: createNameForNewUser } = useContractWrite(config)

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
            addToast("Signetor Generated Successful!", { appearance: "success" })
            setgene(true)
        }
    }, [createNameForNewUserisSuccess])
    function createNameForNewUserName() {
        createNameForNewUser()
    }

    return (
        <div>
            <div className="mt-15 text-center flex flex-col justify-center items-center mt-20 items-center justify-items-center text-center opacity-100 relative font-bold text-white">
                <div className="mt-20 font-bold text-white">username</div>
                <input
                    className="text-center bg-transparent border rounded-lg text-sm border-white text-white"
                    rows="1"
                    placeholder=""
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value)
                        setready(false)
                    }}
                ></input>
                <div className="mt-1">
                    {!ready && (
                        <button
                            disabled={!input.trim()}
                            className={styles1.button18}
                            onClick={checknameavaila}
                        >
                            check
                        </button>
                    )}
                    {ready && (
                        <button
                            disabled={!input.trim()}
                            className={styles1.button18}
                            onClick={createNameForNewUserName}
                        >
                            submit
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
