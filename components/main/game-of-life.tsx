"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInFromLeft } from "@/lib/motion";

const CELL_SIZE = 8;
const PRESETS = {
  glider: [
    [0, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  pulsar: [
    // Top
    [2, 4], [2, 5], [2, 6], [2, 10], [2, 11], [2, 12],
    [4, 2], [4, 7], [4, 9], [4, 14],
    [5, 2], [5, 7], [5, 9], [5, 14],
    [6, 2], [6, 7], [6, 9], [6, 14],
    [7, 4], [7, 5], [7, 6], [7, 10], [7, 11], [7, 12],
    // Bottom (mirror)
    [9, 4], [9, 5], [9, 6], [9, 10], [9, 11], [9, 12],
    [10, 2], [10, 7], [10, 9], [10, 14],
    [11, 2], [11, 7], [11, 9], [11, 14],
    [12, 2], [12, 7], [12, 9], [12, 14],
    [14, 4], [14, 5], [14, 6], [14, 10], [14, 11], [14, 12],
  ],
  gosperGun: [
    [5,1],[5,2],[6,1],[6,2],
    [3,13],[3,14],[4,12],[4,16],[5,11],[5,17],[6,11],[6,15],[6,17],[6,18],[7,11],[7,17],[8,12],[8,16],[9,13],[9,14],
    [1,25],[2,23],[2,25],[3,21],[3,22],[4,21],[4,22],[5,21],[5,22],[6,23],[6,25],[7,25],
    [3,35],[3,36],[4,35],[4,36],
  ],
};

export const GameOfLife = () => {
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gridRef = useRef<boolean[][]>([]);
  const [running, setRunning] = useState(false);
  const [generation, setGeneration] = useState(0);
  const runningRef = useRef(false);
  const [cols, setCols] = useState(80);
  const [rows, setRows] = useState(50);
  const [speed, setSpeed] = useState(100);
  const isDrawing = useRef(false);

  const createEmptyGrid = useCallback(
    (c: number, r: number) => Array.from({ length: r }, () => Array(c).fill(false)),
    []
  );

  // Initialize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const container = canvas.parentElement;
    if (!container) return;

    const w = container.clientWidth;
    const c = Math.floor(w / CELL_SIZE);
    const r = 50;
    setCols(c);
    setRows(r);
    canvas.width = c * CELL_SIZE;
    canvas.height = r * CELL_SIZE;
    gridRef.current = createEmptyGrid(c, r);
    drawGrid();
  }, [createEmptyGrid]);

  const drawGrid = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const grid = gridRef.current;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid lines
    ctx.strokeStyle = "rgba(245, 158, 11, 0.06)";
    ctx.lineWidth = 0.5;
    for (let x = 0; x <= cols * CELL_SIZE; x += CELL_SIZE) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, rows * CELL_SIZE);
      ctx.stroke();
    }
    for (let y = 0; y <= rows * CELL_SIZE; y += CELL_SIZE) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(cols * CELL_SIZE, y);
      ctx.stroke();
    }

    // Draw cells
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[r].length; c++) {
        if (grid[r][c]) {
          ctx.fillStyle = "rgba(245, 158, 11, 0.7)";
          ctx.fillRect(c * CELL_SIZE + 1, r * CELL_SIZE + 1, CELL_SIZE - 2, CELL_SIZE - 2);
          // Glow
          ctx.shadowColor = "rgba(245, 158, 11, 0.5)";
          ctx.shadowBlur = 4;
          ctx.fillRect(c * CELL_SIZE + 1, r * CELL_SIZE + 1, CELL_SIZE - 2, CELL_SIZE - 2);
          ctx.shadowBlur = 0;
        }
      }
    }
  }, [cols, rows]);

  const step = useCallback(() => {
    const grid = gridRef.current;
    const newGrid = createEmptyGrid(cols, rows);

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        let neighbors = 0;
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            if (dr === 0 && dc === 0) continue;
            const nr = (r + dr + rows) % rows;
            const nc = (c + dc + cols) % cols;
            if (grid[nr]?.[nc]) neighbors++;
          }
        }
        if (grid[r][c]) {
          newGrid[r][c] = neighbors === 2 || neighbors === 3;
        } else {
          newGrid[r][c] = neighbors === 3;
        }
      }
    }

    gridRef.current = newGrid;
    setGeneration((g) => g + 1);
    drawGrid();
  }, [cols, rows, createEmptyGrid, drawGrid]);

  // Run loop
  useEffect(() => {
    runningRef.current = running;
    if (!running) return;

    const interval = setInterval(() => {
      if (runningRef.current) step();
    }, speed);

    return () => clearInterval(interval);
  }, [running, speed, step]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const c = Math.floor((e.clientX - rect.left) / CELL_SIZE);
    const r = Math.floor((e.clientY - rect.top) / CELL_SIZE);
    if (r >= 0 && r < rows && c >= 0 && c < cols) {
      gridRef.current[r][c] = !gridRef.current[r][c];
      drawGrid();
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDrawing.current = true;
    handleCanvasClick(e);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const c = Math.floor((e.clientX - rect.left) / CELL_SIZE);
    const r = Math.floor((e.clientY - rect.top) / CELL_SIZE);
    if (r >= 0 && r < rows && c >= 0 && c < cols) {
      gridRef.current[r][c] = true;
      drawGrid();
    }
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const randomize = () => {
    gridRef.current = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => Math.random() > 0.75)
    );
    setGeneration(0);
    drawGrid();
  };

  const clear = () => {
    gridRef.current = createEmptyGrid(cols, rows);
    setRunning(false);
    setGeneration(0);
    drawGrid();
  };

  const loadPreset = (name: keyof typeof PRESETS) => {
    const grid = createEmptyGrid(cols, rows);
    const offsetR = Math.floor(rows / 2) - 8;
    const offsetC = Math.floor(cols / 2) - 8;
    for (const [r, c] of PRESETS[name]) {
      const nr = r + offsetR;
      const nc = c + offsetC;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
        grid[nr][nc] = true;
      }
    }
    gridRef.current = grid;
    setGeneration(0);
    drawGrid();
  };

  return (
    <section className="py-20 px-6 md:px-20" ref={sectionRef}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={slideInFromLeft(0.2)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 mb-3"
        >
          Conway&apos;s Game of Life
        </motion.h2>

        <motion.p
          variants={slideInFromLeft(0.3)}
          className="text-gray-400 text-sm mb-6 max-w-2xl"
        >
          I&apos;m a big fan of Cellular Automata — simple rules giving rise to
          complex emergent behavior. Draw cells on the grid, load a preset, or
          randomize, then watch them evolve.
        </motion.p>

        <motion.div variants={slideInFromLeft(0.4)}>
          {/* Controls */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <button
              onClick={() => setRunning(!running)}
              className={`text-xs px-4 py-2 rounded-lg border transition ${
                running
                  ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                  : "bg-[#12100a] text-gray-300 border-[#1c1408] hover:border-amber-500/30"
              }`}
            >
              {running ? "⏸ Pause" : "▶ Play"}
            </button>
            <button
              onClick={step}
              className="text-xs px-4 py-2 rounded-lg bg-[#12100a] text-gray-300 border border-[#1c1408] hover:border-amber-500/30 transition"
            >
              Step
            </button>
            <button
              onClick={randomize}
              className="text-xs px-4 py-2 rounded-lg bg-[#12100a] text-gray-300 border border-[#1c1408] hover:border-amber-500/30 transition"
            >
              Random
            </button>
            <button
              onClick={clear}
              className="text-xs px-4 py-2 rounded-lg bg-[#12100a] text-gray-300 border border-[#1c1408] hover:border-amber-500/30 transition"
            >
              Clear
            </button>

            <span className="text-gray-600 text-xs ml-2">|</span>

            <button
              onClick={() => loadPreset("glider")}
              className="text-xs px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-400/70 border border-amber-500/15 hover:border-amber-500/30 transition"
            >
              Glider
            </button>
            <button
              onClick={() => loadPreset("pulsar")}
              className="text-xs px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-400/70 border border-amber-500/15 hover:border-amber-500/30 transition"
            >
              Pulsar
            </button>
            <button
              onClick={() => loadPreset("gosperGun")}
              className="text-xs px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-400/70 border border-amber-500/15 hover:border-amber-500/30 transition"
            >
              Gosper Gun
            </button>

            <span className="text-gray-600 text-xs ml-2">|</span>

            <label className="flex items-center gap-2 text-xs text-gray-500">
              Speed
              <input
                type="range"
                min={20}
                max={500}
                step={10}
                value={500 - speed}
                onChange={(e) => setSpeed(500 - Number(e.target.value))}
                className="w-20 accent-amber-500"
              />
            </label>

            <span className="text-amber-400/60 text-xs font-mono ml-auto">
              Gen: {generation}
            </span>
          </div>

          {/* Canvas */}
          <div className="border border-[#1c1408] rounded-xl overflow-hidden bg-[#08080c]">
            <canvas
              ref={canvasRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className="cursor-crosshair w-full"
              style={{ display: "block" }}
            />
          </div>

          <p className="text-gray-600 text-xs text-center mt-2">
            Click or drag to draw cells. Edges wrap around (toroidal grid).
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
