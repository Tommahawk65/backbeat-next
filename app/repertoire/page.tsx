import type { Metadata } from "next";

import { Repertoire } from "@/components/sections/repertoire/Repertoire";

export const metadata: Metadata = {
  title: "Wedding Band Setlist: 60+ Songs",
  description:
    "Backbeat's wedding band setlist: 60+ indie anthems, rock classics and modern chart hits. Plus one song we'll learn just for you.",
  alternates: { canonical: "/repertoire" },
  openGraph: {
    title: "Wedding Band Setlist: 60+ Songs | Backbeat",
    description:
      "60+ indie anthems, rock classics and modern chart hits that keep dance floors packed. Plus one learnt just for you.",
    url: "/repertoire",
    type: "website",
  },
};

export default function RepertoirePage() {
  return (
    <main className="flex flex-1 flex-col overflow-x-clip">
      <Repertoire />
    </main>
  );
}
