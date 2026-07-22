import type { IconName } from "@/components/icons";
import type { LessonStep } from "@/lib/lesson-steps";
import { PLAYGROUND_LIFE } from "@/lib/playground-lessons";
import { LIFE_EXPANSION } from "@/lib/playground-life-expansion";

// The Life Skills wing: ten non-academic tracks that make StudyLah more than a
// tutor. Lessons are now INTERACTIVE (Brilliant-style): a short sequence of
// steps shown one at a time, mixing a beat of teaching with active recall
// (answer a question, tap to reveal, land an insight). Seed content is real and
// compact; Coddy expands the library under this same shape.
//
// House rules: no emojis, no em/en dashes, minors-safe, and hard guardrails per
// track (Money = education not investment advice; Calm = coping-skills-not-
// therapy + SG helpline).

export interface LifeLesson {
  key: string; // globally unique
  title: string;
  minutes: number;
  steps: LessonStep[];
  // Opens a Guru role-play / coaching chat seeded with this line.
  talkPrompt?: string;
}
export interface LifeTrack {
  key: string;
  name: string;
  blurb: string;
  icon: IconName;
  tint: string;
  guardrail: string;
  lessons: LifeLesson[];
}

export const LIFE_TRACKS: LifeTrack[] = [
  {
    key: "money",
    name: "Money School",
    blurb: "Budgeting, saving, and not getting played",
    icon: "calculator",
    tint: "from-emerald-400/25 to-violet-600/10",
    guardrail:
      "Teach money concepts and habits only. This is financial education, never investment or product advice. Never tell anyone to buy a specific stock, crypto, or product.",
    lessons: [
      {
        key: "money-1",
        title: "Where your money actually goes",
        minutes: 4,
        steps: [
          { kind: "concept", heading: "The leak test", body: "Most money does not vanish in one big splurge. It leaks in small taps: bubble tea, game skins, delivery fees. Add one honest week up, and the total usually surprises people." },
          { kind: "choice", question: "You get S$60 a week and want to save some. When should you move the savings?", options: ["At the end of the week, whatever is left", "The moment you get the money", "Only in the weeks you feel rich"], correct: 1, explain: "Pay your savings first, like a bill. Whatever is left at the end of the week is almost always nothing." },
          { kind: "reveal", prompt: "If you set aside just S$10 of that S$60 every week, roughly how much is that in a year?", answer: "About S$520, and that is before any interest. Small and steady quietly beats big and never." },
          { kind: "insight", body: "Save first, not last. Move it the day the money arrives." },
        ],
        talkPrompt: "I want to build a simple weekly budget from my allowance. Ask me what I get and what I spend on, then help me make a plan.",
      },
      {
        key: "money-2",
        title: "Traps that eat teens",
        minutes: 4,
        steps: [
          { kind: "concept", heading: "Buy now, pay later", body: "Splitting a S$120 thing into four payments makes it feel like S$30. It is still S$120, plus fees if you miss one." },
          { kind: "choice", question: "Which is the safer rule of thumb?", options: ["If I can pay it in four parts, I can afford it", "If I cannot buy it once, I cannot afford it four times"], correct: 1, explain: "Instalments hide the real price. If the full amount is out of reach today, splitting it just spreads the problem." },
          { kind: "concept", heading: "The 24-hour rule", body: "Want something over S$30? Wait a day. Half the time the urge is gone. That pause is a real skill, not weakness." },
          { kind: "insight", body: "Time is the quiet superpower of money. Saved early, it grows on itself." },
        ],
        talkPrompt: "Show me, with real numbers, how saving a small amount each month from now could grow by the time I am 26.",
      },
    ],
  },
  {
    key: "founder",
    name: "Founder Track",
    blurb: "Turn an idea into a tiny real business",
    icon: "rocket",
    tint: "from-fuchsia-500/25 to-violet-600/10",
    guardrail: "Teach entrepreneurship basics for a teen. Keep it legal, honest, and small-scale. No get-rich-quick claims.",
    lessons: [
      {
        key: "founder-1",
        title: "From idea to first dollar",
        minutes: 5,
        steps: [
          { kind: "concept", heading: "Painkiller beats vitamin", body: "The best small business fixes an annoying problem people already have, not a nice-to-have they might want one day." },
          { kind: "choice", question: "It costs you S$3 to make something and you sell it for S$5. What is your margin per sale?", options: ["S$5", "S$3", "S$2"], correct: 2, explain: "Margin is price minus cost: S$5 minus S$3 is S$2. Know this before you sell one, or you can be busy and still broke." },
          { kind: "concept", heading: "Start absurdly small", body: "Sell to five people by hand first. You learn more from five real customers than from a perfect plan for five hundred." },
          { kind: "insight", body: "A real business is not the idea. It is the first person who pays you." },
        ],
        talkPrompt: "I have a small business idea. Play a friendly but sharp mentor: ask me about it, then help me work out the cost, price, and first five customers.",
      },
    ],
  },
  {
    key: "confidence",
    name: "Confidence Gym",
    blurb: "Small brave reps, every day",
    icon: "flame",
    tint: "from-amber-400/25 to-violet-600/10",
    guardrail: "Coach confidence through small real actions and kinder self-talk. Warm and encouraging, never pressuring. If a student sounds genuinely distressed, gently suggest they talk to a trusted adult.",
    lessons: [
      {
        key: "confidence-1",
        title: "Confidence is a muscle",
        minutes: 3,
        steps: [
          { kind: "concept", heading: "Reps, not a switch", body: "Confidence is not something you have or lack. It grows from small brave actions repeated. Each rep makes the next one easier." },
          { kind: "choice", question: "You think: I am just bad at speaking up. Which reframe is more useful?", options: ["I am bad at this, so I should avoid it", "I have not practised this yet, so I can grow it"], correct: 1, explain: "One word, yet, turns a dead end into a starting line. The skill is trainable, and you just have not trained it." },
          { kind: "reveal", prompt: "What is a tiny confidence rep you could do TODAY?", answer: "Something small on purpose: ask one question in class, say hello first, order your food in Mandarin. Done beats big." },
          { kind: "insight", body: "Courage is not a feeling you wait for. It is a small action you take first." },
        ],
        talkPrompt: "Give me one small confidence challenge I can do today, then check in with me on how it went and what I learned.",
      },
    ],
  },
  {
    key: "calm",
    name: "The Calm Room",
    blurb: "Handle exam nerves and pressure",
    icon: "heart",
    tint: "from-rose-400/25 to-violet-600/10",
    guardrail: "Teach practical coping skills for study stress only. This is education, not therapy or medical advice. If a student mentions feeling unsafe or hopeless, respond with care and point them to a trusted adult and a Singapore helpline (for example the Samaritans of Singapore, 1767).",
    lessons: [
      {
        key: "calm-1",
        title: "The night before a paper",
        minutes: 4,
        steps: [
          { kind: "concept", heading: "Stop cramming at a set time", body: "Late cramming trades a few facts for worse sleep and a foggy morning. Your prepared brain needs recovery, not more input." },
          { kind: "choice", question: "A question in the exam completely stumps you. Best move?", options: ["Stay on it until you crack it", "Circle it, move on, come back if there is time"], correct: 1, explain: "Marks are spread across the whole paper. One hard question is not the paper. Bank the easy marks first." },
          { kind: "reveal", prompt: "Panic is rising before the paper. What is a 20-second reset you can do?", answer: "Breathe in for 4, hold for 4, out for 6, a few rounds. A slower out-breath tells your body the threat has passed." },
          { kind: "insight", body: "You cannot control the paper. You can control your plan for a bad patch, and that is enough." },
        ],
        talkPrompt: "I get nervous before exams. Walk me through a calm plan for the night before and the morning of a paper.",
      },
    ],
  },
  {
    key: "lifeos",
    name: "Life OS",
    blurb: "Time, focus, and beating your phone",
    icon: "compass",
    tint: "from-cyan-400/25 to-violet-600/10",
    guardrail: "Teach practical time and self-management for a teen.",
    lessons: [
      {
        key: "lifeos-1",
        title: "Start when you don't feel like it",
        minutes: 4,
        steps: [
          { kind: "concept", heading: "Motivation follows action", body: "You do not wait to feel ready. You start for 2 minutes, and the feeling of doing usually arrives after you begin, not before." },
          { kind: "choice", question: "You have one fresh hour and one tired hour. Where should your hardest subject go?", options: ["The tired hour, save energy for fun first", "The fresh hour, spend your best focus on the hard thing"], correct: 1, explain: "One focused hour when you are fresh beats three tired ones. Protect your best hour for your hardest work." },
          { kind: "concept", heading: "Distance beats willpower", body: "Willpower loses to a phone in the room. Put it in another room, face down, on silent. Do not rely on resisting it." },
          { kind: "insight", body: "You do not need more discipline. You need fewer things fighting for your attention." },
        ],
        talkPrompt: "Help me plan tomorrow: my energy is best in the morning and I keep getting distracted by my phone. Build me a realistic day.",
      },
    ],
  },
  {
    key: "communication",
    name: "Say It Right",
    blurb: "Emails, group work, speaking up",
    icon: "chat",
    tint: "from-sky-400/25 to-violet-600/10",
    guardrail: "Teach clear, respectful communication for a teen.",
    lessons: [
      {
        key: "comm-1",
        title: "Email a teacher properly",
        minutes: 4,
        steps: [
          { kind: "concept", heading: "The point goes first", body: "A busy teacher should know what you need before they finish the first line. Lead with it." },
          { kind: "choice", question: "Which is the better subject line?", options: ["Hi", "Question", "Absent Friday, work to catch up"], correct: 2, explain: "A specific subject line tells the reader the point instantly and gets a faster reply." },
          { kind: "reveal", prompt: "What are the three parts of a clean, polite email?", answer: "A greeting (Dear Mr Tan), the one thing you need in a sentence or two, then thanks with your name and class. Short and polite wins." },
          { kind: "insight", body: "Read it once out loud before sending. It catches the rude-sounding line and the missing word." },
        ],
        talkPrompt: "Play my teacher. I will write you an email asking for help, and you tell me kindly how to make it better.",
      },
    ],
  },
  {
    key: "digital",
    name: "AI & Street Smarts",
    blurb: "Use AI well, spot scams and fakes",
    icon: "shield",
    tint: "from-indigo-400/25 to-violet-600/10",
    guardrail: "Teach responsible technology use, verification, and online safety.",
    lessons: [
      {
        key: "digital-1",
        title: "Use AI to learn, not to cheat",
        minutes: 4,
        steps: [
          { kind: "concept", heading: "Ask it to teach, not to do", body: "The exam is you, alone, with no AI. Copying an answer skips the learning that the exam actually tests." },
          { kind: "choice", question: "Best way to use an AI tutor on a hard question?", options: ["Ask for the answer and copy it down", "Ask it to explain the method, then solve it yourself"], correct: 1, explain: "Learning happens when you do the work. Let the AI teach the method, then prove you can do it without it." },
          { kind: "concept", heading: "Always verify", body: "AI can sound completely sure and still be wrong. Check any fact, number, date or formula against a second source." },
          { kind: "insight", body: "What you post at 15 can be found at 25. Before you send, picture a future boss reading it." },
        ],
        talkPrompt: "Show me a smart way to use an AI tutor to actually learn a hard topic, instead of just copying answers.",
      },
    ],
  },
  {
    key: "paycheck",
    name: "First Paycheck",
    blurb: "Part-time work and getting hired",
    icon: "key",
    tint: "from-lime-400/25 to-violet-600/10",
    guardrail: "Teach job-readiness basics relevant to a Singapore teen. General guidance only, not legal advice.",
    lessons: [
      {
        key: "paycheck-1",
        title: "The interview, without the fear",
        minutes: 5,
        steps: [
          { kind: "concept", heading: "They want three things", body: "Under every interview question sits the same worry: will you turn up, can you learn, are you easy to work with." },
          { kind: "choice", question: "At the end they ask: do you have any questions? Best answer?", options: ["No, I think you covered everything", "Yes, what does a good first month look like here?"], correct: 1, explain: "A thoughtful question shows you plan to be good at the job, not just get it. Have two ready." },
          { kind: "reveal", prompt: "You have zero work experience. What goes on the resume?", answer: "School roles, a project, a responsibility, anything that shows you are reliable. One clean page. Real over impressive." },
          { kind: "insight", body: "You are not proving you are amazing. You are proving you are reliable and coachable." },
        ],
        talkPrompt: "Be a friendly hiring manager for a part-time job. Interview me with a few questions, then give me honest, kind feedback.",
      },
    ],
  },
  {
    key: "pathfinder",
    name: "Pathfinder",
    blurb: "JC, Poly or ITE, decided honestly",
    icon: "map",
    tint: "from-orange-400/25 to-violet-600/10",
    guardrail: "Give balanced, honest information about post-secondary paths in Singapore. Never push one path; help the student reason about their own fit. No promises about outcomes.",
    lessons: [
      {
        key: "pathfinder-1",
        title: "There is no single best path",
        minutes: 5,
        steps: [
          { kind: "concept", heading: "Different roads, not better and worse", body: "JC leans academic and fast toward university. Poly is hands-on with a diploma and a portfolio. ITE builds a practical skill quickly. Each opens doors." },
          { kind: "choice", question: "Which question actually helps you choose?", options: ["Which one sounds most prestigious?", "Do I learn better through exams and theory, or projects and making things?"], correct: 1, explain: "Fit beats prestige. The right path matches how you actually learn and what you enjoy, not what impresses others." },
          { kind: "reveal", prompt: "You pick Poly. Is university now off the table forever?", answer: "No. Poly to university, ITE to Poly, the paths connect. The first choice matters, but far fewer decisions are final than they feel at 16." },
          { kind: "insight", body: "Choose for the person you are, not the label you think you should want." },
        ],
        talkPrompt: "Interview me about what I enjoy and how I learn, then help me think through JC, Poly and ITE for someone like me. Do not push one.",
      },
    ],
  },
  {
    key: "adulting",
    name: "Adulting 101",
    blurb: "CPF, NS, contracts, how SG works",
    icon: "book",
    tint: "from-violet-400/25 to-fuchsia-600/10",
    guardrail: "Explain how everyday systems in Singapore work, in plain words. General information only, not legal or financial advice.",
    lessons: [
      {
        key: "adulting-1",
        title: "Money words adults assume you know",
        minutes: 4,
        steps: [
          { kind: "concept", heading: "CPF in one line", body: "A national savings scheme: part of a working person's pay is set aside for retirement, housing and healthcare. You will meet it the day you earn." },
          { kind: "choice", question: "A friend asks you to sign something you do not fully understand. Best move?", options: ["Sign it, you can sort out the details later", "Ask what each unclear line means before you sign"], correct: 1, explain: "A signature means you agreed to all of it. Understanding comes before signing, never after." },
          { kind: "reveal", prompt: "In what order should money go: wants or needs first?", answer: "Needs first, always: rent, food, transport, phone bill. Wants come from what is left. This one order keeps adults out of most money trouble." },
          { kind: "insight", body: "Nobody is born knowing this. Learning it early is the whole advantage." },
        ],
        talkPrompt: "Explain CPF and MediSave to me like I am 15 and have never heard of them, with a simple example.",
      },
    ],
  },
];

// Append Project Playground life lessons (Coddy-authored, validated) to tracks:
// round 1 (PLAYGROUND_LIFE) plus the enrichment batch (LIFE_EXPANSION, 40 more).
for (const track of LIFE_TRACKS) {
  const extra = PLAYGROUND_LIFE[track.key];
  if (extra) track.lessons.push(...extra);
  const more = LIFE_EXPANSION[track.key];
  if (more) track.lessons.push(...more);
}

export function lifeTrack(key: string): LifeTrack | undefined {
  return LIFE_TRACKS.find((t) => t.key === key);
}
export function lifeLesson(lessonKey: string): { track: LifeTrack; lesson: LifeLesson } | undefined {
  for (const track of LIFE_TRACKS) {
    const lesson = track.lessons.find((l) => l.key === lessonKey);
    if (lesson) return { track, lesson };
  }
  return undefined;
}
