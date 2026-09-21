import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { buildAttorneySchema } from "@/lib/schema";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsappButton from "@/components/layout/whatsapp-button";

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
    default: `${siteConfig.name} | Abogada en ${siteConfig.city} — Accidentes de Trabajo, Tránsito y Defensa del Consumidor`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "abogada Buenos Aires",
    "abogada accidentes de trabajo",
    "abogada ART",
    "abogada accidentes de tránsito",
    "abogada defensa del consumidor",
    "indemnización accidente laboral",
    "reclamo ART",
    "accidente in itinere",
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
    title: `${siteConfig.name} | Abogada en ${siteConfig.city}`,
    description: siteConfig.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Abogada en ${siteConfig.city}`,
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
