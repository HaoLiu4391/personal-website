import type { Metadata } from "next";

import { FRIENDS } from "@/data/friends";

export const metadata: Metadata = { title: "Friends · Hao Liu" };

export default function Friends() {
  return (
    <main>
      <h1>Friends</h1>
      <ul className="entries">
        {FRIENDS.map((f) => (
          <li key={f.name}>
            <a href={f.website}>{f.name}</a>
            <div className="muted zh-text">{f.description}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
