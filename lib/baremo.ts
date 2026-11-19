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
          { lesion: "Luxación de rótula", values: ["1 %"] },
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
          { lesion: "Fractura o luxofractura lumbar L2 – L5", values: ["5 %", "10 %", "15 %"] },
          { lesion: "Fractura de apófisis transversa y/o espinosa", values: ["1 %", "2 %", "3 %"] },
          { lesion: "Fractura del sacro", values: ["3 %", "6 %", "9 %"] },
          { lesion: "Fractura y/o luxación del coxis", values: ["2 %", "4 %", "6 %"] },
        ],
      },
      {
        title: "Otras lesiones de columna",
        columns: ["Porcentaje"],
        rows: [
          { lesion: "Hernia de disco operada", values: ["5 %"] },
          {
            lesion:
              "Luxación pura vertebral con espondilolistesis residual menor al 50 % (única o múltiple)",
            values: ["15 %"],
          },
          {
            lesion:
              "Luxación pura vertebral con espondilolistesis residual igual o mayor al 50 % (única o múltiple)",
            values: ["20 %"],
          },
        ],
      },
    ],
  },
  {
    id: "mano",
    title: "Mano y dedos",
    groups: [
      {
        columns: ["Porcentaje"],
        rows: [
          { lesion: "Amputación del pulgar a nivel interfalángica distal", values: ["6 %"] },
          { lesion: "Amputación del pulgar a nivel interfalángica proximal", values: ["9 %"] },
          { lesion: "Amputación del pulgar completo", values: ["12 %"] },
          { lesion: "Amputación del dedo índice completo", values: ["7 %"] },
          { lesion: "Amputación del dedo medio completo", values: ["5 %"] },
          { lesion: "Amputación del dedo anular completo", values: ["4 %"] },
          { lesion: "Amputación del dedo meñique completo", values: ["3 %"] },
          { lesion: "Fractura de falange con limitación funcional", values: ["Según tabla específica"] },
          { lesion: "Síndrome del túnel carpiano operado", values: ["Según tabla específica"] },
        ],
      },
    ],
  },
  {
    id: "hombro",
    title: "Hombro y brazo",
    groups: [
      {
        columns: ["Porcentaje"],
        rows: [
          { lesion: "Fractura de húmero sin secuelas", values: ["8 %"] },
          {
            lesion: "Fractura de húmero con callo deforme y/o acortamiento",
            values: ["Según tabla (mayor)"],
          },
          { lesion: "Lesión del manguito rotador", values: ["Según tabla específica"] },
          { lesion: "Omalgia con limitación funcional", values: ["Según tabla específica"] },
        ],
      },
    ],
  },
  {
    id: "pierna",
    title: "Pierna, pelvis y pie",
    groups: [
      {
        columns: ["Porcentaje"],
        rows: [
          { lesion: "Fractura de fémur sin secuelas", values: ["10 – 30 %"] },
          { lesion: "Fractura de rótula", values: ["3 – 6 %"] },
          { lesion: "Fractura de calcáneo", values: ["6 – 18 %"] },
          { lesion: "Pelvis inestable", values: ["20 %"] },
        ],
      },
    ],
  },
  {
    id: "vista-oido",
    title: "Vista y oído",
    groups: [
      {
        columns: ["Porcentaje"],
        rows: [
          { lesion: "Pérdida total de la visión de un ojo", values: ["Según tabla de oftalmología"] },
          { lesion: "Hipoacusia bilateral severa", values: ["Según tabla de otorrinolaringología"] },
        ],
      },
    ],
  },
  {
    id: "piel",
    title: "Piel: quemaduras y cicatrices",
    groups: [
      {
        columns: ["Porcentaje"],
        rows: [
          { lesion: "Cicatrices y compromiso de piel", values: ["Según extensión y localización"] },
          { lesion: "Quemaduras con secuelas", values: ["Según regla de Wallace y tabla específica"] },
        ],
      },
    ],
  },
];
