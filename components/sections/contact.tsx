"use client";

import { FormEvent, useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  IconClock,
  IconInstagram,
  IconMail,
  IconPin,
  IconWhatsapp,
} from "@/components/ui/icons";
import { practiceAreas } from "@/lib/content";
import { buildWhatsappLink, siteConfig } from "@/lib/site-config";

const motivoOptions = [
  ...practiceAreas.map((area) => ({ value: area.slug, label: area.name })),
  { value: "otro", label: "Otro motivo" },
];

export function Contact() {
  const [motivo, setMotivo] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  useEffect(() => {
    // Sincroniza el select con ?motivo=... de la URL (link desde las
    // tarjetas de áreas de práctica); no hay forma de leer la URL en el
    // render inicial del server, así que se ajusta una única vez al montar.
    const params = new URLSearchParams(window.location.search);
    const requested = params.get("motivo");
    if (requested && motivoOptions.some((opt) => opt.value === requested)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMotivo(requested);
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nombre = String(form.get("nombre") || "");
    const email = String(form.get("email") || "");
    const telefono = String(form.get("telefono") || "");
    const motivoLabel =
      motivoOptions.find((opt) => opt.value === form.get("motivo"))?.label ||
      "";
    const mensaje = String(form.get("mensaje") || "");

    const subject = `Consulta desde la web — ${motivoLabel || "Sin especificar"}`;
    const body = [
      `Nombre: ${nombre}`,
      `Email: ${email}`,
      telefono ? `Teléfono: ${telefono}` : null,
      `Motivo de consulta: ${motivoLabel}`,
      "",
      mensaje,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setStatus("sent");
  }

  return (
    <section id="contacto" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Contacto"
          title="Contame tu situación"
          description="Completá el formulario o escribime directamente. Te respondo a la brevedad."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <form
            onSubmit={handleSubmit}
            data-reveal
            className="rounded-2xl border border-line bg-cream p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Nombre" htmlFor="nombre">
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  autoComplete="name"
                  className={inputClasses}
                />
              </Field>
              <Field label="Email" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputClasses}
                />
              </Field>
              <Field label="Teléfono" htmlFor="telefono" optional>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  autoComplete="tel"
                  className={inputClasses}
                />
              </Field>
              <Field label="Motivo de consulta" htmlFor="motivo">
                <select
                  id="motivo"
                  name="motivo"
                  required
                  value={motivo}
                  onChange={(e) => setMotivo(e.target.value)}
                  className={inputClasses}
                >
                  <option value="" disabled>
                    Seleccioná una opción
                  </option>
                  {motivoOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </Field>
              <div className="sm:col-span-2">
                <Field label="Mensaje" htmlFor="mensaje">
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    placeholder="Contame brevemente qué te pasó."
                    className={`${inputClasses} resize-none`}
                  />
                </Field>
              </div>
            </div>

            <Button type="submit" className="mt-6 w-full sm:w-auto">
              Enviar consulta
            </Button>

            <p aria-live="polite" className="mt-4 text-sm text-ink-soft">
              {status === "sent"
                ? "Se abrió tu programa de correo con la consulta cargada. Si preferís, también podés escribirme por WhatsApp."
                : null}
            </p>
          </form>

          <div data-reveal className="flex flex-col gap-4">
            <div className="rounded-2xl border border-line bg-ivory-alt p-6 sm:p-7">
              <p className="font-display text-lg font-semibold text-ink">
                Otras formas de contacto
              </p>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3">
                  <IconWhatsapp className="mt-0.5 h-5 w-5 shrink-0 text-plum" />
                  <div>
                    <p className="text-sm font-medium text-ink">WhatsApp</p>
                    <a
                      href={buildWhatsappLink(
                        "Hola Sol, vi tu página web y quisiera realizar una consulta."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ink-soft hover:text-plum"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <IconMail className="mt-0.5 h-5 w-5 shrink-0 text-plum" />
                  <div>
                    <p className="text-sm font-medium text-ink">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm text-ink-soft hover:text-plum"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <IconInstagram className="mt-0.5 h-5 w-5 shrink-0 text-plum" />
                  <div>
                    <p className="text-sm font-medium text-ink">Instagram</p>
                    <a
                      href={siteConfig.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ink-soft hover:text-plum"
                    >
                      {siteConfig.instagramHandle}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-plum" />
                  <div>
                    <p className="text-sm font-medium text-ink">Ubicación</p>
                    <p className="text-sm text-ink-soft">{siteConfig.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-plum" />
                  <div>
                    <p className="text-sm font-medium text-ink">
                      Horarios de atención
                    </p>
                    <p className="text-sm text-ink-soft">{siteConfig.hours}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const inputClasses =
  "w-full rounded-xl border border-line bg-cream px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-faint transition-colors focus:border-plum focus:outline-none";

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-ink"
      >
        {label}
        {optional ? (
          <span className="ml-1 font-normal text-ink-faint">(opcional)</span>
        ) : null}
      </label>
      {children}
    </div>
  );
}
