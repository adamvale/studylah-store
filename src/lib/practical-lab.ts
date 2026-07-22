import type { IconName } from "@/components/icons";
import type { LessonStep } from "@/lib/lesson-steps";
import { PLAYGROUND_SCIENCE } from "@/lib/playground-lessons";

// Practical Lab: trains the PRACTICAL paper for the sciences (the skills a lab
// exam tests, which are the hardest to self-study: apparatus, measurement,
// observations and deductions, tables and graphs, sources of error). Runs on
// the same interactive lesson engine as Life Skills. Seed content is real and
// compact; Coddy expands it under this shape, the owner curates.

export interface PracticalLesson {
  key: string; // globally unique, e.g. "chem-qa-1"
  title: string;
  minutes: number;
  steps: LessonStep[];
  // Optional Guru "lab coach" chat seed.
  talkPrompt?: string;
}
export interface PracticalSubject {
  slug: string; // matches a science subject family
  name: string;
  icon: IconName;
  tint: string;
  lessons: PracticalLesson[];
}

export const PRACTICAL_SUBJECTS: PracticalSubject[] = [
  {
    slug: "chemistry",
    name: "Chemistry Practical",
    icon: "flask",
    tint: "from-fuchsia-500/25 to-violet-600/10",
    lessons: [
      {
        key: "chem-qa-1",
        title: "Qualitative analysis: reading a reaction",
        minutes: 5,
        steps: [
          { kind: "concept", heading: "Observe, then deduce", body: "In qualitative analysis you write what you SEE first (colour, precipitate, gas, heat), then what it TELLS you. Markers award the observation and the deduction separately." },
          { kind: "choice", question: "You add sodium hydroxide to a solution and a light blue precipitate forms. Which ion is most likely present?", options: ["Iron(II), Fe^{2+}", "Copper(II), Cu^{2+}", "Zinc, Zn^{2+}"], correct: 1, explain: "A blue precipitate with NaOH points to copper(II). Iron(II) gives a green precipitate; zinc gives a white one that dissolves in excess." },
          { kind: "reveal", prompt: "A white precipitate forms with NaOH and it DISSOLVES in excess NaOH. Which two common ions fit?", answer: "Zinc (Zn^{2+}) and aluminium (Al^{3+}). Both give a white precipitate soluble in excess. You then use the ammonia test to tell them apart." },
          {
            kind: "match",
            ask: "This is a qualitative analysis question. Look at each ion, and think what colour it turns with sodium hydroxide. Tap one on the left, then its partner. What do you think?",
            hints: [
              "Start with copper. Copper solutions are blue, and the precipitate is blue too.",
              "Iron(II) is green and iron(III) is red-brown. Zinc is white and dissolves in excess.",
            ],
            prompt: "Match each ion to what you see when you add sodium hydroxide.",
            pairs: [
              { left: "Copper(II), Cu^{2+}", right: "Blue precipitate" },
              { left: "Iron(II), Fe^{2+}", right: "Green precipitate" },
              { left: "Iron(III), Fe^{3+}", right: "Red-brown precipitate" },
              { left: "Zinc, Zn^{2+}", right: "White, dissolves in excess" },
            ],
            explain: "The colour is the observation, the ion is the deduction. Naming both is where the marks are.",
          },
          { kind: "insight", body: "Write the colour AND whether it dissolves in excess. Half the marks live in that second detail." },
        ],
        talkPrompt: "Quiz me on qualitative analysis cation and anion tests, one at a time, and correct my observations and deductions.",
      },
      {
        key: "chem-titration-1",
        title: "Titration: the marks in the technique",
        minutes: 5,
        steps: [
          { kind: "concept", heading: "Read the burette properly", body: "Read the burette at eye level, from the bottom of the meniscus, to the nearest 0.05 cm^3. A parallax error here quietly costs accuracy marks." },
          { kind: "choice", question: "Your titres are 24.60, 25.10 and 24.55 cm^3. Which should you average for the final answer?", options: ["All three", "24.60 and 24.55 (the concordant pair)", "Only the smallest"], correct: 1, explain: "Use concordant titres, within about 0.10 cm^3 of each other. The 25.10 is an outlier, so average 24.60 and 24.55." },
          {
            kind: "order",
            ask: "Let us think about a titration from start to finish. What do you do first? Put the steps in order.",
            hints: [
              "Before anything, the burette is rinsed with the very solution it will hold.",
              "You take a reading to 2 decimal places at the start, and again at the end.",
            ],
            prompt: "Put a titration in the right order.",
            items: [
              "Rinse the burette with the solution it will hold",
              "Fill it and record the start reading to 2 decimals",
              "Add slowly near the end point, swirling",
              "Stop at the first permanent colour change",
              "Record the final reading to 2 decimals",
            ],
            explain: "Rinse first, read to 2 decimals at both ends, and slow right down near the end point.",
          },
          { kind: "insight", body: "Record every titre to 2 decimal places ending in 0 or 5. Consistency of recording is itself a marked skill." },
        ],
        talkPrompt: "Give me a titration results table with an outlier and ask me which titres to average and why.",
      },
    ],
  },
  {
    slug: "physics",
    name: "Physics Practical",
    icon: "atom",
    tint: "from-sky-500/25 to-violet-600/10",
    lessons: [
      {
        key: "phys-measure-1",
        title: "Measuring instruments and precision",
        minutes: 5,
        steps: [
          { kind: "concept", heading: "Match the tool to the precision", body: "A metre rule reads to 0.1 cm, a vernier caliper to 0.01 cm, a micrometer to 0.01 mm. Choosing the right instrument is a marked decision, not a detail." },
          { kind: "choice", question: "You need the diameter of a thin copper wire. Best instrument?", options: ["Metre rule", "Vernier caliper", "Micrometer screw gauge"], correct: 2, explain: "A thin wire needs the micrometer (0.01 mm). A metre rule is far too coarse for a fraction of a millimetre." },
          { kind: "slider", ask: "A thin wire is 0.24 millimetres across. Drag the micrometer until it reads that. What number do you set it to?", hints: ["A micrometer reads to two decimal places of a millimetre.", "Slide until the reading shows 0.24 mm and turns green."], prompt: "A thin wire is 0.24 mm across. Drag the micrometer to read it.", min: 0, max: 1, step: 0.01, unit: " mm", start: 0.61, targetMin: 0.23, targetMax: 0.25, explain: "A micrometer reads to 0.01 mm, so 0.24 mm carries the right precision for a thin wire." },
          { kind: "reveal", prompt: "How do you reduce the error when measuring the thickness of one sheet of paper?", answer: "Measure many sheets together (say 100), then divide by the number. Measuring a repeated stack and dividing shrinks the error per sheet." },
          { kind: "insight", body: "When one thing is too small to measure well, measure many and divide. This one trick appears across the whole practical paper." },
        ],
        talkPrompt: "Set me a measurement problem and check whether I picked the right instrument and reduced the error correctly.",
      },
      {
        key: "phys-graph-1",
        title: "Tables and graphs that score",
        minutes: 5,
        steps: [
          { kind: "concept", heading: "The table earns marks before the graph", body: "Every column needs a quantity and a unit in the heading, and every reading to a consistent number of decimal places. Sloppy tables lose marks the graph cannot win back." },
          { kind: "choice", question: "Plotting your points, one sits far off the straight trend. What do you do?", options: ["Force the line through it", "Draw the best-fit line through the trend and ignore the anomaly", "Connect the dots point to point"], correct: 1, explain: "A best-fit straight line follows the trend of the majority. An anomaly is left off the line, not forced through, and never a dot-to-dot zigzag." },
          {
            kind: "plot",
            ask: "An object travels 6 metres in 3 seconds. Where does that point go on the graph? Tap to plot it.",
            hints: ["Time is along the bottom, so go to 3 on the horizontal axis.", "Distance is up the side, so go up to 6, then tap where they meet."],
            prompt: "Plot the point for a time of 3 s and a distance of 6 m.",
            xLabel: "t / s",
            yLabel: "d / m",
            xMax: 6,
            yMax: 8,
            targetX: 3,
            targetY: 6,
            explain: "Read the pair as (time, distance): across to 3 s, then up to 6 m. Every point on a graph is read in that order.",
          },
          {
            kind: "tiles",
            ask: "How do we work out the gradient of a straight-line graph? Build the formula from the tiles.",
            hints: ["Gradient compares how much you go up against how much you go across.", "It is the rise divided by the run."],
            prompt: "Build the formula for the gradient of a line.",
            tiles: ["gradient", "=", "rise", "run", "÷", "×"],
            answer: ["gradient", "=", "rise", "÷", "run"],
            explain: "Gradient equals rise divided by run, read from the best-fit line using a large triangle, with units.",
          },
          { kind: "insight", body: "Gradient uses a large triangle read off the LINE, not two raw data points. Big triangle, read from the line, with units." },
        ],
        talkPrompt: "Describe a set of readings and coach me through building the table and finding the gradient with units.",
      },
      {
        key: "phys-circuit-1",
        title: "Circuits: make the lamp light",
        minutes: 4,
        steps: [
          { kind: "concept", heading: "A circuit needs a complete loop", body: "Current only flows when there is an unbroken path from the cell, through the lamp, and back. An open switch anywhere breaks the loop and the lamp stays off." },
          {
            kind: "circuit",
            ask: "Here is a simple circuit. Which switches must you close to light the lamp? Tap them and watch the lamp.",
            hints: ["The lamp only lights when the loop from the cell is complete.", "Both switches in the main loop must be closed. The branch that bypasses the lamp must stay open."],
            prompt: "Close the right switches to light the lamp.",
            switches: [
              { id: "s1", label: "Switch A, in the main loop" },
              { id: "s2", label: "Switch B, in the main loop" },
              { id: "s3", label: "Switch C, shorts across the lamp", shortsLamp: true },
            ],
            needed: ["s1", "s2"],
            explain: "Close A and B to complete the loop through the lamp. Closing C would short the lamp and it would not light.",
          },
          { kind: "insight", body: "Trace the loop with your finger: cell, through every component you want working, and back. A break anywhere means no current." },
        ],
        talkPrompt: "Give me a circuit in words and ask me which switches to close to light the lamp, then check my reasoning.",
      },
    ],
  },
  {
    slug: "biology",
    name: "Biology Practical",
    icon: "leaf",
    tint: "from-emerald-500/25 to-violet-600/10",
    lessons: [
      {
        key: "bio-foodtest-1",
        title: "Food tests: colours and conclusions",
        minutes: 5,
        steps: [
          { kind: "concept", heading: "One reagent, one result", body: "Iodine tests for starch (blue-black), Benedict's for reducing sugar (brick-red on heating), Biuret for protein (violet), ethanol emulsion for fats (cloudy white). Learn the pair: reagent and positive colour." },
          { kind: "choice", question: "A food sample turns Benedict's solution brick-red when heated. What does it contain?", options: ["Starch", "Reducing sugar", "Protein"], correct: 1, explain: "Brick-red with Benedict's on heating means a reducing sugar is present. Starch would need iodine; protein needs Biuret." },
          { kind: "reveal", prompt: "Why must you HEAT the Benedict's test but NOT the Biuret test?", answer: "Benedict's needs heat to react with reducing sugar and change colour. Biuret works at room temperature, and heating it is unnecessary and can spoil the result." },
          { kind: "insight", body: "Always state the starting colour and the final colour. Turned brick-red earns more than red alone." },
        ],
        talkPrompt: "Quiz me on the four food tests, giving me a result and asking what the food contains and why.",
      },
      {
        key: "bio-variables-1",
        title: "Variables and a fair test",
        minutes: 4,
        steps: [
          { kind: "concept", heading: "Change one thing, measure one thing", body: "The independent variable is what you change, the dependent is what you measure, and control variables are everything you keep the same so the test is fair." },
          { kind: "choice", question: "Testing how temperature affects an enzyme, which is the independent variable?", options: ["The rate of reaction", "The temperature", "The pH of the solution"], correct: 1, explain: "Temperature is what you deliberately change, so it is the independent variable. The rate is what you measure (dependent); pH is kept constant (a control)." },
          { kind: "insight", body: "If asked to improve a fair test, name a control variable that was not kept constant. That is where the mark usually hides." },
        ],
        talkPrompt: "Give me an experiment and ask me to name the independent, dependent and control variables, then check my answer.",
      },
    ],
  },
];

// Append Project Playground lessons (Coddy-authored, validated) to each subject.
for (const subject of PRACTICAL_SUBJECTS) {
  const extra = PLAYGROUND_SCIENCE[subject.slug as keyof typeof PLAYGROUND_SCIENCE];
  if (extra) subject.lessons.push(...extra);
}

export function practicalSubject(slug: string): PracticalSubject | undefined {
  return PRACTICAL_SUBJECTS.find((s) => s.slug === slug);
}
export function practicalLesson(lessonKey: string): { subject: PracticalSubject; lesson: PracticalLesson } | undefined {
  for (const subject of PRACTICAL_SUBJECTS) {
    const lesson = subject.lessons.find((l) => l.key === lessonKey);
    if (lesson) return { subject, lesson };
  }
  return undefined;
}
