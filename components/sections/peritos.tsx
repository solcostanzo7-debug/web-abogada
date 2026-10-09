import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { IconArrowRight, IconWhatsapp } from "@/components/ui/icons";
import { peritosService } from "@/lib/content";
import { buildWhatsappLink, peritosWhatsappMessage } from "@/lib/site-config";

export function Peritos() {
  return (
    <section id="peritos" className="relative overflow-hidden bg-steel py-24 text-cream">
      <div
        className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-white/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-steel-dark/60"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div data-reveal className="lg:sticky lg:top-28 lg:self-start">
            <span className="block text-sm font-semibold uppercase tracking-[0.14em] text-steel-light">
              Para peritos judiciales
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.15] sm:text-4xl">
              Cobrá los honorarios de tu trabajo pericial
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cream/80 sm:text-lg">
              {peritosService.description} Vos te ocupás de la pericia; yo me
              ocupo de que se regulen y se paguen.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Profesiones">
              {peritosService.professions.map((profession) => (
                <li
                  key={profession}
                  className="rounded-full border border-cream/25 px-3 py-1 text-sm text-cream/90"
                >
                  {profession}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button
                href={buildWhatsappLink(peritosWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="!border-cream !bg-cream !text-steel-dark hover:!bg-cream/90"
              >
                <IconWhatsapp className="h-5 w-5" />
                Consultar por WhatsApp
              </Button>
              <Button
                href={`/?motivo=${peritosService.slug}#contacto`}
                variant="secondary"
                className="!border-cream/40 !text-cream hover:!bg-cream/10"
              >
                Escribirme
                <IconArrowRight />
              </Button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-0">
            {peritosService.services.map((service, index) => (
              <div
                key={service.title}
                data-reveal
                className={`rounded-2xl bg-cream p-7 text-ink ${
                  // Si la cantidad es impar, la última tarjeta ocupa todo el ancho.
                  index === peritosService.services.length - 1 && index % 2 === 0
                    ? "sm:col-span-2"
                    : ""
                }`}
              >
                <span className="font-display text-sm font-semibold text-steel">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-soft">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
