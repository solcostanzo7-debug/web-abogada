// Datos generales del sitio. Los valores marcados como PLACEHOLDER deben
// reemplazarse por información real antes de publicar la web.
export const siteConfig = {
  name: "Sol Costanzo",
  role: "Abogada",
  legalName: "Sol Costanzo — Abogada",
  url: "https://solcostanzoabogada.com.ar",
  locale: "es_AR",
  description:
    "Abogada en Buenos Aires especializada en accidentes de trabajo y ART, accidentes de tránsito y defensa del consumidor. Asesoramiento claro y acompañamiento personalizado en cada etapa de tu caso.",
  shortDescription:
    "Asesoramiento legal claro y acompañamiento personalizado en accidentes de trabajo, accidentes de tránsito y defensa del consumidor.",
  phoneDisplay: "11 6206-2209",
  whatsappNumber: "5491162062209",
  email: "solcostanzoabogada@gmail.com",
  city: "Buenos Aires",
  region: "CABA, Argentina",
  address: "Avenida Corrientes y Paraná, CABA",
  hours: "Lunes a viernes de 09:00 a 18:00 hs",
  instagramHandle: "@solcostanzo.abogada",
  instagramUrl: "https://www.instagram.com/solcostanzo.abogada",
  linkedinUrl: "https://www.linkedin.com/in/sol-costanzo-802630197/",
  matricula: "T. 141, F. 692 (CPACF) · T. IV, F. 590 (CAAL)",
  university: "Universidad de Buenos Aires (UBA)",
  yearsExperience: "Más de 10 años",
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
