import Image from "next/image";

const members = [
  {
    name: "Liam",
    role: "Vocals",
    photo: "/images/band/1.jpg",
    body: "Started out playing guitar at 13. A few years later he discovered his ability to hold a tune and never looked back. An experienced frontman who keeps the party going all night. Favourite to sing: Summer of 69.",
  },
  {
    name: "Pete",
    role: "Guitar",
    photo: "/images/band/2.jpg",
    body: "Picked up the guitar at 9 and 22 years on he hasn't stopped. On stage he keeps the songs rocking and the beat swinging. Favourite to play: 'Shut Up and Dance', an absolute belter with an epic solo.",
  },
  {
    name: "Tom",
    role: "Bass",
    photo: "/images/band/3.jpg",
    body: "On bass, keeps the songs driving and the dance floor moving. Picked up the bass at 14 and hasn't put it down since. Favourite to play: 'Mr. Brightside', a guaranteed crowd-pleaser.",
  },
  {
    name: "Harvey",
    role: "Drums",
    photo: "/images/band/4.jpg",
    body: "From a first tour at 17 to playing Download Festival two years later. No stranger to hitting the stage. Favourite to drum along to: 'Smells Like Teen Spirit'.",
  },
];

export function MeetTheBand() {
  return (
    <section className="bg-primary-dark py-16 text-white sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow eyebrow--on-dark">The line-up</span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Meet the band.
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-1 overflow-hidden rounded-sm md:grid-cols-4">
          {members.map((m) => (
            <article
              key={m.name}
              className="group relative overflow-hidden bg-zinc-900"
            >
              <div className="relative aspect-[7/9]">
                <Image
                  src={m.photo}
                  alt={`${m.name}, ${m.role}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-sm group-hover:brightness-50"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white transition-transform duration-500 group-hover:-translate-y-1">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-accent-light">
                    {m.role}
                  </span>
                  <h3 className="font-display text-4xl leading-none">
                    {m.name}
                  </h3>
                </div>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="text-center text-sm leading-relaxed text-white/90">
                    {m.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
