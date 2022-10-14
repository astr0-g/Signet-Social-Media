import { useState, useEffect } from "react"
import Image from "next/image"
import { useWeb3Contract, useMoralis } from "react-moralis"
import nftMarketplaceAbi from "../contants/abi.json"
import nftAbi from "../contants/nftabi.json"
import { Card, useNotification } from "web3uikit"
import { ethers } from "ethers"
import UpdateListingModal from "./UpdateListingModal"

export default function Signet({ totalToken, tokenURI}) {
    const [imageURI, setImageURI] = useState("")




    async function updateUI() {
        // We are going to cheat a little here...
        if (tokenURI) {
            // IPFS Gateway: A server that will return IPFS files from a "normal" URL.
            const requestURL = tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/")
            const tokenURIRespon = await await fetch(requestURL, { mode: "no-cors" })
            const imageURI = tokenURIResponse.image
            const imageURIURL = imageURI.replace("ipfs://", "https://ipfs.io/ipfs/")
            setImageURI(imageURIURL)
            setTokenName(tokenURIResponse.name)
            if (tokenURIResponse.description) {
                const descriptionword = `${tokenURIResponse.description.slice(0, 20)}...`
                setTokenDescription(descriptionword)
            } else {
                const descriptionword = "n/a"
                setTokenDescription(descriptionword)
            }

            // We could render the Image on our sever, and just call our sever.
            // For testnets & mainnet -> use moralis server hooks
            // Have the world adopt IPFS
            // Build our own IPFS gateway
        }
        // get the tokenURI
        // using the image tag from the tokenURI, get the image
    }



    return (
        <div>
            <div>
                {imageURI ? (
                    <div>
                        <div className="p-2">
                            <div className="flex flex-col items-end gap-2">
                                <div>#{tokenId}</div>
                                <div className="italic text-sm">
                                    Owned by {formattedSellerAddress}
                                </div>
                                <Image
                                    loader={() => imageURI}
                                    src={imageURI}
                                    height="180"
                                    width="180"
                                />
                                <div className="font-bold">
                                    {ethers.utils.formatUnits(price, "ether")} MATIC
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <UpdateListingModal
                            isVisible={showModal}
                            tokenId={`?`}
                            marketplaceAddress={`?`}
                            nftAddress={`?`}
                            onClose={hideModal}
                        />
                        <Card title={`?`} description={`?`}>
                            <div className="p-2">
                                <div className="flex flex-col items-end gap-2">
                                    <div>#{`?`}</div>
                                    <div className="italic text-sm">
                                        Owned by {formattedSellerAddress}
                                    </div>
                                    <Image
                                        loader={() => imageURI}
                                        src={imageURI}
                                        height="200"
                                        width="200"
                                    />
                                    <div className="font-bold">{`?`} MATIC</div>
                                </div>
                            </div>
                        </Card>
                        Connect wallet to discover more!
                    </div>
                )}
            </div>
        </div>
    )
}
