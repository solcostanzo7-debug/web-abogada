import type { Metadata } from "next";
import { ArtCoverage } from "@/components/sections/art-coverage";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "¿Qué cubre la ART?",
  description:
    "Qué prestaciones tiene que darte la ART sin costo después de un accidente de trabajo: atención médica, medicamentos, rehabilitación, prótesis, traslados e indemnización.",
  alternates: { canonical: "/que-cubre-la-art" },
};

export default function QueCubreLaArtPage() {
  return (
    <>
      <ArtCoverage />
      <ScrollReveal />
    </>
  );
}
