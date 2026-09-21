import { Container } from "@/components/ui/container";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section className="bg-ink py-24 text-cream">
      <Container>
        <div data-reveal className="max-w-2xl">
          <span className="block font-sans text-sm font-semibold uppercase tracking-[0.14em] text-plum-light">
            Cómo trabajamos
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.15] sm:text-4xl">
            El proceso, paso a paso
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream/70 sm:text-lg">
            Si nunca contrataste a un abogado, es normal no saber qué esperar.
            Así es como avanza tu caso desde el primer contacto.
          </p>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.number} data-reveal className="relative pl-0">
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl font-semibold text-plum-light/80">
                  {step.number}
                </span>
                {index < processSteps.length - 1 ? (
                  <span className="hidden h-px flex-1 bg-cream/15 sm:block" aria-hidden="true" />
                ) : null}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/65">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
