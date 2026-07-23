import type { Subconcept } from "@/lib/teaching/subconcepts";

// T1 Measurement, section 3. Grounded in KB Chapter 01 (Measurement) section on measuring length.
// Apparatus/scale figures follow the T1 colour note: object being measured = white, rulers/scales/
// stands/leader guides = grey, correct tick and digital readout = green, wrong cross = red.

export const BOXES: Subconcept[] = [
  {
    id: "t1.3",
    code: "T1.3",
    title: "Measuring length",
    blurb: "Choosing an instrument for length and reading it without parallax or zero errors",
    steps: [
      {
        kind: "concept",
        heading: "Instruments for length",
        figure: "fig-01-07-digital-calipers",
        body: "The SI unit of length is the *metre*. Choose the instrument by size: a *measuring tape* for several metres, a *metre rule* for a few centimetres up to about 1 metre, and *digital calipers* for small objects up to about 15 centimetres.",
        say: "The picture shows a pair of digital calipers in white and grey metal. Grey labels point to the outside jaws that grip an object from the outside, the inside jaws that measure across a hole, and the tail that slides out to check a depth. A grey locking screw holds a reading still, and the green digital display reads 0.00. Reach for a tape over several metres, a metre rule up to about 1 metre, and calipers for small solid objects up to about 15 centimetres.",
      },
      {
        kind: "concept",
        heading: "The micrometer screw gauge",
        figure: "fig-01-08-micrometer",
        body: "For very small lengths, such as the *diameter* of a *wire*, use a *digital micrometer screw gauge*. It measures from about 0 to 2.5 centimetres.",
        say: "This is a digital micrometer screw gauge, drawn in white and grey metal. The object sits in the gap between the fixed grey anvil and the moving spindle. Grey labels mark the lock that holds the jaws, the thimble you turn to close the gap, and the ratchet that clicks so you never overtighten. The green digital display reads 0.000. It is the tool for the tiniest lengths, like the thickness of a wire.",
      },
      {
        kind: "concept",
        heading: "Parallax error",
        figure: "fig-01-02-parallax-error",
        body: "A *parallax error* happens when the eye is not directly above the mark. Read a scale with your *line of sight* at *90 degrees* to it, looking straight down.",
        say: "The figure shows a grey ruler marked from 0 to 4 centimetres. A green tick marks the correct eye position, directly above the mark, with a grey line of sight dropping straight down at 90 degrees. Red crosses mark the wrong positions, where the eye looks in from an angle to one side. Reading from an angle shifts the value and gives a parallax error.",
      },
      {
        kind: "concept",
        heading: "Zero error",
        figure: "fig-01-04-zero-error",
        body: "A *zero error* occurs when the scale does not read 0 where the object begins. A *positive zero error* reads too large, and a *negative zero error* reads too small.",
        say: "This figure has 2 stacked panels, each with a grey ruler and a white object. In the top half the white edge sits just after the 0 mark, so the scale reads too large: that is a positive zero error. In the bottom half the white edge sits before the 0 mark, so the scale reads too small: that is a negative zero error. You can dodge both by measuring from a clear mark other than 0 and subtracting.",
      },
      {
        kind: "choice",
        question: "A block lies along a rule. One end sits at the 3.0 cm mark and the other at the 5.4 cm mark. What is the length of the block?",
        options: ["2.4 cm", "8.4 cm", "5.4 cm", "1.4 cm"],
        correct: 0,
        ask: "Subtract the near reading from the far reading, so work out 5.4 - 3.0.",
        hints: [
          "The length is the far reading minus the near reading.",
          "5.4 - 3.0 is 2.4, and the answer is a length in centimetres.",
        ],
        working: [
          { label: "Formula", latex: "L = x_2 - x_1" },
          { label: "Substitute", latex: "L = 5.4 - 3.0" },
          { label: "Answer", latex: "L = 2.4\\ \\text{cm}" },
        ],
        explain: "The length is 2.4 centimetres, because 5.4 centimetres minus 3.0 centimetres is 2.4 centimetres. Measuring from a mark other than 0 like this dodges a worn end of the rule.",
      },
      {
        kind: "choice",
        question: "To avoid a parallax error when reading a metre rule, where should your eye be?",
        options: [
          "Directly above the mark, looking straight down",
          "To the left of the mark",
          "To the right of the mark",
          "As far from the rule as possible",
        ],
        correct: 0,
        ask: "A parallax error comes from looking at an angle. Which position looks straight down at 90 degrees?",
        hints: [
          "Looking in from either side reads the scale off by a little.",
          "Line your eye up directly over the mark so the line of sight is at 90 degrees.",
        ],
        explain: "Your eye should be directly above the mark, looking straight down at 90 degrees, so the line of sight does not shift the reading.",
      },
      {
        kind: "classify",
        prompt: "Sort each faulty instrument by the type of zero error it shows.",
        bins: ["Positive zero error", "Negative zero error"],
        items: [
          { text: "With the jaws closed, the display reads 0.03 cm", bin: 0 },
          { text: "The object edge sits just after the 0 mark", bin: 0 },
          { text: "With the jaws closed, the display reads -0.02 cm", bin: 1 },
          { text: "The object edge sits just before the 0 mark", bin: 1 },
        ],
        ask: "A positive zero error reads too large and a negative one too small. Tap each case and drop it in its bin.",
        hints: [
          "A closed instrument showing a value above 0, or an edge past the 0 mark, reads too large.",
          "A closed instrument showing a value below 0, or an edge before the 0 mark, reads too small.",
        ],
        explain: "A positive zero error reads too large, shown by a closed display above 0 or an edge past the 0 mark. A negative zero error reads too small, shown by a closed display below 0 or an edge before the 0 mark.",
      },
      {
        kind: "match",
        prompt: "Match each instrument to the length it measures best.",
        pairs: [
          { left: "Measuring tape", right: "The length of a running track" },
          { left: "Metre rule", right: "The height of a desk" },
          { left: "Digital calipers", right: "The diameter of a coin" },
          { left: "Micrometer screw gauge", right: "The thickness of a wire" },
        ],
        ask: "Match by size range: the biggest lengths need a tape, and the tiniest need a micrometer.",
        hints: [
          "A tape suits several metres, and a metre rule suits up to about 1 metre.",
          "Calipers suit small objects up to about 15 centimetres, and a micrometer suits the smallest, like a wire.",
        ],
        explain: "A measuring tape suits several metres like a track, a metre rule suits up to about 1 metre like a desk, digital calipers suit small objects like a coin, and a micrometer suits the smallest, like a wire.",
      },
      {
        kind: "insight",
        body: "Pick the instrument to fit the *size*, then guard the reading against *parallax error* and *zero error* by looking straight down and checking the *zero* first.",
        say: "Here is the takeaway. First match the instrument to the size of the thing, from a tape for a track down to a micrometer for a wire. Then protect the reading: look straight down to beat parallax error, and check what the scale shows before you start to catch a zero error. Repeat the measurement and average to be surer still.",
      },
    ],
  },
];
