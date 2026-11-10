import path from "node:path";
import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

import {
  cityToCounty,
  countyToCounty,
  legacyCountySlugs,
  venueToCounty,
} from "./lib/seo/legacyUrls";

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
    const countyRedirects = legacyCountySlugs.map((slug) => ({
      source: `/${slug}-weddings`,
      destination: `/wedding-bands/${slug}`,
      permanent: true,
    }));

    const toRedirect = (map: Record<string, string>) =>
      Object.entries(map).map(([from, to]) => ({
        source: `/wedding-bands/${from}`,
        destination: `/wedding-bands/${to}`,
        permanent: true,
      }));

    return [
      ...countyRedirects,
      ...toRedirect(venueToCounty),
      ...toRedirect(cityToCounty),
      ...toRedirect(countyToCounty),
    ];
  },
};

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: !process.env.CI,
  widenClientFileUpload: true,
});
