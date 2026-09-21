import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad y tratamiento de datos personales del sitio web de Sol Costanzo, abogada en Buenos Aires.",
  alternates: { canonical: "/privacidad" },
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="max-w-2xl">
        <span className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-plum">
          Legal
        </span>
        <h1 className="mt-3 font-display text-3xl font-semibold leading-[1.15] text-ink sm:text-4xl">
          Política de privacidad
        </h1>
        <p className="mt-4 text-sm text-ink-faint">
          Última actualización: [FECHA DE ÚLTIMA ACTUALIZACIÓN]
        </p>

        <div className="mt-10 space-y-8 text-[0.95rem] leading-relaxed text-ink-soft">
          <p>
            Esta política describe cómo {siteConfig.legalName} recopila, usa
            y protege la información personal de quienes visitan este sitio
            web y completan el formulario de contacto.
          </p>

          <div>
            <h2 className="font-display text-lg font-semibold text-ink">
              Información que recopilamos
            </h2>
            <p className="mt-2">
              [PLACEHOLDER: detallar qué datos se recopilan a través del
              formulario de contacto — por ejemplo, nombre, email, teléfono y
              motivo de consulta — y si se utilizan cookies o herramientas de
              analítica web.]
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-ink">
              Uso de la información
            </h2>
            <p className="mt-2">
              [PLACEHOLDER: detallar con qué finalidad se utiliza la
              información recibida — por ejemplo, para responder consultas y
              brindar asesoramiento legal — y si se comparte con terceros.]
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-ink">
              Confidencialidad profesional
            </h2>
            <p className="mt-2">
              Toda la información compartida a través de este sitio está
              sujeta al secreto profesional propio del ejercicio de la
              abogacía.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-ink">
              Derechos del titular de los datos
            </h2>
            <p className="mt-2">
              [PLACEHOLDER: detallar cómo puede una persona acceder,
              rectificar o solicitar la eliminación de sus datos personales,
              conforme a la Ley de Protección de Datos Personales N.° 25.326.]
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-ink">
              Contacto
            </h2>
            <p className="mt-2">
              Ante cualquier consulta sobre esta política, podés escribir a{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-plum hover:text-plum-dark"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
