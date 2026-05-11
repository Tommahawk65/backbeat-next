import { Star } from "lucide-react";

import { GoogleG } from "@/components/icons/GoogleG";
import { googleAggregateRating, googleReviewCount } from "@/lib/data/testimonials";

function Stars() {
  return (
    <span
      className="flex items-center gap-0.5"
      aria-label={`${googleAggregateRating} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-3.5 w-3.5 fill-[#FBBC05] text-[#FBBC05]"
          strokeWidth={1.5}
        />
      ))}
    </span>
  );
}

function Divider() {
  return <span aria-hidden className="h-4 w-px bg-white/15" />;
}

export function HeroTrustBar() {
  return (
    <div className="border-t border-white/10 bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-3.5 sm:py-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/85 sm:text-xs sm:tracking-[0.2em] md:gap-x-7">
          <li className="flex items-center gap-2">
            <Stars />
            <span className="normal-case tracking-normal">
              <span className="font-semibold text-white">
                {googleAggregateRating.toFixed(1)}
              </span>
              <span className="text-white/60"> on </span>
              <span className="text-white">Google</span>
            </span>
            <GoogleG className="h-3.5 w-3.5" />
          </li>

          <li className="hidden items-center gap-4 sm:flex md:gap-7">
            <Divider />
            <span>From &pound;1,900</span>
          </li>

          <li className="hidden items-center gap-4 md:flex md:gap-7">
            <Divider />
            <span>Hampshire &middot; UK-wide</span>
          </li>

          <li className="hidden items-center gap-4 md:flex md:gap-7">
            <Divider />
            <span>DJ between &amp; after</span>
          </li>

          <li className="flex items-center gap-4 sm:hidden">
            <Divider />
            <span>From &pound;1,900</span>
          </li>
        </ul>
        <p className="sr-only">
          Backbeat is rated {googleAggregateRating} out of 5 on Google based on{" "}
          {googleReviewCount} verified reviews.
        </p>
      </div>
    </div>
  );
}
