"use client";

import { useEffect, useRef } from "react";

export default function AuroraCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W = 0, H = 0, raf = 0;

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Bigger, more visible orbs
    const orbs = [
      { x: 0.15, y: 0.25, r: 0.70, hue: 220, speed: 0.00020, phase: 0   },
      { x: 0.80, y: 0.60, r: 0.65, hue: 248, speed: 0.00025, phase: 2.1 },
      { x: 0.50, y: 0.75, r: 0.55, hue: 195, speed: 0.00015, phase: 4.2 },
      { x: 0.30, y: 0.10, r: 0.50, hue: 265, speed: 0.00018, phase: 1.3 },
    ];

    let t = 0;
    const draw = () => {
      t++;
      ctx.clearRect(0, 0, W, H);
      for (const o of orbs) {
        const px = (o.x + Math.sin(t * o.speed + o.phase) * 0.2) * W;
        const py = (o.y + Math.cos(t * o.speed * 0.7 + o.phase) * 0.15) * H;
        const r  = o.r * Math.max(W, H);

        const g = ctx.createRadialGradient(px, py, 0, px, py, r);
        g.addColorStop(0,    `hsla(${o.hue}, 85%, 60%, 0.18)`);
        g.addColorStop(0.35, `hsla(${o.hue}, 75%, 50%, 0.10)`);
        g.addColorStop(0.7,  `hsla(${o.hue}, 65%, 40%, 0.04)`);
        g.addColorStop(1,    `hsla(${o.hue}, 55%, 30%, 0)`);

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.ellipse(px, py, r, r * 0.6, t * o.speed * 0.4, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -10,
        pointerEvents: "none",
        filter: "blur(80px)",
        opacity: 1,
      }}
    />
  );
}
