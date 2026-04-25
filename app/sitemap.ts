import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.backbeat-band.co.uk";

const COUNTY_SLUGS = [
  "hampshire-weddings",
  "surrey-weddings",
  "dorset-weddings",
  "wiltshire-weddings",
  "berkshire-weddings",
  "west-sussex-weddings",
  "isle-of-wight-weddings",
  "oxfordshire-weddings",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/repertoire`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...COUNTY_SLUGS.map((slug) => ({
      url: `${SITE_URL}/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: slug === "hampshire-weddings" ? 0.9 : 0.8,
    })),
    {
      url: `${SITE_URL}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
