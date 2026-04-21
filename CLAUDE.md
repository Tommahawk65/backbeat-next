# Backbeat Website — Next.js Rewrite Spec

> Drop this into the root of your new Next.js repo as `CLAUDE.md` (or paste the whole thing as your first Claude Code prompt). It's structured as a brief you can execute against, not a step-by-step tutorial.

---

## Starting prompt (paste this first)

> I'm rewriting my wedding band's website in Next.js. The current site is at backbeat-band.co.uk — it's a Vite + jQuery + Bootstrap stack with catastrophic mobile performance (16.9s LCP, 4.5MB page weight). I'm deploying to Vercel. Read `CLAUDE.md` in this repo for the full spec. Start by setting up the project skeleton (stack decisions in the spec), then we'll migrate section by section. Ask before making any decision not covered in the spec.

---

## Context

Backbeat is a Hampshire-based wedding band. The current site is the primary landing page for paid Facebook/Meta ads targeting couples planning weddings in the south of England. The site has ~14 enquiry form submissions over the last 3 weeks of ads, but ~63% of ad clicks never register a landing page view — the site is so slow on mobile that users bounce before it renders. The rewrite exists to fix this.

**Current site details:**

- Domain: `backbeat-band.co.uk` (stays the same — Vercel will take over the domain)
- Current stack: Vite + vanilla JS + jQuery + Bootstrap + AOS animations
- Source code: [tell Claude Code where the existing repo is, or point it at the live site to scrape structure]
- Current Lighthouse mobile: LCP 16.9s, FCP 11.5s, TBT 550ms, weight 4.5MB

**Existing sections to replicate** (inspect the live site to confirm):

- Hero with band image/video background, tagline "Hampshire's Premier Wedding Band" (or similar)
- About / what we do
- Video showreel (currently a YouTube embed of `oRG6h3bYXWE`)
- Image gallery / collage
- Partner/client logo strip (Airbnb, Hubspot, Army, others)
- Testimonials (check current site)
- Pricing anchor: "Live Music Packages from £1,900"
- Enquiry form ("Check Availability" — see form fields below)
- Footer

**Enquiry form fields** (already working well, don't change):

- Name (required)
- Email (required)
- Event date (required, date picker)
- Event venue / town (required)
- Message (optional, textarea)
- Submit CTA: "Check Availability"
- Trust line: "No obligation · We'll just confirm availability and pricing"

---

## Goals

**Performance targets (mobile, slow 4G throttling, Lighthouse):**

- LCP: under 2.0s (currently 16.9s)
- FCP: under 1.2s (currently 11.5s)
- TBT: under 100ms (currently 550ms)
- Total page weight: under 800KB above the fold (currently 4.5MB for the whole page)
- Lighthouse Performance score: 95+
- Core Web Vitals: all green

**Business goals:**

- Do not break the existing Facebook ad campaign — Meta Pixel must keep firing with the same pixel ID so retargeting audiences don't reset
- Do not break existing GA4 data continuity — same property, same events
- Preserve SEO (Google already ranks the site for Hampshire wedding band queries)
- Make it trivial to add location-specific landing pages later (e.g. `/weddings/winchester`, `/weddings/southampton`) for local SEO

---

## Stack decisions

Unless there's a specific reason to diverge, build with:

- **Next.js 16** with **App Router** (not Pages Router)
- **TypeScript**
- **Tailwind CSS** for styling
- **shadcn/ui** for form components (Button, Input, Textarea, Calendar/DatePicker)
- **`next/image`** for all images (no raw `<img>` tags anywhere)
- **`next/font`** for Google Fonts — self-hosted, `display: swap`
- **`next/script`** for all tracking (GTM, Meta Pixel) with appropriate strategies
- **Server Actions** for form submission (no separate API route unless we need webhooks)
- **Resend** for the form notification email (add to env vars)
- **Zod** for form validation (server + client)
- **React Hook Form** for form state
- **Static generation (SSG)** — the whole site is static. No SSR, no middleware unless genuinely needed
- **Vercel Analytics** and **Vercel Speed Insights** (lightweight, won't regress perf)
- **No UI animation library initially.** If AOS-style scroll reveals are essential to the feel, use CSS `@starting-style` or a tiny IntersectionObserver hook — do not pull in a framework

Don't add: Framer Motion, jQuery, Bootstrap, any AOS-equivalent, any image library that isn't `next/image`, any icon library beyond **Lucide React**.

---

## Project structure

```
app/
  layout.tsx              # Root layout, fonts, GTM/Meta Pixel scripts
  page.tsx                # Homepage (all existing sections)
  sitemap.ts              # Auto-generated sitemap
  robots.ts               # robots.txt
  (marketing)/            # Route group for future location pages
    weddings/
      [location]/
        page.tsx          # Future: /weddings/winchester, etc.
  api/
    (probably empty — use Server Actions instead)
components/
  sections/
    Hero.tsx
    About.tsx
    Showreel.tsx          # Lazy-loaded YouTube facade
    Gallery.tsx
    PartnerLogos.tsx
    Testimonials.tsx
    Pricing.tsx
    EnquiryForm.tsx       # Modal or inline section
    Footer.tsx
  ui/                     # shadcn/ui generated components
  tracking/
    GoogleTagManager.tsx
    MetaPixel.tsx
    CookieConsent.tsx     # See notes below
lib/
  actions/
    submitEnquiry.ts      # Server Action
  validation/
    enquiry.ts            # Zod schema
  email/
    send.ts               # Resend wrapper
public/
  images/                 # Source images — next/image handles variants
  (favicon, og-image, etc.)
```

---

## Implementation guidance by concern

### Images

**This is the single biggest performance win.** The current site ships a 1.6MB collage and a 400KB hero. `next/image` makes this automatic:

- Drop all source images in `public/images/` at their highest available resolution (don't pre-compress — Next.js handles it)
- Use `next/image` with `sizes` attribute matching your Tailwind breakpoints
- Hero image: `priority={true}`, no `loading` attr (implied eager)
- Everything below the fold: default lazy
- Gallery/collage: consider a masonry layout with individual images rather than one giant composite — gives much better responsive behaviour
- Configure `next.config.ts` with `images.formats = ['image/avif', 'image/webp']`
- Add explicit `width` and `height` to prevent CLS

For the partner logos row (Army, Airbnb, Hubspot, etc.), use SVG if available — they'll be tiny and perfectly sharp.

### Fonts

The current site uses Google Fonts loaded via `<link>` tag (blocking the critical path). Replace with `next/font/google`:

```tsx
// app/layout.tsx
import { Poppins } from "next/font/google"; // or whichever the brand uses

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-poppins",
});
```

Check the current site's computed styles to confirm the exact font family — don't guess. Font Awesome is currently loading 147KB of webfont for a handful of icons; replace with inline Lucide React SVG components.

### YouTube showreel

Current site loads 946KB of YouTube player code on page load whether the user watches or not. Replace with a facade:

- Static thumbnail from `https://img.youtube.com/vi/oRG6h3bYXWE/maxresdefault.jpg` (or upload a custom poster to `public/`)
- Clickable overlay with play button
- On click, swap in the real iframe
- Use the `lite-youtube-embed` web component OR write a 30-line React component — either is fine

Zero YouTube bytes should load until the user clicks play.

### Enquiry form

Built with React Hook Form + Zod + Server Action. No separate API route.

```tsx
// lib/validation/enquiry.ts
import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  eventDate: z.coerce
    .date()
    .refine((d) => d > new Date(), "Must be in the future"),
  venue: z.string().min(2).max(200),
  message: z.string().max(2000).optional(),
  // honeypot:
  website: z.string().max(0).optional(), // spam bots will fill this
});
```

**On successful submit:**

1. Send notification email to Tom via Resend (use an `.env` secret for the Resend API key and Tom's email)
2. Fire Meta Pixel `Lead` event client-side AND server-side via Conversions API (critical — see tracking section)
3. Fire GA4 `generate_lead` event
4. Fire Google Ads conversion if the campaign ID is configured
5. Show success state inline (don't redirect — preserves scroll position and ad attribution)
6. Include the `fbclid` / `gclid` URL parameters in the email notification so Tom can see which ad drove the lead

**Anti-spam:** honeypot field + Vercel's built-in bot protection. Don't add reCAPTCHA unless spam becomes a real problem — it tanks conversion rates and is a privacy concern.

### Tracking (critical — do not regress)

Grab these IDs from the current site's `<head>` and move them to env vars:

- `NEXT_PUBLIC_GTM_ID` — currently `GTM-WVLB7VH2`
- `NEXT_PUBLIC_GA4_ID` — currently `G-6MBQ9M75VC`
- `NEXT_PUBLIC_GOOGLE_ADS_ID` — currently starts with `AW-179...`
- `NEXT_PUBLIC_META_PIXEL_ID` — check current Meta Pixel code
- `META_CONVERSIONS_API_TOKEN` — set up new in Meta Events Manager (server-side only)

**GTM** — use `next/script` with `strategy="afterInteractive"`. Do not block the critical path.

**Meta Pixel** — load client-side with `strategy="afterInteractive"`. Additionally set up **Meta Conversions API** for the server-side `Lead` event from the Server Action. CAPI catches the ~20-30% of events that iOS/ad blockers drop and is essential for proper attribution.

**Cookie consent** — the current site uses CookieYes. Options:

1. Keep CookieYes (works fine, costs nothing, preserves consent records)
2. Switch to a lightweight alternative (e.g. `vanilla-cookieconsent`)
3. Build a minimal in-house banner (~100 lines)

Default to option 1 unless the user asks otherwise. All tracking scripts must gate on consent.

### SEO

- Use `generateMetadata` in `app/page.tsx` for per-page titles, descriptions, OG tags
- Generate a proper `sitemap.ts` and `robots.ts`
- Add JSON-LD structured data: `MusicGroup` schema with name, address, priceRange, aggregateRating (if you have reviews)
- Preserve the current URL structure. If any paths change, add 301 redirects in `next.config.ts`
- Add Open Graph image (`app/opengraph-image.tsx`) for link previews when the URL is shared

Before deploy, compare the current site's ranking keywords (via GSC) and confirm all relevant pages/anchors exist in the new build.

### Performance discipline

- Ship zero client JS on sections that don't need it (Hero, About, Gallery, Testimonials, Footer = all Server Components)
- Only these should be Client Components: `EnquiryForm`, `Showreel` (because of the facade swap), `CookieConsent`
- No `"use client"` at the top of `layout.tsx` or `page.tsx`
- Audit the final bundle with `@next/bundle-analyzer` before deploying — target <50KB of first-load JS on the homepage

---

## Migration & cutover plan

1. Build on a `vercel.app` preview URL
2. Run full Lighthouse audit on the preview — must hit the targets above BEFORE cutover
3. Test the enquiry form end-to-end — confirm email arrives, pixel events fire (use Meta Pixel Helper + GA4 DebugView)
4. Verify GTM tags fire correctly (Tag Assistant)
5. Check all pages render without hydration errors, console warnings, or layout shift
6. Test on a real mid-range Android on 4G (not just Lighthouse throttling)
7. Update DNS to point `backbeat-band.co.uk` to Vercel
8. Within 24 hours of cutover: re-run PageSpeed Insights on the production URL to confirm gains held
9. Monitor Vercel Analytics and GA4 for 48 hours — watch for any drop in sessions or conversion rate that would indicate something broke

**Don't decommission the old site until:**

- One full week of clean tracking data on the new site
- Form submissions verified working in production
- No spike in bounce rate vs the new baseline

---

## Things to ask before deciding

Ask me before:

- Adding any new dependency not listed in the stack section
- Adding any animation library
- Changing the form fields (the current ones are working)
- Restructuring the URL scheme
- Changing the visual design significantly (this is a port, not a redesign)
- Adding a CMS (Sanity, Contentful, etc.) — tempting but out of scope for v1

Decide autonomously:

- Component file structure within the outline above
- Tailwind class choices
- How to name hooks/utilities
- Error boundary placement
- Which shadcn components to generate

---

## Explicit non-goals

- Blog / CMS (phase 2, if ever)
- Multi-language support
- User accounts / logins
- A booking system (bookings are handled manually via email, per the band's process)
- Any AI chatbot or "instant quote" feature
- Changing the pricing anchor (£1,900) or form copy

---

## Definition of done

- [ ] Lighthouse mobile Performance score ≥ 95
- [ ] LCP < 2.0s on slow 4G throttling
- [ ] Total first-load JS < 50KB
- [ ] Enquiry form submits, emails arrive, all tracking events fire (client + CAPI)
- [ ] Consent banner functional, tracking gated on consent
- [ ] All existing SEO-ranking pages/content present at equivalent URLs
- [ ] Site deployed to Vercel, custom domain attached, SSL active
- [ ] Old site's DNS cut over with no downtime
- [ ] 48-hour monitoring clean — no regression in sessions/conversions
