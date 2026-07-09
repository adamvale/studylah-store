"use client";

import { type FormEvent, useState } from "react";

export function LoginForm({ error }: { error?: string }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setBusy(true);
    try {
      await fetch("/api/account/request-link", {
        method: "POST",
        body: new URLSearchParams({ email }),
      });
    } catch {
      // Deliberately ignored — we show the same confirmation either way so the
      // page never reveals whether an email has an account.
    } finally {
      setBusy(false);
      setSent(true);
    }
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-hairline bg-surface p-6">
        <p className="font-display text-lg font-bold text-ink">Check your inbox</p>
        <p className="mt-2 text-sm text-body">
          If <span className="font-medium text-ink">{email}</span> has ordered
          from us, a sign-in link is on its way. It works for 15 minutes.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-4 text-sm font-medium text-accent underline"
        >
          Use a different email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-hairline bg-surface p-6">
      {error === "link" && (
        <p className="mb-4 rounded-lg bg-coral/15 px-4 py-2.5 text-sm text-ink">
          That sign-in link has expired or was already used. Enter your email for
          a fresh one.
        </p>
      )}
      <label htmlFor="email" className="block text-sm font-medium text-ink">
        Email you ordered with
      </label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="mt-2 w-full rounded-lg border border-hairline bg-night px-4 py-2.5 text-sm text-ink outline-none focus:border-accent"
      />
      <button
        type="submit"
        disabled={busy}
        className="mt-4 w-full rounded-lg bg-accent px-5 py-3 text-sm font-bold text-night transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {busy ? "Sending…" : "Email me a sign-in link"}
      </button>
      <p className="mt-3 text-xs text-body">
        No password needed. We&apos;ll email a one-time link to the address on
        your order.
      </p>
    </form>
  );
}
