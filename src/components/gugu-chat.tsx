"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
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

interface Topic {
  id: string;
  // Short label shown as a tappable quick-reply chip.
  label: string;
  // Words that route a free-typed question to this topic (all lowercase).
  keywords: string[];
  answer: (ctx: { fromPrice: string }) => Answer;
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
    answer: () => (
      <>
        Guessing is revising everything and hoping. This is ten years of
        classified questions and setter patterns turned into a ranked probability
        for every topic. And we publish the receipts — after every sitting our{" "}
        <Link href="/accuracy" className="font-medium text-accent underline">
          accuracy scorecard
        </Link>{" "}
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
    answer: ({ fromPrice }) => (
      <>
        A single subject starts from <strong>{fromPrice}</strong>, and taking
        three or more subjects unlocks bundle pricing automatically — the cart
        always charges you the cheapest valid combination. Have a look:{" "}
        <Link href="/subjects" className="font-medium text-accent underline">
          browse subjects and prices
        </Link>
        .
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
    answer: () => (
      <>
        Yes. Every subject has a free <strong>Predict-your-mark</strong> check —
        ten questions drawn from the topics our forecast rates most likely,
        auto-marked in about seven minutes. It ends with a score and worked
        solutions so you can judge us for yourself.{" "}
        <Link href="/subjects" className="font-medium text-accent underline">
          Pick a subject to try
        </Link>
        .
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

interface ChatMessage {
  id: number;
  role: "gugu" | "user";
  content: Answer;
}

export function GuguChat() {
  const pricing = usePricing();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
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

  const ctx = useMemo(() => ({ fromPrice }), [fromPrice]);

  // Client-only island. Also skips the native game shell, which stamps
  // html[data-native] before paint and has its own UI.
  useEffect(() => {
    if (document.documentElement.dataset.native) return;
    setMounted(true);
  }, []);

  // Keep the latest message in view.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, open]);

  function pushGugu(content: Answer) {
    setMessages((m) => [...m, { id: nextId.current++, role: "gugu", content }]);
  }

  function openChat() {
    setOpen(true);
    if (messages.length === 0) {
      pushGugu(
        "Hi! I'm Gugu 👻 Ask me anything about StudyLah — or tap a question below."
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
    <div className="fixed bottom-4 left-4 z-40 flex flex-col items-start gap-3 print:hidden">
      {/* Chat panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Gugu"
          className="flex h-[70vh] max-h-[520px] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-hairline bg-surface shadow-2xl sm:w-[360px]"
        >
          {/* Header */}
          <div className="flex items-center gap-2.5 border-b border-hairline bg-night px-4 py-3">
            <GuguSprite size={32} />
            <div className="min-w-0 flex-1">
              <p className="font-display text-sm font-bold leading-tight text-white">
                Gugu
              </p>
              <p className="text-[11px] leading-tight text-cloud">
                StudyLah helper · usually instant
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-lg px-2 py-1 text-lg leading-none text-cloud hover:bg-night-2 hover:text-white"
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
                  <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-night-2/10 px-3.5 py-2.5 text-sm leading-relaxed text-ink">
                    {msg.content}
                  </div>
                </div>
              ) : (
                <div key={msg.id} className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-accent px-3.5 py-2.5 text-sm leading-relaxed text-night">
                    {msg.content}
                  </div>
                </div>
              )
            )}
            {thinking && (
              <div className="flex items-end gap-2">
                <GuguSprite size={24} className="shrink-0" />
                <div className="flex gap-1 rounded-2xl rounded-bl-sm bg-night-2/10 px-3.5 py-3">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-body [animation-delay:-0.2s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-body [animation-delay:-0.1s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-body" />
                </div>
              </div>
            )}
          </div>

          {/* Quick replies */}
          <div className="flex flex-wrap gap-1.5 border-t border-hairline px-3 py-2.5">
            {TOPICS.map((topic) => (
              <button
                key={topic.id}
                type="button"
                onClick={() => answerTopic(topic)}
                className="rounded-full border border-hairline bg-surface px-2.5 py-1 text-xs font-medium text-body transition-colors hover:border-accent hover:text-accent"
              >
                {topic.label}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-hairline px-3 py-2.5"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question…"
              aria-label="Type a question"
              // text-base = 16px: iOS Safari auto-zooms the page when a focused
              // input is under 16px, so keep this at 16 to stop the zoom-in.
              // Border = the Singapore minimap mint (SG_ARCADE.mint #4ef3c9).
              className="min-w-0 flex-1 rounded-lg border-2 border-[#4ef3c9] bg-white px-3 py-2 text-base text-night outline-none placeholder:text-night/45 focus:border-[#4ef3c9] focus:ring-2 focus:ring-[#4ef3c9]/30"
            />
            <button
              type="submit"
              aria-label="Send"
              disabled={thinking}
              className="shrink-0 rounded-lg bg-accent px-3.5 py-2 text-sm font-bold text-night hover:opacity-90 disabled:opacity-50"
            >
              Ask
            </button>
          </form>
        </div>
      )}

      {/* Persistent "Got a question?" bubble — only while the panel is closed */}
      {!open && (
        <button
          type="button"
          onClick={openChat}
          aria-hidden="true"
          tabIndex={-1}
          className="ml-1 rounded-2xl rounded-bl-sm bg-white px-3 py-1.5 text-sm font-semibold text-night shadow-lg"
        >
          Got a question?
        </button>
      )}

      {/* Floating Gugu — bare ghost bobbing above a soft drop shadow */}
      <button
        type="button"
        onClick={() => (open ? setOpen(false) : openChat())}
        aria-label={open ? "Close chat" : "Chat with Gugu"}
        aria-expanded={open}
        className="group flex flex-col items-center transition-transform hover:scale-105 active:scale-95"
      >
        <GuguSprite size={60} className="ghost-bob drop-shadow-lg" />
        {/* shadow ellipse the ghost floats over */}
        <span
          aria-hidden="true"
          className="mt-1 h-1.5 w-8 rounded-[50%] bg-black/35 blur-[1.5px]"
        />
      </button>
    </div>
  );
}
