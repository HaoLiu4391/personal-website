import type { ReactNode } from "react";
import { PROFESSOR_LINKS } from "@/constants";

export function renderWithProfLinks(text: string) {
  const names = Object.keys(PROFESSOR_LINKS).sort((a, b) => b.length - a.length);
  const parts: ReactNode[] = [];
  let remaining = text;
  let keyIdx = 0;

  while (remaining.length > 0) {
    let earliestIndex = remaining.length;
    let matchedName = "";

    for (const name of names) {
      const idx = remaining.indexOf(name);
      if (idx !== -1 && idx < earliestIndex) {
        earliestIndex = idx;
        matchedName = name;
      }
    }

    if (matchedName) {
      if (earliestIndex > 0) {
        parts.push(remaining.substring(0, earliestIndex));
      }
      parts.push(
        <a
          key={keyIdx++}
          href={PROFESSOR_LINKS[matchedName]}
          target="_blank"
          rel="noreferrer noopener"
          className="text-amber-400 hover:text-amber-300 underline decoration-amber-400/30 hover:decoration-amber-400 transition-colors"
        >
          {matchedName}
        </a>
      );
      remaining = remaining.substring(earliestIndex + matchedName.length);
    } else {
      parts.push(remaining);
      break;
    }
  }

  return <>{parts}</>;
}
