import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Tell Next.js to build a static HTML folder for Hostinger
  output: 'export',
  
  // 2. Format URLs properly for cPanel/Hostinger servers 
  // (Generates [slug]/index.html instead of [slug].html)
  trailingSlash: true,

  images: {
    // 3. Disable Next.js image optimization API since the static export cannot run it
    unoptimized: true, 
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