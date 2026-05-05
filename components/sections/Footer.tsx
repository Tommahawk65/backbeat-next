import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Plus, Youtube } from "lucide-react";

import { faqs } from "@/lib/data/faqs";

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
        id="faqs"
        className="scroll-mt-24 border-b border-white/10 py-14 sm:py-20 md:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[5fr_7fr] md:gap-16">
          <div>
            <span className="eyebrow eyebrow--on-dark">FAQ</span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Quick answers.
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Anything else, drop a line through the enquiry form.
            </p>
          </div>
          <div className="divide-y divide-white/10 border-t border-white/10">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                className="group py-5"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left text-base font-semibold leading-snug text-white [&::-webkit-details-marker]:hidden">
                  <span>{f.q}</span>
                  <span
                    className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full border border-white/30 text-white/80 transition group-open:rotate-45 group-open:border-accent group-open:bg-accent group-open:text-primary-dark"
                    aria-hidden
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </span>
                </summary>
                <p className="mt-3 pr-10 text-sm leading-relaxed text-white/70">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 py-6 sm:flex-row sm:justify-between sm:gap-8">
          <Link
            href="/"
            aria-label="Backbeat home"
            className="inline-block"
          >
            <Image
              src="/images/Backbeat Logo_White.png"
              alt="Backbeat"
              width={470}
              height={290}
              className="h-14 w-auto"
            />
          </Link>
          <div className="flex items-center gap-2">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label={`Follow us on ${label}`}
                className="flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition hover:text-accent"
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-6 pb-5 text-xs text-white/40 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Backbeat Wedding Band</p>
          <div className="flex items-center gap-5">
            <Link
              href="/wedding-bands"
              className="transition hover:text-white/80"
            >
              Wedding bands by county
            </Link>
            <Link
              href="/privacy"
              className="transition hover:text-white/80"
            >
              Privacy &amp; cookies
            </Link>
            <p className="uppercase tracking-widest">
              Managed by Impact Entertainment
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
