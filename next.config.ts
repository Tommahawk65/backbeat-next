import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  serverExternalPackages: ["lightningcss"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [];
  },
};

export default nextConfig;
