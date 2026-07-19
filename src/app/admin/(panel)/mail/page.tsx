import { prisma } from "@/lib/db";
import { mailConfigured, syncMail, MAIL_FROM } from "@/lib/server/mail";

export const dynamic = "force-dynamic";
export const metadata = { title: "Mail" };

// The hello@ inbox, mirrored into the panel (same shape as the WhatsApp
// inbox): thread list per counterpart on the left, the conversation and a
// reply box on the right. The mail host stays untouched as source of truth.

function fmt(d: Date): string {
  return d.toLocaleString("en-SG", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function AdminMailPage({
  searchParams,
}: {
  searchParams: Promise<{ t?: string; sent?: string; error?: string; synced?: string; archived?: string }>;
}) {
  const sp = await searchParams;
  const selected = sp.t?.toLowerCase();
  const showArchived = sp.archived === "1";
  const configured = mailConfigured();

  // Page-load sync, throttled inside syncMail (2 min guard) so browsing
  // threads doesn't hammer the IMAP host. The button forces a fresh check.
  let syncError: string | null = null;
  if (configured) {
    const result = await syncMail(false);
    if (!result.ok && result.error !== "not configured") syncError = result.error ?? null;
  }

  const recent = await prisma.emailMessage.findMany({
    where: { archived: showArchived },
    orderBy: { sentAt: "desc" },
    take: 500,
  });
  const threads = new Map<
    string,
    { last: (typeof recent)[number]; name: string; count: number; unread: number }
  >();
  for (const m of recent) {
    const t = threads.get(m.counterpart);
    if (!t) {
      threads.set(m.counterpart, {
        last: m,
        // Label threads by the OTHER party, never "StudyLah" after a reply.
        name: m.direction === "in" ? m.fromName : "",
        count: 1,
        unread: m.direction === "in" && !m.seen ? 1 : 0,
      });
    } else {
      t.count += 1;
      if (!t.name && m.direction === "in") t.name = m.fromName;
      if (m.direction === "in" && !m.seen) t.unread += 1;
    }
  }

  const thread = selected
    ? await prisma.emailMessage.findMany({
        where: { counterpart: selected },
        orderBy: { sentAt: "asc" },
        take: 200,
      })
    : [];
  // Opening a thread marks it read.
  if (selected && thread.some((m) => !m.seen)) {
    await prisma.emailMessage.updateMany({
      where: { counterpart: selected, seen: false },
      data: { seen: true },
    });
  }
  const lastInbound = [...thread].reverse().find((m) => m.direction === "in");
  const replySubject = lastInbound
    ? lastInbound.subject.startsWith("Re:")
      ? lastInbound.subject
      : `Re: ${lastInbound.subject}`
    : "";

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Mail</h1>
          <p className="mt-0.5 text-xs text-body">
            hello@studylah.education, mirrored from the mail host. Replies send
            as {MAIL_FROM.replace(/.*</, "").replace(">", "") || "hello@"} and
            keep the thread. Webmail stays your backup, nothing is deleted
            there.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={showArchived ? "/admin/mail" : "/admin/mail?archived=1"}
            className="rounded-lg border border-hairline px-3 py-1.5 text-xs font-medium text-body hover:text-ink"
          >
            {showArchived ? "Back to inbox" : "Archived"}
          </a>
          <form action="/api/admin/mail/actions" method="post">
            <input type="hidden" name="action" value="sync" />
            <button
              type="submit"
              className="rounded-lg bg-accent px-3 py-1.5 text-xs font-bold text-night"
            >
              Check mail now
            </button>
          </form>
        </div>
      </div>

      {!configured && (
        <div className="mt-6 rounded-2xl border border-accent/40 bg-surface p-5 text-sm text-body">
          <p className="font-display font-bold text-ink">Connect the mailbox</p>
          <p className="mt-2">
            Set these variables on Railway (and in your local .env for testing),
            then redeploy. Values come from SiteGround, Site Tools, Email,
            Accounts, Mail Configuration:
          </p>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-night p-3 text-xs">
{`MAIL_IMAP_HOST="mail.studylah.education"
MAIL_IMAP_PORT="993"
MAIL_IMAP_USER="hello@studylah.education"
MAIL_IMAP_PASSWORD="the mailbox password"`}
          </pre>
          <p className="mt-2 text-xs">
            Read-only against the mailbox: the panel never deletes or moves
            anything on SiteGround.
          </p>
        </div>
      )}

      {sp.error && (
        <p className="mt-4 rounded-lg border border-coral/40 bg-coral/10 px-3 py-2 text-sm text-coral">
          {sp.error}
        </p>
      )}
      {syncError && (
        <p className="mt-4 rounded-lg border border-coral/40 bg-coral/10 px-3 py-2 text-sm text-coral">
          Mailbox sync failed: {syncError}
        </p>
      )}
      {sp.sent && (
        <p className="mt-4 rounded-lg border border-guarantee/40 bg-guarantee/10 px-3 py-2 text-sm text-guarantee">
          Reply sent.
        </p>
      )}
      {sp.synced && (
        <p className="mt-4 rounded-lg border border-guarantee/40 bg-guarantee/10 px-3 py-2 text-sm text-guarantee">
          Mailbox checked, {sp.synced} new message{sp.synced === "1" ? "" : "s"}.
        </p>
      )}

      <div className="mt-6 grid gap-4 md:grid-cols-[minmax(220px,1fr)_2fr]">
        {/* Thread list */}
        <div className="space-y-1.5">
          {threads.size === 0 && (
            <p className="rounded-xl border border-hairline bg-surface p-4 text-sm text-body">
              {showArchived
                ? "No archived threads."
                : configured
                  ? "No mail mirrored yet. Tap Check mail now."
                  : "Connect the mailbox to start."}
            </p>
          )}
          {[...threads.entries()].map(([addr, t]) => (
            <a
              key={addr}
              href={`/admin/mail?t=${encodeURIComponent(addr)}${showArchived ? "&archived=1" : ""}`}
              className={`block rounded-xl border px-3 py-2.5 transition-colors ${
                addr === selected
                  ? "border-accent/60 bg-surface"
                  : "border-hairline bg-surface/60 hover:border-accent/40"
              }`}
            >
              <p className="flex items-center justify-between gap-2">
                <span className="truncate text-sm font-semibold text-ink">
                  {t.name || addr}
                </span>
                {t.unread > 0 && (
                  <span className="shrink-0 rounded-full bg-accent px-1.5 py-0.5 text-[10px] font-bold text-night">
                    {t.unread}
                  </span>
                )}
              </p>
              <p className="truncate text-xs text-body">{t.last.subject}</p>
              <p className="mt-0.5 text-[11px] text-body/70">
                {fmt(t.last.sentAt)} · {t.count} message{t.count === 1 ? "" : "s"}
              </p>
            </a>
          ))}
        </div>

        {/* Thread + reply */}
        <div>
          {!selected ? (
            <p className="rounded-xl border border-hairline bg-surface p-6 text-sm text-body">
              Pick a thread to read and reply.
            </p>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <p className="min-w-0 truncate text-sm text-body">
                  Thread with <span className="font-semibold text-ink">{selected}</span>
                </p>
                <form action="/api/admin/mail/actions" method="post" className="shrink-0">
                  <input type="hidden" name="action" value={showArchived ? "unarchive" : "archive"} />
                  <input type="hidden" name="t" value={selected} />
                  <button
                    type="submit"
                    className="rounded-lg border border-hairline px-3 py-1.5 text-xs font-medium text-body hover:text-ink"
                  >
                    {showArchived ? "Move back to inbox" : "Archive thread"}
                  </button>
                </form>
              </div>

              <div className="max-h-[55vh] space-y-3 overflow-y-auto rounded-2xl border border-hairline bg-surface p-4">
                {thread.map((m) => (
                  <div
                    key={m.id}
                    className={`rounded-xl border p-3 ${
                      m.direction === "out"
                        ? "ml-8 border-accent/30 bg-accent/5"
                        : "mr-8 border-hairline bg-night-2/40"
                    }`}
                  >
                    <p className="flex flex-wrap items-baseline justify-between gap-2 text-[11px] text-body">
                      <span className="font-semibold text-ink">
                        {m.direction === "out" ? "You" : m.fromName || m.counterpart}
                      </span>
                      <span>{fmt(m.sentAt)}</span>
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-body">{m.subject}</p>
                    <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-ink">
                      {m.body}
                    </p>
                  </div>
                ))}
              </div>

              <form action="/api/admin/mail/reply" method="post" className="space-y-2">
                <input type="hidden" name="to" value={selected} />
                <input
                  type="hidden"
                  name="inReplyTo"
                  value={lastInbound?.messageId ?? ""}
                />
                <input
                  name="subject"
                  defaultValue={replySubject}
                  placeholder="Subject"
                  className="w-full rounded-lg border border-hairline bg-night px-3 py-2 text-sm text-ink"
                />
                <textarea
                  name="body"
                  rows={5}
                  required
                  placeholder="Write your reply as hello@studylah.education"
                  className="w-full rounded-lg border border-hairline bg-night px-3 py-2 text-sm text-ink"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-accent px-4 py-2 text-sm font-bold text-night"
                >
                  Send reply
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
