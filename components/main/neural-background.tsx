"use client";

import { useEffect, useRef } from "react";

interface Neuron {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  layer: number; // 0=input, 1=hidden, 2=output — visual depth
  activation: number; // 0-1, controls glow
  activationTarget: number;
  pulsePhase: number;
  connections: number[]; // indices of connected neurons
}

interface Signal {
  from: number;
  to: number;
  progress: number; // 0-1
  speed: number;
  intensity: number;
}

export const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const neuronsRef = useRef<Neuron[]>([]);
  const signalsRef = useRef<Signal[]>([]);
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
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const w = () => window.innerWidth;
    const h = () => window.innerHeight;

    const NEURON_COUNT = 80;
    const CONNECTION_DIST = 220;
    const MOUSE_RADIUS = 200;

    // Initialize neurons with layered structure
    neuronsRef.current = Array.from({ length: NEURON_COUNT }, (_, i) => {
      const layer = i < 20 ? 0 : i < 55 ? 1 : 2;
      const baseRadius = layer === 0 ? 1.5 : layer === 1 ? 2.5 : 2;
      return {
        x: Math.random() * w(),
        y: Math.random() * h(),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: baseRadius,
        baseRadius,
        layer,
        activation: Math.random() * 0.3,
        activationTarget: 0,
        pulsePhase: Math.random() * Math.PI * 2,
        connections: [],
      };
    });

    // Pre-compute stable connections (each neuron connects to 2-4 nearest)
    const neurons = neuronsRef.current;
    for (let i = 0; i < neurons.length; i++) {
      const dists: { idx: number; d: number }[] = [];
      for (let j = 0; j < neurons.length; j++) {
        if (i === j) continue;
        const dx = neurons[i].x - neurons[j].x;
        const dy = neurons[i].y - neurons[j].y;
        dists.push({ idx: j, d: Math.sqrt(dx * dx + dy * dy) });
      }
      dists.sort((a, b) => a.d - b.d);
      const count = 2 + Math.floor(Math.random() * 3);
      neurons[i].connections = dists.slice(0, count).map((d) => d.idx);
    }

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouse);

    // Spawn signal along a connection
    const spawnSignal = () => {
      const fromIdx = Math.floor(Math.random() * neurons.length);
      const n = neurons[fromIdx];
      if (n.connections.length === 0) return;
      const toIdx = n.connections[Math.floor(Math.random() * n.connections.length)];
      signalsRef.current.push({
        from: fromIdx,
        to: toIdx,
        progress: 0,
        speed: 0.008 + Math.random() * 0.012,
        intensity: 0.6 + Math.random() * 0.4,
      });
    };

    const animate = () => {
      const cw = w();
      const ch = h();
      ctx.resetTransform();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, cw, ch);

      timeRef.current += 0.016;
      const t = timeRef.current;
      const mouse = mouseRef.current;

      // --- Update neurons ---
      for (const n of neurons) {
        // Breathing pulse
        n.pulsePhase += 0.02;
        const pulse = Math.sin(n.pulsePhase) * 0.3 + 0.7;

        // Mouse interaction — activate nearby neurons
        const mdx = mouse.x - n.x;
        const mdy = mouse.y - n.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < MOUSE_RADIUS) {
          const force = (1 - mdist / MOUSE_RADIUS);
          n.vx += (mdx / mdist) * force * 0.03;
          n.vy += (mdy / mdist) * force * 0.03;
          n.activationTarget = Math.min(1, n.activationTarget + force * 0.1);
        }

        // Random spontaneous activation
        if (Math.random() < 0.002) {
          n.activationTarget = 0.5 + Math.random() * 0.5;
        }

        // Smooth activation decay
        n.activation += (n.activationTarget - n.activation) * 0.05;
        n.activationTarget *= 0.98;

        // Dynamic radius based on activation
        n.radius = n.baseRadius + n.activation * 2 * pulse;

        // Move
        n.x += n.vx;
        n.y += n.vy;
        n.vx *= 0.995;
        n.vy *= 0.995;

        // Soft boundary
        const margin = 50;
        if (n.x < margin) n.vx += 0.02;
        if (n.x > cw - margin) n.vx -= 0.02;
        if (n.y < margin) n.vy += 0.02;
        if (n.y > ch - margin) n.vy -= 0.02;
      }

      // --- Spawn signals periodically ---
      if (Math.random() < 0.08) spawnSignal();

      // --- Draw connections (proximity-based, faint) ---
      for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
          const dx = neurons[i].x - neurons[j].x;
          const dy = neurons[i].y - neurons[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.08;
            ctx.beginPath();
            ctx.moveTo(neurons[i].x, neurons[i].y);
            ctx.lineTo(neurons[j].x, neurons[j].y);
            ctx.strokeStyle = `rgba(245, 158, 11, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // --- Draw stable connection lines (slightly brighter) ---
      for (const n of neurons) {
        for (const ci of n.connections) {
          const target = neurons[ci];
          const dx = n.x - target.x;
          const dy = n.y - target.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > CONNECTION_DIST * 1.8) continue;

          const alpha = Math.max(0, (1 - dist / (CONNECTION_DIST * 1.8))) * 0.12;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);

          // Curved connections for visual interest
          const mx = (n.x + target.x) / 2 + Math.sin(t * 0.5 + n.pulsePhase) * 15;
          const my = (n.y + target.y) / 2 + Math.cos(t * 0.5 + n.pulsePhase) * 15;
          ctx.quadraticCurveTo(mx, my, target.x, target.y);

          ctx.strokeStyle = `rgba(251, 191, 36, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // --- Draw and update signals (traveling pulses along connections) ---
      const signals = signalsRef.current;
      for (let i = signals.length - 1; i >= 0; i--) {
        const s = signals[i];
        s.progress += s.speed;

        if (s.progress >= 1) {
          // Activate target neuron
          neurons[s.to].activationTarget = Math.min(1, neurons[s.to].activationTarget + 0.4);
          // Chain reaction: sometimes trigger new signal from target
          if (Math.random() < 0.3) {
            const next = neurons[s.to];
            if (next.connections.length > 0) {
              const nextTo = next.connections[Math.floor(Math.random() * next.connections.length)];
              signals.push({
                from: s.to,
                to: nextTo,
                progress: 0,
                speed: s.speed * (0.9 + Math.random() * 0.2),
                intensity: s.intensity * 0.7,
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

        // Draw signal dot with glow trail
        const glowSize = 4 * s.intensity;
        const gradient = ctx.createRadialGradient(px, py, 0, px, py, glowSize * 3);
        gradient.addColorStop(0, `rgba(251, 191, 36, ${0.8 * s.intensity})`);
        gradient.addColorStop(0.5, `rgba(245, 158, 11, ${0.3 * s.intensity})`);
        gradient.addColorStop(1, "rgba(245, 158, 11, 0)");

        ctx.beginPath();
        ctx.arc(px, py, glowSize * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(px, py, glowSize * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 230, 150, ${s.intensity})`;
        ctx.fill();
      }

      // --- Draw neurons ---
      for (const n of neurons) {
        const pulse = Math.sin(n.pulsePhase) * 0.15 + 0.85;

        // Outer glow (activation-based)
        if (n.activation > 0.1) {
          const glowRadius = n.radius * (3 + n.activation * 4);
          const gradient = ctx.createRadialGradient(
            n.x, n.y, 0,
            n.x, n.y, glowRadius
          );
          gradient.addColorStop(0, `rgba(245, 158, 11, ${n.activation * 0.3 * pulse})`);
          gradient.addColorStop(0.5, `rgba(245, 158, 11, ${n.activation * 0.1})`);
          gradient.addColorStop(1, "rgba(245, 158, 11, 0)");

          ctx.beginPath();
          ctx.arc(n.x, n.y, glowRadius, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        // Neuron body
        const bodyAlpha = 0.3 + n.activation * 0.5;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);

        // Layer-based color variation
        if (n.layer === 0) {
          ctx.fillStyle = `rgba(251, 191, 36, ${bodyAlpha * pulse})`; // amber-400
        } else if (n.layer === 1) {
          ctx.fillStyle = `rgba(245, 158, 11, ${bodyAlpha * pulse})`; // amber-500
        } else {
          ctx.fillStyle = `rgba(251, 146, 60, ${bodyAlpha * pulse})`; // orange-400
        }
        ctx.fill();

        // Bright center
        if (n.activation > 0.3) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 240, 200, ${n.activation * 0.6})`;
          ctx.fill();
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ pointerEvents: "none" }}
    />
  );
};
