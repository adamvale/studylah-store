"use client";

import { useRef, useState, type FormEvent } from "react";

export function PdfUpload({
  productId,
  label,
}: {
  productId: string;
  label: string;
}) {
  const [state, setState] = useState<"idle" | "uploading" | "done" | "error">("idle");
  const [detail, setDetail] = useState("");
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
      const res = await fetch(`/api/admin/products/${productId}/upload`, {
        method: "POST",
        body: data,
      });
      const body = (await res.json().catch(() => null)) as
        | { ok?: boolean; bytes?: number; error?: string }
        | null;
      if (!res.ok) throw new Error(body?.error ?? "Upload failed.");
      setState("done");
      setDetail(`replaced (${Math.round((body?.bytes ?? 0) / 1024)} KB)`);
      if (inputRef.current) inputRef.current.value = "";
    } catch (e) {
      setState("error");
      setDetail(e instanceof Error ? e.message : "Upload failed.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-wrap items-center gap-2">
      <span className="w-32 shrink-0 text-sm text-body">{label}</span>
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
        className="rounded-md border border-trust/25 px-2.5 py-1 text-xs font-medium text-trust hover:border-trust/50"
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
