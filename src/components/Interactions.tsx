"use client";
import { useEffect } from "react";

export default function Interactions() {
  useEffect(() => {
    // ── 1. Custom Cursor ──────────────────────────────────────────
    const dot  = document.getElementById("cursor-dot")!;
    const ring = document.getElementById("cursor-ring")!;
    let mx = -200, my = -200, rx = -200, ry = -200, raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
    };

    const lerp = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      raf = requestAnimationFrame(lerp);
    };
    lerp();

    window.addEventListener("mousemove", onMove);

    const addHover = (el: Element) => {
      el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
      el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
    };
    document.querySelectorAll("a, button, [data-hover]").forEach(addHover);

    // ── 2. Scroll Reveal (IntersectionObserver) ───────────────────
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            revealObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => revealObs.observe(el));

    // ── 3. Split-word reveal ──────────────────────────────────────
    const wordObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const words = e.target.querySelectorAll<HTMLElement>(".split-word");
          words.forEach((w, i) => {
            setTimeout(() => w.classList.add("is-visible"), i * 85);
          });
          wordObs.unobserve(e.target);
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll("[data-split]").forEach((el) => wordObs.observe(el));

    // ── 4. Live clock ─────────────────────────────────────────────
    const clockEl = document.getElementById("live-clock");
    const tick = () => {
      if (!clockEl) return;
      clockEl.textContent = new Date().toLocaleTimeString("id-ID", {
        timeZone: "Asia/Jakarta", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
      });
    };
    tick();
    const timer = setInterval(tick, 1000);

    // ── 5. Video unmute on click ──────────────────────────────────
    const video = document.getElementById("reel-video") as HTMLVideoElement | null;
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
      revealObs.disconnect();
      wordObs.disconnect();
    };
  }, []);

  return null;
}
