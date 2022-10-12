import { ConnectButton } from "web3uikit"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
        <div>
            <nav className="bg-gradient-to-r from-cyan-400 to-blue-400 p-5 border-b-2 flex flex-row justify-between items-center">
                <Image src="/polygonlogo2020.png" alt="" width="150px" height="50px" />
                <h1 className="py-4 px-4 font-bold text-1xl" image={""}></h1>
                <ConnectButton className="mr-4 p-6" moralisAuth={false} />
            </nav>
        </div>
    )
}
