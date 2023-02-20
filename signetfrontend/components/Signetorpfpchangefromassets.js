import { useEffect } from "react"
import creatorcontract from "../constants/abi.json"
import { useToasts } from "react-toast-notifications"
import Router from "next/router"
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi"
import styled from "styled-components"

const Button = styled.button`
    align-items: center;
    appearance: none;
    background-color: transparent;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: white;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    fill: currentcolor;
    font-family: "Google Sans", Roboto, Arial, sans-serif;
    font-size: 10px;
    font-weight: 500;
    justify-content: center;
    letter-spacing: 0.25px;
    line-height: normal;
    max-width: 100%;
    overflow: visible;
    padding: 0 18px;
    padding-top: 0.5rem;
    position: relative;
    text-align: center;
    text-transform: none;
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms,
        transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: auto;
    will-change: transform, opacity;
    z-index: 0;
    content: "Follow";
`

export default function Signetorpfpchangefromassets(props) {
    const { addToast } = useToasts()
    const { config } = usePrepareContractWrite({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        functionName: "modifyPfpForUser",
        args: [props.url, props.collectionaddress, props.token_Id, props.typeOf],
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
            if (props.reloadpage) {
                Router.reload(window.location.pathname)
            }
        }
    }, [createPfpForNewUserisSuccess])
    function createPfpForNewUser() {
        createPfpForNewUser1()
    }
    return (
        <div className="flex justify-center mt-1">
            <Button onClick={createPfpForNewUser}>Set This NFT As Profile Picture</Button>
        </div>
    )
}
