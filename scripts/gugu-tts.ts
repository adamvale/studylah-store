import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { fixedGuguLines } from "@/lib/gugu-lines";
import { LIFE_TRACKS } from "@/lib/life-skills";
import { PRACTICAL_SUBJECTS } from "@/lib/practical-lab";
import { PLAYGROUND_MATHS } from "@/lib/playground-maths";
import { fixedVoiceLines, retryLinesFor } from "@/lib/lesson-voice";
import { subconceptsFor } from "@/lib/teaching/subconcepts";
import { hashLine, normalizeLine } from "@/lib/speak";
import type { LessonStep } from "@/lib/lesson-steps";

// Optional scope filter: which spoken fields to generate. Default is everything.
// e.g.  GUGU_TTS_FIELDS=say,explain,modelAnswer npm run gugu:tts   (skip hints/asks)
const FIELDS = new Set(
  (process.env.GUGU_TTS_FIELDS ?? "say,ask,hints,explain,modelAnswer,system")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean),
);

// The Tuition subconcept topics whose spoken lines to include (grows per topic).
// One key per topic is enough: the others alias the same Subconcept[] array.
const SUBCONCEPT_TOPICS = [
  "t1-physical-quantities-and-measurement",
  "t2-kinematics",
  "t3-dynamics",
  "t4-turning-effect-of-forces",
];

// Optional: restrict generation to specific subconcept box codes, e.g. one
// section. When set, ONLY those boxes are generated and the other content pools
// (fixed lines, life, practical, playground) are skipped — so you can roll out a
// voice section by section. System openers/praise still come along (they are what
// makes the questions in that section speak in this voice too).
//   e.g.  GUGU_TTS_SUBCONCEPT_CODES=T2.1 npm run gugu:tts
const ONLY_CODES = new Set(
  (process.env.GUGU_TTS_SUBCONCEPT_CODES ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean),
);
const SCOPED = ONLY_CODES.size > 0;

// Pre-generate Gugu's voice with ElevenLabs (or any TTS you point it at). Every
// scripted line becomes public/audio/gugu/<hash>.mp3, plus a manifest. The app
// plays those files instantly at zero runtime cost, and falls back to the
// device voice for anything without a file (dynamic / personalised lines).
//
// Run:  ELEVENLABS_API_KEY=... ELEVENLABS_VOICE_ID=... npm run gugu:tts
// or put ELEVENLABS_API_KEY / ELEVENLABS_VOICE_ID in .env and just npm run gugu:tts
//
// It is idempotent: existing files are skipped, so re-running only makes the
// new lines. Commit the generated public/audio/gugu/ folder so production
// serves it.

const API = "https://api.elevenlabs.io/v1/text-to-speech";

function stepSpokenLines(step: LessonStep): string[] {
  const out: string[] = [];
  if (FIELDS.has("ask") && "ask" in step && step.ask) out.push(step.ask);
  if (FIELDS.has("hints") && "hints" in step && step.hints) out.push(...step.hints);
  if (FIELDS.has("explain") && "explain" in step && step.explain) out.push(step.explain);
  if (FIELDS.has("say") && "say" in step && step.say) out.push(step.say);
  if (FIELDS.has("modelAnswer") && "modelAnswer" in step && step.modelAnswer) out.push(step.modelAnswer);
  return out;
}

// Every FIXED (non-personalised, no {placeholder}) line Gugu speaks.
function collectLines(): string[] {
  const set = new Set<string>();
  // The broad pools are skipped entirely when scoped to specific box codes.
  if (!SCOPED) {
    for (const l of fixedGuguLines()) set.add(normalizeLine(l));
    for (const track of LIFE_TRACKS)
      for (const lesson of track.lessons)
        for (const step of lesson.steps) for (const x of stepSpokenLines(step)) set.add(normalizeLine(x));
    for (const subject of PRACTICAL_SUBJECTS)
      for (const lesson of subject.lessons)
        for (const step of lesson.steps) for (const x of stepSpokenLines(step)) set.add(normalizeLine(x));
    for (const arr of Object.values(PLAYGROUND_MATHS))
      for (const lesson of arr)
        for (const step of lesson.steps) for (const x of stepSpokenLines(step)) set.add(normalizeLine(x));
  }
  // Tuition subconcept lessons (Kinematics, then more as topics land).
  for (const topic of SUBCONCEPT_TOPICS)
    for (const box of subconceptsFor(topic) ?? []) {
      if (SCOPED && !ONLY_CODES.has(box.code)) continue;
      for (const step of box.steps) {
        for (const x of stepSpokenLines(step)) set.add(normalizeLine(x));
        // Wrong-answer retry lines (lead + hint + nudge) the player speaks live.
        if (FIELDS.has("hints")) for (const x of retryLinesFor(step)) set.add(normalizeLine(x));
      }
    }
  // The engine's fixed question openers and correct-answer reactions.
  if (FIELDS.has("system")) for (const l of fixedVoiceLines()) set.add(normalizeLine(l));
  return [...set].filter((x) => x.length > 0 && !x.includes("{"));
}

async function main(): Promise<void> {
  const key = process.env.ELEVENLABS_API_KEY;
  const voice = process.env.ELEVENLABS_VOICE_ID;
  const model = process.env.ELEVENLABS_MODEL_ID ?? "eleven_multilingual_v2";
  if (!key || !voice) {
    console.error(
      "Missing ELEVENLABS_API_KEY and/or ELEVENLABS_VOICE_ID. Set them in .env or pass them inline."
    );
    process.exit(1);
  }

  // Audio is namespaced by voice so several tutors can coexist. Generating a
  // voice also makes it the active one (edit active.json by hand to switch back
  // without regenerating, as long as that voice's folder exists).
  const baseDir = path.join(process.cwd(), "public", "audio", "gugu");
  const outDir = path.join(baseDir, voice);
  fs.mkdirSync(outDir, { recursive: true });

  const lines = collectLines();

  // Dry run: report what WOULD be generated (line count + characters, which is
  // what ElevenLabs bills on) and stop, without touching the API.
  if (process.env.GUGU_TTS_DRY === "1") {
    const chars = lines.reduce((n, l) => n + l.length, 0);
    console.log(
      `DRY RUN (voice ${voice}${SCOPED ? `, codes ${[...ONLY_CODES].join(",")}` : ""}): ${lines.length} lines, ${chars} characters.`,
    );
    return;
  }

  const hashes: string[] = [];
  let made = 0;
  let skipped = 0;
  let failed = 0;

  for (const line of lines) {
    const h = hashLine(line);
    hashes.push(h);
    const file = path.join(outDir, `${h}.mp3`);
    if (fs.existsSync(file)) {
      skipped++;
      continue;
    }
    try {
      const res = await fetch(`${API}/${voice}`, {
        method: "POST",
        headers: { "xi-api-key": key, "Content-Type": "application/json", Accept: "audio/mpeg" },
        body: JSON.stringify({
          text: line,
          model_id: model,
          voice_settings: { stability: 0.5, similarity_boost: 0.8, style: 0, use_speaker_boost: true },
        }),
      });
      if (!res.ok) {
        console.error(`FAIL ${h} [${res.status}] ${(await res.text().catch(() => "")).slice(0, 120)}`);
        failed++;
        continue;
      }
      fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
      made++;
      console.log(`ok  ${h}  ${line.slice(0, 64)}`);
      await new Promise((r) => setTimeout(r, 250)); // gentle on the rate limit
    } catch (err) {
      console.error(`ERR ${h}`, err);
      failed++;
    }
  }

  // Build the manifest from the audio that ACTUALLY exists on disk, so a scoped
  // run (e.g. GUGU_TTS_FIELDS=say) never drops previously generated lines, and a
  // line whose generation failed is not falsely listed as available.
  const onDisk = fs
    .readdirSync(outDir)
    .filter((f) => f.endsWith(".mp3"))
    .map((f) => f.replace(/\.mp3$/, ""));
  fs.writeFileSync(path.join(outDir, "manifest.json"), JSON.stringify(onDisk));
  fs.writeFileSync(path.join(baseDir, "active.json"), JSON.stringify({ voice }));
  console.log(
    `\nDone (voice ${voice}). ${made} generated, ${skipped} already existed, ${failed} failed. ${onDisk.length} files in this voice's manifest (${hashes.length} lines collected this run).`
  );
  if (failed > 0) process.exitCode = 1;
}

void main();
