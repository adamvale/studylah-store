import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "StudyLah, 2026 exam forecasts for O-Level and N(A)-Level";

// Site-wide social share card, rendered from code so the unfurl stays on-brand
// and compliant (no grade promises) no matter which page gets shared. Nested
// routes with their own opengraph-image (e.g. the diagnostic result) override
// this; everything else inherits it.
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          backgroundColor: "#161c26",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", gap: 8 }}>
          {["#e7ecff", "#aebfff", "#6f8bff", "#385dff", "#ffdc00"].map((c) => (
            <div key={c} style={{ width: 44, height: 18, backgroundColor: c, display: "flex" }} />
          ))}
        </div>
        <div style={{ display: "flex", marginTop: 30, fontSize: 46, fontWeight: 700, color: "#ffffff" }}>
          Study<span style={{ color: "#ffdc00" }}>Lah!</span>
        </div>
        <div style={{ display: "flex", marginTop: 30, fontSize: 92, fontWeight: 700, color: "#ffffff", lineHeight: 1.05 }}>
          Study Less,
        </div>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 700, color: "#ffdc00", lineHeight: 1.05 }}>
          Score More.
        </div>
        <div style={{ display: "flex", marginTop: 26, fontSize: 30, color: "#aeb8c6", maxWidth: 900 }}>
          AI exam forecasts, original practice questions and full timed rehearsals for the Singapore-Cambridge O-Level and N(A)-Level.
        </div>
        <div style={{ display: "flex", marginTop: 26, fontSize: 26, color: "#ffdc00" }}>
          studylah.education
        </div>
      </div>
    ),
    size
  );
}
