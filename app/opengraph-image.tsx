import { ImageResponse } from "next/og";

export const alt = "Backbeat. Hampshire's premier wedding band";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #141416 0%, #242426 60%, #3a2e1f 100%)",
          color: "#f6f2ec",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#b8884a",
            fontWeight: 600,
          }}
        >
          Backbeat
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 88,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              maxWidth: 980,
            }}
          >
            Hampshire&apos;s premier wedding band.
          </div>
          <div
            style={{
              fontSize: 32,
              color: "rgba(246, 242, 236, 0.75)",
              fontWeight: 400,
              maxWidth: 900,
            }}
          >
            Live music packages from £1,900 · South Coast &amp; UK-wide
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(246, 242, 236, 0.55)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          <span>Indie · Rock · Pop</span>
          <span>backbeat-band.co.uk</span>
        </div>
      </div>
    ),
    size,
  );
}
