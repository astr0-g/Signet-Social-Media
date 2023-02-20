/** @type {import('next').NextConfig} */
const nextConfig = {
    // assetPrefix: "./",
    reactStrictMode: true,
    swcMinify: true,
    images: {
        formats: ["image/avif", "image/webp"],
        unoptimized: true,
    },
    compiler: {
        styledComponents: true,
    },
}

module.exports = nextConfig
