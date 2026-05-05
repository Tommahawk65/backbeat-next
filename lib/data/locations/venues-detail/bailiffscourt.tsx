import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Bailiffscourt wedding band Backbeat. Live indie and rock for weddings at the Historic Sussex Hotels country property near Climping, on the West Sussex coast. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const bailiffscourt: VenueRecord = {
  type: "venue",
  slug: "bailiffscourt",
  name: "Bailiffscourt",
  countySlug: "west-sussex",
  meta: {
    title: "Bailiffscourt Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Bailiffscourt Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Bailiffscourt, Climping, West Sussex",
    subAreas: ["Climping", "Littlehampton", "Arundel", "Bognor Regis", "Worthing"],
  },
  hero: {
    eyebrow: "Bailiffscourt · Climping · West Sussex",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Bailiffscourt.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the country house and spa near
        the West Sussex coast at Climping. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Bailiffscourt",
    heading: (
      <>
        West Sussex coast.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Bailiffscourt sits at Climping on the West Sussex coast,
          a few minutes&rsquo; walk from the beach between Bognor
          Regis and Littlehampton. It runs as a country house hotel
          and spa under Historic Sussex Hotels.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/west-sussex" className={linkClass}>
            West Sussex
          </Link>{" "}
          and the South coast regularly, so Climping sits comfortably
          inside our home patch. No travel surcharges, no overnight
          accommodation, no anxious 4am drives back from the wrong
          end of the country.
        </p>
        <p>
          Bailiffscourt&rsquo;s reception spaces have the kind of
          country-house finish that doesn&rsquo;t need help. Our
          stage setup is built to dress around the room rather than
          fight it. Black-finished kit, restrained on-stage lighting
          rather than a stadium rig, and a PA sized for the room
          rather than the road. We dress in stage-blacks unless you
          ask otherwise.
        </p>
        <p>
          A Bailiffscourt wedding tends to pull a guest list
          that&rsquo;s travelled in for the weekend, with a strong
          London-and-South-coast core. The setlist flexes
          accordingly: Arctic Monkeys, The Killers and Kings of Leon
          for the late floor, Oasis and Stereophonics for the
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
          arrangements at Bailiffscourt are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          We don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the wedding
          coordinator the week before, and pace the closing set so
          it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Bailiffscourt and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Bailiffscourt.",
    blurb: (
      <>
        Backbeat plays across Sussex, Hampshire and the wider South
        coast. A snapshot of other well-known wedding venues within
        about an hour of Climping. If yours isn&rsquo;t here, tell
        us anyway.
      </>
    ),
    list: [
      { name: "Arundel Castle", town: "Arundel" },
      { name: "Goodwood House", town: "Chichester" },
      { name: "Amberley Castle", town: "Amberley" },
      { name: "Cowdray House", town: "Midhurst" },
      { name: "Wiston House", town: "Steyning" },
      { name: "South Lodge", town: "Lower Beeding" },
      { name: "Tinwood Estate", town: "Halnaker" },
      { name: "Farbridge", town: "West Dean" },
    ],
  },
  cta: {
    heading: "Live music for your Bailiffscourt wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
