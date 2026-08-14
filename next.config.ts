import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Tell Next.js to generate a static HTML export
  output: "export",
  
  images: {
    // 2. Disable server-side image optimization (required for static exports)
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'premierleaguenewsnow.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;