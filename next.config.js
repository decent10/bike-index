/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['files.bikeindex.org']
  }
}

module.exports = nextConfig
