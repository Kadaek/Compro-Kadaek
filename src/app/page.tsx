"use client";

import { useEffect, useState } from "react";
import AudioPlayer from "@/components/AudioPlayer";
import ShowreelSection from "@/components/ShowreelSection";
import SelectedWorks from "@/components/SelectedWorks";
import { KadaekBrand, KadaekMonogram } from "@/components/KadaekLogo";
import { ArrowUpRight, Copy, Check, MessageSquare, Server, Cpu, Zap, ShieldCheck } from "lucide-react";

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

    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ring) {
        ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      }
      raf = requestAnimationFrame(loop);
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

  const capabilities = [
    {
      num: "01",
      icon: Server,
      title: "SCALING INFRASTRUCTURE",
      desc: "Perancangan arsitektur komputasi terdistribusi, zero-downtime clustering, dan cloud orchestration (AWS, GCP, Kubernetes) berstandar global.",
      tags: ["Distributed Systems", "Kubernetes", "Multi-Region Cloud"],
    },
    {
      num: "02",
      icon: Cpu,
      title: "ENTERPRISE ARCHITECTURE",
      desc: "Pengembangan core system backend dengan Next.js, Node.js, Go, dan PostgreSQL dengan performa tinggi dan throughput masif.",
      tags: ["Next.js Engine", "Go Microservices", "PostgreSQL Core"],
    },
    {
      num: "03",
      icon: Zap,
      title: "INNOVATING THE FUTURE",
      desc: "Implementasi sistem otomatisasi cerdas, pipeline data real-time, integrasi AI, serta produk digital generasi berikutnya.",
      tags: ["AI Integration", "Realtime Telemetry", "Event Streams"],
    },
    {
      num: "04",
      icon: ShieldCheck,
      title: "HIGH-GRADE RELIABILITY",
      desc: "Audit keamanan sistem, mitigasi risiko siber, continuous verification, dan kepatuhan standar industri untuk integritas tanpa celah.",
      tags: ["Security Hardening", "Zero-Trust", "99.9% SLA"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#101C2C] selection:bg-[#526D9B] selection:text-white flex flex-col justify-between">
      {/* ── TOP NAV ── */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FFFFFF]/95 border-b border-[#101C2C]/10 px-6 sm:px-10 lg:px-16 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo with Monogram Mark */}
          <a href="#" className="flex items-center gap-3 group">
            <KadaekBrand />
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 dim-group">
            <a href="#about" className="dim-item font-sans text-xs tracking-[0.16em] uppercase text-[#101C2C] font-semibold hover:text-[#526D9B] transition-colors">
              ABOUT
            </a>
            <a href="#showreel" className="dim-item font-sans text-xs tracking-[0.16em] uppercase text-[#101C2C] font-semibold hover:text-[#526D9B] transition-colors">
              SHOWREEL
            </a>
            <a href="#works" className="dim-item font-sans text-xs tracking-[0.16em] uppercase text-[#101C2C] font-semibold hover:text-[#526D9B] transition-colors">
              WORKS
            </a>
            <a href="#capabilities" className="dim-item font-sans text-xs tracking-[0.16em] uppercase text-[#101C2C] font-semibold hover:text-[#526D9B] transition-colors">
              CAPABILITIES
            </a>
            <a href="#contact" className="dim-item font-sans text-xs tracking-[0.16em] uppercase text-[#101C2C] font-semibold hover:text-[#526D9B] transition-colors">
              CONTACT
            </a>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 text-xs font-mono text-[#526D9B] tracking-wider font-medium">
              <span className="w-2 h-2 rounded-full bg-[#526D9B] animate-pulse" />
              <span>WIB {time || "23:45:00"}</span>
            </div>

            <AudioPlayer />

            <a
              href="https://wa.me/6281234567890?text=Halo%20Kadaek,%20kami%20ingin%20konsultasi%20proyek."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#101C2C] text-[#FFFFFF] font-sans text-xs font-semibold uppercase tracking-wider hover:bg-[#526D9B] transition-all active:scale-95 shadow-sm"
            >
              <span>TALK TO US</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1 bg-[#FFFFFF]">
        {/* ── HERO SECTION: TASTEFUL, BALANCED, SPACIOUS ── */}
        <section id="about" className="pt-20 sm:pt-28 pb-20 sm:pb-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
          {/* Subtle Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#101C2C]/10 bg-[#E9EDF2] text-xs font-mono text-[#526D9B] tracking-[0.2em] uppercase mb-8 font-medium">
            <span className="w-2 h-2 rounded-full bg-[#101C2C]" />
            <span>KADAEK TECHNOLOGY COMPANY • EDITION &apos;26</span>
          </div>

          {/* Primary Editorial Headline: Sized comfortably (not 83px shouting) */}
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#101C2C] tracking-tight leading-[1.12] max-w-4xl">
            Membangun sistem teknologi & produk digital modern dengan{" "}
            <span className="text-[#526D9B]">presisi rekayasa.</span>
          </h1>

          {/* Subtitle & Value Proposition */}
          <div className="mt-10 max-w-3xl">
            <p className="font-sans text-base sm:text-lg lg:text-xl font-normal text-[#526D9B] leading-relaxed">
              Kadaek adalah studio rekayasa perangkat lunak independen. Kami berkolaborasi dengan founder, enterprise, dan brand visioner untuk mewujudkan infrastruktur teknologi berkecepatan tinggi, arsitektur tangguh, dan produk digital berkelas dunia.
            </p>
          </div>

          {/* Action Row & Capacity Badge */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#showreel"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#101C2C] text-[#FFFFFF] font-sans text-xs font-semibold uppercase tracking-wider hover:bg-[#526D9B] transition-all shadow-sm active:scale-95"
            >
              <span>EXPLORE PLATFORM</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#101C2C]/15 bg-[#E9EDF2] text-[#101C2C] font-sans text-xs font-semibold uppercase tracking-wider hover:bg-[#101C2C] hover:text-[#FFFFFF] transition-all shadow-sm active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>START A PROJECT</span>
            </a>

            <div className="px-4 py-2.5 rounded-full border border-[#101C2C]/10 bg-[#E9EDF2] text-xs font-mono text-[#526D9B]">
              <span className="font-semibold text-[#101C2C]">● Q1/Q2 PARTNERSHIP:</span> OPEN
            </div>
          </div>
        </section>

        {/* ── TICKER MARQUEE (Properly spaced) ── */}
        <div className="border-y border-[#101C2C]/10 py-3.5 bg-[#E9EDF2] overflow-hidden my-6">
          <div className="ticker-track text-xs font-mono uppercase tracking-[0.25em] text-[#101C2C] font-semibold">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 shrink-0 px-4">
                <span>ENGINEERED PRECISION</span>
                <span className="text-[#526D9B]">•</span>
                <span>SCALING INFRASTRUCTURE</span>
                <span className="text-[#526D9B]">•</span>
                <span>INNOVATING THE FUTURE</span>
                <span className="text-[#526D9B]">•</span>
                <span>DISTRIBUTED SYSTEMS</span>
                <span className="text-[#526D9B]">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 01: SHOWREEL SECTION ── */}
        <div className="my-8">
          <ShowreelSection />
        </div>

        {/* ── 02: SELECTED WORKS ── */}
        <div className="my-8">
          <SelectedWorks />
        </div>

        {/* ── 03: CAPABILITIES & INFRASTRUCTURE ── */}
        <section id="capabilities" className="py-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-[#101C2C]/10 bg-[#FFFFFF]">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-12 pb-4 border-b border-[#101C2C]/10 gap-3">
            <span className="text-xs font-mono text-[#526D9B] uppercase tracking-[0.2em] font-semibold">
              [ 03 — CAPABILITIES ]
            </span>
            <span className="text-xs font-mono text-[#526D9B] uppercase tracking-wider">
              Scaling Infrastructure & Digital Systems
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.num}
                  className="p-8 sm:p-10 rounded-2xl border border-[#101C2C]/10 bg-[#E9EDF2]/60 hover:bg-[#E9EDF2] hover:border-[#101C2C]/25 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-11 h-11 rounded-xl bg-[#101C2C] text-[#FFFFFF] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs text-[#526D9B] font-semibold">
                        /{cap.num}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl font-extrabold text-[#101C2C] tracking-tight uppercase mb-2">
                      {cap.title}
                    </h3>
                    <p className="font-sans text-sm font-normal text-[#526D9B] leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-6 mt-4 border-t border-[#101C2C]/10">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#FFFFFF] border border-[#101C2C]/10 text-[#101C2C]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 04: GIANT EDITORIAL CTA ── */}
        <section id="contact" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-[#101C2C]/10 bg-[#FFFFFF]">
          <span className="text-xs font-mono text-[#526D9B] uppercase tracking-[0.2em] font-semibold">
            [ 04 — GET IN TOUCH ]
          </span>

          <div className="mt-8">
            <h2 className="font-sans text-xl sm:text-2xl font-light text-[#526D9B]">
              Have a digital project or system to scale?
            </h2>

            {/* Sized comfortably email */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-6 flex-wrap">
              <a
                href={`mailto:${email}`}
                className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black text-[#101C2C] hover:text-[#526D9B] tracking-tight leading-none transition-colors"
              >
                {email}
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#101C2C]/15 bg-[#E9EDF2] hover:bg-[#101C2C] hover:text-[#FFFFFF] text-xs font-mono uppercase tracking-wider text-[#101C2C] transition-all self-start sm:self-center shadow-sm"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "COPIED" : "COPY EMAIL"}</span>
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-xs font-mono">
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

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#101C2C]/10 px-6 sm:px-10 lg:px-16 py-8 bg-[#E9EDF2] text-xs font-mono text-[#526D9B] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <KadaekMonogram className="w-5 h-5 text-[#101C2C]" />
          <span className="text-[#101C2C] font-heading font-black tracking-wider uppercase text-xs">
            KADAEK TECHNOLOGY COMPANY
          </span>
        </div>

        <div className="flex items-center gap-6 text-[#526D9B]">
          <span>ENGINEERED PRECISION</span>
          <span>•</span>
          <span>JAKARTA & BANDUNG, ID</span>
          <span>•</span>
          <span>© 2026 ALL RIGHTS RESERVED</span>
        </div>
      </footer>
    </div>
  );
}
