"use client";
import { useEffect } from "react";

export default function Interactions() {
  useEffect(() => {
    // ── Cursor
    const dot  = document.getElementById("cur-dot")!;
    const ring = document.getElementById("cur-ring")!;
    let mx = -500, my = -500, rx = -500, ry = -500, raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.opacity  = "1";
      ring.style.opacity = "1";
      dot.style.transform = `translate(${mx - 2.5}px,${my - 2.5}px)`;
    };
    const lerp = () => {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      ring.style.transform = `translate(${rx - 16}px,${ry - 16}px)`;
      raf = requestAnimationFrame(lerp);
    };
    lerp();
    window.addEventListener("mousemove", onMove);

    const setHover = (on: boolean) => document.body.classList.toggle("cur-hover", on);
    document.querySelectorAll("a,button,[data-hover]").forEach(el => {
      el.addEventListener("mouseenter", () => setHover(true));
      el.addEventListener("mouseleave", () => setHover(false));
    });

    // ── Reveal
    const revObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); revObs.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: "0px 0px -48px 0px" });
    document.querySelectorAll("[data-reveal]").forEach(el => revObs.observe(el));

    // ── Clip reveals
    const clipObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll<HTMLElement>(".clip-inner").forEach((el, i) => {
          setTimeout(() => el.classList.add("in"), i * 80);
        });
        clipObs.unobserve(e.target);
      });
    }, { threshold: 0.1 });
    document.querySelectorAll("[data-clip]").forEach(el => clipObs.observe(el));

    // ── Live clock
    const clockEl = document.getElementById("live-clock");
    const tick = () => {
      if (clockEl) clockEl.textContent = new Date().toLocaleTimeString("id-ID", {
        timeZone: "Asia/Jakarta", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
      });
    };
    tick();
    const timer = setInterval(tick, 1000);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      clearInterval(timer);
      revObs.disconnect();
      clipObs.disconnect();
    };
  }, []);

  return null;
}
