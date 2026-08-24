import Link from "next/link";

import type { CountyRecord } from "../types";

const description =
  "Berkshire wedding band Backbeat. Live indie and rock music for weddings across Reading, Newbury, Windsor and the Royal County. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const berkshire: CountyRecord = {
  type: "county",
  slug: "berkshire",
  name: "Berkshire",
  meta: {
    title: "Wedding Bands in Berkshire — Live Music From £1,900",
    description,
    ogTitle: "Wedding Bands in Berkshire — Live Music From £1,900 | Backbeat",
  },
  schema: {
    areaServed: "Berkshire",
    subAreas: [
      "Reading",
      "Newbury",
      "Windsor",
      "Maidenhead",
      "Bracknell",
      "Wokingham",
      "Ascot",
    ],
  },
  hero: {
    eyebrow: "Berkshire · Royal County · UK-wide",
    heading: (
      <>
        Wedding bands in Berkshire
        <br className="hidden sm:block" /> that lift the room.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for Royal Berkshire country estates, manor
        houses and city venues. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Berkshire",
    heading: (
      <>
        The M4 corridor
        <br />
        weekend crowd.
      </>
    ),
    body: (
      <>
        <p>
          Berkshire weddings sit inside a specific commercial
          geography. The M4 pulls one demographic west out of London
          for the weekend; the county&rsquo;s own residential belt
          (Reading, Wokingham, Newbury) adds another; and the racing
          set around Ascot and Windsor overlays a third. What the
          three have in common is a certain expectation of polish. It
          shapes how venues brief suppliers and how the closing set
          has to land.
        </p>
        <p>
          Berkshire sits comfortably inside our regular working
          radius. Reading, Newbury and Wokingham are short hops from
          base; the Thames Valley from Marlow through Henley is a
          familiar run. Same for{" "}
          <Link href="/wedding-bands/oxfordshire" className={linkClass}>
            Oxfordshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/surrey" className={linkClass}>
            Surrey
          </Link>{" "}
          on either side. The county doesn&rsquo;t sit outside our home
          patch even though it&rsquo;s not literally in it.
        </p>
        <p>
          The wedding-venue mix in Berkshire is genuinely diverse.
          Country estates like Coworth Park and Cliveden House
          anchor the top end. Racing-set hotels around Ascot and
          Sunningdale bring their own bookings. The Thames Valley
          strip from Marlow through Henley delivers riverside venues
          with a different energy again. Reading and Newbury contribute
          a more relaxed, less production-heavy layer. Each of those
          venue types calls for a different closing set: the ballroom
          at Cliveden isn&rsquo;t Bisham Abbey&rsquo;s riverside
          marquee, and the music that carries either is different.
        </p>
        <p>
          Well-known Berkshire wedding venues include Coworth Park,
          Cliveden House, Royal Berkshire Hotel, Donnington Valley,
          Stoke Park, The Vineyard, Easthampstead Park, Bisham Abbey
          and Greenlands. Coverage stretches from just over the border
          in Surrey (Beaverbrook, Great Fosters) through to just over
          the border in Buckinghamshire and Oxfordshire. If your venue
          isn&rsquo;t on that list, tell us; the county has more good
          venues than any one snapshot captures.
        </p>
        <p>
          Berkshire wedding crowds carry a strong London-commute
          skew. Guests arriving down from the City for the weekend,
          creative-industry and finance friends in the same room, a
          floor that expects the closing set to match the venue.
          Setlist-wise: Arctic Monkeys, The Killers and Kings of Leon
          for the late floor. Oasis and Stereophonics for the
          sing-along middle. Modern chart-pop crossover (Harry
          Styles, Dua Lipa, Sam Fender) layered through for the
          chart-aware younger guests. Wedding non-negotiables (Mr
          Brightside, Don&rsquo;t Stop Me Now, Sweet Caroline) hit
          the back-half peaks. Between sets a DJ playlist, agreed
          with you in advance, keeps the room moving. One custom
          first dance per booking is included.
        </p>
        <p>
          Berkshire venues carry variable curfews. Country estates
          and racing-set hotels often run firm cut-offs managed by
          in-house production teams. Thames Valley riverside venues
          sometimes inherit residential cut-offs from local planning
          conditions. Rules get confirmed with the coordinator
          before the day rather than assumed, and the closing set
          gets paced accordingly.
        </p>
        <p>
          If you&rsquo;re planning a Berkshire wedding and want a band
          that reads the room the venue&rsquo;s brought together, send
          the date and venue.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Berkshire venues",
    heading: "Berkshire wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Berkshire wedding venues, from Royal County
        country estates to Thames Valley riverside hotels. We&rsquo;re
        Hampshire-based and travel across the county and beyond. If
        yours isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
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
    ],
  },
  cta: {
    heading: "Live music for your Berkshire wedding.",
    body: (
      <>
        Send us the date and venue. We&rsquo;ll reply with availability and
        pricing within 24 hours.
      </>
    ),
  },
  faqs: [
    {
      q: "How does a Berkshire wedding brief typically differ from a Hampshire one?",
      a: "Berkshire venues sit in a more production-managed and London-corporate context on average. Country estates like Cliveden and Coworth Park come with in-house production teams and firm cut-offs. Hampshire tends to run slightly more permissive at the country-house end. Neither is harder or easier to play; the coordinator setup is just different.",
    },
    {
      q: "What are M4 traffic implications for a Berkshire wedding load-in?",
      a: "M4 westbound on a Friday afternoon and eastbound on a Sunday afternoon can add 45-90 minutes to standard drive times. Suppliers who don't factor this into load-in schedules routinely arrive later than they'd planned. It's worth building buffer time into the day's schedule, particularly for country-estate venues with strict load-in windows.",
    },
    {
      q: "How do sound-limiter rules typically look at the Thames Valley venues?",
      a: "Marlow, Henley and Cookham riverside venues sit inside residential belts that carry their own planning conditions. Curfews and dB limits vary venue-by-venue. Country-estate venues away from the river (Cliveden, Coworth Park) tend to run under more permissive rules. Confirm with the coordinator ahead of the day.",
    },
    {
      q: "Which Berkshire sub-areas book most heavily for weddings?",
      a: "The strongest concentrations sit around Ascot, Sunningdale and Windsor (racing-set and country-estate venues), the Thames Valley strip from Marlow through Henley, and the Reading-Wokingham commuter belt. Newbury and the western county pull a slightly more relaxed booking pattern.",
    },
    {
      q: "How does a London-commute guest list shape the setlist?",
      a: "Guests travelling out from the City for the weekend often bring chart-aware musical expectations. Modern crossover (Harry Styles, Dua Lipa, Sam Fender) tends to land well in the mid-evening alongside the indie/rock backbone. Wedding non-negotiables still hit the back-half peaks. Full set list is on the repertoire page.",
    },
  ],
};
