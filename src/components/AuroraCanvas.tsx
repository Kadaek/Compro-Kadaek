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

    const orbs = [
      { x: 0.2,  y: 0.3,  r: 0.55, hue: 220, speed: 0.00025, phase: 0 },
      { x: 0.75, y: 0.55, r: 0.50, hue: 245, speed: 0.00030, phase: 2 },
      { x: 0.5,  y: 0.7,  r: 0.45, hue: 190, speed: 0.00018, phase: 4 },
      { x: 0.35, y: 0.15, r: 0.40, hue: 260, speed: 0.00022, phase: 1 },
    ];

    let t = 0;
    const draw = () => {
      t++;
      ctx.clearRect(0, 0, W, H);
      for (const o of orbs) {
        const px = (o.x + Math.sin(t * o.speed + o.phase) * 0.18) * W;
        const py = (o.y + Math.cos(t * o.speed * 0.7 + o.phase) * 0.14) * H;
        const r  = o.r * Math.min(W, H);
        const g  = ctx.createRadialGradient(px, py, 0, px, py, r);
        g.addColorStop(0,   `hsla(${o.hue},90%,60%,0.12)`);
        g.addColorStop(0.5, `hsla(${o.hue},80%,45%,0.05)`);
        g.addColorStop(1,   `hsla(${o.hue},70%,30%,0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.ellipse(px, py, r, r * 0.65, t * o.speed * 0.3, 0, Math.PI * 2);
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
        position: "fixed", inset: 0, zIndex: -10,
        pointerEvents: "none", filter: "blur(60px)", opacity: 0.85,
      }}
    />
  );
}
