import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Highclere Castle wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed Carnarvon estate (Downton Abbey). Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const highclereCastle: VenueRecord = {
  type: "venue",
  slug: "highclere-castle",
  name: "Highclere Castle",
  countySlug: "hampshire",
  meta: {
    title: "Highclere Castle Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Highclere Castle Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Highclere Castle, Highclere, Hampshire",
    subAreas: ["Highclere", "Newbury", "Whitchurch", "Andover", "Kingsclere"],
  },
  hero: {
    eyebrow: "Highclere Castle · Highclere · Hampshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Highclere.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed Carnarvon estate
        on the Hampshire/Berkshire border. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Highclere Castle",
    heading: (
      <>
        Grade I listed. Downton Abbey.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Highclere Castle sits in north Hampshire, about five miles
          south of Newbury, on the Carnarvon family&rsquo;s 5,000-acre
          estate. The current house was largely rebuilt by Sir
          Charles Barry between 1842 and 1849 in a Jacobethan style
          he himself called Anglo-Italian. It&rsquo;s Grade I listed,
          and best known internationally as the filming location for
          ITV&rsquo;s Downton Abbey since 2010. The 8th Earl of
          Carnarvon has owned the estate since 2001.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band, so
          Highclere is effectively home turf. We cover{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/berkshire" className={linkClass}>
            Berkshire
          </Link>{" "}
          regularly, so there are no travel surcharges, no overnight
          accommodation and no anxious 4am drives back from the wrong
          end of the country.
        </p>
        <p>
          Highclere&rsquo;s reception spaces have the kind of period
          finish that doesn&rsquo;t need help. Our stage setup is
          built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather than
          the road. We dress in stage-blacks unless you ask otherwise.
        </p>
        <p>
          A Highclere wedding tends to pull a guest list that&rsquo;s
          travelled in for the weekend, with a London-and-home-counties
          crowd that knows the room. The setlist flexes accordingly:
          Arctic Monkeys, The Killers and Kings of Leon for the late
          floor, Oasis and Stereophonics for the mid-evening,
          modern-pop crossover (Harry Styles, Dua Lipa, Sam Fender)
          layered through for the chart-aware younger guests. Wedding
          non-negotiables (Mr Brightside, Don&rsquo;t Stop Me Now,
          Sweet Caroline) take the back-half peaks. Between sets a DJ
          playlist (collaborated with you) keeps the floor moving. We
          learn one custom first dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Highclere are managed by the estate&rsquo;s
          own wedding team, and they vary by booking. We don&rsquo;t
          make assumptions. We confirm the specific cut-off, limiter
          setup and any house rules with the wedding coordinator the
          week before, and pace the closing set so it lands at the
          actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Highclere Castle and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love to
          be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Highclere.",
    blurb: (
      <>
        Backbeat plays across north Hampshire, Berkshire and the
        wider Thames Valley. A snapshot of other well-known wedding
        venues within about an hour of Highclere. If yours
        isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "The Vineyard", town: "Newbury" },
      { name: "Wasing Park", town: "Aldermaston" },
      { name: "Tylney Hall", town: "Rotherwick" },
      { name: "Heckfield Place", town: "Heckfield" },
      { name: "Lainston House", town: "Winchester" },
      { name: "Avington Park", town: "Winchester" },
      { name: "Royal Berkshire Hotel", town: "Ascot" },
      { name: "Donnington Grove", town: "Newbury" },
    ],
  },
  cta: {
    heading: "Live music for your Highclere wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
