"use client";

import { useEffect, useState } from "react";
import AudioPlayer from "@/components/AudioPlayer";
import ShowreelSection from "@/components/ShowreelSection";
import SelectedWorks from "@/components/SelectedWorks";
import { ArrowUpRight, Copy, Check, MessageSquare } from "lucide-react";

export default function Home() {
  const [time, setTime] = useState("");
  const [copied, setCopied] = useState(false);
  const email = "halo@kadaek.id";

  useEffect(() => {
    // ── Custom Cursor Logic ────────────────────────
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
      raf = requestAnimationFrame(lerp);
    };
    lerp();

    window.addEventListener("mousemove", onMove);

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

  const disciplines = [
    { num: "01", title: "Enterprise Web Applications", desc: "Next.js, Node.js, TypeScript, PostgreSQL, High-Scale APIs" },
    { num: "02", title: "Native & Cross-Platform Mobile", desc: "Flutter, React Native, Swift, Performance Optimization" },
    { num: "03", title: "Cloud Architecture & DevOps", desc: "AWS, GCP, Kubernetes, CI/CD Pipeline, Security Compliance" },
    { num: "04", title: "Design Systems & Digital Direction", desc: "Interaction Design, 3D Asset Integration, Design Tokens" },
    { num: "05", title: "AI & Distributed Data Pipelines", desc: "Autonomous Agent Systems, LLM Workflows, Realtime Data" },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#101C2C] selection:bg-[#526D9B] selection:text-white flex flex-col justify-between">
      {/* ── TOP NAV ── */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FFFFFF]/95 border-b border-[#101C2C]/10 px-6 sm:px-12 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-[#101C2C] text-[#FFFFFF] flex items-center justify-center font-black text-sm tracking-tighter group-hover:bg-[#526D9B] transition-colors">
              K
            </div>
            <span className="text-lg font-black tracking-widest uppercase text-[#101C2C] group-hover:text-[#526D9B] transition-colors">
              Kadaek<span className="text-[#526D9B]">.</span>
            </span>
          </a>

          {/* Center Info / Audio Toggle */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#526D9B] tracking-wider font-medium">
              <span className="w-2 h-2 rounded-full bg-[#526D9B] animate-pulse" />
              <span>WIB {time || "23:25:00"} • JAKARTA</span>
            </div>

            <AudioPlayer />
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Kadaek,%20kami%20ingin%20konsultasi%20proyek."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#101C2C] text-[#FFFFFF] text-xs font-semibold uppercase tracking-wider hover:bg-[#526D9B] transition-all active:scale-95 shadow-sm"
            >
              <span>Mulai Diskusi</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1 bg-[#FFFFFF]">
        {/* ── HERO SECTION ── */}
        <section className="pt-24 pb-20 px-6 sm:px-12 max-w-7xl mx-auto bg-[#FFFFFF]">
          {/* Overline pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#101C2C]/10 bg-[#E9EDF2] text-xs font-mono text-[#526D9B] tracking-widest uppercase mb-10 font-medium">
            <span className="w-2 h-2 rounded-full bg-[#101C2C]" />
            <span>Independent Software Studio & Digital Architecture</span>
          </div>

          {/* Giant Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-[#101C2C] tracking-tight leading-[1.05] max-w-5xl">
            Membangun Sistem Digital Berkelas Dunia dengan{" "}
            <span className="text-[#526D9B]">Presisi & Dampak Nyata.</span>
          </h1>

          {/* Manifesto & Quick Stats Row */}
          <div className="mt-16 pt-8 border-t border-[#101C2C]/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <p className="md:col-span-7 text-lg sm:text-xl font-normal text-[#526D9B] leading-relaxed">
              Kadaek merancang, merekayasa, dan mempercepat produk teknologi bagi startup visioner dan perusahaan terkemuka. Menggabungkan arsitektur software tangguh dengan pengalaman visual level dunia.
            </p>

            <div className="md:col-span-5 flex flex-col sm:flex-row gap-4 md:justify-end text-xs font-mono">
              <div className="p-5 rounded-2xl border border-[#101C2C]/10 bg-[#E9EDF2]">
                <div className="text-[#526D9B] uppercase tracking-widest text-[11px] font-medium">Kapasitas Kemitraan</div>
                <div className="text-[#101C2C] font-bold mt-1 text-sm">● Q1 & Q2 2026 Aktif</div>
              </div>

              <div className="p-5 rounded-2xl border border-[#101C2C]/10 bg-[#E9EDF2]">
                <div className="text-[#526D9B] uppercase tracking-widest text-[11px] font-medium">Waktu Rilis Rata-rata</div>
                <div className="text-[#101C2C] font-bold mt-1 text-sm">3–6 Minggu Sprint</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TICKER MARQUEE ── */}
        <div className="border-y border-[#101C2C]/10 py-4 bg-[#E9EDF2] overflow-hidden">
          <div className="ticker-track text-xs font-mono uppercase tracking-[0.3em] text-[#101C2C] font-semibold">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 shrink-0 px-4">
                <span>Enterprise Architecture</span>
                <span className="text-[#526D9B]">•</span>
                <span>Next.js & Cloud Core</span>
                <span className="text-[#526D9B]">•</span>
                <span>Awwwards Grade Motion</span>
                <span className="text-[#526D9B]">•</span>
                <span>Zero Latency Optimization</span>
                <span className="text-[#526D9B]">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 01: SHOWREEL SECTION (Interactive 4K Video) ── */}
        <div className="bg-[#FFFFFF]">
          <ShowreelSection />
        </div>

        {/* ── 02: SELECTED WORKS (huyml.co Style Hover Preview) ── */}
        <div className="bg-[#FFFFFF]">
          <SelectedWorks />
        </div>

        {/* ── 03: DISCIPLINES / CAPABILITIES ── */}
        <section id="disciplines" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#101C2C]/10 bg-[#FFFFFF]">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-16 pb-4 border-b border-[#101C2C]/10 gap-2">
            <span className="text-xs font-mono text-[#526D9B] uppercase tracking-widest font-semibold">[ 03 — DISCIPLINES ]</span>
            <span className="text-xs font-mono text-[#526D9B] uppercase tracking-wider">
              Rekayasa Perangkat Lunak & Desain Produk
            </span>
          </div>

          <div className="dim-group divide-y divide-[#101C2C]/10 border-b border-[#101C2C]/10">
            {disciplines.map((item) => (
              <div
                key={item.num}
                className="dim-item py-8 flex flex-col md:flex-row md:items-baseline justify-between gap-4 group cursor-default"
              >
                <div className="flex items-baseline gap-6 sm:gap-12 md:w-1/2">
                  <span className="text-xs sm:text-sm font-mono text-[#526D9B] group-hover:text-[#101C2C] transition-colors font-bold">
                    {item.num}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#101C2C] tracking-tight group-hover:translate-x-2 transition-transform duration-200">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm font-mono text-[#526D9B] md:w-1/2 md:text-right font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 04: GIANT EDITORIAL CTA ── */}
        <section id="contact" className="py-28 px-6 sm:px-12 max-w-7xl mx-auto border-t border-[#101C2C]/10 bg-[#FFFFFF]">
          <span className="text-xs font-mono text-[#526D9B] uppercase tracking-widest font-semibold">[ 04 — CONTACT ]</span>

          <div className="mt-8">
            <h2 className="text-2xl sm:text-3xl font-light text-[#526D9B]">
              Punya ide proyek atau sistem yang ingin diakselerasi?
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
                <span>{copied ? "Tersalin!" : "Salin Email"}</span>
              </button>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4 text-xs font-mono">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#101C2C] hover:bg-[#526D9B] text-[#FFFFFF] font-medium transition-all shadow-md active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Konsultasi Cepat via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 opacity-70" />
              </a>

              <span className="px-3 py-2 text-[#526D9B] font-medium">
                Respon dalam 1×24 jam kerja
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#101C2C]/10 px-6 sm:px-12 py-10 bg-[#E9EDF2] text-xs font-mono text-[#526D9B] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © 2026 KADAEK STUDIO • ALL RIGHTS RESERVED
        </div>
        <div className="flex items-center gap-6 text-[#101C2C] font-semibold">
          <span>JAKARTA & BANDUNG, ID</span>
          <span>EST. 2024</span>
        </div>
      </footer>
    </div>
  );
}
