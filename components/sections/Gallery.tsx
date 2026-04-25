import Image from "next/image";

const photos = [
  {
    i: 1,
    w: 1486,
    h: 2229,
    alt: "Backbeat lead vocalist performing live at a wedding reception",
  },
  {
    i: 2,
    w: 1486,
    h: 2229,
    alt: "Backbeat guitarist playing on stage at a Hampshire wedding",
  },
  {
    i: 3,
    w: 1486,
    h: 2229,
    alt: "Backbeat bassist mid-set at a south coast wedding",
  },
  {
    i: 4,
    w: 1443,
    h: 2165,
    alt: "Live wedding band performing under stage lights",
  },
  {
    i: 5,
    w: 1342,
    h: 2014,
    alt: "Backbeat indie wedding band performing live on stage",
  },
  {
    i: 6,
    w: 1270,
    h: 1905,
    alt: "Wedding band frontman singing into the microphone",
  },
  {
    i: 7,
    w: 2004,
    h: 1336,
    alt: "Backbeat full band on stage at a UK wedding reception",
  },
  {
    i: 9,
    w: 2021,
    h: 1347,
    alt: "Wedding dance floor packed with guests during a live band set",
  },
  {
    i: 11,
    w: 2160,
    h: 1215,
    alt: "Backbeat performing late-night at a Hampshire wedding venue",
  },
  {
    i: 12,
    w: 1972,
    h: 1314,
    alt: "Live wedding band performing with full lighting rig",
  },
  {
    i: 13,
    w: 1985,
    h: 1323,
    alt: "Backbeat playing for a busy dance floor at a wedding reception",
  },
  {
    i: 14,
    w: 1392,
    h: 1392,
    alt: "Backbeat wedding band guitarist mid-performance",
  },
  {
    i: 15,
    w: 2066,
    h: 1378,
    alt: "Backbeat live on stage at a south of England wedding",
  },
  {
    i: 17,
    w: 1486,
    h: 1486,
    alt: "Backbeat indie & rock wedding band performing live",
  },
] as const;

type Photo = (typeof photos)[number];

function photoBy(i: number): Photo {
  return photos.find((p) => p.i === i)!;
}

// 3-column masonry. Each column starts with a different shape (wide / tall /
// w169) so horizontal bands don't form. A per-column uniform scale factor
// stretches or shrinks every tile's native aspect by the same small amount
// (max ~5.5%) so all three columns end at exactly the same height — flat
// top, flat bottom, uniform gaps.
const COLS: number[][] = [
  [7, 6, 12, 4],
  [2, 14, 5, 13],
  [11, 3, 15, 1],
];

function SectionIntro() {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <span className="eyebrow">On stage</span>
        <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
          Gallery.
        </h2>
      </div>
      <p className="max-w-sm text-sm leading-relaxed text-zinc-600">
        Real nights, real weddings &mdash; shots from across the South Coast
        and beyond.
      </p>
    </div>
  );
}

function ColTile({
  n,
  sizes,
  priority = false,
  scale = 1,
}: {
  n: number;
  sizes: string;
  priority?: boolean;
  scale?: number;
}) {
  const p = photoBy(n);
  const displayAspectH = (p.h / p.w) * scale;
  return (
    <div
      className="reveal-photo group relative block overflow-hidden rounded-sm bg-zinc-100"
      style={{ aspectRatio: `1 / ${displayAspectH}` }}
    >
      <Image
        src={`/images/gallery/${n}.jpg`}
        alt={p.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  );
}

function colScales(cols: number[][]): number[] {
  const nativeSums = cols.map((col) =>
    col.reduce((s, n) => s + photoBy(n).h / photoBy(n).w, 0),
  );
  const target =
    nativeSums.reduce((a, b) => a + b, 0) / nativeSums.length;
  return nativeSums.map((sum) => target / sum);
}

// Mobile masonry: columns start with different aspects (square vs landscape)
// so the first row is intentionally offset — creates the staircase rhythm
// desktop has. Scales then normalize total column height so both end flush.
const MOBILE_COLS: number[][] = [
  [14, 9, 13],
  [12, 15, 17],
];

export function Gallery() {
  const scales = colScales(COLS);
  const mobileScales = colScales(MOBILE_COLS);
  return (
    <section id="gallery" className="scroll-mt-24 bg-cream py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionIntro />
        <div className="mt-10 grid grid-cols-2 gap-2 sm:hidden">
          {MOBILE_COLS.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-2">
              {col.map((n, idx) => (
                <ColTile
                  key={n}
                  n={n}
                  scale={mobileScales[ci]}
                  sizes="50vw"
                  priority={ci === 0 && idx === 0}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="mt-12 hidden grid-cols-3 gap-4 sm:grid">
          {COLS.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-4">
              {col.map((n, idx) => (
                <ColTile
                  key={n}
                  n={n}
                  scale={scales[ci]}
                  sizes="33vw"
                  priority={ci < 2 && idx === 0}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
