const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.backbeat-band.co.uk";

const BAND_ID = `${SITE_URL}/#band`;

type LocationSchemaProps = {
  /** Page slug, e.g. "hampshire-weddings" */
  slug: string;
  /** H1 / page name */
  pageName: string;
  /** Region, county or city served */
  areaServed: string;
  /** Optional list of additional sub-areas (cities/towns) */
  subAreas?: string[];
  /** Page meta description (used as Service description) */
  description: string;
};

export function LocationSchema({
  slug,
  pageName,
  areaServed,
  subAreas,
  description,
}: LocationSchemaProps) {
  const pageUrl = `${SITE_URL}/${slug}`;

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
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: pageName,
        description,
        provider: { "@id": BAND_ID },
        serviceType: "Live wedding band",
        areaServed: [
          { "@type": "AdministrativeArea", name: areaServed },
          ...(subAreas?.map((name) => ({ "@type": "Place", name })) ?? []),
        ],
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
