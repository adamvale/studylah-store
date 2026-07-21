"use client";

import { useRef, useState } from "react";
import { useNativePlatform } from "@/lib/native";
import { NamedIcon } from "@/components/icons";
import { compressImage } from "@/lib/image-compress";

// Project Sightseeing UI: snap a question, Guru teaches it step by step.
// Native app only (the camera + this whole tool is gated to the shell). The
// teaching reveals one step at a time so it coaches rather than dumps the
// answer, and any question can be dropped into the mistake notebook.

interface Teaching {
  scanId: string;
  subjectLabel: string;
  topic: string;
  forecastRank: string | null;
  questionText: string;
  steps: string[];
  answer: string;
  misconception: string | null;
}

export function ScanClient() {
  const native = useNativePlatform();
  const fileRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [teaching, setTeaching] = useState<Teaching | null>(null);
  const [revealed, setRevealed] = useState(0); // steps shown so far
  const [showAnswer, setShowAnswer] = useState(false);
  const [saved, setSaved] = useState(false);

  async function onPick(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = ""; // allow re-picking the same file
    if (!file) return;
    setError("");
    setTeaching(null);
    setSaved(false);
    setBusy(true);
    try {
      const { base64, media } = await compressImage(file);
      const res = await fetch("/api/account/game/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "teach", image: base64, media }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error ?? "Scan failed. Try again.");
      if (!body.ok) {
        setError(body.reason ?? "Point the camera at one exam question and try again.");
        return;
      }
      setTeaching(body as Teaching);
      setRevealed(1);
      setShowAnswer(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Try again.");
    } finally {
      setBusy(false);
    }
  }

  async function saveToMistakes() {
    if (!teaching || saved) return;
    setSaved(true); // optimistic
    try {
      await fetch("/api/account/game/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "save", scanId: teaching.scanId }),
      });
    } catch {
      setSaved(false);
    }
  }

  function reset() {
    setTeaching(null);
    setError("");
    setSaved(false);
    setRevealed(0);
  }

  if (native === null) {
    return (
      <div className="glass mt-6 bg-gradient-to-br from-violet-500/20 to-fuchsia-600/10 p-6 text-center">
        <span className="icon-orb mx-auto text-accent" aria-hidden>
          <NamedIcon name="camera" size={22} />
        </span>
        <p className="mt-3 font-display text-lg font-bold text-ink">Open the StudyLah app</p>
        <p className="mt-1 text-sm text-body">
          Snap and Teach uses your camera, so it lives in the StudyLah app. Open StudyLand
          there to scan a question and have Guru teach it.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* No forced capture: iOS then offers Camera OR Photo Library, which is
          more reliable in the web view and still works if the camera is
          declined. */}
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        onChange={onPick}
        className="hidden"
      />

      {!teaching && (
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          disabled={busy}
          className="glass mt-5 flex w-full flex-col items-center gap-3 bg-gradient-to-br from-violet-500/25 to-fuchsia-600/10 p-8 transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          <span className="icon-orb text-accent" aria-hidden>
            <NamedIcon name="camera" size={26} />
          </span>
          <span className="font-display text-lg font-bold text-ink">
            {busy ? "Guru is reading it..." : "Snap a question"}
          </span>
          <span className="text-xs text-body">
            {busy ? "One moment" : "Point at one question, printed or handwritten"}
          </span>
        </button>
      )}

      {error && (
        <div className="mt-4 rounded-2xl border border-signal/40 bg-signal/10 p-4 text-sm text-ink">
          {error}
          <button type="button" onClick={reset} className="mt-2 block font-bold text-accent">
            Try another photo
          </button>
        </div>
      )}

      {teaching && (
        <div className="mt-5 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-ink">
              {teaching.subjectLabel}
            </span>
            {teaching.topic && (
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-body">
                {teaching.topic}
              </span>
            )}
            {teaching.forecastRank && (
              <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-accent">
                {teaching.forecastRank} in the 2026 forecast
              </span>
            )}
          </div>

          <div className="glass bg-gradient-to-br from-white/5 to-transparent p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-body">The question</p>
            <p className="mt-1 whitespace-pre-wrap text-sm text-ink">{teaching.questionText}</p>
          </div>

          <ol className="space-y-2">
            {teaching.steps.slice(0, revealed).map((s, i) => (
              <li key={i} className="glass flex gap-3 bg-gradient-to-br from-white/5 to-transparent p-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-xs font-bold text-accent">
                  {i + 1}
                </span>
                <span className="whitespace-pre-wrap text-sm leading-relaxed text-ink">{s}</span>
              </li>
            ))}
          </ol>

          {revealed < teaching.steps.length ? (
            <button
              type="button"
              onClick={() => setRevealed((r) => r + 1)}
              className="w-full rounded-xl bg-accent/15 py-3 text-sm font-bold text-accent"
            >
              Show next step ({revealed}/{teaching.steps.length})
            </button>
          ) : !showAnswer ? (
            <button
              type="button"
              onClick={() => setShowAnswer(true)}
              className="w-full rounded-xl bg-accent py-3 text-sm font-bold text-night"
            >
              Show the answer
            </button>
          ) : (
            <div className="glass bg-gradient-to-br from-accent/15 to-transparent p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-accent">Answer</p>
              <p className="mt-1 whitespace-pre-wrap text-sm font-medium text-ink">{teaching.answer}</p>
              {teaching.misconception && (
                <p className="mt-3 border-t border-white/10 pt-3 text-xs text-body">
                  <span className="font-bold text-ink">Watch out: </span>
                  {teaching.misconception}
                </p>
              )}
            </div>
          )}

          <div className="flex gap-2 pt-1">
            <button
              type="button"
              onClick={saveToMistakes}
              disabled={saved}
              className="flex-1 rounded-xl border border-hairline py-3 text-sm font-bold text-ink disabled:opacity-60"
            >
              {saved ? "Saved to Mistakes" : "Save to Mistakes"}
            </button>
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="flex-1 rounded-xl bg-accent py-3 text-sm font-bold text-night"
            >
              Scan another
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
