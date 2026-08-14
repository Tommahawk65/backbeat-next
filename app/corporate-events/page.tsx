import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/sections/location/Breadcrumbs";
import { LocationHero } from "@/components/sections/location/LocationHero";
import { LocationIntro } from "@/components/sections/location/LocationIntro";
import { LocationTrustStrip } from "@/components/sections/location/LocationTrustStrip";
import { LocationCTA } from "@/components/sections/location/LocationCTA";
import { LocationSchema } from "@/components/seo/LocationSchema";

const PATH = "/corporate-events";

const description =
  "Live indie & rock band for corporate events, summer parties, brand launches, conferences and award dinners. Hampshire-based, covering the south of England and beyond. Packages from £1,900 with full PA, lighting and DJ between sets.";

export const metadata: Metadata = {
  title: "Live Band for Corporate Events — From £1,900",
  description,
  alternates: { canonical: PATH },
  openGraph: {
    title: "Live Band for Corporate Events | Backbeat — From £1,900",
    description,
    url: PATH,
    type: "website",
  },
};

export default function CorporateEventsPage() {
  return (
    <>
      <LocationSchema
        path={PATH}
        pageName="Live Band for Corporate Events"
        areaServed="United Kingdom"
        subAreas={[
          "London",
          "Hampshire",
          "Surrey",
          "Berkshire",
          "Oxfordshire",
          "South Coast",
        ]}
        description={description}
        serviceType="Corporate event live band"
      />

      <LocationHero
        eyebrow="Corporate events · UK-wide"
        heading={
          <>
            A live band
            <br className="hidden sm:block" /> for corporate events.
          </>
        }
        subhead={
          <>
            Indie &amp; rock that lifts the room. From{" "}
            <span className="font-semibold text-white">£1,900</span>, full PA
            and lighting, DJ between sets.
          </>
        }
      />

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Corporate Events" },
        ]}
      />

      <LocationIntro
        eyebrow="Live band · Corporate events"
        heading={
          <>
            Summer parties, brand launches,
            <br />
            award dinners, conferences.
          </>
        }
      >
        <p>
          Backbeat is a Hampshire-based live band built for the corporate
          calendar as well as weddings. Summer parties, supplier
          conferences, product launches, awards nights, hospitality dinners.
          The kind of evenings where the room needs to be lifted between
          speeches and the closing set has to land regardless of how full
          the bar got.
        </p>
        <p>
          We play full live sets of indie anthems and rock classics with a
          modern chart-pop crossover layered through. Between sets a DJ
          playlist (collaborated with you in advance) keeps the floor
          moving, so the night runs from arrival drinks to last call without
          a flat spot. We can build the set list around your audience
          demographic, your brand tone, and any one-off moments you need
          covered.
        </p>
        <p>
          Our PA is sized for everything from a 100-guest private dining
          room to a 400-guest summer marquee. Pro-grade kit, PAT-tested,
          self-contained. We handle our own set-up and pack-down, are
          experienced with sound-limiter venues and in-house production
          teams, and dress in stage-blacks unless the brief asks otherwise.
        </p>
        <p>
          Past corporate audiences include teams across the South Coast and
          London-belt brands looking for a band that turns up briefed,
          properly dressed and with the dance floor firmly in mind. Tell us
          the date, venue and rough guest count and we&rsquo;ll come back
          with availability and a tailored quote, normally within 24 hours.
        </p>
      </LocationIntro>

      <LocationTrustStrip />

      <LocationCTA
        eyebrow="Check availability"
        heading={<>Let&rsquo;s make it a night.</>}
        body={
          <>
            Tell us your date, venue and rough guest count and we&rsquo;ll
            come back with availability and a tailored quote, normally
            within 24 hours.
          </>
        }
      />
    </>
  );
}
