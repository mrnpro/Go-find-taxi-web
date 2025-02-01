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
        source: '/share-my-location',
        destination: '/?type=location&lat=:lat&lng=:lng',
        permanent: true,
        has: [
          {
            type: 'query',
            key: 'lat',
          },
          {
            type: 'query',
            key: 'lng',
          },
        ],
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
