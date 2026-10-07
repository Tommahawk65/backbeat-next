import path from "node:path";
import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

// Venue slugs pruned in the Aug 2026 cull. Each redirects 301 to the parent
// county so any inbound equity flows to a surviving page.
const venueToCounty: Record<string, string> = {
  // Hampshire
  "avington-park": "hampshire",
  "burley-manor": "hampshire",
  "chewton-glen": "hampshire",
  "clock-barn": "hampshire",
  "four-seasons-hampshire": "hampshire",
  "froyle-park": "hampshire",
  "heckfield-place": "hampshire",
  "highclere-castle": "hampshire",
  "lainston-house": "hampshire",
  "pylewell-park": "hampshire",
  "rhinefield-house": "hampshire",
  "solent-hotel": "hampshire",
  "somerley-house": "hampshire",
  "the-elvetham": "hampshire",
  "tylney-hall": "hampshire",
  "the-square-tower": "hampshire",
  // Surrey
  beaverbrook: "surrey",
  "bury-court-barn": "surrey",
  "farnham-castle": "surrey",
  foxhills: "surrey",
  "great-fosters": "surrey",
  "loseley-park": "surrey",
  "millbridge-court": "surrey",
  "northbrook-park": "surrey",
  "pennyhill-park": "surrey",
  // Berkshire
  "cliveden-house": "berkshire",
  "coworth-park": "berkshire",
  "donnington-grove": "berkshire",
  "lillibrooke-manor": "berkshire",
  "oakley-court": "berkshire",
  "royal-berkshire-hotel": "berkshire",
  "the-vineyard": "berkshire",
  "wasing-park": "berkshire",
  // West Sussex
  "amberley-castle": "west-sussex",
  "arundel-castle": "west-sussex",
  bailiffscourt: "west-sussex",
  "cowdray-house": "west-sussex",
  "findon-place": "west-sussex",
  "goodwood-house": "west-sussex",
  "gravetye-manor": "west-sussex",
  "south-lodge": "west-sussex",
  "southdowns-manor": "west-sussex",
  "tinwood-estate": "west-sussex",
  "wiston-house": "west-sussex",
  // Dorset
  athelhampton: "dorset",
  "almer-manor": "dorset",
  "highcliffe-castle": "dorset",
  "lulworth-castle": "dorset",
  mapperton: "dorset",
  "smedmore-house": "dorset",
  "sopley-mill": "dorset",
  // Wiltshire
  "euridge-manor": "wiltshire",
  "larmer-tree-gardens": "wiltshire",
  "lucknam-park": "wiltshire",
  "manor-house-castle-combe": "wiltshire",
  syrencot: "wiltshire",
  "whatley-manor": "wiltshire",
  // Oxfordshire
  "blenheim-palace": "oxfordshire",
  "caswell-house": "oxfordshire",
  "cornwell-manor": "oxfordshire",
  "estelle-manor": "oxfordshire",
  "le-manoir-aux-quat-saisons": "oxfordshire",
  "stratton-court-barn": "oxfordshire",
};

// City slugs pruned in the Aug 2026 cull. Redirect 301 to parent county.
const cityToCounty: Record<string, string> = {
  guildford: "surrey",
  reading: "berkshire",
  chichester: "west-sussex",
  brighton: "west-sussex",
  bournemouth: "dorset",
  salisbury: "wiltshire",
  oxford: "oxfordshire",
};

// County slugs pruned in the Aug 2026 cull where a genuinely-adjacent
// survivor exists. Everything else goes to 410 via middleware.
const countyToCounty: Record<string, string> = {
  "east-sussex": "west-sussex",
};

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
