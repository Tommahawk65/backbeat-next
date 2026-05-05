import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Oakley Court wedding band Backbeat. Live indie and rock for weddings at the Grade II*-listed Victorian Gothic house on the Thames near Windsor, Berkshire. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const oakleyCourt: VenueRecord = {
  type: "venue",
  slug: "oakley-court",
  name: "Oakley Court",
  countySlug: "berkshire",
  meta: {
    title: "Oakley Court Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Oakley Court Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Oakley Court, Water Oakley, near Windsor, Berkshire",
    subAreas: ["Water Oakley", "Bray", "Windsor", "Maidenhead", "Eton"],
  },
  hero: {
    eyebrow: "Oakley Court · Windsor · Berkshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Oakley Court.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade II*-listed Victorian
        Gothic house on the Thames near Windsor. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Oakley Court",
    heading: (
      <>
        Built 1859. Hammer Films. The Rocky Horror Picture Show.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Oakley Court sits at Water Oakley in the parish of Bray,
          on the Thames between Windsor and Maidenhead in Berkshire.
          The Victorian Gothic country house was built in 1859 and
          is Grade II* listed. The property has a long history as a
          film location: Hammer Films used it from 1949 through the
          early 1970s for productions including The Brides of
          Dracula and The Plague of the Zombies, and it served as
          Dr Frank-N-Furter&rsquo;s castle in The Rocky Horror
          Picture Show in 1975. It now runs as Oakley Court Hotel,
          set in 35 acres of grounds.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/berkshire" className={linkClass}>
            Berkshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/buckinghamshire" className={linkClass}>
            Buckinghamshire
          </Link>{" "}
          regularly, so Windsor sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation,
          no anxious 4am drives back from the wrong end of the
          country.
        </p>
        <p>
          Oakley Court&rsquo;s reception spaces have the kind of
          Victorian-Gothic finish that doesn&rsquo;t need help. Our
          stage setup is built to dress around the room rather than
          fight it. Black-finished kit, restrained on-stage lighting
          rather than a stadium rig, and a PA sized for the room
          rather than the road. We dress in stage-blacks unless you
          ask otherwise.
        </p>
        <p>
          An Oakley Court wedding tends to pull a guest list
          that&rsquo;s travelled in from London for the weekend,
          with a strong home-counties core. The setlist flexes
          accordingly: Arctic Monkeys, The Killers and Kings of
          Leon for the late floor, Oasis and Stereophonics for the
          mid-evening, modern-pop crossover (Harry Styles, Dua
          Lipa, Sam Fender) layered through for the chart-aware
          younger guests. Wedding non-negotiables (Mr Brightside,
          Don&rsquo;t Stop Me Now, Sweet Caroline) take the back-
          half peaks. Between sets a DJ playlist (collaborated with
          you) keeps the floor moving. We learn one custom first
          dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Oakley Court are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          We don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the wedding
          coordinator the week before, and pace the closing set so
          it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Oakley Court and want a band that
          turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Oakley Court.",
    blurb: (
      <>
        Backbeat plays across Berkshire, Buckinghamshire and the
        wider Thames Valley. A snapshot of other well-known wedding
        venues within about an hour of Windsor. If yours isn&rsquo;t
        here, tell us anyway.
      </>
    ),
    list: [
      { name: "Cliveden House", town: "Taplow" },
      { name: "Hedsor House", town: "Taplow" },
      { name: "Lillibrooke Manor", town: "Maidenhead" },
      { name: "Coworth Park", town: "Sunningdale" },
      { name: "Royal Berkshire Hotel", town: "Ascot" },
      { name: "Pennyhill Park", town: "Bagshot" },
      { name: "The Compleat Angler", town: "Marlow" },
      { name: "Danesfield House", town: "Marlow" },
    ],
  },
  cta: {
    heading: "Live music for your Oakley Court wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
