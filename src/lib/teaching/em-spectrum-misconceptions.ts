// em-spectrum-misconceptions.ts
// Topic: O-Level Physics, Electromagnetic Spectrum (topicKey "t11-electromagnetic-spectrum")
// The tutor's diagnostic brain: the classic ways students go wrong on the EM spectrum,
// with the exact re-explanation for each. Grounded in
// StudyLah-HQ / Physics-Study-Notes / Chapter 13 - Electromagnetic Waves.md
// Spoken fields (reteach, tell, check.question, check.answer) are in plain words for reading aloud.
// On-screen fields (label, belief, microExample) may use _ for subscript and ^ for superscript.

import type { Misconception } from "@/lib/teaching/types";

export const EM_SPECTRUM_MISCONCEPTIONS: Misconception[] = [
  {
    id: "ems-sound-1",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "what-is-an-em-wave",
    label: "Sound counted as an electromagnetic wave",
    belief: "Sound is one of the electromagnetic waves.",
    tell: "The student lists sound alongside radio and light, or picks sound as a member of the spectrum.",
    whyItHappens: "Sound and light both travel and both carry energy, so students group them together and forget that sound is a mechanical wave made of vibrating particles.",
    reteach: "Sound is not an electromagnetic wave. Sound is a mechanical wave, which means it needs particles to pass the vibration along, so it cannot travel through empty space. An electromagnetic wave is made of a changing electric field and a changing magnetic field, and it can cross a vacuum. That is why we hear no sound from the Sun, but its light still reaches us. So the seven regions of the spectrum are radio, microwave, infrared, visible light, ultraviolet, X-rays and gamma rays, and sound is not one of them.",
    microExample: "EM family: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma. Sound is a mechanical wave, not in this list.",
    figure: "fig-13-02-em-spectrum.svg",
    check: {
      question: "Is sound one of the electromagnetic waves?",
      answer: "No. Sound is a mechanical wave that needs a medium, while electromagnetic waves can cross empty space, so sound is not part of the spectrum."
    }
  },
  {
    id: "ems-transverse-1",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "common-properties",
    label: "Electromagnetic waves thought to be longitudinal",
    belief: "Electromagnetic waves are longitudinal waves, like sound.",
    tell: "The student describes an EM wave as pushing and pulling along its direction of travel, or labels it longitudinal.",
    whyItHappens: "Sound is the wave students know best, and it is longitudinal, so they carry that picture across to every other wave.",
    reteach: "Every electromagnetic wave is a transverse wave. In a transverse wave the vibration is at right angles to the direction the wave travels. For an electromagnetic wave the electric field and the magnetic field both oscillate across the line of travel, not along it. A longitudinal wave, like sound, vibrates back and forth along the direction of travel instead. So whenever you meet any wave from the spectrum, from radio to gamma, it is transverse.",
    microExample: "EM wave: fields oscillate perpendicular to travel, so transverse. Sound: particles vibrate along travel, so longitudinal.",
    figure: "fig-13-01-em-wave-structure.svg",
    check: {
      question: "Are electromagnetic waves transverse or longitudinal?",
      answer: "They are transverse. The electric and magnetic fields vibrate at right angles to the direction the wave travels."
    }
  },
  {
    id: "ems-medium-1",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "common-properties",
    label: "Electromagnetic waves thought to need a medium",
    belief: "Electromagnetic waves need a material to travel through and cannot cross empty space.",
    tell: "The student says light cannot pass through a vacuum, or that the Sun's rays must travel through some substance to reach us.",
    whyItHappens: "Sound really does need air, so students assume every wave must have something to travel through, and forget that empty space works for light.",
    reteach: "Electromagnetic waves do not need a medium. They can travel through a vacuum, which is empty space with no particles at all. That is exactly how sunlight crosses the emptiness between the Sun and the Earth. A changing electric field creates a changing magnetic field, and that pair keeps the wave going with nothing else needed. Sound is the one that needs a medium, not electromagnetic waves.",
    microExample: "Sunlight travels through the vacuum of space to reach Earth, so no medium is needed for EM waves.",
    figure: "fig-13-01-em-wave-structure.svg",
    check: {
      question: "Can an electromagnetic wave travel through a vacuum?",
      answer: "Yes. Electromagnetic waves need no medium, which is how sunlight crosses empty space to reach us."
    }
  },
  {
    id: "ems-visible-em-1",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "common-properties",
    label: "Visible light left out of the electromagnetic spectrum",
    belief: "Visible light is not really an electromagnetic wave, because we can see it.",
    tell: "The student treats visible light as something separate from the spectrum, or excludes it when naming the seven regions.",
    whyItHappens: "The other regions are invisible, so students think of the spectrum as the invisible waves and set visible light apart because it is the one we can see.",
    reteach: "Visible light is an electromagnetic wave, and it sits right in the middle of the spectrum, between infrared and ultraviolet. It is simply the narrow band our eyes can detect, with wavelengths from about four hundred to seven hundred nanometres. The only reason it feels special is that we can see it, but it obeys all the same rules as the rest of the family and travels at the same speed in a vacuum. So visible light belongs in the spectrum, it is not separate from it.",
    microExample: "Order: radio, microwave, infrared, VISIBLE, ultraviolet, X-ray, gamma. Visible light sits in the middle.",
    figure: "fig-13-02-em-spectrum.svg",
    check: {
      question: "Is visible light part of the electromagnetic spectrum?",
      answer: "Yes. It is the band our eyes can see, and it sits between infrared and ultraviolet, obeying all the same rules as the other regions."
    }
  },
  {
    id: "ems-speed-value-1",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "speed-in-vacuum",
    label: "Speed of light confused with the speed of sound",
    belief: "Electromagnetic waves travel through a vacuum at about three hundred and forty metres per second.",
    tell: "The student gives the speed of an EM wave as the speed of sound, or picks a small everyday number for the speed of light.",
    whyItHappens: "The speed of sound is the speed students meet first, so it becomes the default figure they reach for whenever a wave speed is asked.",
    reteach: "In a vacuum every electromagnetic wave travels at the speed of light, which is three hundred million metres per second, written as three times ten to the power of eight metres per second. That is nearly a million times faster than sound, which crawls along at about three hundred and forty metres per second in air. So if a question is about radio, light, X-rays or any EM wave in a vacuum, the speed you want is three hundred million metres per second, not the speed of sound.",
    microExample: "EM wave in vacuum: v = 3 x 10^8 m/s. Sound in air: about 340 m/s. Do not swap them.",
    figure: null,
    check: {
      question: "What is the speed of an electromagnetic wave in a vacuum?",
      answer: "Three hundred million metres per second, that is three times ten to the power of eight metres per second. The speed of sound is far slower."
    }
  },
  {
    id: "ems-speed-varies-1",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "speed-in-vacuum",
    label: "Different regions thought to travel at different speeds in a vacuum",
    belief: "In a vacuum, high-energy waves like gamma rays travel faster than radio waves.",
    tell: "The student ranks the speeds of the regions, saying gamma rays or X-rays outrun radio waves through space.",
    whyItHappens: "Gamma rays carry more energy and feel more powerful, so students assume more energy must mean more speed as well.",
    reteach: "In a vacuum all electromagnetic waves travel at exactly the same speed, three hundred million metres per second, whatever their region. Gamma rays carry more energy than radio waves, but energy is not speed. What changes across the spectrum is the frequency and the wavelength, not the speed in a vacuum. So a radio wave and a gamma ray released together in space would keep pace with each other the whole way.",
    microExample: "In a vacuum: radio, visible and gamma all move at 3 x 10^8 m/s. Only their frequency and wavelength differ.",
    figure: "fig-13-02-em-spectrum.svg",
    check: {
      question: "In a vacuum, does a gamma ray travel faster than a radio wave?",
      answer: "No. Every electromagnetic wave travels at the same speed in a vacuum. Gamma rays carry more energy, but that does not make them faster."
    }
  },
  {
    id: "ems-order-1",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "spectrum-order",
    label: "Order of the spectrum reversed by frequency",
    belief: "Radio waves have the highest frequency and gamma rays have the lowest.",
    tell: "The student places radio at the high-frequency end and gamma at the low-frequency end, the whole order flipped.",
    whyItHappens: "Radio feels big and powerful in daily life, so students guess it has the biggest frequency, when really it has the longest wavelength and the lowest frequency.",
    reteach: "Let us fix the direction. From lowest frequency to highest frequency the order is radio, microwave, infrared, visible light, ultraviolet, X-rays, gamma rays. So radio waves have the lowest frequency and the longest wavelength, while gamma rays have the highest frequency and the shortest wavelength. A handy memory aid is the first letters, Radio Microwave Infrared Visible Ultraviolet X-ray Gamma. Keep radio at the low end and gamma at the high end.",
    microExample: "Low frequency to high: radio < microwave < infrared < visible < ultraviolet < X-ray < gamma.",
    figure: "fig-13-02-em-spectrum.svg",
    check: {
      question: "Which has the higher frequency, radio waves or gamma rays?",
      answer: "Gamma rays. Radio waves have the lowest frequency of all the regions, and gamma rays have the highest."
    }
  },
  {
    id: "ems-order-2",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "spectrum-order",
    label: "Middle regions of the spectrum out of order",
    belief: "The regions between radio and gamma can be listed in any order.",
    tell: "The student swaps neighbours, for example putting ultraviolet before visible light, or infrared after ultraviolet.",
    whyItHappens: "Students remember the two ends but the middle regions blur together, so infrared, visible and ultraviolet get shuffled.",
    reteach: "The spectrum is one fixed sequence, so the middle matters as much as the ends. In order of increasing frequency it goes radio, microwave, infrared, visible light, ultraviolet, X-rays, gamma rays. Notice that infrared comes just before visible light, on the red side, and ultraviolet comes just after visible light, on the violet side. The memory phrase Radio Microwave Infrared Visible Ultraviolet X-ray Gamma keeps the middle in the right order too.",
    microExample: "Correct middle run: infrared, then visible, then ultraviolet, then X-rays. Not ultraviolet before visible.",
    figure: "fig-13-02-em-spectrum.svg",
    check: {
      question: "Which region sits directly between infrared and ultraviolet?",
      answer: "Visible light. The order runs infrared, then visible light, then ultraviolet."
    }
  },
  {
    id: "ems-colour-1",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "visible-light",
    label: "Colours of visible light ordered the wrong way",
    belief: "Red light has the shortest wavelength and violet has the longest.",
    tell: "The student says violet has a longer wavelength than red, or places red next to the ultraviolet.",
    whyItHappens: "Students know red and violet sit at opposite ends of the colours but forget which end is which, so they guess and often reverse the two.",
    reteach: "Within visible light, red has the longest wavelength and the lowest frequency, and it sits next to the infrared. Violet has the shortest wavelength and the highest frequency, and it sits next to the ultraviolet. The full run from red to violet is red, orange, yellow, green, blue, indigo, violet. So red is the long-wavelength end and violet is the short-wavelength end, which fits the rest of the spectrum where wavelength shrinks as you move towards the ultraviolet.",
    microExample: "Longest wavelength to shortest: red, orange, yellow, green, blue, indigo, violet. Red is longest, violet is shortest.",
    figure: "fig-13-02-em-spectrum.svg",
    check: {
      question: "Which colour of visible light has the longest wavelength?",
      answer: "Red. It has the longest wavelength and lowest frequency, sitting next to the infrared, while violet has the shortest wavelength."
    }
  },
  {
    id: "ems-freqwave-1",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "frequency-and-wavelength",
    label: "Frequency and wavelength thought to rise together",
    belief: "A wave with a higher frequency also has a longer wavelength.",
    tell: "The student says the high-frequency waves are the ones with the biggest wavelength, treating the two as increasing together.",
    whyItHappens: "It feels natural that bigger goes with bigger, so students expect frequency and wavelength to grow side by side instead of pulling in opposite directions.",
    reteach: "Frequency and wavelength are inversely related, which means as one goes up the other goes down. This comes straight from the wave equation, speed equals frequency times wavelength, where the speed is fixed at three hundred million metres per second in a vacuum. If the speed is fixed, then a higher frequency must come with a shorter wavelength, and a lower frequency with a longer wavelength. So gamma rays have both the highest frequency and the shortest wavelength, while radio waves have the lowest frequency and the longest wavelength.",
    microExample: "v = f x wavelength with v fixed. So f up means wavelength down. Gamma: high f, short wavelength. Radio: low f, long wavelength.",
    figure: "fig-13-02-em-spectrum.svg",
    check: {
      question: "If one electromagnetic wave has a higher frequency than another, how does its wavelength compare?",
      answer: "Its wavelength is shorter. Frequency and wavelength are inversely related, because the speed is fixed in a vacuum."
    }
  },
  {
    id: "ems-energy-1",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "energy-across-the-spectrum",
    label: "Energy thought to be greatest at the radio end",
    belief: "Radio waves carry the most energy because they have the longest wavelength.",
    tell: "The student ranks radio or microwaves as the most energetic, and gamma rays as the least.",
    whyItHappens: "Long radio waves look big, so students link a long wavelength to lots of energy, when energy actually rises with frequency.",
    reteach: "The energy each wave carries grows with frequency, not with wavelength. So as you move from radio waves towards gamma rays, the frequency goes up, the wavelength goes down, and the energy per wave goes up. That means gamma rays carry the most energy and radio waves carry the least. A long wavelength does not mean high energy, it actually means low frequency and low energy. The rule to hold onto is higher frequency, shorter wavelength, more energy.",
    microExample: "Energy rises with frequency: gamma (high f) carries most energy, radio (low f) carries least.",
    figure: "fig-13-02-em-spectrum.svg",
    check: {
      question: "Which carries more energy per wave, a radio wave or a gamma ray?",
      answer: "A gamma ray. Energy grows with frequency, so the high-frequency gamma rays carry the most and radio waves carry the least."
    }
  },
  {
    id: "ems-waveeq-1",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "wave-equation",
    label: "Wave equation rearranged incorrectly",
    belief: "To find frequency you divide wavelength by speed, or you multiply speed by wavelength.",
    tell: "The student writes frequency as wavelength over speed, or as speed times wavelength, instead of speed over wavelength.",
    whyItHappens: "The three letters in speed equals frequency times wavelength are easy to shuffle, so the rearrangement comes out upside down.",
    reteach: "Start from the wave equation, speed equals frequency times wavelength. To get the frequency on its own, divide both sides by the wavelength, so frequency equals speed divided by wavelength. To get the wavelength on its own instead, divide the speed by the frequency, so wavelength equals speed divided by frequency. The speed always sits on top. A quick check is the units: speed in metres per second divided by wavelength in metres leaves per second, which is the hertz you want for frequency.",
    microExample: "v = f x wavelength, so f = v / wavelength and wavelength = v / f. The speed v is always on top.",
    figure: null,
    check: {
      question: "Starting from speed equals frequency times wavelength, how do you find the frequency?",
      answer: "Divide the speed by the wavelength. The speed stays on top, so frequency equals speed over wavelength."
    }
  },
  {
    id: "ems-units-1",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "wave-equation",
    label: "Values used without converting to metres",
    belief: "You can put a wavelength in nanometres straight into the wave equation without converting.",
    tell: "The student substitutes a wavelength in nanometres or a distance in kilometres without changing it to metres first.",
    whyItHappens: "The number is printed in the question in nanometres, so it feels ready to use, and the step of converting to metres is easy to skip.",
    reteach: "The wave equation expects metres for wavelength and metres per second for speed. So before you calculate, turn nanometres into metres. One nanometre is a billionth of a metre, so five hundred nanometres is five times ten to the power of minus seven metres. If you forget to convert and use the five hundred as it stands, your frequency comes out about a billion times too small, which is the classic sign the units were never changed. Convert first, then divide.",
    microExample: "500 nm = 5 x 10^-7 m. f = (3 x 10^8) / (5 x 10^-7) = 6 x 10^14 Hz, not (3 x 10^8) / 500.",
    figure: null,
    check: {
      question: "A wavelength is given as five hundred nanometres. What must you do before using it in the wave equation?",
      answer: "Change it into metres first. Five hundred nanometres is five times ten to the power of minus seven metres."
    }
  },
  {
    id: "ems-refraction-freq-1",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "entering-a-medium",
    label: "Frequency thought to change when a wave enters glass",
    belief: "When light passes from a vacuum into glass, its frequency changes while its speed stays the same.",
    tell: "The student says the frequency drops on entering glass, or keeps the speed unchanged as the wave slows.",
    whyItHappens: "Students know something changes when light enters glass, and they reach for frequency because it feels like the wave's identity, when it is really the speed and wavelength that change.",
    reteach: "When an electromagnetic wave passes from a vacuum into a transparent medium like glass or water, its speed decreases and its wavelength decreases, but its frequency stays the same as the source that made it. The frequency is set by the source and does not change on entering a new medium. It is the drop in speed that makes the light bend, which we call refraction. So remember, entering glass changes the speed and the wavelength, but never the frequency.",
    microExample: "Vacuum into glass: speed decreases, wavelength decreases, frequency stays the same.",
    figure: null,
    check: {
      question: "When light passes from a vacuum into glass, what happens to its frequency?",
      answer: "It stays the same. The speed and the wavelength both decrease, but the frequency is fixed by the source and does not change."
    }
  },
  {
    id: "ems-refraction-speed-1",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "entering-a-medium",
    label: "Speed thought to increase in a denser medium",
    belief: "Light speeds up when it passes from a vacuum into glass or water.",
    tell: "The student says the wave goes faster in glass, or that nothing about its speed changes.",
    whyItHappens: "Students picture glass as clear and easy to pass through, so they expect the light to move faster, when a denser medium actually slows it.",
    reteach: "Light travels fastest in a vacuum. When it enters a denser transparent medium such as glass or water, it slows down, so its speed decreases, not increases. Because the frequency stays fixed, the wavelength shrinks to match the slower speed. This slowing is exactly what makes the ray bend towards the surface as it enters, which is refraction. So going into glass means slower, not faster.",
    microExample: "Vacuum: fastest at 3 x 10^8 m/s. Into glass or water: speed decreases, and the ray refracts.",
    figure: null,
    check: {
      question: "Does light speed up or slow down when it enters glass from a vacuum?",
      answer: "It slows down. Light is fastest in a vacuum, and entering a denser medium reduces its speed, which is what bends the ray."
    }
  },
  {
    id: "ems-ionising-all-1",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "dangers",
    label: "All electromagnetic waves thought to be dangerous",
    belief: "Every electromagnetic wave is ionising, so radio waves and microwaves cause cancer just like gamma rays.",
    tell: "The student marks radio waves or microwaves as ionising, or treats the whole spectrum as equally harmful.",
    whyItHappens: "The word radiation sounds alarming, so students assume anything on the spectrum must be able to ionise and harm cells.",
    reteach: "Only the high-energy end of the spectrum is ionising, meaning ultraviolet, X-rays and gamma rays. These carry enough energy per wave to knock electrons out of atoms and damage living cells, which is why they raise the risk of cancer. Radio waves and microwaves sit at the low-energy end, so they are non-ionising and do not damage cells in that way. So it is not the whole spectrum that is dangerous, just the three high-frequency regions.",
    microExample: "Ionising: ultraviolet, X-rays, gamma rays. Non-ionising: radio, microwave, infrared, visible light.",
    figure: "fig-13-02-em-spectrum.svg",
    check: {
      question: "Are radio waves ionising like gamma rays?",
      answer: "No. Radio waves are low-energy and non-ionising. Only ultraviolet, X-rays and gamma rays carry enough energy to ionise atoms and harm cells."
    }
  },
  {
    id: "ems-ionising-lowend-1",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "dangers",
    label: "Danger thought to grow towards the radio end",
    belief: "The most dangerous, ionising waves are the ones with the longest wavelength, like radio waves.",
    tell: "The student says danger increases towards the radio end, or names radio waves as the ionising ones.",
    whyItHappens: "Students link a long wavelength to lots of energy, so they expect the long radio waves to be the harmful ionising ones, the opposite of the truth.",
    reteach: "The danger grows towards the high-frequency end of the spectrum, not the radio end. Energy rises with frequency, so it is ultraviolet, X-rays and gamma rays, the short-wavelength waves, that are ionising and can damage living cells. Radio waves have the longest wavelength and the lowest energy, so they are the safest in this sense. So as you move towards gamma rays the waves get more energetic and more dangerous, and as you move towards radio waves they get gentler.",
    microExample: "Danger rises with frequency: gamma most dangerous (ionising), radio least. Long wavelength means low energy.",
    figure: "fig-13-02-em-spectrum.svg",
    check: {
      question: "Towards which end of the spectrum does the danger from ionising radiation grow?",
      answer: "Towards the high-frequency end, the ultraviolet, X-ray and gamma end. Radio waves at the long-wavelength end are low-energy and non-ionising."
    }
  },
  {
    id: "ems-ionising-visible-1",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "dangers",
    label: "Visible light or infrared thought to be ionising",
    belief: "Visible light and infrared are ionising and damage cells like X-rays do.",
    tell: "The student includes visible light or infrared in the list of ionising, cell-damaging waves.",
    whyItHappens: "Students know light and heat come from the Sun and can feel warm, so they lump visible and infrared in with the harmful high-energy waves.",
    reteach: "Visible light and infrared are not ionising. The ionising waves start at ultraviolet and continue through X-rays and gamma rays, because only from ultraviolet upwards is there enough energy per wave to knock electrons out of atoms. Infrared and visible light sit just below ultraviolet, so they carry less energy and cannot ionise. Infrared can warm you, and too much sunlight can burn, but the cell-damaging ionising effect belongs to ultraviolet, X-rays and gamma rays.",
    microExample: "Boundary: infrared and visible are non-ionising; ultraviolet and above are ionising.",
    figure: "fig-13-02-em-spectrum.svg",
    check: {
      question: "Are visible light and infrared ionising?",
      answer: "No. The ionising waves begin at ultraviolet and go up through X-rays and gamma rays. Infrared and visible light carry too little energy to ionise."
    }
  },
  {
    id: "ems-uses-radiomicro-1",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "uses",
    label: "Communication uses tied to the wrong low-frequency wave",
    belief: "Satellite links and mobile-phone networks work with X-rays or gamma rays.",
    tell: "The student picks a high-energy wave for satellite television, GPS or phone masts, instead of microwaves.",
    whyItHappens: "Students know these jobs are high-tech, so they reach for the powerful high-energy waves, missing that communication uses the gentle low-energy end.",
    reteach: "Communication over distance uses the low-energy end of the spectrum. Microwaves carry satellite television, GPS, WiFi, radar and mobile-phone signals, because they pass easily through the atmosphere. Radio waves handle broadcasting, Bluetooth and RFID tags. The high-energy waves like X-rays and gamma rays are far too damaging for everyday signals and are kept for medical imaging and treatment instead. So for satellites and phones, think microwaves, not X-rays or gamma rays.",
    microExample: "Satellite TV, GPS, WiFi, radar, phone masts: microwaves. Broadcasting and Bluetooth: radio waves.",
    figure: null,
    check: {
      question: "Which electromagnetic wave is used for satellite television and mobile-phone networks?",
      answer: "Microwaves. They pass easily through the atmosphere. X-rays and gamma rays are far too damaging for everyday communication."
    }
  },
  {
    id: "ems-uses-ir-uv-1",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "uses",
    label: "Infrared and ultraviolet uses swapped",
    belief: "Ultraviolet is what a television remote and a thermal camera use, and infrared is what sterilises water.",
    tell: "The student assigns remote controls, heating or thermal imaging to ultraviolet, or gives sterilising and vitamin D to infrared.",
    whyItHappens: "Infrared and ultraviolet sit either side of visible light and both are invisible, so their jobs get swapped.",
    reteach: "Infrared is the heat and everyday-signal wave. It is used for grills and toasters, television remote controls, thermal imaging cameras, forehead thermometers and fibre-optic data. Ultraviolet is the higher-energy wave just past violet. It sterilises water by killing bacteria, helps the skin make vitamin D, and makes security inks glow on banknotes. So heating and remotes belong to infrared, while sterilising and vitamin D belong to ultraviolet.",
    microExample: "Infrared: remotes, grills, thermal cameras, thermometers. Ultraviolet: sterilising water, vitamin D, security inks.",
    figure: null,
    check: {
      question: "Which wave does a television remote control use, infrared or ultraviolet?",
      answer: "Infrared. Ultraviolet is used for sterilising water and making vitamin D, while remotes and heaters use infrared."
    }
  },
  {
    id: "ems-uses-xray-1",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "uses",
    label: "Bone imaging attributed to the wrong wave",
    belief: "Broken bones are imaged in hospital using radio waves or infrared.",
    tell: "The student picks a low-energy wave for viewing bone fractures, instead of X-rays.",
    whyItHappens: "Students know hospitals use many waves and may recall infrared thermometers or radio, so they attach bone scans to a wave they find less scary.",
    reteach: "Broken bones are imaged with X-rays. Dense tissue like bone absorbs more X-rays than soft tissue, so the bones show up bright on the image and fractures are easy to see. This works because X-rays are penetrating and high-energy. Radio waves and infrared do not pass through the body in this way, so they cannot show a fracture. Gamma rays are even more penetrating but are kept for treatment and sterilising, so the everyday bone scan is the X-ray.",
    microExample: "Bone fracture image: X-rays. Bone absorbs more than soft tissue, so bones look bright.",
    figure: null,
    check: {
      question: "Which electromagnetic wave is used to image a broken bone?",
      answer: "X-rays. Bone absorbs more X-rays than soft tissue, so fractures show up clearly. Radio waves and infrared cannot do this."
    }
  },
  {
    id: "ems-uses-gamma-1",
    topicKey: "t11-electromagnetic-spectrum",
    subtopic: "uses",
    label: "Sterilising and treating cancer tied to a low-energy wave",
    belief: "Radio waves or visible light are used to sterilise medical instruments and destroy cancer cells.",
    tell: "The student picks a low-energy wave for radiotherapy or for sterilising equipment, instead of gamma rays.",
    whyItHappens: "Students know sterilising and cancer treatment are medical, but they forget these jobs need the most energetic, penetrating waves.",
    reteach: "Sterilising equipment and treating cancer use gamma rays, the most energetic waves in the spectrum. Gamma rays kill germs, so they sterilise medical instruments, and carefully aimed beams destroy cancer cells in radiotherapy. This depends on their very high energy and strong penetration. Radio waves and visible light are far too low in energy for these jobs. Ultraviolet can sterilise water and surfaces, but the deep sterilising and cancer treatment belong to gamma rays.",
    microExample: "Gamma rays: sterilise instruments, radiotherapy for cancer, testing metal for cracks. All need very high energy.",
    figure: null,
    check: {
      question: "Which wave is used to sterilise medical instruments and destroy cancer cells in radiotherapy?",
      answer: "Gamma rays, the most energetic waves in the spectrum. Radio waves and visible light carry far too little energy for this."
    }
  }
];
