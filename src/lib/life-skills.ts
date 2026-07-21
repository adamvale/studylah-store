import type { IconName } from "@/components/icons";

// The Life Skills wing: ten non-academic tracks that make StudyLah more than a
// tutor. One engine (this content contract + the lesson player + the Guru
// role-play chat + SRS/XP). Seed content here is deliberately compact and real;
// Coddy mass-produces the full library under this same shape, the owner curates.
//
// House rules baked in: no emojis, no em/en dashes, minors-safe, and hard
// guardrails per track (Money = education not investment advice; Calm =
// coping skills not therapy, signpost help).

export interface LifeCard {
  heading: string;
  body: string;
}
export interface LifeLesson {
  key: string; // globally unique
  title: string;
  minutes: number;
  cards: LifeCard[];
  // Opens a Guru role-play / coaching chat seeded with this line.
  talkPrompt?: string;
}
export interface LifeTrack {
  key: string;
  name: string;
  blurb: string;
  icon: IconName;
  tint: string;
  // A one-line safety framing passed to Guru for any chat in this track.
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
        minutes: 5,
        cards: [
          { heading: "The leak test", body: "Most money vanishes in small taps: bubble tea, in-game skins, delivery fees. Add up one week honestly. The number is usually a shock, and that is the lesson." },
          { heading: "The 50-30-20 idea", body: "A simple split for any allowance: about half for needs, some for wants, and a fixed slice saved first, before you spend the rest. Pay your savings like a bill." },
          { heading: "Save first, not last", body: "Move your savings the day you get money, not whatever is left at month end. What is left is almost always nothing." },
        ],
        talkPrompt: "I want to build a simple weekly budget from my allowance. Ask me what I get and what I spend on, then help me make a plan.",
      },
      {
        key: "money-2",
        title: "Traps that eat teens",
        minutes: 5,
        cards: [
          { heading: "Buy now, pay later", body: "Splitting a purchase into instalments makes a S$120 thing feel like S$30. It is still S$120, plus fees if you miss. If you cannot buy it once, you cannot afford it four times." },
          { heading: "Compound interest, your side", body: "Money saved grows on itself. Small amounts started young beat big amounts started late, because time does the heavy lifting." },
          { heading: "The 24-hour rule", body: "Want something over S$30? Wait a day. Half the time the urge is gone. That pause is a real skill, not weakness." },
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
        minutes: 6,
        cards: [
          { heading: "Sell a painkiller, not a vitamin", body: "The best small business fixes an annoying problem people already have. Ask around: what do classmates complain about and would pay a little to solve?" },
          { heading: "Cost, price, margin", body: "If a thing costs you S$3 to make and you sell it at S$5, your margin is S$2. Know this before you sell one, or you can be busy and still broke." },
          { heading: "Start absurdly small", body: "Sell to five people first, by hand. You learn more from five real customers than from a perfect plan for five hundred." },
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
        minutes: 4,
        cards: [
          { heading: "Reps, not a switch", body: "Confidence is not something you have or lack. It grows from small brave actions repeated. Each rep makes the next one easier." },
          { heading: "Today's rep", body: "Pick one tiny challenge: ask one question in class, say hello first, order your food in Mandarin. Small on purpose. Done beats big." },
          { heading: "Reframe the voice", body: "The thought is not I am bad at this. The truer thought is I have not practised this yet. One word, yet, changes everything." },
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
        minutes: 5,
        cards: [
          { heading: "Stop cramming at a set time", body: "Late cramming trades a few facts for worse sleep and a foggy morning. Pick a stop time, pack your bag, then rest. Your prepared brain needs recovery, not more input." },
          { heading: "The 3-minute reset", body: "If panic rises, breathe in for 4, hold for 4, out for 6, a few rounds. A slower out-breath tells your body the threat has passed." },
          { heading: "Plan for a bad patch", body: "Decide now: if a question stumps you, you circle it and move on. Marks are everywhere else on the paper. One hard question is not the paper." },
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
        minutes: 5,
        cards: [
          { heading: "Motivation follows action", body: "You do not wait to feel ready. You start for 2 minutes, and the feeling of doing usually arrives after you begin, not before." },
          { heading: "Energy beats time", body: "One focused hour when you are fresh beats three tired ones. Put your hardest subject in your best hour, not the leftover late-night slot." },
          { heading: "Park the phone", body: "Willpower loses to a phone in the room. Put it in another room, face down, on silent. Distance, not discipline, is the trick." },
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
        cards: [
          { heading: "Clear subject, clear ask", body: "A good subject line says what you need: Absent on Friday, work to catch up. The teacher knows the point before opening it." },
          { heading: "Greeting, point, thanks", body: "Dear Mr Tan. Say the one thing you need in a sentence or two. Thank you, your name, your class. Short and polite wins." },
          { heading: "Read it once, out loud", body: "Reading aloud catches the rude-sounding line and the missing word. Ten seconds that saves an awkward reply." },
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
        minutes: 5,
        cards: [
          { heading: "Ask it to teach, not to do", body: "Do not ask AI for the answer to copy. Ask it to explain the method, then do the work yourself. Copying skips the learning, and the exam is you alone." },
          { heading: "Always verify", body: "AI can sound sure and be wrong. Check a fact against a second source, especially numbers, dates, and formulas." },
          { heading: "Your footprint is forever", body: "What you post at 15 can be found at 25. Before you send, ask if you would be fine with a future boss seeing it." },
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
        minutes: 6,
        cards: [
          { heading: "They just want three things", body: "Will you turn up, can you learn, are you easy to work with. Every answer you give can quietly show one of these." },
          { heading: "A resume with no experience", body: "No job yet is fine. List school roles, a project, anything that shows reliability. One clean page. Real over impressive." },
          { heading: "Have two questions ready", body: "At the end they ask if you have questions. Yes always wins. Ask what a good first month looks like. It shows you plan to be good." },
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
        minutes: 6,
        cards: [
          { heading: "Different roads, not better and worse", body: "JC leans academic and fast toward university. Poly is hands-on with a diploma and a portfolio. ITE builds a practical skill quickly. Each opens doors, none closes them forever." },
          { heading: "Match it to you", body: "Do you like exams and theory, or projects and making things? Be honest about how you actually learn, not what sounds prestigious." },
          { heading: "You can change lanes", body: "Poly to university, ITE to poly, paths connect. The first choice is important, not permanent. Fewer decisions are final than they feel at 16." },
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
        minutes: 5,
        cards: [
          { heading: "CPF in one line", body: "A national savings scheme: part of a working person's pay is set aside for retirement, housing, and healthcare. You will meet it the day you earn." },
          { heading: "Read before you sign", body: "A contract is a promise with rules. If you do not understand a line, ask before signing, not after. Signing means you agreed to all of it." },
          { heading: "Needs before wants, always", body: "Rent, food, transport, phone bill come first. Wants come from what is left. This one order keeps adults out of most money trouble." },
        ],
        talkPrompt: "Explain CPF and MediSave to me like I am 15 and have never heard of them, with a simple example.",
      },
    ],
  },
];

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
