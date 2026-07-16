import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";
export const metadata = { title: "Beta feedback" };

const SENTIMENT_UI: Record<string, string> = {
  love: "😍 Love it",
  okay: "🙂 It's okay",
  rough: "😖 Rough",
};

export default async function AdminFeedbackPage() {
  const rows = await prisma.gameFeedback.findMany({
    orderBy: { createdAt: "desc" },
    take: 200,
  });
  const customers = await prisma.customer.findMany({
    where: { id: { in: [...new Set(rows.map((r) => r.customerId))] } },
    select: { id: true, email: true },
  });
  const emailById = new Map(customers.map((c) => [c.id, c.email]));

  const counts = { love: 0, okay: 0, rough: 0 } as Record<string, number>;
  for (const r of rows) if (r.sentiment) counts[r.sentiment] += 1;

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-ink">
        Beta feedback
      </h1>
      <p className="mt-1 max-w-2xl text-sm text-body">
        Everything players sent from the StudyLah Legends feedback form
        (latest 200). Use it to pick what gets fixed or built next.
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        {Object.entries(SENTIMENT_UI).map(([key, label]) => (
          <div
            key={key}
            className="rounded-xl border border-hairline bg-surface px-4 py-2 text-sm text-ink"
          >
            {label}:{" "}
            <span className="font-display font-bold">{counts[key]}</span>
          </div>
        ))}
        <div className="rounded-xl border border-hairline bg-surface px-4 py-2 text-sm text-ink">
          Total: <span className="font-display font-bold">{rows.length}</span>
        </div>
      </div>

      {rows.length === 0 ? (
        <p className="mt-6 rounded-2xl border border-hairline bg-surface p-6 text-sm text-body">
          No feedback yet. It appears here the moment a player sends some from
          the game.
        </p>
      ) : (
        <ul className="mt-5 space-y-3">
          {rows.map((r) => (
            <li
              key={r.id}
              className="rounded-2xl border border-hairline bg-surface p-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-body">
                <span className="font-mono">
                  {emailById.get(r.customerId) ?? r.customerId}
                </span>
                <span className="flex items-center gap-2">
                  {r.sentiment && (
                    <span className="rounded-full bg-violet/15 px-2 py-0.5 font-medium text-violet">
                      {SENTIMENT_UI[r.sentiment] ?? r.sentiment}
                    </span>
                  )}
                  {r.createdAt.toLocaleString("en-SG", {
                    day: "numeric",
                    month: "short",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <p className="mt-2 whitespace-pre-wrap break-words text-sm text-ink">
                {r.message}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
