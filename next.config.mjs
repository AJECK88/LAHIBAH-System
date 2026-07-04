/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    // Tells browsers to lock connection to HTTPS for 2 years (including subdomains)
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    // Defends against Clickjacking attacks
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    // Prevents MIME-type sniffing vulnerabilities
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    // Strips out sensitive tracking metadata when clicking out of your application
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin' // Upgraded from origin-when-cross-origin
  },
  {
    // 🛡️ NEW: Restricts access to device hardware elements (Camera, Mic, Geo) unless explicitly authorized
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // Allowed scripts (Clerk development domains + production fallback distributions)
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cool-fish-97.clerk.accounts.dev https://*.clerk.shared.com",
      // 🛠️ FIX: Authorize background Web Workers built via local inline blob scripts for session management
      "worker-src 'self' blob:",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' blob: data: https://img.clerk.com https://images.pexels.com",
      // Secure WebSocket & Database pipelines (Clerk + your local API architecture)
      "connect-src 'self' https://cool-fish-97.clerk.accounts.dev https://api.clerk.io wss://*.clerk.shared.com",
      "frame-src 'self' https://cool-fish-97.clerk.accounts.dev",
      "upgrade-insecure-requests" // Automatically upgrades HTTP assets to HTTPS
    ].join('; ') // Clean separation mapping format
  }
];

const nextConfig = {
  async headers() {
    return [
      {
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