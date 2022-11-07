import Image from "next/image"
import { ConnectButton } from "@rainbow-me/rainbowkit"
export default function Welcome() {
    return (
        <>
            <div className="h-[100vh] grid items-center justify-items-center bg-no-repeat bg-cover bg-black bg-[url('https://www.thisiscolossal.com/wp-content/uploads/2018/12/agifcolossal3opt1.gif')] border-black relative">
                <div className="grid items-center justify-items-center text-center opacity-100 z-[1700]">
                    <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-white">
                        SIGNET
                    </h1>
                    <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-300">
                        Entrying The Fully Decentralized
                    </h1>
                    <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-300">
                        Social Media Platform
                    </h1>
                    <p className="my-5 text-slate-200 text-sm sm:text-xs w-[50vw] lg:w-11/12">
                        I Design Your Dreams. I believe you have a unique taste, discover the
                        possibilities of Decentralized World. Posts your ideas, Make new friends.
                        Your dreams is my first priority. So, let&apos;s enjoy this decentralized
                        World.
                    </p>
                    <ConnectButton accountStatus="address" />
                </div>
                <div className="h-[54vh] absolute top-1 right-0 rounded-md overflow-hidden opacity-100 z-[1500]"></div>
            </div>
        </>
    )
}
