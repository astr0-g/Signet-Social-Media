import { useState, useEffect, useRef } from "react"
import creatorcontract from "../constants/abi.json"
import { useToasts } from "react-toast-notifications"
import {
    usePrepareContractWrite,
    useContractRead,
    useContractWrite,
    useWaitForTransaction,
} from "wagmi"
import styled from "styled-components"
const ModifyButton = styled.button`
    border-radius: 5px;
    background-color: rgba(101, 101, 159, 0.9);
    box-shadow: 3px 5px 5px rgba(32, 32, 32, 0.2);
    font-size: 16px;
    color: white;
    padding: 0.25rem 1rem;
    margin: 0.25rem 0.5rem;
`
const Edit = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const EditButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const ModifySection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
    margin-bottom: 1rem;

    @media only screen and (min-width: 1024px) {
        margin-top: 2rem;
        margin-bottom: 0.5rem;
        font-size: 21px;
    }
`

const Title = styled.div`
    width: 100%;
    margin-top: 0.5rem;
    text-align: center;
    font-size: 17px;
    color: white;
    font-weight: 700;

    @media only screen and (min-width: 1024px) {
        margin-top: 2rem;
        font-size: 21px;
    }
`

export default function Signetorname() {
    const [input, setInput] = useState("")
    const [changeNameReady, setchangeNameReady] = useState(false)
    const { addToast } = useToasts()
    const { data: nameavaila } = useContractRead({
        addressOrName: creatorcontract.address,
        contractInterface: creatorcontract.abi,
        chains: 5,
        functionName: "checkNameAvalable",
        watch: true,
        args: input,
    })
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
        }
    }, [createNameForNewUserisSuccess])

    function errortoaste(e) {
        addToast(e, { appearance: "error" })
    }
    function successtoaste(e) {
        addToast(e, { appearance: "success" })
    }
    function checknameavaila() {
        if (input.length <= 14) {
            console.log(nameavaila)
            if (nameavaila == true) {
                successtoaste("Name is available!")
                setchangeNameReady(true)
            } else {
                errortoaste("Please choose your profile pic!")
            }
        } else {
            errortoaste(
                "Name can not exceed 15 letters, and also special charactors might not be able to set in the contract storage!"
            )
        }
    }
    function changeName() {
        createNameForUser()
    }

    return (
        <div className="flex flex-col justify-center items-center text-center opacity-100 relative">
            <Title>Let's give the account an username: </Title>
            <ModifySection>
                <input
                    className="text-center bg-gray-500 rounded-md text-md text-white py-1 px-2"
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
                        <ModifyButton onClick={checknameavaila}>Check</ModifyButton>
                    ) : (
                        <ModifyButton onClick={changeName}>Submit</ModifyButton>
                    )}
                </EditButton>
            </ModifySection>
        </div>
    )
}
