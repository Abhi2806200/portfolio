import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0f",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Subtle cyan glow at center */}
        <div
          style={{
            position: "absolute",
            width: 140,
            height: 140,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,245,255,0.12) 0%, transparent 70%)",
          }}
        />
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 0, position: "relative" }}>
          <span
            style={{
              color: "#00f5ff",
              fontSize: 70,
              fontWeight: 700,
              fontFamily: "sans-serif",
              letterSpacing: "-3px",
              lineHeight: 1,
            }}
          >
            [
          </span>
          <span
            style={{
              color: "#f0ede8",
              fontSize: 58,
              fontWeight: 700,
              fontFamily: "sans-serif",
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            AA
          </span>
          <span
            style={{
              color: "#00f5ff",
              fontSize: 70,
              fontWeight: 700,
              fontFamily: "sans-serif",
              letterSpacing: "-3px",
              lineHeight: 1,
            }}
          >
            ]
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
