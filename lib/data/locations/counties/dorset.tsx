import Link from "next/link";

import type { CountyRecord } from "../types";

const description =
  "Dorset wedding band Backbeat. Live indie and rock music for coastal, country house and barn weddings across Bournemouth, Poole, Dorchester and beyond. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const dorset: CountyRecord = {
  type: "county",
  slug: "dorset",
  name: "Dorset",
  meta: {
    title: "Wedding Bands in Dorset — Live Music From £1,900",
    description,
    ogTitle: "Wedding Bands in Dorset — Live Music From £1,900 | Backbeat",
  },
  schema: {
    areaServed: "Dorset",
    subAreas: [
      "Bournemouth",
      "Poole",
      "Christchurch",
      "Dorchester",
      "Sherborne",
      "Wareham",
      "Weymouth",
    ],
  },
  hero: {
    eyebrow: "Dorset · Jurassic Coast · UK-wide",
    heading: (
      <>
        Wedding bands in Dorset
        <br className="hidden sm:block" /> with the soundtrack to match.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for coastal weddings, country houses and
        converted barns across Dorset. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Dorset",
    heading: (
      <>
        Landscape sets the brief
        <br />
        in Dorset.
      </>
    ),
    body: (
      <>
        <p>
          Dorset is one of the more landscape-driven wedding counties
          in the country. The Jurassic Coast pulls one kind of couple
          toward clifftop and coastal-castle ceremonies. The
          Blackmore Vale pulls another toward country barns and rural
          farm venues. The Christchurch and Poole harbour strip
          delivers something different again. The landscape itself
          shapes the room the band plays into.
        </p>
        <p>
          Dorset sits comfortably inside our regular working radius.
          Bournemouth, Poole and Christchurch are short hops from
          base; the Dorchester and Sherborne belt is a longer but
          familiar run. Same for{" "}
          <Link href="/wedding-bands/wiltshire" className={linkClass}>
            Wiltshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          on either side. Coastal weddings and Vale barn weddings
          both fall inside our normal season pattern rather than
          outside it.
        </p>
        <p>
          Coastal wedding venues in Dorset carry a specific set of
          practicalities that inland venues don&rsquo;t. Weather
          contingencies matter more (Lulworth on a September Saturday
          is not Lulworth on a June one). Load-in routes are often
          shared with public seafront or car park access. Marquee
          weddings on cliff-side estates get their own wind
          considerations. Country estates and Vale barns run under
          different rules: private grounds, gated drives, generally
          more permissive on curfew but tighter on single-track access.
        </p>
        <p>
          Well-known Dorset wedding venues include Lulworth Castle,
          Highcliffe Castle, Athelhampton House, Sopley Mill, Upton
          Country House, Bournemouth Highcliff Marriott, Deans Court,
          Kingston Country Courtyard and the Blackmore Vale barn
          circuit. Coverage stretches from the New Forest edge
          (Rhinefield, The Master Builder&rsquo;s) through to just
          over the Somerset border. If your venue isn&rsquo;t on that
          list, tell us.
        </p>
        <p>
          Dorset wedding crowds tend to span more generations than
          many county averages. Local couples pulling extended family
          from the wider Wessex catchment, plus university friends
          down from London for the long weekend. The music has to
          land across that spread. Arctic Monkeys, Kings of Leon and
          The Killers for the late floor. Oasis and Stereophonics for
          the sing-along middle. Modern chart-pop crossover (Harry
          Styles, Dua Lipa, Sam Fender) layered through for the
          younger contingent. Wedding non-negotiables (Mr Brightside,
          Don&rsquo;t Stop Me Now, Sweet Caroline) hit the back-half
          peaks. Between sets a DJ playlist, agreed with you in
          advance, keeps the room moving. One custom first dance per
          booking is included.
        </p>
        <p>
          Sound limits vary meaningfully across the county. Coastal
          hotels in Bournemouth and Poole with residential neighbours
          typically run earlier cut-offs. Private-land country
          estates and Vale barns often allow later finishes. Marquee
          setups on cliffside private land can go later still but
          bring their own weather constraints. These get confirmed
          with the coordinator ahead of time rather than assumed from
          the postcode.
        </p>
        <p>
          If you&rsquo;re planning a Dorset wedding and want a band
          that reads the landscape as part of the brief rather than
          ignoring it, send the date and venue.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Dorset venues",
    heading: "Dorset wedding venues.",
    blurb: (
      <>
        A snapshot of well-known Dorset wedding venues, from coastal
        castles to Blackmore Vale barns. We&rsquo;re Hampshire-based and
        travel across the county and beyond. If yours isn&rsquo;t here,
        tell us anyway.
      </>
    ),
    list: [
      { name: "Lulworth Castle", town: "Wareham" },
      { name: "Highcliffe Castle", town: "Christchurch" },
      { name: "Athelhampton House", town: "Dorchester" },
      { name: "Sopley Mill", town: "Christchurch" },
      { name: "Upton Country House", town: "Poole" },
      { name: "Hamoon Wedding Barn", town: "Sturminster Newton" },
      { name: "Lulworth Cove", town: "West Lulworth" },
      { name: "The Grange at Oborne", town: "Sherborne" },
      { name: "Larmer Tree Gardens", town: "Tollard Royal" },
      { name: "Plush Manor", town: "Piddletrenthide" },
      { name: "Stock Gaylard House", town: "Sturminster Newton" },
      { name: "Captain's Club Hotel", town: "Christchurch" },
    ],
  },
  cta: {
    heading: "Live music for your Dorset wedding.",
    body: (
      <>
        We reply to most enquiries within 24 hours with availability and a
        tailored quote.
      </>
    ),
  },
  faqs: [
    {
      q: "What's different about a coastal Dorset wedding compared to an inland one?",
      a: "Coastal weddings carry weather contingencies, shared public-access load-in routes and wind considerations for marquee setups. Inland country-estate and Blackmore Vale barn weddings sit under different rules: private grounds, gated drives, generally more permissive curfews but tighter single-track access. Same county, meaningfully different logistics.",
    },
    {
      q: "How does the Jurassic Coast setting shape a wedding day's music?",
      a: "The visual drama of clifftop and coastal-castle ceremonies tends to set an expectation for a more theatrical closing set. Guests who've travelled for the setting are usually up for a bigger dance floor. That doesn't change the setlist so much as the sense of moment behind it.",
    },
    {
      q: "Which Dorset sub-areas book most heavily for weddings?",
      a: "The strongest concentrations sit around Bournemouth and Christchurch (harbour hotels), the Jurassic Coast strip (Lulworth, Highcliffe), the Dorchester and Sherborne belt (country manor houses) and the Blackmore Vale barn circuit. Each sub-area has its own booking pattern and coordinator style.",
    },
    {
      q: "How much of a Dorset wedding guest list travels versus stays local?",
      a: "Dorset weddings typically pull a more geographically spread guest list than similar-size counties. Local Wessex families, London weekend guests and university friends often mix in roughly equal proportions. The setlist has to flatter across generations more than in urban-centred weddings.",
    },
    {
      q: "Do you cover the New Forest edge that overlaps with Dorset?",
      a: "Yes. Venues on the New Forest edge (Rhinefield, The Master Builder's, Careys Manor) sit as easily inside Dorset booking geography as they do inside Hampshire's. The drive from our base to Brockenhurst or Beaulieu is 20-30 minutes; the Dorset coast adds another 45-60 minutes on top.",
    },
  ],
};
