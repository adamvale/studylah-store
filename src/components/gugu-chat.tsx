"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePricing } from "@/lib/pricing-context";
import { sgd } from "@/lib/catalogue";

// Gugu — the floating sales helper (bottom-left of the storefront).
//
// TIER 1: fully SCRIPTED. Every answer below is copy we wrote and vetted — the
// bot never generates text, so it cannot invent a price, promise a grade, or
// drift into a banned word. This is deliberate: the store is minors-facing and
// compliance-sensitive (see docs/PROJECT-STATE.md). Keep answers factual and
// product-focused; NEVER use guaranteed / 100% / confirmed / leaked / insider /
// sure-win, and never promise a grade or exam result. Live pricing is pulled
// from the pricing store (usePricing) so a quoted number is always the real one.

type Answer = string | ReactNode;

// Passed into every scripted answer: the live "from" price, and a callback that
// minimises the chat (so any link a visitor clicks reveals the page underneath).
interface GuguCtx {
  fromPrice: string;
  closePanel: () => void;
}

interface Topic {
  id: string;
  // Short label shown as a tappable quick-reply chip.
  label: string;
  // Words that route a free-typed question to this topic (all lowercase).
  keywords: string[];
  answer: (ctx: GuguCtx) => Answer;
}

// The scripted knowledge base — a curated, chat-sized version of /faq plus the
// game positioning from the homepage (prediction suite is the product; the
// game is a free beta, exclusive to buyers).
const TOPICS: Topic[] = [
  {
    id: "what",
    label: "What is StudyLah?",
    keywords: ["what", "studylah", "about", "who", "explain", "product"],
    answer: () => (
      <>
        StudyLah is an independent Singapore publisher of exam-prep PDFs for the
        O-Level (G3) and N(A)-Level (G2). For each subject you get a data-driven{" "}
        <strong>Exam Forecast</strong> — every syllabus topic ranked by how
        likely it is for 2026, built from ten years of past papers — plus
        original practice questions and a full timed rehearsal paper.
      </>
    ),
  },
  {
    id: "cheating",
    label: "Is this cheating?",
    keywords: ["cheat", "cheating", "real", "leak", "actual", "legit", "legal"],
    answer: () => (
      <>
        No — the opposite. We don&apos;t have the real papers and would never
        touch them; they belong to Cambridge and MOE / SEAB. We read ten years of
        past papers, forecast which topics are most likely to come up, and write
        our own original questions in that style. It&apos;s not a shortcut around
        studying — it&apos;s studying the right things.
      </>
    ),
  },
  {
    id: "guessing",
    label: "Isn't it just guessing?",
    keywords: ["guess", "guessing", "random", "accurate", "accuracy", "proof", "trust"],
    answer: ({ closePanel }) => (
      <>
        Guessing is revising everything and hoping. This is ten years of
        classified questions and setter patterns turned into a ranked probability
        for every topic. And we publish the receipts — after every sitting our{" "}
        <InlineLink href="/accuracy" onNavigate={closePanel}>
          accuracy scorecard
        </InlineLink>{" "}
        shows exactly what we called against what appeared. Hits and misses, in
        public.
      </>
    ),
  },
  {
    id: "wrong",
    label: "What if it's wrong?",
    keywords: ["wrong", "refund", "guarantee", "money back", "risk", "fail", "miss"],
    answer: () => (
      <>
        Then you get your money back. Forecasts are probabilities, not promises —
        so we carry the risk, not you. If fewer than three of our top-five
        forecast topics appear in your paper, email your order ID within 14 days
        of the exam for a full refund. No forms, no argument.
      </>
    ),
  },
  {
    id: "price",
    label: "How much does it cost?",
    keywords: ["cost", "price", "much", "cheap", "expensive", "pay", "worth", "bundle", "discount"],
    answer: ({ fromPrice, closePanel }) => (
      <>
        A single subject starts from <strong>{fromPrice}</strong> — but here&apos;s
        the money-saver: the more subjects you take, the cheaper each one gets. Bundle
        3+ and the price drops automatically; an all-in stack saves the most per
        subject. If you&apos;re sitting a few papers, building a bundle is the smart move.
        <br />
        <CtaButton href="/bundles" label="Build a bundle & save" onNavigate={closePanel} />
      </>
    ),
  },
  {
    id: "delivery",
    label: "How do I get my PDFs?",
    keywords: ["get", "download", "delivery", "receive", "pdf", "instant", "email", "how do i"],
    answer: () => (
      <>
        Instantly. Pay, and your download page opens on the spot — the same link
        also lands in your inbox. Links stay live for 7 days, up to 5 downloads
        per file. Every page is watermarked with your email and order ID.
      </>
    ),
  },
  {
    id: "try",
    label: "Can I try before buying?",
    keywords: ["try", "free", "sample", "demo", "test", "before", "predict", "heatmap"],
    answer: ({ closePanel }) => (
      <>
        Yes. Every subject has a free <strong>Predict-your-mark</strong> check —
        ten questions drawn from the topics our forecast rates most likely,
        auto-marked in about seven minutes. It ends with a score and worked
        solutions so you can judge us for yourself.
        <br />
        <CtaButton href="/diagnostic" label="Predict your mark — free" onNavigate={closePanel} />
      </>
    ),
  },
  {
    id: "game",
    label: "What's the game?",
    keywords: ["game", "legends", "rpg", "play", "app", "adventure", "beta"],
    answer: () => (
      <>
        <strong>StudyLah Legends</strong> is a free study-RPG where the battles
        are real exam questions. It&apos;s a beta bonus, exclusive to purchasers —
        the prediction suite (forecasts, questions, rehearsals) is still the main
        product. Buy any subject and the game comes with it.
      </>
    ),
  },
];

// Routes the free-typed question to the best-matching topic by counting keyword
// hits. Returns null when nothing matches, so we can give an honest fallback
// instead of a wrong answer.
// Small-talk greetings — handled warmly in scripted-fallback mode so "hi"
// never gets the robotic no-match reply (live Claude handles this itself).
const GREETING_RE =
  /^\s*(hi+|hey+|hello+|holla|hallo|helo|yo|sup|heya|hiya|good\s?(morning|afternoon|evening)|greetings|wass?up|whats?\s?up)\b/i;

function isGreeting(text: string): boolean {
  return GREETING_RE.test(text) && text.trim().length <= 20;
}

// Floating-bubble copy that rotates to keep Gugu inviting. NEW = before the
// visitor has chatted (openers); ENGAGED = after they've talked to Gugu (keep
// them coming back to close the sale).
const BUBBLE_NEW = [
  "Got a question?",
  "Ask me anything!",
  "Not sure where to start?",
  "Questions before you buy?",
  "Need help choosing? 💡",
];
const BUBBLE_ENGAGED = [
  "Feel free to ask me more! 💬",
  "Still deciding? I can help.",
  "Want me to recommend a pack?",
  "Any more questions?",
  "Here whenever you need me!",
];

function matchTopic(text: string): Topic | null {
  const q = text.toLowerCase();
  let best: Topic | null = null;
  let bestScore = 0;
  for (const topic of TOPICS) {
    let score = 0;
    for (const kw of topic.keywords) {
      if (q.includes(kw)) score += 1;
    }
    if (score > bestScore) {
      bestScore = score;
      best = topic;
    }
  }
  return bestScore > 0 ? best : null;
}

// Reorder the quick-reply chips so the questions most relevant to the current
// page surface first. Every topic still appears (page-relevant ones lead, the
// rest keep their original order) — so Gugu feels aware of where you are.
const DEFAULT_PROMPT = "Not sure what to ask? Here are some common questions to start.";
const PAGE_PRIORITY: { test: (p: string) => boolean; ids: string[]; prompt: string }[] = [
  {
    test: (p) => p.startsWith("/bundles"),
    ids: ["price", "wrong", "delivery", "what"],
    prompt: "Questions about bundles or saving on more subjects?",
  },
  {
    test: (p) => p.startsWith("/cart") || p.startsWith("/checkout"),
    ids: ["delivery", "wrong", "price", "try"],
    prompt: "Questions before you check out?",
  },
  {
    test: (p) => p.startsWith("/diagnostic"),
    ids: ["try", "guessing", "what", "cheating"],
    prompt: "Questions about the free check?",
  },
  {
    test: (p) => p.startsWith("/accuracy"),
    ids: ["guessing", "wrong", "what"],
    prompt: "Questions about our track record?",
  },
  // Individual subject page (e.g. /o-level/chemistry-pure)
  {
    test: (p) => /^\/(o-level|na-level)\/[\w-]+/.test(p),
    ids: ["price", "try", "wrong", "guessing"],
    prompt: "Questions about this subject or its pack?",
  },
  // Level / subjects listing
  {
    test: (p) =>
      p.startsWith("/o-level") || p.startsWith("/na-level") || p.startsWith("/subjects"),
    ids: ["price", "what", "try", "wrong"],
    prompt: "Not sure which subject? Ask me anything.",
  },
];

function topicsForPath(pathname: string): Topic[] {
  const match = PAGE_PRIORITY.find((r) => r.test(pathname));
  if (!match) return TOPICS;
  const rank = (id: string) => {
    const i = match.ids.indexOf(id);
    return i === -1 ? match.ids.length + TOPICS.findIndex((t) => t.id === id) : i;
  };
  return [...TOPICS].sort((a, b) => rank(a.id) - rank(b.id));
}

function promptForPath(pathname: string): string {
  return PAGE_PRIORITY.find((r) => r.test(pathname))?.prompt ?? DEFAULT_PROMPT;
}

// The canonical Gugu: the FIRST cell of the walker sheet — the plain white,
// front-facing, both-eyes-forward ghost. player_ghost.png is 240×96, laid out
// in 16×24 cells; cell (0,0) is Gugu facing down (toward the viewer). Rendered
// as a CSS-cropped background so we don't need a separate exported PNG.
const SHEET_W = 240;
const SHEET_H = 96;
const CELL_W = 16;
const CELL_H = 24;

function GuguSprite({
  size,
  className,
}: {
  // Target height in px; width follows the cell's 2:3 aspect.
  size: number;
  className?: string;
}) {
  const scale = size / CELL_H;
  return (
    <span
      aria-hidden="true"
      className={className}
      style={{
        display: "inline-block",
        width: CELL_W * scale,
        height: CELL_H * scale,
        backgroundImage: "url(/game/player_ghost.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 0",
        backgroundSize: `${SHEET_W * scale}px ${SHEET_H * scale}px`,
        imageRendering: "pixelated",
      }}
    />
  );
}

// Inline underline link (used inside prose). Minimises the chat on click so the
// destination page is visible underneath.
function InlineLink({
  href,
  onNavigate,
  children,
}: {
  href: string;
  onNavigate?: () => void;
  children: ReactNode;
}) {
  return (
    <Link href={href} onClick={onNavigate} className="font-medium text-[#4ef3c9] underline">
      {children}
    </Link>
  );
}

// A clear arcade call-to-action button (mint outline, fills on hover). This is
// what a link Gugu offers renders as, so a visitor sees an obvious button
// rather than "click here". Minimises the chat on click.
function CtaButton({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate?: () => void;
}) {
  const cls =
    "mt-1.5 inline-flex items-center gap-1 rounded-md border-2 border-[#4ef3c9] bg-[#4ef3c9]/10 px-3 py-1.5 text-xs font-bold text-[#4ef3c9] no-underline transition-colors hover:bg-[#4ef3c9] hover:text-[#12122b]";
  if (/^https?:/i.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onNavigate}>
        {label} →
      </a>
    );
  }
  return (
    <Link href={href} className={cls} onClick={onNavigate}>
      {label} →
    </Link>
  );
}

// Friendly button label for a link Gugu shares, so visitors see the destination
// in plain words rather than a raw path.
const PATH_LABELS: Record<string, string> = {
  "/subjects": "Browse subjects & prices",
  "/bundles": "Build a bundle & save",
  "/accuracy": "See our track record",
  "/faq": "Read the FAQ",
  "/diagnostic": "Predict your mark — free",
  "/free-heatmap": "Predict your mark — free",
};

function labelForPath(href: string): string {
  if (/^https?:/i.test(href)) return "Open link";
  const clean = href.replace(/\/$/, "");
  if (PATH_LABELS[clean]) return PATH_LABELS[clean];
  if (/^\/(o-level|na-level)\/[\w-]+/.test(clean)) return "View this subject";
  return "Open page";
}

// Turns plain-text replies into rich content: full URLs and known site paths
// (/subjects, /bundles, …) become CTA buttons, so Gugu can hand over a purchase
// link that reads as an obvious button. Everything else stays literal text.
const LINK_RE =
  /(https?:\/\/[^\s<]+|\/(?:subjects|bundles|accuracy|faq|diagnostic|free-heatmap|o-level|na-level)(?:\/[\w-]+)*\/?)/g;

function renderWithLinks(text: string, onNavigate?: () => void): ReactNode {
  const parts: ReactNode[] = [];
  const re = new RegExp(LINK_RE);
  let last = 0;
  let key = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    const start = m.index;
    let token = m[0];
    // Don't swallow trailing sentence punctuation into the href.
    const trail = token.match(/[.,;:!?)]+$/);
    const tail = trail ? trail[0] : "";
    if (tail) token = token.slice(0, -tail.length);

    if (start > last) parts.push(text.slice(last, start));
    parts.push(
      <CtaButton
        key={key++}
        href={token}
        label={labelForPath(token)}
        onNavigate={onNavigate}
      />
    );
    // Drop a lone trailing ":" that preceded the link (e.g. "here:") for
    // tidiness; keep other punctuation.
    if (tail && tail !== ":") parts.push(tail);
    last = start + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length ? <>{parts}</> : text;
}

// Types a reply out character-by-character (feels like Gugu is writing, less
// intimidating than a wall of text appearing at once), then swaps to the
// link-rendered version. Types once on mount; keyed by message id in the list
// so existing messages never re-type. Total reveal is ~1.8s regardless of
// length (longer replies reveal more chars per tick).
function TypewriterText({
  text,
  onType,
  onNavigate,
}: {
  text: string;
  onType?: () => void;
  onNavigate?: () => void;
}) {
  const [count, setCount] = useState(0);
  const doneRef = useRef(false);

  useEffect(() => {
    if (doneRef.current) return;
    // Slow, human-paced typing: reveal ~1 char at a time on shorter replies
    // (longer ones step up a little so they don't drag past ~6s).
    const step = Math.max(1, Math.ceil(text.length / 180));
    const id = setInterval(() => {
      setCount((c) => {
        const next = Math.min(text.length, c + step);
        if (next >= text.length) {
          clearInterval(id);
          doneRef.current = true;
        }
        return next;
      });
      onType?.();
    }, 34);
    return () => clearInterval(id);
  }, [text, onType]);

  if (doneRef.current || count >= text.length)
    return <>{renderWithLinks(text, onNavigate)}</>;
  return <>{text.slice(0, count)}</>;
}

interface ChatMessage {
  id: number;
  role: "gugu" | "user";
  content: Answer;
}

export function GuguChat() {
  const pricing = usePricing();
  const pathname = usePathname() ?? "";
  // Quick-reply chips reorder to the current page; the path is also sent to the
  // LLM so free-text answers know where the visitor is.
  const orderedTopics = useMemo(() => topicsForPath(pathname), [pathname]);
  const quickPrompt = useMemo(() => promptForPath(pathname), [pathname]);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [quickOpen, setQuickOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const nextId = useRef(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  // "From" price = the cheapest single-subject entry tier across both levels,
  // priced with the live early-bird flag — always the real storefront number.
  const fromPrice = useMemo(() => {
    const prices = (["o-level", "na-level"] as const).map((level) =>
      pricing.tierPrice(level, "essential")
    );
    return sgd(Math.min(...prices));
  }, [pricing]);

  // Minimise the chat — used when a visitor clicks any link Gugu offers, so the
  // destination page is visible instead of hidden behind the panel.
  const closePanel = useCallback(() => setOpen(false), []);
  const ctx = useMemo(() => ({ fromPrice, closePanel }), [fromPrice, closePanel]);

  // Client-only island. Also skips the native game shell, which stamps
  // html[data-native] before paint and has its own UI.
  useEffect(() => {
    if (document.documentElement.dataset.native) return;
    setMounted(true);
  }, []);

  // Rotating attract messages in the floating bubble. Before the visitor has
  // chatted we tease with openers; once they've engaged we invite them back to
  // keep the conversation (and the sale) going.
  const bubblePool = messages.length > 0 ? BUBBLE_ENGAGED : BUBBLE_NEW;
  const [bubbleIdx, setBubbleIdx] = useState(0);
  useEffect(() => {
    if (open) return;
    const id = setInterval(() => setBubbleIdx((i) => i + 1), 6500);
    return () => clearInterval(id);
  }, [open]);
  const bubbleText = bubblePool[bubbleIdx % bubblePool.length];

  // Keep the latest message in view — on new messages and on each typed char.
  const scrollToBottom = useCallback(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, []);
  useEffect(() => {
    scrollToBottom();
  }, [messages, open, thinking, scrollToBottom]);

  function pushGugu(content: Answer) {
    setMessages((m) => [...m, { id: nextId.current++, role: "gugu", content }]);
  }

  function openChat() {
    setOpen(true);
    if (messages.length === 0) {
      pushGugu(
        "Hi! I'm Gugu, your StudyLah helper. Ask me anything — or tap a question below."
      );
    }
  }

  function answerTopic(topic: Topic) {
    setMessages((m) => [
      ...m,
      { id: nextId.current++, role: "user", content: topic.label },
      { id: nextId.current++, role: "gugu", content: topic.answer(ctx) },
    ]);
  }

  // Scripted answer for a free-typed question — used when the Claude brain is
  // unavailable (no API key, error, rate-limited) or returns a non-compliant
  // reply. Routes to the closest topic, else an honest "email a human".
  function scriptedFallback(text: string) {
    if (isGreeting(text)) {
      pushGugu(
        "Hey! 👋 I'm Gugu, StudyLah's helper. Are you looking at a particular subject, or want the quick version of how StudyLah works? Tap a question below or just tell me what you're studying."
      );
      return;
    }
    const topic = matchTopic(text);
    if (topic) {
      pushGugu(topic.answer(ctx));
    } else {
      pushGugu(
        <>
          Happy to help with that! I&apos;m sharpest on StudyLah itself — the
          forecasts, what&apos;s included, pricing, or how you get your PDFs. Tap
          a question below, or if it&apos;s something specific, drop the team a
          line at{" "}
          <a
            href="mailto:hello@studylah.education"
            className="font-medium text-accent underline"
          >
            hello@studylah.education
          </a>
          .
        </>
      );
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || thinking) return;
    setInput("");

    // Build the API transcript from string-content turns only (user questions +
    // prior Claude replies); scripted quick-reply answers are ReactNode and are
    // naturally skipped. The new question is appended last.
    const priorHistory = messages
      .filter((m) => typeof m.content === "string")
      .map((m) => ({
        role: m.role === "gugu" ? ("assistant" as const) : ("user" as const),
        content: m.content as string,
      }));

    setMessages((m) => [...m, { id: nextId.current++, role: "user", content: text }]);
    setThinking(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          messages: [...priorHistory, { role: "user", content: text }],
          page: pathname,
        }),
      });
      const data = (await res.json()) as { reply?: string; fallback?: boolean };
      if (data.reply) {
        pushGugu(data.reply);
      } else {
        scriptedFallback(text);
      }
    } catch {
      scriptedFallback(text);
    } finally {
      setThinking(false);
    }
  }

  if (!mounted) return null;

  return (
    <div className="gugu-fab pointer-events-none fixed bottom-8 left-4 z-40 flex flex-col items-start gap-3 transition-[bottom] duration-200 print:hidden">
      {/* Chat panel — StudyLah Legends arcade-HUD styling (mint #4ef3c9 frame,
          pixel-font labels, pink user bubbles, gold pressable Ask button, faint
          CRT scanlines). Answer text stays Inter for readability.
          Always mounted (so replies never re-run their typing animation on
          reopen); open/minimise is a scale+fade transition from the bottom-left. */}
      {mounted && (
        <div
          role="dialog"
          aria-label="Chat with Gugu"
          aria-hidden={!open}
          className={`gugu-panel relative flex h-[70vh] w-[calc(100vw-2rem)] origin-bottom-left flex-col overflow-hidden rounded-2xl border-2 border-[#4ef3c9] bg-[#12122b] shadow-[0_0_28px_-4px_rgba(78,243,201,0.45),0_24px_50px_-12px_rgba(0,0,0,0.85)] transition-all duration-200 ease-out sm:w-[360px] ${
            open
              ? "pointer-events-auto scale-100 opacity-100 translate-y-0"
              : "pointer-events-none scale-90 opacity-0 translate-y-4"
          }`}
        >
          {/* Header — arcade "PROFILE" style: sprite in a bordered chip + pixel name */}
          <div className="flex items-center gap-2.5 border-b-2 border-[#4ef3c9]/40 bg-[#0d0d22] px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md border border-[#4ef3c9]/60 bg-[#1b1a38]">
              <GuguSprite size={26} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-pixel text-[12px] leading-none text-[#4ef3c9]">GUGU</p>
              <p className="mt-1.5 font-pixel text-[7px] leading-none tracking-wide text-[#ffd166]">
                <span className="text-[#4ef3c9]">●</span> LIVE NOW
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-md px-2 py-1 text-lg leading-none text-[#8b93c6] hover:text-[#ff2e88]"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((msg) =>
              msg.role === "gugu" ? (
                <div key={msg.id} className="flex items-end gap-2">
                  <GuguSprite size={24} className="shrink-0" />
                  <div className="max-w-[85%] rounded-xl rounded-bl-sm border border-[#4ef3c9]/25 bg-[#1b1a38] px-3.5 py-2.5 text-sm leading-relaxed text-cloud">
                    {typeof msg.content === "string" ? (
                      <TypewriterText
                        text={msg.content}
                        onType={scrollToBottom}
                        onNavigate={closePanel}
                      />
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ) : (
                <div key={msg.id} className="flex justify-end">
                  <div className="max-w-[85%] rounded-xl rounded-br-sm bg-accent px-3.5 py-2.5 text-sm font-medium leading-relaxed text-night">
                    {msg.content}
                  </div>
                </div>
              )
            )}
            {thinking && (
              <div className="flex items-end gap-2">
                <GuguSprite size={24} className="shrink-0" />
                <div className="flex gap-1 rounded-xl rounded-bl-sm border border-[#4ef3c9]/25 bg-[#1b1a38] px-3.5 py-3">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#4ef3c9] [animation-delay:-0.2s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#4ef3c9] [animation-delay:-0.1s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#4ef3c9]" />
                </div>
              </div>
            )}
          </div>

          {/* Quick replies — collapsed by default behind a friendly prompt */}
          <div className="border-t-2 border-[#4ef3c9]/30 px-3 pb-2.5 pt-2">
            <button
              type="button"
              onClick={() => setQuickOpen((o) => !o)}
              aria-expanded={quickOpen}
              className="flex w-full items-center justify-between gap-2 text-left"
            >
              <span className="font-pixel text-[8px] tracking-wide text-[#4ef3c9]/80">
                QUICK ASKS
              </span>
              <span aria-hidden="true" className="text-xs leading-none text-[#4ef3c9]">
                {quickOpen ? "▾" : "▸"}
              </span>
            </button>
            {quickOpen ? (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {orderedTopics.map((topic) => (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => answerTopic(topic)}
                    className="rounded-md border border-[#4ef3c9]/40 bg-[#1b1a38] px-2.5 py-1 text-xs font-medium text-cloud transition-colors hover:border-[#4ef3c9] hover:bg-[#4ef3c9] hover:text-[#12122b]"
                  >
                    {topic.label}
                  </button>
                ))}
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setQuickOpen(true)}
                className="mt-1 text-left text-xs leading-snug text-cloud/70 hover:text-cloud"
              >
                {quickPrompt}
              </button>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t-2 border-[#4ef3c9]/30 bg-[#0d0d22] px-3 py-2.5"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question…"
              aria-label="Type a question"
              // text-base = 16px: iOS Safari auto-zooms a focused sub-16px input.
              // Dark navy field + mint frame keeps it on-theme and readable.
              className="min-w-0 flex-1 rounded-md border-2 border-[#4ef3c9] bg-[#1b1a38] px-3 py-2 text-base text-white caret-[#4ef3c9] outline-none placeholder:text-[#8b93c6] focus:border-[#4ef3c9] focus:ring-2 focus:ring-[#4ef3c9]/30"
            />
            <button
              type="submit"
              aria-label="Send"
              disabled={thinking}
              className="btn-pixel shrink-0 rounded-md bg-accent px-3.5 py-2 font-pixel text-[11px] uppercase leading-none text-night disabled:opacity-50"
            >
              Ask
            </button>
          </form>

          {/* Faint CRT scanlines — sits above content, clicks pass through. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(0,0,0,0.12) 0px, rgba(0,0,0,0.12) 1px, transparent 1px, transparent 3px)",
            }}
          />
        </div>
      )}

      {/* Gugu + speech bubble in a row — RPG "character speaking" layout:
          Gugu on the left, a rotating bubble to its right with a tail that
          points back at him. */}
      <div className="flex items-start gap-1.5">
        {/* Floating Gugu — bare ghost bobbing above a soft drop shadow */}
        <button
          type="button"
          onClick={() => (open ? setOpen(false) : openChat())}
          aria-label={open ? "Close chat" : "Chat with Gugu"}
          aria-expanded={open}
          className="group pointer-events-auto flex shrink-0 flex-col items-center transition-transform hover:scale-105 active:scale-95"
        >
          <GuguSprite size={60} className="ghost-bob drop-shadow-lg" />
          {/* shadow ellipse the ghost floats over */}
          <span
            aria-hidden="true"
            className="mt-1 h-1.5 w-8 rounded-[50%] bg-black/35 blur-[1.5px]"
          />
        </button>

        {/* Rotating speech bubble beside Gugu (closed state only) */}
        {!open && (
          <button
            type="button"
            onClick={openChat}
            aria-hidden="true"
            tabIndex={-1}
            className="pointer-events-auto relative max-w-[190px] rounded-xl border-2 border-[#4ef3c9] bg-[#12122b] px-3 py-1.5 text-left text-sm font-semibold text-[#4ef3c9] shadow-[0_0_16px_-4px_rgba(78,243,201,0.5)]"
          >
            {/* tail pointing left, back at Gugu */}
            <span
              aria-hidden="true"
              className="absolute -left-[7px] top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 border-b-2 border-l-2 border-[#4ef3c9] bg-[#12122b]"
            />
            {bubbleText}
          </button>
        )}
      </div>
    </div>
  );
}
