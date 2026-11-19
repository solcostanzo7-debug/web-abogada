"use client";

import { useMemo, useState } from "react";
import { baremoSections, type BaremoSection } from "@/lib/baremo";

const normalize = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

function filterSections(query: string): BaremoSection[] {
  const q = normalize(query.trim());
  if (!q) return baremoSections;

  return baremoSections
    .map((section) => {
      const sectionMatches = normalize(section.title).includes(q);
      const groups = section.groups
        .map((group) => ({
          ...group,
          rows: sectionMatches
            ? group.rows
            : group.rows.filter((row) => normalize(row.lesion).includes(q)),
        }))
        .filter((group) => group.rows.length > 0);
      return { ...section, groups };
    })
    .filter((section) => section.groups.length > 0);
}

export function BaremoTables() {
  const [query, setQuery] = useState("");
  const sections = useMemo(() => filterSections(query), [query]);

  return (
    <div>
      <div className="z-10 sm:sticky sm:top-[4.5rem] -mx-5 border-b border-line bg-ivory/95 px-5 py-4 backdrop-blur-md sm:-mx-8 sm:px-8">
        <label htmlFor="buscar-lesion" className="sr-only">
          Buscar una lesión
        </label>
        <input
          id="buscar-lesion"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscá una lesión o parte del cuerpo (ej.: menisco, lumbar, pulgar)"
          className="w-full rounded-xl border border-line bg-cream px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-faint transition-colors focus:border-plum focus:outline-none"
        />
        {!query ? (
          <nav aria-label="Partes del cuerpo" className="mt-3 flex flex-wrap gap-2">
            {baremoSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-full border border-line bg-cream px-3.5 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:border-plum hover:text-plum"
              >
                {section.title}
              </a>
            ))}
          </nav>
        ) : null}
      </div>

      {sections.length === 0 ? (
        <p className="mt-10 text-ink-soft">
          No encontré esa lesión en la tabla. Escribime y lo vemos en tu caso
          puntual.
        </p>
      ) : null}

      <div className="mt-10 space-y-14">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-48">
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              {section.title}
            </h2>
            {section.subtitle ? (
              <p className="mt-1.5 text-ink-soft">{section.subtitle}</p>
            ) : null}

            {section.groups.map((group, index) => (
              <div key={group.title ?? index} className="mt-6">
                {group.title ? (
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.1em] text-ink-faint">
                    {group.title}
                  </h3>
                ) : null}
                <div className="overflow-hidden rounded-2xl border border-line bg-cream">
                  <table className="w-full border-collapse text-left text-[0.95rem]">
                    <thead className="bg-ivory-alt/60 text-xs uppercase tracking-[0.08em] text-ink-soft">
                      <tr>
                        <th scope="col" className="px-4 py-3 font-semibold sm:px-5">
                          Lesión
                        </th>
                        {group.columns.map((column) => (
                          <th
                            key={column}
                            scope="col"
                            className="whitespace-nowrap px-3 py-3 text-right font-semibold sm:px-5"
                          >
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {group.rows.map((row) => (
                        <tr key={row.lesion} className="border-t border-line align-top">
                          <th
                            scope="row"
                            className="px-4 py-3.5 font-normal leading-snug text-ink sm:px-5"
                          >
                            {row.lesion}
                          </th>
                          {row.values.map((value, i) => {
                            const isNumber = /\d/.test(value);
                            return (
                              <td
                                key={i}
                                className={`px-3 py-3.5 text-right sm:px-5 ${
                                  isNumber
                                    ? "whitespace-nowrap font-semibold text-plum"
                                    : "min-w-[8rem] text-sm text-ink-soft"
                                }`}
                              >
                                {value}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}

            {section.notes && section.groups.length > 0 ? (
              <div className="mt-4 space-y-1.5 text-sm leading-relaxed text-ink-faint">
                {section.notes.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </div>
            ) : null}
          </section>
        ))}
      </div>
    </div>
  );
}
