"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";

// Load Three.js only on client
const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

const TICKER_ITEMS = [
  "Web Engineering",
  "Product Design",
  "System Architecture",
  "Mobile Apps",
  "Cloud Infrastructure",
  "AI Integration",
  "Digital Strategy",
  "Performance Optimization",
];

export default function WelcomePage() {
  const [loaded, setLoaded] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
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
    const interval = setInterval(tick, 1000);
    return () => { clearTimeout(t); clearInterval(interval); };
  }, []);

  return (
    <div className="noise min-h-screen bg-black text-white overflow-hidden relative">
      <ThreeBackground />
      <CustomCursor />

      {/* Very subtle radial gradient center glow */}
      <div className="fixed inset-0 pointer-events-none -z-10"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 60%, rgba(59,130,246,0.06) 0%, transparent 70%)" }}
      />

      {/* ── TOP NAV ── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
        {/* Logo */}
        <div
          className="flex items-center gap-3"
          style={{ opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(-10px)", transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s" }}
        >
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 opacity-80" />
            <div className="absolute inset-[2px] rounded-md bg-black flex items-center justify-center">
              <span className="text-xs font-black text-blue-400">K</span>
            </div>
          </div>
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/90">Kadaek</span>
        </div>

        {/* Right Controls */}
        <div
          className="flex items-center gap-6"
          style={{ opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(-10px)", transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s" }}
        >
          <div className="hidden md:flex items-center gap-2 text-xs text-white/30 font-mono tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>WIB {time}</span>
          </div>
          <div className="text-xs text-white/30 uppercase tracking-[0.2em] font-mono hidden md:block">
            Jakarta, ID
          </div>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/60 hover:text-white transition-colors duration-300"
          >
            <span>Hubungi</span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <main className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        {/* Tiny overline label */}
        <div
          className="mb-8 flex items-center gap-3"
          style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.6s" }}
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-blue-400">
            Est. 2024 — Studio Teknologi
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500" />
        </div>

        {/* Main headline — massive, staggered */}
        <div className="text-center max-w-5xl mx-auto overflow-hidden">
          {["KAMI", "MEMBANGUN"].map((word, wi) => (
            <div key={wi} className="overflow-hidden block">
              <span
                className="block text-[clamp(4rem,13vw,11rem)] font-black leading-[0.9] tracking-[-0.03em] text-white hero-text-glow animate-letter-in"
                style={{ animationDelay: `${0.4 + wi * 0.15}s` }}
              >
                {word}
              </span>
            </div>
          ))}
          <div className="overflow-hidden block">
            <span
              className="block text-[clamp(4rem,13vw,11rem)] font-black leading-[0.9] tracking-[-0.03em] animate-letter-in"
              style={{
                animationDelay: "0.7s",
                background: "linear-gradient(90deg, #3b82f6 0%, #6366f1 40%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              MASA DEPAN.
            </span>
          </div>
        </div>

        {/* Sub description */}
        <p
          className="mt-10 text-sm sm:text-base text-white/35 max-w-md text-center leading-relaxed animate-fade-up font-light"
          style={{ animationDelay: "1s" }}
        >
          Rekayasa perangkat lunak, arsitektur sistem, dan desain produk untuk perusahaan yang menolak rata-rata.
        </p>

        {/* CTA Row */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 animate-fade-up"
          style={{ animationDelay: "1.15s" }}
        >
          <a
            href="https://wa.me/6281234567890?text=Halo%20Kadaek%2C%20saya%20ingin%20konsultasi%20proyek."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow group relative inline-flex items-center gap-3 px-8 py-4 rounded-none border border-white/20 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-500 overflow-hidden"
          >
            <span className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-all duration-500" />
            <span>Mulai Proyek</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#work"
            className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/30 hover:text-white/70 transition-colors duration-300"
          >
            <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-white/30 flex items-center justify-center transition-colors">
              <Play className="w-2.5 h-2.5 fill-current" />
            </div>
            <span>Lihat Portofolio</span>
          </a>
        </div>

        {/* Bottom corner label */}
        <div
          className="absolute bottom-8 left-8 text-[10px] font-mono uppercase tracking-[0.3em] text-white/15 hidden md:block animate-fade-up"
          style={{ animationDelay: "1.4s" }}
        >
          © 2026 Kadaek
        </div>
        <div
          className="absolute bottom-8 right-8 text-[10px] font-mono uppercase tracking-[0.3em] text-white/15 hidden md:block animate-fade-up"
          style={{ animationDelay: "1.4s" }}
        >
          Scroll to explore ↓
        </div>
      </main>

      {/* ── SCROLLING TICKER ── */}
      <section className="relative border-t border-white/[0.05] py-5 overflow-hidden bg-black/40 backdrop-blur-sm">
        <div className="flex animate-marquee whitespace-nowrap will-change-transform">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-8 text-[11px] font-mono uppercase tracking-[0.3em] text-white/20">
              <span>{item}</span>
              <span className="w-1 h-1 rounded-full bg-blue-500/40" />
            </span>
          ))}
        </div>
      </section>

      {/* ── NUMBERS SECTION ── */}
      <section className="relative px-8 py-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05]">
          {[
            { num: "100+", label: "Klien" },
            { num: "250+", label: "Proyek" },
            { num: "99.8%", label: "Uptime SLA" },
            { num: "5★", label: "Rating" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-black p-10 group hover:bg-white/[0.02] transition-colors duration-500"
              style={{ opacity: loaded ? 1 : 0, transition: `opacity 0.8s ease ${1.2 + i * 0.1}s` }}
            >
              <div className="text-5xl md:text-6xl font-black text-white tabular-nums tracking-tight">
                {item.num}
              </div>
              <div className="mt-3 text-[10px] font-mono uppercase tracking-[0.3em] text-white/25">
                {item.label}
              </div>
              <div className="mt-6 h-px w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-transparent transition-all duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES STRIP ── */}
      <section id="work" className="relative px-8 pb-24 max-w-6xl mx-auto">
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/[0.05]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/25">Kapabilitas</span>
          <div className="h-px flex-1 bg-white/[0.05]" />
        </div>

        <div className="space-y-px">
          {[
            { num: "01", title: "Web & Enterprise Applications", tech: "Next.js · Node.js · TypeScript" },
            { num: "02", title: "Mobile App Development", tech: "Flutter · React Native" },
            { num: "03", title: "Cloud Architecture & DevOps", tech: "AWS · GCP · Docker · K8s" },
            { num: "04", title: "UI/UX & Product Design", tech: "Figma · Motion · Prototyping" },
            { num: "05", title: "AI Integration & Data Systems", tech: "LLM · Pipelines · Analytics" },
          ].map((item, i) => (
            <div
              key={i}
              className="group flex items-center gap-8 py-7 px-6 border-b border-white/[0.04] hover:bg-white/[0.02] transition-all duration-500 cursor-pointer"
            >
              <span className="text-[10px] font-mono text-white/15 tabular-nums w-6 shrink-0">
                {item.num}
              </span>
              <span className="text-lg md:text-2xl font-bold text-white/70 group-hover:text-white transition-colors duration-300 flex-1">
                {item.title}
              </span>
              <span className="hidden md:block text-[10px] font-mono text-white/20 tracking-widest text-right shrink-0 group-hover:text-white/40 transition-colors">
                {item.tech}
              </span>
              <ArrowUpRight className="w-4 h-4 text-white/10 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
            </div>
          ))}
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="relative border-t border-white/[0.05] py-32 text-center px-6">
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/20 mb-8">
          — Siap Berkolaborasi?
        </p>
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white/5 uppercase tracking-tight leading-none mb-12"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
        >
          Let&apos;s Build.
        </h2>
        <a
          href="mailto:halo@kadaek.id"
          className="group inline-flex items-center gap-3 text-2xl sm:text-4xl font-black text-white hover:text-blue-400 transition-colors duration-500"
        >
          halo@kadaek.id
          <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.05] px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-white/15">
        <span>© 2026 Kadaek Studio</span>
        <span>Indonesia · Jakarta · Bandung</span>
      </footer>
    </div>
  );
}
