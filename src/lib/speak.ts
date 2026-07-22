// Gugu's voice. Every spoken line is scripted (the same for every student) and
// read aloud on demand with the device's built-in speech, so it costs nothing:
// no AI, no audio files, no network. We pick the most natural English voice the
// device offers (Siri / enhanced / Google / Natural) instead of the flat
// default, and warm the rate and pitch so it sounds like a patient tutor, not a
// robot. Guarded for SSR and browsers without speech synthesis.

let cachedVoice: SpeechSynthesisVoice | null | undefined; // undefined = not yet computed

function scoreVoice(v: SpeechSynthesisVoice): number {
  const n = v.name.toLowerCase();
  const lang = v.lang.toLowerCase();
  let s = 0;
  // High-quality neural / enhanced voices.
  if (/natural|neural|enhanced|premium/.test(n)) s += 8;
  if (n.includes("google")) s += 6;
  if (n.includes("siri")) s += 6;
  // Named human voices shipped by Apple / Microsoft.
  if (/samantha|karen|daniel|serena|martha|arthur|matilda|catherine|nora|libby|sonia|ryan|aria|jenny|guy|fiona|moira|tessa/.test(n)) s += 4;
  // Prefer British, then Australian, then American English for a Singapore ear.
  if (lang.startsWith("en-gb")) s += 3;
  else if (lang.startsWith("en-au")) s += 2;
  else if (lang.startsWith("en-us")) s += 2;
  if (v.localService) s += 1; // on-device, no lag
  // Penalise the flat, robotic fallbacks.
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
  // Only cache once voices have actually loaded (getVoices is async on first call).
  if (v) cachedVoice = v;
  return v ?? null;
}

// Voices load asynchronously; refresh the pick when they arrive.
if (typeof window !== "undefined" && "speechSynthesis" in window) {
  try {
    window.speechSynthesis.onvoiceschanged = () => {
      cachedVoice = pickVoice() ?? undefined;
    };
  } catch {
    /* ignore */
  }
}

export function speak(text: string, lang = "en-GB"): void {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
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
    u.rate = 0.95; // a touch slower, calm and clear
    u.pitch = 1.05; // slightly warmer, less flat
    u.volume = 1;
    synth.speak(u);
  } catch {
    /* speech is a nice-to-have; never let it break the page */
  }
}

export function stopSpeaking(): void {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  try {
    window.speechSynthesis.cancel();
  } catch {
    /* ignore */
  }
}
