import { EDUCATION, INTRO, NEWS, PROJECTS, PUBLICATIONS, SITE } from "@/constants";

// The home page as 72-column plain text, served at /hao.txt.
// Links in the text become numbered references listed at the end.

const WIDTH = 72;
const HOME = "https://haoliu4391.github.io/personal-website/";

// Word-wraps text; the first line starts at `first` spaces, the rest at `indent`.
function wrap(text: string, indent: number, first = indent): string[] {
  const lines: string[] = [];
  let line = " ".repeat(first);
  let empty = true;
  for (const word of text.split(/\s+/).filter(Boolean)) {
    if (!empty && line.length + 1 + word.length > WIDTH) {
      lines.push(line);
      line = " ".repeat(indent);
      empty = true;
    }
    line += (empty ? "" : " ") + word;
    empty = false;
  }
  lines.push(line);
  return lines;
}

// Wraps text after a fixed-width label such as a date column.
function labelled(label: string, text: string): string[] {
  return wrap(text, label.length, label.length).map((l, i) => (i ? l : label + l.trimStart()));
}

export function renderPlainText(): string {
  const refs: string[] = [];
  const cite = (url: string) => {
    let n = refs.indexOf(url) + 1;
    if (!n) n = refs.push(url);
    return `[${n}]`;
  };
  const plain = (s: string) =>
    s
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, url) => `${label} ${cite(url)}`)
      .replace(/\*\*([^*]+)\*\*/g, "$1");

  const out: string[] = [];
  const head = (title: string) => out.push("", title.toUpperCase());

  out.push(`${SITE.name} (${SITE.zh})`);
  out.push("PhD student, Cognitive Sciences, UC Irvine");
  out.push(`${SITE.email}  ${HOME}`);

  head("About");
  INTRO.forEach((p, i) => {
    if (i) out.push("");
    out.push(...wrap(plain(p), 2));
  });

  head("News");
  for (const n of NEWS) out.push(...labelled(`  ${n.date}  `, plain(n.text)));

  head("Publications");
  PUBLICATIONS.forEach((p, i) => {
    if (i) out.push("");
    out.push(...wrap(p.title, 2));
    out.push(...wrap(plain(p.authors), 4));
    out.push(...wrap(`${p.venue}. ${p.links.map((l) => `${l.label} ${cite(l.url)}`).join(", ")}`, 4));
  });

  head("Projects");
  out.push("  * has a paper");
  for (const p of PROJECTS) {
    out.push("");
    const lead = `  ${p.years.padEnd(8)}${p.paper ? "*" : " "} `;
    const pad = " ".repeat(lead.length);
    const where = [p.where && plain(p.where), p.ongoing && "ongoing"].filter(Boolean).join(", ");
    out.push(...labelled(lead, plain(p.title)));
    if (where) out.push(...wrap(where, pad.length));
    for (const b of p.bullets ?? []) out.push(...labelled(`${pad}- `, b));
  }

  head("Background");
  for (const e of EDUCATION) out.push(...labelled(`  ${e.years.padEnd(9)}`, e.text));

  head("References");
  refs.forEach((url, i) => out.push(`  [${i + 1}] ${url}`));

  out.push("", `Plain-text version of ${HOME}`);
  return out.join("\n") + "\n";
}
