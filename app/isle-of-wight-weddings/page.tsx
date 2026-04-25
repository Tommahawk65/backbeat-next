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
  "Isle of Wight wedding band Backbeat — mainland-based live indie & rock band that travels to weddings across the island. Ferry-experienced, fully self-contained. From £1,900.";

export const metadata: Metadata = {
  title: "Isle of Wight Wedding Band | Live Music From £1,900",
  description,
  alternates: { canonical: "/isle-of-wight-weddings" },
  openGraph: {
    title: "Isle of Wight Wedding Band | Backbeat — From £1,900",
    description,
    url: "/isle-of-wight-weddings",
    type: "website",
  },
};

const venues: Venue[] = [
  { name: "Quarr Abbey", town: "Ryde" },
  { name: "Osborne House", town: "East Cowes" },
  { name: "Robin Hill", town: "Downend" },
  { name: "The George Hotel", town: "Yarmouth" },
  { name: "Tapnell Farm", town: "Yarmouth" },
  { name: "North House", town: "Cowes" },
  { name: "The Hambrough", town: "Ventnor" },
  { name: "Royal Hotel", town: "Ventnor" },
  { name: "Haven Hall", town: "Shanklin" },
  { name: "Cowes Yacht Haven", town: "Cowes" },
  { name: "Newport Minster", town: "Newport" },
  { name: "St Catherine's Lighthouse", town: "Niton" },
];

export default function IsleOfWightWeddingsPage() {
  return (
    <>
      <LocationSchema
        slug="isle-of-wight-weddings"
        pageName="Isle of Wight Wedding Band"
        areaServed="Isle of Wight"
        subAreas={[
          "Cowes",
          "Newport",
          "Ryde",
          "Shanklin",
          "Ventnor",
          "Yarmouth",
          "Bembridge",
        ]}
        description={description}
      />

      <LocationHero
        eyebrow="Isle of Wight · Solent · Ferry-ready"
        heading={
          <>
            A wedding band
            <br className="hidden sm:block" /> for your Isle of Wight day.
          </>
        }
        subhead={
          <>
            Mainland-based live indie &amp; rock band that travels to the
            island regularly. From{" "}
            <span className="font-semibold text-white">£1,900</span>.
          </>
        }
      />

      <LocationIntro
        eyebrow="Wedding band · Isle of Wight"
        heading={
          <>
            Crossing the Solent
            <br />
            isn&rsquo;t a problem.
          </>
        }
      >
        <p>
          Isle of Wight weddings have a different rhythm to mainland ones:
          guests arriving on multiple ferries across the day, suppliers
          coordinating around tide-led crossings, late nights that have to
          stop being late at exactly the right time so the band catches
          the last sailing. That logistics layer is part of the brief, and
          we plan around it.
        </p>
        <p>
          We&rsquo;re a Southampton-side, Hampshire-based band, so the
          ferry from Southampton or Portsmouth is a routine part of an
          island gig for us. We arrive on an earlier crossing than we
          strictly need to, with a full back-up of cables and
          load-in-ready kit, because the answer to &ldquo;can we just nip
          back for it?&rdquo; on the Isle of Wight is no.
        </p>
        <p>
          Island wedding venues span from the grandeur of Osborne House
          and Quarr Abbey through to relaxed farm and beach venues at
          Tapnell or Compton Bay. We&rsquo;re fully self-contained — PA,
          lighting, all instruments — so even venues with limited
          infrastructure get a proper live-band sound and look.
        </p>
        <p>
          If you&rsquo;re planning an Isle of Wight wedding and want a
          mainland band that treats the crossing as part of the job rather
          than an obstacle, send us your date and venue. We&rsquo;ll come
          back within 24 hours.
        </p>
      </LocationIntro>

      <LocationTrustStrip />

      <LocationVenues
        eyebrow="Island venues"
        heading="Where we play on the Isle of Wight."
        blurb={
          <>
            From historic estates to coastal hotels and farm venues — we
            cover the island end to end.
          </>
        }
        venues={venues}
      />

      <LocationCTA
        heading="Live music for your Isle of Wight wedding."
        body="Send us your date, venue and ferry plan. We&rsquo;ll handle the rest."
      />
    </>
  );
}
