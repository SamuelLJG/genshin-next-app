import type { NextConfig } from "next";

// next.config.ts
const nextConfig: NextConfig = {
  images: {
    domains: ['gi.yatta.moe','enka.network'],
    unoptimized: true,
  },
};

export default nextConfig;
