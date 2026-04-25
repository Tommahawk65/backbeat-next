import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const IMAGES: GalleryImage[] = [
  {
    src: "/images/gallery/7.jpg",
    alt: "Backbeat full band on stage at a UK wedding reception",
    width: 2004,
    height: 1336,
  },
  {
    src: "/images/gallery/9.jpg",
    alt: "Wedding dance floor packed with guests during a live band set",
    width: 2021,
    height: 1347,
  },
  {
    src: "/images/gallery/12.jpg",
    alt: "Live wedding band performing with full lighting rig",
    width: 1972,
    height: 1314,
  },
];

type LocationGalleryProps = {
  eyebrow?: string;
  heading?: React.ReactNode;
  blurb?: React.ReactNode;
};

export function LocationGallery({
  eyebrow = "On the night",
  heading = "What it actually looks like.",
  blurb = "Real weddings, real dance floors — no stock photography.",
}: LocationGalleryProps) {
  return (
    <section className="bg-cream py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
            {heading}
          </h2>
          {blurb ? (
            <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
              {blurb}
            </p>
          ) : null}
        </div>

        <ul className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4">
          {IMAGES.map((img) => (
            <li
              key={img.src}
              className="relative overflow-hidden rounded-sm bg-zinc-200"
              style={{ aspectRatio: `${img.width} / ${img.height}` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
