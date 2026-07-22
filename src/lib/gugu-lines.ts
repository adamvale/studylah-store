// Gugu's scripted guidance line for each page. The same for every student,
// read aloud on demand (no AI). A warm, human tutor greeting per screen, plus a
// context-aware line for the Today home. Keep them short, plain, no dashes, no
// grade promises.

export interface GuguContext {
  name: string;
  streak: number;
  todayDone: boolean;
}

// "Daniel" from the email local part, matching the Today hero's greeting.
export function firstNameFrom(email: string): string {
  const raw = email.split("@")[0] ?? "";
  const word = raw.split(/[._\-+]/)[0] ?? "";
  if (!word) return "there";
  return word.charAt(0).toUpperCase() + word.slice(1, 12);
}

// Static guidance keyed by route. Longest matching prefix wins.
const PAGE_LINES: Record<string, string> = {
  "/account/learn": "This is your toolbox. Every tool does one job. Pick one, and I will walk you through it.",
  "/account/practical":
    "Welcome to the Practical Lab. Choose a science, then a skill, and I will guide you through every step.",
  "/account/progress":
    "Here is your progress. The gold shape shows your strengths. Let us grow the smaller sides together.",
  "/account/drills": "Time to drill. Pick a deck, and I will keep you moving, one card at a time.",
  "/account/practice": "Practice makes the phrasing automatic. Pick a tool, and let us begin.",
  "/account/fasttrack":
    "FastTrack teaches you to answer the way examiners award marks. Pick a play and follow along with me.",
  "/account/scan": "Stuck on a question? Snap a photo, and I will walk you through it, one step at a time.",
  "/account/oral":
    "Let us practise your oral. Hear the model first, then read it aloud, and I will coach your pronunciation.",
  "/account/tutor": "Ready for a lesson? Pick a subject, and we will teach, practise, and mark your work together.",
  "/account/life": "Life Skills, the things school skips. Pick a track, and let us dive in.",
  "/account/mistakes":
    "This is your bestiary. Every mistake is a monster to beat. Let us tackle them one at a time.",
  "/account/rescue": "Behind is a position, not a verdict. Answer three questions and I will build your plan.",
  "/account/warroom": "The War Room is your final week plan. Let us sharpen what you already know.",
  "/account/adventure": "Welcome to StudyLah Legends. Learn by playing. Every battle is a real question.",
  "/account/study": "Here is your study checklist. Pick a topic, and let us close the gaps together.",
  "/account/orders": "This is your account. Your orders and settings live here.",
};

// The Today greeting, spoken by Gugu. These are FIXED (no name, no streak
// number) so they are pre-generated in Gugu's premium voice and never fall
// back to the robotic device voice. The on-screen hero still greets the
// student by name; only the spoken line is generic.
const TODAY_FIRST =
  "Welcome to StudyLand. I am Gugu, your guide. Let us start small with your daily three, three quick questions to warm up.";
const TODAY_DONE =
  "Welcome back. Your streak is safe for today. If you have a few minutes, we can clear a mistake or try some bonus practice.";
const TODAY_RETURN =
  "Welcome back. Let us keep your streak going with your daily three, then look at what needs work.";
// Spoken when no page-specific line matches. Also fixed, so it uses the
// premium voice.
const DEFAULT_LINE = "I am right here if you need a hand.";

function todayLine(ctx: GuguContext): string {
  if (ctx.streak <= 0 && !ctx.todayDone) return TODAY_FIRST;
  if (ctx.todayDone) return TODAY_DONE;
  return TODAY_RETURN;
}

export function guguLineFor(pathname: string, ctx: GuguContext): string {
  // The Today home lives at /account and /studyland (the app dashboard).
  if (pathname === "/account" || pathname === "/studyland") return todayLine(ctx);
  const keys = Object.keys(PAGE_LINES).sort((a, b) => b.length - a.length);
  for (const k of keys) {
    if (pathname === k || pathname.startsWith(`${k}/`)) return PAGE_LINES[k];
  }
  return DEFAULT_LINE;
}

// Every fixed (non-personalised) spoken line, for the audio pre-generator, so
// each one plays in Gugu's premium voice.
export function fixedGuguLines(): string[] {
  return [...Object.values(PAGE_LINES), TODAY_FIRST, TODAY_DONE, TODAY_RETURN, DEFAULT_LINE];
}

// Gugu's line when a question opens. Subject/topic aware, so it changes per
// question, dynamic, so it speaks with the device voice (not pre-generated).
export function questionIntro(subjectName?: string, topic?: string): string {
  const lead = subjectName ? `This is a ${subjectName} question` : "Here is your question";
  const on = topic ? ` on ${topic}` : "";
  return `${lead}${on}. Read it carefully. What do you think the answer is?`;
}
