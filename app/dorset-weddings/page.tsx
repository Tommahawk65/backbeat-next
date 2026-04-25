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
  "Dorset wedding band Backbeat — live indie & rock for coastal, country house and barn weddings across Bournemouth, Poole, Dorchester and beyond. From £1,900.";

export const metadata: Metadata = {
  title: "Dorset Wedding Band | Live Music From £1,900",
  description,
  alternates: { canonical: "/dorset-weddings" },
  openGraph: {
    title: "Dorset Wedding Band | Backbeat — From £1,900",
    description,
    url: "/dorset-weddings",
    type: "website",
  },
};

const venues: Venue[] = [
  { name: "Lulworth Castle", town: "Wareham" },
  { name: "Highcliffe Castle", town: "Christchurch" },
  { name: "Athelhampton House", town: "Dorchester" },
  { name: "Sopley Mill", town: "Christchurch" },
  { name: "Upton Country House", town: "Poole" },
  { name: "Hamoon Wedding Barn", town: "Sturminster Newton" },
  { name: "Lulworth Cove", town: "West Lulworth" },
  { name: "The Grange at Oborne", town: "Sherborne" },
  { name: "Larmer Tree Gardens", town: "Tollard Royal" },
  { name: "Plush Manor", town: "Piddletrenthide" },
  { name: "Stock Gaylard House", town: "Sturminster Newton" },
  { name: "Captain's Club Hotel", town: "Christchurch" },
];

export default function DorsetWeddingsPage() {
  return (
    <>
      <LocationSchema
        slug="dorset-weddings"
        pageName="Dorset Wedding Band"
        areaServed="Dorset"
        subAreas={[
          "Bournemouth",
          "Poole",
          "Christchurch",
          "Dorchester",
          "Sherborne",
          "Wareham",
          "Weymouth",
        ]}
        description={description}
      />

      <LocationHero
        eyebrow="Dorset · Jurassic Coast · UK-wide"
        heading={
          <>
            A Dorset wedding band
            <br className="hidden sm:block" /> with the soundtrack to match.
          </>
        }
        subhead={
          <>
            Live indie &amp; rock for coastal weddings, country houses and
            converted barns across Dorset. From{" "}
            <span className="font-semibold text-white">£1,900</span>.
          </>
        }
      />

      <LocationIntro
        eyebrow="Wedding band · Dorset"
        heading={
          <>
            Coastal weddings.
            <br />
            Country house weddings.
            <br />
            Same packed dance floor.
          </>
        }
      >
        <p>
          Dorset has a wedding scene unlike anywhere else on the South Coast.
          Cliffside ceremonies at Highcliffe and Lulworth, walled-garden
          weddings at houses like Athelhampton, barn weddings tucked into the
          Blackmore Vale — every weekend has its own logistics. Backbeat is
          set up to roll into any of them.
        </p>
        <p>
          We&rsquo;re Hampshire-based, which puts most of Dorset within a
          comfortable drive — Bournemouth, Poole and Christchurch are
          essentially home turf, and we cover the wider county including
          Dorchester, Sherborne and the Jurassic Coast without inflating the
          budget. Coastal venues often come with weather contingencies, quirky
          power supplies and tight load-in windows; we plan for all three and
          arrive early.
        </p>
        <p>
          Our sets are built for the late-evening transition that Dorset
          weddings tend to hinge on — speeches, then dinner, then the moment
          the dance floor opens. That&rsquo;s where we live: indie anthems and
          rock classics that work for the parents&rsquo; generation and the
          bride&rsquo;s university friends in equal measure, plus a modern
          chart edge when the room calls for it.
        </p>
        <p>
          If you&rsquo;re planning a Dorset wedding and want a band that
          treats the venue, the timing and the dance floor with equal care,
          send us a date and we&rsquo;ll come back with availability and
          pricing.
        </p>
      </LocationIntro>

      <LocationTrustStrip />

      <LocationVenues
        eyebrow="Dorset venues"
        heading="Where we play in Dorset."
        blurb={
          <>
            Coastal castles, manor houses and barn venues across Dorset that
            we cover regularly.
          </>
        }
        venues={venues}
      />

      <LocationCTA
        heading="Live music for your Dorset wedding."
        body={
          <>
            We reply to most enquiries within 24 hours with availability and a
            tailored quote.
          </>
        }
      />
    </>
  );
}
