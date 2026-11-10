// TEMPORARY: remove after ~2027-01-15 once Search Console shows old URLs dropped

// Lists every URL removed in the cull so Google recrawls them and sees the
// 301s/410s. Not linked anywhere; submitted manually in Search Console.

import {
  cityToCounty,
  countyToCounty,
  GONE_SLUGS,
  legacyCountySlugs,
  venueToCounty,
} from "@/lib/seo/legacyUrls";

const SITE_URL = "https://www.backbeat-band.co.uk";

// Date the cull redirects went live.
const LASTMOD = "2026-10-08";

export const dynamic = "force-static";

export function GET() {
  const paths = [
    ...legacyCountySlugs.map((slug) => `/${slug}-weddings`),
    ...[
      ...Object.keys(venueToCounty),
      ...Object.keys(cityToCounty),
      ...Object.keys(countyToCounty),
      ...GONE_SLUGS,
    ].map((slug) => `/wedding-bands/${slug}`),
  ];

  const urls = paths
    .map(
      (path) =>
        `  <url>\n    <loc>${SITE_URL}${path}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
