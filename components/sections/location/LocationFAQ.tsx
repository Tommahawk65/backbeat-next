type FAQ = { q: string; a: string };

const FAQS: FAQ[] = [
  {
    q: "How much does a wedding band cost?",
    a: "Backbeat packages start at £1,900 for a four-piece live band performing two 60-minute sets, with DJ playlists between and after the band. Larger configurations (five- or six-piece line-ups, additional sets, ceremony or drinks-reception music, sax player, extended late-night) are quoted on top. Final pricing depends on date, distance, set length and any add-ons.",
  },
  {
    q: "How long do you play for?",
    a: "A standard evening package is two 60-minute live sets — usually one early to fill the dance floor and one late to close the night. Many couples add an acoustic set during drinks reception or dinner. We're flexible on timings and plan the schedule around your venue's curfew and the rhythm of the day.",
  },
  {
    q: "Do you DJ between and after the band?",
    a: "Yes — DJ playlists between sets and after the live band are included as standard. We collaborate with you on the playlist beforehand so it sits between your taste and what genuinely works on a wedding dance floor. Continuous music from the start of the evening reception until last orders, no flat spots.",
  },
  {
    q: "Do you bring your own PA and lighting?",
    a: "Yes. Backbeat is fully self-contained — professional PA system sized for venues from 80 to 300 guests, full stage lighting rig, all instruments and backline. The venue only needs to provide access to power. We're equally at home in a 16th-century barn with limited infrastructure as in a country house ballroom.",
  },
  {
    q: "Can you play during the ceremony or drinks reception?",
    a: "Yes — as an add-on. We offer an acoustic duo or trio version of the band for ceremonies, drinks receptions and wedding breakfasts. Same musicians, stripped-back instrumentation — atmospheric live music for the daytime parts of your day before the full band kicks off in the evening.",
  },
  {
    q: "Will you learn our first dance song?",
    a: "Of course — one custom first-dance song is included as standard. We rehearse it specifically and arrange it to suit a live four-piece. If a song genuinely doesn't translate to a band format we'll talk it through honestly with you, but most songs work beautifully live.",
  },
  {
    q: "Are you insured and PAT-tested?",
    a: "Yes — all equipment is PAT tested annually and we carry £10 million public liability insurance. PAT and PLI certificates are available on request and most wedding venues require both before allowing any band to perform. We also have established dep cover in place for illness, so the show goes on regardless.",
  },
];

function FAQSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocationFAQ() {
  return (
    <section className="bg-white py-16 sm:py-24 md:py-32">
      <FAQSchema />
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="eyebrow">Common questions</span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
            What couples ask before booking.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-zinc-200 border-y border-zinc-200 sm:mt-16">
          {FAQS.map((f) => (
            <div key={f.q} className="py-6 sm:py-8">
              <h3 className="text-lg font-semibold leading-snug text-zinc-900 sm:text-xl">
                {f.q}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-700 sm:text-lg">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
