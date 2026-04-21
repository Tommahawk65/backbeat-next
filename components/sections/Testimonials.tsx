import { ReviewsRail, type Review } from "./ReviewsRail";

const featured: Review = {
  body: "Hands down the best wedding band we've ever heard. The vibe they created was exactly what we wanted — everyone was on the dance floor from the first song to the last. Absolutely unforgettable.",
  name: "Michael Richards",
  event: "Hampshire wedding",
};

const reviews: Review[] = [
  {
    body: "They made our wedding unforgettable. The energy was amazing and they played all of our favourite songs.",
    name: "Sarah Thompson",
    event: "Winchester wedding",
  },
  {
    body: "Everyone was on the dance floor all night. We can't thank them enough for making our day so special.",
    name: "Emily Carter",
    event: "New Forest wedding",
  },
  {
    body: "What an amazing band — they brought so much energy to the day, and every guest was impressed.",
    name: "Ryan & Lily Williams",
    event: "Southampton wedding",
  },
  {
    body: "Backbeat completely stole the show. Our guests are still talking about it weeks later.",
    name: "James & Olivia Barnes",
    event: "Chichester wedding",
  },
  {
    body: "Every song hit. They read the room perfectly and kept the dance floor packed till the last song.",
    name: "Chloe & Ben Mitchell",
    event: "Isle of Wight wedding",
  },
  {
    body: "From our first call to the last song they were brilliant. Couldn't recommend them more highly.",
    name: "Hannah Price",
    event: "Bournemouth wedding",
  },
  {
    body: "The best decision we made for our wedding. Professional, tight, and genuinely lovely people.",
    name: "Dan & Amelia Foster",
    event: "Dorset wedding",
  },
  {
    body: "Our first dance into their live version of the song we asked for — absolute goosebumps.",
    name: "Sophie & Alex Wright",
    event: "Guildford wedding",
  },
  {
    body: "Honestly, worth every penny. The energy, the song choice, the professionalism — faultless.",
    name: "Megan Lawrence",
    event: "Petersfield wedding",
  },
];

const all: Review[] = [featured, ...reviews];

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="scroll-mt-24 bg-cream-dark py-16 text-zinc-900 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Couples say</span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Five-star nights, in their own words.
          </h2>
        </div>
      </div>
      <div className="relative mt-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream-dark to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream-dark to-transparent"
        />
        <ReviewsRail reviews={all} />
      </div>
    </section>
  );
}
