import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { IconArrowRight, IconCheck, practiceIcons } from "@/components/ui/icons";
import { practiceAreas } from "@/lib/content";
import Link from "next/link";

const contactHref = (slug: string) => `/?motivo=${slug}#contacto`;

// Sección principal: Accidentes de trabajo y ART.
export function PracticeAreas() {
  const main = practiceAreas.find((area) => area.featured)!;
  const Icon = practiceIcons[main.icon];

  return (
    <section id="servicios" className="bg-ivory-alt py-24">
      <Container>
        <div
          data-reveal
          className="grid grid-cols-1 gap-10 rounded-3xl border border-line bg-cream p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:p-14"
        >
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-plum-light text-plum-dark">
              <Icon className="h-7 w-7" />
            </div>
            <span className="mt-6 block font-sans text-sm font-semibold uppercase tracking-[0.14em] text-plum">
              Servicio principal
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.15] text-ink sm:text-4xl">
              Accidentes de trabajo
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
              {main.description}
            </p>
            <Button href={contactHref(main.slug)} className="mt-8">
              {main.ctaLabel}
              <IconArrowRight />
            </Button>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-faint">
              Te ayudo si:
            </p>
            <ul className="mt-4 space-y-3.5">
              {main.situations?.map((situation) => (
                <li
                  key={situation}
                  className="flex items-start gap-3 rounded-xl border border-line bg-ivory px-4 py-3.5 text-[0.95rem] leading-snug text-ink"
                >
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                  <span>{situation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

// Otras áreas: tarjetas del mismo tamaño.
export function OtherAreas() {
  const others = practiceAreas.filter((area) => !area.featured);

  return (
    <section id="otras-areas" className="bg-ivory-alt py-24">
      <Container>
        <SectionHeading eyebrow="Otras áreas" title="También te puedo ayudar con" />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {others.map((area) => {
            const Icon = practiceIcons[area.icon];
            return (
              <article
                key={area.slug}
                data-reveal
                className="flex h-full flex-col rounded-2xl border border-line bg-cream p-7 transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(42,35,32,0.1)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-plum-light text-plum-dark">
                  <Icon />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {area.shortName}
                </h3>
                <p className="mt-2.5 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                  {area.description}
                </p>
                <Link
                  href={contactHref(area.slug)}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-plum transition-colors hover:text-plum-dark"
                >
                  {area.ctaLabel}
                  <IconArrowRight />
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
