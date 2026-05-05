import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Athelhampton wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed 15th-century Tudor house and Inigo Thomas gardens, near Dorchester. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const athelhampton: VenueRecord = {
  type: "venue",
  slug: "athelhampton",
  name: "Athelhampton",
  countySlug: "dorset",
  meta: {
    title: "Athelhampton Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Athelhampton Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Athelhampton House, near Dorchester, Dorset",
    subAreas: ["Athelhampton", "Puddletown", "Dorchester", "Wareham", "Bere Regis"],
  },
  hero: {
    eyebrow: "Athelhampton · Dorchester · Dorset",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Athelhampton.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed 15th-century
        Tudor house and Inigo Thomas gardens. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Athelhampton",
    heading: (
      <>
        Built ~1485. 20-acre Inigo Thomas gardens.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Athelhampton sits about five miles east of Dorchester in
          Dorset. The Great Hall was built around 1485 by Sir
          William Martyn, with a West Wing added in the mid-16th
          century. The house is Grade I listed and retains its
          Tudor character. The 20-acre gardens were designed by
          Inigo Thomas in 1891 to 1892 and are separately Grade I
          listed in the Register of Historic Parks and Gardens. The
          estate is currently owned by economist Giles Keating
          (since 2019).
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/dorset" className={linkClass}>
            Dorset
          </Link>{" "}
          and the wider{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          coast regularly, so Dorchester sits comfortably inside our
          home patch. No travel surcharges, no overnight
          accommodation, no anxious 4am drives back from the wrong
          end of the country.
        </p>
        <p>
          Athelhampton&rsquo;s reception spaces have the kind of
          period finish that doesn&rsquo;t need help. Our stage
          setup is built to dress around the room rather than fight
          it. Black-finished kit, restrained on-stage lighting
          rather than a stadium rig, and a PA sized for the room
          rather than the road. We dress in stage-blacks unless you
          ask otherwise.
        </p>
        <p>
          An Athelhampton wedding tends to pull a guest list
          that&rsquo;s travelled in from London for the weekend,
          with a strong South-coast core. The setlist flexes
          accordingly: Arctic Monkeys, The Killers and Kings of
          Leon for the late floor, Oasis and Stereophonics for the
          mid-evening, modern-pop crossover (Harry Styles, Dua Lipa,
          Sam Fender) layered through for the chart-aware younger
          guests. Wedding non-negotiables (Mr Brightside, Don&rsquo;t
          Stop Me Now, Sweet Caroline) take the back-half peaks.
          Between sets a DJ playlist (collaborated with you) keeps
          the floor moving. We learn one custom first dance per
          booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Athelhampton are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          A Grade I listed Tudor house with Grade I-listed heritage
          gardens is one of the more careful briefs we play. We
          don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the
          wedding coordinator the week before, and pace the closing
          set so it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Athelhampton and want a band that
          turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Athelhampton.",
    blurb: (
      <>
        Backbeat plays across Dorset, the New Forest and the wider
        South coast. A snapshot of other well-known wedding venues
        within about an hour of Dorchester. If yours isn&rsquo;t
        here, tell us anyway.
      </>
    ),
    list: [
      { name: "Lulworth Castle", town: "East Lulworth" },
      { name: "Mapperton", town: "Beaminster" },
      { name: "Almer Manor", town: "Wimborne" },
      { name: "Smedmore House", town: "Kimmeridge" },
      { name: "Highcliffe Castle", town: "Highcliffe" },
      { name: "Sopley Mill", town: "Christchurch" },
      { name: "Larmer Tree Gardens", town: "Tollard Royal" },
      { name: "Pylewell Park", town: "Lymington" },
    ],
  },
  cta: {
    heading: "Live music for your Athelhampton wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
