---
level: o-level
slug: chemistry-pure
subjectName: Chemistry (Pure)
family: chemistry
---

## QUESTIONS

```yaml
type: mcq
topic: "C4 Chemical Calculations"
stem: "What is the mass of 0.25 mol of calcium carbonate, CaCO₃? (Aᵣ: C = 12, O = 16, Ca = 40)"
options:
  - "40 g"
  - "400 g"
  - "4.0 g"
  - "25 g"
answer: 3
marks: 1
misconception: mole-mass-formula
worked: |
  Mᵣ(CaCO₃) = 40 + 12 + (3 × 16) = 100.
  m = n × Mᵣ = 0.25 × 100 = 25 g.
  Dividing instead of multiplying gives 0.0025 mol-sized nonsense, always check the units of the answer.
```

```yaml
type: mcq
topic: "C4 Chemical Calculations"
stem: "A compound contains 40.0% carbon, 6.7% hydrogen and 53.3% oxygen by mass. What is its empirical formula? (Aᵣ: H = 1, C = 12, O = 16)"
options:
  - "CH₂O"
  - "C₂H₄O₂"
  - "CHO"
  - "C₂H₆O"
answer: 0
marks: 1
misconception: empirical-formula-ratio
worked: |
  Divide each percentage by the Aᵣ:
  C = 40.0 / 12 = 3.33;  H = 6.7 / 1 = 6.7;  O = 53.3 / 16 = 3.33.
  Divide through by the smallest (3.33): C = 1, H = 2, O = 1.
  Empirical formula = CH₂O. C₂H₄O₂ is a molecular formula, not the simplest whole-number ratio.
```

```yaml
type: mcq
topic: "C4 Chemical Calculations"
stem: "A compound has the empirical formula CH₂O and a relative molecular mass of 180. What is its molecular formula? (Aᵣ: H = 1, C = 12, O = 16)"
options:
  - "CH₂O"
  - "C₃H₆O₃"
  - "C₆H₁₂O₆"
  - "C₅H₁₀O₅"
answer: 2
marks: 1
misconception: empirical-to-molecular
worked: |
  Empirical formula mass of CH₂O = 12 + (2 × 1) + 16 = 30.
  n = Mᵣ / empirical mass = 180 / 30 = 6.
  Molecular formula = (CH₂O)₆ = C₆H₁₂O₆.
```

```yaml
type: mcq
topic: "C4 Chemical Calculations"
stem: "0.10 mol of calcium carbonate decomposes completely: CaCO₃(s) → CaO(s) + CO₂(g). What volume of carbon dioxide is produced at r.t.p.? (Molar gas volume = 24 dm³/mol)"
options:
  - "24 dm³"
  - "0.24 dm³"
  - "2.4 dm³"
  - "4.8 dm³"
answer: 2
marks: 1
misconception: molar-gas-volume
worked: |
  The equation is 1 : 1, so n(CO₂) = n(CaCO₃) = 0.10 mol.
  V = n × 24 = 0.10 × 24 = 2.4 dm³.
```

```yaml
type: mcq
topic: "C4 Chemical Calculations"
stem: "25.0 cm³ of sodium hydroxide solution is exactly neutralised by 20.0 cm³ of 0.100 mol/dm³ hydrochloric acid. What is the concentration of the sodium hydroxide? (NaOH + HCl → NaCl + H₂O)"
options:
  - "0.200 mol/dm³"
  - "0.0800 mol/dm³"
  - "0.125 mol/dm³"
  - "0.0500 mol/dm³"
answer: 1
marks: 2
misconception: titration-volume-conversion
worked: |
  n(HCl) = c × V = 0.100 × (20.0 / 1000) = 0.00200 mol.
  The mole ratio is 1 : 1, so n(NaOH) = 0.00200 mol.
  c(NaOH) = n / V = 0.00200 / (25.0 / 1000) = 0.0800 mol/dm³.
  Forgetting to convert cm³ to dm³ is the classic slip here.
```

```yaml
type: mcq
topic: "C4 Chemical Calculations"
stem: "20.0 cm³ of 0.0500 mol/dm³ sulfuric acid is titrated with 0.100 mol/dm³ sodium hydroxide. What volume of alkali is needed for exact neutralisation? (H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O)"
options:
  - "5.00 cm³"
  - "40.0 cm³"
  - "10.0 cm³"
  - "20.0 cm³"
answer: 3
marks: 2
misconception: dibasic-acid-ratio
worked: |
  n(H₂SO₄) = 0.0500 × (20.0 / 1000) = 0.00100 mol.
  Sulfuric acid is dibasic, so the ratio is 1 : 2 and n(NaOH) = 2 × 0.00100 = 0.00200 mol.
  V = n / c = 0.00200 / 0.100 = 0.0200 dm³ = 20.0 cm³.
  Ignoring the 1 : 2 ratio gives 10.0 cm³.
```

```yaml
type: mcq
topic: "C4 Chemical Calculations"
stem: "0.30 mol of magnesium is added to 0.40 mol of hydrochloric acid: Mg + 2HCl → MgCl₂ + H₂. What volume of hydrogen is produced at r.t.p.? (Molar gas volume = 24 dm³/mol)"
options:
  - "7.2 dm³"
  - "9.6 dm³"
  - "2.4 dm³"
  - "4.8 dm³"
answer: 3
marks: 2
misconception: limiting-reactant
worked: |
  Check which reactant runs out first.
  0.30 mol Mg would need 2 × 0.30 = 0.60 mol HCl, but only 0.40 mol HCl is present.
  So HCl is the limiting reactant and magnesium is in excess.
  n(H₂) = n(HCl) / 2 = 0.40 / 2 = 0.20 mol.
  V = 0.20 × 24 = 4.8 dm³. (Working from the magnesium instead gives the wrong answer of 7.2 dm³.)
```

```yaml
type: mcq
topic: "C4 Chemical Calculations"
stem: "0.20 mol of ethanol is oxidised to ethanoic acid, CH₃COOH. Only 9.0 g of ethanoic acid is obtained. What is the percentage yield? (Mᵣ of ethanoic acid = 60)"
options:
  - "45%"
  - "75%"
  - "133%"
  - "60%"
answer: 1
marks: 2
misconception: percent-yield-inversion
worked: |
  The mole ratio is 1 : 1, so the theoretical amount of ethanoic acid is 0.20 mol.
  Theoretical mass = 0.20 × 60 = 12.0 g.
  Percentage yield = (actual / theoretical) × 100 = (9.0 / 12.0) × 100 = 75%.
  Inverting the fraction gives 133%, which is impossible, you cannot make more than the theoretical mass.
```

```yaml
type: mcq
topic: "C4 Chemical Calculations"
stem: "A 5.00 g sample of impure calcium carbonate reacts with excess dilute hydrochloric acid and gives 0.960 dm³ of carbon dioxide at r.t.p. The impurities do not react. What is the percentage purity of the sample? (Mᵣ of CaCO₃ = 100; molar gas volume = 24 dm³/mol)"
options:
  - "96.0%"
  - "64.0%"
  - "20.0%"
  - "80.0%"
answer: 3
marks: 2
misconception: percent-purity
worked: |
  n(CO₂) = V / 24 = 0.960 / 24 = 0.0400 mol.
  CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂, a 1 : 1 ratio, so n(CaCO₃) = 0.0400 mol.
  Mass of pure CaCO₃ = 0.0400 × 100 = 4.00 g.
  Percentage purity = (mass of pure substance / mass of sample) × 100 = (4.00 / 5.00) × 100 = 80.0%.
```

```yaml
type: mcq
topic: "C4 Chemical Calculations"
stem: "A solution of sodium hydroxide has a concentration of 0.200 mol/dm³. What is its concentration in g/dm³? (Mᵣ of NaOH = 40)"
options:
  - "40.0 g/dm³"
  - "0.00500 g/dm³"
  - "200 g/dm³"
  - "8.00 g/dm³"
answer: 3
marks: 1
misconception: concentration-units
worked: |
  Concentration in g/dm³ = concentration in mol/dm³ × Mᵣ.
  = 0.200 × 40 = 8.00 g/dm³.
  Dividing instead of multiplying gives 0.005, a useful sanity check is that a dilute solution should be a few grams per dm³, not a fraction of a gram.
```

```yaml
type: mcq
topic: "C4 Chemical Calculations"
stem: "What is the percentage by mass of oxygen in iron(III) oxide, Fe₂O₃? (Aᵣ: O = 16, Fe = 56)"
options:
  - "33.3%"
  - "48.0%"
  - "30.0%"
  - "70.0%"
answer: 2
marks: 1
misconception: percent-by-mass
worked: |
  Mᵣ(Fe₂O₃) = (2 × 56) + (3 × 16) = 112 + 48 = 160.
  Mass of oxygen in one mole = 48.
  Percentage by mass of O = (48 / 160) × 100 = 30.0%.
  70.0% is the percentage of iron; 33.3% would be the ratio of atoms, not of mass.
```

```yaml
type: mcq
topic: "C4 Chemical Calculations"
stem: "How many hydrogen atoms are present in 0.50 mol of methane, CH₄? (Avogadro constant = 6.0 × 10²³ per mol)"
options:
  - "2.4 × 10²⁴"
  - "6.0 × 10²³"
  - "1.2 × 10²⁴"
  - "3.0 × 10²³"
answer: 2
marks: 1
misconception: avogadro-atom-count
worked: |
  Each molecule of CH₄ contains 4 hydrogen atoms.
  n(H atoms) = 4 × 0.50 = 2.0 mol.
  Number of atoms = 2.0 × 6.0 × 10²³ = 1.2 × 10²⁴.
  3.0 × 10²³ is the number of CH₄ molecules, the question asks for atoms of hydrogen.
```

```yaml
type: mcq
topic: "C4 Chemical Calculations"
stem: "Iron(III) oxide is reduced by hydrogen: Fe₂O₃ + 3H₂ → 2Fe + 3H₂O. What mass of Fe₂O₃ is needed to produce 11.2 g of iron? (Aᵣ: O = 16, Fe = 56)"
options:
  - "11.2 g"
  - "32.0 g"
  - "16.0 g"
  - "8.00 g"
answer: 2
marks: 2
misconception: reacting-masses-ratio
worked: |
  n(Fe) = m / Aᵣ = 11.2 / 56 = 0.200 mol.
  The ratio Fe₂O₃ : Fe is 1 : 2, so n(Fe₂O₃) = 0.200 / 2 = 0.100 mol.
  Mᵣ(Fe₂O₃) = (2 × 56) + (3 × 16) = 160.
  m = 0.100 × 160 = 16.0 g. (Forgetting the 1 : 2 ratio gives 32.0 g.)
```

```yaml
type: mcq
topic: "C4 Chemical Calculations"
stem: "Aqueous barium nitrate is added to aqueous sodium sulfate and a white precipitate forms. What is the ionic equation for this reaction?"
options:
  - "Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(aq)"
  - "Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)"
  - "Ba(NO₃)₂(aq) + Na₂SO₄(aq) → BaSO₄(s) + 2NaNO₃(aq)"
  - "Ba⁺(aq) + SO₄⁻(aq) → BaSO₄(s)"
answer: 1
marks: 1
misconception: ionic-equation-spectators
worked: |
  An ionic equation shows only the ions that actually react, with the correct charges and state symbols.
  Na⁺ and NO₃⁻ stay in solution unchanged, they are spectator ions and are left out.
  The barium ion is 2+ and the sulfate ion is 2−, and the product is an insoluble solid:
  Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s).
  The full balanced equation is correct chemistry but it is not an ionic equation, and BaSO₄(aq) is wrong because the precipitate is a solid.
```

```yaml
type: mcq
topic: "C4 Chemical Calculations"
stem: "Propane burns completely: C₃H₈ + xO₂ → 3CO₂ + 4H₂O. What is the value of x?"
options:
  - "5"
  - "7"
  - "3"
  - "4"
answer: 0
marks: 1
misconception: balancing-oxygen
worked: |
  Count the oxygen atoms on the right-hand side.
  3CO₂ contains 3 × 2 = 6 O atoms; 4H₂O contains 4 × 1 = 4 O atoms. Total = 10 O atoms.
  Each O₂ molecule supplies 2 atoms, so x = 10 / 2 = 5.
```

```yaml
type: mcq
topic: "C4 Chemical Calculations"
stem: "50 cm³ of methane is burned completely in oxygen. All volumes are measured at room temperature and pressure. What volume of oxygen reacts? (CH₄ + 2O₂ → CO₂ + 2H₂O)"
options:
  - "25 cm³"
  - "50 cm³"
  - "100 cm³"
  - "200 cm³"
answer: 2
marks: 1
misconception: reacting-gas-volumes
worked: |
  At the same temperature and pressure, equal volumes of gases contain equal numbers of moles, so volumes react in the same ratio as the moles.
  The ratio CH₄ : O₂ is 1 : 2.
  Volume of O₂ = 2 × 50 = 100 cm³.
```

```yaml
type: short
topic: "C4 Chemical Calculations"
stem: "Calculate the relative molecular mass, Mᵣ, of magnesium nitrate, Mg(NO₃)₂. (Aᵣ: N = 14, O = 16, Mg = 24)"
accepted: ["148"]
marks: 1
misconception: bracket-multiplication
worked: |
  The bracket subscript multiplies everything inside it.
  One NO₃ group = 14 + (3 × 16) = 62, and there are two of them: 2 × 62 = 124.
  Mᵣ = 24 + 124 = 148.
```

```yaml
type: short
topic: "C4 Chemical Calculations"
stem: "0.050 mol of zinc reacts completely with excess dilute sulfuric acid. Calculate the volume, in dm³, of hydrogen produced at r.t.p. (Molar gas volume = 24 dm³/mol)"
accepted: ["1.2", "1.2 dm3", "1.20", "1.20 dm3"]
marks: 1
misconception: molar-gas-volume
worked: |
  Zn + H₂SO₄ → ZnSO₄ + H₂, a 1 : 1 ratio, so n(H₂) = 0.050 mol.
  V = n × 24 = 0.050 × 24 = 1.2 dm³.
```

```yaml
type: short
topic: "C4 Chemical Calculations"
stem: "A preparation has a theoretical yield of 8.00 g of copper(II) sulfate crystals, but only 6.00 g is obtained. Calculate the percentage yield."
accepted: ["75", "75%", "75 %", "75 percent"]
marks: 1
misconception: percent-yield-inversion
worked: |
  Percentage yield = (actual yield / theoretical yield) × 100.
  = (6.00 / 8.00) × 100 = 75%.
```

```yaml
type: short
topic: "C4 Chemical Calculations"
stem: "A hydrocarbon has the empirical formula CH₂ and a relative molecular mass of 56. State its molecular formula. (Aᵣ: H = 1, C = 12)"
accepted: ["C4H8"]
marks: 1
misconception: empirical-to-molecular
worked: |
  Empirical formula mass of CH₂ = 12 + 2 = 14.
  n = 56 / 14 = 4.
  Molecular formula = (CH₂)₄ = C₄H₈.
```

```yaml
type: mcq
topic: "C11 Organic Chemistry"
stem: "What is the general formula of the alkenes?"
options:
  - "CₙH₂ₙ₋₂"
  - "CₙH₂ₙ"
  - "CₙH₂ₙ₊₁"
  - "CₙH₂ₙ₊₂"
answer: 1
marks: 1
misconception: homologous-general-formula
worked: |
  Alkenes are unsaturated hydrocarbons containing a C=C double bond; their general formula is CₙH₂ₙ
  (ethene C₂H₄, propene C₃H₆, butene C₄H₈).
  CₙH₂ₙ₊₂ is the alkanes, the saturated series.
```

```yaml
type: mcq
topic: "C11 Organic Chemistry"
stem: "Aqueous bromine is shaken with a hydrocarbon. Which observation shows that the hydrocarbon is unsaturated?"
options:
  - "The mixture turns milky white"
  - "Effervescence is seen"
  - "The solution turns from colourless to orange"
  - "The orange bromine solution is decolourised quickly"
answer: 3
marks: 1
misconception: bromine-water-test
worked: |
  An unsaturated hydrocarbon has a C=C double bond, which undergoes an addition reaction with bromine.
  The orange (or yellow-brown) bromine is used up, so the solution rapidly becomes colourless, it is decolourised.
  A saturated alkane gives no change in the dark, because it has no C=C to add across.
```

```yaml
type: mcq
topic: "C11 Organic Chemistry"
stem: "Ethanoic acid is warmed with ethanol in the presence of an acid catalyst. What is the organic product?"
options:
  - "Ethyl ethanoate"
  - "Ethyl ethanol"
  - "Ethanoic ethanoate"
  - "Ethane"
answer: 0
marks: 1
misconception: ester-naming-order
worked: |
  A carboxylic acid plus an alcohol gives an ester (an esterification reaction).
  The first part of the ester name comes from the ALCOHOL (ethanol → ethyl) and the second part from the ACID (ethanoic acid → ethanoate).
  So the product is ethyl ethanoate, CH₃COOC₂H₅, and water is also formed.
```

```yaml
type: mcq
topic: "C11 Organic Chemistry"
stem: "Which ester is formed when propanoic acid reacts with methanol?"
options:
  - "Propyl methanoate"
  - "Propanoic methanoate"
  - "Methyl propanol"
  - "Methyl propanoate"
answer: 3
marks: 1
misconception: ester-naming-order
worked: |
  The alkyl part of the name comes from the alcohol: methanol → methyl.
  The -oate part comes from the acid: propanoic acid → propanoate.
  The ester is therefore methyl propanoate. Propyl methanoate would be made from propanol and methanoic acid, the two halves swapped over.
```

```yaml
type: mcq
topic: "C11 Organic Chemistry"
stem: "A long-chain alkane is cracked. Which pair of products is possible?"
options:
  - "Two alkenes only"
  - "A carboxylic acid and water"
  - "An alcohol and hydrogen"
  - "A shorter alkane and an alkene"
answer: 3
marks: 1
misconception: cracking-products
worked: |
  Cracking breaks a large, less useful alkane into smaller molecules using heat and a catalyst.
  The atoms must balance, so the products are a shorter-chain alkane plus one or more alkenes (hydrogen may also be released).
  For example: C₁₀H₂₂ → C₈H₁₈ + C₂H₄.
  No oxygen atoms are present in the alkane, so an alcohol or a carboxylic acid cannot be formed.
```

```yaml
type: mcq
topic: "C11 Organic Chemistry"
stem: "Poly(ethene) is made by addition polymerisation. What is its monomer?"
options:
  - "Ethanol"
  - "Ethene"
  - "Ethanoic acid"
  - "Ethane"
answer: 1
marks: 1
misconception: monomer-repeat-unit
worked: |
  Addition polymerisation requires a C=C double bond, which opens up so that many monomers join end to end.
  Ethene, CH₂=CH₂, is the monomer; the repeat unit of poly(ethene) is, CH₂, CH₂, .
  Ethane has no double bond, so it cannot polymerise.
```

```yaml
type: mcq
topic: "C11 Organic Chemistry"
stem: "Which pair of compounds are isomers of each other?"
options:
  - "Propane and butane"
  - "Ethanol and ethanoic acid"
  - "Butane and 2-methylpropane"
  - "Ethane and ethene"
answer: 2
marks: 1
misconception: isomer-definition
worked: |
  Isomers have the SAME molecular formula but a different arrangement of atoms.
  Butane and 2-methylpropane are both C₄H₁₀, one is a straight chain, the other is branched. They are isomers.
  Ethane (C₂H₆) and ethene (C₂H₄) have different formulae, as do propane (C₃H₈) and butane (C₄H₁₀), and ethanol (C₂H₆O) and ethanoic acid (C₂H₄O₂).
```

```yaml
type: mcq
topic: "C11 Organic Chemistry"
stem: "Ethene is converted into ethanol in industry. Which reagent and condition are used?"
options:
  - "Aqueous bromine, in the dark"
  - "Steam, with a catalyst"
  - "Yeast, at about 30 °C"
  - "Hydrogen, with a nickel catalyst"
answer: 1
marks: 1
misconception: ethanol-routes
worked: |
  The industrial route is the addition of steam to ethene in the presence of a catalyst:
  C₂H₄ + H₂O → C₂H₅OH.
  Yeast is used in the OTHER route to ethanol, the fermentation of glucose, which does not start from ethene.
  Hydrogen plus a nickel catalyst adds across a C=C to give an alkane, not an alcohol.
```

```yaml
type: mcq
topic: "C11 Organic Chemistry"
stem: "Ethanol is warmed with acidified aqueous potassium manganate(VII). What is the organic product?"
options:
  - "Ethene"
  - "Ethane"
  - "Ethanoic acid"
  - "Ethyl ethanoate"
answer: 2
marks: 1
misconception: alcohol-oxidation
worked: |
  Acidified potassium manganate(VII) is an oxidising agent, and it oxidises a primary alcohol to a carboxylic acid.
  Ethanol → ethanoic acid, CH₃COOH.
  The purple manganate(VII) is decolourised as it is reduced.
  (An ester would need an alcohol AND an acid together; the oxidation alone gives the acid.)
```

```yaml
type: mcq
topic: "C11 Organic Chemistry"
stem: "Methane reacts with chlorine in ultraviolet light. What is the organic product of the first substitution step?"
options:
  - "CH₂=CH₂"
  - "CH₄Cl"
  - "CH₃Cl"
  - "C₂H₆"
answer: 2
marks: 1
misconception: substitution-vs-addition
worked: |
  Alkanes are saturated, so they cannot add chlorine, instead one hydrogen atom is SUBSTITUTED by a chlorine atom:
  CH₄ + Cl₂ → CH₃Cl + HCl (ultraviolet light needed).
  CH₄Cl is not a real formula: carbon can only form four bonds, so the H must leave when the Cl joins.
```

```yaml
type: mcq
topic: "C11 Organic Chemistry"
stem: "Nylon is a polyamide made by condensation polymerisation. Which linkage joins its monomers?"
options:
  - "An ionic bond"
  - "A carbon-to-carbon double bond"
  - "An amide linkage,, CONH, "
  - "An ester linkage,, COO, "
answer: 2
marks: 1
misconception: polymer-linkage
worked: |
  A polyamide is joined by amide linkages,, CONH, , formed between a, COOH group on one monomer and an, NH₂ group on the other, with a small molecule (water) eliminated each time.
  The ester linkage, COO, joins the monomers of a POLYESTER such as Terylene.
  C=C bonds are used up in ADDITION polymerisation, which is a different process and loses no small molecule.
```

```yaml
type: mcq
topic: "C11 Organic Chemistry"
stem: "Vegetable oils are hardened into margarine. Which substance is added across the C=C bonds?"
options:
  - "Oxygen, from the air"
  - "Hydrogen, using a nickel catalyst"
  - "Bromine, in the dark"
  - "Steam, using an acid catalyst"
answer: 1
marks: 1
misconception: hydrogenation-margarine
worked: |
  Vegetable oils are polyunsaturated: they contain several C=C double bonds and are liquid at room temperature.
  Hydrogen adds across those double bonds in the presence of a nickel catalyst, making the molecules more saturated.
  The chains then pack together more closely, raising the melting point, so the product is a solid spread.
```

```yaml
type: mcq
topic: "C11 Organic Chemistry"
stem: "A waste polyester is treated so that it breaks back down into the monomers it was made from. What is this process called?"
options:
  - "Chemical recycling by depolymerisation"
  - "Physical recycling by melting into pellets"
  - "Fractional distillation"
  - "Addition polymerisation"
answer: 0
marks: 1
misconception: recycling-types
worked: |
  Physical recycling melts the plastic and re-moulds it into pellets, the polymer chains stay intact, but the plastic is downgraded a little each time.
  Chemical recycling breaks the linkages, so the polymer is DEPOLYMERISED back to its monomers, which can then be purified and used to make new polymer.
  A polyester can be depolymerised because the ester linkages can be hydrolysed.
```

```yaml
type: mcq
topic: "C11 Organic Chemistry"
stem: "Dilute ethanoic acid is added to solid sodium carbonate. What is seen, and what gas is produced?"
options:
  - "Effervescence; a gas that pops with a lighted splint"
  - "Effervescence; a gas that turns limewater milky"
  - "A white precipitate forms; no gas is produced"
  - "No change; ethanoic acid is too weak to react"
answer: 1
marks: 1
misconception: weak-acid-still-reacts
worked: |
  Ethanoic acid is a WEAK acid, only partially ionised, but it is still an acid, so it shows the typical acid reactions.
  Acid + carbonate → salt + water + carbon dioxide:
  2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂.
  So there is effervescence, and the gas turns limewater milky, showing it is CO₂. The reaction is simply slower than with a strong acid of the same concentration.
```

```yaml
type: short
topic: "C11 Organic Chemistry"
stem: "Name the ester formed when butanoic acid reacts with ethanol."
accepted: ["ethyl butanoate"]
marks: 1
misconception: ester-naming-order
worked: |
  The alcohol supplies the first part of the name: ethanol → ethyl.
  The acid supplies the second part: butanoic acid → butanoate.
  The ester is ethyl butanoate.
```

```yaml
type: short
topic: "C11 Organic Chemistry"
stem: "State the number of structural isomers that have the molecular formula C₄H₁₀."
accepted: ["2", "two"]
marks: 1
misconception: isomer-counting
worked: |
  The two possible carbon skeletons are the straight chain (butane) and the branched chain (2-methylpropane).
  Any other drawing is one of these two rotated or redrawn, so there are 2 structural isomers.
```

```yaml
type: short
topic: "C11 Organic Chemistry"
stem: "Name the process in which yeast converts glucose into ethanol and carbon dioxide."
accepted: ["fermentation"]
marks: 1
misconception: ethanol-routes
worked: |
  Yeast contains enzymes that convert glucose into ethanol and carbon dioxide at around 30 °C in the absence of air.
  C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. The process is called fermentation.
```

```yaml
type: mcq
topic: "C3 Chemical Bonding & Structure"
stem: "Solid sodium chloride does not conduct electricity, but molten sodium chloride does. Why?"
options:
  - "In the solid the ions are held in fixed positions; when molten the ions are free to move"
  - "Melting releases delocalised electrons that carry the charge"
  - "The solid contains no ions; ions are only formed when it melts"
  - "The molten liquid contains molecules that can move"
answer: 0
marks: 1
misconception: conduction-needs-mobile-ions
worked: |
  Sodium chloride is a giant ionic lattice of Na⁺ and Cl⁻ ions in BOTH states, melting does not create ions.
  To conduct, charged particles must be free to MOVE. In the solid the ions are locked in fixed positions in the lattice.
  On melting, the lattice breaks down and the ions become mobile, so the liquid conducts (and is decomposed by the current).
  Delocalised electrons carry the current in metals, not in ionic compounds.
```

```yaml
type: mcq
topic: "C3 Chemical Bonding & Structure"
stem: "Why does diamond have a very high melting point?"
options:
  - "The forces between its molecules are very strong"
  - "It is a giant covalent structure; a great deal of energy is needed to break the many strong covalent bonds"
  - "It is an ionic lattice with strong electrostatic attractions"
  - "It contains delocalised electrons holding the lattice together"
answer: 1
marks: 1
misconception: giant-vs-simple-covalent
worked: |
  Diamond is a GIANT COVALENT structure: every carbon atom is joined to four others by strong covalent bonds throughout the whole crystal.
  Melting means breaking a huge number of these strong covalent bonds, which needs a very large amount of energy.
  Diamond has no separate molecules, so 'forces between molecules' is the wrong explanation, that is the reason simple molecular substances melt easily.
```

```yaml
type: mcq
topic: "C3 Chemical Bonding & Structure"
stem: "Why do metals conduct electricity?"
options:
  - "They contain delocalised electrons that are free to move through the lattice"
  - "They contain molecules that can slide over one another"
  - "They contain ions that are free to move"
  - "Their atoms vibrate and pass on the charge"
answer: 0
marks: 1
misconception: metallic-conduction
worked: |
  In metallic bonding, the metal atoms lose their valence electrons into a 'sea' of delocalised electrons, leaving a lattice of positive ions.
  These delocalised electrons can move through the whole structure, so they carry charge, the metal conducts, in the solid AND the liquid state.
  The positive ions themselves stay in the lattice.
```

```yaml
type: mcq
topic: "C3 Chemical Bonding & Structure"
stem: "Which molecule contains a triple bond?"
options:
  - "O₂"
  - "H₂O"
  - "CH₄"
  - "N₂"
answer: 3
marks: 1
misconception: shared-pairs-counting
worked: |
  A nitrogen atom has 5 valence electrons and needs 3 more for a noble gas configuration, so the two atoms share THREE pairs of electrons: N≡N.
  O₂ has a double bond (two shared pairs); H₂O and CH₄ contain only single bonds.
```

```yaml
type: mcq
topic: "C3 Chemical Bonding & Structure"
stem: "Brass is an alloy of copper and zinc. Why is brass harder than pure copper?"
options:
  - "The zinc atoms form ionic bonds with the copper atoms"
  - "Brass contains more delocalised electrons than copper"
  - "The different-sized zinc atoms disrupt the regular layers, so the layers cannot slide over each other easily"
  - "The zinc atoms fill the gaps, so there are no delocalised electrons left"
answer: 2
marks: 1
misconception: alloy-hardness
worked: |
  In a pure metal the atoms are the same size and are arranged in regular layers that can slide over one another, which is why pure metals are soft and malleable.
  In an alloy, atoms of a different size are mixed in. They distort the regular arrangement, so the layers no longer slide easily.
  The alloy is therefore harder and stronger. Alloying does not change the bonding, it is still metallic.
```

```yaml
type: mcq
topic: "C3 Chemical Bonding & Structure"
stem: "Graphite conducts electricity but diamond does not. Why?"
options:
  - "Diamond has no valence electrons"
  - "Graphite has weak covalent bonds that break to release electrons"
  - "In graphite each carbon atom forms only three covalent bonds, leaving one delocalised electron per atom"
  - "Graphite contains free-moving ions between its layers"
answer: 2
marks: 1
misconception: graphite-delocalised-electron
worked: |
  In diamond every carbon atom uses all four of its valence electrons in covalent bonds, so there are no free electrons to carry charge.
  In graphite each carbon atom is bonded to only THREE others, so the fourth valence electron of each atom is delocalised between the layers.
  These delocalised electrons can move, so graphite conducts electricity along its layers.
```

```yaml
type: mcq
topic: "C3 Chemical Bonding & Structure"
stem: "Substance X has a high melting point, does not conduct electricity when solid, conducts when molten, and dissolves in water. What is its structure?"
options:
  - "Simple molecular"
  - "Metallic"
  - "Giant ionic"
  - "Giant covalent"
answer: 2
marks: 1
misconception: structure-property-deduction
worked: |
  Work through the clues:
  High melting point rules out simple molecular (those melt easily).
  Conducts when molten but NOT when solid rules out metallic (metals conduct in both states) and giant covalent (diamond and SiO₂ never conduct; graphite conducts even when solid).
  Conducting only when the lattice breaks down, plus solubility in water, is the fingerprint of a GIANT IONIC structure.
```

```yaml
type: mcq
topic: "C3 Chemical Bonding & Structure"
stem: "What is the formula of the compound formed between aluminium and oxygen?"
options:
  - "Al₂O₃"
  - "Al₃O₂"
  - "AlO"
  - "AlO₂"
answer: 0
marks: 1
misconception: ion-charge-crossover
worked: |
  Aluminium is in Group 13, so it forms Al³⁺; oxygen is in Group 16, so it forms O²⁻.
  The compound must be neutral overall. Two Al³⁺ ions give 6+, and three O²⁻ ions give 6−.
  The formula is Al₂O₃.
  A common slip is to write the charges as the subscripts without swapping them over.
```

```yaml
type: mcq
topic: "C3 Chemical Bonding & Structure"
stem: "Iodine has strong covalent bonds within each I₂ molecule, yet it melts at only 114 °C. Why?"
options:
  - "Iodine contains delocalised electrons"
  - "Melting only has to overcome the weak forces of attraction between the molecules"
  - "The covalent bonds inside the molecules break easily"
  - "Iodine forms a giant covalent lattice"
answer: 1
marks: 1
misconception: intermolecular-vs-covalent
worked: |
  Iodine is a simple molecular substance. It has two kinds of attraction:
  (i) the strong covalent bond INSIDE each I₂ molecule, and
  (ii) the weak forces of attraction BETWEEN the molecules.
  Melting separates whole molecules from each other, it does not break the covalent bonds, so only the weak intermolecular forces have to be overcome. Little energy is needed, so the melting point is low.
```

```yaml
type: mcq
topic: "C3 Chemical Bonding & Structure"
stem: "Which statement best describes metallic bonding?"
options:
  - "The attraction between neutral metal atoms and free protons"
  - "The electrostatic attraction between oppositely charged ions"
  - "The electrostatic attraction between a lattice of positive ions and a sea of delocalised electrons"
  - "The sharing of pairs of electrons between metal atoms"
answer: 2
marks: 1
misconception: metallic-bonding-definition
worked: |
  Metal atoms release their valence electrons into a shared, delocalised 'sea'.
  This leaves a regular lattice of positively charged metal ions, and the bonding is the strong electrostatic attraction between those positive ions and the delocalised electrons.
  Attraction between oppositely charged ions describes IONIC bonding.
```

```yaml
type: mcq
topic: "C3 Chemical Bonding & Structure"
stem: "Which property of poly(ethene) is explained by it being a macromolecule made of long chains?"
options:
  - "It softens over a range of temperatures rather than melting at one sharp temperature"
  - "It dissolves readily in water"
  - "It conducts electricity when molten"
  - "It has a very high melting point, like diamond"
answer: 0
marks: 1
misconception: polymer-structure-property
worked: |
  Poly(ethene) is a mixture of very long covalent chains of different lengths, held together by weak forces between the chains.
  Because the chains are not all the same length, there is no single melting point, the plastic softens over a range of temperatures.
  It has no ions or delocalised electrons, so it does not conduct, and it is not soluble in water.
```

```yaml
type: short
topic: "C3 Chemical Bonding & Structure"
stem: "Name the type of structure of silicon dioxide, SiO₂."
accepted: ["giant covalent", "giant molecular", "macromolecular", "giant covalent structure", "giant molecular structure"]
marks: 1
misconception: structure-classification
worked: |
  Every silicon atom in SiO₂ is covalently bonded to oxygen atoms and vice versa, right through the crystal, with no separate molecules.
  This is a giant covalent (giant molecular) structure, hence its very high melting point and its lack of electrical conductivity.
```

```yaml
type: short
topic: "C3 Chemical Bonding & Structure"
stem: "State the charge on the ion formed by an atom of sulfur."
accepted: ["2-", "-2", "2 minus", "minus 2"]
marks: 1
misconception: ion-charge-from-group
worked: |
  Sulfur is in Group 16, so it has 6 valence electrons.
  It gains 2 electrons to reach the electron arrangement of argon, forming the sulfide ion, S²⁻.
  The charge is 2−.
```

```yaml
type: mcq
topic: "C7 Redox Chemistry & Electrochemistry"
stem: "Molten lead(II) bromide, PbBr₂, is electrolysed using inert electrodes. What forms at the cathode?"
options:
  - "Lead"
  - "Oxygen"
  - "Hydrogen"
  - "Bromine"
answer: 0
marks: 1
misconception: electrode-polarity
worked: |
  The cathode is the NEGATIVE electrode, so it attracts the positive ions (cations).
  In molten PbBr₂ the only cation is Pb²⁺, which gains electrons there:
  Pb²⁺ + 2e⁻ → Pb (reduction).
  Bromine is released at the anode: 2Br⁻ → Br₂ + 2e⁻. There is no water present, so no hydrogen or oxygen can form.
```

```yaml
type: mcq
topic: "C7 Redox Chemistry & Electrochemistry"
stem: "Very dilute aqueous sodium chloride is electrolysed using inert electrodes. What is formed at the anode?"
options:
  - "Hydrogen"
  - "Chlorine"
  - "Oxygen"
  - "Sodium"
answer: 2
marks: 1
misconception: selective-discharge-concentration
worked: |
  In aqueous solution two anions are present: Cl⁻ from the salt and OH⁻ from the water.
  When the chloride is very DILUTE, the hydroxide ion is discharged in preference, giving oxygen:
  4OH⁻ → 2H₂O + O₂ + 4e⁻.
  Chlorine is only produced when the solution is CONCENTRATED, because a high concentration of chloride ions favours the discharge of Cl⁻. This concentration effect is the key idea in this question.
```

```yaml
type: mcq
topic: "C7 Redox Chemistry & Electrochemistry"
stem: "Concentrated aqueous sodium chloride is electrolysed using inert electrodes. What is produced at the anode?"
options:
  - "Sodium"
  - "Hydrogen"
  - "Oxygen"
  - "Chlorine"
answer: 3
marks: 1
misconception: selective-discharge-concentration
worked: |
  Both Cl⁻ and OH⁻ ions travel to the anode.
  The solution is CONCENTRATED in chloride ions, so chloride is discharged in preference:
  2Cl⁻ → Cl₂ + 2e⁻.
  A pale green, choking gas that bleaches damp litmus paper is seen. (At the cathode, hydrogen is released because sodium is too reactive to be discharged from an aqueous solution.)
```

```yaml
type: mcq
topic: "C7 Redox Chemistry & Electrochemistry"
stem: "Aqueous copper(II) sulfate is electrolysed with carbon electrodes. What is deposited at the cathode?"
options:
  - "Sulfur"
  - "Hydrogen"
  - "Copper"
  - "Oxygen"
answer: 2
marks: 1
misconception: selective-discharge-cation
worked: |
  The cations present are Cu²⁺ and H⁺ (from water).
  The LESS reactive metal ion is discharged in preference, and copper is below hydrogen in the reactivity series.
  So Cu²⁺ + 2e⁻ → Cu, and a pink-brown layer of copper coats the cathode.
  At the anode, OH⁻ is discharged in preference to SO₄²⁻ and oxygen is released, so the blue colour of the solution fades as Cu²⁺ is used up.
```

```yaml
type: mcq
topic: "C7 Redox Chemistry & Electrochemistry"
stem: "Molten aluminium oxide is electrolysed. Which half-equation represents the reaction at the cathode?"
options:
  - "2O²⁻ → O₂ + 4e⁻"
  - "Al → Al³⁺ + 3e⁻"
  - "Al³⁺ + 3e⁻ → Al"
  - "Al³⁺ → Al + 3e⁻"
answer: 2
marks: 1
misconception: half-equation-electrons
worked: |
  Reduction takes place at the cathode: the cation GAINS electrons.
  Al³⁺ + 3e⁻ → Al balances both the atoms and the charge (3+ and 3− give 0 on the left, 0 on the right).
  Al → Al³⁺ + 3e⁻ and Al³⁺ → Al + 3e⁻ both LOSE electrons, so they cannot be the cathode reaction.
  2O²⁻ → O₂ + 4e⁻ is the ANODE reaction, the oxidation of the oxide ion.
```

```yaml
type: mcq
topic: "C7 Redox Chemistry & Electrochemistry"
stem: "In the purification of copper by electrolysis, what are the two electrodes made of?"
options:
  - "Anode: carbon. Cathode: impure copper"
  - "Anode: impure copper. Cathode: carbon"
  - "Anode: pure copper. Cathode: impure copper"
  - "Anode: impure copper. Cathode: pure copper"
answer: 3
marks: 1
misconception: copper-purification-electrodes
worked: |
  The anode is the positive electrode, where oxidation happens, so it must be the IMPURE copper: Cu → Cu²⁺ + 2e⁻. The anode gradually dissolves and the impurities drop off as sludge.
  The Cu²⁺ ions move to the cathode and are reduced back to copper: Cu²⁺ + 2e⁻ → Cu.
  The cathode is a thin sheet of pure copper and gains mass as pure copper is deposited on it.
```

```yaml
type: mcq
topic: "C7 Redox Chemistry & Electrochemistry"
stem: "An iron spoon is to be electroplated with silver. How should the spoon be connected, and what should the electrolyte be?"
options:
  - "The spoon is the anode; the electrolyte is pure water"
  - "The spoon is the cathode; the electrolyte contains silver ions"
  - "The spoon is the anode; the electrolyte contains silver ions"
  - "The spoon is the cathode; the electrolyte contains iron ions"
answer: 1
marks: 1
misconception: electroplating-setup
worked: |
  The metal to be plated must GAIN the metal, so it must be the electrode where reduction occurs, the cathode (negative electrode).
  Ag⁺ + e⁻ → Ag deposits a thin, even layer of silver on the spoon.
  The electrolyte must contain the ions of the plating metal (a silver salt solution), and the anode is usually silver, so it dissolves and keeps the concentration of Ag⁺ steady.
  Electroplating is used to improve appearance and to protect the object from corrosion.
```

```yaml
type: mcq
topic: "C7 Redox Chemistry & Electrochemistry"
stem: "In the reaction ZnO + C → Zn + CO, which species is oxidised?"
options:
  - "Zinc oxide"
  - "Zinc"
  - "Carbon monoxide"
  - "Carbon"
answer: 3
marks: 1
misconception: oxidation-state-bookkeeping
worked: |
  Track the oxidation states.
  Carbon: 0 in C, then +2 in CO, an INCREASE, so carbon is oxidised (it is the reducing agent).
  Zinc: +2 in ZnO, then 0 in Zn, a decrease, so zinc is reduced.
  Carbon also gains oxygen while zinc oxide loses it, which gives the same answer using the oxygen definition.
```

```yaml
type: mcq
topic: "C7 Redox Chemistry & Electrochemistry"
stem: "Colourless aqueous potassium iodide is added to a solution of an oxidising agent. What is observed?"
options:
  - "The solution turns brown as iodine is formed"
  - "A white precipitate forms"
  - "The solution turns purple"
  - "The solution stays colourless and effervesces"
answer: 0
marks: 1
misconception: oxidising-agent-test
worked: |
  An oxidising agent removes electrons from the iodide ion:
  2I⁻ → I₂ + 2e⁻.
  The iodine formed colours the solution brown (a reddish-brown or yellow-brown solution).
  So a colourless-to-brown change with aqueous potassium iodide is the standard test for an oxidising agent.
```

```yaml
type: mcq
topic: "C7 Redox Chemistry & Electrochemistry"
stem: "A simple cell is made by placing two different metals in an electrolyte. Which change increases the voltage produced?"
options:
  - "Using two metals that are further apart in the reactivity series"
  - "Using pure water instead of the electrolyte"
  - "Using two pieces of the same metal"
  - "Using two metals that are closer together in the reactivity series"
answer: 0
marks: 1
misconception: simple-cell-voltage
worked: |
  In a simple cell the more reactive metal loses electrons more readily and becomes the negative electrode.
  The bigger the DIFFERENCE in reactivity between the two metals, the greater the tendency for electrons to flow, so the larger the voltage.
  Two identical metals give a voltage of zero, and pure water contains too few ions to complete the circuit.
```

```yaml
type: mcq
topic: "C7 Redox Chemistry & Electrochemistry"
stem: "Which statement about a hydrogen fuel cell is correct?"
options:
  - "It produces carbon dioxide as well as water"
  - "It stores electricity and must be recharged from the mains"
  - "It burns hydrogen to boil water and drive a turbine"
  - "It uses hydrogen and oxygen to produce electricity, and water is the only product"
answer: 3
marks: 1
misconception: fuel-cell-products
worked: |
  In a hydrogen fuel cell, hydrogen is oxidised and oxygen is reduced at separate electrodes, and the electrons transferred flow round the external circuit as an electric current.
  The overall reaction is 2H₂ + O₂ → 2H₂O, so water is the only product, no carbon dioxide, because there is no carbon in the fuel.
  It is not a rechargeable store like a battery: it keeps producing electricity as long as the fuel is supplied.
```

```yaml
type: short
topic: "C7 Redox Chemistry & Electrochemistry"
stem: "Give the oxidation state of sulfur in H₂SO₄."
accepted: ["+6", "6", "plus 6", "VI"]
marks: 1
misconception: oxidation-state-sign
worked: |
  Hydrogen is +1 and oxygen is −2 in this compound.
  The molecule is neutral, so: 2(+1) + x + 4(−2) = 0.
  2 + x − 8 = 0, so x = +6.
```

```yaml
type: short
topic: "C7 Redox Chemistry & Electrochemistry"
stem: "Acidified aqueous potassium manganate(VII) is added to a reducing agent. State the colour change seen."
accepted: ["purple to colourless", "purple to colorless", "from purple to colourless", "from purple to colorless"]
marks: 1
misconception: reducing-agent-test
worked: |
  The manganate(VII) ion is purple. A reducing agent donates electrons to it, reducing it to the Mn²⁺ ion, which in dilute solution is effectively colourless.
  So the purple solution is decolourised, the standard test for a reducing agent.
```

```yaml
type: mcq
topic: "C5 Acid-Base Chemistry"
stem: "Barium sulfate is insoluble in water. Which method is used to prepare a pure, dry sample of it?"
options:
  - "Heat barium nitrate with sulfuric acid until it is dry"
  - "Mix two solutions containing Ba²⁺ and SO₄²⁻, then filter, wash and dry the precipitate"
  - "Add excess barium metal to sulfuric acid, then filter and crystallise"
  - "Titrate barium hydroxide against sulfuric acid, then evaporate"
answer: 1
marks: 1
misconception: salt-prep-route
worked: |
  An INSOLUBLE salt is made by precipitation: mix two soluble solutions that supply the two ions, e.g. barium nitrate and sodium sulfate.
  Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s).
  The precipitate is then filtered off, washed with distilled water to remove the soluble spectator ions, and dried.
  Titration and crystallisation are used for SOLUBLE salts, and evaporating the mixture would leave the soluble by-product behind with the salt.
```

```yaml
type: mcq
topic: "C5 Acid-Base Chemistry"
stem: "Which oxide is amphoteric?"
options:
  - "CO"
  - "ZnO"
  - "SO₂"
  - "MgO"
answer: 1
marks: 1
misconception: amphoteric-oxide
worked: |
  An amphoteric oxide reacts with acids AND with alkalis to form a salt and water.
  Zinc oxide does both: with acid, ZnO + 2HCl → ZnCl₂ + H₂O; with alkali it dissolves in aqueous sodium hydroxide. Aluminium oxide behaves in the same way.
  MgO is basic (metal oxide, reacts with acids only), SO₂ is acidic (non-metal oxide), and CO is neutral.
```

```yaml
type: mcq
topic: "C5 Acid-Base Chemistry"
stem: "What is the ionic equation for the neutralisation of any strong acid by any strong alkali?"
options:
  - "H⁺(aq) + OH⁻(aq) → H₂O(aq)"
  - "HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)"
  - "H⁺(aq) + OH⁻(aq) → H₂O(l)"
  - "H₂⁺(aq) + O²⁻(aq) → H₂O(l)"
answer: 2
marks: 1
misconception: neutralisation-ionic-equation
worked: |
  A strong acid provides H⁺(aq) ions and a strong alkali provides OH⁻(aq) ions; every other ion is a spectator.
  The only reaction is H⁺(aq) + OH⁻(aq) → H₂O(l).
  Water is a liquid, so the state symbol must be (l), not (aq).
  The full equation HCl + NaOH → NaCl + H₂O is correct chemistry, but it applies to one particular pair only, it is not the general ionic equation.
```

```yaml
type: mcq
topic: "C5 Acid-Base Chemistry"
stem: "Equal volumes of 1.0 mol/dm³ hydrochloric acid and 1.0 mol/dm³ ethanoic acid are compared. Which statement is correct?"
options:
  - "The hydrochloric acid has the lower pH because it is completely ionised"
  - "The hydrochloric acid has the lower pH because it is more concentrated"
  - "Both have the same pH because they have the same concentration"
  - "The ethanoic acid has the lower pH because it contains more hydrogen atoms"
answer: 0
marks: 1
misconception: strong-vs-weak-acid
worked: |
  Both solutions have the same CONCENTRATION, so concentration cannot be the reason.
  Hydrochloric acid is a STRONG acid, it ionises completely in water, so it produces a high concentration of H⁺(aq).
  Ethanoic acid is a WEAK acid, it ionises only partially, so it produces far fewer H⁺(aq) ions.
  More H⁺(aq) means a lower pH, so the hydrochloric acid has the lower pH. Note that both acids would eventually neutralise the same amount of alkali.
```

```yaml
type: mcq
topic: "C5 Acid-Base Chemistry"
stem: "Which is the best method to prepare pure copper(II) sulfate crystals from dilute sulfuric acid?"
options:
  - "Add copper(II) oxide until it is in excess, filter off the unreacted solid, then crystallise the filtrate"
  - "Add aqueous sodium hydroxide until the acid is neutralised, then evaporate"
  - "Titrate the acid with aqueous copper(II) sulfate"
  - "Add copper metal until it is in excess, filter, then crystallise"
answer: 0
marks: 1
misconception: excess-insoluble-base
worked: |
  Copper is below hydrogen in the reactivity series, so copper metal does NOT react with dilute sulfuric acid, that route fails.
  Copper(II) oxide is an insoluble base, so it can be added in EXCESS: it keeps reacting until all the acid is used up, and the leftover solid is simply filtered off.
  CuO + H₂SO₄ → CuSO₄ + H₂O.
  The filtrate is then heated to the point of crystallisation, cooled and the crystals are dried.
  Sodium hydroxide is soluble, so its excess could not be filtered off and the product would be contaminated.
```

```yaml
type: mcq
topic: "C5 Acid-Base Chemistry"
stem: "Which salt must be prepared by titration rather than by adding an excess solid?"
options:
  - "Magnesium nitrate"
  - "Zinc sulfate"
  - "Copper(II) chloride"
  - "Potassium nitrate"
answer: 3
marks: 1
misconception: titration-route-choice
worked: |
  The 'add an excess and filter' route only works when one reactant is INSOLUBLE, so that the leftover can be filtered off.
  Potassium nitrate would be made from nitric acid and potassium hydroxide, both are soluble, so an excess could not be removed by filtration. The exact volumes must be found by titration first.
  The other three salts can be made from an insoluble oxide, hydroxide, carbonate or (for zinc) the metal itself, added in excess.
```

```yaml
type: mcq
topic: "C5 Acid-Base Chemistry"
stem: "Which compound is INSOLUBLE in water?"
options:
  - "Ammonium chloride"
  - "Potassium carbonate"
  - "Lead(II) chloride"
  - "Sodium sulfate"
answer: 2
marks: 1
misconception: solubility-rules
worked: |
  Apply the solubility rules:
  All sodium, potassium and ammonium salts are soluble, that rules out three of the options.
  Chlorides are soluble EXCEPT silver chloride and lead(II) chloride.
  So lead(II) chloride is the insoluble one.
```

```yaml
type: mcq
topic: "C5 Acid-Base Chemistry"
stem: "A farmer's soil is too acidic. Which substance is added to correct the pH?"
options:
  - "Calcium hydroxide"
  - "Ammonium chloride"
  - "Sulfuric acid"
  - "Sodium chloride"
answer: 0
marks: 1
misconception: soil-ph-control
worked: |
  Acidic soil is treated with a base, which neutralises the excess acid and raises the pH.
  Calcium hydroxide (slaked lime) is used because it is a cheap, mildly alkaline base.
  Sodium chloride is neutral, sulfuric acid would make the problem worse, and adding an ammonium salt to an alkaline soil releases ammonia, losing nitrogen.
```

```yaml
type: mcq
topic: "C5 Acid-Base Chemistry"
stem: "In the Haber process, where do the two raw material gases come from?"
options:
  - "Nitrogen from the air and hydrogen from the electrolysis of molten sodium chloride"
  - "Nitrogen from the air and hydrogen from cracking"
  - "Nitrogen from nitric acid and hydrogen from limewater"
  - "Nitrogen from ammonium salts and hydrogen from the air"
answer: 1
marks: 1
misconception: haber-raw-materials
worked: |
  Nitrogen is obtained from the air, which is about 78% nitrogen.
  Hydrogen is obtained from cracking hydrocarbons.
  The two gases are then passed over an iron catalyst in a reversible reaction:
  N₂(g) + 3H₂(g) ⇌ 2NH₃(g).
  Molten sodium chloride contains no hydrogen at all, so it cannot be a source of it.
```

```yaml
type: mcq
topic: "C5 Acid-Base Chemistry"
stem: "An unknown white solid is warmed with aqueous sodium hydroxide and a gas is released that turns damp red litmus paper blue. Which ion does the solid contain?"
options:
  - "Cl⁻"
  - "CO₃²⁻"
  - "NH₄⁺"
  - "Ca²⁺"
answer: 2
marks: 1
misconception: ammonium-salt-plus-base
worked: |
  A base displaces ammonia from an ammonium salt on warming:
  NH₄⁺ + OH⁻ → NH₃ + H₂O.
  Ammonia is the only common alkaline gas, so it is the one that turns damp RED litmus paper BLUE.
  A carbonate would fizz with acid (not with alkali) and give CO₂, which turns limewater milky.
```

```yaml
type: short
topic: "C5 Acid-Base Chemistry"
stem: "Name the salt formed when nitric acid reacts with potassium hydroxide."
accepted: ["potassium nitrate", "KNO3"]
marks: 1
misconception: salt-naming
worked: |
  Acid + alkali → salt + water.
  The metal part of the salt comes from the alkali (potassium) and the rest comes from the acid (nitric acid → nitrate).
  The salt is potassium nitrate, KNO₃.
```

```yaml
type: short
topic: "C5 Acid-Base Chemistry"
stem: "Name the catalyst used in the Haber process."
accepted: ["iron", "Fe"]
marks: 1
misconception: haber-catalyst
worked: |
  The Haber process combines nitrogen and hydrogen over a catalyst of IRON.
  The catalyst speeds up the rate at which equilibrium is reached; it does not change the amount of ammonia obtained at equilibrium.
```

```yaml
type: mcq
topic: "C8 Patterns in the Periodic Table"
stem: "Chlorine is bubbled into colourless aqueous potassium bromide. What is observed, and why?"
options:
  - "A white precipitate forms, because potassium chloride is insoluble"
  - "The solution stays colourless, because bromine is more reactive than chlorine"
  - "The solution turns purple, because iodine is displaced"
  - "The solution turns orange, because chlorine is more reactive and displaces bromine"
answer: 3
marks: 1
misconception: halogen-displacement
worked: |
  Reactivity decreases DOWN Group 17, so chlorine is more reactive than bromine.
  A more reactive halogen displaces a less reactive halogen from its salt:
  Cl₂ + 2KBr → 2KCl + Br₂.
  The bromine released colours the solution orange (or yellow-brown). Iodine would give a brown solution, but there is no iodide present here.
```

```yaml
type: mcq
topic: "C8 Patterns in the Periodic Table"
stem: "How does the reactivity of the Group 1 metals change from lithium to potassium, and why?"
options:
  - "It increases, because the outer electron is further from the nucleus and is lost more easily"
  - "It decreases, because the atoms get heavier and react more slowly"
  - "It increases, because the atoms gain electrons more easily down the group"
  - "It stays the same, because they all have one valence electron"
answer: 0
marks: 1
misconception: group1-reactivity-trend
worked: |
  Group 1 metals react by LOSING their single outer electron.
  Going down the group, each atom has more electron shells, so the outer electron is further from the nucleus and is shielded by more inner shells.
  The attraction to the nucleus is weaker, so the electron is lost more easily and the metal is more reactive.
  Potassium therefore reacts more vigorously with water than lithium does.
```

```yaml
type: mcq
topic: "C8 Patterns in the Periodic Table"
stem: "Which property is typical of the transition elements but NOT of the Group 1 metals?"
options:
  - "They form compounds in which the metal has more than one oxidation state"
  - "They conduct electricity"
  - "They form positive ions"
  - "They are shiny when freshly cut"
answer: 0
marks: 1
misconception: transition-element-properties
worked: |
  The transition elements have variable oxidation states, iron, for example, forms Fe²⁺ and Fe³⁺ compounds.
  Group 1 metals only ever form ions with a single +1 charge.
  Transition metals are also typically much denser, have much higher melting points, form coloured compounds, and act as catalysts.
  Conducting electricity, being shiny and forming positive ions are shared by all metals, so they do not distinguish the two families.
```

```yaml
type: mcq
topic: "C8 Patterns in the Periodic Table"
stem: "Copper(II) carbonate decomposes when heated gently, but sodium carbonate does not decompose in a Bunsen flame. Why?"
options:
  - "Copper carbonate is a transition metal compound, so it must be unstable to heat"
  - "Sodium carbonate has a lower melting point"
  - "Sodium is higher in the reactivity series, so its carbonate is more thermally stable"
  - "Sodium carbonate is soluble in water, so it cannot decompose"
answer: 2
marks: 1
misconception: thermal-stability-carbonates
worked: |
  The thermal stability of a metal carbonate increases as the metal gets MORE reactive (higher in the reactivity series).
  Copper is low in the series, so copper(II) carbonate decomposes easily on gentle heating:
  CuCO₃ → CuO + CO₂ (green solid to black solid).
  Sodium is near the top of the series, so sodium carbonate holds on to its carbon dioxide and is not decomposed by a Bunsen flame.
```

```yaml
type: mcq
topic: "C8 Patterns in the Periodic Table"
stem: "Metal X displaces copper from aqueous copper(II) sulfate, but no reaction occurs when X is added to aqueous zinc sulfate. Where is X in the reactivity series?"
options:
  - "Above zinc"
  - "Below copper"
  - "Between zinc and copper"
  - "Above magnesium"
answer: 2
marks: 1
misconception: reactivity-series-deduction
worked: |
  A metal displaces another metal from solution only if it is MORE reactive than that metal.
  X displaces copper, so X is more reactive than copper.
  X does not displace zinc, so X is less reactive than zinc.
  Therefore X sits between zinc and copper in the reactivity series.
```

```yaml
type: mcq
topic: "C8 Patterns in the Periodic Table"
stem: "Blocks of magnesium are bolted to an underground steel pipe. Why does this protect the pipe from rusting?"
options:
  - "Magnesium reacts with the iron to form a rust-proof alloy"
  - "Magnesium is more reactive, so it loses electrons in preference and corrodes instead of the iron"
  - "Magnesium is less reactive, so it takes electrons from the iron"
  - "The magnesium forms a physical barrier that keeps out air and water"
answer: 1
marks: 1
misconception: sacrificial-protection
worked: |
  This is sacrificial protection.
  Magnesium is HIGHER in the reactivity series than iron, so it has a greater tendency to form positive ions.
  The magnesium loses electrons in preference to the iron, and those electrons flow to the pipe. The iron is not oxidised, so it does not rust, the magnesium corrodes instead and is replaced periodically.
  Note that the blocks do not cover the pipe, so this is not a barrier method (that is what paint, grease, plastic and galvanising do).
```

```yaml
type: mcq
topic: "C8 Patterns in the Periodic Table"
stem: "Which two substances must both be present for iron to rust?"
options:
  - "Oxygen and carbon dioxide"
  - "Water and carbon dioxide"
  - "Nitrogen and water"
  - "Oxygen and water"
answer: 3
marks: 1
misconception: rusting-conditions
worked: |
  Rusting is the oxidation of iron to hydrated iron(III) oxide, and it needs BOTH oxygen (from the air) and water.
  In a test tube of iron nails with boiled water and a layer of oil (no oxygen), or with dry air and a drying agent (no water), the nails do not rust.
  Salt speeds rusting up but is not needed for it; carbon dioxide is not required.
```

```yaml
type: mcq
topic: "C8 Patterns in the Periodic Table"
stem: "Which statement correctly describes the trend down Group 17, from chlorine to iodine?"
options:
  - "The elements change from solid to liquid to gas"
  - "The colour gets lighter and the reactivity increases"
  - "The colour gets darker and the melting point increases"
  - "The elements become better at losing electrons"
answer: 2
marks: 1
misconception: halogen-trends
worked: |
  Down Group 17: chlorine is a pale green GAS, bromine is a red-brown LIQUID and iodine is a dark grey/purple-black SOLID.
  So the colour gets darker and the melting and boiling points increase (gas → liquid → solid, not the other way round).
  Reactivity DECREASES down the group, because the atoms get bigger and gain an electron less easily. Halogens gain electrons; they do not lose them.
```

```yaml
type: mcq
topic: "C8 Patterns in the Periodic Table"
stem: "Rubidium lies below potassium in Group 1. What is predicted when a small piece of rubidium is added to cold water?"
options:
  - "It does not react, because it is too far down the group"
  - "It reacts even more vigorously than potassium, giving hydrogen and an alkaline solution"
  - "It sinks and reacts slowly to give an acidic solution"
  - "It reacts less vigorously than potassium, giving oxygen"
answer: 1
marks: 1
misconception: predict-from-group-position
worked: |
  Reactivity INCREASES down Group 1, so rubidium must be more reactive than potassium.
  The Group 1 pattern is: metal + water → metal hydroxide + hydrogen.
  2Rb + 2H₂O → 2RbOH + H₂.
  So the reaction is even more vigorous than potassium's, hydrogen is given off, and the solution formed is alkaline (a hydroxide), not acidic.
```

```yaml
type: short
topic: "C8 Patterns in the Periodic Table"
stem: "Element X is in Group 2 and Period 3 of the Periodic Table. Give the formula of its chloride."
accepted: ["MgCl2"]
marks: 1
misconception: predict-formula-from-position
worked: |
  Group 2, Period 3 is magnesium.
  A Group 2 atom loses 2 electrons to form a 2+ ion, and chlorine forms Cl⁻.
  Two chloride ions are needed to balance one Mg²⁺, so the formula is MgCl₂.
```

```yaml
type: mcq
topic: "C10 Rate of Reactions"
stem: "How does a catalyst increase the rate of a reaction?"
options:
  - "It increases the energy of every colliding particle"
  - "It provides an alternative reaction pathway with a lower activation energy"
  - "It makes the particles collide more often by raising the temperature"
  - "It shifts the reaction so that more product is made"
answer: 1
marks: 1
misconception: catalyst-mechanism
worked: |
  A catalyst does NOT give the particles more energy and it does not raise the temperature.
  It offers a different route from reactants to products that has a LOWER activation energy.
  A greater proportion of the colliding particles therefore have enough energy to react, so the frequency of effective collisions rises and the rate increases.
  The catalyst is chemically unchanged at the end, and the total amount of product is unchanged.
```

```yaml
type: mcq
topic: "C10 Rate of Reactions"
stem: "Powdered marble chips react faster with dilute hydrochloric acid than large lumps of the same mass. Why?"
options:
  - "The powder contains more calcium carbonate"
  - "The powder has a larger total surface area, so there are more frequent collisions with acid particles"
  - "The powder has a higher temperature"
  - "The powder is more concentrated than the lumps"
answer: 1
marks: 1
misconception: surface-area-rate
worked: |
  The same MASS of marble is used, so the amount of calcium carbonate is the same and the same total volume of gas is eventually produced.
  Grinding into a powder exposes far more of the solid to the acid: the total surface area is much larger.
  More of the solid's particles are available for collision, so effective collisions happen more frequently and the rate is higher.
```

```yaml
type: mcq
topic: "C10 Rate of Reactions"
stem: "Why does raising the temperature increase the rate of a reaction?"
options:
  - "The activation energy of the reaction is lowered"
  - "The particles get bigger, so they collide more often"
  - "Particles move faster, so they collide more frequently, and a greater proportion of collisions have energy above the activation energy"
  - "The concentration of the solution increases"
answer: 2
marks: 1
misconception: temperature-collision-theory
worked: |
  Two effects work together.
  (i) The particles have more kinetic energy, so they move faster and collide MORE FREQUENTLY.
  (ii) More importantly, a greater PROPORTION of the colliding particles now have energy greater than or equal to the activation energy.
  The frequency of effective collisions therefore rises sharply and the rate increases.
  The activation energy itself is fixed, only a catalyst provides a route with a lower one.
```

```yaml
type: mcq
topic: "C10 Rate of Reactions"
stem: "Excess dilute hydrochloric acid is added to a fixed mass of magnesium ribbon, and the hydrogen produced is collected. The experiment is repeated with acid of double the concentration. Compared with the first run, the second run gives:"
options:
  - "a slower initial rate, and the same final volume of hydrogen"
  - "a faster initial rate, and double the final volume of hydrogen"
  - "a faster initial rate, and the same final volume of hydrogen"
  - "the same initial rate, and double the final volume of hydrogen"
answer: 2
marks: 2
misconception: rate-vs-yield
worked: |
  The acid is in EXCESS in both runs, so the magnesium is the limiting reactant and it determines how much hydrogen can be made.
  The mass of magnesium is unchanged, so the final volume of hydrogen is exactly the same, both graphs plateau at the same height.
  Doubling the concentration means more acid particles per unit volume, so collisions with the ribbon are more frequent: the curve is steeper at the start and reaches the plateau sooner.
```

```yaml
type: mcq
topic: "C10 Rate of Reactions"
stem: "Which statement about a catalyst is correct?"
options:
  - "It is chemically unchanged in mass and composition at the end of the reaction"
  - "It is used up as the reaction proceeds"
  - "It increases the total amount of product formed"
  - "It works by raising the activation energy"
answer: 0
marks: 1
misconception: catalyst-definition
worked: |
  A catalyst alters the rate of a reaction but is itself chemically unchanged at the end, the same mass and composition can be recovered, so a small amount can be used over and over again.
  It cannot increase the total amount of product; it only gets you there faster.
  It works by providing a pathway with a LOWER activation energy.
```

```yaml
type: mcq
topic: "C10 Rate of Reactions"
stem: "Which substance is used as a catalyst for the decomposition of aqueous hydrogen peroxide?"
options:
  - "Manganese(IV) oxide"
  - "Sodium chloride"
  - "Calcium carbonate"
  - "Copper(II) sulfate"
answer: 0
marks: 1
misconception: named-catalysts
worked: |
  Manganese(IV) oxide, MnO₂, is the standard catalyst for the decomposition of hydrogen peroxide:
  2H₂O₂ → 2H₂O + O₂.
  Oxygen is given off rapidly and the black MnO₂ can be filtered off, dried and weighed at the end, its mass is unchanged, showing it acted as a catalyst.
  (In living cells, the enzyme catalase does the same job, enzymes are biological catalysts.)
```

```yaml
type: short
topic: "C10 Rate of Reactions"
stem: "Complete the sentence: a catalyst speeds up a reaction by providing an alternative pathway with a lower ________ energy."
accepted: ["activation", "activation energy"]
marks: 1
misconception: catalyst-mechanism
worked: |
  The minimum energy that colliding particles must have in order to react is the ACTIVATION energy.
  A catalyst provides an alternative pathway with a lower activation energy, so a greater proportion of collisions are effective.
```

```yaml
type: mcq
topic: "C12 Maintaining Air Quality"
stem: "Which pollutant gas, released when fossil fuels containing sulfur are burned, is a major cause of acid rain?"
options:
  - "Sulfur dioxide"
  - "Argon"
  - "Methane"
  - "Carbon monoxide"
answer: 0
marks: 1
misconception: acid-rain-cause
worked: |
  Fossil fuels contain sulfur impurities. On burning, these form sulfur dioxide, SO₂.
  In the atmosphere SO₂ is oxidised and dissolves in rainwater to give an acidic solution, lowering the pH of the rain.
  Acid rain damages buildings made of limestone or marble, harms aquatic life and damages plants; SO₂ also irritates the respiratory system.
  Oxides of nitrogen also contribute, but carbon monoxide and methane do not cause acid rain, and argon is unreactive.
```

```yaml
type: mcq
topic: "C12 Maintaining Air Quality"
stem: "In a catalytic converter, carbon monoxide reacts with nitrogen monoxide. What are the products?"
options:
  - "Carbon monoxide and oxygen"
  - "Carbon and nitrogen dioxide"
  - "Carbon dioxide and nitrogen"
  - "Carbon dioxide and ammonia"
answer: 2
marks: 1
misconception: catalytic-converter-redox
worked: |
  The catalytic converter turns two harmful gases into two harmless ones in a single redox reaction:
  2CO + 2NO → 2CO₂ + N₂.
  Carbon monoxide is oxidised (it gains oxygen) and nitrogen monoxide is reduced (it loses oxygen).
  Nitrogen is a natural component of the air and carbon dioxide is far less toxic than carbon monoxide.
```

```yaml
type: mcq
topic: "C12 Maintaining Air Quality"
stem: "What is the approximate percentage by volume of nitrogen in clean, dry air?"
options:
  - "21%"
  - "0.04%"
  - "78%"
  - "1%"
answer: 2
marks: 1
misconception: air-composition
worked: |
  Clean dry air is about 78% nitrogen and 21% oxygen by volume.
  Most of the remaining 1% is argon, with carbon dioxide making up about 0.04%.
  21% is the oxygen figure, and 0.04% is carbon dioxide.
```

```yaml
type: mcq
topic: "C12 Maintaining Air Quality"
stem: "Which compounds were mainly responsible for the depletion of the ozone layer?"
options:
  - "Nitrogen and argon"
  - "Carbon dioxide and methane"
  - "Sulfur dioxide"
  - "CFCs"
answer: 3
marks: 1
misconception: ozone-vs-greenhouse
worked: |
  Chlorofluorocarbons (CFCs), once used in aerosols and refrigerants, drift into the upper atmosphere and break down the ozone layer.
  A thinner ozone layer lets more harmful ultraviolet radiation reach the surface.
  Do not confuse this with the greenhouse effect: carbon dioxide and methane are greenhouse gases linked to global warming, not to ozone depletion. SO₂ causes acid rain.
```

```yaml
type: mcq
topic: "C12 Maintaining Air Quality"
stem: "Flue gas desulfurisation removes sulfur dioxide from the waste gases of a power station. Which substance reacts with the sulfur dioxide?"
options:
  - "Carbon"
  - "Nitrogen monoxide"
  - "Sodium chloride"
  - "Calcium carbonate"
answer: 3
marks: 1
misconception: flue-gas-desulfurisation
worked: |
  Sulfur dioxide is an ACIDIC gas, so it is removed with a base or a carbonate.
  Powdered calcium carbonate (or a calcium oxide / calcium hydroxide slurry) is sprayed into the flue gases and reacts with the SO₂, removing it before it can escape and cause acid rain.
  Sodium chloride is neutral and carbon would simply burn.
```

```yaml
type: short
topic: "C12 Maintaining Air Quality"
stem: "Name the pollutant gas formed when nitrogen and oxygen from the air combine in the very hot engine of a car."
accepted: ["nitrogen monoxide", "NO", "nitric oxide", "nitrogen oxide", "oxides of nitrogen"]
marks: 1
misconception: engine-nox-formation
worked: |
  Air is mostly nitrogen and oxygen. These do not normally react, but the high temperature inside a car engine (and in a lightning strike) supplies enough energy for them to combine:
  N₂ + O₂ → 2NO.
  Nitrogen monoxide is later oxidised in air to nitrogen dioxide, which contributes to acid rain.
```

```yaml
type: mcq
topic: "C2 Particulate Nature of Matter"
stem: "How many neutrons are there in one atom of ³⁵₁₇Cl?"
options:
  - "18"
  - "52"
  - "35"
  - "17"
answer: 0
marks: 1
misconception: nucleon-vs-proton-number
worked: |
  The lower number is the proton number (17) and the upper number is the nucleon number (35).
  Number of neutrons = nucleon number − proton number = 35 − 17 = 18.
  17 is the number of protons (and of electrons in the neutral atom), and 52 comes from adding instead of subtracting.
```

```yaml
type: mcq
topic: "C2 Particulate Nature of Matter"
stem: "How many electrons are there in one Fe²⁺ ion? (Proton number of iron = 26)"
options:
  - "26"
  - "24"
  - "22"
  - "28"
answer: 1
marks: 1
misconception: ion-electron-count
worked: |
  A neutral iron atom has 26 protons and 26 electrons.
  The 2+ charge means the atom has LOST two electrons.
  26 − 2 = 24 electrons. (The number of protons never changes when an ion forms.)
```

```yaml
type: mcq
topic: "C2 Particulate Nature of Matter"
stem: "Two isotopes of the same element always have different:"
options:
  - "numbers of protons"
  - "numbers of electrons"
  - "chemical properties"
  - "numbers of neutrons"
answer: 3
marks: 1
misconception: isotope-definition
worked: |
  Isotopes are atoms of the SAME element, so they must have the same number of protons.
  Neutral atoms of the same element have the same number of electrons, so their chemical properties are identical.
  What differs is the number of NEUTRONS, which is why the isotopes have different nucleon masses.
```

```yaml
type: mcq
topic: "C2 Particulate Nature of Matter"
stem: "Ammonia gas (Mᵣ = 17) diffuses faster than hydrogen chloride gas (Mᵣ = 36.5). Why?"
options:
  - "Ammonia is an alkaline gas, and alkaline gases diffuse faster"
  - "Ammonia molecules are attracted to each other more strongly"
  - "Ammonia molecules have a smaller relative molecular mass, so at the same temperature they move faster on average"
  - "Hydrogen chloride is denser, so it dissolves rather than diffuses"
answer: 2
marks: 1
misconception: diffusion-rate-vs-mass
worked: |
  At a given temperature, the particles of all gases have the same average kinetic energy.
  The lighter the particle (the smaller the relative molecular mass), the faster it must move to have that same energy.
  Ammonia (Mᵣ = 17) is much lighter than hydrogen chloride (Mᵣ = 36.5), so it moves and spreads faster.
  Whether a gas is acidic or alkaline has nothing to do with its rate of diffusion.
```

```yaml
type: mcq
topic: "C2 Particulate Nature of Matter"
stem: "What happens to the particles when a solid melts?"
options:
  - "They gain energy, vibrate more strongly, and break free from their fixed positions so they can slide past one another"
  - "They lose energy and pack into a regular lattice"
  - "They gain energy and move far apart, filling the container"
  - "They break apart into individual atoms"
answer: 0
marks: 1
misconception: state-change-particles
worked: |
  Heating a solid gives the particles more energy, so they vibrate more strongly about their fixed positions.
  At the melting point they have enough energy to overcome the forces holding them in fixed positions in the lattice.
  The particles stay close together but can now slide past one another, the substance flows and takes the shape of the container. That is a liquid.
  Moving far apart to fill the container describes boiling, and the particles themselves are not broken up.
```

```yaml
type: short
topic: "C2 Particulate Nature of Matter"
stem: "An ion contains 12 protons, 12 neutrons and 10 electrons. State the charge on this ion."
accepted: ["2+", "+2", "plus 2", "2 plus"]
marks: 1
misconception: ion-charge-from-electron-count
worked: |
  The charge comes from comparing protons (positive) with electrons (negative).
  12 protons give 12+, and 10 electrons give 10−.
  Overall charge = 12 − 10 = 2+. (Neutrons are neutral and do not affect the charge. The ion is Mg²⁺.)
```

```yaml
type: mcq
topic: "C9 Chemical Energetics"
stem: "For an exothermic reaction, what is true of the enthalpy change, ΔH?"
options:
  - "ΔH is negative, because energy is taken in from the surroundings"
  - "ΔH is zero, because energy is conserved"
  - "ΔH is negative, because the products have less energy than the reactants"
  - "ΔH is positive, because energy is given out to the surroundings"
answer: 2
marks: 1
misconception: enthalpy-sign
worked: |
  In an exothermic reaction, energy is given out to the surroundings, so the temperature of the surroundings RISES.
  The chemicals themselves end up with less energy than they started with, so ΔH (the energy of the products minus the energy of the reactants) is NEGATIVE.
  Endothermic reactions take energy IN, the surroundings cool down, and ΔH is positive.
```

```yaml
type: mcq
topic: "C9 Chemical Energetics"
stem: "Which statement about bond breaking and bond making is correct?"
options:
  - "Both bond breaking and bond making are endothermic"
  - "Bond breaking is endothermic and bond making is exothermic"
  - "Bond breaking is exothermic and bond making is endothermic"
  - "Both bond breaking and bond making are exothermic"
answer: 1
marks: 1
misconception: bond-energy-direction
worked: |
  Energy must be SUPPLIED to pull bonded atoms apart, so bond breaking always takes energy in, it is endothermic.
  Energy is RELEASED when new bonds form, so bond making is exothermic.
  If more energy is released in making bonds than is taken in breaking them, the reaction is exothermic overall (ΔH is negative); if less, it is endothermic overall.
```

```yaml
type: mcq
topic: "C9 Chemical Energetics"
stem: "On an energy profile diagram for an exothermic reaction, which statement is correct?"
options:
  - "The products are higher in energy than the reactants, and ΔH is positive"
  - "The products are lower in energy than the reactants, and the activation energy is measured from the reactants up to the peak"
  - "There is no peak, because the reaction gives out energy"
  - "The activation energy is measured from the products up to the peak"
answer: 1
marks: 1
misconception: energy-profile-reading
worked: |
  Exothermic means the chemicals lose energy, so the products line is drawn BELOW the reactants line and ΔH is negative (an arrow pointing down).
  Every reaction still has an energy barrier, so there is always a peak.
  The activation energy, Eₐ, is the height from the REACTANTS up to the top of the peak, it is the minimum energy a collision needs in order to react.
```

```yaml
type: mcq
topic: "C9 Chemical Energetics"
stem: "How does adding a catalyst change the energy profile diagram of a reaction?"
options:
  - "The peak is lower, but ΔH is unchanged"
  - "The peak is lower, and ΔH becomes more negative"
  - "The peak is unchanged, but ΔH is smaller"
  - "The products line is raised"
answer: 0
marks: 1
misconception: catalyst-profile-effect
worked: |
  A catalyst provides an alternative pathway with a lower activation energy, so the PEAK of the profile is lower.
  It does not change the energy of the reactants or of the products, so the vertical gap between them, the enthalpy change ΔH, is exactly the same.
  This is why a catalyst speeds a reaction up but cannot change how much energy the reaction gives out overall.
```

```yaml
type: mcq
topic: "C9 Chemical Energetics"
stem: "Ammonium chloride is dissolved in water in a polystyrene cup. The temperature falls from 21 °C to 15 °C. What can be deduced?"
options:
  - "No energy change has occurred"
  - "The process is endothermic and ΔH is positive"
  - "The process is exothermic and ΔH is negative"
  - "The process is endothermic and ΔH is negative"
answer: 1
marks: 1
misconception: exo-endo-from-temperature
worked: |
  The temperature of the surroundings (the water) FELL, so energy was taken IN from the surroundings by the dissolving ammonium chloride.
  Taking energy in is endothermic, and for an endothermic change ΔH is positive.
  Watch the direction carefully: a temperature FALL in the mixture always means an endothermic change.
```

```yaml
type: short
topic: "C9 Chemical Energetics"
stem: "The complete combustion of 1 mol of methane releases 890 kJ of energy. Calculate the energy, in kJ, released when 0.50 mol of methane burns completely."
accepted: ["445", "445 kJ", "-445", "-445 kJ"]
marks: 1
misconception: enthalpy-scaling
worked: |
  The enthalpy change is proportional to the number of moles reacting.
  Energy released = 0.50 × 890 = 445 kJ.
  (Written as an enthalpy change for that amount, it is −445 kJ, because the reaction is exothermic.)
```

```yaml
type: mcq
topic: "C6 Qualitative Analysis"
stem: "An aqueous cation gives a white precipitate with aqueous sodium hydroxide that dissolves in excess. It also gives a white precipitate with aqueous ammonia that dissolves in excess. Which cation is it?"
options:
  - "Ca²⁺"
  - "Fe²⁺"
  - "Zn²⁺"
  - "Al³⁺"
answer: 2
marks: 1
misconception: cation-ladder-excess
worked: |
  The key is the behaviour with EXCESS reagent, tested with both alkalis.
  Zn²⁺: white precipitate with NaOH that dissolves in excess, AND white precipitate with NH₃ that dissolves in excess. This matches.
  Al³⁺: white precipitate with NaOH that dissolves in excess, but the precipitate with NH₃ is INSOLUBLE in excess, that is how Al³⁺ and Zn²⁺ are told apart.
  Ca²⁺: white precipitate with NaOH insoluble in excess, and no precipitate at all with NH₃.
  Fe²⁺ gives a green precipitate, not a white one.
```

```yaml
type: mcq
topic: "C6 Qualitative Analysis"
stem: "A solid fizzes when dilute hydrochloric acid is added, and the gas produced turns limewater milky. Which ion is present in the solid?"
options:
  - "Cl⁻"
  - "NO₃⁻"
  - "SO₄²⁻"
  - "CO₃²⁻"
answer: 3
marks: 1
misconception: carbonate-test
worked: |
  Only a carbonate fizzes with a dilute acid, giving carbon dioxide:
  CO₃²⁻ + 2H⁺ → H₂O + CO₂.
  Turning limewater milky is the test for carbon dioxide, so the gas is CO₂ and the ion is the carbonate ion.
  Sulfates and chlorides do not effervesce with dilute acid.
```

```yaml
type: mcq
topic: "C6 Qualitative Analysis"
stem: "A solution is acidified with dilute nitric acid and aqueous silver nitrate is then added. A yellow precipitate forms. Which anion is present?"
options:
  - "CO₃²⁻"
  - "Cl⁻"
  - "SO₄²⁻"
  - "I⁻"
answer: 3
marks: 1
misconception: halide-precipitate-colour
worked: |
  Silver nitrate after acidification with dilute nitric acid is the test for the halide ions.
  Chloride gives a WHITE precipitate of silver chloride; iodide gives a YELLOW precipitate of silver iodide.
  So a yellow precipitate means the iodide ion is present.
  The nitric acid is added first to remove any carbonate, which would otherwise also give a precipitate with silver ions and lead to a false result.
  A sulfate would be tested with barium nitrate, not silver nitrate.
```

```yaml
type: mcq
topic: "C6 Qualitative Analysis"
stem: "Aqueous sodium hydroxide is added to a solution of an unknown salt. A green precipitate forms which does not dissolve in excess. Which cation is present?"
options:
  - "Cu²⁺"
  - "Zn²⁺"
  - "Fe²⁺"
  - "Fe³⁺"
answer: 2
marks: 1
misconception: iron-oxidation-state-colours
worked: |
  Colour is the giveaway with the iron ions:
  Fe²⁺ gives a GREEN precipitate of iron(II) hydroxide, insoluble in excess.
  Fe³⁺ gives a RED-BROWN precipitate of iron(III) hydroxide, insoluble in excess.
  Cu²⁺ gives a light BLUE precipitate (insoluble in excess sodium hydroxide, but soluble in excess ammonia to give a dark blue solution).
  Zn²⁺ gives a WHITE precipitate that dissolves in excess.
```

```yaml
type: short
topic: "C6 Qualitative Analysis"
stem: "Name the gas that turns damp red litmus paper blue."
accepted: ["ammonia", "NH3"]
marks: 1
misconception: gas-test-ammonia
worked: |
  Ammonia is the common alkaline gas. It dissolves in the moisture on the paper to form an alkaline solution, which turns red litmus BLUE.
  The paper must be damp, otherwise no ions are formed and there is no colour change.
```

```yaml
type: mcq
topic: "C1 Experimental Chemistry"
stem: "Which method best separates two miscible liquids that have different boiling points?"
options:
  - "Filtration"
  - "Fractional distillation"
  - "Use of a separating funnel"
  - "Crystallisation"
answer: 1
marks: 1
misconception: separation-method-choice
worked: |
  Miscible means the two liquids mix completely, so a separating funnel (which only works for IMMISCIBLE liquids that form two layers) is useless.
  Filtration separates an insoluble solid from a liquid, and crystallisation recovers a dissolved solid.
  Fractional distillation uses the difference in boiling points: the liquid with the lower boiling point vaporises first, travels up the fractionating column and is condensed and collected separately.
```

```yaml
type: mcq
topic: "C1 Experimental Chemistry"
stem: "In a paper chromatogram, a spot moves 4.5 cm from the baseline while the solvent front moves 9.0 cm. What is the Rf value of the spot?"
options:
  - "0.50"
  - "4.5"
  - "0.05"
  - "2.0"
answer: 0
marks: 1
misconception: rf-value-formula
worked: |
  Rf = distance moved by the spot / distance moved by the solvent front.
  = 4.5 / 9.0 = 0.50.
  Rf has no units, and it can never be greater than 1, because the spot cannot travel further than the solvent that carries it, so an answer of 2.0 must be wrong.
```

```yaml
type: mcq
topic: "C1 Experimental Chemistry"
stem: "Which drying agent must NOT be used to dry carbon dioxide gas?"
options:
  - "Fused calcium chloride"
  - "Concentrated sulfuric acid"
  - "Silica gel"
  - "Calcium oxide"
answer: 3
marks: 1
misconception: drying-agent-choice
worked: |
  A drying agent must remove water WITHOUT reacting with the gas itself.
  Carbon dioxide is an acidic gas, and calcium oxide is a base, it would react with the CO₂ (CaO + CO₂ → CaCO₃) and absorb the gas instead of drying it.
  Concentrated sulfuric acid and fused calcium chloride are both acidic or neutral, so they dry carbon dioxide safely.
  The mirror image of this rule: ammonia is alkaline, so it must NOT be dried with concentrated sulfuric acid, calcium oxide is used instead.
```

```yaml
type: mcq
topic: "C1 Experimental Chemistry"
stem: "Which piece of apparatus is used to deliver exactly 25.0 cm³ of a solution into a conical flask in a titration?"
options:
  - "A burette"
  - "A measuring cylinder"
  - "A pipette"
  - "A beaker"
answer: 2
marks: 1
misconception: apparatus-accuracy
worked: |
  A pipette delivers one fixed, accurate volume (commonly 25.0 cm³) and is used for the solution placed in the conical flask.
  A burette delivers a VARIABLE volume and is used to add the other solution drop by drop until the end-point; it is read to the nearest 0.05 cm³.
  A measuring cylinder is far less accurate, and a beaker is only for rough volumes.
```

```yaml
type: short
topic: "C1 Experimental Chemistry"
stem: "Name the technique used to separate a solid that turns straight from a solid into a gas on heating from a solid that does not."
accepted: ["sublimation"]
marks: 1
misconception: separation-method-choice
worked: |
  A substance that changes directly from solid to gas on heating, without melting, is said to SUBLIME.
  On heating the mixture, only that substance vaporises; it is then cooled on a cold surface and re-forms as a solid, leaving the other solid behind.
  The technique is called sublimation.
```

## TEACHING

```yaml
kind: definition
term: "Oxidation"
topic: "C7 Redox Chemistry & Electrochemistry"
body: "The loss of electrons, the gain of oxygen, the loss of hydrogen, or an increase in oxidation state."
```

```yaml
kind: definition
term: "Reduction"
topic: "C7 Redox Chemistry & Electrochemistry"
body: "The gain of electrons, the loss of oxygen, the gain of hydrogen, or a decrease in oxidation state."
```

```yaml
kind: definition
term: "Electrolysis"
topic: "C7 Redox Chemistry & Electrochemistry"
body: "The decomposition of an ionic compound, when molten or in aqueous solution, by the passage of an electric current through it."
```

```yaml
kind: definition
term: "Electrolyte"
topic: "C7 Redox Chemistry & Electrochemistry"
body: "A substance that conducts electricity when molten or in aqueous solution and is decomposed by it; it contains ions that are free to move."
```

```yaml
kind: definition
term: "Isotopes"
topic: "C2 Particulate Nature of Matter"
body: "Atoms of the same element that have the same proton number but a different number of neutrons, and therefore a different nucleon number."
```

```yaml
kind: definition
term: "The mole"
topic: "C4 Chemical Calculations"
body: "The amount of substance that contains 6.02 × 10²³ particles (the Avogadro constant); the mass of one mole of a substance in grams is numerically equal to its Aᵣ or Mᵣ."
```

```yaml
kind: definition
term: "Empirical formula"
topic: "C4 Chemical Calculations"
body: "The formula that shows the simplest whole-number ratio of the atoms of each element present in a compound."
```

```yaml
kind: definition
term: "Molecular formula"
topic: "C4 Chemical Calculations"
body: "The formula that shows the actual number of atoms of each element in one molecule of a compound."
```

```yaml
kind: definition
term: "Limiting reactant"
topic: "C4 Chemical Calculations"
body: "The reactant that is completely used up first in a reaction; it determines the maximum amount of product that can be formed. Any other reactant is said to be in excess."
```

```yaml
kind: definition
term: "Percentage yield"
topic: "C4 Chemical Calculations"
body: "The actual yield obtained divided by the theoretical yield calculated from the equation, expressed as a percentage: (actual yield ÷ theoretical yield) × 100."
```

```yaml
kind: definition
term: "Percentage purity"
topic: "C4 Chemical Calculations"
body: "The mass of the pure substance in a sample divided by the total mass of the sample, expressed as a percentage: (mass of pure substance ÷ mass of sample) × 100."
```

```yaml
kind: definition
term: "Catalyst"
topic: "C10 Rate of Reactions"
body: "A substance that increases the rate of a chemical reaction but is itself chemically unchanged in mass and composition at the end of the reaction."
```

```yaml
kind: definition
term: "Activation energy"
topic: "C9 Chemical Energetics"
body: "The minimum amount of energy that colliding particles must have in order for a reaction to occur."
```

```yaml
kind: definition
term: "Enthalpy change, ΔH"
topic: "C9 Chemical Energetics"
body: "The energy change of a reaction at constant pressure; ΔH is negative for an exothermic reaction (energy given out) and positive for an endothermic reaction (energy taken in)."
```

```yaml
kind: definition
term: "Homologous series"
topic: "C11 Organic Chemistry"
body: "A family of compounds with the same general formula and the same functional group, whose members differ by −CH₂− and show a gradual change in physical properties and similar chemical properties."
```

```yaml
kind: precision
topic: "C10 Rate of Reactions"
prompt: "Explain, in terms of particles, why increasing the temperature increases the rate of a reaction."
model: "At a higher temperature the particles have more kinetic energy, so they move faster and collide more frequently. More importantly, a greater proportion of the colliding particles have energy greater than or equal to the activation energy. The frequency of effective collisions therefore increases, so the rate increases."
keywords: [kinetic energy, collide more frequently, greater proportion, activation energy, frequency of effective collisions]
```

```yaml
kind: precision
topic: "C10 Rate of Reactions"
prompt: "Explain, in terms of particles, why increasing the concentration of an acid increases the rate of its reaction with a metal."
model: "A more concentrated acid contains more acid particles in the same volume, so the particles are closer together. Collisions between the acid particles and the metal surface therefore happen more frequently, so the frequency of effective collisions increases and the rate increases."
keywords: [more particles per unit volume, closer together, collide more frequently, effective collisions]
```

```yaml
kind: precision
topic: "C10 Rate of Reactions"
prompt: "Explain why powdered calcium carbonate reacts faster with dilute acid than large lumps of the same mass."
model: "Powdering the solid gives it a much larger total surface area, so a greater number of its particles are exposed to the acid at any moment. Collisions between the acid particles and the solid surface are therefore more frequent, so the frequency of effective collisions increases and the rate increases. The total volume of gas produced is unchanged, because the mass of calcium carbonate is the same."
keywords: [larger surface area, more particles exposed, collide more frequently, same final volume]
```

```yaml
kind: precision
topic: "C10 Rate of Reactions"
prompt: "Explain how a catalyst increases the rate of a reaction."
model: "A catalyst provides an alternative reaction pathway with a lower activation energy. A greater proportion of the colliding particles therefore have energy greater than or equal to the activation energy, so the frequency of effective collisions increases and the rate increases. The catalyst itself is chemically unchanged at the end of the reaction."
keywords: [alternative pathway, lower activation energy, greater proportion, chemically unchanged]
```

```yaml
kind: precision
topic: "C3 Chemical Bonding & Structure"
prompt: "Explain why sodium chloride does not conduct electricity when solid but does conduct when molten."
model: "Sodium chloride is a giant ionic lattice. In the solid the ions are held in fixed positions by strong electrostatic forces of attraction and cannot move, so no charge can be carried. When it is melted the lattice breaks down and the ions become free to move, so the mobile ions carry the charge and the liquid conducts."
keywords: [giant ionic lattice, ions in fixed positions, free to move, mobile ions carry charge]
```

```yaml
kind: precision
topic: "C3 Chemical Bonding & Structure"
prompt: "Explain, in terms of structure and bonding, why silicon dioxide has a very high melting point."
model: "Silicon dioxide has a giant covalent structure in which every atom is joined to its neighbours by strong covalent bonds throughout the whole crystal. Melting requires a very large number of these strong covalent bonds to be broken, so a very large amount of energy is needed and the melting point is very high."
keywords: [giant covalent structure, strong covalent bonds, throughout the structure, large amount of energy]
```

```yaml
kind: precision
topic: "C3 Chemical Bonding & Structure"
prompt: "Explain why iodine has a low melting point even though the bond within an I₂ molecule is strong."
model: "Iodine is a simple molecular substance. Melting separates the molecules from one another; it does not break the covalent bonds inside the molecules. Only the weak forces of attraction between the molecules have to be overcome, and little energy is needed to do this, so the melting point is low."
keywords: [simple molecular, weak forces between molecules, covalent bonds not broken, little energy needed]
```

```yaml
kind: precision
topic: "C3 Chemical Bonding & Structure"
prompt: "Explain why graphite conducts electricity but diamond does not."
model: "In diamond each carbon atom forms four covalent bonds, so all its valence electrons are used in bonding and none are free to move. In graphite each carbon atom forms only three covalent bonds, so one electron per atom is delocalised between the layers. These delocalised electrons are free to move, so graphite conducts electricity."
keywords: [four bonds in diamond, no free electrons, three bonds in graphite, one delocalised electron, free to move]
```

```yaml
kind: precision
topic: "C3 Chemical Bonding & Structure"
prompt: "Explain, in terms of structure, why an alloy such as brass is harder than the pure metal."
model: "In a pure metal the atoms are all the same size and are arranged in regular layers that can slide over one another, so the metal is soft and malleable. In an alloy, atoms of a different size are present and they distort the regular arrangement of the layers. The layers can no longer slide over each other easily, so the alloy is harder and stronger."
keywords: [same size atoms, regular layers slide, different sized atoms, distort the layers, cannot slide easily]
```

```yaml
kind: precision
topic: "C5 Acid-Base Chemistry"
prompt: "Explain why hydrochloric acid has a lower pH than ethanoic acid of the same concentration."
model: "Hydrochloric acid is a strong acid and is completely ionised in water, so it produces a high concentration of hydrogen ions. Ethanoic acid is a weak acid and is only partially ionised, so it produces a much lower concentration of hydrogen ions at the same concentration. The higher the concentration of H⁺(aq), the lower the pH, so the hydrochloric acid has the lower pH."
keywords: [strong acid, completely ionised, weak acid, partially ionised, concentration of hydrogen ions]
```

```yaml
kind: precision
topic: "C7 Redox Chemistry & Electrochemistry"
prompt: "Explain which ion is discharged at the cathode during the electrolysis of aqueous copper(II) sulfate."
model: "Two cations are attracted to the cathode: Cu²⁺ from the salt and H⁺ from the water. The ion of the less reactive metal is discharged in preference, and copper is below hydrogen in the reactivity series, so Cu²⁺ is discharged. It gains electrons and is reduced: Cu²⁺ + 2e⁻ → Cu, and a pink-brown deposit of copper forms."
keywords: [two cations attracted, less reactive discharged, below hydrogen, gains electrons, reduced]
```

```yaml
kind: precision
topic: "C7 Redox Chemistry & Electrochemistry"
prompt: "Explain why concentrated aqueous sodium chloride gives chlorine at the anode but very dilute sodium chloride gives oxygen."
model: "Both Cl⁻ and OH⁻ ions are attracted to the anode. Normally the hydroxide ion is discharged in preference, giving oxygen. However, when the chloride solution is concentrated, the very high concentration of chloride ions means that Cl⁻ is discharged instead, giving chlorine. So the product at the anode depends on the concentration of the halide ion."
keywords: [both anions attracted, hydroxide normally discharged, high concentration of chloride, concentration effect]
```

```yaml
kind: precision
topic: "C8 Patterns in the Periodic Table"
prompt: "Explain how attaching blocks of magnesium to a steel pipe prevents the pipe from rusting."
model: "Magnesium is higher than iron in the reactivity series, so it has a greater tendency to lose electrons and form positive ions. The magnesium is oxidised in preference to the iron and its electrons flow to the pipe, so the iron is not oxidised and does not rust. The magnesium corrodes instead and must be replaced from time to time. This is called sacrificial protection."
keywords: [more reactive than iron, loses electrons in preference, oxidised instead, iron not oxidised, sacrificial protection]
```

```yaml
kind: precision
topic: "C8 Patterns in the Periodic Table"
prompt: "Explain why the reactivity of the Group 1 metals increases down the group."
model: "Going down Group 1 each atom has an extra electron shell, so the single valence electron is further from the nucleus and is shielded from it by more inner shells. The force of attraction between the nucleus and the valence electron is therefore weaker, so the electron is lost more easily and the metal is more reactive."
keywords: [extra shell, further from nucleus, more shielding, weaker attraction, electron lost more easily]
```

```yaml
kind: precision
topic: "C9 Chemical Energetics"
prompt: "Explain, in terms of bond breaking and bond making, why a reaction is exothermic overall."
model: "Breaking the bonds in the reactants takes energy in, so it is endothermic. Making the bonds in the products gives energy out, so it is exothermic. In an exothermic reaction, more energy is released when the new bonds are made than is taken in to break the old bonds, so there is a net release of energy to the surroundings and ΔH is negative."
keywords: [bond breaking endothermic, bond making exothermic, more energy released than taken in, net release, negative]
```

```yaml
kind: precision
topic: "C11 Organic Chemistry"
prompt: "Explain why bioethanol made from sugar cane is described as a renewable fuel with a lower net carbon dioxide impact than petrol."
model: "The sugar cane crop can be regrown each season, so the fuel is renewable, whereas crude oil takes millions of years to form and is non-renewable. While the crop grows it absorbs carbon dioxide from the atmosphere by photosynthesis, and that carbon dioxide is released again when the bioethanol burns, so much less carbon dioxide is added to the atmosphere overall than when a fossil fuel is burned."
keywords: [crop regrown, renewable, absorbs carbon dioxide, photosynthesis, released again on burning]
```

```yaml
kind: precision
topic: "C2 Particulate Nature of Matter"
prompt: "Explain why ammonia gas diffuses faster than hydrogen chloride gas at the same temperature."
model: "At the same temperature the particles of both gases have the same average kinetic energy. Ammonia has the smaller relative molecular mass, so its molecules must move faster on average to have the same kinetic energy. Faster-moving molecules spread through the air more quickly, so ammonia diffuses faster."
keywords: [same average kinetic energy, smaller relative molecular mass, move faster, diffuses faster]
```

```yaml
kind: qa
test: "Add aqueous sodium hydroxide dropwise, then in excess. Repeat with aqueous ammonia, dropwise then in excess."
observation: "With NaOH: white precipitate, soluble in excess giving a colourless solution. With NH₃: white precipitate, insoluble in excess."
conclusion: "Al³⁺ (aluminium ion). The insolubility in excess ammonia is what separates it from Zn²⁺."
```

```yaml
kind: qa
test: "Add aqueous sodium hydroxide and warm the mixture. Test any gas with damp red litmus paper."
observation: "No precipitate. A pungent gas is given off on warming that turns damp red litmus paper blue."
conclusion: "NH₄⁺ (ammonium ion): NH₄⁺ + OH⁻ → NH₃ + H₂O."
```

```yaml
kind: qa
test: "Add aqueous sodium hydroxide dropwise, then in excess. Repeat with aqueous ammonia."
observation: "With NaOH: white precipitate, insoluble in excess. With NH₃: no precipitate."
conclusion: "Ca²⁺ (calcium ion)."
```

```yaml
kind: qa
test: "Add aqueous sodium hydroxide dropwise, then in excess. Repeat with aqueous ammonia, dropwise then in excess."
observation: "With NaOH: light blue precipitate, insoluble in excess. With NH₃: light blue precipitate, soluble in excess giving a dark blue solution."
conclusion: "Cu²⁺ (copper(II) ion)."
```

```yaml
kind: qa
test: "Add aqueous sodium hydroxide dropwise, then in excess. Repeat with aqueous ammonia, dropwise then in excess."
observation: "With NaOH: green precipitate, insoluble in excess. With NH₃: green precipitate, insoluble in excess."
conclusion: "Fe²⁺ (iron(II) ion)."
```

```yaml
kind: qa
test: "Add aqueous sodium hydroxide dropwise, then in excess. Repeat with aqueous ammonia, dropwise then in excess."
observation: "With NaOH: red-brown precipitate, insoluble in excess. With NH₃: red-brown precipitate, insoluble in excess."
conclusion: "Fe³⁺ (iron(III) ion)."
```

```yaml
kind: qa
test: "Add aqueous sodium hydroxide dropwise, then in excess. Repeat with aqueous ammonia, dropwise then in excess."
observation: "With NaOH: white precipitate, soluble in excess giving a colourless solution. With NH₃: white precipitate, soluble in excess giving a colourless solution."
conclusion: "Zn²⁺ (zinc ion). Soluble in BOTH excesses, the contrast with Al³⁺."
```

```yaml
kind: qa
test: "Add dilute hydrochloric acid to the solid and pass any gas through limewater."
observation: "Effervescence; the gas turns limewater milky."
conclusion: "CO₃²⁻ (carbonate ion): CO₃²⁻ + 2H⁺ → H₂O + CO₂."
```

```yaml
kind: qa
test: "Acidify with dilute nitric acid, then add aqueous silver nitrate."
observation: "White precipitate."
conclusion: "Cl⁻ (chloride ion). The nitric acid is added first to remove carbonate, which would otherwise also give a precipitate."
```

```yaml
kind: qa
test: "Acidify with dilute nitric acid, then add aqueous silver nitrate."
observation: "Yellow precipitate."
conclusion: "I⁻ (iodide ion). Yellow, not white, this is the pure-chemistry extra test."
```

```yaml
kind: qa
test: "Add aqueous sodium hydroxide, then add aluminium foil and warm carefully. Test any gas with damp red litmus paper."
observation: "A gas is given off that turns damp red litmus paper blue (ammonia)."
conclusion: "NO₃⁻ (nitrate ion). The aluminium reduces the nitrate to ammonia; check first that no ammonium ion is present."
```

```yaml
kind: qa
test: "Acidify with dilute nitric acid, then add aqueous barium nitrate."
observation: "White precipitate."
conclusion: "SO₄²⁻ (sulfate ion)."
```

```yaml
kind: qa
test: "Hold a piece of damp red litmus paper in the gas."
observation: "The damp red litmus paper turns blue."
conclusion: "NH₃ (ammonia), the common alkaline gas."
```

```yaml
kind: qa
test: "Bubble the gas through limewater."
observation: "The limewater turns milky (a white precipitate of calcium carbonate forms)."
conclusion: "CO₂ (carbon dioxide)."
```

```yaml
kind: qa
test: "Hold a piece of damp litmus paper in the gas."
observation: "The damp litmus paper is bleached (damp blue litmus first turns red, then is bleached white). The gas is pale green and choking."
conclusion: "Cl₂ (chlorine)."
```

```yaml
kind: qa
test: "Hold a lighted splint at the mouth of the test tube."
observation: "The gas burns with a squeaky pop."
conclusion: "H₂ (hydrogen)."
```

```yaml
kind: qa
test: "Insert a glowing splint into the test tube."
observation: "The glowing splint relights."
conclusion: "O₂ (oxygen)."
```

```yaml
kind: qa
test: "Bubble the gas through acidified aqueous potassium manganate(VII)."
observation: "The purple solution turns colourless. The gas has a choking smell."
conclusion: "SO₂ (sulfur dioxide), it acts as a reducing agent."
```
