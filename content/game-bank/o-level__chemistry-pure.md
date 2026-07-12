---
level: o-level
slug: chemistry-pure
subjectName: Chemistry (Pure)
family: chemistry
---

## QUESTIONS

```yaml
type: mcq
topic: C4 Chemical Calculations
stem: "What is the mass of 0.25 mol of calcium carbonate, CaCO₃? (Aᵣ: C = 12, O = 16, Ca = 40)"
options:
  - 25 g
  - 40 g
  - 4.0 g
  - 400 g
answer: 0
marks: 1
misconception: mole-mass-formula
worked: |
  Mr(CaCO₃) = 40 + 12 + (3 × 16) = 100.
  m = n × Mr = 0.25 × 100 = 25 g.
```

```yaml
type: mcq
topic: C4 Chemical Calculations
stem: "A compound contains 40.0% carbon, 6.7% hydrogen and 53.3% oxygen by mass. What is its empirical formula? (Aᵣ: H = 1, C = 12, O = 16)"
options:
  - CH₂O
  - CHO
  - C₂H₄O₂
  - C₂H₆O
answer: 0
marks: 1
misconception: empirical-formula-ratio
worked: |
  Divide each percentage by the Aᵣ:
  C = 40.0 / 12 = 3.33; H = 6.7 / 1 = 6.7; O = 53.3 / 16 = 3.33.
  Divide by the smallest (3.33): C = 1, H = 2, O = 1.
  Empirical formula = CH₂O. (C₂H₄O₂ is a molecular formula, not the simplest ratio.)
```

```yaml
type: mcq
topic: C4 Chemical Calculations
stem: "0.10 mol of calcium carbonate decomposes completely: CaCO₃(s) → CaO(s) + CO₂(g). What volume of carbon dioxide is produced at r.t.p.? (Molar gas volume = 24 dm³/mol)"
options:
  - 2.4 dm³
  - 24 dm³
  - 0.24 dm³
  - 4.8 dm³
answer: 0
marks: 1
misconception: molar-gas-volume
worked: |
  The equation is 1 : 1, so n(CO₂) = n(CaCO₃) = 0.10 mol.
  V = n × 24 = 0.10 × 24 = 2.4 dm³.
```

```yaml
type: mcq
topic: C4 Chemical Calculations
stem: "25.0 cm³ of sodium hydroxide solution is exactly neutralised by 20.0 cm³ of 0.100 mol/dm³ hydrochloric acid. What is the concentration of the sodium hydroxide? (NaOH + HCl → NaCl + H₂O)"
options:
  - 0.0800 mol/dm³
  - 0.125 mol/dm³
  - 0.0500 mol/dm³
  - 0.200 mol/dm³
answer: 0
marks: 2
misconception: titration-volume-conversion
worked: |
  n(HCl) = c × V = 0.100 × (20.0 / 1000) = 0.00200 mol.
  The ratio is 1 : 1, so n(NaOH) = 0.00200 mol.
  c(NaOH) = n / V = 0.00200 / (25.0 / 1000) = 0.0800 mol/dm³.
```

```yaml
type: mcq
topic: C4 Chemical Calculations
stem: "0.20 mol of ethanol is oxidised to ethanoic acid, CH₃COOH. Only 9.0 g of ethanoic acid is obtained. What is the percentage yield? (Mᵣ of ethanoic acid = 60)"
options:
  - 75%
  - 45%
  - 60%
  - 133%
answer: 0
marks: 2
misconception: percent-yield-inversion
worked: |
  The ratio is 1 : 1, so the theoretical amount of ethanoic acid = 0.20 mol.
  Theoretical mass = 0.20 × 60 = 12.0 g.
  Percentage yield = (actual / theoretical) × 100 = (9.0 / 12.0) × 100 = 75%.
  Inverting the ratio gives 133%, which is impossible — the yield can never exceed the theoretical mass.
```

```yaml
type: mcq
topic: C11 Organic Chemistry
stem: "What is the general formula of the alkenes?"
options:
  - CₙH₂ₙ₊₂
  - CₙH₂ₙ
  - CₙH₂ₙ₋₂
  - CₙH₂ₙ₊₁
answer: 1
marks: 1
misconception: homologous-general-formula
worked: |
  Alkenes are unsaturated hydrocarbons with one C=C double bond, general formula CₙH₂ₙ
  (e.g. ethene C₂H₄, propene C₃H₆).
  CₙH₂ₙ₊₂ is the alkanes (saturated).
```

```yaml
type: mcq
topic: C11 Organic Chemistry
stem: "Which observation shows that a hydrocarbon is unsaturated?"
options:
  - Aqueous bromine changes from orange to colourless
  - Limewater turns milky
  - It burns with a blue flame
  - It gives a squeaky pop with a lighted splint
answer: 0
marks: 1
misconception: bromine-test
worked: |
  An alkene adds across the C=C double bond, decolourising aqueous bromine
  (orange → colourless). An alkane gives no change in the dark.
  Limewater turning milky tests for carbon dioxide; the pop test is for hydrogen.
```

```yaml
type: mcq
topic: C11 Organic Chemistry
stem: "Ethanoic acid reacts with ethanol in the presence of an acid catalyst. What is the organic product?"
options:
  - Ethyl ethanoate
  - Methyl ethanoate
  - Ethyl methanoate
  - Ethanoyl ethanol
answer: 0
marks: 1
misconception: ester-naming
worked: |
  Acid + alcohol → ester + water.
  The alkyl part comes from the alcohol (ethanol → ethyl); the -oate part comes from
  the acid (ethanoic acid → ethanoate). The ester is ethyl ethanoate.
```

```yaml
type: mcq
topic: C11 Organic Chemistry
stem: "A long-chain alkane is cracked. Which set of products is possible?"
options:
  - A shorter alkane and an alkene
  - Two alcohols
  - An ester and water
  - Carbon and hydrogen only
answer: 0
marks: 1
misconception: cracking-products
worked: |
  Cracking breaks a long, less useful alkane into a shorter alkane plus an alkene
  (hydrogen may also form). This matches supply to the demand for smaller molecules
  and for alkenes used in polymerisation.
```

```yaml
type: short
topic: C11 Organic Chemistry
stem: "Name the monomer used to make poly(ethene)."
accepted: ["ethene", "ethylene"]
marks: 1
misconception: monomer-identification
worked: |
  Poly(ethene) is made by addition polymerisation of ethene, C₂H₄.
  The C=C double bond opens and many monomers join into a long chain.
```

```yaml
type: mcq
topic: C3 Chemical Bonding & Structure
stem: "Solid sodium chloride does not conduct electricity, but molten sodium chloride does. Why?"
options:
  - In the solid the ions are held in fixed positions; when molten the ions are free to move
  - Melting releases delocalised electrons
  - The covalent bonds break on melting
  - Sodium chloride becomes a metal when molten
answer: 0
marks: 1
misconception: ionic-conduction
worked: |
  Conduction needs mobile charge carriers. In the giant ionic lattice the ions are
  held in fixed positions, so the solid does not conduct. When molten (or aqueous)
  the ions are free to move and carry charge.
```

```yaml
type: mcq
topic: C3 Chemical Bonding & Structure
stem: "Why does diamond have a very high melting point?"
options:
  - Many strong covalent bonds throughout the giant structure must be broken
  - Weak forces between molecules must be overcome
  - It contains delocalised electrons
  - It has a giant ionic lattice
answer: 0
marks: 1
misconception: giant-covalent-mp
worked: |
  Diamond is a giant covalent structure: every carbon atom is joined by strong
  covalent bonds to four others. A very large amount of energy is needed to break
  the many strong covalent bonds, so the melting point is very high.
```

```yaml
type: mcq
topic: C3 Chemical Bonding & Structure
stem: "Why do metals conduct electricity?"
options:
  - They contain delocalised electrons that are free to move
  - They contain ions that are free to move in the solid
  - Their atoms vibrate when a voltage is applied
  - They have weak forces between molecules
answer: 0
marks: 1
misconception: metallic-bonding
worked: |
  A metal is a giant lattice of positive ions in a "sea" of delocalised electrons.
  These electrons are free to move through the structure, so they carry charge —
  the metal conducts in the solid state.
```

```yaml
type: mcq
topic: C7 Redox Chemistry & Electrochemistry
stem: "Molten lead(II) bromide, PbBr₂, is electrolysed using inert electrodes. What forms at the cathode?"
options:
  - Lead
  - Bromine
  - Hydrogen
  - Oxygen
answer: 0
marks: 1
misconception: electrode-products
worked: |
  The cathode is negative, so it attracts cations. In molten PbBr₂ the only cation is Pb²⁺.
  Pb²⁺ + 2e⁻ → Pb, so lead forms at the cathode.
  Bromine (from Br⁻) forms at the anode. There is no water, so no H₂ or O₂.
```

```yaml
type: mcq
topic: C7 Redox Chemistry & Electrochemistry
stem: "What is the oxidation state of manganese in KMnO₄?"
options:
  - "+7"
  - "+2"
  - "+4"
  - "+6"
answer: 0
marks: 1
misconception: oxidation-state-calc
worked: |
  K is +1; each O is −2, so 4 O gives −8. The compound is neutral.
  (+1) + Mn + (−8) = 0, so Mn = +7.
```

```yaml
type: mcq
topic: C7 Redox Chemistry & Electrochemistry
stem: "Concentrated aqueous sodium chloride is electrolysed with inert electrodes. What is produced at the anode?"
options:
  - Chlorine
  - Oxygen
  - Hydrogen
  - Sodium
answer: 0
marks: 1
misconception: selective-discharge
worked: |
  The anode attracts anions: Cl⁻ and OH⁻. Because the chloride is concentrated,
  the halide is discharged in preference to hydroxide, so chlorine is produced.
  (If the solution were very dilute, oxygen would form instead.)
  At the cathode, H⁺ is discharged in preference to Na⁺, giving hydrogen.
```

```yaml
type: mcq
topic: C5 Acid-Base Chemistry
stem: "Barium sulfate is insoluble in water. Which method is used to prepare it?"
options:
  - Precipitation, by mixing two soluble solutions
  - Titration of an acid with an alkali
  - Adding excess insoluble base to an acid
  - Adding a metal to an acid
answer: 0
marks: 1
misconception: salt-prep-route
worked: |
  An insoluble salt is made by precipitation: mix solutions containing the two ions
  (e.g. a soluble barium salt with a soluble sulfate), then filter, wash and dry
  the precipitate.
  Titration and excess-base routes are for soluble salts.
```

```yaml
type: mcq
topic: C5 Acid-Base Chemistry
stem: "Which oxide is amphoteric?"
options:
  - Al₂O₃
  - MgO
  - SO₂
  - CO
answer: 0
marks: 1
misconception: oxide-classification
worked: |
  An amphoteric oxide reacts with BOTH acids and alkalis. Aluminium oxide, Al₂O₃, does this.
  MgO is basic (metal oxide), SO₂ is acidic (non-metal oxide), CO is neutral.
```

```yaml
type: mcq
topic: C5 Acid-Base Chemistry
stem: "What is the ionic equation for the neutralisation of any strong acid by any strong alkali?"
options:
  - H⁺(aq) + OH⁻(aq) → H₂O(l)
  - H⁺(aq) + Cl⁻(aq) → HCl(aq)
  - Na⁺(aq) + Cl⁻(aq) → NaCl(aq)
  - H₂(g) + O₂(g) → H₂O(l)
answer: 0
marks: 1
misconception: ionic-equation-neutralisation
worked: |
  In neutralisation the only species that actually react are the hydrogen ions from
  the acid and the hydroxide ions from the alkali:
  H⁺(aq) + OH⁻(aq) → H₂O(l).
  The other ions (e.g. Na⁺ and Cl⁻) are spectator ions and are cancelled.
```

```yaml
type: mcq
topic: C8 Patterns in the Periodic Table
stem: "Chlorine is bubbled into colourless aqueous potassium bromide. What is observed, and why?"
options:
  - The solution turns orange, because chlorine is more reactive and displaces bromine
  - The solution stays colourless, because bromine is more reactive than chlorine
  - A white precipitate forms, because a salt is made
  - The solution turns purple, because iodine is displaced
answer: 0
marks: 2
misconception: halogen-displacement-direction
worked: |
  Reactivity decreases down Group 17, so chlorine is more reactive than bromine.
  Chlorine displaces bromide from solution:
  Cl₂ + 2KBr → 2KCl + Br₂
  The bromine formed makes the solution orange.
```

```yaml
type: mcq
topic: C8 Patterns in the Periodic Table
stem: "How does the reactivity of the Group 1 metals change from lithium to potassium?"
options:
  - It increases down the group
  - It decreases down the group
  - It stays the same
  - It increases, then decreases
answer: 0
marks: 1
misconception: group1-trend
worked: |
  Reactivity increases down Group 1: the outer electron is further from the nucleus
  and is lost more easily. Potassium reacts more vigorously with water than lithium.
  (Note the opposite trend applies down Group 17.)
```

```yaml
type: mcq
topic: C10 Rate of Reactions
stem: "How does a catalyst increase the rate of a reaction?"
options:
  - It provides an alternative pathway with a lower activation energy
  - It increases the activation energy
  - It raises the temperature of the mixture
  - It is used up, increasing the concentration of product
answer: 0
marks: 1
misconception: catalyst-effect
worked: |
  A catalyst gives the reaction an alternative route with a LOWER activation energy,
  so a greater proportion of collisions have enough energy to react. The rate rises.
  A catalyst is not used up and does not change the amount of product.
```

```yaml
type: mcq
topic: C10 Rate of Reactions
stem: "Powdered marble chips react faster with dilute hydrochloric acid than large lumps of the same mass. Why?"
options:
  - The powder has a larger total surface area, so collisions are more frequent
  - The powder is more concentrated
  - The powder has a higher activation energy
  - The powder makes the acid hotter
answer: 0
marks: 1
misconception: surface-area-rate
worked: |
  Breaking a solid into a powder exposes a much larger total surface area.
  More acid particles can collide with the solid per second, so the frequency of
  effective collisions rises and the rate increases. The total amount of product is unchanged.
```

```yaml
type: mcq
topic: C12 Maintaining Air Quality
stem: "Which pollutant gas is mainly responsible for acid rain?"
options:
  - Sulfur dioxide
  - Carbon dioxide
  - Methane
  - Nitrogen
answer: 0
marks: 1
misconception: acid-rain-gas
worked: |
  Sulfur dioxide (from burning fossil fuels and from volcanoes) dissolves and is
  oxidised in the atmosphere to form acidic solutions — acid rain. Oxides of nitrogen
  contribute too. Carbon dioxide and methane are greenhouse gases, not the main acid-rain cause.
```

```yaml
type: mcq
topic: C12 Maintaining Air Quality
stem: "In a catalytic converter, carbon monoxide and nitrogen monoxide react together. What are the products?"
options:
  - Carbon dioxide and nitrogen
  - Carbon and nitrogen dioxide
  - Sulfur dioxide and water
  - Methane and oxygen
answer: 0
marks: 1
misconception: catalytic-converter
worked: |
  The converter uses a redox reaction to remove both pollutants at once:
  2CO + 2NO → 2CO₂ + N₂
  Carbon monoxide is oxidised to carbon dioxide; nitrogen monoxide is reduced to nitrogen.
```

```yaml
type: mcq
topic: C2 Particulate Nature of Matter
stem: "How many neutrons are in one atom of ³⁵₁₇Cl?"
options:
  - "18"
  - "17"
  - "35"
  - "52"
answer: 0
marks: 1
misconception: neutron-count
worked: |
  Nucleon (mass) number = 35; proton number = 17.
  Neutrons = nucleon number − proton number = 35 − 17 = 18.
```

```yaml
type: short
topic: C2 Particulate Nature of Matter
stem: "How many electrons are in one Fe²⁺ ion? (Proton number of iron = 26)"
accepted: ["24"]
marks: 1
misconception: ion-electron-count
worked: |
  A neutral Fe atom has 26 electrons.
  Fe²⁺ has lost 2 electrons, so it has 26 − 2 = 24 electrons.
  (The number of protons does not change when an ion forms.)
```

```yaml
type: mcq
topic: C9 Chemical Energetics
stem: "For an exothermic reaction, what is true of the enthalpy change, ΔH?"
options:
  - ΔH is negative, because energy is released to the surroundings
  - ΔH is positive, because energy is taken in from the surroundings
  - ΔH is zero
  - ΔH is negative, because energy is taken in from the surroundings
answer: 0
marks: 1
misconception: enthalpy-sign
worked: |
  Exothermic = energy transferred OUT to the surroundings, so the products are lower
  in energy than the reactants and ΔH is negative. The temperature of the surroundings rises.
```

```yaml
type: mcq
topic: C9 Chemical Energetics
stem: "Which statement about bond breaking and bond making is correct?"
options:
  - Bond breaking is endothermic and bond making is exothermic
  - Bond breaking is exothermic and bond making is endothermic
  - Both are exothermic
  - Both are endothermic
answer: 0
marks: 1
misconception: bond-energy-direction
worked: |
  Energy must be supplied to break bonds (endothermic); energy is released when bonds
  form (exothermic). If more energy is released making bonds than is used breaking them,
  the reaction is exothermic overall.
```

```yaml
type: mcq
topic: C6 Qualitative Analysis
stem: "An aqueous cation gives a white precipitate with aqueous sodium hydroxide that dissolves in excess. It also gives a white precipitate with aqueous ammonia that dissolves in excess. Which cation is it?"
options:
  - Zn²⁺
  - Al³⁺
  - Ca²⁺
  - Cu²⁺
answer: 0
marks: 1
misconception: zinc-aluminium-distinction
worked: |
  Both Zn²⁺ and Al³⁺ give a white precipitate that dissolves in EXCESS sodium hydroxide.
  The separator is aqueous ammonia: the zinc precipitate dissolves in excess ammonia,
  but the aluminium precipitate does NOT. So the cation is Zn²⁺.
  Ca²⁺ gives a white precipitate that is insoluble in excess; Cu²⁺ gives a light blue one.
```

```yaml
type: mcq
topic: C6 Qualitative Analysis
stem: "A solid fizzes when dilute hydrochloric acid is added, and the gas turns limewater milky. Which ion is present?"
options:
  - Carbonate, CO₃²⁻
  - Sulfate, SO₄²⁻
  - Chloride, Cl⁻
  - Nitrate, NO₃⁻
answer: 0
marks: 1
misconception: carbonate-test
worked: |
  Effervescence with dilute acid, giving a gas that turns limewater milky, shows carbon
  dioxide — so the solid contains the carbonate ion, CO₃²⁻.
  Sulfate is tested with nitric acid then barium nitrate (white precipitate);
  chloride with nitric acid then silver nitrate (white precipitate).
```

```yaml
type: mcq
topic: C1 Experimental Chemistry
stem: "Which method best separates two miscible liquids with different boiling points?"
options:
  - Fractional distillation
  - Filtration
  - Crystallisation
  - Paper chromatography
answer: 0
marks: 1
misconception: separation-method-choice
worked: |
  Miscible liquids mix completely, so they cannot be filtered apart. Fractional
  distillation separates them using the difference in boiling points — the liquid
  with the lower boiling point evaporates and condenses first.
```

```yaml
type: short
topic: C1 Experimental Chemistry
stem: "In paper chromatography, a spot moves 4.5 cm while the solvent front moves 9.0 cm. Calculate the Rf value."
accepted: ["0.5", "0.50", "1/2"]
marks: 1
misconception: rf-definition
worked: |
  Rf = distance moved by the spot / distance moved by the solvent front
     = 4.5 / 9.0 = 0.5
  Rf has no units and is always less than 1.
```

## TEACHING

```yaml
kind: definition
term: "Oxidation"
topic: C7 Redox Chemistry & Electrochemistry
body: "The loss of electrons, or an increase in oxidation state. (It can also be described as gain of oxygen or loss of hydrogen.)"
```

```yaml
kind: definition
term: "Isotopes"
topic: C2 Particulate Nature of Matter
body: "Atoms of the same element with the same proton number but different numbers of neutrons. They have identical chemical properties because they have the same number of electrons."
```

```yaml
kind: definition
term: "Catalyst"
topic: C10 Rate of Reactions
body: "A substance that increases the rate of a reaction by providing an alternative pathway of lower activation energy, and is not chemically changed or used up at the end. Enzymes are biological catalysts."
```

```yaml
kind: definition
term: "Empirical formula"
topic: C4 Chemical Calculations
body: "The formula showing the simplest whole-number ratio of the atoms of each element in a compound."
```

```yaml
kind: definition
term: "Amphoteric oxide"
topic: C5 Acid-Base Chemistry
body: "An oxide that reacts with both acids and alkalis to form a salt and water — for example aluminium oxide, Al₂O₃, and zinc oxide, ZnO."
```

```yaml
kind: precision
topic: C10 Rate of Reactions
prompt: "Explain, in terms of particles, why a higher temperature increases the rate of reaction."
model: "At a higher temperature the particles have more kinetic energy, so they move faster and collide more frequently. A greater proportion of the collisions have energy greater than or equal to the activation energy, so the frequency of effective collisions increases and the rate rises."
keywords: [kinetic energy, collide more frequently, proportion, activation energy, effective collisions]
```

```yaml
kind: precision
topic: C3 Chemical Bonding & Structure
prompt: "Explain why sodium chloride has a high melting point but does not conduct electricity as a solid."
model: "Sodium chloride has a giant ionic lattice with strong electrostatic forces of attraction between oppositely charged ions, and a large amount of energy is needed to overcome them — so the melting point is high. In the solid the ions are held in fixed positions and cannot move, so there are no mobile charge carriers and it does not conduct; when molten or aqueous the ions are free to move and it does conduct."
keywords: [giant ionic lattice, strong electrostatic forces, oppositely charged ions, fixed positions, free to move]
```

```yaml
kind: precision
topic: C3 Chemical Bonding & Structure
prompt: "Explain why a simple molecular substance such as iodine has a low melting point, even though it contains strong covalent bonds."
model: "Iodine is made of simple molecules held together by weak intermolecular forces of attraction. Only these weak forces need to be overcome on melting, not the strong covalent bonds inside the molecules, so only a small amount of energy is needed and the melting point is low."
keywords: [simple molecules, weak intermolecular forces, covalent bonds not broken, little energy]
```

```yaml
kind: precision
topic: C7 Redox Chemistry & Electrochemistry
prompt: "Explain why the products of electrolysing concentrated aqueous sodium chloride differ from those of the very dilute solution."
model: "At the anode both chloride ions and hydroxide ions are attracted. When the chloride is concentrated, the halide ion is discharged in preference and chlorine is produced; when the solution is very dilute, hydroxide is discharged instead and oxygen is produced. At the cathode hydrogen ions are discharged in preference to sodium ions, because sodium is more reactive than hydrogen, so hydrogen is produced in both cases."
keywords: [selective discharge, concentration, halide in preference, hydroxide, more reactive than hydrogen]
```

```yaml
kind: precision
topic: C4 Chemical Calculations
prompt: "Describe the correct sequence for a reacting-mass calculation involving a limiting reactant."
model: "Convert each given mass or volume to an amount in moles. Compare the mole ratio in the balanced equation with the amounts actually present to identify the limiting reactant. Use the limiting reactant only, with the mole ratio from the equation, to find the amount of product. Finally convert that amount to a mass (n × Mr) or a gas volume (n × 24 dm³ at r.t.p.)."
keywords: [moles first, compare to ratio, limiting reactant, use limiting only, convert to mass or volume]
```

```yaml
kind: qa
test: "Add aqueous sodium hydroxide, then excess"
observation: "Light blue precipitate, insoluble in excess"
conclusion: "Cu²⁺"
```

```yaml
kind: qa
test: "Add aqueous ammonia, then excess"
observation: "Light blue precipitate, soluble in excess giving a dark blue solution"
conclusion: "Cu²⁺"
```

```yaml
kind: qa
test: "Add aqueous sodium hydroxide, then excess"
observation: "Green precipitate, insoluble in excess"
conclusion: "Fe²⁺"
```

```yaml
kind: qa
test: "Add aqueous sodium hydroxide, then excess"
observation: "Red-brown precipitate, insoluble in excess"
conclusion: "Fe³⁺"
```

```yaml
kind: qa
test: "Add aqueous sodium hydroxide, then excess"
observation: "White precipitate, soluble in excess giving a colourless solution"
conclusion: "Zn²⁺ or Al³⁺ (use aqueous ammonia to separate them)"
```

```yaml
kind: qa
test: "Add aqueous ammonia, then excess"
observation: "White precipitate, soluble in excess giving a colourless solution"
conclusion: "Zn²⁺ (an Al³⁺ precipitate stays insoluble in excess ammonia)"
```

```yaml
kind: qa
test: "Warm with aqueous sodium hydroxide and test the gas with damp red litmus paper"
observation: "Ammonia gas evolved, turning damp red litmus paper blue"
conclusion: "NH₄⁺"
```

```yaml
kind: qa
test: "Add dilute acid and bubble the gas through limewater"
observation: "Effervescence; the limewater turns milky"
conclusion: "CO₃²⁻ (carbon dioxide released)"
```

```yaml
kind: qa
test: "Acidify with dilute nitric acid, then add aqueous silver nitrate"
observation: "White precipitate"
conclusion: "Cl⁻ (a yellow precipitate would indicate I⁻)"
```

```yaml
kind: qa
test: "Acidify with dilute nitric acid, then add aqueous barium nitrate"
observation: "White precipitate"
conclusion: "SO₄²⁻"
```
