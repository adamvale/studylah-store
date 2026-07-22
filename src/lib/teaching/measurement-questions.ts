// measurement-questions.ts
// Teaching question bank for O-Level Physics, Physical Quantities, Units and Measurement
// (topicKey "t1-physical-quantities-and-measurement").
// Every wrong option maps to the misconception it reveals (see measurement-misconceptions.ts),
// so the tutor can respond to exactly why the student erred.
// Grounded in StudyLah study notes / Chapter 01 - Physical Quantities, Units and Measurement.md
// walkthrough and explain are spoken by Gugu, so they are written in plain words, no symbols.
// stem and options are shown on screen, so they may use _ for subscript and ^ for superscript.

import type { TeachQuestion } from "@/lib/teaching/types";

export const MEASUREMENT_QUESTIONS: TeachQuestion[] = [
  {
    id: "meas-q-01",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "physical-quantities",
    stem: "A student records the mass of an object as just 4.5. Why is this not a complete physical quantity?",
    figure: "fig-01-01-measurement-anatomy.svg",
    options: [
      "It has no unit, so you cannot tell 4.5 of what.",
      "The number 4.5 is the quantity, so it is already complete.",
      "It should be written as a whole number, not a decimal.",
      "A mass must always be written with a direction as well."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "meas-quantity-1", 2: "meas-quantity-1", 3: "meas-quantity-1" },
    walkthrough: [
      "Every physical quantity has two parts, a number and a unit.",
      "The number tells you how much, and the unit tells you the standard being counted.",
      "Here we only have four point five, with no unit attached.",
      "Four point five grams and four point five kilograms are very different, so without a unit the quantity is incomplete."
    ],
    explain: "A physical quantity needs a number and a unit together. Four point five on its own does not say four point five of what, so it is incomplete. Adding the unit, such as four point five kilograms, finishes the statement. A quantity does not need a direction, that idea belongs to vectors, not to stating a measurement."
  },
  {
    id: "meas-q-02",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "base-vs-derived",
    stem: "Which of the following is a base quantity?",
    figure: null,
    options: ["Time", "Speed", "Density", "Volume"],
    correct: 0,
    distractorMisconceptions: { 1: "meas-base-1", 2: "meas-base-1", 3: "meas-base-1" },
    walkthrough: [
      "A base quantity cannot be built from any other quantities.",
      "The five base quantities are length, mass, time, electric current, and temperature.",
      "Time is on that list, so it is a base quantity.",
      "Speed, density, and volume are all built from other quantities, so they are derived."
    ],
    explain: "Time is one of the five base quantities, along with length, mass, electric current, and temperature. Speed is distance over time, density is mass over volume, and volume is length times length times length, so all three of those are derived, built from other quantities."
  },
  {
    id: "meas-q-03",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "base-vs-derived",
    stem: "Which of the following is a derived quantity?",
    figure: null,
    options: ["Density", "Mass", "Time", "Temperature"],
    correct: 0,
    distractorMisconceptions: { 1: "meas-base-2", 2: "meas-base-2", 3: "meas-base-2" },
    walkthrough: [
      "A derived quantity is built by multiplying or dividing base quantities.",
      "Density is mass divided by volume, so it is built from other quantities.",
      "That makes density a derived quantity.",
      "Mass, time, and temperature cannot be broken down, so they are base quantities."
    ],
    explain: "Density is derived, because it is mass divided by volume. Mass, time, and temperature are three of the five base quantities, so they are fundamental and cannot be built from anything simpler. Picking one of those as derived is the mix up to watch for."
  },
  {
    id: "meas-q-04",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "si-units",
    stem: "What is the SI base unit of mass?",
    figure: null,
    options: ["Kilogram", "Gram", "Newton", "Milligram"],
    correct: 0,
    distractorMisconceptions: { 1: "meas-siunit-mass", 2: "meas-siunit-mass", 3: "meas-siunit-mass" },
    walkthrough: [
      "The five base units are the metre, the kilogram, the second, the ampere, and the kelvin.",
      "Mass is unusual, because its base unit already carries a prefix.",
      "The base unit of mass is the kilogram, not the gram.",
      "The gram and the milligram are smaller units of mass, and the newton is a unit of force, not mass."
    ],
    explain: "The SI base unit of mass is the kilogram, the one base unit that already includes a prefix. The gram and milligram are smaller units of mass, and the newton measures force, not mass, so none of those is the base unit."
  },
  {
    id: "meas-q-05",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "si-units",
    stem: "What is the SI unit of length?",
    figure: null,
    options: ["Metre", "Kilometre", "Centimetre", "Mile"],
    correct: 0,
    distractorMisconceptions: { 1: "meas-siunit-length", 2: "meas-siunit-length", 3: "meas-siunit-length" },
    walkthrough: [
      "Length is one of the five base quantities.",
      "Its SI base unit is the metre.",
      "The kilometre is one thousand metres and the centimetre is a hundredth of a metre, so they are just the metre with a prefix.",
      "The mile is not an SI unit at all."
    ],
    explain: "The SI unit of length is the metre. The kilometre and centimetre are the metre scaled up or down with a prefix, and the mile is not part of the SI system, so the metre is the base unit."
  },
  {
    id: "meas-q-06",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "prefixes",
    stem: "Convert 0.75 m to cm.",
    figure: null,
    options: ["75 cm", "0.0075 cm", "7.5 cm", "750 cm"],
    correct: 0,
    distractorMisconceptions: { 1: "meas-prefix-dir", 2: "meas-prefix-value", 3: "meas-prefix-value" },
    walkthrough: [
      "Going from a plain unit to a prefixed unit, you divide by the prefix's factor.",
      "The factor of centi is ten to the power minus two, which is nought point nought one.",
      "So divide nought point seven five by nought point nought one.",
      "That gives seventy five centimetres, which makes sense because a centimetre is smaller than a metre."
    ],
    explain: "A centimetre is smaller than a metre, so the number should get bigger. Dividing nought point seven five by the factor of centi gives seventy five centimetres. Multiplying instead would give nought point nought zero seven five, the wrong direction, and using the milli or deci factor gives seven hundred and fifty or seven point five, the wrong factor."
  },
  {
    id: "meas-q-07",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "prefixes",
    stem: "Convert 7.4 dm to m.",
    figure: null,
    options: ["0.74 m", "74 m", "0.074 m", "0.0074 m"],
    correct: 0,
    distractorMisconceptions: { 1: "meas-prefix-dir", 2: "meas-prefix-value", 3: "meas-prefix-value" },
    walkthrough: [
      "Going from a prefixed unit back to a plain unit, you multiply by the prefix's factor.",
      "The factor of deci is ten to the power minus one, which is nought point one.",
      "So multiply seven point four by nought point one.",
      "That gives nought point seven four metres, which is smaller, as it should be, because a decimetre is smaller than a metre."
    ],
    explain: "A decimetre is smaller than a metre, so the number should get smaller. Multiplying seven point four by the factor of deci gives nought point seven four metres. Dividing instead would give seventy four, the wrong direction, and using the centi or milli factor gives nought point nought seven four or nought point nought zero seven four, the wrong factor."
  },
  {
    id: "meas-q-08",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "standard-form",
    stem: "Which of these numbers is correctly written in standard form?",
    figure: null,
    options: ["4.73 x 10^-5", "0.63 x 10^3", "12.5 x 10^4", "47 x 10^6"],
    correct: 0,
    distractorMisconceptions: { 1: "meas-stdform-coeff", 2: "meas-stdform-coeff", 3: "meas-stdform-coeff" },
    walkthrough: [
      "Standard form is a number between one and ten, times a power of ten.",
      "Four point seven three lies between one and ten, so that one is correct.",
      "Nought point six three is less than one, so it is not standard form.",
      "Twelve point five and forty seven are both ten or more, so they are not standard form either."
    ],
    explain: "The front number, the coefficient, must be at least one but less than ten. Four point seven three passes, so that is proper standard form. Nought point six three is too small, and twelve point five and forty seven are too big, so those three break the rule."
  },
  {
    id: "meas-q-09",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "standard-form",
    stem: "Express 0.000 58 s in standard form.",
    figure: null,
    options: ["5.8 x 10^-4 s", "5.8 x 10^4 s", "58 x 10^-5 s", "0.58 x 10^-3 s"],
    correct: 0,
    distractorMisconceptions: { 1: "meas-stdform-sign", 2: "meas-stdform-coeff", 3: "meas-stdform-coeff" },
    walkthrough: [
      "Place the decimal point after the first non-zero digit to get five point eight.",
      "Count how far the point moved, which is four places to the right.",
      "Moving to the right makes the power negative, so it is ten to the power minus four.",
      "That gives five point eight times ten to the power minus four seconds."
    ],
    explain: "Moving the point right to reach five point eight is four places, and moving right makes the power negative, so the answer is five point eight times ten to the power minus four. A positive power flips the sign the wrong way, and coefficients of fifty eight or nought point five eight break the rule that the front number sits between one and ten."
  },
  {
    id: "meas-q-10",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "standard-form",
    stem: "Express 73 000 000 J in standard form.",
    figure: null,
    options: ["7.3 x 10^7 J", "7.3 x 10^-7 J", "73 x 10^6 J", "0.73 x 10^8 J"],
    correct: 0,
    distractorMisconceptions: { 1: "meas-stdform-sign", 2: "meas-stdform-coeff", 3: "meas-stdform-coeff" },
    walkthrough: [
      "Place the decimal point after the first digit to get seven point three.",
      "Count how far the point moved, which is seven places to the left.",
      "Moving to the left makes the power positive, so it is ten to the power seven.",
      "That gives seven point three times ten to the power seven joules."
    ],
    explain: "The point moves seven places to the left, and moving left makes the power positive, so the answer is seven point three times ten to the power seven. A negative power would be the wrong sign for a large number, and coefficients of seventy three or nought point seven three break the rule that the front number is between one and ten."
  },
  {
    id: "meas-q-11",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "measuring-length",
    stem: "Which instrument is the most suitable for measuring the diameter of a thin copper wire?",
    figure: "fig-01-08-micrometer.svg",
    options: [
      "A digital micrometer screw gauge",
      "A metre rule",
      "A measuring tape",
      "A metre rule read very carefully"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "meas-instrument-1", 2: "meas-instrument-1", 3: "meas-instrument-1" },
    walkthrough: [
      "The choice depends on how small the object is and how fine a reading you need.",
      "A wire is very thin, so you need a very precise instrument.",
      "A micrometer screw gauge reads to the nearest thousandth of a millimetre.",
      "A metre rule or measuring tape reads only to the nearest millimetre, which is far too coarse for a wire."
    ],
    explain: "A wire diameter is tiny, so it needs the most precise instrument, the micrometer screw gauge, which reads to a thousandth of a millimetre. A metre rule or measuring tape reads only to a millimetre, so no matter how carefully you look, it cannot resolve something that small."
  },
  {
    id: "meas-q-12",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "measuring-length",
    stem: "Which instrument is the most suitable for measuring the girth of a tree trunk?",
    figure: null,
    options: [
      "A cloth measuring tape",
      "A metre rule",
      "A digital micrometer screw gauge",
      "A pair of digital calipers"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "meas-instrument-1", 2: "meas-instrument-1", 3: "meas-instrument-1" },
    walkthrough: [
      "The girth of a tree is a long distance that runs around a curved surface.",
      "A cloth measuring tape can bend around the trunk and reach several metres.",
      "So a measuring tape is the right choice.",
      "A metre rule is too short and stiff, and a micrometer or calipers only measure very small objects."
    ],
    explain: "The girth wraps around a curved trunk over several metres, so a cloth measuring tape, which bends around curves, is the right tool. A metre rule is too short and cannot follow the curve, and a micrometer or calipers are built for very small objects, not a whole tree trunk."
  },
  {
    id: "meas-q-13",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "reading-errors",
    stem: "To avoid parallax error when reading a ruler, where should your eye be?",
    figure: "fig-01-02-parallax-error.svg",
    options: [
      "Directly above the mark, looking straight down at it",
      "Off to one side, at a comfortable angle",
      "As far back from the scale as possible",
      "Anywhere, because eye position does not change the reading"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "meas-parallax-1", 2: "meas-parallax-1", 3: "meas-parallax-1" },
    walkthrough: [
      "Parallax error comes from reading a scale from the wrong angle.",
      "When your eye is off to the side, the mark and the object line up differently.",
      "That makes the reading look shifted from its true value.",
      "So put your line of sight directly above the mark, looking straight down."
    ],
    explain: "Parallax error happens when your eye is not square to the scale, so the reading appears shifted. Placing your line of sight directly above the mark, perpendicular to the scale, removes it. Reading from the side, or from far away at an angle, is exactly what causes the error."
  },
  {
    id: "meas-q-14",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "reading-errors",
    stem: "An instrument has a positive zero error. Compared with the true value, its readings are:",
    figure: "fig-01-04-zero-error.svg",
    options: [
      "Too large",
      "Too small",
      "Exactly correct, so the error can be ignored",
      "Too large only when measuring big objects"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "meas-zeroerror-pos", 2: "meas-zeroerror-2", 3: "meas-zeroerror-pos" },
    walkthrough: [
      "A positive zero error means the object's edge starts after the zero mark.",
      "So every reading picks up that extra bit at the start.",
      "That makes the object read larger than it truly is.",
      "You would subtract the zero error to get the correct value."
    ],
    explain: "With a positive zero error the starting edge sits after zero, so the reading carries an extra amount and comes out too large, for objects of any size. You correct it by subtracting the zero error. Expecting it to read too small reverses the direction, and calling it harmless ignores a real error."
  },
  {
    id: "meas-q-15",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "reading-errors",
    stem: "The zero end of a metre rule is worn. What is the best way to measure the length of a rod?",
    figure: "fig-01-05-offset-measurement.svg",
    options: [
      "Line one end up with a clear mark such as 10.0 cm and subtract the two readings",
      "Read from the worn zero end as usual",
      "Always start from the zero end, since a measurement must begin at 0",
      "Estimate how much is worn away and hope it is small"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "meas-enderror-1", 2: "meas-zeroerror-2", 3: "meas-enderror-1" },
    walkthrough: [
      "The worn zero end gives a faulty starting point.",
      "You do not have to start from zero to measure a length.",
      "Line one end of the rod up with a clear mark, such as ten centimetres, and read the other end.",
      "Subtract the two readings, and the worn zero never enters your measurement."
    ],
    explain: "A worn zero end causes an end error, so you avoid it by starting from a clean mark and subtracting the two readings. You do not have to begin at zero. Reading from the worn end anyway keeps the error in, and hoping the wear is small just trusts a faulty starting point."
  },
  {
    id: "meas-q-16",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "reading-errors",
    stem: "Why should you check the ends of a metre rule before measuring with it?",
    figure: "fig-01-03-end-error.svg",
    options: [
      "A worn or chipped end gives a wrong reading",
      "A worn end makes no difference to the reading",
      "Only the middle of the rule can wear out",
      "The ends of a rule never change with use"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "meas-enderror-1", 2: "meas-enderror-1", 3: "meas-enderror-1" },
    walkthrough: [
      "The ends of a metre rule take the most knocks and wear down over time.",
      "If the zero end is chipped, readings taken from it start from the wrong place.",
      "That gives an end error in every measurement from that end.",
      "So check the condition of the ends, and if one is worn, measure from a clean mark instead."
    ],
    explain: "The ends of a rule wear and chip with use, and a damaged zero end shifts every reading taken from it, an end error. That is why you check the ends first and start from a clean mark if needed. Assuming a worn end makes no difference is exactly the mistake to avoid."
  },
  {
    id: "meas-q-17",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "precision",
    stem: "The precision of an instrument is best described as:",
    figure: "fig-01-09-precision-scale.svg",
    options: [
      "The smallest division it can measure",
      "The largest length it can measure",
      "The full range from its smallest to its largest reading",
      "How large the numbers printed on its scale are"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "meas-precision-1", 2: "meas-precision-1", 3: "meas-precision-1" },
    walkthrough: [
      "Precision is about how finely an instrument can measure, not how much.",
      "The precision is the smallest division on its scale.",
      "The smaller that division, the more precise the instrument.",
      "The largest length or the total range is about how much it covers, which is a different idea."
    ],
    explain: "Precision is the smallest division an instrument can measure, so a finer scale means more precision. The largest length it can reach, or its total range, is about how much it covers, not how finely, so those describe range rather than precision."
  },
  {
    id: "meas-q-18",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "precision",
    stem: "Which of these instruments is the most precise?",
    figure: null,
    options: [
      "Digital micrometer screw gauge, smallest division 0.001 mm",
      "Metre rule, smallest division 1 mm",
      "Measuring tape, smallest division 1 mm",
      "Digital calipers, smallest division 0.01 mm"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "meas-precision-1", 2: "meas-precision-1", 3: "meas-precision-1" },
    walkthrough: [
      "The most precise instrument has the smallest smallest division.",
      "The micrometer screw gauge reads to a thousandth of a millimetre.",
      "The calipers read to a hundredth of a millimetre, and the rule and tape to a whole millimetre.",
      "So the micrometer, with the smallest division, is the most precise."
    ],
    explain: "Precision is set by the smallest division, so the micrometer screw gauge at a thousandth of a millimetre is the most precise. The calipers come next, and the metre rule and tape are the least precise at a whole millimetre, even though the tape covers the greatest length."
  },
  {
    id: "meas-q-19",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "precision",
    stem: "Can a reading of 3.46 cm be taken from a metre rule with a precision of 0.1 cm?",
    figure: "fig-01-09-precision-scale.svg",
    options: [
      "No, it can only be read to the nearest 0.1 cm, such as 3.5 cm",
      "Yes, any ruler can give a reading of 3.46 cm",
      "Yes, by estimating a second decimal place with your eye",
      "Yes, because 3.46 cm rounds neatly to a scale mark"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "meas-precision-reading", 2: "meas-precision-reading", 3: "meas-precision-reading" },
    walkthrough: [
      "An instrument can only be read as finely as its smallest division.",
      "This metre rule has a precision of a tenth of a centimetre.",
      "So it can be read to the nearest tenth, such as three point five.",
      "A reading of three point four six has a second decimal place, which is finer than the scale allows."
    ],
    explain: "A metre rule with a precision of a tenth of a centimetre can only be read to that tenth, such as three point five. Three point four six claims a hundredth of a centimetre, which the scale cannot show. For that fineness you would need a more precise instrument, like digital calipers."
  },
  {
    id: "meas-q-20",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "pendulum",
    stem: "What is the period of a simple pendulum?",
    figure: "fig-01-11-pendulum-swing.svg",
    options: [
      "The time for one complete oscillation, over and back",
      "The time to swing from one side across to the other",
      "The time taken for 20 complete swings",
      "The number of swings it makes in one second"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "meas-period-1", 2: "meas-period-calc", 3: "meas-period-1" },
    walkthrough: [
      "One complete oscillation is a full round trip of the bob.",
      "The bob swings from its start, across to the other side, and back to where it began.",
      "The time for that whole there and back journey is the period.",
      "A single sweep to the other side is only half an oscillation."
    ],
    explain: "The period is the time for one complete oscillation, the full there and back journey. A one way swing across to the other side is only half of that. The time for twenty swings is the total you measure before dividing, and the number of swings per second is the frequency, not the period."
  },
  {
    id: "meas-q-21",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "pendulum",
    stem: "A pendulum completes 25 oscillations in 40.0 s. What is its period?",
    figure: "fig-01-10-pendulum-setup.svg",
    options: ["1.6 s", "40 s", "0.625 s", "2.0 s"],
    correct: 0,
    distractorMisconceptions: { 1: "meas-period-calc", 2: "meas-period-calc", 3: "meas-period-calc" },
    walkthrough: [
      "The period is the time for one oscillation.",
      "So share the total time out over all the swings you counted.",
      "That is forty seconds divided by twenty five oscillations.",
      "Forty divided by twenty five is one point six seconds."
    ],
    explain: "Period is total time divided by the number of oscillations, so forty divided by twenty five gives one point six seconds. Reporting the whole forty seconds treats the total as the period, dividing twenty five by forty turns the fraction upside down, and dividing by twenty uses the wrong count."
  },
  {
    id: "meas-q-22",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "pendulum",
    stem: "It takes 18.0 s for a pendulum to swing from P to Q and back again 20 times. What is its period?",
    figure: "fig-01-11-pendulum-swing.svg",
    options: ["0.9 s", "18 s", "1.8 s", "0.45 s"],
    correct: 0,
    distractorMisconceptions: { 1: "meas-period-calc", 2: "meas-period-calc", 3: "meas-period-1" },
    walkthrough: [
      "Each swing from P to Q and back is one complete oscillation.",
      "So there are twenty complete oscillations in eighteen seconds.",
      "The period is the total time divided by the number of oscillations.",
      "Eighteen divided by twenty is nought point nine seconds."
    ],
    explain: "There are twenty complete oscillations, so the period is eighteen divided by twenty, which is nought point nine seconds. Using the whole eighteen seconds treats the total as the period, and dividing by forty would wrongly count each one way sweep as a full oscillation, which halves the true period."
  },
  {
    id: "meas-q-23",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "pendulum",
    stem: "Why is a stopwatch used to time 20 oscillations of a pendulum rather than a single oscillation?",
    figure: "fig-01-10-pendulum-setup.svg",
    options: [
      "It spreads the reaction-time error over many swings, so each swing is timed more accurately",
      "Timing a single oscillation is just as accurate",
      "Timing 20 swings changes the period to a larger value",
      "A single oscillation happens too fast to occur at all"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "meas-timing-1", 2: "meas-timing-1", 3: "meas-timing-1" },
    walkthrough: [
      "Your reaction time when starting and stopping the stopwatch is about the same either way.",
      "On a single swing that delay is a large share of a short time.",
      "Timing twenty swings and then dividing by twenty spreads that delay out.",
      "So the error becomes tiny per swing and the period is more accurate."
    ],
    explain: "The reaction-time delay is roughly fixed each go, so timing twenty swings and dividing spreads it thin, making each period far more accurate than timing one short swing. Timing a single swing is not just as good, and timing many swings does not change the period itself, it only measures it better."
  },
  {
    id: "meas-q-24",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "errors",
    stem: "Human reaction time when starting and stopping a stopwatch is an example of:",
    figure: null,
    options: [
      "A random error, which averaging several readings reduces",
      "A zero error in the stopwatch",
      "An error that cannot be reduced in any way",
      "An error that only affects the very first reading"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "meas-reaction-1", 2: "meas-reaction-1", 3: "meas-reaction-1" },
    walkthrough: [
      "Each time you start and stop a stopwatch you are a little early or a little late.",
      "Because that varies from go to go, it is a random error.",
      "A random error can be reduced by taking several readings and averaging.",
      "It is not a zero error, which would shift every reading the same way."
    ],
    explain: "Reaction time varies each time you press the stopwatch, so it is a random error, and averaging several readings reduces its effect. It is not a zero error, which shifts every reading by a fixed amount, and it certainly can be reduced, so it does not only touch the first reading."
  },
  {
    id: "meas-q-25",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "pendulum",
    stem: "Which change increases the period of a simple pendulum?",
    figure: "fig-01-11-pendulum-swing.svg",
    options: [
      "Using a longer pendulum",
      "Using a heavier bob",
      "Swinging it through a larger angle",
      "The length has no effect, so use a heavier bob instead"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "meas-pendulum-factors", 2: "meas-pendulum-factors", 3: "meas-pendulum-length" },
    walkthrough: [
      "The period of a simple pendulum depends only on its length.",
      "A longer pendulum has a longer period.",
      "So using a longer pendulum increases the period.",
      "The mass of the bob and the angle of swing do not change the period at all."
    ],
    explain: "Length is the one factor that changes the period, and a longer pendulum gives a longer period. A heavier bob or a wider swing angle leaves the period unchanged, and the idea that length has no effect is the opposite of what is true, since length is the only thing that matters here."
  },
  {
    id: "meas-q-26",
    topicKey: "t1-physical-quantities-and-measurement",
    subtopic: "pendulum",
    stem: "A student claims the period of a pendulum depends on the mass of the bob and on the amplitude. Which statement is correct?",
    figure: "fig-01-10-pendulum-setup.svg",
    options: [
      "It depends on neither; only the length of the pendulum matters",
      "It depends on the mass but not the amplitude",
      "It depends on the amplitude but not the mass",
      "It depends on both the mass and the amplitude"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "meas-pendulum-factors", 2: "meas-pendulum-factors", 3: "meas-pendulum-factors" },
    walkthrough: [
      "For a simple pendulum, the period does not depend on the mass of the bob.",
      "It also does not depend on the amplitude, which is the angle of swing.",
      "The one factor that does change the period is the length.",
      "So the period depends on neither the mass nor the amplitude, only the length."
    ],
    explain: "The period of a simple pendulum depends only on its length, not on the mass of the bob or the amplitude. Swapping in a heavier bob or starting from a wider angle leaves the period unchanged, so any answer that keeps mass or amplitude as a factor is the mistake to watch for."
  }
];
