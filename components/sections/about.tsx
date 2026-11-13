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
              Soy abogada egresada de la Universidad de Buenos Aires, con
              más de 10 años de experiencia profesional.
            </p>
            <p>
              Me especializo en accidentes de trabajo y reclamos ante ART.
              También puedo ayudarte con reclamos de cobertura de salud ante
              obras sociales y prepagas, accidentes de tránsito y defensa
              del consumidor.
            </p>
            <p>
              A lo largo de mi carrera trabajé representando tanto a
              personas damnificadas como a compañías aseguradoras. Esta
              experiencia me permitió conocer cómo se analizan y gestionan
              los reclamos desde distintas perspectivas, y hoy me ayuda a
              definir la mejor estrategia para cada caso.
            </p>
            <p className="italic">
              Creo que un buen asesoramiento legal empieza por escuchar,
              explicar con claridad y generar confianza.
            </p>
            <p>
              Por eso, ofrezco una atención cercana, personalizada y
              directa. Mi objetivo es que conozcas tus derechos, entiendas
              las opciones disponibles y sepas qué esperar en cada etapa del
              proceso.
            </p>
            <p className="font-semibold text-ink">
              Mi compromiso es que te sientas acompañado, informado y
              respaldado al momento de defender tus derechos.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
