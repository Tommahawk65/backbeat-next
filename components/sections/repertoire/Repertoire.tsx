import { acoustic, Intro, partyClassics, type Song } from "./data";

function SongList({ songs }: { songs: Song[] }) {
  return (
    <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
      {songs.map((s) => (
        <li
          key={`${s.artist}-${s.title}`}
          className="flex items-baseline gap-3 py-2.5"
        >
          <span
            aria-hidden
            className="h-1 w-1 flex-none translate-y-[-3px] rounded-full bg-accent"
          />
          <div className="min-w-0 flex-1 leading-snug">
            <span className="text-base font-semibold text-zinc-900">
              {s.artist}
            </span>
            <span className="text-zinc-400"> · </span>
            <span className="text-sm text-zinc-500">{s.title}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Repertoire() {
  return (
    <section className="bg-cream py-16 sm:py-24 md:py-32">
      <Intro />
      <div className="mx-auto mt-16 max-w-6xl px-6">
        <div className="mb-8 flex flex-col gap-2 border-b border-zinc-300 pb-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-0">
          <span className="eyebrow">Party classics</span>
          <span className="text-[0.65rem] uppercase tracking-[0.32em] [word-spacing:0.4em] text-zinc-500">
            {partyClassics.length}
            {" "}songs · Reception &amp; floor
          </span>
        </div>
        <SongList songs={partyClassics} />

        <div className="mt-20 mb-8 flex flex-col gap-2 border-b border-zinc-300 pb-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-0">
          <span className="eyebrow">Acoustic add-on</span>
          <span className="text-[0.65rem] uppercase tracking-[0.32em] [word-spacing:0.4em] text-zinc-500">
            {acoustic.length}
            {" "}songs · Ceremony &amp; drinks
          </span>
        </div>
        <SongList songs={acoustic} />
      </div>
    </section>
  );
}
