import * as React from "react"
import { useSignMessage } from "wagmi"
import { verifyMessage } from "ethers/lib/utils"

export default function SignMessage() {
    const recoveredAddress = React.useRef()
    const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
        message: "gm wagmi frens",
        onSuccess(data, variables) {
            
            // Verify signature when sign message succeeds
            const address = verifyMessage(variables.message, data)
            recoveredAddress.current = address
        },
    })

    return (
        <div>
            <button disabled={isLoading} onClick={() => signMessage()}>
                Sign message
            </button>
            <div>Signature: {recoveredAddress.current}</div>
            {isError && <div>Error signing message</div>}
        </div>
    )
}
