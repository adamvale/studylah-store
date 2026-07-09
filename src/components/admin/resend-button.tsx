"use client";

import { useState } from "react";

export function ResendButton({ orderId }: { orderId: number }) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [detail, setDetail] = useState("");

  async function resend() {
    setState("sending");
    setDetail("");
    try {
      const res = await fetch(`/api/admin/orders/${orderId}/resend`, { method: "POST" });
      const body = (await res.json().catch(() => null)) as
        | { ok?: boolean; via?: string; error?: string }
        | null;
      if (!res.ok) throw new Error(body?.error ?? "Failed to resend.");
      setState("done");
      setDetail(body?.via === "outbox-stub" ? "written to outbox" : "sent");
    } catch (e) {
      setState("error");
      setDetail(e instanceof Error ? e.message : "Failed to resend.");
    }
  }

  return (
    <span className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={resend}
        disabled={state === "sending"}
        className="rounded-md border border-hairline px-2.5 py-1 text-xs font-medium text-accent hover:border-hairline"
      >
        {state === "sending" ? "Sending…" : state === "done" ? "Resent" : "Resend email"}
      </button>
      {state === "done" && <span className="text-xs text-guarantee">{detail}</span>}
      {state === "error" && (
        <span className="text-xs text-heat-5" title={detail}>
          failed
        </span>
      )}
    </span>
  );
}
