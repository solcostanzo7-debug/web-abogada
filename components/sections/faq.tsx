import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconPlus } from "@/components/ui/icons";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section id="preguntas-frecuentes" className="bg-ivory-alt py-24">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Lo que más me preguntan"
          align="center"
        />

        <div className="mt-12 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-cream">
          {faqs.map((item) => (
            <details key={item.question} className="faq-item group px-6 sm:px-7">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left">
                <span className="font-display text-base font-semibold text-ink sm:text-[1.05rem]">
                  {item.question}
                </span>
                <IconPlus className="faq-icon h-5 w-5 shrink-0 text-plum transition-transform duration-200" />
              </summary>
              <p className="pb-5 text-[0.95rem] leading-relaxed text-ink-soft">
                {"answerLead" in item && item.answerLead ? (
                  <strong className="font-semibold text-ink">{item.answerLead} </strong>
                ) : null}
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text:
        "answerLead" in item && item.answerLead
          ? `${item.answerLead} ${item.answer}`
          : item.answer,
    },
  })),
};
