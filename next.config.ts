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
    const countyRedirects = counties.map((slug) => ({
      source: `/${slug}-weddings`,
      destination: `/wedding-bands/${slug}`,
      permanent: true,
    }));

    // Venue pages pruned Aug 2026 to reduce templated-content surface post-spam-update.
    // Each redirects to its parent county so any inbound link equity flows there.
    const prunedVenueRedirects = [
      { from: "athelhampton", to: "dorset" },
      { from: "farnham-castle", to: "surrey" },
      { from: "hartwell-house", to: "buckinghamshire" },
      { from: "leeds-castle", to: "kent" },
      { from: "mapperton", to: "dorset" },
      { from: "smedmore-house", to: "dorset" },
      { from: "south-lodge", to: "west-sussex" },
      { from: "the-square-tower", to: "hampshire" },
      { from: "the-vineyard", to: "berkshire" },
      { from: "tinwood-estate", to: "west-sussex" },
    ].map(({ from, to }) => ({
      source: `/wedding-bands/${from}`,
      destination: `/wedding-bands/${to}`,
      permanent: true,
    }));

    return [...countyRedirects, ...prunedVenueRedirects];
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
