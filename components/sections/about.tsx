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
              más de diez años de ejercicio profesional. Ejerzo la
              abogacía con una premisa muy concreta:{" "}
              <strong className="font-semibold text-ink">
                que cada persona entienda qué está pasando con su caso y
                sepa qué puede esperar.
              </strong>
            </p>
            <p>
              Me especializo en accidentes de trabajo, accidentes de
              tránsito y defensa del consumidor. Durante mi trayectoria
              trabajé representando a trabajadores y personas damnificadas
              y, posteriormente, para compañías aseguradoras. Esta
              experiencia me permitió conocer cómo se analizan y gestionan
              los reclamos desde distintas perspectivas y hoy me ayuda a
              definir la estrategia más adecuada para cada caso.
            </p>
            <p>
              Mi forma de trabajar combina esa experiencia con un
              acompañamiento cercano y directo. Explico las opciones con
              claridad, definimos juntos cómo avanzar y mantengo a cada
              persona informada durante todo el proceso.
            </p>
            <p>
              No trabajo con respuestas estándar. Cada situación es
              diferente y merece una estrategia pensada para ese caso y
              para esa persona.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
