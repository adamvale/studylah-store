"use client";

import { useState } from "react";

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Clipboard can be unavailable (old browser, permissions), fall back
      // to a prompt the user can copy from manually.
      window.prompt("Copy this:", value);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="shrink-0 rounded-lg border border-hairline px-3 py-2 text-xs font-medium text-ink transition-colors hover:border-accent"
    >
      {copied ? "Copied!" : label}
    </button>
  );
}

export function ReferralShare({ code, link }: { code: string; link: string }) {
  const message = `Get S$15 off your first StudyLah exam forecast, use my code ${code} or this link: ${link}`;
  return (
    <div className="mt-4 space-y-2">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-hairline bg-night px-4 py-3">
        <div>
          <p className="text-xs text-body">Your code</p>
          <p className="font-mono text-lg font-bold text-accent">{code}</p>
        </div>
        <CopyButton value={code} label="Copy code" />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-hairline bg-night px-4 py-3">
        <div className="min-w-0">
          <p className="text-xs text-body">Your link, the code applies by itself</p>
          <p className="truncate font-mono text-xs text-cloud">{link}</p>
        </div>
        <CopyButton value={link} label="Copy link" />
      </div>
      <div className="flex flex-wrap gap-2 pt-1">
        <a
          href={`https://wa.me/?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-guarantee px-4 py-2 text-sm font-bold text-night transition-transform hover:-translate-y-0.5"
        >
          Share on WhatsApp
        </a>
        <a
          href={`https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(
            `Get S$15 off your first StudyLah exam forecast, use my code ${code}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-signal px-4 py-2 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
        >
          Share on Telegram
        </a>
      </div>
    </div>
  );
}
