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
        heading: "Distance",
        body: "Distance is the total length of the path you actually travel. It is a scalar, so it has size only, with no direction. If you walk 3 m forward and 3 m back, the distance is 6 m.",
        say: "Let us start with distance. Distance is simply how far you actually travel, adding up every step, no matter which way you go. So if you walk three metres away and then three metres back, your feet have covered six metres in total. Distance only counts the ground covered, never the direction.",
      },
      {
        kind: "concept",
        heading: "Displacement",
        body: "Displacement is the straight line from where you started to where you finished, in a stated direction. It is a vector, so it has size and direction. Walk 3 m forward then 3 m back and the displacement is zero, because you end where you began.",
        say: "Now, displacement is different. Displacement only cares about where you end up compared to where you began, in a straight line, and it comes with a direction. Walk three metres out and three metres back, and your displacement is zero, because you finished exactly where you started. The distance was six metres, but the displacement is zero.",
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
        say: "So here is the one thing to hold onto. If you come back to where you started, your displacement is zero, even though you have covered a real distance along the way.",
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
        heading: "Speed",
        body: "Speed is how much distance you cover each second. It is a scalar, so it has size only. Its unit is the metre per second.",
        say: "Speed tells you how quickly you cover distance. It is just distance divided by the time taken, and it has no direction attached. We measure it in metres per second.",
      },
      {
        kind: "concept",
        heading: "Velocity",
        body: "Velocity is displacement per second, which is speed in a stated direction. It is a vector, so it has size and direction. Its unit is also the metre per second.",
        say: "Velocity is speed with a direction added on. It is displacement each second, so it tells you both how fast you are going and which way. Same units, metres per second, but now the direction matters.",
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
        say: "Picture two cars, both doing fifty on the same road but driving in opposite directions. Same speed, but different velocities, because velocity carries the direction with it.",
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
        heading: "What acceleration is",
        body: "Acceleration is the change in velocity each second. It is a vector. In symbols, a = (v - u) / t, where u is the starting velocity, v is the final velocity, and t is the time taken.",
        say: "Acceleration is how quickly your velocity is changing every second. In symbols, it is the final velocity minus the starting velocity, all divided by the time it took. That is the whole idea.",
      },
      {
        kind: "concept",
        heading: "Three ways to accelerate",
        body: "An object accelerates whenever its speed changes, its direction changes, or both change. So even a car going round a bend at steady speed is accelerating, because its direction keeps changing.",
        say: "Now here is the part that surprises people. An object is accelerating if its speed changes, if its direction changes, or if both change. So a car going around a bend at a steady speed is still accelerating, because its direction keeps changing the whole way round.",
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
        body: "Acceleration is about how velocity changes, not how big it is. A slow object can have a large acceleration.",
        say: "The key thing to remember is that acceleration is about the change in velocity, not how big the velocity already is. Even a slow object can be accelerating very hard.",
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
