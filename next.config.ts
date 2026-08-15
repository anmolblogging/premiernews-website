import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/wp-admin/:path*',
        destination: 'https://backend.premierleaguenewsnow.com/wp-admin/:path*',
      },
      {
        source: '/wp-includes/:path*',
        destination: 'https://backend.premierleaguenewsnow.com/wp-includes/:path*',
      },
      {
        source: '/wp-content/:path*',
        destination: 'https://backend.premierleaguenewsnow.com/wp-content/:path*',
      },
      {
        source: '/wp-json/:path*',
        destination: 'https://backend.premierleaguenewsnow.com/wp-json/:path*',
      },
      {
        source: '/wp-login.php',
        destination: 'https://backend.premierleaguenewsnow.com/wp-login.php',
      },
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