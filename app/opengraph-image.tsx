import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Abhishek Agnihotri — Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0a0a0f",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "52px 72px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* Cyan aurora blob — top left */}
        <div
          style={{
            position: "absolute",
            width: 560,
            height: 560,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 50% 50%, rgba(0,245,255,0.18) 0%, rgba(0,245,255,0.06) 45%, transparent 70%)",
            top: -220,
            left: -140,
            display: "flex",
          }}
        />

        {/* Purple aurora blob — top right */}
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 50% 50%, rgba(147,51,234,0.22) 0%, rgba(147,51,234,0.07) 45%, transparent 70%)",
            top: -180,
            right: -120,
            display: "flex",
          }}
        />

        {/* Bottom gradient line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 2,
            background:
              "linear-gradient(to right, transparent 0%, #00f5ff 30%, #9333ea 70%, transparent 100%)",
            display: "flex",
          }}
        />

        {/* Left edge accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 3,
            height: "100%",
            background:
              "linear-gradient(to bottom, transparent, #00f5ff 30%, #9333ea 70%, transparent)",
            display: "flex",
          }}
        />

        {/* ── Top row ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* [AA] logo */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{
                color: "#00f5ff",
                fontSize: 32,
                fontWeight: 700,
                letterSpacing: "-1px",
              }}
            >
              [
            </span>
            <span
              style={{
                color: "#f0ede8",
                fontSize: 28,
                fontWeight: 700,
                letterSpacing: "-1px",
              }}
            >
              AA
            </span>
            <span
              style={{
                color: "#00f5ff",
                fontSize: 32,
                fontWeight: 700,
                letterSpacing: "-1px",
              }}
            >
              ]
            </span>
          </div>

          {/* Available badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 22px",
              borderRadius: 100,
              border: "1px solid rgba(0,245,255,0.25)",
              background: "rgba(0,245,255,0.06)",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#22c55e",
                display: "flex",
              }}
            />
            <span
              style={{
                color: "#00f5ff",
                fontSize: 15,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Available for Hire
            </span>
          </div>
        </div>

        {/* ── Main name block ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <div
            style={{
              color: "#f0ede8",
              fontSize: 104,
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: "-4px",
              display: "flex",
            }}
          >
            Abhishek
          </div>
          <div
            style={{
              color: "#00f5ff",
              fontSize: 104,
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: "-4px",
              display: "flex",
            }}
          >
            Agnihotri
          </div>

          {/* Role label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              marginTop: 28,
            }}
          >
            <div
              style={{
                width: 48,
                height: 2,
                background: "#00f5ff",
                display: "flex",
              }}
            />
            <span
              style={{
                color: "#6b6b7b",
                fontSize: 20,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Software Developer
            </span>
          </div>
        </div>

        {/* ── Bottom row ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          {/* Tech pills */}
          <div style={{ display: "flex", gap: 10 }}>
            {["React", "Next.js", "TypeScript", "AI Integration"].map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  padding: "7px 16px",
                  borderRadius: 100,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <span
                  style={{
                    color: "#6b6b7b",
                    fontSize: 14,
                    fontFamily: "monospace",
                  }}
                >
                  {t}
                </span>
              </div>
            ))}
          </div>

          {/* URL */}
          <span
            style={{
              color: "rgba(107,107,123,0.5)",
              fontSize: 14,
              fontFamily: "monospace",
              letterSpacing: "0.05em",
            }}
          >
            abhishek-agnihotri.vercel.app
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
