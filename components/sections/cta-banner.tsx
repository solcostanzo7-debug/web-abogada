import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IconArrowRight, IconWhatsapp } from "@/components/ui/icons";
import { buildWhatsappLink, defaultWhatsappMessage } from "@/lib/site-config";

export function CtaBanner() {
  return (
    <section className="py-20">
      <Container>
        <div
          data-reveal
          className="relative overflow-hidden rounded-3xl bg-plum px-8 py-14 text-center sm:px-16 sm:py-16"
        >
          <div
            className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-white/10"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -top-16 -left-10 h-40 w-40 rounded-full bg-white/10"
            aria-hidden="true"
          />
          <h2 className="relative font-display text-3xl font-semibold text-cream sm:text-4xl">
            ¿Necesitás asesoramiento?
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-base leading-relaxed text-cream/85 sm:text-lg">
            Contame qué te pasó y te ayudo a entender cuáles son tus opciones.
            Sin vueltas, sin tecnicismos.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#contacto" variant="secondary" className="!border-cream/40 !bg-cream !text-plum-dark hover:!bg-cream/90">
              Solicitar una consulta
              <IconArrowRight />
            </Button>
            <Button
              href={buildWhatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="!border-cream/40 !text-cream hover:!bg-white/10"
            >
              <IconWhatsapp className="h-4 w-4" />
              Escribir por WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
