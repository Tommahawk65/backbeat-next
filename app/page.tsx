import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Partners } from "@/components/sections/Partners";
import { Showreel } from "@/components/sections/Showreel";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { MeetTheBand } from "@/components/sections/MeetTheBand";
import { MakeItANight } from "@/components/sections/MakeItANight";
import { HomePageSchema } from "@/components/seo/StructuredData";

export default function Home() {
  return (
    <>
      <HomePageSchema />
      <Hero />
      <Partners />
      <About />
      <Showreel videoId="oRG6h3bYXWE" />
      <WhyChooseUs />
      <MeetTheBand />
      <Gallery />
      <Testimonials />
      <MakeItANight />
    </>
  );
}
