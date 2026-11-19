import { Hero } from "@/components/sections/hero";
import { OtherAreas, PracticeAreas } from "@/components/sections/practice-areas";
import { About } from "@/components/sections/about";
import { Differentiators } from "@/components/sections/differentiators";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <PracticeAreas />
      <OtherAreas />
      <About />
      <Process />
      <Differentiators />
      <Testimonials />
      <Contact />
      <ScrollReveal />
    </>
  );
}
