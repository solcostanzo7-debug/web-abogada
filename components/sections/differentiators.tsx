import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { differentiators } from "@/lib/content";

export function Differentiators() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Por qué trabajar conmigo"
          title="Un acompañamiento pensado para vos"
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {differentiators.map((item, index) => (
            <div key={item.title} data-reveal className="bg-cream p-8">
              <span className="font-display text-sm font-semibold text-plum">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
