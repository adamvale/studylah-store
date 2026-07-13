---
level: o-level
slug: e-math
subjectName: Mathematics (Elementary)
family: emath
---

## QUESTIONS

```yaml
type: mcq
topic: "N1 Numbers, Indices & Standard Form"
stem: "Evaluate (4.8 × 10⁵) ÷ (1.6 × 10⁻²), giving your answer in standard form."
options:
  - "3 × 10⁷"
  - "3 × 10³"
  - "3 × 10⁻⁷"
  - "0.3 × 10⁸"
answer: 0
marks: 2
misconception: subtracted-a-negative-index-wrongly
worked: |
  Divide the mantissas: 4.8 ÷ 1.6 = 3.
  Subtract the indices: 10⁵ ÷ 10⁻² = 10^(5 − (−2)) = 10⁷.
  So the answer is 3 × 10⁷.
  The trap is writing 10^(5 − 2) = 10³, subtracting −2 ADDS 2.
```

```yaml
type: mcq
topic: "N1 Numbers, Indices & Standard Form"
stem: "Simplify (2a³b)⁴ ÷ (4a⁵b²)."
options:
  - "0.5a⁷b²"
  - "4a⁷b²"
  - "16a⁷b²"
  - "4a⁷b³"
answer: 1
marks: 2
misconception: coefficient-not-raised-to-the-power
worked: |
  (2a³b)⁴ = 2⁴ × a¹² × b⁴ = 16a¹²b⁴, the 2 must be raised to the power 4 as well.
  16a¹²b⁴ ÷ 4a⁵b² = (16 ÷ 4) a^(12−5) b^(4−2) = 4a⁷b².
```

```yaml
type: mcq
topic: "N1 Numbers, Indices & Standard Form"
stem: "Evaluate 8 raised to the power −2/3, giving your answer as a fraction."
options:
  - "-4"
  - "1/16"
  - "1/4"
  - "4"
answer: 2
marks: 2
misconception: negative-index-means-negative-value
worked: |
  A negative index means a reciprocal, not a negative answer.
  8^(−2/3) = 1 ÷ 8^(2/3) = 1 ÷ (∛8)² = 1 ÷ 2² = 1/4.
```

```yaml
type: mcq
topic: "N1 Numbers, Indices & Standard Form"
stem: "Given that p = 2³ × 3 × 5² and q = 2² × 3³ × 5, find the lowest common multiple of p and q."
options:
  - "60"
  - "2700"
  - "10800"
  - "5400"
answer: 3
marks: 2
misconception: took-lowest-powers-for-the-lcm
worked: |
  For the LCM take the HIGHEST power of each prime that appears:
  LCM = 2³ × 3³ × 5² = 8 × 27 × 25 = 5400.
  (Taking the LOWEST powers, 2² × 3 × 5 = 60, gives the HCF instead.)
```

```yaml
type: mcq
topic: "N1 Numbers, Indices & Standard Form"
stem: "Work out (3.6 × 10⁻³) + (4 × 10⁻⁴), giving your answer in standard form."
options:
  - "4 × 10⁻³"
  - "7.6 × 10⁻³"
  - "3.64 × 10⁻³"
  - "4 × 10⁻⁴"
answer: 0
marks: 2
misconception: added-mantissas-without-matching-the-powers
worked: |
  Rewrite both terms with the same power of ten:
  4 × 10⁻⁴ = 0.4 × 10⁻³.
  3.6 × 10⁻³ + 0.4 × 10⁻³ = 4.0 × 10⁻³ = 4 × 10⁻³.
```

```yaml
type: short
topic: "N1 Numbers, Indices & Standard Form"
stem: "Express 0.0000725 in standard form."
accepted: ["7.25 x 10^-5", "7.25 x 10^(-5)", "7.25e-5", "7.25 * 10^-5", "7.25E-5"]
marks: 1
misconception: miscounted-the-decimal-places
worked: |
  Move the decimal point 5 places to the right to reach 7.25, so the index is −5.
  0.0000725 = 7.25 × 10⁻⁵.
```

```yaml
type: mcq
topic: "N2 Ratio, Proportion & Map Scales"
stem: "A map has a scale of 1 : 20 000. Two stations are 7.5 cm apart on the map. Find the actual distance between them, in kilometres."
options:
  - "15 km"
  - "1.5 km"
  - "0.15 km"
  - "150 km"
answer: 1
marks: 2
misconception: cm-to-km-conversion-slip
worked: |
  Actual distance = 7.5 × 20 000 = 150 000 cm.
  1 km = 100 000 cm, so 150 000 cm = 150 000 ÷ 100 000 = 1.5 km.
```

```yaml
type: mcq
topic: "N2 Ratio, Proportion & Map Scales"
stem: "A map has a scale of 1 : 50 000. A reservoir has an area of 6 cm² on the map. Find its actual area, in km²."
options:
  - "3 km²"
  - "0.15 km²"
  - "1.5 km²"
  - "15 km²"
answer: 2
marks: 3
misconception: area-scale-factor-not-squared
worked: |
  Length scale factor = 50 000, so AREA scale factor = 50 000² = 2.5 × 10⁹.
  Actual area = 6 × 2.5 × 10⁹ = 1.5 × 10¹⁰ cm².
  1 km = 10⁵ cm, so 1 km² = (10⁵)² = 10¹⁰ cm².
  Actual area = 1.5 × 10¹⁰ ÷ 10¹⁰ = 1.5 km².
```

```yaml
type: mcq
topic: "N2 Ratio, Proportion & Map Scales"
stem: "y is inversely proportional to x². When x = 3, y = 8. Find y when x = 6."
options:
  - "4"
  - "16"
  - "32"
  - "2"
answer: 3
marks: 3
misconception: used-inverse-proportion-to-x-not-x-squared
worked: |
  y = k/x². Substituting x = 3, y = 8:  8 = k/9, so k = 72.
  When x = 6:  y = 72/6² = 72/36 = 2.
  Doubling x divides y by 2² = 4, not by 2.
```

```yaml
type: mcq
topic: "N2 Ratio, Proportion & Map Scales"
stem: "The ratio of Amir's savings to Bala's savings is 5 : 3. After Amir spends $40, the ratio becomes 3 : 2. Find Bala's savings."
options:
  - "$240"
  - "$400"
  - "$120"
  - "$360"
answer: 0
marks: 3
misconception: inverted-the-ratio
worked: |
  Let the savings be 5t and 3t.
  (5t − 40)/(3t) = 3/2  →  2(5t − 40) = 3(3t)  →  10t − 80 = 9t  →  t = 80.
  Bala's savings = 3t = 3 × 80 = $240.
  Check: Amir now has 400 − 40 = 360, and 360 : 240 = 3 : 2. ✓
```

```yaml
type: short
topic: "N2 Ratio, Proportion & Map Scales"
stem: "p is directly proportional to the cube of q. When q = 2, p = 40. Find p when q = 3."
accepted: ["135", "p = 135"]
marks: 2
misconception: cubed-the-constant-instead-of-the-variable
worked: |
  p = kq³. Substituting q = 2, p = 40:  40 = 8k, so k = 5.
  When q = 3:  p = 5 × 3³ = 5 × 27 = 135.
```

```yaml
type: mcq
topic: "N3 Percentage"
stem: "After a discount of 12%, a bicycle sells for $308. Find its original price."
options:
  - "$344.96"
  - "$350"
  - "$345"
  - "$380"
answer: 1
marks: 3
misconception: reverse-percentage-add-the-discount-back
worked: |
  The sale price is (100 − 12) = 88% of the original price.
  0.88 × original = 308, so original = 308 ÷ 0.88 = $350.
  Adding 12% back on to $308 gives $344.96, that is the wrong base.
```

```yaml
type: mcq
topic: "N3 Percentage"
stem: "The number of members of a club rose from 45 to 54. Find the percentage increase."
options:
  - "16.7%"
  - "9%"
  - "20%"
  - "83.3%"
answer: 2
marks: 2
misconception: divided-by-the-new-value
worked: |
  Increase = 54 − 45 = 9.
  Percentage increase = (increase ÷ ORIGINAL) × 100 = (9 ÷ 45) × 100 = 20%.
  Dividing by the new value 54 gives 16.7%, which is not the percentage increase.
```

```yaml
type: mcq
topic: "N3 Percentage"
stem: "The price of a phone is increased by 20% and then reduced by 20%. What is the overall change in price?"
options:
  - "No change"
  - "An increase of 4%"
  - "A decrease of 40%"
  - "A decrease of 4%"
answer: 3
marks: 2
misconception: percentage-changes-cancel-out
worked: |
  Multiplier for a 20% rise = 1.20; multiplier for a 20% fall = 0.80.
  Overall multiplier = 1.20 × 0.80 = 0.96.
  0.96 means 96% of the original, i.e. a decrease of 4%.
  The two changes do not cancel because the 20% fall is taken on a LARGER amount.
```

```yaml
type: mcq
topic: "N3 Percentage"
stem: "A restaurant bill is $60 before charges. A service charge of 10% is added, then GST of 9% is charged on the new total. Find the final amount payable."
options:
  - "$71.94"
  - "$71.40"
  - "$66.00"
  - "$65.40"
answer: 0
marks: 3
misconception: added-the-percentages-instead-of-compounding
worked: |
  After the service charge: 60 × 1.10 = $66.00.
  GST is charged on $66.00, not on $60: 66 × 1.09 = $71.94.
  Adding the percentages first (60 × 1.19 = $71.40) is not the same thing.
```

```yaml
type: short
topic: "N3 Percentage"
stem: "A shopkeeper marks up the cost price of a lamp by 40%, then sells it at a discount of 25% off the marked price. Find the percentage profit."
accepted: ["5", "5%", "5 percent"]
marks: 3
misconception: subtracted-the-percentages
worked: |
  Take the cost price as 1 unit.
  Marked price = 1 × 1.40 = 1.40.
  Selling price = 1.40 × 0.75 = 1.05.
  Profit = 1.05 − 1 = 0.05, so percentage profit = 0.05 × 100 = 5%.
```

```yaml
type: mcq
topic: "N4 Rate, Speed & Financial Maths"
stem: "$5000 is invested at 4% per year compound interest. Find the interest earned after 3 years."
options:
  - "$600.00"
  - "$624.32"
  - "$5624.32"
  - "$620.00"
answer: 1
marks: 3
misconception: used-simple-interest-instead-of-compound
worked: |
  Amount = P(1 + r/100)ⁿ = 5000 × 1.04³ = $5624.32.
  Interest = amount − principal = 5624.32 − 5000 = $624.32.
  Simple interest would give 5000 × 0.04 × 3 = $600, and the question asks for the INTEREST, not the amount.
```

```yaml
type: mcq
topic: "N4 Rate, Speed & Financial Maths"
stem: "$2400 is invested at simple interest for 5 years and earns $432 in interest. Find the annual interest rate."
options:
  - "18%"
  - "4.5%"
  - "3.6%"
  - "0.36%"
answer: 2
marks: 2
misconception: forgot-to-divide-by-the-time
worked: |
  I = PRT/100, so R = 100I / (PT).
  R = (100 × 432) / (2400 × 5) = 43 200 / 12 000 = 3.6% per year.
  Forgetting to divide by T = 5 gives 18%, which is the interest over the whole 5 years.
```

```yaml
type: mcq
topic: "N4 Rate, Speed & Financial Maths"
stem: "A laptop has a cash price of $1200. Under a hire-purchase plan a customer pays a deposit of 20% of the cash price and then 24 monthly instalments of $46. How much more than the cash price does the customer pay?"
options:
  - "$1344"
  - "$104"
  - "$1104"
  - "$144"
answer: 3
marks: 3
misconception: forgot-to-add-the-deposit
worked: |
  Deposit = 20% of 1200 = $240.
  Instalments = 24 × 46 = $1104.
  Total hire-purchase price = 240 + 1104 = $1344.
  Extra paid = 1344 − 1200 = $144.
  Leaving the deposit out gives 1104 − 1200 = −$96, i.e. nonsense, the deposit is part of what you pay.
```

```yaml
type: mcq
topic: "N4 Rate, Speed & Financial Maths"
stem: "The exchange rate is S$1 = RM 3.45. Sarah changes RM 690 into Singapore dollars. How much does she receive?"
options:
  - "S$200"
  - "S$2380.50"
  - "S$345"
  - "S$690"
answer: 0
marks: 2
misconception: multiplied-instead-of-dividing
worked: |
  RM 3.45 buys S$1, so divide by 3.45 to go from ringgit to Singapore dollars.
  690 ÷ 3.45 = S$200.
  Multiplying (690 × 3.45 = 2380.50) converts the wrong way, a sanity check tells you the answer must be SMALLER than 690.
```

```yaml
type: mcq
topic: "N4 Rate, Speed & Financial Maths"
stem: "A car travels 60 km at an average speed of 40 km/h, then a further 60 km at an average speed of 60 km/h. Find its average speed for the whole journey."
options:
  - "50 km/h"
  - "48 km/h"
  - "52 km/h"
  - "100 km/h"
answer: 1
marks: 3
misconception: averaged-the-two-speeds
worked: |
  Average speed = TOTAL distance ÷ TOTAL time.
  Time 1 = 60/40 = 1.5 h.  Time 2 = 60/60 = 1 h.  Total time = 2.5 h.
  Total distance = 120 km, so average speed = 120 / 2.5 = 48 km/h.
  The mean of 40 and 60 is 50 km/h, but more time is spent at the slower speed, so the true average is below 50.
```

```yaml
type: mcq
topic: "N4 Rate, Speed & Financial Maths"
stem: "A train accelerates uniformly from rest to 20 m/s in 8 s, travels at 20 m/s for 12 s, then decelerates uniformly to rest in 5 s. Find the total distance travelled."
options:
  - "500 m"
  - "340 m"
  - "370 m"
  - "290 m"
answer: 2
marks: 3
misconception: forgot-to-halve-the-triangle-areas
worked: |
  On a speed-time graph, distance = area under the graph.
  Accelerating (triangle): ½ × 8 × 20 = 80 m.
  Constant speed (rectangle): 20 × 12 = 240 m.
  Decelerating (triangle): ½ × 5 × 20 = 50 m.
  Total = 80 + 240 + 50 = 370 m.
  Treating both sloping parts as rectangles gives 20 × 25 = 500 m.
```

```yaml
type: mcq
topic: "N4 Rate, Speed & Financial Maths"
stem: "On a distance-time graph, a cyclist's journey is a straight line from (0, 5) to (4, 29), where distance is in km and time is in hours. Find the cyclist's speed."
options:
  - "7.25 km/h"
  - "24 km/h"
  - "8.5 km/h"
  - "6 km/h"
answer: 3
marks: 2
misconception: used-a-coordinate-instead-of-the-gradient
worked: |
  Speed is the GRADIENT of a distance-time graph.
  Gradient = (29 − 5) / (4 − 0) = 24 / 4 = 6 km/h.
  Using 29 ÷ 4 = 7.25 ignores the 5 km already covered at t = 0.
```

```yaml
type: mcq
topic: "N4 Rate, Speed & Financial Maths"
stem: "Two taps fill a tank at 12 litres per minute and 8 litres per minute. At the same time a leak empties it at 5 litres per minute. How long does it take to fill a 450-litre tank from empty?"
options:
  - "30 minutes"
  - "22.5 minutes"
  - "18 minutes"
  - "45 minutes"
answer: 0
marks: 2
misconception: ignored-the-outflow-rate
worked: |
  Net rate of filling = 12 + 8 − 5 = 15 litres per minute.
  Time = volume ÷ net rate = 450 ÷ 15 = 30 minutes.
  Ignoring the leak gives 450 ÷ 20 = 22.5 minutes.
```

```yaml
type: short
topic: "N4 Rate, Speed & Financial Maths"
stem: "The exchange rate is S$1 = HK$5.60. A watch costs HK$1008. Find its cost in Singapore dollars."
accepted: ["180", "$180", "S$180", "180.00", "S$180.00"]
marks: 2
misconception: multiplied-instead-of-dividing
worked: |
  HK$5.60 is worth S$1, so divide by 5.60.
  1008 ÷ 5.60 = S$180.
```

```yaml
type: mcq
topic: "N5 Algebraic Manipulation & Formulae"
stem: "Express 3/(x - 2) - 2/(x + 1) as a single fraction in its simplest form."
options:
  - "(x - 1)/((x - 2)(x + 1))"
  - "(x + 7)/((x - 2)(x + 1))"
  - "(5x + 7)/((x - 2)(x + 1))"
  - "1/((x - 2)(x + 1))"
answer: 1
marks: 3
misconception: sign-slip-when-subtracting-a-bracket
worked: |
  Common denominator (x − 2)(x + 1):
  Numerator = 3(x + 1) − 2(x − 2) = 3x + 3 − 2x + 4 = x + 7.
  The minus sign multiplies BOTH terms in the second bracket: −2 × (−2) = +4.
  Answer: (x + 7)/((x − 2)(x + 1)).
```

```yaml
type: mcq
topic: "N5 Algebraic Manipulation & Formulae"
stem: "Factorise 6x² - 11x - 10."
options:
  - "(3x - 2)(2x + 5)"
  - "(6x + 5)(x - 2)"
  - "(3x + 2)(2x - 5)"
  - "(3x - 5)(2x + 2)"
answer: 2
marks: 2
misconception: sign-error-in-the-factors
worked: |
  Look for two numbers multiplying to 6 × (−10) = −60 and adding to −11: they are −15 and +4.
  6x² − 15x + 4x − 10 = 3x(2x − 5) + 2(2x − 5) = (3x + 2)(2x − 5).
  Always expand to check: (3x + 2)(2x − 5) = 6x² − 15x + 4x − 10 = 6x² − 11x − 10. ✓
```

```yaml
type: mcq
topic: "N5 Algebraic Manipulation & Formulae"
stem: "Make x the subject of the formula y = (3x - 4)/(x + 2)."
options:
  - "x = (2y - 4)/(3 - y)"
  - "x = (2y + 4)/(y - 3)"
  - "x = (3 - y)/(2y + 4)"
  - "x = (2y + 4)/(3 - y)"
answer: 3
marks: 3
misconception: sign-error-collecting-the-x-terms
worked: |
  y(x + 2) = 3x − 4
  xy + 2y = 3x − 4
  xy − 3x = −4 − 2y
  x(y − 3) = −(4 + 2y)
  x = −(2y + 4)/(y − 3) = (2y + 4)/(3 − y).
```

```yaml
type: mcq
topic: "N5 Algebraic Manipulation & Formulae"
stem: "Expand and simplify (2x - 3)(x + 5) - (x - 1)²."
options:
  - "x² + 9x - 16"
  - "x² + 5x - 14"
  - "3x² + 5x - 16"
  - "x² + 9x - 14"
answer: 0
marks: 3
misconception: forgot-to-distribute-the-minus-over-the-square
worked: |
  (2x − 3)(x + 5) = 2x² + 10x − 3x − 15 = 2x² + 7x − 15.
  (x − 1)² = x² − 2x + 1.
  Subtract the WHOLE bracket: 2x² + 7x − 15 − x² + 2x − 1 = x² + 9x − 16.
```

```yaml
type: mcq
topic: "N5 Algebraic Manipulation & Formulae"
stem: "Simplify (x² - 9)/(x² + x - 12)."
options:
  - "(x - 3)/(x + 4)"
  - "(x + 3)/(x + 4)"
  - "(x + 3)/(x - 4)"
  - "9/(x - 12)"
answer: 1
marks: 3
misconception: cancelled-terms-instead-of-factors
worked: |
  Factorise top and bottom first:
  x² − 9 = (x − 3)(x + 3);  x² + x − 12 = (x + 4)(x − 3).
  Cancel the common FACTOR (x − 3):  (x + 3)/(x + 4).
  You may never cancel individual terms such as the x² or the 9.
```

```yaml
type: mcq
topic: "N5 Algebraic Manipulation & Formulae"
stem: "Factorise completely 3a² - 27b²."
options:
  - "3(a² - 9b²)"
  - "3(a - 9b)(a + 9b)"
  - "3(a - 3b)(a + 3b)"
  - "3(a - 3b)²"
answer: 2
marks: 2
misconception: stopped-before-factorising-completely
worked: |
  Take out the common factor 3 first: 3a² − 27b² = 3(a² − 9b²).
  a² − 9b² is a difference of two squares: a² − (3b)² = (a − 3b)(a + 3b).
  So 3a² − 27b² = 3(a − 3b)(a + 3b). 'Completely' means the difference of squares must be split too.
```

```yaml
type: mcq
topic: "N5 Algebraic Manipulation & Formulae"
stem: "Factorise 2xy - 6x + 5y - 15."
options:
  - "(y + 3)(2x - 5)"
  - "(y - 3)(2x - 5)"
  - "(y + 3)(2x + 5)"
  - "(y - 3)(2x + 5)"
answer: 3
marks: 2
misconception: sign-error-when-grouping
worked: |
  Group in pairs: (2xy − 6x) + (5y − 15).
  = 2x(y − 3) + 5(y − 3)
  Both brackets are now (y − 3), so factor it out: (y − 3)(2x + 5).
```

```yaml
type: mcq
topic: "N5 Algebraic Manipulation & Formulae"
stem: "Simplify (x² - 4)/(2x + 6) ÷ (x + 2)/(x + 3)."
options:
  - "(x - 2)/2"
  - "(x + 2)/2"
  - "(x - 2)/(2(x + 3))"
  - "(x + 2)(x - 2)/2"
answer: 0
marks: 3
misconception: multiplied-without-inverting-the-divisor
worked: |
  Dividing by a fraction means multiplying by its reciprocal:
  [(x − 2)(x + 2)] / [2(x + 3)] × (x + 3)/(x + 2)
  Cancel (x + 2) and (x + 3):  (x − 2)/2.
```

```yaml
type: mcq
topic: "N5 Algebraic Manipulation & Formulae"
stem: "Expand (3x - 2y)²."
options:
  - "9x² + 4y²"
  - "9x² - 12xy + 4y²"
  - "9x² - 6xy + 4y²"
  - "9x² - 12xy - 4y²"
answer: 1
marks: 2
misconception: squared-each-term-separately
worked: |
  (3x − 2y)² = (3x)² − 2(3x)(2y) + (2y)² = 9x² − 12xy + 4y².
  The middle term is essential, (a − b)² is NOT a² − b² and it is NOT a² + b².
  Note the last term is +4y², because (−2y)² is positive.
```

```yaml
type: mcq
topic: "N5 Algebraic Manipulation & Formulae"
stem: "The period of a pendulum is given by T = 2π√(L/g). Make L the subject of the formula."
options:
  - "L = T²/(4π²g)"
  - "L = 4π²gT²"
  - "L = gT²/(4π²)"
  - "L = gT/(2π)"
answer: 2
marks: 3
misconception: forgot-to-square-both-sides
worked: |
  Divide by 2π:  T/(2π) = √(L/g).
  Square both sides:  T²/(4π²) = L/g.
  Multiply by g:  L = gT²/(4π²).
  The square root will not disappear unless you square the WHOLE of each side.
```

```yaml
type: mcq
topic: "N5 Algebraic Manipulation & Formulae"
stem: "Express 4/(x² - 1) + 3/(x + 1) as a single fraction in its simplest form."
options:
  - "7/((x - 1)(x + 1))"
  - "(3x + 7)/((x - 1)(x + 1))"
  - "(3x - 1)/((x - 1)(x + 1))"
  - "(3x + 1)/((x - 1)(x + 1))"
answer: 3
marks: 3
misconception: did-not-factorise-before-finding-the-denominator
worked: |
  Factorise first: x² − 1 = (x − 1)(x + 1), so the common denominator is (x − 1)(x + 1).
  4/((x − 1)(x + 1)) + 3(x − 1)/((x − 1)(x + 1))
  Numerator = 4 + 3x − 3 = 3x + 1.
  Answer: (3x + 1)/((x − 1)(x + 1)).
```

```yaml
type: short
topic: "N5 Algebraic Manipulation & Formulae"
stem: "Given that f = ab/(a + b), find the value of f when a = 6 and b = 3."
accepted: ["2", "f = 2"]
marks: 2
misconception: added-before-multiplying
worked: |
  f = (6 × 3)/(6 + 3) = 18/9 = 2.
  The whole of a + b is the denominator, work out the bracket before dividing.
```

```yaml
type: short
topic: "N5 Algebraic Manipulation & Formulae"
stem: "Factorise 3x² + 10x - 8."
accepted: ["(3x-2)(x+4)", "(x+4)(3x-2)", "(3x - 2)(x + 4)", "(x + 4)(3x - 2)"]
marks: 2
misconception: sign-error-in-the-factors
worked: |
  3 × (−8) = −24. Two numbers multiplying to −24 and adding to +10: +12 and −2.
  3x² + 12x − 2x − 8 = 3x(x + 4) − 2(x + 4) = (3x − 2)(x + 4).
```

```yaml
type: mcq
topic: "N6 Functions & Graphs"
stem: "Express y = x² - 6x + 11 in completed-square form and hence write down the coordinates of the minimum point of the curve."
options:
  - "(3, 2)"
  - "(-3, 2)"
  - "(3, -2)"
  - "(6, 11)"
answer: 0
marks: 3
misconception: sign-of-h-in-the-completed-square
worked: |
  x² − 6x + 11 = (x − 3)² − 9 + 11 = (x − 3)² + 2.
  The smallest value of (x − 3)² is 0, when x = 3, giving y = 2.
  Minimum point = (3, 2). In (x − h)² + k the minimum is at x = +h, not −h.
```

```yaml
type: mcq
topic: "N6 Functions & Graphs"
stem: "Write down the equation of the line of symmetry of the curve y = 2x² - 8x + 5."
options:
  - "x = -2"
  - "x = 2"
  - "x = 4"
  - "x = 8"
answer: 1
marks: 2
misconception: forgot-to-divide-by-2a
worked: |
  For y = ax² + bx + c the line of symmetry is x = −b/(2a).
  Here a = 2 and b = −8, so x = −(−8)/(2 × 2) = 8/4 = 2.
  Dividing by a instead of 2a gives x = 4.
```

```yaml
type: mcq
topic: "N6 Functions & Graphs"
stem: "The curve y = k·aˣ passes through the points (0, 3) and (2, 27). Find the value of a."
options:
  - "9"
  - "27"
  - "3"
  - "1.5"
answer: 2
marks: 3
misconception: forgot-to-take-the-square-root
worked: |
  At (0, 3):  3 = k·a⁰ = k, so k = 3.
  At (2, 27):  27 = 3a², so a² = 9 and a = 3 (a must be positive).
  Stopping at a² = 9 and answering 9 is the classic slip.
```

```yaml
type: mcq
topic: "N6 Functions & Graphs"
stem: "The tangent to a curve at the point P passes through (1, 8) and (5, 2). Find the gradient of the curve at P."
options:
  - "1.5"
  - "-0.667"
  - "2"
  - "-1.5"
answer: 3
marks: 2
misconception: inverted-the-gradient-fraction
worked: |
  The gradient of a curve at a point equals the gradient of the TANGENT there.
  Gradient = (change in y)/(change in x) = (2 − 8)/(5 − 1) = −6/4 = −1.5.
  Writing (5 − 1)/(2 − 8) upside-down gives −0.667.
```

```yaml
type: mcq
topic: "N6 Functions & Graphs"
stem: "Find the coordinates of the points where the curve y = x² - 2x - 8 crosses the x-axis."
options:
  - "(-2, 0) and (4, 0)"
  - "(2, 0) and (-4, 0)"
  - "(0, -2) and (0, 4)"
  - "(-8, 0) and (1, 0)"
answer: 0
marks: 3
misconception: sign-error-when-factorising
worked: |
  On the x-axis, y = 0:  x² − 2x − 8 = 0.
  (x − 4)(x + 2) = 0, so x = 4 or x = −2.
  The points are (−2, 0) and (4, 0). Note the x-axis means y = 0, so the 0 is the SECOND coordinate.
```

```yaml
type: mcq
topic: "N6 Functions & Graphs"
stem: "Find the minimum value of y for the curve y = (x + 1)(x - 5)."
options:
  - "-5"
  - "-9"
  - "9"
  - "-4"
answer: 1
marks: 3
misconception: read-the-y-intercept-as-the-minimum
worked: |
  The roots are x = −1 and x = 5, so the line of symmetry is halfway between them: x = 2.
  Minimum y = (2 + 1)(2 − 5) = 3 × (−3) = −9.
  The y-intercept is (0)(−5)... i.e. y = −5 at x = 0, which is NOT the minimum.
```

```yaml
type: short
topic: "N6 Functions & Graphs"
stem: "The curve y = 3ˣ passes through the point (p, 81). Find the value of p."
accepted: ["4", "p = 4"]
marks: 2
misconception: divided-instead-of-using-indices
worked: |
  3ᵖ = 81. Write 81 as a power of 3:  81 = 3⁴.
  So p = 4.
```

```yaml
type: short
topic: "N6 Functions & Graphs"
stem: "Write down the equation of the line of symmetry of the curve y = x² + 4x - 1."
accepted: ["x = -2", "x=-2", "-2"]
marks: 1
misconception: sign-of-b-over-2a
worked: |
  Line of symmetry: x = −b/(2a) with a = 1 and b = 4.
  x = −4/(2 × 1) = −2.
```

```yaml
type: mcq
topic: "N7 Equations & Inequalities"
stem: "Solve the simultaneous equations 2x + 3y = 12 and 3x - y = 7."
options:
  - "x = 2, y = 3"
  - "x = 3, y = -2"
  - "x = 3, y = 2"
  - "x = -3, y = 6"
answer: 2
marks: 3
misconception: substitution-sign-slip
worked: |
  From the second equation: y = 3x − 7.
  Substitute into the first: 2x + 3(3x − 7) = 12  →  2x + 9x − 21 = 12  →  11x = 33  →  x = 3.
  Then y = 3(3) − 7 = 2.
  Check in BOTH equations: 2(3) + 3(2) = 12 ✓ and 3(3) − 2 = 7 ✓
```

```yaml
type: mcq
topic: "N7 Equations & Inequalities"
stem: "Solve 2x² - 5x - 4 = 0, giving your answers correct to 2 decimal places."
options:
  - "x = -3.14 or x = 0.64"
  - "x = 2.64 or x = -0.14"
  - "x = 1.28 or x = -1.56"
  - "x = 3.14 or x = -0.64"
answer: 3
marks: 3
misconception: sign-of-b-in-the-quadratic-formula
worked: |
  a = 2, b = −5, c = −4.
  x = [−b ± √(b² − 4ac)] / (2a) = [5 ± √(25 + 32)] / 4 = (5 ± √57)/4.
  √57 = 7.5498…
  x = (5 + 7.5498)/4 = 3.14  or  x = (5 − 7.5498)/4 = −0.64.
  −b with b = −5 is +5, not −5, that sign flip is the most common lost mark.
```

```yaml
type: mcq
topic: "N7 Equations & Inequalities"
stem: "Solve x² + 6x - 5 = 0 by completing the square, giving the positive root correct to 3 significant figures."
options:
  - "0.742"
  - "6.74"
  - "2.24"
  - "3.74"
answer: 0
marks: 3
misconception: sign-error-completing-the-square
worked: |
  x² + 6x − 5 = (x + 3)² − 9 − 5 = (x + 3)² − 14.
  (x + 3)² = 14  →  x + 3 = ±√14  →  x = −3 ± 3.7417…
  Positive root: x = −3 + 3.7417 = 0.7417… = 0.742 (3 s.f.).
  Half of +6 is +3, so the bracket is (x + 3), NOT (x − 3).
```

```yaml
type: mcq
topic: "N7 Equations & Inequalities"
stem: "The equation x² + kx + 9 = 0 has two equal roots. Find the positive value of k."
options:
  - "3"
  - "6"
  - "9"
  - "36"
answer: 1
marks: 2
misconception: discriminant-not-set-to-zero
worked: |
  Equal roots means the discriminant b² − 4ac = 0.
  k² − 4(1)(9) = 0  →  k² = 36  →  k = ±6.
  The positive value is k = 6.
```

```yaml
type: mcq
topic: "N7 Equations & Inequalities"
stem: "Solve the inequality 3 - 2x ≥ 11."
options:
  - "x ≥ -4"
  - "x ≤ 4"
  - "x ≤ -4"
  - "x ≥ -7"
answer: 2
marks: 2
misconception: forgot-to-flip-the-inequality-sign
worked: |
  3 − 2x ≥ 11
  −2x ≥ 8
  Divide by −2 and REVERSE the inequality sign:  x ≤ −4.
  Check with x = −5: 3 − 2(−5) = 13 ≥ 11 ✓
```

```yaml
type: mcq
topic: "N7 Equations & Inequalities"
stem: "Three pens and two books cost $23. Five pens and four books cost $43. Find the cost of one book."
options:
  - "$3"
  - "$4"
  - "$10"
  - "$7"
answer: 3
marks: 3
misconception: solved-for-the-wrong-variable
worked: |
  Let a pen cost p and a book cost b.
  3p + 2b = 23  … (1)
  5p + 4b = 43  … (2)
  2 × (1):  6p + 4b = 46.  Subtract (2):  p = 3.
  Substitute into (1): 9 + 2b = 23, so b = 7.
  The question asks for the BOOK, so the answer is $7, not $3.
```

```yaml
type: mcq
topic: "N7 Equations & Inequalities"
stem: "A rectangle has length (x + 3) cm and width x cm. Its area is 40 cm². Find the perimeter of the rectangle."
options:
  - "26 cm"
  - "13 cm"
  - "40 cm"
  - "16 cm"
answer: 0
marks: 4
misconception: stopped-after-finding-x
worked: |
  x(x + 3) = 40  →  x² + 3x − 40 = 0  →  (x + 8)(x − 5) = 0.
  x = 5 (reject x = −8, a length cannot be negative).
  Length = 8 cm, width = 5 cm.
  Perimeter = 2(8 + 5) = 26 cm, the question asks for the PERIMETER, not x.
```

```yaml
type: mcq
topic: "N7 Equations & Inequalities"
stem: "How many integer values of x satisfy -3 < 2x + 1 ≤ 7?"
options:
  - "6"
  - "5"
  - "4"
  - "3"
answer: 1
marks: 3
misconception: included-the-strict-endpoint
worked: |
  −3 < 2x + 1 ≤ 7
  −4 < 2x ≤ 6
  −2 < x ≤ 3.
  x = −2 is NOT included (strict <), but x = 3 IS included (≤).
  Integers: −1, 0, 1, 2, 3, that is 5 values.
```

```yaml
type: mcq
topic: "N7 Equations & Inequalities"
stem: "Solve 5/(x + 2) = 3/(x - 1)."
options:
  - "x = -5.5"
  - "x = 0.5"
  - "x = 5.5"
  - "x = 11"
answer: 2
marks: 3
misconception: cross-multiplication-sign-error
worked: |
  Cross-multiply: 5(x − 1) = 3(x + 2).
  5x − 5 = 3x + 6
  2x = 11
  x = 5.5.
  Check: 5/7.5 = 0.667 and 3/4.5 = 0.667 ✓
```

```yaml
type: mcq
topic: "N7 Equations & Inequalities"
stem: "Solve 3x² = 12x."
options:
  - "x = 4"
  - "x = 0 or x = -4"
  - "x = 2"
  - "x = 0 or x = 4"
answer: 3
marks: 2
misconception: divided-both-sides-by-x
worked: |
  Never divide by x, you would throw away the root x = 0.
  Bring everything to one side: 3x² − 12x = 0.
  Factorise: 3x(x − 4) = 0.
  So x = 0 or x = 4.
```

```yaml
type: short
topic: "N7 Equations & Inequalities"
stem: "Solve 4(x - 3) = 2x + 10."
accepted: ["11", "x = 11", "x=11"]
marks: 2
misconception: did-not-expand-the-bracket
worked: |
  4x − 12 = 2x + 10
  2x = 22
  x = 11.
```

```yaml
type: short
topic: "N7 Equations & Inequalities"
stem: "Solve x² - 7x + 12 = 0."
accepted: ["3, 4", "x = 3 or x = 4", "3 and 4", "3 or 4", "4, 3", "x=3, x=4"]
marks: 2
misconception: sign-error-in-the-factors
worked: |
  Two numbers multiplying to +12 and adding to −7: −3 and −4.
  (x − 3)(x − 4) = 0
  x = 3 or x = 4.
```

```yaml
type: mcq
topic: "G1 Angles, Triangles & Polygons"
stem: "Find the size of each interior angle of a regular 12-sided polygon."
options:
  - "150°"
  - "30°"
  - "120°"
  - "160°"
answer: 0
marks: 2
misconception: gave-the-exterior-angle
worked: |
  Exterior angle = 360° ÷ 12 = 30°.
  Interior angle = 180° − 30° = 150°.
  The quick route (360 ÷ n) gives the EXTERIOR angle, you must still subtract from 180°.
```

```yaml
type: mcq
topic: "G1 Angles, Triangles & Polygons"
stem: "Find the sum of the interior angles of a decagon."
options:
  - "1800°"
  - "1440°"
  - "360°"
  - "1260°"
answer: 1
marks: 2
misconception: used-n-instead-of-n-minus-2
worked: |
  A decagon has n = 10 sides.
  Sum of interior angles = (n − 2) × 180° = 8 × 180° = 1440°.
  Using 10 × 180° = 1800° forgets the − 2.
```

```yaml
type: mcq
topic: "G1 Angles, Triangles & Polygons"
stem: "Each interior angle of a regular polygon is 162°. Find the number of sides."
options:
  - "18"
  - "22"
  - "20"
  - "10"
answer: 2
marks: 3
misconception: divided-360-by-the-interior-angle
worked: |
  Exterior angle = 180° − 162° = 18°.
  n = 360° ÷ exterior angle = 360 ÷ 18 = 20 sides.
  Dividing 360 by the INTERIOR angle (360 ÷ 162) is meaningless, the exterior angles are the ones that add to 360°.
```

```yaml
type: mcq
topic: "G1 Angles, Triangles & Polygons"
stem: "Two parallel lines are cut by a transversal. A pair of co-interior (allied) angles are 3x° and (2x + 10)°. Find x."
options:
  - "10"
  - "30"
  - "42"
  - "34"
answer: 3
marks: 3
misconception: treated-co-interior-angles-as-equal
worked: |
  Co-interior (allied) angles between parallel lines add up to 180°, they are not equal.
  3x + (2x + 10) = 180
  5x + 10 = 180  →  5x = 170  →  x = 34.
  Setting them equal (3x = 2x + 10) would give x = 10, which is the trap.
```

```yaml
type: mcq
topic: "G2 Congruence & Similarity"
stem: "Two similar triangles have corresponding sides of length 6 cm and 9 cm. The area of the smaller triangle is 20 cm². Find the area of the larger triangle."
options:
  - "45 cm²"
  - "30 cm²"
  - "40 cm²"
  - "67.5 cm²"
answer: 0
marks: 3
misconception: area-scale-factor-not-squared
worked: |
  Length scale factor = 9/6 = 1.5.
  Area scale factor = 1.5² = 2.25.
  Larger area = 20 × 2.25 = 45 cm².
  Multiplying the area by 1.5 (giving 30 cm²) forgets to square the scale factor.
```

```yaml
type: mcq
topic: "G2 Congruence & Similarity"
stem: "Two similar cones have heights 4 cm and 10 cm. The volume of the smaller cone is 32 cm³. Find the volume of the larger cone."
options:
  - "80 cm³"
  - "500 cm³"
  - "200 cm³"
  - "125 cm³"
answer: 1
marks: 3
misconception: volume-scale-factor-not-cubed
worked: |
  Length scale factor = 10/4 = 2.5.
  Volume scale factor = 2.5³ = 15.625.
  Larger volume = 32 × 15.625 = 500 cm³.
```

```yaml
type: mcq
topic: "G2 Congruence & Similarity"
stem: "Two similar solids have volumes 27 cm³ and 64 cm³. The surface area of the smaller solid is 45 cm². Find the surface area of the larger solid."
options:
  - "107 cm²"
  - "60 cm²"
  - "80 cm²"
  - "45 cm²"
answer: 2
marks: 4
misconception: used-the-volume-ratio-for-the-area
worked: |
  Volume ratio 27 : 64, so the LENGTH ratio is ∛27 : ∛64 = 3 : 4.
  Area ratio = 3² : 4² = 9 : 16.
  Larger surface area = 45 × 16/9 = 80 cm².
  Using the volume ratio directly (45 × 64/27 ≈ 107 cm²) is the classic error, go back to lengths first.
```

```yaml
type: mcq
topic: "G2 Congruence & Similarity"
stem: "In triangle ABC, D lies on AB and E lies on AC, with DE parallel to BC. AD = 4 cm, DB = 6 cm and DE = 5 cm. Find BC."
options:
  - "7.5 cm"
  - "8.33 cm"
  - "3 cm"
  - "12.5 cm"
answer: 3
marks: 3
misconception: used-ad-over-db-instead-of-ad-over-ab
worked: |
  Triangles ADE and ABC are similar (DE ∥ BC).
  The matching sides are AD and AB, so use AD : AB, NOT AD : DB.
  AB = AD + DB = 4 + 6 = 10 cm, so the scale factor is 10/4 = 2.5.
  BC = 5 × 2.5 = 12.5 cm.
  Using 6/4 gives 7.5 cm, which is wrong.
```

```yaml
type: mcq
topic: "G2 Congruence & Similarity"
stem: "A model car is similar to the real car, with a scale of 1 : 20. The model has a volume of 250 cm³. Find the volume of the real car, in m³."
options:
  - "2 m³"
  - "0.005 m³"
  - "5 m³"
  - "20 m³"
answer: 0
marks: 4
misconception: volume-scale-factor-not-cubed
worked: |
  Volume scale factor = 20³ = 8000.
  Real volume = 250 × 8000 = 2 000 000 cm³.
  1 m = 100 cm, so 1 m³ = 100³ = 1 000 000 cm³.
  Real volume = 2 000 000 ÷ 1 000 000 = 2 m³.
```

```yaml
type: short
topic: "G2 Congruence & Similarity"
stem: "Two similar bottles have heights 12 cm and 18 cm. The smaller bottle holds 240 ml. Find the capacity of the larger bottle."
accepted: ["810", "810 ml", "810ml"]
marks: 3
misconception: volume-scale-factor-not-cubed
worked: |
  Length scale factor = 18/12 = 1.5.
  Volume scale factor = 1.5³ = 3.375.
  Capacity = 240 × 3.375 = 810 ml.
```

```yaml
type: mcq
topic: "G3 Properties of Circles"
stem: "Points A, B and P lie on a circle with centre O. The angle APB at the circumference is 38°. Find the angle AOB at the centre."
options:
  - "19°"
  - "76°"
  - "38°"
  - "142°"
answer: 1
marks: 2
misconception: halved-instead-of-doubling
worked: |
  The angle at the centre is TWICE the angle at the circumference standing on the same arc.
  Angle AOB = 2 × 38° = 76°.
  Halving (19°) reverses the rule.
```

```yaml
type: mcq
topic: "G3 Properties of Circles"
stem: "AB is a diameter of a circle and C is a point on the circle. Angle CAB = 32°. Find angle ABC."
options:
  - "32°"
  - "48°"
  - "58°"
  - "68°"
answer: 2
marks: 3
misconception: forgot-the-angle-in-a-semicircle-is-90
worked: |
  Angle ACB = 90° (angle in a semicircle, because AB is a diameter).
  Angles in triangle ABC add to 180°:
  Angle ABC = 180° − 90° − 32° = 58°.
```

```yaml
type: mcq
topic: "G3 Properties of Circles"
stem: "ABCD is a cyclic quadrilateral. Angle DAB = 105°. Find angle BCD."
options:
  - "105°"
  - "255°"
  - "90°"
  - "75°"
answer: 3
marks: 2
misconception: opposite-angles-of-a-cyclic-quadrilateral-are-equal
worked: |
  Opposite angles of a cyclic quadrilateral are SUPPLEMENTARY (they add to 180°), not equal.
  Angle BCD = 180° − 105° = 75°.
```

```yaml
type: mcq
topic: "G3 Properties of Circles"
stem: "TA and TB are tangents from an external point T to a circle with centre O, touching the circle at A and B. Angle ATB = 48°. Find angle AOB."
options:
  - "132°"
  - "48°"
  - "42°"
  - "96°"
answer: 0
marks: 3
misconception: forgot-the-tangent-radius-right-angles
worked: |
  A tangent meets a radius at 90°, so angle OAT = angle OBT = 90°.
  OATB is a quadrilateral, so its angles add to 360°:
  Angle AOB = 360° − 90° − 90° − 48° = 132°.
```

```yaml
type: mcq
topic: "G4 Pythagoras, Trigonometry & Bearings"
stem: "In a right-angled triangle the hypotenuse is 15 cm and one of the acute angles is 34°. Find the length of the side opposite this angle, correct to 3 significant figures."
options:
  - "12.4 cm"
  - "8.39 cm"
  - "10.1 cm"
  - "21.4 cm"
answer: 1
marks: 2
misconception: used-cosine-instead-of-sine
worked: |
  Opposite and hypotenuse are involved, so use sine.
  sin 34° = opposite / 15
  Opposite = 15 × sin 34° = 15 × 0.5592 = 8.3891… = 8.39 cm (3 s.f.).
  Cosine would give the ADJACENT side (12.4 cm).
```

```yaml
type: mcq
topic: "G4 Pythagoras, Trigonometry & Bearings"
stem: "In triangle ABC, AB = 7 cm, AC = 9 cm and angle BAC = 58°. Find BC, correct to 3 significant figures."
options:
  - "11.4 cm"
  - "5.72 cm"
  - "7.95 cm"
  - "14.0 cm"
answer: 2
marks: 3
misconception: used-pythagoras-in-a-non-right-angled-triangle
worked: |
  Two sides and the INCLUDED angle are given, so use the cosine rule.
  BC² = 7² + 9² − 2(7)(9) cos 58°
  BC² = 49 + 81 − 126 × 0.5299 = 130 − 66.77 = 63.23
  BC = √63.23 = 7.95 cm (3 s.f.).
  Pythagoras (√(49 + 81) = 11.4 cm) only works when the angle is 90°.
```

```yaml
type: mcq
topic: "G4 Pythagoras, Trigonometry & Bearings"
stem: "In triangle PQR, angle P = 42°, angle Q = 63° and PQ = 11 cm. Find QR, correct to 3 significant figures."
options:
  - "10.1 cm"
  - "14.7 cm"
  - "8.24 cm"
  - "7.62 cm"
answer: 3
marks: 4
misconception: matched-the-wrong-angle-to-the-side
worked: |
  Angle R = 180° − 42° − 63° = 75°.
  QR is opposite angle P, and PQ is opposite angle R. Use the sine rule pairing each side with the angle OPPOSITE it:
  QR / sin P = PQ / sin R
  QR = 11 × sin 42° / sin 75° = 11 × 0.6691 / 0.9659 = 7.6191… = 7.62 cm (3 s.f.).
```

```yaml
type: mcq
topic: "G4 Pythagoras, Trigonometry & Bearings"
stem: "In triangle XYZ, XY = 12 cm, XZ = 9 cm and angle YXZ = 110°. Find the area of the triangle, correct to 3 significant figures."
options:
  - "50.7 cm²"
  - "101 cm²"
  - "18.5 cm²"
  - "54.0 cm²"
answer: 0
marks: 3
misconception: forgot-to-halve
worked: |
  Area = ½ ab sin C, where the angle is INCLUDED between the two sides.
  Area = ½ × 12 × 9 × sin 110° = 54 × 0.93969 = 50.7434… = 50.7 cm² (3 s.f.).
  Dropping the ½ gives 101 cm².
```

```yaml
type: mcq
topic: "G4 Pythagoras, Trigonometry & Bearings"
stem: "The bearing of C from A is 130°. Find the bearing of A from C."
options:
  - "230°"
  - "310°"
  - "050°"
  - "130°"
answer: 1
marks: 2
misconception: subtracted-180-instead-of-adding
worked: |
  A back bearing differs by 180°.
  Since 130° is less than 180°, ADD 180°: 130° + 180° = 310°.
  (Subtract 180° only when the original bearing is 180° or more.)
```

```yaml
type: mcq
topic: "G4 Pythagoras, Trigonometry & Bearings"
stem: "A ship sails 8 km due north from P, then 6 km due east to Q. Find the bearing of Q from P, correct to 1 decimal place."
options:
  - "053.1°"
  - "323.1°"
  - "036.9°"
  - "126.9°"
answer: 2
marks: 3
misconception: used-the-wrong-side-ratio
worked: |
  Bearings are measured CLOCKWISE from north. The angle at P between north and PQ satisfies:
  tan θ = opposite / adjacent = 6 / 8 = 0.75
  θ = tan⁻¹(0.75) = 36.87° = 36.9°.
  Written as a three-figure bearing: 036.9°.
  Using tan⁻¹(8/6) = 53.1° measures the angle from EAST, not from north.
```

```yaml
type: mcq
topic: "G4 Pythagoras, Trigonometry & Bearings"
stem: "A cuboid measures 6 cm by 8 cm by 10 cm. Find the length of the longest straight rod that fits inside it, correct to 3 significant figures."
options:
  - "10.0 cm"
  - "12.8 cm"
  - "24.0 cm"
  - "14.1 cm"
answer: 3
marks: 3
misconception: used-only-two-of-the-three-dimensions
worked: |
  The longest rod is the space diagonal, which uses ALL three dimensions.
  d² = 6² + 8² + 10² = 36 + 64 + 100 = 200
  d = √200 = 14.142… = 14.1 cm (3 s.f.).
  Using only the base (√(36 + 64) = 10 cm) gives the diagonal of one face, not of the box.
```

```yaml
type: mcq
topic: "G4 Pythagoras, Trigonometry & Bearings"
stem: "From the top of a vertical cliff 45 m high, the angle of depression of a boat at sea is 27°. Find the horizontal distance of the boat from the foot of the cliff, correct to 3 significant figures."
options:
  - "88.3 m"
  - "22.9 m"
  - "99.1 m"
  - "20.4 m"
answer: 0
marks: 3
misconception: used-tan-the-wrong-way-up
worked: |
  The angle of depression from the top equals the angle of elevation from the boat (alternate angles).
  tan 27° = opposite / adjacent = 45 / d
  d = 45 / tan 27° = 45 / 0.50953 = 88.318… = 88.3 m (3 s.f.).
  Writing d = 45 × tan 27° = 22.9 m inverts the ratio.
```

```yaml
type: mcq
topic: "G4 Pythagoras, Trigonometry & Bearings"
stem: "A ladder of length 5 m leans against a vertical wall and reaches 4.2 m up the wall. Find the angle between the ladder and the ground, correct to 1 decimal place."
options:
  - "32.9°"
  - "57.1°"
  - "40.0°"
  - "49.9°"
answer: 1
marks: 3
misconception: used-cosine-instead-of-sine
worked: |
  The 4.2 m is OPPOSITE the required angle and the 5 m ladder is the HYPOTENUSE, so use sine.
  sin θ = 4.2 / 5 = 0.84
  θ = sin⁻¹(0.84) = 57.14° = 57.1° (1 d.p.).
  cos⁻¹(0.84) = 32.9° would be the angle at the TOP of the ladder.
```

```yaml
type: short
topic: "G4 Pythagoras, Trigonometry & Bearings"
stem: "In triangle ABC, angle ABC = 90°, AB = 12 cm and BC = 5 cm. Find AC."
accepted: ["13", "13 cm", "13cm"]
marks: 2
misconception: subtracted-instead-of-adding-the-squares
worked: |
  AC is the hypotenuse (opposite the right angle at B).
  AC² = 12² + 5² = 144 + 25 = 169
  AC = √169 = 13 cm.
```

```yaml
type: short
topic: "G4 Pythagoras, Trigonometry & Bearings"
stem: "The bearing of Q from P is 072°. Find the bearing of P from Q, giving your answer as a three-figure bearing."
accepted: ["252", "252 degrees", "252.0"]
marks: 2
misconception: subtracted-180-instead-of-adding
worked: |
  072° is less than 180°, so add 180°.
  Bearing of P from Q = 072° + 180° = 252°.
```

```yaml
type: mcq
topic: "G5 Mensuration"
stem: "A sector of a circle has radius 9 cm and an angle of 140° at the centre. Find the area of the sector, correct to 3 significant figures."
options:
  - "22.0 cm²"
  - "254 cm²"
  - "99.0 cm²"
  - "198 cm²"
answer: 2
marks: 3
misconception: used-the-arc-length-formula
worked: |
  Sector area = (θ/360) × πr²
  = (140/360) × π × 9² = 0.38889 × 254.469 = 98.960… = 99.0 cm² (3 s.f.).
  Using (θ/360) × 2πr gives the ARC LENGTH (22.0 cm), which has the wrong units.
```

```yaml
type: mcq
topic: "G5 Mensuration"
stem: "A sector of a circle has radius 7 cm and an angle of 100° at the centre. Find the length of its arc, correct to 3 significant figures."
options:
  - "42.8 cm"
  - "6.11 cm"
  - "24.4 cm"
  - "12.2 cm"
answer: 3
marks: 3
misconception: used-the-sector-area-formula
worked: |
  Arc length = (θ/360) × 2πr
  = (100/360) × 2 × π × 7 = 0.27778 × 43.982 = 12.217… = 12.2 cm (3 s.f.).
  Using πr² instead of 2πr gives 42.8, which is an AREA.
```

```yaml
type: mcq
topic: "G5 Mensuration"
stem: "A cone has base radius 5 cm and vertical height 12 cm. Find its volume, correct to 3 significant figures."
options:
  - "314 cm³"
  - "942 cm³"
  - "628 cm³"
  - "105 cm³"
answer: 0
marks: 3
misconception: forgot-the-one-third
worked: |
  Volume of a cone = ⅓ πr²h
  = ⅓ × π × 5² × 12 = ⅓ × π × 300 = 100π = 314.159… = 314 cm³ (3 s.f.).
  Leaving out the ⅓ gives 942 cm³, that is the volume of the CYLINDER around it.
```

```yaml
type: mcq
topic: "G5 Mensuration"
stem: "A sphere has diameter 12 cm. Find its surface area, correct to 3 significant figures."
options:
  - "1810 cm²"
  - "452 cm²"
  - "113 cm²"
  - "905 cm²"
answer: 1
marks: 3
misconception: used-the-diameter-as-the-radius
worked: |
  Radius = 12 ÷ 2 = 6 cm. The formula needs the RADIUS.
  Surface area = 4πr² = 4 × π × 6² = 4 × π × 36 = 452.389… = 452 cm² (3 s.f.).
  Using r = 12 gives 4π(144) ≈ 1810 cm², four times too big.
```

```yaml
type: mcq
topic: "G5 Mensuration"
stem: "A solid consists of a cylinder of radius 4 cm and height 10 cm with a hemisphere of radius 4 cm on top. Find the total volume, correct to 3 significant figures."
options:
  - "771 cm³"
  - "503 cm³"
  - "637 cm³"
  - "570 cm³"
answer: 2
marks: 4
misconception: used-a-whole-sphere-instead-of-a-hemisphere
worked: |
  Cylinder: πr²h = π × 4² × 10 = 160π = 502.65 cm³.
  Hemisphere: ½ × (4/3)πr³ = (2/3) × π × 4³ = (2/3) × 64π = 134.04 cm³.
  Total = 502.65 + 134.04 = 636.70 = 637 cm³ (3 s.f.).
  Adding a WHOLE sphere gives about 771 cm³.
```

```yaml
type: mcq
topic: "G5 Mensuration"
stem: "A closed cylinder has radius 3 cm and height 8 cm. Find its total surface area, correct to 3 significant figures."
options:
  - "151 cm²"
  - "179 cm²"
  - "264 cm²"
  - "207 cm²"
answer: 3
marks: 3
misconception: forgot-the-two-circular-ends
worked: |
  Curved surface: 2πrh = 2 × π × 3 × 8 = 150.80 cm².
  Two circular ends: 2 × πr² = 2 × π × 9 = 56.55 cm².
  Total = 150.80 + 56.55 = 207.35 = 207 cm² (3 s.f.).
  'Closed' means BOTH ends are included; giving only 151 cm² is the curved surface alone.
```

```yaml
type: mcq
topic: "G5 Mensuration"
stem: "A pyramid has a square base of side 9 cm and a vertical height of 14 cm. Find its volume."
options:
  - "378 cm³"
  - "1134 cm³"
  - "126 cm³"
  - "252 cm³"
answer: 0
marks: 3
misconception: forgot-the-one-third
worked: |
  Volume of a pyramid = ⅓ × base area × height
  Base area = 9 × 9 = 81 cm².
  Volume = ⅓ × 81 × 14 = 27 × 14 = 378 cm³.
  Without the ⅓ you get 1134 cm³.
```

```yaml
type: mcq
topic: "G5 Mensuration"
stem: "A cone has base radius 5 cm and vertical height 12 cm. Find its curved surface area, correct to 3 significant figures."
options:
  - "188 cm²"
  - "204 cm²"
  - "283 cm²"
  - "314 cm²"
answer: 1
marks: 4
misconception: used-the-height-instead-of-the-slant-height
worked: |
  The formula πrl needs the SLANT height l, not the vertical height.
  l = √(r² + h²) = √(5² + 12²) = √169 = 13 cm.
  Curved surface area = πrl = π × 5 × 13 = 65π = 204.20… = 204 cm² (3 s.f.).
  Using h = 12 by mistake gives π × 5 × 12 ≈ 188 cm².
```

```yaml
type: mcq
topic: "G5 Mensuration"
stem: "The cross-section of a prism is a trapezium with parallel sides 6 cm and 10 cm and perpendicular height 5 cm. The prism is 12 cm long. Find its volume."
options:
  - "960 cm³"
  - "300 cm³"
  - "480 cm³"
  - "240 cm³"
answer: 2
marks: 3
misconception: forgot-to-halve-the-trapezium-area
worked: |
  Trapezium area = ½ × (sum of the parallel sides) × height = ½ × (6 + 10) × 5 = 40 cm².
  Volume of a prism = cross-sectional area × length = 40 × 12 = 480 cm³.
  Dropping the ½ gives 960 cm³.
```

```yaml
type: short
topic: "G5 Mensuration"
stem: "A sector of a circle of radius 10 cm has an angle of 72° at the centre. Find its area, giving your answer in terms of π."
accepted: ["20pi", "20 pi", "20*pi", "20 x pi", "20 pi cm^2"]
marks: 2
misconception: used-the-arc-length-formula
worked: |
  Sector area = (θ/360) × πr² = (72/360) × π × 10² = (1/5) × 100π = 20π cm².
```

```yaml
type: short
topic: "G5 Mensuration"
stem: "A cuboid measures 5 cm by 4 cm by 3 cm. Find its total surface area."
accepted: ["94", "94 cm^2", "94cm2", "94 cm2"]
marks: 2
misconception: forgot-to-double-each-face
worked: |
  A cuboid has three pairs of identical faces.
  Surface area = 2(5 × 4) + 2(5 × 3) + 2(4 × 3) = 2(20) + 2(15) + 2(12)
  = 40 + 30 + 24 = 94 cm².
```

```yaml
type: mcq
topic: "G6 Coordinate Geometry"
stem: "Find the gradient of the line joining A(-2, 7) and B(4, -5)."
options:
  - "2"
  - "-0.5"
  - "-12"
  - "-2"
answer: 3
marks: 2
misconception: inverted-the-gradient-fraction
worked: |
  Gradient = (y₂ − y₁)/(x₂ − x₁) = (−5 − 7)/(4 − (−2)) = −12/6 = −2.
  Watch the double negative in the denominator: 4 − (−2) = 6, not 2.
```

```yaml
type: mcq
topic: "G6 Coordinate Geometry"
stem: "Find the length of AB, where A is the point (1, 2) and B is the point (7, 10)."
options:
  - "10 units"
  - "14 units"
  - "28 units"
  - "100 units"
answer: 0
marks: 2
misconception: forgot-the-square-root
worked: |
  AB = √[(7 − 1)² + (10 − 2)²] = √(6² + 8²) = √(36 + 64) = √100 = 10 units.
  Stopping at 100 forgets the square root.
```

```yaml
type: mcq
topic: "G6 Coordinate Geometry"
stem: "A line has gradient 2/3 and passes through the point (0, -3). Find its equation."
options:
  - "y = (3/2)x - 3"
  - "y = (2/3)x - 3"
  - "y = (2/3)x + 3"
  - "y = -3x + 2/3"
answer: 1
marks: 2
misconception: swapped-the-gradient-and-the-intercept
worked: |
  Use y = mx + c with m = 2/3.
  The point (0, −3) is on the y-axis, so c = −3.
  Equation: y = (2/3)x − 3.
```

```yaml
type: mcq
topic: "G6 Coordinate Geometry"
stem: "Find the equation of the straight line passing through (2, 1) and (6, 9)."
options:
  - "y = 2x + 3"
  - "y = 0.5x - 3"
  - "y = 2x - 3"
  - "y = 2x - 5"
answer: 2
marks: 3
misconception: sign-error-finding-the-intercept
worked: |
  Gradient m = (9 − 1)/(6 − 2) = 8/4 = 2.
  Substitute (2, 1) into y = 2x + c:  1 = 2(2) + c  →  c = 1 − 4 = −3.
  Equation: y = 2x − 3.
  Check with the other point: 2(6) − 3 = 9 ✓
```

```yaml
type: mcq
topic: "G6 Coordinate Geometry"
stem: "The line L is parallel to y = 4 - 3x and passes through the point (2, 5). Find the equation of L."
options:
  - "y = -3x - 1"
  - "y = 3x - 1"
  - "y = 4 - 3x"
  - "y = -3x + 11"
answer: 3
marks: 3
misconception: sign-error-substituting-the-point
worked: |
  Parallel lines have the SAME gradient, so m = −3.
  Substitute (2, 5) into y = −3x + c:  5 = −3(2) + c  →  5 = −6 + c  →  c = 11.
  Equation: y = −3x + 11.
```

```yaml
type: short
topic: "G6 Coordinate Geometry"
stem: "Find the gradient of the line 3x + 4y = 20."
accepted: ["-3/4", "-0.75", "- 3/4", "-3 / 4"]
marks: 2
misconception: read-the-gradient-before-rearranging
worked: |
  Rearrange into the form y = mx + c:
  4y = 20 − 3x
  y = 5 − (3/4)x
  The gradient is the coefficient of x: m = −3/4.
```

```yaml
type: mcq
topic: "G7 Vectors in Two Dimensions"
stem: "Find the magnitude of the vector with components (5, -12)."
options:
  - "13"
  - "17"
  - "7"
  - "119"
answer: 0
marks: 2
misconception: added-the-components-instead-of-using-pythagoras
worked: |
  Magnitude = √(5² + (−12)²) = √(25 + 144) = √169 = 13.
  The components are squared, so the minus sign disappears, the magnitude is never negative.
```

```yaml
type: mcq
topic: "G7 Vectors in Two Dimensions"
stem: "Given that a = (3, -1) and b = (-2, 4), find 2a - b."
options:
  - "(4, 2)"
  - "(8, -6)"
  - "(8, 6)"
  - "(4, -6)"
answer: 1
marks: 3
misconception: sign-slip-subtracting-a-negative-component
worked: |
  2a = (6, −2).
  2a − b = (6 − (−2), −2 − 4) = (6 + 2, −6) = (8, −6).
  Subtracting the −2 ADDS 2 to the first component.
```

```yaml
type: mcq
topic: "G7 Vectors in Two Dimensions"
stem: "OA = a and OB = b. M is the midpoint of AB. Express OM in terms of a and b."
options:
  - "½(b - a)"
  - "a + ½b"
  - "½(a + b)"
  - "½(a - b)"
answer: 2
marks: 3
misconception: confused-the-midpoint-with-the-vector-ab
worked: |
  Travel from O to A, then half-way along AB:
  OM = OA + ½ AB = a + ½(b − a) = a + ½b − ½a = ½a + ½b = ½(a + b).
  ½(b − a) is the vector AM, not the position vector OM.
```

```yaml
type: mcq
topic: "G7 Vectors in Two Dimensions"
stem: "The vector (6, k) is parallel to the vector (4, 6). Find k."
options:
  - "4"
  - "8"
  - "12"
  - "9"
answer: 3
marks: 3
misconception: added-instead-of-scaling
worked: |
  Parallel vectors are scalar multiples of each other.
  The scale factor from the first components is 6/4 = 1.5.
  So k = 1.5 × 6 = 9.
  Check: (6, 9) = 1.5 × (4, 6) ✓
```

```yaml
type: mcq
topic: "G7 Vectors in Two Dimensions"
stem: "A is the point (2, -3) and B is the point (-1, 5). Find the vector AB."
options:
  - "(-3, 8)"
  - "(3, -8)"
  - "(1, 2)"
  - "(-3, -8)"
answer: 0
marks: 2
misconception: computed-oa-minus-ob
worked: |
  AB = OB − OA (finish minus start).
  AB = (−1 − 2, 5 − (−3)) = (−3, 8).
  Doing OA − OB gives (3, −8), which is the vector BA.
```

```yaml
type: short
topic: "G7 Vectors in Two Dimensions"
stem: "Given that the vector AB = (7, -24), find |AB|."
accepted: ["25", "25 units"]
marks: 2
misconception: added-the-components-instead-of-using-pythagoras
worked: |
  |AB| = √(7² + (−24)²) = √(49 + 576) = √625 = 25.
```

```yaml
type: mcq
topic: "S1 Data Analysis & Statistics"
stem: "In 20 matches a team scored: 1 goal in 5 matches, 2 goals in 8 matches, 3 goals in 4 matches and 4 goals in 3 matches. Find the mean number of goals per match."
options:
  - "2.5"
  - "2.25"
  - "11.25"
  - "9"
answer: 1
marks: 3
misconception: divided-by-the-number-of-classes
worked: |
  Total goals = (1×5) + (2×8) + (3×4) + (4×3) = 5 + 16 + 12 + 12 = 45.
  Total matches = 5 + 8 + 4 + 3 = 20.
  Mean = 45 ÷ 20 = 2.25 goals.
  Dividing by 4 (the number of different scores) gives 11.25, divide by the total FREQUENCY.
```

```yaml
type: mcq
topic: "S1 Data Analysis & Statistics"
stem: "Find the median of the data: 4, 7, 7, 9, 12, 15, 18, 21."
options:
  - "9"
  - "12"
  - "10.5"
  - "11.625"
answer: 2
marks: 2
misconception: took-the-lower-middle-value
worked: |
  There are 8 values (an even number), so the median is the MEAN of the 4th and 5th values.
  4th value = 9, 5th value = 12.
  Median = (9 + 12) ÷ 2 = 10.5.
  11.625 is the mean, not the median.
```

```yaml
type: mcq
topic: "S1 Data Analysis & Statistics"
stem: "Find the standard deviation of the data 2, 4, 4, 6, 9, correct to 3 significant figures."
options:
  - "2.65"
  - "5.60"
  - "1.20"
  - "2.37"
answer: 3
marks: 3
misconception: divided-by-n-minus-one
worked: |
  Mean = (2 + 4 + 4 + 6 + 9) ÷ 5 = 25 ÷ 5 = 5.
  Squared deviations: 9, 1, 1, 1, 16.  Their sum = 28.
  Variance = 28 ÷ 5 = 5.6  (divide by n, not n − 1).
  Standard deviation = √5.6 = 2.3664… = 2.37 (3 s.f.).
  Dividing by 4 gives √7 = 2.65, the wrong divisor.
```

```yaml
type: mcq
topic: "S1 Data Analysis & Statistics"
stem: "A cumulative frequency curve is drawn for the test marks of 200 students. Which cumulative frequency should be used to read off the lower quartile?"
options:
  - "50"
  - "25"
  - "100"
  - "150"
answer: 0
marks: 2
misconception: used-the-percentage-instead-of-the-frequency
worked: |
  The lower quartile is the value below which one quarter of the data lies.
  One quarter of 200 students = 200 ÷ 4 = 50.
  So read across from a cumulative frequency of 50.
  (100 gives the median and 150 gives the upper quartile.)
```

```yaml
type: mcq
topic: "S1 Data Analysis & Statistics"
stem: "A box-and-whisker plot shows a lower quartile of 32 and an upper quartile of 47. Find the interquartile range."
options:
  - "79"
  - "15"
  - "39.5"
  - "23.5"
answer: 1
marks: 1
misconception: added-the-quartiles
worked: |
  Interquartile range = upper quartile − lower quartile
  = 47 − 32 = 15.
  Adding them (79) or averaging them (39.5) is not the IQR.
```

```yaml
type: mcq
topic: "S1 Data Analysis & Statistics"
stem: "In a histogram with unequal class widths, the class 10 ≤ x < 30 has a frequency of 40. Find the frequency density for this class."
options:
  - "40"
  - "20"
  - "2"
  - "0.5"
answer: 2
marks: 2
misconception: plotted-frequency-instead-of-frequency-density
worked: |
  Class width = 30 − 10 = 20.
  Frequency density = frequency ÷ class width = 40 ÷ 20 = 2.
  When class widths are unequal, the vertical axis MUST be frequency density, otherwise the areas are misleading.
```

```yaml
type: mcq
topic: "S1 Data Analysis & Statistics"
stem: "Every value in a data set is increased by 5. What happens to the mean and to the standard deviation?"
options:
  - "Both increase by 5"
  - "The mean is unchanged; the standard deviation increases by 5"
  - "Both are unchanged"
  - "The mean increases by 5; the standard deviation is unchanged"
answer: 3
marks: 2
misconception: standard-deviation-shifts-with-the-data
worked: |
  Adding a constant slides every value along by the same amount, so the mean goes up by 5.
  But the SPREAD of the values does not change, every gap between values is exactly the same as before.
  So the standard deviation is unchanged.
  Example: for 2, 4, 6 the mean is 4 and the standard deviation is 1.63; for 7, 9, 11 the mean is 9 but the standard deviation is still 1.63.
```

```yaml
type: short
topic: "S1 Data Analysis & Statistics"
stem: "The mean of five numbers is 14. Four of the numbers are 9, 12, 16 and 20. Find the fifth number."
accepted: ["13"]
marks: 2
misconception: forgot-to-use-the-total
worked: |
  Total of the five numbers = mean × how many = 14 × 5 = 70.
  Total of the four given numbers = 9 + 12 + 16 + 20 = 57.
  Fifth number = 70 − 57 = 13.
```

```yaml
type: short
topic: "S1 Data Analysis & Statistics"
stem: "Find the mode of the data: 3, 5, 5, 7, 8, 8, 8, 9."
accepted: ["8"]
marks: 1
misconception: gave-the-frequency-instead-of-the-value
worked: |
  The mode is the value that occurs MOST often.
  8 appears three times, more than any other value, so the mode is 8.
  (3 is the frequency of 8, not the mode.)
```

```yaml
type: mcq
topic: "S2 Probability"
stem: "A bag contains 5 red, 3 blue and 4 green counters. One counter is taken at random. Find the probability that it is not blue."
options:
  - "3/4"
  - "1/4"
  - "9/4"
  - "1/3"
answer: 0
marks: 2
misconception: gave-the-probability-of-the-event-instead-of-its-complement
worked: |
  Total counters = 5 + 3 + 4 = 12.
  P(blue) = 3/12 = 1/4.
  P(not blue) = 1 − 1/4 = 3/4.
  (Or count directly: 5 + 4 = 9 counters are not blue, so 9/12 = 3/4.)
```

```yaml
type: mcq
topic: "S2 Probability"
stem: "A bag contains 4 red and 6 blue balls. Two balls are taken at random without replacement. Find the probability that both are red."
options:
  - "4/25"
  - "2/15"
  - "2/5"
  - "7/15"
answer: 1
marks: 3
misconception: did-not-reduce-the-denominator
worked: |
  First ball: P(red) = 4/10.
  WITHOUT replacement, only 3 reds are left out of 9 balls, so the second branch is 3/9.
  P(both red) = (4/10) × (3/9) = 12/90 = 2/15.
  Using 4/10 × 4/10 = 4/25 would be for drawing WITH replacement.
```

```yaml
type: mcq
topic: "S2 Probability"
stem: "Events A and B are independent, with P(A) = 0.3 and P(B) = 0.4. Find the probability that at least one of them occurs."
options:
  - "0.7"
  - "0.12"
  - "0.58"
  - "0.42"
answer: 2
marks: 3
misconception: added-the-probabilities
worked: |
  'At least one' is easiest as 1 − P(neither).
  P(not A) = 0.7 and P(not B) = 0.6.
  P(neither) = 0.7 × 0.6 = 0.42.
  P(at least one) = 1 − 0.42 = 0.58.
  Simply adding 0.3 + 0.4 = 0.7 double-counts the case where both happen.
```

```yaml
type: mcq
topic: "S2 Probability"
stem: "Two fair six-sided dice are thrown. Find the probability that the sum of the two scores is 9."
options:
  - "1/6"
  - "1/12"
  - "1/4"
  - "1/9"
answer: 3
marks: 3
misconception: miscounted-the-favourable-outcomes
worked: |
  There are 6 × 6 = 36 equally likely outcomes.
  Sums of 9: (3,6), (4,5), (5,4), (6,3), that is 4 outcomes. Order matters, so (3,6) and (6,3) are different.
  P(sum = 9) = 4/36 = 1/9.
```

```yaml
type: short
topic: "S2 Probability"
stem: "A fair spinner has eight equal sectors numbered 1 to 8. Find the probability that the spinner lands on a prime number."
accepted: ["1/2", "0.5", "4/8"]
marks: 2
misconception: counted-1-as-a-prime-number
worked: |
  The prime numbers from 1 to 8 are 2, 3, 5 and 7, that is 4 of them.
  1 is NOT prime.
  P(prime) = 4/8 = 1/2.
```

## TEACHING

```yaml
kind: careless
topic: "Quadratic formula"
checks:
  - "Write down a, b and c with their signs BEFORE substituting. If the equation is 2x² - 5x - 4 = 0, then b = -5 and c = -4."
  - "-b flips the sign: with b = -5, the formula starts with +5."
  - "Work out the discriminant b² - 4ac on its own first. Watch -4 × 2 × (-4) = +32."
  - "The whole of -b ± √(b² - 4ac) is divided by 2a - put the bracket in your calculator."
  - "Give BOTH roots unless the question rejects one; round only at the very end."
```

```yaml
kind: careless
topic: "Completing the square"
checks:
  - "Halve the coefficient of x, then square it: x² + 6x becomes (x + 3)² - 9."
  - "The sign inside the bracket matches the sign of b: x² - 6x gives (x - 3)²."
  - "If a ≠ 1, factor a out of the x² and x terms FIRST: 2x² - 8x + 5 = 2(x² - 4x) + 5."
  - "For (x - h)² + k the minimum point is (h, k), so the x-coordinate is +h, not -h."
  - "Solving? Remember the ± when you square-root: x + 3 = ±√14 gives two answers."
```

```yaml
kind: careless
topic: "Factorising quadratics"
checks:
  - "For ax² + bx + c, look for two numbers with product a × c and sum b."
  - "Check the signs: product negative means the two numbers have opposite signs."
  - "Always EXPAND your answer to check it returns the original expression."
  - "Take out any common factor first: 6x² - 24 = 6(x² - 4) = 6(x - 2)(x + 2)."
  - "'Factorise completely' means the difference of two squares must be split as well."
```

```yaml
kind: careless
topic: "Solving inequalities"
checks:
  - "Multiplying or dividing by a NEGATIVE number reverses the inequality sign."
  - "Adding or subtracting never flips the sign."
  - "Test one value from your answer back in the original inequality."
  - "For a double inequality, do the same operation to all three parts."
  - "Asked for integers? Check carefully whether each endpoint is included (≤) or not (<)."
```

```yaml
kind: careless
topic: "Simultaneous equations"
checks:
  - "Line the equations up with x, y and the constant in the same columns."
  - "To eliminate, the coefficients must MATCH in size: multiply one or both equations first."
  - "Same signs: subtract. Different signs: add. Getting this backwards is the classic slip."
  - "Substitute your value back to find the second unknown - and answer BOTH."
  - "Check your pair in the equation you did NOT use for the substitution."
```

```yaml
kind: careless
topic: "Algebraic fractions"
checks:
  - "Factorise every numerator and denominator BEFORE you do anything else."
  - "Cancel FACTORS only, never individual terms: you cannot cancel the x² in (x² - 9)/(x² + x - 12)."
  - "Subtracting a fraction? The minus sign multiplies every term in that numerator."
  - "Dividing means multiplying by the reciprocal - flip the SECOND fraction only."
  - "Leave the denominator in factorised form; 'simplest form' does not mean 'expanded'."
```

```yaml
kind: careless
topic: "Changing the subject of a formula"
checks:
  - "Collect every term containing the new subject on ONE side, everything else on the other."
  - "Then factorise out the subject: xy - 3x = -4 - 2y becomes x(y - 3) = -(4 + 2y)."
  - "To undo a square root you must square the WHOLE side, not term by term."
  - "Dividing by a bracket is fine - just write it as a single fraction."
  - "If the subject appears twice, you will always need to factorise. Expect it."
```

```yaml
kind: careless
topic: "Expanding and simplifying"
checks:
  - "(a - b)² = a² - 2ab + b². The middle term is not optional."
  - "A minus sign in front of a bracket changes the sign of EVERY term inside it."
  - "Multiply every term in the first bracket by every term in the second - count your products."
  - "Collect like terms only: 3x and 3x² are not like terms."
  - "Powers: (3x)² = 9x², not 3x². The coefficient gets squared too."
```

```yaml
kind: careless
topic: "Indices"
checks:
  - "Multiplying adds the indices; dividing subtracts them; a power of a power multiplies them."
  - "Subtracting a negative index adds: 10⁵ ÷ 10⁻² = 10⁷."
  - "A negative index means a RECIPROCAL, not a negative answer: 8⁻¹ = 1/8."
  - "Anything (except 0) to the power 0 is 1."
  - "Raise the coefficient too: (2a³)⁴ = 16a¹², not 2a¹²."
  - "For a fractional index, the denominator is the root: 8^(2/3) = (∛8)² = 4."
```

```yaml
kind: careless
topic: "Standard form"
checks:
  - "The mantissa must satisfy 1 ≤ a < 10. 0.3 × 10⁸ is not in standard form."
  - "Adding or subtracting? Rewrite both numbers with the SAME power of ten first."
  - "Multiplying: multiply the mantissas, add the indices. Dividing: divide, subtract."
  - "After multiplying you may need to re-normalise: 12 × 10⁵ = 1.2 × 10⁶."
  - "A small number has a NEGATIVE index: 0.0000725 = 7.25 × 10⁻⁵."
```

```yaml
kind: careless
topic: "Rounding and significant figures"
checks:
  - "Round only at the FINAL step - keep full accuracy in the calculator memory."
  - "Unless told otherwise, give answers to 3 significant figures, or 1 decimal place for an angle in degrees."
  - "Money answers go to 2 decimal places: $71.94, not $71.9."
  - "Leading zeros are not significant: 0.00408 to 2 s.f. is 0.0041."
  - "Keep trailing zeros that carry accuracy: 99.0 cm² is 3 s.f., 99 cm² is only 2."
```

```yaml
kind: careless
topic: "Percentage change and reverse percentage"
checks:
  - "Percentage change is always divided by the ORIGINAL value, never the new one."
  - "Reverse percentage: DIVIDE by the multiplier. After a 12% discount, original = price ÷ 0.88."
  - "Never add the discount back on to the sale price - the base is different."
  - "Increase of 20% then decrease of 20% is not 'no change': 1.2 × 0.8 = 0.96, a 4% fall."
  - "Write the working as (change ÷ original) × 100 so the method mark is clear."
```

```yaml
kind: careless
topic: "Simple and compound interest"
checks:
  - "Simple interest: I = PRT/100 - the interest is the same every year."
  - "Compound interest: amount = P(1 + r/100)ⁿ - the interest earns interest."
  - "Read the question: does it want the AMOUNT or just the INTEREST? Interest = amount - principal."
  - "Compounded half-yearly? Halve the rate and double the number of periods."
  - "Round money to 2 decimal places at the end only."
```

```yaml
kind: careless
topic: "Hire purchase and money exchange"
checks:
  - "Hire purchase total = deposit + (number of instalments × instalment amount). The deposit counts."
  - "A deposit given as a percentage is a percentage of the CASH price."
  - "'How much more' means total hire-purchase price MINUS cash price."
  - "Check the number of payments: '2 years of monthly instalments' means 24, not 2."
  - "Exchange rates: write the rate as a sentence first, such as 'S$1 = RM 3.45'."
  - "Going to the currency on the right, MULTIPLY. Coming back, DIVIDE."
  - "Sanity-check the size: RM 690 must be worth fewer than 690 Singapore dollars."
```

```yaml
kind: careless
topic: "Ratio and sharing"
checks:
  - "Write the ratio in the order the question names the people - do not invert it."
  - "Share a total by adding the parts first: 5 : 3 means 8 equal parts."
  - "If an amount CHANGES, use 5t and 3t and form an equation - do not just scale the ratio."
  - "Simplify ratios to whole numbers, and keep the units the same on both sides."
  - "Check your answer satisfies the NEW ratio as well as the old one."
```

```yaml
kind: careless
topic: "Map scales"
checks:
  - "1 : 20 000 means 1 cm on the map is 20 000 cm in real life."
  - "For AREA, square the scale factor: 1 : 50 000 gives an area factor of 50 000²."
  - "Convert units carefully: 1 km = 100 000 cm and 1 km² = 10¹⁰ cm²."
  - "Check the direction: real distances are bigger than map distances."
```

```yaml
kind: careless
topic: "Direct and inverse proportion"
checks:
  - "Direct: y = kx. Inverse: y = k/x. Write the equation before substituting."
  - "Find k from the given pair FIRST, then use it for the new value."
  - "Proportional to x²? Then doubling x multiplies y by 4, not by 2."
  - "Inversely proportional to x²? Then doubling x DIVIDES y by 4."
```

```yaml
kind: careless
topic: "Speed, distance and time"
checks:
  - "Average speed = TOTAL distance ÷ TOTAL time. Never average the speeds."
  - "Convert minutes to hours before using km/h: 45 minutes = 0.75 h."
  - "To change m/s into km/h, multiply by 3.6; the other way, divide by 3.6."
  - "Keep the units consistent all the way through, and state them in the answer."
```

```yaml
kind: careless
topic: "Distance-time graphs"
checks:
  - "The GRADIENT gives the speed. A steeper line means a faster speed."
  - "A horizontal line means stationary, not 'moving slowly'."
  - "Read the gradient as rise ÷ run using two clear points - do not just read off one coordinate."
  - "A negative gradient means returning towards the starting point."
  - "The area under a distance-time graph has no meaning - do not calculate it."
```

```yaml
kind: careless
topic: "Speed-time graphs"
checks:
  - "The GRADIENT gives the acceleration; the AREA underneath gives the distance."
  - "Split the area into triangles and rectangles - and remember the ½ for each triangle."
  - "A horizontal line means constant speed, i.e. zero acceleration (not zero speed)."
  - "A negative gradient is deceleration; the distance is still a positive area."
  - "Check the axis units before you read anything off (m/s versus km/h)."
```

```yaml
kind: careless
topic: "Bearings"
checks:
  - "Measure CLOCKWISE from NORTH, and always write three figures: 036.9°, not 36.9°."
  - "Draw the north line at EVERY point you take a bearing from."
  - "A back bearing differs by 180°: add 180° if the bearing is under 180°, otherwise subtract."
  - "Angles in degrees are given to 1 decimal place unless the question says otherwise."
  - "Label the right angle and the triangle sides before choosing sine, cosine or tangent."
```

```yaml
kind: careless
topic: "Right-angled trigonometry"
checks:
  - "Label the sides relative to the ANGLE you are using: opposite, adjacent, hypotenuse."
  - "The hypotenuse is always opposite the right angle - it is the longest side."
  - "Finding an angle? Use the inverse function (sin⁻¹, cos⁻¹, tan⁻¹)."
  - "Finding a side in the denominator? Rearrange: if tan 27° = 45/d then d = 45 ÷ tan 27°."
  - "Make sure your calculator is in DEGREE mode before you start."
```

```yaml
kind: careless
topic: "Sine rule"
checks:
  - "Use it when you have a side and its OPPOSITE angle, plus one more piece of information."
  - "Pair each side with the angle facing it: a/sin A = b/sin B."
  - "Finding a side? Keep the sides on top. Finding an angle? Turn it upside down."
  - "Missing the third angle? Angles in a triangle add to 180° - work it out first."
  - "Watch the obtuse case: sin⁻¹ on a calculator only gives you the acute answer."
```

```yaml
kind: careless
topic: "Cosine rule"
checks:
  - "Use it for two sides and the INCLUDED angle, or for all three sides."
  - "c² = a² + b² - 2ab cos C: the angle C must be opposite the side c."
  - "It is minus 2ab cos C. If C is obtuse, cos C is negative and the term becomes a plus."
  - "Do not stop at c² - remember to square-root at the end."
  - "Never use plain Pythagoras unless the triangle actually has a right angle."
```

```yaml
kind: careless
topic: "Area of a triangle using half ab sin C"
checks:
  - "The angle must be INCLUDED between the two sides you use."
  - "Do not forget the ½ - halving is the most commonly dropped step here."
  - "Check the calculator is in degree mode; sin 110° is positive (about 0.94)."
  - "Use ½ × base × height only when the height is perpendicular to that base."
  - "Give the units as cm² (or m²), not cm."
```

```yaml
kind: careless
topic: "Pythagoras' theorem in 3D"
checks:
  - "The space diagonal of a cuboid uses ALL THREE dimensions: d² = a² + b² + c²."
  - "Sketch the right-angled triangle you are actually using, and label its three sides."
  - "Finding the hypotenuse? Add the squares. Finding a shorter side? Subtract."
  - "Do not round the intermediate diagonal - carry the exact value forward."
  - "Check that your hypotenuse came out as the LONGEST side."
```

```yaml
kind: careless
topic: "Arc length and sector area"
checks:
  - "Arc length = (θ/360) × 2πr. Sector area = (θ/360) × πr²."
  - "Mixing these up is the single biggest source of lost marks here - check the units your answer needs."
  - "Is the given length the radius or the diameter? Halve the diameter first."
  - "Perimeter of a sector = arc + TWO radii. The two straight edges are easy to forget."
  - "Use the calculator value of π (or 3.142), and round only at the end."
```

```yaml
kind: careless
topic: "Volume of cones, pyramids and spheres"
checks:
  - "Cone: ⅓πr²h. Pyramid: ⅓ × base area × height. Sphere: (4/3)πr³."
  - "The ⅓ is not optional - dropping it triples your answer."
  - "The h in a cone or pyramid is the VERTICAL height, not the slant height."
  - "A hemisphere is HALF a sphere: (2/3)πr³."
  - "Radius or diameter? Read it again. Cubing a wrong radius is expensive."
```

```yaml
kind: careless
topic: "Surface area of composite solids"
checks:
  - "List every face, then ask: is it actually on the OUTSIDE of the solid?"
  - "Where two solids join, the joining faces are hidden - do not include them."
  - "'Closed' cylinder means the curved surface PLUS two circular ends."
  - "Cone curved surface is πrl and needs the SLANT height: l = √(r² + h²)."
  - "Hemisphere on top of a cylinder: use 2πr² for the curved dome, and leave out the flat circle underneath."
```

```yaml
kind: careless
topic: "Circle properties"
checks:
  - "Angle at the centre = 2 × angle at the circumference on the same arc."
  - "Angle in a semicircle is 90°."
  - "Opposite angles of a cyclic quadrilateral ADD to 180°; they are not equal."
  - "A tangent meets the radius at 90° - mark that right angle on your diagram."
  - "Tangents from the same external point are equal in length."
  - "Always QUOTE the reason - the reasoning marks are worth as much as the number."
```

```yaml
kind: careless
topic: "Angles and polygons"
checks:
  - "Exterior angles of any polygon add to 360°; interior + exterior = 180°."
  - "Sum of interior angles = (n - 2) × 180°. The minus 2 is essential."
  - "For a regular polygon, find the EXTERIOR angle first: it is 360 ÷ n."
  - "Co-interior (allied) angles between parallel lines add to 180°; they are not equal."
  - "Alternate angles (Z) and corresponding angles (F) ARE equal."
  - "Name the reason for every step - 'angles on a straight line', 'vertically opposite', and so on."
```

```yaml
kind: careless
topic: "Similar figures: area and volume scale factors"
checks:
  - "Length scale factor k. AREA scale factor k². VOLUME scale factor k³."
  - "Given the volume ratio, take the CUBE root to get back to lengths before doing areas."
  - "Given the area ratio, take the square root to get back to lengths."
  - "Match corresponding sides carefully: use AD/AB, not AD/DB."
  - "State which figure is the bigger one, and check your answer moved in the right direction."
```

```yaml
kind: careless
topic: "Congruence and similarity"
checks:
  - "Congruent means identical: SSS, SAS, ASA, AAS, or RHS for right-angled triangles."
  - "AAA proves SIMILARITY only, never congruence - the shapes can be different sizes."
  - "SSA is not a valid congruence test."
  - "In a proof, name the triangles with the vertices in CORRESPONDING order."
  - "Give a reason for every statement, and finish with the test you used."
```

```yaml
kind: careless
topic: "Coordinate geometry"
checks:
  - "Gradient = (y₂ - y₁)/(x₂ - x₁). Keep the points in the same order top and bottom."
  - "Watch double negatives: 4 - (-2) = 6."
  - "Length AB = √[(x₂ - x₁)² + (y₂ - y₁)²]. Do not forget the square root."
  - "Parallel lines have EQUAL gradients."
  - "Find c by substituting a known point into y = mx + c, then check with the other point."
```

```yaml
kind: careless
topic: "Quadratic graphs"
checks:
  - "Line of symmetry: x = -b/(2a). Divide by 2a, not by a."
  - "Positive x² opens upwards (minimum); negative x² opens downwards (maximum)."
  - "Roots come from y = 0; the y-intercept comes from x = 0. Do not mix them up."
  - "The minimum VALUE is the y-coordinate; the minimum POINT is a pair of coordinates."
  - "Plotting? Use a smooth curve, never a series of straight line segments."
```

```yaml
kind: careless
topic: "Exponential graphs and gradient by tangent"
checks:
  - "For y = kaˣ, the point at x = 0 gives k straight away, since a⁰ = 1."
  - "After forming a² = 9, remember to square-root: a = 3, not 9."
  - "An exponential curve never touches the x-axis - it has a horizontal asymptote."
  - "To find the gradient of a CURVE at a point, draw a tangent and use two points ON THE TANGENT that are far apart."
  - "Read the tangent's coordinates off the axes carefully; a steep tangent magnifies reading errors."
```

```yaml
kind: careless
topic: "Vectors in two dimensions"
checks:
  - "AB = OB - OA: finish minus start. Reversing it gives BA."
  - "Subtracting a negative component adds: -2 - (-4) = +2."
  - "Magnitude |AB| = √(x² + y²) - it is never negative."
  - "Parallel vectors are scalar multiples: (6, 9) = 1.5 × (4, 6)."
  - "In a geometry proof, travel along a route: OM = OA + AM."
```

```yaml
kind: careless
topic: "Probability and tree diagrams"
checks:
  - "Probabilities on a pair of branches from the same point must add to 1."
  - "ALONG the branches, multiply. BETWEEN separate outcomes, add."
  - "Without replacement: reduce BOTH the numerator and the denominator on the second draw."
  - "'At least one' is usually fastest as 1 - P(none)."
  - "Never add probabilities of events that can happen together - that double-counts."
  - "Leave the answer as a fraction in its lowest terms unless told otherwise."
```

```yaml
kind: careless
topic: "Averages, cumulative frequency and box plots"
checks:
  - "Sort the data before finding the median. With an even count, average the two middle values."
  - "Mean from a frequency table: divide by the TOTAL FREQUENCY, not by the number of rows."
  - "The mode is the VALUE that occurs most often, not how often it occurs."
  - "On a cumulative frequency curve of n values: lower quartile at n/4, median at n/2, upper quartile at 3n/4."
  - "Interquartile range = upper quartile - lower quartile. Subtract, never add."
  - "Plot cumulative frequency at the UPPER class boundary."
```

```yaml
kind: careless
topic: "Standard deviation and histograms"
checks:
  - "Divide by n, not by n - 1, for the standard deviation in this syllabus."
  - "Use the calculator's statistics mode - and clear the previous data first."
  - "Adding a constant to every value leaves the standard deviation UNCHANGED; only the mean shifts."
  - "A larger standard deviation means more spread out, i.e. less consistent."
  - "In a histogram with unequal class widths, plot FREQUENCY DENSITY = frequency ÷ class width."
  - "In a histogram it is the AREA of a bar, not its height, that represents the frequency."
```

```yaml
kind: definition
term: "Discriminant"
topic: "N7 Equations & Inequalities"
body: "The value b² − 4ac for the quadratic equation ax² + bx + c = 0. If it is positive there are two distinct real roots; if it is zero there are two equal roots; if it is negative there are no real roots."
```

```yaml
kind: definition
term: "Standard form"
topic: "N1 Numbers, Indices & Standard Form"
body: "A number written as a × 10ⁿ, where 1 ≤ a < 10 and n is an integer. A number smaller than 1 has a negative index, for example 7.25 × 10⁻⁵."
```

```yaml
kind: definition
term: "Highest Common Factor (HCF)"
topic: "N1 Numbers, Indices & Standard Form"
body: "The largest number that divides exactly into two or more given numbers. From prime factorisations, take the LOWEST power of each common prime. (The LCM takes the HIGHEST power of every prime that appears.)"
```

```yaml
kind: definition
term: "Compound interest"
topic: "N4 Rate, Speed & Financial Maths"
body: "Interest calculated on the principal together with the interest already earned, so the interest itself earns interest. Amount = P(1 + r/100)ⁿ, and the interest earned is the amount minus the principal."
```

```yaml
kind: definition
term: "Bearing"
topic: "G4 Pythagoras, Trigonometry & Bearings"
body: "An angle measured clockwise from the north direction, always written with three figures, for example 036.9° or 252°."
```

```yaml
kind: definition
term: "Similar figures"
topic: "G2 Congruence & Similarity"
body: "Figures with the same shape but not necessarily the same size: corresponding angles are equal and corresponding sides are in the same ratio. If the length scale factor is k, then areas scale by k² and volumes scale by k³."
```

```yaml
kind: definition
term: "Cyclic quadrilateral"
topic: "G3 Properties of Circles"
body: "A quadrilateral whose four vertices all lie on the circumference of one circle. Its opposite angles add up to 180°, and an exterior angle equals the interior opposite angle."
```

```yaml
kind: definition
term: "Gradient"
topic: "G6 Coordinate Geometry"
body: "A measure of the steepness of a line: gradient = (change in y) ÷ (change in x). Parallel lines have equal gradients. On a distance-time graph the gradient is the speed; on a speed-time graph it is the acceleration."
```

```yaml
kind: definition
term: "Standard deviation"
topic: "S1 Data Analysis & Statistics"
body: "A measure of how spread out a set of data is about its mean. A larger standard deviation means the data is more spread out and therefore less consistent. Adding the same constant to every value leaves it unchanged."
```

```yaml
kind: definition
term: "Mutually exclusive events"
topic: "S2 Probability"
body: "Two events that cannot both happen at the same time, so P(A and B) = 0 and P(A or B) = P(A) + P(B). Independent events are different: one has no effect on the other, and P(A and B) = P(A) × P(B)."
```
