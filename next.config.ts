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
  // The markdown content folders are read at request time via fs, with paths
  // Next's tracer cannot follow statically. Without this they would be missing
  // from the serverless bundle and the pages would 500 in production.
  outputFileTracingIncludes: {
    '/blog': ['./src/data/blogs/**'],
    '/blog/[slug]': ['./src/data/blogs/**'],
    '/team': ['./src/data/team/**'],
    '/team/[slug]': ['./src/data/team/**'],
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
