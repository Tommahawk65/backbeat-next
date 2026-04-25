import type { Review } from "@/components/sections/ReviewsRail";

export const featuredReview: Review = {
  body: "Divine music, and they had people on the dance floor right up until the end. Incredible — very professional and helpful throughout. Would absolutely recommend them to anyone.",
  name: "Jemima Juster",
  event: "Wedding · Royal Military Academy",
};

export const reviews: Review[] = [
  {
    body: "All very efficient and the band was excellent — especially their rendition of Hava Nagila which they had learnt for the event. Really made the day. Certainly would recommend and use again.",
    name: "Ruth Rowlands",
    event: "Party · Center Parcs, Woburn Forest",
  },
  {
    body: "Polite, reliable, and performed superbly — great set-up too. Absolutely brilliant. We had a wonderful time.",
    name: "Anthony & Timothy",
    event: "Party · Wolfson College, Oxford",
  },
  {
    body: "They helped set our friends up to play our first song, then got the dance floor going — made the evening great for all our guests. Excellent and very professional.",
    name: "Anthony & Lauren",
    event: "Wedding · The Elvetham Hotel, Hook",
  },
  {
    body: "The dance floor always had someone on it — which is all you can ask for. They learnt our first dance song and played it brilliantly. Absolutely fantastic.",
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

export const allReviews: Review[] = [featuredReview, ...reviews];

/** Pick a subset of reviews by author name, in the order given. */
export function pickReviews(names: string[]): Review[] {
  return names
    .map((n) => allReviews.find((r) => r.name === n))
    .filter((r): r is Review => Boolean(r));
}
