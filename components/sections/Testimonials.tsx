import { ReviewsRail, type Review } from "./ReviewsRail";

const featured: Review = {
  body: "The band were incredible — very professional and helpful throughout. The music was divine and they had people on the dance floor right up until the end. Would absolutely recommend them to anyone.",
  name: "Jemima Juster",
  event: "Wedding · Royal Military Academy",
};

const reviews: Review[] = [
  {
    body: "All very efficient and the band was excellent — especially their rendition of Hava Nagila which they had learnt for the event. Really made the day. Certainly would recommend and use again.",
    name: "Ruth Rowlands",
    event: "Party · Center Parcs, Woburn Forest",
  },
  {
    body: "The band were absolutely brilliant and we had a wonderful time. They were polite and reliable and performed superbly. Great set-up too.",
    name: "Anthony & Timothy",
    event: "Party · Wolfson College, Oxford",
  },
  {
    body: "The band were excellent — very professional, helped set our friends up to play our first song, and got the dance floor going. It made the evening great for all our guests.",
    name: "Anthony & Lauren",
    event: "Wedding · The Elvetham Hotel, Hook",
  },
  {
    body: "The band were absolutely fantastic! They learnt and played our first dance song and did a brilliant job. The dance floor always had someone on it — which is all you can ask for.",
    name: "Sophie",
    event: "Wedding · Gate Street Barn, Surrey",
  },
  {
    body: "A really good mix of music — very professional, and such a good sound they created. Really made the evening.",
    name: "Mandy",
    event: "Wedding · Manor Farmhouse, Warnford",
  },
  {
    body: "First class. Good modern mixes with old classics that had the dance floor pumping all evening. Great feedback from guests on the choice of band — and we had a lot of them.",
    name: "Matthew",
    event: "Wedding · St George's Hill Golf Club",
  },
  {
    body: "A great band, perfect for my 50th party — and really lovely people too.",
    name: "Gary",
    event: "50th · Halstead House",
  },
];

const all: Review[] = [featured, ...reviews];

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="scroll-mt-24 bg-primary-dark py-16 text-white sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow eyebrow--on-dark">Couples say</span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Five-star nights, in their own words.
          </h2>
        </div>
      </div>
      <div className="relative mt-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-primary-dark to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-primary-dark to-transparent"
        />
        <ReviewsRail reviews={all} />
      </div>
    </section>
  );
}
