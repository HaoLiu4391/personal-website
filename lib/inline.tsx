import type { ReactNode } from "react";

// Renders the two bits of markup used in constants: [label](url) and **bold**.
const TOKEN = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;

export function Inline({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(TOKEN)) {
    const at = m.index ?? 0;
    if (at > last) parts.push(text.slice(last, at));
    parts.push(
      m[1] ? (
        <a key={at} href={m[2]}>
          {m[1]}
        </a>
      ) : (
        <strong key={at}>{m[3]}</strong>
      ),
    );
    last = at + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
