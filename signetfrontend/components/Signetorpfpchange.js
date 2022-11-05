import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import styles from "../styles/Dashbaord.module.css"
import creatorcontract from "../constants/abi.json"
import { useToasts } from "react-toast-notifications"
import styles1 from "../styles/Dashbaord.module.css"
import stylesprofile from "../styles/profile.module.css"
import Router from "next/router"
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
export default function Signetorpfp() {
    const { address } = useAccount()
    const [File, setFile] = useState("")
    const [selectedFile, setSelectedFile] = useState(null)

    const [uploadFile, setuploadFile] = useState("")
    const { addToast } = useToasts()
    const filePickerRef = useRef(null)
    const addImageToPost = (e) => {
        const reader = new FileReader()

        if (e.target.files[0] && verificationPicFile(e.target) != false) {
            reader.readAsDataURL(e.target.files[0])
            addToast("Picture Choosed Successfully", { appearance: "success" })
            setFile(e.target.files[0])
            setuploadFile("")
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
    function upload() {
        var formdata = new FormData()
        formdata.append("address", address)
        formdata.append("profilepic", File)
        successtoasts("Profile Pic Uploading...")
        var requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow",
        }

        fetch("https://api.signet.ink/pfi/pfp/", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setuploadFile(`https://api.signet.ink/media/images/` + result)
                successtoasts("Profile Pic Uploaded Success!")
            })
            .catch((error) => console.log("error", error))
    }
    function successtoasts(e) {
        addToast(e, { appearance: "success" })
    }
    const { config } = usePrepareContractWrite({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        functionName: "modifyPfpForUser",
        args: uploadFile,
    })
    const { data: resultsss, write: createPfpForNewUser1 } = useContractWrite(config)

    const { isLoading: createPfpForNewUserisLoading, isSuccess: createPfpForNewUserisSuccess } =
        useWaitForTransaction({
            hash: resultsss?.hash,
        })
    useEffect(() => {
        if (createPfpForNewUserisLoading) {
            addToast("Transaction Submitted...", { appearance: "success" })
        }
    }, [createPfpForNewUserisLoading])
    useEffect(() => {
        if (createPfpForNewUserisSuccess) {
            addToast(
                "Signetor changes Profile Pic Successful! It might takes a second to update on your end, please refresh if you aware of this issue!",
                { appearance: "success" }
            )
            Router.reload(window.location.pathname)
        }
    }, [createPfpForNewUserisSuccess])
    function createPfpForNewUser() {
        createPfpForNewUser1()
    }
    return (
        <div>
            <div className="bg-black flex flex-col justify-center items-center mt-20 items-center justify-items-center text-center opacity-100 relative font-bold text-white">
                <div className="space-x-1">
                    <div>
                        <div className={stylesprofile.user1}>
                            <div className="text-center">
                                <button
                                    className={stylesprofile.profile2}
                                    onClick={() => filePickerRef.current.click()}
                                >
                                    <img
                                        src={selectedFile}
                                        className="rounded-full hover:bg-gray-700"
                                        width="80"
                                        height="80"
                                        type="file"
                                        hidden
                                        ref={filePickerRef}
                                        onChange={addImageToPost}
                                    />
                                </button>

                                {!uploadFile ? (
                                    <button
                                        className="text-black "
                                        disabled={!File}
                                        onClick={upload}
                                    >
                                        upload
                                    </button>
                                ) : (
                                    <button className="text-black " onClick={createPfpForNewUser}>
                                        submit
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex">
                <div className="" onClick={() => filePickerRef.current.click()}>
                    <input type="file" hidden ref={filePickerRef} onChange={addImageToPost} />
                </div>
            </div>
        </div>
    )
}
