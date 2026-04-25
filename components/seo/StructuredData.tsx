import { allReviews } from "@/lib/data/testimonials";
import { faqs } from "@/lib/data/faqs";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.backbeat-band.co.uk";

const BAND_ID = `${SITE_URL}/#band`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const SOCIAL_URLS = [
  "https://www.facebook.com/profile.php?id=61570867951360",
  "https://www.instagram.com/backbeatlive/",
  "https://www.youtube.com/@Backbeat-UK",
];

const AREAS_SERVED = [
  "Hampshire",
  "Surrey",
  "Dorset",
  "Wiltshire",
  "Berkshire",
  "West Sussex",
  "Isle of Wight",
  "Oxfordshire",
];

const MEMBERS = [
  { name: "Liam", role: "Lead Vocals" },
  { name: "Pete", role: "Guitar" },
  { name: "Tom", role: "Bass" },
  { name: "Harvey", role: "Drums" },
];

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: "Backbeat Wedding Band",
        publisher: { "@id": BAND_ID },
        inLanguage: "en-GB",
      },
      {
        "@type": ["MusicGroup", "LocalBusiness"],
        "@id": BAND_ID,
        name: "Backbeat",
        alternateName: "Backbeat Wedding Band",
        description:
          "Hampshire's premier indie & rock wedding band. Live music packages from £1,900 — covering weddings, parties and corporate events across the South Coast and beyond.",
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo-light.png`,
        image: `${SITE_URL}/images/hero.jpg`,
        priceRange: "££",
        genre: ["Indie", "Rock", "Pop"],
        address: {
          "@type": "PostalAddress",
          addressRegion: "Hampshire",
          addressCountry: "GB",
        },
        areaServed: AREAS_SERVED.map((name) => ({
          "@type": "AdministrativeArea",
          name,
        })),
        sameAs: SOCIAL_URLS,
        member: MEMBERS.map(({ name, role }) => ({
          "@type": "Person",
          name,
          roleName: role,
        })),
        offers: {
          "@type": "Offer",
          name: "Live Music Package",
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
  return <JsonLd data={data} />;
}

export function HomePageSchema() {
  const reviewSchema = allReviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewBody: r.body,
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
    },
    itemReviewed: { "@id": BAND_ID },
  }));

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MusicGroup",
        "@id": BAND_ID,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: String(allReviews.length),
          bestRating: "5",
          worstRating: "1",
        },
        review: reviewSchema,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };
  return <JsonLd data={data} />;
}
