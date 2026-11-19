export type PracticeArea = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  situations?: string[];
  ctaLabel: string;
  featured?: boolean;
  icon: "work" | "car" | "shield" | "heart";
};

// El orden importa: es el mismo que se usa en la lista desplegable del
// formulario de contacto y en el pie de página.
export const practiceAreas: PracticeArea[] = [
  {
    slug: "accidentes-de-trabajo-art",
    name: "Accidente de trabajo / ART",
    shortName: "Accidentes de trabajo",
    description:
      "Si te lastimaste o te enfermaste por tu trabajo, la ART tiene la obligación de darte atención médica, pagarte el sueldo mientras no puedas trabajar e indemnizarte si te quedó una secuela. Te acompaño para que eso se cumpla.",
    situations: [
      "Tuviste un accidente en el trabajo o en el trayecto de tu casa al trabajo (in itinere).",
      "Tenés una enfermedad causada por tu trabajo.",
      "La ART rechazó tu denuncia o no te da las prestaciones.",
      "Te dieron el alta y seguís con dolor o no podés hacer tu tarea.",
      "La Comisión Médica te dio 0% o un porcentaje que no refleja lo que te quedó.",
      "Tu empleador no quiere hacer la denuncia.",
    ],
    ctaLabel: "Consultar por mi accidente",
    featured: true,
    icon: "work",
  },
  {
    slug: "defensa-del-consumidor",
    name: "Defensa del consumidor",
    shortName: "Defensa del consumidor",
    description:
      "Bancos, tarjetas, deudas, planes de ahorro, viajes y vuelos cancelados. Si una empresa no cumple lo que te vendió o te cobra lo que no corresponde, podés reclamar.",
    ctaLabel: "Consultar por consumidor",
    icon: "shield",
  },
  {
    slug: "accidentes-de-transito",
    name: "Accidente de tránsito",
    shortName: "Accidentes de tránsito",
    description:
      "Choques, accidentes en moto, en colectivo o como peatón. Reclamo de los daños materiales y de las lesiones ante el responsable y su aseguradora.",
    ctaLabel: "Consultar por tránsito",
    icon: "car",
  },
  {
    slug: "cobertura-de-salud",
    name: "Salud: obra social o prepaga",
    shortName: "Salud: obras sociales y prepagas",
    description:
      "Cobertura negada o parcial de leche de fórmula, medicamentos, tratamientos y prestaciones. Reclamos y amparos de salud.",
    ctaLabel: "Consultar por salud",
    icon: "heart",
  },
];

export const differentiators = [
  {
    title: "Atención personalizada",
    description:
      "Cada consulta la atiendo yo directamente. No hablás con un call center ni con una persona distinta en cada contacto.",
  },
  {
    title: "Comunicación clara",
    description:
      "Te explico tu situación y tus opciones en lenguaje simple, sin tecnicismos innecesarios, para que entiendas cada paso del proceso.",
  },
  {
    title: "Seguimiento del caso",
    description:
      "Te mantengo al tanto del estado de tu reclamo en cada etapa, sin que tengas que estar preguntando qué está pasando.",
  },
  {
    title: "Estrategia adaptada a tu situación",
    description:
      "No hay dos casos iguales. Analizo las particularidades de tu situación para definir la estrategia más conveniente para vos.",
  },
];

export const navLinks = [
  { href: "/#servicios", label: "Accidentes de trabajo" },
  { href: "/#otras-areas", label: "Otras áreas" },
  { href: "/baremo", label: "Tabla de incapacidades" },
  { href: "/#sobre-mi", label: "Sobre mí" },
  { href: "/#contacto", label: "Contacto" },
];
