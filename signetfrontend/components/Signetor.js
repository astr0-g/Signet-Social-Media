import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import styles from "../styles/Dashbaord.module.css"
import creatorcontract from "../constants/abi.json"
import { useToasts } from "react-toast-notifications"

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
export default function Signetor() {
    const { addToast } = useToasts()

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
        }
    }, [CreateSignetorisSuccess])
    function CreateSignetor() {
        controllorCreateSignetor()
    }
    return (
        <div>
            <div className="h-[100vh] bg-black grid items-center justify-items-center text-center opacity-100 relative">
                <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-white">
                    Looks like you don't have a message box contract yet, lets create one!
                </h1>
                <div className="flex flex-col justify-center items-center">
                    <button
                        className={styles.button85}
                        disabled={!controllorCreateSignetor || CreateSignetorisLoading}
                        onClick={CreateSignetor}
                    >
                        {CreateSignetorisLoading ? "Generating..." : "Generate"}
                    </button>
                    {CreateSignetorisLoading && <div>......</div>}
                </div>
            </div>
        </div>
    )
}
