// The StudyLah blog. Posts are typed content modules (same pattern as
// subject-copy.ts), no CMS, no markdown pipeline, type-safe, and rendered
// with the site's own design system. Add a post: append to POSTS. Slugs are
// permanent once published (they end up in URLs and search indexes).
//
// House rules for every post (compliance): probabilistic language only, no
// banned words (guaranteed/100%/confirmed/leaked/insider/sure-win), no grade
// promises, and be honest about limits, the honesty IS the brand.

export type BlogBlock =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "callout"; text: string }
  | { kind: "cta"; label: string; href: string; note?: string };

export interface BlogPost {
  slug: string;
  title: string;
  description: string; // meta description + card blurb
  date: string; // YYYY-MM-DD
  readMinutes: number;
  tag: string;
  blocks: BlogBlock[];
}

export const POSTS: BlogPost[] = [
  {
    slug: "o-level-chemistry-2026-topic-guide",
    title: "O-Level Chemistry 2026 (6092): the topic map, and where the marks actually live",
    description:
      "Every O-Level Chemistry topic area, which question types carry the marks, and how to revise 6092 by likelihood instead of syllabus order.",
    date: "2026-07-18",
    readMinutes: 6,
    tag: "Chemistry",
    blocks: [
      {
        kind: "p",
        text: "Search \"O Level Chemistry 2026 topics\" and you get the syllabus document: accurate, official, and useless for deciding what to revise tonight. The 6092 syllabus is wide, your remaining weeks are not, so the real question is never \"what is in the syllabus\", it is \"which topics are likeliest to pay marks on my paper\".",
      },
      { kind: "h2", text: "The 6092 territory in one look" },
      {
        kind: "p",
        text: "O-Level Pure Chemistry groups into a few big neighbourhoods: experimental chemistry and QA, atomic structure and bonding, the mole and stoichiometry, acids, bases and salts, redox, metals and reactivity, energy changes and rates, organic chemistry, and air and environment. Combined Science Chemistry (5086/5088) walks the same streets with a lighter load.",
      },
      {
        kind: "ul",
        items: [
          "Calculation chains (the mole, concentration, titration) reward practised method, marks survive small slips if the working is shown.",
          "Explain questions (bonding, electrolysis, rates) are keyword paid: name the particles, the forces, and the change.",
          "QA and practical planning reward familiarity with the standard tests, they are close to free marks for the rehearsed.",
          "Organic chemistry rotates heavily between sittings, which is exactly what a ten-year classification picks up.",
        ],
      },
      { kind: "h2", text: "Revise by likelihood, not by chapter order" },
      {
        kind: "p",
        text: "Nobody outside the exam board knows the 2026 paper, and anyone who claims to should worry you. What ten years of past 6092 papers can give you honestly is a probability ranking: which topics the setters have returned to relentlessly, which rotate, and which have gone quiet. StudyLah classifies every question from a decade of papers and ranks each topic into four confidence tiers, VERY HIGH to WATCH, then publishes the hits and misses after every sitting.",
      },
      {
        kind: "callout",
        text: "A tier is a probability, not a promise. The tiers exist so your fixed hours land on the highest-expected-value topics first, that is the whole trick.",
      },
      { kind: "h2", text: "The second leak: right chemistry, wrong words" },
      {
        kind: "p",
        text: "Chemistry mark schemes award specific words. \"The bonds are strong\" scores nothing when the scheme wants \"strong electrostatic forces of attraction between oppositely charged ions\". If your marks are stuck below 60 percent, answering technique is usually the cheaper fix than more content, that is what FastTrack trains: the examiner keywords, a 3 to 4 step answer shape, and reading what a question tests in the first few seconds.",
      },
      {
        kind: "cta",
        label: "See the O-Level Chemistry 2026 forecast",
        href: "/o-level/chemistry-pure",
        note: "Every 6092 topic tiered · original practice · full timed mock.",
      },
      {
        kind: "cta",
        label: "Learn the FastTrack answering method",
        href: "/fasttrack",
        note: "For O-Level and N-Level Chemistry, Physics and Biology.",
      },
    ],
  },
  {
    slug: "o-level-physics-2026-revision-plan",
    title: "O-Level Physics 2026 (6091): a final-weeks plan that respects the mark scheme",
    description:
      "How to revise O-Level Physics by topic likelihood, bank method marks on calculations, and stop losing explain-question marks to vague phrasing.",
    date: "2026-07-18",
    readMinutes: 6,
    tag: "Physics",
    blocks: [
      {
        kind: "p",
        text: "O-Level Physics (6091) punishes two habits: revising the syllabus front to back like a novel, and writing final answers with no working. Both feel productive. Both leak marks. Here is a final-weeks plan built around how the paper actually pays.",
      },
      { kind: "h2", text: "Know the two currencies: method marks and keyword marks" },
      {
        kind: "ul",
        items: [
          "Calculation topics (kinematics, forces, energy, electricity) pay in METHOD marks: state the formula, substitute with units, then solve. A wrong final answer over correct working still collects.",
          "Explain topics (waves, thermal physics, electromagnetism) pay in KEYWORD marks: the scheme wants precise physics vocabulary, not a paraphrase that a friendly reader would accept.",
          "Graph and data questions pay for reading the axes before the question, most dropped marks there are reading errors, not physics errors.",
        ],
      },
      { kind: "h2", text: "Order the topics by likelihood, then timetable backwards" },
      {
        kind: "p",
        text: "Ten years of 6091 papers, classified question by question, show clear patterns: some topics anchor the paper almost every sitting, others rotate in and out. StudyLah's forecast ranks every topic into four confidence tiers for 2026. Start at VERY HIGH and work down, and if time runs out, it runs out on the topics least likely to cost you.",
      },
      {
        kind: "p",
        text: "Then timetable backwards from your paper dates: one topic block a day beats a heroic weekend, and the last week belongs to a full timed mock in the real 2026 format, sat in one sitting, marked against a scheme. The first full mock is always humbling. Better at your desk than in the hall.",
      },
      {
        kind: "callout",
        text: "These are probabilistic forecasts built from public past papers, never inside information. The accuracy scorecard, including the misses, is published after every sitting.",
      },
      {
        kind: "cta",
        label: "See the O-Level Physics 2026 forecast",
        href: "/o-level/physics-pure",
        note: "Every 6091 topic tiered · practice weighted to the forecast · timed mock.",
      },
      {
        kind: "cta",
        label: "Predict your Physics mark, free",
        href: "/diagnostic",
        note: "10 questions · instant marking · an honest baseline.",
      },
    ],
  },
  {
    slug: "o-n-level-biology-marks-guide",
    title: "O-Level and N-Level Biology 2026: why right ideas score zero, and the fix",
    description:
      "Biology mark schemes are keyword driven. How O-Level (6093) and N-Level Biology students lose marks on things they understood, and how to stop.",
    date: "2026-07-18",
    readMinutes: 5,
    tag: "Biology",
    blocks: [
      {
        kind: "p",
        text: "Biology has the cruellest failure mode of the three sciences: students who genuinely understood the process score zero on the question. Not because the idea was wrong, because the words were. O-Level Biology (6093), Combined Science Biology and N-Level Biology all mark the same way: against a scheme of specific crediting points.",
      },
      { kind: "h2", text: "What the scheme is actually looking for" },
      {
        kind: "ul",
        items: [
          "Name the exact structure: \"the cell\" scores nothing when the scheme wants \"the root hair cell\".",
          "Name the exact process: \"it moves\" versus \"water moves by osmosis down a water potential gradient\".",
          "Complete the logic: many 3-mark answers are step chains, cause, mechanism, consequence, and a missing middle step drops the mark even when the ends are right.",
          "Match the format: \"describe\" wants observations, \"explain\" wants mechanism, answering the wrong verb is a silent zero.",
        ],
      },
      { kind: "h2", text: "The process topics do the heavy lifting" },
      {
        kind: "p",
        text: "Across a decade of papers, the process questions, enzymes, transport in plants and humans, respiration, photosynthesis, homeostasis, carry a large share of the structured marks, and they reward rehearsed keyword answers more than any other question type. That is where forecast-first revision pays fastest: rank the topics by 2026 likelihood, then drill the top tiers with answers written the examiner's way.",
      },
      {
        kind: "p",
        text: "This is exactly the gap FastTrack was built for: for each high-frequency question family it teaches the trigger words, the 3 to 4 step answer skeleton, the exact keywords versus the vague phrases that score zero, then drills you with instant marking. Chemistry, Physics and Biology, O-Level and N-Level.",
      },
      {
        kind: "callout",
        text: "Honesty first: forecasts are probabilities from public past papers, not predictions of certainty and never leaked content. Every claim gets audited on the public accuracy scorecard after results.",
      },
      {
        kind: "cta",
        label: "See the O-Level Biology 2026 forecast",
        href: "/o-level/biology-pure",
        note: "Every 6093 topic tiered · keyword-graded practice · timed mock.",
      },
      {
        kind: "cta",
        label: "FastTrack: answer the way examiners award marks",
        href: "/fasttrack",
        note: "The four mark leaks, and the drills that close them.",
      },
    ],
  },
  {
    slug: "how-the-2026-forecast-is-built",
    title: "How the 2026 forecast is actually built (and how to read the tiers)",
    description:
      "Ten years of papers, question-level classification, and four confidence tiers, what goes into a StudyLah Exam Forecast, and what the tiers really mean.",
    date: "2026-07-11",
    readMinutes: 5,
    tag: "Methodology",
    blocks: [
      {
        kind: "p",
        text: "Every forecast we publish starts the same way: ten years of your subject's past papers, broken down question by question. Not \"Chemistry came up\", that tells you nothing, but which syllabus topic each question tested, how many marks it carried, which paper it sat in, and how the setters have rotated it over a decade.",
      },
      {
        kind: "p",
        text: "From that we build a picture of how your paper behaves. Some topics are structural, they anchor the paper year after year because the syllabus almost demands it. Some rotate on a cycle you can see once the data is laid out. Some spike after a syllabus revision, then settle. The forecast turns those patterns into a ranked call for the 2026 sitting.",
      },
      { kind: "h2", text: "The four tiers, in plain English" },
      {
        kind: "ul",
        items: [
          "VERY HIGH, the topics the data says the 2026 paper is most likely to lean on. If your time is short, it goes here first.",
          "HIGH, strong patterns, slightly less certain. Together with VERY HIGH, these are where past papers concentrate their marks.",
          "MODERATE, genuinely could go either way. Revise them after the top tiers are solid.",
          "WATCH, lower likelihood, not zero. We show them because pretending they don't exist would be dishonest.",
        ],
      },
      {
        kind: "callout",
        text: "A forecast is a probability, not a prophecy. That's exactly why we publish an accuracy scorecard after every sitting, hits AND misses, in public. A forecast you can't check is just marketing.",
      },
      { kind: "h2", text: "How to actually use it" },
      {
        kind: "p",
        text: "Don't read the forecast like a horoscope, run your revision through it. Work the VERY HIGH tier until you'd welcome those questions, then move down. Inside your StudyLand, the study plan turns each subject's forecast into a tiered checklist, and the Marks at Risk meter shows how much of a typical paper you've actually banked so far.",
      },
      {
        kind: "cta",
        label: "See the accuracy scorecard",
        href: "/accuracy",
        note: "Every call we made, against what actually appeared.",
      },
    ],
  },
  {
    slug: "the-daily-three-retrieval-practice",
    title: "The 10-minute habit that beats three-hour cramming",
    description:
      "Retrieval practice is the most evidence-backed study technique there is. Here's the science, and how the Daily Three builds it into your day.",
    date: "2026-07-11",
    readMinutes: 4,
    tag: "Study science",
    blocks: [
      {
        kind: "p",
        text: "Here's the uncomfortable finding from decades of learning research: re-reading your notes feels productive and does almost nothing. The thing that actually moves marks is retrieval, forcing your brain to pull the answer out, unaided, and finding out immediately whether it was right.",
      },
      {
        kind: "p",
        text: "Psychologists call it the testing effect, and it's one of the most replicated results in the field. Every time you retrieve a fact under mild pressure, the memory gets easier to retrieve next time. Reading is input. Retrieval is training.",
      },
      { kind: "h2", text: "Why three questions, why daily" },
      {
        kind: "p",
        text: "Because the habit you keep beats the marathon you abandon. The Daily Three in your StudyLand serves three questions a day drawn from your subjects' VERY HIGH and HIGH forecast topics, marked instantly, worked solutions included, streak on the line. Ten minutes, every day, aimed exactly where the 2026 paper is most likely to pay.",
      },
      {
        kind: "ul",
        items: [
          "Questions come from the same bank as your Sure Questions Vault topics, practice where the forecast points.",
          "Anything you miss is saved to your mistake notebook automatically, and comes back later until you've beaten it twice.",
          "The 'How sure?' tap builds calibration, knowing the difference between what you know and what you think you know.",
        ],
      },
      {
        kind: "callout",
        text: "A wrong answer you were SURE about is the most valuable thing the Daily Three can give you. That's not carelessness, that's a concept gap wearing a disguise, and now it's flagged.",
      },
      {
        kind: "cta",
        label: "Start your streak in StudyLand",
        href: "/account",
        note: "Included with every StudyLah subject.",
      },
    ],
  },
  {
    slug: "mistake-notebook-cuo-ti-ben",
    title: "The mistake notebook top scorers swear by",
    description:
      "Ask a straight-A student for their secret and many will show you a battered notebook of every question they ever got wrong. Yours now keeps itself.",
    date: "2026-07-11",
    readMinutes: 4,
    tag: "Study science",
    blocks: [
      {
        kind: "p",
        text: "Walk into any top junior college and ask the A-graders how they revise. A surprising number will pull out the same thing: a \"wrong-answer book\". Every question they missed, copied out by hand, with a note on why they missed it. Before every exam, they revise the notebook, not the textbook.",
      },
      {
        kind: "p",
        text: "The logic is brutal and correct: your mistakes are a map of exactly where your marks are leaking. Revising what you already know feels good and earns nothing. The notebook forces your attention onto the 10% that's actually costing you.",
      },
      { kind: "h2", text: "The upgrade: a notebook that keeps itself" },
      {
        kind: "ul",
        items: [
          "Every question you miss in the Daily Three or a Predict-your-mark check is saved automatically, question, your answer, the correct answer, worked solution.",
          "You classify WHY you lost the mark: careless slip, concept gap, method, or time. The why matters more than the what.",
          "Missed questions resurface in your daily practice on a spaced schedule. Answer one correctly twice in a row and it clears itself, beaten for good.",
          "Add your own entries from school papers and prelims, so everything leaking marks lives in one place.",
        ],
      },
      {
        kind: "callout",
        text: "The classification step is where the marks are. \"Careless\" three times on the same topic isn't careless, it's a concept gap, and the notebook makes that pattern impossible to ignore.",
      },
      {
        kind: "cta",
        label: "Open your mistake notebook",
        href: "/account/mistakes",
        note: "In StudyLand, included with every subject.",
      },
    ],
  },
  {
    slug: "marks-at-risk-explained",
    title: "Marks at Risk: revision as buying back marks",
    description:
      "A to-do list tells you what's left. The Marks at Risk meter tells you what it's costing you, and watching the number fall changes how revision feels.",
    date: "2026-07-11",
    readMinutes: 5,
    tag: "StudyLand",
    blocks: [
      {
        kind: "p",
        text: "Most revision planners show you a list of topics and a percentage bar. Useful, but it answers the wrong question. You don't care what fraction of topics you've ticked, you care how many MARKS are still exposed if the paper lands the way the data says it usually does.",
      },
      {
        kind: "p",
        text: "That's what the Marks at Risk meter models. Every topic in your subject carries a weight based on its forecast tier, the tiers past papers concentrate their marks on weigh the most. Cross that with your own study-plan status and your unresolved mistakes, and you get one number per subject: roughly how much of a typical 100-mark paper is still in play.",
      },
      { kind: "h2", text: "Why a falling number beats a growing checklist" },
      {
        kind: "p",
        text: "Tick a VERY HIGH topic to Confident and you'll see it: the number drops. Clear a mistake, it drops again. Revision stops being an endless list and becomes the same thing it is on results day, marks, recovered one session at a time. Small wins you can see are what keep a streak alive in week six.",
      },
      { kind: "h2", text: "And when you're behind: the rescue plan" },
      {
        kind: "p",
        text: "Every student hits the moment where the ideal plan is dead. The rescue plan is built for exactly that: it takes only your VERY HIGH and HIGH topics that aren't banked yet, ranks them by marks recovered per hour of effort, and lays them out day by day until your first paper. Printable, honest about what it protects, and calm about what it lets go.",
      },
      {
        kind: "callout",
        text: "The meter is a model built to rank your effort, not a prediction or promise about your actual paper. That caveat is on every screen it appears on, because honesty is the whole brand.",
      },
      {
        kind: "cta",
        label: "See your Marks at Risk",
        href: "/account/progress",
        note: "Live in StudyLand for every subject you own.",
      },
    ],
  },
  {
    slug: "predict-your-mark-what-it-tells-you",
    title: "What a 10-question check can (and can't) tell you",
    description:
      "Predict your mark is free, takes seven minutes, and gives you an indicative grade band. Here's exactly how seriously to take it.",
    date: "2026-07-11",
    readMinutes: 4,
    tag: "Predict your mark",
    blocks: [
      {
        kind: "p",
        text: "Predict your mark is a ten-question check on the topics our forecast rates most likely for your 2026 paper, VERY HIGH and HIGH tier, mixed. It's auto-marked, timed at seven minutes, and ends with a score, an indicative grade band, and worked solutions for everything you missed.",
      },
      { kind: "h2", text: "What it CAN tell you" },
      {
        kind: "ul",
        items: [
          "Where you stand today on the topics most likely to matter, not on the whole syllabus, on the part the data says pays first.",
          "Which kind of marks you're dropping: knowledge gaps versus method and precision.",
          "Whether you're improving, retake it after two weeks of work and the trend line in StudyLand tells the truth.",
        ],
      },
      { kind: "h2", text: "What it CAN'T tell you" },
      {
        kind: "p",
        text: "Your actual grade. Ten questions is a sample, your real paper is hours long, and exam day has variables no model sees. That's why the result is always framed as an indicative estimate on these topics, never a promise. Anyone who promises you a grade from a quiz is selling something dishonest.",
      },
      {
        kind: "callout",
        text: "Use it the way a doctor uses a blood-pressure cuff: a fast, cheap reading that tells you where to look next, not the full diagnosis.",
      },
      {
        kind: "cta",
        label: "Predict your mark, free",
        href: "/diagnostic",
        note: "All 22 subjects · 10 questions · instant marking.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function allPosts(): BlogPost[] {
  return [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
}
