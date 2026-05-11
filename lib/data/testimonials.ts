// Reviews from Backbeat's Google Business Profile.
// Verified live: https://share.google/kNphlS9D7DoZHeQe9
// Update this file whenever new reviews come in on the GBP.

export type GoogleReview = {
  /** First name + last initial, matching Google's display convention */
  name: string;
  /** When the review was posted (year is enough — Google shows relative time) */
  date: string;
  /** 1-5 stars */
  rating: number;
  /** Verbatim review text */
  body: string;
};

export const googleReviewsUrl =
  "https://share.google/kNphlS9D7DoZHeQe9";

export const googleAggregateRating: number = 5.0;
export const googleReviewCount: number = 2;

export const googleReviews: GoogleReview[] = [
  {
    name: "Ben F.",
    date: "2025",
    rating: 5,
    body: "Hired these guys for my mate's wedding, could not recommend them highly enough! Such a good bunch of guys, super communicative, easy to book/organise and extremely helpful. They acted very professionally and with the utmost respect for us as 'customers'. Played a set of absolute bangers and had everyone up and dancing. Definitely going to book them again next time I need to hire a band. Thanks so much chaps 🤘",
  },
  {
    name: "Toby Joe L.",
    date: "2025",
    rating: 5,
    body: "Such an incredible band with great energy! Would be a great pick for a wedding or office party!!",
  },
];
