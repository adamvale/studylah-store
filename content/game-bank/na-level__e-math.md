---
level: na-level
slug: e-math
subjectName: Mathematics (Elementary)
family: emath
---

## QUESTIONS

```yaml
type: mcq
topic: "N1 Numbers & Their Operations"
stem: "Given that m = 2⁵ × 3 × 7² and n = 2³ × 3⁴ × 7, find the highest common factor of m and n."
options:
  - "168"
  - "1176"
  - "56"
  - "127 008"
answer: 0
marks: 2
misconception: took-highest-powers-for-the-hcf
worked: |
  For the HCF take the LOWEST power of each prime that appears in BOTH numbers.
  2 appears as 2⁵ and 2³ → take 2³.
  3 appears as 3¹ and 3⁴ → take 3¹.
  7 appears as 7² and 7¹ → take 7¹.
  HCF = 2³ × 3 × 7 = 8 × 3 × 7 = 168.
  Taking the HIGHEST powers gives 127 008, but that is the LCM, not the HCF.
```

```yaml
type: mcq
topic: "N1 Numbers & Their Operations"
stem: "Evaluate (2.5 × 10⁻⁴) × (8 × 10⁹), giving your answer in standard form."
options:
  - "20 × 10⁵"
  - "2 × 10⁶"
  - "2 × 10⁵"
  - "2 × 10⁻⁶"
answer: 1
marks: 2
misconception: mantissa-not-adjusted-to-standard-form
worked: |
  Multiply the numbers: 2.5 × 8 = 20.
  Add the indices: 10⁻⁴ × 10⁹ = 10⁽⁻⁴ ⁺ ⁹⁾ = 10⁵.
  So the product is 20 × 10⁵, but 20 is not between 1 and 10.
  20 × 10⁵ = 2 × 10¹ × 10⁵ = 2 × 10⁶.
```

```yaml
type: mcq
topic: "N1 Numbers & Their Operations"
stem: "Simplify (3x²y³)³ ÷ (9x⁴y⁵)."
options:
  - "x²y⁴/3"
  - "3x⁶y⁹"
  - "3x²y⁴"
  - "27x²y⁴"
answer: 2
marks: 2
misconception: coefficient-not-raised-to-the-power
worked: |
  (3x²y³)³ = 3³ × x⁶ × y⁹ = 27x⁶y⁹, the 3 must be cubed as well.
  27x⁶y⁹ ÷ 9x⁴y⁵ = (27 ÷ 9) × x⁽⁶ ⁻ ⁴⁾ × y⁽⁹ ⁻ ⁵⁾ = 3x²y⁴.
  Leaving the 3 uncubed gives 3x⁶y⁹ ÷ 9x⁴y⁵ = x²y⁴/3, which is wrong.
```

```yaml
type: mcq
topic: "N1 Numbers & Their Operations"
stem: "Evaluate 5⁰ + 2⁻³, giving your answer as a fraction."
options:
  - "1/8"
  - "-7"
  - "1/6"
  - "9/8"
answer: 3
marks: 2
misconception: zero-index-equals-zero
worked: |
  Anything (except 0) to the power 0 is 1, so 5⁰ = 1, it is NOT 0.
  A negative index means a reciprocal: 2⁻³ = 1 ÷ 2³ = 1/8. It is NOT −8.
  1 + 1/8 = 8/8 + 1/8 = 9/8.
```

```yaml
type: mcq
topic: "N1 Numbers & Their Operations"
stem: "Which of these four numbers is the SMALLEST: 58%, 3/5, 0.62, √0.4?"
options:
  - "58%"
  - "3/5"
  - "0.62"
  - "√0.4"
answer: 0
marks: 2
misconception: percent-not-converted-to-a-decimal
worked: |
  Write every number as a decimal before comparing.
  58% = 0.58.
  3/5 = 0.6.
  0.62 is already a decimal.
  √0.4 = 0.632... (a square root of a number below 1 is BIGGER than the number).
  Ordering: 0.58 < 0.6 < 0.62 < 0.632, so 58% is the smallest.
```

```yaml
type: mcq
topic: "N1 Numbers & Their Operations"
stem: "Write 0.0040962 correct to 3 significant figures."
options:
  - "0.004"
  - "0.00410"
  - "0.0041"
  - "0.0040"
answer: 1
marks: 1
misconception: counted-leading-zeros-as-significant-figures
worked: |
  Zeros in FRONT of the first non-zero digit are never significant.
  The significant digits start at the 4: 4, 0, 9, 6, 2.
  The first three are 4, 0, 9; the next digit is 6, so round the 9 up to 10, carrying:
  0.0040962 → 0.00410.
  The final zero must be written, it is the third significant figure.
```

```yaml
type: mcq
topic: "N1 Numbers & Their Operations"
stem: "By rounding each number to 1 significant figure, estimate the value of (39.7 × 6.12) ÷ 0.0489."
options:
  - "480"
  - "48"
  - "4800"
  - "24"
answer: 2
marks: 2
misconception: divided-by-the-wrong-power-of-ten
worked: |
  Round each number to 1 significant figure:
  39.7 ≈ 40, 6.12 ≈ 6, 0.0489 ≈ 0.05.
  (40 × 6) ÷ 0.05 = 240 ÷ 0.05.
  Dividing by 0.05 is the same as multiplying by 20: 240 × 20 = 4800.
  Dividing by a number smaller than 1 must make the answer BIGGER.
```

```yaml
type: mcq
topic: "N1 Numbers & Their Operations"
stem: "A number N is given by N = 2⁴ × 3² × 5². Find √N."
options:
  - "1800"
  - "120"
  - "30"
  - "60"
answer: 3
marks: 2
misconception: halved-the-number-instead-of-the-indices
worked: |
  To square-root a number in prime-factor form, HALVE each index.
  √N = 2⁽⁴ ÷ ²⁾ × 3⁽² ÷ ²⁾ × 5⁽² ÷ ²⁾ = 2² × 3 × 5 = 4 × 3 × 5 = 60.
  Check: N = 16 × 9 × 25 = 3600 and √3600 = 60.
  Halving N itself (3600 ÷ 2 = 1800) is not a square root.
```

```yaml
type: short
topic: "N1 Numbers & Their Operations"
stem: "Express 0.0000418 in standard form."
accepted: ["4.18 x 10^-5", "4.18 x 10^(-5)", "4.18e-5", "4.18E-5", "4.18 * 10^-5"]
marks: 1
misconception: miscounted-the-decimal-places
worked: |
  Standard form is A × 10ⁿ where 1 ⩽ A < 10.
  Move the decimal point 5 places to the right to reach 4.18.
  Moving right makes the index NEGATIVE: 0.0000418 = 4.18 × 10⁻⁵.
```

```yaml
type: short
topic: "N1 Numbers & Their Operations"
stem: "Find the highest common factor of 84 and 126."
accepted: ["42"]
marks: 1
misconception: used-the-lcm-rule-for-the-hcf
worked: |
  84 = 2² × 3 × 7.
  126 = 2 × 3² × 7.
  HCF = lowest power of each COMMON prime = 2 × 3 × 7 = 42.
```

```yaml
type: mcq
topic: "N2 Ratio & Proportion"
stem: "An amount of $360 is shared between Amir, Bala and Chee in the ratio 4 : 5 : 3. How much does Bala receive?"
options:
  - "$150"
  - "$90"
  - "$120"
  - "$72"
answer: 0
marks: 2
misconception: used-the-wrong-part-of-the-ratio
worked: |
  Total number of parts = 4 + 5 + 3 = 12.
  One part = $360 ÷ 12 = $30.
  Bala has 5 parts: 5 × $30 = $150.
  Dividing $360 by 5 (giving $72) ignores the other two shares.
```

```yaml
type: mcq
topic: "N2 Ratio & Proportion"
stem: "The scale of a map is 1 : 40 000. A canal is drawn 8.5 cm long on the map. Find its actual length, in kilometres."
options:
  - "34 km"
  - "3.4 km"
  - "0.34 km"
  - "340 km"
answer: 1
marks: 2
misconception: wrong-conversion-cm-to-km
worked: |
  1 cm on the map = 40 000 cm on the ground.
  8.5 cm on the map = 8.5 × 40 000 = 340 000 cm.
  1 km = 100 000 cm, so 340 000 ÷ 100 000 = 3.4 km.
  Divide by 100 to reach metres and by 1000 again to reach kilometres, never by 100 only once.
```

```yaml
type: mcq
topic: "N2 Ratio & Proportion"
stem: "On a map with scale 1 : 25 000, a forest is represented by an area of 12 cm². Find the actual area of the forest, in km²."
options:
  - "3 km²"
  - "0.075 km²"
  - "0.75 km²"
  - "7.5 km²"
answer: 2
marks: 3
misconception: used-the-linear-scale-factor-for-area
worked: |
  The LENGTH scale factor is 25 000, so the AREA scale factor is 25 000² = 6.25 × 10⁸.
  Actual area = 12 × 6.25 × 10⁸ = 7.5 × 10⁹ cm².
  1 km = 100 000 cm, so 1 km² = (100 000)² = 10¹⁰ cm².
  Actual area = 7.5 × 10⁹ ÷ 10¹⁰ = 0.75 km².
  Multiplying by 25 000 once (instead of squaring) is the classic slip.
```

```yaml
type: mcq
topic: "N2 Ratio & Proportion"
stem: "y is inversely proportional to the square of x. When x = 2, y = 45. Find y when x = 6."
options:
  - "15"
  - "405"
  - "90"
  - "5"
answer: 3
marks: 3
misconception: treated-the-inverse-square-as-inverse-linear
worked: |
  Inverse proportion to the square of x means y = k ÷ x².
  Substitute x = 2, y = 45: 45 = k ÷ 4, so k = 180.
  When x = 6: y = 180 ÷ 6² = 180 ÷ 36 = 5.
  Tripling x DIVIDES y by 3² = 9, not by 3. Using y = k ÷ x would give 15, which is wrong.
```

```yaml
type: mcq
topic: "N2 Ratio & Proportion"
stem: "p is directly proportional to √q. When q = 16, p = 20. Find p when q = 81."
options:
  - "45"
  - "101.25"
  - "11.25"
  - "30"
answer: 0
marks: 3
misconception: forgot-the-square-root-in-the-proportion
worked: |
  Direct proportion to √q means p = k√q.
  Substitute q = 16, p = 20: 20 = k × √16 = 4k, so k = 5.
  When q = 81: p = 5 × √81 = 5 × 9 = 45.
  Treating p as proportional to q gives 20 × 81 ÷ 16 = 101.25, the square root was dropped.
```

```yaml
type: mcq
topic: "N2 Ratio & Proportion"
stem: "Given that a : b = 2 : 3 and b : c = 4 : 5, find a : c in its simplest form."
options:
  - "2 : 5"
  - "8 : 15"
  - "8 : 12"
  - "10 : 12"
answer: 1
marks: 2
misconception: did-not-make-the-common-term-match
worked: |
  b must be the SAME number in both ratios. b is 3 in the first and 4 in the second, so scale to 12.
  a : b = 2 : 3 = 8 : 12.
  b : c = 4 : 5 = 12 : 15.
  So a : b : c = 8 : 12 : 15, giving a : c = 8 : 15.
  Writing 2 : 5 straight from the outer numbers ignores the mismatch in b.
```

```yaml
type: short
topic: "N2 Ratio & Proportion"
stem: "12 workers can build a wall in 10 days. Working at the same rate, how many days would 8 workers take?"
accepted: ["15", "15 days"]
marks: 2
misconception: used-direct-instead-of-inverse-proportion
worked: |
  Fewer workers means MORE days, so this is inverse proportion.
  Total work = 12 × 10 = 120 worker-days.
  Days for 8 workers = 120 ÷ 8 = 15 days.
```

```yaml
type: mcq
topic: "N3 Percentage"
stem: "In a sale, a jacket is sold for $68 after a discount of 15%. Find its original price."
options:
  - "$78.20"
  - "$58"
  - "$80"
  - "$85"
answer: 2
marks: 3
misconception: added-the-percentage-back-onto-the-sale-price
worked: |
  This is a REVERSE percentage: the $68 is already the reduced price.
  After a 15% discount the customer pays 85% of the original price.
  85% of the original = $68, so 1% = 68 ÷ 85 = $0.80.
  Original price = 0.80 × 100 = $80.
  Adding 15% back on ($68 × 1.15 = $78.20) is WRONG, 15% of $68 is not 15% of $80.
```

```yaml
type: mcq
topic: "N3 Percentage"
stem: "A shop buys a fan for $45 and sells it for $63. Find the percentage profit."
options:
  - "28.6%"
  - "18%"
  - "35%"
  - "40%"
answer: 3
marks: 2
misconception: divided-by-the-selling-price-instead-of-the-cost-price
worked: |
  Profit = $63 − $45 = $18.
  Percentage profit is always measured against the COST price:
  (18 ÷ 45) × 100 = 40%.
  Dividing by the selling price, (18 ÷ 63) × 100 = 28.6%, is the standard trap.
```

```yaml
type: mcq
topic: "N3 Percentage"
stem: "Mei invests $2500 in an account paying simple interest at 4% per year. Find the interest earned after 3 years."
options:
  - "$300"
  - "$2800"
  - "$312.16"
  - "$100"
answer: 0
marks: 2
misconception: gave-the-total-amount-instead-of-the-interest
worked: |
  Simple interest = P × R × T ÷ 100 = 2500 × 4 × 3 ÷ 100.
  = 2500 × 0.04 = $100 each year.
  $100 × 3 = $300 of interest.
  $2800 is the TOTAL amount in the account, not the interest, read the question.
```

```yaml
type: mcq
topic: "N3 Percentage"
stem: "Raj invests $2000 at 5% per year compound interest, compounded yearly. Find the total amount in the account after 2 years."
options:
  - "$2200"
  - "$2205"
  - "$2100"
  - "$205"
answer: 1
marks: 3
misconception: used-simple-interest-instead-of-compound
worked: |
  Compound interest: amount = P × (1 + r/100)ⁿ.
  Amount = 2000 × (1.05)² = 2000 × 1.1025 = $2205.
  Simple interest would give 2000 + 2 × 100 = $2200, compound is $5 more because year 2 earns interest on year 1's interest as well.
```

```yaml
type: mcq
topic: "N3 Percentage"
stem: "A washing machine costs $900 if paid for in cash. On hire purchase a buyer pays a deposit of 20% of the cash price plus 12 monthly instalments of $68. How much MORE than the cash price does the buyer pay?"
options:
  - "$816"
  - "$996"
  - "$96"
  - "$180"
answer: 2
marks: 3
misconception: forgot-to-add-the-deposit-to-the-instalments
worked: |
  Deposit = 20% of $900 = $180.
  Instalments = 12 × $68 = $816.
  Total hire-purchase price = $180 + $816 = $996.
  Extra paid = $996 − $900 = $96.
  Leaving the deposit out gives $816, which is even less than the cash price, a clear signal you have missed a step.
```

```yaml
type: mcq
topic: "N3 Percentage"
stem: "The exchange rate is 1 Singapore dollar = 3.35 Malaysian ringgit. Change S$250 into ringgit."
options:
  - "RM 74.63"
  - "RM 83.75"
  - "RM 8375"
  - "RM 837.50"
answer: 3
marks: 2
misconception: divided-instead-of-multiplying-by-the-exchange-rate
worked: |
  Each S$1 is worth RM 3.35, so more ringgit than dollars are expected.
  250 × 3.35 = RM 837.50.
  Dividing (250 ÷ 3.35 = 74.63) would be the calculation for changing ringgit INTO dollars.
```

```yaml
type: mcq
topic: "N3 Percentage"
stem: "A television is priced at $640 before GST. GST of 9% is then added. Find the price a customer pays."
options:
  - "$697.60"
  - "$703.30"
  - "$649.00"
  - "$588.80"
answer: 0
marks: 2
misconception: reverse-percentage-applied-to-the-wrong-price
worked: |
  GST is added ON TOP of $640, so the customer pays 109% of $640.
  640 × 1.09 = $697.60.
  Treating $640 as the price INCLUDING GST and dividing by 1.09 gives $587.16, that answers a different question.
  Adding $9 (rather than 9%) gives $649.00 and is a units slip.
```

```yaml
type: short
topic: "N3 Percentage"
stem: "The population of a village rises from 240 to 300. Find the percentage increase."
accepted: ["25", "25%", "25 percent"]
marks: 2
misconception: divided-by-the-new-value
worked: |
  Increase = 300 − 240 = 60.
  Percentage increase = (increase ÷ ORIGINAL) × 100 = (60 ÷ 240) × 100 = 25%.
  Dividing by the new value 300 gives 20% and is wrong.
```

```yaml
type: short
topic: "N3 Percentage"
stem: "A car costs $30 000 when new. Its value falls by 20% each year. Find its value, in dollars, after 2 years."
accepted: ["19200", "$19200", "19 200", "$19 200"]
marks: 2
misconception: subtracted-40-percent-in-one-go
worked: |
  Each year the car keeps 80% of its value.
  Value after 2 years = 30 000 × 0.8² = 30 000 × 0.64 = $19 200.
  Taking 40% off in one step gives $18 000, depreciation compounds, so the two are not the same.
```

```yaml
type: mcq
topic: "N4 Rate & Speed"
stem: "Convert a speed of 72 km/h into metres per second."
options:
  - "1.2 m/s"
  - "20 m/s"
  - "259.2 m/s"
  - "0.02 m/s"
answer: 1
marks: 2
misconception: divided-by-60-once-instead-of-3600
worked: |
  72 km = 72 000 m and 1 hour = 3600 s.
  72 000 ÷ 3600 = 20 m/s.
  A quick check: divide km/h by 3.6 → 72 ÷ 3.6 = 20 m/s.
  Dividing by 60 only once (giving 1.2) converts to km per minute, not m/s.
```

```yaml
type: mcq
topic: "N4 Rate & Speed"
stem: "A cyclist rides 15 km at an average speed of 20 km/h and then 25 km at an average speed of 50 km/h. Find the average speed for the whole journey."
options:
  - "35 km/h"
  - "40 km/h"
  - "32 km/h"
  - "30 km/h"
answer: 2
marks: 3
misconception: averaged-the-two-speeds
worked: |
  Average speed = TOTAL distance ÷ TOTAL time.
  First stage: time = 15 ÷ 20 = 0.75 h.
  Second stage: time = 25 ÷ 50 = 0.5 h.
  Total distance = 40 km; total time = 1.25 h.
  Average speed = 40 ÷ 1.25 = 32 km/h.
  Averaging the speeds, (20 + 50) ÷ 2 = 35 km/h, is never correct unless the TIMES are equal.
```

```yaml
type: mcq
topic: "N4 Rate & Speed"
stem: "On a distance-time graph, a straight line runs from (0 min, 0 km) to (12 min, 9 km). Find the speed of the object in km/h."
options:
  - "0.75 km/h"
  - "9 km/h"
  - "108 km/h"
  - "45 km/h"
answer: 3
marks: 2
misconception: forgot-to-convert-minutes-to-hours
worked: |
  On a distance-time graph the GRADIENT is the speed.
  Gradient = 9 km ÷ 12 min = 0.75 km per minute.
  There are 60 minutes in an hour: 0.75 × 60 = 45 km/h.
  Leaving the answer as 0.75 ignores the units asked for.
```

```yaml
type: mcq
topic: "N4 Rate & Speed"
stem: "A train accelerates uniformly from rest to 30 m/s in 20 s, travels at 30 m/s for the next 60 s, then decelerates uniformly to rest in a further 40 s. Using the speed-time graph, find the total distance travelled."
options:
  - "2700 m"
  - "2100 m"
  - "3600 m"
  - "1800 m"
answer: 0
marks: 3
misconception: used-the-gradient-instead-of-the-area
worked: |
  On a speed-time graph the AREA under the graph is the distance.
  Acceleration stage (triangle): ½ × 20 × 30 = 300 m.
  Constant stage (rectangle): 60 × 30 = 1800 m.
  Deceleration stage (triangle): ½ × 40 × 30 = 600 m.
  Total distance = 300 + 1800 + 600 = 2700 m.
  Leaving out the final triangle gives 2100 m, always count every region.
```

```yaml
type: mcq
topic: "N4 Rate & Speed"
stem: "A speed-time graph shows a car slowing uniformly from 24 m/s to 6 m/s over 12 s. Find its acceleration."
options:
  - "1.5 m/s²"
  - "−1.5 m/s²"
  - "−2 m/s²"
  - "−18 m/s²"
answer: 1
marks: 2
misconception: ignored-the-sign-of-a-deceleration
worked: |
  On a speed-time graph the GRADIENT is the acceleration.
  Gradient = (6 − 24) ÷ 12 = −18 ÷ 12 = −1.5 m/s².
  The car is slowing down, so the acceleration must be NEGATIVE.
  Forgetting the change in speed and using 18 ÷ 12 loses the sign.
```

```yaml
type: short
topic: "N4 Rate & Speed"
stem: "A tap fills a tank at a rate of 12 litres per minute. The tank holds 0.9 m³. How many minutes does it take to fill the tank?"
accepted: ["75", "75 min", "75 minutes"]
marks: 2
misconception: wrong-conversion-cubic-metres-to-litres
worked: |
  1 m³ = 1000 litres, so 0.9 m³ = 900 litres.
  Time = 900 ÷ 12 = 75 minutes.
```

```yaml
type: mcq
topic: "N5 Algebraic Expressions & Formulae"
stem: "Expand and simplify (3x + 4)(2x − 7)."
options:
  - "6x² + 13x − 28"
  - "6x² − 13x + 28"
  - "6x² − 13x − 28"
  - "6x² − 29x − 28"
answer: 2
marks: 2
misconception: sign-error-when-expanding-brackets
worked: |
  Multiply every term in the first bracket by every term in the second:
  3x × 2x = 6x²
  3x × (−7) = −21x
  4 × 2x = 8x
  4 × (−7) = −28
  Collect the middle terms: −21x + 8x = −13x.
  So the answer is 6x² − 13x − 28.
```

```yaml
type: mcq
topic: "N5 Algebraic Expressions & Formulae"
stem: "Factorise 3x² − 11x − 4 completely."
options:
  - "(3x − 1)(x + 4)"
  - "(3x + 4)(x − 1)"
  - "(3x − 4)(x + 1)"
  - "(3x + 1)(x − 4)"
answer: 3
marks: 2
misconception: signs-swapped-in-the-factors
worked: |
  Look for two numbers with product 3 × (−4) = −12 and sum −11: they are +1 and −12.
  3x² + x − 12x − 4 = x(3x + 1) − 4(3x + 1) = (3x + 1)(x − 4).
  Always expand to verify: (3x + 1)(x − 4) = 3x² − 12x + x − 4 = 3x² − 11x − 4. ✓
```

```yaml
type: mcq
topic: "N5 Algebraic Expressions & Formulae"
stem: "Simplify (x² − 25) ÷ (x² − 2x − 15)."
options:
  - "(x + 5)/(x + 3)"
  - "(x − 5)/(x − 3)"
  - "(x + 5)/(x − 3)"
  - "(x − 5)/(x + 3)"
answer: 0
marks: 3
misconception: cancelled-terms-instead-of-factors
worked: |
  Factorise the top: x² − 25 = (x − 5)(x + 5) (difference of two squares).
  Factorise the bottom: x² − 2x − 15 = (x − 5)(x + 3).
  The common FACTOR (x − 5) cancels:
  (x − 5)(x + 5) ÷ [(x − 5)(x + 3)] = (x + 5)/(x + 3).
  You may never cancel single terms such as the x², only whole factors.
```

```yaml
type: mcq
topic: "N5 Algebraic Expressions & Formulae"
stem: "Express 5/(x + 3) − 2/(x − 1) as a single fraction in its simplest form."
options:
  - "(3x + 1)/((x + 3)(x − 1))"
  - "(3x − 11)/((x + 3)(x − 1))"
  - "(7x − 11)/((x + 3)(x − 1))"
  - "3/(x + 2)"
answer: 1
marks: 3
misconception: did-not-distribute-the-minus-sign
worked: |
  Common denominator = (x + 3)(x − 1).
  Numerator = 5(x − 1) − 2(x + 3)
          = 5x − 5 − 2x − 6      ← the minus sign changes BOTH terms of the second bracket
          = 3x − 11.
  So the answer is (3x − 11)/((x + 3)(x − 1)).
  Writing 5x − 5 − 2x + 6 = 3x + 1 is the classic sign slip.
```

```yaml
type: mcq
topic: "N5 Algebraic Expressions & Formulae"
stem: "The volume of a cone is V = ⅓πr²h. Make r the subject of the formula."
options:
  - "r = 3V/(πh)"
  - "r = √(V/(3πh))"
  - "r = √(3V/(πh))"
  - "r = √(3V/π) ÷ h"
answer: 2
marks: 3
misconception: forgot-to-take-the-square-root
worked: |
  V = ⅓πr²h.
  Multiply both sides by 3: 3V = πr²h.
  Divide both sides by πh: r² = 3V ÷ (πh).
  Square-root both sides: r = √(3V/(πh)).
  Stopping at r² is the most common lost mark.
```

```yaml
type: mcq
topic: "N5 Algebraic Expressions & Formulae"
stem: "Make x the subject of y = (2x + 5)/(x − 1)."
options:
  - "x = (y − 5)/(y + 2)"
  - "x = (y + 5)/(y + 2)"
  - "x = (5 − y)/(y − 2)"
  - "x = (y + 5)/(y − 2)"
answer: 3
marks: 3
misconception: sign-error-collecting-the-x-terms
worked: |
  Multiply both sides by (x − 1): y(x − 1) = 2x + 5.
  Expand: xy − y = 2x + 5.
  Gather the x terms on one side: xy − 2x = y + 5.
  Factorise: x(y − 2) = y + 5.
  Divide: x = (y + 5)/(y − 2).
```

```yaml
type: mcq
topic: "N5 Algebraic Expressions & Formulae"
stem: "Find an expression, in terms of n, for the nth term of the sequence 5, 9, 13, 17, ..."
options:
  - "4n + 1"
  - "4n − 1"
  - "n + 4"
  - "5n"
answer: 0
marks: 2
misconception: used-the-first-term-as-the-constant
worked: |
  The sequence goes up by 4 each time, so the nth term starts with 4n.
  4n gives 4, 8, 12, 16, ... which is 1 LESS than each term.
  So the nth term is 4n + 1.
  Check n = 4: 4(4) + 1 = 17. ✓
  Writing 4n + 5 (using the first term as the constant) fails at n = 1.
```

```yaml
type: short
topic: "N5 Algebraic Expressions & Formulae"
stem: "Expand and simplify (3x − 2)²."
accepted: ["9x^2 - 12x + 4", "9x^2-12x+4", "9x**2 - 12x + 4"]
marks: 2
misconception: squared-each-term-separately
worked: |
  (3x − 2)² means (3x − 2)(3x − 2).
  = 9x² − 6x − 6x + 4
  = 9x² − 12x + 4.
  Writing 9x² + 4 (squaring each term on its own) misses the middle term −12x.
```

```yaml
type: mcq
topic: "N6 Functions & Graphs"
stem: "Find the coordinates of the minimum point of the curve y = x² + 4x − 7."
options:
  - "(2, −11)"
  - "(−2, −11)"
  - "(−2, −7)"
  - "(−4, −7)"
answer: 1
marks: 3
misconception: sign-of-the-x-coordinate-after-completing-the-square
worked: |
  Complete the square: x² + 4x − 7 = (x + 2)² − 4 − 7 = (x + 2)² − 11.
  A squared bracket is smallest when it equals 0, i.e. when x = −2.
  Then y = −11, so the minimum point is (−2, −11).
  For (x + p)² + q the x-coordinate is −p, the sign FLIPS as it comes out of the bracket.
```

```yaml
type: mcq
topic: "N6 Functions & Graphs"
stem: "Write down the equation of the line of symmetry of the graph y = 3x² + 12x + 5."
options:
  - "x = 2"
  - "x = −6"
  - "x = −2"
  - "y = −2"
answer: 2
marks: 2
misconception: sign-error-in-minus-b-over-2a
worked: |
  The line of symmetry of y = ax² + bx + c is x = −b ÷ (2a).
  Here a = 3 and b = 12.
  x = −12 ÷ (2 × 3) = −12 ÷ 6 = −2.
  So the line of symmetry is x = −2. It is a VERTICAL line, so its equation starts 'x =', not 'y ='.
```

```yaml
type: mcq
topic: "N6 Functions & Graphs"
stem: "A curve has equation y = k(aˣ), where k and a are positive constants. It passes through (0, 5) and (3, 40). Find the value of a."
options:
  - "8"
  - "3"
  - "1.6"
  - "2"
answer: 3
marks: 3
misconception: divided-instead-of-taking-the-cube-root
worked: |
  At x = 0: a⁰ = 1, so y = k = 5.
  At x = 3: 5 × a³ = 40, so a³ = 8.
  Take the cube root: a = ∛8 = 2.
  Stopping at a³ = 8 and writing a = 8 is the trap.
```

```yaml
type: mcq
topic: "N6 Functions & Graphs"
stem: "The graph of y = a/x passes through the point (4, 3). Find y when x = 10."
options:
  - "1.2"
  - "30"
  - "0.75"
  - "7.5"
answer: 0
marks: 2
misconception: treated-the-reciprocal-graph-as-a-straight-line
worked: |
  Substitute (4, 3): 3 = a ÷ 4, so a = 12.
  The equation is y = 12/x.
  When x = 10: y = 12 ÷ 10 = 1.2.
  On a reciprocal graph, MULTIPLYING x by 2.5 DIVIDES y by 2.5, y does not grow with x.
```

```yaml
type: mcq
topic: "N6 Functions & Graphs"
stem: "A tangent is drawn to a curve at the point P. The tangent passes through the points (1, 2) and (5, 14). Use it to estimate the gradient of the curve at P."
options:
  - "1/3"
  - "3"
  - "4"
  - "12"
answer: 1
marks: 2
misconception: inverted-the-gradient-formula
worked: |
  The gradient of a curve at a point equals the gradient of the TANGENT drawn there.
  Gradient = (change in y) ÷ (change in x) = (14 − 2) ÷ (5 − 1) = 12 ÷ 4 = 3.
  Using (change in x) ÷ (change in y) gives 1/3, the formula is upside down.
  Always take your two points from the ENDS of the tangent you have drawn, not from the curve.
```

```yaml
type: mcq
topic: "N6 Functions & Graphs"
stem: "A table of values is being completed for y = x³ − 4x. Find the value of y when x = −2."
options:
  - "−16"
  - "16"
  - "0"
  - "−8"
answer: 2
marks: 2
misconception: sign-error-cubing-a-negative-number
worked: |
  (−2)³ = −8 (an odd power keeps the minus sign).
  −4 × (−2) = +8.
  y = −8 + 8 = 0.
  Getting −16 means the second term was left negative, check every sign separately.
```

```yaml
type: mcq
topic: "N6 Functions & Graphs"
stem: "The curve y = (x − 1)(x + 5) cuts the x-axis at two points. Find the x-coordinate of its line of symmetry."
options:
  - "2"
  - "−4"
  - "−5"
  - "−2"
answer: 3
marks: 2
misconception: added-the-roots-without-halving
worked: |
  The curve cuts the x-axis where y = 0, i.e. at x = 1 and x = −5.
  The line of symmetry is exactly HALFWAY between the two roots:
  x = (1 + (−5)) ÷ 2 = −4 ÷ 2 = −2.
  Adding the roots without halving gives −4, which is a different (wrong) line.
```

```yaml
type: short
topic: "N6 Functions & Graphs"
stem: "A straight-line graph passes through (0, −4) and has gradient 3. Write down its equation."
accepted: ["y = 3x - 4", "y=3x-4", "y = 3x-4", "y=3x - 4"]
marks: 1
misconception: mixed-up-the-gradient-and-the-intercept
worked: |
  A straight line has equation y = mx + c, where m is the gradient and c is the y-intercept.
  The graph crosses the y-axis at (0, −4), so c = −4.
  The gradient is 3, so m = 3.
  Equation: y = 3x − 4.
```

```yaml
type: mcq
topic: "N7 Equations & Inequalities"
stem: "Solve the simultaneous equations 3x + 2y = 16 and x − y = 2."
options:
  - "x = 4, y = 2"
  - "x = 2, y = 4"
  - "x = 4, y = −2"
  - "x = 6, y = 4"
answer: 0
marks: 3
misconception: mixed-up-x-and-y
worked: |
  From the second equation, x = y + 2.
  Substitute into the first: 3(y + 2) + 2y = 16.
  3y + 6 + 2y = 16, so 5y = 10 and y = 2.
  Then x = 2 + 2 = 4.
  Check in the first equation: 3(4) + 2(2) = 12 + 4 = 16. ✓
```

```yaml
type: mcq
topic: "N7 Equations & Inequalities"
stem: "Solve 2x² + 5x − 3 = 0."
options:
  - "x = −1/2 or x = 3"
  - "x = 1/2 or x = −3"
  - "x = 1/2 or x = 3"
  - "x = 2 or x = −3"
answer: 1
marks: 3
misconception: signs-of-the-roots-reversed
worked: |
  Two numbers with product 2 × (−3) = −6 and sum +5 are +6 and −1.
  2x² + 6x − x − 3 = 2x(x + 3) − 1(x + 3) = (2x − 1)(x + 3).
  So 2x − 1 = 0 or x + 3 = 0.
  x = 1/2 or x = −3.
  The root has the OPPOSITE sign to the number in its bracket, that is where signs get flipped.
```

```yaml
type: mcq
topic: "N7 Equations & Inequalities"
stem: "Solve x² − 5x + 2 = 0, giving both roots correct to 2 decimal places."
options:
  - "x = 4.56 or x = −0.44"
  - "x = −4.56 or x = −0.44"
  - "x = 4.56 or x = 0.44"
  - "x = 2.28 or x = 0.22"
answer: 2
marks: 3
misconception: used-plus-b-instead-of-minus-b
worked: |
  Here a = 1, b = −5, c = 2.
  Discriminant: b² − 4ac = (−5)² − 4(1)(2) = 25 − 8 = 17.
  x = [−(−5) ± √17] ÷ 2 = (5 ± 4.1231) ÷ 2.
  x = 9.1231 ÷ 2 = 4.56 or x = 0.8769 ÷ 2 = 0.44.
  The formula begins with −b, so with b = −5 it begins with +5, never with −5.
```

```yaml
type: mcq
topic: "N7 Equations & Inequalities"
stem: "Write x² + 8x − 3 in the form (x + p)² + q. Find the value of q."
options:
  - "−13"
  - "13"
  - "19"
  - "−19"
answer: 3
marks: 2
misconception: forgot-to-subtract-the-square-of-half-b
worked: |
  Half the coefficient of x: 8 ÷ 2 = 4, so the bracket is (x + 4)².
  (x + 4)² = x² + 8x + 16, which is 16 MORE than we want, so subtract 16:
  x² + 8x − 3 = (x + 4)² − 16 − 3 = (x + 4)² − 19.
  So q = −19. Forgetting the −16 leaves q = −3.
```

```yaml
type: mcq
topic: "N7 Equations & Inequalities"
stem: "Solve 6/(x + 4) = x − 1."
options:
  - "x = −5 or x = 2"
  - "x = 5 or x = −2"
  - "x = −5 or x = −2"
  - "x = 2 only"
answer: 0
marks: 3
misconception: sign-error-expanding-the-brackets
worked: |
  Multiply both sides by (x + 4): 6 = (x − 1)(x + 4).
  Expand: 6 = x² + 4x − x − 4 = x² + 3x − 4.
  Rearrange: x² + 3x − 10 = 0.
  Factorise: (x + 5)(x − 2) = 0.
  x = −5 or x = 2. Both are valid, since neither makes x + 4 equal to 0.
```

```yaml
type: mcq
topic: "N7 Equations & Inequalities"
stem: "Solve the inequality 5 − 2x ⩾ 11."
options:
  - "x ⩾ −3"
  - "x ⩽ −3"
  - "x ⩽ 3"
  - "x ⩾ 8"
answer: 1
marks: 2
misconception: did-not-reverse-the-inequality-sign
worked: |
  5 − 2x ⩾ 11.
  Subtract 5 from both sides: −2x ⩾ 6.
  Divide both sides by −2. Dividing by a NEGATIVE number REVERSES the inequality:
  x ⩽ −3.
  Test x = −4: 5 − 2(−4) = 13 ⩾ 11. ✓ Test x = 0: 5 ⩾ 11 is false, so x ⩾ −3 must be wrong.
```

```yaml
type: mcq
topic: "N7 Equations & Inequalities"
stem: "Find the number of integer values of x that satisfy 3 < 2x − 1 ⩽ 9."
options:
  - "4"
  - "2"
  - "3"
  - "5"
answer: 2
marks: 3
misconception: included-an-excluded-endpoint
worked: |
  Add 1 to all three parts: 4 < 2x ⩽ 10.
  Divide all three parts by 2: 2 < x ⩽ 5.
  x is strictly GREATER than 2 (so x = 2 is NOT allowed) and can equal 5.
  The integers are 3, 4 and 5, that is 3 values.
  Counting x = 2 as well would give 4, and is the classic endpoint slip.
```

```yaml
type: mcq
topic: "N7 Equations & Inequalities"
stem: "The sum of a number and its square is 42. Find the possible values of the number."
options:
  - "7 or −6"
  - "−7 or −6"
  - "6 only"
  - "−7 or 6"
answer: 3
marks: 3
misconception: sign-error-factorising
worked: |
  Let the number be n. Then n + n² = 42.
  Rearrange: n² + n − 42 = 0.
  Two numbers with product −42 and sum +1 are +7 and −6.
  (n + 7)(n − 6) = 0, so n = −7 or n = 6.
  Check n = −7: −7 + 49 = 42. ✓ Check n = 6: 6 + 36 = 42. ✓
```

```yaml
type: mcq
topic: "N7 Equations & Inequalities"
stem: "A rectangle has length (x + 3) cm and width (x − 2) cm. Its area is 24 cm². Find the value of x."
options:
  - "5"
  - "−6"
  - "6"
  - "5 or −6"
answer: 0
marks: 3
misconception: did-not-reject-the-negative-length
worked: |
  (x + 3)(x − 2) = 24.
  x² + x − 6 = 24, so x² + x − 30 = 0.
  (x + 6)(x − 5) = 0, giving x = −6 or x = 5.
  If x = −6 the width is −8 cm, which is impossible, so REJECT x = −6.
  x = 5 (length 8 cm, width 3 cm, area 24 cm². ✓)
```

```yaml
type: mcq
topic: "N7 Equations & Inequalities"
stem: "Solve the simultaneous equations 5x − 2y = 19 and 3x + 4y = 1."
options:
  - "x = −2, y = 3"
  - "x = 3, y = −2"
  - "x = 3, y = 2"
  - "x = 1, y = −7"
answer: 1
marks: 3
misconception: sign-error-when-eliminating-a-variable
worked: |
  Double the first equation so the y coefficients match in size:
  10x − 4y = 38 and 3x + 4y = 1.
  The signs of the y terms are DIFFERENT, so ADD the equations: 13x = 39, giving x = 3.
  Substitute into 5x − 2y = 19: 15 − 2y = 19, so −2y = 4 and y = −2.
  Check the other equation: 3(3) + 4(−2) = 9 − 8 = 1 ✓
```

```yaml
type: short
topic: "N7 Equations & Inequalities"
stem: "Solve 4(x − 3) = 2x + 5."
accepted: ["8.5", "17/2", "x = 8.5", "x=8.5"]
marks: 2
misconception: did-not-expand-the-bracket-first
worked: |
  Expand the bracket: 4x − 12 = 2x + 5.
  Subtract 2x from both sides: 2x − 12 = 5.
  Add 12: 2x = 17.
  Divide by 2: x = 8.5.
```

```yaml
type: short
topic: "N7 Equations & Inequalities"
stem: "Solve x² = 7x."
accepted: ["0 or 7", "x = 0 or x = 7", "0, 7", "0 and 7", "7 or 0", "0,7"]
marks: 2
misconception: divided-both-sides-by-x-and-lost-a-root
worked: |
  Bring everything to one side: x² − 7x = 0.
  Factorise: x(x − 7) = 0.
  So x = 0 or x = 7.
  NEVER divide both sides by x, that throws away the root x = 0.
```

```yaml
type: mcq
topic: "G1 Angles, Triangles & Polygons"
stem: "Find the sum of the interior angles of a polygon with 15 sides."
options:
  - "2700°"
  - "2160°"
  - "2340°"
  - "360°"
answer: 2
marks: 2
misconception: forgot-to-subtract-two-from-the-number-of-sides
worked: |
  The interior angle sum of an n-sided polygon is (n − 2) × 180°.
  With n = 15: (15 − 2) × 180° = 13 × 180° = 2340°.
  Using 15 × 180° = 2700° forgets the −2.
```

```yaml
type: mcq
topic: "G1 Angles, Triangles & Polygons"
stem: "A regular polygon has an exterior angle of 24°. How many sides does it have?"
options:
  - "24"
  - "12"
  - "30"
  - "15"
answer: 3
marks: 2
misconception: used-the-interior-angle-formula
worked: |
  The exterior angles of ANY polygon add up to 360°.
  For a regular polygon every exterior angle is equal, so n = 360° ÷ 24° = 15.
  The polygon has 15 sides.
```

```yaml
type: mcq
topic: "G1 Angles, Triangles & Polygons"
stem: "Each interior angle of a regular polygon is 150°. Find the number of sides."
options:
  - "12"
  - "30"
  - "6"
  - "150"
answer: 0
marks: 2
misconception: divided-360-by-the-interior-angle
worked: |
  Interior and exterior angles at a vertex lie on a straight line:
  exterior angle = 180° − 150° = 30°.
  Number of sides = 360° ÷ 30° = 12.
  Dividing 360° by the INTERIOR angle (360 ÷ 150 = 2.4) cannot be right, a polygon must have a whole number of sides.
```

```yaml
type: mcq
topic: "G1 Angles, Triangles & Polygons"
stem: "In triangle ABC, angle A = 3x°, angle B = (2x + 10)° and angle C = (x + 50)°. Find the value of x."
options:
  - "50"
  - "20"
  - "30"
  - "24"
answer: 1
marks: 2
misconception: used-360-for-the-angle-sum-of-a-triangle
worked: |
  The angles of a TRIANGLE add up to 180°, not 360°.
  3x + 2x + 10 + x + 50 = 180.
  6x + 60 = 180, so 6x = 120 and x = 20.
  Check: 60° + 50° + 70° = 180°. ✓
  Using 360 would give x = 50, that is the angle sum of a QUADRILATERAL.
```

```yaml
type: mcq
topic: "G1 Angles, Triangles & Polygons"
stem: "Two parallel lines are cut by a transversal. One of the interior angles on the same side of the transversal is 118°. Find the other interior angle on that side."
options:
  - "118°"
  - "242°"
  - "62°"
  - "32°"
answer: 2
marks: 2
misconception: assumed-co-interior-angles-are-equal
worked: |
  Interior angles on the SAME side of a transversal (co-interior, or allied, angles) are SUPPLEMENTARY:
  they add up to 180°.
  Other angle = 180° − 118° = 62°.
  Only ALTERNATE (Z) and CORRESPONDING (F) angles are equal, co-interior (C) angles are not.
```

```yaml
type: short
topic: "G1 Angles, Triangles & Polygons"
stem: "Write down the sum of the exterior angles of any convex polygon, in degrees."
accepted: ["360", "360 degrees"]
marks: 1
misconception: thought-the-exterior-sum-depends-on-the-number-of-sides
worked: |
  Walking once around any convex polygon turns you through one full revolution.
  So the exterior angles always add up to 360°, no matter how many sides the polygon has.
```

```yaml
type: mcq
topic: "G2 Congruence & Similarity"
stem: "Two similar photographs have corresponding widths of 8 cm and 12 cm. The area of the smaller photograph is 36 cm². Find the area of the larger photograph."
options:
  - "54 cm²"
  - "121.5 cm²"
  - "24 cm²"
  - "81 cm²"
answer: 3
marks: 3
misconception: used-the-linear-scale-factor-for-area
worked: |
  Length scale factor k = 12 ÷ 8 = 1.5.
  Area scale factor = k² = 1.5² = 2.25.
  Larger area = 36 × 2.25 = 81 cm².
  Multiplying the area by 1.5 (giving 54 cm²) uses the LENGTH factor and is the classic error.
```

```yaml
type: mcq
topic: "G2 Congruence & Similarity"
stem: "Two similar water jugs have heights 12 cm and 18 cm. The smaller jug holds 480 cm³. Find the capacity of the larger jug."
options:
  - "1620 cm³"
  - "720 cm³"
  - "1080 cm³"
  - "320 cm³"
answer: 0
marks: 3
misconception: used-the-linear-scale-factor-for-volume
worked: |
  Length scale factor k = 18 ÷ 12 = 1.5.
  Volume scale factor = k³ = 1.5³ = 3.375.
  Larger capacity = 480 × 3.375 = 1620 cm³.
  Remember: lengths × k, areas × k², volumes × k³. Using 480 × 1.5 = 720 cm³ scales only a length.
```

```yaml
type: mcq
topic: "G2 Congruence & Similarity"
stem: "In triangle PQR, S lies on PQ and T lies on PR, with ST parallel to QR. Given PS = 6 cm, SQ = 4 cm and QR = 15 cm, find the length of ST."
options:
  - "22.5 cm"
  - "9 cm"
  - "10 cm"
  - "6 cm"
answer: 1
marks: 3
misconception: used-ps-over-sq-as-the-ratio
worked: |
  Because ST is parallel to QR, triangle PST is SIMILAR to triangle PQR.
  The ratio must use the FULL side: PS : PQ = 6 : (6 + 4) = 6 : 10.
  So ST : QR = 6 : 10, giving ST = 15 × 6 ÷ 10 = 9 cm.
  Using PS : SQ = 6 : 4 gives 22.5 cm, but SQ is only PART of PQ, not the whole side.
  ST lies inside the triangle, so it must be SHORTER than QR.
```

```yaml
type: mcq
topic: "G2 Congruence & Similarity"
stem: "A scale model of a building is made using a scale of 1 : 200. The real building is 46 m tall. Find the height of the model, in centimetres."
options:
  - "0.23 cm"
  - "2.3 cm"
  - "23 cm"
  - "9200 cm"
answer: 2
marks: 2
misconception: forgot-to-convert-metres-to-centimetres
worked: |
  Model height = 46 ÷ 200 = 0.23 m.
  Convert to centimetres: 0.23 × 100 = 23 cm.
  Leaving the answer as 0.23 ignores the units the question asks for.
```

```yaml
type: short
topic: "G2 Congruence & Similarity"
stem: "Two similar solids have surface areas of 45 cm² and 180 cm². Find the ratio of their corresponding lengths, giving your answer in the form 1 : n."
accepted: ["1 : 2", "1:2", "1 to 2"]
marks: 2
misconception: gave-the-area-ratio-as-the-length-ratio
worked: |
  Area ratio = 45 : 180 = 1 : 4.
  The area ratio is the SQUARE of the length ratio, so take the square root:
  length ratio = 1 : √4 = 1 : 2.
```

```yaml
type: mcq
topic: "G3 Properties of Circles"
stem: "A and B are points on a circle with centre O, and the angle AOB at the centre is 130°. C is a point on the major arc AB. Find angle ACB."
options:
  - "130°"
  - "260°"
  - "115°"
  - "65°"
answer: 3
marks: 2
misconception: angle-at-centre-equals-angle-at-circumference
worked: |
  The angle at the CENTRE is TWICE the angle at the circumference standing on the same arc.
  Angle AOB = 2 × angle ACB.
  130° = 2 × angle ACB, so angle ACB = 65°.
  Copying the centre angle straight down (130°) forgets the factor of 2.
```

```yaml
type: mcq
topic: "G3 Properties of Circles"
stem: "PQ is a diameter of a circle and R is another point on the circle. Given that angle RPQ = 34°, find angle PQR."
options:
  - "56°"
  - "34°"
  - "90°"
  - "146°"
answer: 0
marks: 3
misconception: forgot-the-angle-in-a-semicircle-is-90-degrees
worked: |
  The angle in a semicircle is a right angle, so angle PRQ = 90°.
  Angles in triangle PQR add up to 180°:
  angle PQR = 180° − 90° − 34° = 56°.
```

```yaml
type: mcq
topic: "G3 Properties of Circles"
stem: "TA is a tangent to a circle with centre O, touching the circle at A. Given that OT = 25 cm and the radius OA = 7 cm, find the length of TA."
options:
  - "26.0 cm"
  - "24 cm"
  - "18 cm"
  - "32 cm"
answer: 1
marks: 3
misconception: added-the-squares-instead-of-subtracting
worked: |
  A tangent is PERPENDICULAR to the radius at the point of contact, so angle OAT = 90°.
  OT is therefore the hypotenuse of right-angled triangle OAT.
  TA² = OT² − OA² = 25² − 7² = 625 − 49 = 576.
  TA = √576 = 24 cm.
  Adding (625 + 49) gives 26.0 cm, but the hypotenuse is the LONGEST side, so it must be OT.
```

```yaml
type: mcq
topic: "G4 Pythagoras' Theorem & Trigonometry"
stem: "A right-angled triangle has a hypotenuse of 13 cm and one other side of 5 cm. Find the length of the third side."
options:
  - "13.9 cm"
  - "8 cm"
  - "12 cm"
  - "18 cm"
answer: 2
marks: 2
misconception: added-the-squares-instead-of-subtracting
worked: |
  The hypotenuse is the LONGEST side, so it is squared and then SUBTRACTED from.
  x² = 13² − 5² = 169 − 25 = 144.
  x = √144 = 12 cm.
  Adding (169 + 25 = 194, √194 = 13.9) would give a side LONGER than the hypotenuse, impossible.
```

```yaml
type: mcq
topic: "G4 Pythagoras' Theorem & Trigonometry"
stem: "A ladder of length 6.5 m rests against a vertical wall with its foot 2.5 m from the base of the wall. Find the angle the ladder makes with the ground, correct to 1 decimal place."
options:
  - "22.6°"
  - "57.4°"
  - "68.0°"
  - "67.4°"
answer: 3
marks: 3
misconception: used-sine-instead-of-cosine
worked: |
  Label the triangle from the angle θ at the ground:
  the 2.5 m along the ground is the ADJACENT side and the 6.5 m ladder is the HYPOTENUSE.
  Adjacent and hypotenuse means COSINE:
  cos θ = 2.5 ÷ 6.5 = 0.3846.
  θ = cos⁻¹(0.3846) = 67.4° (1 d.p.).
  Using sin⁻¹(2.5 ÷ 6.5) = 22.6° finds the angle at the TOP of the ladder instead.
```

```yaml
type: mcq
topic: "G4 Pythagoras' Theorem & Trigonometry"
stem: "In a right-angled triangle, an angle of 32° has an opposite side of 7.4 cm. Find the hypotenuse, correct to 3 significant figures."
options:
  - "14.0 cm"
  - "3.92 cm"
  - "11.8 cm"
  - "13.0 cm"
answer: 0
marks: 3
misconception: multiplied-instead-of-dividing-by-the-sine
worked: |
  sin 32° = opposite ÷ hypotenuse = 7.4 ÷ h.
  So h = 7.4 ÷ sin 32° = 7.4 ÷ 0.5299 = 13.96...
  h = 14.0 cm (3 s.f.).
  Multiplying (7.4 × sin 32° = 3.92) gives an answer SHORTER than the side you started with, the hypotenuse must always be the longest side.
```

```yaml
type: mcq
topic: "G4 Pythagoras' Theorem & Trigonometry"
stem: "In triangle ABC, AB = 7 cm, BC = 9 cm and the included angle ABC = 68°. Use the cosine rule to find AC, correct to 3 significant figures."
options:
  - "13.3 cm"
  - "9.10 cm"
  - "4.00 cm"
  - "9.60 cm"
answer: 1
marks: 3
misconception: added-instead-of-subtracting-the-cosine-term
worked: |
  Cosine rule: b² = a² + c² − 2ac cos B, where B is the angle BETWEEN the two known sides.
  AC² = 7² + 9² − 2 × 7 × 9 × cos 68°
      = 49 + 81 − 126 × 0.3746
      = 130 − 47.20 = 82.80.
  AC = √82.80 = 9.10 cm (3 s.f.).
  The formula SUBTRACTS the cosine term. Adding it gives 13.3 cm, which is longer than both sides, a red flag.
```

```yaml
type: mcq
topic: "G4 Pythagoras' Theorem & Trigonometry"
stem: "In triangle ABC, angle A = 40°, angle B = 75° and side a = 12 cm. Use the sine rule to find side b, correct to 3 significant figures."
options:
  - "7.99 cm"
  - "12.9 cm"
  - "18.0 cm"
  - "16.2 cm"
answer: 2
marks: 3
misconception: inverted-the-sine-rule-fraction
worked: |
  Sine rule: a ÷ sin A = b ÷ sin B.
  12 ÷ sin 40° = b ÷ sin 75°.
  b = 12 × sin 75° ÷ sin 40° = 12 × 0.9659 ÷ 0.6428 = 18.03...
  b = 18.0 cm (3 s.f.).
  Side b faces the BIGGER angle (75° > 40°), so b must be longer than 12 cm, 7.99 cm cannot be right.
```

```yaml
type: mcq
topic: "G4 Pythagoras' Theorem & Trigonometry"
stem: "Given that sin x = 0.5 and that x is obtuse, where 0° < x < 180°, find x."
options:
  - "30°"
  - "210°"
  - "120°"
  - "150°"
answer: 3
marks: 2
misconception: gave-the-acute-answer-from-the-calculator
worked: |
  The calculator gives sin⁻¹(0.5) = 30°, which is ACUTE.
  For an obtuse angle with the same sine, use x = 180° − 30° = 150°.
  Check: sin 150° = 0.5. ✓
  The calculator only ever returns the acute value, you must convert it yourself.
```

```yaml
type: mcq
topic: "G4 Pythagoras' Theorem & Trigonometry"
stem: "A triangle has two sides of length 11 cm and 8 cm with an included angle of 130°. Find its area, correct to 3 significant figures."
options:
  - "33.7 cm²"
  - "67.4 cm²"
  - "44.0 cm²"
  - "28.3 cm²"
answer: 0
marks: 3
misconception: forgot-the-half-in-the-area-formula
worked: |
  Area = ½ ab sin C, where C is the angle BETWEEN the two sides.
  Area = ½ × 11 × 8 × sin 130°
       = 44 × 0.7660
       = 33.7 cm² (3 s.f.).
  Dropping the ½ gives 67.4 cm², exactly double, which is the tell-tale sign.
```

```yaml
type: mcq
topic: "G4 Pythagoras' Theorem & Trigonometry"
stem: "A ship sails from P on a bearing of 145° for 20 km, reaching Q. Find how far Q is SOUTH of P, correct to 3 significant figures."
options:
  - "11.5 km"
  - "16.4 km"
  - "14.1 km"
  - "19.3 km"
answer: 1
marks: 3
misconception: used-sine-for-the-north-south-component
worked: |
  Bearings are measured CLOCKWISE from north. A bearing of 145° is 35° past due east... more precisely,
  the angle between the path and the SOUTH direction is 180° − 145° = 35°.
  The southward distance is the side ADJACENT to the bearing measured from the north-south line:
  south distance = 20 × cos 35° = 20 × 0.8192 = 16.4 km (3 s.f.).
  Using sine (20 × sin 35° = 11.5 km) gives the EAST distance instead.
```

```yaml
type: mcq
topic: "G4 Pythagoras' Theorem & Trigonometry"
stem: "A helicopter flies from town A to town B on a bearing of 118°. Find the bearing of A from B."
options:
  - "062°"
  - "242°"
  - "298°"
  - "038°"
answer: 2
marks: 2
misconception: subtracted-180-when-it-should-have-been-added
worked: |
  A back-bearing differs from the original by 180°.
  The bearing is 118°, which is LESS than 180°, so ADD:
  118° + 180° = 298°.
  Subtracting would give a negative angle, so adding is the only option here.
  Bearings are always written with three figures and lie between 000° and 360°.
```

```yaml
type: short
topic: "G4 Pythagoras' Theorem & Trigonometry"
stem: "A cuboid has a rectangular base measuring 8 cm by 6 cm and a height of 24 cm. Find the length of the diagonal from one bottom corner to the opposite top corner, in cm."
accepted: ["26", "26 cm"]
marks: 3
misconception: applied-pythagoras-only-once
worked: |
  First find the diagonal of the BASE:
  base diagonal² = 8² + 6² = 64 + 36 = 100, so the base diagonal is 10 cm.
  Now use Pythagoras again with the height:
  space diagonal² = 10² + 24² = 100 + 576 = 676.
  Space diagonal = √676 = 26 cm.
  In 3D you must use Pythagoras TWICE.
```

```yaml
type: short
topic: "G4 Pythagoras' Theorem & Trigonometry"
stem: "Write down the exact value of cos 120°."
accepted: ["-0.5", "-1/2", "minus 0.5", "-0.500", "- 1/2"]
marks: 1
misconception: dropped-the-negative-sign-for-an-obtuse-angle
worked: |
  120° is obtuse, and the cosine of an obtuse angle is NEGATIVE.
  cos 120° = −cos(180° − 120°) = −cos 60° = −0.5.
```

```yaml
type: mcq
topic: "G5 Mensuration"
stem: "Find the volume of a cone of radius 6 cm and height 14 cm, correct to 3 significant figures."
options:
  - "1580 cm³"
  - "264 cm³"
  - "176 cm³"
  - "528 cm³"
answer: 3
marks: 3
misconception: forgot-the-one-third-in-the-cone-volume
worked: |
  Volume of a cone = ⅓πr²h (this formula is given on the formula sheet).
  V = ⅓ × π × 6² × 14 = ⅓ × π × 36 × 14 = π × 168 = 527.8...
  V = 528 cm³ (3 s.f.).
  Leaving out the ⅓ gives 1580 cm³, that is the volume of a CYLINDER with the same base and height.
```

```yaml
type: mcq
topic: "G5 Mensuration"
stem: "Find the surface area of a sphere of radius 5 cm, correct to 3 significant figures."
options:
  - "314 cm²"
  - "524 cm²"
  - "78.5 cm²"
  - "1570 cm²"
answer: 0
marks: 2
misconception: used-the-volume-formula-instead-of-the-surface-area-formula
worked: |
  Surface area of a sphere = 4πr² (given on the formula sheet).
  A = 4 × π × 5² = 4 × π × 25 = 100π = 314.15...
  A = 314 cm² (3 s.f.).
  Using ⁴⁄₃πr³ = 524 gives a VOLUME (cm³), not an area, always check the units of your answer.
```

```yaml
type: mcq
topic: "G5 Mensuration"
stem: "A solid is made from a cylinder of radius 7 cm and height 10 cm with a hemisphere of the same radius fixed on top. Find its total volume, correct to 3 significant figures."
options:
  - "1540 cm³"
  - "2260 cm³"
  - "2980 cm³"
  - "1900 cm³"
answer: 1
marks: 4
misconception: used-a-whole-sphere-instead-of-a-hemisphere
worked: |
  Cylinder: V = πr²h = π × 49 × 10 = 1539.4 cm³.
  Hemisphere: V = ½ × ⁴⁄₃πr³ = ⅔ × π × 343 = 718.4 cm³.
  Total = 1539.4 + 718.4 = 2257.8 cm³ = 2260 cm³ (3 s.f.).
  Using a FULL sphere gives 2980 cm³. A hemisphere is exactly HALF a sphere: ⅔πr³.
```

```yaml
type: mcq
topic: "G5 Mensuration"
stem: "A solid cone has base radius 6 cm and slant height 10 cm. Find its total surface area, correct to 3 significant figures."
options:
  - "188 cm²"
  - "415 cm²"
  - "302 cm²"
  - "113 cm²"
answer: 2
marks: 3
misconception: forgot-the-circular-base
worked: |
  Curved surface area of a cone = πrl = π × 6 × 10 = 60π = 188.5 cm².
  The word TOTAL means the flat circular base must be added:
  base area = πr² = π × 36 = 113.1 cm².
  Total = 188.5 + 113.1 = 301.6 cm² = 302 cm² (3 s.f.).
  'Did you include the base?' is the single most common lost mark here.
```

```yaml
type: mcq
topic: "G5 Mensuration"
stem: "A sector of a circle has radius 14 cm and an angle of 45° at the centre. Find the arc length, correct to 3 significant figures."
options:
  - "77.0 cm"
  - "5.50 cm"
  - "24.7 cm"
  - "11.0 cm"
answer: 3
marks: 2
misconception: used-the-sector-area-formula-for-the-arc-length
worked: |
  Arc length = (angle ÷ 360°) × circumference = (45 ÷ 360) × 2 × π × 14.
  = (1/8) × 87.96 = 10.996...
  Arc length = 11.0 cm (3 s.f.).
  Using (45 ÷ 360) × πr² = 77.0 gives an AREA in cm², not a length, check the units.
```

```yaml
type: mcq
topic: "G5 Mensuration"
stem: "A sector of a circle has radius 12 cm and an angle of 1.2 radians. Find its area."
options:
  - "86.4 cm²"
  - "14.4 cm²"
  - "172.8 cm²"
  - "1.51 cm²"
answer: 0
marks: 2
misconception: used-the-arc-length-formula-for-the-area
worked: |
  With the angle in RADIANS, sector area = ½ r²θ.
  Area = ½ × 12² × 1.2 = ½ × 144 × 1.2 = 86.4 cm².
  Using rθ = 12 × 1.2 = 14.4 gives the ARC LENGTH in cm, not the area.
  Make sure your calculator is in RADIAN mode when θ is in radians.
```

```yaml
type: mcq
topic: "G5 Mensuration"
stem: "A circle has radius 10 cm. A sector of this circle has an angle of 1.5 radians at the centre. Find the area of the corresponding minor segment, correct to 3 significant figures."
options:
  - "75.0 cm²"
  - "25.1 cm²"
  - "50.1 cm²"
  - "10.6 cm²"
answer: 1
marks: 4
misconception: forgot-to-subtract-the-triangle-from-the-sector
worked: |
  A SEGMENT is a sector with the triangle cut away.
  Sector area = ½ r²θ = ½ × 100 × 1.5 = 75 cm².
  Triangle area = ½ r² sin θ = ½ × 100 × sin(1.5 rad) = 50 × 0.9975 = 49.87 cm².
  Segment = 75 − 49.87 = 25.1 cm² (3 s.f.).
  Stopping at 75 cm² answers a different question.
```

```yaml
type: mcq
topic: "G5 Mensuration"
stem: "A trapezium has parallel sides of length 9 cm and 15 cm, and a perpendicular height of 8 cm. Find its area."
options:
  - "192 cm²"
  - "120 cm²"
  - "96 cm²"
  - "48 cm²"
answer: 2
marks: 2
misconception: forgot-the-half-in-the-trapezium-formula
worked: |
  Area of a trapezium = ½ × (sum of the parallel sides) × height.
  = ½ × (9 + 15) × 8
  = ½ × 24 × 8 = 96 cm².
  Leaving out the ½ gives 192 cm², exactly double.
```

```yaml
type: mcq
topic: "G5 Mensuration"
stem: "A tank holds 0.75 m³ of water. Express this volume in cubic centimetres."
options:
  - "75 000 cm³"
  - "7500 cm³"
  - "750 cm³"
  - "750 000 cm³"
answer: 3
marks: 2
misconception: used-100-instead-of-1000000-as-the-volume-conversion
worked: |
  1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1 000 000 cm³.
  0.75 m³ = 0.75 × 1 000 000 = 750 000 cm³.
  Multiplying by 100 only once is the standard slip, for VOLUME the factor is cubed.
```

```yaml
type: short
topic: "G5 Mensuration"
stem: "A cylinder has radius 4 cm and height 10 cm. Find its curved surface area, giving your answer in terms of π, in cm²."
accepted: ["80pi", "80 pi", "80*pi", "80 x pi"]
marks: 2
misconception: used-the-volume-formula-for-the-curved-surface-area
worked: |
  Curved surface area of a cylinder = 2πrh.
  = 2 × π × 4 × 10 = 80π cm².
  The volume formula πr²h would give 160π cm³, an entirely different quantity.
```

```yaml
type: short
topic: "G5 Mensuration"
stem: "A pyramid has a rectangular base measuring 12 cm by 7 cm and a vertical height of 15 cm. Find its volume, in cm³."
accepted: ["420", "420 cm3"]
marks: 2
misconception: forgot-the-one-third-in-the-pyramid-volume
worked: |
  Volume of a pyramid = ⅓ × base area × height.
  Base area = 12 × 7 = 84 cm².
  V = ⅓ × 84 × 15 = 28 × 15 = 420 cm³.
```

```yaml
type: mcq
topic: "G6 Coordinate Geometry"
stem: "Find the gradient of the line joining A(3, −4) and B(−1, 8)."
options:
  - "−3"
  - "3"
  - "−1/3"
  - "−12"
answer: 0
marks: 2
misconception: subtracted-the-coordinates-in-different-orders
worked: |
  Gradient = (y₂ − y₁) ÷ (x₂ − x₁).
  = (8 − (−4)) ÷ (−1 − 3)
  = 12 ÷ (−4) = −3.
  Both subtractions must go the SAME way round (B minus A on top AND bottom). Mixing them up flips the sign.
```

```yaml
type: mcq
topic: "G6 Coordinate Geometry"
stem: "Find the length of the line segment joining A(1, 2) and B(7, 10)."
options:
  - "14 units"
  - "10 units"
  - "√14 units"
  - "100 units"
answer: 1
marks: 2
misconception: forgot-to-take-the-square-root
worked: |
  Horizontal change = 7 − 1 = 6. Vertical change = 10 − 2 = 8.
  By Pythagoras: AB² = 6² + 8² = 36 + 64 = 100.
  AB = √100 = 10 units.
  Stopping at 100 gives the SQUARE of the length.
```

```yaml
type: mcq
topic: "G6 Coordinate Geometry"
stem: "Find the equation of the straight line passing through (−1, 5) and (3, 13)."
options:
  - "y = 2x + 5"
  - "y = 2x − 7"
  - "y = 2x + 7"
  - "y = (1/2)x + 7"
answer: 2
marks: 3
misconception: used-a-given-y-coordinate-as-the-intercept
worked: |
  Gradient m = (13 − 5) ÷ (3 − (−1)) = 8 ÷ 4 = 2.
  Substitute the point (−1, 5) into y = 2x + c:
  5 = 2(−1) + c = −2 + c, so c = 7.
  Equation: y = 2x + 7.
  Check the second point: 2(3) + 7 = 13. ✓
  Writing c = 5 (just because 5 appeared in the question) fails this check.
```

```yaml
type: mcq
topic: "G6 Coordinate Geometry"
stem: "A line is perpendicular to y = (2/3)x + 5 and passes through (4, 1). Find its equation."
options:
  - "y = 1.5x − 5"
  - "y = (2/3)x − 5/3"
  - "y = −1.5x + 1"
  - "y = −1.5x + 7"
answer: 3
marks: 3
misconception: negated-the-gradient-without-taking-the-reciprocal
worked: |
  For perpendicular lines, m₁ × m₂ = −1.
  m₁ = 2/3, so m₂ = −1 ÷ (2/3) = −3/2 = −1.5 (NEGATIVE RECIPROCAL, flip AND change sign).
  Substitute (4, 1): 1 = −1.5(4) + c = −6 + c, so c = 7.
  Equation: y = −1.5x + 7.
  Just changing the sign (to −2/3) is not enough, you must invert the fraction too.
```

```yaml
type: mcq
topic: "G6 Coordinate Geometry"
stem: "The point (k, 9) lies on the line 2x + 3y = 41. Find the value of k."
options:
  - "7"
  - "7.67"
  - "−7"
  - "3.5"
answer: 0
marks: 2
misconception: substituted-into-the-wrong-variable
worked: |
  The point is (k, 9), so x = k and y = 9.
  2k + 3(9) = 41.
  2k + 27 = 41, so 2k = 14 and k = 7.
  Substituting 9 for x instead gives 18 + 3k = 41 and k = 7.67, always check which coordinate is which.
```

```yaml
type: mcq
topic: "G6 Coordinate Geometry"
stem: "The points A(−1, 2), B(5, 2) and C(5, 10) form a right-angled triangle. Find its area."
options:
  - "48 square units"
  - "24 square units"
  - "30 square units"
  - "12 square units"
answer: 1
marks: 3
misconception: forgot-the-half-in-the-triangle-area
worked: |
  AB is horizontal: length = 5 − (−1) = 6 units.
  BC is vertical: length = 10 − 2 = 8 units.
  The right angle is at B, so AB and BC are the base and height.
  Area = ½ × 6 × 8 = 24 square units.
  Forgetting the ½ gives 48, that is the area of the RECTANGLE, not the triangle.
```

```yaml
type: short
topic: "G6 Coordinate Geometry"
stem: "Find the coordinates of the midpoint of the line joining P(−3, 8) and Q(9, −2)."
accepted: ["(3, 3)", "(3,3)", "3, 3", "3,3"]
marks: 2
misconception: subtracted-the-coordinates-instead-of-averaging-them
worked: |
  Midpoint = ((x₁ + x₂) ÷ 2, (y₁ + y₂) ÷ 2).
  x: (−3 + 9) ÷ 2 = 6 ÷ 2 = 3.
  y: (8 + (−2)) ÷ 2 = 6 ÷ 2 = 3.
  Midpoint = (3, 3).
```

```yaml
type: mcq
topic: "S1 Data Handling & Analysis"
stem: "The mean of 8 numbers is 12.5. A ninth number, 20, is included. Find the new mean, correct to 3 significant figures."
options:
  - "16.3"
  - "12.5"
  - "13.3"
  - "13.5"
answer: 2
marks: 3
misconception: averaged-the-old-mean-with-the-new-value
worked: |
  Total of the first 8 numbers = 8 × 12.5 = 100.
  New total = 100 + 20 = 120.
  New mean = 120 ÷ 9 = 13.33... = 13.3 (3 s.f.).
  Averaging the mean with the new value, (12.5 + 20) ÷ 2 = 16.3, ignores how many numbers there are.
```

```yaml
type: mcq
topic: "S1 Data Handling & Analysis"
stem: "Find the median of 3, 7, 7, 9, 12, 15, 15, 15, 18."
options:
  - "15"
  - "11.2"
  - "9"
  - "12"
answer: 3
marks: 2
misconception: gave-the-mode-instead-of-the-median
worked: |
  The data are already in order and there are 9 values.
  The median is the middle value: the (9 + 1) ÷ 2 = 5th value.
  Counting along: 3, 7, 7, 9, 12 → the median is 12.
  15 is the MODE (most frequent) and 11.2 is the MEAN, read which average is wanted.
```

```yaml
type: mcq
topic: "S1 Data Handling & Analysis"
stem: "A grouped frequency table has classes 0 < x ⩽ 10 (frequency 4), 10 < x ⩽ 20 (frequency 10) and 20 < x ⩽ 30 (frequency 6). Find the estimated mean."
options:
  - "16"
  - "15"
  - "20"
  - "320"
answer: 0
marks: 3
misconception: used-the-class-boundaries-instead-of-the-midpoints
worked: |
  Use the MIDPOINT of each class: 5, 15 and 25.
  Σfx = (4 × 5) + (10 × 15) + (6 × 25) = 20 + 150 + 150 = 320.
  Σf = 4 + 10 + 6 = 20.
  Estimated mean = Σfx ÷ Σf = 320 ÷ 20 = 16.
  Forgetting to divide by Σf leaves 320, which is far too large to be a mean of this data.
```

```yaml
type: mcq
topic: "S1 Data Handling & Analysis"
stem: "Find the standard deviation of 4, 6, 8, 10, 12, correct to 3 significant figures."
options:
  - "8.00"
  - "2.83"
  - "3.16"
  - "2.53"
answer: 1
marks: 3
misconception: divided-by-n-minus-one-instead-of-n
worked: |
  Mean = (4 + 6 + 8 + 10 + 12) ÷ 5 = 40 ÷ 5 = 8.
  Deviations: −4, −2, 0, 2, 4. Squares: 16, 4, 0, 4, 16. Sum = 40.
  Variance = 40 ÷ 5 = 8 (divide by n, the number of values).
  Standard deviation = √8 = 2.828... = 2.83 (3 s.f.).
  Dividing by n − 1 = 4 gives √10 = 3.16, the wrong n for this syllabus.
```

```yaml
type: mcq
topic: "S1 Data Handling & Analysis"
stem: "Two classes sat the same test. Their mean marks are equal, but class A has a standard deviation of 3.2 and class B has a standard deviation of 7.8. Which statement is correct?"
options:
  - "The marks in class B are more consistent than those in class A"
  - "Class A scored higher on average than class B"
  - "The marks in class A are more consistent than those in class B"
  - "Class B has a larger median than class A"
answer: 2
marks: 2
misconception: larger-standard-deviation-means-better-performance
worked: |
  The standard deviation measures SPREAD, not how high the marks are.
  A SMALLER standard deviation means the marks are bunched closer to the mean, i.e. more consistent.
  3.2 < 7.8, so class A is more consistent.
  The means are equal, so nothing can be said about who scored higher.
```

```yaml
type: mcq
topic: "S1 Data Handling & Analysis"
stem: "From a cumulative frequency curve for 200 students, the lower quartile is 38 marks and the upper quartile is 62 marks. Find the interquartile range."
options:
  - "100 marks"
  - "50 marks"
  - "12 marks"
  - "24 marks"
answer: 3
marks: 2
misconception: added-the-quartiles-instead-of-subtracting
worked: |
  Interquartile range = upper quartile − lower quartile.
  IQR = 62 − 38 = 24 marks.
  Adding the quartiles (62 + 38 = 100) has no meaning here.
```

```yaml
type: mcq
topic: "S1 Data Handling & Analysis"
stem: "A cumulative frequency curve is drawn for the times of 160 runners. At which cumulative frequency should the upper quartile be read?"
options:
  - "120"
  - "40"
  - "80"
  - "160"
answer: 0
marks: 2
misconception: read-the-upper-quartile-at-one-quarter-of-n
worked: |
  The upper quartile is the value below which THREE QUARTERS of the data lie.
  ¾ × 160 = 120.
  So read across from a cumulative frequency of 120.
  40 (= ¼ × 160) gives the LOWER quartile and 80 gives the median.
```

```yaml
type: mcq
topic: "S1 Data Handling & Analysis"
stem: "A box-and-whisker plot has a minimum of 12, a lower quartile of 20, a median of 27, an upper quartile of 35 and a maximum of 48. Find the interquartile range."
options:
  - "36"
  - "15"
  - "23"
  - "8"
answer: 1
marks: 2
misconception: gave-the-range-instead-of-the-interquartile-range
worked: |
  The interquartile range uses only the two quartiles, the ends of the BOX.
  IQR = 35 − 20 = 15.
  48 − 12 = 36 is the RANGE, measured from the ends of the WHISKERS.
```

```yaml
type: mcq
topic: "S1 Data Handling & Analysis"
stem: "The mean of five numbers is 15. Four of the numbers are 9, 11, 16 and 20. Find the fifth number."
options:
  - "14"
  - "56"
  - "19"
  - "75"
answer: 2
marks: 2
misconception: forgot-to-subtract-the-known-values-from-the-total
worked: |
  Total of all five numbers = 5 × 15 = 75.
  Total of the four known numbers = 9 + 11 + 16 + 20 = 56.
  Fifth number = 75 − 56 = 19.
  75 is the TOTAL, not a single value, read what the question wants.
```

```yaml
type: short
topic: "S1 Data Handling & Analysis"
stem: "Find the mode of 5, 8, 8, 9, 11, 11, 11, 14."
accepted: ["11"]
marks: 1
misconception: gave-the-frequency-instead-of-the-value
worked: |
  The mode is the value that occurs MOST OFTEN.
  5 appears once, 8 appears twice, 9 once, 11 three times, 14 once.
  11 has the highest frequency, so the mode is 11 (not 3, which is how often it appears).
```

```yaml
type: short
topic: "S1 Data Handling & Analysis"
stem: "The standard deviation of a set of data is 4.5. Every value in the set is then increased by 3. Write down the new standard deviation."
accepted: ["4.5", "4.50"]
marks: 2
misconception: added-the-constant-to-the-standard-deviation
worked: |
  Adding the same amount to every value slides the whole data set along;
  the values keep exactly the same distances from each other and from the new mean.
  The SPREAD is unchanged, so the standard deviation is still 4.5.
  (The MEAN does rise by 3, but the standard deviation does not.)
```

```yaml
type: mcq
topic: "S2 Probability"
stem: "A box contains 7 white, 5 black and 8 yellow marbles. One marble is taken at random. Find the probability that it is NOT white."
options:
  - "7/20"
  - "1/3"
  - "3/4"
  - "13/20"
answer: 3
marks: 2
misconception: found-the-probability-of-the-event-instead-of-its-complement
worked: |
  Total number of marbles = 7 + 5 + 8 = 20.
  P(white) = 7/20.
  P(not white) = 1 − 7/20 = 13/20.
  (Or count directly: 5 + 8 = 13 marbles are not white, giving 13/20.)
  Giving 7/20 answers the opposite question.
```

```yaml
type: mcq
topic: "S2 Probability"
stem: "Two fair six-sided dice are thrown. Find the probability that the two scores differ by exactly 2."
options:
  - "2/9"
  - "1/9"
  - "1/6"
  - "4/9"
answer: 0
marks: 3
misconception: forgot-that-order-matters-in-the-possibility-diagram
worked: |
  A possibility diagram for two dice has 6 × 6 = 36 equally likely outcomes.
  Pairs differing by 2: (1,3), (2,4), (3,5), (4,6) and their reverses (3,1), (4,2), (5,3), (6,4).
  That is EIGHT outcomes, because (1,3) and (3,1) are different squares of the diagram.
  P = 8/36 = 2/9.
  Counting each pair only once gives 4/36 = 1/9 and is the classic undercount.
```

```yaml
type: mcq
topic: "S2 Probability"
stem: "A box holds 5 green pens and 7 yellow pens. Two pens are taken at random, one after the other, WITHOUT replacement. Find the probability that both are green."
options:
  - "25/144"
  - "5/33"
  - "5/12"
  - "10/33"
answer: 1
marks: 3
misconception: did-not-reduce-the-numbers-for-the-second-draw
worked: |
  First draw: P(green) = 5/12.
  The pen is NOT replaced, so only 4 greens remain out of 11 pens.
  Second draw: P(green) = 4/11.
  Multiply along the branches: 5/12 × 4/11 = 20/132 = 5/33.
  Using 5/12 × 5/12 = 25/144 would be right only WITH replacement.
```

```yaml
type: mcq
topic: "S2 Probability"
stem: "Events A and B are independent, with P(A) = 0.6 and P(B) = 0.25. Find P(A and B)."
options:
  - "0.85"
  - "0.35"
  - "0.15"
  - "0.45"
answer: 2
marks: 2
misconception: added-instead-of-multiplying-for-independent-events
worked: |
  For INDEPENDENT events, P(A and B) = P(A) × P(B).
  = 0.6 × 0.25 = 0.15.
  AND → MULTIPLY. OR → ADD. Adding here gives 0.85, which answers a different question.
  A combined probability must be SMALLER than each single one, 0.85 fails that check.
```

```yaml
type: mcq
topic: "S2 Probability"
stem: "A fair spinner is numbered 1 to 8. Find the probability that it lands on a prime number OR a multiple of 4."
options:
  - "1/2"
  - "5/8"
  - "7/8"
  - "3/4"
answer: 3
marks: 3
misconception: missed-one-of-the-favourable-outcomes
worked: |
  Primes from 1 to 8: 2, 3, 5, 7, that is 4 numbers (1 is NOT prime).
  Multiples of 4 from 1 to 8: 4 and 8, that is 2 numbers.
  No number is in both lists, so there are 4 + 2 = 6 favourable outcomes out of 8.
  P = 6/8 = 3/4.
  Forgetting that 2 is prime, or that 8 is a multiple of 4, gives 5/8.
```

```yaml
type: short
topic: "S2 Probability"
stem: "A fair coin is tossed three times. Find the probability of getting exactly two heads."
accepted: ["3/8", "0.375"]
marks: 3
misconception: counted-only-one-way-of-getting-two-heads
worked: |
  List all 2 × 2 × 2 = 8 equally likely outcomes.
  Exactly two heads happens in THREE ways: HHT, HTH and THH.
  P(exactly two heads) = 3/8.
  Counting only HHT gives 1/8 and misses the other orders.
```

## TEACHING

```yaml
kind: careless
topic: "Quadratic formula"
checks:
  - "Write a, b and c down WITH their signs before you substitute. In 2x² - 5x - 4 = 0, b = -5 and c = -4."
  - "The formula starts with -b. If b = -5 then -b = +5, a minus sign in the equation becomes a PLUS in the formula."
  - "Work out the discriminant b² - 4ac on its own line first. Watch -4 × 2 × (-4) = +32."
  - "The WHOLE of -b ± the square root is divided by 2a. Bracket the top line on your calculator."
  - "Give BOTH roots unless the question rejects one, and round only at the very last step."
```

```yaml
kind: careless
topic: "Completing the square"
checks:
  - "Halve the coefficient of x, then square it: x² + 6x becomes (x + 3)² - 9."
  - "The sign inside the bracket copies the sign of b: x² - 6x gives (x - 3)²."
  - "For (x + p)² + q the minimum point is (-p, q). The x-coordinate FLIPS sign; the constant does not."
  - "Solving? The ± reappears when you square-root: (x + 3)² = 14 gives x + 3 = ±√14, so TWO answers."
  - "Expand your finished form to check it returns the original expression."
```

```yaml
kind: careless
topic: "Factorising quadratics"
checks:
  - "For ax² + bx + c, hunt for two numbers with product a × c and sum b."
  - "A negative product means the two numbers have OPPOSITE signs, decide which is bigger."
  - "Take out any common factor first: 2x² - 18 = 2(x² - 9) = 2(x - 3)(x + 3)."
  - "'Factorise completely' means a difference of two squares must be split as well."
  - "Always expand your factors to verify they rebuild the original quadratic."
```

```yaml
kind: careless
topic: "Simultaneous equations"
checks:
  - "Line the equations up so x, y and the constant sit in the same columns."
  - "To eliminate, the coefficients must MATCH in size, multiply one or both equations first."
  - "Same signs: SUBTRACT. Different signs: ADD. Getting this backwards is the classic slip."
  - "Substitute your value back to find the second unknown, and give BOTH answers."
  - "Check your pair in the equation you did NOT use for the substitution."
```

```yaml
kind: careless
topic: "Solving inequalities"
checks:
  - "Multiplying or dividing by a NEGATIVE number reverses the inequality sign."
  - "Adding or subtracting never flips the sign."
  - "In a double inequality, do the same operation to all THREE parts."
  - "Asked for integers? Check whether each endpoint is included (⩽) or excluded (<)."
  - "Test one value from your answer back in the original inequality before you move on."
```

```yaml
kind: careless
topic: "Fractional equations"
checks:
  - "Multiply EVERY term on both sides by the denominator, not just the fraction."
  - "6/(x + 4) = x - 1 becomes 6 = (x - 1)(x + 4). Expand the right-hand side carefully."
  - "Rearrange to 'quadratic = 0' before you factorise or use the formula."
  - "A denominator can never be zero, so reject any root that makes it zero."
  - "Two roots usually means two answers, do not stop after the first one."
```

```yaml
kind: careless
topic: "Expanding and simplifying"
checks:
  - "Every term in the first bracket multiplies every term in the second, four products for two binomials."
  - "A minus outside a bracket changes the sign of EVERYTHING inside: -(2x - 5) = -2x + 5."
  - "(a + b)² is NOT a² + b². It is a² + 2ab + b², the middle term is the one people lose."
  - "Collect like terms at the end, and only like terms: 3x and 3x² can never be added."
  - "Substitute x = 1 into your answer and the original to spot a slip in seconds."
```

```yaml
kind: careless
topic: "Algebraic fractions"
checks:
  - "Factorise the top AND the bottom before you cancel anything."
  - "You may only cancel whole FACTORS, never single terms out of a sum."
  - "Adding or subtracting? Find the common denominator first, then work on the numerator."
  - "When subtracting, the minus sign changes the sign of every term in the second numerator."
  - "Leave the denominator in factorised form unless the question asks you to expand it."
```

```yaml
kind: careless
topic: "Changing the subject of a formula"
checks:
  - "Deal with the new subject LAST, strip everything else away from it first."
  - "If the subject is squared, square-root at the end. Stopping at r² loses the mark."
  - "If the subject appears twice, gather those terms on one side and FACTORISE."
  - "Multiplying up a fraction means multiplying EVERY term on both sides."
  - "Check by substituting simple numbers into the original and your rearranged version."
```

```yaml
kind: careless
topic: "Indices"
checks:
  - "Multiplying ADDS indices, dividing SUBTRACTS them, a power of a power MULTIPLIES them."
  - "Subtracting a negative index adds: 10⁵ ÷ 10⁻² = 10⁷, not 10³."
  - "Anything (except 0) to the power 0 is 1, not 0."
  - "A negative index means a RECIPROCAL, not a negative answer: 2⁻³ = 1/8."
  - "A coefficient inside a bracket is raised to the power too: (2a³)⁴ = 16a¹²."
```

```yaml
kind: careless
topic: "Standard form"
checks:
  - "The number in front must be at least 1 and less than 10. 18 × 10⁻³ is NOT in standard form."
  - "Multiplying? Multiply the numbers and ADD the powers. Dividing? Divide and SUBTRACT."
  - "Adding or subtracting? Rewrite both terms with the SAME power of ten first."
  - "Fix the mantissa afterwards: 18 × 10⁻³ = 1.8 × 10⁻²."
  - "Count the decimal places carefully, moving the point right gives a NEGATIVE index."
```

```yaml
kind: careless
topic: "HCF and LCM by prime factorisation"
checks:
  - "Write both numbers as products of prime powers first."
  - "HCF: take the LOWEST power of each prime that appears in BOTH numbers."
  - "LCM: take the HIGHEST power of EVERY prime that appears in either number."
  - "A prime present in only one number belongs in the LCM but never in the HCF."
  - "Sanity check: the HCF must divide both numbers; the LCM must be a multiple of both."
```

```yaml
kind: careless
topic: "Rounding and significant figures"
checks:
  - "Leading zeros are never significant: 0.00409 has 3 significant figures, not 5."
  - "Keep the trailing zero when it is significant, write 0.00410, not 0.0041."
  - "Round ONLY at the end. Rounding halfway through drifts the final answer."
  - "The paper wants 3 significant figures, or 1 decimal place for angles in degrees."
  - "Copy the units and the degree symbol from the question into your final answer."
```

```yaml
kind: careless
topic: "Ratio and sharing"
checks:
  - "Add the parts to get the TOTAL number of parts before you divide."
  - "One part = total amount ÷ total parts. Then multiply by the parts you actually want."
  - "Check your shares add back up to the original amount."
  - "Combining a : b with b : c? Scale both so that b is the SAME number in each."
  - "Simplify ratios by dividing every part by the HCF, and keep whole numbers."
```

```yaml
kind: careless
topic: "Map scales"
checks:
  - "Scale 1 : n means 1 cm on the map is n cm on the ground."
  - "Convert AFTER you multiply: 1 km = 100 000 cm, and 1 m = 100 cm."
  - "For AREA the scale factor is SQUARED: scale 1 : 25 000 gives an area factor of 25 000²."
  - "1 km² = 10¹⁰ cm², not 10⁵. Write the conversion out rather than guessing it."
  - "Ask yourself whether the real distance should be bigger or smaller than the map distance."
```

```yaml
kind: careless
topic: "Direct and inverse proportion"
checks:
  - "Direct: y = kx (or kx², or k√x). Inverse: y = k/x (or k/x²)."
  - "ALWAYS find k first from the given pair of values."
  - "'Proportional to the square' means x² goes in the formula, doubling x multiplies y by 4."
  - "Inverse square: doubling x DIVIDES y by 4, not by 2."
  - "Substitute your k back and check the original pair still works."
```

```yaml
kind: careless
topic: "Percentage change and reverse percentage"
checks:
  - "Percentage change = (change ÷ ORIGINAL) × 100. The original is always the denominator."
  - "Reverse percentage: the amount you are given is already 85% (or 115%) of the answer."
  - "Never take the same percentage back off a reduced price, 15% of $68 is not 15% of $80."
  - "After a 15% discount, divide by 0.85. After a 15% increase, divide by 1.15."
  - "Check: put your original through the stated change and see if you land on the given value."
```

```yaml
kind: careless
topic: "Profit, loss, discount and GST"
checks:
  - "Percentage profit and loss are measured against the COST price, not the selling price."
  - "Discount is taken off the marked price; GST is added on to the price before tax."
  - "Profit = selling price - cost price. Get the subtraction the right way round."
  - "Multiply by (1 + rate) to add a percentage and (1 - rate) to take one off."
  - "Money answers are given to 2 decimal places: write $697.60, not $697.6."
```

```yaml
kind: careless
topic: "Simple and compound interest"
checks:
  - "Simple interest = P × R × T ÷ 100, the same interest every single year."
  - "Compound amount = P × (1 + R/100)ⁿ, interest earns interest."
  - "The compound formula gives the TOTAL AMOUNT. Subtract P if the question wants the INTEREST."
  - "Read whether the interest is added yearly, half-yearly or monthly, and adjust R and n to match."
  - "Compound interest is always slightly more than simple interest over the same period, use that as a check."
```

```yaml
kind: careless
topic: "Hire purchase and money exchange"
checks:
  - "Hire-purchase total = deposit + (number of instalments × amount of each instalment)."
  - "Never leave the deposit out, if your total is less than the cash price, you have missed it."
  - "'How much MORE?' means subtract the cash price from the hire-purchase total."
  - "Exchanging money: decide first whether the answer should be a bigger or smaller number, then multiply or divide."
  - "Round money to 2 decimal places, and keep the currency symbol on the answer."
```

```yaml
kind: careless
topic: "Speed, distance and time"
checks:
  - "Speed = distance ÷ time. Rearrange, do not guess."
  - "Average speed = TOTAL distance ÷ TOTAL time, never the average of the speeds."
  - "km/h to m/s: divide by 3.6. m/s to km/h: multiply by 3.6."
  - "Convert minutes to hours before dividing: 45 minutes is 0.75 h, not 0.45 h."
  - "Check the units the question asks for and convert your final answer to match."
```

```yaml
kind: careless
topic: "Distance-time graphs"
checks:
  - "The GRADIENT of a distance-time graph is the speed."
  - "A HORIZONTAL line means the object is STATIONARY, not travelling at constant speed."
  - "A steeper line means a faster speed; a line sloping back down means returning towards the start."
  - "Read the axis units. Minutes on the x-axis means your gradient is per minute, convert if km/h is wanted."
  - "Take your two points from clear grid intersections, not from a rough eyeball."
```

```yaml
kind: careless
topic: "Speed-time graphs"
checks:
  - "The AREA under a speed-time graph is the DISTANCE travelled."
  - "The GRADIENT of a speed-time graph is the ACCELERATION."
  - "Split the area into triangles and rectangles, and count EVERY region, including the last one."
  - "A negative gradient is a deceleration. Keep the minus sign in the answer."
  - "A horizontal line here means CONSTANT SPEED (not stationary), that is a distance-time idea."
```

```yaml
kind: careless
topic: "Quadratic graphs"
checks:
  - "A positive x² coefficient gives a U-shaped curve with a MINIMUM; a negative one gives an upside-down curve with a MAXIMUM."
  - "The line of symmetry is x = -b ÷ (2a), watch the sign of b."
  - "The curve cuts the y-axis at the constant term c."
  - "Plot every point from your table and join with a SMOOTH curve, never with straight segments."
  - "Reading a solution off the graph? State the x value(s) where the curve meets the required line."
```

```yaml
kind: careless
topic: "Gradient of a curve by drawing a tangent"
checks:
  - "The gradient of a curve at a point is found by DRAWING A TANGENT at that point and finding its gradient."
  - "The tangent must touch the curve at the point and match its direction, not cut across it."
  - "Take TWO points from the ends of the tangent you drew, as far apart as possible, to reduce error."
  - "Gradient = (change in y) ÷ (change in x). Never the other way up."
  - "Use the SCALES on the axes, not the number of squares, the two axes rarely match."
```

```yaml
kind: careless
topic: "Coordinate geometry"
checks:
  - "Gradient = (y₂ - y₁) ÷ (x₂ - x₁). Subtract in the SAME order on the top and the bottom."
  - "Length uses Pythagoras, and you must square-root at the end."
  - "For y = mx + c, find m first, then substitute a point to find c."
  - "Parallel lines share a gradient. Perpendicular gradients multiply to -1 (flip AND change sign)."
  - "Midpoint means AVERAGE the coordinates: ((x₁ + x₂)/2, (y₁ + y₂)/2), never subtract them."
```

```yaml
kind: careless
topic: "Angles, triangles and polygons"
checks:
  - "Interior angle sum = (n - 2) × 180°. The exterior angles always total 360°."
  - "Regular polygon: exterior angle = 360° ÷ n, and interior + exterior = 180°."
  - "Angles in a triangle add to 180°; in a quadrilateral, 360°. Do not mix them up."
  - "Alternate (Z) and corresponding (F) angles are EQUAL; co-interior (C) angles add to 180°."
  - "Give a REASON with every step when the question says 'giving reasons'. Those are free marks."
```

```yaml
kind: careless
topic: "Congruence and similar triangles"
checks:
  - "In similar triangles, match the corresponding vertices before writing any ratio."
  - "With a line parallel to one side, use the FULL side (AB), not just the part (DB)."
  - "Set up the ratio as (small side) ÷ (big side) = (small side) ÷ (big side), consistently."
  - "Congruent means IDENTICAL (SSS, SAS, ASA, RHS). Similar means the same SHAPE, different size."
  - "Check your answer is sensible: a side in the bigger triangle must come out bigger."
```

```yaml
kind: careless
topic: "Scale factors for area and volume"
checks:
  - "Length scale factor k. AREA scale factor is k². VOLUME scale factor is k³."
  - "Given the AREA ratio, take the SQUARE ROOT to get back to lengths."
  - "Given the VOLUME ratio, take the CUBE ROOT to get back to lengths."
  - "Multiplying an area by k (instead of k²) is the single most common error in this topic."
  - "Check the units: cm for length, cm² for area, cm³ for volume."
```

```yaml
kind: careless
topic: "Circle properties"
checks:
  - "Angle at the CENTRE = 2 × angle at the circumference on the same arc."
  - "The angle in a SEMICIRCLE is 90°."
  - "Angles in the SAME segment are equal; opposite angles of a cyclic quadrilateral add to 180°."
  - "A TANGENT is perpendicular to the radius at the point of contact, that gives you a right angle to use."
  - "Two tangents from the same external point are EQUAL, which makes an isosceles triangle."
```

```yaml
kind: careless
topic: "Pythagoras' theorem"
checks:
  - "Identify the HYPOTENUSE first, it is opposite the right angle and is the longest side."
  - "Finding the hypotenuse: ADD the squares. Finding a shorter side: SUBTRACT."
  - "Square-root at the end. An answer left as 144 instead of 12 loses the mark."
  - "In 3D you use Pythagoras TWICE: base diagonal first, then bring in the height."
  - "Sanity check: no side may come out longer than the hypotenuse."
```

```yaml
kind: careless
topic: "Right-angled trigonometry"
checks:
  - "Label O, A and H from the ANGLE you are using, not from the page."
  - "SOH-CAH-TOA: choose the ratio that uses the two sides you know about."
  - "Finding an ANGLE means using sin⁻¹, cos⁻¹ or tan⁻¹."
  - "Finding a side on the bottom of the fraction means DIVIDING, not multiplying."
  - "Calculator in DEGREE mode for degrees; give angles to 1 decimal place."
```

```yaml
kind: careless
topic: "Sine rule and cosine rule"
checks:
  - "Cosine rule when you have two sides and the INCLUDED angle, or all three sides."
  - "Sine rule when you have an angle paired with its opposite side."
  - "The cosine rule SUBTRACTS the 2ab cos C term, do not add it."
  - "Square-root at the very end, after the whole right-hand side is worked out."
  - "The longest side must face the largest angle. If it does not, something is wrong."
  - "Area of a triangle = ½ ab sin C, the angle must be BETWEEN the two sides, and do not lose the ½."
```

```yaml
kind: careless
topic: "Bearings"
checks:
  - "Bearings are measured CLOCKWISE from NORTH, and always written with THREE figures: 030°, not 30°."
  - "Draw a north arrow at EVERY point you measure a bearing from."
  - "A back-bearing differs by 180°: add 180 if the bearing is under 180°, subtract 180 if it is over."
  - "A bearing lies between 000° and 360°, an answer of 390° means you must subtract 360°."
  - "Splitting a journey into north/south and east/west parts? Measure the angle from the north-south line first."
```

```yaml
kind: careless
topic: "Volume and surface area of solids"
checks:
  - "Check the formula sheet: cone V = ⅓πr²h, sphere V = ⁴⁄₃πr³, sphere A = 4πr²."
  - "Cone and pyramid volumes carry a ⅓. Forgetting it triples your answer."
  - "A hemisphere is HALF a sphere: volume ⅔πr³, curved surface 2πr²."
  - "DID YOU INCLUDE THE BASE? 'Total surface area' of a cone means πrl + πr²."
  - "Radius or diameter? If the question gives a diameter, halve it before you substitute."
  - "1 m³ = 1 000 000 cm³ and 1 litre = 1000 cm³. Cube the conversion, do not just multiply by 100."
```

```yaml
kind: careless
topic: "Arc length, sector and segment"
checks:
  - "In degrees: arc = (θ/360) × 2πr and sector area = (θ/360) × πr²."
  - "In radians: arc = rθ and sector area = ½ r²θ. Switch the calculator to RADIAN mode."
  - "An arc is a LENGTH (cm); a sector is an AREA (cm²). Check the units of your answer."
  - "SEGMENT = sector − triangle. The triangle's area is ½ r² sin θ."
  - "Perimeter of a sector = arc + TWO radii. It is easy to forget the straight edges."
```

```yaml
kind: careless
topic: "Averages and grouped data"
checks:
  - "Mean = Σfx ÷ Σf. Dividing by the number of CLASSES instead of Σf is a common slip."
  - "For grouped data use the MIDPOINT of each class as x, not the class boundary."
  - "Put the data IN ORDER before finding the median."
  - "With n values, the median is the ((n + 1) ÷ 2)th value. For even n, average the middle two."
  - "The MODE is the value that occurs most often, not how often it occurs."
```

```yaml
kind: careless
topic: "Standard deviation"
checks:
  - "Use the formula sheet version and divide by n, the number of values, NOT by n - 1."
  - "For a frequency table, n = Σf. Counting the number of rows instead is the classic error."
  - "Square-root the variance at the end. Leaving 8 instead of 2.83 loses the mark."
  - "A SMALLER standard deviation means the data are MORE consistent, not better."
  - "Adding a constant to every value leaves the standard deviation unchanged; only the mean moves."
  - "Comparing two data sets? Comment on the MEAN and the STANDARD DEVIATION, both in context."
```

```yaml
kind: careless
topic: "Cumulative frequency and box plots"
checks:
  - "Plot cumulative frequency against the UPPER class boundary, and join with a smooth curve."
  - "Median: read across at n/2. Lower quartile: n/4. Upper quartile: 3n/4."
  - "Interquartile range = upper quartile − lower quartile. The RANGE is max − min, they are different."
  - "'How many scored more than 60?' means take the total MINUS the cumulative frequency at 60."
  - "On a box plot the box shows the quartiles and the whiskers show the extremes."
```

```yaml
kind: careless
topic: "Probability and tree diagrams"
checks:
  - "Every probability is between 0 and 1. An answer above 1 is always wrong."
  - "AND means MULTIPLY along the branches; OR means ADD the completed branches."
  - "WITHOUT replacement: reduce BOTH the numerator and the denominator on the second branch."
  - "P(not A) = 1 − P(A). Read carefully whether the question wants the event or its complement."
  - "For two dice, there are 36 ordered outcomes, (3,6) and (6,3) are different."
  - "'At least one' is usually quickest as 1 − P(none)."
```

```yaml
kind: definition
term: "Highest Common Factor (HCF)"
topic: "N1 Numbers & Their Operations"
body: "The largest number that divides exactly into two or more given numbers. From prime factorisation, take the LOWEST power of each prime common to all of them."
```

```yaml
kind: definition
term: "Standard form"
topic: "N1 Numbers & Their Operations"
body: "A number written as A × 10ⁿ, where 1 ⩽ A < 10 and n is an integer. Used for very large or very small numbers, e.g. 0.0000418 = 4.18 × 10⁻⁵."
```

```yaml
kind: definition
term: "Reverse percentage"
topic: "N3 Percentage"
body: "Working backwards from a value that has ALREADY been changed to find the original. If a price is $68 after a 15% discount, the $68 represents 85% of the original, so the original is 68 ÷ 0.85 = $80."
```

```yaml
kind: definition
term: "Compound interest"
topic: "N3 Percentage"
body: "Interest calculated on the original sum PLUS the interest already earned. The amount after n periods is P × (1 + R/100)ⁿ, where P is the principal and R is the percentage rate per period."
```

```yaml
kind: definition
term: "Average speed"
topic: "N4 Rate & Speed"
body: "Total distance travelled divided by the total time taken for the whole journey. It is never found by averaging the individual speeds unless the times spent at each speed are equal."
```

```yaml
kind: definition
term: "Gradient"
topic: "N6 Functions & Graphs"
body: "A measure of steepness: the change in y divided by the change in x. For a CURVE, the gradient at a point is the gradient of the TANGENT drawn to the curve at that point."
```

```yaml
kind: definition
term: "Three-figure bearing"
topic: "G4 Pythagoras' Theorem & Trigonometry"
body: "A direction measured CLOCKWISE from north and written with three digits, from 000° to 360°. A bearing of 30° must be written as 030°."
```

```yaml
kind: definition
term: "Similar figures"
topic: "G2 Congruence & Similarity"
body: "Figures with the same shape but not necessarily the same size: corresponding angles are equal and corresponding sides are in the same ratio. If lengths scale by k, areas scale by k² and volumes by k³."
```

```yaml
kind: definition
term: "Interquartile range"
topic: "S1 Data Handling & Analysis"
body: "The upper quartile minus the lower quartile. It measures the spread of the MIDDLE half of the data and, unlike the range, is not distorted by extreme values."
```

```yaml
kind: definition
term: "Mutually exclusive events"
topic: "S2 Probability"
body: "Two events that cannot both happen at the same time, so P(A and B) = 0. For such events P(A or B) = P(A) + P(B)."
```
