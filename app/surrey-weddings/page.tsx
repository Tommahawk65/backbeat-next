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
  "Surrey wedding band Backbeat — live indie & rock for weddings at Surrey country houses, golf clubs and barns. Five-star reviews from Sandhurst to Guildford. From £1,900.";

export const metadata: Metadata = {
  title: "Surrey Wedding Band | Live Music From £1,900",
  description,
  alternates: { canonical: "/surrey-weddings" },
  openGraph: {
    title: "Surrey Wedding Band | Backbeat — From £1,900",
    description,
    url: "/surrey-weddings",
    type: "website",
  },
};

const venues: Venue[] = [
  { name: "Royal Military Academy", town: "Sandhurst" },
  { name: "Gate Street Barn", town: "Bramley" },
  { name: "St George's Hill Golf Club", town: "Weybridge" },
  { name: "Pennyhill Park", town: "Bagshot" },
  { name: "Great Fosters", town: "Egham" },
  { name: "Bury Court Barn", town: "Farnham" },
  { name: "Botleys Mansion", town: "Chertsey" },
  { name: "Wotton House", town: "Dorking" },
  { name: "Northcote House", town: "Sunningdale" },
  { name: "Loseley Park", town: "Guildford" },
  { name: "Foxhills", town: "Ottershaw" },
  { name: "Burrows Lea Country House", town: "Shere" },
];

export default function SurreyWeddingsPage() {
  return (
    <>
      <LocationSchema
        slug="surrey-weddings"
        pageName="Surrey Wedding Band"
        areaServed="Surrey"
        subAreas={[
          "Guildford",
          "Woking",
          "Farnham",
          "Weybridge",
          "Dorking",
          "Camberley",
          "Reigate",
        ]}
        description={description}
      />

      <LocationHero
        eyebrow="Surrey · Hampshire borders · M25"
        heading={
          <>
            A Surrey wedding band
            <br className="hidden sm:block" /> the dance floor remembers.
          </>
        }
        subhead={
          <>
            Live indie &amp; rock built for Surrey country houses, golf clubs
            and converted barns. From{" "}
            <span className="font-semibold text-white">£1,900</span>.
          </>
        }
      />

      <LocationIntro
        eyebrow="Wedding band · Surrey"
        heading={
          <>
            Surrey weddings,
            <br />
            played the way they should be.
          </>
        }
      >
        <p>
          Surrey is one of our most-played counties. We&rsquo;re just over the
          Hampshire border, so we cover Guildford, Farnham, Dorking, Weybridge
          and the wider M25 belt without bolt-on travel fees that push the
          budget around.
        </p>
        <p>
          Surrey weddings tend to fall into three camps: country house weddings
          at venues like Pennyhill Park and Great Fosters, golf club functions
          at the likes of St George&rsquo;s Hill and Foxhills, and barn
          weddings around the Surrey Hills. Each has its own quirks — golf
          clubs often have early curfews and member courtesy rules, barns
          frequently run sound limiters, country houses can stretch load-in
          times. We&rsquo;ve done all three many times over and turn up briefed
          for the venue rather than learning it on the night.
        </p>
        <p>
          Some of our most loved gigs have been Surrey ones. We&rsquo;ve played
          the Royal Military Academy at Sandhurst, kept the dance floor going
          past midnight at Gate Street Barn near Bramley, and finished out the
          night for a packed room at St George&rsquo;s Hill Golf Club. Each of
          those clients left a five-star review.
        </p>
        <p>
          For Surrey couples looking for a wedding band with proper experience
          of the local venues, a calm professional set-up and a dance floor
          record that holds up — we&rsquo;d love to be on your shortlist.
        </p>
      </LocationIntro>

      <LocationTrustStrip />

      <LocationVenues
        eyebrow="Surrey venues"
        heading="Where we play in Surrey."
        blurb={
          <>
            Country houses, barn venues and golf clubs we&rsquo;ve performed at
            and others we cover regularly across the county.
          </>
        }
        venues={venues}
      />

      <LocationCTA
        heading="Live music for your Surrey wedding."
        body={
          <>
            Send us the date and venue. We&rsquo;ll confirm availability and
            send a quote within 24 hours.
          </>
        }
      />
    </>
  );
}
