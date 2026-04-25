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
  "Berkshire wedding band Backbeat — live indie & rock for weddings across Reading, Newbury, Windsor and the Royal County. Five-star reviews. Packages from £1,900.";

export const metadata: Metadata = {
  title: "Berkshire Wedding Band | Live Music From £1,900",
  description,
  alternates: { canonical: "/berkshire-weddings" },
  openGraph: {
    title: "Berkshire Wedding Band | Backbeat — From £1,900",
    description,
    url: "/berkshire-weddings",
    type: "website",
  },
};

const venues: Venue[] = [
  { name: "Coworth Park", town: "Sunningdale" },
  { name: "Cliveden House", town: "Taplow" },
  { name: "Royal Berkshire Hotel", town: "Ascot" },
  { name: "Donnington Valley", town: "Newbury" },
  { name: "Sandhurst Suite", town: "Royal Military Academy" },
  { name: "Stoke Park", town: "Stoke Poges" },
  { name: "The Vineyard", town: "Stockcross" },
  { name: "Easthampstead Park", town: "Wokingham" },
  { name: "Bisham Abbey", town: "Marlow" },
  { name: "The Elephant Hotel", town: "Pangbourne" },
  { name: "Greenlands", town: "Henley-on-Thames" },
  { name: "Hartwell House", town: "near Aylesbury" },
];

export default function BerkshireWeddingsPage() {
  return (
    <>
      <LocationSchema
        slug="berkshire-weddings"
        pageName="Berkshire Wedding Band"
        areaServed="Berkshire"
        subAreas={[
          "Reading",
          "Newbury",
          "Windsor",
          "Maidenhead",
          "Bracknell",
          "Wokingham",
          "Ascot",
        ]}
        description={description}
      />

      <LocationHero
        eyebrow="Berkshire · Royal County · UK-wide"
        heading={
          <>
            A Berkshire wedding band
            <br className="hidden sm:block" /> that lifts the room.
          </>
        }
        subhead={
          <>
            Live indie &amp; rock for Royal Berkshire country estates, manor
            houses and city venues. From{" "}
            <span className="font-semibold text-white">£1,900</span>.
          </>
        }
      />

      <LocationIntro
        eyebrow="Wedding band · Berkshire"
        heading={
          <>
            Polished venues.
            <br />
            Properly loud finish.
          </>
        }
      >
        <p>
          Berkshire weddings tend to fall on the more polished end of the
          spectrum. Country house hotels like Coworth Park and Cliveden,
          racing-set venues around Ascot and Sunningdale, and grand
          riverside hotels around Henley and Marlow. The expectation on
          suppliers is high — and rightly so. Backbeat is set up for it.
        </p>
        <p>
          We&rsquo;re Hampshire-based but Berkshire is comfortably inside our
          home patch. Reading, Newbury and Wokingham are short hops; Ascot,
          Windsor and the Thames Valley venues are familiar runs. We arrive
          early, dress for the venue and run the load-in cleanly enough that
          the wedding coordinator only notices us when we start playing.
        </p>
        <p>
          For corporate guests in town for a London-adjacent Berkshire
          wedding, our setlist needs to span generations and tastes — the
          father-of-the-bride wanting Mr. Brightside next to the city
          friends asking for the most recent chart. We thread the needle:
          indie anthems, rock classics and modern crossover hits, played
          live, mixed for the room.
        </p>
        <p>
          If you&rsquo;re booking a Berkshire wedding and want a band that
          matches the venue&rsquo;s standards while still emptying the bar
          when the dance floor opens, we&rsquo;d love to hear from you.
        </p>
      </LocationIntro>

      <LocationTrustStrip />

      <LocationVenues
        eyebrow="Berkshire venues"
        heading="Where we play in Berkshire."
        blurb={
          <>
            Country house hotels, manor venues and racing-set rooms we cover
            across the Royal County.
          </>
        }
        venues={venues}
      />

      <LocationCTA
        heading="Live music for your Berkshire wedding."
        body="Send us the date and venue — we&rsquo;ll reply with availability and pricing within 24 hours."
      />
    </>
  );
}
