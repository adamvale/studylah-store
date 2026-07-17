"use client";

import Link from "next/link";
import { type FormEvent, useEffect, useState } from "react";

// Mirrors the server's 60s per-email throttle so "Resend" only lights up when
// a resend would actually go out.
const RESEND_COOLDOWN_S = 60;

interface WelcomeOffer {
  code: string;
  expiresAt: string; // ISO
  pct: number;
}

export function LoginForm({ error }: { error?: string }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [offer, setOffer] = useState<WelcomeOffer | null>(null);

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setInterval(() => setCooldown((c) => c - 1), 1000);
    return () => clearInterval(t);
  }, [cooldown]);

  async function requestLink() {
    setBusy(true);
    try {
      const res = await fetch("/api/account/request-link", {
        method: "POST",
        body: new URLSearchParams({ email }),
      });
      const data = (await res.json().catch(() => null)) as
        | ({ noAccount?: boolean } & Partial<WelcomeOffer>)
        | null;
      if (data?.noAccount && data.code && data.expiresAt) {
        // No account on this email: show the welcome offer instead of the
        // check-your-inbox card, and let the cart auto-apply the code.
        const secondsLeft = Math.max(
          0,
          Math.floor((new Date(data.expiresAt).getTime() - Date.now()) / 1000)
        );
        document.cookie = `studylah_welcome=${encodeURIComponent(
          data.code
        )}; path=/; max-age=${secondsLeft}; samesite=lax`;
        setOffer({ code: data.code, expiresAt: data.expiresAt, pct: data.pct ?? 20 });
        setBusy(false);
        return;
      }
    } catch {
      // Network hiccup: fall through to the standard confirmation.
    }
    setBusy(false);
    setSent(true);
    setCooldown(RESEND_COOLDOWN_S);
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    await requestLink();
  }

  if (offer) {
    return (
      <WelcomeOfferCard
        email={email}
        offer={offer}
        onBack={() => setOffer(null)}
      />
    );
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-hairline bg-surface p-6">
        <p className="font-display text-lg font-bold text-ink">Check your inbox</p>
        <p className="mt-2 text-sm text-body">
          If <span className="font-medium text-ink">{email}</span> has ordered
          from us, a sign-in link is on its way. It works for 15 minutes.
        </p>
        <p className="mt-2 text-xs text-body/80">
          Nothing after a minute? Check your spam or promotions folder, the
          sender is orders@studylah.education.
        </p>
        {/* Code entry, the email carries a 6-digit code for app users (and
            anyone who'd rather type than tap a link). */}
        <form
          action="/api/account/verify-code"
          method="post"
          className="mt-4 rounded-xl border border-hairline bg-night p-4"
        >
          <input type="hidden" name="email" value={email} />
          <label htmlFor="login-code" className="block text-xs font-medium text-body">
            Or enter the 6-digit code from the email
          </label>
          <div className="mt-2 flex gap-2">
            <input
              id="login-code"
              name="code"
              inputMode="numeric"
              pattern="\d{6}"
              maxLength={6}
              required
              placeholder="000000"
              className="w-32 rounded-lg border border-hairline bg-surface px-3 py-2 text-center font-mono text-lg tracking-widest text-ink outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="rounded-lg bg-accent px-4 py-2 text-sm font-bold text-night"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <button
            type="button"
            disabled={cooldown > 0 || busy}
            onClick={() => void requestLink()}
            className="rounded-lg border border-hairline px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent disabled:cursor-not-allowed disabled:opacity-50"
          >
            {cooldown > 0
              ? `Resend in 0:${String(cooldown).padStart(2, "0")}`
              : busy
                ? "Sending…"
                : "Resend link"}
          </button>
          <button
            type="button"
            onClick={() => {
              setSent(false);
              setCooldown(0);
            }}
            className="text-sm font-medium text-accent underline"
          >
            Use a different email
          </button>
        </div>
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
      {error === "code" && (
        <p className="mb-4 rounded-lg bg-coral/15 px-4 py-2.5 text-sm text-ink">
          That code didn&apos;t match or has expired (codes last ~20 minutes).
          Request a fresh email below.
        </p>
      )}
      {error === "throttle" && (
        <p className="mb-4 rounded-lg bg-coral/15 px-4 py-2.5 text-sm text-ink">
          Too many tries, wait ten minutes, then request a fresh code.
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


// ── The no-account welcome offer ────────────────────────────────────────────
// Honest + useful: say there is no account on that email, then make starting
// easy with a personal, short-lived discount. The code is already validated
// server-side (expiry + single use); the cart auto-applies it via the
// studylah_welcome cookie set above.
function WelcomeOfferCard({
  email,
  offer,
  onBack,
}: {
  email: string;
  offer: { code: string; expiresAt: string; pct: number };
  onBack: () => void;
}) {
  const [left, setLeft] = useState(() =>
    Math.max(0, Math.floor((new Date(offer.expiresAt).getTime() - Date.now()) / 1000))
  );
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setLeft(Math.max(0, Math.floor((new Date(offer.expiresAt).getTime() - Date.now()) / 1000)));
    }, 1000);
    return () => clearInterval(t);
  }, [offer.expiresAt]);

  const mm = Math.floor(left / 60);
  const ss = String(left % 60).padStart(2, "0");
  const expired = left <= 0;

  return (
    <div className="rounded-2xl border border-accent/50 bg-surface p-6">
      <p className="font-display text-lg font-bold text-ink">
        No account on this email yet
      </p>
      <p className="mt-2 text-sm text-body">
        <span className="font-medium text-ink">{email}</span>
        {" hasn't ordered from us before, so there's nothing to sign in to. Accounts are created with your first order."}
      </p>

      {expired ? (
        <p className="mt-4 rounded-xl border border-hairline bg-night p-4 text-sm text-body">
          Your welcome code has expired. Enter your email again for a fresh
          one, or browse the packs any time.
        </p>
      ) : (
        <div className="mt-4 rounded-xl border border-accent/40 bg-accent/5 p-4">
          <p className="text-sm font-bold text-ink">
            Here&apos;s {offer.pct}% off your first pack, just for you
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="rounded-lg bg-night px-3 py-2 font-mono text-lg font-bold tracking-wider text-accent">
              {offer.code}
            </span>
            <button
              type="button"
              onClick={() => {
                void navigator.clipboard?.writeText(offer.code);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="rounded-lg border border-hairline px-3 py-2 text-sm font-medium text-ink hover:border-accent"
            >
              {copied ? "Copied ✓" : "Copy"}
            </button>
            <span className="font-mono text-sm font-bold text-coral">
              ⏱ {mm}:{ss} left
            </span>
          </div>
          <p className="mt-2 text-xs text-body">
            Valid for 10 minutes, one use. It applies automatically at the
            cart, no need to type it.
          </p>
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Link
          href="/subjects"
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-night transition-transform hover:-translate-y-0.5"
        >
          Browse subjects →
        </Link>
        <button
          type="button"
          onClick={onBack}
          className="text-sm font-medium text-accent underline"
        >
          Try a different email
        </button>
      </div>
    </div>
  );
}
