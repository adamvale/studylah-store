export function heatBg(probability: number): string {
  if (probability >= 80) return "bg-heat-5";
  if (probability >= 65) return "bg-heat-4";
  if (probability >= 50) return "bg-heat-3";
  if (probability >= 35) return "bg-heat-2";
  return "bg-heat-1";
}

export function heatText(probability: number): string {
  // The ≥80 bars are brand yellow; yellow text is unreadable on white, so the
  // near-certain figures use the deep-amber ink from the same family instead.
  if (probability >= 80) return "text-accent-deep";
  return "text-trust";
}

export function HeatBar({
  topic,
  probability,
  delayMs = 0,
  masked = false,
}: {
  topic: string;
  probability: number;
  delayMs?: number;
  masked?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-40 shrink-0 truncate text-sm text-body sm:w-48" title={topic}>
        {topic}
      </span>
      <div
        className="h-3 flex-1 overflow-hidden rounded-full bg-heat-1"
        role="img"
        aria-label={
          masked
            ? `${topic}: probability hidden in preview`
            : `${topic}: ${probability}% likely`
        }
      >
        <div
          className={`heat-fill h-full rounded-full ${heatBg(probability)}`}
          style={{ width: `${probability}%`, animationDelay: `${delayMs}ms` }}
        />
      </div>
      <span
        className={`w-12 shrink-0 text-right font-mono text-sm font-medium ${
          masked ? "text-body/40 blur-[3px] select-none" : heatText(probability)
        }`}
        aria-hidden={masked}
      >
        {probability}%
      </span>
    </div>
  );
}

// Small decorative strip of heat tiles, used as a section divider motif.
export function HeatTiles({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-1 ${className}`} aria-hidden="true">
      <span className="h-2 w-6 rounded-sm bg-heat-1" />
      <span className="h-2 w-6 rounded-sm bg-heat-2" />
      <span className="h-2 w-6 rounded-sm bg-heat-3" />
      <span className="h-2 w-6 rounded-sm bg-heat-4" />
      <span className="h-2 w-6 rounded-sm bg-heat-5" />
    </div>
  );
}
