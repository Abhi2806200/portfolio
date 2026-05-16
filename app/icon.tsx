import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
        }}
      >
        <span
          style={{
            color: "#00f5ff",
            fontSize: 18,
            fontWeight: 700,
            fontFamily: "sans-serif",
            letterSpacing: "-1px",
            lineHeight: 1,
          }}
        >
          [
        </span>
        <span
          style={{
            color: "#f0ede8",
            fontSize: 16,
            fontWeight: 700,
            fontFamily: "sans-serif",
            lineHeight: 1,
          }}
        >
          A
        </span>
        <span
          style={{
            color: "#00f5ff",
            fontSize: 18,
            fontWeight: 700,
            fontFamily: "sans-serif",
            letterSpacing: "-1px",
            lineHeight: 1,
          }}
        >
          ]
        </span>
      </div>
    ),
    { ...size }
  );
}
