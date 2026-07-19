// TeachText: renders any plain-text teaching, feedback, or worked solution
// as point form instead of a wall of words (owner rule: all answers and all
// teachings in StudyLand and StudyLah Legends are presented as points, and
// calculations as numbered steps).
//
// It is display-only, the source text is never mutated or stored differently:
//   - "- " / "• " lines      -> bulleted points
//   - "Step 1:" / "1." lines -> numbered steps (calculations)
//   - "✓ ..." / "✗ ..."      -> mark-scheme lines, tinted correct/incorrect
//   - "Label: ..." lead-ins  -> the label bolded (Fix:, Takeaway:, How:, ...)
//   - unstructured prose     -> split into one sentence per point (guarded so
//                               "e.g." / decimals / chem notation never split)
// Short single-thought texts stay as a plain line.

type Seg =
  | { kind: "bullet"; text: string }
  | { kind: "step"; label: string; text: string }
  | { kind: "check"; ok: boolean; text: string }
  | { kind: "line"; text: string };

// Abbreviations that end with "." but do not end a sentence.
const ABBREV_END = /(?:\b(?:e\.g|i\.e|etc|vs|approx|eq|fig|ca|cf|mr|mrs|dr|st|no)\.)$/i;

// Split prose into sentences. Only splits when the next chunk starts like a
// new sentence (capital/digit/bracket), so lowercase continuations after
// "e.g." stay intact; decimals never match (no whitespace after the point).
function splitSentences(text: string): string[] {
  const parts = text.split(/(?<=[.!?])\s+(?=[A-Z0-9("'])/);
  const out: string[] = [];
  for (const part of parts) {
    const prev = out[out.length - 1];
    if (prev !== undefined && ABBREV_END.test(prev.trim())) {
      out[out.length - 1] = `${prev} ${part}`;
    } else {
      out.push(part);
    }
  }
  return out.map((s) => s.trim()).filter(Boolean);
}

function parseLine(raw: string): Seg | null {
  const line = raw.trim();
  if (!line) return null;
  const bullet = line.match(/^[-•]\s+(.*)$/);
  if (bullet) return { kind: "bullet", text: bullet[1] };
  const step = line.match(/^(?:Step\s+(\d+)\s*[:.]|(\d+)[.)])\s+(.*)$/i);
  if (step) return { kind: "step", label: step[1] ?? step[2], text: step[3] };
  const check = line.match(/^(✓|✗|✕)\s*(.*)$/);
  if (check) return { kind: "check", ok: check[1] === "✓", text: check[2] };
  return { kind: "line", text: line };
}

// Bold a "Label:" lead-in (Fix:, Takeaway:, Right:, Missing:, How:, Score:,
// Marker's tip:, ...). Letters/spaces/apostrophes only, so chemistry notation
// and timings ("2H2O:", "10:30") can never match.
function withLabel(text: string) {
  const m = text.match(/^([A-Z][A-Za-z' ]{1,18}):\s+(.*)$/);
  if (!m) return text;
  return (
    <>
      <span className="font-bold text-accent">{m[1]}:</span> {m[2]}
    </>
  );
}

export function TeachText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const rawLines = text.split(/\r?\n/);
  let segs = rawLines.map(parseLine).filter((s): s is Seg => s !== null);

  // Unstructured single-paragraph prose: present it one sentence per point.
  const structured = segs.some((s) => s.kind !== "line");
  if (!structured && segs.length <= 1 && text.trim().length > 160) {
    const sentences = splitSentences(text.trim());
    if (sentences.length >= 2) {
      segs = sentences.map((s) => ({ kind: "bullet", text: s }));
    }
  }

  // Single short thought: keep it a plain line, a lone bullet looks odd.
  if (segs.length === 1 && segs[0].kind === "line") {
    return <p className={className}>{withLabel(segs[0].text)}</p>;
  }

  return (
    <div className={`space-y-1.5 ${className}`}>
      {segs.map((seg, i) => {
        if (seg.kind === "bullet" || seg.kind === "line") {
          return (
            <p key={i} className="flex gap-2">
              <span
                aria-hidden="true"
                className={`mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full ${
                  seg.kind === "bullet" ? "bg-accent/70" : "bg-transparent"
                }`}
              />
              <span className="min-w-0">{withLabel(seg.text)}</span>
            </p>
          );
        }
        if (seg.kind === "step") {
          return (
            <p key={i} className="flex gap-2">
              <span className="mt-0.5 shrink-0 rounded bg-accent/10 px-1.5 py-0.5 font-mono text-[10px] font-bold leading-tight text-accent">
                {seg.label}
              </span>
              <span className="min-w-0 font-mono text-[0.95em]">{seg.text}</span>
            </p>
          );
        }
        return (
          <p key={i} className="flex gap-2">
            <span
              aria-hidden="true"
              className={`shrink-0 font-bold ${seg.ok ? "text-guarantee" : "text-coral"}`}
            >
              {seg.ok ? "✓" : "✗"}
            </span>
            <span className="min-w-0">{seg.text}</span>
          </p>
        );
      })}
    </div>
  );
}
