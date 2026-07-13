import { ImageResponse } from "next/og";
import { prisma } from "@/lib/db";
import { getSubject, LEVELS, type Level } from "@/lib/catalogue";
import { gradeEstimateFor, type Band } from "@/lib/server/diagnostic";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "My StudyLah readiness score";

const BAND_TITLE: Record<Band, string> = {
  danger: "Danger zone on these topics",
  warning: "Warning, marks are leaking",
  pass: "Pass territory, keep it sharp",
};
const BAND_COLOR: Record<Band, string> = {
  danger: "#ff6b6b",
  warning: "#ffdc00",
  pass: "#3ddc84",
};

// The shareable result card, rendered on demand per attempt.
export default async function OgImage({
  params,
}: {
  params: Promise<{ attemptId: string }>;
}) {
  const { attemptId } = await params;
  const attempt = await prisma.diagnosticAttempt.findUnique({ where: { id: attemptId } });
  const subject = attempt ? getSubject(attempt.level as Level, attempt.slug) : null;
  const band = (attempt?.band ?? "warning") as Band;
  const score = attempt ? `${attempt.score}/${attempt.totalMarks}` : "?";
  const estimate = attempt
    ? `Indicative: ${gradeEstimateFor(attempt.level, attempt.score, attempt.totalMarks)} on the tested topics`
    : "";
  const subjectLine = attempt && subject
    ? `${subject.name} · ${LEVELS[attempt.level as Level].shortName} · most-likely 2026 topics`
    : "StudyLah, predict your mark";

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
        <div style={{ display: "flex", marginTop: 28, fontSize: 44, fontWeight: 700, color: "#ffffff" }}>
          Study<span style={{ color: "#ffdc00" }}>Lah!</span>
        </div>
        <div style={{ display: "flex", marginTop: 36, fontSize: 108, fontWeight: 700, color: BAND_COLOR[band] }}>
          {score}
        </div>
        <div style={{ display: "flex", marginTop: 10, fontSize: 44, fontWeight: 700, color: "#ffffff" }}>
          {BAND_TITLE[band]}
        </div>
        {estimate ? (
          <div style={{ display: "flex", marginTop: 14, fontSize: 30, fontWeight: 700, color: BAND_COLOR[band] }}>
            {estimate}
          </div>
        ) : null}
        <div style={{ display: "flex", marginTop: 18, fontSize: 26, color: "#aeb8c6" }}>
          {subjectLine}
        </div>
        <div style={{ display: "flex", marginTop: 30, fontSize: 26, color: "#ffdc00" }}>
          What would you score? → studylah.education/diagnostic
        </div>
      </div>
    ),
    size
  );
}
