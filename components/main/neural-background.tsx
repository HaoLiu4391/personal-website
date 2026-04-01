"use client";

import { useEffect, useRef } from "react";

interface Neuron {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  layer: number;
  activation: number;
  activationTarget: number;
  pulsePhase: number;
  connections: number[];
  hue: number;
  // Memory trace: neurons that fired together strengthen
  coActivation: Map<number, number>;
}

interface Signal {
  from: number;
  to: number;
  progress: number;
  speed: number;
  intensity: number;
  trail: { x: number; y: number; alpha: number }[];
  generation: number; // how many hops from origin
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

// Hebbian trace — a fading "memory" line between co-activated neurons
interface HebbianTrace {
  i: number;
  j: number;
  strength: number;
  age: number;
}

// Floating cognitive science terms
interface FloatingWord {
  text: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  targetAlpha: number;
  size: number;
  life: number;
}

const COGNITIVE_TERMS = [
  "memory", "attention", "perception", "consciousness",
  "encoding", "retrieval", "hippocampus", "neocortex",
  "synapse", "plasticity", "Hebbian", "binding",
  "oscillation", "gamma", "theta", "schema",
  "prediction", "inference", "Bayesian", "prior",
  "representation", "latent", "manifold", "embedding",
  "emergence", "self-organization", "attractor", "basin",
  "entropy", "free energy", "surprise", "belief",
  "agency", "reward", "exploration", "policy",
  "Theory of Mind", "intention", "mentalizing",
  "diffusion", "generative", "compression",
];

export const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const neuronsRef = useRef<Neuron[]>([]);
  const signalsRef = useRef<Signal[]>([]);
  const ripplesRef = useRef<Ripple[]>([]);
  const hebbianRef = useRef<HebbianTrace[]>([]);
  const wordsRef = useRef<FloatingWord[]>([]);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    };
    resize();
    window.addEventListener("resize", resize);

    const w = () => window.innerWidth;
    const h = () => window.innerHeight;

    const NEURON_COUNT = 60;
    const CONNECTION_DIST = 200;
    const MOUSE_RADIUS = 250;

    const neurons: Neuron[] = Array.from({ length: NEURON_COUNT }, (_, i) => {
      const layer = i < 25 ? 0 : i < 65 ? 1 : 2;
      const baseRadius = layer === 0 ? 1.5 : layer === 1 ? 2.5 : 2;
      return {
        x: Math.random() * w(),
        y: Math.random() * h(),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        baseRadius,
        radius: baseRadius,
        layer,
        activation: Math.random() * 0.2,
        activationTarget: 0,
        pulsePhase: Math.random() * Math.PI * 2,
        connections: [],
        hue: 30 + Math.random() * 20,
        coActivation: new Map(),
      };
    });
    neuronsRef.current = neurons;

    for (let i = 0; i < neurons.length; i++) {
      const dists: { idx: number; d: number }[] = [];
      for (let j = 0; j < neurons.length; j++) {
        if (i === j) continue;
        const dx = neurons[i].x - neurons[j].x;
        const dy = neurons[i].y - neurons[j].y;
        dists.push({ idx: j, d: Math.sqrt(dx * dx + dy * dy) });
      }
      dists.sort((a, b) => a.d - b.d);
      neurons[i].connections = dists.slice(0, 2 + Math.floor(Math.random() * 3)).map((d) => d.idx);
    }

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleClick = (e: MouseEvent) => {
      const cx = e.clientX;
      const cy = e.clientY;

      ripplesRef.current.push({ x: cx, y: cy, radius: 0, maxRadius: 350, alpha: 0.6 });

      // Spawn a floating word at click
      const term = COGNITIVE_TERMS[Math.floor(Math.random() * COGNITIVE_TERMS.length)];
      wordsRef.current.push({
        text: term,
        x: cx,
        y: cy,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -0.3 - Math.random() * 0.5,
        alpha: 0,
        targetAlpha: 0.6,
        size: 12 + Math.random() * 6,
        life: 200 + Math.random() * 150,
      });

      for (const n of neurons) {
        const dx = cx - n.x;
        const dy = cy - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          n.activationTarget = 1;
          for (const ci of n.connections) {
            signalsRef.current.push({
              from: neurons.indexOf(n), to: ci,
              progress: 0, speed: 0.015 + Math.random() * 0.01,
              intensity: 1 - dist / 200, trail: [], generation: 0,
            });
          }
        }
      }
    };

    canvas.style.pointerEvents = "auto";
    canvas.style.cursor = "crosshair";
    window.addEventListener("mousemove", handleMouse);
    canvas.addEventListener("click", handleClick);

    // Periodically spawn floating words near active neurons
    const spawnWord = () => {
      const activeNeurons = neurons.filter((n) => n.activation > 0.5);
      if (activeNeurons.length === 0) return;
      const n = activeNeurons[Math.floor(Math.random() * activeNeurons.length)];
      const term = COGNITIVE_TERMS[Math.floor(Math.random() * COGNITIVE_TERMS.length)];
      wordsRef.current.push({
        text: term,
        x: n.x + (Math.random() - 0.5) * 40,
        y: n.y + (Math.random() - 0.5) * 40,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -0.2 - Math.random() * 0.3,
        alpha: 0,
        targetAlpha: 0.35,
        size: 10 + Math.random() * 4,
        life: 150 + Math.random() * 100,
      });
    };

    const spawnSignal = () => {
      const idx = Math.floor(Math.random() * neurons.length);
      const n = neurons[idx];
      if (n.connections.length === 0) return;
      const toIdx = n.connections[Math.floor(Math.random() * n.connections.length)];
      signalsRef.current.push({
        from: idx, to: toIdx, progress: 0,
        speed: 0.006 + Math.random() * 0.01,
        intensity: 0.5 + Math.random() * 0.5,
        trail: [], generation: 0,
      });
    };

    const animate = () => {
      const cw = w();
      const ch = h();
      ctx.resetTransform();
      ctx.scale(dpr, dpr);

      // Motion blur
      ctx.fillStyle = "rgba(10, 10, 15, 0.15)";
      ctx.fillRect(0, 0, cw, ch);

      timeRef.current += 0.016;
      const t = timeRef.current;
      const mouse = mouseRef.current;
      const signals = signalsRef.current;
      const ripples = ripplesRef.current;
      const hebbian = hebbianRef.current;
      const words = wordsRef.current;

      // --- Ripples ---
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 4;
        r.alpha *= 0.97;
        if (r.alpha < 0.01) { ripples.splice(i, 1); continue; }

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(38, 92%, 50%, ${r.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius * 0.6, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(38, 92%, 70%, ${r.alpha * 0.5})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // --- Update neurons ---
      for (const n of neurons) {
        n.pulsePhase += 0.015 + n.activation * 0.02;
        const pulse = Math.sin(n.pulsePhase) * 0.2 + 0.8;

        const mdx = mouse.x - n.x;
        const mdy = mouse.y - n.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < MOUSE_RADIUS && mdist > 0) {
          const force = 1 - mdist / MOUSE_RADIUS;
          if (mdist < 80) {
            n.vx -= (mdx / mdist) * force * 0.08;
            n.vy -= (mdy / mdist) * force * 0.08;
          } else {
            n.vx += (mdx / mdist) * force * 0.02;
            n.vy += (mdy / mdist) * force * 0.02;
          }
          n.activationTarget = Math.min(1, n.activationTarget + force * 0.08);
        }

        if (Math.random() < 0.003) n.activationTarget = 0.4 + Math.random() * 0.6;

        n.activation += (n.activationTarget - n.activation) * 0.06;
        n.activationTarget *= 0.97;
        n.radius = n.baseRadius + n.activation * 3 * pulse;

        n.x += n.vx;
        n.y += n.vy;
        n.vx *= 0.993;
        n.vy *= 0.993;

        const m = 30;
        if (n.x < m) n.vx += 0.03;
        if (n.x > cw - m) n.vx -= 0.03;
        if (n.y < m) n.vy += 0.03;
        if (n.y > ch - m) n.vy -= 0.03;

        // Decay co-activation memory
        for (const [key, val] of n.coActivation) {
          n.coActivation.set(key, val * 0.999);
          if (val < 0.01) n.coActivation.delete(key);
        }
      }

      // --- Spawn signals & words ---
      if (Math.random() < 0.1) spawnSignal();
      if (Math.random() < 0.008) spawnWord();

      // --- Draw Hebbian traces (memory bonds) ---
      for (let i = hebbian.length - 1; i >= 0; i--) {
        const h = hebbian[i];
        h.strength *= 0.997;
        h.age++;
        if (h.strength < 0.02) { hebbian.splice(i, 1); continue; }

        const a = neurons[h.i];
        const b = neurons[h.j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 500) continue;

        // Pulsing Hebbian connection
        const pAlpha = h.strength * (0.8 + Math.sin(t * 2 + h.age * 0.1) * 0.2);

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `hsla(50, 100%, 70%, ${pAlpha * 0.3})`;
        ctx.lineWidth = h.strength * 3;
        ctx.stroke();

        // Wider glow
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `hsla(45, 95%, 60%, ${pAlpha * 0.08})`;
        ctx.lineWidth = h.strength * 10;
        ctx.stroke();
      }

      // --- Proximity connections ---
      for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
          const dx = neurons[i].x - neurons[j].x;
          const dy = neurons[i].y - neurons[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.06;
            ctx.beginPath();
            ctx.moveTo(neurons[i].x, neurons[i].y);
            ctx.lineTo(neurons[j].x, neurons[j].y);
            ctx.strokeStyle = `hsla(38, 80%, 50%, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // --- Stable curved connections ---
      for (let i = 0; i < neurons.length; i++) {
        const n = neurons[i];
        for (const ci of n.connections) {
          const target = neurons[ci];
          const dx = n.x - target.x;
          const dy = n.y - target.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > CONNECTION_DIST * 2) continue;

          const avgAct = (n.activation + target.activation) / 2;
          const alpha = Math.max(0, (1 - dist / (CONNECTION_DIST * 2))) * (0.08 + avgAct * 0.15);

          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          const cx1 = (n.x + target.x) / 2 + Math.sin(t * 0.3 + n.pulsePhase) * 20;
          const cy1 = (n.y + target.y) / 2 + Math.cos(t * 0.3 + n.pulsePhase) * 20;
          ctx.quadraticCurveTo(cx1, cy1, target.x, target.y);

          if (avgAct > 0.3) {
            ctx.strokeStyle = `hsla(40, 90%, 60%, ${alpha * 2})`;
            ctx.lineWidth = 1.5;
          } else {
            ctx.strokeStyle = `hsla(38, 80%, 50%, ${alpha})`;
            ctx.lineWidth = 0.8;
          }
          ctx.stroke();
        }
      }

      // --- Signals with comet trails ---
      for (let i = signals.length - 1; i >= 0; i--) {
        const s = signals[i];
        s.progress += s.speed;

        if (s.progress >= 1) {
          const targetN = neurons[s.to];
          targetN.activationTarget = Math.min(1, targetN.activationTarget + 0.5);

          // Hebbian learning: "neurons that fire together wire together"
          const fromN = neurons[s.from];
          if (fromN.activation > 0.3 && targetN.activation > 0.3) {
            fromN.coActivation.set(s.to, Math.min(1, (fromN.coActivation.get(s.to) || 0) + 0.3));
            // Record Hebbian trace
            const existing = hebbian.find(
              (h) => (h.i === s.from && h.j === s.to) || (h.i === s.to && h.j === s.from)
            );
            if (existing) {
              existing.strength = Math.min(1, existing.strength + 0.15);
            } else {
              hebbian.push({ i: s.from, j: s.to, strength: 0.3, age: 0 });
            }
          }

          // Cascade
          if (Math.random() < 0.35 && s.generation < 5) {
            const next = targetN;
            if (next.connections.length > 0) {
              // Prefer connections with Hebbian strengthening
              let bestConn = next.connections[Math.floor(Math.random() * next.connections.length)];
              let bestStrength = 0;
              for (const ci of next.connections) {
                const str = next.coActivation.get(ci) || 0;
                if (str > bestStrength && Math.random() < 0.7) {
                  bestStrength = str;
                  bestConn = ci;
                }
              }
              signals.push({
                from: s.to, to: bestConn, progress: 0,
                speed: s.speed * (0.85 + Math.random() * 0.3),
                intensity: s.intensity * 0.65,
                trail: [], generation: s.generation + 1,
              });
            }
          }
          signals.splice(i, 1);
          continue;
        }

        const fromN = neurons[s.from];
        const toN = neurons[s.to];
        const px = fromN.x + (toN.x - fromN.x) * s.progress;
        const py = fromN.y + (toN.y - fromN.y) * s.progress;

        s.trail.push({ x: px, y: py, alpha: s.intensity });
        if (s.trail.length > 12) s.trail.shift();

        for (let ti = 0; ti < s.trail.length; ti++) {
          const tp = s.trail[ti];
          const trailAlpha = (ti / s.trail.length) * tp.alpha * 0.4;
          const trailSize = (ti / s.trail.length) * 3 * s.intensity;
          ctx.beginPath();
          ctx.arc(tp.x, tp.y, trailSize, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(42, 95%, 65%, ${trailAlpha})`;
          ctx.fill();
        }

        const glowSize = 5 * s.intensity;
        const grad = ctx.createRadialGradient(px, py, 0, px, py, glowSize * 4);
        grad.addColorStop(0, `hsla(45, 100%, 80%, ${0.9 * s.intensity})`);
        grad.addColorStop(0.3, `hsla(40, 95%, 60%, ${0.4 * s.intensity})`);
        grad.addColorStop(1, "hsla(38, 90%, 50%, 0)");
        ctx.beginPath();
        ctx.arc(px, py, glowSize * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, glowSize * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(48, 100%, 90%, ${s.intensity})`;
        ctx.fill();
      }

      // --- Draw neurons ---
      for (const n of neurons) {
        const pulse = Math.sin(n.pulsePhase) * 0.15 + 0.85;

        if (n.activation > 0.15) {
          const glowR = n.radius * (4 + n.activation * 6);
          const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowR);
          grad.addColorStop(0, `hsla(${n.hue}, 90%, 55%, ${n.activation * 0.35 * pulse})`);
          grad.addColorStop(0.4, `hsla(${n.hue}, 85%, 50%, ${n.activation * 0.12})`);
          grad.addColorStop(1, `hsla(${n.hue}, 80%, 45%, 0)`);
          ctx.beginPath();
          ctx.arc(n.x, n.y, glowR, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }

        if (n.activation > 0.4) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius * 2.5, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(${n.hue}, 85%, 60%, ${n.activation * 0.2})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        const bodyAlpha = 0.25 + n.activation * 0.55;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${n.hue}, 85%, ${50 + n.activation * 15}%, ${bodyAlpha * pulse})`;
        ctx.fill();

        if (n.activation > 0.25) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius * 0.35, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(48, 100%, 85%, ${n.activation * 0.7})`;
          ctx.fill();
        }
      }

      // --- Floating cognitive words ---
      for (let i = words.length - 1; i >= 0; i--) {
        const fw = words[i];
        fw.x += fw.vx;
        fw.y += fw.vy;
        fw.life--;
        fw.alpha += (fw.targetAlpha - fw.alpha) * 0.05;

        if (fw.life < 40) fw.targetAlpha = 0;
        if (fw.life <= 0 || fw.alpha < 0.005) { words.splice(i, 1); continue; }

        ctx.font = `${fw.size}px "Inter", sans-serif`;
        ctx.fillStyle = `hsla(40, 70%, 65%, ${fw.alpha})`;
        ctx.textAlign = "center";
        ctx.fillText(fw.text, fw.x, fw.y);
      }

      // --- Cursor glow ---
      if (mouse.x > 0 && mouse.y > 0) {
        const cg = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 80);
        cg.addColorStop(0, "hsla(38, 90%, 55%, 0.06)");
        cg.addColorStop(1, "hsla(38, 90%, 55%, 0)");
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 80, 0, Math.PI * 2);
        ctx.fillStyle = cg;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      canvas.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
    />
  );
};
