import path from "node:path";
import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  serverExternalPackages: ["lightningcss"],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
    ],
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

export default withSentryConfig(nextConfig, {
  // Auth — sourced from .env.local at build time; safe to leave undefined locally.
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,

  // Quiet output unless a build is failing.
  silent: !process.env.CI,

  // Upload source maps so stack traces are readable. Only runs when auth token is present.
  widenClientFileUpload: true,
});
