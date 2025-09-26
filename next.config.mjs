/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivity: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;