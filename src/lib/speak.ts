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

function deviceSpeak(text: string, lang: string): void {
  if (!("speechSynthesis" in window)) return;
  try {
    const synth = window.speechSynthesis;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
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

// ── Public API ──────────────────────────────────────────────────────────────
let currentAudio: HTMLAudioElement | null = null;

export function speak(text: string, lang = "en-GB"): void {
  if (typeof window === "undefined") return;
  const clean = normalizeLine(text);
  if (!clean) return;
  stopSpeaking();
  const h = hashLine(clean);
  void loadManifest().then((m) => {
    if (m.has(h)) {
      try {
        const audio = new Audio(`/audio/gugu/${activeVoice}/${h}.mp3`);
        currentAudio = audio;
        let fellBack = false;
        const fallback = () => {
          if (fellBack) return;
          fellBack = true;
          deviceSpeak(text, lang);
        };
        audio.addEventListener("error", fallback, { once: true });
        audio.play().catch(fallback);
      } catch {
        deviceSpeak(text, lang);
      }
    } else {
      deviceSpeak(text, lang);
    }
  });
}

export function stopSpeaking(): void {
  if (typeof window === "undefined") return;
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
