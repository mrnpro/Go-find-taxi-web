/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/ride/:id',
        destination: '/?type=ride&id=:id',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
