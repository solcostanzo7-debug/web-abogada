"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { IconStar } from "@/components/ui/icons";
import { practiceAreas } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

const areaOptions = [
  ...practiceAreas.map((area) => ({ value: area.slug, label: area.name })),
  { value: "general", label: "Consulta general" },
];

export function Testimonials() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nombre = String(form.get("nombre") || "");
    const areaLabel =
      areaOptions.find((opt) => opt.value === form.get("area"))?.label || "";
    const comentario = String(form.get("comentario") || "");

    const subject = `Nueva opinión de cliente — ${nombre || "sin nombre"}`;
    const body = [
      `Nombre: ${nombre}`,
      `Área: ${areaLabel}`,
      `Calificación: ${rating ? `${rating}/5` : "sin calificar"}`,
      "",
      comentario,
    ].join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setStatus("sent");
  }

  return (
    <section id="opiniones" className="py-24">
      <Container>
        <div
          data-reveal
          className="mx-auto max-w-3xl rounded-2xl border border-line bg-ivory-alt p-6 text-center sm:p-10"
        >
          <SectionHeading
            align="center"
            eyebrow="Opiniones"
            title="¿Ya trabajaste conmigo?"
            description="Tu opinión ayuda a otras personas a decidir. Contame cómo fue tu experiencia."
          />

          {!isFormOpen ? (
            <Button
              type="button"
              className="mt-8"
              onClick={() => setIsFormOpen(true)}
            >
              Dejar mi opinión
            </Button>
          ) : null}

          {isFormOpen ? (
          <form id="form-opinion" onSubmit={handleSubmit} className="mt-8 grid text-left grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="testimonio-nombre" className="mb-1.5 block text-sm font-medium text-ink">
                Nombre
              </label>
              <input
                id="testimonio-nombre"
                name="nombre"
                type="text"
                required
                autoComplete="name"
                className="w-full rounded-xl border border-line bg-cream px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-faint transition-colors focus:border-plum focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="testimonio-area" className="mb-1.5 block text-sm font-medium text-ink">
                Área de práctica
              </label>
              <select
                id="testimonio-area"
                name="area"
                required
                defaultValue=""
                className="w-full rounded-xl border border-line bg-cream px-4 py-3 text-[0.95rem] text-ink transition-colors focus:border-plum focus:outline-none"
              >
                <option value="" disabled>
                  Seleccioná una opción
                </option>
                {areaOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <span className="mb-1.5 block text-sm font-medium text-ink">Calificación</span>
              <div
                role="radiogroup"
                aria-label="Calificación de 1 a 5 estrellas"
                className="flex items-center gap-1"
                onMouseLeave={() => setHoverRating(0)}
              >
                {[1, 2, 3, 4, 5].map((value) => {
                  const filled = value <= (hoverRating || rating);
                  return (
                    <label
                      key={value}
                      className="cursor-pointer p-0.5"
                      onMouseEnter={() => setHoverRating(value)}
                    >
                      <input
                        type="radio"
                        name="calificacion"
                        value={value}
                        checked={rating === value}
                        onChange={() => setRating(value)}
                        className="sr-only"
                        aria-label={`${value} estrella${value > 1 ? "s" : ""}`}
                        required
                      />
                      <IconStar
                        filled={filled}
                        className={`h-7 w-7 transition-colors ${
                          filled ? "text-plum" : "text-line"
                        }`}
                      />
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="testimonio-comentario" className="mb-1.5 block text-sm font-medium text-ink">
                Comentario
              </label>
              <textarea
                id="testimonio-comentario"
                name="comentario"
                required
                rows={4}
                placeholder="Contá brevemente tu experiencia."
                className="w-full resize-none rounded-xl border border-line bg-cream px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-faint transition-colors focus:border-plum focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <Button type="submit">Enviar opinión</Button>
              <p aria-live="polite" className="mt-4 text-sm text-ink-soft">
                {status === "sent"
                  ? "Se abrió tu programa de correo con tu opinión cargada. ¡Gracias por compartirla!"
                  : null}
              </p>
            </div>
          </form>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
