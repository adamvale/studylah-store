---
level: na-level
slug: a-math
subjectName: Mathematics (Additional)
family: amath
---

## QUESTIONS

```yaml
type: mcq
topic: "A1 Quadratic Functions"
stem: "Express x² + 10x + 21 in the form (x + p)² + q."
options:
  - "(x + 5)² − 4"
  - "(x + 5)² + 4"
  - "(x + 10)² − 79"
  - "(x + 5)² − 46"
answer: 0
marks: 2
misconception: completing-square-halving
worked: |
  Halve the coefficient of x: 10 ÷ 2 = 5, so the bracket is (x + 5)².
  (x + 5)² = x² + 10x + 25, which is 4 too much for the constant term.
  So x² + 10x + 21 = (x + 5)² − 25 + 21 = (x + 5)² − 4.
```

```yaml
type: mcq
topic: "A1 Quadratic Functions"
stem: "Find the minimum value of y = 3x² − 12x + 5."
options:
  - "1"
  - "−7"
  - "−4"
  - "5"
answer: 1
marks: 3
misconception: factor-out-before-completing-square
worked: |
  Take the 3 out of the x-terms first: y = 3(x² − 4x) + 5.
  x² − 4x = (x − 2)² − 4, so y = 3[(x − 2)² − 4] + 5 = 3(x − 2)² − 12 + 5 = 3(x − 2)² − 7.
  3(x − 2)² ≥ 0, so the least value of y is −7 (at x = 2).
  Choosing 1 means the −4 inside the bracket was never multiplied by the 3.
```

```yaml
type: mcq
topic: "A1 Quadratic Functions"
stem: "The curve y = 7 + 6x − x² has a maximum point. Find the maximum value of y."
options:
  - "7"
  - "9"
  - "16"
  - "−16"
answer: 2
marks: 3
misconception: max-min-sign-when-a-negative
worked: |
  y = −(x² − 6x) + 7 = −[(x − 3)² − 9] + 7 = −(x − 3)² + 9 + 7 = −(x − 3)² + 16.
  Since −(x − 3)² ≤ 0, the greatest value of y is 16, reached at x = 3.
```

```yaml
type: mcq
topic: "A1 Quadratic Functions"
stem: "f(x) = 2x² + 4x + 9 for all real values of x. State the range of f."
options:
  - "f(x) ≥ 9"
  - "f(x) ≥ −1"
  - "f(x) ≤ 7"
  - "f(x) ≥ 7"
answer: 3
marks: 2
misconception: range-reads-x-not-y
worked: |
  f(x) = 2(x² + 2x) + 9 = 2[(x + 1)² − 1] + 9 = 2(x + 1)² + 7.
  The minimum value is 7, at x = −1, and the curve opens upwards.
  The range describes the OUTPUT values, so f(x) ≥ 7. (f(x) ≥ −1 quotes the x-value of the vertex.)
```

```yaml
type: short
topic: "A1 Quadratic Functions"
stem: "The curve y = x² − 8x + c has a minimum value of 5. Find the value of c."
accepted: ["21", "c = 21"]
marks: 3
misconception: minimum-value-from-completed-square
worked: |
  y = (x − 4)² − 16 + c, so the minimum value is c − 16 (at x = 4).
  c − 16 = 5, so c = 21.
```

```yaml
type: mcq
topic: "A2 Equations & Inequalities"
stem: "The equation x² + kx + 9 = 0 has two equal roots. Find the possible values of k."
options:
  - "k = ±6"
  - "k = 6 only"
  - "k = ±3"
  - "k = ±9"
answer: 0
marks: 3
misconception: equal-roots-discriminant-zero
worked: |
  Equal roots means the discriminant b² − 4ac = 0.
  Here a = 1, b = k, c = 9, so k² − 4(1)(9) = 0 → k² = 36.
  k = 6 or k = −6, i.e. k = ±6. Both signs are valid, the question did not restrict k.
```

```yaml
type: mcq
topic: "A2 Equations & Inequalities"
stem: "State the nature of the roots of 2x² − 3x + 5 = 0."
options:
  - "Two distinct real roots"
  - "No real roots"
  - "Two equal real roots"
  - "One real root only"
answer: 1
marks: 2
misconception: discriminant-sign-reading
worked: |
  b² − 4ac = (−3)² − 4(2)(5) = 9 − 40 = −31.
  The discriminant is negative, so the equation has no real roots (the curve never meets the x-axis).
```

```yaml
type: mcq
topic: "A2 Equations & Inequalities"
stem: "The line y = 2x + c is a tangent to the curve y = x² + 4x + 7. Find the value of c."
options:
  - "−6"
  - "3"
  - "6"
  - "7"
answer: 2
marks: 3
misconception: tangent-discriminant-zero
worked: |
  Substitute: x² + 4x + 7 = 2x + c → x² + 2x + (7 − c) = 0.
  A tangent touches the curve once, so this quadratic has equal roots: b² − 4ac = 0.
  2² − 4(1)(7 − c) = 0 → 4 − 28 + 4c = 0 → 4c = 24 → c = 6.
```

```yaml
type: mcq
topic: "A2 Equations & Inequalities"
stem: "Solve the inequality x² − 5x − 14 > 0."
options:
  - "−2 < x < 7"
  - "x < −7 or x > 2"
  - "−7 < x < 2"
  - "x < −2 or x > 7"
answer: 3
marks: 3
misconception: quadratic-inequality-between-or-outside
worked: |
  Factorise: (x − 7)(x + 2) > 0, so the critical values are x = −2 and x = 7.
  The coefficient of x² is positive, so the curve is above the x-axis OUTSIDE the roots.
  Hence x < −2 or x > 7.
```

```yaml
type: mcq
topic: "A2 Equations & Inequalities"
stem: "Solve the inequality 2x² + x − 6 ≤ 0."
options:
  - "−2 ≤ x ≤ 1.5"
  - "x ≤ −2 or x ≥ 1.5"
  - "−1.5 ≤ x ≤ 2"
  - "x ≤ −1.5 or x ≥ 2"
answer: 0
marks: 3
misconception: quadratic-inequality-between-or-outside
worked: |
  Factorise: (2x − 3)(x + 2) ≤ 0, so the critical values are x = −2 and x = 1.5.
  The x² coefficient is positive, so the expression is ≤ 0 BETWEEN the roots.
  Hence −2 ≤ x ≤ 1.5. (The signs stay as ≤ because the original inequality allowed equality.)
```

```yaml
type: mcq
topic: "A2 Equations & Inequalities"
stem: "The equation x² + kx + 4 = 0 has two distinct real roots. Find the range of values of k."
options:
  - "−4 < k < 4"
  - "k < −4 or k > 4"
  - "k > 4 only"
  - "k ≤ −4 or k ≥ 4"
answer: 1
marks: 3
misconception: distinct-roots-strict-inequality
worked: |
  Two distinct real roots means b² − 4ac > 0.
  k² − 4(1)(4) > 0 → k² > 16 → k < −4 or k > 4.
  The inequality is strict (>), so k = ±4 is excluded, those give EQUAL roots, not distinct ones.
```

```yaml
type: mcq
topic: "A2 Equations & Inequalities"
stem: "Solve the simultaneous equations y = x + 3 and x² + y² = 29. One solution is x = −5, y = −2. Find the other solution."
options:
  - "x = 2, y = 3"
  - "x = 5, y = 2"
  - "x = 2, y = 5"
  - "x = −2, y = 1"
answer: 2
marks: 3
misconception: substitute-back-into-linear-equation
worked: |
  Substitute the LINEAR equation into the non-linear one:
  x² + (x + 3)² = 29 → x² + x² + 6x + 9 = 29 → 2x² + 6x − 20 = 0 → x² + 3x − 10 = 0.
  (x + 5)(x − 2) = 0 → x = −5 or x = 2.
  For x = 2: y = x + 3 = 5. So the other solution is (2, 5).
```

```yaml
type: mcq
topic: "A2 Equations & Inequalities"
stem: "Which statement about the curve y = 2x² − 4x + 5 is true?"
options:
  - "y is negative for all real values of x"
  - "The curve cuts the x-axis at two points"
  - "The curve touches the x-axis at exactly one point"
  - "y is positive for all real values of x"
answer: 3
marks: 3
misconception: always-positive-needs-a-and-discriminant
worked: |
  Two things must be checked. First the shape: a = 2 > 0, so the curve opens upwards.
  Then the discriminant: (−4)² − 4(2)(5) = 16 − 40 = −24 < 0, so there are no real roots, the curve never meets the x-axis.
  An upward curve that never meets the x-axis lies entirely above it: y > 0 for all real x.
  (Completing the square agrees: y = 2(x − 1)² + 3, whose minimum value is 3.)
```

```yaml
type: mcq
topic: "A2 Equations & Inequalities"
stem: "The line y = x − 1 does not intersect the curve y = x² + 3x + k. Find the range of values of k."
options:
  - "k > 0"
  - "k < 0"
  - "k > 1"
  - "k < −1"
answer: 0
marks: 3
misconception: no-intersection-discriminant-negative
worked: |
  Set them equal: x² + 3x + k = x − 1 → x² + 2x + (k + 1) = 0.
  No intersection means this quadratic has NO real roots: b² − 4ac < 0.
  2² − 4(1)(k + 1) < 0 → 4 − 4k − 4 < 0 → −4k < 0 → k > 0.
  Dividing by −4 reverses the inequality sign, that is the step most answers lose.
```

```yaml
type: short
topic: "A2 Equations & Inequalities"
stem: "Find the range of values of x for which x(x − 4) < 12."
accepted: ["-2 < x < 6", "-2<x<6", "x > -2 and x < 6"]
marks: 3
misconception: inequality-must-be-zero-on-one-side
worked: |
  Bring everything to one side first: x² − 4x − 12 < 0.
  Factorise: (x − 6)(x + 2) < 0, so the critical values are x = −2 and x = 6.
  The x² coefficient is positive, so the expression is negative BETWEEN the roots: −2 < x < 6.
```

```yaml
type: short
topic: "A2 Equations & Inequalities"
stem: "The equation 2x² + (k + 1)x + 8 = 0 has two equal roots, where k > 0. Find the value of k."
accepted: ["7", "k = 7"]
marks: 3
misconception: equal-roots-discriminant-zero
worked: |
  Equal roots: b² − 4ac = 0 → (k + 1)² − 4(2)(8) = 0 → (k + 1)² = 64.
  k + 1 = 8 or k + 1 = −8 → k = 7 or k = −9.
  Since k > 0, k = 7.
```

```yaml
type: mcq
topic: "A3 Surds"
stem: "Simplify √50 + √18 − √8, giving your answer in the form a√2."
options:
  - "4√2"
  - "6√2"
  - "8√2"
  - "6√10"
answer: 1
marks: 2
misconception: surd-simplify-before-adding
worked: |
  Write each surd with the same irrational part first:
  √50 = √(25 × 2) = 5√2,  √18 = √(9 × 2) = 3√2,  √8 = √(4 × 2) = 2√2.
  So the expression is 5√2 + 3√2 − 2√2 = 6√2.
```

```yaml
type: mcq
topic: "A3 Surds"
stem: "Rationalise the denominator of 6/(√5 − 2)."
options:
  - "6√5 − 12"
  - "(6√5 + 12)/9"
  - "6√5 + 12"
  - "(6√5 + 12)/21"
answer: 2
marks: 3
misconception: conjugate-sign-and-denominator
worked: |
  Multiply top and bottom by the CONJUGATE √5 + 2:
  6(√5 + 2) / [(√5 − 2)(√5 + 2)] = 6(√5 + 2) / (5 − 4) = 6(√5 + 2) / 1.
  So the answer is 6√5 + 12. The denominator becomes 1, not 9 or 21.
```

```yaml
type: mcq
topic: "A3 Surds"
stem: "Expand and simplify (3 + √2)(3 − 2√2)."
options:
  - "9 − 3√2"
  - "13 − 3√2"
  - "5 + 3√2"
  - "5 − 3√2"
answer: 3
marks: 3
misconception: surd-product-root-times-root
worked: |
  Expand every pair: 3(3) + 3(−2√2) + √2(3) + √2(−2√2)
  = 9 − 6√2 + 3√2 − 2(√2 × √2) = 9 − 6√2 + 3√2 − 2(2)
  = 9 − 4 − 3√2 = 5 − 3√2.
  The last term is −4, not −2√2, remember √2 × √2 = 2.
```

```yaml
type: mcq
topic: "A3 Surds"
stem: "Expand (2 + √3)², giving your answer in the form a + b√3."
options:
  - "7 + 4√3"
  - "4 + 4√3"
  - "7 + 2√3"
  - "7 + 4√6"
answer: 0
marks: 2
misconception: square-of-binomial-surd
worked: |
  (2 + √3)² = 2² + 2(2)(√3) + (√3)² = 4 + 4√3 + 3 = 7 + 4√3.
  The middle term is doubled and (√3)² = 3, it does not stay as a surd.
```

```yaml
type: short
topic: "A3 Surds"
stem: "Solve the equation √(2x + 7) = x + 2."
accepted: ["1", "x = 1"]
marks: 4
misconception: surd-equation-check-for-extraneous-roots
worked: |
  Square both sides: 2x + 7 = (x + 2)² = x² + 4x + 4.
  x² + 2x − 3 = 0 → (x + 3)(x − 1) = 0 → x = −3 or x = 1.
  Now CHECK both in the original equation. If x = −3 the right side is −1, but a square root cannot be negative, so x = −3 is rejected.
  If x = 1: √9 = 3 and 1 + 2 = 3. So x = 1 is the only solution.
```

```yaml
type: mcq
topic: "A4 Polynomials & Partial Fractions"
stem: "Find the remainder when f(x) = 2x³ − 5x² + x + 6 is divided by (x − 2)."
options:
  - "−4"
  - "4"
  - "0"
  - "8"
answer: 1
marks: 2
misconception: remainder-theorem-root-sign
worked: |
  By the remainder theorem, the remainder is f(2), the divisor (x − 2) is zero at x = 2.
  f(2) = 2(8) − 5(4) + 2 + 6 = 16 − 20 + 2 + 6 = 4.
```

```yaml
type: mcq
topic: "A4 Polynomials & Partial Fractions"
stem: "(x + 1) is a factor of x³ + ax² − 4x − 6. Find the value of a."
options:
  - "−3"
  - "9"
  - "3"
  - "−9"
answer: 2
marks: 3
misconception: factor-theorem-sign-of-root
worked: |
  (x + 1) is zero at x = −1, so by the factor theorem f(−1) = 0.
  f(−1) = (−1)³ + a(−1)² − 4(−1) − 6 = −1 + a + 4 − 6 = a − 3.
  a − 3 = 0 → a = 3. (Substituting x = +1 instead is the usual slip.)
```

```yaml
type: mcq
topic: "A4 Polynomials & Partial Fractions"
stem: "Find the remainder when 4x³ + 8x² − x + 3 is divided by (2x − 1)."
options:
  - "14"
  - "3"
  - "10"
  - "5"
answer: 3
marks: 3
misconception: linear-divisor-root-not-integer
worked: |
  2x − 1 = 0 gives x = ½, so the remainder is f(½), not f(1).
  f(½) = 4(⅛) + 8(¼) − ½ + 3 = 0.5 + 2 − 0.5 + 3 = 5.
  (Using x = 1 gives 14, the classic error when the divisor is not of the form x − a.)
```

```yaml
type: mcq
topic: "A4 Polynomials & Partial Fractions"
stem: "Factorise x³ − 7x + 6 completely."
options:
  - "(x − 1)(x − 2)(x + 3)"
  - "(x − 1)(x + 2)(x − 3)"
  - "(x + 1)(x − 2)(x + 3)"
  - "(x − 1)(x − 2)(x − 3)"
answer: 0
marks: 3
misconception: cubic-factor-sign-check
worked: |
  Try small factors of the constant 6. f(1) = 1 − 7 + 6 = 0, so (x − 1) is a factor.
  Divide: x³ − 7x + 6 = (x − 1)(x² + x − 6).
  x² + x − 6 = (x + 3)(x − 2).
  So x³ − 7x + 6 = (x − 1)(x − 2)(x + 3). Check by expanding, or note the three roots 1, 2, −3 add to 0, matching the missing x² term.
```

```yaml
type: mcq
topic: "A4 Polynomials & Partial Fractions"
stem: "Solve the equation x³ − 4x² + x + 6 = 0."
options:
  - "x = 1, −2 or −3"
  - "x = −1, 2 or 3"
  - "x = −1, −2 or 3"
  - "x = 1, 2 or 3"
answer: 1
marks: 4
misconception: cubic-roots-sign
worked: |
  f(−1) = −1 − 4 − 1 + 6 = 0, so (x + 1) is a factor.
  Dividing: x³ − 4x² + x + 6 = (x + 1)(x² − 5x + 6) = (x + 1)(x − 2)(x − 3).
  Setting each factor to zero: x = −1, x = 2, x = 3.
  The factor (x + 1) gives the root x = −1, NOT x = +1, flip the sign when you read the root off.
```

```yaml
type: mcq
topic: "A4 Polynomials & Partial Fractions"
stem: "Factorise 8x³ − 27."
options:
  - "(2x − 3)(4x² − 6x + 9)"
  - "(2x + 3)(4x² − 6x + 9)"
  - "(2x − 3)(4x² + 6x + 9)"
  - "(2x − 3)(4x² + 12x + 9)"
answer: 2
marks: 3
misconception: difference-of-cubes-middle-sign
worked: |
  This is a³ − b³ with a = 2x and b = 3, since (2x)³ = 8x³ and 3³ = 27.
  a³ − b³ = (a − b)(a² + ab + b²) = (2x − 3)[(2x)² + (2x)(3) + 3²] = (2x − 3)(4x² + 6x + 9).
  The signs alternate: MINUS in the bracket of two terms, PLUS in the middle of the quadratic bracket.
```

```yaml
type: mcq
topic: "A4 Polynomials & Partial Fractions"
stem: "Factorise 27x³ + 1."
options:
  - "(3x + 1)(9x² + 3x + 1)"
  - "(3x − 1)(9x² + 3x + 1)"
  - "(3x + 1)(3x² − 3x + 1)"
  - "(3x + 1)(9x² − 3x + 1)"
answer: 3
marks: 3
misconception: sum-of-cubes-middle-sign
worked: |
  This is a³ + b³ with a = 3x and b = 1.
  a³ + b³ = (a + b)(a² − ab + b²) = (3x + 1)[(3x)² − (3x)(1) + 1²] = (3x + 1)(9x² − 3x + 1).
  Sum of cubes: PLUS in the linear bracket, MINUS in the middle of the quadratic bracket.
```

```yaml
type: mcq
topic: "A4 Polynomials & Partial Fractions"
stem: "(5x + 1)/((x − 1)(x + 2)) ≡ A/(x − 1) + B/(x + 2). Find the value of A."
options:
  - "2"
  - "3"
  - "6"
  - "−2"
answer: 0
marks: 3
misconception: cover-up-substitutes-wrong-value
worked: |
  Multiply through by (x − 1)(x + 2): 5x + 1 ≡ A(x + 2) + B(x − 1).
  Choose x = 1 to kill the B term: 5(1) + 1 = A(1 + 2) → 6 = 3A → A = 2.
  (Choosing x = −2 would give B: −10 + 1 = B(−3) → B = 3.)
```

```yaml
type: mcq
topic: "A4 Polynomials & Partial Fractions"
stem: "Which is the correct form for the partial fractions of (3x² + 2)/((x − 1)(x + 3)²)?"
options:
  - "A/(x − 1) + B/(x + 3)²"
  - "A/(x − 1) + B/(x + 3) + C/(x + 3)²"
  - "A/(x − 1) + (Bx + C)/(x + 3)²"
  - "(Ax + B)/(x − 1) + C/(x + 3)²"
answer: 1
marks: 2
misconception: repeated-factor-needs-both-powers
worked: |
  A REPEATED linear factor (x + 3)² needs one fraction for EACH power: one over (x + 3) and one over (x + 3)².
  The single factor (x − 1) needs a constant numerator only.
  So the correct form is A/(x − 1) + B/(x + 3) + C/(x + 3)².
  Dropping the B/(x + 3) term leaves too few constants to satisfy the identity.
```

```yaml
type: mcq
topic: "A4 Polynomials & Partial Fractions"
stem: "Which is the correct form for the partial fractions of (2x + 5)/((x + 1)(x² + 4))?"
options:
  - "A/(x + 1) + B/(x² + 4)"
  - "A/(x + 1) + B/(x + 2) + C/(x − 2)"
  - "A/(x + 1) + (Bx + C)/(x² + 4)"
  - "(Ax + B)/(x + 1) + C/(x² + 4)"
answer: 2
marks: 2
misconception: quadratic-factor-needs-linear-numerator
worked: |
  x² + 4 cannot be factorised over the real numbers, so it is an irreducible quadratic factor.
  An irreducible quadratic denominator takes a LINEAR numerator, Bx + C, not a constant.
  The linear factor (x + 1) takes a constant numerator A.
  So the form is A/(x + 1) + (Bx + C)/(x² + 4). Splitting x² + 4 into (x + 2)(x − 2) is wrong, that is x² − 4.
```

```yaml
type: mcq
topic: "A4 Polynomials & Partial Fractions"
stem: "Which of the following is a factor of x³ + 2x² − 5x − 6?"
options:
  - "(x − 3)"
  - "(x − 1)"
  - "(x + 2)"
  - "(x + 3)"
answer: 3
marks: 3
misconception: factor-theorem-test-value
worked: |
  Test each candidate with the factor theorem, the factor (x − a) works only if f(a) = 0.
  f(3) = 27 + 18 − 15 − 6 = 24, so (x − 3) is not a factor.
  f(−3) = −27 + 18 + 15 − 6 = 0, so (x + 3) IS a factor.
  (The full factorisation is (x + 1)(x − 2)(x + 3).)
```

```yaml
type: mcq
topic: "A4 Polynomials & Partial Fractions"
stem: "Find the remainder when 3x³ − 2x + 4 is divided by (x + 2)."
options:
  - "−16"
  - "24"
  - "16"
  - "−8"
answer: 0
marks: 2
misconception: remainder-theorem-wrong-sign
worked: |
  (x + 2) is zero at x = −2, so the remainder is f(−2).
  f(−2) = 3(−8) − 2(−2) + 4 = −24 + 4 + 4 = −16.
  Using x = +2 gives 24, always flip the sign of the number in the bracket.
```

```yaml
type: short
topic: "A4 Polynomials & Partial Fractions"
stem: "Express (7x − 1)/((x − 3)(x + 1)) in partial fractions."
accepted: ["5/(x-3) + 2/(x+1)", "5/(x - 3) + 2/(x + 1)", "2/(x+1) + 5/(x-3)"]
marks: 4
misconception: cover-up-substitutes-wrong-value
worked: |
  Let (7x − 1)/((x − 3)(x + 1)) ≡ A/(x − 3) + B/(x + 1).
  Multiply up: 7x − 1 ≡ A(x + 1) + B(x − 3).
  x = 3: 21 − 1 = A(4) → A = 5.
  x = −1: −7 − 1 = B(−4) → B = 2.
  So the answer is 5/(x − 3) + 2/(x + 1).
```

```yaml
type: short
topic: "A4 Polynomials & Partial Fractions"
stem: "(x − 2) is a factor of 2x³ + ax² − 7x − 6. Find the value of a."
accepted: ["1", "a = 1"]
marks: 3
misconception: factor-theorem-sign-of-root
worked: |
  By the factor theorem, f(2) = 0.
  f(2) = 2(8) + a(4) − 7(2) − 6 = 16 + 4a − 14 − 6 = 4a − 4.
  4a − 4 = 0 → a = 1.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Find the exact value of sin 150°."
options:
  - "−1/2"
  - "1/2"
  - "√3/2"
  - "−√3/2"
answer: 1
marks: 2
misconception: cast-quadrant-sign
worked: |
  150° lies in the second quadrant, where sine is POSITIVE.
  The basic (reference) angle is 180° − 150° = 30°, and sin 30° = ½.
  So sin 150° = ½.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Find the exact value of cos(2π/3), where the angle is in radians."
options:
  - "1/2"
  - "−√3/2"
  - "−1/2"
  - "√3/2"
answer: 2
marks: 2
misconception: radians-vs-degrees-mode
worked: |
  2π/3 radians = 120°, which is in the second quadrant, where cosine is NEGATIVE.
  The basic angle is π − 2π/3 = π/3 (60°), and cos(π/3) = ½.
  So cos(2π/3) = −½. (Your calculator must be in RADIAN mode for this one.)
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Find the exact value of tan 225°."
options:
  - "−1"
  - "√3"
  - "−√3"
  - "1"
answer: 3
marks: 2
misconception: cast-quadrant-sign
worked: |
  225° is in the third quadrant, where TANGENT is positive.
  The basic angle is 225° − 180° = 45°, and tan 45° = 1.
  So tan 225° = +1.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Find the exact value of cos(π/6), where the angle is in radians."
options:
  - "√3/2"
  - "1/2"
  - "√2/2"
  - "1/√3"
answer: 0
marks: 2
misconception: special-angle-exact-values
worked: |
  π/6 radians = 30°.
  From the 30°-60°-90° triangle with sides 1, √3, 2: cos 30° = adjacent/hypotenuse = √3/2.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "State the amplitude and the period of y = 3 sin 2x, where x is in radians."
options:
  - "Amplitude 3, period 2π"
  - "Amplitude 3, period π"
  - "Amplitude 2, period π"
  - "Amplitude 6, period π"
answer: 1
marks: 2
misconception: period-divide-by-b
worked: |
  For y = a sin bx the amplitude is |a| and the period is 2π/b (in radians).
  Here a = 3 and b = 2, so the amplitude is 3 and the period is 2π/2 = π.
  The 2 squeezes the graph horizontally, it does not change the amplitude.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "State the period of y = 4 cos(x/2), where x is in radians."
options:
  - "π"
  - "2π"
  - "4π"
  - "π/2"
answer: 2
marks: 2
misconception: period-divide-by-b
worked: |
  Period of a cos(bx) is 2π/b. Here b = ½.
  Period = 2π ÷ ½ = 4π.
  Halving the angle STRETCHES the graph, so the period gets bigger, not smaller.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "State the period of y = 2 tan 3x, where x is in radians."
options:
  - "2π/3"
  - "π"
  - "2π"
  - "π/3"
answer: 3
marks: 2
misconception: tan-period-is-pi-not-2pi
worked: |
  The tangent graph repeats every π radians, NOT every 2π.
  So the period of tan bx is π/b = π/3.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "How many solutions does the equation sin x = 0.5 have for 0° ≤ x ≤ 360°?"
options:
  - "2"
  - "1"
  - "3"
  - "4"
answer: 0
marks: 2
misconception: interval-find-all-solutions
worked: |
  The basic angle is sin⁻¹(0.5) = 30°.
  Sine is positive in the first and second quadrants, so x = 30° and x = 180° − 30° = 150°.
  Both lie in the interval, so there are 2 solutions. A calculator only gives the first one, you must find the rest yourself.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Solve sin x = −0.5 for 0° ≤ x ≤ 360°."
options:
  - "−30° and 210°"
  - "210° and 330°"
  - "30° and 150°"
  - "150° and 210°"
answer: 1
marks: 3
misconception: negative-sine-quadrants
worked: |
  Work with the BASIC angle first: sin⁻¹(0.5) = 30°.
  Sine is negative in the third and fourth quadrants.
  Third quadrant: x = 180° + 30° = 210°. Fourth quadrant: x = 360° − 30° = 330°.
  A calculator returns −30°, which is outside the required interval, convert it, do not quote it.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Solve cos 2x = 0.5 for 0° ≤ x ≤ 180°."
options:
  - "60° and 300°"
  - "30° only"
  - "30° and 150°"
  - "60° and 150°"
answer: 2
marks: 3
misconception: double-angle-interval-not-doubled
worked: |
  Let u = 2x. As x runs from 0° to 180°, u runs from 0° to 360°, DOUBLE the interval.
  cos u = 0.5 → u = 60° or u = 360° − 60° = 300°.
  Then x = u ÷ 2 = 30° or 150°. Both are inside 0° ≤ x ≤ 180°.
  Forgetting to widen the interval for u loses the second solution.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Solve tan x = √3 for 0 ≤ x ≤ 2π, where x is in radians."
options:
  - "π/3 only"
  - "π/3 and 2π/3"
  - "π/6 and 7π/6"
  - "π/3 and 4π/3"
answer: 3
marks: 3
misconception: tan-second-solution-add-pi
worked: |
  tan⁻¹(√3) = π/3 (60°), which is in the first quadrant.
  Tangent is also positive in the third quadrant, and the tangent graph repeats every π.
  So the second solution is π/3 + π = 4π/3. Both lie in 0 ≤ x ≤ 2π.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Simplify (1 − cos²A)/(sin A cos A), where A is an angle in degrees."
options:
  - "tan A"
  - "cot A"
  - "sin A cos A"
  - "sec A"
answer: 0
marks: 3
misconception: pythagorean-identity-rearrange
worked: |
  From sin²A + cos²A = 1 we get 1 − cos²A = sin²A.
  So the expression = sin²A / (sin A cos A) = sin A / cos A = tan A.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Simplify sec²θ − 1, where θ is an angle in degrees."
options:
  - "cot²θ"
  - "tan²θ"
  - "cosec²θ"
  - "1 − tan²θ"
answer: 1
marks: 2
misconception: sec-tan-identity
worked: |
  The printed identity is sec²θ = 1 + tan²θ.
  Rearranging: sec²θ − 1 = tan²θ.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Simplify (sin 2A)/(2 cos A), where A is an angle in degrees."
options:
  - "cos A"
  - "2 sin A"
  - "sin A"
  - "tan A"
answer: 2
marks: 2
misconception: double-angle-sin2a
worked: |
  sin 2A = 2 sin A cos A.
  So (sin 2A)/(2 cos A) = (2 sin A cos A)/(2 cos A) = sin A.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Given that sin A = 3/5, where A is an acute angle in degrees, find the exact value of cos 2A."
options:
  - "−7/25"
  - "24/25"
  - "18/25"
  - "7/25"
answer: 3
marks: 3
misconception: cos2a-formula-choice
worked: |
  Choose the version of cos 2A written in terms of sine only: cos 2A = 1 − 2 sin²A.
  cos 2A = 1 − 2(3/5)² = 1 − 2(9/25) = 1 − 18/25 = 7/25.
  (24/25 is sin 2A = 2(3/5)(4/5), a different quantity.)
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Given that tan A = 2, where A is an angle in degrees, find the exact value of tan 2A."
options:
  - "−4/3"
  - "4/3"
  - "4/5"
  - "−3/4"
answer: 0
marks: 3
misconception: tan2a-denominator
worked: |
  tan 2A = 2 tan A / (1 − tan²A).
  = 2(2) / (1 − 2²) = 4 / (1 − 4) = 4/(−3) = −4/3.
  The denominator is 1 − tan²A, so it can be negative, do not force a positive answer.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Use the expansion of sin(A + B) to find the exact value of sin 75°."
options:
  - "(√6 − √2)/4"
  - "(√6 + √2)/4"
  - "(√2 + 1)/2"
  - "(√6 + √2)/2"
answer: 1
marks: 3
misconception: compound-angle-expansion
worked: |
  75° = 45° + 30°, so sin 75° = sin 45° cos 30° + cos 45° sin 30°.
  = (√2/2)(√3/2) + (√2/2)(1/2) = √6/4 + √2/4 = (√6 + √2)/4.
  The expansion of sin(A + B) uses a PLUS between the two products; the minus version belongs to sin(A − B) (which gives sin 15°).
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Express 3 cos θ + 4 sin θ in the form R cos(θ − α), where R > 0 and 0° < α < 90°."
options:
  - "5 cos(θ − 36.9°)"
  - "7 cos(θ − 53.1°)"
  - "5 cos(θ − 53.1°)"
  - "5 cos(θ + 53.1°)"
answer: 2
marks: 4
misconception: r-formula-alpha-ratio
worked: |
  Expand the target form: R cos(θ − α) = R cos θ cos α + R sin θ sin α.
  Compare coefficients: R cos α = 3 and R sin α = 4.
  R = √(3² + 4²) = √25 = 5 (add the SQUARES, not the numbers).
  tan α = 4/3 → α = 53.13...° = 53.1° (1 d.p.).
  So 3 cos θ + 4 sin θ = 5 cos(θ − 53.1°).
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Find the maximum value of 5 sin θ − 12 cos θ, where θ is an angle in degrees."
options:
  - "17"
  - "7"
  - "−13"
  - "13"
answer: 3
marks: 3
misconception: r-formula-max-is-r
worked: |
  Write it as R sin(θ − α) with R = √(5² + 12²) = √169 = 13.
  The sine of anything has a greatest value of 1, so the greatest value of the whole expression is R = 13.
  17 comes from adding 5 + 12 instead of using √(a² + b²).
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Find the minimum value of 8 + 3 cos θ + 4 sin θ, where θ is an angle in degrees."
options:
  - "3"
  - "13"
  - "8"
  - "−5"
answer: 0
marks: 3
misconception: r-formula-min-shifted
worked: |
  3 cos θ + 4 sin θ = R cos(θ − α) with R = √(3² + 4²) = 5.
  So the expression is 8 + 5 cos(θ − α), and cos(θ − α) has a least value of −1.
  Minimum = 8 + 5(−1) = 8 − 5 = 3. The constant 8 shifts the whole graph up, it must not be dropped.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "It is given that 3 cos θ + 4 sin θ = 5 cos(θ − 53.1°). For 0° ≤ θ ≤ 360°, find the value of θ at which the expression is greatest."
options:
  - "36.9°"
  - "53.1°"
  - "0°"
  - "306.9°"
answer: 1
marks: 3
misconception: r-formula-max-position
worked: |
  5 cos(θ − 53.1°) is greatest when cos(θ − 53.1°) = 1.
  cos(anything) = 1 when the angle inside is 0°, so θ − 53.1° = 0° → θ = 53.1°.
  The maximum VALUE is 5; the value of θ that produces it is α itself.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Solve 2 sin x cos x = 0.5 for 0° ≤ x ≤ 90°."
options:
  - "30° and 150°"
  - "15° only"
  - "15° and 75°"
  - "30° and 75°"
answer: 2
marks: 3
misconception: double-angle-halve-solutions
worked: |
  2 sin x cos x is exactly sin 2x, so the equation is sin 2x = 0.5.
  Let u = 2x; as x goes 0° → 90°, u goes 0° → 180°.
  sin u = 0.5 → u = 30° or 150°.
  x = u ÷ 2 = 15° or 75°. Dividing by 2 at the END is what gives both answers.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Given that cosec θ = 2 and 0° < θ < 90°, find θ."
options:
  - "60°"
  - "45°"
  - "15°"
  - "30°"
answer: 3
marks: 2
misconception: reciprocal-trig-inverse
worked: |
  cosec θ = 1/sin θ, so sin θ = 1/2.
  For 0° < θ < 90°, sin⁻¹(0.5) = 30°.
  There is no cosec⁻¹ button, always convert to sine first.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Simplify (cos A)/(1 − sin²A), where A is an angle in degrees."
options:
  - "sec A"
  - "cos A"
  - "cosec A"
  - "tan A"
answer: 0
marks: 3
misconception: identity-one-minus-sin-squared
worked: |
  sin²A + cos²A = 1, so 1 − sin²A = cos²A.
  The expression = cos A / cos²A = 1/cos A = sec A.
```

```yaml
type: short
topic: "G1 Trigonometry"
stem: "Solve 3 tan x = 2 for 0° ≤ x ≤ 360°, giving your answers in degrees to 1 decimal place."
accepted: ["33.7 and 213.7", "33.7, 213.7", "x = 33.7, 213.7", "213.7 and 33.7"]
marks: 3
misconception: tan-second-solution-add-pi
worked: |
  tan x = 2/3, so the basic angle is tan⁻¹(2/3) = 33.69...° = 33.7°.
  Tangent is positive in the first and third quadrants, and the tan graph repeats every 180°.
  x = 33.7° or x = 33.7° + 180° = 213.7°.
  Angles in degrees are given to 1 d.p. unless told otherwise.
```

```yaml
type: short
topic: "G1 Trigonometry"
stem: "The expression 7 sin θ − 24 cos θ is written in the form R sin(θ − α), where R > 0 and 0° < α < 90°. State the value of R."
accepted: ["25", "R = 25"]
marks: 2
misconception: r-formula-r-is-hypotenuse
worked: |
  R = √(a² + b²) where a and b are the two coefficients: R = √(7² + 24²) = √(49 + 576) = √625 = 25.
  R is the hypotenuse of the 7-24-25 right-angled triangle; it is never 7 + 24.
```

```yaml
type: short
topic: "G1 Trigonometry"
stem: "Solve 2 cos²x − cos x − 1 = 0 for 0° < x < 360°."
accepted: ["120 and 240", "120, 240", "x = 120, 240", "240 and 120"]
marks: 4
misconception: quadratic-in-cos-both-roots
worked: |
  Treat it as a quadratic in cos x: (2 cos x + 1)(cos x − 1) = 0.
  So cos x = −½ or cos x = 1.
  cos x = −½: the basic angle is 60°, cosine is negative in the second and third quadrants → x = 120° or 240°.
  cos x = 1: x = 0° or 360°, but the interval is STRICT (0° < x < 360°), so both are rejected.
  The solutions are x = 120° and x = 240°.
```

```yaml
type: short
topic: "G1 Trigonometry"
stem: "Simplify (1 + tan²θ)/cosec²θ, where θ is an angle in degrees, giving your answer as a single trigonometric function."
accepted: ["tan^2 theta", "(tan theta)^2", "tan^2(theta)", "tan squared theta"]
marks: 3
misconception: sec-tan-identity
worked: |
  1 + tan²θ = sec²θ, and 1/cosec²θ = sin²θ.
  So the expression = sec²θ × sin²θ = sin²θ / cos²θ = tan²θ.
```

```yaml
type: short
topic: "G1 Trigonometry"
stem: "Given that 5 cos θ + 12 sin θ = R sin(θ + α), where R > 0 and 0° < α < 90°, find R and α (give α to 1 decimal place)."
accepted: ["R = 13, alpha = 22.6", "13 and 22.6", "13, 22.6", "R = 13 and alpha = 22.6 degrees"]
marks: 4
misconception: r-formula-alpha-ratio
worked: |
  Expand: R sin(θ + α) = R sin θ cos α + R cos θ sin α.
  Compare coefficients: R cos α = 12 (the sin θ term) and R sin α = 5 (the cos θ term).
  R = √(5² + 12²) = 13.
  tan α = 5/12 → α = 22.61...° = 22.6°.
  Note which coefficient goes on top: for the sin(θ + α) form, tan α = (cos θ coefficient)/(sin θ coefficient).
```

```yaml
type: mcq
topic: "G2 Coordinate Geometry"
stem: "Find the gradient of a line perpendicular to the line 3x + 2y = 7."
options:
  - "−2/3"
  - "2/3"
  - "3/2"
  - "−3/2"
answer: 1
marks: 2
misconception: perpendicular-negative-reciprocal
worked: |
  Rearrange to y = mx + c: 2y = −3x + 7 → y = −(3/2)x + 7/2, so the gradient is −3/2.
  For perpendicular lines m₁m₂ = −1, so the perpendicular gradient is −1 ÷ (−3/2) = 2/3.
  Flip the fraction AND change the sign, doing only one of the two is the usual error.
```

```yaml
type: mcq
topic: "G2 Coordinate Geometry"
stem: "Find the midpoint of A(−3, 5) and B(7, −1)."
options:
  - "(5, 3)"
  - "(2, 3)"
  - "(2, 2)"
  - "(−5, 3)"
answer: 2
marks: 2
misconception: midpoint-average-not-difference
worked: |
  Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2).
  x: (−3 + 7)/2 = 4/2 = 2.  y: (5 + (−1))/2 = 4/2 = 2.
  So the midpoint is (2, 2). Midpoint AVERAGES the coordinates; subtracting them gives the distance components instead.
```

```yaml
type: mcq
topic: "G2 Coordinate Geometry"
stem: "The vertices of a triangle are (0, 0), (4, 1) and (2, 5). Find its area."
options:
  - "18"
  - "10"
  - "4.5"
  - "9"
answer: 3
marks: 3
misconception: shoelace-forgot-to-halve
worked: |
  Use the shoelace formula, listing the points anticlockwise and repeating the first point:
  Area = ½ |(0×1 − 4×0) + (4×5 − 2×1) + (2×0 − 0×5)|
  = ½ |0 + (20 − 2) + 0| = ½ × 18 = 9.
  Answer 18 is the shoelace sum before halving, the ½ is not optional.
```

```yaml
type: mcq
topic: "G2 Coordinate Geometry"
stem: "Find the equation of the line through (2, −1) that is parallel to y = 3x + 4."
options:
  - "y = 3x − 7"
  - "y = 3x + 5"
  - "y = −x/3 − 1/3"
  - "y = 3x − 1"
answer: 0
marks: 3
misconception: parallel-same-gradient-substitute
worked: |
  Parallel lines have the SAME gradient, so m = 3 and the line is y = 3x + c.
  It passes through (2, −1): −1 = 3(2) + c → c = −1 − 6 = −7.
  So y = 3x − 7. (y = 3x + 5 comes from adding instead of subtracting.)
```

```yaml
type: mcq
topic: "G2 Coordinate Geometry"
stem: "Find the equation of the perpendicular bisector of the points A(1, 2) and B(5, 10)."
options:
  - "2x + y = 12"
  - "x + 2y = 15"
  - "y = 2x"
  - "x − 2y = −9"
answer: 1
marks: 4
misconception: perpendicular-bisector-uses-midpoint
worked: |
  Two things are needed: the MIDPOINT of AB and the PERPENDICULAR gradient.
  Midpoint = ((1 + 5)/2, (2 + 10)/2) = (3, 6).
  Gradient of AB = (10 − 2)/(5 − 1) = 8/4 = 2, so the perpendicular gradient is −½.
  y − 6 = −½(x − 3) → 2y − 12 = −x + 3 → x + 2y = 15.
```

```yaml
type: short
topic: "G2 Coordinate Geometry"
stem: "A parallelogram has vertices A(1, 1), B(5, 3), C(4, 7) and D(0, 5), taken in order. Find its area."
accepted: ["18", "18 units^2", "Area = 18"]
marks: 3
misconception: shoelace-forgot-to-halve
worked: |
  Use the shoelace formula around A → B → C → D → A:
  (1×3 − 5×1) + (5×7 − 4×3) + (4×5 − 0×7) + (0×1 − 1×5)
  = (3 − 5) + (35 − 12) + (20 − 0) + (0 − 5) = −2 + 23 + 20 − 5 = 36.
  Area = ½ |36| = 18 square units.
```

```yaml
type: mcq
topic: "G2 Circles"
stem: "State the centre and the radius of the circle (x − 3)² + (y + 2)² = 25."
options:
  - "Centre (−3, 2), radius 5"
  - "Centre (3, −2), radius 25"
  - "Centre (3, −2), radius 5"
  - "Centre (−3, 2), radius 25"
answer: 2
marks: 2
misconception: circle-centre-sign
worked: |
  Compare with (x − a)² + (y − b)² = r², whose centre is (a, b) and radius r.
  (y + 2)² is (y − (−2))², so b = −2. Hence the centre is (3, −2).
  r² = 25 → r = 5. The 25 is the radius SQUARED, not the radius.
```

```yaml
type: mcq
topic: "G2 Circles"
stem: "Find the radius of the circle x² + y² − 6x + 8y − 11 = 0."
options:
  - "√11"
  - "36"
  - "5"
  - "6"
answer: 3
marks: 3
misconception: general-form-radius-formula
worked: |
  Compare with x² + y² + 2gx + 2fy + c = 0: 2g = −6 → g = −3; 2f = 8 → f = 4; c = −11.
  Centre is (−g, −f) = (3, −4) and r = √(g² + f² − c).
  r = √(9 + 16 − (−11)) = √(9 + 16 + 11) = √36 = 6.
  The c is SUBTRACTED, so a negative c increases the radius.
```

```yaml
type: mcq
topic: "G2 Circles"
stem: "A(1, 2) and B(7, 10) are the ends of a diameter of a circle. Find the equation of the circle."
options:
  - "(x − 4)² + (y − 6)² = 25"
  - "(x − 4)² + (y − 6)² = 100"
  - "(x + 4)² + (y + 6)² = 25"
  - "(x − 1)² + (y − 2)² = 25"
answer: 0
marks: 4
misconception: diameter-not-radius
worked: |
  The centre is the midpoint of the diameter: ((1 + 7)/2, (2 + 10)/2) = (4, 6).
  The diameter has length √((7 − 1)² + (10 − 2)²) = √(36 + 64) = √100 = 10, so the radius is 5.
  Equation: (x − 4)² + (y − 6)² = 5² = 25.
  Using 10² = 100 is the trap, halve the diameter first.
```

```yaml
type: mcq
topic: "G2 Circles"
stem: "The circle C has equation x² + y² = 25. Where does the point (5, 1) lie in relation to C?"
options:
  - "On the circle"
  - "Outside the circle"
  - "Inside the circle"
  - "At the centre"
answer: 1
marks: 2
misconception: point-circle-position
worked: |
  Substitute the point into the left-hand side: 5² + 1² = 25 + 1 = 26.
  26 > 25, so the point is further from the centre (0, 0) than the radius 5, it lies OUTSIDE the circle.
  (Equal would mean on the circle; less would mean inside.)
```

```yaml
type: mcq
topic: "G2 Circles"
stem: "Find the equation of the circle with centre (2, −1) that passes through the point (6, 2)."
options:
  - "(x − 2)² + (y − 1)² = 25"
  - "(x + 2)² + (y − 1)² = 25"
  - "(x − 2)² + (y + 1)² = 25"
  - "(x − 2)² + (y + 1)² = 5"
answer: 2
marks: 3
misconception: radius-squared-not-radius
worked: |
  The radius is the distance from the centre to the given point:
  r = √((6 − 2)² + (2 − (−1))²) = √(16 + 9) = √25 = 5.
  The equation is (x − 2)² + (y − (−1))² = r², i.e. (x − 2)² + (y + 1)² = 25.
  The right-hand side is r² = 25, not r = 5.
```

```yaml
type: mcq
topic: "G2 Circles"
stem: "The line y = 3 meets the circle x² + y² − 4x − 6y + 9 = 0. Find the x-coordinates of the two points of intersection."
options:
  - "2 and 4"
  - "0 and 2"
  - "−2 and 2"
  - "0 and 4"
answer: 3
marks: 4
misconception: substitute-line-into-circle
worked: |
  Substitute y = 3 into the circle equation:
  x² + 9 − 4x − 18 + 9 = 0 → x² − 4x = 0 → x(x − 4) = 0.
  So x = 0 or x = 4.
  (Check: the centre is (2, 3) and r = √(4 + 9 − 9) = 2, so the line y = 3 passes through the centre and cuts the circle at x = 2 ± 2.)
```

```yaml
type: short
topic: "G2 Circles"
stem: "Find the radius of the circle x² + y² + 10x − 2y + 17 = 0."
accepted: ["3", "r = 3", "radius 3"]
marks: 3
misconception: general-form-radius-formula
worked: |
  Compare with x² + y² + 2gx + 2fy + c = 0: 2g = 10 → g = 5; 2f = −2 → f = −1; c = 17.
  r = √(g² + f² − c) = √(25 + 1 − 17) = √9 = 3.
  (By completing the square: (x + 5)² + (y − 1)² = 9.)
```

```yaml
type: mcq
topic: "C1 Differentiation"
stem: "Differentiate y = x⁵ − 3x² + 7 with respect to x."
options:
  - "5x⁴ − 6x"
  - "5x⁴ − 6x + 7"
  - "5x⁴ − 3x"
  - "x⁴ − 6x"
answer: 0
marks: 2
misconception: derivative-of-constant-is-zero
worked: |
  Differentiate term by term using d/dx(xⁿ) = n·xⁿ⁻¹.
  x⁵ → 5x⁴;  −3x² → −6x;  the constant 7 → 0.
  So dy/dx = 5x⁴ − 6x. A constant has zero gradient, so it never survives differentiation.
```

```yaml
type: mcq
topic: "C1 Differentiation"
stem: "Differentiate y = 4/x³ with respect to x."
options:
  - "12/x⁴"
  - "−12/x⁴"
  - "−12/x²"
  - "−4/(3x⁴)"
answer: 1
marks: 3
misconception: negative-index-differentiation
worked: |
  Rewrite with a negative index first: y = 4x⁻³.
  dy/dx = 4 × (−3)x⁻⁴ = −12x⁻⁴ = −12/x⁴.
  Subtracting 1 from −3 gives −4, so the power in the denominator goes UP, and the sign becomes negative.
```

```yaml
type: mcq
topic: "C1 Differentiation"
stem: "Differentiate y = √x with respect to x."
options:
  - "2√x"
  - "√x/2"
  - "1/(2√x)"
  - "1/√x"
answer: 2
marks: 2
misconception: fractional-index-power-rule
worked: |
  Rewrite as y = x^½.
  dy/dx = ½x^(−½) = 1/(2x^½) = 1/(2√x).
  Subtract 1 from ½ to get −½, the index becomes negative, which sends the x to the denominator.
```

```yaml
type: mcq
topic: "C1 Differentiation"
stem: "Differentiate y = (3x − 1)⁵ with respect to x."
options:
  - "5(3x − 1)⁴"
  - "15(3x − 1)⁵"
  - "3(3x − 1)⁴"
  - "15(3x − 1)⁴"
answer: 3
marks: 2
misconception: dropped-chain-rule-factor
worked: |
  Chain rule: differentiate the outside, then MULTIPLY by the derivative of the inside.
  Outside: 5(3x − 1)⁴. Inside: d/dx(3x − 1) = 3.
  dy/dx = 5(3x − 1)⁴ × 3 = 15(3x − 1)⁴.
  Answer 5(3x − 1)⁴ is what you get if the × 3 is forgotten, the single most common calculus slip.
```

```yaml
type: mcq
topic: "C1 Differentiation"
stem: "Differentiate y = (2x² + 1)³ with respect to x."
options:
  - "12x(2x² + 1)²"
  - "3(2x² + 1)²"
  - "6x(2x² + 1)²"
  - "12x(2x² + 1)³"
answer: 0
marks: 3
misconception: dropped-chain-rule-factor
worked: |
  Chain rule: outside gives 3(2x² + 1)²; the inside 2x² + 1 differentiates to 4x.
  dy/dx = 3(2x² + 1)² × 4x = 12x(2x² + 1)².
  The inside is NOT just x here, so the multiplier is 4x, not 1.
```

```yaml
type: mcq
topic: "C1 Differentiation"
stem: "Differentiate y = √(4x + 5) with respect to x."
options:
  - "1/(2√(4x + 5))"
  - "2/√(4x + 5)"
  - "4/√(4x + 5)"
  - "2√(4x + 5)"
answer: 1
marks: 3
misconception: chain-rule-with-square-root
worked: |
  Write y = (4x + 5)^½.
  dy/dx = ½(4x + 5)^(−½) × 4  (the × 4 is the derivative of the inside)
  = 4 / (2√(4x + 5)) = 2/√(4x + 5).
  Answer 1/(2√(4x + 5)) is the version with the chain-rule factor left out.
```

```yaml
type: mcq
topic: "C1 Differentiation"
stem: "Differentiate y = x²(2x − 3)⁴ with respect to x, giving your answer in factorised form."
options:
  - "8x²(2x − 3)³"
  - "2x(2x − 3)⁴"
  - "2x(2x − 3)³(6x − 3)"
  - "2x(2x − 3)³(2x − 3)"
answer: 2
marks: 4
misconception: product-rule-omitted
worked: |
  This is a PRODUCT: u = x² and v = (2x − 3)⁴.
  u' = 2x;  v' = 4(2x − 3)³ × 2 = 8(2x − 3)³ (chain rule inside the product).
  dy/dx = u'v + uv' = 2x(2x − 3)⁴ + 8x²(2x − 3)³.
  Factor out 2x(2x − 3)³: dy/dx = 2x(2x − 3)³[(2x − 3) + 4x] = 2x(2x − 3)³(6x − 3).
  Differentiating each factor separately and multiplying (8x²(2x − 3)³) is not the product rule.
```

```yaml
type: mcq
topic: "C1 Differentiation"
stem: "Differentiate y = (2x + 1)/(x − 3) with respect to x."
options:
  - "7/(x − 3)²"
  - "2/(x − 3)²"
  - "−5/(x − 3)²"
  - "−7/(x − 3)²"
answer: 3
marks: 3
misconception: quotient-rule-numerator-order
worked: |
  Quotient rule: (u/v)' = (u'v − uv')/v², with u = 2x + 1, v = x − 3, u' = 2, v' = 1.
  Numerator: 2(x − 3) − (2x + 1)(1) = 2x − 6 − 2x − 1 = −7.
  dy/dx = −7/(x − 3)².
  The order u'v − uv' matters: reversing it flips the sign to +7.
```

```yaml
type: mcq
topic: "C1 Differentiation"
stem: "Differentiate y = x/(x² + 1) with respect to x."
options:
  - "(1 − x²)/(x² + 1)²"
  - "(x² − 1)/(x² + 1)²"
  - "1/(2x)"
  - "(1 + x²)/(x² + 1)²"
answer: 0
marks: 3
misconception: quotient-rule-numerator-order
worked: |
  u = x, v = x² + 1, so u' = 1 and v' = 2x.
  dy/dx = [1(x² + 1) − x(2x)] / (x² + 1)² = (x² + 1 − 2x²)/(x² + 1)² = (1 − x²)/(x² + 1)².
  Keep the denominator SQUARED and subtract in the right order.
```

```yaml
type: mcq
topic: "C1 Differentiation"
stem: "Find the gradient of the curve y = x³ − 4x at the point where x = 2."
options:
  - "4"
  - "8"
  - "0"
  - "12"
answer: 1
marks: 2
misconception: gradient-substitute-into-derivative
worked: |
  The gradient function is dy/dx = 3x² − 4.
  At x = 2: dy/dx = 3(4) − 4 = 12 − 4 = 8.
  Substitute into the DERIVATIVE, not into y (y(2) = 0, which is the y-coordinate, not the gradient).
```

```yaml
type: mcq
topic: "C1 Differentiation"
stem: "Find the equation of the tangent to the curve y = x² − 3x at the point (4, 4)."
options:
  - "y = 5x + 4"
  - "y = 4x − 12"
  - "y = 5x − 16"
  - "y = −x/5 + 24/5"
answer: 2
marks: 4
misconception: tangent-equation-point-gradient
worked: |
  dy/dx = 2x − 3. At x = 4 the gradient is 2(4) − 3 = 5.
  Tangent through (4, 4): y − 4 = 5(x − 4) → y = 5x − 20 + 4 = 5x − 16.
  Check: at x = 4, y = 20 − 16 = 4, the tangent really does pass through the point.
```

```yaml
type: mcq
topic: "C1 Differentiation"
stem: "Find the equation of the normal to the curve y = x² at the point (1, 1)."
options:
  - "y = 2x − 1"
  - "2x + y = 3"
  - "x − 2y = −1"
  - "x + 2y = 3"
answer: 3
marks: 4
misconception: normal-gradient-negative-reciprocal
worked: |
  dy/dx = 2x, so the tangent gradient at x = 1 is 2.
  The normal is perpendicular: gradient = −1/2.
  y − 1 = −½(x − 1) → 2y − 2 = −x + 1 → x + 2y = 3.
  (y = 2x − 1 is the TANGENT, read the question.)
```

```yaml
type: mcq
topic: "C1 Differentiation"
stem: "Find the x-coordinates of the stationary points of y = x³ − 3x²."
options:
  - "0 and 2"
  - "0 and −2"
  - "2 only"
  - "1 and 3"
answer: 0
marks: 3
misconception: stationary-set-derivative-zero
worked: |
  Stationary points occur where dy/dx = 0.
  dy/dx = 3x² − 6x = 3x(x − 2) = 0 → x = 0 or x = 2.
  Set the FIRST derivative to zero, the second derivative is only used afterwards, to test the nature.
```

```yaml
type: mcq
topic: "C1 Differentiation"
stem: "For the curve y = x³ − 3x², determine the nature of the stationary point at x = 2."
options:
  - "A maximum point"
  - "A minimum point"
  - "A stationary point of inflexion"
  - "It cannot be determined"
answer: 1
marks: 3
misconception: second-derivative-test-sign
worked: |
  dy/dx = 3x² − 6x, so d²y/dx² = 6x − 6.
  At x = 2: d²y/dx² = 12 − 6 = 6, which is POSITIVE.
  A positive second derivative means the curve is concave up there, so it is a MINIMUM point.
  (At the other stationary point x = 0, d²y/dx² = −6 < 0, a maximum.)
```

```yaml
type: mcq
topic: "C1 Differentiation"
stem: "The curve y = x³ − 12x + 5 has a maximum point. Find the maximum value of y."
options:
  - "−11"
  - "5"
  - "21"
  - "16"
answer: 2
marks: 4
misconception: max-min-which-stationary-point
worked: |
  dy/dx = 3x² − 12 = 0 → x² = 4 → x = 2 or x = −2.
  d²y/dx² = 6x. At x = −2 this is −12 < 0, so x = −2 gives the MAXIMUM.
  y(−2) = (−8) − 12(−2) + 5 = −8 + 24 + 5 = 21.
  (x = 2 gives d²y/dx² = 12 > 0 and y = −11, the minimum.)
```

```yaml
type: mcq
topic: "C1 Differentiation"
stem: "The curve y = 2x + 8/x², for x > 0, has one stationary point. Find its x-coordinate."
options:
  - "4"
  - "1"
  - "√2"
  - "2"
answer: 3
marks: 3
misconception: negative-index-differentiation
worked: |
  Rewrite: y = 2x + 8x⁻².
  dy/dx = 2 − 16x⁻³ = 2 − 16/x³.
  Set to zero: 2 = 16/x³ → x³ = 8 → x = 2.
```

```yaml
type: mcq
topic: "C1 Differentiation"
stem: "For f(x) = x³ + 3x² + 3x + 7 it can be shown that f'(x) = 3(x + 1)². Describe the point on the curve where x = −1."
options:
  - "A stationary point of inflexion"
  - "A maximum point"
  - "A minimum point"
  - "It is not a stationary point"
answer: 0
marks: 3
misconception: second-derivative-zero-inconclusive
worked: |
  f'(−1) = 3(0)² = 0, so x = −1 IS a stationary point.
  f''(x) = 6(x + 1), and f''(−1) = 0, so the second-derivative test gives no decision.
  Look at the SIGN of f'(x) either side: 3(x + 1)² is positive on both sides (a square is never negative).
  The gradient is positive → 0 → positive, so the curve keeps rising: it is a stationary point of inflexion.
```

```yaml
type: mcq
topic: "C1 Differentiation"
stem: "Given that y = x³ and that x is increasing at 0.5 units per second, find dy/dt when x = 2."
options:
  - "12"
  - "6"
  - "1.5"
  - "24"
answer: 1
marks: 3
misconception: connected-rates-chain
worked: |
  Connected rates: dy/dt = dy/dx × dx/dt.
  dy/dx = 3x² = 3(2)² = 12 when x = 2, and dx/dt = 0.5.
  dy/dt = 12 × 0.5 = 6 units per second.
  Answer 12 is dy/dx alone, the given rate must still be multiplied in.
```

```yaml
type: mcq
topic: "C1 Differentiation"
stem: "The radius of a circle increases at 0.2 cm per second. The area is A = πr². Find the rate of increase of the area when the radius is 5 cm."
options:
  - "10π cm² per second"
  - "5π cm² per second"
  - "2π cm² per second"
  - "0.4π cm² per second"
answer: 2
marks: 3
misconception: connected-rates-chain
worked: |
  dA/dt = dA/dr × dr/dt.
  dA/dr = 2πr = 2π(5) = 10π when r = 5.
  dA/dt = 10π × 0.2 = 2π cm² per second (about 6.28 cm² per second).
  Answer 10π is dA/dr, it is a gradient, not a rate in time.
```

```yaml
type: mcq
topic: "C1 Differentiation"
stem: "The side of a cube increases at 0.1 cm per second. Find the rate of increase of its volume when the side is 4 cm."
options:
  - "1.2 cm³ per second"
  - "6.4 cm³ per second"
  - "19.2 cm³ per second"
  - "4.8 cm³ per second"
answer: 3
marks: 3
misconception: connected-rates-chain
worked: |
  Let the side be x, so the volume is V = x³.
  dV/dt = dV/dx × dx/dt = 3x² × 0.1.
  When x = 4: dV/dt = 3(16)(0.1) = 4.8 cm³ per second.
```

```yaml
type: mcq
topic: "C1 Differentiation"
stem: "Find d²y/dx² for y = 3x⁴ − 2x²."
options:
  - "36x² − 4"
  - "12x³ − 4x"
  - "36x²"
  - "12x² − 4"
answer: 0
marks: 2
misconception: second-derivative-differentiate-twice
worked: |
  First derivative: dy/dx = 12x³ − 4x.
  Differentiate again: d²y/dx² = 36x² − 4.
  12x³ − 4x is only the FIRST derivative, the question asks for the second.
```

```yaml
type: short
topic: "C1 Differentiation"
stem: "Differentiate y = (5 − 2x)⁶ with respect to x."
accepted: ["-12(5-2x)^5", "-12(5 - 2x)^5", "-12(5-2x)**5"]
marks: 2
misconception: dropped-chain-rule-factor
worked: |
  Chain rule: bring the power down, reduce it by 1, then multiply by the derivative of the inside.
  The inside is 5 − 2x, whose derivative is −2.
  dy/dx = 6(5 − 2x)⁵ × (−2) = −12(5 − 2x)⁵.
  The answer is negative because the inside has a negative gradient.
```

```yaml
type: short
topic: "C1 Differentiation"
stem: "Find the x-coordinate of the stationary point of the curve y = x² − 10x + 3."
accepted: ["5", "x = 5"]
marks: 2
misconception: stationary-set-derivative-zero
worked: |
  dy/dx = 2x − 10.
  Set dy/dx = 0: 2x − 10 = 0 → x = 5.
  (d²y/dx² = 2 > 0, so it is a minimum point, completing the square gives the same vertex, x = 5.)
```

```yaml
type: short
topic: "C1 Differentiation"
stem: "The curve y = x + 4/x, for x > 0, has a minimum point. Find the y-coordinate of this minimum point."
accepted: ["4", "y = 4"]
marks: 4
misconception: stationary-point-y-value-needed
worked: |
  Write y = x + 4x⁻¹, so dy/dx = 1 − 4x⁻² = 1 − 4/x².
  dy/dx = 0 → x² = 4 → x = 2 (x > 0 is given, so x = −2 is rejected).
  d²y/dx² = 8/x³ = 1 > 0 at x = 2, confirming a minimum.
  The question wants the y-coordinate: y = 2 + 4/2 = 4.
```

```yaml
type: short
topic: "C1 Differentiation"
stem: "Find the gradient of the normal to the curve y = 3x² − 5x at the point where x = 1."
accepted: ["-1", "minus 1", "m = -1"]
marks: 3
misconception: normal-gradient-negative-reciprocal
worked: |
  dy/dx = 6x − 5. At x = 1 the TANGENT gradient is 6(1) − 5 = 1.
  The normal is perpendicular to the tangent, so its gradient is −1 ÷ 1 = −1.
  Quoting 1 gives the tangent gradient, the question asked for the normal.
```

```yaml
type: mcq
topic: "C1 Integration"
stem: "Find the integral of 6x² − 4x + 1 with respect to x."
options:
  - "2x³ − 2x² + x"
  - "2x³ − 2x² + x + C"
  - "12x − 4 + C"
  - "2x³ − 4x² + x + C"
answer: 1
marks: 2
misconception: forgot-plus-c
worked: |
  Integrate term by term: add 1 to each index and divide by the new index.
  6x² → 6x³/3 = 2x³;  −4x → −4x²/2 = −2x²;  1 → x.
  So the integral is 2x³ − 2x² + x + C.
  An INDEFINITE integral must carry the arbitrary constant + C.
  Check by differentiating back: d/dx(2x³ − 2x² + x + C) = 6x² − 4x + 1. ✓
```

```yaml
type: mcq
topic: "C1 Integration"
stem: "Find the integral of √x with respect to x."
options:
  - "(3/2)x√x + C"
  - "2√x + C"
  - "(2/3)x√x + C"
  - "½√x + C"
answer: 2
marks: 3
misconception: fractional-index-integration
worked: |
  Write √x = x^½. Add 1 to the index: ½ + 1 = 3/2. Then divide by 3/2 (i.e. multiply by 2/3).
  Integral = x^(3/2) ÷ (3/2) + C = (2/3)x^(3/2) + C = (2/3)x√x + C.
  Check by differentiating: d/dx[(2/3)x^(3/2)] = (2/3)(3/2)x^½ = √x. ✓
```

```yaml
type: mcq
topic: "C1 Integration"
stem: "Find the integral of 1/x³ with respect to x."
options:
  - "1/(2x²) + C"
  - "−3/x⁴ + C"
  - "−1/(4x⁴) + C"
  - "−1/(2x²) + C"
answer: 3
marks: 3
misconception: negative-index-integration
worked: |
  Rewrite as x⁻³. Add 1 to the index: −3 + 1 = −2. Divide by the new index −2.
  Integral = x⁻²/(−2) + C = −1/(2x²) + C.
  Dividing by a NEGATIVE new index is what produces the minus sign.
  Check: d/dx[−½x⁻²] = −½(−2)x⁻³ = x⁻³ = 1/x³. ✓
```

```yaml
type: mcq
topic: "C1 Integration"
stem: "Find the integral of (2x + 3)⁴ with respect to x."
options:
  - "(2x + 3)⁵/10 + C"
  - "(2x + 3)⁵/5 + C"
  - "(2x + 3)⁵/2 + C"
  - "8(2x + 3)³ + C"
answer: 0
marks: 3
misconception: forgot-divide-by-coefficient
worked: |
  For (ax + b)ⁿ: raise the power by 1, divide by the new power AND by a (the coefficient of x).
  Here a = 2 and n = 4, so the integral is (2x + 3)⁵ / (5 × 2) + C = (2x + 3)⁵/10 + C.
  Dividing by 5 only (and forgetting the a = 2) is the standard error.
  Check: d/dx[(2x + 3)⁵/10] = 5(2x + 3)⁴ × 2 / 10 = (2x + 3)⁴. ✓
```

```yaml
type: mcq
topic: "C1 Integration"
stem: "Find the integral of (3x − 1)⁻² with respect to x."
options:
  - "−1/(3x − 1) + C"
  - "−1/(3(3x − 1)) + C"
  - "(3x − 1)⁻¹/3 + C"
  - "−2(3x − 1)⁻³ + C"
answer: 1
marks: 3
misconception: forgot-divide-by-coefficient
worked: |
  New index: −2 + 1 = −1. Divide by the new index (−1) and by a = 3.
  Integral = (3x − 1)⁻¹ / (−1 × 3) + C = −1/(3(3x − 1)) + C.
  Check: d/dx[−⅓(3x − 1)⁻¹] = −⅓ × (−1)(3x − 1)⁻² × 3 = (3x − 1)⁻². ✓
```

```yaml
type: mcq
topic: "C1 Integration"
stem: "Find the integral of √(2x + 1) with respect to x."
options:
  - "(2/3)(2x + 1)√(2x + 1) + C"
  - "(1/3)√(2x + 1) + C"
  - "(1/3)(2x + 1)√(2x + 1) + C"
  - "(2x + 1)√(2x + 1) + C"
answer: 2
marks: 3
misconception: forgot-divide-by-coefficient
worked: |
  Write it as (2x + 1)^½. New index = 3/2; divide by 3/2 and by a = 2.
  Integral = (2x + 1)^(3/2) ÷ (3/2 × 2) + C = (2x + 1)^(3/2)/3 + C = (1/3)(2x + 1)√(2x + 1) + C.
  Check: d/dx[(2x + 1)^(3/2)/3] = (3/2)(2x + 1)^½ × 2 / 3 = (2x + 1)^½. ✓
```

```yaml
type: mcq
topic: "C1 Integration"
stem: "Evaluate the definite integral of 3x² with respect to x, from x = 1 to x = 3."
options:
  - "27"
  - "28"
  - "9"
  - "26"
answer: 3
marks: 2
misconception: definite-integral-subtract-lower-limit
worked: |
  Integrate first: the integral of 3x² is x³.
  Evaluate between the limits: [x³] from 1 to 3 = 3³ − 1³ = 27 − 1 = 26.
  The lower limit must be SUBTRACTED, stopping at 27 forgets it. No + C is needed for a definite integral.
```

```yaml
type: mcq
topic: "C1 Integration"
stem: "Evaluate the definite integral of (2x + 1) with respect to x, from x = 0 to x = 4."
options:
  - "20"
  - "16"
  - "24"
  - "36"
answer: 0
marks: 2
misconception: definite-integral-subtract-lower-limit
worked: |
  The integral of 2x + 1 is x² + x.
  [x² + x] from 0 to 4 = (16 + 4) − (0 + 0) = 20.
```

```yaml
type: mcq
topic: "C1 Integration"
stem: "Evaluate the definite integral of 1/x² with respect to x, from x = 1 to x = 2."
options:
  - "−1/2"
  - "1/2"
  - "3/2"
  - "1/3"
answer: 1
marks: 3
misconception: negative-index-integration
worked: |
  The integral of x⁻² is x⁻¹/(−1) = −1/x.
  [−1/x] from 1 to 2 = (−1/2) − (−1/1) = −0.5 + 1 = 0.5.
  Both terms are negative, so subtracting the lower limit ADDS 1, the answer is positive.
```

```yaml
type: mcq
topic: "C1 Integration"
stem: "Find the area of the region bounded by the curve y = x², the x-axis and the line x = 3."
options:
  - "27"
  - "3"
  - "9"
  - "18"
answer: 2
marks: 3
misconception: area-is-definite-integral
worked: |
  Area = the definite integral of y from x = 0 to x = 3 (the curve meets the x-axis at x = 0).
  Integral of x² is x³/3, so the area = [x³/3] from 0 to 3 = 27/3 − 0 = 9 square units.
  27 is x³ evaluated without dividing by 3.
```

```yaml
type: mcq
topic: "C1 Integration"
stem: "Find the area of the region enclosed by the curve y = 4x − x² and the x-axis."
options:
  - "16/3"
  - "32"
  - "8"
  - "32/3"
answer: 3
marks: 4
misconception: area-limits-are-the-roots
worked: |
  First find where the curve meets the x-axis: 4x − x² = x(4 − x) = 0 → x = 0 and x = 4.
  These roots ARE the limits of integration.
  Area = integral of (4x − x²) from 0 to 4 = [2x² − x³/3] from 0 to 4 = (32 − 64/3) − 0 = 96/3 − 64/3 = 32/3.
  So the area is 32/3 (about 10.7) square units.
```

```yaml
type: mcq
topic: "C1 Integration"
stem: "The definite integral of 2x with respect to x, from x = 1 to x = k, is equal to 15. Given that k > 0, find k."
options:
  - "4"
  - "√15"
  - "8"
  - "16"
answer: 0
marks: 3
misconception: definite-integral-forms-an-equation
worked: |
  Integrate: [x²] from 1 to k = k² − 1.
  So k² − 1 = 15 → k² = 16 → k = 4 or k = −4.
  Since k > 0, k = 4.
```

```yaml
type: mcq
topic: "C1 Integration"
stem: "Find the area of the region bounded by the curve y = x² + 1 and the line y = 10."
options:
  - "18"
  - "36"
  - "54"
  - "24"
answer: 1
marks: 4
misconception: area-between-curve-and-line-subtract
worked: |
  Find where they meet: x² + 1 = 10 → x² = 9 → x = −3 and x = 3. These are the limits.
  Between them the LINE is above the CURVE, so integrate (line − curve):
  Area = integral of (10 − (x² + 1)) = integral of (9 − x²) from −3 to 3
  = [9x − x³/3] from −3 to 3 = (27 − 9) − (−27 + 9) = 18 + 18 = 36 square units.
  Integrating the curve alone (and forgetting to subtract it from the line) is the usual mistake.
```

```yaml
type: mcq
topic: "C1 Integration"
stem: "A curve has gradient function dy/dx = 6x − 4 and passes through the point (2, 5). Find the equation of the curve."
options:
  - "y = 3x² − 4x"
  - "y = 3x² − 4x + 5"
  - "y = 3x² − 4x + 1"
  - "y = 6x² − 4x + 1"
answer: 2
marks: 3
misconception: constant-of-integration-from-point
worked: |
  Integrate the gradient function: y = 3x² − 4x + C.
  The + C is not optional, use the given point to find it.
  At (2, 5): 5 = 3(4) − 4(2) + C = 12 − 8 + C → C = 1.
  So y = 3x² − 4x + 1.
```

```yaml
type: mcq
topic: "C1 Integration"
stem: "Find the integral of (x + 1)/√x with respect to x."
options:
  - "(2/3)x√x + √x + C"
  - "(3/2)x√x + 2√x + C"
  - "2√x + 2x√x + C"
  - "(2/3)x√x + 2√x + C"
answer: 3
marks: 4
misconception: split-fraction-before-integrating
worked: |
  You cannot integrate a quotient directly, SPLIT it into powers of x first:
  (x + 1)/√x = x/x^½ + 1/x^½ = x^½ + x^(−½).
  Integrate each: x^(3/2) ÷ (3/2) + x^(½) ÷ (½) = (2/3)x^(3/2) + 2x^½.
  So the integral is (2/3)x√x + 2√x + C.
  Check: d/dx[(2/3)x^(3/2) + 2x^½] = x^½ + x^(−½) = (x + 1)/√x. ✓
```

```yaml
type: short
topic: "C1 Integration"
stem: "Evaluate the definite integral of 4x³ with respect to x, from x = 0 to x = 2."
accepted: ["16"]
marks: 2
misconception: definite-integral-subtract-lower-limit
worked: |
  The integral of 4x³ is x⁴.
  [x⁴] from 0 to 2 = 2⁴ − 0⁴ = 16.
```

```yaml
type: short
topic: "C1 Integration"
stem: "Find the integral of (5x + 2)³ with respect to x."
accepted: ["(5x+2)^4/20 + C", "(5x + 2)^4 / 20 + C", "((5x+2)^4)/20 + c", "1/20 (5x+2)^4 + C"]
marks: 3
misconception: forgot-divide-by-coefficient
worked: |
  Raise the power by 1 (giving 4), then divide by the new power AND by the coefficient of x (a = 5).
  Integral = (5x + 2)⁴ / (4 × 5) + C = (5x + 2)⁴/20 + C.
  Check by differentiating back: d/dx[(5x + 2)⁴/20] = 4(5x + 2)³ × 5 / 20 = (5x + 2)³. ✓ Do not lose the + C.
```

```yaml
type: short
topic: "C1 Integration"
stem: "Find the area of the region bounded by the curve y = x³, the x-axis and the line x = 2."
accepted: ["4", "4 units^2", "Area = 4"]
marks: 3
misconception: area-is-definite-integral
worked: |
  The curve meets the x-axis at x = 0, so the limits are 0 and 2.
  Area = integral of x³ from 0 to 2 = [x⁴/4] from 0 to 2 = 16/4 − 0 = 4 square units.
```

## TEACHING

```yaml
kind: careless
topic: "Quadratics: completing the square"
checks:
  - "Halve the coefficient of x, then SUBTRACT the square you just added."
  - "If the x² coefficient is not 1, factor it out of the x-terms FIRST."
  - "When the factor goes back in, it multiplies the number inside the bracket too."
  - "Check your work by expanding, it must return the original expression."
```

```yaml
kind: careless
topic: "Quadratics: maximum, minimum and range"
checks:
  - "a > 0 gives a MINIMUM; a < 0 gives a MAXIMUM. Decide the shape before you write min or max."
  - "The minimum VALUE is the k in a(x − h)² + k, not the h."
  - "Range is a statement about f(x): write f(x) ≥ k, never x ≥ k."
  - "State the value of x at which it happens only if the question asks for the POINT."
```

```yaml
kind: careless
topic: "Discriminant: nature of roots"
checks:
  - "Rearrange to = 0 first, then read off a, b and c with their signs."
  - "b² − 4ac > 0 two distinct real roots; = 0 two equal roots; < 0 no real roots."
  - "'Real and distinct' is a strict >, so the equality case is excluded."
  - "b² means (−3)² = 9, not −9, square the whole coefficient, sign included."
```

```yaml
kind: careless
topic: "Line and curve: tangent, intersect or no intersection"
checks:
  - "Substitute the line into the curve and collect everything on one side, = 0."
  - "Tangent (touches once) → discriminant = 0."
  - "Cuts at two points → discriminant > 0. Never meets → discriminant < 0."
  - "If you divide an inequality by a negative number, REVERSE the inequality sign."
```

```yaml
kind: careless
topic: "Quadratic inequalities"
checks:
  - "Bring everything to one side so that the other side is 0 before factorising."
  - "Positive x² coefficient: the expression is NEGATIVE between the roots, POSITIVE outside them."
  - "Sketch the parabola and the number line, do not guess the direction."
  - "Never divide an inequality by an unknown; it may be negative and flip the sign."
  - "Keep ≤ / ≥ only if the original inequality allowed equality."
```

```yaml
kind: careless
topic: "Simultaneous equations (one linear, one quadratic)"
checks:
  - "Substitute FROM the linear equation INTO the non-linear one."
  - "You should end up with a quadratic, so expect TWO pairs of answers."
  - "Put each x back into the LINEAR equation, it is safer and faster."
  - "Pair the answers up: write (x₁, y₁) and (x₂, y₂) so the values do not get mixed."
```

```yaml
kind: careless
topic: "Surds: simplifying and rationalising"
checks:
  - "Pull out the largest square factor: √50 = √25 × √2 = 5√2."
  - "Only LIKE surds can be added: 5√2 + 3√2 = 8√2, but √2 + √3 stays as it is."
  - "√a × √a = a, the root disappears, it does not stay as a surd."
  - "To rationalise, multiply top and bottom by the CONJUGATE (change the middle sign only)."
  - "The new denominator is a² − b², a whole number, if it is not, check your conjugate."
```

```yaml
kind: careless
topic: "Equations involving surds"
checks:
  - "Isolate the square root on one side BEFORE squaring."
  - "Squaring both sides can create extra roots that do not work."
  - "ALWAYS substitute every answer back into the ORIGINAL equation and reject the ones that fail."
  - "A square root is never negative, so any root forcing √(...) < 0 must be rejected."
```

```yaml
kind: careless
topic: "Remainder and factor theorem"
checks:
  - "For (x − a), test x = +a. For (x + a), test x = −a. Flip the sign every time."
  - "For (bx − a), the test value is x = a/b, which is usually a fraction, not an integer."
  - "Remainder theorem: the remainder is f(a). Factor theorem: it is a factor only if f(a) = 0."
  - "Two unknowns need two equations, set up both conditions given before you solve."
```

```yaml
kind: careless
topic: "Factorising and solving a cubic"
checks:
  - "Find the first root by trial from the FACTORS of the constant term (±1, ±2, ±3, ...)."
  - "Divide by that factor (long division or comparing coefficients) to get a quadratic."
  - "Factorise the quadratic, do not stop until you have three linear factors, or a quadratic that will not factorise."
  - "The factor (x + 1) gives the root x = −1. Flip the sign when reading roots off."
```

```yaml
kind: careless
topic: "Sum and difference of two cubes"
checks:
  - "Recognise cubes: 8x³ = (2x)³, 27 = 3³, 1 = 1³."
  - "a³ − b³ = (a − b)(a² + ab + b²), minus in front, plus in the middle."
  - "a³ + b³ = (a + b)(a² − ab + b²), plus in front, minus in the middle."
  - "The middle term is ab, with NO 2 in front (that would be a perfect square, a different formula)."
```

```yaml
kind: careless
topic: "Partial fractions: choosing the correct form"
checks:
  - "Check the numerator degree first, if it is not lower than the denominator, divide out first."
  - "Distinct linear factor (ax + b) → one constant on top: A/(ax + b)."
  - "Repeated factor (ax + b)² → TWO fractions: B/(ax + b) and C/(ax + b)²."
  - "Irreducible quadratic (x² + c²) → a LINEAR numerator: (Bx + C)/(x² + c²)."
  - "Count your unknowns: they must match the degree of the numerator you are matching."
```

```yaml
kind: careless
topic: "Partial fractions: finding the constants"
checks:
  - "Multiply through by the whole denominator to get an identity with no fractions."
  - "Substitute the value that makes each bracket zero, this kills the other terms (the cover-up trick)."
  - "For a repeated factor you still need one more equation: compare coefficients or use any other x."
  - "Check by putting one extra value of x into both sides."
```

```yaml
kind: careless
topic: "Exact values and the CAST diagram"
checks:
  - "Learn the 30-60-90 and 45-45-90 triangles, exact values must not come from a calculator."
  - "Find the BASIC (reference) angle first, then attach the sign from the quadrant."
  - "CAST: 4th quadrant Cos +, 1st All +, 2nd Sin +, 3rd Tan +."
  - "'Exact value' means leave surds and fractions in, no decimals."
```

```yaml
kind: careless
topic: "Degrees or radians: read the question"
checks:
  - "Set your calculator to the mode the QUESTION uses, before you press anything."
  - "π/6, π/4, π/3 are radians (30°, 45°, 60°). If you see π in the interval, work in radians."
  - "Answers in degrees go to 1 decimal place unless told otherwise."
  - "Never mix the two in one line of working."
```

```yaml
kind: careless
topic: "Trig graphs: amplitude and period"
checks:
  - "For y = a sin bx + c: amplitude = |a|; period = 360°/b (or 2π/b in radians)."
  - "For tan bx the period is 180°/b (or π/b), tangent repeats twice as often as sine and cosine."
  - "c moves the whole graph up or down; it does not change the amplitude."
  - "A bigger b means MORE cycles in the same width, so a SHORTER period."
```

```yaml
kind: careless
topic: "Trig identities: proving and simplifying"
checks:
  - "Start from the messier side and work towards the other one, never work on both sides at once."
  - "Change everything into sines and cosines when you are stuck."
  - "Keep sin²θ + cos²θ = 1 and its two rearrangements in view: 1 + tan²θ = sec²θ, 1 + cot²θ = cosec²θ."
  - "Write down what you are proving on the last line: LHS = RHS (proved)."
```

```yaml
kind: careless
topic: "Compound angle formulae"
checks:
  - "cos(A ± B) FLIPS the sign in the middle: cos A cos B ∓ sin A sin B."
  - "sin(A ± B) keeps the sign: sin A cos B ± cos A sin B."
  - "Split awkward angles into known ones: 75° = 45° + 30°, 15° = 45° − 30°."
  - "The formulae are printed on the formulae page, copy them exactly, do not trust memory."
```

```yaml
kind: careless
topic: "Double angle formulae"
checks:
  - "sin 2A = 2 sin A cos A. There is a 2 in front, do not drop it."
  - "cos 2A has three forms. Pick the one that matches what you are given (sines only, cosines only, or both)."
  - "tan 2A = 2 tan A / (1 − tan²A). The denominator can be negative."
  - "2A is not 2 × (the answer for A). Substitute into the formula, not into the answer."
```

```yaml
kind: careless
topic: "Solving trig equations in a given interval"
checks:
  - "Write the interval down first, and keep checking every answer against it."
  - "Find the basic angle from the POSITIVE value, then use CAST to place all the quadrants."
  - "A calculator gives you ONE answer. There are usually two per revolution, find them all."
  - "Sine and cosine repeat every 360°; tangent repeats every 180°."
  - "Reject any solution outside the interval; do not silently keep it."
```

```yaml
kind: careless
topic: "Solving trig equations with a multiple angle"
checks:
  - "If the equation is in 2x (or 3x), WIDEN the interval first: 0° ≤ x ≤ 180° becomes 0° ≤ 2x ≤ 360°."
  - "Find every solution for the multiple angle inside the WIDER interval."
  - "Only at the very end divide each answer by 2 (or 3)."
  - "Forgetting to widen the interval is the classic way to lose half the marks."
```

```yaml
kind: careless
topic: "R-formula: finding R and α"
checks:
  - "R = √(a² + b²), add the SQUARES of the two coefficients, never the coefficients themselves."
  - "Expand the target form and COMPARE COEFFICIENTS to see which ratio gives tan α."
  - "α is always acute here, so take the positive value of tan⁻¹."
  - "The sign in R cos(θ − α) or R sin(θ + α) is set by the question, do not change it to suit your answer."
  - "Substitute one value of θ back to check that your R form matches the original expression."
```

```yaml
kind: careless
topic: "R-formula: maximum, minimum and solving"
checks:
  - "Maximum of R cos(θ − α) is +R, at θ = α. Minimum is −R."
  - "A constant in front (e.g. 8 + R cos(...)) shifts the max and min: they become 8 + R and 8 − R."
  - "The question may ask for the VALUE of the maximum, or the value of θ where it occurs, read carefully."
  - "When solving R cos(θ − α) = c, remember to add α back at the end."
```

```yaml
kind: careless
topic: "Coordinate geometry: parallel and perpendicular lines"
checks:
  - "Rearrange to y = mx + c before reading off any gradient."
  - "Parallel: same gradient. Perpendicular: m₁m₂ = −1, so flip the fraction AND change the sign."
  - "A horizontal line (m = 0) has a VERTICAL normal, x = constant, which has no gradient."
  - "Substitute the given point at the end to find c, and check it satisfies your final equation."
```

```yaml
kind: careless
topic: "Coordinate geometry: midpoint, distance and shoelace area"
checks:
  - "Midpoint ADDS and halves; distance SUBTRACTS and squares. Do not swap them."
  - "For the shoelace formula, list the points in order around the shape and repeat the first one at the end."
  - "Take the modulus, then multiply by ½. Forgetting the ½ doubles your area."
  - "Going round the shape in the wrong order (crossing over) gives a wrong area, sketch it first."
```

```yaml
kind: careless
topic: "Circles: centre and radius from the general form"
checks:
  - "In (x − a)² + (y − b)² = r², the centre is (a, b): the signs FLIP."
  - "The right-hand side is r², so take the square root to get the radius."
  - "In x² + y² + 2gx + 2fy + c = 0, the centre is (−g, −f) and r = √(g² + f² − c)."
  - "The x² and y² coefficients must both be 1, divide through first if they are not."
```

```yaml
kind: careless
topic: "Circles: forming the equation and meeting a line"
checks:
  - "Given a diameter, the centre is the MIDPOINT and the radius is HALF the length."
  - "Given the centre and a point on the circle, the radius is the distance between them."
  - "To find where a line meets a circle, substitute the line into the circle equation and solve the quadratic."
  - "Two solutions = cuts twice; one repeated solution = tangent; none = it misses the circle."
  - "A tangent to a circle is perpendicular to the RADIUS at the point of contact."
```

```yaml
kind: careless
topic: "Differentiation: powers, negative and fractional indices"
checks:
  - "Rewrite everything as a power of x BEFORE differentiating: 4/x³ = 4x⁻³, √x = x^½."
  - "d/dx(xⁿ) = nxⁿ⁻¹, multiply by the old power, then subtract 1 from it."
  - "Subtracting 1 from −3 gives −4, and from ½ gives −½, the index goes DOWN, so it can get more negative."
  - "The derivative of a constant is 0."
  - "Convert your answer back to the form the question used (fraction or root) if it asks for it."
```

```yaml
kind: careless
topic: "Differentiation: the chain rule"
checks:
  - "Chain rule: differentiate the outside, then MULTIPLY by the derivative of the inside."
  - "The forgotten inside-derivative is the most expensive slip in the whole paper."
  - "For (ax + b)ⁿ, the inside derivative is just a, so the answer is an(ax + b)ⁿ⁻¹."
  - "For √(anything), rewrite it as (anything)^½ before you start."
```

```yaml
kind: careless
topic: "Differentiation: the product rule"
checks:
  - "Spot a product: two x-expressions MULTIPLIED together."
  - "(uv)' = u'v + uv', you differentiate each part in turn, never both at once."
  - "The inner brackets usually need the chain rule as well, do that before you substitute."
  - "Factorise the answer if the question says 'in factorised form' or if you must then solve = 0."
```

```yaml
kind: careless
topic: "Differentiation: the quotient rule"
checks:
  - "(u/v)' = (u'v − uv')/v². The MINUS makes the order matter, u' comes first."
  - "The denominator is v SQUARED, not v."
  - "If the denominator is a single power of x, splitting the fraction is faster than the quotient rule."
  - "Simplify the numerator fully; many marks sit in the tidy-up."
```

```yaml
kind: careless
topic: "Tangents and normals"
checks:
  - "The gradient of the tangent is dy/dx at that point, substitute the x-value into the DERIVATIVE."
  - "The gradient of the normal is −1 ÷ (tangent gradient)."
  - "You need a POINT as well as a gradient, if only x is given, find y from the original curve."
  - "Use y − y₁ = m(x − x₁) and check the point satisfies your final equation."
  - "Read carefully: tangent or normal? They are one sign apart, and both are asked for regularly."
```

```yaml
kind: careless
topic: "Stationary points and their nature"
checks:
  - "Set dy/dx = 0 and solve, this gives the x-coordinates only."
  - "Substitute back into the ORIGINAL equation (not the derivative) to get the y-coordinates."
  - "Test the nature: d²y/dx² > 0 → minimum; < 0 → maximum."
  - "If d²y/dx² = 0, the test fails, check the sign of dy/dx just before and just after instead."
  - "A stationary point of inflexion has dy/dx = 0 but the gradient keeps the same sign either side."
```

```yaml
kind: careless
topic: "Increasing and decreasing functions"
checks:
  - "Increasing means dy/dx > 0; decreasing means dy/dx < 0."
  - "'Show that f is increasing for all x' usually means showing f'(x) is a positive constant plus a square."
  - "A square is never negative, that is what makes expressions like 3(x + 1)² ≥ 0 so useful."
  - "State the conclusion in words; the reasoning mark is for saying WHY the derivative cannot be negative."
```

```yaml
kind: careless
topic: "Maxima and minima problems"
checks:
  - "Form the expression to be maximised, then use the constraint to reduce it to ONE variable."
  - "Differentiate, set = 0, solve, then test the nature with the second derivative."
  - "Answer the question that was asked: the maximum VOLUME, not the value of x that produces it."
  - "Reject impossible values (negative lengths, x outside the given domain)."
  - "Keep the units and state them in the final answer."
```

```yaml
kind: careless
topic: "Connected rates of change"
checks:
  - "Write down the rate you are GIVEN and the rate you WANT, with correct notation (dx/dt, dV/dt, ...)."
  - "Chain them: dV/dt = dV/dx × dx/dt. The middle letters cancel, use that to check your chain."
  - "You may need to invert one derivative: dx/dV = 1 ÷ (dV/dx)."
  - "Substitute the given instant (e.g. when r = 5) only AFTER differentiating, never before."
```

```yaml
kind: careless
topic: "Integration: indefinite integrals and + C"
checks:
  - "Add 1 to the index, then divide by the NEW index. This is the reverse of differentiating."
  - "NEVER forget + C on an indefinite integral, it is a mark on its own."
  - "You cannot integrate a product or quotient term by term, expand or split it first."
  - "Check any integral by differentiating your answer: you must get back the original expression."
```

```yaml
kind: careless
topic: "Integration: powers of (ax + b)"
checks:
  - "Integral of (ax + b)ⁿ = (ax + b)ⁿ⁺¹ / [a(n + 1)] + C."
  - "Divide by the new power AND by a, the coefficient of x. Forgetting the a is the standard error."
  - "This works for negative and fractional n too (but never for n = −1)."
  - "Differentiate your answer back to check the a reappears."
```

```yaml
kind: careless
topic: "Definite integrals and area under a curve"
checks:
  - "No + C is needed for a definite integral, but the square brackets and limits are."
  - "Substitute the UPPER limit first, then subtract the value at the lower limit. Brackets prevent sign errors."
  - "For an area, find the limits first: usually where the curve cuts the x-axis, or the given lines."
  - "For a region between a curve and a line, integrate (top − bottom) between the intersection points."
  - "Give the area as a positive number, with 'square units' if the axes have no units."
```

```yaml
kind: careless
topic: "Accuracy, rounding and reading the question"
checks:
  - "Give non-exact answers to 3 significant figures, and angles in degrees to 1 decimal place."
  - "Keep full accuracy in your working; round only on the FINAL line."
  - "'Exact value' means a surd or a fraction, not a decimal."
  - "'Show that' answers must be worked to greater accuracy first, then rounded to the printed value."
  - "Show the method, omitting essential working loses method marks even when the answer is right."
```

```yaml
kind: definition
term: "Discriminant"
topic: "A2 Equations & Inequalities"
body: "The value b² − 4ac for the equation ax² + bx + c = 0. If it is positive there are two distinct real roots; if it is zero there are two equal roots (the line is a tangent to the curve); if it is negative there are no real roots."
```

```yaml
kind: definition
term: "Completing the square"
topic: "A1 Quadratic Functions"
body: "Rewriting ax² + bx + c as a(x − h)² + k. Because a square is never negative, k is the minimum value of the expression when a > 0 (and the maximum value when a < 0), reached at x = h."
```

```yaml
kind: definition
term: "Remainder theorem"
topic: "A4 Polynomials & Partial Fractions"
body: "When a polynomial f(x) is divided by (x − a), the remainder is f(a). For a divisor (bx − a), the remainder is f(a/b)."
```

```yaml
kind: definition
term: "Factor theorem"
topic: "A4 Polynomials & Partial Fractions"
body: "(x − a) is a factor of the polynomial f(x) if and only if f(a) = 0. It is the remainder theorem with a remainder of zero."
```

```yaml
kind: definition
term: "Stationary point"
topic: "C1 Differentiation"
body: "A point on a curve where dy/dx = 0, so the tangent there is horizontal. It may be a maximum, a minimum, or a stationary point of inflexion."
```

```yaml
kind: definition
term: "Second-derivative test"
topic: "C1 Differentiation"
body: "At a stationary point: if d²y/dx² < 0 the point is a maximum; if d²y/dx² > 0 it is a minimum; if d²y/dx² = 0 the test is inconclusive and the sign of dy/dx either side must be examined instead."
```

```yaml
kind: definition
term: "Normal to a curve"
topic: "C1 Differentiation"
body: "The straight line through a point on the curve that is perpendicular to the tangent there. If the tangent has gradient m, the normal has gradient −1/m."
```

```yaml
kind: definition
term: "Definite integral"
topic: "C1 Integration"
body: "The value of an integral evaluated between two limits: F(b) − F(a), where F is an antiderivative of the integrand. It needs no constant of integration, and for a curve above the x-axis it gives the area between the curve, the x-axis and the lines x = a and x = b."
```

```yaml
kind: definition
term: "Amplitude and period"
topic: "G1 Trigonometry"
body: "For y = a sin bx + c, the amplitude is |a| (half the distance between the maximum and minimum values) and the period is 360°/b in degrees, or 2π/b in radians, the horizontal width of one complete cycle."
```

```yaml
kind: definition
term: "R-formula"
topic: "G1 Trigonometry"
body: "a cos θ + b sin θ can be written as R cos(θ − α) or R sin(θ + α), where R = √(a² + b²) and α is an acute angle found by comparing coefficients. It turns a two-term expression into a single trigonometric function, so its maximum is R and its minimum is −R."
```
