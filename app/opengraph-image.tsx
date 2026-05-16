import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Abhishek Agnihotri — Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0f 0%, #0d1117 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 24,
            gap: 20,
          }}
        >
          <div
            style={{
              width: 4,
              height: 52,
              background: "#00f5ff",
              borderRadius: 2,
            }}
          />
          <span
            style={{
              color: "#00f5ff",
              fontSize: 18,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </span>
        </div>
        <div
          style={{
            color: "#f0ede8",
            fontSize: 80,
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: 24,
          }}
        >
          Abhishek Agnihotri
        </div>
        <div style={{ color: "#6b6b7b", fontSize: 26 }}>
          Software Developer · React · Next.js · AI Integration
        </div>
      </div>
    ),
    { ...size }
  );
}
