// em-spectrum-questions.ts
// Teaching question bank for O-Level Physics, Electromagnetic Spectrum
// (topicKey "t11-electromagnetic-spectrum"). Every wrong option maps to the
// misconception it reveals (see em-spectrum-misconceptions.ts), so the tutor
// can respond to exactly why the student erred.
// Grounded in StudyLah-HQ / Physics-Study-Notes / Chapter 13 - Electromagnetic Waves.md
// walkthrough and explain are spoken by Gugu, so they are written in plain words, no symbols.
// stem and options are shown on screen, so they may use _ for subscript and ^ for superscript.

import type { TeachQuestion } from "@/lib/teaching/types";

export const EM_SPECTRUM_QUESTIONS: TeachQuestion[] = [
  {
    id: "ems-q-01",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "what-is-an-em-wave",
    stem: "Which of these statements is correct?",
    figure: "fig-13-02-em-spectrum.svg",
    options: [
      "Visible light is an electromagnetic wave.",
      "Sound is one of the electromagnetic waves.",
      "Electromagnetic waves are longitudinal waves.",
      "Electromagnetic waves need a medium to travel through."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-sound-1", 2: "ems-transverse-1", 3: "ems-medium-1" },
    walkthrough: [
      "Visible light is one of the seven regions of the spectrum, so the first statement is correct.",
      "Sound is a mechanical wave that needs particles, so it is not an electromagnetic wave.",
      "Electromagnetic waves are transverse, not longitudinal.",
      "And they can cross empty space, so they do not need a medium."
    ],
    explain: "Visible light really is an electromagnetic wave, sitting in the middle of the spectrum. Sound is a mechanical wave, so it is not part of the family. Electromagnetic waves are transverse, with their fields vibrating across the direction of travel, and they can pass through a vacuum, so they need no medium at all."
  },
  {
    id: "ems-q-02",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "common-properties",
    stem: "Electromagnetic waves are best described as which type of wave?",
    figure: "fig-13-01-em-wave-structure.svg",
    options: [
      "Transverse waves",
      "Longitudinal waves",
      "Waves that cannot travel through a vacuum",
      "The same as sound waves"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-transverse-1", 2: "ems-medium-1", 3: "ems-sound-1" },
    walkthrough: [
      "In an electromagnetic wave the electric and magnetic fields vibrate at right angles to the direction of travel.",
      "A vibration across the direction of travel is what makes a wave transverse.",
      "A longitudinal wave vibrates along the direction of travel, like sound, which is different.",
      "So every electromagnetic wave is a transverse wave."
    ],
    explain: "Electromagnetic waves are transverse, because the electric and magnetic fields oscillate perpendicular to the way the wave travels. Longitudinal waves like sound vibrate along the direction of travel instead. Electromagnetic waves also cross a vacuum freely and are not the same as sound, which is a mechanical wave."
  },
  {
    id: "ems-q-03",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "common-properties",
    stem: "How does light from the Sun reach the Earth across empty space?",
    figure: null,
    options: [
      "Electromagnetic waves travel through a vacuum, needing no medium.",
      "The light travels through a medium that fills all of space.",
      "It cannot, so sunlight must really be a form of sound.",
      "Only after slowing to the speed of sound in space."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-medium-1", 2: "ems-sound-1", 3: "ems-speed-value-1" },
    walkthrough: [
      "Between the Sun and the Earth there is a vacuum, which is empty space with no particles.",
      "Electromagnetic waves do not need particles to travel, so a vacuum is no problem.",
      "That is exactly how sunlight crosses the emptiness of space to reach us.",
      "Sound could not make that trip, because sound needs a medium."
    ],
    explain: "Electromagnetic waves need no medium, so light crosses the vacuum of space with nothing to travel through. Space is not filled with a special medium, sunlight is not a form of sound, and the light keeps its full speed of three hundred million metres per second the whole way."
  },
  {
    id: "ems-q-04",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "spectrum-order",
    stem: "Where does visible light belong in the electromagnetic spectrum?",
    figure: "fig-13-02-em-spectrum.svg",
    options: [
      "In the middle, between infrared and ultraviolet.",
      "It is not part of the spectrum, because we can see it.",
      "At the very start, before radio waves.",
      "It is not part of the spectrum, because only invisible waves are electromagnetic."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-visible-em-1", 2: "ems-order-2", 3: "ems-visible-em-1" },
    walkthrough: [
      "The order of the spectrum is radio, microwave, infrared, visible light, ultraviolet, X-rays, gamma rays.",
      "Visible light sits between infrared on one side and ultraviolet on the other.",
      "It is the narrow band our eyes can detect, but it is still an electromagnetic wave.",
      "So it belongs right in the middle of the spectrum."
    ],
    explain: "Visible light is part of the spectrum and sits in the middle, between infrared and ultraviolet. It is only the band we can see, but it obeys all the same rules as the other regions. It does not sit before radio waves, and being visible does not push it out of the family."
  },
  {
    id: "ems-q-05",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "speed-in-vacuum",
    stem: "What is the speed of an X-ray travelling through a vacuum?",
    figure: null,
    options: [
      "3 x 10^8 m/s",
      "340 m/s",
      "Faster than a radio wave in the same vacuum",
      "1.5 x 10^3 m/s"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-speed-value-1", 2: "ems-speed-varies-1", 3: "ems-speed-value-1" },
    walkthrough: [
      "Every electromagnetic wave travels through a vacuum at the speed of light.",
      "That speed is three hundred million metres per second, written as three times ten to the power of eight metres per second.",
      "An X-ray is an electromagnetic wave, so it travels at that speed.",
      "The speed of sound, which is far slower, does not apply here."
    ],
    explain: "In a vacuum an X-ray travels at the speed of light, three times ten to the power of eight metres per second, just like every other electromagnetic wave. Three hundred and forty metres per second is the speed of sound, not light, and no electromagnetic wave outruns another in a vacuum, so an X-ray does not beat a radio wave."
  },
  {
    id: "ems-q-06",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "speed-in-vacuum",
    stem: "In a vacuum, how do the speeds of a radio wave and a gamma ray compare?",
    figure: "fig-13-02-em-spectrum.svg",
    options: [
      "They travel at exactly the same speed.",
      "The gamma ray is faster, because it carries more energy.",
      "The radio wave is faster, because it has a longer wavelength.",
      "Both crawl along at the speed of sound."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-speed-varies-1", 2: "ems-speed-varies-1", 3: "ems-speed-value-1" },
    walkthrough: [
      "In a vacuum all electromagnetic waves share the same speed.",
      "That speed is three hundred million metres per second, whatever the region.",
      "A gamma ray does carry more energy, but energy is not the same as speed.",
      "So the radio wave and the gamma ray keep pace with each other exactly."
    ],
    explain: "In a vacuum a radio wave and a gamma ray travel at the same speed. What changes across the spectrum is the frequency and the wavelength, not the speed. Carrying more energy does not make the gamma ray faster, and neither wave slows to the speed of sound, which belongs to sound alone."
  },
  {
    id: "ems-q-07",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "spectrum-order",
    stem: "Which electromagnetic wave has the highest frequency?",
    figure: "fig-13-02-em-spectrum.svg",
    options: [
      "Gamma rays",
      "Radio waves",
      "Microwaves",
      "Radio waves, because they carry the most energy"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-order-1", 2: "ems-order-1", 3: "ems-energy-1" },
    walkthrough: [
      "From lowest to highest frequency the order is radio, microwave, infrared, visible, ultraviolet, X-ray, gamma.",
      "Gamma rays sit right at the high-frequency end.",
      "Radio waves and microwaves sit at the low-frequency end, so they cannot have the highest frequency.",
      "So gamma rays have the highest frequency of all."
    ],
    explain: "Gamma rays have the highest frequency, because they lie at the top end of the spectrum. Radio waves and microwaves are at the low-frequency end, so they are the wrong way round. Radio waves also carry the least energy, not the most, since energy grows with frequency."
  },
  {
    id: "ems-q-08",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "spectrum-order",
    stem: "Which electromagnetic wave has the longest wavelength?",
    figure: "fig-13-02-em-spectrum.svg",
    options: [
      "Radio waves",
      "Gamma rays",
      "X-rays",
      "Green light"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-order-1", 2: "ems-order-1", 3: "ems-order-2" },
    walkthrough: [
      "Wavelength is longest at the radio end of the spectrum and shortest at the gamma end.",
      "Radio waves have the longest wavelength of all the regions.",
      "Gamma rays and X-rays have very short wavelengths, at the opposite end.",
      "So the radio waves are the ones with the longest wavelength."
    ],
    explain: "Radio waves have the longest wavelength, because they sit at the low-frequency end where wavelength is greatest. Gamma rays and X-rays have the shortest wavelengths, so they are reversed here. Green light sits in the middle of the visible band, far shorter than radio."
  },
  {
    id: "ems-q-09",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "spectrum-order",
    stem: "Which list gives part of the spectrum in order of increasing frequency?",
    figure: "fig-13-02-em-spectrum.svg",
    options: [
      "Infrared, visible light, ultraviolet, X-rays",
      "X-rays, ultraviolet, visible light, infrared",
      "Visible light, infrared, X-rays, ultraviolet",
      "Ultraviolet, X-rays, infrared, visible light"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-order-1", 2: "ems-order-2", 3: "ems-order-2" },
    walkthrough: [
      "Increasing frequency means starting low and climbing towards gamma rays.",
      "After infrared comes visible light, then ultraviolet, then X-rays.",
      "So the correct rising order is infrared, visible light, ultraviolet, X-rays.",
      "The reversed list runs from high frequency down to low, so it is the wrong direction."
    ],
    explain: "Increasing frequency runs infrared, visible light, ultraviolet, X-rays. The second list is that exact order reversed, which is decreasing frequency. The other two shuffle the middle regions, putting infrared or X-rays out of place, so only the first list keeps the true sequence."
  },
  {
    id: "ems-q-10",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "spectrum-order",
    stem: "Which region sits directly between infrared and ultraviolet?",
    figure: "fig-13-02-em-spectrum.svg",
    options: [
      "Visible light",
      "X-rays",
      "Microwaves",
      "Gamma rays"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-order-2", 2: "ems-order-2", 3: "ems-order-2" },
    walkthrough: [
      "Follow the order of the spectrum from radio up to gamma.",
      "Infrared comes just before visible light, on the red side.",
      "Ultraviolet comes just after visible light, on the violet side.",
      "So visible light is the region that sits between infrared and ultraviolet."
    ],
    explain: "Visible light sits directly between infrared and ultraviolet, since the order runs infrared, then visible, then ultraviolet. X-rays and gamma rays are further along at the high-frequency end, and microwaves are lower than infrared, so none of those fits between the two."
  },
  {
    id: "ems-q-11",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "visible-light",
    stem: "Which colour of visible light has the longest wavelength?",
    figure: "fig-13-02-em-spectrum.svg",
    options: [
      "Red",
      "Violet",
      "Blue",
      "Violet, because it lies next to the infrared"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-colour-1", 2: "ems-colour-1", 3: "ems-colour-1" },
    walkthrough: [
      "Within visible light the colours run from red, with the longest wavelength, to violet, with the shortest.",
      "Red lies next to the infrared, which is the long-wavelength side.",
      "Violet lies next to the ultraviolet, which is the short-wavelength side.",
      "So red is the colour with the longest wavelength."
    ],
    explain: "Red has the longest wavelength of the visible colours and sits next to the infrared. Violet has the shortest wavelength and sits next to the ultraviolet, so calling violet the longest reverses the two ends. Blue is nearer the violet end, so it is also short, not long."
  },
  {
    id: "ems-q-12",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "visible-light",
    stem: "Which colour of visible light has the lowest frequency?",
    figure: "fig-13-02-em-spectrum.svg",
    options: [
      "Red",
      "Violet",
      "Green",
      "Violet, because it has the longest wavelength"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-colour-1", 2: "ems-colour-1", 3: "ems-colour-1" },
    walkthrough: [
      "Lowest frequency goes with longest wavelength, because the two are inversely related.",
      "Red has the longest wavelength of the visible colours.",
      "So red also has the lowest frequency.",
      "Violet, at the other end, has the shortest wavelength and the highest frequency."
    ],
    explain: "Red has the lowest frequency, because it has the longest wavelength and frequency falls as wavelength grows. Violet is the opposite, with the shortest wavelength and the highest frequency, so naming violet as longest or lowest reverses the ends. Green sits in the middle."
  },
  {
    id: "ems-q-13",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "frequency-and-wavelength",
    stem: "One electromagnetic wave has a higher frequency than another. How does its wavelength compare?",
    figure: null,
    options: [
      "Its wavelength is shorter.",
      "Its wavelength is longer.",
      "Its wavelength is the same.",
      "Its speed in a vacuum is greater."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-freqwave-1", 2: "ems-freqwave-1", 3: "ems-speed-varies-1" },
    walkthrough: [
      "The wave equation says speed equals frequency times wavelength.",
      "In a vacuum the speed is fixed at three hundred million metres per second.",
      "If the speed is fixed and the frequency goes up, the wavelength must go down.",
      "So a higher frequency always means a shorter wavelength."
    ],
    explain: "A higher frequency means a shorter wavelength, because the two are inversely related through the fixed speed. They do not rise together, and the wavelength does change, so it is not the same. The speed stays fixed in a vacuum, so a higher frequency does not make the wave faster."
  },
  {
    id: "ems-q-14",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "energy-across-the-spectrum",
    stem: "Which electromagnetic wave carries the most energy per wave?",
    figure: "fig-13-02-em-spectrum.svg",
    options: [
      "Gamma rays",
      "Radio waves, because they have the longest wavelength",
      "Microwaves",
      "Radio waves, because they have the lowest frequency"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-energy-1", 2: "ems-energy-1", 3: "ems-energy-1" },
    walkthrough: [
      "The energy a wave carries grows with its frequency.",
      "Gamma rays have the highest frequency in the spectrum.",
      "So gamma rays carry the most energy of all.",
      "Radio waves have the lowest frequency, so they carry the least energy."
    ],
    explain: "Gamma rays carry the most energy, because energy rises with frequency and gamma rays have the highest frequency. A long wavelength and a low frequency, as radio waves have, mean low energy, not high. So the radio end is the least energetic, and the gamma end is the most."
  },
  {
    id: "ems-q-15",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "wave-equation",
    stem: "A beam of orange light has a wavelength of 6.0 x 10^-7 m and travels at 3.0 x 10^8 m/s in a vacuum. What is its frequency?",
    figure: null,
    options: [
      "5.0 x 10^14 Hz",
      "2.0 x 10^-15 Hz",
      "1.8 x 10^2 Hz",
      "6.0 x 10^-7 Hz"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-waveeq-1", 2: "ems-waveeq-1", 3: "ems-waveeq-1" },
    walkthrough: [
      "Start from the wave equation, speed equals frequency times wavelength.",
      "Rearrange for frequency, so frequency equals speed divided by wavelength.",
      "Divide three times ten to the power of eight by six times ten to the power of minus seven.",
      "That gives five times ten to the power of fourteen hertz."
    ],
    explain: "Frequency is speed divided by wavelength, so three times ten to the power of eight divided by six times ten to the power of minus seven gives five times ten to the power of fourteen hertz. Dividing the wavelength by the speed, or multiplying the two together, or just repeating the wavelength, all come from rearranging the equation the wrong way."
  },
  {
    id: "ems-q-16",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "wave-equation",
    stem: "Green light has a wavelength of 500 nm and travels at 3.0 x 10^8 m/s. What is its frequency? (1 nm = 10^-9 m)",
    figure: null,
    options: [
      "6.0 x 10^14 Hz",
      "6.0 x 10^5 Hz",
      "1.7 x 10^-6 Hz",
      "6.0 x 10^11 Hz"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-units-1", 2: "ems-waveeq-1", 3: "ems-units-1" },
    walkthrough: [
      "First change the wavelength into metres, because the speed is in metres per second.",
      "Five hundred nanometres is five times ten to the power of minus seven metres.",
      "Frequency is speed divided by wavelength.",
      "Three times ten to the power of eight divided by five times ten to the power of minus seven gives six times ten to the power of fourteen hertz."
    ],
    explain: "You must convert five hundred nanometres to five times ten to the power of minus seven metres first, then divide the speed by it to get six times ten to the power of fourteen hertz. Leaving the five hundred as it stands gives six times ten to the power of five, the sign the units were never changed. Dividing wavelength by speed, or converting nanometres wrongly, give the other slips."
  },
  {
    id: "ems-q-17",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "wave-equation",
    stem: "An FM radio station broadcasts at a frequency of 9.0 x 10^7 Hz. What is the wavelength of the radio waves in a vacuum? Take the speed as 3.0 x 10^8 m/s.",
    figure: null,
    options: [
      "3.3 m",
      "0.30 m",
      "2.7 x 10^16 m",
      "3.8 x 10^-6 m"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-waveeq-1", 2: "ems-waveeq-1", 3: "ems-speed-value-1" },
    walkthrough: [
      "Rearrange the wave equation for wavelength, so wavelength equals speed divided by frequency.",
      "Divide three times ten to the power of eight by nine times ten to the power of seven.",
      "That gives about three point three metres.",
      "A radio wave with a wavelength of a few metres fits the long-wavelength end of the spectrum."
    ],
    explain: "Wavelength is speed divided by frequency, so three times ten to the power of eight divided by nine times ten to the power of seven is about three point three metres. Dividing frequency by speed, or multiplying the two, come from rearranging wrongly, and using the speed of sound instead of the speed of light gives the tiny wrong answer."
  },
  {
    id: "ems-q-18",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "wave-equation",
    stem: "An X-ray has a frequency of 1.5 x 10^18 Hz. What is its wavelength in a vacuum? Take the speed as 3.0 x 10^8 m/s.",
    figure: null,
    options: [
      "2.0 x 10^-10 m",
      "5.0 x 10^9 m",
      "4.5 x 10^26 m",
      "2.3 x 10^-16 m"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-waveeq-1", 2: "ems-waveeq-1", 3: "ems-speed-value-1" },
    walkthrough: [
      "Wavelength equals speed divided by frequency.",
      "Divide three times ten to the power of eight by one point five times ten to the power of eighteen.",
      "That gives two times ten to the power of minus ten metres.",
      "This very short wavelength is exactly what we expect for an X-ray at the high-frequency end."
    ],
    explain: "Wavelength is speed divided by frequency, giving two times ten to the power of minus ten metres, a tiny wavelength that fits the X-ray region. Dividing frequency by speed, or multiplying the two, come from rearranging wrongly, and using the speed of sound rather than the speed of light gives the last wrong value."
  },
  {
    id: "ems-q-19",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "entering-a-medium",
    stem: "A ray of light passes from a vacuum into a glass block. What happens to its frequency?",
    figure: null,
    options: [
      "It stays the same.",
      "It decreases.",
      "It increases.",
      "It stays the same, and so does the speed."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-refraction-freq-1", 2: "ems-refraction-freq-1", 3: "ems-refraction-speed-1" },
    walkthrough: [
      "When light enters glass, its speed and wavelength both decrease.",
      "But the frequency is set by the source that made the light.",
      "Entering a new medium does not change that frequency.",
      "So the frequency stays the same as the wave slows and its wavelength shrinks."
    ],
    explain: "The frequency stays the same when light enters glass, because it is fixed by the source. What changes is the speed and the wavelength, which both decrease, and that drop in speed is what bends the ray. The speed does not stay the same, so the last option is wrong too."
  },
  {
    id: "ems-q-20",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "entering-a-medium",
    stem: "A ray of light passes from a vacuum into water. What happens to its speed?",
    figure: null,
    options: [
      "It decreases.",
      "It increases.",
      "It stays the same.",
      "The frequency decreases while the speed stays the same."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-refraction-speed-1", 2: "ems-refraction-speed-1", 3: "ems-refraction-freq-1" },
    walkthrough: [
      "Light travels fastest in a vacuum.",
      "Water is a denser medium than empty space.",
      "Entering the denser medium slows the light down, so its speed decreases.",
      "This slowing is what makes the ray bend as it enters."
    ],
    explain: "The speed decreases when light enters water, because a denser medium slows it, and that slowing bends the ray. The speed does not increase or stay the same. The frequency, meanwhile, stays fixed by the source, so the option that keeps the speed the same and drops the frequency is the wrong way round."
  },
  {
    id: "ems-q-21",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "entering-a-medium",
    stem: "When an electromagnetic wave passes from a vacuum into glass, which set of changes is correct?",
    figure: null,
    options: [
      "Speed decreases, wavelength decreases, frequency stays the same.",
      "Speed stays the same, frequency decreases, wavelength decreases.",
      "Speed increases, wavelength increases, frequency stays the same.",
      "Nothing changes, because it is still the same wave."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-refraction-freq-1", 2: "ems-refraction-speed-1", 3: "ems-refraction-speed-1" },
    walkthrough: [
      "The frequency is fixed by the source, so it stays the same.",
      "The wave slows on entering the denser glass, so the speed decreases.",
      "With the frequency fixed and the speed lower, the wavelength must decrease to match.",
      "So speed down, wavelength down, frequency unchanged."
    ],
    explain: "On entering glass the speed decreases, the wavelength decreases, and the frequency stays the same. Keeping the speed fixed while dropping the frequency, or speeding the wave up, both get the physics backwards, and saying nothing changes misses that the wave clearly slows and bends."
  },
  {
    id: "ems-q-22",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "dangers",
    stem: "Which statement about the danger of electromagnetic waves is correct?",
    figure: "fig-13-02-em-spectrum.svg",
    options: [
      "Only ultraviolet, X-rays and gamma rays are ionising.",
      "Every electromagnetic wave is ionising, so radio waves cause cancer too.",
      "Radio waves and microwaves are the ionising, dangerous ones.",
      "Visible light and infrared are ionising like X-rays."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-ionising-all-1", 2: "ems-ionising-lowend-1", 3: "ems-ionising-visible-1" },
    walkthrough: [
      "Ionising means carrying enough energy per wave to knock electrons out of atoms.",
      "Only the high-energy end of the spectrum can do this.",
      "That means ultraviolet, X-rays and gamma rays.",
      "Radio, microwave, infrared and visible light are all non-ionising."
    ],
    explain: "Only ultraviolet, X-rays and gamma rays are ionising, because only they carry enough energy to knock electrons from atoms. Radio waves and microwaves are low-energy and non-ionising, so they do not cause cancer that way, and visible light and infrared are also below the ionising threshold."
  },
  {
    id: "ems-q-23",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "dangers",
    stem: "Towards which end of the spectrum does the risk from ionising radiation grow?",
    figure: "fig-13-02-em-spectrum.svg",
    options: [
      "Towards the high-frequency, gamma-ray end.",
      "Towards the long-wavelength, radio end.",
      "It is the same all across the spectrum.",
      "Towards the infrared, because it feels warm."
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-ionising-lowend-1", 2: "ems-ionising-all-1", 3: "ems-ionising-visible-1" },
    walkthrough: [
      "Energy grows with frequency across the spectrum.",
      "More energy per wave means a greater chance of ionising atoms.",
      "So the danger grows towards the high-frequency, gamma-ray end.",
      "The radio end is low-energy and non-ionising."
    ],
    explain: "The risk grows towards the high-frequency, gamma-ray end, because energy rises with frequency. The long-wavelength radio end is the safest, so growing danger towards radio is backwards. The danger is not the same everywhere, and infrared feeling warm does not make it ionising."
  },
  {
    id: "ems-q-24",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "dangers",
    stem: "Which group of waves is ionising and can damage living cells?",
    figure: "fig-13-02-em-spectrum.svg",
    options: [
      "Ultraviolet, X-rays and gamma rays",
      "Radio waves, microwaves and infrared",
      "Infrared, visible light and ultraviolet",
      "All seven regions equally"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-ionising-lowend-1", 2: "ems-ionising-visible-1", 3: "ems-ionising-all-1" },
    walkthrough: [
      "The ionising waves are the ones with enough energy to knock electrons from atoms.",
      "That group starts at ultraviolet and continues to X-rays and gamma rays.",
      "The lower-energy waves below ultraviolet cannot ionise.",
      "So ultraviolet, X-rays and gamma rays are the damaging group."
    ],
    explain: "Ultraviolet, X-rays and gamma rays are the ionising group that can damage cells. The radio, microwave and infrared set is low-energy and non-ionising, and infrared and visible light both sit below the ionising threshold, so a group including them is wrong. The seven regions are not equally dangerous."
  },
  {
    id: "ems-q-25",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "uses",
    stem: "Which electromagnetic wave is used for satellite television, GPS and mobile-phone networks?",
    figure: null,
    options: [
      "Microwaves",
      "Gamma rays",
      "X-rays",
      "Ultraviolet"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-uses-radiomicro-1", 2: "ems-uses-radiomicro-1", 3: "ems-uses-radiomicro-1" },
    walkthrough: [
      "Satellite links, GPS and phone networks all need waves that pass easily through the atmosphere.",
      "Microwaves do this well and carry these signals.",
      "The high-energy waves like gamma rays and X-rays would be far too damaging for everyday signals.",
      "So microwaves are the wave used for satellite and phone communication."
    ],
    explain: "Microwaves carry satellite television, GPS and mobile-phone signals, because they pass easily through the atmosphere. Gamma rays, X-rays and ultraviolet are all high-energy waves kept for medicine and sterilising, not for communication, so reaching for them here means picking the wrong end of the spectrum."
  },
  {
    id: "ems-q-26",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "uses",
    stem: "A television remote control sends its signal using which electromagnetic wave?",
    figure: null,
    options: [
      "Infrared",
      "Ultraviolet",
      "Ultraviolet, the same wave that sterilises water",
      "Microwaves"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-uses-ir-uv-1", 2: "ems-uses-ir-uv-1", 3: "ems-uses-radiomicro-1" },
    walkthrough: [
      "A remote control sends a short signal to a nearby device.",
      "This job is done by infrared, the same wave used in many everyday electronics.",
      "Ultraviolet is a higher-energy wave used for sterilising and making vitamin D, not for remotes.",
      "So a remote control works with infrared."
    ],
    explain: "A television remote uses infrared, the everyday-signal and heat wave. Ultraviolet is the higher-energy wave that sterilises water and helps make vitamin D, so assigning the remote to ultraviolet swaps the two. Microwaves are for longer-range communication like satellites and phones, not a remote across the room."
  },
  {
    id: "ems-q-27",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "uses",
    stem: "Which wave is used to sterilise drinking water by killing bacteria, and helps skin make vitamin D?",
    figure: null,
    options: [
      "Ultraviolet",
      "Infrared",
      "Infrared, the wave used in remote controls",
      "Radio waves"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-uses-ir-uv-1", 2: "ems-uses-ir-uv-1", 3: "ems-uses-radiomicro-1" },
    walkthrough: [
      "Sterilising water and making vitamin D both need a higher-energy wave than heat.",
      "Ultraviolet does both jobs, killing bacteria and helping the skin make vitamin D.",
      "Infrared is the heat and remote-control wave, one step lower in energy.",
      "So ultraviolet is the wave for sterilising water and vitamin D."
    ],
    explain: "Ultraviolet sterilises water and helps the skin make vitamin D, because it carries enough energy to kill bacteria. Infrared is the heat and remote-control wave, so giving it these jobs swaps infrared and ultraviolet. Radio waves are for broadcasting and short-range links, not sterilising."
  },
  {
    id: "ems-q-28",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "uses",
    stem: "Which electromagnetic wave is used in hospitals to produce images of broken bones?",
    figure: null,
    options: [
      "X-rays",
      "Radio waves",
      "Infrared",
      "Microwaves"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-uses-xray-1", 2: "ems-uses-xray-1", 3: "ems-uses-xray-1" },
    walkthrough: [
      "Bone is denser than the soft tissue around it.",
      "Dense bone absorbs more X-rays than soft tissue does.",
      "So the bones show up bright on the image and fractures are easy to see.",
      "That is why X-rays are used to image broken bones."
    ],
    explain: "X-rays image broken bones, because dense bone absorbs more of them than soft tissue, so fractures show up clearly. Radio waves, infrared and microwaves are all low-energy and do not pass through the body this way, so they cannot produce a bone image."
  },
  {
    id: "ems-q-29",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "uses",
    stem: "Which wave is used to sterilise medical instruments and to destroy cancer cells in radiotherapy?",
    figure: null,
    options: [
      "Gamma rays",
      "Radio waves",
      "Visible light",
      "Infrared"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-uses-gamma-1", 2: "ems-uses-gamma-1", 3: "ems-uses-gamma-1" },
    walkthrough: [
      "Sterilising instruments and treating cancer both need the most energetic, penetrating waves.",
      "Gamma rays are the most energetic waves in the spectrum.",
      "They kill germs to sterilise equipment and destroy cancer cells in radiotherapy.",
      "So gamma rays are the wave used for both jobs."
    ],
    explain: "Gamma rays sterilise medical instruments and destroy cancer cells in radiotherapy, because they are the most energetic and penetrating waves. Radio waves, visible light and infrared all carry far too little energy for these jobs, so picking them means reaching for the wrong, low-energy end of the spectrum."
  },
  {
    id: "ems-q-30",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "uses",
    stem: "The glowing element of a toaster transfers energy to the bread using which wave?",
    figure: null,
    options: [
      "Infrared",
      "Ultraviolet",
      "Microwaves",
      "Ultraviolet, because it comes from a hot glowing object"
    ],
    correct: 0,
    distractorMisconceptions: { 1: "ems-uses-ir-uv-1", 2: "ems-uses-radiomicro-1", 3: "ems-uses-ir-uv-1" },
    walkthrough: [
      "A hot glowing element gives out radiation that warms the food.",
      "The wave that carries this heat is infrared.",
      "Infrared is the wave grills, toasters and heaters use to cook and warm.",
      "So the toaster transfers energy to the bread using infrared."
    ],
    explain: "A toaster uses infrared, the heat wave, to transfer energy to the bread. Ultraviolet is the higher-energy sterilising and vitamin D wave, so assigning the heating to ultraviolet swaps the two. Microwaves heat food in a microwave oven, but the glowing element of a toaster gives out infrared."
  }
];
