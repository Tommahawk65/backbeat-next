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
    const counties = [
      "hampshire",
      "surrey",
      "berkshire",
      "west-sussex",
      "dorset",
      "wiltshire",
      "oxfordshire",
      "isle-of-wight",
    ];
    return counties.map((slug) => ({
      source: `/${slug}-weddings`,
      destination: `/wedding-bands/${slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
