import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Abhishek Agnihotri — Software Developer | React & Next.js";
export const size = { width: 1200, height: 630 };
export const contentType = "image/jpeg";

export default async function Image() {
  const imgBuffer = await readFile(
    path.join(process.cwd(), "public/assets/personal.jpeg")
  );
  const base64 = imgBuffer.toString("base64");
  const photoSrc = `data:image/jpeg;base64,${base64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "linear-gradient(135deg, #0a0a0a 0%, #111118 100%)",
          display: "flex",
          flexDirection: "row",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* Subtle top gradient bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background:
              "linear-gradient(to right, #a855f7, #6366f1, #3b82f6, #06b6d4, #10b981)",
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
              "linear-gradient(to bottom, #a855f7, #6366f1, transparent)",
            display: "flex",
          }}
        />

        {/* ── Left content ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            padding: "52px 48px 48px 68px",
          }}
        >
          {/* Top row: logo + available badge */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ color: "#888", fontSize: 26, fontWeight: 700 }}>[</span>
              <span style={{ color: "#ffffff", fontSize: 22, fontWeight: 700, letterSpacing: "-0.5px" }}>AA</span>
              <span style={{ color: "#888", fontSize: 26, fontWeight: 700 }}>]</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "7px 16px",
                borderRadius: 100,
                border: "1px solid rgba(74,222,128,0.4)",
                background: "rgba(74,222,128,0.08)",
              }}
            >
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "flex" }} />
              <span style={{ color: "#4ade80", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Available for Hire
              </span>
            </div>
          </div>

          {/* Name */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <div
              style={{
                fontSize: 82,
                fontWeight: 800,
                lineHeight: 0.92,
                letterSpacing: "-3px",
                display: "flex",
                background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 40%, #94a3b8 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Abhishek
            </div>
            <div
              style={{
                fontSize: 82,
                fontWeight: 800,
                lineHeight: 0.92,
                letterSpacing: "-3px",
                display: "flex",
                background: "linear-gradient(135deg, #cbd5e1 0%, #94a3b8 50%, #64748b 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Agnihotri
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 20 }}>
              <div style={{ width: 32, height: 2, background: "#4b5563", display: "flex" }} />
              <span style={{ color: "#6b7280", fontSize: 16, letterSpacing: "0.22em", textTransform: "uppercase" }}>
                Software Developer
              </span>
            </div>
          </div>

          {/* Bottom: tech stack + CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Tech pills */}
            <div style={{ display: "flex", gap: 8 }}>
              {["React", "Next.js", "TypeScript", "AI"].map((t) => (
                <div
                  key={t}
                  style={{
                    display: "flex",
                    padding: "5px 13px",
                    borderRadius: 100,
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.05)",
                  }}
                >
                  <span style={{ color: "#9ca3af", fontSize: 12, fontFamily: "monospace" }}>{t}</span>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 24px",
                  borderRadius: 100,
                  background: "#ffffff",
                }}
              >
                <span style={{ color: "#0a0a0a", fontSize: 15, fontWeight: 700, letterSpacing: "-0.2px" }}>
                  View Portfolio →
                </span>
              </div>
              <span style={{ color: "#374151", fontSize: 13, fontFamily: "monospace" }}>
                abhishek-agnihotri.vercel.app
              </span>
            </div>
          </div>
        </div>

        {/* ── Right: profile photo ── */}
        <div style={{ display: "flex", width: 320, position: "relative", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            width={320}
            height={630}
            style={{ objectFit: "cover", objectPosition: "top center", display: "flex" }}
          />
          {/* Left fade blend */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.2) 40%, transparent 65%)",
              display: "flex",
            }}
          />
          {/* Bottom fade */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 120,
              background: "linear-gradient(to top, #0a0a0a, transparent)",
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
