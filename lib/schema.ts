import { practiceAreas } from "./content";
import { siteConfig } from "./site-config";

export function buildAttorneySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: `+${siteConfig.whatsappNumber}`,
    email: siteConfig.email,
    image: `${siteConfig.url}/opengraph-image`,
    identifier: siteConfig.matricula,
    openingHours: "Mo-Fr 09:00-18:00",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: siteConfig.university,
    },
    areaServed: [
      { "@type": "City", name: "Ciudad Autónoma de Buenos Aires" },
      { "@type": "State", name: "Provincia de Buenos Aires" },
    ],
    sameAs: [siteConfig.instagramUrl, siteConfig.linkedinUrl],
    knowsAbout: practiceAreas.map((area) => area.name),
    makesOffer: practiceAreas.map((area) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: area.name,
        description: area.description,
      },
    })),
  };
}
