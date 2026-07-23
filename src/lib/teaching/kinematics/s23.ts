import type { Subconcept } from "@/lib/teaching/subconcepts";

export const BOXES: Subconcept[] = [
  {
    id: "t2.3",
    code: "T2.3",
    title: "Average speed",
    blurb: "One steady number for a whole up-and-down journey",
    steps: [
      {
        kind: "concept",
        heading: "Why average speed",
        figure: "fig-02-04-uturn-journey",
        body: "Real journeys are rarely at one *steady speed*. A vehicle speeds up, slows down, and sometimes stops. *Average speed* sums up the whole trip in a *single number*.",
        say: "Look at the diagram. The dots on the straight track mark three points, A, C and B, and the blue arrows show a journey that runs six hundred metres from A to B, then turns around and comes two hundred and forty metres back to C, while the yellow arrow underneath marks the straight line from A to C. Now think of that trip as a real bus ride. It never holds one steady speed: it pulls away, it crawls in traffic, it waits at the lights, then it speeds off again. So a single speed reading tells you almost nothing about the trip as a whole. Average speed fixes that. It gives you one fair number for the entire journey, as if you had travelled the whole way at that steady pace.",
      },
      {
        kind: "concept",
        heading: "The formula",
        body: "You add up all the *distance* for the trip, add up all the *time*, and *divide*.",
        formula: {
          latex: "\\text{average speed} = \\dfrac{\\text{total distance travelled}}{\\text{total time taken}}",
          where: [
            { sym: "\\text{distance}", meaning: "total path travelled", unit: "m" },
            { sym: "\\text{time}", meaning: "total time taken", unit: "s" },
          ],
        },
        say: "Here is the rule. Average speed equals the total distance travelled divided by the total time taken. Notice it is the totals that matter, not any one part. Add up every metre you covered, add up every second the trip took, including any time spent stopped, and then divide the distance by the time. That last point catches people out: a rest stop still counts toward the total time.",
      },
      {
        kind: "concept",
        heading: "Work in SI units",
        body: "Convert to *metres* and *seconds* before you divide. *Minutes* must become seconds, so 5 minutes is 5 times 60, which is 300 s.",
        say: "One habit will save you marks: always work in the base units, metres and seconds, before you divide. Times are often given in minutes, so turn every minute into sixty seconds first. Five minutes becomes three hundred seconds. Do this conversion at the start, and your final answer lands neatly in metres per second, exactly the unit the examiner wants.",
      },
      {
        kind: "choice",
        question: "A cyclist rides at a steady 8 m/s for the first 5 minutes. How far does she travel in that part?",
        options: ["40 m", "2400 m", "480 m", "1600 m"],
        correct: 1,
        ask: "First turn five minutes into seconds, so five times sixty. Then multiply by eight metres per second. Which option is that?",
        hints: [
          "Five minutes is five times sixty, which is three hundred seconds.",
          "Distance is speed times time, so eight times three hundred.",
        ],
        working: [
          { label: "Formula", latex: "d = v \\times t" },
          { label: "Substitute", latex: "d = 8 \\times (5 \\times 60)" },
          { label: "Answer", latex: "d = 2400\\ \\text{m}" },
        ],
        explain: "She travels two thousand four hundred metres, because eight metres per second times three hundred seconds is two thousand four hundred metres.",
      },
      {
        kind: "order",
        prompt: "Put the steps to find the cyclist's average speed in order.",
        items: [
          "Convert each time from minutes to seconds",
          "Find the distance for each part with speed times time",
          "Add the parts to get total distance and total time",
          "Divide total distance by total time",
          "State the answer in m/s",
        ],
        ask: "Think about what you must know before you can divide. Put the steps in the right order.",
        hints: [
          "You cannot divide until you have both totals.",
          "Convert the units first, then work out each distance.",
        ],
        explain: "Convert the times to seconds, find each part's distance, add up the totals, divide total distance by total time, then state the answer in metres per second.",
      },
      {
        kind: "slider",
        prompt: "Total distance is 5280 m and total time is 600 s. Set the average speed in m/s.",
        min: 0,
        max: 12,
        step: 0.1,
        unit: "m/s",
        start: 6,
        targetMin: 8.7,
        targetMax: 8.9,
        ask: "Average speed is total distance divided by total time, so five thousand two hundred and eighty divided by six hundred. Slide to that value.",
        hints: [
          "Divide five thousand two hundred and eighty by six hundred.",
          "The answer is a little under nine metres per second.",
        ],
        working: [
          { label: "Formula", latex: "\\text{average speed} = \\dfrac{\\text{total distance}}{\\text{total time}}" },
          { label: "Substitute", latex: "\\text{average speed} = \\dfrac{5280}{600}" },
          { label: "Answer", latex: "\\text{average speed} = 8.8\\ \\text{m/s}" },
        ],
        explain: "The average speed is eight point eight metres per second, because five thousand two hundred and eighty metres divided by six hundred seconds is eight point eight.",
      },
      {
        kind: "choice",
        question: "The cyclist stops to rest for 1 minute at a junction. How does that rest affect her average speed?",
        options: [
          "It has no effect at all",
          "It raises the average speed",
          "It lowers the average speed",
          "It changes the total distance",
        ],
        correct: 2,
        ask: "The rest adds time but no extra distance. If the bottom of the fraction grows while the top stays the same, what happens to the result?",
        hints: [
          "A rest adds to the total time but not the total distance.",
          "Dividing the same distance by a larger time gives a smaller answer.",
        ],
        explain: "The rest lowers the average speed, because it adds sixty seconds to the total time while adding no distance, so the same distance is shared over more time.",
      },
      {
        kind: "insight",
        body: "*Average speed* is not the average of the separate speeds. Always go back to *total distance* over *total time*.",
        say: "Here is the trap to remember. Average speed is almost never just the middle of the speeds you were given. You cannot simply add eight and twelve and halve it. Always return to the definition: total distance over total time, counting every stop. Trust the totals, and you will get it right every time.",
      },
    ],
  },
];
