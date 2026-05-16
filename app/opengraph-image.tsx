import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Abhishek Agnihotri — Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#0a0a0f",
          display: "flex",
          flexDirection: "row",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* ── Aurora blobs ── */}
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 50% 50%, rgba(0,245,255,0.16) 0%, rgba(0,245,255,0.05) 50%, transparent 70%)",
            top: -200,
            left: -100,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 50% 50%, rgba(147,51,234,0.2) 0%, rgba(147,51,234,0.06) 50%, transparent 70%)",
            top: -160,
            right: 300,
            display: "flex",
          }}
        />

        {/* Bottom line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 2,
            background:
              "linear-gradient(to right, transparent, #00f5ff 30%, #9333ea 70%, transparent)",
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

        {/* ── Left content column ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            padding: "52px 56px 52px 72px",
          }}
        >
          {/* Logo + badge */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{ color: "#00f5ff", fontSize: 30, fontWeight: 700, letterSpacing: "-1px" }}
              >
                [
              </span>
              <span
                style={{ color: "#f0ede8", fontSize: 26, fontWeight: 700, letterSpacing: "-1px" }}
              >
                AA
              </span>
              <span
                style={{ color: "#00f5ff", fontSize: 30, fontWeight: 700, letterSpacing: "-1px" }}
              >
                ]
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 18px",
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
                  fontSize: 13,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Available for Hire
              </span>
            </div>
          </div>

          {/* Name + role */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <div
              style={{
                color: "#f0ede8",
                fontSize: 88,
                fontWeight: 700,
                lineHeight: 0.92,
                letterSpacing: "-3px",
                display: "flex",
              }}
            >
              Abhishek
            </div>
            <div
              style={{
                color: "#00f5ff",
                fontSize: 88,
                fontWeight: 700,
                lineHeight: 0.92,
                letterSpacing: "-3px",
                display: "flex",
              }}
            >
              Agnihotri
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginTop: 24,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 2,
                  background: "#00f5ff",
                  display: "flex",
                }}
              />
              <span
                style={{
                  color: "#6b6b7b",
                  fontSize: 18,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Software Developer
              </span>
            </div>
          </div>

          {/* Tech pills + URL */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["React", "Next.js", "TypeScript", "AI Integration"].map((t) => (
                <div
                  key={t}
                  style={{
                    display: "flex",
                    padding: "6px 14px",
                    borderRadius: 100,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  <span
                    style={{ color: "#6b6b7b", fontSize: 13, fontFamily: "monospace" }}
                  >
                    {t}
                  </span>
                </div>
              ))}
            </div>

            <span
              style={{
                color: "rgba(107,107,123,0.45)",
                fontSize: 13,
                fontFamily: "monospace",
                letterSpacing: "0.04em",
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
            width: 340,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Photo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            width={340}
            height={630}
            style={{
              objectFit: "cover",
              objectPosition: "top center",
              display: "flex",
            }}
          />

          {/* Gradient overlay — left fade so photo blends into content */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, #0a0a0f 0%, rgba(10,10,15,0.3) 35%, transparent 60%)",
              display: "flex",
            }}
          />

          {/* Cyan corner accent — top right */}
          <div
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              width: 44,
              height: 44,
              borderTop: "2px solid rgba(0,245,255,0.5)",
              borderRight: "2px solid rgba(0,245,255,0.5)",
              borderRadius: "0 6px 0 0",
              display: "flex",
            }}
          />

          {/* Cyan corner accent — bottom left */}
          <div
            style={{
              position: "absolute",
              bottom: 20,
              left: 0,
              width: 44,
              height: 44,
              borderBottom: "2px solid rgba(0,245,255,0.5)",
              borderLeft: "2px solid rgba(0,245,255,0.5)",
              borderRadius: "0 0 0 6px",
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
