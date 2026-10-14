"use client";

import { useEffect } from "react";

export default function Interactions() {
  useEffect(() => {
    const dot  = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    if (!dot || !ring) return;

    // Start both off-screen until first mouse move
    dot.style.opacity  = "0";
    ring.style.opacity = "0";

    let mx = -500, my = -500, rx = -500, ry = -500, raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.opacity  = "1";
      ring.style.opacity = "1";
      dot.style.transform = `translate(${mx - 3}px,${my - 3}px)`;
    };
    const lerp = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ring.style.transform = `translate(${rx - 18}px,${ry - 18}px)`;
      raf = requestAnimationFrame(lerp);
    };
    lerp();
    window.addEventListener("mousemove", onMove);

    const setHover = (on: boolean) => document.body.classList.toggle("cursor-hover", on);
    const hoverEls = document.querySelectorAll("a,button,[data-hover]");
    hoverEls.forEach(el => {
      el.addEventListener("mouseenter", () => setHover(true));
      el.addEventListener("mouseleave", () => setHover(false));
    });

    // Scroll reveal
    const revObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); revObs.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    document.querySelectorAll("[data-reveal]").forEach(el => revObs.observe(el));

    // Split-word reveal
    const wordObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll<HTMLElement>(".split-word").forEach((w, i) => {
          setTimeout(() => w.classList.add("is-visible"), i * 85);
        });
        wordObs.unobserve(e.target);
      });
    }, { threshold: 0.15 });
    document.querySelectorAll("[data-split]").forEach(el => wordObs.observe(el));

    // Live clock
    const clockEl = document.getElementById("live-clock");
    const tick = () => {
      if (clockEl) clockEl.textContent = new Date().toLocaleTimeString("id-ID", {
        timeZone: "Asia/Jakarta", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
      });
    };
    tick();
    const timer = setInterval(tick, 1000);

    // Video sound toggle
    const video   = document.getElementById("reel-video") as HTMLVideoElement | null;
    const soundBtn = document.getElementById("sound-btn");
    if (video && soundBtn) {
      soundBtn.addEventListener("click", () => {
        video.muted = !video.muted;
        soundBtn.textContent = video.muted ? "SOUND OFF" : "SOUND ON";
      });
    }

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      clearInterval(timer);
      revObs.disconnect();
      wordObs.disconnect();
    };
  }, []);

  return null;
}
