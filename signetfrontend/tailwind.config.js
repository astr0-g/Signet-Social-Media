/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            tablet: "640px",
            // => @media (min-width: 640px) { ... }
        },
        extend: {
            colors: {
                yinblue: "#2e7daf",
                liyellow: "#FFE78F",
            },
        },
    },
    plugins: [],
}
