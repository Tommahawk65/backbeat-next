import Link from "next/link";
import { Star } from "lucide-react";

import type { Review } from "@/components/sections/ReviewsRail";

type LocationTestimonialsProps = {
  eyebrow?: string;
  heading: React.ReactNode;
  reviews: Review[];
};

export function LocationTestimonials({
  eyebrow = "Couples say",
  heading,
  reviews,
}: LocationTestimonialsProps) {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
            {heading}
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div
                className="flex gap-1 text-accent"
                aria-label="5 out of 5 stars"
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-current"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-zinc-700">
                &ldquo;{r.body}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-zinc-200 pt-4">
                <p className="text-sm font-semibold text-zinc-900">{r.name}</p>
                <p className="mt-0.5 text-xs uppercase tracking-widest text-zinc-500">
                  {r.event}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/#reviews"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-dark underline underline-offset-4 transition hover:text-accent"
          >
            Read all five-star reviews &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
