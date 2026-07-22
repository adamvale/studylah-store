// Gugu's voice in a learning activity. Every spoken line is scripted (the same
// for every student) and read aloud on demand with the device's built-in
// speech, so it costs nothing to run: no AI, no audio files, no network. Guard
// for SSR and for browsers without speech synthesis.

export function speak(text: string, lang = "en-GB"): void {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = 0.98; // a touch calm, like a patient tutor
    u.pitch = 1;
    window.speechSynthesis.speak(u);
  } catch {
    /* speech is a nice-to-have; never let it break the lesson */
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
