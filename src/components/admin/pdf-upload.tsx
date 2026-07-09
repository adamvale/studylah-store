"use client";

import { useRef, useState, type FormEvent } from "react";

/** What is stored right now. `null` means the file is missing from disk. */
export interface StoredFile {
  sizeBytes: number;
  updatedAt: string;
}

/** Seed placeholders are ~2–3 KB; no real product PDF is anywhere near this. */
const PLACEHOLDER_MAX_BYTES = 10_000;

function formatSize(bytes: number): string {
  return bytes >= 1_000_000
    ? `${(bytes / 1_000_000).toFixed(1)} MB`
    : `${Math.round(bytes / 1024)} KB`;
}

function StoredFileNote({ stored }: { stored: StoredFile | null }) {
  if (!stored) {
    return (
      <span className="text-xs text-heat-5">
        No file on disk — buyers of this product would get nothing.
      </span>
    );
  }
  const isPlaceholder = stored.sizeBytes <= PLACEHOLDER_MAX_BYTES;
  const when = new Date(stored.updatedAt).toLocaleDateString("en-SG", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <span className={`text-xs ${isPlaceholder ? "text-teal" : "text-body"}`}>
      {isPlaceholder ? "Placeholder — " : ""}
      {formatSize(stored.sizeBytes)} · updated {when}
    </span>
  );
}

export function PdfUpload({
  fileId,
  label,
  stored,
}: {
  fileId: string;
  label: string;
  stored: StoredFile | null;
}) {
  const [state, setState] = useState<"idle" | "uploading" | "done" | "error">("idle");
  const [detail, setDetail] = useState("");
  const [current, setCurrent] = useState<StoredFile | null>(stored);
  const inputRef = useRef<HTMLInputElement>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const file = inputRef.current?.files?.[0];
    if (!file) {
      setState("error");
      setDetail("Choose a PDF first.");
      return;
    }
    setState("uploading");
    setDetail("");
    try {
      const data = new FormData();
      data.set("file", file);
      const res = await fetch(`/api/admin/files/${fileId}/upload`, {
        method: "POST",
        body: data,
      });
      const body = (await res.json().catch(() => null)) as
        | { ok?: boolean; bytes?: number; error?: string }
        | null;
      if (!res.ok) throw new Error(body?.error ?? "Upload failed.");
      setState("done");
      setDetail("replaced");
      // Reflect the new file immediately, so the slot never keeps showing the
      // bytes it just overwrote.
      setCurrent({
        sizeBytes: body?.bytes ?? 0,
        updatedAt: new Date().toISOString(),
      });
      if (inputRef.current) inputRef.current.value = "";
    } catch (e) {
      setState("error");
      setDetail(e instanceof Error ? e.message : "Upload failed.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-wrap items-center gap-2">
      <span className="w-56 shrink-0">
        <span className="block text-sm text-body">{label}</span>
        <StoredFileNote stored={current} />
      </span>
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf,.pdf"
        aria-label={`Replace ${label} PDF`}
        className="text-xs text-body file:mr-2 file:rounded-md file:border-0 file:bg-trust-soft file:px-2 file:py-1 file:text-xs file:font-medium file:text-trust"
      />
      <button
        type="submit"
        disabled={state === "uploading"}
        className="rounded-md border border-hairline px-2.5 py-1 text-xs font-medium text-trust hover:border-hairline"
      >
        {state === "uploading" ? "Uploading…" : "Replace"}
      </button>
      {state === "done" && <span className="text-xs text-guarantee">{detail}</span>}
      {state === "error" && (
        <span className="text-xs text-heat-5" title={detail}>
          {detail}
        </span>
      )}
    </form>
  );
}
