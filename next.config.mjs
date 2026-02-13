/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [{ hostname: 'res.cloudinary.com' }]
  },
  cacheComponents: true,
  experimental: {
    dynamicIO: true, // If this is on, you MUST use the fixes above
  }
}

export default nextConfig
