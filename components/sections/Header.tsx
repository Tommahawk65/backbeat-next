"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Mail } from "lucide-react";

import { EnquiryTrigger } from "@/components/EnquiryTrigger";

const navLinks = [
  { href: "/#video", label: "Video" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faqs", label: "FAQs" },
  { href: "/repertoire", label: "Repertoire" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-primary-dark/90 backdrop-blur supports-[backdrop-filter]:bg-primary-dark/75">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 sm:py-3">
        <Link
          href="/"
          onClick={close}
          aria-label="Backbeat — Home"
          className="flex items-center"
        >
          <Image
            src="/images/logo-light.png"
            alt="Backbeat"
            width={470}
            height={290}
            priority
            className="h-14 w-auto sm:h-20"
          />
        </Link>

        <nav className="hidden items-center gap-4 md:flex lg:gap-9">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative pl-[0.14em] text-[0.7rem] font-medium uppercase tracking-[0.14em] text-white/70 transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100 lg:pl-[0.18em] lg:text-[0.8rem] lg:tracking-[0.18em]"
            >
              {l.label}
            </Link>
          ))}
          <EnquiryTrigger className="whitespace-nowrap rounded-full bg-accent px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-accent-light lg:px-5 lg:py-2.5 lg:text-[0.75rem] lg:tracking-[0.12em]">
            Check availability
          </EnquiryTrigger>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <EnquiryTrigger
            aria-label="Open enquiry form"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white transition hover:bg-white/15"
          >
            <Mail className="h-5 w-5" strokeWidth={2} />
          </EnquiryTrigger>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white shadow-md transition hover:bg-accent-light"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        </div>
      </header>

      {open ? (
        <>
          <button
            type="button"
            aria-label="Close menu"
            onClick={close}
            className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm md:hidden"
          />
          <aside
            id="mobile-nav"
            className="fixed inset-y-0 right-0 z-[60] flex w-80 max-w-[85vw] flex-col overflow-y-auto border-l border-white/10 bg-primary-dark shadow-2xl md:hidden"
          >
            <div className="relative flex items-start justify-between border-b-2 border-accent bg-primary px-6 pt-8 pb-6">
              <div>
                <span className="mt-2 block font-display text-3xl leading-none text-white">
                  Menu
                </span>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                className="-mr-2 flex h-11 w-11 items-center justify-center rounded-md text-white transition hover:bg-white/10"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col px-6 pb-6 pt-2">
              <ul className="flex flex-col">
                {navLinks.map((l) => (
                  <li key={l.href} className="border-b border-white/10">
                    <Link
                      href={l.href}
                      onClick={close}
                      className="flex items-center justify-between py-4 font-display text-2xl leading-none text-white transition hover:text-accent"
                    >
                      {l.label}
                      <ArrowUpRight
                        className="h-5 w-5 text-white/35"
                        strokeWidth={1.5}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <EnquiryTrigger
                  onClick={close}
                  className="block w-full rounded-full bg-accent px-6 py-3.5 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-accent-light"
                >
                  Check availability
                </EnquiryTrigger>
              </div>
            </nav>
          </aside>
        </>
      ) : null}
    </>
  );
}
