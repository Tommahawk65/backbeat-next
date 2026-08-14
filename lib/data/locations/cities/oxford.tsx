import Link from "next/link";

import type { CityRecord } from "../types";

const description =
  "Oxford wedding band Backbeat. Live indie and rock for Wolfson, Worcester, Magdalen and the Oxford college and city wedding circuit. Five-star reviews. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const oxford: CityRecord = {
  type: "city",
  countySlug: "oxfordshire",
  slug: "oxford",
  name: "Oxford",
  meta: {
    title: "Wedding Bands in Oxford — Live Music From £1,900",
    description,
    ogTitle: "Wedding Bands in Oxford — Live Music From £1,900 | Backbeat",
  },
  schema: {
    areaServed: "Oxford",
    subAreas: [
      "Oxford city",
      "Jericho",
      "Summertown",
      "Headington",
      "Cowley",
      "Iffley",
      "North Oxford",
    ],
  },
  hero: {
    eyebrow: "Oxford · Oxfordshire · Colleges",
    heading: (
      <>
        Wedding bands in Oxford
        <br className="hidden sm:block" /> the colleges have already booked.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for Wolfson, Worcester, Magdalen and the
        Oxford college and city wedding circuit. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Oxford",
    heading: (
      <>
        From college quads
        <br />
        to townhall ballrooms.
      </>
    ),
    body: (
      <>
        <p>
          Oxford is one of the most distinctive wedding cities in the
          country. The area covers the college circuit, city-civic
          venues, central city hotels, and the relaxed-and-leafy
          Iffley and North Oxford end. Wolfson, Worcester, Magdalen,
          Trinity and Christ Church Colleges, Oxford Town Hall, the
          Castle, the Story Museum and The Randolph are all regularly
          booked across the area.
        </p>
        <p>
          Backbeat has played at Wolfson College, Oxford (five-star review
          from Anthony &amp; Timothy on the homepage). We&rsquo;re a
          Hampshire-based band, so the drive into Oxford is a comfortable
          hour or so. We play{" "}
          <Link href="/wedding-bands/oxfordshire" className={linkClass}>
            Oxfordshire
          </Link>{" "}
          end to end, and also cover{" "}
          <Link href="/wedding-bands/cheltenham" className={linkClass}>
            Cheltenham
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/reading" className={linkClass}>
            Reading
          </Link>{" "}
          regularly. No travel surcharges, no overnight accommodation, no
          anxious 4am drive back from anywhere.
        </p>
        <p>
          Oxford wedding venues split roughly into three types: college
          weddings, city-civic venues, and city hotels. Each has its
          own rhythm. A college quad marquee is a different evening to
          a Town Hall ballroom, and the set list, lighting rig and
          stage volume flex around which one you&rsquo;ve booked.
        </p>
        <p>
          Oxford has a logistical layer most couples don&rsquo;t expect.
          The city centre and college quarter sit inside
          heritage-protected pedestrian and residential streets with
          tighter vehicle access. College venues each carry their own
          load-in arrangements through their events team. City-centre
          traffic on a Friday afternoon shapes when suppliers actually
          arrive. We confirm the specific load-in plan with the
          coordinator ahead of time rather than learning it on the
          night.
        </p>
        <p>
          Oxford wedding crowds are musically wide-open: global guests
          at college weddings, multi-generational families at city
          venues, and friend groups that range from City lawyers to
          choral scholars. The setlist flexes accordingly: Arctic
          Monkeys, The Killers and Kings of Leon for the late floor,
          Oasis and Stereophonics for the mid-evening, modern-pop
          crossover (Harry Styles, Dua Lipa, Sam Fender) layered
          through for the chart-aware younger guests. Wedding
          non-negotiables (Mr Brightside, Don&rsquo;t Stop Me Now,
          Sweet Caroline) take the back-half peaks. Between sets a DJ
          playlist (collaborated with you) keeps the floor moving. We
          learn one custom first dance per booking.
        </p>
        <p>
          Curfews and sound limits vary venue by venue across Oxford.
          City-centre and heritage-protected venues typically run
          earlier cut-offs from local planning conditions. City hotels
          and private-land venues often allow later finishes, but
          every venue has its own rules, in-house limiters or
          coordinator-managed arrangements. We confirm the specific
          cut-off and any sound restrictions with the venue the week
          before, and pace the closing set so it lands at the actual
          end of the night.
        </p>
        <p>
          If you&rsquo;re planning an Oxford wedding and want a band that
          turns up briefed for the specific college (or the specific
          venue) and reads the room properly, send us your date.
          We&rsquo;d love to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Oxford venues",
    heading: "Oxford wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Oxford wedding venues, from college quads
        and halls to city-civic rooms and central hotels. We&rsquo;re
        Hampshire-based and travel into Oxford regularly. If yours
        isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Wolfson College", town: "North Oxford" },
      { name: "Worcester College", town: "Oxford" },
      { name: "Magdalen College", town: "Oxford" },
      { name: "Trinity College", town: "Oxford" },
      { name: "Christ Church", town: "Oxford" },
      { name: "Oxford Town Hall", town: "Oxford" },
      { name: "Oxford Castle", town: "Oxford" },
      { name: "The Story Museum", town: "Oxford" },
      { name: "The Randolph (Macdonald)", town: "Oxford" },
      { name: "Old Bank Hotel", town: "Oxford" },
    ],
  },
  cta: {
    heading: "Live music for your Oxford wedding.",
    body: (
      <>
        Send us the date and venue. We&rsquo;ll come back with availability
        and a tailored quote within 24 hours.
      </>
    ),
  },
};
