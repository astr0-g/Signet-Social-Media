import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import styles from "../styles/Dashbaord.module.css"
import creatorcontract from "../constants/abi.json"
import Signetorpfp from "./Signetorpfp.js"
import Signetorname from "./Signetorname.js"
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
import { serializeTransaction } from "ethers/lib/utils"
export default function Signetor() {
    const { address } = useAccount()
    const [numberowned, setnumberowned] = useState(0)
    const [input, setInput] = useState("")
    const [File, setFile] = useState("")
    const [RR, setRR] = useState(false)
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

    const { config } = usePrepareContractWrite({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        functionName: "controllorCreateSignetor",
        args: ["Signetor", "SG"],
    })
    const { data: resultss, write: controllorCreateSignetor } = useContractWrite(config)

    const { isLoading: CreateSignetorisLoading, isSuccess: CreateSignetorisSuccess } =
        useWaitForTransaction({
            hash: resultss?.hash,
        })
    useEffect(() => {
        if (CreateSignetorisLoading) {
            addToast("Transaction Submitted...", { appearance: "success" })
        }
    }, [CreateSignetorisLoading])
    useEffect(() => {
        if (CreateSignetorisSuccess) {
            addToast("Signetor Generated Successful!", { appearance: "success" })
            setgene(true)
        }
    }, [CreateSignetorisSuccess])
    function CreateSignetor() {
        controllorCreateSignetor()
    }
    async function submit() {
        controllorCreateSignetor()
    }
    const { data: hasPfp } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "hasPfp",
        watch: true,
        args: address,
    })
    const { data: hasName } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "hasName",
        watch: true,
        args: address,
    })
    const { data: number } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "getOwnerNumContractOfSignetor",
        watch: true,
        args: address,
    })
    useEffect(() => {
        if (number) {
            setnumberowned(number.toString())
        }
    }, [number])

    return (
        <div>
            <div className="h-[100vh] bg-black ">
                <h1 className="grid items-center justify-items-center text-center opacity-100 relative text-3xl lg:text-2xl md:text-1xl sm:text-sm font-bold text-white">
                    You seems new to here, lets generate your signet account!
                </h1>
                {numberowned != 0 ? (
                    <div>
                        <div className="mt-15 text-center flex flex-col justify-center items-center mt-20 items-center justify-items-center text-center opacity-100 relative font-bold text-white">
                            <Signetorpfp />
                            <Signetorname />
                        </div>
                    </div>
                ) : (
                    <div className="mt-20 flex flex-col justify-center items-center">
                        <button
                            className={styles.button85}
                            disabled={!controllorCreateSignetor || CreateSignetorisLoading}
                            onClick={CreateSignetor}
                        >
                            {CreateSignetorisLoading ? "Generating..." : "Generate"}
                        </button>
                        {CreateSignetorisLoading && <div>......</div>}
                    </div>
                )}
            </div>
        </div>
    )
}
