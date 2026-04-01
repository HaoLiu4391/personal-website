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
  hue: number; // color variation
}

interface Signal {
  from: number;
  to: number;
  progress: number;
  speed: number;
  intensity: number;
  trail: { x: number; y: number; alpha: number }[];
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

export const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, clicked: false });
  const neuronsRef = useRef<Neuron[]>([]);
  const signalsRef = useRef<Signal[]>([]);
  const ripplesRef = useRef<Ripple[]>([]);
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

    const NEURON_COUNT = 100;
    const CONNECTION_DIST = 200;
    const MOUSE_RADIUS = 250;

    // Initialize neurons
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
        hue: 30 + Math.random() * 20, // amber range 30-50
      };
    });
    neuronsRef.current = neurons;

    // Build connections
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
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleClick = (e: MouseEvent) => {
      // Spawn a burst of signals from click point
      const cx = e.clientX;
      const cy = e.clientY;

      // Ripple effect
      ripplesRef.current.push({
        x: cx,
        y: cy,
        radius: 0,
        maxRadius: 300,
        alpha: 0.6,
      });

      // Activate and fire nearby neurons
      for (const n of neurons) {
        const dx = cx - n.x;
        const dy = cy - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          n.activationTarget = 1;
          // Fire signals from this neuron
          for (const ci of n.connections) {
            signalsRef.current.push({
              from: neurons.indexOf(n),
              to: ci,
              progress: 0,
              speed: 0.015 + Math.random() * 0.01,
              intensity: 1 - dist / 200,
              trail: [],
            });
          }
        }
      }
    };

    canvas.style.pointerEvents = "auto";
    canvas.style.cursor = "crosshair";
    window.addEventListener("mousemove", handleMouse);
    canvas.addEventListener("click", handleClick);

    const spawnSignal = () => {
      const fromIdx = Math.floor(Math.random() * neurons.length);
      const n = neurons[fromIdx];
      if (n.connections.length === 0) return;
      const toIdx = n.connections[Math.floor(Math.random() * n.connections.length)];
      signalsRef.current.push({
        from: fromIdx,
        to: toIdx,
        progress: 0,
        speed: 0.006 + Math.random() * 0.01,
        intensity: 0.5 + Math.random() * 0.5,
        trail: [],
      });
    };

    const animate = () => {
      const cw = w();
      const ch = h();
      ctx.resetTransform();
      ctx.scale(dpr, dpr);

      // Semi-transparent clear for motion blur effect
      ctx.fillStyle = "rgba(10, 10, 15, 0.15)";
      ctx.fillRect(0, 0, cw, ch);

      timeRef.current += 0.016;
      const t = timeRef.current;
      const mouse = mouseRef.current;
      const signals = signalsRef.current;
      const ripples = ripplesRef.current;

      // --- Update & draw ripples ---
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 4;
        r.alpha *= 0.97;

        if (r.alpha < 0.01 || r.radius > r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(38, 92%, 50%, ${r.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Inner ring
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

        // Mouse interaction
        const mdx = mouse.x - n.x;
        const mdy = mouse.y - n.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < MOUSE_RADIUS && mdist > 0) {
          const force = (1 - mdist / MOUSE_RADIUS);
          // Repel close neurons, attract distant ones
          if (mdist < 80) {
            n.vx -= (mdx / mdist) * force * 0.08;
            n.vy -= (mdy / mdist) * force * 0.08;
          } else {
            n.vx += (mdx / mdist) * force * 0.02;
            n.vy += (mdy / mdist) * force * 0.02;
          }
          n.activationTarget = Math.min(1, n.activationTarget + force * 0.08);
        }

        // Random firing
        if (Math.random() < 0.003) {
          n.activationTarget = 0.4 + Math.random() * 0.6;
        }

        // Activation dynamics
        n.activation += (n.activationTarget - n.activation) * 0.06;
        n.activationTarget *= 0.97;
        n.radius = n.baseRadius + n.activation * 3 * pulse;

        // Movement
        n.x += n.vx;
        n.y += n.vy;
        n.vx *= 0.993;
        n.vy *= 0.993;

        // Soft boundary
        const m = 30;
        if (n.x < m) n.vx += 0.03;
        if (n.x > cw - m) n.vx -= 0.03;
        if (n.y < m) n.vy += 0.03;
        if (n.y > ch - m) n.vy -= 0.03;
      }

      // --- Spawn signals ---
      if (Math.random() < 0.1) spawnSignal();

      // --- Draw connections ---
      // Proximity connections (faint web)
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

      // Stable curved connections (brighter)
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

          // Active connections glow brighter
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

      // --- Draw & update signals ---
      for (let i = signals.length - 1; i >= 0; i--) {
        const s = signals[i];
        s.progress += s.speed;

        if (s.progress >= 1) {
          neurons[s.to].activationTarget = Math.min(1, neurons[s.to].activationTarget + 0.5);
          if (Math.random() < 0.35) {
            const next = neurons[s.to];
            if (next.connections.length > 0) {
              const nextTo = next.connections[Math.floor(Math.random() * next.connections.length)];
              signals.push({
                from: s.to,
                to: nextTo,
                progress: 0,
                speed: s.speed * (0.85 + Math.random() * 0.3),
                intensity: s.intensity * 0.65,
                trail: [],
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

        // Add to trail
        s.trail.push({ x: px, y: py, alpha: s.intensity });
        if (s.trail.length > 12) s.trail.shift();

        // Draw trail (comet effect)
        for (let ti = 0; ti < s.trail.length; ti++) {
          const tp = s.trail[ti];
          const trailAlpha = (ti / s.trail.length) * tp.alpha * 0.4;
          const trailSize = (ti / s.trail.length) * 3 * s.intensity;
          ctx.beginPath();
          ctx.arc(tp.x, tp.y, trailSize, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(42, 95%, 65%, ${trailAlpha})`;
          ctx.fill();
        }

        // Signal head glow
        const glowSize = 5 * s.intensity;
        const grad = ctx.createRadialGradient(px, py, 0, px, py, glowSize * 4);
        grad.addColorStop(0, `hsla(45, 100%, 80%, ${0.9 * s.intensity})`);
        grad.addColorStop(0.3, `hsla(40, 95%, 60%, ${0.4 * s.intensity})`);
        grad.addColorStop(1, "hsla(38, 90%, 50%, 0)");
        ctx.beginPath();
        ctx.arc(px, py, glowSize * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.arc(px, py, glowSize * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(48, 100%, 90%, ${s.intensity})`;
        ctx.fill();
      }

      // --- Draw neurons ---
      for (const n of neurons) {
        const pulse = Math.sin(n.pulsePhase) * 0.15 + 0.85;

        // Large activation glow
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

        // Neuron ring (when active)
        if (n.activation > 0.4) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius * 2.5, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(${n.hue}, 85%, 60%, ${n.activation * 0.2})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        // Body
        const bodyAlpha = 0.25 + n.activation * 0.55;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${n.hue}, 85%, ${50 + n.activation * 15}%, ${bodyAlpha * pulse})`;
        ctx.fill();

        // Bright center dot
        if (n.activation > 0.25) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius * 0.35, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(48, 100%, 85%, ${n.activation * 0.7})`;
          ctx.fill();
        }
      }

      // --- Mouse cursor glow ---
      if (mouse.x > 0 && mouse.y > 0) {
        const cursorGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 80);
        cursorGrad.addColorStop(0, "hsla(38, 90%, 55%, 0.06)");
        cursorGrad.addColorStop(1, "hsla(38, 90%, 55%, 0)");
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 80, 0, Math.PI * 2);
        ctx.fillStyle = cursorGrad;
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
