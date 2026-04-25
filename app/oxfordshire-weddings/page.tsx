import type { Metadata } from "next";

import { LocationHero } from "@/components/sections/location/LocationHero";
import { LocationIntro } from "@/components/sections/location/LocationIntro";
import { LocationTrustStrip } from "@/components/sections/location/LocationTrustStrip";
import {
  LocationVenues,
  type Venue,
} from "@/components/sections/location/LocationVenues";
import { LocationCTA } from "@/components/sections/location/LocationCTA";
import { LocationSchema } from "@/components/seo/LocationSchema";

const description =
  "Oxfordshire wedding band Backbeat — live indie & rock for Oxford college, Cotswolds and country house weddings. Five-star reviews from Wolfson College and beyond. From £1,900.";

export const metadata: Metadata = {
  title: "Oxfordshire Wedding Band | Live Music From £1,900",
  description,
  alternates: { canonical: "/oxfordshire-weddings" },
  openGraph: {
    title: "Oxfordshire Wedding Band | Backbeat — From £1,900",
    description,
    url: "/oxfordshire-weddings",
    type: "website",
  },
};

const venues: Venue[] = [
  { name: "Wolfson College", town: "Oxford" },
  { name: "Blenheim Palace", town: "Woodstock" },
  { name: "Le Manoir aux Quat'Saisons", town: "Great Milton" },
  { name: "The Bay Tree Hotel", town: "Burford" },
  { name: "Caswell House", town: "Brize Norton" },
  { name: "Cornwell Manor", town: "Chipping Norton" },
  { name: "The Old Swan & Minster Mill", town: "Minster Lovell" },
  { name: "Eynsham Hall", town: "Witney" },
  { name: "Great Tew Estate", town: "Chipping Norton" },
  { name: "Stonor Park", town: "Henley-on-Thames" },
  { name: "Oxford Town Hall", town: "Oxford" },
  { name: "Heythrop Park", town: "Chipping Norton" },
];

export default function OxfordshireWeddingsPage() {
  return (
    <>
      <LocationSchema
        slug="oxfordshire-weddings"
        pageName="Oxfordshire Wedding Band"
        areaServed="Oxfordshire"
        subAreas={[
          "Oxford",
          "Banbury",
          "Witney",
          "Henley-on-Thames",
          "Bicester",
          "Burford",
          "Chipping Norton",
        ]}
        description={description}
      />

      <LocationHero
        eyebrow="Oxfordshire · Cotswolds · UK-wide"
        heading={
          <>
            An Oxfordshire wedding band
            <br className="hidden sm:block" /> the colleges have already booked.
          </>
        }
        subhead={
          <>
            Live indie &amp; rock for Oxford colleges, Cotswolds country
            houses and stately home weddings. From{" "}
            <span className="font-semibold text-white">£1,900</span>.
          </>
        }
      />

      <LocationIntro
        eyebrow="Wedding band · Oxfordshire"
        heading={
          <>
            From Oxford colleges
            <br />
            to Cotswolds country houses.
          </>
        }
      >
        <p>
          Oxfordshire is one of the country&rsquo;s strongest wedding
          regions and one of our most-requested. Oxford&rsquo;s historic
          colleges — Wolfson, Worcester, Trinity, Magdalen — host
          weddings that demand a band capable of matching the room without
          being precious about it. The Cotswolds end of the county delivers
          the country-house brief: Blenheim Palace, Le Manoir, the
          string of estates around Chipping Norton.
        </p>
        <p>
          Backbeat has played at Wolfson College, Oxford — five-star
          review from Anthony &amp; Timothy below — and we cover the wider
          county including Witney, Henley, Burford and Banbury regularly.
          As a Hampshire-based band the drive is a comfortable hour or so,
          and we plan around the typical Oxfordshire wedding rhythm:
          drinks reception in college quads or stately gardens, sit-down
          dinner, then a dance floor that wakes the room up around 9pm.
        </p>
        <p>
          The Oxford crowd is musically wide-open — global guests at
          college weddings, multi-generational families at country houses,
          friend groups that range from City lawyers to choral scholars.
          Our setlist of indie anthems, rock classics and modern crossover
          hits is built to carry that mix.
        </p>
        <p>
          If you&rsquo;re planning an Oxfordshire wedding and want a band
          that turns up briefed for the venue and reads the room
          properly, send us your date — we&rsquo;d love to be on your
          shortlist.
        </p>
      </LocationIntro>

      <LocationTrustStrip />

      <LocationVenues
        eyebrow="Oxfordshire venues"
        heading="Where we play in Oxfordshire."
        blurb={
          <>
            Oxford colleges, Cotswolds country houses and stately estates
            we&rsquo;ve performed at and others we cover regularly.
          </>
        }
        venues={venues}
      />

      <LocationCTA
        heading="Live music for your Oxfordshire wedding."
        body="Send us the date and venue. We&rsquo;ll come back with availability and a tailored quote within 24 hours."
      />
    </>
  );
}
