---
level: o-level
slug: physics-science
subjectName: Physics (Science)
family: physics
---

## QUESTIONS

```yaml
type: mcq
topic: "T1 Physical Quantities & Measurement"
stem: "Which of these is an SI base quantity?"
options:
  - "Mass"
  - "Force"
  - "Energy"
  - "Density"
answer: 0
marks: 1
misconception: base-vs-derived-quantity
worked: |
  The SI base quantities include length, mass, time, electric current and thermodynamic temperature.
  Force, energy and density are derived quantities, they are built from base quantities
  (1 N = 1 kg·m/s², 1 J = 1 N·m, density = kg/m³).
  So the base quantity here is mass.
```

```yaml
type: mcq
topic: "T1 Physical Quantities & Measurement"
stem: "A red laser emits light of wavelength 650 nm. What is this wavelength in metres?"
options:
  - "6.5 × 10⁻⁹ m"
  - "6.5 × 10⁻⁷ m"
  - "6.5 × 10⁻⁵ m"
  - "6.5 × 10⁻³ m"
answer: 1
marks: 1
misconception: prefix-conversion-nano
worked: |
  The prefix nano (n) means × 10⁻⁹.
  650 nm = 650 × 10⁻⁹ m
  = 6.5 × 10² × 10⁻⁹ m
  = 6.5 × 10⁻⁷ m.
```

```yaml
type: mcq
topic: "T1 Physical Quantities & Measurement"
stem: "Which of these quantities is a vector?"
options:
  - "Mass"
  - "Speed"
  - "Weight"
  - "Time"
answer: 2
marks: 1
misconception: scalar-vector-confusion
worked: |
  A vector has both magnitude and direction; a scalar has magnitude only.
  Weight is a force, it acts downwards, towards the centre of the Earth, so it is a vector.
  Mass, speed and time have size but no direction, so they are scalars.
```

```yaml
type: mcq
topic: "T1 Physical Quantities & Measurement"
stem: "A student wants to measure the diameter of a thin copper wire, about 0.4 mm across, as precisely as possible. Which instrument is most suitable?"
options:
  - "Metre rule"
  - "Measuring tape"
  - "Half-metre rule"
  - "Micrometer screw gauge"
answer: 3
marks: 1
misconception: instrument-precision-choice
worked: |
  The diameter (about 0.4 mm) is far too small to read reliably on a rule, whose smallest division is 1 mm.
  A micrometer screw gauge reads to 0.01 mm, so it has both the small range and the fine precision needed.
  Choose the instrument whose precision is small compared with the quantity being measured.
```

```yaml
type: mcq
topic: "T2 Kinematics"
stem: "A runner covers 1200 m in 150 s. What is her average speed?"
options:
  - "8.0 m/s"
  - "0.13 m/s"
  - "80 m/s"
  - "1.25 m/s"
answer: 0
marks: 1
misconception: average-speed-formula
worked: |
  average speed = total distance ÷ total time
  = 1200 ÷ 150
  = 8.0 m/s.
```

```yaml
type: mcq
topic: "T2 Kinematics"
stem: "A car speeds up uniformly from 5.0 m/s to 20 m/s in 6.0 s. What is its acceleration?"
options:
  - "3.3 m/s²"
  - "2.5 m/s²"
  - "15 m/s²"
  - "0.40 m/s²"
answer: 1
marks: 1
misconception: acceleration-change-in-velocity
worked: |
  a = Δv ÷ t, where Δv is the CHANGE in speed.
  Δv = 20 − 5.0 = 15 m/s
  a = 15 ÷ 6.0 = 2.5 m/s².
  Dividing the final speed (20) by the time gives 3.3, that is the common slip.
```

```yaml
type: mcq
topic: "T2 Kinematics"
stem: "A cyclist rides at a steady 12 m/s for 4.0 s and then decelerates uniformly to rest over the next 6.0 s. What total distance does she travel?"
options:
  - "48 m"
  - "36 m"
  - "84 m"
  - "120 m"
answer: 2
marks: 1
misconception: area-under-speed-time-graph
worked: |
  Distance = area under the speed-time graph.
  Steady stage: a rectangle, area = 12 × 4.0 = 48 m.
  Deceleration stage: a triangle, area = ½ × 6.0 × 12 = 36 m.
  Total distance = 48 + 36 = 84 m.
```

```yaml
type: mcq
topic: "T2 Kinematics"
stem: "On a distance-time graph, a horizontal (flat) line shows that the object is:"
options:
  - "moving at constant speed"
  - "accelerating uniformly"
  - "decelerating uniformly"
  - "at rest"
answer: 3
marks: 1
misconception: distance-time-graph-flat-line
worked: |
  On a distance-time graph the GRADIENT gives the speed.
  A horizontal line has zero gradient, so the speed is zero, the distance from the start is not changing.
  The object is at rest. (A flat line on a SPEED-time graph would mean constant speed.)
```

```yaml
type: mcq
topic: "T2 Kinematics"
stem: "A stone is dropped from rest. Taking g = 10 m/s² and ignoring air resistance, what is its speed after 3.0 s?"
options:
  - "30 m/s"
  - "10 m/s"
  - "45 m/s"
  - "3.3 m/s"
answer: 0
marks: 1
misconception: free-fall-speed-after-time
worked: |
  In free fall the acceleration is constant at g = 10 m/s².
  a = Δv ÷ t, so Δv = a × t = 10 × 3.0 = 30 m/s.
  The stone starts from rest, so its speed after 3.0 s is 0 + 30 = 30 m/s.
```

```yaml
type: mcq
topic: "T2 Kinematics"
stem: "The speed-time graph for a train is a straight line sloping downwards from 30 m/s to 0 m/s. Which statement is correct?"
options:
  - "The train moves at constant speed"
  - "The train decelerates uniformly"
  - "The train accelerates uniformly"
  - "The train is at rest throughout"
answer: 1
marks: 1
misconception: speed-time-graph-gradient-sign
worked: |
  The gradient of a speed-time graph is the acceleration.
  A straight line means a constant gradient, so the acceleration is uniform.
  The line slopes downwards, so the gradient is negative: the speed is falling.
  The train is decelerating uniformly until it stops.
```

```yaml
type: mcq
topic: "T3 Force & Pressure"
stem: "On Earth, where g = 10 N/kg, what is the weight of an object of mass 6.0 kg?"
options:
  - "0.60 N"
  - "6.0 N"
  - "60 N"
  - "600 N"
answer: 2
marks: 1
misconception: weight-mass-confusion
worked: |
  W = mg
  = 6.0 × 10
  = 60 N.
  Mass (6.0 kg) and weight (60 N) are different quantities with different units.
```

```yaml
type: mcq
topic: "T3 Force & Pressure"
stem: "A block has a mass of 240 g and a volume of 30 cm³. What is its density?"
options:
  - "0.13 g/cm³"
  - "7200 g/cm³"
  - "270 g/cm³"
  - "8.0 g/cm³"
answer: 3
marks: 1
misconception: density-formula
worked: |
  ρ = m ÷ V
  = 240 ÷ 30
  = 8.0 g/cm³.
  Multiplying (7200) or inverting (0.13) are the usual errors.
```

```yaml
type: mcq
topic: "T3 Force & Pressure"
stem: "A force of 250 N acts at right angles to a surface of area 0.050 m². What is the pressure on the surface?"
options:
  - "5000 Pa"
  - "12.5 Pa"
  - "0.20 Pa"
  - "2500 Pa"
answer: 0
marks: 1
misconception: pressure-force-area
worked: |
  p = F ÷ A
  = 250 ÷ 0.050
  = 5000 Pa (5000 N/m²).
  Multiplying F by A gives 12.5, a common slip when dividing by a decimal feels awkward.
```

```yaml
type: mcq
topic: "T3 Force & Pressure"
stem: "An astronaut carries a 2.0 kg rock from Earth to the Moon, where the gravitational field strength is smaller. Which statement is correct?"
options:
  - "Both its mass and its weight decrease"
  - "Its mass stays 2.0 kg but its weight decreases"
  - "Its mass decreases but its weight stays the same"
  - "Both its mass and its weight stay the same"
answer: 1
marks: 1
misconception: mass-weight-on-moon
worked: |
  Mass is the amount of matter in the rock. It does not depend on location, so it is still 2.0 kg.
  Weight is the gravitational force on the rock, W = mg. On the Moon g is smaller,
  so W = mg is smaller. The mass is unchanged; the weight decreases.
```

```yaml
type: mcq
topic: "T3 Force & Pressure"
stem: "A crate of weight 900 N stands on the floor. Its base measures 1.5 m by 0.30 m. What pressure does it exert on the floor?"
options:
  - "405 Pa"
  - "1350 Pa"
  - "2000 Pa"
  - "500 Pa"
answer: 2
marks: 1
misconception: pressure-area-calculation
worked: |
  Area of base A = 1.5 × 0.30 = 0.45 m².
  p = F ÷ A = 900 ÷ 0.45
  = 2000 Pa.
  Check: 0.45 × 2000 = 900 N.
```

```yaml
type: mcq
topic: "T3 Force & Pressure"
stem: "Aluminium has a density of 2700 kg/m³. What is this density in g/cm³?"
options:
  - "27 g/cm³"
  - "0.27 g/cm³"
  - "270 g/cm³"
  - "2.7 g/cm³"
answer: 3
marks: 1
misconception: density-unit-conversion
worked: |
  1 kg = 1000 g and 1 m³ = 1 000 000 cm³.
  2700 kg/m³ = (2700 × 1000) g ÷ (1 000 000) cm³
  = 2 700 000 ÷ 1 000 000
  = 2.7 g/cm³.
  Useful shortcut: divide kg/m³ by 1000 to get g/cm³.
```

```yaml
type: mcq
topic: "T3 Force & Pressure"
stem: "Which of these is a non-contact force?"
options:
  - "Gravitational force"
  - "Friction"
  - "Air resistance"
  - "Normal contact force"
answer: 0
marks: 1
misconception: contact-noncontact-force
worked: |
  A non-contact force acts without the objects touching.
  Gravitational force acts between the Earth and a body across empty space, so it is non-contact.
  Friction, air resistance and the normal contact force all need surfaces in contact.
```

```yaml
type: mcq
topic: "T3 Force & Pressure"
stem: "An object of mass 5.0 kg has a weight of 40 N on planet X. What is the gravitational field strength on planet X?"
options:
  - "200 N/kg"
  - "8.0 N/kg"
  - "0.13 N/kg"
  - "10 N/kg"
answer: 1
marks: 1
misconception: field-strength-formula
worked: |
  g = F ÷ m (gravitational force per unit mass)
  = 40 ÷ 5.0
  = 8.0 N/kg.
  Do not assume g = 10 N/kg, that value is for Earth.
```

```yaml
type: mcq
topic: "T4 Dynamics"
stem: "A resultant force of 3000 N acts on a car of mass 1500 kg. What is the acceleration of the car?"
options:
  - "0.50 m/s²"
  - "4500 m/s²"
  - "2.0 m/s²"
  - "1500 m/s²"
answer: 2
marks: 1
misconception: newton-second-law
worked: |
  F = ma, so a = F ÷ m
  = 3000 ÷ 1500
  = 2.0 m/s².
```

```yaml
type: mcq
topic: "T4 Dynamics"
stem: "A van is moving along a straight, level road. The forward force from its engine is exactly equal in size to the total resistive force on it. The van is:"
options:
  - "accelerating forwards"
  - "decelerating"
  - "at rest"
  - "moving at constant velocity"
answer: 3
marks: 1
misconception: balanced-forces-constant-velocity
worked: |
  The forces are balanced, so the resultant force is zero.
  From F = ma, a zero resultant force means zero acceleration.
  The van is already moving, so it keeps moving at the same speed in the same direction, constant velocity.
  Balanced forces do NOT mean the object must be stationary.
```

```yaml
type: mcq
topic: "T4 Dynamics"
stem: "A box of mass 5.0 kg is pushed along a floor with a force of 40 N. Friction on the box is 15 N. What is the acceleration of the box?"
options:
  - "5.0 m/s²"
  - "8.0 m/s²"
  - "3.0 m/s²"
  - "11 m/s²"
answer: 0
marks: 1
misconception: resultant-force-friction
worked: |
  First find the RESULTANT force:
  F = 40 − 15 = 25 N.
  Then a = F ÷ m = 25 ÷ 5.0 = 5.0 m/s².
  Using the 40 N push alone gives 8.0 m/s², friction must be subtracted first.
```

```yaml
type: mcq
topic: "T4 Dynamics"
stem: "A book rests on a table. According to Newton's third law, what is the partner (reaction) force to the Earth's gravitational pull on the book?"
options:
  - "The table's upward push on the book"
  - "The book's gravitational pull on the Earth"
  - "The book's downward push on the table"
  - "The weight of the book"
answer: 1
marks: 1
misconception: action-reaction-pair-identification
worked: |
  An action-reaction pair is the SAME type of force, equal in size, opposite in direction,
  and the two forces act on DIFFERENT bodies.
  The Earth pulls the book down (gravitational), so the book pulls the Earth up (gravitational).
  The table's push on the book is a contact force and it acts on the same body as the weight,
  so it is not the third-law partner, it merely balances the weight.
```

```yaml
type: mcq
topic: "T4 Dynamics"
stem: "A skydiver falls at terminal velocity. Which statement is correct?"
options:
  - "Air resistance is greater than her weight, so she slows down"
  - "Her weight has become zero"
  - "Air resistance equals her weight, so her acceleration is zero"
  - "Air resistance is less than her weight, so she keeps speeding up"
answer: 2
marks: 1
misconception: terminal-velocity-forces
worked: |
  As the skydiver speeds up, air resistance increases.
  At terminal velocity the upward air resistance has grown until it is equal in size to her downward weight.
  The resultant force is zero, so from F = ma the acceleration is zero and she falls at a steady speed.
  Her weight has not changed, the forces are simply balanced.
```

```yaml
type: mcq
topic: "T4 Dynamics"
stem: "A resultant force of 24 N gives an object an acceleration of 3.0 m/s². What is the mass of the object?"
options:
  - "72 kg"
  - "0.13 kg"
  - "21 kg"
  - "8.0 kg"
answer: 3
marks: 1
misconception: rearranging-f-ma
worked: |
  F = ma, so m = F ÷ a
  = 24 ÷ 3.0
  = 8.0 kg.
  Check: 8.0 × 3.0 = 24 N.
```

```yaml
type: mcq
topic: "T5 Turning Effects of Forces"
stem: "A force of 25 N is applied at a perpendicular distance of 0.40 m from a pivot. What is the moment of the force about the pivot?"
options:
  - "10 N m"
  - "62.5 N m"
  - "0.016 N m"
  - "25.4 N m"
answer: 0
marks: 1
misconception: moment-formula
worked: |
  moment = force × perpendicular distance from the pivot
  = 25 × 0.40
  = 10 N m.
```

```yaml
type: mcq
topic: "T5 Turning Effects of Forces"
stem: "A uniform metre rule is pivoted at its centre. A 6.0 N weight hangs 0.50 m to the left of the pivot. What downward force applied 0.30 m to the right of the pivot will balance the rule?"
options:
  - "3.6 N"
  - "10 N"
  - "1.8 N"
  - "20 N"
answer: 1
marks: 1
misconception: principle-of-moments
worked: |
  The rule is uniform and pivoted at its centre, so its own weight gives no moment about the pivot.
  Anticlockwise moment = 6.0 × 0.50 = 3.0 N m.
  For balance, clockwise moment = 3.0 N m, so F × 0.30 = 3.0.
  F = 3.0 ÷ 0.30 = 10 N.
```

```yaml
type: mcq
topic: "T5 Turning Effects of Forces"
stem: "The centre of gravity of an object is best described as:"
options:
  - "the point at which the object is thickest"
  - "the point at which the object has the greatest density"
  - "the point at which the whole weight of the object may be taken to act"
  - "a point that must lie inside the material of the object"
answer: 2
marks: 1
misconception: centre-of-gravity-definition
worked: |
  The centre of gravity is the single point through which the entire weight of the body appears to act.
  It need not lie inside the material at all, for a ring or a boomerang it lies in the empty space.
  It has nothing to do with where the object is thickest or densest.
```

```yaml
type: mcq
topic: "T5 Turning Effects of Forces"
stem: "A student uses a spanner to loosen a tight nut. Which change increases the turning effect on the nut for the same size of force?"
options:
  - "Applying the force closer to the nut"
  - "Using a shorter spanner"
  - "Pushing the spanner directly towards the nut"
  - "Applying the force further from the nut"
answer: 3
marks: 1
misconception: moment-distance-relationship
worked: |
  moment = force × perpendicular distance from the pivot.
  For the same force, a larger perpendicular distance gives a larger moment.
  So apply the force at the far end of the spanner (or use a longer spanner).
  Pushing straight towards the nut gives zero perpendicular distance, so zero moment.
```

```yaml
type: mcq
topic: "T6 Energy"
stem: "A trolley of mass 2.0 kg moves at 6.0 m/s. What is its kinetic energy?"
options:
  - "36 J"
  - "12 J"
  - "6.0 J"
  - "72 J"
answer: 0
marks: 1
misconception: kinetic-energy-formula
worked: |
  Eₖ = ½mv²
  = ½ × 2.0 × (6.0)²
  = ½ × 2.0 × 36
  = 36 J.
  Forgetting to square v gives 6.0 J; forgetting the ½ gives 72 J.
```

```yaml
type: mcq
topic: "T6 Energy"
stem: "A 3.0 kg mass is lifted through a height of 5.0 m. Taking g = 10 m/s², how much gravitational potential energy does it gain?"
options:
  - "15 J"
  - "150 J"
  - "1.5 J"
  - "75 J"
answer: 1
marks: 1
misconception: gpe-formula
worked: |
  E_p = mgh
  = 3.0 × 10 × 5.0
  = 150 J.
```

```yaml
type: mcq
topic: "T6 Energy"
stem: "A force of 20 N moves a crate 8.0 m in the direction of the force. How much work is done on the crate?"
options:
  - "2.5 J"
  - "28 J"
  - "160 J"
  - "0.40 J"
answer: 2
marks: 1
misconception: work-done-formula
worked: |
  W = F × d
  = 20 × 8.0
  = 160 J.
  Work done is a transfer of energy, measured in joules.
```

```yaml
type: mcq
topic: "T6 Energy"
stem: "A machine transfers 600 J of energy in 4.0 s. What is its power?"
options:
  - "2400 W"
  - "0.0067 W"
  - "604 W"
  - "150 W"
answer: 3
marks: 1
misconception: power-energy-time
worked: |
  P = E ÷ t
  = 600 ÷ 4.0
  = 150 W (150 J per second).
```

```yaml
type: mcq
topic: "T6 Energy"
stem: "A ball of mass 0.50 kg is dropped from a height of 2.0 m. Ignoring air resistance and taking g = 10 m/s², what is its kinetic energy just before it lands?"
options:
  - "10 J"
  - "5.0 J"
  - "20 J"
  - "1.0 J"
answer: 0
marks: 1
misconception: energy-conservation-fall
worked: |
  By conservation of energy, the kinetic energy gained equals the gravitational potential energy lost.
  E_p lost = mgh = 0.50 × 10 × 2.0 = 10 J.
  So Eₖ just before landing = 10 J.
  (Check: ½mv² = 10 gives v² = 40, v ≈ 6.3 m/s.)
```

```yaml
type: mcq
topic: "T6 Energy"
stem: "Which energy store increases when a spring is stretched?"
options:
  - "Nuclear"
  - "Elastic potential"
  - "Chemical"
  - "Gravitational potential"
answer: 1
marks: 1
misconception: energy-store-identification
worked: |
  Work is done against the forces between the particles of the spring as it is deformed.
  That energy is stored in the elastic potential (strain) energy store, and is released when the spring recoils.
  No change in height (gravitational), bonds (chemical) or nucleus (nuclear) is involved.
```

```yaml
type: mcq
topic: "T6 Energy"
stem: "A lamp is supplied with 60 J of electrical energy and produces 12 J of light energy. What is its efficiency?"
options:
  - "80%"
  - "5.0%"
  - "20%"
  - "48%"
answer: 2
marks: 1
misconception: efficiency-useful-over-total
worked: |
  efficiency = (useful energy output ÷ total energy input) × 100
  = (12 ÷ 60) × 100
  = 0.20 × 100
  = 20%.
  The other 48 J is transferred to the surroundings by heating, it is not destroyed, just dissipated.
```

```yaml
type: mcq
topic: "T6 Energy"
stem: "An electric motor lifts a 40 kg load through a height of 3.0 m in 10 s. Taking g = 10 m/s², what is the useful output power of the motor?"
options:
  - "1200 W"
  - "12 W"
  - "400 W"
  - "120 W"
answer: 3
marks: 1
misconception: power-from-work-and-time
worked: |
  Useful energy transferred = mgh = 40 × 10 × 3.0 = 1200 J.
  P = E ÷ t = 1200 ÷ 10
  = 120 W.
  Quoting 1200 W forgets to divide by the time.
```

```yaml
type: mcq
topic: "T7 Kinetic Particle Model"
stem: "Which statement best describes the particles in a gas?"
options:
  - "Far apart, moving rapidly in random directions, with negligible forces between them"
  - "Close together in a regular pattern, vibrating about fixed positions"
  - "Close together but able to slide over one another"
  - "Far apart but held in fixed positions by strong forces"
answer: 0
marks: 1
misconception: particle-arrangement-gas
worked: |
  In a gas the particles are widely separated, so the attractive forces between them are negligible.
  They travel rapidly in random directions, colliding with each other and with the container walls.
  "Vibrating about fixed positions" describes a solid; "sliding over one another" describes a liquid.
```

```yaml
type: mcq
topic: "T7 Kinetic Particle Model"
stem: "A solid is heated steadily and melts. During melting, the temperature does not change. The energy supplied is used to:"
options:
  - "increase the average kinetic energy of the particles"
  - "weaken the forces of attraction between the particles"
  - "increase the mass of the substance"
  - "make the particles themselves expand"
answer: 1
marks: 1
misconception: latent-energy-during-melting
worked: |
  Temperature is a measure of the AVERAGE KINETIC ENERGY of the particles.
  While the solid melts, the temperature is constant, so the average kinetic energy is not changing.
  The energy supplied instead increases the potential energy of the particles: it weakens and breaks
  the forces of attraction holding them in fixed positions, so they can slide past one another.
  The particles themselves never change size, and no mass is added.
```

```yaml
type: mcq
topic: "T7 Kinetic Particle Model"
stem: "The internal energy of a substance is:"
options:
  - "the total kinetic energy of its particles only"
  - "the heat that flows out of it when it cools"
  - "the sum of the kinetic energies and the potential energies of its particles"
  - "the same thing as its temperature"
answer: 2
marks: 1
misconception: internal-energy-definition
worked: |
  Internal energy = total kinetic energy of the particles (from their motion)
  + total potential energy of the particles (from the forces between them).
  Heating raises the kinetic part; a change of state changes the potential part.
  Temperature is only a measure of the AVERAGE kinetic energy, so it is not the same as internal energy.
```

```yaml
type: mcq
topic: "T7 Kinetic Particle Model"
stem: "The temperature of a gas is raised. What happens to its particles?"
options:
  - "Their average kinetic energy decreases"
  - "The particles themselves get bigger"
  - "The particles gain mass"
  - "Their average kinetic energy increases"
answer: 3
marks: 1
misconception: temperature-average-ke
worked: |
  Temperature is a measure of the average kinetic energy of the particles.
  A higher temperature therefore means a larger average kinetic energy, so on average the particles move faster.
  The size and mass of the particles never change.
```

```yaml
type: mcq
topic: "T7 Kinetic Particle Model"
stem: "Why does a solid have both a fixed shape and a fixed volume?"
options:
  - "Its particles are held in fixed positions by strong forces and can only vibrate"
  - "Its particles are far apart and move at random"
  - "Its particles slide over one another easily"
  - "Its particles have no kinetic energy at all"
answer: 0
marks: 1
misconception: solid-properties-particle-model
worked: |
  In a solid the particles are packed closely in a regular arrangement.
  Strong forces of attraction hold each particle in a fixed position, so it can only vibrate about that position.
  Because the particles cannot move from place to place, the shape and the volume are both fixed.
  The particles do still vibrate, so they DO have kinetic energy.
```

```yaml
type: mcq
topic: "T7 Kinetic Particle Model"
stem: "Water is heated to its boiling point and heating continues. While the water boils, its temperature:"
options:
  - "keeps rising steadily"
  - "stays constant even though energy is still being supplied"
  - "falls slowly"
  - "rises and then falls"
answer: 1
marks: 1
misconception: constant-temperature-during-boiling
worked: |
  During boiling, all the energy supplied is used to separate the particles completely, 
  it increases their potential energy by overcoming the forces of attraction in the liquid.
  None of it goes to increasing the average kinetic energy, so the temperature stays constant
  at the boiling point until all the liquid has turned to gas.
```

```yaml
type: mcq
topic: "T7 Kinetic Particle Model"
stem: "Which property is shown by a liquid but NOT by a gas?"
options:
  - "It has a fixed shape"
  - "It can flow"
  - "It has a fixed volume"
  - "Its particles are in motion"
answer: 2
marks: 1
misconception: liquid-vs-gas-properties
worked: |
  A liquid has a fixed volume (its particles are still close together) but no fixed shape, 
  it takes the shape of its container.
  A gas has neither a fixed shape nor a fixed volume: it spreads out to fill any container.
  Both can flow, and the particles of both are in motion.
```

```yaml
type: mcq
topic: "T7 Kinetic Particle Model"
stem: "The cooling curve of a liquid that is freezing has a flat (horizontal) section. During this section:"
options:
  - "the substance is heating up"
  - "the particles stop moving completely"
  - "the substance is boiling"
  - "energy is released while the temperature stays constant as the liquid solidifies"
answer: 3
marks: 1
misconception: cooling-curve-plateau
worked: |
  During solidification the particles come closer together and the forces of attraction between them
  pull them into fixed positions. Their potential energy falls, and that energy is released to the surroundings.
  The average kinetic energy does not change, so the temperature stays constant, hence the flat section.
  The particles never stop moving; in the solid they vibrate about fixed positions.
```

```yaml
type: mcq
topic: "T8 Thermal Processes"
stem: "Metals are much better thermal conductors than non-metals mainly because:"
options:
  - "they contain free electrons that move quickly through the metal and transfer energy"
  - "their particles are further apart"
  - "they are shiny"
  - "they have a high density"
answer: 0
marks: 1
misconception: conduction-free-electrons
worked: |
  In any solid, energy is passed on when hotter particles vibrate more vigorously and collide with
  their neighbours. This happens in metals and non-metals alike, but it is slow.
  A metal also has free (delocalised) electrons. These gain kinetic energy at the hot end, travel rapidly
  through the metal, and transfer energy to cooler particles by collision.
  This electron process is far faster, which is why metals conduct so well.
```

```yaml
type: mcq
topic: "T8 Thermal Processes"
stem: "Water at the bottom of a beaker is heated. Which sequence correctly explains why it rises?"
options:
  - "It contracts → its density increases → it rises"
  - "It expands → its density decreases → it rises, and cooler denser water sinks to replace it"
  - "Its mass decreases → it rises"
  - "Its particles break apart → it rises"
answer: 1
marks: 1
misconception: convection-density-chain
worked: |
  Heating the water makes its particles move faster and spread further apart, so the water EXPANDS.
  Its mass is unchanged but its volume increases, so its DENSITY DECREASES (ρ = m ÷ V).
  The less dense warm water RISES, and cooler, denser water SINKS to take its place.
  That cooler water is heated in turn, so a continuous convection current is set up.
```

```yaml
type: mcq
topic: "T8 Thermal Processes"
stem: "Which surface is the best emitter of infrared radiation?"
options:
  - "Shiny silver"
  - "Polished aluminium"
  - "Dull black"
  - "Shiny white"
answer: 2
marks: 1
misconception: radiation-surface-emission
worked: |
  A dull, black, rough surface is the best emitter of infrared radiation, and also the best absorber.
  A shiny, light-coloured, smooth surface is the poorest emitter and the poorest absorber,
  because it reflects radiation instead. Good emitters are good absorbers.
```

```yaml
type: mcq
topic: "T8 Thermal Processes"
stem: "A hot metal block is placed in contact with a cold metal block. Energy is transferred until:"
options:
  - "the hot block has no internal energy left"
  - "the cold block becomes hotter than the hot block"
  - "the two blocks have the same mass"
  - "both blocks are at the same temperature"
answer: 3
marks: 1
misconception: thermal-equilibrium
worked: |
  Thermal energy is transferred from the region of higher temperature to the region of lower temperature.
  The hot block cools and the cold block warms until both are at the SAME temperature.
  There is then no net transfer of energy between them, they are in thermal equilibrium.
  The hot block still has internal energy; it simply has no temperature difference to drive a transfer.
```

```yaml
type: mcq
topic: "T8 Thermal Processes"
stem: "Energy reaches the Earth from the Sun mainly by:"
options:
  - "radiation"
  - "conduction"
  - "convection"
  - "conduction and convection together"
answer: 0
marks: 1
misconception: radiation-through-vacuum
worked: |
  Between the Sun and the Earth there is a vacuum, almost no particles.
  Conduction and convection both need a material medium (particles to vibrate, collide or circulate).
  Radiation is an electromagnetic wave (mainly infrared, visible and ultraviolet) and needs no medium,
  so radiation is the only process that can carry energy across the vacuum of space.
```

```yaml
type: mcq
topic: "T8 Thermal Processes"
stem: "Which change would REDUCE the rate at which a hot object loses energy by radiation?"
options:
  - "Painting it dull black"
  - "Polishing its surface so that it is shiny and silvery"
  - "Increasing its surface area"
  - "Raising its temperature"
answer: 1
marks: 1
misconception: radiation-rate-factors
worked: |
  The rate of emission of radiation rises with a HIGHER surface temperature, a LARGER surface area,
  and a DULLER, DARKER, ROUGHER surface.
  So to slow the loss, do the opposite: make the surface shiny and silvery, which is a poor emitter.
  The other three options all increase the rate of loss.
```

```yaml
type: mcq
topic: "T9 General Wave Properties & Sound"
stem: "A wave has a frequency of 50 Hz and a wavelength of 0.40 m. What is its speed?"
options:
  - "125 m/s"
  - "0.0080 m/s"
  - "20 m/s"
  - "50.4 m/s"
answer: 2
marks: 1
misconception: wave-equation
worked: |
  v = fλ
  = 50 × 0.40
  = 20 m/s.
```

```yaml
type: mcq
topic: "T9 General Wave Properties & Sound"
stem: "A sound wave of frequency 170 Hz travels at 340 m/s. What is its wavelength?"
options:
  - "0.50 m"
  - "57 800 m"
  - "170 m"
  - "2.0 m"
answer: 3
marks: 1
misconception: wavelength-from-speed-frequency
worked: |
  v = fλ, so λ = v ÷ f
  = 340 ÷ 170
  = 2.0 m.
  Multiplying v by f (57 800) is the usual error.
```

```yaml
type: mcq
topic: "T9 General Wave Properties & Sound"
stem: "A wave has a period of 0.050 s. What is its frequency?"
options:
  - "20 Hz"
  - "0.050 Hz"
  - "50 Hz"
  - "5.0 Hz"
answer: 0
marks: 1
misconception: period-frequency-reciprocal
worked: |
  f = 1 ÷ T
  = 1 ÷ 0.050
  = 20 Hz.
  The wave completes 20 full oscillations every second.
```

```yaml
type: mcq
topic: "T9 General Wave Properties & Sound"
stem: "Which statement about a sound wave travelling in air is correct?"
options:
  - "It is transverse, with crests and troughs at right angles to the direction of travel"
  - "It is longitudinal, with compressions and rarefactions along the direction of travel"
  - "It can travel through a vacuum"
  - "The air particles travel with the wave from the source to the listener"
answer: 1
marks: 1
misconception: sound-longitudinal
worked: |
  Sound is a longitudinal wave: the air particles vibrate BACKWARDS AND FORWARDS along the same line
  as the direction in which the wave travels, producing compressions (particles pushed together)
  and rarefactions (particles spread apart).
  The particles only oscillate about fixed positions, they are not carried along with the wave, 
  and sound cannot travel through a vacuum because there are no particles to pass the vibration on.
```

```yaml
type: mcq
topic: "T9 General Wave Properties & Sound"
stem: "As water waves travel across a pond, a floating cork bobs up and down but does not move across the pond. This shows that a wave:"
options:
  - "transfers matter but not energy"
  - "transfers both matter and energy"
  - "transfers energy but not matter"
  - "transfers neither matter nor energy"
answer: 2
marks: 1
misconception: waves-transfer-energy-not-matter
worked: |
  The cork (and the water around it) only oscillates about a fixed position as each wave passes.
  Nothing is carried across the pond, so no matter is transferred.
  The cork is set moving, so it gains energy, energy has been carried to it from the source.
  A wave transfers energy from one place to another without transferring matter.
```

```yaml
type: mcq
topic: "T9 General Wave Properties & Sound"
stem: "A guitar string is plucked harder, but it vibrates at the same frequency. The sound produced is:"
options:
  - "higher in pitch, because the frequency is larger"
  - "quieter, because the amplitude is smaller"
  - "lower in pitch, because the wavelength is larger"
  - "louder, because the amplitude is larger"
answer: 3
marks: 1
misconception: amplitude-loudness
worked: |
  Loudness depends on AMPLITUDE; pitch depends on FREQUENCY.
  Plucking harder makes the string vibrate through a bigger displacement, so the amplitude is larger
  and the sound is louder.
  The frequency is unchanged, so the pitch is unchanged.
```

```yaml
type: mcq
topic: "T9 General Wave Properties & Sound"
stem: "A student claps once and hears the echo from a cliff 0.40 s later. Sound travels at 340 m/s in air. How far away is the cliff?"
options:
  - "68 m"
  - "136 m"
  - "850 m"
  - "34 m"
answer: 0
marks: 1
misconception: echo-forgot-to-halve
worked: |
  The sound travels to the cliff AND back, so in 0.40 s it covers twice the distance to the cliff.
  Total path = v × t = 340 × 0.40 = 136 m.
  Distance to the cliff = 136 ÷ 2 = 68 m.
  Quoting 136 m forgets to halve the path.
```

```yaml
type: mcq
topic: "T9 General Wave Properties & Sound"
stem: "An electric bell rings inside a sealed glass jar. As the air is pumped out of the jar, the sound becomes fainter and finally cannot be heard at all. This is because:"
options:
  - "sound travels much faster in a vacuum"
  - "sound needs a medium of particles to travel through"
  - "the bell stops vibrating in a vacuum"
  - "the glass absorbs all of the sound"
answer: 1
marks: 1
misconception: sound-needs-medium
worked: |
  Sound is a longitudinal wave carried by the vibration of particles, which pass the vibration on
  to their neighbours through compressions and rarefactions.
  As the air is removed there are fewer and fewer particles to carry the wave, so the sound gets fainter.
  In a vacuum there are no particles at all, so no sound can travel, even though the bell is still vibrating
  (you can still see the hammer moving).
```

```yaml
type: mcq
topic: "T10 Electromagnetic Spectrum"
stem: "Which electromagnetic wave has a LONGER wavelength than visible light?"
options:
  - "Ultraviolet"
  - "X-rays"
  - "Infrared"
  - "Gamma rays"
answer: 2
marks: 1
misconception: em-spectrum-order
worked: |
  In order of increasing wavelength (decreasing frequency) the spectrum runs:
  gamma rays → X-rays → ultraviolet → visible light → infrared → microwaves → radio waves.
  Infrared sits on the long-wavelength side of visible light.
  Ultraviolet, X-rays and gamma rays all have SHORTER wavelengths than visible light.
```

```yaml
type: mcq
topic: "T10 Electromagnetic Spectrum"
stem: "Which statement about ALL electromagnetic waves is correct?"
options:
  - "They are longitudinal and need a medium to travel through"
  - "They all have the same frequency"
  - "They all have the same wavelength"
  - "They are transverse and travel at the same speed in a vacuum"
answer: 3
marks: 1
misconception: em-waves-common-properties
worked: |
  Every electromagnetic wave is transverse, carries energy, needs no medium,
  and travels at the same speed in a vacuum (3.0 × 10⁸ m/s).
  What differs from region to region is the frequency and the wavelength, linked by v = fλ.
```

```yaml
type: mcq
topic: "T10 Electromagnetic Spectrum"
stem: "Which region of the electromagnetic spectrum is used for satellite television and mobile phone signals?"
options:
  - "Microwaves"
  - "Gamma rays"
  - "Ultraviolet"
  - "X-rays"
answer: 0
marks: 1
misconception: em-uses-microwaves
worked: |
  Microwaves pass easily through the atmosphere and can be sent in narrow beams,
  so they are used for satellite TV, satellite communication and mobile phone networks
  (and, at a different frequency, for heating food in a microwave oven).
  Gamma rays, X-rays and ultraviolet are all ionising and are not used for everyday communication.
```

```yaml
type: mcq
topic: "T10 Electromagnetic Spectrum"
stem: "Which radiation is used to sterilise medical instruments and to treat cancer?"
options:
  - "Radio waves"
  - "Gamma rays"
  - "Infrared"
  - "Visible light"
answer: 1
marks: 1
misconception: em-uses-gamma
worked: |
  Gamma rays are highly penetrating and strongly ionising.
  They can pass through sealed packaging to kill bacteria on medical instruments (sterilisation),
  and carefully aimed beams can be used to destroy cancer cells (radiotherapy).
  Radio waves, infrared and visible light are not ionising, so they cannot kill bacteria in this way.
```

```yaml
type: mcq
topic: "T10 Electromagnetic Spectrum"
stem: "Over-exposure to the ultraviolet radiation in sunlight is dangerous mainly because it can:"
options:
  - "make objects glow in the dark permanently"
  - "make objects become magnetic"
  - "damage skin cells and increase the risk of skin cancer"
  - "lower the temperature of the skin"
answer: 2
marks: 1
misconception: uv-hazard
worked: |
  Ultraviolet has a higher frequency (shorter wavelength) than visible light, so it carries more energy
  and it is ionising.
  It can therefore damage living cells and the DNA inside skin cells, which raises the risk of skin cancer;
  it also damages the eyes. Sunscreen, UV-blocking sunglasses and shade reduce the exposure.
```

```yaml
type: mcq
topic: "T11 Light"
stem: "A ray of light strikes a plane mirror at 30° to the mirror surface. What is the angle of reflection?"
options:
  - "30°"
  - "90°"
  - "15°"
  - "60°"
answer: 3
marks: 1
misconception: angle-measured-from-surface-not-normal
worked: |
  Angles of incidence and reflection are ALWAYS measured from the NORMAL, not from the surface.
  The normal is at 90° to the mirror, so an angle of 30° to the surface means
  angle of incidence i = 90° − 30° = 60°.
  The law of reflection gives angle of reflection r = i = 60°.
```

```yaml
type: mcq
topic: "T11 Light"
stem: "Light travels at 3.0 × 10⁸ m/s in a vacuum and at 2.0 × 10⁸ m/s in a certain plastic. What is the refractive index of the plastic?"
options:
  - "1.5"
  - "0.67"
  - "6.0 × 10¹⁶"
  - "1.0"
answer: 0
marks: 1
misconception: refractive-index-speed-ratio
worked: |
  n = speed of light in a vacuum ÷ speed of light in the medium
  = (3.0 × 10⁸) ÷ (2.0 × 10⁸)
  = 1.5.
  The refractive index is always greater than 1, because light always travels more slowly in a medium.
  Inverting the ratio gives 0.67, which is the classic slip.
```

```yaml
type: mcq
topic: "T11 Light"
stem: "A ray of light travels from air into a glass block of refractive index 1.5 with an angle of incidence of 30°. What is the angle of refraction, to the nearest degree?"
options:
  - "45°"
  - "19°"
  - "30°"
  - "49°"
answer: 1
marks: 1
misconception: snells-law-application
worked: |
  sin i ÷ sin r = n
  sin 30° = 0.500
  sin r = sin i ÷ n = 0.500 ÷ 1.5 = 0.333
  r = sin⁻¹(0.333) = 19.47°, which is 19° to the nearest degree.
  Glass is optically denser than air, so the ray bends TOWARDS the normal and r must be less than i.
```

```yaml
type: mcq
topic: "T11 Light"
stem: "An object is placed further from a thin converging lens than the focal length, and a sharp image is formed on a screen. This image must be:"
options:
  - "virtual and upright"
  - "real and upright"
  - "real and inverted"
  - "virtual and inverted"
answer: 2
marks: 1
misconception: converging-lens-image-nature
worked: |
  An image that can be caught on a screen is a REAL image, the rays actually meet there.
  For a converging lens, whenever the object is beyond the focal length the refracted rays converge
  on the far side of the lens and cross, so the image formed is real and INVERTED.
  A virtual image (as in a magnifying glass) cannot be projected onto a screen.
```

```yaml
type: mcq
topic: "T12 Electric Charge & Current"
stem: "A current of 0.25 A flows for 40 s. How much charge passes a point in the circuit?"
options:
  - "160 C"
  - "0.0063 C"
  - "40.25 C"
  - "10 C"
answer: 3
marks: 1
misconception: charge-current-time
worked: |
  Q = It
  = 0.25 × 40
  = 10 C.
```

```yaml
type: mcq
topic: "T12 Electric Charge & Current"
stem: "A potential difference of 12 V drives a current of 0.50 A through a resistor. What is its resistance?"
options:
  - "24 Ω"
  - "6.0 Ω"
  - "0.042 Ω"
  - "12.5 Ω"
answer: 0
marks: 1
misconception: ohms-law-rearrangement
worked: |
  R = V ÷ I
  = 12 ÷ 0.50
  = 24 Ω.
  Multiplying instead of dividing gives 6.0 Ω.
```

```yaml
type: mcq
topic: "T12 Electric Charge & Current"
stem: "A wire has a resistance of 8.0 Ω. A second wire of the same material and the same diameter, but twice as long, has a resistance of:"
options:
  - "4.0 Ω"
  - "16 Ω"
  - "8.0 Ω"
  - "2.0 Ω"
answer: 1
marks: 1
misconception: resistance-length-relationship
worked: |
  For a wire of a given material, resistance is proportional to length: R ∝ L.
  The cross-sectional area is unchanged, so doubling the length doubles the resistance.
  R = 2 × 8.0 = 16 Ω.
  (Resistance is inversely proportional to cross-sectional area: a thicker wire has LESS resistance.)
```

```yaml
type: mcq
topic: "T12 Electric Charge & Current"
stem: "In a circuit, conventional current is taken to flow:"
options:
  - "in the same direction as the electrons"
  - "from the negative terminal to the positive terminal, round the external circuit"
  - "from the positive terminal of the cell to the negative terminal, round the external circuit"
  - "only while the switch is open"
answer: 2
marks: 1
misconception: conventional-current-direction
worked: |
  Conventional current is defined as the direction in which POSITIVE charge would flow:
  out of the positive terminal, round the external circuit, and back into the negative terminal.
  In a metal the charge carriers are electrons, which are negative, so the electrons actually drift
  in the OPPOSITE direction to the conventional current.
```

```yaml
type: mcq
topic: "T13 D.C. Circuits"
stem: "A 3.0 Ω resistor and a 5.0 Ω resistor are connected in series. What is the effective resistance?"
options:
  - "1.9 Ω"
  - "15 Ω"
  - "2.0 Ω"
  - "8.0 Ω"
answer: 3
marks: 1
misconception: series-resistance
worked: |
  In series the resistances simply add:
  R = R₁ + R₂ = 3.0 + 5.0
  = 8.0 Ω.
  The effective resistance in series is always LARGER than either resistor.
```

```yaml
type: mcq
topic: "T13 D.C. Circuits"
stem: "A 6.0 Ω resistor and a 3.0 Ω resistor are connected in parallel. What is the effective resistance?"
options:
  - "2.0 Ω"
  - "9.0 Ω"
  - "4.5 Ω"
  - "18 Ω"
answer: 0
marks: 1
misconception: parallel-resistance
worked: |
  1/R = 1/R₁ + 1/R₂ = 1/6.0 + 1/3.0 = 1/6.0 + 2/6.0 = 3/6.0
  R = 6.0 ÷ 3 = 2.0 Ω.
  (Product ÷ sum shortcut: (6.0 × 3.0) ÷ (6.0 + 3.0) = 18 ÷ 9.0 = 2.0 Ω.)
  The effective resistance in parallel is always SMALLER than the smallest resistor, a useful check.
```

```yaml
type: mcq
topic: "T13 D.C. Circuits"
stem: "In a series circuit containing a battery, a lamp and a resistor, the current:"
options:
  - "is largest just after the positive terminal"
  - "is the same at every point in the circuit"
  - "is used up by the lamp, so less returns to the battery"
  - "splits between the lamp and the resistor"
answer: 1
marks: 1
misconception: current-used-up-in-series
worked: |
  There is only one path in a series circuit, so charge cannot pile up or disappear anywhere.
  The same current therefore flows through every component.
  Current is NOT used up, it is the ENERGY carried by the charge that is transferred to the components.
  It is the potential difference that is shared between the components in series.
```

```yaml
type: mcq
topic: "T13 D.C. Circuits"
stem: "Two lamps are connected in parallel across a 6.0 V battery. The potential difference across each lamp is:"
options:
  - "3.0 V"
  - "12 V"
  - "6.0 V"
  - "0 V"
answer: 2
marks: 1
misconception: parallel-pd-shared
worked: |
  Components in parallel are connected between the SAME two points in the circuit,
  so they all have the same potential difference across them, that of the supply.
  Each lamp therefore has the full 6.0 V across it.
  It is the CURRENT that splits between the branches in parallel, not the p.d.
```

```yaml
type: mcq
topic: "T13 D.C. Circuits"
stem: "A 12 V battery is connected in series with a 4.0 Ω resistor and a 2.0 Ω resistor. What is the potential difference across the 4.0 Ω resistor?"
options:
  - "4.0 V"
  - "12 V"
  - "2.0 V"
  - "8.0 V"
answer: 3
marks: 1
misconception: series-pd-division
worked: |
  Effective resistance R = 4.0 + 2.0 = 6.0 Ω.
  Current I = V ÷ R = 12 ÷ 6.0 = 2.0 A (the same through both resistors).
  p.d. across the 4.0 Ω resistor = I × R = 2.0 × 4.0 = 8.0 V.
  Check: the 2.0 Ω resistor takes 2.0 × 2.0 = 4.0 V, and 8.0 + 4.0 = 12 V. ✓
```

```yaml
type: mcq
topic: "T13 D.C. Circuits"
stem: "Two identical 10 Ω resistors are connected in parallel across a 5.0 V supply. What is the total current drawn from the supply?"
options:
  - "1.0 A"
  - "0.25 A"
  - "0.50 A"
  - "2.0 A"
answer: 0
marks: 1
misconception: parallel-total-current
worked: |
  Two equal resistors in parallel give an effective resistance of half of one of them:
  R = 10 ÷ 2 = 5.0 Ω.
  I = V ÷ R = 5.0 ÷ 5.0 = 1.0 A.
  Check by branches: each branch carries 5.0 ÷ 10 = 0.50 A, and 0.50 + 0.50 = 1.0 A. ✓
```

```yaml
type: mcq
topic: "T13 D.C. Circuits"
stem: "Currents of 0.30 A and 0.50 A flow INTO a junction in a circuit. What current flows out of the junction?"
options:
  - "0.20 A"
  - "0.80 A"
  - "0.15 A"
  - "0.40 A"
answer: 1
marks: 1
misconception: junction-current-conservation
worked: |
  Charge is conserved, so the total current flowing into a junction equals the total flowing out.
  I = 0.30 + 0.50
  = 0.80 A.
```

```yaml
type: mcq
topic: "T13 D.C. Circuits"
stem: "How should an ammeter and a voltmeter be connected to measure the current in a lamp and the potential difference across it?"
options:
  - "Ammeter in parallel with the lamp; voltmeter in series with the lamp"
  - "Both in series with the lamp"
  - "Ammeter in series with the lamp; voltmeter in parallel with the lamp"
  - "Both in parallel with the lamp"
answer: 2
marks: 1
misconception: meter-connection
worked: |
  An ammeter measures the current THROUGH a component, so the same current must pass through it, 
  it goes in SERIES. It has a very low resistance so that it hardly changes the circuit.
  A voltmeter measures the p.d. ACROSS a component, so it must be connected between the same two points, 
  it goes in PARALLEL. It has a very high resistance so that it draws almost no current.
```

```yaml
type: mcq
topic: "T14 Practical Electricity"
stem: "An appliance operates at 240 V and draws a current of 2.5 A. What is its power?"
options:
  - "96 W"
  - "242.5 W"
  - "0.010 W"
  - "600 W"
answer: 3
marks: 1
misconception: power-vi
worked: |
  P = VI
  = 240 × 2.5
  = 600 W.
```

```yaml
type: mcq
topic: "T14 Practical Electricity"
stem: "A heater is marked 230 V, 920 W. Fuses of 1 A, 3 A, 5 A and 13 A are available. Which fuse should be fitted?"
options:
  - "5 A"
  - "3 A"
  - "13 A"
  - "1 A"
answer: 0
marks: 1
misconception: fuse-rating-selection
worked: |
  Normal operating current I = P ÷ V = 920 ÷ 230 = 4.0 A.
  The fuse must be rated just ABOVE the normal working current: it must not melt in normal use,
  but it must melt quickly if a fault makes the current rise.
  The 1 A and 3 A fuses would blow straight away; a 13 A fuse would let a dangerously large fault current flow.
  The 5 A fuse is the correct choice.
```

```yaml
type: mcq
topic: "T14 Practical Electricity"
stem: "A 2.0 kW heater is used for 3.0 hours. Electricity costs 30 cents per kWh. What is the cost of using the heater?"
options:
  - "$0.18"
  - "$1.80"
  - "$18.00"
  - "$0.60"
answer: 1
marks: 1
misconception: kwh-cost-calculation
worked: |
  Energy used (in kWh) = power in kW × time in hours
  = 2.0 × 3.0 = 6.0 kWh.
  Cost = 6.0 × 30 cents = 180 cents
  = $1.80.
```

```yaml
type: mcq
topic: "T14 Practical Electricity"
stem: "Why is the metal casing of an electric kettle connected to the earth wire?"
options:
  - "To make the kettle heat the water faster"
  - "To store electric charge on the casing"
  - "If the live wire touches the casing, a large current flows to earth and the fuse melts, cutting off the supply"
  - "To lower the resistance of the heating element"
answer: 2
marks: 1
misconception: earthing-purpose
worked: |
  The earth wire gives the casing a very low-resistance path to earth.
  If a fault makes the live wire touch the metal casing, a very LARGE current flows through the earth wire.
  That large current melts the fuse, which breaks the LIVE circuit and disconnects the appliance,
  so the casing cannot stay at a dangerous potential and the user is not given a shock.
```

```yaml
type: mcq
topic: "T14 Practical Electricity"
stem: "Why are the switch and the fuse always placed in the LIVE wire of a mains circuit?"
options:
  - "Because the neutral wire carries no current at all"
  - "Because the earth wire is the safest wire to switch"
  - "Because the live wire has the lowest resistance"
  - "So that when they open, the appliance is cut off from the high potential of the live wire"
answer: 3
marks: 1
misconception: switch-fuse-on-live
worked: |
  When the switch is off, or the fuse has melted, the break must be between the appliance and the LIVE wire.
  The appliance is then isolated from the high potential of the supply and is safe to touch.
  If the switch or fuse were in the neutral wire, the appliance would still be joined to the live wire,
  so its parts would remain at a dangerous potential even when it appeared to be switched off.
```

```yaml
type: mcq
topic: "T14 Practical Electricity"
stem: "A hairdryer has a plastic casing with no metal parts that can be touched, and it carries the double-insulation symbol. This means that:"
options:
  - "it does not need an earth wire"
  - "it does not need a fuse"
  - "it cannot ever overheat"
  - "it uses less electrical energy"
answer: 0
marks: 1
misconception: double-insulation
worked: |
  Double insulation means the live parts are separated from the user by two independent layers of insulation,
  and no part that can be touched is made of metal.
  There is therefore no metal casing that could become live, so no earth wire is needed.
  The appliance still needs a fuse, and it can still overheat if misused.
```

```yaml
type: mcq
topic: "T15 Magnetism & Electromagnetism"
stem: "Which core material should be used for an electromagnet that must lose its magnetism as soon as the current is switched off?"
options:
  - "Steel"
  - "Soft iron"
  - "Copper"
  - "Plastic"
answer: 1
marks: 1
misconception: iron-vs-steel-core
worked: |
  Soft iron is magnetically SOFT: it is magnetised easily, which greatly strengthens the field,
  and it loses almost all of its magnetism as soon as the current stops, a temporary magnet.
  Steel is magnetically HARD: it would stay magnetised after the current was switched off,
  so the electromagnet could not be turned off. Copper and plastic are not magnetic materials.
```

```yaml
type: mcq
topic: "T15 Magnetism & Electromagnetism"
stem: "The magnetic field pattern around a long straight wire carrying a current consists of:"
options:
  - "straight lines parallel to the wire"
  - "a pattern exactly like that of a bar magnet"
  - "concentric circles centred on the wire"
  - "no field at all"
answer: 2
marks: 1
misconception: straight-wire-field-pattern
worked: |
  The field lines round a straight current-carrying wire are concentric circles in the plane
  at right angles to the wire, centred on the wire.
  They are closest together (strongest field) near the wire.
  Reversing the current reverses the direction in which the field lines circle the wire.
```

```yaml
type: mcq
topic: "T15 Magnetism & Electromagnetism"
stem: "The current in a solenoid is increased. What happens to the magnetic field it produces?"
options:
  - "It becomes weaker"
  - "It reverses direction"
  - "It disappears completely"
  - "It becomes stronger, with the same shape and direction"
answer: 3
marks: 1
misconception: solenoid-field-strength
worked: |
  The field of a solenoid looks like that of a bar magnet, with a north and a south end.
  Increasing the CURRENT (or the number of turns, or adding a soft-iron core) makes the field STRONGER,
  but does not change its shape or direction.
  Only REVERSING the current would reverse the field direction and swap the poles.
```

```yaml
type: mcq
topic: "T15 Magnetism & Electromagnetism"
stem: "In Fleming's left-hand rule, the first finger, the second finger and the thumb represent, in that order:"
options:
  - "field, current, force"
  - "force, field, current"
  - "current, field, force"
  - "field, force, current"
answer: 0
marks: 1
misconception: flemings-left-hand-rule
worked: |
  Hold the thumb, first finger and second finger of the LEFT hand at right angles to each other:
    First finger  → magnetic Field (from N to S)
    seCond finger → Conventional Current (+ to −)
    thuMb         → Force / Motion of the conductor
  So the order is field, current, force.
```

```yaml
type: mcq
topic: "T15 Magnetism & Electromagnetism"
stem: "A current-carrying wire in a magnetic field feels a force. If BOTH the direction of the current AND the direction of the magnetic field are reversed, the force:"
options:
  - "reverses direction"
  - "acts in the same direction as before"
  - "becomes zero"
  - "doubles in size"
answer: 1
marks: 1
misconception: double-reversal-force-direction
worked: |
  Reversing the current alone reverses the force. Reversing the field alone also reverses the force.
  Doing BOTH reverses the force twice, so it ends up pointing in its original direction.
  You can check this with Fleming's left-hand rule: turn the hand over to reverse the field,
  then point the second finger the other way to reverse the current, the thumb ends up as it started.
```

```yaml
type: mcq
topic: "T15 Magnetism & Electromagnetism"
stem: "A plotting compass is placed near the north pole of a bar magnet. The north-seeking end of the compass needle points:"
options:
  - "towards the north pole of the magnet"
  - "vertically downwards"
  - "away from the north pole of the magnet"
  - "towards the south pole of the compass"
answer: 2
marks: 1
misconception: field-line-direction
worked: |
  Magnetic field lines run OUT of a north pole and IN to a south pole, outside the magnet.
  A compass needle lines up with the field, with its north-seeking end pointing along the field line.
  Near the magnet's north pole the field points away from it, so the compass north end points away.
  This also follows from 'like poles repel'.
```

```yaml
type: mcq
topic: "T16 Radioactivity"
stem: "A nuclide is written as ²³⁵₉₂U. How many neutrons are in this nucleus?"
options:
  - "92"
  - "235"
  - "327"
  - "143"
answer: 3
marks: 1
misconception: neutron-number-from-nuclide
worked: |
  The upper number is the nucleon number A = 235 (protons + neutrons).
  The lower number is the proton number Z = 92.
  number of neutrons = A − Z = 235 − 92
  = 143.
```

```yaml
type: mcq
topic: "T16 Radioactivity"
stem: "Two isotopes of the same element always have:"
options:
  - "the same proton number but different nucleon numbers"
  - "the same nucleon number but different proton numbers"
  - "the same number of neutrons"
  - "different chemical symbols"
answer: 0
marks: 1
misconception: isotope-definition
worked: |
  Isotopes are atoms of the SAME element, so they must have the same number of protons
  (the same proton number Z), that is what fixes the element.
  They differ in the number of NEUTRONS, so their nucleon numbers A are different.
  For example, carbon-12 and carbon-14 both have Z = 6 but A = 12 and A = 14.
```

```yaml
type: mcq
topic: "T16 Radioactivity"
stem: "An alpha particle is identical to:"
options:
  - "a fast-moving electron"
  - "a helium nucleus, containing 2 protons and 2 neutrons"
  - "a high-frequency electromagnetic wave"
  - "a single proton"
answer: 1
marks: 1
misconception: alpha-particle-nature
worked: |
  An alpha particle is a helium nucleus: 2 protons + 2 neutrons, so nucleon number 4 and charge +2.
  A beta particle is a fast-moving electron (charge −1) emitted from the nucleus.
  A gamma ray is a high-frequency electromagnetic wave with no charge and no mass.
```

```yaml
type: mcq
topic: "T16 Radioactivity"
stem: "A radioactive emission is completely stopped by a single sheet of paper. The emission is:"
options:
  - "beta"
  - "gamma"
  - "alpha"
  - "an X-ray"
answer: 2
marks: 1
misconception: penetrating-power
worked: |
  Penetrating power increases in the order alpha < beta < gamma.
  Alpha is stopped by a sheet of paper (or a few cm of air).
  Beta is stopped by a few millimetres of aluminium.
  Gamma is only reduced, by several centimetres of lead or thick concrete.
```

```yaml
type: mcq
topic: "T16 Radioactivity"
stem: "Which list places the three emissions in order of DECREASING ionising power?"
options:
  - "gamma, beta, alpha"
  - "beta, alpha, gamma"
  - "alpha, gamma, beta"
  - "alpha, beta, gamma"
answer: 3
marks: 1
misconception: ionising-power-order
worked: |
  Ionising power runs in the OPPOSITE order to penetrating power.
  Alpha is the most ionising (large, charge +2, many collisions), then beta (charge −1),
  then gamma (uncharged, interacts only weakly).
  Because alpha loses its energy so quickly in all those ionising collisions, it is also the least penetrating.
```

```yaml
type: mcq
topic: "T16 Radioactivity"
stem: "A source has a half-life of 5.0 days. Its corrected count rate falls from 800 counts/min to 100 counts/min. How long does this take?"
options:
  - "15 days"
  - "8.0 days"
  - "20 days"
  - "10 days"
answer: 0
marks: 1
misconception: half-life-halving-chain
worked: |
  Halve the count rate step by step and count the halvings:
  800 → 400 (1st half-life) → 200 (2nd) → 100 (3rd).
  That is 3 half-lives.
  time = 3 × 5.0 = 15 days.
```

```yaml
type: mcq
topic: "T16 Radioactivity"
stem: "The activity of a source falls from 240 Bq to 30 Bq in 12 hours. What is its half-life?"
options:
  - "3.0 hours"
  - "4.0 hours"
  - "6.0 hours"
  - "1.5 hours"
answer: 1
marks: 1
misconception: half-life-from-data
worked: |
  Count the halvings: 240 → 120 → 60 → 30. That is 3 half-lives.
  3 half-lives take 12 hours, so
  half-life = 12 ÷ 3 = 4.0 hours.
  Check: after 4 h → 120 Bq, after 8 h → 60 Bq, after 12 h → 30 Bq. ✓
```

```yaml
type: mcq
topic: "T16 Radioactivity"
stem: "A nucleus of ²¹⁴₈₂Pb decays by emitting a beta particle. The nucleus formed has:"
options:
  - "proton number 81 and nucleon number 214"
  - "proton number 82 and nucleon number 213"
  - "proton number 83 and nucleon number 214"
  - "proton number 80 and nucleon number 210"
answer: 2
marks: 1
misconception: beta-decay-changes
worked: |
  A beta particle is an electron, written as ⁰₋₁e. It is created when a neutron in the nucleus
  changes into a proton and an electron; the electron is then emitted.
  So the nucleus keeps the same total number of nucleons: A stays at 214.
  It has one more proton: Z rises from 82 to 83.
  ²¹⁴₈₂Pb → ²¹⁴₈₃Bi + ⁰₋₁e.
```

```yaml
type: mcq
topic: "T16 Radioactivity"
stem: "Radioactive decay is described as RANDOM. This means that:"
options:
  - "every nucleus decays after exactly the same time"
  - "the decay can be speeded up by heating the source"
  - "the count rate of a source never changes"
  - "it is impossible to predict which nucleus will decay next, or when it will decay"
answer: 3
marks: 1
misconception: random-decay-meaning
worked: |
  Random means that each nucleus has the same fixed probability of decaying in a given time,
  but there is no way to tell which one will go next, or when.
  Decay is also SPONTANEOUS: it is not affected by outside conditions such as temperature,
  pressure or chemical combination, so heating the source changes nothing.
  Over a large sample, the count rate does fall steadily, which is why half-life is a useful average.
```

```yaml
type: short
topic: "T2 Kinematics"
stem: "A trolley speeds up uniformly from 2.0 m/s to 14 m/s in 4.0 s. Calculate its acceleration, in m/s²."
accepted: ["3", "3.0", "3 m/s2", "3.0 m/s2"]
marks: 1
misconception: acceleration-change-in-velocity
worked: |
  a = Δv ÷ t
  Δv = 14 − 2.0 = 12 m/s
  a = 12 ÷ 4.0 = 3.0 m/s².
```

```yaml
type: short
topic: "T3 Force & Pressure"
stem: "A metal cube has a mass of 54 g and each side is 3.0 cm long. Calculate its density, in g/cm³."
accepted: ["2", "2.0", "2 g/cm3", "2.0 g/cm3"]
marks: 1
misconception: density-formula
worked: |
  Volume V = 3.0 × 3.0 × 3.0 = 27 cm³.
  ρ = m ÷ V = 54 ÷ 27
  = 2.0 g/cm³.
```

```yaml
type: short
topic: "T3 Force & Pressure"
stem: "A drawing pin is pushed into a board with a force of 12 N. The area of its tip is 3.0 × 10⁻⁸ m². Calculate the pressure at the tip, in Pa."
accepted: ["4 x 10^8", "4.0 x 10^8", "4e8", "400000000", "4 x 10^8 Pa"]
marks: 1
misconception: pressure-force-area
worked: |
  p = F ÷ A
  = 12 ÷ (3.0 × 10⁻⁸)
  = 4.0 × 10⁸ Pa.
  The tiny area is why a sharp point produces such an enormous pressure.
```

```yaml
type: short
topic: "T4 Dynamics"
stem: "A resultant force of 18 N acts on a trolley of mass 4.0 kg. Calculate its acceleration, in m/s²."
accepted: ["4.5", "4.5 m/s2"]
marks: 1
misconception: newton-second-law
worked: |
  F = ma, so a = F ÷ m
  = 18 ÷ 4.0
  = 4.5 m/s².
```

```yaml
type: short
topic: "T5 Turning Effects of Forces"
stem: "A see-saw is pivoted at its centre. A child of weight 300 N sits 1.2 m from the pivot. At what distance from the pivot, on the other side, must a child of weight 400 N sit to balance it? Give your answer in m."
accepted: ["0.9", "0.90", "0.9 m", "0.90 m"]
marks: 1
misconception: principle-of-moments
worked: |
  Anticlockwise moment = 300 × 1.2 = 360 N m.
  For balance, clockwise moment = 360 N m, so 400 × d = 360.
  d = 360 ÷ 400 = 0.90 m.
  The heavier child must sit closer to the pivot, which matches the answer.
```

```yaml
type: short
topic: "T6 Energy"
stem: "A ball of mass 0.20 kg moves at 10 m/s. Calculate its kinetic energy, in J."
accepted: ["10", "10.0", "10 J"]
marks: 1
misconception: kinetic-energy-formula
worked: |
  Eₖ = ½mv²
  = ½ × 0.20 × (10)²
  = ½ × 0.20 × 100
  = 10 J.
```

```yaml
type: short
topic: "T6 Energy"
stem: "A pump raises 500 kg of water through a height of 4.0 m in 25 s. Taking g = 10 m/s², calculate the useful output power of the pump, in W."
accepted: ["800", "800 W"]
marks: 1
misconception: power-from-work-and-time
worked: |
  Useful energy transferred = mgh = 500 × 10 × 4.0 = 20 000 J.
  P = E ÷ t = 20 000 ÷ 25
  = 800 W.
```

```yaml
type: short
topic: "T7 Kinetic Particle Model"
stem: "Name the change of state in which a gas becomes a liquid."
accepted: ["condensation", "condensing", "condense"]
marks: 1
misconception: change-of-state-naming
worked: |
  Cooling a gas slows its particles; the forces of attraction pull them close together and they form a liquid.
  This change of state is called condensation.
  (The reverse change, liquid to gas at the boiling point, is boiling.)
```

```yaml
type: short
topic: "T7 Kinetic Particle Model"
stem: "State the quantity of the particles of a gas that increases when the temperature of the gas is raised."
accepted: ["average kinetic energy", "the average kinetic energy of the particles", "kinetic energy", "average KE"]
marks: 1
misconception: temperature-average-ke
worked: |
  Temperature is a measure of the AVERAGE KINETIC ENERGY of the particles.
  Raising the temperature therefore increases the average kinetic energy, so on average the particles move faster.
  Their mass and their size do not change.
```

```yaml
type: short
topic: "T8 Thermal Processes"
stem: "State the process by which thermal energy is transferred across a vacuum."
accepted: ["radiation", "thermal radiation", "infrared radiation", "infra-red radiation"]
marks: 1
misconception: radiation-through-vacuum
worked: |
  Conduction needs particles to vibrate and collide; convection needs a fluid that can circulate.
  A vacuum has no particles, so neither can occur.
  Radiation is an electromagnetic wave (mainly infrared) and needs no medium, so it is the only process
  that can carry energy across a vacuum, this is how energy reaches the Earth from the Sun.
```

```yaml
type: short
topic: "T9 General Wave Properties & Sound"
stem: "A wave has a frequency of 25 Hz and a wavelength of 1.2 m. Calculate its speed, in m/s."
accepted: ["30", "30.0", "30 m/s"]
marks: 1
misconception: wave-equation
worked: |
  v = fλ
  = 25 × 1.2
  = 30 m/s.
```

```yaml
type: short
topic: "T9 General Wave Properties & Sound"
stem: "A water wave has a period of 0.25 s. Calculate its frequency, in Hz."
accepted: ["4", "4.0", "4 Hz"]
marks: 1
misconception: period-frequency-reciprocal
worked: |
  f = 1 ÷ T
  = 1 ÷ 0.25
  = 4.0 Hz.
```

```yaml
type: short
topic: "T10 Electromagnetic Spectrum"
stem: "Name the region of the electromagnetic spectrum used by a television remote control."
accepted: ["infrared", "infra-red", "IR", "infrared radiation"]
marks: 1
misconception: em-uses-infrared
worked: |
  A remote control sends a coded beam of infrared radiation to a detector on the television.
  Infrared sits just beyond the red end of the visible spectrum, so the beam is invisible to us.
  It is also used in intruder alarms and in thermal-imaging cameras.
```

```yaml
type: short
topic: "T11 Light"
stem: "State whether the image seen in a plane mirror is real or virtual."
accepted: ["virtual"]
marks: 1
misconception: plane-mirror-image-nature
worked: |
  The reflected rays that reach the eye are diverging; they only APPEAR to come from a point behind the mirror.
  The rays do not actually meet there, so the image cannot be caught on a screen, it is VIRTUAL.
  It is also upright, laterally inverted, the same size as the object, and as far behind the mirror
  as the object is in front.
```

```yaml
type: short
topic: "T13 D.C. Circuits"
stem: "A 4.0 Ω resistor and a 12 Ω resistor are connected in parallel. Calculate the effective resistance, in Ω."
accepted: ["3", "3.0", "3 ohms", "3.0 ohms", "3 ohm"]
marks: 1
misconception: parallel-resistance
worked: |
  1/R = 1/4.0 + 1/12 = 3/12 + 1/12 = 4/12
  R = 12 ÷ 4 = 3.0 Ω.
  (Product ÷ sum: (4.0 × 12) ÷ (4.0 + 12) = 48 ÷ 16 = 3.0 Ω.)
  The answer is less than the smaller resistor (4.0 Ω), as it must be for a parallel pair.
```

```yaml
type: short
topic: "T13 D.C. Circuits"
stem: "A 9.0 V battery is connected in series with a 6.0 Ω resistor and a 3.0 Ω resistor. Calculate the current in the circuit, in A."
accepted: ["1", "1.0", "1 A", "1.0 A"]
marks: 1
misconception: series-resistance
worked: |
  In series the resistances add: R = 6.0 + 3.0 = 9.0 Ω.
  I = V ÷ R = 9.0 ÷ 9.0
  = 1.0 A.
  The same current flows through both resistors.
```

```yaml
type: short
topic: "T14 Practical Electricity"
stem: "An electric kettle is marked 230 V, 2300 W. Calculate the current it draws, in A."
accepted: ["10", "10.0", "10 A"]
marks: 1
misconception: power-vi
worked: |
  P = VI, so I = P ÷ V
  = 2300 ÷ 230
  = 10 A.
  A 13 A fuse would be the correct choice for this appliance.
```

```yaml
type: short
topic: "T15 Magnetism & Electromagnetism"
stem: "In Fleming's left-hand rule, which finger of the left hand represents the direction of the magnetic field?"
accepted: ["first finger", "the first finger", "forefinger", "index finger"]
marks: 1
misconception: flemings-left-hand-rule
worked: |
  First finger → Field (N to S).
  seCond finger → Conventional Current (+ to −).
  thuMb → Motion, i.e. the force on the conductor.
  All three are held at right angles to one another, on the LEFT hand.
```

```yaml
type: short
topic: "T16 Radioactivity"
stem: "A radioactive source has a half-life of 6.0 hours. Its activity is now 640 Bq. Calculate its activity after 24 hours, in Bq."
accepted: ["40", "40 Bq"]
marks: 1
misconception: half-life-halving-chain
worked: |
  Number of half-lives = 24 ÷ 6.0 = 4.
  Halve the activity four times:
  640 → 320 → 160 → 80 → 40.
  Activity after 24 hours = 40 Bq.
```

```yaml
type: short
topic: "T16 Radioactivity"
stem: "Name one natural source of background radiation."
accepted: ["radon gas", "radon", "rocks", "granite rocks", "cosmic rays", "the ground", "soil", "food"]
marks: 1
misconception: background-radiation-sources
worked: |
  Background radiation is the low-level radiation that is always around us.
  Natural sources include radon gas escaping from rocks and soil, radioactive isotopes in rocks such as granite,
  cosmic rays from space, and traces of radioactive isotopes in food and drink.
  Man-made sources (medical X-rays, nuclear waste) make up only a small part of the total.
  Background must be subtracted from a measured count rate before half-life work.
```

## TEACHING

```yaml
kind: definition
term: "Vector quantity"
topic: "T1 Physical Quantities & Measurement"
body: "A quantity that has both magnitude (size) and direction, for example force, weight, velocity and acceleration. A scalar has magnitude only, such as mass, speed, time and energy."
```

```yaml
kind: definition
term: "Acceleration"
topic: "T2 Kinematics"
body: "The rate of change of velocity: a = Δv ÷ t, measured in m/s². A negative value (deceleration) means the object is slowing down. On a speed-time graph the acceleration is the gradient."
```

```yaml
kind: definition
term: "Density"
topic: "T3 Force & Pressure"
body: "The mass per unit volume of a substance: ρ = m ÷ V. Units kg/m³ or g/cm³, where 1000 kg/m³ = 1 g/cm³."
```

```yaml
kind: definition
term: "Pressure"
topic: "T3 Force & Pressure"
body: "The force acting normally (at right angles) per unit area: p = F ÷ A. The unit is the pascal (Pa), where 1 Pa = 1 N/m²."
```

```yaml
kind: definition
term: "Weight"
topic: "T3 Force & Pressure"
body: "The gravitational force acting on a mass: W = mg, measured in newtons. Weight changes if the gravitational field strength changes; mass, measured in kilograms, does not."
```

```yaml
kind: definition
term: "Gravitational field strength"
topic: "T3 Force & Pressure"
body: "The gravitational force acting per unit mass: g = F ÷ m, measured in N/kg. On Earth g ≈ 10 N/kg, which is numerically equal to the acceleration of free fall, 10 m/s²."
```

```yaml
kind: definition
term: "Moment of a force"
topic: "T5 Turning Effects of Forces"
body: "The turning effect of a force about a pivot: moment = force × perpendicular distance from the pivot to the line of action of the force. The unit is the newton metre (N m)."
```

```yaml
kind: definition
term: "Principle of moments"
topic: "T5 Turning Effects of Forces"
body: "When a body is in equilibrium, the sum of the clockwise moments about any pivot is equal to the sum of the anticlockwise moments about that same pivot."
```

```yaml
kind: definition
term: "Centre of gravity"
topic: "T5 Turning Effects of Forces"
body: "The single point at which the whole weight of an object may be taken to act. For a ring or a boomerang it lies outside the material of the object."
```

```yaml
kind: definition
term: "Work done"
topic: "T6 Energy"
body: "The energy transferred when a force moves an object through a distance in the direction of the force: W = F × d. Measured in joules, where 1 J = 1 N m."
```

```yaml
kind: definition
term: "Power"
topic: "T6 Energy"
body: "The rate at which energy is transferred, or the rate at which work is done: P = E ÷ t. Measured in watts, where 1 W = 1 J/s."
```

```yaml
kind: definition
term: "Principle of conservation of energy"
topic: "T6 Energy"
body: "Energy cannot be created or destroyed. It can only be transferred from one store to another, so the total energy of a closed system stays the same."
```

```yaml
kind: definition
term: "Internal energy"
topic: "T7 Kinetic Particle Model"
body: "The sum of the kinetic energies (from the motion of the particles) and the potential energies (from the forces between the particles) of all the particles in a substance."
```

```yaml
kind: definition
term: "Melting"
topic: "T7 Kinetic Particle Model"
body: "The change of state from solid to liquid at a fixed temperature, the melting point. Energy is absorbed to weaken the forces holding the particles in fixed positions, so the temperature does not rise while melting takes place."
```

```yaml
kind: definition
term: "Thermal equilibrium"
topic: "T8 Thermal Processes"
body: "The state reached when two objects in thermal contact are at the same temperature, so there is no longer any net transfer of thermal energy between them."
```

```yaml
kind: definition
term: "Wavelength"
topic: "T9 General Wave Properties & Sound"
body: "The distance between two consecutive points on a wave that are in phase, crest to crest, or one compression to the next. Symbol λ, measured in metres."
```

```yaml
kind: definition
term: "Frequency"
topic: "T9 General Wave Properties & Sound"
body: "The number of complete waves produced, or passing a point, each second: f = 1 ÷ T. The unit is the hertz (Hz), where 1 Hz is one wave per second."
```

```yaml
kind: definition
term: "Focal length"
topic: "T11 Light"
body: "The distance between the centre of a thin converging lens and its principal focus, the point at which rays travelling parallel to the principal axis are brought to a focus."
```

```yaml
kind: definition
term: "Refractive index"
topic: "T11 Light"
body: "n = speed of light in a vacuum ÷ speed of light in the medium. It can also be found from n = sin i ÷ sin r for a ray passing from air into the medium. It is always greater than 1."
```

```yaml
kind: definition
term: "Electric current"
topic: "T12 Electric Charge & Current"
body: "The rate of flow of electric charge: I = Q ÷ t, measured in amperes. A current of 1 A is a flow of 1 coulomb of charge every second."
```

```yaml
kind: definition
term: "Electromotive force (e.m.f.)"
topic: "T12 Electric Charge & Current"
body: "The work done by a source in driving a unit charge round a complete circuit, measured in volts. It describes energy supplied TO the charge."
```

```yaml
kind: definition
term: "Potential difference"
topic: "T12 Electric Charge & Current"
body: "The work done per unit charge as the charge passes between two points in a circuit, measured in volts, where 1 V = 1 J/C. It describes energy given UP by the charge."
```

```yaml
kind: definition
term: "Resistance"
topic: "T12 Electric Charge & Current"
body: "The ratio of the potential difference across a component to the current through it: R = V ÷ I. The unit is the ohm (Ω). For a wire, R increases with length and decreases with cross-sectional area."
```

```yaml
kind: definition
term: "Isotope"
topic: "T16 Radioactivity"
body: "Atoms of the same element that have the same proton number but different nucleon numbers, the same number of protons, but a different number of neutrons. Example: carbon-12 and carbon-14."
```

```yaml
kind: definition
term: "Half-life"
topic: "T16 Radioactivity"
body: "The time taken for half of the radioactive nuclei in a sample to decay, equivalently, the time taken for the activity or corrected count rate of the source to fall to half of its value."
```

```yaml
kind: precision
topic: "T8 Thermal Processes"
prompt: "Explain how thermal energy is conducted through a metal rod that is heated at one end."
model: "The particles at the hot end gain kinetic energy and vibrate more vigorously. They collide with neighbouring particles and pass energy on along the rod. A metal also contains free (delocalised) electrons: these gain kinetic energy at the hot end, move rapidly through the metal, and transfer energy to cooler particles by collision. The electron process is much faster than vibration alone, which is why metals are the best thermal conductors."
keywords: [vibrate more vigorously, collide with neighbours, free electrons, transfer energy by collision, metals conduct fastest]
```

```yaml
kind: precision
topic: "T8 Thermal Processes"
prompt: "Explain, using density, how a convection current is set up when water in a beaker is heated from below."
model: "The water at the bottom is heated, so it expands. Its mass stays the same but its volume increases, so its density decreases. The less dense warm water rises, and cooler, denser water sinks to take its place. This cooler water is then heated in turn, so a continuous convection current is set up."
keywords: [expands, volume increases, density decreases, warm water rises, cooler denser water sinks, convection current]
```

```yaml
kind: precision
topic: "T8 Thermal Processes"
prompt: "State three factors that affect the rate at which a hot surface emits infrared radiation."
model: "The rate of emission increases with a higher surface temperature, a larger surface area, and a duller, darker and rougher surface. A dull black surface is the best emitter and the best absorber; a shiny, silvery, smooth surface is the poorest emitter and the best reflector. Good emitters are also good absorbers."
keywords: [surface temperature, surface area, colour and texture, dull black best emitter, shiny silver poorest emitter]
```

```yaml
kind: precision
topic: "T4 Dynamics"
prompt: "A car travels along a straight, level road at a steady 20 m/s. Explain, in terms of forces, why its speed does not change."
model: "The forward driving force from the engine is equal in size and opposite in direction to the total resistive force of friction and air resistance. The forces are balanced, so the resultant force on the car is zero. From F = ma, a zero resultant force means zero acceleration, so the car keeps moving at constant velocity."
keywords: [forces are balanced, resultant force is zero, no acceleration, constant velocity]
```

```yaml
kind: precision
topic: "T4 Dynamics"
prompt: "A swimmer pushes backwards on the water and moves forwards. Explain this using Newton's third law."
model: "The swimmer's hands exert a backward force on the water. By Newton's third law, the water exerts an equal and opposite forward force on the swimmer. The two forces are of the same type, equal in size and opposite in direction, but they act on DIFFERENT bodies, so they do not cancel out, and the forward force on the swimmer produces her forward acceleration."
keywords: [equal in size, opposite in direction, same type of force, act on different bodies, do not cancel]
```

```yaml
kind: precision
topic: "T2 Kinematics"
prompt: "State what the gradient and the area under a speed-time graph each represent, and what the gradient of a distance-time graph represents."
model: "On a speed-time graph, the gradient gives the acceleration (change in speed ÷ time taken), and the area under the line gives the distance travelled. On a distance-time graph, the gradient gives the speed, and a horizontal line means the object is at rest."
keywords: [gradient = acceleration, area under graph = distance travelled, distance-time gradient = speed, flat line = at rest]
```

```yaml
kind: precision
topic: "T6 Energy"
prompt: "A lamp is supplied with 50 J of electrical energy each second and gives out 8 J of light each second. Explain what happens to the rest of the energy."
model: "The other 42 J each second is transferred to the internal (thermal) energy store of the lamp and then to the surroundings, by heating. Energy is conserved, none of it is destroyed, but this energy is dissipated to the surroundings, where it becomes spread out and is no longer useful. The lamp is therefore only about 16% efficient."
keywords: [energy is conserved, internal thermal energy store, dissipated to the surroundings, spread out and not useful]
```

```yaml
kind: precision
topic: "T6 Energy"
prompt: "A ball is dropped from a height. Describe the energy transfer as it falls, and state where its speed is greatest."
model: "As the ball falls, energy is transferred from its gravitational potential energy store to its kinetic energy store. Ignoring air resistance, the kinetic energy gained is equal to the gravitational potential energy lost, so ½mv² = mgh. The ball is therefore travelling fastest just before it lands, where it has fallen the greatest height."
keywords: [gravitational potential to kinetic, energy is conserved, Ek gained = Ep lost, fastest just before landing]
```

```yaml
kind: precision
topic: "T14 Practical Electricity"
prompt: "Explain how the earth wire and the fuse together protect a user when the live wire touches the metal casing of an appliance."
model: "The earth wire connects the metal casing to earth through a very low resistance path. If the live wire touches the casing, a very large current flows from the live wire, through the casing and the earth wire, to earth. This large current melts the fuse wire, which breaks the LIVE circuit and disconnects the appliance from the supply. The casing can then no longer be at a dangerous potential, so a person touching it does not receive a shock."
keywords: [low resistance path to earth, large current flows, fuse melts, breaks the live circuit, casing no longer live]
```

```yaml
kind: precision
topic: "T14 Practical Electricity"
prompt: "An appliance is marked 240 V, 720 W. Fuses of 3 A, 5 A and 13 A are available. Explain which fuse should be fitted."
model: "The normal working current is I = P ÷ V = 720 ÷ 240 = 3.0 A. A fuse must be rated just ABOVE the normal working current: it must not melt during normal use, but it must melt quickly if a fault makes the current rise. A 3 A fuse is at the working current and would blow in normal use; a 13 A fuse would allow a dangerously large fault current to flow before melting. The 5 A fuse is therefore the correct choice."
keywords: [I = P / V, just above the working current, must not blow in normal use, must melt on a fault, 5 A]
```

```yaml
kind: precision
topic: "T14 Practical Electricity"
prompt: "Explain why the switch and the fuse in a mains circuit are both placed in the live wire."
model: "When the switch is opened, or the fuse melts, the break comes between the appliance and the LIVE wire. The appliance is then isolated from the high potential of the live supply and is safe to touch. If the switch or fuse were placed in the neutral wire, the appliance would still be joined to the live wire, so its parts would stay at a dangerous potential even when it appeared to be switched off."
keywords: [break between appliance and live wire, isolates the appliance, high potential, still dangerous if placed in neutral]
```

```yaml
kind: precision
topic: "T15 Magnetism & Electromagnetism"
prompt: "State Fleming's left-hand rule and say what it is used for."
model: "Hold the thumb, first finger and second finger of the LEFT hand at right angles to one another. The First finger points along the magnetic Field (from N to S); the seCond finger points along the conventional Current (from + to −); the thuMb then gives the direction of the force, that is, the Motion of the conductor. It is used to find the direction of the force on a current-carrying conductor placed in a magnetic field."
keywords: [left hand, First finger = Field, seCond finger = Current, thuMb = Motion or force, all at right angles]
```

```yaml
kind: precision
topic: "T15 Magnetism & Electromagnetism"
prompt: "A wire carrying a current lies at right angles to a magnetic field and feels an upward force. State two separate changes that would each make the force act downwards."
model: "Either reverse the direction of the current in the wire, or reverse the direction of the magnetic field, for example by swapping the poles of the magnet. Each change on its own reverses the direction of the force. Note that reversing BOTH the current and the field together leaves the force in its original direction. Increasing the current or using a stronger magnet makes the force bigger but does not change its direction."
keywords: [reverse the current, reverse the field, swap the magnet poles, reversing both leaves the force unchanged]
```

```yaml
kind: precision
topic: "T15 Magnetism & Electromagnetism"
prompt: "Explain why the core of an electromagnet is made of soft iron rather than steel."
model: "Soft iron is magnetically soft: it is magnetised easily when the current flows, which greatly increases the strength of the magnetic field, and it loses almost all of its magnetism as soon as the current is switched off. It is therefore a temporary magnet. Steel is magnetically hard: it would stay magnetised after the current was switched off, so the electromagnet could not be turned off when it was needed."
keywords: [soft iron is easily magnetised, strengthens the field, loses magnetism when current is off, temporary magnet, steel stays magnetised]
```

```yaml
kind: precision
topic: "T7 Kinetic Particle Model"
prompt: "A solid is heated at a steady rate. Explain why its temperature stays constant while it is melting."
model: "During melting, the energy supplied is used to weaken and break the forces of attraction that hold the particles in fixed positions, it increases the POTENTIAL energy of the particles. It does not increase their average KINETIC energy. Temperature is a measure of the average kinetic energy of the particles, so while all the energy is going into the potential energy store, the temperature does not change."
keywords: [energy weakens the forces of attraction, potential energy increases, average kinetic energy unchanged, temperature measures average KE]
```

```yaml
kind: precision
topic: "T7 Kinetic Particle Model"
prompt: "Explain, in terms of particles, why a gas has neither a fixed shape nor a fixed volume, while a solid has both."
model: "In a gas the particles are far apart and move rapidly in random directions, and the forces of attraction between them are negligible, so nothing holds them together, they spread out to fill whatever container they are in, giving no fixed shape and no fixed volume. In a solid the particles are close together in a regular arrangement and are held in fixed positions by strong forces of attraction; they can only vibrate about those positions, so the solid keeps both its shape and its volume."
keywords: [far apart, random rapid motion, negligible forces, held in fixed positions, strong forces, vibrate about fixed positions]
```

```yaml
kind: precision
topic: "T7 Kinetic Particle Model"
prompt: "Explain what happens to the particles of a gas when its temperature is raised."
model: "Temperature is a measure of the average kinetic energy of the particles. Raising the temperature therefore increases the average kinetic energy of the gas particles, so on average they move faster and collide more often and more forcefully with the walls of the container. The particles themselves do not change in size or mass."
keywords: [average kinetic energy increases, particles move faster, temperature measures average KE, particles do not change size]
```

```yaml
kind: precision
topic: "T16 Radioactivity"
prompt: "Describe how you would find the half-life of a source from a graph of corrected count rate against time."
model: "First subtract the background count rate from every reading, so the values are corrected. Read the initial corrected count rate off the graph, halve it, and read off the time at which the curve reaches that halved value, that time is the half-life. Repeat the process from a different starting point, for example the time taken to fall from half to a quarter, and take an average, because decay is random and this reduces the effect of random fluctuations."
keywords: [subtract the background count, read time for the count rate to halve, repeat from another starting point, take an average, decay is random]
```

```yaml
kind: precision
topic: "T16 Radioactivity"
prompt: "Explain why alpha radiation is the most ionising but the least penetrating of the three emissions."
model: "An alpha particle is relatively large and carries a charge of +2, so it interacts very strongly with the atoms it passes and knocks electrons off them readily, it is strongly ionising. Because it loses energy so rapidly in these many ionising collisions, it travels only a few centimetres in air and is stopped by a sheet of paper. Gamma radiation is uncharged and interacts only weakly, so it ionises very little but penetrates far, and is only reduced by thick lead."
keywords: [large particle, charge of +2, many ionising collisions, loses energy quickly, stopped by paper, gamma weakly ionising but penetrating]
```

```yaml
kind: precision
topic: "T16 Radioactivity"
prompt: "State what is meant by saying that radioactive decay is random and spontaneous."
model: "Random means that it is impossible to predict which nucleus will decay next, or when a particular nucleus will decay, only the probability that a nucleus decays in a given time is known. Spontaneous means that the decay is not affected by external conditions such as temperature, pressure or chemical combination; nothing can be done to speed it up or slow it down."
keywords: [cannot predict which nucleus decays, cannot predict when, probability only, unaffected by temperature or pressure]
```

```yaml
kind: precision
topic: "T9 General Wave Properties & Sound"
prompt: "A cork floating on a pond bobs up and down as water waves pass, but it does not travel across the pond. Explain what this tells you about waves."
model: "The water particles, and the cork with them, only oscillate about their fixed positions as each wave passes; they are not carried along with the wave. The cork does gain energy, because it is set moving. This shows that a wave transfers energy from one place to another WITHOUT transferring matter."
keywords: [particles oscillate about fixed positions, matter is not transferred, energy is transferred, cork gains energy]
```

```yaml
kind: precision
topic: "T9 General Wave Properties & Sound"
prompt: "Explain how a vibrating loudspeaker cone produces a sound wave in air, and why the sound cannot be heard in a vacuum."
model: "The cone vibrates backwards and forwards. As it moves forward it pushes air particles together, forming a compression (a region of higher pressure); as it moves back, the particles spread apart, forming a rarefaction (a region of lower pressure). These compressions and rarefactions travel outwards ALONG the direction of travel, so sound is a longitudinal wave. Sound needs the particles of a medium to pass the vibration on, so in a vacuum, where there are no particles, no sound can travel."
keywords: [compressions, rarefactions, longitudinal wave, particles pass the vibration on, needs a medium, no particles in a vacuum]
```

```yaml
kind: precision
topic: "T13 D.C. Circuits"
prompt: "Explain why the lamps in a house are wired in parallel rather than in series."
model: "In parallel, every lamp is connected directly across the supply, so each one has the full supply potential difference across it and lights at its normal brightness. Each lamp is also on its own branch, so if one lamp fails or is switched off, the others still have a complete circuit and stay lit. In series, the potential difference would be shared between the lamps so they would all be dim, and one broken lamp would break the whole circuit and switch every lamp off."
keywords: [each lamp gets the full p.d., separate branches, one lamp failing does not affect the others, series shares the p.d., series break stops everything]
```

```yaml
kind: precision
topic: "T3 Force & Pressure"
prompt: "Explain, using the idea of pressure, why a sharp knife cuts more easily than a blunt one."
model: "Pressure is the force acting per unit area: p = F ÷ A. A sharp blade has a much smaller contact area than a blunt one, so for the same downward force it exerts a much greater pressure on the material. That larger pressure is enough to push the blade into the material, so it cuts more easily. The same idea explains why wide skis stop you sinking into snow: a larger area gives a smaller pressure."
keywords: [p = F / A, smaller contact area, same force, greater pressure, larger area gives smaller pressure]
```

```yaml
kind: precision
topic: "T10 Electromagnetic Spectrum"
prompt: "Explain why over-exposure to ultraviolet radiation is more harmful than over-exposure to visible light, and state one precaution."
model: "Ultraviolet has a higher frequency and a shorter wavelength than visible light, so it carries more energy and it is ionising. It can therefore damage or kill living cells and damage the DNA in skin cells, which increases the risk of skin cancer, and it can damage the eyes. Visible light is not ionising, so it does not do this. A suitable precaution is to wear sunscreen and UV-blocking sunglasses, or to stay in the shade."
keywords: [higher frequency, shorter wavelength, carries more energy, ionising, damages cells and DNA, sunscreen or shade]
```
