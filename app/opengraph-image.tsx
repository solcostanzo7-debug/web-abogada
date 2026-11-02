import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#2a2320",
          padding: 80,
          color: "#fbf7f0",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#7a1f2b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontStyle: "italic",
              fontWeight: 600,
            }}
          >
            SC
          </div>
          <div style={{ fontSize: 28, letterSpacing: 2, opacity: 0.7 }}>
            SOL COSTANZO — ABOGADA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 56, lineHeight: 1.15, maxWidth: 900 }}>
            Cuando aparece un problema, saber cómo actuar hace la diferencia.
          </div>
          <div style={{ fontSize: 28, opacity: 0.75, maxWidth: 800 }}>
            {`Accidentes de trabajo y ART · Cobertura de salud — ${siteConfig.city}`}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
