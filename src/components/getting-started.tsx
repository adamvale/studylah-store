import Link from "next/link";

// The new-buyer runway: four steps that take someone from "I bought a PDF"
// to "the system is running my revision". Server-rendered from real state;
// disappears once all four are done.

export interface StartStep {
  done: boolean;
  label: string;
  detail: string;
  href: string;
  cta: string;
}

export function GettingStarted({ steps }: { steps: StartStep[] }) {
  const doneCount = steps.filter((s) => s.done).length;
  if (doneCount === steps.length) return null;

  return (
    <section className="mb-8 rounded-2xl border border-accent/40 bg-surface p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-display text-lg font-bold text-ink">
          Get the system running
        </h2>
        <p className="font-mono text-xs text-body">
          {doneCount}/{steps.length} done
        </p>
      </div>
      <p className="mt-1 text-sm text-body">
        Your purchase is more than the PDFs — set these up once and StudyLand
        runs your revision until exam day.
      </p>
      <ol className="mt-4 space-y-2">
        {steps.map((step, i) => (
          <li
            key={i}
            className={`flex flex-wrap items-center justify-between gap-2 rounded-xl border px-4 py-3 ${
              step.done ? "border-guarantee/40 bg-night opacity-70" : "border-hairline bg-night"
            }`}
          >
            <span className="flex min-w-0 items-start gap-3">
              <span
                aria-hidden="true"
                className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-xs font-bold ${
                  step.done ? "bg-guarantee/20 text-guarantee" : "bg-accent/15 text-accent"
                }`}
              >
                {step.done ? "✓" : i + 1}
              </span>
              <span className="min-w-0">
                <span
                  className={`block text-sm ${step.done ? "text-body line-through" : "text-ink"}`}
                >
                  {step.label}
                </span>
                {!step.done && <span className="text-xs text-body">{step.detail}</span>}
              </span>
            </span>
            {!step.done && (
              <Link
                href={step.href}
                className="shrink-0 text-sm font-medium text-accent hover:underline"
              >
                {step.cta} →
              </Link>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
