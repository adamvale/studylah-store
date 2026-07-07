import type { ReactNode } from "react";
import { PlaceholderBanner } from "./disclaimer";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-display text-4xl font-bold text-ink">{title}</h1>
      <p className="mt-2 font-mono text-xs text-body">Last updated: {updated}</p>
      <div className="mt-6">
        <PlaceholderBanner label="Placeholder legal text — FOR LAWYER REVIEW before launch." />
      </div>
      <div className="prose-sm mt-8 space-y-5 text-sm leading-relaxed text-body [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink">
        {children}
      </div>
    </div>
  );
}
