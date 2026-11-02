export type PracticeArea = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  description: string;
  situations: string[];
  helpLabel?: string;
  icon: "work" | "car" | "shield";
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "accidentes-de-trabajo-art",
    name: "Accidentes de Trabajo",
    shortName: "Trabajo",
    summary:
      "Para quienes sufrieron un accidente o una enfermedad vinculada con su trabajo.",
    description:
      "Si te accidentaste en tu trabajo o desarrollaste una enfermedad por tu actividad laboral, te ayudo a entender qué te corresponde y a reclamarlo ante la ART.",
    situations: [
      "Tuviste un accidente en tu lugar de trabajo",
      "Te accidentaste yendo o volviendo del trabajo (in itinere)",
      "Desarrollaste una enfermedad relacionada con tu actividad laboral",
      "La ART rechazó tu siniestro",
      "Te dieron el alta médica pero seguís con molestias o lesiones",
      "Necesitás determinar o reclamar un grado de incapacidad",
      "Tenés una diferencia con la ART sobre tu caso",
      "Te citaron a una Comisión Médica",
      "Buscás una indemnización por incapacidad",
      "Un familiar falleció a causa de un accidente laboral",
    ],
    icon: "work",
  },
  {
    slug: "accidentes-de-transito",
    name: "Accidentes de Tránsito",
    shortName: "Tránsito",
    summary: "Para reclamar los daños e indemnizaciones que te corresponden.",
    description:
      "Si tuviste un accidente en auto, en moto, como peatón o como pasajero, te ayudo a reclamar la indemnización por tus lesiones y tus daños materiales.",
    situations: [
      "Sufriste un accidente conduciendo un auto o una moto",
      "Sufriste un accidente como peatón",
      "Sufriste un accidente como pasajero de un vehículo",
      "Tenés lesiones físicas a raíz del siniestro",
      "Hay daños materiales en tu vehículo u otros bienes",
      "La aseguradora te ofrece menos de lo que corresponde",
    ],
    icon: "car",
  },
  {
    slug: "defensa-del-consumidor",
    name: "Defensa del Consumidor",
    shortName: "Consumidor",
    summary: "Para conflictos cotidianos entre consumidores y empresas.",
    description:
      "Si una empresa incumplió lo pactado, te cobró de más o no te dio una solución, te ayudo a hacer valer tus derechos como consumidor.",
    situations: [
      "Incumplimientos de productos o servicios",
      "Problemas con una compra online",
      "Productos defectuosos o conflictos de garantía",
      "Cobros indebidos",
      "Conflictos con tu banco o tarjeta de crédito",
      "Débitos o consumos que no reconocés",
    ],
    helpLabel: "Puedo ayudarte con:",
    icon: "shield",
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

export const processSteps = [
  {
    number: "01",
    title: "Primera consulta",
    description:
      "Me contás qué te pasó y evaluamos juntos tu situación para entender el panorama general de tu caso.",
  },
  {
    number: "02",
    title: "Análisis del caso",
    description:
      "Reviso la documentación disponible y analizo la viabilidad y el alcance real de tu reclamo.",
  },
  {
    number: "03",
    title: "Estrategia",
    description:
      "Definimos juntos el camino a seguir: negociación, reclamo administrativo o instancia judicial, según corresponda.",
  },
  {
    number: "04",
    title: "Seguimiento",
    description:
      "Te acompaño en cada etapa del proceso y te mantengo informado sobre el avance de tu caso.",
  },
];

export const faqs = [
  {
    question: "¿Cómo solicito una consulta?",
    answer:
      "Podés escribirme por WhatsApp, completar el formulario de contacto de esta página o enviarme un email. Te respondo a la brevedad para coordinar un primer encuentro.",
  },
  {
    question: "¿La primera consulta tiene costo?",
    answerLead: "Depende del tipo de caso.",
    answer:
      "En accidentes de trabajo y accidentes de tránsito, la consulta inicial no tiene costo y los honorarios se abonan una vez obtenida la indemnización. En casos de defensa del consumidor, la consulta profesional sí tiene costo. Antes de avanzar, siempre te explico con claridad cómo trabajo y cuáles son los honorarios aplicables a tu caso.",
  },
  {
    question: "¿Atienden de manera virtual?",
    answer:
      "Sí. Podés realizar tu consulta de manera virtual, a través de videollamada, o coordinar una reunión presencial en CABA, según lo que te resulte más cómodo.",
  },
  {
    question: "¿Qué documentación necesito para la consulta?",
    answer:
      "Depende del tipo de caso. Como punto de partida, es útil tener a mano tu DNI, la documentación relacionada con el hecho (denuncias, informes médicos, pólizas, comprobantes, etc.) y cualquier intercambio que hayas tenido con la otra parte o la aseguradora. En la consulta te indico si se necesita algo más.",
  },
  {
    question: "¿Cuánto puede demorar mi caso?",
    answer:
      "El tiempo varía según el tipo de reclamo, su complejidad y si se resuelve por vía extrajudicial o judicial. En la consulta inicial puedo darte una orientación más precisa sobre tu situación particular.",
  },
];

export const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#preguntas-frecuentes", label: "Preguntas frecuentes" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#contacto", label: "Contacto" },
];

export type Testimonial = {
  quote: string;
  name: string;
  area?: string;
  placeholder?: boolean;
};

// Testimonios reales provistos por la clienta. Se pueden seguir sumando
// (ver formulario debajo de esta sección).
export const testimonials: Testimonial[] = [
  {
    quote:
      "La verdad que no entendía nada de cómo hacer el reclamo. Sol me explicó todo desde el principio y siempre pude consultarle cuando tenía alguna duda. Muy clara y atenta.",
    name: "María G",
  },
  {
    quote:
      "Tenía un problema con una empresa que llevaba meses sin poder resolver. Sol analizó mi caso, me explicó las alternativas y pudimos avanzar con el reclamo. Destaco sobre todo la claridad y el trato.",
    name: "Pablo S.",
  },
  {
    quote:
      "Desde el primer contacto sentí que mi caso estaba en buenas manos. Sol se ocupó de cada paso, me mantuvo al tanto de los avances y logramos resolverlo de una manera muy favorable. Excelente profesional y, sobre todo, muy humana.",
    name: "Laura R.",
  },
];
