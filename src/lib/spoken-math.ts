// Turns written maths notation into the words a tutor would actually say.
//
// Lesson text is used twice: it is DISPLAYED (where `<Sci>` renders `^` and `_`
// as real superscripts and subscripts, so `t^2` looks like t squared on the
// page) and it is SPOKEN by Gugu. Without this transform the two pull apart:
// text written for the eye gets read out as "t caret 2", and text written for
// the ear shows up on screen as "t squared" in the middle of a formula.
//
// So: author every formula in notation, and run it through here on the way to
// the voice. Both the player (via speak) and the TTS pre-generator apply it, so
// the generated file and the line the player asks for hash identically.
//
// Deliberately conservative: it only fires on real notation, so ordinary prose
// passes through untouched and existing generated audio stays valid.

const ONES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function power(base: string, exp: string): string {
  if (exp === "2") return `${base} squared`;
  if (exp === "3") return `${base} cubed`;
  return `${base} to the power ${exp}`;
}

export function spokenMath(text: string): string {
  let s = text;

  // Compound units first, before the generic power rules break them up.
  s = s.replace(/\bm\/s\^2\b/g, "metres per second squared");
  s = s.replace(/\bkg\/m\^3\b/g, "kilograms per cubic metre");
  s = s.replace(/\bm\/s\b/g, "metres per second");
  s = s.replace(/\bN\/kg\b/g, "newtons per kilogram");
  s = s.replace(/\bN\s?m\b/g, "newton metres");

  // Powers of ten keep their sign: 10^-3 -> "10 to the power minus 3".
  s = s.replace(/\b10\^\{?(-?\d+)\}?/g, (_m, n: string) =>
    `10 to the power ${n.startsWith("-") ? `minus ${n.slice(1)}` : n}`,
  );

  // General exponents, braced or single character: v^2, t^{n}.
  s = s.replace(/([A-Za-z0-9])\^\{([^}]+)\}/g, (_m, b: string, e: string) => power(b, e));
  s = s.replace(/([A-Za-z0-9])\^(-?\w)/g, (_m, b: string, e: string) => power(b, e));

  // Single-digit subscripts read as words: F_1 -> "F one".
  s = s.replace(/([A-Za-z])_\{?(\d)\}?/g, (_m, v: string, d: string) => `${v} ${ONES[Number(d)]}`);

  // Common fractions and operators. The +, - and ÷ rules are anchored to digits
  // on both sides so ordinary prose, hyphenated words and ranges are untouched;
  // only real arithmetic is spoken out.
  s = s.replace(/½/g, "one half");
  s = s.replace(/\b1\/2\b/g, "one half");
  s = s.replace(/\s[×*]\s/g, " times ");
  s = s.replace(/\s÷\s/g, " divided by ");
  s = s.replace(/(\d)\s\+\s(?=[\d(])/g, "$1 plus ");
  s = s.replace(/(\d)\s[-−]\s(?=[\d(])/g, "$1 minus ");
  s = s.replace(/\s=\s/g, " equals ");

  return s;
}
