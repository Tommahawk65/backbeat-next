import Link from "next/link";

import type { CountyRecord } from "../types";

const description =
  "Wiltshire wedding band Backbeat. Live indie and rock music for manor house and country estate weddings across Salisbury, Marlborough and beyond. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const wiltshire: CountyRecord = {
  type: "county",
  slug: "wiltshire",
  name: "Wiltshire",
  meta: {
    title: "Wedding Bands in Wiltshire — Live Music From £1,900",
    description,
    ogTitle: "Wedding Bands in Wiltshire — Live Music From £1,900 | Backbeat",
  },
  schema: {
    areaServed: "Wiltshire",
    subAreas: [
      "Salisbury",
      "Marlborough",
      "Devizes",
      "Trowbridge",
      "Chippenham",
      "Bradford-on-Avon",
      "Tisbury",
    ],
  },
  hero: {
    eyebrow: "Wiltshire · Salisbury Plain · UK-wide",
    heading: (
      <>
        Wedding bands in Wiltshire
        <br className="hidden sm:block" /> for manor houses and big nights.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for Wiltshire country estates, gardens and
        manor weddings. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Wiltshire",
    heading: (
      <>
        Manor weddings,
        <br />
        played properly.
      </>
    ),
    body: (
      <>
        <p>
          Wiltshire weddings tend to be quietly grand. Country estates,
          walled-garden venues, listed country churches, marquees on
          lawns that have been there for 300 years. The aesthetic is
          restrained; the dance floor expectation is anything but.
          Lucknam Park, Bowood House, Whatley Manor, Trafalgar Park,
          Iford Manor, Pythouse Kitchen Garden and Stourhead are all
          regularly booked across the county.
        </p>
        <p>
          Backbeat plays the moment a Wiltshire wedding tips from elegant
          dinner to full reception. We&rsquo;re a Hampshire-based band with
          regular Wiltshire bookings: Salisbury, Marlborough,
          Bradford-on-Avon. We also cover{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>
          ,{" "}
          <Link href="/wedding-bands/dorset" className={linkClass}>
            Dorset
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/oxfordshire" className={linkClass}>
            Oxfordshire
          </Link>{" "}
          regularly, so we know the typical curfew patterns at country
          estates and how to set up cleanly in venues where the wedding
          coordinator has every right to ask you to be invisible until 8pm.
        </p>
        <p>
          The county splits roughly into four wedding-venue types:
          country estates, walled-garden venues, listed
          church-and-marquee combinations across the Salisbury Plain,
          and the Bradford-on-Avon and Tisbury small-village belt
          where the venue is often a private home with a marquee on
          the lawn. We brief differently for each. A 250-guest
          sit-down country-estate wedding is a different evening to a
          120-guest marquee on private grounds, and the set list,
          lighting rig and stage volume flex around which one
          you&rsquo;ve booked.
        </p>
        <p>
          Wiltshire wedding crowds skew slightly older than the
          home-counties set. Parents-of-the-bride generation arriving
          with strong opinions on the late-90s indie back-catalogue
          alongside university friends who want the indie spine. The
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
          Marquee weddings on private estates are a particular
          Wiltshire theme. Power, access and weather all need
          attention, and the coordinator has often built the entire
          wedding from the field up. We arrive earlier than scheduled,
          bring redundant electrics where the venue calls for it, and
          run load-in cleanly enough that the rest of the supplier
          list doesn&rsquo;t notice we&rsquo;re there until
          soundcheck.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across
          Wiltshire. Town-centre and residential-neighbour venues
          typically run earlier cut-offs from local planning
          conditions. Country-estate and private-grounds venues often
          allow later finishes, but every venue has its own rules,
          in-house limiters or coordinator-managed arrangements. We
          confirm the specific cut-off and any sound restrictions
          with the venue the week before, and pace the closing set so
          it lands at the actual end of the night.
        </p>
        <p>
          For Wiltshire couples after a band that turns up properly
          briefed and leaves the dance floor empty only because
          everyone&rsquo;s already left for the bar, we&rsquo;d love to
          hear from you.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Wiltshire venues",
    heading: "Wiltshire wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Wiltshire wedding venues, from country
        estates to walled gardens and private-estate marquees. We&rsquo;re
        Hampshire-based and travel across the county and beyond. If
        yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Lucknam Park", town: "Colerne" },
      { name: "Whatley Manor", town: "Malmesbury" },
      { name: "Bowood House", town: "Calne" },
      { name: "Trafalgar Park", town: "Salisbury" },
      { name: "The Beechwood", town: "Salisbury" },
      { name: "Pythouse Kitchen Garden", town: "Tisbury" },
      { name: "Iford Manor", town: "Bradford-on-Avon" },
      { name: "The Tythe Barn", town: "Marlborough" },
      { name: "Manor by the Lake", town: "near Cirencester" },
      { name: "Salisbury Cathedral", town: "Salisbury" },
      { name: "The Compasses Inn", town: "Tisbury" },
      { name: "Stourhead", town: "Mere" },
    ],
  },
  cta: {
    heading: "Live music for your Wiltshire wedding.",
    body: (
      <>
        Tell us your date and venue. We&rsquo;ll come back with
        availability and a tailored quote.
      </>
    ),
  },
};
