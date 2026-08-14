import Link from "next/link";

import type { CountyRecord } from "../types";

const description =
  "East Devon wedding band Backbeat. Live indie and rock for Exeter, Honiton and Jurassic Coast weddings. Powderham Castle, Combe House, Pynes House. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const eastDevon: CountyRecord = {
  type: "county",
  slug: "east-devon",
  name: "East Devon",
  meta: {
    title: "Wedding Bands in East Devon — Live Music From £1,900",
    description,
    ogTitle: "Wedding Bands in East Devon — Live Music From £1,900 | Backbeat",
  },
  schema: {
    areaServed: "East Devon",
    subAreas: [
      "Exeter",
      "Honiton",
      "Sidmouth",
      "Exmouth",
      "Beer",
      "Seaton",
      "Ottery St Mary",
    ],
  },
  hero: {
    eyebrow: "East Devon · Jurassic Coast · UK-wide",
    heading: (
      <>
        Wedding bands
        <br className="hidden sm:block" /> in East Devon.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for Powderham Castle, Combe House and the
        Jurassic Coast country-house circuit. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · East Devon",
    heading: (
      <>
        From Powderham Castle
        <br />
        to the Jurassic Coast.
      </>
    ),
    body: (
      <>
        <p>
          East Devon delivers one of the most under-rated wedding
          briefs in the South West. The area covers historic-estate
          venues across the wider county, design-led country houses
          inland, Jurassic Coast hotels along the seafront, and the
          Exeter city-and-cathedral wedding belt. Powderham Castle,
          Combe House, The Pig at Combe, Pynes House, Cadhay,
          Larkbeare Grange and Exeter Castle are all regularly
          booked across the county.
        </p>
        <p>
          Backbeat is a Hampshire-based band, and East Devon sits at the
          edge of our regular touring radius (around two hours from
          Southampton). We also play{" "}
          <Link href="/wedding-bands/dorset" className={linkClass}>
            Dorset
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/somerset" className={linkClass}>
            Somerset
          </Link>{" "}
          regularly, so the South West corridor is genuinely home turf. We
          add a small travel allowance for East Devon dates honestly up
          front, and most weddings sit comfortably inside a same-day
          there-and-back trip.
        </p>
        <p>
          The county splits roughly into four wedding-venue types:
          historic-estate weddings, design-led country houses,
          Jurassic Coast hotels and beach venues, and the Exeter
          city-and-cathedral wedding circuit. Each has its own
          rhythm. A country-estate marquee evening is a different
          room to a coastal-hotel dinner, and the set list,
          lighting rig and stage volume flex around which one
          you&rsquo;ve booked.
        </p>
        <p>
          East Devon has a logistical layer most couples
          don&rsquo;t expect. Country-estate venues carry their own
          gated drives and delivery windows, often on single-track
          Devon lanes. Coastal hotels can have load-in routes that
          go through public seafront access. Accommodation around
          the wedding belt books out a year ahead in summer. We
          confirm the specific load-in plan with the coordinator
          ahead of time rather than learning it on the night.
        </p>
        <p>
          East Devon wedding crowds tend to be a hybrid: West
          Country locals, London weekend guests pulling out of the
          city by Friday afternoon, and multi-generational
          families. The setlist flexes accordingly: Arctic Monkeys,
          The Killers and Kings of Leon for the late floor, Oasis
          and Stereophonics for the mid-evening, modern-pop
          crossover (Harry Styles, Dua Lipa, Sam Fender) layered
          through for the chart-aware younger guests. Wedding
          non-negotiables (Mr Brightside, Don&rsquo;t Stop Me Now,
          Sweet Caroline) take the back-half peaks. Between sets a
          DJ playlist (collaborated with you) keeps the floor
          moving. We learn one custom first dance per booking.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across East
          Devon. Cathedral-close, town-centre and seafront-residential
          venues typically run earlier cut-offs from local planning
          conditions. Country-estate and private-land venues often
          allow later finishes, but every venue has its own rules,
          in-house limiters or coordinator-managed arrangements. We
          confirm the specific cut-off and any sound restrictions
          with the venue the week before, and pace the closing set
          so it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re planning an East Devon wedding and want a band
          that treats the drive west as part of the job rather than an
          obstacle, send us your date and venue. We&rsquo;ll come back
          within 24 hours.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "East Devon venues",
    heading: "East Devon wedding venues.",
    blurb: (
      <>
        A snapshot of well-known East Devon wedding venues, from historic
        estates to design-led country houses and Jurassic Coast hotels.
        We&rsquo;re Hampshire-based and travel across East Devon end to
        end. If yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Powderham Castle", town: "Kenton" },
      { name: "Combe House", town: "Gittisham" },
      { name: "The Pig at Combe", town: "Honiton" },
      { name: "Pynes House", town: "Exeter" },
      { name: "Cadhay", town: "Ottery St Mary" },
      { name: "Larkbeare Grange", town: "Talaton" },
      { name: "Deer Park Country House", town: "Honiton" },
      { name: "Otterhead House", town: "Churchstanton" },
      { name: "The Salutation Inn", town: "Topsham" },
      { name: "Westcliff Hall", town: "Sidmouth" },
      { name: "Wood Barton", town: "Farway" },
      { name: "Exeter Castle", town: "Exeter" },
    ],
  },
  cta: {
    heading: "Live music for your East Devon wedding.",
    body: (
      <>
        Send us the date and venue. We&rsquo;ll come back with availability
        and a tailored quote within 24 hours.
      </>
    ),
  },
};
