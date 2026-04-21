import Image from "next/image";

const members = [
  {
    name: "Liam",
    role: "Vocals",
    photo: "/images/band/1.jpeg",
    body: "Started out playing guitar at 13 — a few years later he discovered his ability to hold a tune and never looked back. An experienced frontman who keeps the party going all night. Favourite to sing: Summer of 69.",
  },
  {
    name: "Pete",
    role: "Guitar",
    photo: "/images/band/2.jpeg",
    body: "Picked up the guitar at 9 and 22 years on he hasn't stopped. On stage he keeps the songs rocking and the beat swinging. Favourite to play: 'Shut Up and Dance' — an absolute belter with an epic solo.",
  },
  {
    name: "Tom",
    role: "Bass",
    photo: "/images/band/3.jpeg",
    body: "On bass, keeps the songs driving and the dance floor moving. Picked up the bass at 14 and hasn't put it down since. Favourite to play: 'Mr. Brightside' — a guaranteed crowd-pleaser.",
  },
  {
    name: "Harvey",
    role: "Drums",
    photo: "/images/band/4.jpeg",
    body: "From a first tour at 17 to playing Download Festival two years later — no stranger to hitting the stage. Favourite to drum along to: 'Smells Like Teen Spirit'.",
  },
];

export function MeetTheBand() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">The line-up</span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
            Meet the band.
          </h2>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {members.map((m) => (
            <article
              key={m.name}
              className="reveal-up group flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-zinc-100">
                <Image
                  src={m.photo}
                  alt={`${m.name} — ${m.role}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover grayscale transition duration-700 group-hover:grayscale-0"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-3">
                <h3 className="font-display text-3xl leading-none text-zinc-900 sm:text-4xl">
                  {m.name}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {m.role}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {m.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
