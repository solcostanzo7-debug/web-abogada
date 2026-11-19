import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@/components/ui/icons";

// TODO: si se define un monto fijo, reemplazar este texto por el costo
// (por ejemplo "$ 30.000").
const CONSULTATION_COST = "La consulta tiene un costo que te informo al agendarla.";

const details = [
  { label: "Costo", value: CONSULTATION_COST },
  { label: "Modalidad", value: "Presencial o por videollamada." },
  {
    label: "Qué traer",
    value:
      "DNI, recibos de sueldo y toda la documentación que tengas del caso (denuncia, estudios, alta, dictámenes, notas, mails).",
  },
];

// Sección "¿Cómo es la primera consulta?"
export function Process() {
  return (
    <section id="consulta" className="bg-ink py-24 text-cream">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div data-reveal>
          <span className="block font-sans text-sm font-semibold uppercase tracking-[0.14em] text-plum-light">
            La consulta
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.15] sm:text-4xl">
            ¿Cómo es la primera consulta?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream/75 sm:text-lg">
            En la primera consulta escucho tu situación, reviso la
            documentación que tengas y te digo si hay un reclamo posible y cuál
            sería la estrategia.
          </p>
          <Button
            href="#contacto"
            variant="secondary"
            className="mt-8 !border-cream/40 !bg-cream !text-plum-dark hover:!bg-cream/90"
          >
            Agendar mi consulta
            <IconArrowRight />
          </Button>
        </div>

        <dl data-reveal className="divide-y divide-cream/15 border-y border-cream/15">
          {details.map((item) => (
            <div key={item.label} className="grid grid-cols-1 gap-1 py-6 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <dt className="font-display text-lg font-semibold text-plum-light">
                {item.label}
              </dt>
              <dd className="text-base leading-relaxed text-cream/80">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
