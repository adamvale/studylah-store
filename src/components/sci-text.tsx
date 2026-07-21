import { Fragment, type ReactNode } from "react";

// Renders inline science and maths notation so formulas look like the real
// exam: `_` marks a subscript and `^` a superscript, each taking a single
// character or a {group}. Examples:
//   H_2O            -> H(sub 2)O
//   C_xH_8          -> C(sub x)H(sub 8)
//   2Cl_2           -> 2Cl(sub 2)          (leading coefficient stays full size)
//   Cu^{2+}         -> Cu(sup 2+)
//   SO_4^{2-}       -> SO(sub 4)(sup 2-)
//   x^2, 10^{-3}    -> exponents
// Anything without markers (including Unicode subscripts already in curated
// content) passes through unchanged. Guru is prompted to write these markers,
// so scanned questions and tutoring read like the paper, not flat text.
export function Sci({ children }: { children: string }): ReactNode {
  const text = children ?? "";
  const nodes: ReactNode[] = [];
  let buf = "";
  let key = 0;
  const flush = () => {
    if (buf) {
      nodes.push(<Fragment key={`t${key++}`}>{buf}</Fragment>);
      buf = "";
    }
  };
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if ((ch === "_" || ch === "^") && i + 1 < text.length) {
      let token = "";
      let j = i + 1;
      if (text[j] === "{") {
        const end = text.indexOf("}", j);
        if (end === -1) {
          buf += ch;
          continue;
        }
        token = text.slice(j + 1, end);
        j = end;
      } else {
        token = text[j];
      }
      flush();
      nodes.push(
        ch === "_" ? <sub key={`s${key++}`}>{token}</sub> : <sup key={`s${key++}`}>{token}</sup>
      );
      i = j;
    } else {
      buf += ch;
    }
  }
  flush();
  return <>{nodes}</>;
}
