import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Highcliffe Castle wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed Gothic Revival cliff-top castle near Christchurch, Dorset. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const highcliffeCastle: VenueRecord = {
  type: "venue",
  slug: "highcliffe-castle",
  name: "Highcliffe Castle",
  countySlug: "dorset",
  meta: {
    title: "Highcliffe Castle Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Highcliffe Castle Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Highcliffe Castle, Highcliffe, Dorset",
    subAreas: ["Highcliffe", "Christchurch", "Mudeford", "New Milton", "Bournemouth"],
  },
  hero: {
    eyebrow: "Highcliffe Castle · Highcliffe · Dorset",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Highcliffe Castle.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed Gothic Revival
        castle on the Dorset cliffs. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Highcliffe Castle",
    heading: (
      <>
        Grade I listed Gothic Revival.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Highcliffe Castle sits on the Dorset cliffs near
          Christchurch. The castle was built between 1831 and 1835
          by the architect William Donthorne for Charles Stuart, 1st
          Baron Stuart de Rothesay, in a Romantic-Picturesque Gothic
          Revival style, incorporating salvaged medieval stonework
          from the abbey at Jumièges in Normandy. It&rsquo;s Grade I
          listed and now operated by Christchurch Council as a
          wedding and events venue.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers
          the{" "}
          <Link href="/wedding-bands/dorset" className={linkClass}>
            Dorset
          </Link>{" "}
          coast and the{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          New Forest regularly, so Highcliffe sits comfortably inside
          our home patch. No travel surcharges, no overnight
          accommodation, no anxious 4am drives back from the wrong
          end of the country.
        </p>
        <p>
          Highcliffe&rsquo;s reception spaces have the kind of
          period-Gothic finish that doesn&rsquo;t need help. Our
          stage setup is built to dress around the room rather than
          fight it. Black-finished kit, restrained on-stage lighting
          rather than a stadium rig, and a PA sized for the room
          rather than the road. We dress in stage-blacks unless you
          ask otherwise.
        </p>
        <p>
          A Highcliffe wedding tends to pull a guest list that&rsquo;s
          travelled in for the weekend, with a London-and-South-coast
          crowd that&rsquo;s comfortable on a dance floor. The
          setlist flexes accordingly: Arctic Monkeys, The Killers and
          Kings of Leon for the late floor, Oasis and Stereophonics
          for the mid-evening, modern-pop crossover (Harry Styles,
          Dua Lipa, Sam Fender) layered through for the chart-aware
          younger guests. Wedding non-negotiables (Mr Brightside,
          Don&rsquo;t Stop Me Now, Sweet Caroline) take the back-half
          peaks. Between sets a DJ playlist (collaborated with you)
          keeps the floor moving. We learn one custom first dance per
          booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Highcliffe Castle are managed by the
          council-run wedding team, and they vary by booking.
          Council-run heritage venues often carry their own access,
          conservation and timing protocols. We don&rsquo;t make
          assumptions. We confirm the specific cut-off, limiter setup
          and any house rules with the wedding coordinator the week
          before, and pace the closing set so it lands at the actual
          end of the night.
        </p>
        <p>
          If you&rsquo;re booking Highcliffe Castle and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love to
          be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Highcliffe.",
    blurb: (
      <>
        Backbeat plays across Dorset, the New Forest and the wider
        South coast. A snapshot of other well-known wedding venues
        within about an hour of Highcliffe. If yours isn&rsquo;t
        here, tell us anyway.
      </>
    ),
    list: [
      { name: "Sopley Mill", town: "Christchurch" },
      { name: "Chewton Glen", town: "New Milton" },
      { name: "Pylewell Park", town: "Lymington" },
      { name: "Rhinefield House", town: "Brockenhurst" },
      { name: "Burley Manor", town: "Burley" },
      { name: "Somerley House", town: "Ringwood" },
      { name: "Parley Manor", town: "Christchurch" },
      { name: "Almer Manor", town: "Wimborne" },
    ],
  },
  cta: {
    heading: "Live music for your Highcliffe Castle wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
