"use client";

import { useEffect, useState } from "react";
import AudioPlayer from "@/components/AudioPlayer";
import ShowreelSection from "@/components/ShowreelSection";
import SelectedWorks from "@/components/SelectedWorks";
import { KadaekBrand, KadaekMonogram } from "@/components/KadaekLogo";
import { ArrowUpRight, Copy, Check, MessageSquare, ShieldCheck, Zap, Cpu, Server } from "lucide-react";

export default function Home() {
  const [time, setTime] = useState("");
  const [copied, setCopied] = useState(false);
  const email = "halo@kadaek.id";

  useEffect(() => {
    // ── Custom Cursor ────────────────────────
    const dot = document.getElementById("cur-dot");
    const ring = document.getElementById("cur-ring");

    let mx = -500, my = -500, rx = -500, ry = -500, raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot && ring) {
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
      }
    };

    const lerp = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ring) {
        ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const loop = () => {
      lerp();
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    const onEnter = () => document.body.classList.add("cur-hover");
    const onLeave = () => document.body.classList.remove("cur-hover");

    document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    // ── Live Clock WIB ─────────────────────────────
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("id-ID", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    tick();
    const clockInterval = setInterval(tick, 1000);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      clearInterval(clockInterval);
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pillars = [
    {
      icon: Server,
      title: "SCALING INFRASTRUCTURE",
      desc: "Perancangan arsitektur komputasi terdistribusi, zero-downtime clustering, dan cloud orchestration (AWS, GCP, Kubernetes) berstandar global.",
    },
    {
      icon: Cpu,
      title: "ENGINEERED ARCHITECTURE",
      desc: "Pengembangan sistem core backend dengan Next.js, Go, Node.js, dan PostgreSQL berkecepatan tinggi dengan latensi sub-millisecond.",
    },
    {
      icon: Zap,
      title: "INNOVATING THE FUTURE",
      desc: "Implementasi otomasi cerdas, agen otonom (LLM/AI), pipeline analitik real-time, dan produk digital transformatif generasi berikutnya.",
    },
    {
      icon: ShieldCheck,
      title: "ENTERPRISE SECURITY",
      desc: "Enkripsi tingkat bank, mitigasi risiko siber, kepatuhan data ketat, dan continuous security verification untuk integritas sistem tanpa cela.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#101C2C] selection:bg-[#526D9B] selection:text-white flex flex-col justify-between">
      {/* ── TOP NAV (Matches Brand Interface Mockup) ── */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FFFFFF]/95 border-b border-[#101C2C]/10 px-6 sm:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Official Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <KadaekBrand />
          </a>

          {/* Center Navigation Links (from mockup: HOME, PLATFORM, SOLUTIONS, COMPANY, CONTACT) */}
          <nav className="hidden lg:flex items-center gap-8 dim-group">
            <a href="#hero" className="dim-item text-xs font-mono tracking-[0.2em] uppercase text-[#101C2C] font-semibold hover:text-[#526D9B] transition-colors">
              HOME
            </a>
            <a href="#showreel" className="dim-item text-xs font-mono tracking-[0.2em] uppercase text-[#101C2C] font-semibold hover:text-[#526D9B] transition-colors">
              PLATFORM
            </a>
            <a href="#pillars" className="dim-item text-xs font-mono tracking-[0.2em] uppercase text-[#101C2C] font-semibold hover:text-[#526D9B] transition-colors">
              SOLUTIONS
            </a>
            <a href="#works" className="dim-item text-xs font-mono tracking-[0.2em] uppercase text-[#101C2C] font-semibold hover:text-[#526D9B] transition-colors">
              WORKS
            </a>
            <a href="#contact" className="dim-item text-xs font-mono tracking-[0.2em] uppercase text-[#101C2C] font-semibold hover:text-[#526D9B] transition-colors">
              CONTACT
            </a>
          </nav>

          {/* Right Controls: Audio + Live Clock + CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 text-xs font-mono text-[#526D9B] tracking-wider font-medium">
              <span className="w-2 h-2 rounded-full bg-[#526D9B] animate-pulse" />
              <span>WIB {time || "23:30:00"}</span>
            </div>

            <AudioPlayer />

            <a
              href="https://wa.me/6281234567890?text=Halo%20Kadaek,%20kami%20ingin%20konsultasi%20proyek."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#101C2C] text-[#FFFFFF] text-xs font-semibold uppercase tracking-wider hover:bg-[#526D9B] transition-all active:scale-95 shadow-sm"
            >
              <span>REQUEST DEMO</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* ── MAIN HERO SECTION (Faithful to Brand Guidelines) ── */}
      <main className="flex-1 bg-[#FFFFFF]">
        <section id="hero" className="relative pt-20 pb-28 px-6 sm:px-12 max-w-7xl mx-auto brand-watermark border-b border-[#101C2C]/10">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#101C2C]/10 bg-[#E9EDF2] text-xs font-mono text-[#526D9B] tracking-[0.25em] uppercase mb-8 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#101C2C]" />
              <span>TECHNOLOGY COMPANY • SCALING INFRASTRUCTURE</span>
            </div>

            {/* Giant Brand Wordmark (from brand guideline banner) */}
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black text-[#101C2C] tracking-[0.08em] uppercase leading-none select-none">
              KADAEK
            </h1>
            <p className="text-sm sm:text-lg font-mono text-[#526D9B] tracking-[0.38em] uppercase mt-3 font-semibold">
              TECHNOLOGY COMPANY
            </p>

            {/* Sub-headline directly from brand sheet: "ENGINEERED PRECISION" */}
            <div className="mt-14 max-w-3xl">
              <h2 className="text-3xl sm:text-5xl font-black text-[#101C2C] tracking-tight uppercase leading-[1.1]">
                ENGINEERED PRECISION. <br />
                <span className="text-[#526D9B]">INNOVATING THE FUTURE.</span>
              </h2>

              <p className="mt-6 text-base sm:text-xl font-normal text-[#526D9B] leading-relaxed">
                Kami merancang dan membangun ekosistem perangkat lunak generasi berikutnya. Menggabungkan arsitektur infrastruktur berdaya tahan tinggi, rekayasa presisi, dan pengalaman digital berkelas dunia.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#showreel"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#101C2C] text-[#FFFFFF] text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#526D9B] transition-all shadow-md active:scale-95"
              >
                <span>EXPLORE PLATFORM</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#101C2C]/15 bg-[#E9EDF2] text-[#101C2C] text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#101C2C] hover:text-[#FFFFFF] transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>START A PROJECT</span>
              </a>
            </div>

            {/* Status Indicator */}
            <div className="mt-14 pt-8 border-t border-[#101C2C]/10 w-full flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-[#526D9B]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#101C2C]" />
                <span>Q1/Q2 PARTNERSHIP: ACTIVE</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#526D9B]" />
                <span>ENTERPRISE GRADE SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span>GLOBAL ENGINEERING STANDARDS</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── TICKER MARQUEE ── */}
        <div className="border-y border-[#101C2C]/10 py-4 bg-[#E9EDF2] overflow-hidden">
          <div className="ticker-track text-xs font-mono uppercase tracking-[0.3em] text-[#101C2C] font-semibold">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 shrink-0 px-4">
                <span>ENGINEERED PRECISION</span>
                <span className="text-[#526D9B]">•</span>
                <span>SCALING INFRASTRUCTURE</span>
                <span className="text-[#526D9B]">•</span>
                <span>INNOVATING THE FUTURE</span>
                <span className="text-[#526D9B]">•</span>
                <span>DISTRIBUTED ARCHITECTURE</span>
                <span className="text-[#526D9B]">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 01: SHOWREEL SECTION (Interactive 4K Digital Motion) ── */}
        <ShowreelSection />

        {/* ── 02: SELECTED WORKS (huyml.co Style Hover Preview) ── */}
        <SelectedWorks />

        {/* ── 03: PILLARS / SCALING INFRASTRUCTURE (From Brand Guidelines) ── */}
        <section id="pillars" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#101C2C]/10 bg-[#FFFFFF]">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-16 pb-4 border-b border-[#101C2C]/10 gap-2">
            <span className="text-xs font-mono text-[#526D9B] uppercase tracking-widest font-semibold">[ 03 — CAPABILITIES ]</span>
            <span className="text-xs font-mono text-[#526D9B] uppercase tracking-wider">
              SCALING INFRASTRUCTURE & ARCHITECTURE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 sm:p-10 rounded-2xl border border-[#101C2C]/10 bg-[#E9EDF2]/60 hover:bg-[#E9EDF2] hover:border-[#101C2C]/25 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#101C2C] text-[#FFFFFF] flex items-center justify-center mb-6 group-hover:bg-[#526D9B] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#101C2C] tracking-tight uppercase mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm font-normal text-[#526D9B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 04: GIANT EDITORIAL CTA ── */}
        <section id="contact" className="py-28 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#101C2C]/10 bg-[#FFFFFF]">
          <span className="text-xs font-mono text-[#526D9B] uppercase tracking-widest font-semibold">[ 04 — CONTACT ]</span>

          <div className="mt-8">
            <h2 className="text-2xl sm:text-3xl font-light text-[#526D9B]">
              Ready to engineer your next digital platform?
            </h2>

            {/* Giant Clickable Email */}
            <div className="mt-6 flex flex-col md:flex-row md:items-baseline gap-6">
              <a
                href={`mailto:${email}`}
                className="text-[clamp(2.5rem,7.5vw,7.5rem)] font-black text-[#101C2C] hover:text-[#526D9B] tracking-[-0.03em] leading-none transition-colors"
              >
                {email}
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#101C2C]/15 bg-[#E9EDF2] hover:bg-[#101C2C] hover:text-[#FFFFFF] text-xs font-mono uppercase tracking-wider text-[#101C2C] transition-all self-start md:self-center shadow-sm"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "COPIED" : "COPY EMAIL"}</span>
              </button>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4 text-xs font-mono">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#101C2C] hover:bg-[#526D9B] text-[#FFFFFF] font-medium transition-all shadow-md active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Direct WhatsApp Consultation</span>
                <ArrowUpRight className="w-4 h-4 opacity-70" />
              </a>

              <span className="px-3 py-2 text-[#526D9B] font-medium">
                SLA Response Time: &lt; 24h
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER (with Monogram) ── */}
      <footer className="border-t border-[#101C2C]/10 px-6 sm:px-12 py-10 bg-[#E9EDF2] text-xs font-mono text-[#526D9B] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <KadaekMonogram className="w-6 h-6 text-[#101C2C]" />
          <span className="text-[#101C2C] font-black tracking-widest uppercase">
            KADAEK TECHNOLOGY COMPANY
          </span>
        </div>

        <div className="flex items-center gap-6 text-[#526D9B]">
          <span>ENGINEERED PRECISION</span>
          <span>•</span>
          <span>© 2026 ALL RIGHTS RESERVED</span>
        </div>
      </footer>
    </div>
  );
}
