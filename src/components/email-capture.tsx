"use client";

import { useState, type FormEvent } from "react";
import { LEVELS, SUBJECTS } from "@/lib/catalogue";

type Status = "idle" | "submitting" | "success" | "error";

export function EmailCaptureForm({
  source,
  showSubjectSelect = false,
  buttonLabel = "Send my free heatmap",
}: {
  source: string;
  showSubjectSelect?: boolean;
  buttonLabel?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subjectValue = data.get("subject");
    const [level, subjectSlug] =
      typeof subjectValue === "string" && subjectValue.includes("::")
        ? subjectValue.split("::")
        : [null, null];

    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          consent: data.get("consent") === "on",
          source,
          level,
          subjectSlug,
        }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Something went wrong. Try again.");
      }
      setStatus("success");
      form.reset();
    } catch (e) {
      setStatus("error");
      setError(e instanceof Error ? e.message : "Something went wrong. Try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-lg bg-guarantee/10 px-4 py-3 text-sm text-guarantee"
        role="status"
      >
        <p className="font-medium">You&apos;re on the list — check your inbox.</p>
        <p className="mt-1 text-ink/70">
          Your free heatmap PDF is on its way. If it doesn&apos;t arrive in a
          few minutes, check your spam folder. Your consent has been recorded.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="flex flex-col gap-2 sm:flex-row">
        {showSubjectSelect && (
          <label className="flex-1">
            <span className="sr-only">Subject</span>
            <select
              name="subject"
              required
              defaultValue=""
              className="w-full rounded-lg border border-trust/20 bg-white px-3 py-2.5 text-sm text-ink"
            >
              <option value="" disabled>
                Choose your subject
              </option>
              {(["o-level", "na-level"] as const).map((level) => (
                <optgroup key={level} label={LEVELS[level].name}>
                  {SUBJECTS.filter((s) => s.level === level).map((s) => (
                    <option key={`${level}-${s.slug}`} value={`${level}::${s.slug}`}>
                      {s.name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </label>
        )}
        <label className="flex-1">
          <span className="sr-only">Email address</span>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-lg border border-trust/20 bg-white px-3 py-2.5 text-sm text-ink placeholder:text-body/50"
          />
        </label>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-lg bg-signal px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-signal-deep"
        >
          {status === "submitting" ? "Sending…" : buttonLabel}
        </button>
      </div>
      <label className="flex items-start gap-2 text-xs text-body">
        <input type="checkbox" name="consent" required className="mt-0.5" />
        <span>
          I agree to StudyLah emailing me my free heatmap and occasional
          exam-prep tips. You can withdraw consent anytime (PDPA).
        </span>
      </label>
      {status === "error" && (
        <p className="text-sm text-heat-5" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
