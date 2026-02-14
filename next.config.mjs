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
  dynamicIO: true, 
  
}

export default nextConfig
