
/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
{
  key: 'Content-Security-Policy',
  value: [
    "default-src 'self';",
    // 1. Allow scripts from Clerk's domain
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cool-fish-97.clerk.accounts.dev https://*.clerk.shared.com;",
    "style-src 'self' 'unsafe-inline';",
    "img-src 'self' blob: data: https://img.clerk.com;",
    // 2. Allow connections to Clerk's backend API
    "connect-src 'self' https://cool-fish-97.clerk.accounts.dev https://api.clerk.io;",
    // 3. Allow iframe environments if using Clerk components
    "frame-src 'self' https://cool-fish-97.clerk.accounts.dev;"
  ].join(' ')
}
];

const nextConfig = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
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