import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconArrowRight, IconClock } from "@/components/ui/icons";
import { srtProcedures } from "@/lib/content";
import { whatsappLinkForArea } from "@/lib/site-config";

export function SrtProcedures() {
  return (
    <section id="tramites-srt" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Comisiones Médicas"
          as="h1"
          title="Trámites SRT"
          description="Estos son los trámites que podés iniciar ante las Comisiones Médicas de la Superintendencia de Riesgos del Trabajo cuando no estás de acuerdo con lo que resolvió la ART. Te acompaño en cada uno."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {srtProcedures.map((procedure) => (
            <article
              key={procedure.name}
              data-reveal
              className="flex h-full flex-col rounded-2xl border border-line bg-cream p-6 sm:p-7"
            >
              <h3 className="font-display text-xl font-semibold leading-snug text-ink">
                {procedure.name}
              </h3>
              <p className="mt-2.5 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                {procedure.description}
              </p>
              <p className="mt-4 flex items-start gap-2 rounded-xl bg-ivory-alt/60 px-3.5 py-2.5 text-sm leading-snug text-ink">
                <IconClock className="mt-0.5 h-4 w-4 shrink-0 text-plum" />
                <span>{procedure.when}</span>
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                <a
                  href={whatsappLinkForArea(`el trámite de ${procedure.name.toLowerCase()}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-plum transition-colors hover:text-plum-dark"
                >
                  Consultar por este trámite
                  <IconArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
