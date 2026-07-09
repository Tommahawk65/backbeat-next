import {
  googleAggregateRating,
  googleReviewCount,
  googleReviews,
} from "@/lib/data/testimonials";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.backbeat-band.co.uk";

const BAND_ID = `${SITE_URL}/#band`;

type LocationSchemaProps = {
  /** Page slug or path. Either "hampshire-weddings" or "wedding-bands/hampshire" */
  slug?: string;
  /** Page path including leading slash, e.g. "/wedding-bands/hampshire" */
  path?: string;
  /** H1 / page name */
  pageName: string;
  /** Region, county or city served */
  areaServed: string;
  /** Optional list of additional sub-areas (cities/towns) */
  subAreas?: string[];
  /** Page meta description (used as Service description) */
  description: string;
  /** Optional override for the service type label (default: "Live wedding band"). */
  serviceType?: string;
};

export function LocationSchema({
  slug,
  path,
  pageName,
  areaServed,
  subAreas,
  description,
  serviceType = "Live wedding band",
}: LocationSchemaProps) {
  const resolvedPath = path ?? (slug ? `/${slug}` : "/");
  const pageUrl = `${SITE_URL}${resolvedPath}`;

  const aggregateRating = {
    "@type": "AggregateRating",
    ratingValue: googleAggregateRating.toFixed(1),
    reviewCount: String(googleReviewCount),
    bestRating: "5",
    worstRating: "1",
  };

  const reviewItems = googleReviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewBody: r.body,
    datePublished: r.date,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(r.rating),
      bestRating: "5",
      worstRating: "1",
    },
  }));

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: pageName,
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": BAND_ID },
        inLanguage: "en-GB",
      },
      {
        // Page-scoped LocalBusiness so this page is rich-snippet eligible for
        // ratings + review stars in the SERP without re-declaring the brand entity.
        "@type": "LocalBusiness",
        "@id": `${pageUrl}#business`,
        name: `Backbeat — ${pageName}`,
        description,
        url: pageUrl,
        image: `${SITE_URL}/images/hero.jpg`,
        priceRange: "££",
        telephone: "+44",
        address: {
          "@type": "PostalAddress",
          addressRegion: "Hampshire",
          addressCountry: "GB",
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: areaServed },
          ...(subAreas?.map((name) => ({ "@type": "Place", name })) ?? []),
        ],
        aggregateRating,
        review: reviewItems,
        sameAs: { "@id": BAND_ID },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: pageName,
        description,
        provider: { "@id": BAND_ID },
        serviceType,
        areaServed: [
          { "@type": "AdministrativeArea", name: areaServed },
          ...(subAreas?.map((name) => ({ "@type": "Place", name })) ?? []),
        ],
        aggregateRating,
        review: reviewItems,
        offers: {
          "@type": "Offer",
          priceCurrency: "GBP",
          price: "1900",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "1900",
            priceCurrency: "GBP",
          },
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
