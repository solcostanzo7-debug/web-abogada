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
          Última actualización: 28 de septiembre de 2026
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
              A través del formulario de contacto y del formulario de
              opiniones podemos recibir tu nombre, email, teléfono (cuando lo
              indicás), motivo de consulta, calificación y el mensaje que
              escribas. Estos formularios no envían tus datos a ningún
              servidor ni base de datos: al completarlos, tu navegador abre
              tu propio programa de correo con esa información ya cargada, y
              sos vos quien decide enviarla. Ese email llega directamente a
              la casilla de {siteConfig.name}, igual que cualquier otro
              correo que nos escribas.
            </p>
            <p className="mt-2">
              Este sitio no utiliza cookies propias ni herramientas de
              analítica web.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-ink">
              Cookies de terceros y publicidad
            </h2>
            <p className="mt-2">
              Este sitio utiliza el Meta Pixel (Facebook/Instagram), una
              herramienta de Meta Platforms, Inc. que permite medir la
              efectividad de nuestras campañas publicitarias y mostrarte
              anuncios relevantes en Facebook e Instagram si ya visitaste
              este sitio. El Meta Pixel utiliza cookies y recopila
              información sobre tu navegación (como las páginas que
              visitás) mientras estás en este sitio.
            </p>
            <p className="mt-2">
              Podés bloquear o eliminar estas cookies desde la
              configuración de tu navegador, y podés obtener más
              información sobre cómo Meta utiliza esta información en su{" "}
              <a
                href="https://www.facebook.com/privacy/policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-plum hover:text-plum-dark"
              >
                política de privacidad
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-ink">
              Uso de la información
            </h2>
            <p className="mt-2">
              Usamos la información que nos enviás exclusivamente para
              responder tu consulta, brindarte asesoramiento legal y, en el
              caso del formulario de opiniones, para evaluar su publicación
              en el sitio (siempre con tu autorización previa). No
              compartimos, vendemos ni cedemos tus datos a terceros, y no los
              utilizamos con fines publicitarios ajenos a tu consulta.
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
              De acuerdo con la Ley de Protección de Datos Personales N.°
              25.326, tenés derecho a acceder, rectificar, actualizar o
              solicitar la eliminación de tus datos personales en cualquier
              momento. Para ejercer estos derechos, podés escribirnos a{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-plum hover:text-plum-dark"
              >
                {siteConfig.email}
              </a>
              . La Agencia de Acceso a la Información Pública, en su
              carácter de órgano de control de la Ley N.° 25.326, tiene la
              atribución de atender las denuncias y reclamos que presenten
              quienes resulten afectados en sus derechos.
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
