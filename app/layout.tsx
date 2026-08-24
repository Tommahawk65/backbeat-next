import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import {
  GoogleTagManager,
  GoogleTagManagerNoscript,
} from "@/components/tracking/GoogleTagManager";
import {
  MetaPixel,
  MetaPixelNoscript,
} from "@/components/tracking/MetaPixel";
import { ConsentDefault } from "@/components/tracking/ConsentDefault";
import { CookieConsent } from "@/components/tracking/CookieConsent";
import { FAQ } from "@/components/sections/FAQ";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { EnquiryDialog } from "@/components/sections/EnquiryDialog";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { OrganizationSchema } from "@/components/seo/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-anton",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.backbeat-band.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Backbeat | Live Indie & Rock Wedding Band — From £1,900",
    template: "%s | Backbeat",
  },
  description:
    "Live indie & rock wedding band from £1,900. Backbeat: full PA, lighting & DJ between sets. Hampshire-based. 5-star Google reviews. Check availability.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Backbeat Wedding Band",
    url: siteUrl,
    title: "Backbeat | Live Indie & Rock Wedding Band — From £1,900",
    description:
      "Live indie & rock wedding band from £1,900. Full PA, lighting & DJ between sets. Hampshire-based. Check availability.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Backbeat | Live Indie & Rock Wedding Band — From £1,900",
    description:
      "Live indie & rock wedding band from £1,900. Full PA, lighting & DJ between sets. Hampshire-based. Check availability.",
  },
  icons: { icon: "/icon.png", apple: "/icon.png" },
  other: {
    "geo.region": "GB-HAM",
    "geo.placename": "Hampshire",
    "geo.position": "51.05;-1.3",
  },
};

export const viewport: Viewport = {
  themeColor: "#242426",
  width: "device-width",
  initialScale: 1,
};

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} h-full overflow-x-clip overscroll-none antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col overflow-x-clip overscroll-none bg-primary-dark">
        <ConsentDefault />
        <OrganizationSchema />
        {gtmId ? <GoogleTagManagerNoscript gtmId={gtmId} /> : null}
        {pixelId ? <MetaPixelNoscript pixelId={pixelId} /> : null}
        <Header />
        {children}
        <FAQ />
        <Footer />
        <MobileStickyCTA />
        <EnquiryDialog />
        {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
        {pixelId ? <MetaPixel pixelId={pixelId} /> : null}
        <CookieConsent />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
