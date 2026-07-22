// waves-questions.ts
// Teaching question bank for O-Level Physics, General Wave Properties
// (topicKey "t10-general-wave-properties").
// Every wrong option maps to the misconception it reveals (see waves-misconceptions.ts),
// so the tutor can respond to exactly why the student erred.
// Grounded in StudyLah-HQ / Chapter 11 - General Wave Properties.md
// walkthrough and explain are spoken by Gugu, so they are written in plain words, no symbols.
// stem and options are shown on screen, so they may use _ for subscript and ^ for superscript.

import type { TeachQuestion } from "@/lib/teaching/types";

export const WAVES_QUESTIONS: TeachQuestion[] = [
  {
    id: "wav-q-01",
    topicKey: "t10-general-wave-properties",
    subtopic: "energy-transfer",
    stem: "A cork floats on a pond as a water wave passes underneath it. What does the cork do?",
    figure: null,
    options: [
      "It bobs up and down about a fixed point.",
      "It travels along with the wave to the far bank.",
      "It is pushed steadily forward and stays at the far side.",
      "It moves back and forth along the direction the wave travels."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "wav-matter-1", 2: "wav-matter-1", 3: "wav-transverse-def-1" },
    walkthrough: [
      "A wave moves energy along, but it does not carry the water with it.",
      "As the wave passes, the cork is lifted up and then dropped back down.",
      "A water wave is transverse, so the cork moves up and down, across the direction of travel.",
      "After the wave has gone by, the cork is back in about the same place."
    ],
    explain: "A wave transfers energy without transferring matter, so the cork is not carried anywhere. It simply bobs up and down about its rest position as the wave passes, because a water wave is transverse and its particles move across the direction of travel. Moving forward with the wave, or back and forth along it, would mean the water itself was being carried along, which does not happen."
  },
  {
    id: "wav-q-02",
    topicKey: "t10-general-wave-properties",
    subtopic: "wave-nature",
    stem: "Which of these waves can travel through a vacuum, where there is no material at all?",
    figure: null,
    options: ["Light", "Sound", "A wave on a stretched rope", "Ripples on water"],
    correct: 0,
    distractorMisconceptions: { 1: "wav-medium-1", 2: "wav-medium-1", 3: "wav-medium-1" },
    walkthrough: [
      "Some waves need a material to travel through, and some do not.",
      "Sound, rope waves and water ripples are all mechanical, so they need a medium.",
      "Light is an electromagnetic wave, and those need no medium at all.",
      "So only light can cross a vacuum."
    ],
    explain: "Light is an electromagnetic wave, so it needs no material and can travel through empty space, which is how sunlight reaches us. Sound, a rope wave and water ripples are all mechanical waves, so each one needs a material to carry it, and none of them can cross a vacuum."
  },
  {
    id: "wav-q-03",
    topicKey: "t10-general-wave-properties",
    subtopic: "transverse-and-longitudinal",
    stem: "Which statement pairs the wave types correctly?",
    figure: null,
    options: [
      "Light is transverse and sound is longitudinal.",
      "Sound is transverse and light is longitudinal.",
      "Both sound and light are longitudinal.",
      "Both sound and light are transverse."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "wav-translong-1", 2: "wav-translong-1", 3: "wav-translong-1" },
    walkthrough: [
      "Light, and every electromagnetic wave, vibrates across the direction of travel, so it is transverse.",
      "Sound pushes the air back and forth along the direction of travel, so it is longitudinal.",
      "So light is transverse and sound is longitudinal.",
      "Any answer that swaps these, or makes them the same type, is mixing the two up."
    ],
    explain: "Light is transverse, because its vibration is across the direction of travel, while sound is longitudinal, because the air is pushed back and forth along the direction the sound moves. Swapping them, or calling both the same type, is the classic mix up of the two examples."
  },
  {
    id: "wav-q-04",
    topicKey: "t10-general-wave-properties",
    subtopic: "transverse-and-longitudinal",
    stem: "A sound wave travels through the air. What are its repeating features called?",
    figure: "fig-11-07-longitudinal-wave.svg",
    options: [
      "Compressions and rarefactions",
      "Crests and troughs",
      "Peaks and dips, the same as a transverse wave",
      "It has no repeating features at all"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "wav-translong-2", 2: "wav-translong-2", 3: "wav-translong-2" },
    walkthrough: [
      "Sound is a longitudinal wave, so the air is squeezed and stretched along the direction of travel.",
      "Where the air is squeezed together we get a compression.",
      "Where the air is spread apart we get a rarefaction.",
      "Crests and troughs belong to transverse waves, not to sound."
    ],
    explain: "Sound is longitudinal, so instead of crests and troughs it has compressions, where the particles are squeezed together, and rarefactions, where they are spread apart. Crests and troughs are the high and low points of a transverse wave, so they do not describe a sound wave."
  },
  {
    id: "wav-q-05",
    topicKey: "t10-general-wave-properties",
    subtopic: "transverse-and-longitudinal",
    stem: "In a transverse wave, how do the particles vibrate compared with the direction the wave travels?",
    figure: "fig-11-06-transverse-wave.svg",
    options: [
      "At right angles to it.",
      "Along the same line as it.",
      "In the same direction, carried along with the wave.",
      "Back and forth in small pushes along the direction of travel."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "wav-transverse-def-1", 2: "wav-matter-1", 3: "wav-transverse-def-1" },
    walkthrough: [
      "In a transverse wave the vibration is across the direction of travel.",
      "Picture shaking a rope up and down while the wave runs along to the side.",
      "Each bit of rope moves up and down, at right angles to the travel.",
      "Moving along the direction of travel would make it a longitudinal wave instead."
    ],
    explain: "In a transverse wave the particles vibrate at right angles to the direction the wave travels, like a rope shaken up and down while the wave runs sideways. Vibrating along the direction of travel describes a longitudinal wave, and being carried along with the wave would mean the material itself was transported, which does not happen."
  },
  {
    id: "wav-q-06",
    topicKey: "t10-general-wave-properties",
    subtopic: "amplitude",
    stem: "On a transverse wave, a crest reaches 6 cm above the rest line and a trough reaches 6 cm below it. What is the amplitude?",
    figure: "fig-11-09-amplitude.svg",
    options: ["6 cm", "12 cm", "It depends on the wavelength.", "It depends on the frequency."],
    correct: 0,
    distractorMisconceptions: { 1: "wav-amplitude-1", 2: "wav-amplitude-2", 3: "wav-amplitude-2" },
    walkthrough: [
      "Amplitude is measured from the rest line in the middle out to a crest.",
      "The crest is six centimetres above that middle line.",
      "So the amplitude is six centimetres.",
      "The full gap from crest to trough is twelve centimetres, which is twice the amplitude."
    ],
    explain: "Amplitude is the distance from the rest line to a crest, which is six centimetres here. The twelve centimetre gap from crest to trough is the full swing, which is twice the amplitude. Amplitude is set by how much energy the wave carries, so it does not depend on the wavelength or the frequency."
  },
  {
    id: "wav-q-07",
    topicKey: "t10-general-wave-properties",
    subtopic: "amplitude",
    stem: "Two waves have the same wavelength, but wave X has a larger amplitude than wave Y. Which statement is correct?",
    figure: "fig-11-10-amplitude-energy.svg",
    options: [
      "Wave X carries more energy.",
      "Wave X has a higher frequency.",
      "Wave X travels faster.",
      "Wave X has a shorter period."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "wav-amplitude-2", 2: "wav-amplitude-2", 3: "wav-amplitude-2" },
    walkthrough: [
      "Amplitude is a measure of the energy a wave carries.",
      "Wave X has the larger amplitude, so it carries more energy.",
      "The speed depends on the medium, and the frequency depends on the source, not on the amplitude.",
      "So a taller wave is not automatically faster or higher in frequency."
    ],
    explain: "A larger amplitude means the wave carries more energy, so wave X carries more energy than wave Y. It does not follow that wave X is faster, or that it has a higher frequency or a shorter period, because the speed is set by the medium and the frequency by the source, both separate from the amplitude."
  },
  {
    id: "wav-q-08",
    topicKey: "t10-general-wave-properties",
    subtopic: "wavelength",
    stem: "On a displacement against distance graph of a wave, the wavelength is the distance between...",
    figure: "fig-11-13-displacement-distance.svg",
    options: [
      "two successive crests.",
      "a crest and the very next trough.",
      "the rest line and a crest.",
      "the top of a crest and the bottom of the trough below it, measured up and down."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "wav-wavelength-1", 2: "wav-wavelength-1", 3: "wav-amplitude-1" },
    walkthrough: [
      "One wavelength is the length of a complete wave.",
      "You measure it between two points that are in phase, like one crest to the next crest.",
      "A crest to the neighbouring trough is only half of a wave.",
      "The rest line to a crest, or a crest down to a trough, is about the amplitude, not the wavelength."
    ],
    explain: "The wavelength is one full wave, so it runs from one crest to the next crest, or one trough to the next trough. A crest to the neighbouring trough is only half a wavelength, and the distances measured up and down to the rest line describe the amplitude instead, so those are the usual mix ups."
  },
  {
    id: "wav-q-09",
    topicKey: "t10-general-wave-properties",
    subtopic: "frequency-and-period",
    stem: "How are the frequency and period of a wave related?",
    figure: "fig-11-12-frequency.svg",
    options: [
      "The frequency is one divided by the period.",
      "The frequency is equal to the period.",
      "A higher frequency goes with a longer period.",
      "The period is the number of complete waves each second."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "wav-freqperiod-1", 2: "wav-freqperiod-2", 3: "wav-freqperiod-1" },
    walkthrough: [
      "The period is the time for one complete wave, measured in seconds.",
      "The frequency is how many complete waves happen each second, measured in hertz.",
      "They are reciprocals, so the frequency is one divided by the period.",
      "That means a higher frequency goes with a shorter period, not a longer one."
    ],
    explain: "Frequency and period are reciprocals, so the frequency is one divided by the period. They are not equal, and they move in opposite directions, so a higher frequency goes with a shorter period. The number of complete waves each second is the definition of frequency, not period, so that option swaps the two."
  },
  {
    id: "wav-q-10",
    topicKey: "t10-general-wave-properties",
    subtopic: "frequency-and-period",
    stem: "A vibrating source produces waves with a frequency of 20 Hz. What is the period of the waves?",
    figure: null,
    options: ["0.05 s", "20 s", "0.5 s", "80 s"],
    correct: 0,
    distractorMisconceptions: { 1: "wav-freqperiod-1", 2: "wav-freqperiod-2", 3: "wav-freqperiod-2" },
    walkthrough: [
      "Period is one divided by the frequency.",
      "The frequency is twenty hertz.",
      "One divided by twenty is nought point nought five.",
      "So the period is nought point nought five seconds."
    ],
    explain: "The period is one divided by the frequency, and one divided by twenty is nought point nought five, so the period is nought point nought five seconds. Answering twenty seconds treats the period as the same number as the frequency, and the other larger values come from expecting a bigger frequency to give a bigger period, when the two move in opposite directions."
  },
  {
    id: "wav-q-11",
    topicKey: "t10-general-wave-properties",
    subtopic: "wave-speed-equation",
    stem: "A dipper vibrates at 8 Hz and makes water waves of wavelength 0.15 m. What is the speed of the waves?",
    figure: null,
    options: ["1.2 m/s", "53 m/s", "0.019 m/s", "8.15 m/s"],
    correct: 0,
    distractorMisconceptions: { 1: "wav-vflambda-1", 2: "wav-vflambda-1", 3: "wav-vflambda-1" },
    walkthrough: [
      "Wave speed equals frequency times wavelength.",
      "The frequency is eight hertz and the wavelength is nought point one five metres.",
      "Eight times nought point one five is one point two.",
      "So the wave speed is one point two metres per second."
    ],
    explain: "Wave speed equals frequency times wavelength, so eight hertz times nought point one five metres gives one point two metres per second. Dividing the frequency by the wavelength, or the wavelength by the frequency, gives the other two answers, and adding them gives the last, so those come from combining the numbers the wrong way."
  },
  {
    id: "wav-q-12",
    topicKey: "t10-general-wave-properties",
    subtopic: "wave-speed-equation",
    stem: "A wave travels at 1.5 m/s and has a wavelength of 3.0 m. What is its frequency?",
    figure: null,
    options: ["0.5 Hz", "4.5 Hz", "2 Hz", "1.5 Hz"],
    correct: 0,
    distractorMisconceptions: { 1: "wav-vflambda-1", 2: "wav-vflambda-1", 3: "wav-vflambda-1" },
    walkthrough: [
      "Rearrange the wave equation: frequency equals wave speed divided by wavelength.",
      "The speed is one point five metres per second and the wavelength is three metres.",
      "One point five divided by three is nought point five.",
      "So the frequency is nought point five hertz."
    ],
    explain: "To find the frequency, divide the wave speed by the wavelength, so one point five divided by three is nought point five hertz. Multiplying the speed and wavelength gives four point five, dividing the wavelength by the speed gives two, and simply repeating the speed gives one point five, so each wrong answer comes from handling the equation incorrectly."
  },
  {
    id: "wav-q-13",
    topicKey: "t10-general-wave-properties",
    subtopic: "wave-speed-equation",
    stem: "A displacement against time graph of a wave shows a period of 0.5 s. A displacement against distance graph of the same wave shows a wavelength of 3 m. What is the wave speed?",
    figure: "fig-11-14-interpret-graphs.svg",
    options: ["6 m/s", "1.5 m/s", "0.17 m/s", "1.5 cm/s"],
    correct: 0,
    distractorMisconceptions: { 1: "wav-vflambda-1", 2: "wav-vflambda-1", 3: "wav-units-1" },
    walkthrough: [
      "First find the frequency from the period: one divided by nought point five is two hertz.",
      "Then use wave speed equals frequency times wavelength.",
      "That is two hertz times three metres.",
      "So the wave speed is six metres per second."
    ],
    explain: "The period gives a frequency of two hertz, and wave speed equals frequency times wavelength, so two times three is six metres per second. Multiplying the wavelength by the period gives one point five, dividing the period by the wavelength gives about nought point one seven, and giving the answer in centimetres per second shows the units were never sorted out."
  },
  {
    id: "wav-q-14",
    topicKey: "t10-general-wave-properties",
    subtopic: "wave-graphs",
    stem: "From which graph do you read the wavelength of a wave?",
    figure: "fig-11-14-interpret-graphs.svg",
    options: [
      "A displacement against distance graph.",
      "A displacement against time graph.",
      "Either graph gives the wavelength directly.",
      "A displacement against time graph gives the wavelength, and a displacement against distance graph gives the period."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "wav-graph-1", 2: "wav-graph-1", 3: "wav-graph-1" },
    walkthrough: [
      "A displacement against distance graph is a snapshot of the whole wave at one moment.",
      "The gap between crests on it is a distance, which is the wavelength.",
      "A displacement against time graph follows one particle over time, and its crest gap is the period.",
      "So the wavelength comes from the distance graph, not the time graph."
    ],
    explain: "The wavelength is read from a displacement against distance graph, because its horizontal axis is a distance and the crest to crest gap is the wavelength. A displacement against time graph gives the period instead, since its horizontal axis is time, so reading either one for the wavelength, or swapping them, mixes up the two graphs."
  },
  {
    id: "wav-q-15",
    topicKey: "t10-general-wave-properties",
    subtopic: "wave-graphs",
    stem: "A displacement against time graph of a wave completes 3 full cycles in 1.2 s. What is the period of the wave?",
    figure: "fig-11-11-displacement-time.svg",
    options: ["0.4 s", "1.2 s", "3.6 s", "2.5 s"],
    correct: 0,
    distractorMisconceptions: { 1: "wav-graph-1", 2: "wav-graph-1", 3: "wav-freqperiod-1" },
    walkthrough: [
      "The period is the time for one complete cycle.",
      "There are three complete cycles in one point two seconds.",
      "So divide one point two by three.",
      "That gives nought point four seconds for one cycle."
    ],
    explain: "The period is the time for a single cycle, so divide the one point two seconds by the three cycles to get nought point four seconds. Taking the whole one point two seconds, or multiplying by three to get three point six, misreads how many cycles are on the graph, and two point five is really the frequency in hertz, not the period."
  },
  {
    id: "wav-q-16",
    topicKey: "t10-general-wave-properties",
    subtopic: "wave-speed",
    stem: "You shake a rope faster, raising the frequency, while the rope and its tension stay the same. What happens to the wave speed?",
    figure: "fig-11-03-wave-in-rope.svg",
    options: [
      "It stays the same, and the wavelength gets shorter.",
      "It increases, because a higher frequency means a faster wave.",
      "It increases, while the wavelength stays the same.",
      "It decreases."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "wav-speedsource-1", 2: "wav-speedsource-1", 3: "wav-speedsource-1" },
    walkthrough: [
      "The wave speed on a rope is set by the rope and its tension, not by how fast you shake it.",
      "So raising the frequency does not change the speed.",
      "To keep the wave equation true, the wavelength must get shorter instead.",
      "So the speed stays the same and the waves get packed closer together."
    ],
    explain: "For a given rope the wave speed is fixed by the medium, so shaking faster does not speed the wave up. The frequency rises, the speed stays the same, and the wavelength gets shorter to match, keeping wave speed equal to frequency times wavelength. Expecting a higher frequency to raise the speed treats the shaking as if it set the speed, which it does not."
  },
  {
    id: "wav-q-17",
    topicKey: "t10-general-wave-properties",
    subtopic: "refraction",
    stem: "A water wave passes from deep water into shallow water and slows down. What happens to its frequency?",
    figure: null,
    options: [
      "It stays the same.",
      "It decreases, because the wave slows down.",
      "It increases.",
      "It falls to zero."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "wav-medium-freq-1", 2: "wav-medium-freq-1", 3: "wav-medium-freq-1" },
    walkthrough: [
      "The frequency of a wave is set by its source.",
      "Crossing into shallow water does not change how often the source vibrates.",
      "So the same number of waves arrive each second and the frequency stays the same.",
      "It is the speed and the wavelength that change, not the frequency."
    ],
    explain: "Frequency is fixed by the source, so it does not change when the wave moves into shallow water, even though the wave slows down. The same number of waves arrive each second. What changes is the wavelength, which gets shorter to match the slower speed, so the frequency neither drops nor rises."
  },
  {
    id: "wav-q-18",
    topicKey: "t10-general-wave-properties",
    subtopic: "refraction",
    stem: "A wave slows down as it enters a new medium, and its frequency stays the same. What happens to its wavelength?",
    figure: null,
    options: [
      "It gets shorter.",
      "It gets longer.",
      "It stays the same, and the frequency changes instead.",
      "It gets longer, because a slower wave spreads out."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "wav-medium-wavelength-1", 2: "wav-medium-freq-1", 3: "wav-medium-wavelength-1" },
    walkthrough: [
      "The frequency is fixed, so the wavelength changes the same way as the speed.",
      "The wave has slowed down.",
      "So the wavelength gets shorter to match.",
      "You can see this from wave speed equals frequency times wavelength, with the frequency held fixed."
    ],
    explain: "With the frequency fixed, the wavelength changes the same way the speed does, so a slower wave has a shorter wavelength. Expecting it to get longer gets the relationship backwards, and saying the wavelength stays the same while the frequency changes forgets that the source sets the frequency, so it is the wavelength that must change."
  },
  {
    id: "wav-q-19",
    topicKey: "t10-general-wave-properties",
    subtopic: "wavefronts",
    stem: "Circular wavefronts spread out from a point where a stone was dropped into still water. In which direction does the wave travel?",
    figure: "fig-11-05-wavefront.svg",
    options: [
      "Straight outward, at right angles to the wavefronts.",
      "Along the wavefronts, following the circles.",
      "Around the circles, in a spiral.",
      "In no particular direction; it spreads everywhere equally."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "wav-wavefront-1", 2: "wav-wavefront-1", 3: "wav-wavefront-1" },
    walkthrough: [
      "A wave always travels at right angles to its wavefronts.",
      "Here the wavefronts are the spreading circles.",
      "At right angles to each circle is straight outward from the centre.",
      "So the wave travels straight out from the point where the stone landed."
    ],
    explain: "A wave travels at right angles to its wavefronts, so with circular wavefronts the wave moves straight outward from the centre. Following the circles, or spiralling around them, would be moving along the wavefronts, which is not how a wave travels."
  },
  {
    id: "wav-q-20",
    topicKey: "t10-general-wave-properties",
    subtopic: "wavefronts",
    stem: "On a wavefront diagram, two neighbouring wavefronts are drawn as two successive crests. How far apart are they?",
    figure: "fig-11-05-wavefront.svg",
    options: ["One wavelength.", "Half a wavelength.", "One period.", "One amplitude."],
    correct: 0,
    distractorMisconceptions: { 1: "wav-wavefront-2", 2: "wav-wavefront-2", 3: "wav-wavefront-2" },
    walkthrough: [
      "Each wavefront joins points at the same stage of the wave, such as a whole crest.",
      "The next wavefront is the next crest along.",
      "One crest to the next crest is one whole wavelength.",
      "So neighbouring wavefronts are one wavelength apart."
    ],
    explain: "Neighbouring wavefronts are one whole wavelength apart, because each one is the next crest along and a crest to the next crest is one wavelength. Half a wavelength is only part of a wave, the period is a time rather than a distance, and the amplitude is measured up and down, so none of those give the spacing."
  },
  {
    id: "wav-q-21",
    topicKey: "t10-general-wave-properties",
    subtopic: "phase",
    stem: "Which pair of points on a transverse wave are in phase?",
    figure: "fig-11-08-in-phase.svg",
    options: [
      "Two successive crests.",
      "A crest and the next trough.",
      "A crest and the rest point just beyond it.",
      "Two points that are half a wavelength apart."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "wav-phase-1", 2: "wav-phase-1", 3: "wav-phase-1" },
    walkthrough: [
      "Two points are in phase when they are at the same position and moving the same way.",
      "Two crests are both at the top and both moving the same way, so they are in phase.",
      "A crest and the next trough are at opposite positions, moving opposite ways, so they are not in phase.",
      "Points in phase are a whole wavelength apart, not half."
    ],
    explain: "Two successive crests are in phase, because they are at the same height and moving the same way, and they are one whole wavelength apart. A crest and the next trough are half a wavelength apart and move in opposite directions, so they are not in phase, and a crest and a nearby rest point are at different positions too."
  },
  {
    id: "wav-q-22",
    topicKey: "t10-general-wave-properties",
    subtopic: "units-and-conversion",
    stem: "A wave has a frequency of 200 Hz and a wavelength of 80 cm. What is its speed in metres per second?",
    figure: null,
    options: ["160 m/s", "16000 m/s", "2.5 m/s", "0.4 m/s"],
    correct: 0,
    distractorMisconceptions: { 1: "wav-units-1", 2: "wav-vflambda-1", 3: "wav-vflambda-1" },
    walkthrough: [
      "First change the wavelength into metres, because the answer is in metres per second.",
      "Eighty centimetres is nought point eight metres.",
      "Wave speed equals frequency times wavelength, so two hundred times nought point eight.",
      "That gives one hundred and sixty metres per second."
    ],
    explain: "Change eighty centimetres into nought point eight metres first, then multiply by the frequency: two hundred times nought point eight is one hundred and sixty metres per second. Multiplying by eighty without converting gives the huge value of sixteen thousand, and dividing the numbers instead of multiplying gives the two small answers."
  },
  {
    id: "wav-q-23",
    topicKey: "t10-general-wave-properties",
    subtopic: "reflection",
    stem: "A water wave reflects off a straight barrier and travels back through the same water. What happens to its speed, frequency and wavelength?",
    figure: null,
    options: [
      "All three stay the same; only the direction changes.",
      "Its frequency changes.",
      "Its wavelength changes, though its speed stays the same.",
      "Its speed decreases."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "wav-reflection-1", 2: "wav-reflection-1", 3: "wav-reflection-1" },
    walkthrough: [
      "The wave stays in the same water, so the medium has not changed.",
      "That means the speed stays the same, and the source sets the frequency, so that stays the same too.",
      "With the speed and frequency unchanged, the wavelength is unchanged as well.",
      "Only the direction of travel is reversed."
    ],
    explain: "Reflection into the same medium leaves the speed, frequency and wavelength all unchanged, and only turns the wave around. The medium is the same, so the speed holds, the source is the same, so the frequency holds, and with both fixed the wavelength holds too. So none of the wave's measurements change on reflection."
  },
  {
    id: "wav-q-24",
    topicKey: "t10-general-wave-properties",
    subtopic: "energy-transfer",
    stem: "Which statement about a wave is correct?",
    figure: null,
    options: [
      "A wave transfers energy without transferring matter.",
      "A wave carries the particles of the medium along with it.",
      "Every wave needs a material to travel through.",
      "A wave transfers matter but not energy."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "wav-matter-1", 2: "wav-medium-1", 3: "wav-matter-1" },
    walkthrough: [
      "A wave moves energy from one place to another.",
      "The material it passes through stays where it is; only the energy moves on.",
      "So a wave transfers energy, not matter.",
      "And light shows that not every wave needs a material, since light crosses empty space."
    ],
    explain: "The key fact about any wave is that it transfers energy without transferring matter, so the material stays put while the energy moves on. Carrying the particles along, or transferring matter instead of energy, gets this backwards, and saying every wave needs a material forgets that light and other electromagnetic waves cross empty space."
  },
  {
    id: "wav-q-25",
    topicKey: "t10-general-wave-properties",
    subtopic: "wave-speed-equation",
    stem: "Which statement is correct?",
    figure: null,
    options: [
      "The speed of a wave equals its frequency multiplied by its wavelength.",
      "The frequency of a wave is the time it takes to complete one oscillation.",
      "The amplitude of a wave is the distance from a crest down to the next trough.",
      "The wavelength of a wave is the distance it travels in one second."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "wav-freqperiod-1", 2: "wav-amplitude-1", 3: "wav-wavelength-1" },
    walkthrough: [
      "Wave speed equals frequency times wavelength, which is the wave equation.",
      "The time for one complete oscillation is the period, not the frequency.",
      "The amplitude is measured from the rest line to a crest, not from a crest down to a trough.",
      "The distance a wave travels in one second is its speed, not its wavelength."
    ],
    explain: "Wave speed equals frequency times wavelength, so the first statement is correct. The time for one oscillation is the period, not the frequency, the amplitude is measured from the middle to a crest rather than the full crest to trough drop, and the distance travelled each second is the wave speed, not the wavelength."
  }
];
