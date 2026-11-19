import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { IconArrowRight, IconWhatsapp } from "@/components/ui/icons";
import { BaremoTables } from "@/components/sections/baremo-tables";
import { whatsappLinkForArea } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Tabla de incapacidades del nuevo baremo (Decreto 549/2025)",
  description:
    "Consultá los porcentajes de incapacidad laboral del nuevo baremo, Decreto 549/2025, por parte del cuerpo: rodilla, columna, mano, hombro, pierna y más.",
  alternates: { canonical: "/baremo" },
  robots: { index: true, follow: true },
};

export default function BaremoPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <span className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-plum">
            Accidentes de trabajo
          </span>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-[1.15] text-ink sm:text-4xl">
            Tabla de incapacidades del nuevo baremo
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            Estos son los porcentajes de incapacidad laboral que fija el
            Decreto 549/2025 para cada lesión, ordenados por parte del cuerpo.
            Buscá la tuya para tener una idea de lo que establece la tabla.
          </p>
        </div>

        <div className="mt-8 max-w-3xl rounded-2xl border border-plum/20 bg-plum-light/60 p-5 text-[0.95rem] leading-relaxed text-ink sm:p-6">
          <p className="font-semibold">Esta tabla es orientativa.</p>
          <p className="mt-1.5 text-ink-soft">
            El porcentaje final lo determina la Comisión Médica según tu
            examen y tus estudios, y puede variar si tenés más de una secuela. Si la Comisión Médica te dio un porcentaje que no refleja lo
            que te quedó, se puede discutir.
          </p>
        </div>

        <div className="mt-10">
          <BaremoTables />
        </div>

        <div className="mt-16 rounded-3xl bg-plum px-7 py-10 text-center sm:px-12">
          <h2 className="font-display text-2xl font-semibold text-cream sm:text-3xl">
            ¿No estás de acuerdo con tu porcentaje?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-cream/85">
            Contame qué te pasó y qué te dictaminaron. Reviso tu caso y te
            digo si hay algo para reclamar.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href={whatsappLinkForArea("mi porcentaje de incapacidad")}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="!border-cream/40 !bg-cream !text-plum-dark hover:!bg-cream/90"
            >
              <IconWhatsapp className="h-4 w-4" />
              Hablar por WhatsApp
            </Button>
            <Button
              href="/?motivo=accidentes-de-trabajo-art#contacto"
              variant="secondary"
              className="!border-cream/40 !text-cream hover:!bg-white/10"
            >
              Solicitar una consulta
              <IconArrowRight />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
