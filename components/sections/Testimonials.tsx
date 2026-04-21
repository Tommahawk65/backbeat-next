import { Star, Quote } from "lucide-react";

const featured = {
  body: "Hands down the best wedding band we've ever heard. The vibe they created was exactly what we wanted — everyone was on the dance floor from the first song to the last. Absolutely unforgettable.",
  name: "Michael Richards",
  event: "Hampshire wedding",
};

const reviews = [
  {
    body: "They made our wedding unforgettable. The energy was amazing and they played all of our favourite songs.",
    name: "Sarah Thompson",
  },
  {
    body: "Everyone was on the dance floor all night. We can't thank them enough for making our day so special.",
    name: "Emily Carter",
  },
  {
    body: "What an amazing band — they brought so much energy to the day, and every guest was impressed.",
    name: "Ryan & Lily Williams",
  },
];

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="scroll-mt-24 bg-primary-dark py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow eyebrow--on-dark">Couples say</span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Five-star nights, in their own words.
          </h2>
        </div>

        <figure className="reveal-up mx-auto mt-16 max-w-4xl">
          <Quote
            className="mx-auto h-12 w-12 text-accent"
            aria-hidden
            strokeWidth={1}
          />
          <blockquote className="mt-6 text-balance text-center text-2xl font-medium leading-[1.3] sm:text-3xl md:text-4xl">
            &ldquo;{featured.body}&rdquo;
          </blockquote>
          <figcaption className="mt-8 flex flex-col items-center gap-2 text-sm text-white/70">
            <div className="flex gap-1 text-accent" aria-label="5 out of 5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="font-medium text-white">{featured.name}</span>
            <span>{featured.event}</span>
          </figcaption>
        </figure>

        <div className="mt-20 grid gap-px bg-white/10 sm:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="reveal-up flex h-full flex-col bg-primary-dark p-8 lg:p-10"
            >
              <div className="flex gap-0.5 text-accent" aria-label="5 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-white/80">
                &ldquo;{r.body}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
                {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
