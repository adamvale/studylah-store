import Link from "next/link";
import { prisma } from "@/lib/db";
import { whatsappConfigured } from "@/lib/server/whatsapp";

export const dynamic = "force-dynamic";
export const metadata = { title: "WhatsApp inbox" };

const DAY_MS = 24 * 60 * 60 * 1000;

function fmt(d: Date): string {
  return d.toLocaleString("en-SG", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function AdminWhatsAppPage({
  searchParams,
}: {
  searchParams: Promise<{ t?: string; sent?: string; error?: string }>;
}) {
  const sp = await searchParams;
  const selected = sp.t;

  // Thread list: one row per number, newest activity first.
  const recent = await prisma.waMessage.findMany({
    orderBy: { createdAt: "desc" },
    take: 500,
  });
  const threads = new Map<
    string,
    { last: (typeof recent)[number]; count: number; takeover: boolean }
  >();
  for (const m of recent) {
    const t = threads.get(m.waId);
    if (!t) {
      threads.set(m.waId, { last: m, count: 1, takeover: false });
    } else {
      t.count += 1;
    }
    if (m.manual && Date.now() - m.createdAt.getTime() < DAY_MS) {
      threads.get(m.waId)!.takeover = true;
    }
  }

  const thread = selected
    ? await prisma.waMessage.findMany({
        where: { waId: selected },
        orderBy: { createdAt: "asc" },
        take: 200,
      })
    : [];
  const takeoverActive = thread.some(
    (m) => m.manual && Date.now() - m.createdAt.getTime() < DAY_MS
  );

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-ink">
        WhatsApp inbox
      </h1>
      <p className="mt-1 max-w-2xl text-sm text-body">
        Every conversation with the Gugu WhatsApp number. Reply here to take
        over a thread yourself, Gugu goes quiet on that thread for 24 hours
        after your last manual reply, then hands back automatically. Replies
        within 24h of the visitor&apos;s last message are free.
      </p>
      {!whatsappConfigured() && (
        <div className="mt-4 rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-ink">
          Stub mode: WHATSAPP_* env vars are not set, outbound messages are
          written to data/outbox instead of sent. See docs/WHATSAPP-SETUP.md.
        </div>
      )}
      {sp.sent && (
        <div className="mt-4 rounded-xl border border-guarantee/40 bg-guarantee/10 px-4 py-3 text-sm text-guarantee">
          Reply sent. Gugu is paused on this thread for 24 hours.
        </div>
      )}
      {sp.error && (
        <div className="mt-4 rounded-xl border border-coral/40 bg-coral/10 px-4 py-3 text-sm text-coral">
          {decodeURIComponent(sp.error)}
        </div>
      )}

      <div className="mt-5 grid gap-5 lg:grid-cols-[20rem_minmax(0,1fr)]">
        <div className="rounded-2xl border border-hairline bg-surface p-3">
          <p className="px-2 pb-2 text-xs font-medium uppercase tracking-wide text-body">
            Conversations ({threads.size})
          </p>
          {threads.size === 0 && (
            <p className="px-2 pb-2 text-sm text-body">
              No WhatsApp messages yet.
            </p>
          )}
          <ul className="space-y-1">
            {[...threads.entries()].map(([waId, t]) => (
              <li key={waId}>
                <Link
                  href={`/admin/whatsapp?t=${encodeURIComponent(waId)}`}
                  className={`block rounded-lg px-2 py-2 transition-colors ${
                    selected === waId ? "bg-night-2" : "hover:bg-night-2/60"
                  }`}
                >
                  <span className="flex items-center justify-between gap-2">
                    <span className="font-mono text-sm text-ink">+{waId}</span>
                    <span className="shrink-0 text-[10px] text-body">
                      {fmt(t.last.createdAt)}
                    </span>
                  </span>
                  <span className="mt-0.5 flex items-center gap-2">
                    <span className="truncate text-xs text-body">
                      {t.last.role === "assistant" ? "↩ " : ""}
                      {t.last.content}
                    </span>
                    {t.takeover && (
                      <span className="shrink-0 rounded-full bg-accent/20 px-1.5 py-0.5 text-[9px] font-bold uppercase text-accent">
                        You
                      </span>
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-hairline bg-surface p-4">
          {!selected ? (
            <p className="text-sm text-body">
              Select a conversation to read and reply.
            </p>
          ) : (
            <>
              <div className="flex items-center justify-between gap-3 border-b border-hairline pb-3">
                <p className="font-mono text-sm font-medium text-ink">
                  +{selected}
                </p>
                <p className="text-xs text-body">
                  {takeoverActive
                    ? "You have this thread (Gugu paused)"
                    : "Gugu is answering this thread"}
                </p>
              </div>
              <div className="mt-3 max-h-[28rem] space-y-2 overflow-y-auto pr-1">
                {thread.map((m) => (
                  <div
                    key={m.id}
                    className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                      m.role === "assistant"
                        ? "ml-auto bg-night-2 text-ink"
                        : "bg-trust/15 text-ink"
                    }`}
                  >
                    <p className="whitespace-pre-wrap break-words">
                      {m.content}
                    </p>
                    <p className="mt-1 text-right text-[10px] text-body">
                      {m.role === "assistant"
                        ? m.manual
                          ? "You"
                          : "Gugu"
                        : "Visitor"}{" "}
                      · {fmt(m.createdAt)}
                    </p>
                  </div>
                ))}
              </div>
              <form
                action="/api/admin/whatsapp/reply"
                method="post"
                className="mt-4 flex gap-2"
              >
                <input type="hidden" name="waId" value={selected} />
                <input
                  name="text"
                  required
                  maxLength={3000}
                  placeholder="Reply as StudyLah…"
                  autoComplete="off"
                  className="w-full rounded-lg border border-hairline bg-night-2 px-3 py-2 text-sm text-ink outline-none focus:border-accent"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-lg bg-accent px-4 py-2 text-sm font-bold text-night"
                >
                  Send
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
