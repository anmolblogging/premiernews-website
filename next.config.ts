import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // 1. Keep the API tunnel open so Vercel can fetch your articles
      {
        source: '/wp-json/:path*',
        destination: 'https://backend.premierleaguenewsnow.com/wp-json/:path*',
      },
      // 2. Keep the media tunnel open for your article images
      {
        source: '/wp-content/:path*',
        destination: 'https://backend.premierleaguenewsnow.com/wp-content/:path*',
      },
      // 3. Keep the sitemap tunnel open for Google
      {
        source: '/sitemap.xml',
        destination: 'https://backend.premierleaguenewsnow.com/sitemap.xml',
      },
    ];
  },

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'premierleaguenewsnow.com', pathname: '/**' },
      { protocol: 'https', hostname: 'backend.premierleaguenewsnow.com', pathname: '/**' }, 
      { protocol: 'https', hostname: 'ui-avatars.com', pathname: '/**' },
      { protocol: 'https', hostname: 'via.placeholder.com', pathname: '/**' },
      { protocol: 'https', hostname: 'secure.gravatar.com', pathname: '/**' }
    ],
  },
};

export default nextConfig;