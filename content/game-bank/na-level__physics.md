---
level: na-level
slug: physics
subjectName: Physics
family: physics
---

## QUESTIONS

```yaml
type: mcq
topic: "P1 Physical Quantities, Units & Measurement"
stem: "A copper wire has a length of 4.5 cm. What is this length in metres?"
options:
  - "45 m"
  - "0.045 m"
  - "0.45 m"
  - "450 m"
answer: 1
marks: 1
misconception: cm-to-m-conversion
worked: |
  1 cm = 0.01 m, so divide the number of centimetres by 100.
  4.5 cm = 4.5 ÷ 100 = 0.045 m.
  Multiplying instead of dividing gives 450 m — longer than a running track, which is an obvious sign that the conversion has gone the wrong way.
```

```yaml
type: mcq
topic: "P1 Physical Quantities, Units & Measurement"
stem: "Which of these is a vector quantity?"
options:
  - "Time"
  - "Speed"
  - "Mass"
  - "Weight"
answer: 3
marks: 1
misconception: scalar-vector-confusion
worked: |
  A vector has both size (magnitude) AND direction; a scalar has size only.
  Weight is a force — it always acts downwards, towards the centre of the Earth — so it has direction and is a vector.
  Mass, speed and time have size only, so they are scalars.
  Other common vectors: force, velocity, acceleration.
```

```yaml
type: mcq
topic: "P1 Physical Quantities, Units & Measurement"
stem: "A silicon chip is 8 μm thick. Written in metres in standard form, this thickness is:"
options:
  - "8 × 10⁻⁹ m"
  - "8 × 10⁶ m"
  - "8 × 10⁻³ m"
  - "8 × 10⁻⁶ m"
answer: 3
marks: 1
misconception: prefix-ladder-micro
worked: |
  The prefix μ (micro) means × 10⁻⁶.
  So 8 μm = 8 × 10⁻⁶ m.
  The ladder to memorise: n = 10⁻⁹, μ = 10⁻⁶, m = 10⁻³, c = 10⁻², k = 10³, M = 10⁶, G = 10⁹.
```

```yaml
type: mcq
topic: "P1 Physical Quantities, Units & Measurement"
stem: "Which instrument is the most suitable for measuring the length of a school running track?"
options:
  - "A 30 cm ruler"
  - "A measuring tape"
  - "A metre rule"
  - "A pair of vernier calipers"
answer: 1
marks: 1
misconception: instrument-range-choice
worked: |
  Choose the instrument whose RANGE fits the measurement.
  A running track is tens or hundreds of metres long, so only a long measuring tape can span it in one go.
  A metre rule or a 30 cm ruler would have to be laid down repeatedly, adding an error each time.
  Vernier calipers are for small objects a few centimetres across — the range is far too small.
```

```yaml
type: mcq
topic: "P1 Physical Quantities, Units & Measurement"
stem: "The diameter of an atom is about 1 × 10⁻¹⁰ m. Approximately how many atoms placed side by side would stretch across 1 mm?"
options:
  - "1 × 10³"
  - "1 × 10⁻⁷"
  - "1 × 10⁷"
  - "1 × 10¹³"
answer: 2
marks: 1
misconception: order-of-magnitude-division
worked: |
  First put both lengths in metres: 1 mm = 1 × 10⁻³ m.
  Number of atoms = total length ÷ length of one atom
  = (1 × 10⁻³) ÷ (1 × 10⁻¹⁰)
  = 1 × 10⁽⁻³ ⁻ ⁽⁻¹⁰⁾⁾ = 1 × 10⁷.
  So about ten million atoms fit across one millimetre.
```

```yaml
type: mcq
topic: "P1 Physical Quantities, Units & Measurement"
stem: "Which row pairs a physical quantity with its correct SI unit?"
options:
  - "Energy — joule (J)"
  - "Power — newton (N)"
  - "Pressure — watt (W)"
  - "Force — pascal (Pa)"
answer: 0
marks: 1
misconception: quantity-unit-pairing
worked: |
  Energy is measured in joules (J) — correct.
  Power is measured in watts (W), not newtons.
  Pressure is measured in pascals (Pa), not watts.
  Force is measured in newtons (N), not pascals.
  Only the energy–joule pairing is correct.
```

```yaml
type: mcq
topic: "P2 Kinematics"
stem: "A cyclist rides 900 m in 150 s at a steady rate. What is her speed?"
options:
  - "0.17 m/s"
  - "4 m/s"
  - "60 m/s"
  - "6 m/s"
answer: 3
marks: 1
misconception: speed-formula-inverted
worked: |
  speed = distance ÷ time
  = 900 ÷ 150
  = 6 m/s.
  Dividing time by distance (150 ÷ 900 = 0.17) gives the wrong quantity — always distance on top.
```

```yaml
type: mcq
topic: "P2 Kinematics"
stem: "A bus travels 20 km in 0.5 h, then 40 km in the next 1.5 h. What is its average speed for the whole journey?"
options:
  - "60 km/h"
  - "33 km/h"
  - "40 km/h"
  - "30 km/h"
answer: 3
marks: 1
misconception: average-of-speeds-error
worked: |
  Average speed = TOTAL distance ÷ TOTAL time.
  Total distance = 20 + 40 = 60 km.
  Total time = 0.5 + 1.5 = 2.0 h.
  Average speed = 60 ÷ 2.0 = 30 km/h.
  Do NOT average the two separate speeds (40 km/h and 26.7 km/h → 33 km/h): that is only valid if the two stages take the same TIME, which they do not here.
```

```yaml
type: mcq
topic: "P2 Kinematics"
stem: "On a speed–time graph a straight line rises from 0 m/s at t = 0 s to 12 m/s at t = 4 s. What is the acceleration?"
options:
  - "48 m/s²"
  - "3 m/s²"
  - "12 m/s²"
  - "0.33 m/s²"
answer: 1
marks: 1
misconception: gradient-as-multiplication
worked: |
  Acceleration = gradient of a speed–time graph = change in speed ÷ time taken.
  Change in speed = 12 − 0 = 12 m/s.
  Time taken = 4 s.
  Acceleration = 12 ÷ 4 = 3 m/s².
  Multiplying (12 × 4 = 48) gives the AREA, which is the distance, not the acceleration.
```

```yaml
type: mcq
topic: "P2 Kinematics"
stem: "On a speed–time graph a straight line rises from rest to 12 m/s over 4 s. What distance is travelled in those 4 s?"
options:
  - "3 m"
  - "24 m"
  - "12 m"
  - "48 m"
answer: 1
marks: 1
misconception: area-under-graph-triangle
worked: |
  Distance = AREA under a speed–time graph.
  The shape is a triangle with base 4 s and height 12 m/s.
  Area = ½ × base × height = ½ × 4 × 12 = 24 m.
  Forgetting the ½ gives 48 m — the area of the whole rectangle, not the triangle.
```

```yaml
type: mcq
topic: "P2 Kinematics"
stem: "A distance–time graph for a toy car is a horizontal straight line. What does this show?"
options:
  - "The car is accelerating"
  - "The car is at rest"
  - "The car moves at a steady speed"
  - "The car is slowing down"
answer: 1
marks: 1
misconception: dt-graph-horizontal
worked: |
  On a DISTANCE–time graph the gradient is the speed.
  A horizontal line has zero gradient, so the speed is zero: the distance from the start is not changing and the car is stationary.
  A horizontal line on a SPEED–time graph would mean steady speed — that is the graph students confuse it with.
```

```yaml
type: mcq
topic: "P2 Kinematics"
stem: "A speed–time graph shows a horizontal line at 8 m/s lasting 5 s. What distance is covered in this time?"
options:
  - "40 m"
  - "20 m"
  - "1.6 m"
  - "8 m"
answer: 0
marks: 1
misconception: area-under-graph-rectangle
worked: |
  Distance = area under the speed–time graph.
  The shape is a rectangle: area = 8 m/s × 5 s = 40 m.
  The horizontal line also tells us the acceleration is zero (gradient = 0).
```

```yaml
type: mcq
topic: "P2 Kinematics"
stem: "A train slows down uniformly from 30 m/s to 10 m/s in 10 s. What is its acceleration?"
options:
  - "+2 m/s²"
  - "−20 m/s²"
  - "−2 m/s²"
  - "−0.5 m/s²"
answer: 2
marks: 1
misconception: deceleration-sign
worked: |
  Acceleration = (final speed − initial speed) ÷ time
  = (10 − 30) ÷ 10
  = −20 ÷ 10
  = −2 m/s².
  The minus sign shows the train is slowing down (decelerating). Subtracting the wrong way round gives +2 m/s², which would mean speeding up.
```

```yaml
type: mcq
topic: "P2 Kinematics"
stem: "A ball is released from rest and falls freely. Taking g = 10 m/s², what is its speed after 2 s?"
options:
  - "40 m/s"
  - "20 m/s"
  - "10 m/s"
  - "5 m/s"
answer: 1
marks: 1
misconception: free-fall-speed-after-time
worked: |
  In free fall the acceleration is g = 10 m/s², meaning the speed increases by 10 m/s every second.
  After 1 s: 10 m/s. After 2 s: 20 m/s.
  Using acceleration = change in speed ÷ time:
  change in speed = 10 × 2 = 20 m/s, and it started from rest, so the speed is 20 m/s.
```

```yaml
type: mcq
topic: "P2 Kinematics"
stem: "Two straight lines P and Q are drawn on the same distance–time graph. Line P is steeper than line Q. Which statement is correct?"
options:
  - "P is moving slower than Q"
  - "P has travelled less distance than Q at every time"
  - "P is moving faster than Q"
  - "P is accelerating and Q is not"
answer: 2
marks: 1
misconception: steeper-line-meaning
worked: |
  On a distance–time graph the GRADIENT is the speed.
  The steeper the line, the larger the gradient, so the greater the speed.
  P is steeper, so P is faster.
  Both lines are straight, so both bodies move at a steady speed — neither is accelerating.
```

```yaml
type: mcq
topic: "P2 Kinematics"
stem: "A runner keeps a steady speed of 5 m/s. How far does she run in 2 minutes?"
options:
  - "24 m"
  - "10 m"
  - "600 m"
  - "60 m"
answer: 2
marks: 1
misconception: minutes-to-seconds
worked: |
  Convert the time to seconds first: 2 minutes = 2 × 60 = 120 s.
  distance = speed × time = 5 × 120 = 600 m.
  Using 2 (minutes) instead of 120 (seconds) gives 10 m — the classic planted-conversion trap.
```

```yaml
type: mcq
topic: "P3 Force & Pressure"
stem: "A bag has a mass of 6 kg. Taking g = 10 m/s², what is its weight?"
options:
  - "0.6 N"
  - "600 N"
  - "60 N"
  - "6 N"
answer: 2
marks: 1
misconception: weight-equals-mass
worked: |
  Weight is a force: W = mg.
  W = 6 kg × 10 m/s² = 60 N.
  Weight is in newtons; mass stays in kilograms. Writing '6 N' means you copied the mass instead of multiplying by g.
```

```yaml
type: mcq
topic: "P3 Force & Pressure"
stem: "An astronaut takes a 2 kg toolbox from Earth to the Moon, where the gravitational field strength is smaller. Which statement is correct?"
options:
  - "Its mass is less but its weight is unchanged"
  - "Both its mass and its weight are unchanged"
  - "Both its mass and its weight are less"
  - "Its mass is still 2 kg but its weight is less"
answer: 3
marks: 1
misconception: mass-vs-weight-on-moon
worked: |
  Mass is the quantity of matter in the body. It does not depend on where the body is, so it is still 2 kg.
  Weight is the gravitational force on the body, W = mg. The Moon has a smaller g, so the same mass has a SMALLER weight.
  Mass: unchanged. Weight: smaller.
```

```yaml
type: mcq
topic: "P3 Force & Pressure"
stem: "A metal block has a mass of 240 g and a volume of 30 cm³. What is its density?"
options:
  - "7200 g/cm³"
  - "210 g/cm³"
  - "0.125 g/cm³"
  - "8 g/cm³"
answer: 3
marks: 1
misconception: density-formula-inverted
worked: |
  ρ = m ÷ V
  = 240 g ÷ 30 cm³
  = 8 g/cm³.
  Dividing volume by mass (30 ÷ 240 = 0.125) inverts the formula. Subtracting (240 − 30) or multiplying (240 × 30) are not density at all.
```

```yaml
type: mcq
topic: "P3 Force & Pressure"
stem: "A liquid of mass 800 g fills a container of volume 1000 cm³. What is its density in kg/m³?"
options:
  - "8000 kg/m³"
  - "800 kg/m³"
  - "0.8 kg/m³"
  - "1250 kg/m³"
answer: 1
marks: 1
misconception: density-unit-conversion
worked: |
  First in g/cm³: ρ = 800 ÷ 1000 = 0.8 g/cm³.
  To convert g/cm³ to kg/m³, multiply by 1000:
  0.8 × 1000 = 800 kg/m³.
  (Water is 1.0 g/cm³ = 1000 kg/m³, so 800 kg/m³ is sensible for a liquid that floats on water.)
```

```yaml
type: mcq
topic: "P3 Force & Pressure"
stem: "A stone of mass 144 g is lowered into a measuring cylinder. The water level rises from 50 cm³ to 68 cm³. What is the density of the stone?"
options:
  - "8.0 g/cm³"
  - "2.9 g/cm³"
  - "2.1 g/cm³"
  - "0.125 g/cm³"
answer: 0
marks: 1
misconception: displacement-volume-reading
worked: |
  Volume of the stone = volume of water displaced = 68 − 50 = 18 cm³.
  ρ = m ÷ V = 144 ÷ 18 = 8.0 g/cm³.
  Using the FINAL reading 68 cm³ (144 ÷ 68 = 2.1) forgets to subtract the starting level.
```

```yaml
type: mcq
topic: "P3 Force & Pressure"
stem: "Equal-sized samples of one metal are weighed. On a graph of mass against volume the points lie on a straight line through the origin, passing through (20 cm³, 54 g). What is the density of the metal?"
options:
  - "74 g/cm³"
  - "1080 g/cm³"
  - "2.7 g/cm³"
  - "0.37 g/cm³"
answer: 2
marks: 1
misconception: gradient-is-density
worked: |
  For a mass–volume graph, gradient = mass ÷ volume = density.
  gradient = 54 g ÷ 20 cm³ = 2.7 g/cm³.
  The line passes through the origin, which confirms mass is directly proportional to volume for the same material.
  Multiplying (54 × 20) or inverting (20 ÷ 54) both give nonsense values.
```

```yaml
type: mcq
topic: "P3 Force & Pressure"
stem: "A force of 200 N acts on a flat surface of area 0.5 m². What pressure does it exert?"
options:
  - "400 Pa"
  - "0.0025 Pa"
  - "40 Pa"
  - "100 Pa"
answer: 0
marks: 1
misconception: pressure-formula-inverted
worked: |
  p = F ÷ A
  = 200 N ÷ 0.5 m²
  = 400 Pa.
  Dividing by 0.5 is the same as multiplying by 2, so the pressure is bigger than the force value — dividing 200 by 2 (=100) is the usual slip.
```

```yaml
type: mcq
topic: "P3 Force & Pressure"
stem: "A box of weight 60 N stands on a table. Its base has an area of 200 cm². What pressure does it exert on the table?"
options:
  - "30 Pa"
  - "3000 Pa"
  - "0.3 Pa"
  - "12 000 Pa"
answer: 1
marks: 1
misconception: cm2-to-m2-conversion
worked: |
  Convert the area to SI units first: 1 m² = 10 000 cm², so
  A = 200 ÷ 10 000 = 0.02 m².
  p = F ÷ A = 60 ÷ 0.02 = 3000 Pa.
  Leaving the area as 200 cm² gives 60 ÷ 200 = 0.3, which is 100 times too small — this conversion is the mark most often lost.
```

```yaml
type: mcq
topic: "P3 Force & Pressure"
stem: "A tyre gauge reads a pressure of 250 kPa. What is this pressure in pascals?"
options:
  - "2.5 × 10⁻¹ Pa"
  - "2.5 × 10³ Pa"
  - "2.5 × 10⁵ Pa"
  - "250 Pa"
answer: 2
marks: 1
misconception: kpa-to-pa-conversion
worked: |
  The prefix k (kilo) means × 1000.
  250 kPa = 250 × 1000 = 250 000 Pa = 2.5 × 10⁵ Pa.
  Dropping the prefix altogether (250 Pa) or converting only part way (2.5 × 10³) loses the mark.
```

```yaml
type: mcq
topic: "P3 Force & Pressure"
stem: "A skier wears wide skis instead of narrow boots so that she does not sink into soft snow. Why do the skis help?"
options:
  - "The larger area increases the pressure, so the snow is packed harder"
  - "The larger area spreads her weight, so the pressure on the snow is smaller"
  - "The larger area makes her weight smaller"
  - "The skis reduce the force of gravity acting on her"
answer: 1
marks: 1
misconception: area-pressure-relationship
worked: |
  p = F ÷ A. Her weight (the force F) is unchanged by wearing skis.
  The skis give a much LARGER contact area A.
  With F fixed and A larger, the pressure p is smaller, so the snow is not pushed in and she stays on the surface.
  Skis cannot change her weight — only the area over which it is spread.
```

```yaml
type: mcq
topic: "P3 Force & Pressure"
stem: "Which of these is a non-contact force?"
options:
  - "Weight"
  - "Air resistance"
  - "Friction"
  - "The normal contact force from a table"
answer: 0
marks: 1
misconception: contact-vs-noncontact-force
worked: |
  A non-contact force acts at a distance, with no touching.
  Weight is the gravitational pull of the Earth on a body — it acts even when nothing is touching the body, so it is a non-contact force.
  Friction, air resistance and the normal contact force all need surfaces (or air) in contact with the body.
```

```yaml
type: mcq
topic: "P3 Force & Pressure"
stem: "A pressure of 500 Pa acts over an area of 4 m². What is the force exerted?"
options:
  - "125 N"
  - "0.008 N"
  - "504 N"
  - "2000 N"
answer: 3
marks: 1
misconception: rearranging-p-f-a
worked: |
  Start from p = F ÷ A and rearrange: F = p × A.
  F = 500 Pa × 4 m² = 2000 N.
  Dividing (500 ÷ 4 = 125) rearranges the formula the wrong way — check by putting 2000 N back in: 2000 ÷ 4 = 500 Pa. ✓
```

```yaml
type: mcq
topic: "P4 Dynamics"
stem: "A resultant force of 15 N acts on a trolley of mass 5 kg. What is the acceleration of the trolley?"
options:
  - "0.33 m/s²"
  - "3 m/s²"
  - "10 m/s²"
  - "75 m/s²"
answer: 1
marks: 1
misconception: f-ma-rearrangement
worked: |
  F = ma, so a = F ÷ m.
  a = 15 N ÷ 5 kg = 3 m/s².
  Multiplying (15 × 5 = 75) uses the formula the wrong way round.
```

```yaml
type: mcq
topic: "P4 Dynamics"
stem: "A car of mass 300 kg has a driving force of 800 N and experiences 200 N of friction and drag. What is its acceleration?"
options:
  - "0.67 m/s²"
  - "3.33 m/s²"
  - "2.67 m/s²"
  - "2 m/s²"
answer: 3
marks: 1
misconception: resultant-force-before-fma
worked: |
  Find the RESULTANT force first (the forces are in opposite directions, so subtract):
  resultant F = 800 − 200 = 600 N.
  Then a = F ÷ m = 600 ÷ 300 = 2 m/s².
  Using the 800 N driving force on its own gives 2.67 m/s² — friction must always be taken off first.
```

```yaml
type: mcq
topic: "P4 Dynamics"
stem: "A lorry travels along a straight road at a constant speed. What is the resultant force acting on it?"
options:
  - "Zero"
  - "Equal to the friction force"
  - "Equal to the driving force of the engine"
  - "Equal to its weight"
answer: 0
marks: 1
misconception: constant-speed-needs-force
worked: |
  Constant speed in a straight line means zero acceleration.
  F = ma, and if a = 0 then the resultant force F = 0.
  The forces are BALANCED: the driving force equals the total friction/drag, and the weight equals the upward force from the road.
  A moving object does not need a resultant force to keep moving — it only needs one to change its motion.
```

```yaml
type: mcq
topic: "P4 Dynamics"
stem: "A book rests on a table. Which two forces are an action–reaction pair (Newton's third law)?"
options:
  - "The weight of the book; the weight of the table"
  - "The push of the book on the table; the weight of the book"
  - "The Earth pulls the book down; the book pulls the Earth up"
  - "The weight of the book; the upward push of the table on the book"
answer: 2
marks: 1
misconception: action-reaction-same-body
worked: |
  An action–reaction pair must: (a) be the same type of force, (b) be equal in size and opposite in direction, and (c) act on DIFFERENT bodies.
  The Earth's gravitational pull on the book and the book's gravitational pull on the Earth satisfy all three.
  The weight of the book and the table's upward push both act on the SAME body (the book), so they are balanced forces, NOT an action–reaction pair — this is the classic trap.
```

```yaml
type: mcq
topic: "P5 Energy"
stem: "A 2 kg book is lifted 5 m onto a shelf. Taking g = 10 m/s², how much gravitational potential energy does it gain?"
options:
  - "1 J"
  - "25 J"
  - "100 J"
  - "10 J"
answer: 2
marks: 1
misconception: ep-mgh-missing-g
worked: |
  Eₚ = mgh
  = 2 kg × 10 m/s² × 5 m
  = 100 J.
  Leaving out g gives 10 J. Remember h is the CHANGE in height, and the unit of energy is the joule.
```

```yaml
type: mcq
topic: "P5 Energy"
stem: "A trolley of mass 4 kg moves at 5 m/s. What is its kinetic energy?"
options:
  - "10 J"
  - "100 J"
  - "50 J"
  - "20 J"
answer: 2
marks: 1
misconception: ke-forgot-square
worked: |
  Eₖ = ½mv²  — square the speed FIRST.
  v² = 5² = 25.
  Eₖ = ½ × 4 × 25 = 50 J.
  Squaring the whole ½mv (giving 100 J) or forgetting the square (½ × 4 × 5 = 10 J) are the two usual errors.
```

```yaml
type: mcq
topic: "P5 Energy"
stem: "A boy pushes a crate with a steady force of 40 N and moves it 6 m in the direction of the force. How much work does he do?"
options:
  - "240 J"
  - "6.7 J"
  - "34 J"
  - "46 J"
answer: 0
marks: 1
misconception: work-done-formula
worked: |
  Work done = force × distance moved in the direction of the force.
  W = 40 N × 6 m = 240 J.
  Work is measured in joules. Adding or subtracting the two numbers is not physics — the formula is a product.
```

```yaml
type: mcq
topic: "P5 Energy"
stem: "A machine transfers 600 J of energy in 4 s. What is its power?"
options:
  - "0.0067 W"
  - "2400 W"
  - "150 W"
  - "604 W"
answer: 2
marks: 1
misconception: power-formula-inverted
worked: |
  Power = energy transferred ÷ time taken.
  P = 600 J ÷ 4 s = 150 W.
  Multiplying (600 × 4 = 2400) inverts the formula. Power is measured in watts, where 1 W = 1 J/s.
```

```yaml
type: mcq
topic: "P5 Energy"
stem: "An electric motor transfers 24 000 J of energy in 2 minutes. What is its power output?"
options:
  - "48 000 W"
  - "200 W"
  - "100 W"
  - "12 000 W"
answer: 1
marks: 1
misconception: power-minutes-not-seconds
worked: |
  Convert the time to seconds: 2 minutes = 2 × 60 = 120 s.
  P = E ÷ t = 24 000 ÷ 120 = 200 W.
  Using 2 minutes as '2' gives 12 000 W — sixty times too big. Power calculations always need the time in seconds.
```

```yaml
type: mcq
topic: "P5 Energy"
stem: "A ball of mass 0.5 kg is dropped from a height of 20 m. Ignoring air resistance and taking g = 10 m/s², how much kinetic energy does it have just before it lands?"
options:
  - "100 J"
  - "200 J"
  - "10 J"
  - "50 J"
answer: 0
marks: 1
misconception: energy-conservation-transfer
worked: |
  By the principle of conservation of energy, the gravitational potential energy lost is transferred to the kinetic store.
  Eₚ lost = mgh = 0.5 × 10 × 20 = 100 J.
  So Eₖ just before landing = 100 J.
  No energy is 'used up' by falling — it is only transferred from one store to another.
```

```yaml
type: mcq
topic: "P5 Energy"
stem: "A catapult's rubber band is pulled back and held. Which energy store has increased?"
options:
  - "The nuclear store"
  - "The elastic potential store"
  - "The kinetic store"
  - "The thermal store"
answer: 1
marks: 1
misconception: energy-store-naming
worked: |
  Stretching or squashing something that springs back fills the ELASTIC POTENTIAL store.
  The band is not moving while it is held, so the kinetic store is empty.
  When the band is released, the elastic potential store empties and the kinetic store of the projectile fills.
```

```yaml
type: mcq
topic: "P5 Energy"
stem: "An electric kettle is switched on at the mains. Energy is transferred from the mains supply to the kettle's heating element mainly by which pathway?"
options:
  - "A mechanical (force) pathway"
  - "An electrical pathway"
  - "A nuclear pathway"
  - "Radiation from the Sun"
answer: 1
marks: 1
misconception: store-vs-pathway
worked: |
  A PATHWAY is the way energy is moved; a STORE is where it ends up.
  Charge flows through the element because there is a p.d. across it, so energy is carried from the mains by an ELECTRICAL pathway.
  It then fills the thermal store of the element and the water (a heating pathway warms the water).
  A mechanical pathway would need a force moving through a distance, which is not what happens here.
```

```yaml
type: mcq
topic: "P5 Energy"
stem: "A boy of weight 500 N walks up a staircase of vertical height 4 m. How much work does he do against gravity?"
options:
  - "125 J"
  - "2000 J"
  - "504 J"
  - "50 J"
answer: 1
marks: 1
misconception: work-against-gravity-weight-given
worked: |
  Work done against gravity = weight × vertical height gained.
  W = 500 N × 4 m = 2000 J.
  The weight (500 N) is already a force, so do NOT multiply by g again. If you had been given his mass instead, you would first find W = mg.
```

```yaml
type: mcq
topic: "P5 Energy"
stem: "A boy does 2000 J of work climbing a staircase in 10 s. What is his useful power output?"
options:
  - "20 W"
  - "2000 W"
  - "20 000 W"
  - "200 W"
answer: 3
marks: 1
misconception: power-from-work-and-time
worked: |
  Power = work done ÷ time taken.
  P = 2000 J ÷ 10 s = 200 W.
  Multiplying instead of dividing gives 20 000 W — about the power of a small car engine, which is clearly not a boy on a staircase.
```

```yaml
type: mcq
topic: "P6 Kinetic Particle Model of Matter"
stem: "In which state of matter are the particles closely packed in a regular pattern, vibrating about fixed positions?"
options:
  - "Liquid"
  - "All three states"
  - "Gas"
  - "Solid"
answer: 3
marks: 1
misconception: particle-triplet-solid
worked: |
  Use the particle triplet — arrangement, motion, forces/distances:
  Solid: regular, closely packed arrangement; particles vibrate about FIXED positions; very strong forces between them.
  Liquid: closely packed but disordered; particles slide over one another.
  Gas: far apart and random; particles move quickly in all directions with negligible forces between them.
  Only the solid has fixed positions.
```

```yaml
type: mcq
topic: "P6 Kinetic Particle Model of Matter"
stem: "Ice at 0 °C is heated steadily and melts. The temperature stays at 0 °C until all the ice has melted. Why?"
options:
  - "The energy supplied increases the average kinetic energy of the particles"
  - "The energy supplied increases the potential energy of the particles by separating them, not their kinetic energy"
  - "The energy supplied is destroyed as the ice melts"
  - "No energy is being supplied while the ice is melting"
answer: 1
marks: 1
misconception: melting-plateau-ke-not-pe
worked: |
  Temperature is a measure of the AVERAGE KINETIC energy of the particles.
  During melting, the energy supplied is used to overcome/weaken the forces of attraction and separate the particles — it raises their POTENTIAL energy.
  The average kinetic energy therefore does not change, so the temperature stays constant, giving the flat plateau on the heating curve.
  Energy is never destroyed — it is still going in, just into a different part of the internal energy.
```

```yaml
type: mcq
topic: "P6 Kinetic Particle Model of Matter"
stem: "The internal energy of a substance is best described as:"
options:
  - "The total kinetic energy of the randomly moving particles plus the total potential energy between them"
  - "The energy the substance would release if it fell to the ground"
  - "Only the total kinetic energy of the particles"
  - "Only the total potential energy between the particles"
answer: 0
marks: 1
misconception: internal-energy-definition
worked: |
  Internal energy has TWO parts:
  • the total kinetic energy of the particles due to their random motion (linked to temperature), and
  • the total potential energy stored in the forces between the particles (linked to the arrangement/spacing).
  Heating a substance can raise either part — which is exactly why the temperature can stay constant during melting while energy still flows in.
```

```yaml
type: mcq
topic: "P6 Kinetic Particle Model of Matter"
stem: "A liquid is heated and its temperature rises. What happens to the average kinetic energy of its particles?"
options:
  - "It falls to zero"
  - "It decreases"
  - "It increases"
  - "It stays the same"
answer: 2
marks: 1
misconception: temperature-and-average-ke
worked: |
  Temperature is a measure of the average kinetic energy of the random motion of the particles.
  A higher temperature therefore means a GREATER average kinetic energy — the particles move faster on average.
  This is the sentence examiners want: 'the particles gain kinetic energy and move faster'.
```

```yaml
type: mcq
topic: "P7 Thermal Processes"
stem: "Metals are much better conductors of thermal energy than plastics mainly because metals contain:"
options:
  - "Trapped air pockets that carry the energy"
  - "Convection currents inside the solid"
  - "Particles that are further apart than in a plastic"
  - "Free (delocalised) electrons that carry energy quickly through the metal"
answer: 3
marks: 1
misconception: conduction-in-metals
worked: |
  Conduction in ANY solid happens when particles vibrate more strongly and pass energy on to their neighbours by collisions.
  In a metal there is a second, much faster route: free (delocalised) electrons move through the metal, colliding with particles and transferring energy rapidly.
  That extra electron route is why metals are the best conductors.
  Convection cannot happen in a solid, and trapped air is what makes an insulator good, not a conductor.
```

```yaml
type: mcq
topic: "P7 Thermal Processes"
stem: "Water at the bottom of a beaker is heated. Why does the warm water rise?"
options:
  - "Heat always travels upwards through a liquid"
  - "It expands, becomes less dense, and is pushed up by the denser cooler water around it"
  - "It contracts, becomes denser, and floats"
  - "The free electrons in the water carry it upwards"
answer: 1
marks: 1
misconception: convection-density-change
worked: |
  The convection chain, in order:
  1. The water near the heater gains energy and its particles move further apart — it EXPANDS.
  2. The same mass now occupies a larger volume, so its DENSITY falls (ρ = m/V).
  3. The denser, cooler water sinks and pushes the less dense warm water UP.
  4. The warm water cools higher up, becomes denser again and sinks — a convection current.
  Every mark hinges on the words 'expands → less dense → rises'.
```

```yaml
type: mcq
topic: "P7 Thermal Processes"
stem: "Which surface is the best EMITTER of infrared radiation?"
options:
  - "A dull black surface"
  - "A polished mirror"
  - "A shiny white surface"
  - "A shiny silver surface"
answer: 0
marks: 1
misconception: emitter-absorber-surface
worked: |
  Dull, black, rough surfaces are the best emitters AND the best absorbers of infrared radiation.
  Shiny, silvery, smooth surfaces are poor emitters and poor absorbers — they reflect infrared instead.
  That is why cooling fins are painted black but a vacuum flask is silvered.
```

```yaml
type: mcq
topic: "P7 Thermal Processes"
stem: "Which method of thermal energy transfer can take place through a vacuum?"
options:
  - "Both conduction and convection"
  - "Convection"
  - "Conduction"
  - "Radiation"
answer: 3
marks: 1
misconception: transfer-needs-medium
worked: |
  Conduction needs particles in contact to pass energy on. Convection needs a fluid whose particles can flow.
  A vacuum contains no particles, so neither can happen.
  Radiation is the transfer of energy by infrared electromagnetic waves, which need NO medium — which is how energy reaches us from the Sun through space.
```

```yaml
type: mcq
topic: "P7 Thermal Processes"
stem: "Why can convection not take place in a solid?"
options:
  - "Solids are always colder than fluids"
  - "Solids contain no energy to transfer"
  - "The particles are held in fixed positions and cannot flow from place to place"
  - "The particles in a solid are too far apart"
answer: 2
marks: 1
misconception: convection-requires-fluid
worked: |
  Convection depends on BULK MOVEMENT of the material: warmer, less dense material rises and cooler, denser material sinks.
  In a solid the particles only vibrate about fixed positions — they cannot move from place to place, so no convection current can form.
  Solids transfer thermal energy by conduction instead.
```

```yaml
type: mcq
topic: "P7 Thermal Processes"
stem: "The inner surfaces of a vacuum flask are silvered. What is the purpose of the silvering?"
options:
  - "To reduce energy transfer by conduction through the glass"
  - "To stop convection currents inside the vacuum"
  - "To reduce energy transfer by radiation, by reflecting infrared back into the flask"
  - "To make the flask stronger"
answer: 2
marks: 1
misconception: vacuum-flask-features
worked: |
  Each feature of the flask blocks one transfer method:
  • The vacuum between the walls stops conduction and convection (no particles).
  • The SILVERED surfaces are poor emitters and good reflectors, so they cut down radiation.
  • The stopper/plastic cap reduces conduction and evaporation out of the top.
  The silvering is specifically the anti-radiation feature.
```

```yaml
type: mcq
topic: "P8 General Properties of Waves"
stem: "A wave has a frequency of 50 Hz and a wavelength of 4 m. What is its speed?"
options:
  - "12.5 m/s"
  - "0.08 m/s"
  - "54 m/s"
  - "200 m/s"
answer: 3
marks: 1
misconception: wave-equation-basic
worked: |
  v = f λ
  = 50 Hz × 4 m
  = 200 m/s.
  Dividing (50 ÷ 4 = 12.5) rearranges the wave equation wrongly — v = fλ is a product.
```

```yaml
type: mcq
topic: "P8 General Properties of Waves"
stem: "A sound wave travels at 340 m/s and has a frequency of 1700 Hz. What is its wavelength?"
options:
  - "1360 m"
  - "578 000 m"
  - "5 m"
  - "0.2 m"
answer: 3
marks: 1
misconception: wave-equation-rearranged
worked: |
  v = f λ, so λ = v ÷ f.
  λ = 340 ÷ 1700 = 0.2 m.
  Dividing the wrong way round (1700 ÷ 340 = 5) gives a wavelength five times bigger than the whole wave speed — a good check that it is wrong.
```

```yaml
type: mcq
topic: "P8 General Properties of Waves"
stem: "A water wave has a frequency of 2 kHz and a wavelength of 0.15 m. What is its speed?"
options:
  - "30 m/s"
  - "0.3 m/s"
  - "300 m/s"
  - "13 333 m/s"
answer: 2
marks: 1
misconception: khz-to-hz-conversion
worked: |
  Convert the frequency to hertz first: 2 kHz = 2 × 1000 = 2000 Hz.
  v = f λ = 2000 × 0.15 = 300 m/s.
  Using '2' instead of 2000 gives 0.3 m/s — a thousand times too small. The kHz → Hz step is the planted trap.
```

```yaml
type: mcq
topic: "P8 General Properties of Waves"
stem: "A wave has a frequency of 4 Hz. What is its period?"
options:
  - "0.4 s"
  - "4 s"
  - "40 s"
  - "0.25 s"
answer: 3
marks: 1
misconception: period-frequency-reciprocal
worked: |
  Period and frequency are reciprocals: T = 1 ÷ f.
  T = 1 ÷ 4 = 0.25 s.
  So one complete wave takes a quarter of a second, and four complete waves pass each second. ✓
```

```yaml
type: mcq
topic: "P8 General Properties of Waves"
stem: "On a wave diagram, the amplitude is:"
options:
  - "The distance from a crest to the next trough"
  - "The distance between two successive crests"
  - "The number of complete waves produced each second"
  - "The maximum displacement from the rest (undisturbed) position"
answer: 3
marks: 1
misconception: amplitude-vs-peak-to-peak
worked: |
  Amplitude = the MAXIMUM displacement of a point from its rest (undisturbed) position — measured from the centre line to a crest (or to a trough).
  Crest to the next trough is TWICE the amplitude (the peak-to-peak height) — the most common wrong answer.
  Crest to the next crest is the wavelength.
  Waves per second is the frequency.
```

```yaml
type: mcq
topic: "P8 General Properties of Waves"
stem: "A displacement–distance graph shows 3 complete waves across 12 cm. What is the wavelength?"
options:
  - "0.25 cm"
  - "12 cm"
  - "4 cm"
  - "36 cm"
answer: 2
marks: 1
misconception: wavelength-from-graph
worked: |
  Wavelength = the length of ONE complete wave.
  On a displacement–DISTANCE graph, read the horizontal axis:
  λ = 12 cm ÷ 3 = 4 cm.
  Reading the full 12 cm as the wavelength forgets to divide by the number of waves shown.
```

```yaml
type: mcq
topic: "P8 General Properties of Waves"
stem: "Which of these is a longitudinal wave?"
options:
  - "A radio wave"
  - "A water ripple on a ripple tank"
  - "Visible light"
  - "Sound travelling through air"
answer: 3
marks: 1
misconception: transverse-vs-longitudinal-example
worked: |
  In a LONGITUDINAL wave the particles vibrate along the SAME direction as the wave travels, producing compressions and rarefactions. Sound in air is the standard example.
  In a TRANSVERSE wave the vibrations are at right angles to the direction of travel — water ripples, light and all other electromagnetic waves are transverse.
  So only sound in air is longitudinal here.
```

```yaml
type: mcq
topic: "P8 General Properties of Waves"
stem: "A displacement–time graph for a vibrating point shows 2 complete waves in 0.8 s. What is the frequency of the wave?"
options:
  - "5 Hz"
  - "2 Hz"
  - "0.4 Hz"
  - "2.5 Hz"
answer: 3
marks: 1
misconception: period-from-time-graph
worked: |
  On a displacement–TIME graph, one complete wave takes one period.
  T = 0.8 s ÷ 2 = 0.4 s.
  f = 1 ÷ T = 1 ÷ 0.4 = 2.5 Hz.
  Quoting 0.4 gives the PERIOD, not the frequency — read the question carefully.
```

```yaml
type: mcq
topic: "P9 Electromagnetic Spectrum"
stem: "Which region of the electromagnetic spectrum has the LONGEST wavelength?"
options:
  - "Radio waves"
  - "Ultraviolet"
  - "X-rays"
  - "Infrared"
answer: 0
marks: 1
misconception: em-spectrum-order
worked: |
  In order of INCREASING wavelength (and decreasing frequency):
  gamma rays → X-rays → ultraviolet → visible light → infrared → microwaves → radio waves.
  Radio waves sit at the long-wavelength, low-frequency end, so they have the longest wavelength of the four listed.
  Gamma rays are at the opposite end: shortest wavelength, highest frequency.
```

```yaml
type: mcq
topic: "P9 Electromagnetic Spectrum"
stem: "Which region of the electromagnetic spectrum is used by a television remote control?"
options:
  - "X-rays"
  - "Gamma rays"
  - "Ultraviolet"
  - "Infrared"
answer: 3
marks: 1
misconception: em-region-uses
worked: |
  Remote controls send short pulses of INFRARED to the television.
  Ultraviolet is used in security marking and sterilising; X-rays are used for medical images of bones and airport security; gamma rays are used to sterilise equipment and to treat tumours.
  Infrared is also used in thermal imaging and short-range data links.
```

```yaml
type: mcq
topic: "P9 Electromagnetic Spectrum"
stem: "Which statement is true of ALL electromagnetic waves?"
options:
  - "They all have the same frequency"
  - "They are transverse and travel at the same speed in a vacuum"
  - "They are longitudinal and need a medium to travel through"
  - "They can all be seen by the human eye"
answer: 1
marks: 1
misconception: em-common-properties
worked: |
  All electromagnetic waves: are TRANSVERSE, transfer energy, can travel through a vacuum, and travel at the SAME speed in a vacuum (about 3 × 10⁸ m/s).
  What differs between the regions is the wavelength and frequency (linked by v = fλ).
  Only the narrow visible band can be seen by the eye.
```

```yaml
type: mcq
topic: "P9 Electromagnetic Spectrum"
stem: "Which is a hazard of too much exposure to ultraviolet radiation?"
options:
  - "It makes the body's bones weaker by dissolving them"
  - "Damage to skin cells, which can lead to skin cancer"
  - "It causes the body to become radioactive"
  - "It has no hazard at all because it is not visible"
answer: 1
marks: 1
misconception: uv-hazard
worked: |
  Ultraviolet carries enough energy to ionise and damage cells. Over-exposure damages skin cells (sunburn, and an increased risk of skin cancer) and can damage the eyes — which is why sunscreen and sunglasses are used.
  Infrared and microwaves mainly cause HEATING of tissue; X-rays and gamma rays are ionising and can also damage cells.
  Being exposed to ultraviolet does not make a body radioactive.
```

```yaml
type: mcq
topic: "P10 Electric Charge & Current of Electricity"
stem: "A current of 2 A flows through a lamp for 30 s. How much charge passes through the lamp?"
options:
  - "0.067 C"
  - "32 C"
  - "15 C"
  - "60 C"
answer: 3
marks: 1
misconception: q-it-formula
worked: |
  Q = I t
  = 2 A × 30 s
  = 60 C.
  Charge is measured in coulombs (C). Dividing (30 ÷ 2 = 15) inverts the formula.
```

```yaml
type: mcq
topic: "P10 Electric Charge & Current of Electricity"
stem: "A current of 0.5 A flows for 4 minutes. How much charge passes?"
options:
  - "120 C"
  - "8 C"
  - "2 C"
  - "480 C"
answer: 0
marks: 1
misconception: charge-time-in-minutes
worked: |
  Convert the time to SECONDS first: 4 minutes = 4 × 60 = 240 s.
  Q = I t = 0.5 × 240 = 120 C.
  Using 4 minutes as '4' gives 2 C — sixty times too small. Q = It always needs t in seconds.
```

```yaml
type: mcq
topic: "P10 Electric Charge & Current of Electricity"
stem: "A charge of 300 C passes a point in a circuit in 60 s. What is the current?"
options:
  - "240 A"
  - "18 000 A"
  - "5 A"
  - "0.2 A"
answer: 2
marks: 1
misconception: current-as-charge-per-second
worked: |
  Current is the rate of flow of charge: I = Q ÷ t.
  I = 300 C ÷ 60 s = 5 A.
  So 1 ampere means 1 coulomb of charge passing each second.
  Dividing the wrong way (60 ÷ 300 = 0.2) inverts the definition.
```

```yaml
type: mcq
topic: "P10 Electric Charge & Current of Electricity"
stem: "In a circuit, the conventional current is taken to flow:"
options:
  - "Only inside the battery, not in the wires"
  - "From the negative terminal to the positive terminal, in the same direction as the electrons"
  - "In both directions at the same time"
  - "From the positive terminal to the negative terminal of the battery, round the external circuit"
answer: 3
marks: 1
misconception: conventional-current-direction
worked: |
  CONVENTIONAL current is defined as flowing from + to − around the external circuit.
  The electrons in a metal wire are negatively charged and actually drift from − to +, i.e. in the OPPOSITE direction to the conventional current.
  Circuit diagrams, ammeters and all your calculations use the conventional direction.
```

```yaml
type: mcq
topic: "P10 Electric Charge & Current of Electricity"
stem: "Two wires are made of the same material and have the same length, but wire Y has twice the diameter of wire X. Compared with wire X, the resistance of wire Y is:"
options:
  - "Twice as large"
  - "One quarter as large"
  - "Four times as large"
  - "One half as large"
answer: 1
marks: 1
misconception: resistance-area-scaling
worked: |
  Resistance is proportional to length and INVERSELY proportional to cross-sectional area.
  Doubling the diameter multiplies the cross-sectional area by 2² = 4 (area depends on the square of the diameter).
  Four times the area means one quarter of the resistance.
  Halving the resistance (the popular wrong answer) forgets to square the diameter.
```

```yaml
type: mcq
topic: "P10 Electric Charge & Current of Electricity"
stem: "A component has a potential difference of 6 V across it and a current of 0.25 A through it. What is its resistance?"
options:
  - "1.5 Ω"
  - "24 Ω"
  - "0.042 Ω"
  - "6.25 Ω"
answer: 1
marks: 1
misconception: r-v-i-rearrangement
worked: |
  R = V ÷ I
  = 6 V ÷ 0.25 A
  = 24 Ω.
  Dividing by 0.25 is the same as multiplying by 4, so the answer must be bigger than 6. Multiplying (6 × 0.25 = 1.5) is the usual slip.
```

```yaml
type: mcq
topic: "P11 D.C. Circuits"
stem: "A 3 Ω resistor and a 5 Ω resistor are connected in series. What is the effective resistance?"
options:
  - "2 Ω"
  - "1.9 Ω"
  - "15 Ω"
  - "8 Ω"
answer: 3
marks: 1
misconception: series-resistance-addition
worked: |
  In SERIES, resistances simply add:
  R = R₁ + R₂ = 3 + 5 = 8 Ω.
  The parallel rule (which would give about 1.9 Ω) must not be used here — in series the current has only one path and meets both resistors one after the other.
```

```yaml
type: mcq
topic: "P11 D.C. Circuits"
stem: "Two 6 Ω resistors are connected in parallel. What is the effective resistance?"
options:
  - "6 Ω"
  - "3 Ω"
  - "12 Ω"
  - "0.33 Ω"
answer: 1
marks: 1
misconception: parallel-identical-resistors
worked: |
  For two identical resistors in parallel, the effective resistance is half of one of them:
  1/R = 1/6 + 1/6 = 2/6, so R = 6/2 = 3 Ω.
  Adding them (12 Ω) uses the series rule.
  Notice the answer, 3 Ω, is SMALLER than either branch — always true for parallel.
```

```yaml
type: mcq
topic: "P11 D.C. Circuits"
stem: "A 3 Ω resistor and a 6 Ω resistor are connected in parallel. What is the effective resistance?"
options:
  - "2 Ω"
  - "4.5 Ω"
  - "18 Ω"
  - "9 Ω"
answer: 0
marks: 1
misconception: parallel-unequal-resistors
worked: |
  1/R = 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2, so R = 2 Ω.
  (Shortcut for exactly two resistors: R = product ÷ sum = (3 × 6) ÷ (3 + 6) = 18 ÷ 9 = 2 Ω.)
  Check: 2 Ω is smaller than the smaller branch (3 Ω). ✓
  A very common error is stopping at 1/R = 1/2 and writing 0.5 Ω — remember to invert.
```

```yaml
type: mcq
topic: "P11 D.C. Circuits"
stem: "A 10 Ω resistor and a 40 Ω resistor are connected in parallel. Without calculating, which statement MUST be true?"
options:
  - "The effective resistance is exactly 25 Ω"
  - "The effective resistance is 50 Ω"
  - "The effective resistance is less than 10 Ω"
  - "The effective resistance is between 10 Ω and 40 Ω"
answer: 2
marks: 1
misconception: parallel-less-than-smallest
worked: |
  Adding a second path in parallel gives the current an extra route, so the total resistance always FALLS.
  The effective resistance of a parallel combination is therefore always LESS than the smallest individual branch — here, less than 10 Ω.
  (The exact value is (10 × 40) ÷ 50 = 8 Ω, which confirms it.)
  50 Ω is the series answer and 25 Ω is the average — both are traps.
```

```yaml
type: mcq
topic: "P11 D.C. Circuits"
stem: "A 2 Ω resistor and a 4 Ω resistor are connected in series. The current through the 2 Ω resistor is 0.5 A. What is the current through the 4 Ω resistor?"
options:
  - "0.25 A"
  - "0.5 A"
  - "2.0 A"
  - "1.0 A"
answer: 1
marks: 1
misconception: series-current-splits
worked: |
  In a SERIES circuit there is only one path, so the current is the SAME at every point.
  The current through the 4 Ω resistor is therefore also 0.5 A.
  The p.d.s across the two resistors are different (1 V and 2 V), but the current is not — it is the p.d., not the current, that is shared in series.
```

```yaml
type: mcq
topic: "P11 D.C. Circuits"
stem: "A 2 Ω resistor and a 4 Ω resistor are connected in series across a 12 V battery. What is the potential difference across the 4 Ω resistor?"
options:
  - "6 V"
  - "4 V"
  - "12 V"
  - "8 V"
answer: 3
marks: 1
misconception: series-pd-sharing
worked: |
  Step 1 — total resistance: R = 2 + 4 = 6 Ω.
  Step 2 — current: I = V ÷ R = 12 ÷ 6 = 2 A (the same through both).
  Step 3 — p.d. across the 4 Ω resistor: V = I R = 2 × 4 = 8 V.
  Check: the 2 Ω resistor takes 2 × 2 = 4 V, and 8 + 4 = 12 V. ✓
  The larger resistance always takes the larger share of the p.d.
```

```yaml
type: mcq
topic: "P11 D.C. Circuits"
stem: "Two lamps are connected in parallel across a 6 V battery. What is the potential difference across each lamp?"
options:
  - "6 V"
  - "3 V"
  - "1.5 V"
  - "12 V"
answer: 0
marks: 1
misconception: parallel-pd-shared
worked: |
  Components in PARALLEL are connected across the same two points, so they all have the SAME potential difference — here the full 6 V of the battery.
  It is the CURRENT that splits between parallel branches, not the p.d.
  Sharing the p.d. (3 V each) is the series rule wrongly applied.
```

```yaml
type: mcq
topic: "P11 D.C. Circuits"
stem: "A 4 Ω resistor and a 12 Ω resistor are connected in parallel across a 12 V battery. What is the total current drawn from the battery?"
options:
  - "4 A"
  - "3 A"
  - "16 A"
  - "1 A"
answer: 0
marks: 1
misconception: parallel-branch-currents-add
worked: |
  Each branch has the full 12 V across it.
  Branch 1: I = V ÷ R = 12 ÷ 4 = 3 A.
  Branch 2: I = 12 ÷ 12 = 1 A.
  The branch currents ADD to give the current from the battery: I = 3 + 1 = 4 A.
  Check with the effective resistance: R = (4 × 12) ÷ 16 = 3 Ω, and I = 12 ÷ 3 = 4 A. ✓
```

```yaml
type: mcq
topic: "P11 D.C. Circuits"
stem: "In a circuit, the ammeter reads 0.4 A and the voltmeter across a resistor reads 2.0 V. What is the resistance of that resistor?"
options:
  - "2.4 Ω"
  - "0.8 Ω"
  - "0.2 Ω"
  - "5 Ω"
answer: 3
marks: 1
misconception: reading-meters-then-r-v-i
worked: |
  Read the two meters, then apply R = V ÷ I.
  R = 2.0 V ÷ 0.4 A = 5 Ω.
  Multiplying the readings (2.0 × 0.4 = 0.8) is the most common error in the data-table questions.
```

```yaml
type: mcq
topic: "P11 D.C. Circuits"
stem: "How should meters be connected to measure the current through a lamp and the potential difference across it?"
options:
  - "Ammeter in series with the lamp; voltmeter in parallel with the lamp"
  - "Both meters in parallel with the lamp"
  - "Both meters in series with the lamp"
  - "Ammeter in parallel with the lamp; voltmeter in series with the lamp"
answer: 0
marks: 1
misconception: meter-connection
worked: |
  An AMMETER measures the current THROUGH the lamp, so the same current must pass through it: connect it in SERIES. It has a very low resistance so it barely changes the circuit.
  A VOLTMETER measures the p.d. ACROSS the lamp, so it must be connected across it: in PARALLEL. It has a very high resistance so it draws almost no current.
  Swapping them would short out the lamp and give useless readings.
```

```yaml
type: mcq
topic: "P11 D.C. Circuits"
stem: "A 2 Ω resistor is connected in series with two 4 Ω resistors that are connected in parallel with each other. What is the total resistance of the circuit?"
options:
  - "10 Ω"
  - "4 Ω"
  - "2 Ω"
  - "6 Ω"
answer: 1
marks: 1
misconception: mixed-series-parallel
worked: |
  Deal with the PARALLEL pair first:
  two 4 Ω in parallel = 4 ÷ 2 = 2 Ω.
  Now that 2 Ω combination is in SERIES with the single 2 Ω resistor:
  R = 2 + 2 = 4 Ω.
  Adding all three (2 + 4 + 4 = 10 Ω) treats the whole circuit as series and is the usual mistake.
```

```yaml
type: mcq
topic: "P11 D.C. Circuits"
stem: "A lamp is connected in series with a battery and a variable resistor. The resistance of the variable resistor is increased. What happens?"
options:
  - "The current rises and the lamp gets brighter"
  - "The current is unchanged but the lamp gets dimmer"
  - "The current falls but the brightness is unchanged"
  - "The current falls and the lamp gets dimmer"
answer: 3
marks: 1
misconception: variable-resistor-effect
worked: |
  The battery p.d. is fixed. Increasing the variable resistor increases the TOTAL resistance of the series circuit.
  From I = V ÷ R, a bigger R with the same V means a SMALLER current.
  Less current through the lamp means less power transferred in it (P = VI), so the lamp is dimmer.
  This is exactly how a dimmer switch works.
```

```yaml
type: mcq
topic: "P12 Practical Electricity"
stem: "An appliance operating at 230 V draws a current of 2 A. What is its power?"
options:
  - "232 W"
  - "0.0087 W"
  - "115 W"
  - "460 W"
answer: 3
marks: 1
misconception: p-vi-formula
worked: |
  P = V I
  = 230 V × 2 A
  = 460 W.
  Dividing (230 ÷ 2 = 115) inverts the formula. Power is measured in watts.
```

```yaml
type: mcq
topic: "P12 Practical Electricity"
stem: "A 1150 W heater is connected to a 230 V supply. What current does it draw?"
options:
  - "0.2 A"
  - "920 A"
  - "5 A"
  - "264 500 A"
answer: 2
marks: 1
misconception: i-p-over-v
worked: |
  P = V I, so I = P ÷ V.
  I = 1150 W ÷ 230 V = 5 A.
  Multiplying (1150 × 230) gives an absurd current — always sanity-check that a household current is a few amperes, not thousands.
```

```yaml
type: mcq
topic: "P12 Practical Electricity"
stem: "A 920 W appliance runs from a 230 V supply. Fuses available are 1 A, 3 A, 5 A and 13 A. Which fuse should be fitted?"
options:
  - "13 A"
  - "5 A"
  - "3 A"
  - "1 A"
answer: 1
marks: 1
misconception: fuse-rating-choice
worked: |
  Step 1 — find the normal operating current:
  I = P ÷ V = 920 ÷ 230 = 4 A.
  Step 2 — choose the fuse rating just ABOVE the operating current, so the fuse does not blow in normal use but still blows quickly in a fault.
  4 A operating current → the 5 A fuse.
  A 3 A fuse would melt every time the appliance was switched on; a 13 A fuse would allow a dangerously large fault current before blowing.
```

```yaml
type: mcq
topic: "P12 Practical Electricity"
stem: "A 2 kW heater is switched on for 3 hours. Electricity costs $0.30 per kW h. What is the cost of running it?"
options:
  - "$0.60"
  - "$18.00"
  - "$1.80"
  - "$0.18"
answer: 2
marks: 1
misconception: kwh-cost-calculation
worked: |
  Energy in kW h = power in kW × time in hours
  = 2 kW × 3 h = 6 kW h.
  Cost = energy × price per unit = 6 × $0.30 = $1.80.
  Forgetting to multiply by the time (2 × 0.30 = $0.60) is the usual slip.
```

```yaml
type: mcq
topic: "P12 Practical Electricity"
stem: "A 200 W television is left on for 5 hours. How much energy does it use, in kilowatt-hours?"
options:
  - "1.0 kW h"
  - "0.04 kW h"
  - "1000 kW h"
  - "40 kW h"
answer: 0
marks: 1
misconception: watts-to-kilowatts
worked: |
  Convert the power to kilowatts first: 200 W = 200 ÷ 1000 = 0.2 kW.
  Energy = power (kW) × time (h) = 0.2 × 5 = 1.0 kW h.
  Leaving the power in watts gives 200 × 5 = 1000, which would be the answer in watt-hours, not kilowatt-hours.
```

```yaml
type: mcq
topic: "P12 Practical Electricity"
stem: "A fault makes the metal casing of an appliance become live. The appliance is earthed and fitted with a fuse. What happens next?"
options:
  - "Nothing happens until somebody touches the casing"
  - "The earth wire provides a low-resistance path to earth, so a very large current flows and the fuse melts, disconnecting the appliance"
  - "The earth wire stores the extra charge safely inside the casing"
  - "The fuse increases the resistance so that the current stays safe"
answer: 1
marks: 1
misconception: earthing-causal-chain
worked: |
  Learn this chain in order:
  fault → live wire touches the metal casing → the earth wire gives a LOW-RESISTANCE path from the casing to earth → a very LARGE current flows → the fuse (in the live wire) overheats and MELTS → the circuit is broken and the appliance is isolated from the live supply → the casing is now safe to touch.
  The earth wire does not 'store' charge, and a fuse does not limit current — it breaks the circuit.
```

```yaml
type: mcq
topic: "P12 Practical Electricity"
stem: "Why are the switch and the fuse placed in the LIVE wire of a mains appliance rather than the neutral wire?"
options:
  - "Because the fuse only works with a neutral connection"
  - "So that when they break the circuit, the appliance is fully isolated from the high-voltage live supply"
  - "Because the neutral wire carries no current at all"
  - "Because the live wire has a much lower resistance"
answer: 1
marks: 1
misconception: fuse-switch-on-live
worked: |
  If the switch or fuse were in the NEUTRAL wire, breaking it would stop the current, but the appliance would still be joined to the live wire — the casing and internal parts would remain at a high potential and could give a fatal shock during repairs.
  Putting them in the LIVE wire means that when they open, the appliance is cut off from the dangerous live supply and everything after the break is at (or near) earth potential.
```

```yaml
type: mcq
topic: "P12 Practical Electricity"
stem: "Which of these is an electrical hazard in the home?"
options:
  - "A switch fitted in the live wire"
  - "Damaged insulation on a cable"
  - "A fuse of the correct rating in the plug"
  - "An earthed metal casing"
answer: 1
marks: 1
misconception: electrical-hazard-identification
worked: |
  Damaged (frayed or cracked) insulation exposes the live conductor, so a person can touch it and receive a shock, or the live wire can touch the casing and cause a fire.
  Other common hazards: overloaded sockets, overheating cables (too many appliances on one socket), and damp/wet conditions near mains equipment.
  The correct fuse, an earthed casing and a switch in the live wire are all SAFETY features, not hazards.
```

```yaml
type: mcq
topic: "P12 Practical Electricity"
stem: "An appliance has a plastic casing and only two wires — live and neutral, with no earth wire. This appliance is described as:"
options:
  - "Overloaded"
  - "Unfused and unsafe"
  - "Double insulated"
  - "Short-circuited"
answer: 2
marks: 1
misconception: double-insulation
worked: |
  A DOUBLE-INSULATED appliance has no exposed metal that a user can touch; the outer casing is an insulator (plastic), and the live parts are enclosed in a second layer of insulation.
  Because the casing can never become live, no earth wire is needed and only two wires are used.
  Common examples: plastic-bodied hairdryers, drills and kettles.
```

```yaml
type: mcq
topic: "P12 Practical Electricity"
stem: "What is one advantage of a circuit breaker over a fuse?"
options:
  - "It allows a much larger current to flow before it acts"
  - "It removes the need for an earth wire"
  - "It can be reset after a fault instead of being replaced"
  - "It reduces the electricity bill"
answer: 2
marks: 1
misconception: breaker-vs-fuse
worked: |
  A fuse contains a thin wire that MELTS in a fault — it is destroyed and must be replaced.
  A circuit breaker is an automatic switch that trips open; once the fault is repaired it can simply be RESET, and it also operates faster than a fuse.
  Both do the same job (breaking the live wire in a fault) and neither replaces the earth wire or changes the cost of electricity.
```

```yaml
type: mcq
topic: "P13 Radioactivity"
stem: "A radioactive sample has an activity of 800 counts/min. After 20 minutes the activity has fallen to 200 counts/min. What is the half-life of the sample?"
options:
  - "10 minutes"
  - "40 minutes"
  - "5 minutes"
  - "20 minutes"
answer: 0
marks: 1
misconception: half-life-from-halving-steps
worked: |
  Count the HALVING steps:
  800 → 400 (one half-life) → 200 (two half-lives).
  So 2 half-lives take 20 minutes.
  One half-life = 20 ÷ 2 = 10 minutes.
  Reading 20 minutes straight off the question forgets that the activity fell to a QUARTER, not a half.
```

```yaml
type: mcq
topic: "P13 Radioactivity"
stem: "An isotope has a half-life of 6 hours. What fraction of the original undecayed nuclei remains after 24 hours?"
options:
  - "1/8"
  - "1/32"
  - "1/4"
  - "1/16"
answer: 3
marks: 1
misconception: fraction-remaining-halvings
worked: |
  Number of half-lives = 24 ÷ 6 = 4.
  Halve the fraction once per half-life:
  1 → 1/2 → 1/4 → 1/8 → 1/16.
  After 4 half-lives, 1/16 of the original nuclei remain (and 15/16 have decayed).
  Stopping after 3 halvings gives 1/8 — count the steps carefully.
```

```yaml
type: mcq
topic: "P13 Radioactivity"
stem: "A sample contains 80 g of a radioactive isotope with a half-life of 5 days. What mass of the isotope remains undecayed after 15 days?"
options:
  - "40 g"
  - "20 g"
  - "10 g"
  - "5 g"
answer: 2
marks: 1
misconception: mass-remaining-halvings
worked: |
  Number of half-lives = 15 ÷ 5 = 3.
  80 g → 40 g (5 days) → 20 g (10 days) → 10 g (15 days).
  So 10 g of the isotope remains.
  Dividing by 3 (80 ÷ 3) instead of halving three times is the classic error — decay is not linear.
```

```yaml
type: mcq
topic: "P13 Radioactivity"
stem: "Which type of radiation is stopped by a single sheet of paper?"
options:
  - "Gamma"
  - "All three are stopped by paper"
  - "Beta"
  - "Alpha"
answer: 3
marks: 1
misconception: penetrating-power-ranking
worked: |
  Penetrating power, from least to most:
  • ALPHA: stopped by a sheet of paper (or a few centimetres of air).
  • BETA: passes through paper but is stopped by a few millimetres of aluminium.
  • GAMMA: very penetrating — only greatly reduced by several centimetres of lead or thick concrete.
  Ionising power runs the other way: alpha is the most strongly ionising, gamma the least.
```

```yaml
type: mcq
topic: "P13 Radioactivity"
stem: "Which type of radiation is the most strongly ionising?"
options:
  - "Alpha"
  - "Gamma"
  - "Beta"
  - "They all ionise equally"
answer: 0
marks: 1
misconception: ionising-power-ranking
worked: |
  Alpha particles are relatively large and heavy and carry a double positive charge, so they interact strongly with the atoms they pass and knock off many electrons — they are the MOST strongly ionising.
  Beta particles are much lighter with a single negative charge — moderately ionising.
  Gamma rays have no charge and no mass — the LEAST ionising, but the most penetrating.
  Ionising power and penetrating power are always in opposite orders.
```

```yaml
type: mcq
topic: "P13 Radioactivity"
stem: "Which type of radiation is an electromagnetic wave and needs a thick sheet of lead to reduce it significantly?"
options:
  - "Beta"
  - "None of them"
  - "Gamma"
  - "Alpha"
answer: 2
marks: 1
misconception: gamma-is-em-wave
worked: |
  Gamma radiation is a high-frequency electromagnetic WAVE — it has no mass and no charge, which is why it is so penetrating and needs thick lead or concrete to cut it down.
  Alpha radiation is a particle (2 protons + 2 neutrons, charge +2) and beta radiation is a fast-moving electron (beta-minus, charge −1). Both are particles, not waves.
```

```yaml
type: mcq
topic: "P13 Radioactivity"
stem: "An atom of uranium is written as ²³⁵₉₂U. How many neutrons does its nucleus contain?"
options:
  - "327"
  - "143"
  - "235"
  - "92"
answer: 1
marks: 1
misconception: neutron-number-from-nuclide
worked: |
  In the notation ᴬ𝗓X: A = 235 is the nucleon number (protons + neutrons) and Z = 92 is the proton number.
  number of neutrons = A − Z = 235 − 92 = 143.
  Adding them (327) or quoting A or Z directly are the usual errors.
```

```yaml
type: mcq
topic: "P13 Radioactivity"
stem: "Two atoms are isotopes of the same element. This means they have:"
options:
  - "The same nucleon number but different proton numbers"
  - "The same number of neutrons but different numbers of protons"
  - "The same proton number but different nucleon numbers"
  - "Different proton numbers and different nucleon numbers"
answer: 2
marks: 1
misconception: isotope-definition
worked: |
  Isotopes are atoms of the SAME element, so they must have the same number of protons (the same proton number Z) — that is what makes them the same element.
  They differ in the number of NEUTRONS, so their nucleon numbers A are different.
  Example: ²³⁵₉₂U and ²³⁸₉₂U both have 92 protons but 143 and 146 neutrons.
  Because the proton number sets the chemistry, isotopes react identically.
```

```yaml
type: short
topic: "P1 Physical Quantities, Units & Measurement"
stem: "A sample has a mass of 0.0035 kg. Express this mass in grams."
accepted: ["3.5", "3.5 g", "3.5g", "3.5 grams"]
marks: 1
misconception: kg-to-g-conversion
worked: |
  1 kg = 1000 g, so multiply the number of kilograms by 1000.
  0.0035 × 1000 = 3.5 g.
```

```yaml
type: short
topic: "P2 Kinematics"
stem: "A car travels 240 m in 20 s at a steady speed. Calculate its speed in m/s."
accepted: ["12", "12 m/s", "12m/s"]
marks: 1
misconception: speed-distance-time
worked: |
  speed = distance ÷ time = 240 ÷ 20 = 12 m/s.
```

```yaml
type: short
topic: "P2 Kinematics"
stem: "On a speed–time graph, which physical quantity is given by the gradient of the line?"
accepted: ["acceleration", "the acceleration", "acceleration (or deceleration)"]
marks: 1
misconception: gradient-meaning-speed-time
worked: |
  Gradient = change in speed ÷ time taken, which is the definition of acceleration.
  (The AREA under a speed–time graph gives the distance travelled — do not mix the two up.)
```

```yaml
type: short
topic: "P3 Force & Pressure"
stem: "A 3 kg bag hangs from a spring balance. Taking g = 10 m/s², state the reading on the balance in newtons."
accepted: ["30", "30 N", "30N", "30 newtons"]
marks: 1
misconception: weight-w-mg
worked: |
  A spring balance measures weight (a force).
  W = mg = 3 × 10 = 30 N.
```

```yaml
type: short
topic: "P3 Force & Pressure"
stem: "A metal cube has a mass of 500 g and a volume of 250 cm³. Calculate its density in g/cm³."
accepted: ["2", "2.0", "2 g/cm3", "2.0 g/cm3", "2 g cm-3"]
marks: 1
misconception: density-m-over-v
worked: |
  ρ = m ÷ V = 500 ÷ 250 = 2.0 g/cm³.
```

```yaml
type: short
topic: "P3 Force & Pressure"
stem: "State the SI unit of pressure."
accepted: ["pascal", "pascals", "Pa", "N/m2", "newton per square metre", "newtons per square metre"]
marks: 1
misconception: unit-of-pressure
worked: |
  Pressure = force ÷ area, so its unit is newtons per square metre (N/m²), which is given the special name the pascal (Pa).
  1 Pa = 1 N/m².
```

```yaml
type: short
topic: "P4 Dynamics"
stem: "A trolley of mass 4 kg is pushed with a resultant force of 12 N. Calculate its acceleration in m/s²."
accepted: ["3", "3 m/s2", "3 ms-2", "3.0"]
marks: 1
misconception: a-equals-f-over-m
worked: |
  F = ma, so a = F ÷ m = 12 ÷ 4 = 3 m/s².
```

```yaml
type: short
topic: "P5 Energy"
stem: "A 60 W lamp is switched on for 30 s. Calculate the energy it transfers, in joules."
accepted: ["1800", "1800 J", "1800J", "1.8 kJ"]
marks: 1
misconception: energy-power-time
worked: |
  P = E ÷ t, so E = P × t.
  E = 60 W × 30 s = 1800 J.
```

```yaml
type: short
topic: "P5 Energy"
stem: "Name the energy store that increases when a book is lifted from the floor onto a high shelf."
accepted: ["gravitational potential", "gravitational potential store", "gravitational potential energy", "GPE", "gravitational store"]
marks: 1
misconception: energy-store-gpe
worked: |
  Raising a mass through a height increases Eₚ = mgh, so the GRAVITATIONAL POTENTIAL store of the book–Earth system increases.
  The energy is transferred to it mechanically, by the lifting force acting through a distance.
```

```yaml
type: short
topic: "P6 Kinetic Particle Model of Matter"
stem: "State what happens to the average kinetic energy of the particles in a gas when its temperature rises."
accepted: ["increases", "it increases", "increase", "increases (particles move faster)", "gets bigger"]
marks: 1
misconception: temperature-average-ke
worked: |
  Temperature is a measure of the average kinetic energy of the random motion of the particles.
  A rise in temperature therefore means the average kinetic energy INCREASES and the particles move faster on average.
```

```yaml
type: short
topic: "P7 Thermal Processes"
stem: "Name the method of thermal energy transfer by which energy from the Sun reaches the Earth."
accepted: ["radiation", "thermal radiation", "infrared radiation", "infra-red radiation", "by radiation"]
marks: 1
misconception: transfer-through-vacuum
worked: |
  Between the Sun and the Earth there is a vacuum, which has no particles.
  Conduction and convection both need particles, so neither can happen.
  Radiation (infrared electromagnetic waves) needs no medium, so it is the only possible method.
```

```yaml
type: short
topic: "P8 General Properties of Waves"
stem: "A wave has a frequency of 25 Hz and a wavelength of 0.8 m. Calculate its speed in m/s."
accepted: ["20", "20 m/s", "20m/s"]
marks: 1
misconception: v-equals-f-lambda
worked: |
  v = f λ = 25 × 0.8 = 20 m/s.
```

```yaml
type: short
topic: "P10 Electric Charge & Current of Electricity"
stem: "A current of 4 A flows through a wire for 25 s. Calculate the charge that passes, in coulombs."
accepted: ["100", "100 C", "100C", "100 coulombs"]
marks: 1
misconception: charge-equals-current-time
worked: |
  Q = I t = 4 A × 25 s = 100 C.
```

```yaml
type: short
topic: "P11 D.C. Circuits"
stem: "Two 5 Ω resistors are connected in parallel. Calculate the effective resistance in ohms."
accepted: ["2.5", "2.5 ohms", "2.5 ohm", "2.5 Ohm"]
marks: 1
misconception: parallel-two-identical
worked: |
  1/R = 1/5 + 1/5 = 2/5, so R = 5 ÷ 2 = 2.5 Ω.
  For two IDENTICAL resistors in parallel, the answer is always half of one of them — and it is smaller than either branch. ✓
```

```yaml
type: short
topic: "P11 D.C. Circuits"
stem: "A lamp has a potential difference of 3 V across it and a current of 0.5 A through it. Calculate its resistance in ohms."
accepted: ["6", "6 ohms", "6 ohm", "6.0"]
marks: 1
misconception: resistance-v-over-i
worked: |
  R = V ÷ I = 3 ÷ 0.5 = 6 Ω.
```

```yaml
type: short
topic: "P11 D.C. Circuits"
stem: "State how the current at different points in a series circuit compares."
accepted: ["the same", "same", "it is the same everywhere", "same everywhere", "the current is the same at all points", "identical"]
marks: 1
misconception: series-current-same
worked: |
  A series circuit has only ONE path for the charge, so the same charge passes every point each second.
  The current is therefore the SAME at all points in a series circuit. (It is the potential difference that is shared between the components.)
```

```yaml
type: short
topic: "P12 Practical Electricity"
stem: "A 1500 W kettle is connected to a 250 V supply. Calculate the current it draws, in amperes."
accepted: ["6", "6 A", "6A", "6.0", "6 amps"]
marks: 1
misconception: current-p-over-v
worked: |
  P = V I, so I = P ÷ V.
  I = 1500 ÷ 250 = 6 A.
```

```yaml
type: short
topic: "P12 Practical Electricity"
stem: "Name the wire of a mains plug in which the fuse must be connected."
accepted: ["live", "live wire", "the live wire", "live (brown)"]
marks: 1
misconception: fuse-wire-position
worked: |
  The fuse goes in the LIVE wire.
  When it melts, the appliance is disconnected from the dangerous live supply. A fuse in the neutral wire would stop the current but leave the appliance connected to the live wire — still lethal.
```

```yaml
type: short
topic: "P13 Radioactivity"
stem: "A radioactive source has a half-life of 4 hours. Starting from a count rate of 640 counts/s, state the count rate after 12 hours, in counts/s."
accepted: ["80", "80 counts/s", "80 counts per second"]
marks: 1
misconception: halving-chain-count-rate
worked: |
  Number of half-lives = 12 ÷ 4 = 3.
  Halve the count rate three times:
  640 → 320 (4 h) → 160 (8 h) → 80 (12 h).
  The count rate is 80 counts/s.
```

```yaml
type: short
topic: "P13 Radioactivity"
stem: "Name one natural source of background radiation."
accepted: ["radon", "radon gas", "cosmic rays", "cosmic radiation", "rocks", "soil", "food", "granite", "the ground", "radioactive rocks"]
marks: 1
misconception: background-radiation-sources
worked: |
  Background radiation is the low-level ionising radiation always present around us.
  Natural sources include: radon gas seeping from rocks and soil, radioactive isotopes in rocks (e.g. granite), cosmic rays from space, and naturally radioactive isotopes in food and drink.
  (Man-made sources — medical X-rays, nuclear waste — are NOT natural.)
```

## TEACHING

```yaml
kind: definition
term: "Scalar quantity"
topic: "P1 Physical Quantities, Units & Measurement"
body: "A quantity that has magnitude (size) only, with no direction. Examples: mass, speed, time, energy, distance."
```

```yaml
kind: definition
term: "Vector quantity"
topic: "P1 Physical Quantities, Units & Measurement"
body: "A quantity that has both magnitude and direction. Examples: force, weight, velocity, acceleration."
```

```yaml
kind: definition
term: "Speed"
topic: "P2 Kinematics"
body: "The distance travelled per unit time. speed = distance ÷ time, measured in m/s. Average speed = total distance ÷ total time — never the average of the separate speeds."
```

```yaml
kind: definition
term: "Acceleration"
topic: "P2 Kinematics"
body: "The rate of change of speed (or velocity): acceleration = change in speed ÷ time taken, measured in m/s². It is the gradient of a speed–time graph. A negative value means the body is slowing down."
```

```yaml
kind: definition
term: "Density"
topic: "P3 Force & Pressure"
body: "The mass per unit volume of a substance: ρ = m ÷ V. Common units are g/cm³ and kg/m³, where 1 g/cm³ = 1000 kg/m³. On a mass–volume graph the gradient gives the density."
```

```yaml
kind: definition
term: "Pressure"
topic: "P3 Force & Pressure"
body: "The force acting per unit area, at right angles to the surface: p = F ÷ A. The SI unit is the pascal (Pa), where 1 Pa = 1 N/m². The same force over a smaller area gives a larger pressure."
```

```yaml
kind: definition
term: "Weight"
topic: "P3 Force & Pressure"
body: "The gravitational force acting on a body: W = mg, measured in newtons. Weight depends on the gravitational field strength g, so it changes with location, while mass (in kg) does not."
```

```yaml
kind: definition
term: "Resultant force"
topic: "P4 Dynamics"
body: "The single force that has the same effect as all the forces acting on a body combined. If the resultant force is zero the forces are balanced and the body stays at rest or keeps moving at a steady speed in a straight line; if it is not zero, F = ma gives the acceleration."
```

```yaml
kind: definition
term: "Work done"
topic: "P5 Energy"
body: "The energy transferred when a force moves a body: W = F × d, where d is the distance moved in the DIRECTION of the force. Measured in joules (J); 1 J = 1 N × 1 m."
```

```yaml
kind: definition
term: "Power"
topic: "P5 Energy"
body: "The rate at which work is done or energy is transferred: P = E ÷ t. Measured in watts (W), where 1 W = 1 J/s. The time must always be in seconds."
```

```yaml
kind: definition
term: "Kinetic energy"
topic: "P5 Energy"
body: "The energy a body has because of its motion: Eₖ = ½mv². Square the speed FIRST, then multiply. Doubling the speed gives four times the kinetic energy."
```

```yaml
kind: definition
term: "Principle of conservation of energy"
topic: "P5 Energy"
body: "Energy cannot be created or destroyed; it can only be transferred from one store to another. The total energy of a closed system stays constant, so the energy leaving one store equals the energy entering the others."
```

```yaml
kind: definition
term: "Internal energy"
topic: "P6 Kinetic Particle Model of Matter"
body: "The total kinetic energy of the randomly moving particles of a substance PLUS the total potential energy stored in the forces between them. Heating can raise either part — which is why the temperature stays constant during melting or boiling while energy still flows in."
```

```yaml
kind: definition
term: "Conduction"
topic: "P7 Thermal Processes"
body: "The transfer of thermal energy through a material without the material itself moving. Particles vibrate more strongly and pass energy to neighbours by collisions; in metals, free (delocalised) electrons transfer the energy much faster, which is why metals are the best conductors."
```

```yaml
kind: definition
term: "Convection"
topic: "P7 Thermal Processes"
body: "The transfer of thermal energy by the bulk movement of a fluid. Warmed fluid expands, becomes less dense and rises; cooler, denser fluid sinks to take its place, setting up a convection current. It cannot happen in a solid."
```

```yaml
kind: definition
term: "Wavelength"
topic: "P8 General Properties of Waves"
body: "The distance between two successive points that are in phase — for example from one crest to the next crest. Symbol λ, measured in metres. Read it off the horizontal axis of a displacement–DISTANCE graph."
```

```yaml
kind: definition
term: "Frequency"
topic: "P8 General Properties of Waves"
body: "The number of complete waves produced (or passing a point) per second. Symbol f, measured in hertz (Hz). It is linked to the period by f = 1 ÷ T, and to the wave speed by v = f λ."
```

```yaml
kind: definition
term: "Electromagnetic spectrum"
topic: "P9 Electromagnetic Spectrum"
body: "The family of transverse waves that all travel at the same speed in a vacuum, arranged in order of wavelength: radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays (longest to shortest wavelength). Frequency increases in the opposite direction."
```

```yaml
kind: definition
term: "Electric current"
topic: "P10 Electric Charge & Current of Electricity"
body: "The rate of flow of electric charge: I = Q ÷ t, so Q = I t. Measured in amperes (A); 1 A = 1 coulomb per second. Conventional current flows from + to − in the external circuit, opposite to the flow of electrons."
```

```yaml
kind: definition
term: "Potential difference"
topic: "P10 Electric Charge & Current of Electricity"
body: "The work done (energy transferred) per unit charge as charge passes between two points in a circuit. Measured in volts (V), where 1 V = 1 J/C. It is measured with a voltmeter connected in PARALLEL with the component."
```

```yaml
kind: definition
term: "Resistance"
topic: "P10 Electric Charge & Current of Electricity"
body: "The opposition of a component to the flow of current: R = V ÷ I, measured in ohms (Ω). For a wire of a given material, resistance increases with length and decreases as the cross-sectional area increases."
```

```yaml
kind: definition
term: "Effective resistance"
topic: "P11 D.C. Circuits"
body: "The single resistance that could replace a combination of resistors. In SERIES: R = R₁ + R₂ (the resistances add). In PARALLEL: 1/R = 1/R₁ + 1/R₂, and the answer is always SMALLER than the smallest branch."
```

```yaml
kind: definition
term: "Fuse"
topic: "P12 Practical Electricity"
body: "A short piece of thin wire, fitted in the LIVE wire, that melts and breaks the circuit when the current exceeds its rating. It protects the appliance and the user from the large current caused by a fault or an overload."
```

```yaml
kind: definition
term: "Half-life"
topic: "P13 Radioactivity"
body: "The time taken for half of the undecayed nuclei in a radioactive sample to decay — equivalently, the time for the activity (count rate) to fall to half of its value. It is constant for a given isotope and is unaffected by temperature or chemical state."
```

```yaml
kind: definition
term: "Isotope"
topic: "P13 Radioactivity"
body: "Atoms of the same element that have the same proton number (Z) but different nucleon numbers (A), i.e. the same number of protons but different numbers of neutrons. In nuclide notation ᴬ𝗓X, number of neutrons = A − Z."
```

```yaml
kind: precision
topic: "P1 Physical Quantities, Units & Measurement"
prompt: "A student uses a metre rule to measure the diameter of a thin wire and records 0.1 cm. Explain why this measurement is unreliable and suggest an improvement."
model: "A metre rule can only be read to the nearest 1 mm (0.1 cm), so the measurement is the same size as the smallest division — the percentage uncertainty is very large. A more precise instrument with a smaller smallest division, such as a micrometer screw gauge or vernier calipers, should be used, and several readings taken at different points along the wire and averaged."
keywords: [smallest division, precision, uncertainty, more precise instrument, repeat and average]
```

```yaml
kind: precision
topic: "P2 Kinematics"
prompt: "Describe how to find (a) the acceleration and (b) the distance travelled from a speed–time graph."
model: "The acceleration is the GRADIENT of the line: take two points that are far apart, find the change in speed on the vertical axis and divide by the corresponding change in time on the horizontal axis. The distance travelled is the AREA under the line between the two times: split the shape into rectangles (area = base × height) and triangles (area = ½ × base × height) and add them."
keywords: [gradient is acceleration, area under graph, distance, half base times height, read both axes]
```

```yaml
kind: precision
topic: "P2 Kinematics"
prompt: "A cyclist rides at 20 km/h for 1 hour, then at 10 km/h for 3 hours. Explain why the average speed is NOT 15 km/h."
model: "Average speed = total distance ÷ total time, not the average of the two speeds. Total distance = (20 × 1) + (10 × 3) = 20 + 30 = 50 km; total time = 1 + 3 = 4 h; average speed = 50 ÷ 4 = 12.5 km/h. Averaging the two speeds would only be correct if the cyclist spent EQUAL TIMES at each speed, and she does not — she spends three times as long at the slower speed, which pulls the average down."
keywords: [total distance, total time, not average of speeds, equal times, 12.5 km/h]
```

```yaml
kind: precision
topic: "P3 Force & Pressure"
prompt: "Describe how to find the density of a small irregular stone using a balance and a measuring cylinder."
model: "Measure the mass of the dry stone on a balance and record it in grams. Part-fill a measuring cylinder with water and record the initial volume, reading the bottom of the meniscus at eye level. Lower the stone in gently on a thread until it is fully submerged and record the new volume. The volume of the stone is the DIFFERENCE between the two readings (the water displaced). Then calculate ρ = m ÷ V and give the unit g/cm³."
keywords: [mass on balance, initial volume, final volume, difference is volume, density equals mass over volume, eye level meniscus]
```

```yaml
kind: precision
topic: "P3 Force & Pressure"
prompt: "Explain, in terms of pressure, why a sharp knife cuts more easily than a blunt one."
model: "Pressure = force ÷ area. A sharp knife has a very small contact area along its edge, so for the same force pushing down, the pressure it exerts on the food is much greater. The larger pressure is enough to push the blade through the material. A blunt knife spreads the same force over a bigger area, so the pressure is smaller and it does not cut."
keywords: [pressure equals force over area, small area, same force, greater pressure, cuts]
```

```yaml
kind: precision
topic: "P4 Dynamics"
prompt: "Describe how to draw a free-body diagram for a box being pulled at a steady speed along a rough horizontal floor."
model: "Draw the box as a simple shape and draw an arrow for EVERY force acting ON the box, each starting at the box and labelled: weight (mg) acting vertically downwards, the normal contact force from the floor acting vertically upwards, the pull acting horizontally forwards, and friction acting horizontally backwards. Because the speed is steady, the resultant force is zero, so the arrows in each pair are drawn the SAME length: upward force = weight, and pull = friction. Do not draw any force that the box exerts on something else."
keywords: [forces on the body only, weight, normal contact force, friction opposes motion, balanced forces, arrow length]
```

```yaml
kind: precision
topic: "P5 Energy"
prompt: "A ball is dropped from a window and falls to the ground. Describe the energy transfers using stores and pathways."
model: "As the ball falls, its gravitational potential store empties and its kinetic store fills — energy is transferred mechanically, by the force of gravity acting through a distance. Ignoring air resistance, the kinetic energy gained equals the gravitational potential energy lost (mgh), because energy is conserved. On impact, the kinetic store empties and the energy is transferred to the thermal store of the ball and the ground (and to the surroundings by sound waves)."
keywords: [gravitational potential store, kinetic store, mechanical pathway, energy conserved, thermal store]
```

```yaml
kind: precision
topic: "P5 Energy"
prompt: "Explain how to calculate the useful power output of a student who runs up a flight of stairs."
model: "Find the useful work done against gravity: W = weight × vertical height gained = mgh, using the VERTICAL height of the staircase (not the length of the slope) and g = 10 m/s². Measure the time taken with a stopwatch, in seconds. Then power = work done ÷ time taken, P = W ÷ t, and quote the answer in watts."
keywords: [work equals mgh, vertical height, time in seconds, power equals work over time, watts]
```

```yaml
kind: precision
topic: "P6 Kinetic Particle Model of Matter"
prompt: "Describe the arrangement, the motion and the forces between the particles in a solid, a liquid and a gas."
model: "Solid: particles are very close together in a regular, fixed arrangement; they only vibrate about fixed positions; the forces between them are very strong. Liquid: particles are still close together but arranged irregularly; they can slide over one another; the forces are strong but weaker than in a solid. Gas: particles are far apart and randomly arranged; they move quickly in all directions; the forces between them are negligible. This explains why a solid keeps its shape, a liquid takes the shape of its container, and a gas fills the whole container."
keywords: [arrangement, motion, forces between particles, fixed positions, slide over one another, random rapid motion]
```

```yaml
kind: precision
topic: "P6 Kinetic Particle Model of Matter"
prompt: "Explain why the temperature of a pure solid stays constant while it is melting, even though it is still being heated."
model: "The energy supplied is used to overcome and weaken the forces of attraction between the particles and to separate them, which increases the POTENTIAL energy part of the internal energy. It does not increase the average KINETIC energy of the particles. Temperature is a measure of the average kinetic energy, so the temperature stays constant, producing the flat plateau on the heating curve until all the solid has melted."
keywords: [potential energy increases, kinetic energy unchanged, forces of attraction, temperature measures average KE, plateau]
```

```yaml
kind: precision
topic: "P7 Thermal Processes"
prompt: "Explain, in terms of particles, how thermal energy is conducted along a metal rod."
model: "The particles at the hot end gain energy and vibrate more strongly about their fixed positions. They collide with neighbouring particles and pass energy on, so the vibration spreads along the rod. In a metal there is a much faster process as well: free (delocalised) electrons at the hot end gain kinetic energy, move quickly through the metal and collide with particles at the cooler end, transferring energy to them. It is this free-electron mechanism that makes metals far better conductors than non-metals."
keywords: [vibrate more strongly, collide with neighbours, free electrons, transfer kinetic energy, metals best conductors]
```

```yaml
kind: precision
topic: "P7 Thermal Processes"
prompt: "Explain how a convection current is set up when water in a beaker is heated from below."
model: "The water at the bottom is heated, so its particles move further apart and the water EXPANDS. The same mass now occupies a larger volume, so its density DECREASES (ρ = m ÷ V). The surrounding cooler, denser water sinks under gravity and pushes the less dense warm water UPWARDS. Higher up, the warm water loses energy, cools, contracts, becomes denser again and sinks — the repeated circulation is the convection current."
keywords: [expands, less dense, rises, denser water sinks, circulation, convection current]
```

```yaml
kind: precision
topic: "P7 Thermal Processes"
prompt: "State the three factors that affect the rate at which a surface emits infrared radiation, and say which surfaces are best."
model: "(1) The colour and texture of the surface — a dull, black, rough surface emits (and absorbs) much better than a shiny, silvery, smooth one, which reflects instead. (2) The temperature of the surface — the hotter the surface compared with its surroundings, the greater the rate of emission. (3) The surface area — a larger surface area emits at a greater rate. This is why cooling fins are dull black and have a large area, while a vacuum flask is silvered."
keywords: [colour and texture, dull black best, temperature, surface area, shiny reflects]
```

```yaml
kind: precision
topic: "P8 General Properties of Waves"
prompt: "Using a wave diagram, define amplitude, wavelength and frequency."
model: "Amplitude is the MAXIMUM displacement of a point from its rest (undisturbed) position — measured from the centre line up to a crest, NOT from a crest down to a trough. Wavelength (λ) is the distance between two successive points in phase, for example crest to next crest, read off the distance axis. Frequency (f) is the number of complete waves passing a point each second, measured in hertz; it equals 1 ÷ T, where T (the period) is the time for one complete wave, read off the time axis."
keywords: [amplitude from rest position, not crest to trough, wavelength crest to crest, frequency waves per second, period]
```

```yaml
kind: precision
topic: "P8 General Properties of Waves"
prompt: "Compare transverse and longitudinal waves, giving an example of each."
model: "In a TRANSVERSE wave the particles vibrate at right angles (perpendicular) to the direction in which the wave travels, and the wave shows crests and troughs — for example water ripples and all electromagnetic waves such as light. In a LONGITUDINAL wave the particles vibrate along the SAME direction as the wave travels, and the wave shows compressions and rarefactions — for example sound travelling through air. Both types transfer energy from place to place without transferring matter."
keywords: [perpendicular vibration, crests and troughs, parallel vibration, compressions and rarefactions, sound example, transfers energy not matter]
```

```yaml
kind: precision
topic: "P9 Electromagnetic Spectrum"
prompt: "State one use and one hazard of ultraviolet radiation."
model: "Use: ultraviolet is used in sterilising water and equipment (it kills bacteria), and in security marking, where fluorescent ink is invisible in ordinary light but glows under a UV lamp. Hazard: too much exposure damages living cells — it causes sunburn and damage to the skin that increases the risk of skin cancer, and it can damage the eyes. Sunscreen, protective clothing and UV-blocking sunglasses reduce the risk."
keywords: [sterilising, security marking, damages cells, skin cancer risk, eye damage, sunscreen]
```

```yaml
kind: precision
topic: "P10 Electric Charge & Current of Electricity"
prompt: "Explain how the resistance of a metal wire changes if (a) its length is doubled and (b) its diameter is doubled."
model: "(a) Resistance is directly proportional to length, so doubling the length DOUBLES the resistance — the charge has to travel through twice as much material. (b) Resistance is inversely proportional to the cross-sectional area. Doubling the diameter multiplies the area by 2² = 4, so the resistance becomes ONE QUARTER of its original value — a thicker wire gives the charge more room to flow. The material and temperature must be kept the same in both cases."
keywords: [proportional to length, doubles, inversely proportional to area, area times four, one quarter, same material]
```

```yaml
kind: precision
topic: "P11 D.C. Circuits"
prompt: "Describe how current and potential difference behave in a series circuit and in a parallel circuit."
model: "SERIES: there is only one path, so the current is the SAME at every point in the circuit; the potential difference of the supply is SHARED between the components, with the larger resistance taking the larger share, and the p.d.s add up to the supply p.d. PARALLEL: each branch is connected across the same two points, so every branch has the SAME potential difference (the full supply p.d.); the current SPLITS between the branches, and the branch currents add up to the current drawn from the battery."
keywords: [series current same, series pd shared, parallel pd same, parallel current splits, branch currents add]
```

```yaml
kind: precision
topic: "P11 D.C. Circuits"
prompt: "Explain how to calculate the effective resistance of two resistors in parallel, and why the answer is smaller than either resistor."
model: "Use 1/R = 1/R₁ + 1/R₂, then REMEMBER TO INVERT the answer at the end — the most common error is quoting 1/R as the resistance. For exactly two resistors the shortcut R = (R₁ × R₂) ÷ (R₁ + R₂) is quicker. The answer is always smaller than the smaller resistor because adding a second branch gives the current an extra path to flow through, so more current flows for the same p.d., and more current for the same p.d. means less resistance."
keywords: [one over R, invert at the end, product over sum, extra path for current, always less than smallest branch]
```

```yaml
kind: precision
topic: "P11 D.C. Circuits"
prompt: "Describe how to connect an ammeter and a voltmeter to find the resistance of a lamp, and how to calculate the resistance."
model: "Connect the ammeter in SERIES with the lamp so that the whole current through the lamp also passes through the meter (an ammeter has a very low resistance). Connect the voltmeter in PARALLEL with the lamp, across its two ends, to measure the p.d. across it (a voltmeter has a very high resistance so it draws almost no current). Record both readings with their units, then calculate R = V ÷ I and give the answer in ohms."
keywords: [ammeter in series, low resistance, voltmeter in parallel, high resistance, R equals V over I, ohms]
```

```yaml
kind: precision
topic: "P12 Practical Electricity"
prompt: "Explain, step by step, how the earth wire and the fuse together protect a user when a fault makes the metal casing of an appliance live."
model: "1. A fault causes the live wire to touch the metal casing, so the casing becomes live. 2. The earth wire connects the casing to earth through a very LOW-RESISTANCE path. 3. Because the resistance is very low, a very LARGE current flows from the live wire through the casing and the earth wire. 4. This large current melts the fuse, which is fitted in the LIVE wire. 5. The circuit is broken and the appliance is completely disconnected from the live supply. 6. The casing is no longer live, so the user cannot receive a shock."
keywords: [casing becomes live, low resistance path to earth, large current, fuse melts, fuse in live wire, appliance isolated]
```

```yaml
kind: precision
topic: "P12 Practical Electricity"
prompt: "Explain how to choose a suitable fuse rating for a mains appliance."
model: "First calculate the normal operating current of the appliance from I = P ÷ V, using its power rating and the mains voltage. Then choose the fuse whose rating is the next one ABOVE that current from the values available (typically 3 A, 5 A and 13 A). The rating must be above the normal current, or the fuse would melt in ordinary use; but it must not be far above it, or a dangerously large fault current could flow before the fuse blows."
keywords: [current equals power over voltage, rating just above operating current, not below, not far above, 3 A 5 A 13 A]
```

```yaml
kind: precision
topic: "P12 Practical Electricity"
prompt: "Explain how to calculate the cost of running an electrical appliance, using kilowatt-hours."
model: "Convert the power to KILOWATTS (divide watts by 1000) and the time to HOURS. Energy used in kilowatt-hours = power in kW × time in hours. Then cost = energy in kW h × the price of one kilowatt-hour. Keep the units consistent — leaving the power in watts or the time in minutes is where most marks are lost. One kilowatt-hour is the energy transferred by a 1 kW appliance in 1 hour."
keywords: [watts to kilowatts, time in hours, kW times hours, multiply by tariff, unit consistency]
```

```yaml
kind: precision
topic: "P13 Radioactivity"
prompt: "Explain how to find the half-life of a radioactive source from a decay curve of count rate against time."
model: "Read the initial count rate off the vertical axis. Halve it, and read from the graph the time at which the curve reaches that halved value — that time interval is one half-life. To check, repeat from a different starting point: halve the value again and find how long the next drop takes. Because decay is random but the half-life is constant, the same time interval should be found each time, so take an average of the intervals to reduce error. Remember to subtract the background count rate first if one is given."
keywords: [read initial count rate, find time to halve, repeat from another point, constant half-life, average the intervals, subtract background]
```

```yaml
kind: precision
topic: "P13 Radioactivity"
prompt: "Compare alpha, beta and gamma radiation in terms of their nature, their ionising effect and their penetrating power."
model: "Alpha is a helium nucleus (2 protons and 2 neutrons, charge +2): the MOST strongly ionising and the LEAST penetrating — stopped by a sheet of paper or a few centimetres of air. Beta (beta-minus) is a fast-moving electron (charge −1): moderately ionising and moderately penetrating — stopped by a few millimetres of aluminium. Gamma is a high-frequency electromagnetic wave with no charge and no mass: the LEAST ionising but the MOST penetrating — only greatly reduced by several centimetres of lead or thick concrete. Ionising power and penetrating power are always in the opposite order."
keywords: [helium nucleus, fast electron, electromagnetic wave, paper aluminium lead, most ionising least penetrating, opposite orders]
```
