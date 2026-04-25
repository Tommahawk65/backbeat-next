import type { Metadata } from "next";

import { LocationHero } from "@/components/sections/location/LocationHero";
import { LocationIntro } from "@/components/sections/location/LocationIntro";
import { LocationTrustStrip } from "@/components/sections/location/LocationTrustStrip";
import { LocationGallery } from "@/components/sections/location/LocationGallery";
import {
  LocationVenues,
  type Venue,
} from "@/components/sections/location/LocationVenues";
import { LocationFAQ } from "@/components/sections/location/LocationFAQ";
import { LocationCTA } from "@/components/sections/location/LocationCTA";
import { LocationSchema } from "@/components/seo/LocationSchema";

const description =
  "Hampshire wedding band Backbeat — live indie & rock music for weddings across Southampton, Winchester, Portsmouth and the New Forest. Packages from £1,900.";

export const metadata: Metadata = {
  title: "Hampshire Wedding Band | Live Music From £1,900",
  description,
  alternates: { canonical: "/hampshire-weddings" },
  openGraph: {
    title: "Hampshire Wedding Band | Backbeat — From £1,900",
    description,
    url: "/hampshire-weddings",
    type: "website",
  },
};

const venues: Venue[] = [
  { name: "Manor Farmhouse", town: "Warnford" },
  { name: "The Elvetham Hotel", town: "Hook" },
  { name: "Rhinefield House", town: "New Forest" },
  { name: "Careys Manor", town: "Brockenhurst" },
  { name: "Lainston House", town: "Winchester" },
  { name: "Tylney Hall", town: "Rotherwick" },
  { name: "Heckfield Place", town: "Hook" },
  { name: "Four Seasons Hotel Hampshire", town: "Dogmersfield" },
  { name: "Audleys Wood", town: "Basingstoke" },
  { name: "Beaulieu", town: "New Forest" },
  { name: "Marwell Hotel", town: "Winchester" },
  { name: "The Master Builder's", town: "Buckler's Hard" },
];

export default function HampshireWeddingsPage() {
  return (
    <>
      <LocationSchema
        slug="hampshire-weddings"
        pageName="Hampshire Wedding Band"
        areaServed="Hampshire"
        subAreas={[
          "Southampton",
          "Winchester",
          "Portsmouth",
          "Basingstoke",
          "New Forest",
          "Petersfield",
          "Andover",
        ]}
        description={description}
      />

      <LocationHero
        eyebrow="Hampshire · South Coast · UK-wide"
        heading={
          <>
            Hampshire&rsquo;s premier
            <br className="hidden sm:block" /> wedding band.
          </>
        }
        subhead={
          <>
            Live indie &amp; rock that fills the dance floor — from Southampton
            country houses to New Forest barns. From{" "}
            <span className="font-semibold text-white">£1,900</span>.
          </>
        }
      />

      <LocationIntro
        eyebrow="Wedding band · Hampshire"
        heading={
          <>
            Built in Hampshire,
            <br />
            booked across the county.
          </>
        }
      >
        <p>
          Backbeat is a Hampshire-based live wedding band founded by musicians
          who grew up gigging across the county. Most weeks of the season we
          play somewhere between the New Forest and the Meon Valley — country
          houses near Winchester, coastal venues on the Solent, barn weddings
          in the South Downs.
        </p>
        <p>
          Hampshire weddings have a particular character: long summer evenings,
          marquees on lawns at houses like Tylney Hall and Lainston, sound
          limiters at restored barns, late-night sets that need to land
          regardless of how full the bar got. That&rsquo;s the room
          we&rsquo;re built for. Our PA is sized for everything from a
          120-guest barn to a 250-guest country house, and we know the
          delivery quirks of most major Hampshire venues by heart.
        </p>
        <p>
          We perform full live sets of indie anthems and rock classics, plus a
          modern pop crossover when the room asks for it. Between sets a DJ
          playlist (collaborated with you) keeps the floor moving, so your
          night runs from drinks reception to last call without a flat spot.
        </p>
        <p>
          Five-star reviews from Warnford, Hook, Sandhurst and beyond — local
          couples booking a local band that genuinely knows the venues, the
          timings and the dance floor.
        </p>
      </LocationIntro>

      <LocationTrustStrip />

      <LocationGallery />

      <LocationVenues
        eyebrow="Hampshire venues"
        heading="Where we play in Hampshire."
        blurb={
          <>
            From New Forest country houses to South Downs barns — venues
            we&rsquo;ve performed at and others we cover regularly across the
            county.
          </>
        }
        venues={venues}
      />

      <LocationFAQ />

      <LocationCTA
        heading="Live music for your Hampshire wedding."
        body={
          <>
            Tell us your date and venue and we&rsquo;ll come back with
            availability and a tailored quote, normally within 24 hours.
          </>
        }
      />
    </>
  );
}
