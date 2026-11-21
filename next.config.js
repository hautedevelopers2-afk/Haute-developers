/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'hautedevelopers.com' }],
  },
}

module.exports = nextConfig
