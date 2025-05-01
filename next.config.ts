import type { NextConfig } from "next";

// next.config.ts
const nextConfig: NextConfig = {
  images: {
    domains: ['gi.yatta.moe','enka.network', 'api.hakush.in']
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

export default nextConfig;
