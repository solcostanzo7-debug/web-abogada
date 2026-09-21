import { Hero } from "@/components/sections/hero";
import { PracticeAreas } from "@/components/sections/practice-areas";
import { About } from "@/components/sections/about";
import { Differentiators } from "@/components/sections/differentiators";
import { Process } from "@/components/sections/process";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Faq, faqSchema } from "@/components/sections/faq";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <PracticeAreas />
      <About />
      <Differentiators />
      <Process />
      <CtaBanner />
      <Faq />
      <Testimonials />
      <Contact />
      <ScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
