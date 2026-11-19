import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IconArrowRight, IconWhatsapp } from "@/components/ui/icons";
import { whatsappLinkForArea } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] h-[26rem] w-[26rem] rounded-full bg-sage-light opacity-60 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <h1 className="mx-auto font-display text-[2.25rem] font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            ¿Tuviste un accidente de trabajo? Te ayudo a reclamarle a la ART lo
            que te corresponde.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Accidentes, enfermedades profesionales, altas médicas y porcentajes
            de incapacidad. Analizo tu caso y te explico con claridad qué podés
            reclamar y cómo.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              href={whatsappLinkForArea("un accidente de trabajo")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsapp className="h-4 w-4" />
              Hablar por WhatsApp
            </Button>
            <Button href="#contacto" variant="secondary">
              Solicitar una consulta
              <IconArrowRight />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
