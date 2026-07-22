import type { LessonStep } from "@/lib/lesson-steps";

// The bite-sized lesson layer. A topic is broken into small subconcepts; each
// one teaches a little, then tests it with a question, so a student learns the
// idea before facing exam questions. Keyed by topicKey (the same keys the
// teaching packs use), so the same content serves Pure, Science and N-Level.

export interface Subconcept {
  id: string; // "t2.1"
  code: string; // "T2.1"
  title: string; // "Distance vs displacement"
  blurb: string; // one line shown on the box
  steps: LessonStep[]; // teach, then test (concept + a question + insight)
}

const KINEMATICS: Subconcept[] = [
  {
    id: "t2.1",
    code: "T2.1",
    title: "Distance vs displacement",
    blurb: "Path length versus the straight line, with direction",
    steps: [
      {
        kind: "concept",
        heading: "Two ways to measure a journey",
        body: "Distance is the total length of the path you actually travel. It is a scalar, so it has size only. Displacement is the straight line from where you started to where you finished, measured in a stated direction. It is a vector, so it has size and direction.",
      },
      {
        kind: "choice",
        question: "A jogger runs 300 m east, then turns and runs 100 m west. What is her displacement?",
        options: ["400 m", "200 m east", "200 m west", "0 m"],
        correct: 1,
        ask: "She ends up to the east of where she began. Take east as positive, then work out three hundred minus one hundred. Which option is that?",
        hints: [
          "Displacement is the straight line from start to finish, with a direction.",
          "Three hundred metres east minus one hundred metres west leaves two hundred metres to the east.",
        ],
        explain: "Her displacement is 200 m east, because 300 m east minus 100 m west leaves 200 m east. Her distance, the whole path, is 400 m.",
      },
      {
        kind: "insight",
        body: "If you finish exactly where you started, your displacement is zero, even though your distance is not.",
      },
    ],
  },
  {
    id: "t2.2",
    code: "T2.2",
    title: "Speed vs velocity",
    blurb: "Speed is a scalar; velocity is speed with a direction",
    steps: [
      {
        kind: "concept",
        heading: "Adding a direction to speed",
        body: "Speed is how much distance you cover each second. It is a scalar. Velocity is displacement per second, which is speed in a stated direction. It is a vector. Both are measured in metres per second.",
      },
      {
        kind: "classify",
        prompt: "Sort each quantity as scalar or vector.",
        bins: ["Scalar", "Vector"],
        items: [
          { text: "speed", bin: 0 },
          { text: "velocity", bin: 1 },
          { text: "distance", bin: 0 },
          { text: "displacement", bin: 1 },
        ],
        ask: "Tap a quantity, then the bin it belongs in. If it needs a direction to make sense, it is a vector.",
        hints: [
          "Speed and distance have size only, so they are scalars.",
          "Velocity and displacement carry a direction, so they are vectors.",
        ],
        explain: "Speed and distance are scalars. Velocity and displacement are vectors, because they carry a direction.",
      },
      {
        kind: "insight",
        body: "Two cars at the same speed but heading opposite ways have different velocities, because velocity includes direction.",
      },
    ],
  },
  {
    id: "t2.3",
    code: "T2.3",
    title: "Acceleration",
    blurb: "How quickly velocity changes each second",
    steps: [
      {
        kind: "concept",
        heading: "How quickly velocity changes",
        body: "Acceleration is the change in velocity each second. It is a vector. In symbols, a = (v - u) / t, where u is the starting velocity and v is the final velocity. An object accelerates whenever its speed changes, its direction changes, or both.",
      },
      {
        kind: "slider",
        prompt: "A car speeds up from 12 m/s to 20 m/s in 4 s. Find its acceleration.",
        min: 0,
        max: 5,
        step: 0.1,
        unit: " m/s^2",
        start: 0.5,
        targetMin: 1.9,
        targetMax: 2.1,
        ask: "Use change in velocity over time. Twenty take away twelve, then divide by four. Slide to the value.",
        hints: [
          "The change in velocity is twenty minus twelve, which is eight.",
          "Eight divided by four is two.",
        ],
        explain: "The acceleration is 2 metres per second squared: the velocity gains two metres per second every second.",
      },
      {
        kind: "insight",
        body: "A car turning a corner at steady speed is still accelerating, because its direction keeps changing.",
      },
    ],
  },
];

// topicKey -> its subconcepts. Kinematics shares the pure/science key
// "t2-kinematics"; the N-Level key is "kinematics".
const SUBCONCEPTS: Record<string, Subconcept[]> = {
  "t2-kinematics": KINEMATICS,
  kinematics: KINEMATICS,
};

export function subconceptsFor(topicKey: string): Subconcept[] | undefined {
  return SUBCONCEPTS[topicKey];
}
