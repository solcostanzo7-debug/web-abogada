// Datos generales del sitio. Los valores marcados como PLACEHOLDER deben
// reemplazarse por información real antes de publicar la web.
export const siteConfig = {
  name: "Sol Costanzo",
  role: "Abogada",
  legalName: "Sol Costanzo — Abogada",
  url: "https://solcostanzoabogada.com.ar",
  locale: "es_AR",
  description:
    "Abogada especializada en accidentes de trabajo, enfermedades profesionales y reclamos a la ART en CABA y Provincia de Buenos Aires. También asesoro en defensa del consumidor, accidentes de tránsito y cobertura de salud.",
  shortDescription:
    "Accidentes de trabajo, enfermedades profesionales y reclamos a la ART en CABA y GBA.",
  footerTagline: "Defendé tus derechos. Te acompaño a hacerlo con claridad y cercanía.",
  phoneDisplay: "11 6206-2209",
  whatsappNumber: "5491162062209",
  email: "solcostanzoabogada@gmail.com",
  city: "Buenos Aires",
  region: "CABA y GBA",
  serviceArea: "CABA y GBA, con cita previa",
  hours: "Lunes a viernes de 9 a 18 h",
  instagramHandle: "@solcostanzo.abogada",
  instagramUrl: "https://www.instagram.com/solcostanzo.abogada",
  linkedinUrl: "https://www.linkedin.com/in/sol-costanzo-802630197/",
  matricula: "T. 141, F. 692 (CPACF) · T. IV, F. 590 (CAAL)",
  university: "Universidad de Buenos Aires (UBA)",
  metaPixelId: "1462795202336458",
} as const;

export function buildWhatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export const defaultWhatsappMessage = `Hola Sol, vi tu página web y quisiera realizar una consulta.`;

export function whatsappLinkForArea(areaName?: string) {
  const message = areaName
    ? `Hola Sol, vi tu página web y quisiera hacer una consulta sobre ${areaName}.`
    : defaultWhatsappMessage;
  return buildWhatsappLink(message);
}
