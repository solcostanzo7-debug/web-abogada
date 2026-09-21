"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { IconQuote, IconStar } from "@/components/ui/icons";
import { practiceAreas, testimonials } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

const areaOptions = [
  ...practiceAreas.map((area) => ({ value: area.slug, label: area.name })),
  { value: "general", label: "Consulta general" },
];

export function Testimonials() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [status, setStatus] = useState<"idle" | "sent">("idle");

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
        <SectionHeading
          eyebrow="Opiniones"
          title="Lo que dicen quienes ya consultaron"
          description="Esta sección se va a ir completando con opiniones de clientes. Si ya trabajamos juntos, dejá la tuya más abajo."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={index}
              data-reveal
              className={`flex flex-col rounded-2xl border bg-cream p-6 ${
                item.placeholder ? "border-dashed border-line" : "border-line"
              }`}
            >
              <IconQuote className={`h-6 w-6 ${item.placeholder ? "text-plum-light" : "text-plum"}`} />
              <p
                className={`mt-4 flex-1 text-[0.95rem] italic leading-relaxed ${
                  item.placeholder ? "text-ink-faint" : "text-ink-soft"
                }`}
              >
                {item.placeholder ? item.quote : `"${item.quote}"`}
              </p>
              {!item.placeholder ? (
                <div className="mt-4 flex items-center gap-1" aria-label="Calificación: 5 de 5 estrellas">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <IconStar key={n} filled className="h-4 w-4 text-plum" />
                  ))}
                </div>
              ) : null}
              <div className="mt-5 border-t border-line pt-4">
                <p className="text-sm font-semibold text-ink-soft">{item.name}</p>
                {item.area ? <p className="text-xs text-ink-faint">{item.area}</p> : null}
              </div>
            </article>
          ))}
        </div>

        <div
          data-reveal
          className="mt-10 rounded-2xl border border-line bg-ivory-alt p-6 sm:p-8"
        >
          <p className="font-display text-lg font-semibold text-ink">
            ¿Ya me consultaste? Dejá tu opinión
          </p>
          <p className="mt-1.5 text-sm text-ink-soft">
            Se envía directamente por email para revisarla antes de publicarla en la página.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
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
        </div>
      </Container>
    </section>
  );
}
