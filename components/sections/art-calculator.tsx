"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { IconCheck, IconWhatsapp } from "@/components/ui/icons";
import {
  INCAPACIDAD_TOTAL_DESDE,
  PISO_ILP,
  PISO_NORMA,
  PISO_VIGENCIA,
  calcularIndemnizacion,
  formatPesos,
  type ArtResult,
  type Lugar,
} from "@/lib/art-calculator";
import { whatsappLinkForArea } from "@/lib/site-config";

const inputClasses =
  "w-full rounded-xl border border-line bg-cream px-4 py-3.5 text-base text-ink placeholder:text-ink-faint transition-colors focus:border-plum focus:outline-none";

const onlyDigits = (value: string) => value.replace(/\D/g, "");
const withThousands = (digits: string) =>
  digits ? Number(digits).toLocaleString("es-AR") : "";

export function ArtCalculator() {
  const [sueldo, setSueldo] = useState("");
  const [porcentaje, setPorcentaje] = useState("");
  const [edad, setEdad] = useState("");
  const [lugar, setLugar] = useState<Lugar>("trabajo");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ArtResult | null>(null);
  const [isTotal, setIsTotal] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const s = Number(onlyDigits(sueldo));
    const p = Number(porcentaje.replace(",", "."));
    const e = Number(edad);

    setResult(null);
    setIsTotal(false);

    if (!s) return setError("Ingresá tu sueldo bruto promedio.");
    if (!p || p <= 0 || p > 100)
      return setError("Ingresá un porcentaje de incapacidad entre 1 y 100.");
    if (!e || e < 16 || e > 90) return setError("Ingresá una edad válida.");
    setError("");

    if (p >= INCAPACIDAD_TOTAL_DESDE) {
      setIsTotal(true);
      return;
    }
    setResult(calcularIndemnizacion(s, p, e, lugar));
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
      <div className="rounded-3xl border border-line bg-cream p-6 sm:p-9">
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          Ingresá tus datos
        </h2>

        <form onSubmit={handleSubmit} className="mt-7 space-y-5" noValidate>
          <div>
            <label htmlFor="calc-sueldo" className="mb-1.5 block text-sm font-semibold text-ink">
              Tu sueldo bruto (promedio mensual del último año)
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-faint">$</span>
              <input
                id="calc-sueldo"
                inputMode="numeric"
                autoComplete="off"
                placeholder="850.000"
                value={withThousands(onlyDigits(sueldo))}
                onChange={(e) => setSueldo(onlyDigits(e.target.value))}
                className={`${inputClasses} pl-8`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="calc-porcentaje" className="mb-1.5 block text-sm font-semibold text-ink">
                Porcentaje de incapacidad
              </label>
              <div className="relative">
                <input
                  id="calc-porcentaje"
                  inputMode="decimal"
                  autoComplete="off"
                  placeholder="15"
                  value={porcentaje}
                  onChange={(e) => setPorcentaje(e.target.value.replace(/[^\d.,]/g, ""))}
                  className={`${inputClasses} pr-10`}
                />
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-faint">%</span>
              </div>
            </div>
            <div>
              <label htmlFor="calc-edad" className="mb-1.5 block text-sm font-semibold text-ink">
                Tu edad al momento del accidente
              </label>
              <input
                id="calc-edad"
                inputMode="numeric"
                autoComplete="off"
                placeholder="35"
                value={edad}
                onChange={(e) => setEdad(onlyDigits(e.target.value).slice(0, 2))}
                className={inputClasses}
              />
            </div>
          </div>

          <fieldset>
            <legend className="mb-2 block text-sm font-semibold text-ink">¿Dónde ocurrió?</legend>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {(
                [
                  ["trabajo", "En el trabajo", "Suma el 20 % adicional"],
                  ["itinere", "En el trayecto (in itinere)", "Sin el 20 % adicional"],
                ] as const
              ).map(([value, label, hint]) => (
                <label
                  key={value}
                  className={`cursor-pointer rounded-xl border px-4 py-3 transition-colors ${
                    lugar === value ? "border-plum bg-plum-light/50" : "border-line bg-cream hover:border-ink/30"
                  }`}
                >
                  <input
                    type="radio"
                    name="lugar"
                    value={value}
                    checked={lugar === value}
                    onChange={() => setLugar(value)}
                    className="sr-only"
                  />
                  <span className="block text-[0.95rem] font-semibold text-ink">{label}</span>
                  <span className="block text-sm text-ink-soft">{hint}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {error ? (
            <p role="alert" className="text-sm font-medium text-plum">
              {error}
            </p>
          ) : null}

          <Button type="submit" className="w-full sm:w-auto">
            Calcular mi indemnización
          </Button>
        </form>

        <div aria-live="polite">
          {result ? <ResultCard result={result} /> : null}
          {isTotal ? (
            <div className="mt-8 rounded-2xl border border-plum/20 bg-plum-light/60 p-6">
              <p className="font-display text-xl font-semibold text-ink">
                Con {INCAPACIDAD_TOTAL_DESDE} % o más, la incapacidad es total
              </p>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                En ese caso la indemnización se calcula de otra manera y se suman
                otros pagos. Escribime y lo vemos con tus datos.
              </p>
              <ConsultButton />
            </div>
          ) : null}
        </div>
      </div>

      <aside className="rounded-3xl bg-ink p-6 text-cream sm:p-9">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">¿Cómo se calcula?</h2>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-cream/75">
          La Ley de Riesgos del Trabajo fija una fórmula para la incapacidad
          permanente parcial:
        </p>
        <p className="mt-4 rounded-xl bg-white/10 px-4 py-3 text-center font-display text-lg">
          53 × ingreso mensual × % × (65 ÷ edad)
        </p>
        <ul className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-cream/80">
          {[
            ["Ingreso mensual:", "es el promedio de tus sueldos del último año, actualizado. Por eso el resultado es aproximado."],
            ["Porcentaje:", "es el que determina la Comisión Médica según el baremo."],
            ["Edad:", "cuanto más joven sos, mayor es el coeficiente."],
            [
              "Piso mínimo:",
              `si la fórmula da menos, se cobra el mínimo legal: ${formatPesos(PISO_ILP)} por el 100 %, proporcional a tu porcentaje (${PISO_NORMA}, vigente ${PISO_VIGENCIA}).`,
            ],
            ["20 % adicional:", "se suma si el accidente fue en el trabajo. No corresponde en los accidentes en el trayecto."],
          ].map(([title, text]) => (
            <li key={title} className="flex gap-3">
              <IconCheck className="mt-1 h-4 w-4 shrink-0 text-plum-light" />
              <span>
                <strong className="font-semibold text-cream">{title}</strong> {text}
              </span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

function ResultCard({ result }: { result: ArtResult }) {
  const rows: [string, number, string?][] = [
    ["Según la fórmula", result.formula],
    ["Piso mínimo para tu porcentaje", result.piso],
    [
      result.usaPiso ? "Se toma el piso mínimo" : "Se toma el resultado de la fórmula",
      result.base,
      "font-semibold text-ink",
    ],
  ];
  if (result.adicional > 0) rows.push(["20 % adicional", result.adicional]);

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-line">
      <div className="bg-plum px-6 py-6 text-cream">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-plum-light">
          Indemnización estimada
        </p>
        <p className="mt-1 font-display text-4xl font-semibold sm:text-5xl">
          {formatPesos(result.total)}
        </p>
      </div>
      <dl className="divide-y divide-line bg-ivory text-[0.95rem]">
        {rows.map(([label, value, cls]) => (
          <div key={label} className="flex items-center justify-between gap-4 px-6 py-3">
            <dt className={cls ?? "text-ink-soft"}>{label}</dt>
            <dd className={`whitespace-nowrap ${cls ?? "text-ink"}`}>{formatPesos(value)}</dd>
          </div>
        ))}
      </dl>
      <div className="bg-cream px-6 py-5">
        <p className="text-sm leading-relaxed text-ink-soft">
          Es un cálculo orientativo. El monto final depende de tus sueldos
          reales actualizados, del porcentaje que se determine y de otros
          factores de tu caso.
        </p>
        <ConsultButton />
      </div>
    </div>
  );
}

function ConsultButton() {
  return (
    <Button
      href={whatsappLinkForArea("el cálculo de mi indemnización por accidente de trabajo")}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5"
    >
      <IconWhatsapp className="h-4 w-4" />
      Consultar mi caso
    </Button>
  );
}
