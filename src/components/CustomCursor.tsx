"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = -100, my = -100;
    let rx = -100, ry = -100;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
    };
    window.addEventListener("mousemove", move);

    let raf: number;
    const lerp = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`;
      raf = requestAnimationFrame(lerp);
    };
    lerp();

    const onEnter = () => {
      ring.style.width = "56px";
      ring.style.height = "56px";
      ring.style.borderColor = "rgba(99,102,241,0.6)";
      ring.style.marginLeft = "-4px";
      ring.style.marginTop = "-4px";
    };
    const onLeave = () => {
      ring.style.width = "40px";
      ring.style.height = "40px";
      ring.style.borderColor = "rgba(59,130,246,0.5)";
      ring.style.marginLeft = "0px";
      ring.style.marginTop = "0px";
    };

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-blue-400 pointer-events-none z-[9999] mix-blend-screen"
        style={{ transition: "none", willChange: "transform" }}
      />
      {/* Trailing ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-blue-500/50 pointer-events-none z-[9998] mix-blend-screen"
        style={{
          transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}
