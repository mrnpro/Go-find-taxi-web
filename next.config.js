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
      {
        source: '/share-my-location/:lat/:lng',
        destination: '/share-my-location/:lat/:lng',
        permanent: true,
      },
    ]
  },
  // Ensure .well-known files are served correctly
  async headers() {
    return [
      {
        source: '/.well-known/assetlinks.json',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
