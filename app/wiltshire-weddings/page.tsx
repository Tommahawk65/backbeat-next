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
  "Wiltshire wedding band Backbeat — live indie & rock for manor house and country estate weddings across Salisbury, Marlborough and beyond. From £1,900.";

export const metadata: Metadata = {
  title: "Wiltshire Wedding Band | Live Music From £1,900",
  description,
  alternates: { canonical: "/wiltshire-weddings" },
  openGraph: {
    title: "Wiltshire Wedding Band | Backbeat — From £1,900",
    description,
    url: "/wiltshire-weddings",
    type: "website",
  },
};

const venues: Venue[] = [
  { name: "Lucknam Park", town: "Colerne" },
  { name: "Whatley Manor", town: "Malmesbury" },
  { name: "Bowood House", town: "Calne" },
  { name: "Trafalgar Park", town: "Salisbury" },
  { name: "The Beechwood", town: "Salisbury" },
  { name: "Pythouse Kitchen Garden", town: "Tisbury" },
  { name: "Iford Manor", town: "Bradford-on-Avon" },
  { name: "The Tythe Barn", town: "Marlborough" },
  { name: "Manor by the Lake", town: "near Cirencester" },
  { name: "Salisbury Cathedral", town: "Salisbury" },
  { name: "The Compasses Inn", town: "Tisbury" },
  { name: "Stourhead", town: "Mere" },
];

export default function WiltshireWeddingsPage() {
  return (
    <>
      <LocationSchema
        slug="wiltshire-weddings"
        pageName="Wiltshire Wedding Band"
        areaServed="Wiltshire"
        subAreas={[
          "Salisbury",
          "Marlborough",
          "Devizes",
          "Trowbridge",
          "Chippenham",
          "Bradford-on-Avon",
          "Tisbury",
        ]}
        description={description}
      />

      <LocationHero
        eyebrow="Wiltshire · Salisbury Plain · UK-wide"
        heading={
          <>
            A Wiltshire wedding band
            <br className="hidden sm:block" /> for manor houses and big nights.
          </>
        }
        subhead={
          <>
            Live indie &amp; rock for Wiltshire country estates, gardens and
            manor weddings. From{" "}
            <span className="font-semibold text-white">£1,900</span>.
          </>
        }
      />

      <LocationIntro
        eyebrow="Wedding band · Wiltshire"
        heading={
          <>
            Manor weddings,
            <br />
            played properly.
          </>
        }
      >
        <p>
          Wiltshire weddings tend to be quietly grand. Estates like Lucknam
          Park and Bowood, walled gardens at Iford and Pythouse, listed
          country churches, marquees on lawns that have been there for 300
          years. The aesthetic is restrained; the dance floor expectation is
          anything but.
        </p>
        <p>
          Backbeat plays the moment a Wiltshire wedding tips from elegant
          dinner to full reception. We&rsquo;re a Hampshire-based band with
          regular Wiltshire bookings — Salisbury, Marlborough,
          Bradford-on-Avon — so we know the drive, the typical curfew patterns
          at country estates, and how to set up cleanly in venues where the
          wedding coordinator has every right to ask you to be invisible
          until 8pm.
        </p>
        <p>
          Our setlist leans into indie anthems and rock classics that work
          across an age range — Wiltshire crowds often skew slightly older,
          with parents&rsquo; generation expecting a few familiar floor-fillers
          alongside the chart-friendly material that gets younger guests up.
          We mix it intentionally and read the room.
        </p>
        <p>
          For Wiltshire couples after a band that turns up properly briefed
          and leaves the dance floor empty only because everyone&rsquo;s
          already left for the bar, we&rsquo;d love to hear from you.
        </p>
      </LocationIntro>

      <LocationTrustStrip />

      <LocationVenues
        eyebrow="Wiltshire venues"
        heading="Where we play in Wiltshire."
        blurb={
          <>
            Country estates, manor houses and barn venues across Wiltshire we
            cover regularly.
          </>
        }
        venues={venues}
      />

      <LocationCTA
        heading="Live music for your Wiltshire wedding."
        body="Tell us your date and venue — we&rsquo;ll come back with availability and a tailored quote."
      />
    </>
  );
}
