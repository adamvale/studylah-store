---
level: o-level
slug: physics-pure
subjectName: Physics (Pure)
family: physics
---

## QUESTIONS

```yaml
type: mcq
topic: "T20 Radioactivity"
stem: "A detector next to a radioactive source records 850 counts per minute. With the source removed the detector records 50 counts per minute. The half-life of the source is 8.0 minutes. What will the detector record 24 minutes later?"
options:
  - "106 counts per minute"
  - "150 counts per minute"
  - "100 counts per minute"
  - "200 counts per minute"
answer: 1
marks: 1
misconception: background-not-subtracted
worked: |
  Correct for background FIRST: 850 − 50 = 800 counts per minute from the source.
  24 min ÷ 8.0 min = 3 half-lives.
  800 → 400 → 200 → 100 counts per minute from the source.
  The detector still picks up the background, so the reading = 100 + 50 = 150 counts per minute.
```

```yaml
type: mcq
topic: "T20 Radioactivity"
stem: "The corrected activity of a sample falls from 640 Bq to 40 Bq in 24 minutes. What is the half-life of the sample?"
options:
  - "4.0 minutes"
  - "6.0 minutes"
  - "8.0 minutes"
  - "12 minutes"
answer: 1
marks: 1
misconception: half-life-chain-count
worked: |
  Halve repeatedly: 640 → 320 → 160 → 80 → 40 Bq. That is 4 halvings.
  Half-life = 24 ÷ 4 = 6.0 minutes.
```

```yaml
type: mcq
topic: "T20 Radioactivity"
stem: "The nuclide ²²⁶₈₈Ra decays by emitting an α-particle. Which nuclide is the daughter product?"
options:
  - "²²²₈₆Rn"
  - "²²²₈₈Ra"
  - "²²⁶₈₆Rn"
  - "²³⁰₉₀Th"
answer: 0
marks: 1
misconception: alpha-decay-numbers
worked: |
  An α-particle is ⁴₂He. Subtract 4 from the nucleon number and 2 from the proton number.
  Nucleon number: 226 − 4 = 222. Proton number: 88 − 2 = 86.
  Proton number 86 is radon, so the daughter is ²²²₈₆Rn.
```

```yaml
type: mcq
topic: "T20 Radioactivity"
stem: "The nuclide ²¹⁴₈₂Pb decays by emitting a β⁻ particle. Which nuclide is the daughter product?"
options:
  - "²¹⁴₈₃Bi"
  - "²¹⁰₈₀Hg"
  - "²¹⁴₈₁Tl"
  - "²¹³₈₂Pb"
answer: 0
marks: 1
misconception: beta-decay-proton-number
worked: |
  In β⁻ decay a neutron changes into a proton and an electron (⁰₋₁e) is emitted.
  Nucleon number is unchanged: 214.
  Proton number rises by 1: 82 + 1 = 83, which is bismuth.
  Daughter = ²¹⁴₈₃Bi.
```

```yaml
type: mcq
topic: "T20 Radioactivity"
stem: "How many neutrons are there in one nucleus of ²³⁵₉₂U?"
options:
  - "92"
  - "143"
  - "235"
  - "327"
answer: 1
marks: 1
misconception: nucleon-vs-neutron-number
worked: |
  Neutron number = nucleon number − proton number.
  = 235 − 92 = 143 neutrons.
```

```yaml
type: mcq
topic: "T20 Radioactivity"
stem: "A radiation passes straight through a sheet of paper but is completely stopped by a 3 mm sheet of aluminium. Which radiation is it?"
options:
  - "α only"
  - "β only"
  - "γ only"
  - "α and γ"
answer: 1
marks: 1
misconception: penetration-order
worked: |
  α is stopped by paper (or a few cm of air), so it cannot be α.
  γ passes through several cm of lead, so a few mm of aluminium would not stop it.
  β passes through paper but is absorbed by a few mm of aluminium — so the radiation is β.
```

```yaml
type: mcq
topic: "T20 Radioactivity"
stem: "An excited nucleus emits a γ-ray. What happens to its nucleon number and its proton number?"
options:
  - "Both stay the same"
  - "Nucleon number falls by 4 and proton number falls by 2"
  - "Proton number rises by 1 and nucleon number stays the same"
  - "Nucleon number falls by 1 and proton number stays the same"
answer: 0
marks: 1
misconception: gamma-changes-nucleus
worked: |
  A γ-ray is a high-energy electromagnetic wave — it carries away energy but no nucleons and no charge.
  So the nucleon number and the proton number are both unchanged; only the energy of the nucleus falls.
```

```yaml
type: mcq
topic: "T20 Radioactivity"
stem: "Living wood gives a ¹⁴C count rate of 16 counts per minute per gram. A wooden artefact gives a corrected count rate of 2.0 counts per minute per gram. The half-life of ¹⁴C is 5700 years. Estimate the age of the artefact."
options:
  - "5700 years"
  - "11 400 years"
  - "17 100 years"
  - "22 800 years"
answer: 2
marks: 1
misconception: dating-half-life-count
worked: |
  16 → 8 → 4 → 2 counts per minute per gram: that is 3 halvings.
  Age = 3 × 5700 = 17 100 years.
```

```yaml
type: mcq
topic: "T20 Radioactivity"
stem: "Which is normally the largest natural contributor to the background radiation a person receives?"
options:
  - "Radon gas escaping from rocks and soil"
  - "Nuclear power stations"
  - "Medical X-ray machines"
  - "Overhead power cables"
answer: 0
marks: 1
misconception: background-sources
worked: |
  Background radiation comes mainly from natural sources. For most people the biggest single contributor is radon gas that seeps out of rocks and soil and collects in buildings.
  Power stations and medical X-rays are man-made contributions and are much smaller on average; overhead power cables emit no ionising radiation at all.
```

```yaml
type: mcq
topic: "T20 Radioactivity"
stem: "A factory checks the thickness of thin aluminium foil using a radioactive source and a detector on the other side of the foil. Which source is most suitable?"
options:
  - "An α-source, because α is the most ionising radiation"
  - "A β-source, because the count rate reaching the detector changes when the foil thickness changes"
  - "A γ-source, because γ passes straight through the foil"
  - "A source with a half-life of a few minutes, so it is safe"
answer: 1
marks: 1
misconception: gauge-source-choice
worked: |
  α would be absorbed completely by the foil — the detector would read nothing whatever the thickness.
  γ would pass through almost unchanged — the reading would barely respond to thickness.
  β is partly absorbed by a few tenths of a millimetre of metal, so the transmitted count rate is sensitive to thickness. A long half-life is also needed so the source output stays steady.
```

```yaml
type: short
topic: "T20 Radioactivity"
stem: "A radioactive source has a half-life of 12 hours. Its corrected activity is 480 Bq. Calculate its corrected activity, in Bq, after 2 days."
accepted: ["30", "30 Bq"]
marks: 1
misconception: half-life-time-conversion
worked: |
  2 days = 48 hours. Number of half-lives = 48 ÷ 12 = 4.
  480 → 240 → 120 → 60 → 30 Bq.
  Corrected activity = 30 Bq.
```

```yaml
type: short
topic: "T20 Radioactivity"
stem: "Complete this decay equation by naming the particle X: ²³⁸₉₂U → ²³⁴₉₀Th + X"
accepted: ["alpha particle", "alpha", "an alpha particle", "helium nucleus", "He-4"]
marks: 1
misconception: decay-equation-balance
worked: |
  Balance the nucleon numbers: 238 − 234 = 4.
  Balance the proton numbers: 92 − 90 = 2.
  X has nucleon number 4 and proton number 2, i.e. ⁴₂He — an α-particle.
```

```yaml
type: mcq
topic: "T12 Light"
stem: "A ray of light travels from air into a glass block. The angle of incidence is 45° and the angle of refraction is 28°. Calculate the refractive index of the glass."
options:
  - "0.66"
  - "1.5"
  - "1.6"
  - "1.9"
answer: 1
marks: 1
misconception: refractive-index-inverted
worked: |
  n = sin i ÷ sin r, with i measured in air.
  sin 45° = 0.707; sin 28° = 0.469.
  n = 0.707 ÷ 0.469 = 1.51 ≈ 1.5.
```

```yaml
type: mcq
topic: "T12 Light"
stem: "A transparent material has a refractive index of 1.5. Calculate the speed of light inside it. (Speed of light in vacuum = 3.0 × 10⁸ m/s)"
options:
  - "1.5 × 10⁸ m/s"
  - "2.0 × 10⁸ m/s"
  - "3.0 × 10⁸ m/s"
  - "4.5 × 10⁸ m/s"
answer: 1
marks: 1
misconception: n-equals-c-over-v
worked: |
  n = c ÷ v, so v = c ÷ n.
  v = (3.0 × 10⁸) ÷ 1.5 = 2.0 × 10⁸ m/s.
  Light always travels more slowly in a medium than in a vacuum, so the answer must be less than 3.0 × 10⁸ m/s.
```

```yaml
type: mcq
topic: "T12 Light"
stem: "A glass block has a refractive index of 1.50. Calculate the critical angle for the glass–air boundary."
options:
  - "30°"
  - "42°"
  - "48°"
  - "56°"
answer: 1
marks: 1
misconception: critical-angle-formula
worked: |
  sin c = 1 ÷ n = 1 ÷ 1.50 = 0.667.
  c = sin⁻¹(0.667) = 41.8° ≈ 42°.
```

```yaml
type: mcq
topic: "T12 Light"
stem: "Which pair of conditions must both hold for total internal reflection to occur?"
options:
  - "Light travels from an optically denser medium to a less dense medium, and the angle of incidence is greater than the critical angle"
  - "Light travels from a less dense medium to a denser medium, and the angle of incidence is greater than the critical angle"
  - "Light travels from a denser medium to a less dense medium, and the angle of incidence is less than the critical angle"
  - "Light travels from a less dense medium to a denser medium, and the angle of incidence is exactly 90°"
answer: 0
marks: 1
misconception: tir-conditions
worked: |
  Total internal reflection needs BOTH conditions:
  1. the light must be travelling from the optically denser medium towards the less dense medium (e.g. glass to air);
  2. the angle of incidence inside the denser medium must exceed the critical angle.
  If either fails, the light refracts out instead.
```

```yaml
type: mcq
topic: "T12 Light"
stem: "A ray of light strikes a plane mirror at 25° to the mirror surface. What is the angle of reflection?"
options:
  - "25°"
  - "32.5°"
  - "65°"
  - "115°"
answer: 2
marks: 1
misconception: angle-from-surface-not-normal
worked: |
  Angles of incidence and reflection are always measured from the NORMAL, not from the mirror surface.
  Angle of incidence = 90° − 25° = 65°.
  By the law of reflection, angle of reflection = angle of incidence = 65°.
```

```yaml
type: mcq
topic: "T12 Light"
stem: "Which correctly describes the image formed by a plane mirror?"
options:
  - "Real, upright and the same size as the object"
  - "Virtual, upright, laterally inverted and the same size as the object"
  - "Virtual, inverted and magnified"
  - "Real, laterally inverted and diminished"
answer: 1
marks: 1
misconception: mirror-image-nature
worked: |
  A plane mirror image is virtual (it cannot be caught on a screen), upright, laterally inverted (left and right appear swapped), the same size as the object, and as far behind the mirror as the object is in front.
```

```yaml
type: mcq
topic: "T12 Light"
stem: "An object is placed 30 cm from a converging lens of focal length 10 cm. Which describes the image formed?"
options:
  - "Real, inverted and diminished"
  - "Real, inverted and magnified"
  - "Virtual, upright and magnified"
  - "Virtual, inverted and diminished"
answer: 0
marks: 1
misconception: lens-image-nature
worked: |
  The focal length f = 10 cm, so 2f = 20 cm.
  The object distance is 30 cm, which is beyond 2f.
  When the object is beyond 2F, the converging lens forms an image between F and 2F on the other side: real, inverted and diminished.
```

```yaml
type: mcq
topic: "T12 Light"
stem: "A ray of light passes from glass into air. Which property of the light is unchanged?"
options:
  - "Its speed"
  - "Its wavelength"
  - "Its frequency"
  - "Its direction"
answer: 2
marks: 1
misconception: frequency-changes-on-refraction
worked: |
  Refraction happens because the light changes speed at the boundary. Since v = f λ and the frequency is fixed by the source, the wavelength must change with the speed.
  Speed increases (glass → air), wavelength increases, and the ray bends away from the normal.
  The frequency is the only quantity that stays the same.
```

```yaml
type: mcq
topic: "T12 Light"
stem: "Why does light stay inside the core of an optical fibre even when the fibre bends?"
options:
  - "The core is silvered so it acts as a perfect mirror"
  - "The light strikes the core–cladding boundary at an angle greater than the critical angle, so it is totally internally reflected back into the core"
  - "The cladding absorbs the light and re-emits it into the core"
  - "The cladding has a higher refractive index than the core, so light is refracted back in"
answer: 1
marks: 1
misconception: optical-fibre-mechanism
worked: |
  The core is optically denser than the cladding, so a critical angle exists at the core–cladding boundary.
  The fibre is designed so that light always meets that boundary at an angle of incidence greater than the critical angle, so it is totally internally reflected — repeatedly — and travels along the fibre with almost no loss.
```

```yaml
type: short
topic: "T12 Light"
stem: "The refractive index of water is 1.33. Calculate the critical angle for a water–air boundary, giving your answer to the nearest degree."
accepted: ["49", "49 degrees", "48.8", "48.8 degrees"]
marks: 1
misconception: critical-angle-water
worked: |
  sin c = 1 ÷ n = 1 ÷ 1.33 = 0.752.
  c = sin⁻¹(0.752) = 48.8°, which is 49° to the nearest degree.
```

```yaml
type: short
topic: "T12 Light"
stem: "An object 3.0 cm tall is placed 30 cm from a converging lens of focal length 15 cm. State the height, in cm, of the image formed."
accepted: ["3", "3.0", "3 cm", "3.0 cm"]
marks: 1
misconception: two-f-image-size
worked: |
  2f = 2 × 15 = 30 cm, so the object sits exactly at 2F.
  An object at 2F gives an image at 2F on the other side that is real, inverted and the SAME SIZE as the object.
  Image height = 3.0 cm.
```

```yaml
type: mcq
topic: "T3 Dynamics"
stem: "A resultant force of 3000 N acts on a car of mass 1200 kg. Calculate the acceleration of the car."
options:
  - "0.40 m/s²"
  - "2.5 m/s²"
  - "3.6 m/s²"
  - "4.0 m/s²"
answer: 1
marks: 1
misconception: f-equals-ma-rearrange
worked: |
  F = ma, so a = F ÷ m.
  a = 3000 ÷ 1200 = 2.5 m/s².
```

```yaml
type: mcq
topic: "T3 Dynamics"
stem: "A box of mass 50 kg is pushed along the floor with a horizontal force of 800 N. Friction opposing the motion is 300 N. Calculate the acceleration of the box."
options:
  - "6.0 m/s²"
  - "10 m/s²"
  - "16 m/s²"
  - "22 m/s²"
answer: 1
marks: 1
misconception: resultant-force-ignored
worked: |
  Use the RESULTANT force, not the applied force.
  Resultant F = 800 − 300 = 500 N.
  a = F ÷ m = 500 ÷ 50 = 10 m/s².
```

```yaml
type: mcq
topic: "T3 Dynamics"
stem: "An astronaut has a mass of 60 kg on Earth. On the Moon the gravitational field strength is 1.6 N/kg. What are the astronaut's mass and weight on the Moon?"
options:
  - "Mass 60 kg, weight 96 N"
  - "Mass 96 kg, weight 60 N"
  - "Mass 9.6 kg, weight 96 N"
  - "Mass 60 kg, weight 600 N"
answer: 0
marks: 1
misconception: mass-weight-confusion
worked: |
  Mass is the amount of matter and does not depend on location: it stays 60 kg.
  Weight is the gravitational force: W = mg = 60 × 1.6 = 96 N on the Moon.
  (On Earth, W = 60 × 10 = 600 N.)
```

```yaml
type: mcq
topic: "T3 Dynamics"
stem: "A skydiver is falling at terminal velocity before opening her parachute. Which statement is correct?"
options:
  - "The air resistance is equal in size to her weight, and her acceleration is zero"
  - "Her weight is greater than the air resistance, so she is still accelerating"
  - "Her weight has become zero"
  - "The air resistance is greater than her weight, so she is slowing down"
answer: 0
marks: 1
misconception: terminal-velocity-forces
worked: |
  At terminal velocity the speed is constant, so the resultant force is zero.
  That means the upward air resistance exactly balances the downward weight, and the acceleration is zero. The weight itself has not changed.
```

```yaml
type: mcq
topic: "T3 Dynamics"
stem: "A book rests on a table. The Earth pulls the book down with a force W. Which force is the Newton's third law partner of W?"
options:
  - "The table pushes the book up with a force of size W"
  - "The book pushes the table down with a force of size W"
  - "The book pulls the Earth up with a force of size W"
  - "The weight of the table acting downwards"
answer: 2
marks: 1
misconception: third-law-pair-identification
worked: |
  A third-law pair acts on TWO DIFFERENT bodies, is the same type of force, and is equal in size but opposite in direction.
  W is the gravitational pull of the Earth on the book, so its partner must be the gravitational pull of the book on the Earth — the book pulls the Earth up with a force of size W.
  The upward push of the table on the book acts on the same body and is a contact force, so it is NOT the partner of W.
```

```yaml
type: mcq
topic: "T3 Dynamics"
stem: "A metal block has a mass of 200 g and a volume of 25 cm³. Calculate its density."
options:
  - "0.125 g/cm³"
  - "8.0 g/cm³"
  - "80 g/cm³"
  - "5000 g/cm³"
answer: 1
marks: 1
misconception: density-formula-inverted
worked: |
  ρ = m ÷ V.
  ρ = 200 ÷ 25 = 8.0 g/cm³.
```

```yaml
type: mcq
topic: "T3 Dynamics"
stem: "The density of aluminium is 2700 kg/m³. What is this density in g/cm³?"
options:
  - "0.27 g/cm³"
  - "2.7 g/cm³"
  - "27 g/cm³"
  - "2700 g/cm³"
answer: 1
marks: 1
misconception: density-unit-conversion
worked: |
  1 kg = 1000 g and 1 m³ = 10⁶ cm³.
  2700 kg/m³ = (2700 × 1000 g) ÷ (10⁶ cm³) = 2 700 000 ÷ 1 000 000 = 2.7 g/cm³.
  Shortcut: divide kg/m³ by 1000 to get g/cm³.
```

```yaml
type: mcq
topic: "T3 Dynamics"
stem: "A lorry travels along a straight, level road at a constant velocity of 20 m/s. What is the resultant force acting on it?"
options:
  - "0 N"
  - "20 N forwards"
  - "A force equal to its weight, acting downwards"
  - "It cannot be found without knowing the mass"
answer: 0
marks: 1
misconception: constant-velocity-needs-force
worked: |
  Constant velocity means zero acceleration.
  From F = ma, if a = 0 then the resultant force F = 0 N.
  The engine's driving force is exactly balanced by friction and air resistance; the weight is balanced by the normal contact force.
```

```yaml
type: mcq
topic: "T3 Dynamics"
stem: "A parachutist falling at terminal velocity opens her parachute. What happens immediately afterwards?"
options:
  - "The air resistance becomes larger than her weight, so she decelerates until she reaches a new, lower terminal velocity"
  - "She stops instantly"
  - "Her weight increases, so she accelerates downwards"
  - "She continues at exactly the same velocity because the forces are still balanced"
answer: 0
marks: 1
misconception: parachute-deceleration
worked: |
  Opening the parachute suddenly increases the surface area, so the air resistance jumps and becomes larger than the weight.
  The resultant force is now upwards, so she decelerates. As she slows, the air resistance falls again until it once more equals her weight — she then falls at a new, much lower terminal velocity.
```

```yaml
type: short
topic: "T3 Dynamics"
stem: "A ball of mass 0.50 kg is kicked and accelerates at 30 m/s². Calculate the resultant force, in N, acting on the ball."
accepted: ["15", "15 N"]
marks: 1
misconception: f-equals-ma-basic
worked: |
  F = ma = 0.50 × 30 = 15 N.
```

```yaml
type: short
topic: "T3 Dynamics"
stem: "An object of mass 2.0 kg has a volume of 500 cm³. Calculate its density in g/cm³."
accepted: ["4", "4.0", "4 g/cm3", "4.0 g/cm3"]
marks: 1
misconception: density-unit-mismatch
worked: |
  Convert the mass to grams first: 2.0 kg = 2000 g.
  ρ = m ÷ V = 2000 ÷ 500 = 4.0 g/cm³.
```

```yaml
type: mcq
topic: "T19 Electromagnetic Induction"
stem: "A transformer has 2000 turns on the primary coil and 100 turns on the secondary coil. The primary is connected to a 240 V a.c. supply. What is the secondary voltage?"
options:
  - "12 V"
  - "24 V"
  - "480 V"
  - "4800 V"
answer: 0
marks: 1
misconception: transformer-turns-ratio-inverted
worked: |
  Vs ÷ Vp = Ns ÷ Np.
  Vs = 240 × (100 ÷ 2000) = 240 × 0.05 = 12 V.
  Fewer secondary turns means a step-DOWN transformer, so the answer must be smaller than 240 V.
```

```yaml
type: mcq
topic: "T19 Electromagnetic Induction"
stem: "An ideal transformer steps 240 V down to 12 V. The current in the primary coil is 0.50 A. Calculate the current in the secondary coil."
options:
  - "0.025 A"
  - "0.50 A"
  - "10 A"
  - "20 A"
answer: 2
marks: 1
misconception: transformer-power-conservation
worked: |
  For an ideal transformer the power in equals the power out: Vp Ip = Vs Is.
  Input power = 240 × 0.50 = 120 W.
  Is = 120 ÷ 12 = 10 A.
  Stepping the voltage DOWN by 20× steps the current UP by 20×.
```

```yaml
type: mcq
topic: "T19 Electromagnetic Induction"
stem: "Why does a transformer produce no output when its primary coil is connected to a steady d.c. supply?"
options:
  - "A steady direct current gives a constant magnetic flux in the core, so there is no CHANGING flux linking the secondary and no e.m.f. is induced"
  - "Direct current cannot flow through a coil of wire"
  - "The iron core would immediately melt"
  - "A steady direct current produces no magnetic field at all"
answer: 0
marks: 1
misconception: transformer-needs-changing-flux
worked: |
  An e.m.f. is induced only when the magnetic flux linking the secondary coil CHANGES (Faraday's law).
  A steady d.c. current does produce a magnetic field, but a constant one — the flux through the secondary never changes, so no e.m.f. is induced. An a.c. supply gives a continually changing flux, so it works.
```

```yaml
type: mcq
topic: "T19 Electromagnetic Induction"
stem: "Electrical energy is sent across a country through cables at very high voltage. Why?"
options:
  - "For a given power, a higher voltage means a smaller current, so less energy is wasted as heat in the cables"
  - "A higher voltage makes the electrons travel along the cable faster"
  - "A higher voltage lowers the resistance of the cables"
  - "A higher voltage increases the amount of power delivered to homes"
answer: 0
marks: 1
misconception: transmission-voltage-reason
worked: |
  The power transmitted is P = VI, so for a fixed P a larger V means a smaller I.
  The power wasted in the cables is P_loss = I²R. Halving the current cuts the heating loss to a quarter, so a very high transmission voltage makes the loss very small.
  The cable resistance R itself is unchanged.
```

```yaml
type: mcq
topic: "T19 Electromagnetic Induction"
stem: "A magnet is pushed into a coil connected to a sensitive galvanometer. Which change increases the size of the induced e.m.f.?"
options:
  - "Moving the magnet into the coil more quickly"
  - "Holding the magnet stationary inside the coil"
  - "Using a coil with fewer turns"
  - "Using a weaker magnet"
answer: 0
marks: 1
misconception: faraday-rate-of-change
worked: |
  By Faraday's law, the induced e.m.f. is proportional to the RATE of change of magnetic flux linkage.
  Moving the magnet faster changes the flux more quickly, so a larger e.m.f. is induced.
  A stationary magnet gives no change of flux and therefore zero e.m.f.; fewer turns and a weaker magnet both reduce the e.m.f.
```

```yaml
type: mcq
topic: "T19 Electromagnetic Induction"
stem: "The N pole of a magnet is pushed towards one end of a coil. What does the induced current in the coil do?"
options:
  - "It makes the near end of the coil a N pole, which repels the approaching magnet and opposes its motion"
  - "It makes the near end of the coil a S pole, which pulls the magnet in faster"
  - "It produces no magnetic field of its own"
  - "It reverses direction every time the magnet moves closer"
answer: 0
marks: 1
misconception: lenz-law-direction
worked: |
  Lenz's law: the induced current always flows in the direction that OPPOSES the change producing it (this is a consequence of conservation of energy).
  The change here is a N pole approaching, so the coil sets up a N pole at its near end to repel the magnet. Work must therefore be done pushing the magnet in, and that work becomes the electrical energy in the coil.
```

```yaml
type: mcq
topic: "T19 Electromagnetic Induction"
stem: "The coil of a simple a.c. generator is rotated at twice its original speed. What happens to the output?"
options:
  - "The frequency doubles and the peak e.m.f. doubles"
  - "The frequency doubles but the peak e.m.f. is unchanged"
  - "The peak e.m.f. doubles but the frequency is unchanged"
  - "Both the frequency and the peak e.m.f. are halved"
answer: 0
marks: 1
misconception: generator-speed-effects
worked: |
  Two things change together when the coil spins faster.
  Frequency: one cycle is produced per revolution, so twice the revolutions per second means twice the frequency — the peaks are half as far apart on the graph.
  Peak e.m.f.: the flux is cut at twice the rate, so by Faraday's law the peak e.m.f. doubles — the graph is twice as tall.
```

```yaml
type: mcq
topic: "T19 Electromagnetic Induction"
stem: "Why is the core of a transformer built from thin sheets of iron that are insulated from one another?"
options:
  - "To reduce the energy wasted by eddy currents circulating in the core"
  - "To make the core light enough to be carried easily"
  - "To increase the resistance of the primary coil"
  - "To stop the primary and secondary coils from touching each other"
answer: 0
marks: 1
misconception: laminated-core-purpose
worked: |
  The changing magnetic flux would induce large circulating (eddy) currents in a solid iron core, and these would heat the core and waste energy.
  Laminating the core — thin sheets separated by insulation — breaks up the paths available to those currents, so the eddy currents (and the heating) are much smaller.
```

```yaml
type: short
topic: "T19 Electromagnetic Induction"
stem: "A transformer has 800 turns on the primary coil and 50 turns on the secondary coil. The primary is connected to a 240 V a.c. supply. Calculate the secondary voltage, in V."
accepted: ["15", "15 V"]
marks: 1
misconception: transformer-turns-ratio
worked: |
  Vs ÷ Vp = Ns ÷ Np.
  Vs = 240 × (50 ÷ 800) = 240 × 0.0625 = 15 V.
```

```yaml
type: short
topic: "T19 Electromagnetic Induction"
stem: "An ideal transformer delivers 6.0 V at 2.0 A to a lamp. The primary voltage is 240 V. Calculate the primary current, in A."
accepted: ["0.05", "0.050", "0.05 A"]
marks: 1
misconception: transformer-current-ratio
worked: |
  Output power = Vs × Is = 6.0 × 2.0 = 12 W.
  For an ideal transformer, input power = output power, so Vp × Ip = 12 W.
  Ip = 12 ÷ 240 = 0.050 A.
```

```yaml
type: mcq
topic: "T16 Practical Electricity"
stem: "An electric kettle is rated 240 V, 2000 W. Which fuse should be fitted in its plug?"
options:
  - "1 A"
  - "3 A"
  - "5 A"
  - "13 A"
answer: 3
marks: 1
misconception: fuse-rating-choice
worked: |
  Normal operating current: I = P ÷ V = 2000 ÷ 240 = 8.3 A.
  The fuse must be rated ABOVE the normal current (so it does not blow in normal use) but as close to it as possible.
  3 A and 5 A would blow immediately. The 13 A fuse is the correct standard choice.
```

```yaml
type: mcq
topic: "T16 Practical Electricity"
stem: "A 2.0 kW heater is used for 3.0 hours. Electrical energy costs 30 cents per kWh. What is the cost of running the heater?"
options:
  - "60 cents"
  - "180 cents"
  - "1800 cents"
  - "18 000 cents"
answer: 1
marks: 1
misconception: kwh-cost-calculation
worked: |
  Energy = power (in kW) × time (in hours) = 2.0 × 3.0 = 6.0 kWh.
  Cost = 6.0 × 30 = 180 cents (that is $1.80).
```

```yaml
type: mcq
topic: "T16 Practical Electricity"
stem: "Why is the fuse fitted in the live wire rather than in the neutral wire?"
options:
  - "So that when the fuse blows, the appliance is disconnected from the high potential of the supply and is no longer live"
  - "Because current flows only in the live wire"
  - "Because the neutral wire has no resistance"
  - "Because the live wire is thicker than the neutral wire"
answer: 0
marks: 1
misconception: fuse-live-wire-reason
worked: |
  The live wire is at a high potential; the neutral wire is at (or near) earth potential.
  If the fuse were in the neutral wire it would still blow and stop the current, BUT the appliance would remain connected to the live wire — so its internal parts would stay at a high potential and could give a fatal shock to anyone touching them.
  Putting the fuse in the live wire cuts the appliance off from the high potential.
```

```yaml
type: mcq
topic: "T16 Practical Electricity"
stem: "A current of 5.0 A flows through a heating element of resistance 4.0 Ω. Calculate the power dissipated in the element."
options:
  - "0.80 W"
  - "20 W"
  - "100 W"
  - "500 W"
answer: 2
marks: 1
misconception: power-i-squared-r
worked: |
  P = I²R.
  P = (5.0)² × 4.0 = 25 × 4.0 = 100 W.
  (Check: V = IR = 5.0 × 4.0 = 20 V, so P = VI = 20 × 5.0 = 100 W.)
```

```yaml
type: mcq
topic: "T16 Practical Electricity"
stem: "The metal case of an appliance is connected to the earth wire. A fault makes the live wire touch the case. What happens?"
options:
  - "A very large current flows through the earth wire, which blows the fuse and cuts off the live supply"
  - "The case becomes live and stays live until someone touches it"
  - "The current flows only through the neutral wire and the appliance keeps working"
  - "Nothing happens, because earth is an insulator"
answer: 0
marks: 1
misconception: earthing-mechanism
worked: |
  The earth wire offers a very low-resistance path from the case to earth.
  With the live wire touching the case, a very large current flows through that path. This large current melts the fuse in the live wire, which disconnects the appliance from the supply. The case is then safe to touch.
```

```yaml
type: mcq
topic: "T16 Practical Electricity"
stem: "A hairdryer is marked 'double insulated' and its cable contains only two wires. Why does it not need an earth wire?"
options:
  - "Its outer casing is made of an insulator, so the casing can never become live"
  - "It draws a very small current, so it is safe anyway"
  - "Its fuse is fitted in the neutral wire instead"
  - "It is made of a metal that does not conduct electricity"
answer: 0
marks: 1
misconception: double-insulation-meaning
worked: |
  In a double-insulated appliance the live parts are enclosed inside an outer casing of insulating plastic.
  Even if a live wire came loose inside, it could not make the outside of the casing live, so a user cannot receive a shock by touching it. An earth wire is therefore unnecessary and only live and neutral are needed.
```

```yaml
type: mcq
topic: "T16 Practical Electricity"
stem: "A 12 V supply drives a current of 3.0 A through a lamp for 5.0 minutes. Calculate the electrical energy transferred."
options:
  - "180 J"
  - "1800 J"
  - "10 800 J"
  - "21 600 J"
answer: 2
marks: 1
misconception: time-unit-in-energy
worked: |
  Convert the time to seconds: 5.0 minutes = 300 s.
  E = VIt = 12 × 3.0 × 300 = 10 800 J.
  (Using minutes instead of seconds gives 180 J — a common slip.)
```

```yaml
type: mcq
topic: "T16 Practical Electricity"
stem: "Why is it dangerous to operate an electrical switch with wet hands?"
options:
  - "Water lowers the resistance of the path through the body, so a larger and more dangerous current can flow"
  - "Water raises the voltage of the mains supply"
  - "Water raises the resistance of the body, so more current flows"
  - "Water turns the switch into a fuse"
answer: 0
marks: 1
misconception: wet-hands-resistance
worked: |
  Dry skin has a fairly high resistance, which limits the current through the body.
  Water (especially impure water) provides a much better conducting path, so the resistance of the body-to-earth path falls. From I = V ÷ R, a lower R with the same mains voltage gives a much larger current — and it is the size of the current through the body that makes a shock dangerous.
```

```yaml
type: short
topic: "T16 Practical Electricity"
stem: "A lamp is rated 240 V, 60 W. Calculate the current, in A, that it draws at its rated voltage."
accepted: ["0.25", "0.25 A"]
marks: 1
misconception: power-current-rearrange
worked: |
  P = VI, so I = P ÷ V.
  I = 60 ÷ 240 = 0.25 A.
```

```yaml
type: short
topic: "T16 Practical Electricity"
stem: "An electric oven of power 3.0 kW is switched on for 40 minutes. Calculate the energy used, in kWh."
accepted: ["2", "2.0", "2 kWh", "2.0 kWh"]
marks: 1
misconception: kwh-time-in-hours
worked: |
  For kWh, the power must be in kW and the time in HOURS.
  40 minutes = 40 ÷ 60 = 0.667 h.
  Energy = 3.0 × 0.667 = 2.0 kWh.
```

```yaml
type: mcq
topic: "T15 D.C. Circuits"
stem: "A 6.0 Ω resistor is connected in parallel with a 3.0 Ω resistor. Calculate the effective resistance of the combination."
options:
  - "0.50 Ω"
  - "2.0 Ω"
  - "4.5 Ω"
  - "9.0 Ω"
answer: 1
marks: 1
misconception: parallel-resistance-formula
worked: |
  1 ÷ R = 1 ÷ 6.0 + 1 ÷ 3.0 = 1 ÷ 6.0 + 2 ÷ 6.0 = 3 ÷ 6.0 = 0.50.
  R = 1 ÷ 0.50 = 2.0 Ω.
  Sanity check: the effective resistance of a parallel pair is always SMALLER than the smaller resistor (3.0 Ω).
```

```yaml
type: mcq
topic: "T15 D.C. Circuits"
stem: "A 4.0 Ω resistor is connected in series with a parallel combination of a 6.0 Ω resistor and a 3.0 Ω resistor. This circuit is connected to a 12 V battery of negligible internal resistance. Calculate the current drawn from the battery."
options:
  - "1.0 A"
  - "1.3 A"
  - "2.0 A"
  - "3.0 A"
answer: 2
marks: 1
misconception: series-parallel-combination
worked: |
  Parallel pair: 1 ÷ Rp = 1 ÷ 6.0 + 1 ÷ 3.0 = 0.50, so Rp = 2.0 Ω.
  Total resistance = 4.0 + 2.0 = 6.0 Ω (series).
  I = V ÷ R = 12 ÷ 6.0 = 2.0 A.
```

```yaml
type: mcq
topic: "T15 D.C. Circuits"
stem: "A 12 V supply is connected across a 4.0 kΩ resistor in series with an 8.0 kΩ resistor. What is the p.d. across the 8.0 kΩ resistor?"
options:
  - "3.0 V"
  - "4.0 V"
  - "6.0 V"
  - "8.0 V"
answer: 3
marks: 1
misconception: potential-divider-ratio
worked: |
  In series the same current flows, so the p.d. splits in the ratio of the resistances.
  V₈ = 12 × 8.0 ÷ (4.0 + 8.0) = 12 × 8.0 ÷ 12 = 8.0 V.
  (Check: the 4.0 kΩ resistor takes the remaining 4.0 V, and 8.0 + 4.0 = 12 V.)
```

```yaml
type: mcq
topic: "T15 D.C. Circuits"
stem: "A thermistor is connected in series with a fixed resistor across a battery. The thermistor is warmed. What happens to the p.d. across the FIXED resistor?"
options:
  - "It increases"
  - "It decreases"
  - "It stays the same"
  - "It falls to zero"
answer: 0
marks: 1
misconception: thermistor-potential-divider
worked: |
  Warming a thermistor DECREASES its resistance.
  Total circuit resistance falls, so the current from the battery increases.
  Across the fixed resistor, V = IR with R constant and I larger — so the p.d. across the fixed resistor increases. (Equivalently, the thermistor now takes a smaller share of the supply p.d., so the fixed resistor takes a bigger share.)
```

```yaml
type: mcq
topic: "T15 D.C. Circuits"
stem: "What happens to the resistance of a light-dependent resistor (LDR) when the light falling on it becomes brighter?"
options:
  - "It increases"
  - "It decreases"
  - "It stays the same"
  - "It becomes infinite"
answer: 1
marks: 1
misconception: ldr-light-resistance
worked: |
  In an LDR, brighter light releases more charge carriers in the semiconductor, so it conducts better.
  Better conduction means a LOWER resistance. In the dark an LDR has a very high resistance.
```

```yaml
type: mcq
topic: "T15 D.C. Circuits"
stem: "Which statement about connecting meters in a circuit is correct?"
options:
  - "An ammeter is connected in series and should have a very low resistance; a voltmeter is connected in parallel and should have a very high resistance"
  - "An ammeter is connected in parallel and should have a very high resistance"
  - "Both an ammeter and a voltmeter are connected in series"
  - "A voltmeter is connected in series and should have a very low resistance"
answer: 0
marks: 1
misconception: meter-connection-rules
worked: |
  An ammeter measures the current THROUGH a component, so it must be in series with it — and its resistance must be very low so that it does not reduce the current it is measuring.
  A voltmeter measures the p.d. ACROSS a component, so it must be in parallel with it — and its resistance must be very high so that it draws almost no current away from the component.
```

```yaml
type: short
topic: "T15 D.C. Circuits"
stem: "Three 12 Ω resistors are connected in parallel. Calculate the effective resistance, in Ω."
accepted: ["4", "4.0", "4 ohms", "4 ohm"]
marks: 1
misconception: identical-parallel-resistors
worked: |
  1 ÷ R = 1 ÷ 12 + 1 ÷ 12 + 1 ÷ 12 = 3 ÷ 12.
  R = 12 ÷ 3 = 4.0 Ω.
  Shortcut: for n identical resistors in parallel, R = (one resistor) ÷ n.
```

```yaml
type: mcq
topic: "T6 Energy Stores & Transfers"
stem: "A ball of mass 2.0 kg moves at 6.0 m/s. Calculate its kinetic energy."
options:
  - "6.0 J"
  - "12 J"
  - "36 J"
  - "72 J"
answer: 2
marks: 1
misconception: kinetic-energy-square-term
worked: |
  Eₖ = ½ m v².
  Eₖ = ½ × 2.0 × (6.0)² = ½ × 2.0 × 36 = 36 J.
  (Forgetting to square the speed gives 6.0 J; forgetting the ½ gives 72 J.)
```

```yaml
type: mcq
topic: "T6 Energy Stores & Transfers"
stem: "A student of mass 50 kg climbs a staircase of vertical height 8.0 m. Calculate the gain in gravitational potential energy. (g = 10 m/s²)"
options:
  - "400 J"
  - "640 J"
  - "4000 J"
  - "40 000 J"
answer: 2
marks: 1
misconception: gpe-formula
worked: |
  E_p = mgh.
  E_p = 50 × 10 × 8.0 = 4000 J.
```

```yaml
type: mcq
topic: "T6 Energy Stores & Transfers"
stem: "A stone is dropped from rest from a height of 20 m. Ignoring air resistance, calculate its speed just before it hits the ground. (g = 10 m/s²)"
options:
  - "10 m/s"
  - "14 m/s"
  - "20 m/s"
  - "40 m/s"
answer: 2
marks: 1
misconception: energy-conservation-fall
worked: |
  Gravitational potential energy lost = kinetic energy gained:
  mgh = ½ m v², and the mass cancels.
  v² = 2gh = 2 × 10 × 20 = 400.
  v = √400 = 20 m/s.
```

```yaml
type: mcq
topic: "T6 Energy Stores & Transfers"
stem: "A pump lifts 300 kg of water through a vertical height of 4.0 m in 20 s. Calculate the useful output power of the pump. (g = 10 m/s²)"
options:
  - "60 W"
  - "240 W"
  - "600 W"
  - "1200 W"
answer: 2
marks: 1
misconception: power-work-over-time
worked: |
  Useful work done = mgh = 300 × 10 × 4.0 = 12 000 J.
  P = work ÷ time = 12 000 ÷ 20 = 600 W.
```

```yaml
type: mcq
topic: "T6 Energy Stores & Transfers"
stem: "An electric motor takes in 500 W of electrical power and delivers 350 W of useful mechanical power. Calculate its efficiency."
options:
  - "30%"
  - "65%"
  - "70%"
  - "143%"
answer: 2
marks: 1
misconception: efficiency-ratio-inverted
worked: |
  Efficiency = (useful power output ÷ total power input) × 100
  = (350 ÷ 500) × 100
  = 0.70 × 100 = 70%.
  The missing 150 W is wasted, mostly to the internal (thermal) store of the motor and surroundings.
```

```yaml
type: short
topic: "T6 Energy Stores & Transfers"
stem: "A crane lifts a load of 250 kg through a vertical height of 12 m in 30 s. Calculate the useful output power, in W. (g = 10 m/s²)"
accepted: ["1000", "1000 W", "1 kW"]
marks: 1
misconception: useful-power-output
worked: |
  Useful work done = mgh = 250 × 10 × 12 = 30 000 J.
  P = W ÷ t = 30 000 ÷ 30 = 1000 W.
```

```yaml
type: mcq
topic: "T2 Kinematics"
stem: "On a speed–time graph, a car's speed rises uniformly from 4.0 m/s to 20 m/s in 8.0 s. Calculate its acceleration."
options:
  - "0.50 m/s²"
  - "2.0 m/s²"
  - "2.5 m/s²"
  - "16 m/s²"
answer: 1
marks: 1
misconception: gradient-not-subtracting-initial
worked: |
  Acceleration = gradient of the speed–time graph = change in speed ÷ time taken.
  a = (20 − 4.0) ÷ 8.0 = 16 ÷ 8.0 = 2.0 m/s².
  (Using 20 ÷ 8.0 = 2.5 m/s² forgets to subtract the initial speed.)
```

```yaml
type: mcq
topic: "T2 Kinematics"
stem: "A train travels at a constant speed of 15 m/s for 12 s. Use the area under the speed–time graph to find the distance travelled."
options:
  - "1.25 m"
  - "27 m"
  - "90 m"
  - "180 m"
answer: 3
marks: 1
misconception: area-under-speed-time
worked: |
  Distance = area under the speed–time graph.
  The graph is a horizontal line, so the area is a rectangle: 15 × 12 = 180 m.
  (90 m would be the area of a triangle — wrong shape here, because the speed is constant.)
```

```yaml
type: mcq
topic: "T2 Kinematics"
stem: "A ball is dropped from rest. Ignoring air resistance, what is its speed after 3.0 s? (g = 10 m/s²)"
options:
  - "3.3 m/s"
  - "10 m/s"
  - "30 m/s"
  - "45 m/s"
answer: 2
marks: 1
misconception: free-fall-speed
worked: |
  In free fall the acceleration is g = 10 m/s², so the speed rises by 10 m/s every second.
  v = u + at = 0 + 10 × 3.0 = 30 m/s.
  (45 m is the DISTANCE fallen, not the speed.)
```

```yaml
type: mcq
topic: "T2 Kinematics"
stem: "A cyclist travels 100 m in 20 s and then 300 m in 30 s. Calculate the average speed for the whole journey."
options:
  - "5.0 m/s"
  - "7.5 m/s"
  - "8.0 m/s"
  - "10 m/s"
answer: 2
marks: 1
misconception: average-speed-averaging-speeds
worked: |
  Average speed = TOTAL distance ÷ TOTAL time.
  Total distance = 100 + 300 = 400 m; total time = 20 + 30 = 50 s.
  Average speed = 400 ÷ 50 = 8.0 m/s.
  (Averaging the two speeds — 5.0 and 10 — to get 7.5 m/s is wrong, because the cyclist spends different times at each speed.)
```

```yaml
type: mcq
topic: "T2 Kinematics"
stem: "A distance–time graph for a moving object contains a horizontal (flat) section. What does this section show?"
options:
  - "The object is at rest"
  - "The object is moving at a constant speed"
  - "The object is accelerating uniformly"
  - "The object is moving back towards the start"
answer: 0
marks: 1
misconception: distance-time-flat-section
worked: |
  On a distance–time graph the gradient is the speed.
  A horizontal line has zero gradient, so the speed is zero — the object is stationary.
  (On a SPEED–time graph a horizontal line would mean constant speed instead; do not confuse the two graphs.)
```

```yaml
type: short
topic: "T2 Kinematics"
stem: "A car decelerates uniformly from 30 m/s to rest in 6.0 s. Calculate the distance travelled during this time, in m."
accepted: ["90", "90 m"]
marks: 1
misconception: uniform-deceleration-distance
worked: |
  For uniform deceleration, average speed = (30 + 0) ÷ 2 = 15 m/s.
  Distance = average speed × time = 15 × 6.0 = 90 m.
  (This is the same as the area of the triangle under the speed–time graph: ½ × 6.0 × 30 = 90 m.)
```

```yaml
type: mcq
topic: "T9 Thermal Properties of Matter"
stem: "Calculate the thermal energy needed to raise the temperature of 2.0 kg of water by 30 °C. (Specific heat capacity of water = 4200 J/(kg·°C))"
options:
  - "6300 J"
  - "1.26 × 10⁵ J"
  - "2.52 × 10⁵ J"
  - "2.52 × 10⁶ J"
answer: 2
marks: 1
misconception: specific-heat-capacity-formula
worked: |
  Q = m c Δθ.
  Q = 2.0 × 4200 × 30 = 252 000 J = 2.52 × 10⁵ J.
```

```yaml
type: mcq
topic: "T9 Thermal Properties of Matter"
stem: "Calculate the energy needed to melt 0.50 kg of ice at 0 °C. (Specific latent heat of fusion of ice = 3.4 × 10⁵ J/kg)"
options:
  - "6.8 × 10⁴ J"
  - "1.7 × 10⁵ J"
  - "3.4 × 10⁵ J"
  - "6.8 × 10⁵ J"
answer: 1
marks: 1
misconception: latent-heat-formula
worked: |
  There is no temperature change during melting, so use Q = m L (NOT Q = mcΔθ).
  Q = 0.50 × (3.4 × 10⁵) = 1.7 × 10⁵ J.
```

```yaml
type: mcq
topic: "T9 Thermal Properties of Matter"
stem: "A solid is heated at a steady rate. While it is melting, its temperature stays constant. Why?"
options:
  - "The energy supplied is used to weaken and break the bonds between the particles — it increases their potential energy, not their kinetic energy"
  - "The heater automatically stops supplying energy during melting"
  - "The particles stop moving completely while the solid melts"
  - "The energy supplied increases the average kinetic energy of the particles"
answer: 0
marks: 1
misconception: melting-plateau-explanation
worked: |
  Temperature is a measure of the AVERAGE KINETIC energy of the particles.
  During melting, the energy supplied does work against the forces between the particles — it goes into their POTENTIAL energy as the regular lattice breaks down.
  Because the average kinetic energy does not change, the temperature does not change, and the graph shows a flat plateau.
```

```yaml
type: mcq
topic: "T9 Thermal Properties of Matter"
stem: "A 200 W heater supplies energy to a 0.50 kg metal block for 60 s. The temperature of the block rises by 30 °C. Assuming no energy is lost to the surroundings, calculate the specific heat capacity of the metal."
options:
  - "400 J/(kg·°C)"
  - "800 J/(kg·°C)"
  - "1200 J/(kg·°C)"
  - "2400 J/(kg·°C)"
answer: 1
marks: 1
misconception: shc-from-electrical-energy
worked: |
  Energy supplied: Q = P t = 200 × 60 = 12 000 J.
  Q = m c Δθ, so c = Q ÷ (m Δθ).
  c = 12 000 ÷ (0.50 × 30) = 12 000 ÷ 15 = 800 J/(kg·°C).
```

```yaml
type: mcq
topic: "T9 Thermal Properties of Matter"
stem: "Why does a liquid cool down as it evaporates?"
options:
  - "The most energetic molecules escape from the surface, so the average kinetic energy of the molecules left behind falls"
  - "The liquid loses mass, and a smaller mass always means a lower temperature"
  - "Evaporation absorbs 'cold' from the surrounding air"
  - "The molecules left behind speed up but collide less often"
answer: 0
marks: 1
misconception: evaporation-cooling
worked: |
  Only the molecules with the highest kinetic energy have enough energy to escape from the surface of the liquid.
  When they leave, the AVERAGE kinetic energy of the molecules remaining behind is lower.
  Temperature is a measure of average kinetic energy, so the temperature of the liquid falls — it cools.
```

```yaml
type: short
topic: "T9 Thermal Properties of Matter"
stem: "A 2.0 kW heater boils away 0.60 kg of water that is already at its boiling point. The specific latent heat of vaporisation of water is 2.3 × 10⁶ J/kg. Calculate the minimum time needed, in s."
accepted: ["690", "690 s"]
marks: 1
misconception: latent-heat-time
worked: |
  The water is already at its boiling point, so all the energy goes into the change of state.
  Q = m L = 0.60 × (2.3 × 10⁶) = 1.38 × 10⁶ J.
  t = Q ÷ P = (1.38 × 10⁶) ÷ 2000 = 690 s.
```

```yaml
type: mcq
topic: "T10 General Wave Properties"
stem: "A wave has a frequency of 250 Hz and a wavelength of 1.4 m. Calculate its speed."
options:
  - "0.0056 m/s"
  - "179 m/s"
  - "350 m/s"
  - "3500 m/s"
answer: 2
marks: 1
misconception: wave-equation-rearrange
worked: |
  v = f λ.
  v = 250 × 1.4 = 350 m/s.
```

```yaml
type: mcq
topic: "T10 General Wave Properties"
stem: "A sound wave of frequency 1700 Hz travels through air at 340 m/s. Calculate its wavelength."
options:
  - "0.20 m"
  - "0.50 m"
  - "5.0 m"
  - "578 m"
answer: 0
marks: 1
misconception: wavelength-from-speed
worked: |
  v = f λ, so λ = v ÷ f.
  λ = 340 ÷ 1700 = 0.20 m.
```

```yaml
type: mcq
topic: "T10 General Wave Properties"
stem: "A ship sends a pulse of ultrasound down to the sea bed and detects the echo 0.60 s later. The speed of sound in sea water is 1500 m/s. Calculate the depth of the sea bed below the ship."
options:
  - "225 m"
  - "450 m"
  - "900 m"
  - "1800 m"
answer: 1
marks: 1
misconception: echo-forgetting-halving
worked: |
  The pulse travels DOWN and back UP, so it covers twice the depth.
  Total distance = v t = 1500 × 0.60 = 900 m.
  Depth = 900 ÷ 2 = 450 m.
  (Forgetting to halve gives 900 m — the classic error.)
```

```yaml
type: mcq
topic: "T10 General Wave Properties"
stem: "Which statement about sound waves is correct?"
options:
  - "Sound is a longitudinal wave and travels as a series of compressions and rarefactions"
  - "Sound is a transverse wave and can travel through a vacuum"
  - "Sound waves cannot be reflected"
  - "Sound travels faster in air than it does in steel"
answer: 0
marks: 1
misconception: sound-wave-nature
worked: |
  In a sound wave the particles of the medium vibrate BACK AND FORTH along the same direction as the wave travels — that makes it longitudinal, and it moves as compressions (particles bunched) and rarefactions (particles spread out).
  Sound needs a medium, so it cannot travel through a vacuum; it can be reflected (that is how echoes form); and it travels fastest in solids such as steel.
```

```yaml
type: mcq
topic: "T10 General Wave Properties"
stem: "Water waves pass through a gap in a barrier. In which case do the waves spread out (diffract) the most?"
options:
  - "When the width of the gap is about the same as the wavelength"
  - "When the gap is very much wider than the wavelength"
  - "When the waves have a very small amplitude"
  - "When the barrier is removed completely"
answer: 0
marks: 1
misconception: diffraction-gap-size
worked: |
  Diffraction is greatest when the gap width is comparable to the wavelength — the waves then spread into almost semicircular wavefronts beyond the gap.
  If the gap is much wider than the wavelength, only the edges of the wave bend slightly and the middle passes almost straight through. Amplitude does not control the amount of spreading.
```

```yaml
type: short
topic: "T10 General Wave Properties"
stem: "A water wave has a frequency of 5.0 Hz and a wavelength of 0.40 m. Calculate its speed, in m/s."
accepted: ["2", "2.0", "2 m/s", "2.0 m/s"]
marks: 1
misconception: wave-equation-basic
worked: |
  v = f λ = 5.0 × 0.40 = 2.0 m/s.
```

```yaml
type: mcq
topic: "T14 Current of Electricity"
stem: "A charge of 60 C flows past a point in a circuit in 30 s. Calculate the current."
options:
  - "0.50 A"
  - "2.0 A"
  - "30 A"
  - "1800 A"
answer: 1
marks: 1
misconception: current-charge-time
worked: |
  I = Q ÷ t.
  I = 60 ÷ 30 = 2.0 A.
```

```yaml
type: mcq
topic: "T14 Current of Electricity"
stem: "A p.d. of 12 V across a component drives a current of 0.40 A through it. Calculate the resistance of the component."
options:
  - "0.033 Ω"
  - "4.8 Ω"
  - "30 Ω"
  - "48 Ω"
answer: 2
marks: 1
misconception: ohms-law-rearrange
worked: |
  R = V ÷ I.
  R = 12 ÷ 0.40 = 30 Ω.
  (Multiplying instead of dividing gives 4.8 Ω.)
```

```yaml
type: mcq
topic: "T14 Current of Electricity"
stem: "As the current through a filament lamp increases, what happens to the resistance of the filament?"
options:
  - "It increases, because the filament gets hotter and its metal ions vibrate more, obstructing the flow of electrons more"
  - "It stays constant, because a filament lamp obeys Ohm's law"
  - "It decreases, because more electrons are now flowing through it"
  - "It falls to zero as soon as the lamp lights up"
answer: 0
marks: 1
misconception: filament-lamp-resistance
worked: |
  A larger current heats the filament to a higher temperature.
  The metal ions in the filament then vibrate with larger amplitude, so the free electrons collide with them more often and lose energy more readily — the resistance rises.
  That is why the I–V graph of a filament lamp is an S-shaped curve that flattens off, rather than the straight line of an ohmic conductor.
```

```yaml
type: mcq
topic: "T14 Current of Electricity"
stem: "A wire of a certain material has resistance R. A second wire of the SAME material has twice the length and twice the diameter of the first. What is the resistance of the second wire?"
options:
  - "0.50R"
  - "R"
  - "2R"
  - "4R"
answer: 0
marks: 1
misconception: resistance-length-area-scaling
worked: |
  Resistance is proportional to length ÷ cross-sectional area (R ∝ L ÷ A).
  Doubling the length multiplies R by 2.
  Doubling the DIAMETER multiplies the area by 2² = 4 (since A ∝ d²), which divides R by 4.
  Overall factor = 2 ÷ 4 = 0.50, so the resistance is 0.50R.
```

```yaml
type: short
topic: "T14 Current of Electricity"
stem: "A charge of 240 C passes a point in a circuit in 2.0 minutes. Calculate the current, in A."
accepted: ["2", "2.0", "2 A", "2.0 A"]
marks: 1
misconception: charge-time-unit
worked: |
  Convert the time to seconds: 2.0 minutes = 120 s.
  I = Q ÷ t = 240 ÷ 120 = 2.0 A.
```

```yaml
type: mcq
topic: "T17 Magnetism"
stem: "Which material is the best choice for the core of an electromagnet?"
options:
  - "Soft iron, because it is easily magnetised and easily demagnetised"
  - "Steel, because it keeps its magnetism after the current is switched off"
  - "Copper, because it is an excellent electrical conductor"
  - "Aluminium, because it is light and does not rust"
answer: 0
marks: 1
misconception: soft-iron-vs-steel
worked: |
  An electromagnet must switch OFF when the current is switched off.
  Soft iron is a soft magnetic material: it magnetises strongly when the current flows and loses almost all its magnetism when the current stops — exactly what is needed.
  Steel is a hard magnetic material and would stay magnetised, so it is used for permanent magnets instead. Copper and aluminium are not magnetic materials at all.
```

```yaml
type: mcq
topic: "T17 Magnetism"
stem: "Which statement about magnetic field lines is correct?"
options:
  - "Outside a magnet they run from the N pole to the S pole, and they never cross one another"
  - "Outside a magnet they run from the S pole to the N pole"
  - "They cross one another at the points where the field is strongest"
  - "They are closest together where the field is weakest"
answer: 0
marks: 1
misconception: field-line-rules
worked: |
  By convention, field lines outside a magnet point from N to S (they show the direction of the force on a free N pole).
  They can never cross, because the field can only have one direction at any point.
  Where the lines are CLOSER together, the field is STRONGER — for example just outside the poles.
```

```yaml
type: mcq
topic: "T17 Magnetism"
stem: "An unmagnetised iron nail is brought near the N pole of a strong magnet. What happens?"
options:
  - "The nail is attracted, because a S pole is induced in the end of the nail nearest the magnet"
  - "The nail is repelled, because a N pole is induced in the end nearest the magnet"
  - "Nothing happens, because the nail is not magnetised"
  - "The nail is attracted only after it has been heated"
answer: 0
marks: 1
misconception: induced-magnetism
worked: |
  The magnet induces magnetism in the iron: the end of the nail nearest the N pole becomes a S pole (unlike poles are induced nearest).
  Unlike poles attract, so the nail is pulled towards the magnet.
  This is why a magnet attracts an unmagnetised magnetic material from EITHER of its poles.
```

```yaml
type: mcq
topic: "T17 Magnetism"
stem: "Which of these materials is NOT attracted by a magnet?"
options:
  - "Copper"
  - "Iron"
  - "Steel"
  - "Nickel"
answer: 0
marks: 1
misconception: magnetic-material-classification
worked: |
  Iron, steel, nickel and cobalt are magnetic materials and are attracted by a magnet.
  Copper is not a magnetic material — nor are aluminium, brass, plastic, wood or glass — so it is not attracted, even though copper is an excellent conductor of electricity.
```

```yaml
type: short
topic: "T17 Magnetism"
stem: "Name the metal normally used for the core of an electromagnet."
accepted: ["soft iron", "iron", "soft-iron"]
marks: 1
misconception: electromagnet-core-material
worked: |
  Soft iron. It is easily magnetised when the current flows and loses its magnetism almost completely when the current is switched off, so the electromagnet can be turned on and off.
```

```yaml
type: mcq
topic: "T18 Electromagnetism"
stem: "In Fleming's left-hand rule, what does the FIRST finger represent?"
options:
  - "The magnetic field, pointing from N to S"
  - "The conventional current, from + to −"
  - "The force on the conductor"
  - "The direction in which the electrons flow"
answer: 0
marks: 1
misconception: flemings-finger-assignment
worked: |
  Fleming's LEFT-hand rule (motor rule), with thumb and first two fingers at right angles:
  First finger = Field (N to S);
  seCond finger = Conventional Current (+ to −);
  thuMb = Motion (the force on the conductor).
  If a question gives you the ELECTRON flow, reverse it first to get the conventional current.
```

```yaml
type: mcq
topic: "T18 Electromagnetism"
stem: "A current-carrying wire lying in a magnetic field experiences a force. Both the current direction AND the magnetic field direction are then reversed. What happens to the force?"
options:
  - "It acts in the same direction as before"
  - "It is reversed in direction"
  - "It becomes zero"
  - "It doubles in size"
answer: 0
marks: 1
misconception: double-reversal-force
worked: |
  Apply Fleming's left-hand rule twice.
  Reversing the current alone reverses the force. Reversing the field alone also reverses the force.
  Doing BOTH reverses the force twice, which brings it back to its original direction. Its size is unchanged.
```

```yaml
type: mcq
topic: "T18 Electromagnetism"
stem: "What is the shape of the magnetic field pattern around a long straight current-carrying wire?"
options:
  - "Concentric circles centred on the wire"
  - "Straight lines running parallel to the wire"
  - "A pattern like that of a bar magnet, with two poles"
  - "Straight radial lines pointing away from the wire"
answer: 0
marks: 1
misconception: straight-wire-field-shape
worked: |
  The field lines around a long straight wire are concentric circles in the plane at right angles to the wire, centred on the wire, and they get further apart as you move away (the field weakens with distance).
  Their direction is given by the right-hand grip rule: point the right thumb along the conventional current and the curled fingers give the direction of the field lines.
```

```yaml
type: mcq
topic: "T18 Electromagnetism"
stem: "What is the purpose of the split-ring commutator in a simple d.c. motor?"
options:
  - "It reverses the current in the coil every half turn, so the coil keeps rotating in the same direction"
  - "It increases the size of the current flowing in the coil"
  - "It reverses the direction of the magnetic field every half turn"
  - "It converts the alternating current of the supply into direct current"
answer: 0
marks: 1
misconception: commutator-purpose
worked: |
  As the coil passes the vertical position, the forces on its two sides would begin to turn it back the other way.
  The split-ring commutator swaps the connections to the supply at exactly that moment, so the current through the coil reverses. The force on each side therefore reverses too, and the turning effect keeps acting in the SAME rotational sense — so the coil spins continuously in one direction.
```

```yaml
type: mcq
topic: "T4 Turning Effect of Forces"
stem: "A force of 20 N acts at a perpendicular distance of 0.30 m from a pivot. Calculate the moment of the force about the pivot."
options:
  - "0.015 N m"
  - "6.0 N m"
  - "20 N m"
  - "67 N m"
answer: 1
marks: 1
misconception: moment-formula
worked: |
  Moment = force × perpendicular distance from the pivot to the line of action of the force.
  Moment = 20 × 0.30 = 6.0 N m.
```

```yaml
type: mcq
topic: "T4 Turning Effect of Forces"
stem: "A uniform metre rule is pivoted at its centre. A 4.0 N weight hangs 30 cm from the pivot on the left-hand side. A weight W hangs 20 cm from the pivot on the right-hand side, and the rule balances. Calculate W."
options:
  - "2.7 N"
  - "6.0 N"
  - "8.0 N"
  - "12 N"
answer: 1
marks: 1
misconception: principle-of-moments
worked: |
  The rule is uniform and pivoted at its centre, so its own weight has no moment about the pivot.
  Principle of moments: sum of anticlockwise moments = sum of clockwise moments.
  4.0 × 30 = W × 20
  120 = 20W, so W = 6.0 N.
  (Distances may be left in cm as long as both sides use the same unit.)
```

```yaml
type: mcq
topic: "T4 Turning Effect of Forces"
stem: "Which change makes an object MORE stable?"
options:
  - "Lowering its centre of gravity and widening its base"
  - "Raising its centre of gravity and widening its base"
  - "Lowering its centre of gravity and narrowing its base"
  - "Making it taller, with most of its mass near the top"
answer: 0
marks: 1
misconception: stability-factors
worked: |
  An object topples once its centre of gravity passes outside the edge of its base.
  A LOWER centre of gravity and a WIDER base both mean the object must be tilted through a larger angle before that happens, so it is more stable — this is why racing cars are low and wide.
```

```yaml
type: short
topic: "T4 Turning Effect of Forces"
stem: "A uniform metre rule is pivoted at its 50 cm mark. A 2.0 N weight hangs at the 20 cm mark. Calculate the weight, in N, that must hang at the 65 cm mark to balance the rule."
accepted: ["4", "4.0", "4 N", "4.0 N"]
marks: 1
misconception: moments-distance-from-pivot
worked: |
  Work out the distances FROM THE PIVOT, not from the ends.
  2.0 N weight: 50 − 20 = 30 cm (anticlockwise).
  Unknown weight W: 65 − 50 = 15 cm (clockwise).
  Principle of moments: 2.0 × 30 = W × 15, so 60 = 15W and W = 4.0 N.
  The rule is uniform and pivoted at its centre, so its own weight contributes no moment.
```

```yaml
type: mcq
topic: "T5 Pressure"
stem: "A force of 600 N acts normally on a surface of area 0.020 m². Calculate the pressure on the surface."
options:
  - "12 Pa"
  - "3.0 × 10³ Pa"
  - "3.0 × 10⁴ Pa"
  - "3.0 × 10⁵ Pa"
answer: 2
marks: 1
misconception: pressure-force-area
worked: |
  p = F ÷ A.
  p = 600 ÷ 0.020 = 30 000 Pa = 3.0 × 10⁴ Pa.
  (Multiplying instead of dividing gives 12 Pa.)
```

```yaml
type: mcq
topic: "T5 Pressure"
stem: "Calculate the pressure due to the water at a depth of 5.0 m in a freshwater lake. (Density of water = 1000 kg/m³, g = 10 m/s²)"
options:
  - "5.0 × 10³ Pa"
  - "5.0 × 10⁴ Pa"
  - "2.0 × 10⁴ Pa"
  - "5.0 × 10⁵ Pa"
answer: 1
marks: 1
misconception: liquid-pressure-rho-g-h
worked: |
  p = ρ g h.
  p = 1000 × 10 × 5.0 = 50 000 Pa = 5.0 × 10⁴ Pa.
  Note that this depends only on the DEPTH and the density — the surface area of the lake and the shape of the container make no difference.
```

```yaml
type: mcq
topic: "T5 Pressure"
stem: "A diver is 10 m below the surface of a freshwater lake. Atmospheric pressure at the surface is 1.0 × 10⁵ Pa. Calculate the TOTAL pressure on the diver. (Density of water = 1000 kg/m³, g = 10 m/s²)"
options:
  - "1.0 × 10⁵ Pa"
  - "1.1 × 10⁵ Pa"
  - "2.0 × 10⁵ Pa"
  - "1.0 × 10⁶ Pa"
answer: 2
marks: 1
misconception: forgetting-atmospheric-pressure
worked: |
  Pressure due to the water alone: p = ρ g h = 1000 × 10 × 10 = 1.0 × 10⁵ Pa.
  The atmosphere also presses down on the surface of the lake and that pressure is transmitted through the water.
  Total pressure = 1.0 × 10⁵ + 1.0 × 10⁵ = 2.0 × 10⁵ Pa.
  Read the question carefully: 'total' means you must add the atmospheric pressure.
```

```yaml
type: short
topic: "T5 Pressure"
stem: "The density of sea water is 1030 kg/m³. Calculate the pressure, in Pa, due to the sea water alone at a depth of 20 m. (g = 10 m/s²)"
accepted: ["206000", "206 000", "2.06 x 10^5", "2.06e5", "206 kPa"]
marks: 1
misconception: rho-g-h-substitution
worked: |
  p = ρ g h = 1030 × 10 × 20 = 206 000 Pa (= 2.06 × 10⁵ Pa).
```

```yaml
type: mcq
topic: "T7 Kinetic Particle Model of Matter"
stem: "A gas is heated inside a sealed container of fixed volume. Why does the pressure of the gas increase?"
options:
  - "The molecules move faster, so they strike the walls more often and each collision exerts a greater force"
  - "The molecules themselves expand and take up more room"
  - "The molecules are pushed closer together as the gas is heated"
  - "The number of gas molecules in the container increases"
answer: 0
marks: 1
misconception: gas-pressure-kinetic-model
worked: |
  Heating raises the average kinetic energy of the molecules, so they move faster.
  Two effects follow: they hit the walls MORE FREQUENTLY, and each collision produces a GREATER change of momentum, so a greater force.
  The total force on unit area of wall therefore rises — the pressure increases. The molecules themselves never expand, and none are added.
```

```yaml
type: mcq
topic: "T7 Kinetic Particle Model of Matter"
stem: "Smoke particles viewed through a microscope are seen to move along random, jerky paths. What does this observation show?"
options:
  - "Air molecules are moving randomly at high speed and bombard each smoke particle unevenly"
  - "The smoke particles are alive"
  - "The air inside the cell is being heated unevenly by the lamp"
  - "The smoke particles carry electric charge and repel one another"
answer: 0
marks: 1
misconception: brownian-motion-explanation
worked: |
  This is Brownian motion. The smoke particles are large enough to see, but the air molecules hitting them are not.
  At any instant the bombardment from the invisible air molecules is unequal on different sides of a smoke particle, so there is a small resultant force that keeps changing in size and direction — the particle jerks about randomly.
  It is evidence that the air molecules are small, fast-moving and in continuous random motion.
```

```yaml
type: short
topic: "T7 Kinetic Particle Model of Matter"
stem: "The volume of a fixed mass of gas is halved at constant temperature. By what factor does its pressure change?"
accepted: ["2", "x2", "2 times", "doubles", "it doubles", "factor of 2"]
marks: 1
misconception: pressure-volume-inverse
worked: |
  At constant temperature, pressure and volume are inversely proportional (p V = constant).
  Halving the volume packs the same molecules into half the space, so they hit unit area of wall twice as often.
  The pressure therefore doubles — it changes by a factor of 2.
```

```yaml
type: mcq
topic: "T13 Static Electricity"
stem: "A polythene rod becomes negatively charged when it is rubbed with a dry cloth. What has happened?"
options:
  - "Electrons have moved from the cloth onto the rod"
  - "Protons have moved from the cloth onto the rod"
  - "Electrons have moved from the rod onto the cloth"
  - "The rod has gained extra neutrons"
answer: 0
marks: 1
misconception: charging-by-friction-electrons
worked: |
  Only ELECTRONS move during charging by friction — protons are held in the nuclei and cannot be transferred.
  The rod ends up negative, so it must have GAINED electrons; they came from the cloth, which is left with an equal positive charge.
```

```yaml
type: mcq
topic: "T13 Static Electricity"
stem: "A charged plastic comb is held just above small pieces of uncharged paper, and the paper jumps up to the comb. Why?"
options:
  - "The comb induces an opposite charge on the near side of each piece of paper; the attraction on the nearer charge is stronger than the repulsion on the further charge"
  - "The pieces of paper were already charged before the comb arrived"
  - "The comb first transfers all of its charge to the paper"
  - "The moving comb creates an upward air current that lifts the paper"
answer: 0
marks: 1
misconception: attraction-of-uncharged-object
worked: |
  The charged comb attracts the opposite charges in each piece of paper towards its near side and pushes like charges to the far side — charging by induction.
  The electrostatic force weakens with distance, so the attraction on the nearer (opposite) charge is larger than the repulsion on the further (like) charge.
  The resultant force is therefore an attraction, and the light paper is pulled up.
```

```yaml
type: mcq
topic: "T13 Static Electricity"
stem: "Why is a road tanker carrying fuel connected to earth by a metal cable before the fuel is unloaded?"
options:
  - "So that the charge produced by the fuel rubbing against the pipe flows safely to earth instead of building up and causing a spark"
  - "To hold the tanker still while it is being emptied"
  - "To keep the fuel cool while it flows through the pipe"
  - "To measure how much fuel has been delivered"
answer: 0
marks: 1
misconception: electrostatic-hazard-earthing
worked: |
  Fuel rubbing against the walls of the pipe transfers electrons, so charge builds up on the tanker.
  If enough charge collects, the p.d. can become large enough to produce a spark — and a spark near fuel vapour could cause a fire or explosion.
  Earthing gives the charge a conducting path to the ground, so it leaks away continuously and never builds up.
```

```yaml
type: mcq
topic: "T11 Electromagnetic Spectrum"
stem: "Which region of the electromagnetic spectrum has the LONGEST wavelength?"
options:
  - "Radio waves"
  - "Infrared"
  - "Ultraviolet"
  - "Gamma rays"
answer: 0
marks: 1
misconception: em-spectrum-order
worked: |
  In order of INCREASING wavelength (and decreasing frequency):
  gamma rays → X-rays → ultraviolet → visible light → infrared → microwaves → radio waves.
  Radio waves therefore have the longest wavelength (and the lowest frequency and energy).
```

```yaml
type: mcq
topic: "T11 Electromagnetic Spectrum"
stem: "Which statement about electromagnetic waves is correct?"
options:
  - "They are all transverse waves and they all travel at the same speed in a vacuum"
  - "They all need a medium in order to travel"
  - "They travel through glass at the same speed as they travel through a vacuum"
  - "They are all longitudinal waves"
answer: 0
marks: 1
misconception: em-wave-common-properties
worked: |
  All electromagnetic waves are transverse, can travel through a vacuum, and travel through a vacuum at the same speed of 3.0 × 10⁸ m/s.
  What differs between the regions is the wavelength and the frequency (and so the energy). In a material such as glass they all slow down, so the third option is false.
```

```yaml
type: mcq
topic: "T11 Electromagnetic Spectrum"
stem: "Which type of electromagnetic radiation is used by a television remote control?"
options:
  - "Infrared"
  - "Gamma rays"
  - "X-rays"
  - "Ultraviolet"
answer: 0
marks: 1
misconception: em-uses-matching
worked: |
  A remote control sends coded pulses of infrared radiation to the television.
  Gamma rays and X-rays are ionising and would be far too hazardous; ultraviolet is also ionising and is used for security marking and sterilising, not for remote controls.
```

```yaml
type: mcq
topic: "T1 Physical Quantities & Measurement"
stem: "A wavelength is measured as 25 nm. What is this length in metres?"
options:
  - "2.5 × 10⁻⁶ m"
  - "2.5 × 10⁻⁸ m"
  - "2.5 × 10⁻⁹ m"
  - "2.5 × 10⁻¹⁰ m"
answer: 1
marks: 1
misconception: prefix-conversion
worked: |
  The prefix nano (n) means × 10⁻⁹.
  25 nm = 25 × 10⁻⁹ m = 2.5 × 10⁻⁸ m (moving the decimal point one place changes the power by one).
```

```yaml
type: mcq
topic: "T1 Physical Quantities & Measurement"
stem: "Two forces act at the same point on a body: 6.0 N due east and 8.0 N due north. Calculate the magnitude of the resultant force."
options:
  - "2.0 N"
  - "10 N"
  - "14 N"
  - "48 N"
answer: 1
marks: 1
misconception: vector-addition-perpendicular
worked: |
  The two forces are at right angles, so add them as vectors using Pythagoras' theorem — do NOT simply add the sizes.
  Resultant = √(6.0² + 8.0²) = √(36 + 64) = √100 = 10 N.
  (Adding the numbers gives 14 N, which would only be correct if the forces acted in the same direction.)
```

```yaml
type: mcq
topic: "T8 Thermal Processes"
stem: "Why are metals much better conductors of thermal energy than non-metals?"
options:
  - "Metals contain free (delocalised) electrons that gain kinetic energy at the hot end, travel through the metal and transfer energy to cooler particles by collision"
  - "Metals contain heavier atoms, which vibrate more slowly and pass energy on more efficiently"
  - "Convection currents can flow inside a solid metal"
  - "Metals absorb infrared radiation far better than non-metals do"
answer: 0
marks: 1
misconception: conduction-free-electrons
worked: |
  Conduction in ANY solid occurs partly by lattice vibration: particles at the hot end vibrate with larger amplitude and jostle their neighbours, passing energy along slowly.
  In a METAL there is a second, much faster mechanism: free (delocalised) electrons at the hot end gain kinetic energy, move rapidly through the whole structure and collide with cooler ions, transferring the energy quickly.
  This extra electron mechanism is why metals conduct thermal energy so much better.
```

```yaml
type: mcq
topic: "T8 Thermal Processes"
stem: "Water at the bottom of a beaker is heated. Why does a convection current form?"
options:
  - "The heated water expands, so its density decreases and it rises; cooler, denser water then sinks to take its place"
  - "The heated water becomes denser, so it rises"
  - "The energy travels up through the water as electromagnetic waves"
  - "Free electrons in the water carry the energy upwards"
answer: 0
marks: 1
misconception: convection-density-chain
worked: |
  The chain of reasoning must be complete:
  the water at the bottom is heated → it EXPANDS → its DENSITY DECREASES → it RISES → cooler, denser water sinks to take its place → this water is heated in turn, so a circulating convection current is set up.
  Convection can only occur in fluids (liquids and gases), because the particles must be free to move from place to place.
```

## TEACHING

```yaml
kind: definition
term: "Acceleration"
topic: "T2 Kinematics"
body: "The rate of change of velocity. a = (change in velocity) ÷ (time taken); the SI unit is m/s²."
```

```yaml
kind: definition
term: "Mass"
topic: "T3 Dynamics"
body: "A measure of the amount of matter in a body; it is also a measure of the body's inertia — its reluctance to change its state of rest or motion. Mass is a scalar, measured in kg, and does not depend on location."
```

```yaml
kind: definition
term: "Weight"
topic: "T3 Dynamics"
body: "The gravitational force acting on a body. W = mg, where g is the gravitational field strength (10 N/kg on Earth). Weight is a vector, measured in newtons, and changes with location."
```

```yaml
kind: definition
term: "Density"
topic: "T3 Dynamics"
body: "Mass per unit volume. ρ = m ÷ V; the SI unit is kg/m³ (1000 kg/m³ = 1 g/cm³)."
```

```yaml
kind: definition
term: "Moment of a force"
topic: "T4 Turning Effect of Forces"
body: "The product of the force and the perpendicular distance from the pivot to the line of action of the force. Moment = F × d, measured in newton metres (N m)."
```

```yaml
kind: definition
term: "Principle of moments"
topic: "T4 Turning Effect of Forces"
body: "When a body is in equilibrium, the sum of the clockwise moments about any pivot is equal to the sum of the anticlockwise moments about that same pivot."
```

```yaml
kind: definition
term: "Centre of gravity"
topic: "T4 Turning Effect of Forces"
body: "The single point through which the whole weight of a body appears to act."
```

```yaml
kind: definition
term: "Pressure"
topic: "T5 Pressure"
body: "The force acting per unit area, at right angles to the surface. p = F ÷ A; the SI unit is the pascal (1 Pa = 1 N/m²)."
```

```yaml
kind: definition
term: "Work done"
topic: "T6 Energy Stores & Transfers"
body: "The product of the force and the distance moved by the point of application of the force in the direction of the force. W = F × s, measured in joules."
```

```yaml
kind: definition
term: "Power"
topic: "T6 Energy Stores & Transfers"
body: "The work done per unit time, or the rate at which energy is transferred. P = W ÷ t = E ÷ t; the SI unit is the watt (1 W = 1 J/s)."
```

```yaml
kind: definition
term: "Efficiency"
topic: "T6 Energy Stores & Transfers"
body: "The ratio of the useful energy output to the total energy input (multiply the ratio by 100 to express it as a percentage). It can equally be written as useful power output ÷ total power input, and can never exceed 1."
```

```yaml
kind: definition
term: "Internal energy"
topic: "T7 Kinetic Particle Model of Matter"
body: "The sum of the kinetic energies and the potential energies of all the particles in a body. The kinetic part depends on temperature; the potential part depends on the separation of the particles."
```

```yaml
kind: definition
term: "Specific heat capacity"
topic: "T9 Thermal Properties of Matter"
body: "The amount of thermal energy required to raise the temperature of unit mass of a substance by 1 °C (or 1 K), with no change of state. Q = m c Δθ; the unit is J/(kg·°C)."
```

```yaml
kind: definition
term: "Specific latent heat of fusion"
topic: "T9 Thermal Properties of Matter"
body: "The amount of thermal energy required to change unit mass of a substance from solid to liquid without any change in temperature. Q = m L; the unit is J/kg."
```

```yaml
kind: definition
term: "Specific latent heat of vaporisation"
topic: "T9 Thermal Properties of Matter"
body: "The amount of thermal energy required to change unit mass of a substance from liquid to gas without any change in temperature. Q = m L; the unit is J/kg."
```

```yaml
kind: definition
term: "Wavelength"
topic: "T10 General Wave Properties"
body: "The distance between two consecutive points on a wave that are in phase — for example from one crest to the next crest. Symbol λ, measured in metres."
```

```yaml
kind: definition
term: "Frequency"
topic: "T10 General Wave Properties"
body: "The number of complete waves produced (or passing a point) per unit time. Symbol f; the SI unit is the hertz (1 Hz = 1 wave per second). f = 1 ÷ T, where T is the period."
```

```yaml
kind: definition
term: "Critical angle"
topic: "T12 Light"
body: "The angle of incidence, in the optically denser medium, for which the angle of refraction in the less dense medium is exactly 90°. sin c = 1 ÷ n."
```

```yaml
kind: definition
term: "Refractive index"
topic: "T12 Light"
body: "For light passing from a vacuum (or air) into a medium, the ratio of the sine of the angle of incidence to the sine of the angle of refraction: n = sin i ÷ sin r. It is equal to the ratio of the speeds: n = c ÷ v."
```

```yaml
kind: definition
term: "Current"
topic: "T14 Current of Electricity"
body: "The rate of flow of electric charge. I = Q ÷ t; the SI unit is the ampere (1 A = 1 C/s). Conventional current flows from + to −, which is opposite to the direction of electron flow."
```

```yaml
kind: definition
term: "Electromotive force (e.m.f.)"
topic: "T14 Current of Electricity"
body: "The work done by a source in driving unit charge round a complete circuit. e.m.f. = W ÷ Q; the unit is the volt (1 V = 1 J/C)."
```

```yaml
kind: definition
term: "Potential difference (p.d.)"
topic: "T14 Current of Electricity"
body: "The work done by unit charge passing from one point to the other in converting electrical energy into other forms of energy. V = W ÷ Q; the unit is the volt."
```

```yaml
kind: definition
term: "Resistance"
topic: "T14 Current of Electricity"
body: "The ratio of the potential difference across a component to the current flowing through it. R = V ÷ I; the SI unit is the ohm (1 Ω = 1 V/A)."
```

```yaml
kind: definition
term: "Magnetic field"
topic: "T17 Magnetism"
body: "A region in which a magnetic pole (or a magnetic material, or a moving charge) experiences a force. Its direction at a point is the direction of the force on a free N pole placed there."
```

```yaml
kind: definition
term: "Half-life"
topic: "T20 Radioactivity"
body: "The time taken for half the unstable nuclei in a sample to decay — equivalently, the time taken for the (background-corrected) activity of the sample to fall to half its original value."
```

```yaml
kind: precision
topic: "T16 Practical Electricity"
prompt: "Explain why the fuse in a plug is placed in the live wire and not in the neutral wire."
model: "The live wire is at a high potential while the neutral wire is at (almost) earth potential. If the fuse were in the neutral wire it would still break the circuit and stop the current, but the appliance would remain connected to the live wire, so its internal parts would stay at a high potential and could still give a fatal shock. Placing the fuse in the live wire means that when it melts the appliance is disconnected from the high potential and is no longer live."
keywords: [live wire, high potential, neutral near earth potential, fuse melts/blows, appliance no longer live, shock]
```

```yaml
kind: precision
topic: "T16 Practical Electricity"
prompt: "A fault causes the live wire to touch the earthed metal case of a heater. Explain how the earth wire and the fuse together keep the user safe."
model: "The earth wire provides a very low-resistance path from the metal case to earth. When the live wire touches the case, a very large current flows through this path. This large current melts the fuse in the live wire, which breaks the circuit and disconnects the appliance from the live supply. The case is therefore no longer live and cannot give the user a shock."
keywords: [low resistance path to earth, very large current, fuse melts, breaks circuit, case no longer live]
```

```yaml
kind: precision
topic: "T16 Practical Electricity"
prompt: "Explain why a double-insulated appliance does not need an earth wire."
model: "In a double-insulated appliance all the live parts are enclosed inside a casing made of an insulating material. Even if a live wire came loose inside, it could not make the outside of the casing live, because the insulating casing cannot conduct the current to the user. There is therefore no risk of the case becoming live, so no earth wire is needed and the cable carries only the live and neutral wires."
keywords: [insulating casing, live parts enclosed, casing cannot become live, no conducting path to user, no earth wire needed]
```

```yaml
kind: precision
topic: "T8 Thermal Processes"
prompt: "Explain why a metal spoon conducts thermal energy much faster than a plastic spoon."
model: "In both materials the particles at the hot end vibrate with larger amplitude and pass energy to neighbouring particles by collision, but this lattice-vibration process is slow. A metal also contains free (delocalised) electrons. These gain kinetic energy at the hot end, move rapidly and randomly through the whole structure, and collide with cooler ions, transferring energy to them. This extra electron mechanism is much faster, so the metal conducts thermal energy far more quickly. Plastic has no free electrons, so it is a poor conductor."
keywords: [vibration of particles, larger amplitude, free/delocalised electrons, gain kinetic energy, collide with cooler ions, faster transfer]
```

```yaml
kind: precision
topic: "T8 Thermal Processes"
prompt: "Explain, in terms of density, how a convection current is set up when water is heated at the bottom of a beaker."
model: "The water at the bottom is heated, so it expands. Its mass is unchanged but its volume increases, so its density decreases. Being less dense than the water above it, this warm water rises. Cooler, denser water then sinks to take its place, and it is heated in turn. A continuous circulating convection current is set up, which transfers thermal energy through the water."
keywords: [heated, expands, density decreases, rises, cooler denser water sinks, circulating current]
```

```yaml
kind: precision
topic: "T18 Electromagnetism"
prompt: "State how you would use Fleming's left-hand rule to find the direction of the force on a current-carrying wire in a magnetic field."
model: "Hold the thumb, first finger and second finger of the LEFT hand at right angles to one another. The First finger points along the magnetic Field, from N to S. The seCond finger points along the conventional Current, from + to −. The thuMb then gives the direction of the Motion, that is the force on the wire. If the question gives the direction of ELECTRON flow, reverse it first, because conventional current flows in the opposite direction to the electrons."
keywords: [left hand, first finger field N to S, second finger conventional current, thumb force/motion, reverse electron flow first]
```

```yaml
kind: precision
topic: "T18 Electromagnetism"
prompt: "Explain how the split-ring commutator allows a simple d.c. motor to rotate continuously in one direction."
model: "The two sides of the coil carry current in opposite directions, so the forces on them (from Fleming's left-hand rule) act in opposite directions and produce a turning effect. As the coil passes through the vertical position the forces would begin to turn it back the other way. At that moment the split-ring commutator swaps the contacts with the brushes, so the current through the coil reverses. The force on each side of the coil therefore reverses too, and the turning effect continues to act in the same rotational sense, so the coil keeps rotating in one direction."
keywords: [forces on opposite sides, turning effect, vertical position, commutator reverses current every half turn, same direction of rotation]
```

```yaml
kind: precision
topic: "T19 Electromagnetic Induction"
prompt: "Explain how a transformer produces an output voltage."
model: "An alternating current in the primary coil produces a magnetic field that is continually changing in size and direction. The soft-iron core links this changing magnetic flux to the secondary coil. Because the flux linking the secondary is changing, an alternating e.m.f. is induced in the secondary coil (Faraday's law). The size of the output depends on the turns ratio: Vs ÷ Vp = Ns ÷ Np. A steady d.c. supply would give a constant flux, so no e.m.f. would be induced."
keywords: [alternating current in primary, changing magnetic field/flux, soft-iron core links flux, e.m.f. induced in secondary, turns ratio, needs a.c.]
```

```yaml
kind: precision
topic: "T19 Electromagnetic Induction"
prompt: "Explain why electrical energy is transmitted over long distances at very high voltage."
model: "The power delivered is P = VI, so for a fixed power a higher transmission voltage means a smaller current in the cables. The power wasted as heat in the cables is P = I²R, which depends on the SQUARE of the current, so reducing the current greatly reduces the energy wasted — halving the current cuts the loss to a quarter. The resistance of the cables is not changed by the voltage; it is the smaller current that saves the energy."
keywords: [P = VI, smaller current for same power, power loss = I squared R, less energy wasted as heat, resistance unchanged]
```

```yaml
kind: precision
topic: "T19 Electromagnetic Induction"
prompt: "The N pole of a magnet is pushed towards a coil connected to a complete circuit. Explain the direction of the induced current and why work must be done to push the magnet in."
model: "By Lenz's law the induced current flows in the direction that opposes the change producing it. The change is the approach of a N pole, so the induced current makes the near end of the coil a N pole, which repels the incoming magnet. Work must therefore be done against this repulsive force to push the magnet in, and that work is what is transferred into electrical energy in the circuit — this is required by the conservation of energy."
keywords: [Lenz's law, opposes the change, induced N pole at near end, repels the magnet, work done against repulsion, conservation of energy]
```

```yaml
kind: precision
topic: "T19 Electromagnetic Induction"
prompt: "The coil of an a.c. generator is turned twice as fast. Describe and explain the two changes to the output voltage-time graph."
model: "One complete cycle is produced per revolution, so turning the coil twice as fast doubles the number of cycles per second: the frequency doubles and the peaks on the graph are half as far apart. At the same time the coil cuts the magnetic field lines at twice the rate, so by Faraday's law the induced e.m.f. is twice as large: the peak value doubles and the graph is twice as tall. Both changes happen together — a common error is to change only one of them."
keywords: [frequency doubles, peaks closer together, rate of cutting flux doubles, peak e.m.f. doubles, graph twice as tall]
```

```yaml
kind: precision
topic: "T9 Thermal Properties of Matter"
prompt: "A solid is heated at a steady rate. Explain why its temperature stays constant on the plateau of the heating curve while it is melting."
model: "Temperature is a measure of the average kinetic energy of the particles. On the plateau, the energy supplied is used to do work against the forces of attraction between the particles, weakening and breaking the bonds of the lattice — it increases the potential energy of the particles, not their kinetic energy. Because the average kinetic energy does not change, the temperature does not change, even though energy is still being supplied."
keywords: [temperature measures average kinetic energy, energy breaks/weakens bonds, increases potential energy, kinetic energy unchanged, temperature constant]
```

```yaml
kind: precision
topic: "T9 Thermal Properties of Matter"
prompt: "Explain, in terms of molecules, why a liquid cools as it evaporates."
model: "The molecules in a liquid have a range of speeds and therefore a range of kinetic energies. Only the most energetic molecules near the surface have enough energy to overcome the attractive forces of the other molecules and escape. When these fastest molecules leave, the average kinetic energy of the molecules remaining in the liquid is lower. Since temperature is a measure of the average kinetic energy of the molecules, the temperature of the liquid falls — the liquid cools."
keywords: [range of kinetic energies, most energetic molecules escape, average kinetic energy of those left falls, temperature measures average KE, liquid cools]
```

```yaml
kind: precision
topic: "T3 Dynamics"
prompt: "Explain, in terms of forces, why a skydiver falling from rest eventually reaches a constant terminal velocity."
model: "At the instant of release the only significant force is the weight, so the resultant force is large and downwards and the skydiver accelerates. As the speed increases, the air resistance increases. The resultant force (weight − air resistance) therefore gets smaller, so the acceleration decreases. Eventually the air resistance becomes equal in size to the weight, the resultant force is zero, the acceleration is zero, and the skydiver falls at a constant, maximum speed — the terminal velocity."
keywords: [weight constant, air resistance increases with speed, resultant force decreases, acceleration decreases, air resistance equals weight, resultant zero, constant velocity]
```

```yaml
kind: precision
topic: "T3 Dynamics"
prompt: "A book rests on a table. State the Newton's third law partner of the weight of the book, and explain how you know the upward push of the table is NOT that partner."
model: "The weight of the book is the gravitational pull of the Earth on the book, so its third-law partner is the gravitational pull of the book on the Earth — the book pulls the Earth upwards with an equal and opposite force. A third-law pair must be the same type of force and must act on two DIFFERENT bodies. The upward push of the table is a contact force, not a gravitational one, and it acts on the same body (the book), so it cannot be the partner of the weight — it merely balances it."
keywords: [gravitational pull of Earth on book, partner: book pulls Earth up, equal and opposite, acts on a different body, same type of force, contact force is not the pair]
```

```yaml
kind: precision
topic: "T12 Light"
prompt: "State the two conditions needed for total internal reflection, and explain how they allow light to travel along an optical fibre."
model: "Total internal reflection occurs only when (1) the light is travelling from an optically denser medium towards a less dense medium, and (2) the angle of incidence in the denser medium is greater than the critical angle. In an optical fibre the core is optically denser than the cladding, so a critical angle exists at the boundary between them. The fibre is made so that light always strikes that boundary at an angle of incidence greater than the critical angle, so the light is repeatedly totally internally reflected along the core and almost none escapes, even when the fibre is bent."
keywords: [denser to less dense medium, angle of incidence greater than critical angle, core denser than cladding, repeated total internal reflection, little energy lost]
```

```yaml
kind: precision
topic: "T12 Light"
prompt: "State the standard construction rays for a converging lens, and describe the image formed when the object is placed beyond 2F."
model: "Two construction rays are enough. Ray 1: a ray from the top of the object travelling parallel to the principal axis is refracted through the principal focus F on the far side. Ray 2: a ray through the optical centre of the lens passes straight through undeviated. (A third check ray through F on the object side emerges parallel to the axis.) Where the rays meet, the image is formed. For an object beyond 2F the image lies between F and 2F on the other side and is real, inverted and diminished."
keywords: [parallel ray refracts through F, ray through optical centre undeviated, rays meet at the image, object beyond 2F, image between F and 2F, real inverted diminished]
```

```yaml
kind: precision
topic: "T20 Radioactivity"
prompt: "Describe how the background count is dealt with when finding a half-life from measured count rates."
model: "First measure the background count rate with the source removed. Then subtract this background count rate from EVERY measured reading to obtain the corrected count rate, which is due to the source alone. Only these corrected values may be halved to find the half-life; halving the raw readings gives the wrong answer because the background is always present and does not decay. If the question asks for the reading a detector will show later, remember to add the background back on at the end."
keywords: [measure background with source removed, subtract from every reading, corrected count rate, halve only corrected values, add background back for a predicted reading]
```

```yaml
kind: precision
topic: "T20 Radioactivity"
prompt: "Explain why α-radiation is the most ionising but the least penetrating of the three radiations."
model: "An α-particle is a helium nucleus: it is relatively massive and carries a charge of +2, which is double that of a β-particle. This large charge exerts a strong attractive or repulsive force on the electrons of the atoms it passes, so it knocks electrons off very readily — it is strongly ionising. Each ionisation takes energy from the α-particle, so because it ionises so heavily it loses its energy over a very short distance and is stopped by a sheet of paper or a few centimetres of air. γ-radiation is uncharged, ionises only weakly, and therefore travels much further before being absorbed."
keywords: [alpha is a helium nucleus, charge +2  relatively massive, strongly ionising, loses energy quickly, short range  stopped by paper, gamma uncharged and weakly ionising]
```

```yaml
kind: precision
topic: "T20 Radioactivity"
prompt: "State the safety precautions a technician should take when handling a radioactive source in the laboratory, with a reason for each."
model: "Handle the source with long-handled tongs, never with bare hands, to increase the distance from the source and reduce the dose received, since the intensity falls rapidly with distance. Point the open end of the source away from the body and from other people. Keep the exposure time as short as possible, because the dose received increases with the time of exposure. Store the source in a lead-lined container when it is not in use, because lead absorbs the ionising radiation. Wash hands afterwards and never eat or drink in the laboratory, to avoid taking a source of contamination into the body."
keywords: [use tongs / increase distance, point away from the body, minimise exposure time, lead-lined storage container, avoid contamination, reduce the dose received]
```

```yaml
kind: precision
topic: "T7 Kinetic Particle Model of Matter"
prompt: "Explain, in terms of molecules, why the pressure of a gas in a sealed container of fixed volume increases when it is heated."
model: "Heating the gas increases the average kinetic energy of its molecules, so the molecules move faster. Because they move faster, they collide with the walls of the container more frequently. Each collision also produces a greater change of momentum, so each one exerts a greater force on the wall. The total force acting on unit area of the wall therefore increases, and since pressure is force per unit area, the pressure increases."
keywords: [average kinetic energy increases, molecules move faster, collide with walls more frequently, greater force per collision, force per unit area increases]
```

```yaml
kind: precision
topic: "T15 D.C. Circuits"
prompt: "A thermistor is connected in series with a fixed resistor across a battery. Explain what happens to the p.d. across the fixed resistor as the thermistor is warmed."
model: "Warming the thermistor decreases its resistance. The total resistance of the series circuit therefore falls, so by I = V ÷ R the current from the battery increases. The p.d. across the fixed resistor is V = IR, and since R is constant while I has increased, the p.d. across the fixed resistor increases. Equivalently, the thermistor now takes a smaller share of the supply p.d., so the fixed resistor takes a larger share — the two p.d.s must still add up to the supply p.d."
keywords: [resistance of thermistor decreases, total resistance falls, current increases, V = IR across fixed resistor, p.d. across fixed resistor increases, shares add to supply p.d.]
```

```yaml
kind: precision
topic: "T14 Current of Electricity"
prompt: "Explain why the I–V graph for a filament lamp is a curve that becomes less steep, rather than a straight line."
model: "As the current through the lamp increases, more energy is transferred to the filament each second, so the filament becomes hotter. The metal ions in the filament then vibrate with a larger amplitude, so the free electrons drifting through the metal collide with them more often and are obstructed more. The resistance of the filament therefore increases as the current increases. Because R = V ÷ I is no longer constant, the graph is not a straight line: the current rises less and less for each further increase in p.d., so the curve flattens."
keywords: [current increases, filament gets hotter, ions vibrate more, electrons collide more often, resistance increases, not ohmic / graph curves]
```

```yaml
kind: precision
topic: "T13 Static Electricity"
prompt: "Explain why a charged plastic rod attracts a small piece of uncharged paper."
model: "The charged rod exerts a force on the charges within the paper. The charges opposite in sign to the rod are attracted to the near side of the paper and the like charges are pushed to the far side — charge has been separated by induction, although the paper as a whole is still uncharged. The electrostatic force gets weaker with distance, so the attraction on the nearer (unlike) charges is greater than the repulsion on the further (like) charges. There is therefore a resultant force of attraction, and because the paper is very light it is pulled up to the rod."
keywords: [charge separation by induction, unlike charge on the near side, like charge pushed to the far side, force weakens with distance, attraction greater than repulsion, resultant attraction]
```

```yaml
kind: precision
topic: "T11 Electromagnetic Spectrum"
prompt: "Explain why over-exposure to ultraviolet radiation is more hazardous than over-exposure to infrared radiation of the same intensity."
model: "Ultraviolet has a much shorter wavelength and therefore a much higher frequency than infrared, so each photon of ultraviolet carries far more energy. Ultraviolet carries enough energy to ionise atoms and to damage the DNA in living cells, which can lead to skin cancer and to eye damage. Infrared is not ionising: over-exposure mainly heats the surface tissue and can cause skin burns. So the two are hazardous in different ways, but ultraviolet is the more dangerous because it is ionising."
keywords: [shorter wavelength, higher frequency, higher energy, ultraviolet is ionising, cell/DNA damage, infrared causes heating and burns]
```
