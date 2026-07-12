---
level: o-level
slug: a-math
subjectName: Mathematics (Additional)
family: amath
---

## QUESTIONS

```yaml
type: mcq
topic: "A1 Quadratic Functions"
stem: "Express x² − 6x + 11 in the form (x − p)² + q."
options:
  - "(x + 3)² + 2"
  - "(x − 3)² + 2"
  - "(x − 3)² − 2"
  - "(x − 6)² − 25"
answer: 1
marks: 1
misconception: completing-square-halving
worked: |
  Half the coefficient of x: −6 ÷ 2 = −3, so start with (x − 3)².
  (x − 3)² = x² − 6x + 9, which is 9 too much for the constant.
  x² − 6x + 11 = (x − 3)² − 9 + 11 = (x − 3)² + 2.
```

```yaml
type: mcq
topic: "A1 Quadratic Functions"
stem: "Find the minimum value of y = 2x² + 8x + 5."
options:
  - "1"
  - "5"
  - "−11"
  - "−3"
answer: 3
marks: 2
misconception: factor-out-before-completing-square
worked: |
  Factor the 2 out of the x-terms first: y = 2(x² + 4x) + 5.
  x² + 4x = (x + 2)² − 4, so y = 2[(x + 2)² − 4] + 5 = 2(x + 2)² − 8 + 5 = 2(x + 2)² − 3.
  The square is at least 0, so the minimum value of y is −3 (at x = −2).
  Choosing 1 means the −4 was not multiplied by the 2.
```

```yaml
type: mcq
topic: "A1 Quadratic Functions"
stem: "The curve y = 3 + 4x − x² has a maximum point. What is the maximum value of y?"
options:
  - "7"
  - "−1"
  - "3"
  - "4"
answer: 0
marks: 2
misconception: max-min-sign-when-a-negative
worked: |
  y = −(x² − 4x) + 3 = −[(x − 2)² − 4] + 3 = −(x − 2)² + 7.
  Since −(x − 2)² ≤ 0, the greatest value of y is 7, at x = 2.
```

```yaml
type: mcq
topic: "A1 Quadratic Functions"
stem: "f(x) = x² − 4x + 9 for all real values of x. State the range of f."
options:
  - "f(x) ≤ 5"
  - "f(x) ≥ 5"
  - "f(x) ≥ 9"
  - "f(x) ≥ 2"
answer: 1
marks: 2
misconception: range-reads-x-not-y
worked: |
  f(x) = (x − 2)² + 5, so the minimum value is 5 (when x = 2).
  The range is the set of OUTPUT values: f(x) ≥ 5.
  f(x) ≥ 2 confuses the x-value of the vertex with the y-value.
```

```yaml
type: short
topic: "A1 Quadratic Functions"
stem: "The curve y = x² + kx + 12 has a minimum value of 3. Given that k > 0, find the value of k."
accepted: ["6", "k = 6"]
marks: 2
misconception: minimum-value-from-completed-square
worked: |
  y = (x + k/2)² + 12 − k²/4, so the minimum value is 12 − k²/4.
  12 − k²/4 = 3 → k²/4 = 9 → k² = 36 → k = ±6.
  Since k > 0, k = 6.
```

```yaml
type: mcq
topic: "A2 Equations & Inequalities"
stem: "Find the set of values of k for which x² + kx + 9 = 0 has two distinct real roots."
options:
  - "−6 < k < 6"
  - "k > 6 only"
  - "k = 6 or k = −6"
  - "k < −6 or k > 6"
answer: 3
marks: 2
misconception: discriminant-inequality-direction
worked: |
  Two distinct real roots requires b² − 4ac > 0.
  k² − 4(1)(9) > 0 → k² − 36 > 0 → (k − 6)(k + 6) > 0.
  This is a positive quadratic in k, so it is above the axis OUTSIDE the roots: k < −6 or k > 6.
```

```yaml
type: mcq
topic: "A2 Equations & Inequalities"
stem: "The line y = 2x + c is a tangent to the curve y = x² + 3x + 4. Find the value of c."
options:
  - "15/4"
  - "17/4"
  - "4"
  - "−15/4"
answer: 0
marks: 3
misconception: tangency-needs-discriminant-zero
worked: |
  Set them equal: x² + 3x + 4 = 2x + c → x² + x + (4 − c) = 0.
  A tangent touches once, so the discriminant is 0:
  1² − 4(1)(4 − c) = 0 → 1 − 16 + 4c = 0 → 4c = 15 → c = 15/4.
```

```yaml
type: mcq
topic: "A2 Equations & Inequalities"
stem: "Solve the inequality 2x² − 5x − 3 ≤ 0."
options:
  - "1/2 ≤ x ≤ 3"
  - "−1/2 ≤ x ≤ 3"
  - "−3 ≤ x ≤ 1/2"
  - "x ≤ −1/2 or x ≥ 3"
answer: 1
marks: 3
misconception: quadratic-inequality-region
worked: |
  Factorise: 2x² − 5x − 3 = (2x + 1)(x − 3).
  The roots are x = −1/2 and x = 3, and the curve opens upwards.
  An upward parabola is at or below zero BETWEEN its roots: −1/2 ≤ x ≤ 3.
```

```yaml
type: mcq
topic: "A2 Equations & Inequalities"
stem: "Find the set of values of k for which x² + kx + k + 3 > 0 for all real values of x."
options:
  - "−6 < k < 2"
  - "k < −2 or k > 6"
  - "k > 6"
  - "−2 < k < 6"
answer: 3
marks: 3
misconception: always-positive-discriminant
worked: |
  The parabola opens upwards, so it stays above the x-axis exactly when it has no real roots:
  b² − 4ac < 0 → k² − 4(k + 3) < 0 → k² − 4k − 12 < 0 → (k − 6)(k + 2) < 0.
  A positive quadratic is below zero BETWEEN the roots: −2 < k < 6.
```

```yaml
type: mcq
topic: "A2 Equations & Inequalities"
stem: "Solve the simultaneous equations x + y = 5 and x² + y² = 17."
options:
  - "(1, 4) and (4, 1)"
  - "(2, 3) and (3, 2)"
  - "(1, 4) only"
  - "(−1, 6) and (6, −1)"
answer: 0
marks: 3
misconception: non-linear-substitution
worked: |
  From the linear equation, y = 5 − x. Substitute into the second equation:
  x² + (5 − x)² = 17 → x² + 25 − 10x + x² = 17 → 2x² − 10x + 8 = 0 → x² − 5x + 4 = 0.
  (x − 1)(x − 4) = 0 → x = 1 or x = 4, giving y = 4 or y = 1.
  Check: 1 + 16 = 17 and 16 + 1 = 17.
```

```yaml
type: mcq
topic: "A2 Equations & Inequalities"
stem: "How many real roots does the equation 3x² − 4x + 5 = 0 have?"
options:
  - "Exactly one real root"
  - "No real roots"
  - "Two distinct real roots"
  - "Two equal real roots"
answer: 1
marks: 1
misconception: discriminant-sign-meaning
worked: |
  b² − 4ac = (−4)² − 4(3)(5) = 16 − 60 = −44.
  The discriminant is negative, so the equation has no real roots.
```

```yaml
type: mcq
topic: "A2 Equations & Inequalities"
stem: "Solve the simultaneous equations y = x − 1 and x² + y² = 25."
options:
  - "(4, 3) and (−3, −4)"
  - "(5, 4) and (−5, −6)"
  - "(3, 4) and (−4, −3)"
  - "(4, 3) only"
answer: 0
marks: 3
misconception: substitute-back-into-wrong-equation
worked: |
  Substitute y = x − 1: x² + (x − 1)² = 25 → 2x² − 2x + 1 = 25 → 2x² − 2x − 24 = 0 → x² − x − 12 = 0.
  (x − 4)(x + 3) = 0 → x = 4 or x = −3.
  Put each back into the LINEAR equation: x = 4 → y = 3; x = −3 → y = −4.
```

```yaml
type: short
topic: "A2 Equations & Inequalities"
stem: "The equation x² + (k − 3)x + k = 0 has equal roots. Find the two possible values of k."
accepted: ["1 or 9", "9 or 1", "k = 1 or k = 9", "1, 9", "9, 1", "k = 1, k = 9"]
marks: 3
misconception: equal-roots-discriminant-zero
worked: |
  Equal roots means b² − 4ac = 0.
  (k − 3)² − 4(1)(k) = 0 → k² − 6k + 9 − 4k = 0 → k² − 10k + 9 = 0.
  (k − 1)(k − 9) = 0 → k = 1 or k = 9.
```

```yaml
type: mcq
topic: "A3 Surds"
stem: "Express 6/(√5 − √2) in the form a√5 + b√2, where a and b are integers."
options:
  - "2√5 − 2√2"
  - "2√5 + 2√2"
  - "6√5 + 6√2"
  - "3√5 + 3√2"
answer: 1
marks: 2
misconception: rationalising-conjugate-sign
worked: |
  Multiply top and bottom by the conjugate √5 + √2:
  6(√5 + √2) / [(√5 − √2)(√5 + √2)] = 6(√5 + √2) / (5 − 2) = 6(√5 + √2)/3.
  = 2(√5 + √2) = 2√5 + 2√2.
```

```yaml
type: mcq
topic: "A3 Surds"
stem: "Simplify √50 − √18 + √8, giving your answer in the form k√2."
options:
  - "4√2"
  - "10√2"
  - "6√2"
  - "2√10"
answer: 0
marks: 2
misconception: surd-simplification
worked: |
  √50 = √(25 × 2) = 5√2; √18 = √(9 × 2) = 3√2; √8 = √(4 × 2) = 2√2.
  5√2 − 3√2 + 2√2 = 4√2.
```

```yaml
type: mcq
topic: "A3 Surds"
stem: "Solve √(x + 7) = x − 5."
options:
  - "x = 2 and x = 9"
  - "x = 9 only"
  - "x = −9 only"
  - "x = 2 only"
answer: 1
marks: 3
misconception: reject-invalid-surd-root
worked: |
  Square both sides: x + 7 = (x − 5)² = x² − 10x + 25.
  x² − 11x + 18 = 0 → (x − 2)(x − 9) = 0 → x = 2 or x = 9.
  CHECK both in the original equation. x = 2: LHS = √9 = 3, RHS = −3. Not equal, so reject x = 2.
  x = 9: LHS = √16 = 4, RHS = 4. Valid. So x = 9 only.
```

```yaml
type: mcq
topic: "A4 Polynomials & Partial Fractions"
stem: "Find the remainder when f(x) = 2x³ − 3x² + x − 5 is divided by (x − 2)."
options:
  - "−1"
  - "1"
  - "11"
  - "−5"
answer: 1
marks: 2
misconception: remainder-theorem-sign
worked: |
  By the remainder theorem the remainder is f(2).
  f(2) = 2(8) − 3(4) + 2 − 5 = 16 − 12 + 2 − 5 = 1.
  Using f(−2) instead of f(2) is the classic sign slip.
```

```yaml
type: mcq
topic: "A4 Polynomials & Partial Fractions"
stem: "Find the remainder when f(x) = 4x³ + 2x² − x + 3 is divided by (2x + 1)."
options:
  - "3"
  - "7/2"
  - "5/2"
  - "9/2"
answer: 1
marks: 2
misconception: remainder-theorem-non-monic-divisor
worked: |
  2x + 1 = 0 gives x = −1/2, so the remainder is f(−1/2).
  f(−1/2) = 4(−1/8) + 2(1/4) − (−1/2) + 3 = −1/2 + 1/2 + 1/2 + 3 = 7/2.
```

```yaml
type: mcq
topic: "A4 Polynomials & Partial Fractions"
stem: "Given that (x + 2) is a factor of 2x³ + ax² − 5x − 6, find the value of a."
options:
  - "6"
  - "3"
  - "−6"
  - "−3"
answer: 1
marks: 2
misconception: factor-theorem-substitution-sign
worked: |
  If (x + 2) is a factor then f(−2) = 0.
  2(−8) + a(4) − 5(−2) − 6 = 0 → −16 + 4a + 10 − 6 = 0 → 4a − 12 = 0 → a = 3.
```

```yaml
type: mcq
topic: "A4 Polynomials & Partial Fractions"
stem: "Factorise x³ − 7x + 6 completely."
options:
  - "(x − 1)(x − 2)(x − 3)"
  - "(x − 1)(x + 2)(x − 3)"
  - "(x − 1)(x − 2)(x + 3)"
  - "(x + 1)(x − 2)(x − 3)"
answer: 2
marks: 3
misconception: cubic-factor-signs
worked: |
  Try x = 1: 1 − 7 + 6 = 0, so (x − 1) is a factor.
  Divide: x³ − 7x + 6 = (x − 1)(x² + x − 6) = (x − 1)(x + 3)(x − 2).
  Check by expanding: (x − 1)(x − 2)(x + 3) = x³ − 7x + 6.
```

```yaml
type: mcq
topic: "A4 Polynomials & Partial Fractions"
stem: "Factorise 8x³ + 27 completely."
options:
  - "(2x + 3)(4x² + 6x + 9)"
  - "(2x + 3)(4x² − 6x + 9)"
  - "(2x − 3)(4x² + 6x + 9)"
  - "(2x + 3)(2x² − 6x + 9)"
answer: 1
marks: 2
misconception: sum-of-cubes-middle-sign
worked: |
  8x³ + 27 = (2x)³ + 3³, so use a³ + b³ = (a + b)(a² − ab + b²) with a = 2x, b = 3.
  = (2x + 3)[(2x)² − (2x)(3) + 3²] = (2x + 3)(4x² − 6x + 9).
  The middle sign of the quadratic factor is the OPPOSITE of the sign in the bracket.
```

```yaml
type: mcq
topic: "A4 Polynomials & Partial Fractions"
stem: "Express (7x − 1)/[(x − 1)(x + 2)] in partial fractions."
options:
  - "2/(x − 1) + 5/(x + 2)"
  - "−2/(x − 1) + 5/(x + 2)"
  - "5/(x − 1) + 2/(x + 2)"
  - "2/(x − 1) − 5/(x + 2)"
answer: 0
marks: 3
misconception: partial-fraction-cover-up
worked: |
  Write (7x − 1)/[(x − 1)(x + 2)] = A/(x − 1) + B/(x + 2), so 7x − 1 = A(x + 2) + B(x − 1).
  Let x = 1: 6 = 3A → A = 2.
  Let x = −2: −15 = −3B → B = 5.
  So the answer is 2/(x − 1) + 5/(x + 2).
```

```yaml
type: mcq
topic: "A4 Polynomials & Partial Fractions"
stem: "Which is the correct form for expressing (3x + 4)/[(x − 2)²(x + 1)] in partial fractions?"
options:
  - "A/(x − 2) + B/(x + 1)"
  - "A/(x − 2)² + B/(x + 1)"
  - "A/(x − 2) + B/(x − 2)² + C/(x + 1)"
  - "(Ax + B)/(x − 2)² + C/(x + 1)"
answer: 2
marks: 2
misconception: repeated-factor-form
worked: |
  A repeated linear factor (x − 2)² needs BOTH powers on the right:
  A/(x − 2) + B/(x − 2)², plus C/(x + 1) for the other linear factor.
  Solving gives A = −1/9, B = 10/3, C = 1/9, so three constants are indeed needed.
```

```yaml
type: mcq
topic: "A4 Polynomials & Partial Fractions"
stem: "Which is the correct form for expressing (2x² + 5)/[(x + 3)(x² + 4)] in partial fractions?"
options:
  - "A/(x + 3) + B/(x² + 4)"
  - "A/(x + 3) + (Bx + C)/(x² + 4)"
  - "(Ax + B)/(x + 3) + C/(x² + 4)"
  - "A/(x + 3) + B/(x + 2) + C/(x − 2)"
answer: 1
marks: 2
misconception: irreducible-quadratic-form
worked: |
  x² + 4 cannot be factorised over the real numbers, so its numerator must be LINEAR: (Bx + C).
  The linear factor (x + 3) takes a constant numerator A.
  Comparing coefficients gives A = 23/13, B = 3/13, C = −9/13, so a linear numerator is genuinely needed.
```

```yaml
type: short
topic: "A4 Polynomials & Partial Fractions"
stem: "Given that (x − 2) is a factor of f(x) = x³ + 2x² − 5x − 6, factorise f(x) completely."
accepted: ["(x - 2)(x + 1)(x + 3)", "(x-2)(x+1)(x+3)", "(x + 1)(x + 3)(x - 2)", "(x - 2)(x + 3)(x + 1)"]
marks: 3
misconception: cubic-factorisation-after-division
worked: |
  Check: f(2) = 8 + 8 − 10 − 6 = 0, so (x − 2) is a factor.
  Divide: x³ + 2x² − 5x − 6 = (x − 2)(x² + 4x + 3).
  x² + 4x + 3 = (x + 1)(x + 3).
  So f(x) = (x − 2)(x + 1)(x + 3).
```

```yaml
type: short
topic: "A4 Polynomials & Partial Fractions"
stem: "Express (5x + 1)/[(2x − 1)(x + 3)] in partial fractions."
accepted: ["1/(2x - 1) + 2/(x + 3)", "2/(x + 3) + 1/(2x - 1)", "1/(2x-1) + 2/(x+3)"]
marks: 3
misconception: partial-fraction-constants
worked: |
  Let (5x + 1)/[(2x − 1)(x + 3)] = A/(2x − 1) + B/(x + 3), so 5x + 1 = A(x + 3) + B(2x − 1).
  Let x = 1/2: 7/2 = A(7/2) → A = 1.
  Let x = −3: −14 = B(−7) → B = 2.
  Answer: 1/(2x − 1) + 2/(x + 3). Check: (x + 3) + 2(2x − 1) = 5x + 1.
```

```yaml
type: mcq
topic: "A5 Binomial Expansions"
stem: "Find the coefficient of x³ in the expansion of (1 + 2x)⁵."
options:
  - "10"
  - "40"
  - "80"
  - "32"
answer: 2
marks: 2
misconception: binomial-forgot-power-of-coefficient
worked: |
  The term in x³ is C(5,3)(1)²(2x)³ = 10 × 8x³ = 80x³.
  The coefficient is 80. Answering 10 means the 2³ was left out.
```

```yaml
type: mcq
topic: "A5 Binomial Expansions"
stem: "Find the term independent of x in the expansion of (x² + 1/x)⁶."
options:
  - "20"
  - "1"
  - "6"
  - "15"
answer: 3
marks: 3
misconception: term-independent-of-x
worked: |
  General term: C(6,r)(x²)^(6−r)(1/x)^r = C(6,r) x^(12 − 2r − r) = C(6,r) x^(12 − 3r).
  Independent of x means the power is zero: 12 − 3r = 0 → r = 4.
  Term = C(6,4) = 15.
```

```yaml
type: mcq
topic: "A5 Binomial Expansions"
stem: "Expand (2 − x)⁵ in ascending powers of x, up to and including the term in x²."
options:
  - "32 − 40x + 80x²"
  - "32 − 80x + 40x²"
  - "32 − 80x + 80x²"
  - "32 + 80x + 80x²"
answer: 2
marks: 3
misconception: binomial-alternating-signs
worked: |
  (2 − x)⁵ = 2⁵ + C(5,1)2⁴(−x) + C(5,2)2³(−x)² + ...
  = 32 + 5(16)(−x) + 10(8)(x²) + ... = 32 − 80x + 80x².
  The (−x) makes the x-term negative; (−x)² makes the x²-term positive again.
```

```yaml
type: mcq
topic: "A5 Binomial Expansions"
stem: "Find the coefficient of x⁴ in the expansion of (3 + x)⁶."
options:
  - "135"
  - "1215"
  - "15"
  - "540"
answer: 0
marks: 2
misconception: binomial-wrong-power-on-constant
worked: |
  Term in x⁴: C(6,4) × 3^(6−4) × x⁴ = 15 × 3² × x⁴ = 15 × 9 x⁴ = 135x⁴.
  The coefficient is 135. Using 3³ instead of 3² gives 405, and forgetting the 3 entirely gives 15.
```

```yaml
type: short
topic: "A5 Binomial Expansions"
stem: "Find the term independent of x in the expansion of (x + 3/x²)⁶."
accepted: ["135"]
marks: 3
misconception: general-term-power-of-x
worked: |
  General term: C(6,r) x^(6−r) (3/x²)^r = C(6,r) 3^r x^(6 − r − 2r) = C(6,r) 3^r x^(6 − 3r).
  Set 6 − 3r = 0 → r = 2.
  Term = C(6,2) × 3² = 15 × 9 = 135.
```

```yaml
type: mcq
topic: "A6 Exponential & Logarithmic Functions"
stem: "Solve 2^(x + 1) = 8^(x − 1)."
options:
  - "x = 3"
  - "x = 2"
  - "x = 4"
  - "x = 1"
answer: 1
marks: 2
misconception: index-equation-common-base
worked: |
  Write both sides to base 2: 8^(x − 1) = (2³)^(x − 1) = 2^(3x − 3).
  Equate the indices: x + 1 = 3x − 3 → 4 = 2x → x = 2.
  Check: 2³ = 8 and 8¹ = 8.
```

```yaml
type: mcq
topic: "A6 Exponential & Logarithmic Functions"
stem: "Solve log₂ x + log₂ (x − 2) = 3."
options:
  - "x = 4"
  - "x = −2"
  - "x = 4 and x = −2"
  - "x = 8"
answer: 0
marks: 3
misconception: log-domain-rejection
worked: |
  Combine: log₂[x(x − 2)] = 3 → x(x − 2) = 2³ = 8.
  x² − 2x − 8 = 0 → (x − 4)(x + 2) = 0 → x = 4 or x = −2.
  The argument of a logarithm must be POSITIVE, so x = −2 is rejected (log₂(−2) is undefined).
  x = 4.
```

```yaml
type: mcq
topic: "A6 Exponential & Logarithmic Functions"
stem: "Simplify logₐ 12 − 2 logₐ 2 + logₐ 3 as a single logarithm."
options:
  - "logₐ 9"
  - "logₐ 36"
  - "logₐ 11"
  - "logₐ 18"
answer: 0
marks: 2
misconception: log-power-law
worked: |
  2 logₐ 2 = logₐ 2² = logₐ 4.
  logₐ 12 − logₐ 4 + logₐ 3 = logₐ (12 ÷ 4 × 3) = logₐ 9.
  Subtracting 2 × 2 = 4 from 12 (instead of dividing) is the standard slip.
```

```yaml
type: mcq
topic: "A6 Exponential & Logarithmic Functions"
stem: "Find the exact value of log₉ 27."
options:
  - "3"
  - "3/2"
  - "2/3"
  - "1/3"
answer: 1
marks: 2
misconception: change-of-base
worked: |
  Change to base 3: log₉ 27 = (log₃ 27)/(log₃ 9) = 3/2.
  Check: 9^(3/2) = (√9)³ = 3³ = 27.
```

```yaml
type: mcq
topic: "A6 Exponential & Logarithmic Functions"
stem: "A population is modelled by N = 500e^(0.04t), where t is the time in years. Find the time taken for the population to reach 1000, correct to 3 significant figures."
options:
  - "17.3 years"
  - "12.5 years"
  - "34.7 years"
  - "25.0 years"
answer: 0
marks: 3
misconception: exponential-model-take-ln
worked: |
  500e^(0.04t) = 1000 → e^(0.04t) = 2.
  Take natural logs: 0.04t = ln 2 → t = (ln 2)/0.04 = 0.6931/0.04 = 17.33.
  t = 17.3 years (3 s.f.). Dividing 1000 by 500 × 0.04 gives the wrong value 25.0.
```

```yaml
type: mcq
topic: "A6 Exponential & Logarithmic Functions"
stem: "The mass of a substance is M = 80e^(−0.25t) grams, where t is the time in hours. Find the mass when t = 4, correct to 3 significant figures."
options:
  - "80.0 g"
  - "20.0 g"
  - "29.4 g"
  - "58.9 g"
answer: 2
marks: 2
misconception: exponential-evaluation
worked: |
  M = 80e^(−0.25 × 4) = 80e^(−1) = 80 × 0.36788 = 29.43.
  M = 29.4 g (3 s.f.). Note e^(−1) is NOT −1 or 0.25.
```

```yaml
type: mcq
topic: "A6 Exponential & Logarithmic Functions"
stem: "Solve e^(2x) − 5e^x + 6 = 0."
options:
  - "x = ln 2 or x = ln 3"
  - "x = −ln 2 or x = −ln 3"
  - "x = 2 or x = 3"
  - "x = ln 5 or x = ln 6"
answer: 0
marks: 3
misconception: exponential-quadratic-substitution
worked: |
  Let u = e^x. Then e^(2x) = u², so u² − 5u + 6 = 0 → (u − 2)(u − 3) = 0.
  u = 2 or u = 3, i.e. e^x = 2 or e^x = 3.
  So x = ln 2 or x = ln 3. Both are valid because 2 and 3 are positive.
```

```yaml
type: mcq
topic: "A6 Exponential & Logarithmic Functions"
stem: "Solve 3^(2x) = 20, giving your answer correct to 3 significant figures."
options:
  - "2.73"
  - "1.36"
  - "1.26"
  - "0.733"
answer: 1
marks: 3
misconception: log-both-sides-index-law
worked: |
  Take logarithms of both sides: 2x lg 3 = lg 20.
  x = lg 20 / (2 lg 3) = 1.30103 / (2 × 0.47712) = 1.30103/0.95424 = 1.3634.
  x = 1.36 (3 s.f.). Forgetting to halve gives 2.73.
```

```yaml
type: mcq
topic: "A6 Exponential & Logarithmic Functions"
stem: "Given that lg y = 2 lg x + 1, express y in terms of x."
options:
  - "y = 2x + 10"
  - "y = 100x²"
  - "y = 10x²"
  - "y = x² + 10"
answer: 2
marks: 2
misconception: log-to-index-form
worked: |
  2 lg x = lg x², and 1 = lg 10.
  lg y = lg x² + lg 10 = lg(10x²).
  Since lg is one-to-one, y = 10x². Adding 10 instead of multiplying is the common error.
```

```yaml
type: mcq
topic: "A6 Exponential & Logarithmic Functions"
stem: "For what values of x is log₅ (3 − 2x) defined?"
options:
  - "x ≤ 3/2"
  - "x > 3/2"
  - "x > −3/2"
  - "x < 3/2"
answer: 3
marks: 2
misconception: log-argument-must-be-positive
worked: |
  The argument of a logarithm must be strictly positive.
  3 − 2x > 0 → 3 > 2x → x < 3/2.
  The inequality is strict, since log₅ 0 is undefined.
```

```yaml
type: short
topic: "A6 Exponential & Logarithmic Functions"
stem: "Solve 4^x = 8^(x − 1)."
accepted: ["3", "x = 3"]
marks: 2
misconception: common-base-indices
worked: |
  Write both sides to base 2: (2²)^x = (2³)^(x − 1) → 2^(2x) = 2^(3x − 3).
  Equate indices: 2x = 3x − 3 → x = 3.
  Check: 4³ = 64 and 8² = 64.
```

```yaml
type: short
topic: "A6 Exponential & Logarithmic Functions"
stem: "A radioactive sample decays according to M = M₀e^(−kt), where t is measured in days. The half-life of the sample is 10 days. Find k, correct to 3 significant figures."
accepted: ["0.0693", "k = 0.0693", "0.0693 per day"]
marks: 3
misconception: half-life-to-decay-constant
worked: |
  Half-life means M = M₀/2 when t = 10:
  M₀e^(−10k) = M₀/2 → e^(−10k) = 1/2 → −10k = ln(1/2) = −ln 2.
  k = (ln 2)/10 = 0.69315/10 = 0.069315.
  k = 0.0693 (3 s.f.).
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Solve sin x = 0.5 for 0° ≤ x ≤ 360°."
options:
  - "x = 30° and x = 150°"
  - "x = 60° and x = 120°"
  - "x = 30° only"
  - "x = 30° and x = 210°"
answer: 0
marks: 2
misconception: missing-the-second-solution
worked: |
  The basic angle is sin⁻¹(0.5) = 30°.
  Sine is positive in the 1st and 2nd quadrants.
  1st quadrant: x = 30°. 2nd quadrant: x = 180° − 30° = 150°.
  So x = 30° and x = 150°.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Solve 2 cos x + 1 = 0 for 0 ≤ x ≤ 2π, where x is in RADIANS."
options:
  - "x = 2π/3 only"
  - "x = π/3 and x = 2π/3"
  - "x = 2π/3 and x = 4π/3"
  - "x = π/6 and x = 5π/6"
answer: 2
marks: 3
misconception: radian-mode-solutions
worked: |
  cos x = −1/2. The basic angle is cos⁻¹(1/2) = π/3.
  Cosine is negative in the 2nd and 3rd quadrants.
  2nd quadrant: x = π − π/3 = 2π/3. 3rd quadrant: x = π + π/3 = 4π/3.
  Make sure the calculator is in radian mode.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Solve tan 2x = 1 for 0° ≤ x ≤ 180°."
options:
  - "x = 45° and x = 135°"
  - "x = 22.5° and x = 112.5°"
  - "x = 22.5° only"
  - "x = 45° and x = 225°"
answer: 1
marks: 3
misconception: multiple-angle-interval
worked: |
  Let u = 2x. Since 0° ≤ x ≤ 180°, the interval for u is 0° ≤ u ≤ 360°.
  tan u = 1 → u = 45° (1st quadrant) and u = 45° + 180° = 225° (3rd quadrant).
  Divide by 2: x = 22.5° and x = 112.5°.
  Forgetting to DOUBLE the interval loses the second solution.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "State the amplitude and the period of y = 3 sin 2x, where x is in radians."
options:
  - "Amplitude 3, period 2π"
  - "Amplitude 6, period π"
  - "Amplitude 2, period 3π"
  - "Amplitude 3, period π"
answer: 3
marks: 2
misconception: period-from-coefficient
worked: |
  For y = a sin(bx): amplitude = |a| = 3.
  Period = 2π ÷ b = 2π ÷ 2 = π.
  The 2 SQUEEZES the graph horizontally, so the period is halved, not doubled.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "State the period, in degrees, of y = 4 tan 3x."
options:
  - "60°"
  - "180°"
  - "30°"
  - "120°"
answer: 0
marks: 2
misconception: tan-period-is-180-not-360
worked: |
  The period of tan x is 180° (NOT 360°).
  For y = a tan(bx) the period is 180° ÷ b = 180° ÷ 3 = 60°.
  The 4 changes the vertical stretch only; tan has no amplitude.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Express 3 sin θ + 4 cos θ in the form R sin(θ + α), where R > 0 and 0° < α < 90°. Give α to 1 decimal place."
options:
  - "7 sin(θ + 53.1°)"
  - "5 sin(θ + 53.1°)"
  - "5 sin(θ − 53.1°)"
  - "5 sin(θ + 36.9°)"
answer: 1
marks: 3
misconception: r-formula-alpha-ratio
worked: |
  R = √(3² + 4²) = √25 = 5.
  Expanding: R sin θ cos α + R cos θ sin α, so R cos α = 3 and R sin α = 4.
  tan α = 4/3 → α = 53.13° = 53.1° (1 d.p.).
  So 3 sin θ + 4 cos θ = 5 sin(θ + 53.1°). R is the HYPOTENUSE, not 3 + 4.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Find the maximum value of 5 cos θ − 12 sin θ, where θ is measured in degrees."
options:
  - "7"
  - "13"
  - "−13"
  - "17"
answer: 1
marks: 2
misconception: r-formula-maximum
worked: |
  Write it as R cos(θ + α) with R = √(5² + 12²) = √169 = 13.
  Since cos(θ + α) has a maximum value of 1, the maximum of the expression is R = 13.
  Adding 5 + 12 = 17 ignores the Pythagorean combination.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Find the minimum value of 6 sin θ − 8 cos θ + 3, where θ is measured in degrees."
options:
  - "−7"
  - "3"
  - "−13"
  - "−10"
answer: 0
marks: 3
misconception: r-formula-with-vertical-shift
worked: |
  6 sin θ − 8 cos θ = R sin(θ − α) with R = √(6² + 8²) = √100 = 10.
  The minimum of R sin(θ − α) is −10.
  So the minimum of the whole expression is −10 + 3 = −7. Do not forget the + 3.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Simplify (1 − cos²θ)/(sin θ cos θ)."
options:
  - "cot θ"
  - "sin θ"
  - "sec θ"
  - "tan θ"
answer: 3
marks: 2
misconception: pythagorean-identity
worked: |
  From sin²θ + cos²θ = 1 we get 1 − cos²θ = sin²θ.
  So the expression is sin²θ/(sin θ cos θ) = sin θ/cos θ = tan θ.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Simplify sec²θ − 1."
options:
  - "cot²θ"
  - "cosec²θ"
  - "−sin²θ"
  - "tan²θ"
answer: 3
marks: 1
misconception: identity-recall
worked: |
  Divide sin²θ + cos²θ = 1 through by cos²θ: tan²θ + 1 = sec²θ.
  Rearranging gives sec²θ − 1 = tan²θ.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Solve 2 sin²x = 1 + cos x for 0° ≤ x ≤ 360°."
options:
  - "x = 60°, 120° and 180°"
  - "x = 180° only"
  - "x = 60° and x = 300°"
  - "x = 60°, 180° and 300°"
answer: 3
marks: 4
misconception: quadratic-in-cos-loses-a-root
worked: |
  Replace sin²x with 1 − cos²x: 2(1 − cos²x) = 1 + cos x.
  2 − 2cos²x = 1 + cos x → 2cos²x + cos x − 1 = 0 → (2cos x − 1)(cos x + 1) = 0.
  cos x = 1/2 → x = 60° or x = 300°.
  cos x = −1 → x = 180°.
  All three solutions lie in the interval.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Solve 3 tan x = 2 sin x for 0° ≤ x ≤ 360°."
options:
  - "x = 0° and x = 360°"
  - "x = 180° only"
  - "There are no solutions"
  - "x = 0°, 180° and 360°"
answer: 3
marks: 4
misconception: dividing-by-sin-loses-roots
worked: |
  Write tan x = sin x/cos x and multiply through by cos x (cos x ≠ 0):
  3 sin x = 2 sin x cos x → sin x(3 − 2 cos x) = 0.
  NEVER divide by sin x — that would throw away roots.
  sin x = 0 → x = 0°, 180°, 360°.
  3 − 2cos x = 0 → cos x = 1.5, which is impossible.
  So x = 0°, 180° and 360°.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Given that cos θ = 3/5 and θ is acute, find the exact value of tan θ."
options:
  - "5/3"
  - "4/3"
  - "3/4"
  - "5/4"
answer: 1
marks: 2
misconception: wrong-side-in-right-triangle
worked: |
  Draw a right-angled triangle with adjacent = 3 and hypotenuse = 5.
  Opposite = √(5² − 3²) = √16 = 4.
  tan θ = opposite/adjacent = 4/3. Since θ is acute, the value is positive.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Solve cos(2x + 30°) = 0.5 for 0° ≤ x ≤ 180°."
options:
  - "x = 15° and x = 135°"
  - "x = 30° and x = 150°"
  - "x = 15° only"
  - "x = 15°, 135° and 195°"
answer: 0
marks: 4
misconception: shifted-interval-for-compound-angle
worked: |
  Let u = 2x + 30°. When x = 0°, u = 30°; when x = 180°, u = 390°. So 30° ≤ u ≤ 390°.
  cos u = 0.5 → basic angle 60°, and cosine is positive in the 1st and 4th quadrants:
  u = 60°, 300° (and 420°, which is outside the interval).
  2x + 30 = 60 → x = 15°; 2x + 30 = 300 → x = 135°.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "How many solutions does sin 3x = 0.4 have for 0° ≤ x ≤ 360°?"
options:
  - "3"
  - "4"
  - "2"
  - "6"
answer: 3
marks: 2
misconception: multiple-angle-solution-count
worked: |
  Let u = 3x, so 0° ≤ u ≤ 1080° — three full revolutions.
  sin u = 0.4 has 2 solutions in every 360°, so it has 3 × 2 = 6 solutions in 1080°.
  Dividing each by 3 gives 6 values of x.
```

```yaml
type: mcq
topic: "G1 Trigonometry"
stem: "Simplify sin θ/(1 + cos θ) + (1 + cos θ)/sin θ."
options:
  - "cosec θ"
  - "2 sec θ"
  - "2 cosec θ"
  - "2 cot θ"
answer: 2
marks: 4
misconception: identity-proof-common-denominator
worked: |
  Common denominator sin θ(1 + cos θ):
  [sin²θ + (1 + cos θ)²] / [sin θ(1 + cos θ)]
  = [sin²θ + 1 + 2cos θ + cos²θ] / [sin θ(1 + cos θ)]
  = [1 + 1 + 2cos θ] / [sin θ(1 + cos θ)]   (using sin²θ + cos²θ = 1)
  = 2(1 + cos θ) / [sin θ(1 + cos θ)] = 2/sin θ = 2 cosec θ.
```

```yaml
type: short
topic: "G1 Trigonometry"
stem: "Given that 5 sin θ − 12 cos θ = R sin(θ − α), where R > 0 and 0° < α < 90°, find α in degrees, correct to 1 decimal place."
accepted: ["67.4", "alpha = 67.4", "67.4 degrees"]
marks: 3
misconception: r-formula-tan-alpha
worked: |
  Expanding R sin(θ − α) = R sin θ cos α − R cos θ sin α.
  Compare: R cos α = 5 and R sin α = 12.
  tan α = 12/5 = 2.4 → α = 67.38° = 67.4° (1 d.p.).
  (R = √(5² + 12²) = 13.)
```

```yaml
type: short
topic: "G1 Trigonometry"
stem: "Solve 2 sin x = cos x for 0° ≤ x ≤ 360°, giving each answer correct to 1 decimal place."
accepted: ["26.6 and 206.6", "26.6, 206.6", "x = 26.6 and x = 206.6", "26.6 206.6"]
marks: 3
misconception: tangent-second-quadrant-solution
worked: |
  Divide both sides by cos x: 2 tan x = 1 → tan x = 0.5.
  Basic angle = tan⁻¹(0.5) = 26.57°.
  Tangent is positive in the 1st and 3rd quadrants:
  x = 26.6° and x = 26.57° + 180° = 206.6° (1 d.p.).
```

```yaml
type: short
topic: "G1 Trigonometry"
stem: "State the maximum value of 7 sin θ + 24 cos θ, where θ is measured in degrees."
accepted: ["25"]
marks: 2
misconception: r-formula-maximum-value
worked: |
  7 sin θ + 24 cos θ = R sin(θ + α) with R = √(7² + 24²) = √(49 + 576) = √625 = 25.
  The maximum of sin(θ + α) is 1, so the maximum value is 25.
```

```yaml
type: mcq
topic: "G2 Coordinate Geometry, Circles & Linear Law"
stem: "Find the equation of the circle with centre (2, −3) and radius 5."
options:
  - "(x − 2)² + (y + 3)² = 5"
  - "(x − 2)² + (y − 3)² = 25"
  - "(x + 2)² + (y − 3)² = 25"
  - "(x − 2)² + (y + 3)² = 25"
answer: 3
marks: 2
misconception: circle-centre-sign-flip
worked: |
  The circle with centre (a, b) and radius r is (x − a)² + (y − b)² = r².
  With a = 2, b = −3, r = 5: (x − 2)² + (y − (−3))² = 5² → (x − 2)² + (y + 3)² = 25.
  Note the SIGNS flip inside the brackets, and the radius is SQUARED.
```

```yaml
type: mcq
topic: "G2 Coordinate Geometry, Circles & Linear Law"
stem: "Find the centre and radius of the circle x² + y² − 6x + 4y − 12 = 0."
options:
  - "Centre (3, −2), radius 25"
  - "Centre (−3, 2), radius 5"
  - "Centre (3, −2), radius 5"
  - "Centre (6, −4), radius 5"
answer: 2
marks: 3
misconception: general-form-of-a-circle
worked: |
  Complete the square: (x² − 6x) + (y² + 4y) = 12.
  (x − 3)² − 9 + (y + 2)² − 4 = 12 → (x − 3)² + (y + 2)² = 25.
  Centre (3, −2) and radius √25 = 5. The radius is the SQUARE ROOT of 25.
```

```yaml
type: mcq
topic: "G2 Coordinate Geometry, Circles & Linear Law"
stem: "The point (3, 4) lies on the circle x² + y² = 25. Find the gradient of the tangent to the circle at (3, 4)."
options:
  - "4/3"
  - "−3/4"
  - "3/4"
  - "−4/3"
answer: 1
marks: 3
misconception: tangent-perpendicular-to-radius
worked: |
  The centre is (0, 0), so the gradient of the radius to (3, 4) is (4 − 0)/(3 − 0) = 4/3.
  The tangent is PERPENDICULAR to the radius, so its gradient is −1 ÷ (4/3) = −3/4.
  Answering 4/3 gives the radius gradient, not the tangent gradient.
```

```yaml
type: mcq
topic: "G2 Coordinate Geometry, Circles & Linear Law"
stem: "Find the equation of the perpendicular bisector of the line segment joining A(1, 2) and B(5, 8)."
options:
  - "2x + 3y = 9"
  - "3x − 2y = −1"
  - "3x + 2y = 19"
  - "2x + 3y = 21"
answer: 3
marks: 4
misconception: perpendicular-bisector-midpoint
worked: |
  Midpoint of AB = ((1 + 5)/2, (2 + 8)/2) = (3, 5).
  Gradient of AB = (8 − 2)/(5 − 1) = 6/4 = 3/2, so the perpendicular gradient is −2/3.
  y − 5 = −(2/3)(x − 3) → 3y − 15 = −2x + 6 → 2x + 3y = 21.
  Check the midpoint: 2(3) + 3(5) = 21.
```

```yaml
type: mcq
topic: "G2 Coordinate Geometry, Circles & Linear Law"
stem: "Find the area of the triangle with vertices (0, 0), (4, 1) and (2, 5)."
options:
  - "4.5 square units"
  - "9 square units"
  - "10 square units"
  - "18 square units"
answer: 1
marks: 3
misconception: shoelace-forgot-to-halve
worked: |
  Use the shoelace formula: Area = ½|x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|.
  = ½|0(1 − 5) + 4(5 − 0) + 2(0 − 1)| = ½|0 + 20 − 2| = ½(18) = 9.
  Forgetting the ½ gives 18.
```

```yaml
type: mcq
topic: "G2 Coordinate Geometry, Circles & Linear Law"
stem: "The line joining P(2, k) and Q(5, 7) is perpendicular to the line y = 3x − 1. Find k."
options:
  - "6"
  - "−8"
  - "10"
  - "8"
answer: 3
marks: 3
misconception: perpendicular-gradient-product
worked: |
  The gradient of y = 3x − 1 is 3, so the gradient of PQ must be −1/3.
  Gradient of PQ = (7 − k)/(5 − 2) = (7 − k)/3.
  (7 − k)/3 = −1/3 → 7 − k = −1 → k = 8.
```

```yaml
type: mcq
topic: "G2 Coordinate Geometry, Circles & Linear Law"
stem: "A circle has AB as a diameter, where A is (−1, 2) and B is (5, 10). Find the equation of the circle."
options:
  - "(x − 2)² + (y − 6)² = 10"
  - "(x − 2)² + (y − 6)² = 100"
  - "(x + 2)² + (y + 6)² = 25"
  - "(x − 2)² + (y − 6)² = 25"
answer: 3
marks: 4
misconception: diameter-not-halved-to-radius
worked: |
  The centre is the midpoint of AB: ((−1 + 5)/2, (2 + 10)/2) = (2, 6).
  Length AB = √[(5 − (−1))² + (10 − 2)²] = √(36 + 64) = √100 = 10.
  The RADIUS is half the diameter: r = 5, so r² = 25.
  Equation: (x − 2)² + (y − 6)² = 25.
```

```yaml
type: mcq
topic: "G2 Coordinate Geometry, Circles & Linear Law"
stem: "The point (3, 2) lies on the circle (x − 1)² + (y + 2)² = 20. Find the equation of the tangent to the circle at (3, 2)."
options:
  - "2x − y = 4"
  - "x − 2y = −1"
  - "2x + y = 8"
  - "x + 2y = 7"
answer: 3
marks: 4
misconception: tangent-normal-mixup
worked: |
  Centre is (1, −2). Gradient of the radius to (3, 2) = (2 − (−2))/(3 − 1) = 4/2 = 2.
  The tangent is perpendicular to the radius, so its gradient is −1/2.
  y − 2 = −½(x − 3) → 2y − 4 = −x + 3 → x + 2y = 7.
  Check: 3 + 2(2) = 7.
```

```yaml
type: mcq
topic: "G2 Coordinate Geometry, Circles & Linear Law"
stem: "Find the equation of the normal to the circle x² + y² − 4x − 6y = 0 at the point (4, 6)."
options:
  - "3x − 2y = 0"
  - "2x − 3y = −10"
  - "2x + 3y = 26"
  - "3x + 2y = 24"
answer: 0
marks: 3
misconception: normal-passes-through-centre
worked: |
  Complete the square: (x − 2)² + (y − 3)² = 13, so the centre is (2, 3).
  The normal to a circle at any point PASSES THROUGH THE CENTRE.
  Gradient through (2, 3) and (4, 6) = (6 − 3)/(4 − 2) = 3/2.
  y − 3 = (3/2)(x − 2) → 2y − 6 = 3x − 6 → 3x − 2y = 0.
  Check (4, 6): 12 − 12 = 0.
```

```yaml
type: mcq
topic: "G2 Coordinate Geometry, Circles & Linear Law"
stem: "The variables x and y are related by y = A x^b, where A and b are constants. Which straight-line graph should be drawn?"
options:
  - "lg y against lg x, with gradient b and intercept lg A"
  - "lg y against x, with gradient b and intercept A"
  - "y against lg x, with gradient A and intercept b"
  - "y against x^b, with gradient lg A"
answer: 0
marks: 3
misconception: linear-law-transformation
worked: |
  Take lg of both sides: lg y = lg(A x^b) = lg A + b lg x.
  Compare with Y = mX + c: Y = lg y, X = lg x, gradient m = b, intercept c = lg A.
  So plot lg y against lg x.
```

```yaml
type: mcq
topic: "G2 Coordinate Geometry, Circles & Linear Law"
stem: "For y = k bˣ, plotting lg y against x gives a straight line with gradient 0.3010 and vertical-axis intercept 0.6990. Find k and b."
options:
  - "k = 5, b = 10"
  - "k = 2, b = 5"
  - "k = 0.6990, b = 0.3010"
  - "k = 5, b = 2"
answer: 3
marks: 4
misconception: linear-law-intercept-antilog
worked: |
  lg y = lg(k bˣ) = lg k + x lg b, so gradient = lg b and intercept = lg k.
  lg b = 0.3010 → b = 10^0.3010 = 2.
  lg k = 0.6990 → k = 10^0.6990 = 5.
  The gradient and intercept must be 'un-logged' with a power of 10.
```

```yaml
type: mcq
topic: "G2 Coordinate Geometry, Circles & Linear Law"
stem: "The variables x and y are related by y = ax² + bx. Which straight-line graph should be drawn to find a and b?"
options:
  - "lg y against lg x, with gradient a"
  - "y/x against x, with gradient a and intercept b"
  - "xy against x, with gradient b"
  - "y against x², with gradient a and intercept b"
answer: 1
marks: 3
misconception: linear-law-divide-by-x
worked: |
  Divide both sides by x: y/x = ax + b.
  Compare with Y = mX + c: Y = y/x, X = x, gradient = a, intercept = b.
  You cannot plot y against x² here, because the bx term would still contain x.
```

```yaml
type: short
topic: "G2 Coordinate Geometry, Circles & Linear Law"
stem: "Find the radius of the circle x² + y² + 8x − 2y − 8 = 0."
accepted: ["5", "r = 5", "5 units"]
marks: 3
misconception: radius-from-general-form
worked: |
  Complete the square: (x² + 8x) + (y² − 2y) = 8.
  (x + 4)² − 16 + (y − 1)² − 1 = 8 → (x + 4)² + (y − 1)² = 25.
  Radius = √25 = 5.
```

```yaml
type: short
topic: "G2 Coordinate Geometry, Circles & Linear Law"
stem: "Find the coordinates of the centre of the circle 2x² + 2y² − 8x + 12y − 24 = 0."
accepted: ["(2, -3)", "(2,-3)", "2, -3", "x = 2, y = -3"]
marks: 3
misconception: divide-through-before-completing-square
worked: |
  Divide the whole equation by 2 FIRST: x² + y² − 4x + 6y − 12 = 0.
  Complete the square: (x − 2)² − 4 + (y + 3)² − 9 = 12 → (x − 2)² + (y + 3)² = 25.
  The centre is (2, −3). (Skipping the division by 2 gives the wrong centre.)
```

```yaml
type: short
topic: "G2 Coordinate Geometry, Circles & Linear Law"
stem: "The variables x and y are related by y = A xⁿ. When lg y is plotted against lg x, a straight line of gradient 3 and vertical-axis intercept 0.5 is obtained. Find the value of A, correct to 3 significant figures."
accepted: ["3.16", "A = 3.16", "sqrt(10)"]
marks: 3
misconception: linear-law-intercept-is-log-of-a
worked: |
  lg y = n lg x + lg A, so the intercept equals lg A.
  lg A = 0.5 → A = 10^0.5 = √10 = 3.1623.
  A = 3.16 (3 s.f.). (The gradient 3 gives n = 3.)
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Differentiate (3x − 1)⁵ with respect to x."
options:
  - "15(3x − 1)⁴"
  - "5(3x − 1)⁴"
  - "15(3x − 1)⁵"
  - "3(3x − 1)⁴"
answer: 0
marks: 2
misconception: chain-rule-missing-inner-derivative
worked: |
  Chain rule: bring the power down, reduce the power by 1, then MULTIPLY by the derivative of the inside.
  d/dx (3x − 1)⁵ = 5(3x − 1)⁴ × 3 = 15(3x − 1)⁴.
  Answering 5(3x − 1)⁴ means the × 3 was forgotten.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Differentiate x² sin x with respect to x, where x is in radians."
options:
  - "2x cos x + x² sin x"
  - "2x cos x"
  - "2x sin x + x² sin x"
  - "2x sin x + x² cos x"
answer: 3
marks: 2
misconception: product-rule-omitted
worked: |
  Product rule: d/dx (uv) = u'v + uv' with u = x², v = sin x.
  u' = 2x, v' = cos x.
  Derivative = 2x sin x + x² cos x. You cannot just multiply the two derivatives.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Differentiate (2x + 1)/(x − 3) with respect to x."
options:
  - "−7/(x − 3)²"
  - "7/(x − 3)²"
  - "2/(x − 3)²"
  - "(4x − 5)/(x − 3)²"
answer: 0
marks: 3
misconception: quotient-rule-order-of-terms
worked: |
  Quotient rule: (u'v − uv')/v² with u = 2x + 1, v = x − 3.
  = [2(x − 3) − (2x + 1)(1)]/(x − 3)²
  = (2x − 6 − 2x − 1)/(x − 3)² = −7/(x − 3)².
  The numerator is u'v − uv', in that order — swapping the terms flips the sign.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Differentiate e^(3x²) with respect to x."
options:
  - "6x e^(3x²)"
  - "6x e^(6x)"
  - "e^(3x²)"
  - "3x² e^(3x² − 1)"
answer: 0
marks: 2
misconception: chain-rule-exponential
worked: |
  d/dx e^(f(x)) = f'(x) e^(f(x)).
  Here f(x) = 3x², so f'(x) = 6x.
  Derivative = 6x e^(3x²). The exponent NEVER comes down as a power.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Differentiate ln(2x² + 3) with respect to x."
options:
  - "4x/(2x² + 3)"
  - "1/(2x² + 3)"
  - "(2x² + 3)/(4x)"
  - "4x"
answer: 0
marks: 2
misconception: log-chain-rule
worked: |
  d/dx ln(f(x)) = f'(x)/f(x).
  f(x) = 2x² + 3 → f'(x) = 4x.
  Derivative = 4x/(2x² + 3).
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Differentiate sin 3x with respect to x, where x is in radians."
options:
  - "cos 3x"
  - "−3 cos 3x"
  - "3 cos 3x"
  - "3 sin 3x"
answer: 2
marks: 1
misconception: trig-derivative-chain-factor
worked: |
  d/dx sin(f(x)) = f'(x) cos(f(x)).
  Here f(x) = 3x, so f'(x) = 3.
  Derivative = 3 cos 3x. (These standard results assume x is in RADIANS.)
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Differentiate tan 2x with respect to x, where x is in radians."
options:
  - "2 sec 2x tan 2x"
  - "sec² 2x"
  - "2 cot 2x"
  - "2 sec² 2x"
answer: 3
marks: 2
misconception: tan-derivative
worked: |
  d/dx tan(f(x)) = f'(x) sec²(f(x)).
  f(x) = 2x → f'(x) = 2.
  Derivative = 2 sec² 2x.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Differentiate cos²x with respect to x, where x is in radians."
options:
  - "−2 cos x"
  - "−2 sin x cos x"
  - "−sin²x"
  - "2 sin x cos x"
answer: 1
marks: 2
misconception: chain-rule-on-a-power-of-a-trig-function
worked: |
  Write it as (cos x)² and use the chain rule:
  d/dx (cos x)² = 2(cos x)¹ × d/dx(cos x) = 2 cos x × (−sin x) = −2 sin x cos x.
  The derivative of cos x is −sin x — the minus sign is essential.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Differentiate x e^(−2x) with respect to x."
options:
  - "e^(−2x)"
  - "e^(−2x)(1 − 2x)"
  - "−2x e^(−2x)"
  - "e^(−2x)(1 + 2x)"
answer: 1
marks: 3
misconception: product-rule-with-exponential
worked: |
  Product rule with u = x, v = e^(−2x):
  u' = 1, v' = −2e^(−2x).
  Derivative = 1 × e^(−2x) + x(−2e^(−2x)) = e^(−2x) − 2x e^(−2x) = e^(−2x)(1 − 2x).
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Differentiate ln(cos x) with respect to x, where x is in radians."
options:
  - "−sin x"
  - "tan x"
  - "−1/cos x"
  - "−tan x"
answer: 3
marks: 2
misconception: chain-rule-log-of-trig
worked: |
  d/dx ln(f(x)) = f'(x)/f(x) with f(x) = cos x, f'(x) = −sin x.
  Derivative = (−sin x)/(cos x) = −tan x.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Differentiate √(4x + 5) with respect to x."
options:
  - "√(4x + 5)/2"
  - "4/√(4x + 5)"
  - "1/(2√(4x + 5))"
  - "2/√(4x + 5)"
answer: 3
marks: 2
misconception: chain-rule-square-root
worked: |
  Write it as (4x + 5)^(1/2).
  Derivative = ½(4x + 5)^(−1/2) × 4 = 4/[2√(4x + 5)] = 2/√(4x + 5).
  The × 4 (the derivative of the inside) is the step most often dropped.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Find the equation of the tangent to the curve y = x² − 3x + 4 at the point (2, 2)."
options:
  - "y = 2x − 2"
  - "y = −x + 4"
  - "y = x + 2"
  - "y = x"
answer: 3
marks: 3
misconception: tangent-equation-uses-gradient-at-the-point
worked: |
  dy/dx = 2x − 3. At x = 2: gradient = 4 − 3 = 1.
  Tangent: y − 2 = 1(x − 2) → y = x.
  Check the point lies on the line: when x = 2, y = 2.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Find the equation of the normal to the curve y = x² at the point (1, 1)."
options:
  - "2x + y = 3"
  - "x − 2y = −1"
  - "x + 2y = 3"
  - "y = 2x − 1"
answer: 2
marks: 3
misconception: normal-gradient-negative-reciprocal
worked: |
  dy/dx = 2x. At x = 1 the tangent gradient is 2.
  The normal gradient is the NEGATIVE RECIPROCAL: −1/2.
  y − 1 = −½(x − 1) → 2y − 2 = −x + 1 → x + 2y = 3.
  Check (1, 1): 1 + 2 = 3.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Find the x-coordinates of the stationary points of y = x³ − 3x² + 4."
options:
  - "x = 0 only"
  - "x = 0 and x = 2"
  - "x = 1 and x = 3"
  - "x = 2 and x = −2"
answer: 1
marks: 3
misconception: stationary-points-set-derivative-zero
worked: |
  dy/dx = 3x² − 6x.
  Stationary points: dy/dx = 0 → 3x(x − 2) = 0 → x = 0 or x = 2.
  Do not divide by x — that would lose the root x = 0.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "The curve y = x³ − 3x² + 4 has a stationary point at x = 2. Determine its nature."
options:
  - "It cannot be determined"
  - "A point of inflexion"
  - "A minimum point"
  - "A maximum point"
answer: 2
marks: 2
misconception: second-derivative-test
worked: |
  dy/dx = 3x² − 6x, so d²y/dx² = 6x − 6.
  At x = 2: d²y/dx² = 12 − 6 = 6 > 0.
  A POSITIVE second derivative means the curve is concave up, so it is a MINIMUM point.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "The curve y = x⁴ has a stationary point at x = 0, where d²y/dx² = 0. What is the nature of this point?"
options:
  - "A point of inflexion"
  - "Not a stationary point"
  - "A minimum point"
  - "A maximum point"
answer: 2
marks: 3
misconception: second-derivative-zero-is-not-automatically-inflexion
worked: |
  dy/dx = 4x³ and d²y/dx² = 12x², which is 0 at x = 0. The second-derivative test FAILS here.
  Fall back on the sign of dy/dx: just left of 0 (x = −0.1) dy/dx = −0.004 < 0;
  just right of 0 (x = 0.1) dy/dx = +0.004 > 0.
  The gradient goes negative → zero → positive, so (0, 0) is a MINIMUM point.
  A second derivative of zero does NOT prove a point of inflexion.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Find the set of values of x for which the curve y = x² − 6x + 1 is an increasing function."
options:
  - "x > 0"
  - "x > 6"
  - "x > 3"
  - "x < 3"
answer: 2
marks: 2
misconception: increasing-means-derivative-positive
worked: |
  Increasing means dy/dx > 0.
  dy/dx = 2x − 6 > 0 → 2x > 6 → x > 3.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Find the maximum value of y = 12x − x³ for x > 0."
options:
  - "2"
  - "24"
  - "8"
  - "16"
answer: 3
marks: 4
misconception: stopped-at-x-not-substituted-back
worked: |
  dy/dx = 12 − 3x² = 0 → x² = 4 → x = 2 (taking x > 0).
  d²y/dx² = −6x = −12 < 0 at x = 2, so it is a maximum.
  SUBSTITUTE BACK to get the VALUE: y = 12(2) − 2³ = 24 − 8 = 16.
  Answering 2 gives the x-coordinate, not the maximum value.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "The radius of a sphere increases at a constant rate of 0.2 cm/s. Find the rate of increase of its volume when the radius is 5 cm. (V = ⁴⁄₃πr³)"
options:
  - "100π cm³/s"
  - "10π cm³/s"
  - "20π cm³/s"
  - "4π cm³/s"
answer: 2
marks: 4
misconception: connected-rates-chain-rule
worked: |
  dV/dt = dV/dr × dr/dt.
  V = ⁴⁄₃πr³ → dV/dr = 4πr². At r = 5: dV/dr = 4π(25) = 100π.
  dV/dt = 100π × 0.2 = 20π cm³/s (≈ 62.8 cm³/s).
  Quoting 100π forgets to multiply by dr/dt.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Given y = x³ + 2x, and that x increases at a rate of 0.5 units per second, find dy/dt when x = 2."
options:
  - "14"
  - "0.5"
  - "28"
  - "7"
answer: 3
marks: 3
misconception: connected-rates-multiply-not-add
worked: |
  dy/dt = dy/dx × dx/dt.
  dy/dx = 3x² + 2. At x = 2: dy/dx = 12 + 2 = 14.
  dy/dt = 14 × 0.5 = 7 units per second.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "The area of a circle is increasing at 6 cm²/s. Find the rate of increase of the radius at the instant when the radius is 3 cm."
options:
  - "π cm/s"
  - "1/π cm/s"
  - "1/(6π) cm/s"
  - "6π cm/s"
answer: 1
marks: 4
misconception: connected-rates-inverted-chain
worked: |
  A = πr² → dA/dr = 2πr. At r = 3: dA/dr = 6π.
  dA/dt = dA/dr × dr/dt → 6 = 6π × dr/dt.
  dr/dt = 6/(6π) = 1/π cm/s (≈ 0.318 cm/s).
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "A particle moves in a straight line with velocity v = 3t² − 12t + 9 m/s, where t is the time in seconds. Find the times at which the particle is instantaneously at rest."
options:
  - "t = 1 and t = 3"
  - "t = 3 only"
  - "t = 2"
  - "t = 0 and t = 4"
answer: 0
marks: 3
misconception: at-rest-means-v-zero
worked: |
  Instantaneously at rest means v = 0 (NOT a = 0).
  3t² − 12t + 9 = 0 → t² − 4t + 3 = 0 → (t − 1)(t − 3) = 0.
  t = 1 s and t = 3 s.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "A particle moves in a straight line with velocity v = 4t + 3 m/s. It starts from the origin at t = 0. Find its displacement from the origin when t = 3 s."
options:
  - "15 m"
  - "27 m"
  - "30 m"
  - "24 m"
answer: 1
marks: 3
misconception: integrate-velocity-with-constant
worked: |
  s = the integral of v dt = 2t² + 3t + c.
  At t = 0 the particle is at the origin, so s = 0 → c = 0.
  At t = 3: s = 2(9) + 3(3) = 18 + 9 = 27 m.
  Answering 15 m substitutes t = 3 into v instead of integrating.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "A particle moves in a straight line with acceleration a = 6t − 4 m/s². Its velocity is 2 m/s when t = 0. Find its velocity when t = 2 s."
options:
  - "4 m/s"
  - "14 m/s"
  - "6 m/s"
  - "8 m/s"
answer: 2
marks: 3
misconception: integration-constant-in-kinematics
worked: |
  v = the integral of a dt = 3t² − 4t + c.
  When t = 0, v = 2 → c = 2, so v = 3t² − 4t + 2.
  At t = 2: v = 3(4) − 4(2) + 2 = 12 − 8 + 2 = 6 m/s.
  Omitting the constant c gives 4 m/s.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Find the indefinite integral of (2x + 1)⁴ with respect to x."
options:
  - "(2x + 1)⁵/2 + C"
  - "(2x + 1)⁵/5 + C"
  - "8(2x + 1)³ + C"
  - "(2x + 1)⁵/10 + C"
answer: 3
marks: 2
misconception: reverse-chain-rule-divide-by-inner-coefficient
worked: |
  Raise the power by 1, divide by the new power AND by the coefficient of x inside:
  (2x + 1)⁵ ÷ (5 × 2) = (2x + 1)⁵/10, plus C.
  Check by differentiating: 5(2x + 1)⁴ × 2 ÷ 10 = (2x + 1)⁴.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Find the indefinite integral of 1/x with respect to x."
options:
  - "ln|x| + C"
  - "x⁻² /(−2) + C"
  - "x ln x + C"
  - "−1/x² + C"
answer: 0
marks: 1
misconception: power-rule-applied-to-reciprocal
worked: |
  The power rule fails for x⁻¹ because it would need a division by zero.
  The standard result is: the integral of 1/x dx = ln|x| + C.
  Check by differentiating: d/dx ln x = 1/x.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Find the indefinite integral of 3/(2x − 1) with respect to x."
options:
  - "3 ln|2x − 1| + C"
  - "(3/2) ln|2x − 1| + C"
  - "(3/2) ln|2x| + C"
  - "6 ln|2x − 1| + C"
answer: 1
marks: 2
misconception: log-integral-inner-coefficient
worked: |
  The integral of 1/(ax + b) dx = (1/a) ln|ax + b| + C.
  Here a = 2, so the integral of 3/(2x − 1) dx = 3 × (1/2) ln|2x − 1| + C = (3/2) ln|2x − 1| + C.
  Check: d/dx [(3/2) ln(2x − 1)] = (3/2) × 2/(2x − 1) = 3/(2x − 1).
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Find the indefinite integral of e^(4x) with respect to x."
options:
  - "e^(4x)/4 + C"
  - "e^(4x) + C"
  - "e^(4x)/(4x) + C"
  - "4e^(4x) + C"
answer: 0
marks: 1
misconception: exponential-integral-divide-not-multiply
worked: |
  The integral of e^(ax) dx = e^(ax)/a + C.
  With a = 4: e^(4x)/4 + C.
  Differentiating is where you MULTIPLY by 4; integrating is where you DIVIDE by 4.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Find the indefinite integral of cos 3x with respect to x, where x is in radians."
options:
  - "3 sin 3x + C"
  - "(1/3) cos 3x + C"
  - "(1/3) sin 3x + C"
  - "−(1/3) sin 3x + C"
answer: 2
marks: 2
misconception: trig-integral-divide-by-inner-coefficient
worked: |
  The integral of cos(ax) dx = (1/a) sin(ax) + C.
  With a = 3: (1/3) sin 3x + C.
  Check: d/dx[(1/3) sin 3x] = (1/3)(3 cos 3x) = cos 3x.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Find the indefinite integral of sin 2x with respect to x, where x is in radians."
options:
  - "(1/2) sin 2x + C"
  - "(1/2) cos 2x + C"
  - "−(1/2) cos 2x + C"
  - "−2 cos 2x + C"
answer: 2
marks: 2
misconception: sign-when-integrating-sine
worked: |
  The integral of sin(ax) dx = −(1/a) cos(ax) + C.
  With a = 2: −(1/2) cos 2x + C.
  The MINUS sign appears when integrating sine (and disappears when integrating cosine).
  Check: d/dx[−(1/2) cos 2x] = −(1/2)(−2 sin 2x) = sin 2x.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Evaluate the definite integral of (3x² − 2x) with respect to x, from x = 1 to x = 3."
options:
  - "26"
  - "10"
  - "20"
  - "18"
answer: 3
marks: 3
misconception: definite-integral-limit-substitution
worked: |
  Antiderivative: x³ − x².
  Upper limit first: (3³ − 3²) = 27 − 9 = 18.
  Lower limit: (1³ − 1²) = 1 − 1 = 0.
  Value = 18 − 0 = 18. No + C is needed for a definite integral.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Evaluate the definite integral of sec²x with respect to x, from x = 0 to x = π/4, where x is in RADIANS."
options:
  - "1"
  - "π/4"
  - "2"
  - "0"
answer: 0
marks: 3
misconception: radians-not-degrees-in-calculus
worked: |
  The integral of sec²x dx = tan x.
  Value = tan(π/4) − tan(0) = 1 − 0 = 1.
  The limits are in RADIANS: π/4 rad = 45°, and tan 45° = 1. A calculator in degree mode gives nonsense here.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Find the area of the region enclosed by the curve y = x² − 4 and the x-axis."
options:
  - "0"
  - "32/3"
  - "16/3"
  - "−32/3"
answer: 1
marks: 4
misconception: area-below-the-x-axis-sign
worked: |
  The curve cuts the x-axis where x² − 4 = 0 → x = −2 and x = 2.
  Between these roots the curve lies BELOW the x-axis, so the integral is negative:
  the integral of (x² − 4) dx from −2 to 2 = [x³/3 − 4x] from −2 to 2 = (8/3 − 8) − (−8/3 + 8) = −32/3.
  AREA is a positive quantity, so the area = 32/3 square units.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Find the area of the region enclosed by the curve y = x² and the line y = x."
options:
  - "1/6"
  - "1/2"
  - "5/6"
  - "1/3"
answer: 0
marks: 4
misconception: subtracting-in-the-wrong-order
worked: |
  They meet where x² = x → x(x − 1) = 0 → x = 0 and x = 1.
  Between 0 and 1 the LINE is above the CURVE, so integrate (top − bottom) = (x − x²):
  the integral from 0 to 1 = [x²/2 − x³/3] = 1/2 − 1/3 = 1/6.
  Subtracting the wrong way round gives −1/6, which cannot be an area.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "A curve is such that dy/dx = 3x² − 4x, and the curve passes through the point (2, 5). Find the equation of the curve."
options:
  - "y = 6x − 4 + 5"
  - "y = x³ − 2x²"
  - "y = x³ − 2x² + 13"
  - "y = x³ − 2x² + 5"
answer: 3
marks: 4
misconception: forgot-the-constant-of-integration
worked: |
  Integrate: y = x³ − 2x² + c. The + c is essential.
  Use the point (2, 5): 5 = 8 − 8 + c → c = 5.
  So y = x³ − 2x² + 5.
```

```yaml
type: mcq
topic: "C1 Calculus"
stem: "Find the indefinite integral of (x + 1/x)² with respect to x."
options:
  - "x³/3 + 2x + ln|x| + C"
  - "(x + 1/x)³/3 + C"
  - "x³/3 + 2x − 1/x + C"
  - "x³/3 + 1/x + C"
answer: 2
marks: 3
misconception: expand-before-integrating
worked: |
  EXPAND first — there is no chain rule in reverse here:
  (x + 1/x)² = x² + 2 + 1/x² = x² + 2 + x⁻².
  Integrating term by term: x³/3 + 2x + x⁻¹/(−1) + C = x³/3 + 2x − 1/x + C.
```

```yaml
type: short
topic: "C1 Calculus"
stem: "The curve y = x³ − 6x² + 9x + 1 has two stationary points. Find the larger of the two x-coordinates."
accepted: ["3", "x = 3"]
marks: 3
misconception: solve-derivative-equals-zero
worked: |
  dy/dx = 3x² − 12x + 9 = 3(x² − 4x + 3) = 3(x − 1)(x − 3).
  dy/dx = 0 → x = 1 or x = 3.
  The larger x-coordinate is 3.
```

```yaml
type: short
topic: "C1 Calculus"
stem: "Given y = 2x³ − 5x², find the value of d²y/dx² when x = 1."
accepted: ["2"]
marks: 2
misconception: second-derivative-differentiate-twice
worked: |
  dy/dx = 6x² − 10x.
  d²y/dx² = 12x − 10.
  At x = 1: 12 − 10 = 2.
```

```yaml
type: short
topic: "C1 Calculus"
stem: "Find the gradient of the tangent to the curve y = 2x² − 5x + 1 at the point where x = 3."
accepted: ["7", "gradient = 7"]
marks: 2
misconception: gradient-is-derivative-at-the-point
worked: |
  dy/dx = 4x − 5.
  At x = 3: dy/dx = 12 − 5 = 7.
  The gradient of the tangent is 7. (Substituting x = 3 into y instead gives 4 — that is the y-value.)
```

```yaml
type: short
topic: "C1 Calculus"
stem: "Evaluate the definite integral of (4x³ − 2x) with respect to x, from x = 1 to x = 2."
accepted: ["12"]
marks: 3
misconception: definite-integral-evaluation
worked: |
  Antiderivative: x⁴ − x².
  At x = 2: 16 − 4 = 12. At x = 1: 1 − 1 = 0.
  Value = 12 − 0 = 12.
```

```yaml
type: short
topic: "C1 Calculus"
stem: "A particle moves in a straight line with velocity v = 6t − 3t² m/s. It is at the origin when t = 0. Find its displacement, in metres, when t = 2 s."
accepted: ["4", "4 m"]
marks: 3
misconception: integrate-velocity-for-displacement
worked: |
  s = the integral of v dt = 3t² − t³ + c.
  s = 0 when t = 0, so c = 0.
  At t = 2: s = 3(4) − 8 = 12 − 8 = 4 m.
  (v ≥ 0 for 0 ≤ t ≤ 2, so the particle does not turn back.)
```

```yaml
type: short
topic: "C1 Calculus"
stem: "A container is filled so that the volume of liquid is V = 3h² cm³ when the depth is h cm. Liquid is poured in at a constant rate of 12 cm³/s. Find dh/dt, in cm/s, when h = 2."
accepted: ["1", "1 cm/s"]
marks: 3
misconception: connected-rates-of-change
worked: |
  dV/dt = dV/dh × dh/dt.
  V = 3h² → dV/dh = 6h. At h = 2: dV/dh = 12.
  12 = 12 × dh/dt → dh/dt = 1 cm/s.
```

```yaml
type: short
topic: "C1 Calculus"
stem: "Find the area, in square units, of the region bounded by the curve y = x², the x-axis and the lines x = 1 and x = 4."
accepted: ["21", "21 square units"]
marks: 3
misconception: area-under-a-curve
worked: |
  Area = the integral of x² dx from 1 to 4 = [x³/3] from 1 to 4.
  = 64/3 − 1/3 = 63/3 = 21 square units.
  The curve is above the x-axis throughout, so the integral is already positive.
```

## TEACHING

```yaml
kind: careless
topic: "Quadratics: completing the square"
checks:
  - "Halve the coefficient of x, then SUBTRACT the square you just added."
  - "If the x² coefficient is not 1, factor it out of the x-terms FIRST."
  - "When you take the factor back in, multiply the constant inside by it too."
```

```yaml
kind: careless
topic: "Quadratics: maximum, minimum and range"
checks:
  - "a > 0 gives a MINIMUM; a < 0 gives a MAXIMUM. Check the sign before you write min/max."
  - "The minimum VALUE is the y-part of (x − h)² + k, not the x-part."
  - "Range is a statement about f(x), not about x: write f(x) ≥ k."
```

```yaml
kind: careless
topic: "Discriminant: roots, tangency and range of values"
checks:
  - "b² − 4ac > 0 two distinct roots; = 0 equal roots (tangent); < 0 no real roots."
  - "For a tangent to a curve, set the discriminant of the combined equation to ZERO."
  - "Rearrange to = 0 before reading off a, b and c — signs included."
  - "Sketch the k-parabola to decide whether the answer is 'between' or 'outside' the roots."
```

```yaml
kind: careless
topic: "Quadratic inequalities"
checks:
  - "Always bring everything to one side so the other side is 0."
  - "Positive quadratic: below zero BETWEEN the roots; above zero OUTSIDE them."
  - "Never divide an inequality by an unknown — it may be negative and flip the sign."
  - "Use ≤ / ≥ only if the original inequality was 'or equal to'."
```

```yaml
kind: careless
topic: "Simultaneous equations with one non-linear"
checks:
  - "Substitute from the LINEAR equation into the non-linear one, not the other way round."
  - "You should end up with a quadratic — expect TWO pairs of answers."
  - "Substitute each x back into the LINEAR equation (it is safer) and pair the answers up."
  - "State answers as coordinate pairs, so the x and y do not get mismatched."
```

```yaml
kind: careless
topic: "Surds: simplifying, rationalising and solving"
checks:
  - "Pull out the largest square factor: √50 = √25 × √2 = 5√2."
  - "To rationalise, multiply top AND bottom by the CONJUGATE (change the middle sign only)."
  - "(a − b)(a + b) = a² − b², so the denominator becomes an integer."
  - "Simplify each surd before adding or subtracting — only like surds combine."
  - "Isolate the surd before you square, because squaring can create extra roots."
  - "ALWAYS substitute back into the ORIGINAL equation and reject any root that fails."
```

```yaml
kind: careless
topic: "Indices: laws and index equations"
checks:
  - "Write both sides to the SAME base, then equate the indices."
  - "a^0 = 1, a^(−n) = 1/aⁿ and a^(1/n) is the n-th root — check before you cancel."
  - "(aᵐ)ⁿ = a^(mn): multiply the indices, do not add them."
  - "If a common base is impossible, take logarithms of both sides instead."
```

```yaml
kind: careless
topic: "Remainder and factor theorem"
checks:
  - "Divisor (x − a) means substitute x = a; divisor (x + a) means substitute x = −a."
  - "For (2x + 1), substitute x = −1/2, not x = −1."
  - "Factor means the remainder is ZERO: set f(a) = 0 and solve for the unknown."
  - "The remainder theorem gives the remainder only — you still need division for the quotient."
```

```yaml
kind: careless
topic: "Factorising a cubic"
checks:
  - "Test the factors of the constant term (±1, ±2, ±3, ...) until f(a) = 0."
  - "Divide by the known linear factor to get a quadratic, then factorise that quadratic."
  - "Expand your final answer mentally to check the constant term and the x³ coefficient."
  - "Factorise COMPLETELY — a quadratic factor that still factorises loses a mark."
```

```yaml
kind: careless
topic: "Sum and difference of cubes"
checks:
  - "a³ + b³ = (a + b)(a² − ab + b²); a³ − b³ = (a − b)(a² + ab + b²)."
  - "The middle sign of the quadratic factor is the OPPOSITE of the sign in the bracket."
  - "There is no 2ab: it is a² − ab + b², not a² − 2ab + b²."
  - "Identify a and b first: 8x³ = (2x)³, 27 = 3³."
```

```yaml
kind: careless
topic: "Partial fractions: form and constants"
checks:
  - "The fraction must be PROPER first — if not, divide out the polynomial part."
  - "Distinct linear factor (ax + b) takes a constant numerator A."
  - "Repeated factor (x − a)² needs BOTH A/(x − a) and B/(x − a)²."
  - "An irreducible quadratic (x² + c) needs a LINEAR numerator (Bx + C)."
  - "Cover-up: substitute the value of x that makes each linear factor zero."
  - "For a quadratic factor, compare coefficients of x², x and the constant."
  - "Check by recombining over a common denominator."
```

```yaml
kind: careless
topic: "Binomial theorem: the general term"
checks:
  - "The general term of (a + b)ⁿ is C(n,r) a^(n−r) bʳ — count r from 0."
  - "Raise the WHOLE bracket term to the power: (2x)³ = 8x³, not 2x³."
  - "Ascending powers of x means start with the constant term."
  - "For the term independent of x, set the total power of x to ZERO and solve for r."
  - "A minus inside the bracket makes the signs alternate: +, −, +, −."
  - "'Coefficient of x³' means the NUMBER only — do not write x³ in your answer."
```

```yaml
kind: careless
topic: "Laws of logarithms"
checks:
  - "log a + log b = log(ab); log a − log b = log(a/b); n log a = log(aⁿ)."
  - "log(a + b) is NOT log a + log b — there is no law for the log of a sum."
  - "Combine to a single log before removing the log."
  - "Change of base: log_b a = (log a)/(log b) — needed when the base is not 10 or e."
```

```yaml
kind: careless
topic: "Logarithmic equations and the domain"
checks:
  - "Check the DOMAIN: the argument of every logarithm must be strictly positive."
  - "Solve the equation, then reject any root that makes an argument zero or negative."
  - "log_b a = c means a = b^c — get the base and the index the right way round."
  - "State the rejected root and the reason; that is where the final mark sits."
```

```yaml
kind: careless
topic: "Exponential equations"
checks:
  - "Same base? Equate the indices. Different base? Take ln or lg of BOTH sides."
  - "For e^(2x) + pe^x + q = 0, substitute u = eˣ and solve the quadratic."
  - "eˣ is always positive, so REJECT any negative value of u."
  - "ln(eˣ) = x, and e^(ln x) = x — use them to undo each other."
```

```yaml
kind: careless
topic: "Exponential growth and decay models"
checks:
  - "Write down the model, substitute the known values, THEN take logs."
  - "Half-life: set the amount to half the initial amount, not to zero."
  - "A decay model has a NEGATIVE index; check the sign before solving."
  - "Keep full accuracy in the working and round only at the end (3 s.f.)."
```

```yaml
kind: careless
topic: "Coordinate geometry: lines"
checks:
  - "Gradient = (y₂ − y₁)/(x₂ − x₁) — keep the order of subtraction consistent top and bottom."
  - "Parallel: m₁ = m₂. Perpendicular: m₁ × m₂ = −1 (negative RECIPROCAL)."
  - "Midpoint = average of the coordinates; distance uses Pythagoras."
  - "Shoelace formula for area — remember the ½ and take the modulus."
```

```yaml
kind: careless
topic: "Circles: centre and radius"
checks:
  - "(x − a)² + (y − b)² = r²: the centre signs FLIP, and the right side is r SQUARED."
  - "From the general form, complete the square in x and in y separately."
  - "If the x² and y² coefficients are not 1, DIVIDE the whole equation through first."
  - "Radius = √(that number) — do not quote r² as the radius."
```

```yaml
kind: careless
topic: "Circles: tangents and normals"
checks:
  - "The tangent at a point is PERPENDICULAR to the radius at that point."
  - "The normal at a point passes THROUGH the centre."
  - "Find the radius gradient first, then take the negative reciprocal for the tangent."
  - "Substitute the point of contact into your final line to check it fits."
```

```yaml
kind: careless
topic: "Linear law: choosing X and Y, gradient and intercept"
checks:
  - "Rearrange into the form Y = mX + c where X and Y contain only the variables."
  - "y = Axᵇ take lg of both sides: lg y = b lg x + lg A, so plot lg y against lg x."
  - "y = kbˣ take lg: lg y = (lg b)x + lg k, so plot lg y against x."
  - "y = ax² + bx divide by x: y/x = ax + b, so plot y/x against x."
  - "Read the gradient from the STRAIGHT LINE, not from one raw data point."
  - "If the intercept is lg A, then A = 10^(intercept) — remember to 'un-log' it."
```

```yaml
kind: careless
topic: "Trigonometry: exact values and quadrants"
checks:
  - "Learn the exact values for 30°, 45° and 60° (and their radian equivalents)."
  - "ASTC: All, Sine, Tangent, Cosine are positive in quadrants 1, 2, 3, 4."
  - "Find the BASIC (acute) angle first, then place it in the correct quadrants."
  - "A negative value never changes the basic angle — only the quadrants."
```

```yaml
kind: careless
topic: "Trig equations: all solutions in the interval"
checks:
  - "Read the interval and note whether it is in DEGREES or RADIANS."
  - "Set the calculator to the matching mode before you press anything."
  - "Find every solution in the interval, not just the first one your calculator gives."
  - "Give angles in degrees to 1 d.p. unless told otherwise."
```

```yaml
kind: careless
topic: "Trig equations: multiple and compound angles"
checks:
  - "For sin 2x or cos(2x + 30°), transform the INTERVAL for the new angle first."
  - "0° ≤ x ≤ 360° becomes 0° ≤ 2x ≤ 720° — twice as many solutions."
  - "Solve for the whole angle, then divide (or subtract) at the very END."
  - "Count your solutions: a 3x equation over one revolution usually gives 6."
```

```yaml
kind: careless
topic: "Proving a trigonometric identity"
checks:
  - "Work on ONE side only and transform it until it matches the other side."
  - "Never move terms across the ≡ sign as if it were an equation to solve."
  - "Standard moves: common denominator, factorise, use sin²θ + cos²θ = 1."
  - "Convert everything to sines and cosines if you are stuck."
  - "Finish with a line stating that LHS = RHS (proved)."
```

```yaml
kind: careless
topic: "R-formula: form and sign convention"
checks:
  - "R = √(a² + b²) — it is a Pythagorean combination, never a + b."
  - "Match the expansion term by term to get R cos α and R sin α."
  - "tan α = (the sine coefficient)/(the cosine coefficient); take α acute."
  - "a sin θ − b cos θ points you to R sin(θ − α): keep the sign convention consistent."
```

```yaml
kind: careless
topic: "R-formula: maximum and minimum"
checks:
  - "Max of R sin(θ ± α) is R; min is −R."
  - "If there is a constant added on, add it to BOTH the max and the min."
  - "The maximum occurs when the bracket equals 90° (or π/2 rad) — solve for θ if asked."
  - "For 1/(R cos(...) + c) the maximum of the fraction happens at the MINIMUM of the bottom."
```

```yaml
kind: careless
topic: "Trig graphs: amplitude and period"
checks:
  - "y = a sin(bx) + c: amplitude |a|, period 360°/b (or 2π/b), centre line y = c."
  - "A bigger b SQUEEZES the graph — the period gets smaller, not bigger."
  - "tan has period 180° (π rad), not 360°, and has no amplitude."
  - "Read the number of cycles in the given interval to check your period."
```

```yaml
kind: careless
topic: "Differentiation: the chain rule"
checks:
  - "Differentiate the outside, then MULTIPLY by the derivative of the inside."
  - "(ax + b)ⁿ n(ax + b)^(n−1) × a — the × a is the mark most often lost."
  - "Rewrite roots and reciprocals as powers before differentiating."
  - "Check: does your answer still contain the bracket? It usually should."
```

```yaml
kind: careless
topic: "Differentiation: product and quotient rules"
checks:
  - "Product: u'v + uv'. Quotient: (u'v − uv')/v² — the ORDER matters in the quotient rule."
  - "Write u, v, u' and v' out separately before assembling."
  - "The square is on the DENOMINATOR only: v², not (uv)²."
  - "A quotient with a constant denominator is not a quotient — just divide."
```

```yaml
kind: careless
topic: "Differentiating trig, exponential and log functions"
checks:
  - "These standard results assume x is in RADIANS."
  - "d/dx sin(f) = f' cos(f); d/dx cos(f) = −f' sin(f); d/dx tan(f) = f' sec²(f)."
  - "d/dx e^(f) = f' e^(f) — the index never comes down as a power."
  - "d/dx ln(f) = f'/f — divide by the inside, do not multiply."
```

```yaml
kind: careless
topic: "Tangents and normals to a curve"
checks:
  - "Gradient of the tangent = dy/dx evaluated AT the given x."
  - "Gradient of the normal = −1 ÷ (tangent gradient)."
  - "Use y − y₁ = m(x − x₁) with the POINT ON THE CURVE, not the origin."
  - "If only x is given, substitute into y to get the y-coordinate first."
```

```yaml
kind: careless
topic: "Stationary points and their nature"
checks:
  - "Set dy/dx = 0 and solve — do not divide by x, or you will lose a root."
  - "Substitute back into y to get the COORDINATES, not just the x-values."
  - "Second-derivative test: d²y/dx² > 0 minimum; < 0 maximum."
  - "If d²y/dx² = 0, the test fails — use the SIGN of dy/dx just left and right instead."
  - "'Maximum value' means the y-value, not the x-value."
```

```yaml
kind: careless
topic: "Connected rates of change"
checks:
  - "Write the chain: dA/dt = dA/dr × dr/dt, and check the units cancel."
  - "Underline what you are GIVEN and what you WANT before you start."
  - "'Increasing at' is positive; 'decreasing at' or 'leaking' is NEGATIVE."
  - "Substitute the given instant only AFTER you have differentiated."
```

```yaml
kind: careless
topic: "Kinematics: displacement, velocity, acceleration"
checks:
  - "Differentiate to go s v a; integrate to go a v s."
  - "'At rest' means v = 0. 'Maximum velocity' means a = 0."
  - "Integration constants come from the initial conditions — read them carefully."
  - "Displacement can be negative; DISTANCE cannot. If the particle turns back, split the integral."
```

```yaml
kind: careless
topic: "Integration: indefinite integrals and + C"
checks:
  - "Every indefinite integral needs + C. No exceptions."
  - "Raise the power by 1 and divide by the NEW power."
  - "For (ax + b)ⁿ, also divide by a."
  - "The power rule does not work for 1/x — that one gives ln|x|."
  - "Check any integral by differentiating your answer back."
```

```yaml
kind: careless
topic: "Definite integrals"
checks:
  - "No + C for a definite integral."
  - "Substitute the UPPER limit first, then subtract the value at the lower limit."
  - "Keep the brackets: [F(b)] − [F(a)], especially when F(a) is negative."
  - "If the limits are in radians, keep the calculator in radian mode."
```

```yaml
kind: careless
topic: "Integrating trig, exponential and reciprocal functions"
checks:
  - "The integral of cos(ax) = (1/a) sin(ax) + C; the integral of sin(ax) = −(1/a) cos(ax) + C."
  - "Integrating sine introduces a MINUS sign; integrating cosine does not."
  - "The integral of e^(ax) = e^(ax)/a + C — DIVIDE by a (you multiply when differentiating)."
  - "The integral of 1/(ax + b) = (1/a) ln|ax + b| + C."
  - "The integral of sec²(ax) = (1/a) tan(ax) + C."
```

```yaml
kind: careless
topic: "Area under a curve and below the x-axis"
checks:
  - "Sketch first, and find where the curve meets the x-axis."
  - "A region BELOW the x-axis gives a negative integral — take the modulus for the area."
  - "If the curve crosses the axis inside the limits, SPLIT the integral at the crossing."
  - "Area is always positive; include 'square units' in your answer."
```

```yaml
kind: careless
topic: "Area bounded by a curve and a line"
checks:
  - "Find the intersection points first — they become your limits."
  - "Integrate (top curve − bottom curve) between those limits."
  - "A negative answer means you subtracted the wrong way round."
  - "Alternatively, area under the line minus area under the curve gives the same result."
```

```yaml
kind: careless
topic: "Reading the question: radians, degrees, accuracy and final checks"
checks:
  - "Any calculus with trig functions is in RADIANS. Solving a trig equation may be in degrees."
  - "Set the calculator mode to match the question EVERY time."
  - "Answers to 3 significant figures, or 1 decimal place for angles in degrees."
  - "Do not round in the middle of a calculation — store the full value."
  - "Did every 'find the set of values' answer end up as an inequality, not a single number?"
  - "Did every indefinite integral get its + C, and every trig equation ALL its solutions?"
  - "Did you reject the invalid roots (negative log arguments, negative surds, negative lengths)?"
```

```yaml
kind: definition
term: "Discriminant"
topic: "A2 Equations & Inequalities"
body: "The expression b² − 4ac for the quadratic ax² + bx + c = 0. It is positive for two distinct real roots, zero for two equal roots (a tangent), and negative for no real roots."
```

```yaml
kind: definition
term: "Factor Theorem"
topic: "A4 Polynomials & Partial Fractions"
body: "If f(a) = 0 then (x − a) is a factor of the polynomial f(x), and conversely. For a divisor (bx + a), test x = −a/b."
```

```yaml
kind: definition
term: "Remainder Theorem"
topic: "A4 Polynomials & Partial Fractions"
body: "When a polynomial f(x) is divided by (x − a), the remainder is f(a). It gives the remainder only, not the quotient."
```

```yaml
kind: definition
term: "Stationary point"
topic: "C1 Calculus"
body: "A point on a curve where dy/dx = 0. It may be a maximum, a minimum or a stationary point of inflexion."
```

```yaml
kind: definition
term: "Second-derivative test"
topic: "C1 Calculus"
body: "At a stationary point: if d²y/dx² < 0 the point is a maximum; if d²y/dx² > 0 it is a minimum; if d²y/dx² = 0 the test is inconclusive and the sign of dy/dx on each side must be examined."
```

```yaml
kind: definition
term: "Normal"
topic: "C1 Calculus"
body: "The straight line through a point on a curve that is perpendicular to the tangent there. Its gradient is the negative reciprocal of the tangent gradient."
```

```yaml
kind: definition
term: "Definite integral"
topic: "C1 Calculus"
body: "The value F(b) − F(a), where F is an antiderivative of the integrand. It needs no constant of integration, and it represents a signed area, so a region below the x-axis contributes a negative amount."
```

```yaml
kind: definition
term: "Amplitude"
topic: "G1 Trigonometry"
body: "Half the difference between the maximum and minimum values of a sine or cosine curve. For y = a sin(bx) + c the amplitude is |a|. The tangent function has no amplitude."
```

```yaml
kind: definition
term: "Period"
topic: "G1 Trigonometry"
body: "The horizontal length of one complete cycle of a periodic function. For y = a sin(bx) the period is 360°/b (2π/b radians); for y = a tan(bx) it is 180°/b (π/b radians)."
```

```yaml
kind: definition
term: "Natural logarithm"
topic: "A6 Exponential & Logarithmic Functions"
body: "The logarithm to base e, written ln x. It is defined only for x > 0, and it undoes the exponential function: ln(eˣ) = x and e^(ln x) = x."
```
