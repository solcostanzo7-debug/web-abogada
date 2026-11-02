import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconArrowRight, IconCheck, practiceIcons } from "@/components/ui/icons";
import { practiceAreas } from "@/lib/content";
import Link from "next/link";

const VISIBLE_SITUATIONS = 6;

export function PracticeAreas() {
  const featured = practiceAreas.filter((area) => area.featured);
  const others = practiceAreas.filter((area) => !area.featured);

  return (
    <section id="servicios" className="bg-ivory-alt py-24">
      <Container>
        <SectionHeading
          eyebrow="Áreas de práctica"
          title="En qué te puedo ayudar"
          description="Me enfoco en dos áreas principales, para poder dedicarle a cada caso el análisis y la atención que necesita."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {featured.map((area) => {
            const Icon = practiceIcons[area.icon];
            const visible = area.situations.slice(0, VISIBLE_SITUATIONS);

            return (
              <article
                key={area.slug}
                data-reveal
                className="flex flex-col rounded-2xl border border-line bg-cream p-7 transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(42,35,32,0.1)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-plum-light text-plum-dark">
                  <Icon />
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {area.name}
                </h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-soft">
                  {area.description}
                </p>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.1em] text-ink-faint">
                  {area.helpLabel ?? "Puedo ayudarte si:"}
                </p>
                <ul className="mt-3 space-y-2.5">
                  {visible.map((situation) => (
                    <li key={situation} className="flex items-start gap-2.5 text-sm leading-snug text-ink-soft">
                      <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sage" />
                      <span>{situation}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/?motivo=${area.slug}#contacto`}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-plum transition-colors hover:text-plum-dark"
                >
                  Consultar por {area.shortName.toLowerCase()}
                  <IconArrowRight />
                </Link>
              </article>
            );
          })}
        </div>

        {others.length > 0 && (
          <div data-reveal className="mt-8 rounded-2xl border border-line bg-cream/60 px-7 py-6">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-faint">
              También asesoro en
            </p>
            <ul className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
              {others.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/?motivo=${area.slug}#contacto`}
                    className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-ink transition-colors hover:text-plum"
                  >
                    {area.name}
                    <IconArrowRight />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </section>
  );
}
