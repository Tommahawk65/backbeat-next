import type { MetadataRoute } from "next";

import { cities, counties, venuePages } from "@/lib/data/locations";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.backbeat-band.co.uk";

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
      url: `${SITE_URL}/wedding-bands`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/repertoire`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/corporate-events`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...counties.map((county) => ({
      url: `${SITE_URL}/wedding-bands/${county.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: county.slug === "hampshire" ? 0.9 : 0.8,
    })),
    ...cities.map((city) => ({
      url: `${SITE_URL}/wedding-bands/${city.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...venuePages.map((venue) => ({
      url: `${SITE_URL}/wedding-bands/${venue.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: `${SITE_URL}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
