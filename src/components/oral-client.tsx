"use client";

import { useEffect, useRef, useState } from "react";
import { useNativePlatform } from "@/lib/native";
import { NamedIcon } from "@/components/icons";

// Project Loudspeaker UI: practise the Paper 4 oral (reading aloud and
// conversation) for Chinese and English, record your voice, and get a
// pronunciation score plus Guru's coaching. Native app only (needs the mic).

interface Item {
  key: string;
  lang: "chinese" | "english";
  levels: string[];
  mode: "read-aloud" | "conversation";
  title: string;
  text: string;
  hint: string | null;
}
interface ScoreResult {
  ok: boolean;
  scoringOn?: boolean;
  reason?: string;
  transcript?: string;
  accuracy?: number | null;
  fluency?: number | null;
  overall?: number | null;
  coaching?: string;
}

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onloadend = () => resolve(String(r.result).split(",")[1]);
    r.onerror = reject;
    r.readAsDataURL(blob);
  });
}

// Speak the passage back with the correct pronunciation, via the device's
// built-in text-to-speech (Web Speech API, works offline in the app, no Azure).
// Slowed a touch so learners can follow. Chinese uses a zh-CN voice, English
// an en-GB voice when the device has one.
function speak(text: string, lang: "chinese" | "english") {
  try {
    const synth = window.speechSynthesis;
    if (!synth) return;
    synth.cancel();
    const code = lang === "chinese" ? "zh-CN" : "en-GB";
    const u = new SpeechSynthesisUtterance(text);
    u.lang = code;
    u.rate = lang === "chinese" ? 0.82 : 0.92;
    const voice = synth.getVoices().find((v) => v.lang?.toLowerCase().startsWith(code.toLowerCase()));
    if (voice) u.voice = voice;
    synth.speak(u);
  } catch {
    /* TTS unavailable, silently skip */
  }
}

function scoreColor(v: number): string {
  if (v >= 80) return "text-guarantee";
  if (v >= 60) return "text-accent";
  return "text-signal";
}

export function OralClient() {
  const native = useNativePlatform();
  const [items, setItems] = useState<Item[]>([]);
  const [scoringOn, setScoringOn] = useState<boolean | null>(null);
  const [lang, setLang] = useState<"chinese" | "english">("chinese");
  const [active, setActive] = useState<Item | null>(null);
  const [recording, setRecording] = useState(false);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [error, setError] = useState("");

  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const stopTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (native === null) return;
    fetch("/api/account/game/oral")
      .then((r) => r.json())
      .then((d) => {
        setItems(d.items ?? []);
        setScoringOn(Boolean(d.scoringOn));
      })
      .catch(() => setError("Couldn't load the oral practice. Try again."));
  }, [native]);

  async function startRecording() {
    setError("");
    setResult(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const rec = new MediaRecorder(stream);
      chunksRef.current = [];
      rec.ondataavailable = (e) => e.data.size && chunksRef.current.push(e.data);
      rec.onstop = () => {
        stream.getTracks().forEach((t) => t.stop());
        void upload(new Blob(chunksRef.current, { type: rec.mimeType }));
      };
      recorderRef.current = rec;
      rec.start();
      setRecording(true);
      stopTimer.current = setTimeout(() => stopRecording(), 30_000); // 30s cap
    } catch {
      setError("I need microphone access to hear you. Allow the mic and try again.");
    }
  }

  function stopRecording() {
    if (stopTimer.current) clearTimeout(stopTimer.current);
    recorderRef.current?.state === "recording" && recorderRef.current.stop();
    setRecording(false);
  }

  async function upload(blob: Blob) {
    if (!active) return;
    setBusy(true);
    try {
      const audio = await blobToBase64(blob);
      const res = await fetch("/api/account/game/oral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemKey: active.key, audio, media: blob.type }),
      });
      const body = (await res.json()) as ScoreResult & { error?: string };
      if (!res.ok) throw new Error(body.error ?? "Scoring failed. Try again.");
      setResult(body);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Try again.");
    } finally {
      setBusy(false);
    }
  }

  if (native === null) {
    return (
      <div className="glass mt-6 bg-gradient-to-br from-rose-500/20 to-violet-600/10 p-6 text-center">
        <span className="icon-orb mx-auto text-accent" aria-hidden>
          <NamedIcon name="mic" size={22} />
        </span>
        <p className="mt-3 font-display text-lg font-bold text-ink">Open the StudyLah app</p>
        <p className="mt-1 text-sm text-body">
          Oral Skills uses your microphone, so it lives in the StudyLah app. Open StudyLand
          there to practise your oral.
        </p>
      </div>
    );
  }

  const shown = items.filter((i) => i.lang === lang);

  return (
    <div className="mt-5">
      {scoringOn === false && (
        <div className="mb-4 rounded-2xl border border-accent/30 bg-accent/10 p-3 text-xs text-ink">
          Pronunciation scoring is coming soon. You can practise and record now; scores switch on
          shortly.
        </div>
      )}

      <div className="flex gap-2">
        {(["chinese", "english"] as const).map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => {
              setLang(l);
              setActive(null);
              setResult(null);
            }}
            className={`flex-1 rounded-xl py-2 text-sm font-bold ${
              lang === l ? "bg-accent text-night" : "border border-hairline text-body"
            }`}
          >
            {l === "chinese" ? "Chinese" : "English"}
          </button>
        ))}
      </div>

      {!active && (
        <div className="mt-4 space-y-2">
          {shown.map((i) => (
            <button
              key={i.key}
              type="button"
              onClick={() => {
                setActive(i);
                setResult(null);
                setError("");
              }}
              className="glass flex w-full items-center gap-3 bg-gradient-to-br from-white/5 to-transparent p-3 text-left"
            >
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold text-body">
                {i.mode === "read-aloud" ? "Read aloud" : "Conversation"}
              </span>
              <span className="text-sm font-medium text-ink">{i.title}</span>
            </button>
          ))}
        </div>
      )}

      {active && (
        <div className="mt-4 space-y-4">
          <button type="button" onClick={() => setActive(null)} className="text-xs font-bold text-accent">
            ← All {lang === "chinese" ? "Chinese" : "English"} practice
          </button>

          <div className="glass bg-gradient-to-br from-white/5 to-transparent p-4">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-bold uppercase tracking-wide text-body">
                {active.mode === "read-aloud" ? "Read this aloud" : "Answer aloud"}
              </p>
              {active.mode === "read-aloud" && (
                <button
                  type="button"
                  onClick={() => speak(active.text, active.lang)}
                  className="flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent"
                >
                  <NamedIcon name="mic" size={13} /> Hear it
                </button>
              )}
            </div>
            <p className="mt-2 whitespace-pre-wrap text-base leading-relaxed text-ink">{active.text}</p>
            {active.hint && <p className="mt-2 text-xs text-body">Tip: {active.hint}</p>}
          </div>

          <div className="flex flex-col items-center gap-2">
            <button
              type="button"
              onClick={recording ? stopRecording : startRecording}
              disabled={busy}
              className={`flex h-20 w-20 items-center justify-center rounded-full transition-transform active:scale-95 disabled:opacity-60 ${
                recording ? "animate-pulse bg-signal text-white" : "bg-accent text-night"
              }`}
            >
              <NamedIcon name="mic" size={30} />
            </button>
            <span className="text-xs text-body">
              {busy ? "Scoring your recording..." : recording ? "Tap to stop" : "Tap to record"}
            </span>
          </div>

          {error && <p className="rounded-xl bg-signal/10 p-3 text-sm text-ink">{error}</p>}

          {result?.ok && result.scoringOn && (
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2">
                {(
                  [
                    ["Overall", result.overall],
                    ["Accuracy", result.accuracy],
                    ["Fluency", result.fluency],
                  ] as const
                ).map(([label, v]) => (
                  <div key={label} className="glass bg-gradient-to-br from-white/5 to-transparent p-3 text-center">
                    <p className={`font-display text-2xl font-black ${scoreColor(v ?? 0)}`}>
                      {Math.round(v ?? 0)}
                    </p>
                    <p className="text-[10px] uppercase tracking-wide text-body">{label}</p>
                  </div>
                ))}
              </div>
              {result.coaching && (
                <div className="glass bg-gradient-to-br from-accent/15 to-transparent p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-accent">Guru says</p>
                  <p className="mt-1 whitespace-pre-wrap text-sm leading-relaxed text-ink">{result.coaching}</p>
                </div>
              )}
              {active.mode === "read-aloud" && (
                <button
                  type="button"
                  onClick={() => speak(active.text, active.lang)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-hairline py-3 text-sm font-bold text-ink"
                >
                  <NamedIcon name="mic" size={15} /> Hear the model reading
                </button>
              )}
            </div>
          )}

          {result?.ok && result.scoringOn === false && (
            <p className="rounded-xl bg-white/5 p-3 text-sm text-body">
              Recorded. Pronunciation scores switch on soon, keep practising the flow and timing.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
