/** @type {import('next').NextConfig} */
const nextConfig = { devIndicators: false,
    images: {
        remotePatterns: [{
                hostname: 'images.pexels.com',
         
            },
        ],
    }
 };

export default nextConfig;
