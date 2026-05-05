import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Smedmore House wedding band Backbeat. Live indie and rock for exclusive-use weddings at the Mansel family Georgian house on the Jurassic Coast at Kimmeridge, Dorset. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const smedmoreHouse: VenueRecord = {
  type: "venue",
  slug: "smedmore-house",
  name: "Smedmore House",
  countySlug: "dorset",
  meta: {
    title: "Smedmore House Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Smedmore House Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Smedmore House, Kimmeridge, Dorset",
    subAreas: ["Kimmeridge", "Wareham", "Corfe Castle", "Swanage", "Wool"],
  },
  hero: {
    eyebrow: "Smedmore House · Kimmeridge · Dorset",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Smedmore House.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Mansel family Georgian house
        on the Jurassic Coast at Kimmeridge. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Smedmore House",
    heading: (
      <>
        Georgian house. Walled flower gardens.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Smedmore House sits at Kimmeridge on the Jurassic Coast
          in south Dorset. The 18th-century Georgian house is
          privately owned by the Mansel family and runs on an
          exclusive-use basis. Accommodation runs through eight
          double bedrooms in the main house, three doubles in the
          Garden Wing and a Penthouse Flat (used as the bridal
          suite), with capacity for around 24 overnight guests. The
          grounds include two acres of walled flower gardens and a
          Mediterranean garden.
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
          coast regularly, so Kimmeridge sits comfortably inside our
          home patch. No travel surcharges, no overnight
          accommodation, no anxious 4am drives back from the wrong
          end of the country.
        </p>
        <p>
          Smedmore&rsquo;s reception spaces have the kind of
          Georgian-period finish that doesn&rsquo;t need help. Our
          stage setup is built to dress around the room rather than
          fight it. Black-finished kit, restrained on-stage lighting
          rather than a stadium rig, and a PA sized for the room
          rather than the road. We dress in stage-blacks unless you
          ask otherwise.
        </p>
        <p>
          A Smedmore wedding tends to pull a guest list that&rsquo;s
          travelled in for the weekend, with a strong London-and-
          South-coast core. The setlist flexes accordingly: Arctic
          Monkeys, The Killers and Kings of Leon for the late floor,
          Oasis and Stereophonics for the mid-evening, modern-pop
          crossover (Harry Styles, Dua Lipa, Sam Fender) layered
          through for the chart-aware younger guests. Wedding
          non-negotiables (Mr Brightside, Don&rsquo;t Stop Me Now,
          Sweet Caroline) take the back-half peaks. Between sets a
          DJ playlist (collaborated with you) keeps the floor moving.
          We learn one custom first dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Smedmore are managed by the family&rsquo;s
          own wedding team, and they vary by booking. A privately-
          owned coastal estate is one of the more careful briefs we
          play. We don&rsquo;t make assumptions. We confirm the
          specific cut-off, limiter setup and any house rules with
          the wedding coordinator the week before, and pace the
          closing set so it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Smedmore House and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Smedmore.",
    blurb: (
      <>
        Backbeat plays across Dorset, the New Forest and the wider
        South coast. A snapshot of other well-known wedding venues
        within about an hour of Kimmeridge. If yours isn&rsquo;t
        here, tell us anyway.
      </>
    ),
    list: [
      { name: "Lulworth Castle", town: "East Lulworth" },
      { name: "Athelhampton", town: "Dorchester" },
      { name: "Almer Manor", town: "Wimborne" },
      { name: "Mapperton", town: "Beaminster" },
      { name: "Sopley Mill", town: "Christchurch" },
      { name: "Highcliffe Castle", town: "Highcliffe" },
      { name: "Larmer Tree Gardens", town: "Tollard Royal" },
      { name: "Pylewell Park", town: "Lymington" },
    ],
  },
  cta: {
    heading: "Live music for your Smedmore House wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
