import Link from "next/link";
import { Container } from "@/components/ui/container";
import { IconInstagram, IconLinkedin, IconMail, IconWhatsapp } from "@/components/ui/icons";
import { navLinks, practiceAreas } from "@/lib/content";
import { buildWhatsappLink, defaultWhatsappMessage, siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink text-cream">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl font-semibold">Sol Costanzo</p>
            <p className="mt-1 text-sm text-cream/60">Abogada</p>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              {siteConfig.matricula}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              {siteConfig.shortDescription}
            </p>
          </div>

          <nav aria-label="Enlaces del sitio">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cream/50">
              Navegación
            </p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-cream/80 hover:text-plum-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Áreas de práctica">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cream/50">
              Áreas de práctica
            </p>
            <ul className="mt-4 space-y-3">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link href="#servicios" className="text-sm text-cream/80 hover:text-plum-light">
                    {area.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cream/50">
              Contacto
            </p>
            <ul className="mt-4 space-y-3 text-sm text-cream/80">
              <li>
                <a
                  href={buildWhatsappLink(defaultWhatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-plum-light"
                >
                  WhatsApp: {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-plum-light">
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-cream/60">{siteConfig.region}</li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Sol Costanzo"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-plum hover:text-plum-light"
              >
                <IconInstagram />
              </a>
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Sol Costanzo"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-plum hover:text-plum-light"
              >
                <IconLinkedin />
              </a>
              <a
                href={buildWhatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Escribir por WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-plum hover:text-plum-light"
              >
                <IconWhatsapp className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Enviar un email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-plum hover:text-plum-light"
              >
                <IconMail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. Todos los derechos reservados.
          </p>
          <Link href="/privacidad" className="hover:text-plum-light">
            Política de privacidad
          </Link>
        </div>
      </Container>
    </footer>
  );
}
