import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ArtCalculator } from "@/components/sections/art-calculator";

export const metadata: Metadata = {
  title: "Calculadora de indemnización por accidente de trabajo",
  description:
    "Calculá de forma orientativa cuánto te corresponde de indemnización de la ART según tu sueldo, tu porcentaje de incapacidad y tu edad.",
  alternates: { canonical: "/calculadora-art" },
};

export default function CalculadoraArtPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <span className="block font-sans text-sm font-semibold uppercase tracking-[0.14em] text-plum">
            Accidentes de trabajo
          </span>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-[1.15] text-ink sm:text-4xl">
            Calculadora de indemnización por ART
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Si te quedó una incapacidad permanente por un accidente de trabajo,
            calculá de forma aproximada cuánto te corresponde cobrar.
          </p>
        </div>

        <div className="mt-10">
          <ArtCalculator />
        </div>
      </Container>
    </section>
  );
}
