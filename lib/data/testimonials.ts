// Reviews from Backbeat's Google Business Profile.
// Verified live: https://share.google/kNphlS9D7DoZHeQe9
// Update this file whenever new reviews come in on the GBP.

export type GoogleReview = {
  /** First name + last initial, matching Google's display convention */
  name: string;
  /** When the review was posted (ISO date preferred, year also fine — Google shows relative time) */
  date: string;
  /** 1-5 stars */
  rating: number;
  /** Verbatim review text */
  body: string;
};

export const googleReviewsUrl =
  "https://share.google/kNphlS9D7DoZHeQe9";

export const googleAggregateRating: number = 5.0;
export const googleReviewCount: number = 4;

export const googleReviews: GoogleReview[] = [
  {
    name: "Sandra S.",
    date: "2026-06-12",
    rating: 5,
    body: "Backbeat played our wedding and they were brilliant! From the first time we got in touch they were easy to deal with, really responsive, and made the whole booking process simple. They had a great selection of songs so we could pick what we wanted.\n\nThey took the time to learn and perform our first dance, and it sounded fantastic, having it played live made the moment feel really special. On the night they got everyone up too, the dancefloor didn't empty all evening. Couldn't recommend them more.",
  },
  {
    name: "Lara K.",
    date: "2026-06-05",
    rating: 5,
    body: "Backbeat played at our wedding and we couldn't have been happier with them. The music was brilliant from start to finish and the dance floor was full pretty much the entire night.\n\nA lot of our guests have mentioned since how good the band was. They helped make the evening feel really special and we'd 100% recommend them to anyone looking for live wedding music.",
  },
  {
    name: "Toby Joe L.",
    date: "2025-01-17",
    rating: 5,
    body: "Such an incredible band with great energy! Would be a great pick for a wedding or office party!!",
  },
  {
    name: "Ben F.",
    date: "2025-01-15",
    rating: 5,
    body: "Hired these guys for my mate's wedding, could not recommend them highly enough! Such a good bunch of guys, super communicative, easy to book/organise and extremely helpful. They acted very professionally and with the utmost respect for us as 'customers'. Played a set of absolute bangers and had everyone up and dancing. Definitely going to book them again next time I need to hire a band. Thanks so much chaps 🫶🏼",
  },
];
