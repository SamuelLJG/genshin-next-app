import type { NextConfig } from "next";
 import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';


// next.config.ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gi.yatta.moe',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'enka.network',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'api.hakush.in',
        port: '',
        search: '',
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/times',
        destination: '/teams',
        permanent: false,
      }
    ];
  }
};

 if (process.env.NODE_ENV === 'development') {
   await setupDevPlatform();
 }

export default nextConfig;
