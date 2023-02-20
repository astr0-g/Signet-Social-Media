import { useState } from "react"

export default function OwnerAssetsContractAddress(props) {
    const [showwalletaddress, setshowwalletaddress] = useState(false)

    function shortenaddress(address) {
        const resultaddress =
            address.slice(0, 5) + "..." + address.slice(address.length - 5, address.length)
        return resultaddress
    }

    function show() {
        setshowwalletaddress(!showwalletaddress)
    }

    return (
        <div className="flex justify-center mt-2 text-white">
            <button className="text-[9px] italic" onClick={show}>
                {!showwalletaddress &&
                    props.token_address &&
                    `${shortenaddress(props.token_address)}`}
                {showwalletaddress && props.token_address}
            </button>
        </div>
    )
}
