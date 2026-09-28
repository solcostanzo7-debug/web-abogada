import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@/components/ui/icons";

export function FreeGuide() {
  return (
    <section className="py-20">
      <Container>
        <div
          data-reveal
          className="relative overflow-hidden rounded-3xl bg-ink px-8 py-12 sm:px-12 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-12"
        >
          <div
            className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-plum opacity-25 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-plum-light">
              Recurso gratuito
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.15] text-cream sm:text-4xl">
              Guía: qué hacer si tuviste un accidente
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cream/70 sm:text-lg">
              Los primeros pasos ante un accidente de trabajo o de tránsito,
              explicados de forma simple — para saber qué hacer antes de
              firmar o aceptar nada.
            </p>
          </div>

          <div className="relative mt-8 lg:mt-0 lg:shrink-0">
            <Button
              href="/descargas/guia-que-hacer-si-tuviste-un-accidente.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar la guía gratis
              <IconArrowRight />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
