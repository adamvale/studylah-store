// Shared bits for the account dashboard pages.

export const sgd = (cents: number) => `S$${(cents / 100).toFixed(2)}`;

export const fmtDate = (d: Date) =>
  d.toLocaleDateString("en-SG", { day: "numeric", month: "short", year: "numeric" });

// Referees' emails belong to them, not the referrer — show enough to
// recognise a friend, no more.
export function maskEmail(email: string): string {
  const [user, domain] = email.split("@");
  if (!domain) return email;
  return `${user.slice(0, 2)}${"*".repeat(Math.max(1, user.length - 2))}@${domain}`;
}

// One-shot status banner driven by the redirect query string (?sent=1 etc.).
export function Banner({
  params,
  messages,
}: {
  params: Record<string, string | undefined>;
  messages: Record<string, { tone: "ok" | "bad"; msg: string }>;
}) {
  const banner =
    Object.entries(params)
      .map(([k, v]) => messages[`${k}=${v}`])
      .find(Boolean) ?? null;
  if (!banner) return null;
  return (
    <p
      className={`mt-6 rounded-lg px-4 py-2.5 text-sm text-ink ${
        banner.tone === "ok" ? "bg-guarantee/15" : "bg-coral/15"
      }`}
    >
      {banner.msg}
    </p>
  );
}
