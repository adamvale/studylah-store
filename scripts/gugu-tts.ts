import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { fixedGuguLines } from "@/lib/gugu-lines";
import { LIFE_TRACKS } from "@/lib/life-skills";
import { PRACTICAL_SUBJECTS } from "@/lib/practical-lab";
import { hashLine, normalizeLine } from "@/lib/speak";
import type { LessonStep } from "@/lib/lesson-steps";

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
  if ("ask" in step && step.ask) out.push(step.ask);
  if ("hints" in step && step.hints) out.push(...step.hints);
  if ("explain" in step && step.explain) out.push(step.explain);
  return out;
}

// Every FIXED (non-personalised, no {placeholder}) line Gugu speaks.
function collectLines(): string[] {
  const set = new Set<string>();
  for (const l of fixedGuguLines()) set.add(normalizeLine(l));
  for (const track of LIFE_TRACKS)
    for (const lesson of track.lessons)
      for (const step of lesson.steps) for (const x of stepSpokenLines(step)) set.add(normalizeLine(x));
  for (const subject of PRACTICAL_SUBJECTS)
    for (const lesson of subject.lessons)
      for (const step of lesson.steps) for (const x of stepSpokenLines(step)) set.add(normalizeLine(x));
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

  const outDir = path.join(process.cwd(), "public", "audio", "gugu");
  fs.mkdirSync(outDir, { recursive: true });

  const lines = collectLines();
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

  fs.writeFileSync(path.join(outDir, "manifest.json"), JSON.stringify(hashes));
  console.log(
    `\nDone. ${made} generated, ${skipped} already existed, ${failed} failed. ${hashes.length} lines in the manifest.`
  );
  if (failed > 0) process.exitCode = 1;
}

void main();
