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
  "West Sussex wedding band Backbeat — live indie & rock for downland weddings, country houses and barns across Chichester, Goodwood, Arundel and beyond. From £1,900.";

export const metadata: Metadata = {
  title: "West Sussex Wedding Band | Live Music From £1,900",
  description,
  alternates: { canonical: "/west-sussex-weddings" },
  openGraph: {
    title: "West Sussex Wedding Band | Backbeat — From £1,900",
    description,
    url: "/west-sussex-weddings",
    type: "website",
  },
};

const venues: Venue[] = [
  { name: "Goodwood House", town: "Chichester" },
  { name: "The Kennels at Goodwood", town: "Chichester" },
  { name: "Wiston House", town: "Steyning" },
  { name: "Amberley Castle", town: "Amberley" },
  { name: "South Lodge", town: "Lower Beeding" },
  { name: "Cowdray House", town: "Midhurst" },
  { name: "Upwaltham Barns", town: "Petworth" },
  { name: "Gravetye Manor", town: "East Grinstead" },
  { name: "Bailiffscourt Hotel", town: "Climping" },
  { name: "Blackstock Country Estate", town: "near Brighton" },
  { name: "Tortington Manor", town: "Arundel" },
  { name: "Farbridge Barns", town: "near Chichester" },
];

export default function WestSussexWeddingsPage() {
  return (
    <>
      <LocationSchema
        slug="west-sussex-weddings"
        pageName="West Sussex Wedding Band"
        areaServed="West Sussex"
        subAreas={[
          "Chichester",
          "Worthing",
          "Horsham",
          "Crawley",
          "Arundel",
          "Bognor Regis",
          "Petworth",
        ]}
        description={description}
      />

      <LocationHero
        eyebrow="West Sussex · South Downs · UK-wide"
        heading={
          <>
            A West Sussex wedding band
            <br className="hidden sm:block" /> with the dance floor sorted.
          </>
        }
        subhead={
          <>
            Live indie &amp; rock for South Downs barn weddings, Goodwood
            estate venues and Chichester country houses. From{" "}
            <span className="font-semibold text-white">£1,900</span>.
          </>
        }
      />

      <LocationIntro
        eyebrow="Wedding band · West Sussex"
        heading={
          <>
            Downs, barns,
            <br />
            and a band that finishes the night properly.
          </>
        }
      >
        <p>
          West Sussex weddings are some of our favourite to play. The county
          has a wedding scene that runs from Goodwood&rsquo;s racing-set
          glamour through to laid-back barn weddings at places like
          Upwaltham and Farbridge — and almost everywhere has the South
          Downs as a backdrop.
        </p>
        <p>
          We&rsquo;re a Hampshire-based band, so Chichester, Petworth and
          Arundel are short, comfortable runs without travel-fee
          inflation. We cover the wider county including Horsham, Crawley
          and the Mid Sussex border regularly — and we know the curfew and
          sound-limiter quirks at most major West Sussex venues from
          experience rather than a website.
        </p>
        <p>
          The musical brief tends to skew more relaxed than the
          neighbouring Berkshire/Surrey set: West Sussex couples often want
          a band that can slide between live-lounge acoustic during dinner
          and a high-energy late set when the dance floor opens. We do
          both, and the transition is something we deliberately design
          around the timing of your day.
        </p>
        <p>
          If you&rsquo;re planning a West Sussex wedding and want a band
          that arrives properly briefed and leaves the bar empty by 11pm,
          send us the details — we&rsquo;d love to be on your shortlist.
        </p>
      </LocationIntro>

      <LocationTrustStrip />

      <LocationVenues
        eyebrow="West Sussex venues"
        heading="Where we play in West Sussex."
        blurb={
          <>
            South Downs barns, country houses and Goodwood-area venues we
            cover regularly across the county.
          </>
        }
        venues={venues}
      />

      <LocationCTA
        heading="Live music for your West Sussex wedding."
        body="Drop us your date and venue and we&rsquo;ll come back with availability and pricing — usually within 24 hours."
      />
    </>
  );
}
