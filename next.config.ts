import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      '@': './src',
      '@public': './public',
    },
  },
  images: {
    qualities: [25, 50, 75, 100],
  },
  // The dedicated service pages were removed; send any existing link to the
  // services section on the home page.
  async redirects() {
    return [
      { source: '/services', destination: '/#services', permanent: true },
      { source: '/services/:slug*', destination: '/#services', permanent: true },
    ];
  },
};

export default nextConfig;
