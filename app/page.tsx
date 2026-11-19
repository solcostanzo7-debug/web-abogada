import { Hero } from "@/components/sections/hero";
import { OtherAreas, PracticeAreas } from "@/components/sections/practice-areas";
import { SrtProcedures } from "@/components/sections/srt-procedures";
import { About } from "@/components/sections/about";
import { Differentiators } from "@/components/sections/differentiators";
import { Process } from "@/components/sections/process";
import { Contact } from "@/components/sections/contact";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <PracticeAreas />
      <SrtProcedures />
      <OtherAreas />
      <About />
      <Process />
      <Differentiators />
      <Contact />
      <ScrollReveal />
    </>
  );
}
