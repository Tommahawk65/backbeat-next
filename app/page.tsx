import { Hero } from "@/components/sections/Hero";
import { HeroTrustBar } from "@/components/sections/HeroTrustBar";
import { About } from "@/components/sections/About";
import { Showreel } from "@/components/sections/Showreel";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Gallery } from "@/components/sections/Gallery";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { MeetTheBand } from "@/components/sections/MeetTheBand";
import { MakeItANight } from "@/components/sections/MakeItANight";
import { HomePageSchema } from "@/components/seo/StructuredData";

export default function Home() {
  return (
    <>
      <HomePageSchema />
      <Hero />
      <HeroTrustBar />
      <About />
      <Showreel videoId="oRG6h3bYXWE" />
      <WhyChooseUs />
      <GoogleReviews />
      <Gallery />
      <MeetTheBand />
      <MakeItANight />
    </>
  );
}
