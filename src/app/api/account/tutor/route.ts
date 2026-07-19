import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { getCustomerId } from "@/lib/server/customer-session";
import { masterApiGate } from "@/lib/server/entitlements";
import { violatesCompliance, GUGU_MODEL } from "@/lib/server/gugu-brain";

export const runtime = "nodejs";

// The study tutor: three Claude-powered micro-teachers behind one endpoint.
//   autopsy    - why each wrong MCQ option is tempting (distractor teaching)
//   explain    - grades a student's own-words explanation of a topic
//   structured - mark-scheme feedback on a structured answer vs the model
// Same guardrails as Gugu: Haiku, compliance filter on output, graceful
// fallback text, per-customer rate limit. Master-gated (it's a StudyLand
// surface). Never promises grades; it coaches.

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 10;
const hits = new Map<string, number[]>();
function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > MAX_PER_WINDOW;
}

const FALLBACK =
  "The coach is having a moment. Check the worked solution and your notes, or try again shortly.";

const BASE_RULES = `You are a precise, encouraging Singapore O-Level/N(A)-Level study coach inside StudyLand.
Rules you never break:
1. NEVER promise or imply a grade, mark, or exam result.
2. Never use "guaranteed", "confirmed", "leaked", "insider", "sure-win" or certainty percentages.
3. Be concise and concrete. Plain text only, no markdown headers. Short lines.
4. Use the exam's own vocabulary (the phrasing markers expect).
5. Warm but honest: name what is wrong plainly, then how to fix it.
6. Point form ALWAYS: every idea is its own short line starting "- " (unless the task gives you an exact line format). Never write a paragraph.
7. Any calculation is broken into numbered steps, one line each, in this shape:
Step 1: <the formula>
Step 2: <substitute the values, with units>
Step 3: <the result, with units>
Use plain-text maths symbols (×, ÷, =, ², ⁻¹). Never LaTeX, never one-line algebra chains.`;

interface TutorBody {
  mode?: unknown;
  // autopsy
  stem?: unknown;
  options?: unknown;
  correctIndex?: unknown;
  given?: unknown;
  workedSolution?: unknown;
  // explain
  subjectName?: unknown;
  topic?: unknown;
  text?: unknown;
  // structured
  prompt?: unknown;
  model?: unknown;
  answer?: unknown;
}

function buildRequest(body: TutorBody): { system: string; user: string } | null {
  const mode = String(body.mode ?? "");

  if (mode === "autopsy") {
    const stem = String(body.stem ?? "").slice(0, 800);
    const options = Array.isArray(body.options)
      ? (body.options as unknown[]).map((o) => String(o).slice(0, 200)).slice(0, 6)
      : [];
    const correctIndex = Number(body.correctIndex);
    const given = String(body.given ?? "").slice(0, 200);
    if (!stem || options.length < 2 || !Number.isInteger(correctIndex)) return null;
    return {
      system: `${BASE_RULES}
Task: distractor autopsy for a multiple-choice question. For EACH wrong option, one line: "B) <why this option is tempting and exactly which slip produces it>". Then one closing line starting "Takeaway:" with the single habit that avoids the trap. Do not re-explain why the correct answer is right (they have the worked solution). Max 5 lines total.`,
      user: `Question: ${stem}
Options: ${options.map((o, i) => `${String.fromCharCode(65 + i)}) ${o}`).join(" | ")}
Correct option: ${String.fromCharCode(65 + correctIndex)}
Student chose: ${given || "(no answer)"}
Worked solution (context): ${String(body.workedSolution ?? "").slice(0, 600)}`,
    };
  }

  if (mode === "explain") {
    const subjectName = String(body.subjectName ?? "").slice(0, 80);
    const topic = String(body.topic ?? "").slice(0, 120);
    const text = String(body.text ?? "").slice(0, 1500);
    if (!subjectName || !topic || text.trim().length < 20) return null;
    return {
      system: `${BASE_RULES}
Task: the student explained a syllabus topic in their own words (the "teach it back" technique). Grade the explanation:
Line 1: "Right: <what they got correct, briefly>"
Line 2: "Missing: <the key syllabus points or exam vocabulary they left out>"
Line 3: "Fix: <the single most important refinement, phrased the way a marker wants it>"
If the explanation contains an actual error, start line 1 with "Careful:" and correct it first. Max 6 lines.`,
      user: `Subject: ${subjectName} (Singapore-Cambridge syllabus)
Topic: ${topic}
Student's explanation: """${text}"""`,
    };
  }

  if (mode === "structured") {
    const prompt = String(body.prompt ?? "").slice(0, 800);
    const model = String(body.model ?? "").slice(0, 1200);
    const answer = String(body.answer ?? "").slice(0, 1500);
    if (!prompt || !model || answer.trim().length < 10) return null;
    return {
      system: `${BASE_RULES}
Task: mark a structured exam answer against the model answer, like a marker with a mark scheme.

First, decide the marks available (Y): if the question states its marks (e.g. "(4 marks)"), use that number; otherwise count the distinct crediting points in the model answer (its CAPITALISED phrases are the anchors). Award one mark per crediting point the student's answer clearly earns (X).

Respond in EXACTLY this format:
Score: X/Y
✓ <crediting point earned> (quote the student words that earned it)
✗ <crediting point missed>: <exactly what is wrong or missing, quoting their vague phrase if there is one>
(one line per crediting point, every point gets a ✓ or ✗ line, in the model answer's order)
Marker's tip: <one concrete rewrite of their weakest line, in exam phrasing>

Be strict the way a real marker is: vague wording does not score. Judge only against the model answer.`,
      user: `Question: ${prompt}
Model answer (crediting phrases in CAPS): ${model}
Student's answer: """${answer}"""`,
    };
  }

  return null;
}

export async function POST(request: Request) {
  const customerId = await getCustomerId();
  const gate = await masterApiGate(customerId);
  if (gate) return gate;
  if (!customerId) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }
  if (rateLimited(customerId)) {
    return NextResponse.json({ fallback: FALLBACK }, { status: 429 });
  }

  let body: TutorBody;
  try {
    body = (await request.json()) as TutorBody;
  } catch {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }
  const req = buildRequest(body);
  if (!req) return NextResponse.json({ error: "Bad request." }, { status: 400 });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return NextResponse.json({ fallback: FALLBACK });

  try {
    const client = new Anthropic({ apiKey });
    const res = await client.messages.create({
      model: GUGU_MODEL,
      max_tokens: 600,
      system: req.system,
      messages: [{ role: "user", content: req.user }],
    });
    const text = res.content
      .map((b) => (b.type === "text" ? b.text : ""))
      .join("")
      .trim();
    if (!text || violatesCompliance(text)) {
      return NextResponse.json({ fallback: FALLBACK });
    }
    return NextResponse.json({ reply: text });
  } catch (err) {
    console.error("Tutor error", err);
    return NextResponse.json({ fallback: FALLBACK });
  }
}
