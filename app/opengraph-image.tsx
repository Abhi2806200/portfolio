import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Abhishek Agnihotri — Software Developer | React & Next.js";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const imgBuffer = await readFile(
    path.join(process.cwd(), "public/assets/heroImage.png")
  );
  const base64 = imgBuffer.toString("base64");
  const photoSrc = `data:image/png;base64,${base64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "row",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* Dot grid — matches site background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.022) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
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
            padding: "52px 56px 52px 72px",
            position: "relative",
          }}
        >
          {/* Available for hire badge — matches hero exactly */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 18px",
                borderRadius: 100,
                border: "1px solid rgba(74,222,128,0.35)",
                background: "rgba(74,222,128,0.07)",
              }}
            >
              {/* Pulsing dot */}
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#4ade80",
                  display: "flex",
                }}
              />
              <span
                style={{
                  color: "#4ade80",
                  fontSize: 13,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                }}
              >
                Available for hire
              </span>
            </div>
          </div>

          {/* Name — exact same gradient as hero */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <div
              style={{
                fontSize: 92,
                fontWeight: 800,
                lineHeight: 0.9,
                letterSpacing: "-4px",
                display: "flex",
                background:
                  "linear-gradient(135deg, #ffffff 0%, #e2e8f0 30%, #94a3b8 65%, #64748b 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Abhishek
            </div>
            <div
              style={{
                fontSize: 92,
                fontWeight: 800,
                lineHeight: 0.9,
                letterSpacing: "-4px",
                display: "flex",
                background:
                  "linear-gradient(135deg, #cbd5e1 0%, #94a3b8 35%, #64748b 65%, #475569 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Agnihotri
            </div>

            {/* Role line — matches hero "— Software Developer" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginTop: 22,
              }}
            >
              <div
                style={{ width: 36, height: 1, background: "rgba(255,255,255,0.25)", display: "flex" }}
              />
              <span
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontSize: 15,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                }}
              >
                Software Developer
              </span>
            </div>
          </div>

          {/* Bottom: stats + CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Stats row — matches hero stats section */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 0,
                paddingTop: 20,
                borderTop: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ color: "#ffffff", fontSize: 32, fontWeight: 700, letterSpacing: "-1px" }}>5+</span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "monospace" }}>Years Exp.</span>
              </div>
              <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.12)", margin: "0 28px", display: "flex" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ color: "#ffffff", fontSize: 32, fontWeight: 700, letterSpacing: "-1px" }}>10+</span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "monospace" }}>Projects</span>
              </div>
              <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.12)", margin: "0 28px", display: "flex" }} />
              {/* CTA */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0,
                  padding: "12px 28px",
                  borderRadius: 100,
                  background: "#ffffff",
                }}
              >
                <span style={{ color: "#0a0a0a", fontSize: 14, fontWeight: 700, letterSpacing: "-0.2px" }}>
                  View My Work →
                </span>
              </div>
            </div>

            {/* URL */}
            <span
              style={{
                color: "rgba(255,255,255,0.2)",
                fontSize: 12,
                fontFamily: "monospace",
                letterSpacing: "0.06em",
              }}
            >
              abhishek-agnihotri.vercel.app
            </span>
          </div>
        </div>

        {/* ── Right: profile photo ── */}
        <div
          style={{
            display: "flex",
            width: 330,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            width={330}
            height={630}
            style={{
              objectFit: "cover",
              objectPosition: "top center",
              display: "flex",
              borderLeft: "1px solid rgba(255,255,255,0.08)",
            }}
          />
          {/* Left blend into dark bg */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.25) 38%, transparent 65%)",
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
              height: 100,
              background: "linear-gradient(to top, #0a0a0a, transparent)",
              display: "flex",
            }}
          />

          {/* Corner bracket — matches hero photo corner accents */}
          <div
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              width: 36,
              height: 36,
              borderTop: "1.5px solid rgba(255,255,255,0.3)",
              borderRight: "1.5px solid rgba(255,255,255,0.3)",
              borderRadius: "0 4px 0 0",
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 24,
              left: 0,
              width: 36,
              height: 36,
              borderBottom: "1.5px solid rgba(255,255,255,0.3)",
              borderLeft: "1.5px solid rgba(255,255,255,0.3)",
              borderRadius: "0 0 0 4px",
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
