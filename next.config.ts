import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. We removed output: "export" so Next.js can run its Node server on Vercel
  
  // 2. Configure Vercel to route WordPress traffic to your Hostinger server
  async rewrites() {
    return [
      {
        source: '/wp-:path*',
        destination: 'https://backend.premierleaguenewsnow.com/wp-:path*',
      },
      {
        source: '/sitemap.xml',
        destination: 'https://backend.premierleaguenewsnow.com/sitemap.xml',
      },
      // You can add feed rules here too if you use WordPress RSS feeds
    ];
  },

  images: {
    // 3. We can safely use Next.js powerful image optimization!
    remotePatterns: [
      { protocol: 'https', hostname: 'premierleaguenewsnow.com', pathname: '/**' },
      { protocol: 'https', hostname: 'backend.premierleaguenewsnow.com', pathname: '/**' }, // Added this so Next.js can read images from the backend
      { protocol: 'https', hostname: 'ui-avatars.com', pathname: '/**' },
      { protocol: 'https', hostname: 'via.placeholder.com', pathname: '/**' },
      { protocol: 'https', hostname: 'secure.gravatar.com', pathname: '/**' }
    ],
  },
};

export default nextConfig;