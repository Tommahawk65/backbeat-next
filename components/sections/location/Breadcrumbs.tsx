import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  name: string;
  href?: string;
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.backbeat-band.co.uk";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.href ? { item: `${siteUrl}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="bg-cream pt-8 sm:pt-12"
      >
        <div className="mx-auto max-w-7xl px-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-500">
            {items.map((item, i) => {
              const isLast = i === items.length - 1;
              return (
                <li
                  key={`${item.name}-${i}`}
                  className="flex items-center gap-1.5"
                >
                  {item.href && !isLast ? (
                    <Link
                      href={item.href}
                      className="transition hover:text-accent"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span
                      className={
                        isLast
                          ? "font-medium text-zinc-700"
                          : "text-zinc-500"
                      }
                      aria-current={isLast ? "page" : undefined}
                    >
                      {item.name}
                    </span>
                  )}
                  {!isLast ? (
                    <ChevronRight
                      className="h-3 w-3 flex-none text-zinc-400"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  ) : null}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
