---
level: o-level
slug: biology-pure
subjectName: Biology (Pure)
family: biology
---

## QUESTIONS

```yaml
type: mcq
topic: "T14 Inheritance"
stem: "In pea plants the allele for tall stems (T) is dominant to the allele for short stems (t). Two heterozygous tall plants are crossed (Tt × Tt). What phenotype ratio is expected in the offspring?"
options:
  - "all offspring tall"
  - "3 tall : 1 short"
  - "1 tall : 1 short"
  - "2 tall : 1 short"
answer: 1
marks: 1
misconception: monohybrid-ratio
worked: |
  Parents: Tt × Tt.
  Gametes from each parent: T and t.
  Punnett square gives TT, Tt, Tt, tt.
  Genotype ratio 1 TT : 2 Tt : 1 tt.
  TT and Tt both show the dominant phenotype (tall) because one T allele is enough.
  Phenotype ratio = 3 tall : 1 short.
```

```yaml
type: mcq
topic: "T14 Inheritance"
stem: "A pea plant has the genotype Tt, where T (tall) is dominant to t (short). Which statement about this plant is correct?"
options:
  - "It is homozygous dominant and its phenotype is tall."
  - "It is homozygous and its phenotype is tall."
  - "It is heterozygous and its phenotype is tall."
  - "It is heterozygous and its phenotype is short."
answer: 2
marks: 1
misconception: genotype-phenotype-confusion
worked: |
  Genotype = the alleles present (Tt). Two different alleles means heterozygous.
  Phenotype = the characteristic seen. T is dominant, so a single T is expressed and the plant is tall.
  Homozygous would mean TT or tt.
```

```yaml
type: mcq
topic: "T14 Inheritance"
stem: "A purple-flowered plant of unknown genotype is crossed with a white-flowered plant (pp). All 60 offspring have purple flowers. What is the most likely genotype of the purple parent?"
options:
  - "pp"
  - "PP"
  - "either PP or Pp, the cross cannot distinguish them"
  - "Pp"
answer: 1
marks: 1
misconception: test-cross-interpretation
worked: |
  This is a test cross: unknown × homozygous recessive.
  If the purple parent were Pp, the cross Pp × pp would give 1 Pp (purple) : 1 pp (white), about half the offspring would be white.
  No white offspring appeared among 60, so the purple parent is almost certainly PP: PP × pp gives all Pp, all purple.
```

```yaml
type: mcq
topic: "T14 Inheritance"
stem: "In one flowering plant, CᴿCᴿ plants are red and CᵂCᵂ plants are white. Red × white gives all pink offspring. Two pink plants are then crossed (CᴿCᵂ × CᴿCᵂ). What phenotype ratio is expected?"
options:
  - "all offspring pink"
  - "1 red : 1 white"
  - "1 red : 2 pink : 1 white"
  - "3 pink : 1 red"
answer: 2
marks: 1
misconception: codominance-ratio
worked: |
  Pink parents are heterozygous CᴿCᵂ: both alleles are expressed, so neither is dominant, this is codominance.
  Gametes from each parent: Cᴿ and Cᵂ.
  Offspring: CᴿCᴿ, CᴿCᵂ, CᴿCᵂ, CᵂCᵂ.
  CᴿCᴿ = red, CᴿCᵂ = pink, CᵂCᵂ = white.
  Ratio = 1 red : 2 pink : 1 white.
```

```yaml
type: mcq
topic: "T14 Inheritance"
stem: "A couple already have three daughters. What is the probability that their fourth child is a boy?"
options:
  - "1/2"
  - "0, they can only have daughters"
  - "1/8"
  - "1/4"
answer: 0
marks: 1
misconception: independent-fertilisation-events
worked: |
  The mother is XX, so every egg carries X.
  The father is XY, so half his sperm carry X and half carry Y.
  A Y-bearing sperm gives XY (boy); an X-bearing sperm gives XX (girl).
  Each fertilisation is an independent event, earlier children do not change the odds.
  Probability of a boy = 1/2.
```

```yaml
type: mcq
topic: "T14 Inheritance"
stem: "A woman who is a carrier of red-green colour vision deficiency (XᴮXᵇ) has children with a man of normal colour vision (XᴮY). What proportion of their sons is expected to have the deficiency?"
options:
  - "one quarter of the sons"
  - "one half of the sons"
  - "all of the sons"
  - "none of the sons"
answer: 1
marks: 1
misconception: sex-linkage-proportion
worked: |
  Cross: XᴮXᵇ × XᴮY.
  Offspring: XᴮXᴮ, XᴮXᵇ, XᴮY, XᵇY.
  Every son inherits Y from his father and either Xᴮ or Xᵇ from his mother.
  XᵇY has the deficiency (there is no second X to mask it), XᴮY does not.
  So one half of the sons are expected to be affected (a quarter of all the children).
```

```yaml
type: mcq
topic: "T14 Inheritance"
stem: "A human body cell contains 46 chromosomes. How many chromosomes are present in each cell produced by meiosis?"
options:
  - "46"
  - "22"
  - "92"
  - "23"
answer: 3
marks: 1
misconception: meiosis-chromosome-number
worked: |
  Meiosis is reduction division: it halves the chromosome number so that the gametes are haploid.
  46 ÷ 2 = 23 chromosomes in each of the four daughter cells.
  At fertilisation two gametes fuse and the diploid number 46 is restored.
```

```yaml
type: mcq
topic: "T14 Inheritance"
stem: "Which statement about mitosis is correct?"
options:
  - "It produces two genetically identical daughter cells with the same chromosome number as the parent cell."
  - "It halves the chromosome number of the parent cell."
  - "It occurs only in the testes and the ovaries."
  - "It produces four genetically different daughter cells."
answer: 0
marks: 1
misconception: mitosis-meiosis-confusion
worked: |
  Mitosis: one division, two daughter cells, chromosome number kept the same (diploid → diploid), daughter cells genetically identical to the parent. It is used for growth, repair and asexual reproduction.
  Meiosis: two divisions, four genetically different haploid cells, and it occurs in the reproductive organs to make gametes.
```

```yaml
type: mcq
topic: "T14 Inheritance"
stem: "Which human characteristic shows discontinuous variation?"
options:
  - "ABO blood group"
  - "height"
  - "hand span"
  - "body mass"
answer: 0
marks: 1
misconception: continuous-discontinuous-variation
worked: |
  Discontinuous variation puts individuals into a few clear-cut categories with no intermediates, and is controlled by a small number of genes with little environmental effect, ABO blood group (A, B, AB or O) is the classic example.
  Body mass, height and hand span form a continuous range of values (a normal distribution), so they show continuous variation.
```

```yaml
type: mcq
topic: "T14 Inheritance"
stem: "Sickle-cell anaemia is caused by a change in a single base in the gene that codes for haemoglobin. Which term best describes this change?"
options:
  - "mutation"
  - "natural selection"
  - "codominance"
  - "meiosis"
answer: 0
marks: 1
misconception: mutation-definition
worked: |
  A mutation is a random change in the base sequence of DNA (or in chromosome structure or number).
  A single base change alters one amino acid in the haemoglobin protein, producing the sickle-cell allele.
  Mutation is the original source of all new alleles; natural selection then acts on the variation it creates.
```

```yaml
type: mcq
topic: "T14 Inheritance"
stem: "In guinea pigs, black coat (B) is dominant to brown coat (b). A heterozygous black guinea pig is crossed with a brown guinea pig (Bb × bb). What percentage of the offspring is expected to be brown?"
options:
  - "75%"
  - "0%"
  - "25%"
  - "50%"
answer: 3
marks: 1
misconception: backcross-ratio
worked: |
  Parents: Bb × bb.
  Gametes: B and b from the black parent; b and b from the brown parent.
  Offspring: Bb, Bb, bb, bb → 1 Bb (black) : 1 bb (brown).
  Half the offspring are bb, so 50% are expected to be brown.
```

```yaml
type: mcq
topic: "T14 Inheritance"
stem: "Two parents who do not have a particular genetic condition have a child who does. Which conclusion can be drawn?"
options:
  - "The child's condition must have been caused by the environment."
  - "The condition is caused by a dominant allele carried by one parent."
  - "The condition is caused by a recessive allele and both parents are heterozygous carriers."
  - "Both parents must be homozygous recessive for the condition."
answer: 2
marks: 1
misconception: carrier-parents-deduction
worked: |
  If the allele were dominant, at least one parent would show the condition, neither does.
  So the allele must be recessive (call it a). The affected child is aa, taking one a from each parent.
  Each parent therefore carries an a but does not show the condition, so each must be Aa, a heterozygous carrier.
  The cross Aa × Aa gives a 1 in 4 chance of an aa child.
```

```yaml
type: mcq
topic: "T8 Homeostasis, Co-ordination & Response"
stem: "Blood glucose concentration rises sharply after a meal. Which response restores it towards the set point?"
options:
  - "The pancreas secretes insulin, which makes liver and muscle cells take up glucose and store it as glycogen."
  - "The adrenal glands secrete adrenaline, which raises blood glucose further."
  - "The pancreas secretes glucagon, which makes the liver break glycogen down into glucose."
  - "The liver secretes insulin, which converts stored glycogen into glucose."
answer: 0
marks: 1
misconception: insulin-glucagon-swap
worked: |
  A rise in blood glucose is detected by the pancreas, which secretes insulin.
  Insulin increases the uptake of glucose by liver and muscle cells and increases the conversion of glucose into glycogen for storage; respiration of glucose also increases.
  Blood glucose therefore falls back towards the set point, negative feedback.
  Glucagon does the opposite job and is secreted when glucose is low; insulin is made by the pancreas, not the liver.
```

```yaml
type: mcq
topic: "T8 Homeostasis, Co-ordination & Response"
stem: "A person has not eaten for many hours and blood glucose falls below the set point. Which hormone is secreted, and what is its effect?"
options:
  - "Glucagon; glucose in the blood is converted into glycogen."
  - "Glucagon; glycogen stored in the liver is converted back into glucose, which is released into the blood."
  - "Insulin; glucose in the blood is converted into glycogen."
  - "Adrenaline; glucose is converted into glycogen in muscle."
answer: 1
marks: 1
misconception: glycogen-glucose-direction
worked: |
  A fall in blood glucose is detected by the pancreas, which secretes glucagon.
  Glucagon acts on the liver, where glycogen is converted back into glucose; the glucose is released into the blood and the concentration rises towards the set point.
  Insulin does the reverse (glucose → glycogen), so it would make a low reading worse.
```

```yaml
type: mcq
topic: "T8 Homeostasis, Co-ordination & Response"
stem: "Which statement best describes negative feedback in homeostasis?"
options:
  - "Corrective mechanisms operate only when a value falls below the set point, never when it rises above."
  - "A change away from the set point triggers a response that increases the change."
  - "A change away from the set point triggers a response that brings the value back towards the set point."
  - "Internal conditions are held exactly constant at all times, with no variation at all."
answer: 2
marks: 1
misconception: negative-feedback-definition
worked: |
  In negative feedback, receptors detect a deviation from the set point; a corrective mechanism is switched on; the value returns towards the set point; the corrective mechanism is then switched off.
  The response opposes (is 'negative' to) the original change.
  Conditions fluctuate slightly around the set point rather than staying perfectly constant, and both rises and falls are corrected.
```

```yaml
type: mcq
topic: "T8 Homeostasis, Co-ordination & Response"
stem: "What is the correct order of structures in a simple reflex arc?"
options:
  - "receptor → relay neurone → sensory neurone → motor neurone → effector"
  - "effector → sensory neurone → relay neurone → motor neurone → receptor"
  - "receptor → motor neurone → relay neurone → sensory neurone → effector"
  - "receptor → sensory neurone → relay neurone → motor neurone → effector"
answer: 3
marks: 1
misconception: reflex-arc-order
worked: |
  A stimulus is detected by a receptor.
  The sensory neurone carries the impulse into the spinal cord.
  A relay neurone in the spinal cord passes the impulse on across synapses.
  The motor neurone carries the impulse out to the effector (a muscle or gland), which produces the response.
  The pathway does not go via the conscious brain, which is why the response is rapid and automatic.
```

```yaml
type: mcq
topic: "T8 Homeostasis, Co-ordination & Response"
stem: "Which neurone carries impulses from the spinal cord to a muscle?"
options:
  - "motor neurone"
  - "relay neurone"
  - "sensory neurone"
  - "receptor"
answer: 0
marks: 1
misconception: neurone-direction
worked: |
  Motor neurones carry impulses away from the central nervous system to an effector such as a muscle or a gland.
  Sensory neurones carry impulses from receptors towards the central nervous system.
  Relay neurones connect the two inside the central nervous system.
```

```yaml
type: mcq
topic: "T8 Homeostasis, Co-ordination & Response"
stem: "Myelinated neurones conduct impulses much faster than unmyelinated neurones of the same diameter. Which statement explains the role of the myelin sheath?"
options:
  - "It insulates the axon so that the impulse jumps from gap to gap, speeding up transmission."
  - "It supplies the axon with glucose for respiration."
  - "It releases the neurotransmitter at the synapse."
  - "It carries the impulse across the gap between two neurones."
answer: 0
marks: 1
misconception: myelin-function
worked: |
  The myelin sheath is a fatty layer that electrically insulates the axon.
  The impulse cannot pass through the insulated regions, so it jumps between the gaps in the sheath instead of travelling along every part of the membrane, this makes conduction much faster.
  Myelin does not carry impulses across synapses; a chemical neurotransmitter does that.
```

```yaml
type: mcq
topic: "T8 Homeostasis, Co-ordination & Response"
stem: "On a hot day the arterioles supplying the skin capillaries widen (vasodilation). How does this help to cool the body?"
options:
  - "More blood flows through the capillaries near the skin surface, so more heat is lost to the surroundings by radiation."
  - "The sweat glands stop producing sweat, so less heat is gained."
  - "Less blood flows to the skin, so heat is trapped deep in the body."
  - "The blood vessels move closer to the skin surface so that heat can escape."
answer: 0
marks: 1
misconception: vessels-move-in-skin
worked: |
  Vasodilation means the arterioles supplying the skin capillaries widen, so a greater volume of blood flows through the capillary loops near the skin surface.
  More heat is therefore carried to the surface and lost by radiation (and by conduction/convection), cooling the blood and the body.
  The vessels themselves do not move up or down in the skin, this is the classic error; only the volume of blood flowing through them changes.
```

```yaml
type: mcq
topic: "T8 Homeostasis, Co-ordination & Response"
stem: "Why does sweating cool the body?"
options:
  - "Water in the sweat evaporates, and the latent heat needed for evaporation is taken from the body surface."
  - "Sweat is already cold when it is released and cools the blood directly."
  - "Sweating raises the metabolic rate so that less heat is released."
  - "Sweat blocks the pores in the skin so that less heat escapes."
answer: 0
marks: 1
misconception: sweat-cooling-mechanism
worked: |
  Sweat is secreted onto the skin at body temperature, it is not cold.
  Cooling happens when the water in the sweat evaporates: the energy (latent heat of vaporisation) needed to change liquid water into water vapour is taken from the skin and the blood beneath it.
  The body surface therefore loses heat and cools. Sweat that drips off without evaporating gives no cooling, which is why humid air makes people feel hotter.
```

```yaml
type: mcq
topic: "T8 Homeostasis, Co-ordination & Response"
stem: "How is a nerve impulse passed from one neurone to the next at a synapse?"
options:
  - "The two neurones fuse together so that the impulse can pass through."
  - "A neurotransmitter is released, diffuses across the synaptic gap and binds to receptors on the next neurone, starting a new impulse."
  - "A hormone is carried in the blood from one neurone to the next."
  - "The electrical impulse jumps directly across the gap between the two neurones."
answer: 1
marks: 1
misconception: synapse-transmission
worked: |
  When an impulse reaches the end of the first neurone, vesicles release a chemical neurotransmitter into the synaptic gap.
  The neurotransmitter diffuses across the tiny gap and binds to specific receptors on the membrane of the next neurone.
  This triggers a new impulse in the next neurone. Because release happens on only one side, the synapse makes transmission one-way.
```

```yaml
type: mcq
topic: "T8 Homeostasis, Co-ordination & Response"
stem: "A person walks from a dim room into bright sunlight. What happens in the iris?"
options:
  - "The circular muscles contract and the radial muscles relax, so the pupil becomes smaller."
  - "Both sets of muscles contract, so the pupil stays the same size."
  - "The circular muscles relax and the radial muscles contract, so the pupil becomes smaller."
  - "The radial muscles contract and the circular muscles relax, so the pupil becomes larger."
answer: 0
marks: 1
misconception: pupil-reflex-muscles
worked: |
  Bright light is a stimulus detected by receptors in the retina.
  In the pupil reflex, the circular muscles of the iris contract and the radial muscles relax.
  The pupil constricts, so less light enters the eye and the retina is protected from damage.
  In dim light the opposite happens: radial muscles contract, circular muscles relax, and the pupil dilates.
```

```yaml
type: mcq
topic: "T8 Homeostasis, Co-ordination & Response"
stem: "To focus on a nearby object, which changes occur in the eye?"
options:
  - "The ciliary muscles relax, the suspensory ligaments are pulled tight and the lens becomes thinner."
  - "The ciliary muscles contract, the suspensory ligaments slacken and the lens becomes fatter (more convex)."
  - "The ciliary muscles contract, the suspensory ligaments are pulled tight and the lens becomes thinner."
  - "The lens moves forwards towards the cornea while its shape stays the same."
answer: 1
marks: 1
misconception: accommodation-ciliary-muscle
worked: |
  Light from a near object is diverging strongly, so it must be refracted more.
  The ciliary muscles contract, which reduces the pull of the suspensory ligaments on the lens.
  The ligaments slacken and the elastic lens becomes fatter and more convex, refracting light more strongly so the image is focused on the retina.
  For a distant object the ciliary muscles relax, the ligaments are pulled taut and the lens becomes thinner.
```

```yaml
type: mcq
topic: "T11 Organisms & their Environment"
stem: "In the food chain grass → grasshopper → frog → snake, what does each arrow represent?"
options:
  - "the direction in which the predator moves to find its prey"
  - "the transfer of carbon dioxide between organisms"
  - "the direction in which heat energy is lost to the surroundings"
  - "the direction of energy flow, from the organism eaten to the organism that eats it"
answer: 3
marks: 1
misconception: food-chain-arrow-direction
worked: |
  The arrows in a food chain point in the direction that energy (and biomass) is transferred.
  Grass is the producer; it traps light energy in photosynthesis. Energy passes to the grasshopper when it eats the grass, then to the frog, then to the snake.
  The arrow therefore always points from the organism that is eaten to the organism that eats it, never 'is eaten by' in the opposite direction.
```

```yaml
type: mcq
topic: "T11 Organisms & their Environment"
stem: "Producers in a grassland trap 12 000 kJ m⁻² per year. The primary consumers that feed on them store 1 080 kJ m⁻² per year in their tissues. What percentage of the producers' energy is transferred to the primary consumers?"
options:
  - "90%"
  - "9%"
  - "11%"
  - "0.9%"
answer: 1
marks: 1
misconception: energy-transfer-percentage
worked: |
  Percentage transferred = (energy in consumers ÷ energy in producers) × 100.
  = (1 080 ÷ 12 000) × 100
  = 0.09 × 100
  = 9%.
  The remaining 91% is lost, mostly as heat from respiration, in undigested material in faeces, and in urine.
```

```yaml
type: mcq
topic: "T11 Organisms & their Environment"
stem: "A single oak tree supports about 500 caterpillars, which in turn support about 20 birds. Which statement about the pyramids for this food chain is correct?"
options:
  - "Both the pyramid of numbers and the pyramid of biomass are upright."
  - "Both pyramids are inverted at the base."
  - "The pyramid of numbers is inverted at the base because one tree supports many caterpillars, but a pyramid of biomass would be upright."
  - "No pyramid can be drawn because a tree is not a producer."
answer: 2
marks: 1
misconception: pyramid-numbers-vs-biomass
worked: |
  A pyramid of numbers counts organisms, ignoring their size. Here the producer level is a single very large tree, so its bar (1) is far narrower than the caterpillar bar (500), the pyramid is inverted at the base.
  A pyramid of biomass uses the total dry mass at each level. The one oak tree has a huge biomass, far greater than 500 caterpillars, so the biomass pyramid is upright.
  The oak is a producer: it photosynthesises.
```

```yaml
type: mcq
topic: "T11 Organisms & their Environment"
stem: "Which process removes carbon dioxide from the atmosphere?"
options:
  - "combustion"
  - "respiration"
  - "photosynthesis"
  - "decomposition"
answer: 2
marks: 1
misconception: carbon-cycle-direction
worked: |
  Photosynthesis is the only process listed that takes carbon dioxide out of the air: green plants use CO₂ and water to make glucose, fixing the carbon into organic compounds.
  Respiration, combustion of fuels and the respiration of decomposers all release carbon dioxide back into the atmosphere.
```

```yaml
type: mcq
topic: "T11 Organisms & their Environment"
stem: "Which pair of processes returns carbon dioxide to the atmosphere?"
options:
  - "transpiration and photosynthesis"
  - "photosynthesis and respiration"
  - "respiration and combustion"
  - "photosynthesis and combustion"
answer: 2
marks: 1
misconception: carbon-cycle-processes
worked: |
  Respiration in plants, animals and decomposers breaks down glucose and releases carbon dioxide.
  Combustion of wood and fossil fuels oxidises the carbon they contain and releases carbon dioxide.
  Photosynthesis removes CO₂ rather than releasing it, and transpiration is the loss of water vapour, not carbon dioxide.
```

```yaml
type: mcq
topic: "T11 Organisms & their Environment"
stem: "What is the role of decomposers such as bacteria and fungi in an ecosystem?"
options:
  - "They lock nutrients away so that they cannot be recycled."
  - "They break down dead organisms and waste, releasing mineral nutrients back into the soil for plants to reuse."
  - "They add extra energy to the ecosystem at every trophic level."
  - "They convert light energy into chemical energy in the ecosystem."
answer: 1
marks: 1
misconception: decomposer-role
worked: |
  Decomposers secrete enzymes onto dead bodies, faeces and dead plant material and absorb the soluble products (saprophytic nutrition).
  As they respire and feed they release carbon dioxide and return mineral nutrients such as nitrates back to the soil, where plants absorb them again.
  Only producers convert light energy into chemical energy, and no organism adds new energy to an ecosystem.
```

```yaml
type: mcq
topic: "T11 Organisms & their Environment"
stem: "In a food web, hawks eat both rabbits and mice, and both rabbits and mice eat grass. A disease kills most of the rabbits. What is the most likely short-term effect?"
options:
  - "The hawk population rises immediately because there is less competition."
  - "The grass is grazed more heavily and its biomass falls sharply."
  - "The mouse population falls because there is less grass available."
  - "Hawks feed more heavily on mice, so the mouse population falls."
answer: 3
marks: 1
misconception: food-web-knock-on-effects
worked: |
  Losing most rabbits removes one of the hawks' two food sources, so predation pressure shifts onto the remaining prey, the mice. More mice are eaten, so the mouse population falls.
  Grass is grazed less (fewer rabbits), so grass biomass would rise, not fall.
  Hawks lose a food source, so their numbers are more likely to fall than to rise.
```

```yaml
type: mcq
topic: "T11 Organisms & their Environment"
stem: "A pesticide washed into a lake is present in the plankton at 0.05 mg per kg of tissue, and in the fish that eat the plankton at 2.5 mg per kg of tissue. What is the bioaccumulation factor from plankton to fish?"
options:
  - "2.45"
  - "5"
  - "50"
  - "0.02"
answer: 2
marks: 1
misconception: bioaccumulation-factor
worked: |
  Bioaccumulation factor = concentration in the higher trophic level ÷ concentration in the lower trophic level.
  = 2.5 ÷ 0.05
  = 50.
  The pesticide is not broken down or excreted, so it builds up in the tissues of each organism and becomes more concentrated at each step up the chain. Subtracting the concentrations (2.45) gives a difference, not a factor.
```

```yaml
type: mcq
topic: "T11 Organisms & their Environment"
stem: "Fertiliser runs off farmland into a river and fish are later found dead. Which sequence explains this?"
options:
  - "Algae grow rapidly → the algae die → bacteria decompose them and respire aerobically → dissolved oxygen falls → fish suffocate"
  - "Bacteria use the fertiliser to make oxygen → oxygen bubbles block the gills of the fish"
  - "The fertiliser poisons the fish directly → the dead fish decay → algae grow on them"
  - "Algae grow rapidly → the algae release carbon dioxide → the water becomes too acidic for fish"
answer: 0
marks: 1
misconception: eutrophication-sequence
worked: |
  Nitrates and phosphates in the run-off act as nutrients, causing an algal bloom that covers the water surface.
  Algae below are shaded, cannot photosynthesise, and die.
  Decomposing bacteria feed on the dead algae, multiply rapidly and respire aerobically, using up the dissolved oxygen.
  The oxygen concentration of the water falls, so fish and other aquatic animals cannot respire and die. The fertiliser itself is not a poison, the oxygen shortage kills the fish.
```

```yaml
type: mcq
topic: "T11 Organisms & their Environment"
stem: "Why does large-scale deforestation increase the carbon dioxide concentration of the atmosphere?"
options:
  - "Fewer trees remain to remove carbon dioxide by photosynthesis, and burning or decay of the felled timber releases stored carbon as carbon dioxide."
  - "Deforestation speeds up photosynthesis in the remaining plants."
  - "Soil bacteria stop respiring once the trees are removed."
  - "Trees only release carbon dioxide while they are alive, so removing them raises the concentration."
answer: 0
marks: 1
misconception: deforestation-carbon-effect
worked: |
  Trees are a major carbon sink: photosynthesis removes CO₂ from the air and locks the carbon into wood.
  Felling them reduces the total rate of photosynthesis, so less CO₂ is removed.
  Burning the timber (combustion) or letting it rot (decomposer respiration) releases the stored carbon straight back into the atmosphere as CO₂.
  Both effects push the atmospheric CO₂ concentration up.
```

```yaml
type: mcq
topic: "T5 Transport in Humans"
stem: "A blood vessel is seen in section to have a thick wall containing muscle and elastic fibres, and a relatively narrow lumen. Which vessel is it, and why does it have this structure?"
options:
  - "A capillary, a narrow lumen brings blood close to the surrounding cells."
  - "An artery, it must withstand and help maintain the high pressure of blood leaving the heart."
  - "A vein, the thick wall is needed to prevent the backflow of blood."
  - "A vein, it must withstand the highest pressure in the circulatory system."
answer: 1
marks: 1
misconception: artery-vein-identification
worked: |
  Arteries carry blood away from the heart at high pressure, which surges with each beat.
  The thick muscular and elastic wall withstands that pressure without bursting; the elastic fibres stretch and recoil, smoothing the flow and helping to maintain pressure.
  The narrow lumen also helps to keep the pressure high.
  Veins carry blood at low pressure and have thin walls, wide lumens and valves; capillaries are one cell thick.
```

```yaml
type: mcq
topic: "T5 Transport in Humans"
stem: "Veins contain semilunar valves along their length. What is the function of these valves?"
options:
  - "They raise the pressure of the blood inside the vein."
  - "They pump the blood back towards the heart."
  - "They prevent the backflow of blood, so blood keeps moving towards the heart."
  - "They allow blood to pass out into the capillaries."
answer: 2
marks: 1
misconception: vein-valve-function
worked: |
  Blood in veins is at low pressure, so it is at risk of flowing backwards, especially when it must travel upwards from the legs.
  When surrounding skeletal muscles contract they squeeze the veins and push the blood along; the semilunar valves then close if blood starts to move the wrong way.
  The valves do not pump, the muscles do the pushing; the valves simply make the flow one-way.
```

```yaml
type: mcq
topic: "T5 Transport in Humans"
stem: "Which feature of a capillary allows efficient exchange of substances between blood and the surrounding tissues?"
options:
  - "Its wall is only one cell thick, so the diffusion distance is very short."
  - "It has a very wide lumen so blood flows through it quickly."
  - "It contains valves that push substances into the cells."
  - "Its wall is thick and muscular, so substances are forced out."
answer: 0
marks: 1
misconception: capillary-adaptation
worked: |
  A capillary wall is a single layer of flattened cells, so oxygen, glucose, carbon dioxide and other substances have only a very short distance to diffuse.
  Capillaries are also extremely numerous and narrow, giving a huge total surface area and slowing the blood, which allows more time for exchange.
  They have no valves and no muscular wall.
```

```yaml
type: mcq
topic: "T5 Transport in Humans"
stem: "Deoxygenated blood returning from the body is on its way to the lungs. Through which structures does it pass, in order?"
options:
  - "vena cava → right atrium → right ventricle → pulmonary artery"
  - "vena cava → left atrium → left ventricle → aorta"
  - "pulmonary vein → left atrium → left ventricle → aorta"
  - "aorta → right atrium → right ventricle → pulmonary vein"
answer: 0
marks: 1
misconception: circulation-vessel-tracing
worked: |
  Blood from the body enters the heart through the vena cava into the right atrium.
  The right atrium contracts and blood passes through a valve into the right ventricle.
  The right ventricle contracts and pumps blood into the pulmonary artery, which carries it to the lungs.
  The pulmonary vein returns oxygenated blood to the left atrium, that is the second circuit of the double circulation.
```

```yaml
type: mcq
topic: "T5 Transport in Humans"
stem: "Why is the muscular wall of the left ventricle thicker than that of the right ventricle?"
options:
  - "It must generate a higher pressure because it pumps blood all around the body."
  - "It must hold a much larger volume of blood than the right ventricle."
  - "It supports the valves, which are larger on the left side."
  - "It pumps blood only as far as the lungs, which needs more force."
answer: 0
marks: 1
misconception: ventricle-wall-thickness
worked: |
  The right ventricle pumps blood only to the lungs, which are close by and contain delicate capillaries, a lower pressure is needed.
  The left ventricle pumps blood into the aorta and all around the body, so it must produce a much higher pressure to push blood through a far greater distance and resistance.
  A thicker layer of cardiac muscle contracts more powerfully, generating that higher pressure.
  Both ventricles hold about the same volume of blood.
```

```yaml
type: mcq
topic: "T5 Transport in Humans"
stem: "Which vessel carries oxygenated blood at the highest pressure?"
options:
  - "the pulmonary vein"
  - "the pulmonary artery"
  - "the aorta"
  - "the vena cava"
answer: 2
marks: 1
misconception: oxygenation-vs-pressure
worked: |
  The aorta leaves the left ventricle, the most powerful chamber, so the blood inside it is at the highest pressure in the body, and it is oxygenated.
  The pulmonary artery is also at fairly high pressure but carries deoxygenated blood.
  The pulmonary vein carries oxygenated blood but at low pressure (it has already passed through the lung capillaries).
  The vena cava carries deoxygenated blood at the lowest pressure.
```

```yaml
type: mcq
topic: "T5 Transport in Humans"
stem: "Which feature of a red blood cell increases the surface area available for the uptake of oxygen?"
options:
  - "its ability to squeeze through narrow capillaries"
  - "its biconcave disc shape"
  - "the presence of haemoglobin"
  - "the absence of a nucleus"
answer: 1
marks: 1
misconception: rbc-adaptation-surface-area
worked: |
  The biconcave disc shape (a flattened disc dipped in on both sides) gives a larger surface area to volume ratio than a sphere of the same volume, so oxygen can diffuse in and out faster.
  Having no nucleus creates more room for haemoglobin, that increases the oxygen-carrying capacity, not the surface area.
  Haemoglobin is the molecule that binds the oxygen; flexibility lets the cell pass through narrow capillaries.
```

```yaml
type: mcq
topic: "T5 Transport in Humans"
stem: "How does a phagocyte help to defend the body against invading bacteria?"
options:
  - "It engulfs the bacteria and digests them with enzymes."
  - "It releases insulin so that the bacteria are starved of glucose."
  - "It produces fibrin, which traps the bacteria in a clot."
  - "It carries extra oxygen to the site of the infection."
answer: 0
marks: 1
misconception: phagocyte-function
worked: |
  Phagocytes are white blood cells that move towards bacteria, change shape and flow around them, engulfing them into a vacuole.
  Enzymes are then released into the vacuole and digest the bacteria.
  Red blood cells carry oxygen; platelets and fibrin are involved in clotting; insulin is a hormone from the pancreas and has nothing to do with defence.
```

```yaml
type: mcq
topic: "T5 Transport in Humans"
stem: "A person's heart pumps 75 cm³ of blood out of the left ventricle with each beat, at a rate of 72 beats per minute. What volume of blood leaves the left ventricle in one minute?"
options:
  - "1.04 cm³"
  - "5400 cm³"
  - "540 cm³"
  - "147 cm³"
answer: 1
marks: 1
misconception: cardiac-output-calculation
worked: |
  Volume per minute = volume per beat × beats per minute
  = 75 cm³ × 72
  = 5400 cm³ per minute (5.4 dm³ per minute).
  Dividing (75 ÷ 72 ≈ 1.04) or adding (75 + 72 = 147) are the common slips.
```

```yaml
type: mcq
topic: "T5 Transport in Humans"
stem: "Which vessel carries blood rich in newly absorbed glucose from the small intestine to the liver?"
options:
  - "the hepatic vein"
  - "the pulmonary vein"
  - "the hepatic artery"
  - "the hepatic portal vein"
answer: 3
marks: 1
misconception: hepatic-portal-vein
worked: |
  Products of digestion absorbed into the capillaries of the villi drain into the hepatic portal vein, which carries them directly to the liver.
  The liver regulates the glucose concentration (storing excess as glycogen) before the blood continues to the rest of the body.
  The hepatic artery brings oxygenated blood to the liver; the hepatic vein carries blood away from the liver to the vena cava.
```

```yaml
type: mcq
topic: "T10 Nutrition & Transport in Plants"
stem: "Which equation represents photosynthesis?"
options:
  - "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (in light, with chlorophyll)"
  - "6CO₂ + 6O₂ → C₆H₁₂O₆ + 6H₂O"
  - "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂"
  - "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O"
answer: 0
marks: 1
misconception: photosynthesis-equation
worked: |
  Photosynthesis uses carbon dioxide and water as the raw materials, with light absorbed by chlorophyll providing the energy, to make glucose and release oxygen as a by-product.
  Word equation: carbon dioxide + water → glucose + oxygen.
  The distractor C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O is aerobic respiration, the reverse process, and C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ is anaerobic respiration in yeast.
```

```yaml
type: mcq
topic: "T10 Nutrition & Transport in Plants"
stem: "A graph of the rate of photosynthesis against light intensity rises steeply and then levels off, with temperature and carbon dioxide concentration kept constant. What does the flat part of the graph show?"
options:
  - "The plant has stopped photosynthesising altogether."
  - "The chlorophyll has been destroyed by the bright light."
  - "Light intensity has become the limiting factor."
  - "Light is no longer the limiting factor; another factor such as carbon dioxide concentration or temperature is now limiting the rate."
answer: 3
marks: 1
misconception: limiting-factor-plateau
worked: |
  On the steep part, increasing light increases the rate, so light is the limiting factor there.
  On the plateau, further increases in light make no difference, so light can no longer be the factor holding the rate back.
  Something else must now be in short supply, with light plentiful, the rate is limited by the carbon dioxide concentration or by temperature.
  The rate is still high on the plateau, so photosynthesis has certainly not stopped.
```

```yaml
type: mcq
topic: "T10 Nutrition & Transport in Plants"
stem: "Which leaf tissue contains the most chloroplasts and lies just below the upper epidermis?"
options:
  - "palisade mesophyll"
  - "lower epidermis"
  - "xylem"
  - "spongy mesophyll"
answer: 0
marks: 1
misconception: leaf-tissue-function
worked: |
  Palisade mesophyll cells are column-shaped, packed closely together near the top of the leaf and contain the most chloroplasts, so they absorb the maximum amount of light, they are the main site of photosynthesis.
  Spongy mesophyll has fewer chloroplasts and large air spaces for gas diffusion.
  Xylem transports water; the epidermis is a protective layer with few or no chloroplasts.
```

```yaml
type: mcq
topic: "T10 Nutrition & Transport in Plants"
stem: "What causes a stoma to open?"
options:
  - "The guard cells take in water by osmosis and become turgid, curving apart."
  - "Carbon dioxide diffuses inwards and forces the pore open."
  - "The guard cells lose water and become flaccid."
  - "The surrounding epidermal cells push the guard cells apart."
answer: 0
marks: 1
misconception: guard-cell-mechanism
worked: |
  Guard cells take in water by osmosis and become turgid.
  Their inner wall (next to the pore) is thicker and less elastic than the outer wall, so as they swell they curve away from each other and the stoma opens.
  When guard cells lose water they become flaccid, straighten and the stoma closes, reducing water loss.
  Opening lets CO₂ diffuse in for photosynthesis; CO₂ does not force the pore open.
```

```yaml
type: mcq
topic: "T10 Nutrition & Transport in Plants"
stem: "Which statement about xylem vessels is correct?"
options:
  - "They are living tubes with sieve plates that carry sucrose to the roots."
  - "They use energy from companion cells to move water up the plant."
  - "They are dead, hollow tubes with lignified walls that carry water and mineral ions upwards from the roots."
  - "They carry water downwards from the leaves to the roots."
answer: 2
marks: 1
misconception: xylem-phloem-confusion
worked: |
  Xylem vessels are made of dead cells joined end to end with their end walls broken down, forming continuous hollow tubes.
  Their walls are strengthened with lignin, which supports the plant and stops the vessels collapsing under tension.
  They carry water and dissolved mineral ions in one direction only, upwards from root to leaf.
  Sieve tubes with sieve plates and companion cells are phloem, not xylem.
```

```yaml
type: mcq
topic: "T10 Nutrition & Transport in Plants"
stem: "Sucrose made in the leaves of a potato plant is moved to a growing tuber underground. Which tissue carries it, and what is this process called?"
options:
  - "xylem; translocation"
  - "phloem; translocation"
  - "xylem; transpiration"
  - "phloem; transpiration"
answer: 1
marks: 1
misconception: translocation-tissue
worked: |
  Translocation is the transport of manufactured food substances, mainly sucrose and amino acids, from a source (such as a photosynthesising leaf) to a sink (such as a growing tuber, fruit or root).
  It takes place in the phloem sieve tubes, which are living cells supported by companion cells, and it can occur up or down the plant.
  Xylem carries only water and mineral ions, and only upwards.
```

```yaml
type: mcq
topic: "T10 Nutrition & Transport in Plants"
stem: "A potted plant is placed in front of a fan. Why does its rate of transpiration increase?"
options:
  - "The wind physically pushes water out through the stomata."
  - "The wind lowers the temperature of the leaf, which speeds up evaporation."
  - "The wind increases the humidity of the air immediately around the leaf."
  - "Moving air sweeps water vapour away from around the stomata, keeping the water-potential gradient between the leaf and the air steep."
answer: 3
marks: 1
misconception: wind-transpiration-explanation
worked: |
  In still air, water vapour builds up in a layer just outside the stomata, so the humidity there rises and the water-potential gradient between the air spaces inside the leaf and the air outside becomes shallow, diffusion slows.
  Moving air removes that humid layer, so the air next to the stomata stays dry and the gradient stays steep.
  Water vapour therefore diffuses out of the stomata faster and transpiration increases. Wind does not push water out, and a cooler leaf would evaporate water more slowly, not faster.
```

```yaml
type: mcq
topic: "T10 Nutrition & Transport in Plants"
stem: "In a potometer, the air bubble travels 60 mm along the capillary tube in 5 minutes. The tube has a cross-sectional area of 1 mm². What is the rate of water uptake by the shoot?"
options:
  - "60 mm³ per minute"
  - "0.083 mm³ per minute"
  - "300 mm³ per minute"
  - "12 mm³ per minute"
answer: 3
marks: 1
misconception: potometer-rate-calculation
worked: |
  Volume of water taken up = distance moved × cross-sectional area
  = 60 mm × 1 mm² = 60 mm³.
  Rate = volume ÷ time = 60 mm³ ÷ 5 min = 12 mm³ per minute.
  Quoting 60 mm³ forgets to divide by time; multiplying (60 × 5 = 300) instead of dividing is the other common slip.
```

```yaml
type: mcq
topic: "T10 Nutrition & Transport in Plants"
stem: "Which mineral ion must a plant absorb from the soil in order to make chlorophyll?"
options:
  - "potassium ions"
  - "calcium ions"
  - "nitrate ions"
  - "magnesium ions"
answer: 3
marks: 1
misconception: mineral-ion-function
worked: |
  Magnesium is a component of the chlorophyll molecule, so a plant short of magnesium cannot make enough chlorophyll and its leaves turn yellow (chlorosis), reducing photosynthesis.
  Nitrate ions are needed to make amino acids and therefore proteins; a shortage causes stunted growth.
  Root hair cells take these ions up by active transport, because the ions are usually more concentrated inside the cell than in the soil water.
```

```yaml
type: mcq
topic: "T7 Excretion in Humans"
stem: "Where in a nephron does ultrafiltration take place?"
options:
  - "in the loop of Henle"
  - "in the collecting duct"
  - "between the glomerulus and the Bowman's capsule"
  - "along the whole length of the proximal convoluted tubule"
answer: 2
marks: 1
misconception: ultrafiltration-site
worked: |
  Blood enters the glomerulus through a wide afferent arteriole and leaves through a narrower efferent arteriole, so the blood inside is under high pressure.
  This pressure forces water and small dissolved molecules out through the capillary wall and the wall of the Bowman's capsule into the capsule space, ultrafiltration.
  The proximal convoluted tubule is where selective reabsorption happens; the collecting duct is where water reabsorption is adjusted by ADH.
```

```yaml
type: mcq
topic: "T7 Excretion in Humans"
stem: "Which component of blood is normally absent from the filtrate in the Bowman's capsule?"
options:
  - "mineral ions"
  - "glucose"
  - "urea"
  - "plasma proteins"
answer: 3
marks: 1
misconception: filtration-molecule-size
worked: |
  The filter formed by the capillary wall and the capsule wall acts like a sieve based on molecular size.
  Water, glucose, urea, mineral ions and other small molecules pass through into the filtrate.
  Plasma proteins and blood cells are too large to pass through, so they stay in the blood. Protein in the urine is therefore a sign that the filter is damaged.
```

```yaml
type: mcq
topic: "T7 Excretion in Humans"
stem: "All of the glucose in the filtrate is normally returned to the blood before the filtrate reaches the collecting duct. What is this process called, and how does it occur?"
options:
  - "selective reabsorption, glucose is moved from the proximal convoluted tubule back into the blood capillaries, using active transport"
  - "deamination, glucose is broken down in the tubule wall"
  - "osmosis, glucose passes back into the blood because it is a small molecule"
  - "ultrafiltration, glucose is forced back into the blood by high pressure"
answer: 0
marks: 1
misconception: selective-reabsorption-mechanism
worked: |
  Selective reabsorption means useful substances are taken back into the blood while wastes are left behind.
  Glucose (and much of the mineral ion content) is reabsorbed in the proximal convoluted tubule; because glucose must often move against its concentration gradient, active transport is used, requiring energy from respiration, which is why the tubule cells contain many mitochondria.
  Water follows by osmosis. Urea is largely left in the tubule and excreted.
```

```yaml
type: mcq
topic: "T7 Excretion in Humans"
stem: "A person sweats heavily and drinks very little water. Which response is expected?"
options:
  - "ADH is released, causing the liver to produce less urea."
  - "More ADH is released, more water is reabsorbed at the collecting duct, and a small volume of concentrated urine is produced."
  - "More ADH is released, so a large volume of dilute urine is produced."
  - "Less ADH is released, so a large volume of dilute urine is produced."
answer: 1
marks: 1
misconception: adh-water-balance
worked: |
  Sweating and low water intake lower the water content of the blood.
  This is detected by the brain, and more ADH (antidiuretic hormone) is released into the blood.
  ADH makes the walls of the collecting duct more permeable to water, so more water is reabsorbed back into the blood.
  Less water is lost, so a small volume of concentrated urine is produced and the water content of the blood returns towards normal, negative feedback.
```

```yaml
type: mcq
topic: "T7 Excretion in Humans"
stem: "Where is urea made in the body, and from what?"
options:
  - "in the liver, by the deamination of excess amino acids"
  - "in the liver, by the breakdown of excess glucose"
  - "in the kidney, by the breakdown of old red blood cells"
  - "in the kidney, by the deamination of excess amino acids"
answer: 0
marks: 1
misconception: urea-production-site
worked: |
  Excess amino acids cannot be stored. In the liver they are deaminated: the amino group is removed and converted into ammonia, which is very toxic, and is immediately converted into the less toxic urea.
  The remaining carbon-containing part can be respired or converted into glycogen or fat.
  Urea is carried in the blood plasma to the kidneys, which remove it, the kidneys excrete urea but do not make it.
```

```yaml
type: mcq
topic: "T7 Excretion in Humans"
stem: "A substance is present in blood plasma, present in the filtrate in the Bowman's capsule, but absent from the urine of a healthy person. Which substance is it?"
options:
  - "glucose"
  - "water"
  - "urea"
  - "plasma protein"
answer: 0
marks: 1
misconception: filtrate-urine-comparison
worked: |
  Work through the three columns.
  Plasma protein is too large to be filtered, so it never enters the filtrate, it fails the second condition.
  Urea is filtered and is not reabsorbed, so it appears in the urine.
  Water is filtered and appears in urine (urine is mostly water).
  Glucose is small enough to be filtered, but it is completely reabsorbed by active transport, so a healthy person's urine contains none. Glucose fits all three columns.
```

```yaml
type: mcq
topic: "T7 Excretion in Humans"
stem: "In a kidney dialysis machine, the dialysis fluid contains glucose at the same concentration as normal blood plasma, but contains no urea. Why?"
options:
  - "So that water is drawn out of the blood by osmosis."
  - "So that both glucose and urea are removed from the blood."
  - "So that urea diffuses out of the blood down a concentration gradient, while there is no net movement of glucose out of the blood."
  - "So that glucose diffuses out of the blood while urea diffuses into it."
answer: 2
marks: 1
misconception: dialysis-fluid-composition
worked: |
  Exchange across the dialysis membrane happens by diffusion, always down a concentration gradient.
  Urea: high in the patient's blood, zero in the dialysis fluid → a steep gradient, so urea diffuses out of the blood and is removed.
  Glucose: equal concentration on both sides → no concentration gradient, so there is no net movement and the patient does not lose glucose.
  The same principle is used for mineral ions, which are set at normal plasma levels.
```

```yaml
type: mcq
topic: "T13 Reproduction"
stem: "Where does fertilisation normally take place in a human female?"
options:
  - "in the uterus"
  - "in the vagina"
  - "in the ovary"
  - "in the oviduct"
answer: 3
marks: 1
misconception: fertilisation-site
worked: |
  After ovulation the egg passes into the oviduct (fallopian tube) and is moved along by cilia.
  Sperm swim from the vagina through the cervix and uterus into the oviduct, where one sperm nucleus fuses with the egg nucleus, fertilisation.
  The resulting zygote divides by mitosis as it travels on to the uterus, where the ball of cells implants in the thick uterus lining.
```

```yaml
type: mcq
topic: "T13 Reproduction"
stem: "Which statement about the placenta is correct?"
options:
  - "Oxygen and dissolved nutrients diffuse from the mother's blood into the fetal blood; the two blood supplies stay separate."
  - "The mother's blood and the fetal blood mix, so that oxygen can be shared."
  - "The placenta manufactures the red blood cells that the fetus needs."
  - "Urea passes from the mother's blood into the fetal blood for removal."
answer: 0
marks: 1
misconception: placenta-blood-mixing
worked: |
  In the placenta, fetal capillaries lie very close to pools of the mother's blood, giving a large surface area and a short diffusion distance, but the two blood systems never mix.
  Oxygen, glucose, amino acids, mineral ions and antibodies diffuse from mother to fetus; carbon dioxide and urea diffuse from fetus to mother for removal.
  Keeping the blood separate protects the fetus from the mother's high blood pressure and prevents problems if their blood groups differ.
```

```yaml
type: mcq
topic: "T13 Reproduction"
stem: "In a typical 28-day menstrual cycle, at about which day does ovulation occur?"
options:
  - "day 14"
  - "day 28"
  - "day 1"
  - "day 5"
answer: 0
marks: 1
misconception: menstrual-cycle-timing
worked: |
  Day 1 marks the start of menstruation, when the uterus lining breaks down and is lost.
  The lining then repairs and thickens as a follicle matures in the ovary.
  Ovulation, the release of the egg, happens roughly midway through the cycle, at about day 14.
  After ovulation the lining is maintained; if no fertilised egg implants, the cycle repeats.
```

```yaml
type: mcq
topic: "T13 Reproduction"
stem: "What is the main role of progesterone in the second half of the menstrual cycle?"
options:
  - "It causes an egg to be released from the ovary."
  - "It causes the uterus lining to break down."
  - "It maintains the thick uterus lining, ready for a fertilised egg to implant."
  - "It stimulates the production of sperm."
answer: 2
marks: 1
misconception: progesterone-role
worked: |
  After ovulation the remains of the follicle form a structure that secretes progesterone.
  Progesterone maintains the thickened, blood-rich uterus lining so that an embryo can implant.
  If no implantation occurs, the progesterone concentration falls; without progesterone the lining cannot be maintained, so it breaks down and menstruation begins.
  If implantation does occur, progesterone stays high and menstruation does not happen.
```

```yaml
type: mcq
topic: "T13 Reproduction"
stem: "Which set of features is typical of an insect-pollinated flower?"
options:
  - "no petals at all, and huge quantities of dry pollen produced"
  - "small green petals, no scent, and feathery stigmas hanging outside the flower"
  - "anthers hanging loosely outside the flower and very light smooth pollen"
  - "large brightly coloured petals, scent and nectar, and sticky sculptured pollen grains"
answer: 3
marks: 1
misconception: pollination-adaptations
worked: |
  Insect-pollinated flowers must attract and reward an animal, so they have large brightly coloured scented petals and nectaries.
  Their anthers and stigma are held inside the flower so that a visiting insect brushes against them, and the pollen grains are sticky or spiky so they cling to the insect's body.
  Wind-pollinated flowers show the opposite features: small dull petals, no scent or nectar, anthers and feathery stigmas exposed outside the flower, and large amounts of very light, smooth pollen.
```

```yaml
type: mcq
topic: "T13 Reproduction"
stem: "After fertilisation in a flowering plant, what do the ovule and the ovary become?"
options:
  - "the ovule becomes the seed and the ovary becomes the fruit"
  - "the ovule becomes the embryo and the ovary becomes the seed"
  - "the ovule becomes the fruit and the ovary becomes the seed"
  - "both the ovule and the ovary become seeds"
answer: 0
marks: 1
misconception: ovule-ovary-fate
worked: |
  A pollen grain lands on the stigma and grows a pollen tube down the style to the ovule.
  The male gamete nucleus travels down the tube and fuses with the female gamete nucleus inside the ovule, fertilisation, forming a zygote.
  The zygote develops into the embryo, and the whole ovule becomes the seed.
  The ovary wall develops into the fruit, which protects the seeds and often helps to disperse them.
```

```yaml
type: mcq
topic: "T13 Reproduction"
stem: "A sperm cell contains many mitochondria. Why?"
options:
  - "to store the food that the zygote will need after fertilisation"
  - "to carry the genetic material into the egg"
  - "to release energy by aerobic respiration for the movement of the tail"
  - "to digest the outer layer of the egg cell"
answer: 2
marks: 1
misconception: sperm-mitochondria
worked: |
  A sperm cell must swim a long way to reach the egg in the oviduct, and its tail beats continuously.
  That movement requires a large and steady supply of energy, which is released by aerobic respiration in the many mitochondria packed into the middle section of the sperm.
  The genetic material is carried in the haploid nucleus in the head; the egg, not the sperm, carries the food store (yolk) for the early embryo.
```

```yaml
type: mcq
topic: "T3 Biological Molecules & Enzymes"
stem: "A food sample is heated with Benedict's solution in a water bath and a brick-red precipitate forms. What does this show?"
options:
  - "protein is present in the sample"
  - "starch is present in the sample"
  - "a reducing sugar such as glucose is present in a high concentration"
  - "fat is present in the sample"
answer: 2
marks: 1
misconception: benedicts-test-result
worked: |
  Benedict's solution is blue. When it is heated with a reducing sugar it forms a precipitate whose colour depends on the concentration: green → yellow → orange → brick-red as the concentration increases.
  A brick-red precipitate therefore shows that a reducing sugar is present in a high concentration.
  If no reducing sugar is present, the solution simply stays blue.
```

```yaml
type: mcq
topic: "T3 Biological Molecules & Enzymes"
stem: "Which observation shows that starch is present in a food sample?"
options:
  - "Biuret reagent turns violet."
  - "Iodine solution changes from brown to blue-black."
  - "Benedict's solution turns brick-red on heating."
  - "A white emulsion forms when ethanol and water are added."
answer: 1
marks: 1
misconception: food-test-matching
worked: |
  Starch test: add iodine solution, brown to blue-black is a positive result.
  Reducing sugar test: heat with Benedict's solution, blue to brick-red.
  Protein test: add Biuret reagent, blue to violet.
  Fat test: dissolve in ethanol then add water, a cloudy white emulsion forms.
  Each test has its own reagent and its own colour change; the commonest error is to mix them up.
```

```yaml
type: mcq
topic: "T3 Biological Molecules & Enzymes"
stem: "Biuret reagent is added to a solution and the mixture turns violet. Which food substance is present?"
options:
  - "protein"
  - "fat"
  - "starch"
  - "reducing sugar"
answer: 0
marks: 1
misconception: biuret-test
worked: |
  Biuret reagent is pale blue and turns violet (purple) in the presence of protein, because it reacts with the peptide bonds between amino acids.
  No colour change means no protein.
  Iodine tests for starch, Benedict's for reducing sugar, and the ethanol emulsion test for fats.
```

```yaml
type: mcq
topic: "T3 Biological Molecules & Enzymes"
stem: "Which statement about enzymes is correct?"
options:
  - "They raise the activation energy needed for a reaction."
  - "They are proteins that speed up reactions and are not used up in the reactions they catalyse."
  - "They are carbohydrates that are used up as the reaction proceeds."
  - "Each enzyme can catalyse many different types of reaction."
answer: 1
marks: 1
misconception: enzyme-nature
worked: |
  Enzymes are biological catalysts made of protein. They speed up a reaction by lowering the activation energy, and they are unchanged at the end, so a single enzyme molecule can be used again and again.
  Each enzyme is specific: only a substrate with a shape complementary to its active site can bind, so one enzyme catalyses one type of reaction.
  Being proteins, they are denatured by high temperature and by extremes of pH.
```

```yaml
type: mcq
topic: "T3 Biological Molecules & Enzymes"
stem: "Above its optimum temperature, the rate of an enzyme-catalysed reaction falls sharply. Why?"
options:
  - "The enzyme is used up more quickly at high temperatures."
  - "The substrate molecules are denatured by the heat."
  - "The enzyme is denatured: the shape of its active site changes, so the substrate no longer fits."
  - "The enzyme molecules move too fast to collide with the substrate molecules."
answer: 2
marks: 1
misconception: denaturation-explanation
worked: |
  Up to the optimum, heating increases kinetic energy, so enzyme and substrate collide more often and the rate rises.
  Above the optimum, the extra vibration breaks the bonds holding the enzyme's three-dimensional shape together.
  The active site changes shape permanently, so it is no longer complementary to the substrate; fewer enzyme-substrate complexes form and the rate falls sharply.
  Say 'the active site changes shape', not 'the enzyme is killed', an enzyme is a molecule, not a living thing.
```

```yaml
type: mcq
topic: "T3 Biological Molecules & Enzymes"
stem: "Pepsin digests protein in the stomach. At which pH would you expect pepsin to be most active?"
options:
  - "pH 2"
  - "pH 9"
  - "pH 5"
  - "pH 7"
answer: 0
marks: 1
misconception: enzyme-optimum-ph
worked: |
  Hydrochloric acid makes the contents of the stomach strongly acidic, at about pH 2.
  Pepsin's optimum pH matches the conditions where it works, so it is most active at about pH 2; at neutral or alkaline pH it is denatured and stops working.
  Enzymes in the small intestine (such as trypsin and pancreatic amylase) work in alkaline conditions, at about pH 8, because bile and pancreatic juice neutralise the acid.
```

```yaml
type: mcq
topic: "T3 Biological Molecules & Enzymes"
stem: "In an experiment, starch was completely digested by amylase in 200 s at 30 °C and in 100 s at 40 °C. Using rate = 1 ÷ time, how do the two rates compare?"
options:
  - "The two rates are the same because the same mass of starch was digested."
  - "The rate at 40 °C (0.010 s⁻¹) is twice the rate at 30 °C (0.005 s⁻¹)."
  - "The rate at 40 °C is half the rate at 30 °C."
  - "The rate at 40 °C (0.005 s⁻¹) is twice the rate at 30 °C (0.010 s⁻¹)."
answer: 1
marks: 1
misconception: rate-inverse-time
worked: |
  Rate at 30 °C = 1 ÷ 200 = 0.005 s⁻¹.
  Rate at 40 °C = 1 ÷ 100 = 0.010 s⁻¹.
  0.010 ÷ 0.005 = 2, so the rate at 40 °C is twice the rate at 30 °C.
  A shorter time means a faster rate, the reaction that finishes first has the higher rate, so the larger rate value must belong to the 40 °C run.
```

```yaml
type: mcq
topic: "T6 Respiration in Humans"
stem: "Which equation represents aerobic respiration in a muscle cell?"
options:
  - "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O, releasing energy"
  - "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂, releasing energy"
  - "C₆H₁₂O₆ → 2C₃H₆O₃, using energy"
  - "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂, releasing energy"
answer: 0
marks: 1
misconception: respiration-equation
worked: |
  Aerobic respiration is the breakdown of glucose using oxygen to release energy, with carbon dioxide and water as the products.
  Word equation: glucose + oxygen → carbon dioxide + water (+ energy released).
  The distractor 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ is photosynthesis; C₆H₁₂O₆ → 2C₃H₆O₃ is anaerobic respiration in muscle, but that reaction releases energy rather than using it; C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ is anaerobic respiration in yeast, not in a muscle cell.
```

```yaml
type: mcq
topic: "T6 Respiration in Humans"
stem: "A sprinter's leg muscles respire anaerobically during a 200 m race. What is produced, and what is the consequence?"
options:
  - "lactic acid; an oxygen debt builds up and extra oxygen is needed after the race to remove it"
  - "ethanol and carbon dioxide; the muscles become alkaline"
  - "carbon dioxide and water only; no oxygen debt builds up"
  - "glycogen; it is stored in the muscles for later use"
answer: 0
marks: 1
misconception: anaerobic-products-human
worked: |
  During intense exercise, oxygen cannot be delivered to the muscles fast enough, so glucose is broken down anaerobically: glucose → lactic acid, releasing a small amount of energy.
  Lactic acid builds up, causing muscle fatigue and cramp.
  An oxygen debt is created: after the race, the athlete continues to breathe deeply and quickly so that extra oxygen can be used to oxidise the lactic acid (mainly in the liver) to carbon dioxide and water.
  Ethanol and carbon dioxide are the anaerobic products in yeast, not in humans.
```

```yaml
type: mcq
topic: "T6 Respiration in Humans"
stem: "Which feature of the alveoli speeds up gas exchange in the lungs?"
options:
  - "walls that are one cell thick with a dense network of capillaries, giving a short diffusion distance and a steep concentration gradient"
  - "a covering of cartilage that holds them open"
  - "a small total surface area, which concentrates the gases"
  - "thick muscular walls that pump air in and out"
answer: 0
marks: 1
misconception: alveoli-adaptation
worked: |
  Alveoli are adapted for rapid diffusion in several ways: there are millions of them, giving a very large total surface area; their walls are one cell thick and the capillary walls are one cell thick, so the diffusion distance is very short; they are covered by a dense capillary network, and blood flow constantly removes oxygen and brings carbon dioxide, keeping the concentration gradients steep; the surfaces are moist so gases dissolve before diffusing.
  Alveoli have no muscle and no cartilage, ventilation is done by the diaphragm and intercostal muscles.
```

```yaml
type: mcq
topic: "T6 Respiration in Humans"
stem: "During inspiration (breathing in), which set of changes occurs?"
options:
  - "The diaphragm contracts, the volume of the thorax decreases and air is forced in."
  - "The internal intercostal muscles contract, the ribcage moves downwards and inwards, and air enters."
  - "The diaphragm contracts and flattens, the external intercostal muscles contract, the volume of the thorax increases and the pressure inside it falls below atmospheric pressure."
  - "The diaphragm relaxes and domes upwards, the volume of the thorax decreases and the pressure inside it rises."
answer: 2
marks: 1
misconception: ventilation-mechanism
worked: |
  Inspiration: the external intercostal muscles contract and pull the ribcage upwards and outwards, while the diaphragm muscle contracts and flattens.
  The volume of the thorax therefore increases, so the pressure inside falls below atmospheric pressure.
  Air flows down the pressure gradient through the trachea into the lungs.
  Expiration is the reverse: the muscles relax, the diaphragm domes up, thorax volume falls, pressure rises and air is pushed out.
```

```yaml
type: mcq
topic: "T6 Respiration in Humans"
stem: "During exercise a student's breathing rate rises from 14 breaths per minute at rest to 35 breaths per minute. What is the percentage increase in breathing rate?"
options:
  - "250%"
  - "60%"
  - "150%"
  - "21%"
answer: 2
marks: 1
misconception: percentage-increase-calculation
worked: |
  Increase = 35 − 14 = 21 breaths per minute.
  Percentage increase = (increase ÷ original value) × 100
  = (21 ÷ 14) × 100
  = 1.5 × 100
  = 150%.
  Quoting 21 gives the raw increase, not a percentage; 250% is the new rate as a percentage of the old one (35 ÷ 14 × 100), which is not the increase.
```

```yaml
type: mcq
topic: "T6 Respiration in Humans"
stem: "Compared with inspired air, expired air contains:"
options:
  - "the same amount of oxygen but much more nitrogen"
  - "less oxygen, less carbon dioxide and more nitrogen"
  - "less oxygen, more carbon dioxide and more water vapour"
  - "more oxygen, less carbon dioxide and less water vapour"
answer: 2
marks: 1
misconception: inspired-expired-air
worked: |
  In the alveoli, oxygen diffuses from the air into the blood and carbon dioxide diffuses from the blood into the air.
  Expired air therefore contains less oxygen (about 16% instead of about 21%) and much more carbon dioxide (about 4% instead of about 0.04%).
  It is also warmer and saturated with water vapour, which has evaporated from the moist alveolar surfaces.
  The proportion of nitrogen is effectively unchanged, nitrogen is not used by the body.
```

```yaml
type: mcq
topic: "T9 Infectious Diseases in Humans"
stem: "Influenza spreads when an infected person coughs or sneezes near others. What is this route of transmission called?"
options:
  - "transmission through contaminated water"
  - "transmission by an insect vector"
  - "transmission by direct contact with blood"
  - "airborne droplet transmission"
answer: 3
marks: 1
misconception: transmission-routes
worked: |
  Coughing and sneezing release tiny droplets containing the pathogen into the air; another person inhales them, airborne (droplet) transmission.
  Contaminated water spreads diseases such as cholera; blood contact and insect vectors spread other diseases.
  Airborne spread is reduced by covering the mouth and nose, wearing a mask, ventilating rooms and keeping a distance from infected people.
```

```yaml
type: mcq
topic: "T9 Infectious Diseases in Humans"
stem: "What does a typical vaccine contain?"
options:
  - "a strong dose of an antibiotic"
  - "a chemical that kills every virus already in the body"
  - "white blood cells taken from another person"
  - "a weakened or inactivated form of the pathogen, or part of it"
answer: 3
marks: 1
misconception: vaccine-contents
worked: |
  A vaccine introduces a harmless version of the pathogen, weakened, inactivated, or just a part of it, so that the immune system responds without the person becoming ill.
  The body's white blood cells respond, and some remain afterwards so that a later infection by the real pathogen is dealt with far more quickly.
  A vaccine is not an antibiotic and does not kill viruses that are already established; it prepares the body in advance.
```

```yaml
type: mcq
topic: "T9 Infectious Diseases in Humans"
stem: "Why are antibiotics ineffective against influenza?"
options:
  - "The influenza virus is too large for antibiotics to enter."
  - "Influenza is caused by a virus, and antibiotics only act on bacteria."
  - "Antibiotics are destroyed by stomach acid before they can reach the lungs."
  - "Antibiotics work only if they are taken before an infection begins."
answer: 1
marks: 1
misconception: antibiotics-against-viruses
worked: |
  Antibiotics work by damaging structures and processes found in bacterial cells, such as the bacterial cell wall.
  Viruses are not cells: they have no cell wall and no metabolism of their own, so there is nothing for the antibiotic to act on. Influenza is a viral disease, so antibiotics cannot cure it.
  Taking antibiotics unnecessarily is harmful because it increases the selection pressure that leads to antibiotic-resistant bacteria.
```

```yaml
type: mcq
topic: "T9 Infectious Diseases in Humans"
stem: "A few bacteria in a large population survive a course of antibiotics and then reproduce. What best explains the rise of an antibiotic-resistant population?"
options:
  - "A random mutation had already given those few bacteria resistance; they survived, reproduced and passed the resistance allele on."
  - "The antibiotic caused every bacterium in the population to become resistant."
  - "The bacteria learned to resist the antibiotic while they were being exposed to it."
  - "Resistance appeared only because the patient completed the full course."
answer: 0
marks: 1
misconception: antibiotic-causes-resistance
worked: |
  This is natural selection.
  Variation: random mutation in the bacterial DNA gives a few individuals resistance, this happens by chance, before the antibiotic is used.
  Selection pressure: the antibiotic kills the non-resistant bacteria.
  Survival and reproduction: the resistant ones survive, reproduce rapidly and pass on the resistance allele.
  Over time the whole population becomes resistant. The antibiotic selects for resistance; it does not create it, and bacteria cannot 'learn'.
```

```yaml
type: mcq
topic: "T9 Infectious Diseases in Humans"
stem: "A town records 450 cases of an infectious disease in one week. After a control programme, weekly cases fall to 135. What is the percentage decrease in cases?"
options:
  - "70%"
  - "3.3%"
  - "30%"
  - "65%"
answer: 0
marks: 1
misconception: percentage-decrease-calculation
worked: |
  Decrease = 450 − 135 = 315 cases.
  Percentage decrease = (decrease ÷ original value) × 100
  = (315 ÷ 450) × 100
  = 0.70 × 100
  = 70%.
  (135 ÷ 450) × 100 = 30% is the percentage of cases remaining, not the percentage decrease, a very common trap.
```

```yaml
type: mcq
topic: "T1 Cell Structure & Organisation"
stem: "Which organelle releases most of a cell's energy by aerobic respiration?"
options:
  - "the nucleus"
  - "the ribosome"
  - "the vacuole"
  - "the mitochondrion"
answer: 3
marks: 1
misconception: organelle-function
worked: |
  Mitochondria are the site of aerobic respiration, where glucose is oxidised and energy is released for the cell's activities.
  Cells with a high energy demand, muscle cells, sperm cells and the cells lining the kidney tubules, contain very large numbers of mitochondria.
  The nucleus contains the DNA and controls the cell; ribosomes are the site of protein synthesis; the vacuole in a plant cell stores cell sap.
```

```yaml
type: mcq
topic: "T1 Cell Structure & Organisation"
stem: "Which structures are present in a palisade mesophyll cell but absent from a human liver cell?"
options:
  - "cell wall, mitochondria and a nucleus"
  - "chloroplasts, ribosomes and a cell membrane"
  - "cell wall, chloroplasts and a large central vacuole"
  - "a large central vacuole, mitochondria and ribosomes"
answer: 2
marks: 1
misconception: plant-animal-cell-structures
worked: |
  A palisade mesophyll cell is a plant cell. Plant cells have a cellulose cell wall, chloroplasts (in green parts) and a large permanent central vacuole filled with cell sap, none of which an animal cell has.
  Both plant and animal cells have a cell membrane, cytoplasm, a nucleus, mitochondria and ribosomes, so any option containing those cannot be the answer.
```

```yaml
type: mcq
topic: "T1 Cell Structure & Organisation"
stem: "A cell is 50 μm long. In a photograph taken through a microscope it measures 25 mm long. What is the magnification of the photograph?"
options:
  - "×500"
  - "×1250"
  - "×2"
  - "×0.002"
answer: 0
marks: 1
misconception: magnification-unit-conversion
worked: |
  Magnification = image size ÷ actual size, and both must be in the same unit.
  Convert the image size: 25 mm × 1000 = 25 000 μm.
  Magnification = 25 000 μm ÷ 50 μm = 500, so the magnification is ×500.
  Dividing 25 by 50 without converting units (giving 0.5 or 2) is the classic error, always convert first. Magnification has no unit.
```

```yaml
type: mcq
topic: "T1 Cell Structure & Organisation"
stem: "A drawing of a cell is 60 mm long and is labelled 'magnification ×300'. What is the actual length of the cell?"
options:
  - "5 μm"
  - "0.2 μm"
  - "18 000 μm"
  - "200 μm"
answer: 3
marks: 1
misconception: actual-size-rearrangement
worked: |
  Rearranging magnification = image size ÷ actual size gives actual size = image size ÷ magnification.
  Actual size = 60 mm ÷ 300 = 0.2 mm.
  Convert to micrometres: 0.2 mm × 1000 = 200 μm.
  Multiplying instead of dividing gives 18 000 (60 × 300), which would make the real cell larger than the drawing, always check that the answer is sensible.
```

```yaml
type: mcq
topic: "T1 Cell Structure & Organisation"
stem: "Which sequence shows the levels of organisation in the human body in the correct order?"
options:
  - "cell → organ → tissue → organ system"
  - "cell → tissue → organ → organ system"
  - "organ → tissue → cell → organ system"
  - "tissue → cell → organ → organ system"
answer: 1
marks: 1
misconception: levels-of-organisation
worked: |
  A cell is the basic unit of life.
  A tissue is a group of similar cells working together on the same function (for example muscle tissue).
  An organ is made of several different tissues working together (for example the stomach).
  An organ system is a group of organs working together (for example the digestive system), and organ systems together make the whole organism.
```

```yaml
type: mcq
topic: "T4 Nutrition in Humans"
stem: "Amylase digests starch. What is the product, and where is amylase secreted?"
options:
  - "glucose; it is secreted by the stomach"
  - "fatty acids and glycerol; it is secreted by the liver"
  - "amino acids; it is secreted only by the pancreas"
  - "maltose; it is secreted by the salivary glands and by the pancreas"
answer: 3
marks: 1
misconception: amylase-product
worked: |
  Amylase breaks the long starch molecule down into the disaccharide maltose, not straight to glucose.
  Maltose is then digested to glucose by maltase, made by the small intestine.
  Amylase is secreted in saliva by the salivary glands and in pancreatic juice by the pancreas, which acts in the small intestine. There is no amylase in the stomach, the acid there would denature it.
```

```yaml
type: mcq
topic: "T4 Nutrition in Humans"
stem: "What does bile do, and where is it made?"
options:
  - "It digests fats into fatty acids and glycerol; it is made in the gall bladder."
  - "It digests proteins into amino acids; it is made in the pancreas."
  - "It makes the contents of the small intestine acidic; it is made in the stomach."
  - "It emulsifies fats into small droplets, increasing the surface area for lipase to act on; it is made in the liver."
answer: 3
marks: 1
misconception: bile-is-an-enzyme
worked: |
  Bile is made in the liver, stored in the gall bladder and released into the small intestine.
  It is not an enzyme and carries out no chemical digestion. It emulsifies fats, it breaks large fat globules into many tiny droplets, which greatly increases the surface area for the enzyme lipase to work on, speeding up fat digestion.
  Bile is alkaline, so it also neutralises the acidic mixture arriving from the stomach and provides the alkaline pH that the intestinal enzymes need.
```

```yaml
type: mcq
topic: "T4 Nutrition in Humans"
stem: "Which set of features adapts a villus for the absorption of digested food?"
options:
  - "a thick muscular wall, a wide lumen and no blood supply"
  - "many chloroplasts, a cell wall and a large vacuole"
  - "a one-cell-thick epithelium, many microvilli, a dense capillary network and a lacteal"
  - "a waterproof waxy surface layer and very few capillaries"
answer: 2
marks: 1
misconception: villus-adaptation
worked: |
  Millions of villi, each covered in microvilli, give the small intestine an enormous surface area for absorption.
  The epithelium is only one cell thick, so the diffusion distance into the blood is very short.
  A dense capillary network carries absorbed glucose and amino acids away, maintaining a steep concentration gradient, and the lacteal absorbs the products of fat digestion.
  The cells also contain many mitochondria to supply energy for active transport of glucose and amino acids.
```

```yaml
type: mcq
topic: "T4 Nutrition in Humans"
stem: "Which pair of enzymes digests protein, and where does each one act?"
options:
  - "amylase in the mouth, and lipase in the stomach"
  - "trypsin in the stomach, and pepsin in the small intestine"
  - "pepsin in the acidic stomach, and trypsin in the alkaline small intestine"
  - "maltase in the stomach, and pepsin in the mouth"
answer: 2
marks: 1
misconception: protease-locations
worked: |
  Protein digestion begins in the stomach, where pepsin works in the strongly acidic conditions created by hydrochloric acid, breaking proteins into polypeptides.
  It continues in the small intestine, where trypsin from the pancreas works in the alkaline conditions produced by bile and pancreatic juice.
  Peptidases then complete the job, producing amino acids that are absorbed by the villi.
```

```yaml
type: mcq
topic: "T2 Movement of Substances"
stem: "A plant cell is placed in a concentrated sucrose solution. What happens?"
options:
  - "Nothing happens, because the cell wall is impermeable to water."
  - "Water enters the cell by osmosis and the cell becomes turgid."
  - "Sucrose enters the cell by osmosis, so the cell swells and bursts."
  - "Water leaves the cell by osmosis because the solution has a lower water potential; the cell becomes flaccid and may plasmolyse."
answer: 3
marks: 1
misconception: osmosis-direction-water-potential
worked: |
  A concentrated sucrose solution has a lower water potential than the cell sap inside the plant cell.
  Water therefore moves out of the cell, down the water-potential gradient, through the partially permeable cell membrane by osmosis.
  The vacuole shrinks and the cell becomes flaccid; if enough water leaves, the cell membrane pulls away from the cell wall and the cell is plasmolysed.
  A plant cell cannot burst because the strong cellulose cell wall resists expansion, and it is freely permeable to water, the membrane controls the movement.
```

```yaml
type: mcq
topic: "T2 Movement of Substances"
stem: "A potato strip of initial mass 4.0 g is left in distilled water for 30 minutes. Its final mass is 4.6 g. What is the percentage change in mass?"
options:
  - "−15%"
  - "+13%"
  - "+15%"
  - "+0.6%"
answer: 2
marks: 1
misconception: percentage-change-mass
worked: |
  Change in mass = 4.6 − 4.0 = +0.6 g (a gain).
  Percentage change = (change in mass ÷ initial mass) × 100
  = (0.6 ÷ 4.0) × 100
  = 0.15 × 100
  = +15%.
  The gain is expected: distilled water has a higher water potential than the potato cell sap, so water enters the cells by osmosis.
  Dividing by the final mass (0.6 ÷ 4.6 ≈ 13%) is the usual error, always divide by the INITIAL mass.
```

```yaml
type: mcq
topic: "T2 Movement of Substances"
stem: "Root hair cells absorb mineral ions from soil water in which the ion concentration is lower than the concentration inside the cell. Which process is used?"
options:
  - "translocation, using the phloem sieve tubes"
  - "osmosis, because the ions are dissolved in water"
  - "active transport, using energy from respiration to move ions against the concentration gradient"
  - "diffusion, because ions always move down a concentration gradient"
answer: 2
marks: 1
misconception: active-transport-against-gradient
worked: |
  The ions are already more concentrated inside the root hair cell than in the soil water, so diffusion would move them the wrong way, out of the cell.
  To take them in, the cell must move them against the concentration gradient, using carrier proteins in the cell membrane and energy released by respiration in the many mitochondria: this is active transport.
  Osmosis moves only water; translocation moves sucrose in the phloem.
```

```yaml
type: mcq
topic: "T2 Movement of Substances"
stem: "Oxygen moves from the air in an alveolus into the blood in a capillary. Which statement describes this movement?"
options:
  - "It is active transport: energy from respiration is used to move the oxygen."
  - "It is diffusion: the net movement of molecules from a region of higher concentration to a region of lower concentration, down a concentration gradient."
  - "It is osmosis: the net movement of water molecules through a partially permeable membrane."
  - "It is translocation: dissolved substances are carried from a source to a sink."
answer: 1
marks: 1
misconception: diffusion-definition
worked: |
  The alveolar air has a higher oxygen concentration than the blood arriving in the capillary, which has just come from the body.
  Oxygen molecules move randomly, and the net movement is down the concentration gradient into the blood, that is diffusion, and it is a passive process needing no energy from the cell.
  Blood flow constantly carries oxygenated blood away, keeping the gradient steep.
  Osmosis refers to water only; active transport works against a gradient and needs energy.
```

```yaml
type: mcq
topic: "T12 Molecular Genetics"
stem: "One strand of a DNA molecule has the base sequence T A C G G A. What is the base sequence of the complementary strand?"
options:
  - "A T G G C T"
  - "A T G C C T"
  - "U A C G G A"
  - "T A C G G A"
answer: 1
marks: 1
misconception: complementary-base-pairing
worked: |
  The base-pairing rule is A pairs with T, and C pairs with G.
  Take each base in turn: T→A, A→T, C→G, G→C, G→C, A→T.
  The complementary strand therefore reads A T G C C T.
  U (uracil) is not found in DNA, and simply copying the original strand ignores the pairing rule.
```

```yaml
type: mcq
topic: "T12 Molecular Genetics"
stem: "A double-stranded DNA molecule contains 120 bases in total, of which 36 are adenine. How many cytosine bases does it contain?"
options:
  - "24"
  - "48"
  - "36"
  - "84"
answer: 0
marks: 1
misconception: base-pairing-counting
worked: |
  Adenine always pairs with thymine, so thymine = adenine = 36.
  A + T = 36 + 36 = 72 bases.
  The remaining bases are cytosine and guanine: 120 − 72 = 48.
  Cytosine always pairs with guanine, so they are present in equal numbers: cytosine = 48 ÷ 2 = 24.
```

```yaml
type: mcq
topic: "T12 Molecular Genetics"
stem: "What is a gene?"
options:
  - "one of two alternative forms of a chromosome"
  - "a length of DNA that codes for a particular protein"
  - "the complete set of chromosomes found in a body cell"
  - "a thread-like structure made only of protein"
answer: 1
marks: 1
misconception: gene-allele-chromosome
worked: |
  A gene is a section of a DNA molecule that codes for one particular protein, the sequence of bases determines the sequence of amino acids in that protein.
  A chromosome is a long DNA molecule wound around proteins, and carries many genes.
  An allele is one of the alternative forms of the same GENE (not of a chromosome), for example the tall allele and the short allele of the height gene.
```

```yaml
type: short
topic: "T14 Inheritance"
stem: "In pea plants, tall stems (T) are dominant to short stems (t). A heterozygous tall plant is crossed with a short plant (Tt × tt). State the expected ratio of tall to short offspring."
accepted: ["1:1", "1 : 1", "1 tall : 1 short", "50:50", "1 to 1"]
marks: 1
misconception: backcross-ratio
worked: |
  Parent genotypes: Tt × tt.
  Gametes: T and t from the tall parent; t and t from the short parent.
  Offspring: Tt, Tt, tt, tt.
  Tt is tall (T is dominant) and tt is short, so the ratio is 1 tall : 1 short.
```

```yaml
type: short
topic: "T14 Inheritance"
stem: "Name the type of cell division that produces gametes and halves the chromosome number."
accepted: ["meiosis", "Meiosis", "reduction division"]
marks: 1
misconception: mitosis-meiosis-confusion
worked: |
  Meiosis takes place in the reproductive organs. It involves two divisions and produces four genetically different haploid cells from one diploid cell, halving the chromosome number (46 → 23 in humans).
  Mitosis, by contrast, produces two genetically identical diploid cells for growth and repair.
```

```yaml
type: short
topic: "T8 Homeostasis, Co-ordination & Response"
stem: "Name the hormone released by the adrenal glands when a person is suddenly frightened."
accepted: ["adrenaline", "Adrenaline", "adrenalin", "epinephrine"]
marks: 1
misconception: hormone-source-gland
worked: |
  Adrenaline is secreted by the adrenal glands, which sit just above the kidneys.
  It prepares the body for vigorous action: heart rate and breathing rate increase, and the liver converts glycogen into glucose so more glucose reaches the muscles for respiration.
```

```yaml
type: short
topic: "T8 Homeostasis, Co-ordination & Response"
stem: "When insulin is present in the blood, which organ converts excess glucose into glycogen for storage?"
accepted: ["liver", "the liver", "Liver"]
marks: 1
misconception: insulin-target-organ
worked: |
  Insulin is secreted by the pancreas when blood glucose rises.
  Its main target is the liver, where glucose is converted into glycogen and stored; muscle cells also take up glucose and store glycogen.
  Blood glucose therefore falls back towards the set point. Note that the pancreas makes insulin, while the liver stores the glycogen.
```

```yaml
type: short
topic: "T11 Organisms & their Environment"
stem: "Producers in a meadow fix 24 000 kJ m⁻² per year. The herbivores that feed on them store 1 920 kJ m⁻² per year in their tissues. Calculate the percentage of the producers' energy that is transferred to the herbivores."
accepted: ["8", "8%", "8 %", "8 percent", "8.0", "8.0%"]
marks: 2
misconception: energy-transfer-percentage
worked: |
  Percentage transferred = (energy in herbivores ÷ energy in producers) × 100
  = (1 920 ÷ 24 000) × 100
  = 0.08 × 100
  = 8%.
  The rest is lost as heat from respiration, in faeces and in urine, which is why food chains rarely have more than four or five trophic levels.
```

```yaml
type: short
topic: "T11 Organisms & their Environment"
stem: "Name the process by which green plants remove carbon dioxide from the atmosphere."
accepted: ["photosynthesis", "Photosynthesis"]
marks: 1
misconception: carbon-cycle-direction
worked: |
  In photosynthesis, plants take in carbon dioxide and use light energy absorbed by chlorophyll to convert it, with water, into glucose.
  The carbon becomes locked into organic compounds such as starch and cellulose.
  Respiration, decomposition and combustion return carbon dioxide to the atmosphere.
```

```yaml
type: short
topic: "T5 Transport in Humans"
stem: "Name the blood vessel that carries oxygenated blood from the lungs to the heart."
accepted: ["pulmonary vein", "the pulmonary vein", "Pulmonary vein", "pulmonary veins"]
marks: 1
misconception: pulmonary-vessel-naming
worked: |
  Vessels are named by the direction of flow relative to the heart: arteries carry blood away from the heart, veins carry blood towards it.
  The pulmonary vein carries blood from the lungs back to the left atrium, and it is the one vein that carries oxygenated blood.
  The pulmonary artery carries deoxygenated blood from the right ventricle to the lungs.
```

```yaml
type: short
topic: "T5 Transport in Humans"
stem: "Name the insoluble protein that forms a mesh of fibres to trap red blood cells during blood clotting."
accepted: ["fibrin", "Fibrin"]
marks: 1
misconception: fibrinogen-fibrin
worked: |
  When a blood vessel is damaged, platelets and damaged tissue release substances that trigger a series of reactions.
  The soluble plasma protein fibrinogen is converted into insoluble fibrin, which forms a mesh of fibres across the wound.
  Red blood cells are trapped in the mesh, forming a clot that seals the wound and stops pathogens entering.
```

```yaml
type: short
topic: "T10 Nutrition & Transport in Plants"
stem: "Name the mineral ion that a plant must absorb from the soil in order to make amino acids."
accepted: ["nitrate", "nitrate ions", "nitrates", "Nitrate", "nitrogen as nitrate"]
marks: 1
misconception: mineral-ion-function
worked: |
  Plants make glucose in photosynthesis, but glucose contains no nitrogen.
  To build amino acids (and therefore proteins), plants combine sugars with nitrogen absorbed from the soil as nitrate ions.
  A shortage of nitrate causes stunted growth and yellowing of the older leaves. Magnesium, by contrast, is the ion needed to make chlorophyll.
```

```yaml
type: short
topic: "T10 Nutrition & Transport in Plants"
stem: "In a potometer, the air bubble moves 45 mm along the capillary tube in 3 minutes. The tube has a cross-sectional area of 1 mm². Calculate the rate of water uptake in mm³ per minute."
accepted: ["15", "15 mm3 per minute", "15 mm3/min", "15 mm3 min-1", "15.0"]
marks: 2
misconception: potometer-rate-calculation
worked: |
  Volume of water taken up = distance moved × cross-sectional area of the tube
  = 45 mm × 1 mm²
  = 45 mm³.
  Rate = volume ÷ time
  = 45 mm³ ÷ 3 minutes
  = 15 mm³ per minute.
```

```yaml
type: short
topic: "T7 Excretion in Humans"
stem: "Name the process in the Bowman's capsule by which small molecules are forced out of the blood under high pressure."
accepted: ["ultrafiltration", "Ultrafiltration", "ultra-filtration", "ultra filtration"]
marks: 1
misconception: ultrafiltration-naming
worked: |
  Blood enters the glomerulus through a wide afferent arteriole and leaves through a narrower efferent arteriole, which raises the pressure inside the capillary.
  This high pressure forces water, glucose, urea and mineral ions through the capillary and capsule walls into the Bowman's capsule.
  Blood cells and plasma proteins are too large to pass, so they stay in the blood.
```

```yaml
type: short
topic: "T7 Excretion in Humans"
stem: "Name the nitrogenous waste substance formed in the liver from excess amino acids."
accepted: ["urea", "Urea"]
marks: 1
misconception: urea-vs-urine
worked: |
  Excess amino acids cannot be stored, so in the liver they are deaminated: the amino group is removed and converted first into toxic ammonia and then into the less toxic urea.
  Urea is carried in the blood plasma to the kidneys and excreted in urine.
  Urea is the substance; urine is the fluid that contains it, do not confuse the two.
```

```yaml
type: short
topic: "T13 Reproduction"
stem: "Name the part of the female reproductive system in which fertilisation normally takes place."
accepted: ["oviduct", "the oviduct", "fallopian tube", "Fallopian tube", "egg tube", "oviducts"]
marks: 1
misconception: fertilisation-site
worked: |
  The egg is released from the ovary at ovulation and enters the oviduct (fallopian tube).
  Sperm swim up through the cervix and uterus into the oviduct, where a sperm nucleus fuses with the egg nucleus.
  The zygote then divides by mitosis as it travels along the oviduct, and implants in the uterus lining several days later.
```

```yaml
type: short
topic: "T3 Biological Molecules & Enzymes"
stem: "A food sample is heated with Benedict's solution in a water bath and a reducing sugar is present in high concentration. State the colour of the precipitate that forms."
accepted: ["brick-red", "brick red", "red", "brick-red precipitate", "brick red precipitate"]
marks: 1
misconception: benedicts-test-result
worked: |
  Benedict's solution is blue before the test.
  On heating with a reducing sugar it forms a coloured precipitate, and the colour depends on the concentration: green, then yellow, then orange, then brick-red as concentration increases.
  A brick-red precipitate therefore indicates a high concentration of reducing sugar.
```

```yaml
type: short
topic: "T6 Respiration in Humans"
stem: "Name the two products formed when yeast respires anaerobically."
accepted: ["ethanol and carbon dioxide", "ethanol + carbon dioxide", "alcohol and carbon dioxide", "ethanol, carbon dioxide", "carbon dioxide and ethanol", "ethanol and CO2"]
marks: 2
misconception: anaerobic-products-yeast
worked: |
  In yeast, anaerobic respiration (fermentation) breaks glucose down without oxygen:
  glucose → ethanol + carbon dioxide (+ a small amount of energy released)
  C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.
  The carbon dioxide makes bread rise and the ethanol is used in brewing.
  In human muscle the anaerobic product is different, lactic acid, and no carbon dioxide is released.
```

```yaml
type: short
topic: "T9 Infectious Diseases in Humans"
stem: "Weekly cases of an infectious disease in a town fell from 480 to 96 after a vaccination programme. Calculate the percentage decrease in the number of cases."
accepted: ["80", "80%", "80 %", "80 percent", "-80", "80.0"]
marks: 2
misconception: percentage-decrease-calculation
worked: |
  Decrease = 480 − 96 = 384 cases.
  Percentage decrease = (decrease ÷ original value) × 100
  = (384 ÷ 480) × 100
  = 0.8 × 100
  = 80%.
  Note that (96 ÷ 480) × 100 = 20% is the percentage of cases that REMAIN, not the percentage decrease.
```

```yaml
type: short
topic: "T1 Cell Structure & Organisation"
stem: "A cell measures 20 μm across. On a student's drawing the same cell measures 60 mm across. Calculate the magnification of the drawing."
accepted: ["3000", "x3000", "3000 times", "x 3000", "3000x", "3,000"]
marks: 2
misconception: magnification-unit-conversion
worked: |
  Magnification = image size ÷ actual size, with both in the same unit.
  Convert the drawing (image) size: 60 mm × 1000 = 60 000 μm.
  Magnification = 60 000 μm ÷ 20 μm = 3000.
  So the drawing is ×3000. Magnification has no units, never write mm or μm in the answer.
```

```yaml
type: short
topic: "T4 Nutrition in Humans"
stem: "Name the structure inside a villus that absorbs the products of fat digestion."
accepted: ["lacteal", "the lacteal", "Lacteal", "lacteals"]
marks: 1
misconception: lacteal-vs-capillary
worked: |
  Each villus contains a network of blood capillaries and a single central lymph vessel called the lacteal.
  Glucose and amino acids are absorbed into the blood capillaries.
  Fatty acids and glycerol are absorbed into the epithelial cells, recombined into fats, and pass into the lacteal, which drains into the lymphatic system before joining the blood.
```

```yaml
type: short
topic: "T2 Movement of Substances"
stem: "A potato strip of initial mass 5.0 g was left in a concentrated sucrose solution. Its final mass was 4.4 g. Calculate the percentage change in mass."
accepted: ["-12", "-12%", "-12 %", "12% decrease", "minus 12", "a decrease of 12%", "-12.0"]
marks: 2
misconception: percentage-change-mass
worked: |
  Change in mass = 4.4 − 5.0 = −0.6 g (a loss).
  Percentage change = (change in mass ÷ initial mass) × 100
  = (−0.6 ÷ 5.0) × 100
  = −0.12 × 100
  = −12% (a decrease of 12%).
  The loss is expected: the sucrose solution has a lower water potential than the potato cell sap, so water leaves the cells by osmosis.
  Always divide by the INITIAL mass and keep the minus sign to show a loss.
```

```yaml
type: short
topic: "T12 Molecular Genetics"
stem: "One strand of a DNA molecule has the base sequence G A T T C. Write the base sequence of the complementary strand."
accepted: ["CTAAG", "C T A A G", "ctaag", "C-T-A-A-G"]
marks: 1
misconception: complementary-base-pairing
worked: |
  Apply the base-pairing rule: A pairs with T, and C pairs with G.
  G → C
  A → T
  T → A
  T → A
  C → G
  The complementary strand reads C T A A G.
```

## TEACHING

```yaml
kind: definition
term: "Diffusion"
topic: "T2 Movement of Substances"
body: "The net movement of particles from a region of higher concentration to a region of lower concentration, down a concentration gradient, as a result of their random movement. It is a passive process, no energy from the cell is needed."
```

```yaml
kind: definition
term: "Osmosis"
topic: "T2 Movement of Substances"
body: "The net movement of water molecules from a region of higher water potential to a region of lower water potential, through a partially permeable membrane."
```

```yaml
kind: definition
term: "Active transport"
topic: "T2 Movement of Substances"
body: "The movement of particles through a cell membrane from a region of lower concentration to a region of higher concentration, that is, against a concentration gradient, using carrier proteins and energy released by respiration."
```

```yaml
kind: definition
term: "Enzyme"
topic: "T3 Biological Molecules & Enzymes"
body: "A protein that acts as a biological catalyst: it speeds up the rate of a specific chemical reaction by lowering its activation energy, and remains unchanged at the end of the reaction."
```

```yaml
kind: definition
term: "Denaturation"
topic: "T3 Biological Molecules & Enzymes"
body: "The permanent change in the three-dimensional shape of an enzyme's active site, caused by high temperature or an unsuitable pH, so that the substrate no longer fits and the enzyme can no longer catalyse its reaction."
```

```yaml
kind: definition
term: "Photosynthesis"
topic: "T10 Nutrition & Transport in Plants"
body: "The process by which green plants use light energy absorbed by chlorophyll to convert carbon dioxide and water into glucose and oxygen. Word equation: carbon dioxide + water → (light and chlorophyll) → glucose + oxygen."
```

```yaml
kind: definition
term: "Transpiration"
topic: "T10 Nutrition & Transport in Plants"
body: "The loss of water vapour from the leaves and stems of a plant. Water evaporates from the surfaces of the mesophyll cells into the air spaces, and the vapour then diffuses out through the stomata down a water-potential gradient."
```

```yaml
kind: definition
term: "Translocation"
topic: "T10 Nutrition & Transport in Plants"
body: "The transport of manufactured food substances, mainly sucrose and amino acids, in the phloem, from a source (such as a photosynthesising leaf) to a sink (such as a growing root, fruit or storage organ)."
```

```yaml
kind: definition
term: "Aerobic respiration"
topic: "T6 Respiration in Humans"
body: "The breakdown of glucose using oxygen to release a large amount of energy for the cell, producing carbon dioxide and water. Equation: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O, with energy released."
```

```yaml
kind: definition
term: "Anaerobic respiration"
topic: "T6 Respiration in Humans"
body: "The breakdown of glucose in the absence of oxygen, releasing a much smaller amount of energy. In human muscle: glucose → lactic acid. In yeast: glucose → ethanol + carbon dioxide."
```

```yaml
kind: definition
term: "Homeostasis"
topic: "T8 Homeostasis, Co-ordination & Response"
body: "The maintenance of a constant internal environment in the body, within narrow limits, despite changes in the external environment or in the body's activity."
```

```yaml
kind: definition
term: "Reflex action"
topic: "T8 Homeostasis, Co-ordination & Response"
body: "A rapid, automatic response to a stimulus that does not involve conscious control by the brain, so it protects the body from harm, for example the withdrawal of a hand from a hot object."
```

```yaml
kind: definition
term: "Excretion"
topic: "T7 Excretion in Humans"
body: "The removal from the body of the toxic or unwanted products of metabolism, such as urea, carbon dioxide and excess water and mineral ions. It is not the same as egestion, which is the removal of undigested food that never entered the body's cells."
```

```yaml
kind: definition
term: "Ultrafiltration"
topic: "T7 Excretion in Humans"
body: "The filtering of the blood in the glomerulus under high blood pressure, so that water, glucose, urea and mineral ions pass into the Bowman's capsule, while blood cells and plasma proteins are too large to pass through and remain in the blood."
```

```yaml
kind: definition
term: "Selective reabsorption"
topic: "T7 Excretion in Humans"
body: "The process in which useful substances are returned from the filtrate in the kidney tubule to the blood, all the glucose and much of the mineral ion content by active transport (mainly in the proximal convoluted tubule), and water by osmosis."
```

```yaml
kind: definition
term: "Gene"
topic: "T14 Inheritance"
body: "A length (section) of DNA that codes for one particular protein, and so controls a characteristic."
```

```yaml
kind: definition
term: "Allele"
topic: "T14 Inheritance"
body: "One of two or more alternative forms of the same gene, occupying the same position on a pair of homologous chromosomes, for example the tall allele (T) and the short allele (t) of the stem-height gene."
```

```yaml
kind: definition
term: "Genotype"
topic: "T14 Inheritance"
body: "The genetic make-up of an organism in terms of the alleles it contains, for example TT, Tt or tt. Two identical alleles = homozygous; two different alleles = heterozygous."
```

```yaml
kind: definition
term: "Phenotype"
topic: "T14 Inheritance"
body: "The observable characteristics of an organism, resulting from the interaction between its genotype and the environment, for example 'tall stem' or 'red flowers'."
```

```yaml
kind: definition
term: "Codominance"
topic: "T14 Inheritance"
body: "The situation in which both alleles in a heterozygote are expressed in the phenotype, so neither is dominant over the other, for example CᴿCᵂ flowers are pink, showing both the red and the white allele. Codominant alleles are written as a common capital letter with different superscripts."
```

```yaml
kind: definition
term: "Pollination"
topic: "T13 Reproduction"
body: "The transfer of pollen grains from the anther of a flower to the stigma of a flower of the same species. Self-pollination is transfer within the same plant; cross-pollination is transfer to a different plant of the same species, which gives greater genetic variation."
```

```yaml
kind: definition
term: "Food chain"
topic: "T11 Organisms & their Environment"
body: "A diagram showing the transfer of energy from one organism to the next, beginning with a producer. Each arrow points from the organism that is eaten to the organism that eats it, and each stage is a trophic level."
```

```yaml
kind: definition
term: "Decomposer"
topic: "T11 Organisms & their Environment"
body: "An organism, such as a bacterium or a fungus, that obtains its nutrients by secreting enzymes onto dead organisms and waste material and absorbing the soluble products (saprophytic nutrition), so returning mineral nutrients to the soil."
```

```yaml
kind: definition
term: "Magnification"
topic: "T1 Cell Structure & Organisation"
body: "The number of times larger an image is than the actual object: magnification = image size ÷ actual size. Both measurements must be converted to the same unit first, and magnification itself has no units (1 mm = 1000 μm)."
```

```yaml
kind: definition
term: "Digestion"
topic: "T4 Nutrition in Humans"
body: "The breakdown of large, insoluble food molecules into small, soluble molecules that can be absorbed. Physical digestion (chewing, churning, emulsification by bile) increases the surface area; chemical digestion by enzymes breaks the bonds within the molecules."
```

```yaml
kind: precision
topic: "T2 Movement of Substances"
prompt: "Explain, in terms of water potential, why a plant cell placed in a concentrated sucrose solution becomes plasmolysed."
model: "The sucrose solution has a lower water potential than the cell sap in the vacuole. Water therefore moves out of the cell down the water-potential gradient, by osmosis, through the partially permeable cell membrane. The vacuole and cytoplasm shrink, the cell becomes flaccid, and the cell membrane pulls away from the cell wall, the cell is plasmolysed."
keywords: [lower water potential, osmosis, partially permeable membrane, down the gradient, flaccid, plasmolysed]
```

```yaml
kind: precision
topic: "T2 Movement of Substances"
prompt: "Explain how a root hair cell absorbs mineral ions from the soil, and why it contains many mitochondria."
model: "The concentration of mineral ions is often higher inside the root hair cell than in the soil water, so the ions must be moved against the concentration gradient. This is done by active transport: carrier proteins in the cell membrane move the ions into the cell, using energy released by aerobic respiration. The many mitochondria supply that energy. The long narrow extension of the root hair also gives a large surface area for absorption."
keywords: [against the concentration gradient, active transport, carrier proteins, energy from respiration, mitochondria, large surface area]
```

```yaml
kind: precision
topic: "T3 Biological Molecules & Enzymes"
prompt: "Explain why the rate of an enzyme-catalysed reaction falls sharply above the optimum temperature."
model: "Above the optimum temperature the enzyme molecules vibrate so much that the bonds holding their three-dimensional shape break. The active site changes shape permanently, so it is no longer complementary to the substrate. The substrate can no longer fit into the active site, fewer enzyme-substrate complexes form, and the rate falls. The enzyme has been denatured, and the change is not reversible."
keywords: [denatured, active site changes shape, no longer complementary, substrate no longer fits, irreversible]
```

```yaml
kind: precision
topic: "T3 Biological Molecules & Enzymes"
prompt: "Explain why each enzyme catalyses only one type of reaction."
model: "An enzyme has an active site with a specific three-dimensional shape. Only a substrate with a shape complementary to that active site can fit into it and form an enzyme-substrate complex, the lock-and-key model. Substrates of any other shape cannot bind, so the enzyme cannot catalyse their reactions. This makes each enzyme specific to one substrate."
keywords: [active site, specific shape, complementary, enzyme-substrate complex, lock and key, specificity]
```

```yaml
kind: precision
topic: "T10 Nutrition & Transport in Plants"
prompt: "Explain how the structure of a leaf is adapted for efficient photosynthesis."
model: "The leaf is broad and flat, giving a large surface area to absorb light, and it is thin, so carbon dioxide has only a short distance to diffuse to the mesophyll cells. The palisade mesophyll cells are packed with chloroplasts and lie near the upper surface, where they absorb the most light. The spongy mesophyll has large air spaces that allow carbon dioxide to diffuse rapidly to all the cells, and stomata in the lower epidermis let carbon dioxide diffuse in. A network of xylem in the veins delivers water to every cell."
keywords: [large surface area for light, thin - short diffusion distance, palisade cells with many chloroplasts, air spaces, stomata, xylem delivers water]
```

```yaml
kind: precision
topic: "T10 Nutrition & Transport in Plants"
prompt: "A graph of the rate of photosynthesis against light intensity levels off at high light intensity. Explain the shape of the graph."
model: "At low light intensity the rate increases as light intensity increases, so light intensity is the limiting factor, it is the factor in shortest supply and it is holding the rate back. At high light intensity the graph levels off: increasing light no longer increases the rate, so light is no longer limiting. Another factor, the carbon dioxide concentration or the temperature, has now become the limiting factor."
keywords: [limiting factor, factor in shortest supply, rate increases with light, plateau, carbon dioxide concentration or temperature now limiting]
```

```yaml
kind: precision
topic: "T10 Nutrition & Transport in Plants"
prompt: "Explain how water moves from the soil to the leaves of a tall tree."
model: "Water enters the root hair cells by osmosis, moving down a water-potential gradient, and crosses the root to the xylem. Water evaporates from the mesophyll cell surfaces in the leaf and the vapour diffuses out through the stomata, transpiration. This loss lowers the water potential in the leaf cells and creates a transpiration pull, placing the water in the xylem under tension. Because water molecules are cohesive, they are pulled up as a continuous column through the dead lignified xylem vessels from root to leaf."
keywords: [osmosis into root hair, xylem, transpiration pull, tension, cohesion, continuous column of water]
```

```yaml
kind: precision
topic: "T6 Respiration in Humans"
prompt: "Explain how the alveoli are adapted for efficient gas exchange."
model: "There are millions of alveoli, giving a very large total surface area for diffusion. Each alveolus wall is one cell thick and is surrounded by capillaries whose walls are also one cell thick, so the diffusion distance is very short. The dense capillary network and the continuous blood flow constantly remove oxygen and deliver carbon dioxide, which maintains steep concentration gradients. The alveolar surface is moist, so the gases dissolve before diffusing across."
keywords: [large surface area, one cell thick, short diffusion distance, dense capillary network, steep concentration gradient, moist surface]
```

```yaml
kind: precision
topic: "T6 Respiration in Humans"
prompt: "Explain why an athlete continues to breathe deeply and rapidly for several minutes after a race has finished."
model: "During the race the muscles could not receive oxygen fast enough, so they respired anaerobically and lactic acid built up, creating an oxygen debt. After the race the athlete must take in extra oxygen to repay that debt. The deep, rapid breathing supplies the extra oxygen needed to oxidise the lactic acid to carbon dioxide and water, mainly in the liver, and to replenish the oxygen stores in the muscles."
keywords: [anaerobic respiration, lactic acid, oxygen debt, extra oxygen to oxidise lactic acid, liver]
```

```yaml
kind: precision
topic: "T6 Respiration in Humans"
prompt: "Describe how air is drawn into the lungs during inspiration."
model: "The external intercostal muscles contract, pulling the ribcage upwards and outwards, and the diaphragm muscle contracts and flattens. The volume of the thorax therefore increases, so the pressure inside the thorax falls below atmospheric pressure. Air moves down this pressure gradient, entering through the trachea and bronchi and inflating the lungs."
keywords: [external intercostal muscles contract, ribcage up and out, diaphragm contracts and flattens, volume increases, pressure falls, air moves down the pressure gradient]
```

```yaml
kind: precision
topic: "T8 Homeostasis, Co-ordination & Response"
prompt: "Explain how the body lowers the blood glucose concentration after a large meal."
model: "The rise in blood glucose is detected by the pancreas, which secretes more insulin into the blood. Insulin travels in the blood to the liver and muscle cells and increases their uptake of glucose. In the liver, glucose is converted into glycogen and stored, and the rate of respiration of glucose increases. Less glucose remains in the blood, so the concentration falls back towards the set point, an example of negative feedback."
keywords: [pancreas detects the rise, insulin secreted, liver and muscle take up glucose, glucose converted to glycogen, falls back to set point, negative feedback]
```

```yaml
kind: precision
topic: "T8 Homeostasis, Co-ordination & Response"
prompt: "Describe how the body responds when the core body temperature falls below normal."
model: "The fall is detected by the brain. Vasoconstriction occurs: the arterioles supplying the skin capillaries narrow, so less blood flows near the surface and less heat is lost by radiation. Sweat production is reduced, so less heat is lost by evaporation. Hairs are raised by the erector muscles, trapping an insulating layer of air. Shivering begins, muscles contract rapidly, and the increased rate of respiration releases extra heat. The core temperature rises back towards 37 °C."
keywords: [vasoconstriction, less blood near the surface, less heat lost by radiation, sweating reduced, shivering, respiration releases heat]
```

```yaml
kind: precision
topic: "T8 Homeostasis, Co-ordination & Response"
prompt: "Describe the pathway of the nerve impulse in a reflex arc when a hand touches a hot object."
model: "Heat receptors in the skin detect the stimulus and set up an impulse. The impulse travels along a sensory neurone to the spinal cord. Inside the spinal cord it passes across a synapse to a relay neurone, and across a second synapse to a motor neurone. The motor neurone carries the impulse to the effector, the biceps muscle, which contracts and pulls the hand away. The pathway bypasses the conscious brain, so the response is rapid and automatic and reduces injury."
keywords: [receptor, sensory neurone, synapse, relay neurone, motor neurone, effector muscle contracts, rapid and automatic]
```

```yaml
kind: precision
topic: "T5 Transport in Humans"
prompt: "Explain how the structure of an artery is related to its function."
model: "An artery carries blood away from the heart at high pressure, which surges with every heartbeat. Its wall is thick and contains muscle and elastic fibres, so it can withstand the high pressure without bursting. The elastic fibres stretch as blood surges through and recoil between beats, which maintains the pressure and smooths the flow. The lumen is relatively narrow, which helps to keep the blood pressure high. There are no valves along an artery because the pressure keeps the blood moving forwards."
keywords: [high pressure, thick wall, muscle and elastic fibres, stretch and recoil, narrow lumen, no valves needed]
```

```yaml
kind: precision
topic: "T5 Transport in Humans"
prompt: "Explain why the wall of the left ventricle is thicker than the wall of the right ventricle."
model: "The right ventricle pumps blood only to the lungs, which are nearby and contain delicate capillaries, so only a relatively low pressure is needed. The left ventricle pumps blood into the aorta and all around the body, a much greater distance against much greater resistance, so it must generate a much higher pressure. A thicker layer of cardiac muscle contracts more powerfully and so produces that higher pressure. Both ventricles pump the same volume of blood."
keywords: [right ventricle pumps to the lungs only, lower pressure, left ventricle pumps to the whole body, higher pressure, thicker muscle contracts more powerfully, same volume]
```

```yaml
kind: precision
topic: "T5 Transport in Humans"
prompt: "Explain how a red blood cell is adapted for transporting oxygen."
model: "It contains haemoglobin, which combines with oxygen in the lungs to form oxyhaemoglobin and releases it in respiring tissues where the oxygen concentration is low. It has no nucleus, so there is more room for haemoglobin and each cell can carry more oxygen. Its biconcave disc shape gives a large surface area to volume ratio, so oxygen diffuses in and out quickly. It is small and flexible, so it can squeeze through narrow capillaries."
keywords: [haemoglobin, oxyhaemoglobin, no nucleus - more room for haemoglobin, biconcave shape, large surface area to volume ratio, flexible]
```

```yaml
kind: precision
topic: "T7 Excretion in Humans"
prompt: "Describe how urine is formed in the kidney, referring to ultrafiltration and selective reabsorption."
model: "Blood enters the glomerulus through a wide afferent arteriole and leaves through a narrower efferent arteriole, so the blood is under high pressure. This forces water, glucose, urea and mineral ions out through the capillary wall and the wall of the Bowman's capsule, ultrafiltration. Blood cells and plasma proteins are too large to pass through and stay in the blood. As the filtrate flows along the tubule, useful substances are selectively reabsorbed: all the glucose and much of the mineral ion content by active transport, and water by osmosis. The urea and excess water and salts left in the tubule pass to the collecting duct and are excreted as urine."
keywords: [high pressure in the glomerulus, ultrafiltration, small molecules filtered, proteins and cells too large, selective reabsorption, glucose by active transport, water by osmosis, urea excreted]
```

```yaml
kind: precision
topic: "T7 Excretion in Humans"
prompt: "Explain how the body responds when the water content of the blood falls too low."
model: "The fall in the water content of the blood is detected by the brain, which causes the pituitary gland to release more ADH into the blood. ADH makes the walls of the collecting ducts more permeable to water, so more water is reabsorbed from the filtrate back into the blood by osmosis. A smaller volume of more concentrated urine is produced, and the water content of the blood rises back towards normal, negative feedback."
keywords: [detected by the brain, more ADH released, collecting duct more permeable, more water reabsorbed by osmosis, small volume of concentrated urine, negative feedback]
```

```yaml
kind: precision
topic: "T14 Inheritance"
prompt: "Two heterozygous tall pea plants are crossed (Tt × Tt). Explain, using a genetic diagram, why about one quarter of the offspring are short."
model: "Parent phenotypes: tall × tall. Parent genotypes: Tt × Tt. Gametes (circled): T and t from each parent. Combining them in a Punnett square gives TT, Tt, Tt and tt. TT and Tt are tall because T is dominant and only one T allele is needed for the tall phenotype. Only tt is short, because a recessive allele is expressed only when both alleles are recessive. The offspring genotype ratio is 1 TT : 2 Tt : 1 tt, giving a phenotype ratio of 3 tall : 1 short, so about one quarter are short. Each line of the genetic diagram (phenotypes, genotypes, gametes, offspring, ratio) earns a separate mark."
keywords: [parent genotypes, gametes circled, Punnett square, dominant allele masks recessive, homozygous recessive tt, 3 to 1 phenotype ratio]
```

```yaml
kind: precision
topic: "T14 Inheritance"
prompt: "Compare mitosis and meiosis."
model: "Mitosis involves one division and produces two daughter cells; meiosis involves two divisions and produces four. Mitosis keeps the chromosome number the same (diploid to diploid), while meiosis halves it (diploid to haploid). The cells produced by mitosis are genetically identical to the parent cell, whereas those produced by meiosis are genetically different from each other and from the parent. Mitosis occurs throughout the body for growth, repair and asexual reproduction; meiosis occurs only in the reproductive organs, to produce gametes, and is a source of genetic variation."
keywords: [one division vs two divisions, two cells vs four cells, chromosome number kept vs halved, identical vs genetically different, growth and repair vs gamete production, variation]
```

```yaml
kind: precision
topic: "T11 Organisms & their Environment"
prompt: "Explain why only a small percentage of the energy at one trophic level is passed on to the next."
model: "Not all of the organism at one level is eaten, and some parts that are eaten cannot be digested and are lost in faeces. Of the energy that is absorbed, most is released in respiration and eventually lost to the surroundings as heat, and some is lost in excretory products such as urine. Only the energy that remains and is used to build new body tissue is available to the next trophic level. This is why the number of trophic levels in a food chain is limited, and why pyramids of energy are always upright."
keywords: [not all eaten, lost in faeces, energy lost as heat from respiration, lost in urine, only energy in new tissue passed on, limits the number of trophic levels]
```

```yaml
kind: precision
topic: "T11 Organisms & their Environment"
prompt: "Explain how fertiliser washed from farmland into a river can cause fish to die."
model: "The fertiliser adds nitrates and phosphates to the water, and these nutrients cause the algae to reproduce rapidly, forming an algal bloom on the surface. The bloom blocks the light, so algae and plants below cannot photosynthesise and they die. Decomposing bacteria feed on the large amount of dead material, multiply rapidly and respire aerobically, using up the dissolved oxygen. The oxygen concentration of the water falls, so fish and other aquatic animals cannot respire and they die. This process is called eutrophication."
keywords: [nitrates act as nutrients, algal bloom, light blocked, plants die, bacteria decompose and respire, dissolved oxygen used up, fish cannot respire]
```

```yaml
kind: precision
topic: "T9 Infectious Diseases in Humans"
prompt: "Explain how a population of bacteria can become resistant to an antibiotic."
model: "Within the bacterial population there is variation: a random mutation in the DNA of a few bacteria gives them resistance to the antibiotic. When the antibiotic is used, it acts as a selection pressure and kills the non-resistant bacteria. The resistant bacteria survive, reproduce rapidly and pass on the allele for resistance to their offspring. Over many generations the proportion of resistant bacteria increases until most of the population is resistant. This is natural selection, the antibiotic selects for resistance, it does not create it."
keywords: [random mutation, variation already present, selection pressure, non-resistant killed, resistant survive and reproduce, allele passed on, natural selection]
```

```yaml
kind: precision
topic: "T4 Nutrition in Humans"
prompt: "Explain how a villus is adapted for the absorption of digested food."
model: "There are millions of villi, each covered with microvilli, which gives the small intestine a very large surface area for absorption. The epithelium is only one cell thick, so the diffusion distance into the blood is short. A dense network of blood capillaries carries absorbed glucose and amino acids away quickly, which maintains a steep concentration gradient. Each villus contains a lacteal, which absorbs the products of fat digestion. The epithelial cells contain many mitochondria to supply the energy needed for the active transport of glucose and amino acids."
keywords: [millions of villi and microvilli, large surface area, one cell thick epithelium, short diffusion distance, dense capillary network maintains the gradient, lacteal for fats, mitochondria for active transport]
```

```yaml
kind: precision
topic: "T12 Molecular Genetics"
prompt: "Describe the structure of a DNA molecule and state the base-pairing rule."
model: "A DNA molecule consists of two strands coiled around each other to form a double helix. Each strand is made of a chain of nucleotides, and each nucleotide contains one of four bases: adenine (A), thymine (T), cytosine (C) or guanine (G). The two strands are held together by hydrogen bonds between the bases, and the pairing is complementary: A always pairs with T, and C always pairs with G. Because of this rule, if the base sequence of one strand is known, the sequence of the other strand can be worked out, and the number of A bases equals the number of T bases while the number of C bases equals the number of G bases."
keywords: [double helix, two strands, four bases A T C G, complementary base pairing, A with T, C with G, amount of A equals amount of T]
```
