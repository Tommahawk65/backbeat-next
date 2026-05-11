import { ArrowUpRight, Star } from "lucide-react";

import { GoogleG } from "@/components/icons/GoogleG";
import {
  googleAggregateRating,
  googleReviewCount,
  googleReviews,
  googleReviewsUrl,
} from "@/lib/data/testimonials";

function StarRow({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-[#FBBC05] text-[#FBBC05]" : "text-white/20"
          }`}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export function GoogleReviews() {
  return (
    <section
      id="reviews"
      className="scroll-mt-24 bg-primary-dark py-16 text-white sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-2">
            <GoogleG className="h-3 w-3 flex-none" />
            <span className="eyebrow eyebrow--on-dark">
              Verified Google Reviews
            </span>
          </div>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            What people say.
          </h2>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3">
            <StarRow rating={Math.round(googleAggregateRating)} />
            <span className="font-display text-lg leading-none text-white">
              {googleAggregateRating.toFixed(1)}
            </span>
            <span className="text-xs uppercase tracking-widest text-white/50">
              from {googleReviewCount}{" "}
              {googleReviewCount === 1 ? "review" : "reviews"}
            </span>
          </div>
        </div>

        <ul className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-2">
          {googleReviews.map((r) => (
            <li
              key={r.name + r.date}
              className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-6 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-white">{r.name}</p>
                  <div className="mt-1.5 flex items-center gap-2">
                    <StarRow rating={r.rating} />
                    <span className="text-xs text-white/50">{r.date}</span>
                  </div>
                </div>
                <GoogleG className="mt-1 h-4 w-4 flex-none" />
              </div>
              <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                {r.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center sm:mt-12">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10"
          >
            <GoogleG className="h-4 w-4" />
            Read all reviews on Google
            <ArrowUpRight className="h-4 w-4 text-white/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
