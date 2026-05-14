import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

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
    <footer className="border-t-2 border-white/10 bg-primary-dark text-white">
      <div>
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
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 pb-5 text-xs text-white/40 sm:flex-row sm:justify-between sm:gap-8">
          <div className="flex flex-col items-center gap-1 sm:flex-row sm:items-center sm:gap-5">
            <p>&copy; {new Date().getFullYear()} Backbeat Wedding Band</p>
            <span aria-hidden className="hidden h-3 w-px bg-white/20 sm:inline-block" />
            <Link
              href="/wedding-bands"
              className="transition hover:text-white/80"
            >
              Areas we cover
            </Link>
            <span aria-hidden className="hidden h-3 w-px bg-white/20 sm:inline-block" />
            <Link
              href="/privacy"
              className="transition hover:text-white/80"
            >
              Privacy &amp; cookies
            </Link>
          </div>
          <p className="uppercase tracking-widest">
            Managed by Impact Entertainment
          </p>
        </div>
      </div>
    </footer>
  );
}
