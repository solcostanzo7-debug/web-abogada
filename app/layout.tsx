import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { buildAttorneySchema } from "@/lib/schema";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsappButton from "@/components/layout/whatsapp-button";
import { MetaPixel } from "@/components/analytics/meta-pixel";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Abogada en Accidentes de Trabajo y ART — CABA y GBA`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "abogada accidentes de trabajo",
    "abogada ART",
    "reclamo ART",
    "enfermedad profesional",
    "Comisión Médica",
    "accidente in itinere",
    "indemnización accidente laboral",
    "abogada CABA",
    "abogada GBA",
    "abogada defensa del consumidor",
    "abogada accidentes de tránsito",
    "amparo de salud obra social prepaga",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.legalName,
    title: `${siteConfig.name} | Abogada en Accidentes de Trabajo y ART`,
    description: siteConfig.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Abogada en Accidentes de Trabajo y ART`,
    description: siteConfig.shortDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = buildAttorneySchema();

  return (
    <html
      lang="es-AR"
      className={`${fraunces.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans text-ink bg-ivory antialiased">
        <MetaPixel />
        <a href="#main" className="skip-link">
          Saltar al contenido principal
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsappButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
