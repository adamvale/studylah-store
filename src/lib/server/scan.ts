import Anthropic from "@anthropic-ai/sdk";
import { violatesCompliance } from "./gugu-brain";
import { realTopCalls } from "../forecast-tables";

// Project Sightseeing: the brain behind "snap a question, Guru teaches it".
// A student's photo goes straight to Claude vision (the photo is never stored);
// Guru extracts the question and teaches it in the house format (point form,
// step-by-step math). Owner-chosen model: start on Haiku 4.5 (fast, ~1-3 US
// cents per scan), swap this one string up if handwriting/working quality
// demands it.
export const SCAN_MODEL = "claude-haiku-4-5";

export type ScanMedia = "image/jpeg" | "image/png" | "image/webp";

export interface ScanTeaching {
  ok: true;
  subjectLabel: string; // human label, e.g. "O-Level Chemistry"
  level: string | null; // "o-level" | "na-level" | null
  slug: string | null; // best-guess subject slug, or null
  topic: string; // Guru's topic classification
  questionText: string; // the extracted question (the asset)
  steps: string[]; // the taught steps, one idea each
  answer: string; // the worked final answer
  misconception: string | null; // the common trap
}
export interface ScanRefusal {
  ok: false;
  reason: string;
}

const SYSTEM = `You are Guru, StudyLah's patient study coach for Singapore O-Level (G3) and N(A)-Level (G2) students. A student has photographed one exam question and wants to LEARN how to do it, not just the answer.

Look at the image and teach the question. Rules:
- Identify the subject and level if you reasonably can (Singapore syllabus).
- Read the question faithfully, printed or handwritten, including any diagram.
- Teach it STEP BY STEP in point form: one idea per step, plain language, show every line of working for calculations in correct notation. Lead the student to the answer; do not just state it.
- End with the final answer, and name the single most common mistake on this kind of question.
- This is a real student aged 13 to 17. Be warm and encouraging. Pressure the problem, never the child. No shame.

FORMULAS: write chemistry and maths so it reads like the exam. Use an underscore for a subscript and a caret for a superscript, each taking one character or a {group}. For example H_2O, C_xH_8, 2Cl_2, C_xH_6Cl_2, Cu^{2+}, SO_4^{2-}, x^2, 10^{-3}. Do NOT use Unicode subscript or superscript characters, use the underscore and caret markers.

HARD RULES:
- Never promise or imply a grade, mark, or exam result. Teach the method only.
- Never use the words guaranteed, confirmed, leaked, insider, sure win, or any "100%" certainty claim.
- No emojis. No em dashes or en dashes anywhere; use commas, colons or periods.
- If the image is NOT a school/exam question (blank, a selfie, chat, unrelated, or unreadable), do not invent one.

Respond with ONLY a JSON object, no prose, no code fence, in exactly this shape:
{"ok":true,"subjectLabel":"...","level":"o-level|na-level|null","slug":"chemistry-pure|physics-pure|biology-pure|e-math|a-math|...|null","topic":"short topic name","questionText":"the question as text","steps":["step 1","step 2","..."],"answer":"the final answer","misconception":"the common trap, or null"}
If it is not a real academic question, respond with ONLY:
{"ok":false,"reason":"a short, kind explanation of what to photograph instead"}`;

// AI text may still slip a dash in; strip em/en dashes so the house rule holds
// no matter what the model returns.
function deDash(s: string): string {
  return s.replace(/\s*[—–]\s*/g, ", ").replace(/[—–]/g, "-");
}

function sanitize<T extends ScanTeaching | ScanRefusal>(t: T): T {
  const walk = (v: unknown): unknown =>
    typeof v === "string"
      ? deDash(v)
      : Array.isArray(v)
        ? v.map(walk)
        : v;
  return JSON.parse(
    JSON.stringify(t, (_k, v) => (typeof v === "string" ? walk(v) : v))
  ) as T;
}

// Map Guru's free-text topic to the subject's real 2026 forecast tier, so we
// can honestly flag "this is a VERY HIGH forecast topic". Conservative: only
// very-high/high surface a rank, and only on a real keyword overlap.
export function forecastRankFor(
  level: string | null,
  slug: string | null,
  topicText: string
): string | null {
  if (!level || !slug) return null;
  const rows = realTopCalls(level, slug, 20);
  if (!rows.length) return null;
  const words = (s: string) =>
    new Set(
      s
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, " ")
        .split(/\s+/)
        .filter((w) => w.length >= 4)
    );
  const t = words(topicText);
  let best: string | null = null;
  for (const row of rows) {
    const overlap = [...words(row.topic)].some((w) => t.has(w));
    if (!overlap) continue;
    if (row.tier === "very-high") return "VERY HIGH";
    if (row.tier === "high") best = "HIGH";
  }
  return best;
}

export async function teachScan(
  imageBase64: string,
  media: ScanMedia
): Promise<ScanTeaching | ScanRefusal> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return { ok: false, reason: "Scanning is not available right now. Try again later." };

  const client = new Anthropic({ apiKey });
  try {
    const res = await client.messages.create({
      model: SCAN_MODEL,
      max_tokens: 1200,
      system: SYSTEM,
      messages: [
        {
          role: "user",
          content: [
            { type: "image", source: { type: "base64", media_type: media, data: imageBase64 } },
            { type: "text", text: "Teach this question." },
          ],
        },
      ],
    });
    const raw = res.content
      .map((b) => (b.type === "text" ? b.text : ""))
      .join("")
      .trim();

    // Pull the JSON object out even if the model wrapped it in a fence.
    const jsonStr = raw.replace(/^```(?:json)?/i, "").replace(/```$/, "").trim();
    const start = jsonStr.indexOf("{");
    const end = jsonStr.lastIndexOf("}");
    if (start === -1 || end === -1) {
      return { ok: false, reason: "I couldn't read that clearly. Try a sharper, closer photo of one question." };
    }
    const parsed = JSON.parse(jsonStr.slice(start, end + 1)) as ScanTeaching | ScanRefusal;

    if (!parsed || parsed.ok !== true) {
      return {
        ok: false,
        reason:
          (parsed as ScanRefusal)?.reason ||
          "Point the camera at one exam question, printed or handwritten, and I'll teach it.",
      };
    }
    // Compliance backstop: if any taught text trips the banned-pattern filter,
    // don't show it (minors-facing, non-negotiable).
    const joined = [parsed.answer, ...(parsed.steps ?? []), parsed.misconception ?? ""].join(" ");
    if (violatesCompliance(joined)) {
      return { ok: false, reason: "I hit a snag teaching that one. Try re-scanning it." };
    }
    return sanitize({
      ok: true,
      subjectLabel: String(parsed.subjectLabel ?? "Your question").slice(0, 80),
      level: parsed.level === "o-level" || parsed.level === "na-level" ? parsed.level : null,
      slug: typeof parsed.slug === "string" && parsed.slug !== "null" ? parsed.slug : null,
      topic: String(parsed.topic ?? "").slice(0, 120),
      questionText: String(parsed.questionText ?? "").slice(0, 4000),
      steps: (Array.isArray(parsed.steps) ? parsed.steps : []).map((s) => String(s).slice(0, 1000)).slice(0, 20),
      answer: String(parsed.answer ?? "").slice(0, 2000),
      misconception: parsed.misconception ? String(parsed.misconception).slice(0, 500) : null,
    });
  } catch (err) {
    console.error("Sightseeing scan error", err);
    return { ok: false, reason: "Something went wrong reading that. Try again in a moment." };
  }
}
