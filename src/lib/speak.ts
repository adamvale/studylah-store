// Gugu's voice. Every guidance line is scripted (the same for every student).
//
// Two ways it can be spoken, best first:
//   1. A pre-generated audio file (ElevenLabs, or any premium TTS) served from
//      /audio/gugu/<hash>.mp3. Generate once with `npm run gugu:tts`, then it
//      plays instantly, offline, at zero runtime cost.
//   2. The device's own speech (Web Speech API), used as an automatic fallback
//      for any line without a generated file (e.g. dynamic, name-personalised,
//      or question-specific lines). We pick the most natural voice available.
//
// So nothing breaks before the audio is generated, and dynamic lines always
// still speak.

import { spokenMath } from "./spoken-math";

// ── Line hashing (must match scripts/gugu-tts.ts exactly) ───────────────────
export function normalizeLine(text: string): string {
  return text.trim().replace(/\s+/g, " ");
}

// cyrb53, a fast deterministic string hash. Same output in Node and the browser.
export function hashLine(text: string): string {
  const str = normalizeLine(text);
  let h1 = 0xdeadbeef;
  let h2 = 0x41c6ce57;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
  h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
  h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  const n = 4294967296 * (2097151 & h2) + (h1 >>> 0);
  return n.toString(36);
}

// ── Manifest: which lines have a generated audio file ───────────────────────
// Audio is namespaced by voice so several tutors can coexist (Amy, Jay, ...).
// The active voice is named in /audio/gugu/active.json = { voice }; its available
// lines are in /audio/gugu/<voice>/manifest.json, each file /audio/gugu/<voice>/<hash>.mp3.
// If active.json is missing, we fall back to the default tutor (Amy).
import { DEFAULT_TUTOR_VOICE_ID } from "./tutor-voices";

let activeVoice = "";
let manifest: Set<string> | null = null;
let manifestPromise: Promise<Set<string>> | null = null;

function loadManifest(): Promise<Set<string>> {
  if (manifest) return Promise.resolve(manifest);
  if (!manifestPromise) {
    manifestPromise = fetch("/audio/gugu/active.json")
      .then((r) => (r.ok ? (r.json() as Promise<{ voice?: string }>) : { voice: "" }))
      .then((cfg) => {
        activeVoice = cfg.voice || DEFAULT_TUTOR_VOICE_ID;
        if (!activeVoice) return [] as string[];
        return fetch(`/audio/gugu/${activeVoice}/manifest.json`).then((r) =>
          r.ok ? (r.json() as Promise<string[]>) : ([] as string[]),
        );
      })
      .then((arr) => {
        manifest = new Set(arr);
        return manifest;
      })
      .catch(() => {
        manifest = new Set<string>();
        return manifest;
      });
  }
  return manifestPromise;
}

// ── Device voice (fallback) ─────────────────────────────────────────────────
let cachedVoice: SpeechSynthesisVoice | null | undefined;

function scoreVoice(v: SpeechSynthesisVoice): number {
  const n = v.name.toLowerCase();
  const lang = v.lang.toLowerCase();
  let s = 0;
  if (/natural|neural|enhanced|premium/.test(n)) s += 8;
  if (n.includes("google")) s += 6;
  if (n.includes("siri")) s += 6;
  if (/samantha|karen|daniel|serena|martha|arthur|matilda|catherine|nora|libby|sonia|ryan|aria|jenny|guy|fiona|moira|tessa/.test(n)) s += 4;
  if (lang.startsWith("en-gb")) s += 3;
  else if (lang.startsWith("en-au")) s += 2;
  else if (lang.startsWith("en-us")) s += 2;
  if (v.localService) s += 1;
  if (/compact|eloquence|espeak|pico/.test(n)) s -= 6;
  return s;
}

function pickVoice(): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  const en = voices.filter((v) => v.lang.toLowerCase().startsWith("en"));
  const pool = en.length ? en : voices;
  return pool.slice().sort((a, b) => scoreVoice(b) - scoreVoice(a))[0] ?? null;
}

function getVoice(): SpeechSynthesisVoice | null {
  if (cachedVoice !== undefined) return cachedVoice;
  const v = pickVoice();
  if (v) cachedVoice = v;
  return v ?? null;
}

if (typeof window !== "undefined" && "speechSynthesis" in window) {
  try {
    window.speechSynthesis.onvoiceschanged = () => {
      cachedVoice = pickVoice() ?? undefined;
    };
  } catch {
    /* ignore */
  }
}

function deviceSpeak(text: string, lang: string, onEnd?: () => void): void {
  if (!("speechSynthesis" in window)) {
    onEnd?.();
    return;
  }
  try {
    const synth = window.speechSynthesis;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    if (onEnd) u.addEventListener("end", onEnd, { once: true });
    const v = getVoice();
    if (v) {
      u.voice = v;
      u.lang = v.lang;
    } else {
      u.lang = lang;
    }
    u.rate = 0.95;
    u.pitch = 1.05;
    u.volume = 1;
    synth.speak(u);
  } catch {
    /* ignore */
  }
}

// ── Is Gugu talking right now? ──────────────────────────────────────────────
// The tutor head (and anything else that wants to react) subscribes here, so
// the UI never has to guess from timers whether a line is still playing.
type SpeakingListener = (speaking: boolean) => void;
const speakingListeners = new Set<SpeakingListener>();
let speaking = false;

export function isSpeaking(): boolean {
  return speaking;
}

export function onSpeakingChange(fn: SpeakingListener): () => void {
  speakingListeners.add(fn);
  fn(speaking);
  return () => speakingListeners.delete(fn);
}

function setSpeaking(next: boolean): void {
  if (speaking === next) return;
  speaking = next;
  for (const fn of speakingListeners) {
    try {
      fn(next);
    } catch {
      /* a bad listener must not break playback */
    }
  }
}

// ── Public API ──────────────────────────────────────────────────────────────
let currentAudio: HTMLAudioElement | null = null;
// Looking a line up in the manifest is async, so a line asked for just before
// the student navigates could otherwise arrive late and start talking over the
// next screen. Every speak/stop bumps this token; a lookup that finds the token
// has moved on simply drops its line.
let speakToken = 0;

// Play one prepared line, calling `done` when it finishes (or fails over).
function playLine(line: string, lang: string, token: number, done?: () => void): void {
  if (token !== speakToken) return;
  const h = hashLine(line);
  const fallback = () => deviceSpeak(line, lang, done);
  try {
    const audio = new Audio(`/audio/gugu/${activeVoice}/${h}.mp3`);
    currentAudio = audio;
    let fellBack = false;
    const once = () => {
      if (fellBack) return;
      fellBack = true;
      fallback();
    };
    if (done) audio.addEventListener("ended", () => token === speakToken && done(), { once: true });
    audio.addEventListener("error", once, { once: true });
    void audio.play().catch(once);
  } catch {
    fallback();
  }
}

export function speak(text: string, lang = "en-GB"): void {
  speakSequence([text], lang);
}

// Say several lines back to back, e.g. a short "let me go over that again"
// before repeating a teaching card. Each is looked up separately, so the lead-in
// reuses its own generated file and the explanation reuses the one it already has.
export function speakSequence(texts: string[], lang = "en-GB"): void {
  if (typeof window === "undefined") return;
  // Formulas are authored in notation so they LOOK right on screen; say them in
  // words. The TTS pre-generator applies the same transform, so hashes match.
  const lines = texts.map((t) => normalizeLine(spokenMath(t))).filter((t) => t.length > 0);
  if (!lines.length) return;
  stopSpeaking();
  const token = speakToken;
  void loadManifest().then((m) => {
    if (token !== speakToken) return; // superseded while we were loading
    let idx = 0;
    const next = (): void => {
      if (token !== speakToken) return;
      if (idx >= lines.length) {
        setSpeaking(false); // the whole sequence is done
        return;
      }
      const line = lines[idx++];
      setSpeaking(true);
      if (m.has(line ? hashLine(line) : "")) playLine(line, lang, token, next);
      else deviceSpeak(line, lang, next);
    };
    next();
  });
}

export function stopSpeaking(): void {
  if (typeof window === "undefined") return;
  speakToken++; // any in-flight lookup or queued line is now stale
  setSpeaking(false);
  if (currentAudio) {
    try {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    } catch {
      /* ignore */
    }
    currentAudio = null;
  }
  if ("speechSynthesis" in window) {
    try {
      window.speechSynthesis.cancel();
    } catch {
      /* ignore */
    }
  }
}

// Auto-speak (greetings, question intros) should honour the mute preference;
// explicit "Hear it" taps always play.
export function isMuted(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem("gugu_muted") === "1";
  } catch {
    return false;
  }
}
