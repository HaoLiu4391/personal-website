"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { NAV, SITE } from "@/constants";

// A small Conway's Game of Life next to the name. One generation every half
// second, reseeded when it dies out, every few minutes, or on click; still if
// the visitor prefers reduced motion.
function Life() {
  const ref = useRef<HTMLCanvasElement>(null);
  const reseed = useRef(() => {});

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

    reseed.current = () => {
      grid = seed();
      draw();
    };

    draw();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => {
      if (document.hidden) return;
      step();
      draw();
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <canvas
      ref={ref}
      className="life"
      aria-hidden="true"
      title="Conway's Game of Life (click to reseed)"
      onClick={() => reseed.current()}
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
    </header>
  );
}

// COMMIT is filled in at build time by next.config.js.
const COMMIT = process.env.COMMIT ?? "";

export function Footer() {
  return (
    <footer>
      <span>last updated {SITE.updated}</span>
      {COMMIT && (
        <span>
          build <a href={`${SITE.source}/commit/${COMMIT}`}>{COMMIT}</a>
        </span>
      )}
      <a className="source" href={SITE.source}>
        source
      </a>
    </footer>
  );
}
