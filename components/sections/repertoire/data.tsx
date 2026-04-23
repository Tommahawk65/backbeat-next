export type Song = { artist: string; title: string };

export const partyClassics: Song[] = [
  { artist: "Adele", title: "Best For Last" },
  { artist: "American Authors", title: "Best Day of My Life" },
  { artist: "Arctic Monkeys", title: "I Bet You Look Good On The Dancefloor" },
  { artist: "Arctic Monkeys", title: "R U Mine?" },
  { artist: "Benson Boone", title: "Beautiful Things" },
  { artist: "blink-182", title: "All The Small Things" },
  { artist: "Bon Iver", title: "Skinny Love" },
  { artist: "Bruce Springsteen", title: "Dancing In the Dark" },
  { artist: "Bryan Adams", title: "Summer Of '69" },
  { artist: "Busted", title: "Year 3000" },
  { artist: "Christina Perri", title: "A Thousand Years" },
  { artist: "Chuck Berry", title: "Johnny B. Goode" },
  { artist: "Counting Crows", title: "Accidentally In Love" },
  { artist: "David Bowie", title: "Let's Dance" },
  { artist: "Dua Lipa", title: "New Rules" },
  { artist: "Ed Sheeran", title: "Castle on the Hill" },
  { artist: "Elton John", title: "I'm Still Standing" },
  { artist: "Florence + The Machine", title: "Dog Days Are Over" },
  { artist: "Foster The People", title: "Pumped Up Kicks" },
  { artist: "Fountains Of Wayne", title: "Stacy's Mom" },
  { artist: "Franz Ferdinand", title: "Take Me Out" },
  { artist: "Gnarls Barkley", title: "Crazy" },
  { artist: "Green Day", title: "Basket Case" },
  { artist: "Grouplove", title: "Tongue Tied" },
  { artist: "Jack Johnson", title: "Banana Pancakes" },
  { artist: "Jet", title: "Are You Gonna Be My Girl" },
  { artist: "Katy Perry", title: "Last Friday Night (T.G.I.F.)" },
  { artist: "Kenny Loggins", title: "Footloose" },
  { artist: "Kings of Leon", title: "Sex on Fire" },
  { artist: "Kings of Leon", title: "Use Somebody" },
  { artist: "Maroon 5", title: "She Will Be Loved" },
  { artist: "Maroon 5 ft. Christina Aguilera", title: "Moves Like Jagger" },
  { artist: "Mark Ronson ft. Amy Winehouse", title: "Valerie" },
  { artist: "McFly", title: "Five Colours In Her Hair" },
  { artist: "MGMT", title: "Electric Feel" },
  { artist: "MGMT", title: "Kids" },
  { artist: "MGMT", title: "Time To Pretend" },
  { artist: "Modest Mouse", title: "Float On" },
  { artist: "Mumford & Sons", title: "Little Lion Man" },
  { artist: "Muse", title: "Starlight" },
  { artist: "Oasis", title: "Don't Look Back In Anger" },
  { artist: "Outkast", title: "Hey Ya!" },
  { artist: "Peter Bjorn and John", title: "Young Folks" },
  { artist: "Queen", title: "Don't Stop Me Now" },
  { artist: "Queens of the Stone Age", title: "No One Knows" },
  { artist: "Smash Mouth", title: "All Star" },
  { artist: "Smash Mouth", title: "I'm A Believer" },
  { artist: "Stereophonics", title: "Dakota" },
  { artist: "Tame Impala", title: "The Less I Know The Better" },
  { artist: "Taylor Swift", title: "Love Story" },
  { artist: "The Black Keys", title: "Tighten Up" },
  { artist: "The Fratellis", title: "Chelsea Dagger" },
  { artist: "The Killers", title: "All These Things That I've Done" },
  { artist: "The Killers", title: "Mr. Brightside" },
  { artist: "The Killers", title: "Somebody Told Me" },
  { artist: "The Knife", title: "Heartbeats" },
  { artist: "The Kooks", title: "Naive" },
  { artist: "The Strokes", title: "Take It Or Leave It" },
  { artist: "The White Stripes", title: "Seven Nation Army" },
  { artist: "TLC", title: "No Scrubs" },
  { artist: "WALK THE MOON", title: "Shut Up and Dance" },
  { artist: "Wheatus", title: "A Little Respect" },
  { artist: "Wheatus", title: "Teenage Dirtbag" },
  { artist: "Whitney Houston", title: "I Wanna Dance With Somebody" },
  { artist: "Young the Giant", title: "My Body" },
];

export const acoustic: Song[] = [
  { artist: "Adele", title: "Best For Last" },
  { artist: "Bon Iver", title: "Skinny Love" },
  { artist: "Christina Perri", title: "A Thousand Years" },
  { artist: "Ed Sheeran", title: "Lego House" },
  { artist: "Ed Sheeran", title: "Tenerife Sea" },
  { artist: "Edward Sharpe & The Magnetic Zeros", title: "Home" },
  { artist: "George Ezra", title: "Budapest" },
  { artist: "Jack Johnson", title: "Banana Pancakes" },
  { artist: "Jason Mraz", title: "I'm Yours" },
  { artist: "Maroon 5", title: "She Will Be Loved" },
  { artist: "The 1975", title: "Falling For You" },
  { artist: "The Knife", title: "Heartbeats" },
];

export function groupByLetter(songs: Song[]) {
  const groups = new Map<string, Song[]>();
  for (const s of songs) {
    const first = s.artist.match(/[a-zA-Z0-9]/)?.[0] ?? "#";
    const key = /[0-9]/.test(first) ? "#" : first.toUpperCase();
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(s);
  }
  return [...groups.entries()].sort(([a], [b]) => {
    if (a === "#") return 1;
    if (b === "#") return -1;
    return a.localeCompare(b);
  });
}

export function Intro({
  eyebrow = "The setlist",
  title = "Floor-fillers, by request.",
  blurb = "Over sixty tracks that keep dance floors packed — plus one song we'll learn just for you, at no extra cost.",
}: {
  eyebrow?: string;
  title?: string;
  blurb?: string;
}) {
  return (
    <div className="mx-auto max-w-4xl px-6 text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
        {title}
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
        {blurb}
      </p>
    </div>
  );
}
