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

// Emits WebPage + Service per page. The brand-level MusicGroup/LocalBusiness with
// AggregateRating is declared once site-wide in OrganizationSchema (root layout),
// so we don't re-declare it here. AggregateRating on Service is not a supported
// Google rich-results type — it belongs on the LocalBusiness entity, which the
// site-wide schema already covers.
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
        serviceType,
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
