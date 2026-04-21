import Image from "next/image";

const photos = [
  {
    src: "/images/gallery/1.jpg",
    alt: "Backbeat wedding band performing",
    aspect: "aspect-[4/5]",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/images/gallery/2.jpg",
    alt: "Backbeat live at a wedding",
    aspect: "aspect-square",
    span: "",
  },
  {
    src: "/images/gallery/3.jpg",
    alt: "Backbeat guitarist on stage",
    aspect: "aspect-square",
    span: "",
  },
  {
    src: "/images/gallery/4.jpg",
    alt: "Backbeat frontman performing",
    aspect: "aspect-[4/5]",
    span: "",
  },
  {
    src: "/images/gallery/5.jpg",
    alt: "Backbeat drummer live",
    aspect: "aspect-[4/5]",
    span: "",
  },
  {
    src: "/images/gallery/6.jpg",
    alt: "Backbeat packed dance floor",
    aspect: "aspect-square",
    span: "sm:col-span-2",
  },
  {
    src: "/images/gallery/7.jpg",
    alt: "Backbeat outdoor wedding set",
    aspect: "aspect-square",
    span: "",
  },
  {
    src: "/images/gallery/8.jpg",
    alt: "Backbeat full band live",
    aspect: "aspect-square",
    span: "",
  },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 bg-cream py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">On stage</span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
              Gallery.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-zinc-600">
            Real nights, real weddings &mdash; shots from across the South
            Coast and beyond.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {photos.map((p, i) => (
            <div
              key={p.src}
              className={`reveal-up group relative overflow-hidden rounded-sm ${p.aspect} ${p.span}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                loading={i < 3 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
