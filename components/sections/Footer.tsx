import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

import { EnquiryForm } from "./EnquiryForm";

const nav = [
  { href: "/#video", label: "Video" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faqs", label: "FAQs" },
  { href: "/repertoire", label: "Repertoire" },
];

const socials = [
  {
    href: "https://www.facebook.com/profile.php?id=61570867951360",
    label: "Facebook",
    Icon: Facebook,
  },
  {
    href: "https://www.instagram.com/backbeatlive/",
    label: "Instagram",
    Icon: Instagram,
  },
  {
    href: "https://www.youtube.com/@Backbeat-UK",
    label: "YouTube",
    Icon: Youtube,
  },
];

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <section
        id="book"
        className="scroll-mt-24 border-b border-white/10 py-24 sm:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:gap-24">
          <div className="flex flex-col justify-center">
            <span className="eyebrow eyebrow--on-dark">Check availability</span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Let&apos;s make
              <br />
              it a night.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
              Tell us about your event and we&apos;ll come straight back with
              availability and a tailored quote.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-6 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-widest text-white/50">
                  From
                </dt>
                <dd className="mt-1 font-display text-2xl text-white">
                  £1,900
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-white/50">
                  Response
                </dt>
                <dd className="mt-1 font-display text-2xl text-white">Fast</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-white/50">
                  Base
                </dt>
                <dd className="mt-1 text-white">Hampshire</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-white/50">
                  Travel
                </dt>
                <dd className="mt-1 text-white">South Coast &amp; UK-wide</dd>
              </div>
            </dl>
          </div>
          <div className="flex items-center">
            <div className="w-full">
              <EnquiryForm variant="dark" />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <Link
              href="/"
              className="font-display text-3xl leading-none text-white"
            >
              Backbeat
            </Link>
            <p className="mt-4 max-w-sm text-sm text-white/55">
              Hampshire&rsquo;s premier indie &amp; rock wedding band. Managed
              by Impact Entertainment.
            </p>
          </div>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/70"
          >
            {nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="transition hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <hr className="my-10 border-white/10" />

        <div className="flex flex-col-reverse items-start justify-between gap-6 text-sm text-white/50 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} Backbeat Wedding Band.</p>
          <div className="flex gap-2">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label={`Follow us on ${label}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
