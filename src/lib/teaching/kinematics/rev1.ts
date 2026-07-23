import type { Subconcept } from "@/lib/teaching/subconcepts";

export const BOXES: Subconcept[] = [
  {
    id: "t2.rev1",
    code: "R1",
    title: "Revision 1",
    blurb: "Checkpoint: distance, speed and velocity",
    kind: "revision",
    steps: [
      // 1
      {
        kind: "choice",
        question: "An athlete runs one full lap of a 400 m track and finishes at the exact point where she started. What is her displacement?",
        options: ["400 m", "200 m", "0 m", "800 m"],
        correct: 2,
        ask: "Displacement is the straight line from start to finish. She finished where she began. So how far is she from her start?",
        hints: [
          "Displacement measures start to finish, not the path.",
          "She ends exactly where she started.",
        ],
        explain: "Her displacement is zero, because she finished at the very point she started from, even though the distance she ran was four hundred metres.",
      },
      // 2
      {
        kind: "choice",
        question: "A train covers 95 km along a straight track in 40 min. What is its speed in m/s?",
        options: ["2.4 m/s", "23.8 m/s", "158 m/s", "39.6 m/s"],
        correct: 3,
        ask: "First change ninety five kilometres into metres and forty minutes into seconds, then divide distance by time. What do you get?",
        hints: [
          "Ninety five kilometres is ninety five thousand metres.",
          "Forty minutes is two thousand four hundred seconds.",
        ],
        working: [
          { label: "Formula", latex: "v = \\dfrac{d}{t}" },
          { label: "Substitute", latex: "d = 95\\ \\text{km} = 95000\\ \\text{m}" },
          { label: "Substitute", latex: "t = 40\\ \\text{min} = 2400\\ \\text{s}" },
          { label: "Substitute", latex: "v = \\dfrac{95000}{2400}" },
          { label: "Answer", latex: "v = 39.6\\ \\text{m/s}" },
        ],
        explain: "The speed is about thirty nine point six metres per second, because ninety five thousand metres divided by two thousand four hundred seconds is roughly thirty nine point six.",
      },
      // 3
      {
        kind: "choice",
        question: "Which one of these is a vector quantity?",
        options: ["distance", "speed", "velocity", "time"],
        correct: 2,
        ask: "A vector needs a direction to make full sense. Which of these carries a direction?",
        hints: [
          "Distance and speed have size only.",
          "Velocity is speed in a stated direction.",
        ],
        explain: "Velocity is the vector, because it is speed in a stated direction. Distance, speed and time are scalars, with size only.",
      },
      // 4
      {
        kind: "choice",
        question: "A cyclist covers a total of 5280 m in a total time of 600 s. What is her average speed?",
        options: ["0.11 m/s", "8.8 m/s", "880 m/s", "48 m/s"],
        correct: 1,
        ask: "Average speed is total distance divided by total time. Five thousand two hundred and eighty divided by six hundred. Which option is that?",
        hints: [
          "Average speed is total distance over total time.",
          "Five thousand two hundred and eighty divided by six hundred is eight point eight.",
        ],
        working: [
          { label: "Formula", latex: "v = \\dfrac{d}{t}" },
          { label: "Substitute", latex: "v = \\dfrac{5280}{600}" },
          { label: "Answer", latex: "v = 8.8\\ \\text{m/s}" },
        ],
        explain: "Her average speed is eight point eight metres per second, because five thousand two hundred and eighty metres divided by six hundred seconds is eight point eight.",
      },
      // 5
      {
        kind: "choice",
        question: "Which statement about velocity is correct?",
        options: [
          "Velocity is the rate of change of distance.",
          "Velocity is a scalar quantity.",
          "Velocity is displacement per unit time.",
          "Velocity is always equal to the average speed.",
        ],
        correct: 2,
        ask: "Velocity is built from displacement, not distance, and it carries a direction. Which statement matches that?",
        hints: [
          "Velocity uses displacement, not distance.",
          "Velocity is a vector, so it has a direction.",
        ],
        explain: "Velocity is displacement per unit time. It uses displacement, not distance, and because it has a direction it is a vector, so it can differ from the average speed.",
      },
      // 6 interactive: classify
      {
        kind: "classify",
        prompt: "Sort each quantity as a scalar or a vector.",
        bins: ["Scalar", "Vector"],
        items: [
          { text: "distance", bin: 0 },
          { text: "displacement", bin: 1 },
          { text: "speed", bin: 0 },
          { text: "velocity", bin: 1 },
        ],
        ask: "If a quantity needs a direction to make sense, it is a vector. Tap each quantity, then drop it in the right bin.",
        hints: [
          "Distance and speed have size only.",
          "Displacement and velocity carry a direction.",
        ],
        explain: "Distance and speed are scalars, with size only. Displacement and velocity are vectors, because each one carries a direction.",
      },
      // 7 interactive: order
      {
        kind: "order",
        prompt: "Put the steps to find an average speed in the correct order.",
        items: [
          "Add up the total distance travelled",
          "Add up the total time taken",
          "Divide total distance by total time",
          "State the answer with its unit",
        ],
        ask: "Think about what you must know before you can divide. Put the steps in order.",
        hints: [
          "You need both totals before you divide.",
          "Average speed is total distance over total time.",
        ],
        explain: "Find the total distance, find the total time, divide distance by time, then state the answer in metres per second.",
      },
      // 8 interactive: cloze
      {
        kind: "cloze",
        prompt: "Complete the definitions by dragging the right word into each blank.",
        segments: [
          "",
          " is the total length of the path travelled, while ",
          " is the straight-line distance in a stated direction.",
        ],
        bank: ["Distance", "Displacement", "Speed", "Velocity"],
        answer: ["Distance", "Displacement"],
        ask: "One word means the whole path length. The other means the straight line from start to finish, in a direction. Fill the two blanks.",
        hints: [
          "The total path length is distance.",
          "The straight line with a direction is displacement.",
        ],
        explain: "Distance is the total length of the path travelled. Displacement is the straight-line distance from start to finish in a stated direction.",
      },
      // 9 interactive: spoterror
      {
        kind: "spoterror",
        prompt: "A student finds the average velocity of a jogger whose displacement is 360 m east in 720 s. Tap the line with the mistake.",
        lines: [
          "Take east as positive: displacement = 600 - 240 = 360 m",
          "Total time = 12 min = 720 s",
          "average velocity = distance / time",
          "average velocity = 360 / 720 = 0.5 m/s due east",
        ],
        errorLine: 2,
        ask: "Look at the formula line. Average velocity is built from displacement, not distance. Which line names the wrong quantity?",
        hints: [
          "Average velocity uses displacement over time.",
          "The word distance in the formula line is wrong.",
        ],
        explain: "The formula line is wrong: average velocity is displacement divided by time, not distance divided by time. The numbers used are the displacement, so the final answer is still correct.",
      },
      // 10 interactive: match
      {
        kind: "match",
        prompt: "Match each quantity to what it measures.",
        pairs: [
          { left: "Distance", right: "Total length of the path travelled" },
          { left: "Displacement", right: "Straight line from start to finish, with direction" },
          { left: "Speed", right: "Distance travelled per unit time" },
          { left: "Velocity", right: "Displacement per unit time" },
        ],
        ask: "Two of these are about how far, and two are about how fast. Match each quantity to its meaning.",
        hints: [
          "Speed and velocity are both per unit time.",
          "Displacement and velocity both carry a direction.",
        ],
        explain: "Distance is the total path length, displacement is the straight line with a direction, speed is distance per unit time, and velocity is displacement per unit time.",
      },
      // 11 open
      {
        kind: "open",
        prompt: "An object travels at 18 m/s due north for 20 min from point X, then at 24 m/s due east for 15 min to reach point Y. The straight-line distance from X to Y is 27.0 km. Find the average speed and the average velocity, both in km/h.",
        modelAnswer: "First find each leg. The northward leg is eighteen metres per second times one thousand two hundred seconds, which is twenty one thousand six hundred metres, or twenty one point six kilometres. The eastward leg is twenty four metres per second times nine hundred seconds, which is also twenty one point six kilometres. The total distance is forty three point two kilometres. The total time is thirty five minutes, which is thirty five over sixty of an hour. The average speed is forty three point two divided by that time, about seventy four point one kilometres per hour. The average velocity uses the straight line displacement of twenty seven kilometres, so it is twenty seven divided by the same time, about forty six point three kilometres per hour, in the direction from X to Y.",
        marks: [
          "Leg 1 = 18 x 1200 = 21600 m = 21.6 km; Leg 2 = 24 x 900 = 21600 m = 21.6 km.",
          "Total distance = 43.2 km; total time = 35 min = 35/60 h.",
          "Average speed = 43.2 / (35/60) = 74.1 km/h.",
          "Average velocity = 27.0 / (35/60) = 46.3 km/h in the direction X to Y.",
        ],
        ask: "Work out each leg of the journey in kilometres first, then add them for the total distance. Average speed uses that total distance, but average velocity uses the straight line displacement of twenty seven kilometres. Divide each by the total time in hours.",
      },
      // 12 open
      {
        kind: "open",
        prompt: "A car drives 300 m due north, then 300 m due south, returning to its starting point, in a total time of 40 s. Find its average speed and its average velocity.",
        modelAnswer: "The total distance is three hundred plus three hundred, which is six hundred metres. The average speed is six hundred divided by forty seconds, which is fifteen metres per second. The car ends where it started, so its displacement is zero. The average velocity is therefore zero divided by forty, which is zero metres per second.",
        marks: [
          "Total distance = 300 + 300 = 600 m; average speed = 600 / 40 = 15 m/s.",
          "Displacement = 0 m, because the car returns to its start.",
          "Average velocity = 0 / 40 = 0 m/s.",
        ],
        ask: "Average speed uses the total distance, which is six hundred metres. Average velocity uses the displacement. The car returns to where it started, so think carefully about what its displacement is before you divide by the time.",
      },
    ],
  },
];
