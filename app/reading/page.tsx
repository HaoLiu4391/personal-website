import type { Metadata } from "next";

import { BOOKS } from "@/data/books";

export const metadata: Metadata = { title: "Reading · Hao Liu" };

export default function Reading() {
  const categories = Array.from(new Set(BOOKS.map((b) => b.category)));

  return (
    <main>
      <h1>Reading</h1>
      <p className="muted">Books I have read and would recommend, roughly by subject.</p>
      {categories.map((category) => (
        <section key={category}>
          <h2>{category}</h2>
          <ul className="entries">
            {BOOKS.filter((b) => b.category === category).map((b) => (
              <li key={b.title}>
                {b.title} <span className="muted">· {b.author}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
