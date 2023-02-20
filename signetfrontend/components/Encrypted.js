import MD6 from "./md6"
import hmacSHA512 from "crypto-js/hmac-sha512"
import MD5 from "crypto-js/"

function EC(message, address) {
    var a = ""
    for (var i = 0; i < 16; i++) {
        a += MD6(hmacSHA512(MD6(message), MD6(address))["words"][i].toString().slice(1, 9)).slice(
            1,
            31
        )
    }
    for (var i = 0; i < 16; i++) {
        a += MD6(
            hmacSHA512(MD6(parseInt(address) + 8), MD6(message))
                ["words"][i].toString()
                .slice(1, 8)
        ).slice(1, 31)
    }
    for (var i = 0; i < 16; i++) {
        a += MD6(
            hmacSHA512(MD6(parseInt(message) + 16), MD6(message))
                ["words"][i].toString()
                .slice(1, 7)
        ).slice(1, 31)
    }
    for (var i = 0; i < 16; i++) {
        a += MD6(
            hmacSHA512(MD6(parseInt(message) + 16), MD6(message))
                ["words"][i].toString()
                .slice(1, 6)
        ).slice(1, 31)
    }

    return `{config:${a},pass:${MD6(Date.now().toString().slice(0, 9))}:${MD6(
        parseInt(Math.random() * 10000000)
    )}:${MD6(parseInt(Math.random() * 10000000))}:${MD6(
        MD6(parseInt(Math.random() * 10000000))
    )},prefix:"${Math.random() * 1000000000},${Math.random() * 1000000},${
        Math.random() * 100000000
    },${Math.random() * 10000000},${Math.random() * 100000000000},${Math.random() * 100000000},${
        Math.random() * 10000000
    },${Math.random() * 1000000000},${Math.random() * 10000000}...."}`
}

export default EC
