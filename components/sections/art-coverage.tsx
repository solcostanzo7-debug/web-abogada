import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      {children}
    </svg>
  );
}

const coverage: { title: string; description: string; icon: ReactNode }[] = [
  {
    title: "Atención médica",
    description:
      "Consultas, estudios, cirugías, internaciones y todo el tratamiento que necesites hasta recuperarte.",
    icon: (
      <Icon>
        <path d="M6 3.5v5a4 4 0 0 0 8 0v-5" {...stroke} />
        <path d="M10 12.5v2.5a4.5 4.5 0 0 0 9 0v-2" {...stroke} />
        <circle cx="19" cy="10.5" r="2" {...stroke} />
      </Icon>
    ),
  },
  {
    title: "Medicamentos",
    description:
      "Toda la medicación que te indiquen por el accidente o la enfermedad laboral.",
    icon: (
      <Icon>
        <rect x="3.5" y="9" width="12" height="6" rx="3" transform="rotate(-45 9.5 12)" {...stroke} />
        <path d="M7.4 9.9l4.2 4.2" {...stroke} />
        <circle cx="17.5" cy="17.5" r="3.5" {...stroke} />
        <path d="M15 20l5-5" {...stroke} />
      </Icon>
    ),
  },
  {
    title: "Prótesis y ortopedia",
    description:
      "Muletas, férulas, prótesis y los elementos que necesites para recuperarte o adaptarte.",
    icon: (
      <Icon>
        <path d="M9 3.5h6M12 3.5v4M8.5 7.5h7l-1 6h-5z" {...stroke} />
        <path d="M10.5 13.5l-1 7M13.5 13.5l1 7M9 20.5h6" {...stroke} />
      </Icon>
    ),
  },
  {
    title: "Rehabilitación",
    description:
      "Kinesiología, fisioterapia y los tratamientos de rehabilitación que hagan falta hasta el alta.",
    icon: (
      <Icon>
        <circle cx="12" cy="5" r="2" {...stroke} />
        <path d="M12 7.5v6M8 10.5l4-1.5 4 1.5M9.5 20.5l2.5-7 2.5 7" {...stroke} />
      </Icon>
    ),
  },
  {
    title: "Indemnización",
    description:
      "Si te quedó una incapacidad permanente, cobrás una indemnización según el porcentaje que se determine.",
    icon: (
      <Icon>
        <path d="M14 3.5H7.5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V8z" {...stroke} />
        <path d="M14 3.5V8h4.5" {...stroke} />
        <path d="M13.5 11.5h-2.25a1.25 1.25 0 0 0 0 2.5h1.5a1.25 1.25 0 0 1 0 2.5H10.5M12 10.5v1M12 16.5v1" {...stroke} />
      </Icon>
    ),
  },
  {
    title: "Gastos de traslado",
    description:
      "Si tenés que viajar para atenderte o hacer tratamiento, la ART se hace cargo del traslado.",
    icon: (
      <Icon>
        <path d="M4.5 16v-3.2c0-.5.2-1 .55-1.35l1.6-1.6c.35-.35.83-.55 1.33-.55h7.1c.5 0 .98.2 1.33.55l1.6 1.6c.35.35.55.85.55 1.35V16" {...stroke} />
        <rect x="3" y="16" width="18" height="3" rx="1.2" {...stroke} />
        <path d="M12 3.5v4M10 5.5h4" {...stroke} />
      </Icon>
    ),
  },
];

// Orden en que se muestran: primero la atención, al final la indemnización.
const order = [
  "Atención médica",
  "Medicamentos",
  "Rehabilitación",
  "Prótesis y ortopedia",
  "Gastos de traslado",
];

export function ArtCoverage() {
  const items = order.map((title) => coverage.find((c) => c.title === title)!);
  const compensation = coverage.find((c) => c.title === "Indemnización")!;

  return (
    <section id="que-cubre-la-art" className="relative overflow-hidden bg-plum py-24 text-cream">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5"
        aria-hidden="true"
      />
      <Container className="relative grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div data-reveal className="lg:sticky lg:top-28 lg:self-start">
          <span className="block font-sans text-sm font-semibold uppercase tracking-[0.14em] text-plum-light">
            Tus derechos
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.15] sm:text-4xl">
            ¿Qué cubre la ART?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream/80 sm:text-lg">
            Desde que la ART acepta tu denuncia, tenés derecho a recibir todo
            esto <strong className="font-semibold text-cream">sin pagar nada</strong>.
          </p>

          <div className="mt-8 rounded-2xl bg-cream p-6 text-ink">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-plum-light text-plum-dark">
                {compensation.icon}
              </div>
              <h3 className="font-display text-xl font-semibold">
                {compensation.title}
              </h3>
            </div>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
              {compensation.description}
            </p>
          </div>
        </div>

        <ul data-reveal className="divide-y divide-cream/15 border-y border-cream/15">
          {items.map((item) => (
            <li key={item.title} className="flex items-start gap-5 py-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cream/25 text-cream">
                {item.icon}
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-cream/75">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
