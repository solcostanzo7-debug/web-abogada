"use client";

import { useEffect } from "react";

/**
 * Mejora progresiva: recién cuando este componente monta le agrega el
 * estado "oculto" a los elementos [data-reveal] y los anima al entrar en
 * el viewport. Sin JS (o antes de hidratar) el contenido ya es visible
 * desde el HTML inicial — nunca depende del observer para mostrarse.
 */
export function ScrollReveal() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (elements.length === 0) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.remove("reveal-hidden");
            el.classList.add("reveal-visible");
            observer.unobserve(el);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    const viewportHeight = window.innerHeight;

    elements.forEach((el, index) => {
      // Evita el parpadeo en contenido ya visible al cargar la página:
      // sólo se anima lo que arranca fuera del viewport inicial.
      const rect = el.getBoundingClientRect();
      if (rect.top < viewportHeight * 0.9) return;

      el.classList.add("reveal-hidden");
      el.style.animationDelay = `${Math.min(index % 3, 2) * 80}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
