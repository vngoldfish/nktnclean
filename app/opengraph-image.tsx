import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "株式会社NKTN / Bawui Cleaning - Cleaning + DX";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #f8fbfd 0%, #e0f7f4 52%, #bae6fd 100%)",
          padding: 72,
          color: "#1E293B",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 44,
              background: "#0E7490",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 900,
            }}
          >
            N
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 900, letterSpacing: 3 }}>株式会社NKTN</div>
            <div style={{ fontSize: 26, color: "#0E7490", fontWeight: 700 }}>Bawui Cleaning</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 78, fontWeight: 900, lineHeight: 1.05, letterSpacing: -3 }}>
            <span>Hotel Cleaning +</span>
            <span>LINE Cleaning DX</span>
          </div>
          <div style={{ maxWidth: 920, fontSize: 30, lineHeight: 1.35, color: "#334155" }}>
            Osaka Nishinari based cleaning, photo reports, LINE chatbot, AI translation, and field management across Japan.
          </div>
        </div>

        <div style={{ display: "flex", gap: 18, fontSize: 24, fontWeight: 800, color: "#0E7490" }}>
          <span>Hotel</span>
          <span>Minpaku</span>
          <span>Airbnb</span>
          <span>Photo Report</span>
          <span>Cleaning DX</span>
        </div>
      </div>
    ),
    size,
  );
}
