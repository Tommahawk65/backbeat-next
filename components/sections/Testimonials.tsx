import { ReviewsRail } from "./ReviewsRail";
import { allReviews } from "@/lib/data/testimonials";

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
        <ReviewsRail reviews={allReviews} />
      </div>
    </section>
  );
}
