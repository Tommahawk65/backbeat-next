import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Lillibrooke Manor wedding band Backbeat. Live indie and rock for exclusive-use weddings at the Grade II-listed 15th-century estate near Maidenhead, Berkshire. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const lillibrookeManor: VenueRecord = {
  type: "venue",
  slug: "lillibrooke-manor",
  name: "Lillibrooke Manor",
  countySlug: "berkshire",
  meta: {
    title: "Lillibrooke Manor Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Lillibrooke Manor Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Lillibrooke Manor, Cox Green, Maidenhead, Berkshire",
    subAreas: ["Cox Green", "Maidenhead", "Bray", "Windsor", "Twyford"],
  },
  hero: {
    eyebrow: "Lillibrooke Manor · Maidenhead · Berkshire",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Lillibrooke Manor.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade II-listed 15th-century
        estate at Cox Green, Maidenhead. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Lillibrooke Manor",
    heading: (
      <>
        15th century. Exclusive use. 15 acres.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Lillibrooke Manor sits on Ockwells Road at Cox Green,
          Maidenhead, in Berkshire. The Grade II-listed manor is
          a 15th-century estate set in 15 acres. The wedding offering
          runs on an exclusive-use basis across the Manor House,
          the Tack Barn and Cottage Room (preparation), the Cloister
          Courtyard, the Manor House Garden, the Small Barn, the
          Great Barn and the Engine Room. On-site accommodation runs
          through the Manor House.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/berkshire" className={linkClass}>
            Berkshire
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/buckinghamshire" className={linkClass}>
            Buckinghamshire
          </Link>{" "}
          regularly, so Maidenhead sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation,
          no anxious 4am drives back from the wrong end of the
          country.
        </p>
        <p>
          Lillibrooke&rsquo;s reception spaces are a mix of period
          manor interiors and timber-framed barns. Our stage setup
          is built to dress around the room rather than fight it.
          Black-finished kit, restrained on-stage lighting rather
          than a stadium rig, and a PA sized for the room rather
          than the road. We dress in stage-blacks unless you ask
          otherwise.
        </p>
        <p>
          A Lillibrooke wedding tends to pull a guest list
          that&rsquo;s travelled in from London for the weekend,
          with a strong home-counties core. The setlist flexes
          accordingly: Arctic Monkeys, The Killers and Kings of
          Leon for the late floor, Oasis and Stereophonics for the
          mid-evening, modern-pop crossover (Harry Styles, Dua
          Lipa, Sam Fender) layered through for the chart-aware
          younger guests. Wedding non-negotiables (Mr Brightside,
          Don&rsquo;t Stop Me Now, Sweet Caroline) take the back-
          half peaks. Between sets a DJ playlist (collaborated with
          you) keeps the floor moving. We learn one custom first
          dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Lillibrooke are managed by the
          venue&rsquo;s own wedding team, and they vary by booking.
          We don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the wedding
          coordinator the week before, and pace the closing set so
          it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Lillibrooke Manor and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Lillibrooke.",
    blurb: (
      <>
        Backbeat plays across Berkshire, Buckinghamshire and the
        wider Thames Valley. A snapshot of other well-known wedding
        venues within about an hour of Maidenhead. If yours
        isn&rsquo;t here, tell us anyway.
      </>
    ),
    list: [
      { name: "Cliveden House", town: "Taplow" },
      { name: "Hedsor House", town: "Taplow" },
      { name: "Oakley Court", town: "Windsor" },
      { name: "Coworth Park", town: "Sunningdale" },
      { name: "Royal Berkshire Hotel", town: "Ascot" },
      { name: "Pennyhill Park", town: "Bagshot" },
      { name: "The Compleat Angler", town: "Marlow" },
      { name: "Danesfield House", town: "Marlow" },
    ],
  },
  cta: {
    heading: "Live music for your Lillibrooke wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
