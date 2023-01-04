/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'munchiesprod.s3.ap-southeast-1.amazonaws.com',
        port: '',
        pathname: '/',
      },
    ],
  },
}

module.exports = nextConfig



