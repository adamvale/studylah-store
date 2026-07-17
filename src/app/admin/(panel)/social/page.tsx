import Link from "next/link";
import { prisma } from "@/lib/db";
import { metaMessagingConfigured } from "@/lib/server/meta-messaging";

export const dynamic = "force-dynamic";
export const metadata = { title: "Messenger & Instagram inbox" };

const DAY_MS = 24 * 60 * 60 * 1000;
const CHANNEL_UI: Record<string, { label: string; emoji: string }> = {
  messenger: { label: "Messenger", emoji: "" },
  instagram: { label: "Instagram", emoji: "" },
};

function fmt(d: Date): string {
  return d.toLocaleString("en-SG", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function AdminSocialPage({
  searchParams,
}: {
  searchParams: Promise<{ t?: string; sent?: string; error?: string }>;
}) {
  const sp = await searchParams;
  const selected = sp.t; // `${channel}:${contactId}`
  const [selChannel, selContact] = (selected ?? "").split(/:(.+)/);

  const recent = await prisma.socialMessage.findMany({
    orderBy: { createdAt: "desc" },
    take: 500,
  });
  const threads = new Map<
    string,
    {
      channel: string;
      contactId: string;
      last: (typeof recent)[number];
      takeover: boolean;
    }
  >();
  for (const m of recent) {
    const key = `${m.channel}:${m.contactId}`;
    if (!threads.has(key)) {
      threads.set(key, {
        channel: m.channel,
        contactId: m.contactId,
        last: m,
        takeover: false,
      });
    }
    if (m.manual && Date.now() - m.createdAt.getTime() < DAY_MS) {
      threads.get(key)!.takeover = true;
    }
  }

  const thread =
    selChannel && selContact
      ? await prisma.socialMessage.findMany({
          where: { channel: selChannel, contactId: selContact },
          orderBy: { createdAt: "asc" },
          take: 200,
        })
      : [];
  const takeoverActive = thread.some(
    (m) => m.manual && Date.now() - m.createdAt.getTime() < DAY_MS
  );
  const selUi = selChannel ? CHANNEL_UI[selChannel] : undefined;

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-ink">
        Messenger &amp; Instagram inbox
      </h1>
      <p className="mt-1 max-w-2xl text-sm text-body">
        Every Facebook Messenger and Instagram DM conversation with Gugu. Reply
        here to take over a thread, Gugu goes quiet on it for 24 hours after
        your last manual reply, then hands back automatically.
      </p>
      {!metaMessagingConfigured() && (
        <div className="mt-4 rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-ink">
          Stub mode: META_PAGE_ACCESS_TOKEN is not set, outbound messages are
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
              No Messenger or Instagram messages yet.
            </p>
          )}
          <ul className="space-y-1">
            {[...threads.entries()].map(([key, t]) => {
              const ui = CHANNEL_UI[t.channel] ?? {
                label: t.channel,
                emoji: "",
              };
              return (
                <li key={key}>
                  <Link
                    href={`/admin/social?t=${encodeURIComponent(key)}`}
                    className={`block rounded-lg px-2 py-2 transition-colors ${
                      selected === key ? "bg-night-2" : "hover:bg-night-2/60"
                    }`}
                  >
                    <span className="flex items-center justify-between gap-2">
                      <span className="truncate text-sm text-ink">
                        {ui.label}
                      </span>
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
              );
            })}
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
                <p className="text-sm font-medium text-ink">
                  {selUi?.label}
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
                action="/api/admin/social/reply"
                method="post"
                className="mt-4 flex gap-2"
              >
                <input type="hidden" name="channel" value={selChannel} />
                <input type="hidden" name="contactId" value={selContact} />
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
