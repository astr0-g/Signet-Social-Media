import { CapacitorConfig } from "@capacitor/cli"

const config: CapacitorConfig = {
    appId: "signet.ink",
    appName: "Signet",
    webDir: "out",
    bundledWebRuntime: false,
    server: {
        url: "https://test.signet.ink/",
        cleartext: true,
    },
}

export default config
