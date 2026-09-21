import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PortraitPlaceholder } from "@/components/ui/portrait-placeholder";
import { IconArrowRight, IconWhatsapp } from "@/components/ui/icons";
import { practiceAreas } from "@/lib/content";
import { buildWhatsappLink, defaultWhatsappMessage } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] h-[26rem] w-[26rem] rounded-full bg-sage-light opacity-60 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div data-reveal>
          <h1 className="max-w-xl font-display text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            Cuando aparece un problema, saber cómo actuar hace la diferencia.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
            Te asesoro y acompaño ante accidentes de trabajo, accidentes de
            tránsito y conflictos con empresas como consumidor.
          </p>
          <p className="mt-3 max-w-lg font-display text-lg italic leading-relaxed text-plum">
            Te explico tus opciones con claridad y te acompaño durante todo
            el proceso.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#contacto">
              Solicitar una consulta
              <IconArrowRight />
            </Button>
            <Button
              href={buildWhatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              <IconWhatsapp className="h-4 w-4" />
              Hablar por WhatsApp
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-6">
            {practiceAreas.map((area) => (
              <span key={area.slug} className="text-sm font-medium text-ink-soft">
                {area.shortName}
              </span>
            ))}
          </div>
        </div>

        <div className="relative" data-reveal>
          <PortraitPlaceholder
            variant="hero"
            className="aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 lg:max-w-none"
          />
          <div className="absolute bottom-6 left-6 right-6 hidden max-w-[15rem] rounded-2xl bg-cream p-5 shadow-[0_20px_45px_rgba(34,37,42,0.25)] sm:block">
            <p className="font-display text-base font-semibold leading-snug text-ink">
              Acompañamiento cercano en cada etapa de tu caso.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
