import { Container } from "@/components/ui/container";
import { PortraitPlaceholder } from "@/components/ui/portrait-placeholder";

export function About() {
  return (
    <section id="sobre-mi" className="py-24">
      <Container className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[240px_1fr] lg:gap-14">
        <div data-reveal className="lg:sticky lg:top-28">
          <PortraitPlaceholder
            variant="about"
            className="aspect-[4/5] w-full max-w-[220px] mx-auto lg:mx-0 lg:max-w-none"
          />
        </div>

        <div data-reveal>
          <span className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-plum">
            Sobre mí
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.15] text-ink sm:text-4xl">
            Sol Costanzo
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            <p>
              Soy Sol Costanzo, abogada recibida en la UBA y matriculada en
              CABA (CPACF) y en Provincia de Buenos Aires (CAAL).
            </p>
            <p>
              Me dedico principalmente a acompañar a trabajadores que tuvieron
              un accidente o se enfermaron por su trabajo. Conozco cómo
              trabajan las ART y las aseguradoras, y uso ese conocimiento para
              defender a quien reclama.
            </p>
            <p className="font-semibold text-ink">
              Creo en explicar las cosas claras desde el principio: qué se
              puede reclamar, cuánto puede tardar y qué riesgos hay. Sin
              promesas imposibles.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
