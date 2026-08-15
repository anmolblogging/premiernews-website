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
      // 3. Keep all AIOSEO sitemaps and stylesheets open for Google
      {
        source: '/sitemap.xml',
        destination: 'https://backend.premierleaguenewsnow.com/sitemap.xml',
      },
      {
        source: '/sitemap_index.xml',
        destination: 'https://backend.premierleaguenewsnow.com/sitemap_index.xml',
      },
      {
        source: '/news-sitemap.xml',
        destination: 'https://backend.premierleaguenewsnow.com/news-sitemap.xml',
      },
      {
        source: '/:path*-sitemap.xml', // Catches post-sitemap.xml, category-sitemap.xml, etc.
        destination: 'https://backend.premierleaguenewsnow.com/:path*-sitemap.xml',
      },
      {
        source: '/:path*sitemap.xsl', // Catches the styling files so it isn't blank
        destination: 'https://backend.premierleaguenewsnow.com/:path*sitemap.xsl',
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