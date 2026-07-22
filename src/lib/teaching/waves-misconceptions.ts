// waves-misconceptions.ts
// Topic: O-Level Physics, General Wave Properties (topicKey "t10-general-wave-properties")
// The tutor's diagnostic brain: the classic ways students go wrong with general wave
// properties, with the exact re-explanation for each. Grounded in
// StudyLah-HQ / Chapter 11 - General Wave Properties.md
// Spoken fields (reteach, tell, whyItHappens, check.question, check.answer) are in plain
// words for reading aloud. On-screen fields (label, belief, microExample) may use _ for
// subscript and ^ for superscript.

import type { Misconception } from "@/lib/teaching/types";

export const WAVES_MISCONCEPTIONS: Misconception[] = [
  {
    id: "wav-matter-1",
    topicKey: "t10-general-wave-properties",
    subtopic: "energy-transfer",
    label: "Waves carry the material along with them",
    belief: "As a wave travels, it carries the particles of the medium along with it.",
    tell: "The student says a floating cork or a piece of rope is carried forward to the far side as the wave passes.",
    whyItHappens: "A wave clearly moves along, so it feels obvious that whatever it passes through must be dragged along too, and everyday waves at the beach seem to push things forward.",
    reteach: "A wave moves energy from place to place, but it leaves the material behind. Picture a cork on a pond. As the ripple goes by, the cork bobs up and down and then settles back to the same spot. It does not ride the wave to the far bank. Each bit of water, or rope, only shakes about its rest position and returns to it. So the wave delivers energy to the far end, while the material stays where it started.",
    microExample: "Cork on water: it bobs up and down as ripples pass, then returns to rest. The wave moves on; the water stays put.",
    figure: "fig-11-04-energy-transfer-rope.svg",
    check: {
      question: "As a water wave passes a floating leaf, does the leaf get carried across the pond?",
      answer: "No. The leaf just bobs up and down and stays in about the same place. Only the energy travels across the pond."
    }
  },
  {
    id: "wav-medium-1",
    topicKey: "t10-general-wave-properties",
    subtopic: "wave-nature",
    label: "Every wave needs a medium",
    belief: "All waves, including light, need a material to travel through.",
    tell: "The student says light or radio waves cannot cross empty space, or that sound and light both need air.",
    whyItHappens: "The first waves students meet, sound, water and ropes, all need a material, so it seems like a rule that every wave must, and it is surprising that anything can travel through nothing.",
    reteach: "There are two families of waves. Mechanical waves, like sound and water ripples, do need a material to carry them. But electromagnetic waves, like light, radio and X-rays, need no material at all and can travel through empty space. That is how sunlight reaches us across the vacuum of space. So the safe check is that sound needs a medium, but light does not.",
    microExample: "Light from the Sun crosses empty space to reach Earth. Sound cannot, because there is no air in space to carry it.",
    figure: null,
    check: {
      question: "Can light travel through a vacuum where there is no air?",
      answer: "Yes. Light is an electromagnetic wave, so it needs no material and can cross empty space. Sound could not, because sound needs a medium."
    }
  },
  {
    id: "wav-transverse-def-1",
    topicKey: "t10-general-wave-properties",
    subtopic: "transverse-and-longitudinal",
    label: "Transverse particles move along the wave",
    belief: "In a transverse wave the particles vibrate in the same direction that the wave travels.",
    tell: "The student describes the particles of a transverse wave as moving forward and back along the direction of travel, the way a longitudinal wave behaves.",
    whyItHappens: "The wave visibly moves in one direction, so it is tempting to say the particles move that way too, and the difference between transverse and longitudinal is easy to blur.",
    reteach: "In a transverse wave the particles vibrate at right angles to the direction the wave travels. Think of a rope you shake up and down. The wave runs along the rope to the side, but each bit of rope only moves up and down, across the direction of travel. That sideways vibration is what makes it transverse. When the particles instead move back and forth along the direction of travel, that is a longitudinal wave.",
    microExample: "Rope wave travels to the right, but each point moves up and down, at right angles to the travel. That is transverse.",
    figure: "fig-11-06-transverse-wave.svg",
    check: {
      question: "In a transverse wave, which way do the particles vibrate compared with the way the wave travels?",
      answer: "At right angles to it. The wave goes one way, but the particles move across that direction, not along it."
    }
  },
  {
    id: "wav-translong-1",
    topicKey: "t10-general-wave-properties",
    subtopic: "transverse-and-longitudinal",
    label: "Sound and light types swapped",
    belief: "Sound is a transverse wave and light is a longitudinal wave.",
    tell: "The student labels sound as transverse, or light as longitudinal, mixing up which example goes with which type.",
    whyItHappens: "Both words are learned at once with a list of examples, and without a reason to anchor them the two lists get swapped.",
    reteach: "Let us pin the examples down. Light, and every electromagnetic wave, is transverse, because the vibration is across the direction of travel. Sound is longitudinal, because the air moves back and forth along the direction the sound travels. A handy anchor is that sound is a pushing and squeezing wave in the air, so it is longitudinal, while light is a sideways wave, so it is transverse.",
    microExample: "Light and all electromagnetic waves: transverse. Sound: longitudinal.",
    figure: null,
    check: {
      question: "Is sound a transverse wave or a longitudinal wave?",
      answer: "Longitudinal. The air is pushed back and forth along the direction the sound travels. Light, on the other hand, is transverse."
    }
  },
  {
    id: "wav-translong-2",
    topicKey: "t10-general-wave-properties",
    subtopic: "transverse-and-longitudinal",
    label: "Longitudinal waves given crests and troughs",
    belief: "A longitudinal wave has crests and troughs, just like a transverse wave.",
    tell: "The student describes a sound wave as having crests and troughs instead of compressions and rarefactions.",
    whyItHappens: "Crests and troughs are the first wave features students learn, so they get applied to every wave, even ones that do not have them.",
    reteach: "Only transverse waves have crests and troughs, the high points and low points of the sideways vibration. A longitudinal wave, like sound, has no crests or troughs. Instead it has compressions, where the particles are squeezed close together, and rarefactions, where they are spread apart. So when you describe a sound wave, reach for compressions and rarefactions, not crests and troughs.",
    microExample: "Sound wave: compressions (particles squeezed together) and rarefactions (particles spread apart), not crests and troughs.",
    figure: "fig-11-07-longitudinal-wave.svg",
    check: {
      question: "What are the squeezed and the spread apart regions of a longitudinal wave called?",
      answer: "Compressions where the particles are squeezed together, and rarefactions where they are spread apart. Crests and troughs belong to transverse waves."
    }
  },
  {
    id: "wav-amplitude-1",
    topicKey: "t10-general-wave-properties",
    subtopic: "amplitude",
    label: "Amplitude measured crest to trough",
    belief: "The amplitude is the full distance from a crest down to a trough.",
    tell: "The student reads the whole height from the top of a crest to the bottom of a trough and calls that the amplitude, giving double the real value.",
    whyItHappens: "The crest to trough gap is the biggest, most obvious distance on the wave, so it gets picked as the amplitude instead of the smaller rest to crest distance.",
    reteach: "Amplitude is measured from the rest line in the middle out to a crest, or from the rest line down to a trough. It is only half of the full crest to trough height. So if a crest sits six centimetres above the middle and a trough six centimetres below, the amplitude is six centimetres, not twelve. Measuring the whole crest to trough gap gives you double the amplitude.",
    microExample: "Crest 6 cm above rest, trough 6 cm below rest: amplitude = 6 cm (not the 12 cm crest-to-trough span).",
    figure: "fig-11-09-amplitude.svg",
    check: {
      question: "A crest is four centimetres above the rest line and the trough is four centimetres below it. What is the amplitude?",
      answer: "Four centimetres, measured from the middle to the crest. The eight centimetre gap from crest to trough is twice the amplitude."
    }
  },
  {
    id: "wav-amplitude-2",
    topicKey: "t10-general-wave-properties",
    subtopic: "amplitude",
    label: "Amplitude tells you speed or frequency",
    belief: "A bigger amplitude means the wave is faster or has a higher frequency.",
    tell: "The student uses the amplitude to judge the speed, frequency or wavelength of a wave, instead of linking it to energy.",
    whyItHappens: "A tall wave looks powerful and dramatic, so it is read as fast or fast repeating, when amplitude actually says something different.",
    reteach: "Amplitude tells you about the energy the wave carries, not its speed or how often it repeats. A larger amplitude means the wave carries more energy, and a smaller amplitude means less energy. The speed depends on the medium, and the frequency depends on the source, so both are set separately from the amplitude. A tall wave and a short wave can travel at the very same speed.",
    microExample: "Two waves, same wavelength, one taller: the taller one carries more energy, but they can share the same speed and frequency.",
    figure: "fig-11-10-amplitude-energy.svg",
    check: {
      question: "If one wave has a larger amplitude than another, what does that tell you?",
      answer: "That it carries more energy. It does not tell you the wave is faster or that it has a higher frequency."
    }
  },
  {
    id: "wav-wavelength-1",
    topicKey: "t10-general-wave-properties",
    subtopic: "wavelength",
    label: "Wavelength measured to the next trough",
    belief: "The wavelength is the distance from a crest to the very next trough.",
    tell: "The student measures from a crest to the neighbouring trough, giving half the real wavelength, or calls some other short distance the wavelength.",
    whyItHappens: "A crest and the next trough are neighbours and easy to spot, so that gap gets chosen, but it is only half of one full wave.",
    reteach: "One wavelength is the length of a complete wave, so measure it between two points that are in phase, like one crest to the next crest, or one trough to the next trough. A crest to the neighbouring trough is only half of that, so it gives half the wavelength. Always go crest to crest, or trough to trough, to capture a whole wave.",
    microExample: "Crest to next crest = one wavelength. Crest to next trough = half a wavelength.",
    figure: "fig-11-13-displacement-distance.svg",
    check: {
      question: "To measure one full wavelength on a wave, between which two points should you measure?",
      answer: "From one crest to the next crest, or one trough to the next trough. A crest to the neighbouring trough is only half a wavelength."
    }
  },
  {
    id: "wav-freqperiod-1",
    topicKey: "t10-general-wave-properties",
    subtopic: "frequency-and-period",
    label: "Frequency and period confused",
    belief: "Frequency and period are the same thing, so the frequency is the time for one oscillation.",
    tell: "The student gives the period when asked for the frequency, or writes the frequency in seconds instead of hertz.",
    whyItHappens: "Frequency and period both describe the timing of a wave and are introduced together, so their meanings and their reciprocal link get muddled.",
    reteach: "Frequency and period are opposites of each other. The period is the time for one complete wave, measured in seconds. The frequency is how many complete waves happen each second, measured in hertz. They are linked by frequency equals one divided by the period. So a period of one fifth of a second gives a frequency of five hertz, because five waves fit into each second.",
    microExample: "T = 0.2 s gives f = 1 / 0.2 = 5 Hz. The period is in seconds; the frequency is in hertz.",
    figure: "fig-11-12-frequency.svg",
    check: {
      question: "A wave has a period of one quarter of a second. What is its frequency?",
      answer: "Four hertz, because frequency is one divided by the period, and one divided by a quarter is four. Four complete waves happen each second."
    }
  },
  {
    id: "wav-freqperiod-2",
    topicKey: "t10-general-wave-properties",
    subtopic: "frequency-and-period",
    label: "Frequency and period rise together",
    belief: "A higher frequency goes with a longer period.",
    tell: "The student expects the period to grow when the frequency grows, treating them as changing the same way.",
    whyItHappens: "Both quantities describe timing, so it feels natural that making one bigger makes the other bigger, but they are reciprocals and move in opposite directions.",
    reteach: "Frequency and period pull in opposite directions. A high frequency means many waves each second, and squeezing in many waves means each one takes only a short time, so the period is small. A low frequency means few waves each second, so each one takes longer and the period is large. So raising the frequency shortens the period, it does not lengthen it.",
    microExample: "f = 2 Hz gives T = 0.5 s; f = 10 Hz gives T = 0.1 s. Higher frequency, shorter period.",
    figure: "fig-11-12-frequency.svg",
    check: {
      question: "If the frequency of a wave increases, what happens to its period?",
      answer: "The period gets shorter. Frequency and period are reciprocals, so when one goes up the other goes down."
    }
  },
  {
    id: "wav-graph-1",
    topicKey: "t10-general-wave-properties",
    subtopic: "wave-graphs",
    label: "The two wave graphs mixed up",
    belief: "A displacement against distance graph and a displacement against time graph show the same thing, so either one gives the wavelength or the period.",
    tell: "The student reads a period off a displacement against distance graph, or a wavelength off a displacement against time graph, without checking the horizontal axis.",
    whyItHappens: "The two graphs can look exactly the same shape, so students read them the same way and forget to check what the horizontal axis measures.",
    reteach: "The two graphs look alike but tell you different things, so always read the horizontal axis first. A displacement against distance graph is a snapshot of the whole wave at one moment, and the gap between crests on it is the wavelength. A displacement against time graph follows one particle over time, and the gap between crests on it is the period. So the distance axis gives the wavelength, and the time axis gives the period.",
    microExample: "Horizontal axis in metres: read the wavelength. Horizontal axis in seconds: read the period.",
    figure: "fig-11-14-interpret-graphs.svg",
    check: {
      question: "You want the period of a wave. Which graph do you read it from, and what is on its horizontal axis?",
      answer: "A displacement against time graph, with time on the horizontal axis. The period is the gap for one complete cycle along the time axis."
    }
  },
  {
    id: "wav-vflambda-1",
    topicKey: "t10-general-wave-properties",
    subtopic: "wave-speed-equation",
    label: "Wave equation rearranged wrongly",
    belief: "You can multiply or divide the quantities in the wave equation in any order to find what you want.",
    tell: "The student divides when they should multiply, or multiplies when they should divide, when using the relationship between speed, frequency and wavelength.",
    whyItHappens: "The three quantities all sit in one short equation, so it is easy to combine them the wrong way when rearranging for the one you want.",
    reteach: "Start from the wave equation: wave speed equals frequency times wavelength. To find the speed, multiply the frequency by the wavelength. To find the frequency, divide the speed by the wavelength. To find the wavelength, divide the speed by the frequency. So only the speed comes from multiplying, and the other two come from dividing the speed by what you know.",
    microExample: "v = f x lambda. So f = v / lambda and lambda = v / f. Only v uses multiplication.",
    figure: null,
    check: {
      question: "You know the wave speed and the wavelength, and you want the frequency. Do you multiply or divide?",
      answer: "Divide the wave speed by the wavelength. Multiplying would give the wrong answer, since only the speed comes from multiplying."
    }
  },
  {
    id: "wav-speedsource-1",
    topicKey: "t10-general-wave-properties",
    subtopic: "wave-speed",
    label: "Shaking faster speeds the wave up",
    belief: "Raising the frequency of a wave makes it travel faster through the same medium.",
    tell: "The student says shaking a rope faster increases the wave speed, rather than shortening the wavelength.",
    whyItHappens: "More shakes per second feels more energetic and busy, so it seems the wave must be racing along faster, when really the speed is set by the medium.",
    reteach: "For a given medium the wave speed is fixed by the medium itself, such as the tension in a rope, not by how fast you shake it. So if you raise the frequency, the speed stays the same and the wavelength gets shorter instead, keeping the wave equation true. Speeding up the shaking packs more, shorter waves into the rope, but each wave still travels at the same speed.",
    microExample: "Same rope, shake twice as fast: speed unchanged, so wavelength halves (v = f x lambda holds).",
    figure: "fig-11-03-wave-in-rope.svg",
    check: {
      question: "You shake a rope faster, raising the frequency, but the rope and its tension are unchanged. What happens to the wave speed?",
      answer: "It stays the same, because the speed is set by the rope, not the shaking. The wavelength gets shorter instead."
    }
  },
  {
    id: "wav-medium-freq-1",
    topicKey: "t10-general-wave-properties",
    subtopic: "refraction",
    label: "Frequency changes in a new medium",
    belief: "When a wave speeds up or slows down in a new medium, its frequency changes.",
    tell: "The student says the frequency drops when a wave slows down entering a new medium.",
    whyItHappens: "It seems fair that a slower wave should also repeat more slowly, so the frequency is expected to fall along with the speed.",
    reteach: "The frequency of a wave is set by its source, and it does not change when the wave crosses into a new medium. The source keeps vibrating at the same rate, so the same number of waves arrive each second. What changes is the speed, and to keep the wave equation true the wavelength changes to match. So when a wave slows down, the frequency stays the same and the wavelength gets shorter.",
    microExample: "Wave enters shallow water and slows: frequency stays the same, wavelength shortens.",
    figure: null,
    check: {
      question: "A water wave slows down as it moves into shallow water. What happens to its frequency?",
      answer: "It stays the same, because frequency is set by the source. The wavelength changes to match the new speed instead."
    }
  },
  {
    id: "wav-medium-wavelength-1",
    topicKey: "t10-general-wave-properties",
    subtopic: "refraction",
    label: "Slower wave given a longer wavelength",
    belief: "When a wave slows down in a new medium, its wavelength gets longer.",
    tell: "The student says a slower wave stretches out to a longer wavelength, getting the relationship backwards.",
    whyItHappens: "Slowing down sounds like stretching out, so a longer wavelength feels right, but with a fixed frequency the opposite happens.",
    reteach: "When a wave changes speed but its frequency stays the same, the wavelength changes the same way the speed does. A faster wave has a longer wavelength, and a slower wave has a shorter wavelength. So when a wave slows down entering a new medium, its wavelength gets shorter, not longer. You can see this from the wave equation: with the frequency fixed, a smaller speed means a smaller wavelength.",
    microExample: "Frequency fixed: speed halves, so wavelength halves too (v = f x lambda).",
    figure: null,
    check: {
      question: "A wave slows down as it enters a new medium, but its frequency stays the same. What happens to its wavelength?",
      answer: "It gets shorter. With the frequency fixed, a slower speed means a shorter wavelength, not a longer one."
    }
  },
  {
    id: "wav-wavefront-1",
    topicKey: "t10-general-wave-properties",
    subtopic: "wavefronts",
    label: "Wave travels along its wavefronts",
    belief: "A wave travels in the same direction as its wavefronts, along them.",
    tell: "The student draws the direction of travel parallel to the wavefronts instead of at right angles to them.",
    whyItHappens: "The wavefronts are the lines you can see, so it is natural to assume the wave moves along those lines rather than across them.",
    reteach: "A wave always travels at right angles to its wavefronts, not along them. Picture circular ripples spreading from a point where a stone dropped in. The wavefronts are the circles, and the wave moves straight outwards, at right angles to each circle. So to find the direction of travel, draw a line that crosses the wavefronts squarely, not one that runs along them.",
    microExample: "Circular wavefronts from a point source: the wave travels straight outward, at right angles to each circle.",
    figure: "fig-11-05-wavefront.svg",
    check: {
      question: "In which direction does a wave travel compared with its wavefronts?",
      answer: "At right angles to them. If the wavefronts are circles spreading out, the wave moves straight outward, crossing them squarely."
    }
  },
  {
    id: "wav-wavefront-2",
    topicKey: "t10-general-wave-properties",
    subtopic: "wavefronts",
    label: "Wavefront spacing read wrongly",
    belief: "Two neighbouring wavefronts are half a wavelength apart.",
    tell: "The student says successive wavefronts are separated by half a wavelength, or by a period, rather than by one whole wavelength.",
    whyItHappens: "The spacing of wavefronts is easy to guess at, and half a wavelength or the period get borrowed from other parts of the topic.",
    reteach: "Neighbouring wavefronts are always one whole wavelength apart. Each wavefront joins points at the same stage of the wave, like all the points on one crest, and the next wavefront is the next crest along, one full wavelength away. It is a distance, measured in metres, not a time, so the period does not belong here. So the gap from one wavefront to the next is exactly one wavelength.",
    microExample: "Successive crest wavefronts: one wavelength apart (a distance in metres, not half a wavelength or a period).",
    figure: "fig-11-05-wavefront.svg",
    check: {
      question: "How far apart are two neighbouring wavefronts?",
      answer: "One whole wavelength. Each wavefront is the next crest along, a full wavelength from the one before it."
    }
  },
  {
    id: "wav-phase-1",
    topicKey: "t10-general-wave-properties",
    subtopic: "phase",
    label: "Points wrongly called in phase",
    belief: "A crest and the next trough are in phase, and points half a wavelength apart are in phase.",
    tell: "The student picks a crest and the neighbouring trough, or two points half a wavelength apart, as being in phase.",
    whyItHappens: "A crest and a trough are both turning points that look alike, so they seem to match, but they are actually moving in opposite directions.",
    reteach: "Two points are in phase when they are at the same position relative to the rest line and moving the same way. Two crests fit this, and so do two troughs, and in general points a whole wavelength apart are in phase. A crest and the next trough are not in phase, because one is at the top and one at the bottom, moving in opposite directions. So look for points a whole wavelength apart, not half.",
    microExample: "Two crests: in phase (one wavelength apart). A crest and the next trough: not in phase (half a wavelength apart).",
    figure: "fig-11-08-in-phase.svg",
    check: {
      question: "Are a crest and the very next trough in phase?",
      answer: "No. They are at opposite positions and moving in opposite directions. Two crests, a whole wavelength apart, would be in phase."
    }
  },
  {
    id: "wav-units-1",
    topicKey: "t10-general-wave-properties",
    subtopic: "units-and-conversion",
    label: "Values used without converting units",
    belief: "You can put centimetres or minutes straight into the wave equation without converting.",
    tell: "The student substitutes a wavelength in centimetres, or a time in minutes, without changing them to metres and seconds first.",
    whyItHappens: "The numbers are given in the question, so it feels natural to use them as they are, and the need to convert to base units is easy to forget.",
    reteach: "The wave equations expect base units: metres for wavelength and distance, seconds for time, and hertz for frequency. So before you calculate, change centimetres into metres and minutes into seconds. For example, eighty centimetres is nought point eight metres. Convert first, then substitute, and the speed comes out in metres per second as expected.",
    microExample: "f = 200 Hz, lambda = 80 cm = 0.80 m: v = 200 x 0.80 = 160 m/s (not 200 x 80 = 16000).",
    figure: null,
    check: {
      question: "Before using the wave equation with a wavelength given in centimetres, what should you do?",
      answer: "Change it into metres first. For example, eighty centimetres becomes nought point eight metres before you multiply."
    }
  },
  {
    id: "wav-reflection-1",
    topicKey: "t10-general-wave-properties",
    subtopic: "reflection",
    label: "Reflection changes the wave's properties",
    belief: "When a wave reflects off a barrier, its speed, frequency or wavelength change.",
    tell: "The student says a reflected wave comes back slower, or with a different frequency or wavelength.",
    whyItHappens: "Bouncing off a barrier feels like a big event, so it seems the wave should come back changed, when really only its direction changes.",
    reteach: "When a wave reflects off a barrier and stays in the same medium, its speed, frequency and wavelength all stay the same. The only thing that changes is its direction of travel. The medium has not changed, so the speed is unchanged, the source has not changed, so the frequency is unchanged, and with both fixed the wavelength is unchanged too. Reflection simply turns the wave around.",
    microExample: "Water wave reflects off a straight barrier: speed, frequency and wavelength unchanged; only the direction reverses.",
    figure: null,
    check: {
      question: "A water wave reflects off a barrier back into the same water. What happens to its wavelength?",
      answer: "It stays the same. Reflection changes only the direction of travel, not the speed, frequency or wavelength."
    }
  }
];
