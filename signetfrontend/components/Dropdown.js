import { useState, useEffect } from "react"
import styled from "styled-components"
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri"
import {
    usePrepareContractWrite,
    useContractWrite,
    useNetwork,
    useWaitForTransaction,
} from "wagmi"
import { useToasts } from "react-toast-notifications"
import creatorcontract from "../constants/abi.json"
const DropdownBar = styled.div`
    width: 100%;
    position: relative;
    top: 0;
    display: flex;
    justify-content: end;
`

const Icon = styled.button``

const DropdownMenu = styled.div`
    background-color: rgba(32, 32, 32, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 12px;
    padding: 0.5rem;
    border-radius: 8px;
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);
    z-index: 10;
    margin-bottom: 0.75rem;
`

const Button = styled.button`
    width: 4.25rem;
    font-size: 10px;
    font-weight: 600;
    color: white;
    text-align: center;
    padding: 6px 18px;
    border-radius: 6px;
    box-shadow: -3px -5px -5px rgba(32, 32, 32, 0.2);
    margin: 0 auto;
`

export default function Dropdown(props) {
    const [isDropped, setIsDropped] = useState(false)
    const { addToast } = useToasts()
    const dropthemenu = () => {
        setIsDropped(true)
    }

    const foldthemenu = () => {
        setIsDropped(false)
    }
    const { config } = usePrepareContractWrite({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        functionName: "deleteMessage",
        args: props.messageId,
    })
    const { data: resultss, write: controllordeleteMessage } = useContractWrite(config)
    const {
        isLoading: deleteMessageisLoading,
        isError: deletemessageerror,
        isSuccess: deleteMessageisSuccess,
    } = useWaitForTransaction({
        hash: resultss?.hash,
    })
    useEffect(() => {
        if (deletemessageerror) {
            addToast("Transaction error...", { appearance: "error" })
        }
    }, [deleteMessageisLoading])
    useEffect(() => {
        if (deleteMessageisLoading) {
            addToast("delete Message transaction Submitted...", { appearance: "success" })
        }
    }, [deleteMessageisLoading])
    useEffect(() => {
        if (deleteMessageisSuccess) {
            addToast("Message delete successful!", { appearance: "success" })
        }
    }, [deleteMessageisSuccess])
    useEffect(() => {}, [isDropped])
    const deleteMessage = () => {
        controllordeleteMessage()
    }
    return (
        <div>
            <DropdownBar>
                {isDropped ? (
                    <Icon onClick={foldthemenu}>
                        <RiArrowDropUpLine color="white" size={24} />
                    </Icon>
                ) : (
                    <Icon onClick={dropthemenu}>
                        <RiArrowDropDownLine color="white" size={24} />
                    </Icon>
                )}
            </DropdownBar>
            {isDropped && (
                <DropdownMenu>
                    <Button>Share</Button>
                    <Button>Save</Button>
                    {/* {props.useraddress == props.address && <Button>Edit</Button>} */}
                    {props.useraddress == props.address && (
                        <Button onClick={deleteMessage}>Delete</Button>
                    )}
                </DropdownMenu>
            )}
        </div>
    )
}
