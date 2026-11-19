// Porcentajes de incapacidad según el Decreto 549/2025 (nuevo baremo).
// Para corregir o sumar valores, editar solo este archivo.

export type BaremoRow = {
  lesion: string;
  values: string[];
};

export type BaremoGroup = {
  title?: string;
  columns: string[];
  rows: BaremoRow[];
};

export type BaremoSection = {
  id: string;
  title: string;
  subtitle?: string;
  groups: BaremoGroup[];
  notes?: string[];
};

export const baremoSections: BaremoSection[] = [
  {
    id: "rodilla",
    title: "Rodilla",
    subtitle: "Lesiones cápsulo-ligamentarias y meniscales",
    groups: [
      {
        columns: ["Porcentaje"],
        rows: [
          { lesion: "Ruptura completa del ligamento cruzado anterior (1)", values: ["7 %"] },
          { lesion: "Ruptura completa del ligamento cruzado posterior (1)", values: ["4 %"] },
          { lesion: "Ruptura completa del ligamento lateral interno (1)", values: ["3 %"] },
          { lesion: "Ruptura completa del ligamento lateral externo (1)", values: ["3 %"] },
          {
            lesion:
              "Lesión meniscal interna y/o externa operada (meniscectomía y/o meniscoplastia y/o sutura meniscal) (2)",
            values: ["4 %"],
          },
          {
            lesion:
              "Lesión meniscal no operada con hipotrofia muscular (3) y/o hidrartrosis y/o bloqueo",
            values: ["8 %"],
          },
          {
            lesion:
              "Artroscopía diagnóstico-terapéutica de rodilla (incluye lavado artroscópico, drenaje y exploración diagnóstica)",
            values: ["1 %"],
          },
        ],
      },
    ],
    notes: [
      "(1) Se pondera el porcentaje de la tabla independientemente de que la ruptura ligamentaria haya sido operada o no. El porcentaje ya incluye el eventual procedimiento quirúrgico.",
      "(2) El porcentaje incluye el procedimiento quirúrgico.",
      "(3) Se considera hipotrofia muscular cuando la diferencia de la perimetría cuadricipital, medida 7 cm por encima de la rótula, es mayor o igual a 2 cm en comparación con la otra pierna.",
    ],
  },
  {
    id: "columna",
    title: "Columna vertebral",
    groups: [
      {
        title: "Fracturas",
        columns: ["Mínimo", "Medio", "Máximo"],
        rows: [
          { lesion: "Fractura de apófisis odontoides", values: ["5 %", "10 %", "15 %"] },
          { lesion: "Fractura o luxofractura C1 – C2", values: ["6 %", "12 %", "18 %"] },
          { lesion: "Fractura o luxofractura C3 – C7", values: ["4 %", "8 %", "12 %"] },
          { lesion: "Fractura o luxofractura dorsal D1 – D10", values: ["5 %", "10 %", "15 %"] },
          { lesion: "Fractura o luxofractura dorsal D11 – D12", values: ["8 %", "16 %", "24 %"] },
          { lesion: "Fractura o luxofractura lumbar L1", values: ["8 %", "16 %", "24 %"] },
          { lesion: "Fractura del sacro", values: ["3 %", "6 %", "9 %"] },
        ],
      },
    ],
  },
];
