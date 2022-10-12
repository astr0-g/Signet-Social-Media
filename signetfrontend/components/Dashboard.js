import Image from "next/image"
import { useState, useEffect } from "react"
import styles from "../styles/Dashbaord.module.css"
import creatorcontract from "../constants/abi.json"
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
export default function Dashboard() {
    const [results, setResults] = useState(0)
    const [numberowned, setnumberowned] = useState(0)

    const { address } = useAccount()
    const { chains } = useNetwork()
    const { data: number } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "getOwnerNumContractOfCopyRight",
        watch: true,
        args: address,
    })

    useEffect(() => {
        if (number) {
            setnumberowned(number.toString())
        }
    }, [number])

    const { config } = usePrepareContractWrite({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        functionName: "controllorCreateCopyRightCollection",
        args: [results, results],
    })
    const { data, isLoading, isSuccess, write } = useContractWrite(config)

    // const [supplyData, setSupplyData] = useState(0)

    // const { address } = useAccount()
    // const { chains } = useNetwork()
    // const { data: signerData } = useSigner()

    ///image
    const [image, setImage] = useState(null)
    const [createObjectURL, setCreateObjectURL] = useState(null)

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0]

            setImage(i)
            setCreateObjectURL(URL.createObjectURL(i))
        }
    }

    const uploadToServer = async (event) => {
        const body = new FormData()
        body.append("file", image)
        const response = await fetch("/api/file", {
            method: "POST",
            body,
        })
    }
    ///image
    return (
        <div>
            {numberowned == 0 ? (
                <div className="h-[100vh] bg-black grid items-center justify-items-center text-center opacity-100 relative">
                    <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-white">
                        Looks like you don't have a message box contract yet, lets create one!
                    </h1>
                    <input
                        type="text"
                        placeholder=" Collection Name"
                        onChange={(event) => {
                            setResults(event.target.value)
                        }}
                    />
                    <div className="flex flex-col justify-center items-center">
                        <button className={styles.button1} onClick={() => write()}>
                            Generate
                        </button>
                    </div>
                </div>
            ) : (
                <div className="absolute bottom-5 right-5 items-center space-y-8">
                    <div className=" flex items-center place-content-center h-48 caret-gray-700">
                        <textarea
                            className="border-2 border-rounded rounded-lg border-solid border-black"
                            placeholder="What,s your maind"
                            cols="50"
                            rows="10"
                        ></textarea>{" "}
                        <br />
                        {!image ? (
                            <img src={createObjectURL} />
                        ) : (
                            <img
                                className="border-2 border-rounded rounded-lg border-solid border-black"
                                src={createObjectURL}
                                width="244"
                                height="244"
                            />
                        )}
                    </div>
                    <div className="border-white space-x-20">
                        <h4 className={styles.button}>
                            <input type="file" id="upload" hidden onChange={uploadToClient} />
                            <label htmlFor="upload">Choose file</label>
                        </h4>
                        <button className={styles.button} type="submit" onClick={uploadToServer}>
                            Send to server
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
