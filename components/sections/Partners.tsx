import Image from "next/image";

const partners = [
  { src: "/images/partners/airbnb.png", alt: "Airbnb" },
  { src: "/images/partners/hubspot.png", alt: "HubSpot" },
  { src: "/images/partners/army.png", alt: "British Army" },
  { src: "/images/partners/microsoft.png", alt: "Microsoft" },
  { src: "/images/partners/fedex.png", alt: "FedEx" },
];

export function Partners() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="border-y border-zinc-200 py-6">
          <p className="eyebrow mb-4 block text-center">
            Trusted by hundreds of couples &mdash; and brands like
          </p>
          <div className="reveal-in flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:justify-between sm:gap-x-8">
            {partners.map((p) => (
              <Image
                key={p.alt}
                src={p.src}
                alt={p.alt}
                width={160}
                height={60}
                className="h-8 w-auto sm:h-9"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
