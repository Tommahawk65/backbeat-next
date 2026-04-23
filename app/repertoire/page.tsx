import type { Metadata } from "next";

import { EnquiryDialog } from "@/components/sections/EnquiryDialog";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Repertoire } from "@/components/sections/repertoire/Repertoire";

export const metadata: Metadata = {
  title: "Setlist — Wedding Band Songs",
  description:
    "Backbeat's wedding band setlist: 60+ indie anthems, rock classics and modern chart hits. Plus one song we'll learn just for you.",
  alternates: { canonical: "/repertoire" },
  openGraph: {
    title: "Setlist — Wedding Band Songs | Backbeat",
    description:
      "60+ indie anthems, rock classics and modern chart hits that keep dance floors packed — plus one learnt just for you.",
    url: "/repertoire",
    type: "website",
  },
};

export default function RepertoirePage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col overflow-x-clip">
        <Repertoire />
      </main>
      <Footer />
      <EnquiryDialog />
    </>
  );
}
