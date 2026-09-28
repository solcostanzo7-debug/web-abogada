import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#7a3b52",
          borderRadius: 14,
          color: "#fffdf9",
          fontSize: 30,
          fontWeight: 600,
          fontStyle: "italic",
          fontFamily: "Georgia, serif",
        }}
      >
        SC
      </div>
    ),
    { ...size }
  );
}
