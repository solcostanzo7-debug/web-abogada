"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { IconClose, IconMenu } from "@/components/ui/icons";
import { navLinks } from "@/lib/content";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Submenú abierto (por label), en escritorio y en celular.
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Cierra el submenú de escritorio al hacer clic afuera o con Escape.
  useEffect(() => {
    if (!openSubmenu) return;
    const onClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenSubmenu(null);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenSubmenu(null);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [openSubmenu]);

  const closeAll = () => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (label: string) =>
    setOpenSubmenu((current) => (current === label ? null : label));

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        isScrolled
          ? "border-line bg-ivory/90 backdrop-blur-md"
          : "border-transparent bg-ivory/0"
      }`}
    >
      <Container className="flex h-[4.5rem] items-center justify-between">
        <Link
          href="/#inicio"
          className="shrink-0 whitespace-nowrap font-display text-xl font-semibold tracking-tight text-ink"
          onClick={closeAll}
        >
          Sol Costanzo
          <span className="ml-2 hidden font-sans text-xs font-medium uppercase tracking-[0.14em] text-ink-soft sm:inline">
            Abogada
          </span>
        </Link>

        <nav ref={navRef} className="hidden items-center gap-6 xl:flex" aria-label="Navegación principal">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative">
                <button
                  type="button"
                  className={`inline-flex items-center gap-1 whitespace-nowrap text-[0.95rem] font-medium transition-colors hover:text-plum ${
                    openSubmenu === link.label ? "text-plum" : "text-ink-soft"
                  }`}
                  aria-expanded={openSubmenu === link.label}
                  aria-haspopup="true"
                  onClick={() => toggleSubmenu(link.label)}
                >
                  {link.label}
                  <Chevron open={openSubmenu === link.label} />
                </button>
                {openSubmenu === link.label ? (
                  <div className="absolute left-1/2 top-full z-10 mt-3 w-64 -translate-x-1/2 rounded-2xl border border-line bg-cream p-2 shadow-[0_20px_45px_rgba(42,35,32,0.12)]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-4 py-3 text-[0.95rem] font-medium text-ink transition-colors hover:bg-plum-light hover:text-plum-dark"
                        onClick={closeAll}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-[0.95rem] font-medium text-ink-soft transition-colors hover:text-plum"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden xl:block">
          <Button href="/#contacto" className="whitespace-nowrap !px-5 !py-3 text-sm">
            Agendar una consulta
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink xl:hidden"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          {isMenuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </Container>

      {isMenuOpen ? (
        <div className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-ivory xl:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-base font-medium text-ink transition-colors hover:bg-ink/5"
                    aria-expanded={openSubmenu === link.label}
                    onClick={() => toggleSubmenu(link.label)}
                  >
                    {link.label}
                    <Chevron open={openSubmenu === link.label} />
                  </button>
                  {openSubmenu === link.label ? (
                    <div className="mb-1 ml-3 flex flex-col border-l border-line pl-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="rounded-lg px-3 py-2.5 text-[0.95rem] text-ink-soft transition-colors hover:bg-ink/5 hover:text-plum"
                          onClick={closeAll}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-ink/5"
                  onClick={closeAll}
                >
                  {link.label}
                </Link>
              )
            )}
            <Button href="/#contacto" className="mt-2 w-full" onClick={closeAll}>
              Agendar una consulta
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
