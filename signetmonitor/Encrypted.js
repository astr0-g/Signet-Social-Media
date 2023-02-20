const MD6 = require("./md6")
const hmacSHA512 = require("crypto-js/hmac-sha512")

function EC(message, address) {
    var a = ""
    for (var i = 0; i < 16; i++) {
        a += MD6.MD6(
            hmacSHA512(MD6.MD6(message), MD6.MD6(address))["words"][i].toString().slice(1, 9)
        ).slice(1, 31)
    }
    for (var i = 0; i < 16; i++) {
        a += MD6.MD6(
            hmacSHA512(MD6.MD6(parseInt(address) + 8), MD6.MD6(message))
                ["words"][i].toString()
                .slice(1, 8)
        ).slice(1, 31)
    }
    for (var i = 0; i < 16; i++) {
        a += MD6.MD6(
            hmacSHA512(MD6.MD6(parseInt(message) + 16), MD6.MD6(message))
                ["words"][i].toString()
                .slice(1, 7)
        ).slice(1, 31)
    }
    for (var i = 0; i < 16; i++) {
        a += MD6.MD6(
            hmacSHA512(MD6.MD6(parseInt(message) + 16), MD6.MD6(message))
                ["words"][i].toString()
                .slice(1, 6)
        ).slice(1, 31)
    }

    return `{config:${a},pass:${MD6.MD6(Date.now().toString().slice(0, 9))}:${parseInt(
        Math.random() * 10000000
    )}:${parseInt(Math.random() * 10000000)}:${parseInt(Math.random() * 10000000)},prefix:"${
        Math.random() * 1000000000
    },${Math.random() * 1000000},${Math.random() * 100000000},${Math.random() * 10000000},${
        Math.random() * 100000000000
    },${Math.random() * 100000000},${Math.random() * 10000000},${Math.random() * 1000000000},${
        Math.random() * 10000000
    }...."}`
}
module.exports = { EC }

var a = EC(
    "0x53b678f16922218f228dc79a075b290b0da429560c713b2a85c01750ac01b3625d750a9aba7dbae562443434ed594a69bb44a5b30a4e2f1a697a1fb607e6f6cc1b",
    "0x4cFC0Ca85Bb82c9398ba0bE63da7Fc59bf1d0d6E"
)
console.log(a)
