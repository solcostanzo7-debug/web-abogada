// Calculadora orientativa de indemnización por incapacidad laboral
// permanente parcial (Ley 24.557, art. 14.2, y Ley 26.773, art. 3).
//
// ACTUALIZAR CADA SEMESTRE: el piso mínimo cambia el 1 de marzo y el
// 1 de septiembre de cada año por resolución de la SRT.
export const PISO_ILP = 114_354_110;
export const PISO_VIGENCIA = "del 1/9/2026 al 28/2/2027";
export const PISO_NORMA = "Resolución SRT 39/2026";

// Desde este porcentaje la incapacidad es total y se calcula distinto.
export const INCAPACIDAD_TOTAL_DESDE = 66;

export type Lugar = "trabajo" | "itinere";

export type ArtResult = {
  formula: number; // 53 × IBM × % × (65 / edad)
  piso: number; // piso mínimo × %
  base: number; // el mayor de los dos
  usaPiso: boolean;
  adicional: number; // 20 % (no corresponde in itinere)
  total: number;
};

export function calcularIndemnizacion(
  sueldo: number,
  porcentaje: number,
  edad: number,
  lugar: Lugar
): ArtResult {
  const pct = porcentaje / 100;
  const formula = 53 * sueldo * pct * (65 / edad);
  const piso = PISO_ILP * pct;
  const base = Math.max(formula, piso);
  const adicional = lugar === "trabajo" ? base * 0.2 : 0;
  return {
    formula,
    piso,
    base,
    usaPiso: piso > formula,
    adicional,
    total: base + adicional,
  };
}

export const formatPesos = (value: number) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(Math.round(value));
