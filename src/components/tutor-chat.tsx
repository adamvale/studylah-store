"use client";

import { useEffect, useRef, useState } from "react";
import { NamedIcon } from "@/components/icons";
import { compressImage } from "@/lib/image-compress";

// The Guru Tutor chat surface. Auto-starts a session from `start`, then runs a
// normal chat loop with quick-action chips (explain simpler, give me a
// question, plan my week) and photo marking. Used by the subject tutor and by
// the Life Skills "talk it through" button.

export interface TutorStart {
  kind: "subject" | "life";
  topicKey: string;
  level?: "o-level" | "na-level";
  seed?: string;
  title: string;
}
interface Msg {
  role: "user" | "guru";
  content: string;
}

const CHIPS = [
  "Explain that more simply",
  "Give me a question to try",
  "Plan my week",
];

export function TutorChat({ start, onClose }: { start: TutorStart; onClose?: () => void }) {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    setBusy(true);
    fetch("/api/account/game/tutor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "start", kind: start.kind, topicKey: start.topicKey, level: start.level, seed: start.seed }),
    })
      .then((r) => r.json())
      .then((d) => {
        if (cancelled) return;
        if (d.error) { setError(d.error); return; }
        setSessionId(d.session.id);
        setMessages(d.messages);
      })
      .catch(() => !cancelled && setError("Couldn't reach Guru. Try again."))
      .finally(() => !cancelled && setBusy(false));
    return () => { cancelled = true; };
  }, [start]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, busy]);

  async function send(text: string, image?: { base64: string; media: string }) {
    if (!sessionId || busy || (!text.trim() && !image)) return;
    setError("");
    setInput("");
    setMessages((m) => [...m, { role: "user", content: image ? `[photo] ${text}`.trim() : text }]);
    setBusy(true);
    try {
      const res = await fetch("/api/account/game/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, text, image: image?.base64, media: image?.media }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error ?? "Guru is busy. Try again.");
      setMessages((m) => [...m, { role: "guru", content: body.reply }]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  async function onPickPhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    try {
      const img = await compressImage(file);
      void send(input || "Mark my working, please.", img);
    } catch {
      setError("Could not read that photo. Try another one.");
    }
  }

  return (
    <div className="flex h-[70vh] flex-col">
      <div className="flex items-center justify-between pb-2">
        <p className="font-display text-lg font-bold text-ink">Guru: {start.title}</p>
        {onClose && (
          <button type="button" onClick={onClose} className="text-xs font-bold text-accent">
            End session
          </button>
        )}
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto pr-1">
        {messages.map((m, i) => (
          <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
            <div
              className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                m.role === "user" ? "bg-accent text-night" : "glass bg-gradient-to-br from-white/5 to-transparent text-ink"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {busy && (
          <div className="flex justify-start">
            <div className="glass rounded-2xl bg-gradient-to-br from-white/5 to-transparent px-3 py-2 text-sm text-body">
              Guru is thinking...
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {error && <p className="py-1 text-xs text-signal">{error}</p>}

      <div className="flex gap-1.5 overflow-x-auto py-2">
        {CHIPS.map((c) => (
          <button
            key={c}
            type="button"
            disabled={busy || !sessionId}
            onClick={() => send(c)}
            className="whitespace-nowrap rounded-full border border-hairline px-3 py-1 text-xs text-body disabled:opacity-50"
          >
            {c}
          </button>
        ))}
      </div>

      <div className="flex items-end gap-2">
        <input ref={fileRef} type="file" accept="image/*" onChange={onPickPhoto} className="hidden" />
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          disabled={busy || !sessionId}
          aria-label="Photograph your working"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-hairline text-accent disabled:opacity-50"
        >
          <NamedIcon name="camera" size={18} />
        </button>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send(input);
            }
          }}
          rows={1}
          placeholder="Ask Guru anything..."
          // text-base (16px): anything smaller makes iOS auto-zoom on focus.
          className="max-h-24 flex-1 resize-none rounded-2xl border border-hairline bg-surface px-4 py-2.5 text-base text-ink outline-none focus:border-accent"
        />
        <button
          type="button"
          onClick={() => send(input)}
          disabled={busy || !sessionId || !input.trim()}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-night disabled:opacity-50"
          aria-label="Send"
        >
          <NamedIcon name="rocket" size={18} />
        </button>
      </div>
    </div>
  );
}
