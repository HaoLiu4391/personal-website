"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { BASE, NAV, SITE } from "@/constants";

// A small Conway's Game of Life next to the name. One generation every half
// second, reseeded when it dies out or every few minutes. Visitors can draw
// live cells on it; it stays still if they prefer reduced motion.
function Life() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const W = 50, H = 12, S = 4;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * S * dpr;
    canvas.height = H * S * dpr;
    ctx.scale(dpr, dpr);

    const seed = () =>
      Array.from({ length: H }, () => Array.from({ length: W }, () => Math.random() < 0.28));
    let grid = seed();
    let generation = 0;
    let drawing = false;

    const step = () => {
      const next = grid.map((row, y) =>
        row.map((alive, x) => {
          let n = 0;
          for (let dy = -1; dy <= 1; dy++)
            for (let dx = -1; dx <= 1; dx++)
              if ((dx || dy) && grid[(y + dy + H) % H][(x + dx + W) % W]) n++;
          return alive ? n === 2 || n === 3 : n === 3;
        }),
      );
      generation++;
      const population = next.flat().filter(Boolean).length;
      grid = population < 6 || generation % 400 === 0 ? seed() : next;
    };

    const draw = () => {
      ctx.clearRect(0, 0, W * S, H * S);
      ctx.fillStyle = getComputedStyle(canvas).color;
      grid.forEach((row, y) =>
        row.forEach((alive, x) => {
          if (alive) ctx.fillRect(x * S, y * S, S - 1, S - 1);
        }),
      );
    };

    // The canvas is scaled by CSS, so map the pointer through its box.
    const paint = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      const x = Math.floor(((e.clientX - r.left) / r.width) * W);
      const y = Math.floor(((e.clientY - r.top) / r.height) * H);
      if (x < 0 || x >= W || y < 0 || y >= H) return;
      grid[y][x] = true;
      draw();
    };
    const down = (e: PointerEvent) => {
      drawing = true;
      try {
        canvas.setPointerCapture(e.pointerId);
      } catch {
        // capture only keeps the stroke going outside the canvas
      }
      paint(e);
    };
    const move = (e: PointerEvent) => drawing && paint(e);
    const up = () => (drawing = false);
    canvas.addEventListener("pointerdown", down);
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerup", up);
    canvas.addEventListener("pointercancel", up);

    draw();
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = still
      ? undefined
      : setInterval(() => {
          if (document.hidden || drawing) return;
          step();
          draw();
        }, 500);
    return () => {
      clearInterval(timer);
      canvas.removeEventListener("pointerdown", down);
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerup", up);
      canvas.removeEventListener("pointercancel", up);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="life"
      aria-hidden="true"
      title="Conway's Game of Life. You can draw on it."
    />
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => {
      const set = document.documentElement.dataset.theme;
      setTheme(set === "dark" || (!set && mq.matches) ? "dark" : "light");
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const flip = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // private windows can refuse storage; the switch still works for this visit
    }
    setTheme(next);
  };

  return (
    <button type="button" className="theme" onClick={flip}>
      {theme === "dark" ? "light" : "dark"}
    </button>
  );
}

// j and k jump to the next and previous section heading, t switches the theme.
function Keys() {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const el = e.target as HTMLElement;
      if (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)) return;

      if (e.key === "t") {
        document.querySelector<HTMLButtonElement>(".theme")?.click();
        return;
      }
      if (e.key !== "j" && e.key !== "k") return;

      // Headings stop 24px below the top (scroll-margin-top in the CSS).
      const heads = Array.from(document.querySelectorAll<HTMLElement>("main h1, main h2"));
      const top = (h: HTMLElement) => h.getBoundingClientRect().top;
      const target =
        e.key === "j" ? heads.find((h) => top(h) > 28) : heads.reverse().find((h) => top(h) < 20);
      if (target) target.scrollIntoView({ block: "start" });
      else if (e.key === "k") window.scrollTo(0, 0);
    };
    window.addEventListener("keydown", onKey);

    console.log(`.O.\n..O\nOOO\n\nsource: ${SITE.source}\nplain text: ${window.location.origin}${BASE}/hao.txt`);

    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return null;
}

export function Header() {
  return (
    <header>
      <div className="top">
        <Link href="/" className="name">
          {SITE.name}
          <span className="zh">{SITE.zh}</span>
        </Link>
        <Life />
      </div>
      <nav>
        {NAV.map((item) => (
          <Link key={item.label} href={item.href}>
            {item.label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
      <Keys />
    </header>
  );
}

// COMMIT and UPDATED are filled in at build time by next.config.js.
const COMMIT = process.env.COMMIT ?? "";
const UPDATED = process.env.UPDATED || SITE.updated;

export function Footer() {
  return (
    <footer>
      <span>
        updated {UPDATED}
        {COMMIT && (
          <>
            {" "}(<a href={`${SITE.source}/commit/${COMMIT}`}>{COMMIT}</a>)
          </>
        )}
      </span>
      <a href={`${BASE}/hao.txt`}>plain text</a>
      <span className="keys">j/k sections, t theme</span>
      <a className="source" href={SITE.source}>
        source
      </a>
    </footer>
  );
}
