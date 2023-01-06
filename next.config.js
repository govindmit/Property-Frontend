/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  images: {
    unoptimized :true,
    domains: [
      "os.alipayobjects.com",
      "www.freepik.com",
      "picsum.photos",
      "www.galaxyeduworld.com",
      "94.237.3.78",
    ],
  },
}
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    return config
  },
  
}
module.exports = nextConfig
