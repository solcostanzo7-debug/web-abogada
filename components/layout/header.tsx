"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { IconClose, IconMenu } from "@/components/ui/icons";
import { navLinks } from "@/lib/content";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          href="#inicio"
          className="font-display text-xl font-semibold tracking-tight text-ink"
          onClick={() => setIsMenuOpen(false)}
        >
          Sol Costanzo
          <span className="ml-2 hidden font-sans text-xs font-medium uppercase tracking-[0.14em] text-ink-soft sm:inline">
            Abogada
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.95rem] font-medium text-ink-soft transition-colors hover:text-plum"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contacto" className="!px-5 !py-3 text-sm">
            Agendar una consulta
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink lg:hidden"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          {isMenuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </Container>

      {isMenuOpen ? (
        <div className="border-t border-line bg-ivory lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-ink/5"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button href="#contacto" className="mt-2 w-full" onClick={() => setIsMenuOpen(false)}>
              Agendar una consulta
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
