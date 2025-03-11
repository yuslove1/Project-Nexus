import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  }
  // images: {
  //   domains: ['example.com', 'cdn.example.com', 'res.cloudinary.com'],
  //   formats: ['image/avif', 'image/webp'],
  //   minimumCacheTTL: 60,
  // },
};

export default nextConfig;
