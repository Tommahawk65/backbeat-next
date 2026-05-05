import Link from "next/link";

import type { VenueRecord } from "../types";

const description =
  "Arundel Castle wedding band Backbeat. Live indie and rock for weddings at the Grade I-listed Duke of Norfolk's seat in West Sussex. Founded 1067. Packages from £1,900.";

const linkClass =
  "underline decoration-zinc-300 underline-offset-4 transition hover:text-accent hover:decoration-accent";

export const arundelCastle: VenueRecord = {
  type: "venue",
  slug: "arundel-castle",
  name: "Arundel Castle",
  countySlug: "west-sussex",
  meta: {
    title: "Arundel Castle Wedding Band | Live Music From £1,900",
    description,
    ogTitle: "Arundel Castle Wedding Band | Backbeat. From £1,900",
  },
  schema: {
    areaServed: "Arundel Castle, Arundel, West Sussex",
    subAreas: ["Arundel", "Littlehampton", "Worthing", "Chichester", "Bognor Regis"],
  },
  hero: {
    eyebrow: "Arundel Castle · Arundel · West Sussex",
    heading: (
      <>
        A wedding band
        <br className="hidden sm:block" /> for Arundel Castle.
      </>
    ),
    subhead: (
      <>
        Live indie &amp; rock for the Grade I-listed Duke of
        Norfolk&rsquo;s seat in West Sussex. From{" "}
        <span className="font-semibold text-white">£1,900</span>.
      </>
    ),
  },
  intro: {
    eyebrow: "Wedding band · Arundel Castle",
    heading: (
      <>
        Founded 1067. Howard family seat.
        <br />
        One serious dance floor.
      </>
    ),
    body: (
      <>
        <p>
          Arundel Castle sits at Arundel in West Sussex. It was
          founded in around 1067 by Roger de Montgomery, 1st Earl of
          Arundel, and is Grade I listed. The castle has been the
          seat of the Howard family (Dukes of Norfolk) since 1555,
          when Mary FitzAlan married Thomas Howard, 4th Duke of
          Norfolk. The Collector&rsquo;s Earl Garden, designed by
          Isabel and Julian Bannerman, opened in 2008 and includes
          Oberon&rsquo;s Palace pavilion and a wild water garden
          around the medieval friary ponds.
        </p>
        <p>
          We&rsquo;re a Hampshire-based live wedding band that covers{" "}
          <Link href="/wedding-bands/west-sussex" className={linkClass}>
            West Sussex
          </Link>{" "}
          and{" "}
          <Link href="/wedding-bands/hampshire" className={linkClass}>
            Hampshire
          </Link>{" "}
          regularly, so Arundel sits comfortably inside our home
          patch. No travel surcharges, no overnight accommodation,
          no anxious 4am drives back from the wrong end of the
          country.
        </p>
        <p>
          The castle&rsquo;s reception spaces have the kind of period
          finish, scale and ceiling height that don&rsquo;t need
          help. Our stage setup is built to dress around the room
          rather than fight it. Black-finished kit, restrained
          on-stage lighting rather than a stadium rig, and a PA sized
          for the room rather than the road. We dress in stage-blacks
          unless you ask otherwise.
        </p>
        <p>
          An Arundel wedding tends to pull a guest list that&rsquo;s
          travelled in for the weekend, with a London-and-Sussex
          core. The setlist flexes accordingly: Arctic Monkeys, The
          Killers and Kings of Leon for the late floor, Oasis and
          Stereophonics for the mid-evening, modern-pop crossover
          (Harry Styles, Dua Lipa, Sam Fender) layered through for
          the chart-aware younger guests. Wedding non-negotiables
          (Mr Brightside, Don&rsquo;t Stop Me Now, Sweet Caroline)
          take the back-half peaks. Between sets a DJ playlist
          (collaborated with you) keeps the floor moving. We learn
          one custom first dance per booking.
        </p>
        <p>
          Curfews, sound rules and any in-house production
          arrangements at Arundel are managed by the castle&rsquo;s
          own wedding team, and they vary by booking. A Grade I
          listed working ducal residence with daytime public-tour
          operations is one of the more careful briefs we play. We
          don&rsquo;t make assumptions. We confirm the specific
          cut-off, limiter setup and any house rules with the
          wedding coordinator the week before, and pace the closing
          set so it lands at the actual end of the night.
        </p>
        <p>
          If you&rsquo;re booking Arundel Castle and want a band
          that turns up briefed, properly dressed and with the dance
          floor firmly in mind, send us your date. We&rsquo;d love
          to be on your shortlist.
        </p>
      </>
    ),
  },
  venues: {
    eyebrow: "Nearby venues",
    heading: "Other venues we cover near Arundel.",
    blurb: (
      <>
        Backbeat plays across Sussex, Hampshire and the wider South
        coast. A snapshot of other well-known wedding venues within
        about an hour of Arundel. If yours isn&rsquo;t here, tell us
        anyway.
      </>
    ),
    list: [
      { name: "Amberley Castle", town: "Amberley" },
      { name: "Goodwood House", town: "Chichester" },
      { name: "Cowdray House", town: "Midhurst" },
      { name: "Bailiffscourt", town: "Climping" },
      { name: "Wiston House", town: "Steyning" },
      { name: "Tinwood Estate", town: "Halnaker" },
      { name: "Findon Place", town: "Findon" },
      { name: "South Lodge", town: "Lower Beeding" },
    ],
  },
  cta: {
    heading: "Live music for your Arundel Castle wedding.",
    body: (
      <>
        Send us the date. We&rsquo;ll come back with availability and
        a tailored quote within 24 hours.
      </>
    ),
  },
};
