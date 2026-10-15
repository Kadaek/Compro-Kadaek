"use client";

import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";
import ScrollReveal from "@/components/ScrollReveal";
import HeroFloatingShowcase from "@/components/HeroFloatingShowcase";
import { KadaekBrand, KadaekMonogram } from "@/components/KadaekLogo";
import { ArrowUpRight, Copy, Check, MessageSquare } from "lucide-react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const email = "halo@kadaek.id";

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "disciplines", "works", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const disciplines = [
    {
      num: "01",
      title: "SCALING INFRASTRUCTURE",
      desc: "Perancangan arsitektur komputasi terdistribusi, zero-downtime clustering, dan cloud orchestration (AWS, GCP, Kubernetes) berstandar global.",
      stack: "Distributed Systems · Kubernetes · Multi-Region Cloud",
    },
    {
      num: "02",
      title: "ENTERPRISE ARCHITECTURE",
      desc: "Pengembangan core system backend dengan Next.js, Node.js, Go, dan PostgreSQL dengan performa tinggi dan throughput masif.",
      stack: "Next.js Engine · Go Microservices · PostgreSQL Core",
    },
    {
      num: "03",
      title: "INTEGRATED SYSTEMS",
      desc: "Implementasi sistem otomatisasi cerdas, pipeline data real-time, integrasi AI terapan, serta produk digital berlatensi rendah.",
      stack: "AI Integration · Realtime Telemetry · Event Streams",
    },
    {
      num: "04",
      title: "HIGH-RELIABILITY ENGINEERING",
      desc: "Audit keamanan sistem, mitigasi risiko siber, continuous verification, dan kepatuhan standar industri untuk integritas tanpa celah.",
      stack: "Security Hardening · Zero-Trust · 99.9% SLA",
    },
  ];

  const projects = [
    {
      num: "01",
      title: "FinTrack Corporate",
      category: "Fintech Platform & Cloud Core",
      year: "2025",
      desc: "Platform automasi rekonsiliasi perbankan multi-entitas dengan throughput ribuan transaksi per detik.",
    },
    {
      num: "02",
      title: "LogiSmart Fleet OS",
      category: "Industrial IoT & Mobile Systems",
      year: "2025",
      desc: "Sistem pelacakan armada logistik cerdas terintegrasi telemetri IoT dan algoritma optimasi rute.",
    },
    {
      num: "03",
      title: "EduCore Platform",
      category: "High-Load Streaming & Web Architecture",
      year: "2024",
      desc: "Infrastruktur pembelajaran daring untuk 100k+ pengguna aktif simultan dengan latensi sub-detik.",
    },
    {
      num: "04",
      title: "Atlas Protocols",
      category: "Web3 Systems & Security Auditing",
      year: "2024",
      desc: "Protokol komputasi terdesentralisasi dengan verifikasi kriptografis dan audit keamanan ketat.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#101C2C] flex flex-col justify-between selection:bg-[#101C2C] selection:text-white">
      {/* ── CINEMATIC VISUAL PRELOADER ── */}
      <Preloader />

      {/* ── 1. HEADER / NAVBAR (100% TRANSPARENT, FIXED OVER SNAP SECTIONS) ── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-transparent pointer-events-none transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-16 sm:h-20 flex items-center justify-between pointer-events-auto">
          {/* Brand Logo in Deep Navy */}
          <a href="#" className="flex items-center gap-3 group">
            <KadaekBrand inverted={false} />
          </a>

          {/* Clean Professional Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
            {[
              { id: "about", label: "About" },
              { id: "disciplines", label: "Disciplines" },
              { id: "works", label: "Works" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`transition-colors py-1 relative ${
                  activeSection === item.id
                    ? "text-[#101C2C] font-semibold"
                    : "text-[#101C2C]/60 hover:text-[#101C2C]"
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#101C2C] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action (Bahasa Indonesia Konsisten) */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Kadaek,%20kami%20ingin%20konsultasi%20proyek."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full bg-[#101C2C] text-[#FFFFFF] text-[11px] sm:text-xs font-semibold tracking-wider hover:bg-[#526D9B] transition-all shadow-sm active:scale-95"
            >
              <span>KONSULTASI</span>
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* ── 2. HERO SECTION (OPTIMIZED UX: HOOK, DUAL CTAs, UNIFIED MOCKUP & SOCIAL PROOF) ── */}
      <main className="flex-1">
        <section id="about" className="snap-start snap-always relative min-h-[100dvh] sm:h-[100dvh] sm:max-h-[100dvh] flex flex-col justify-between bg-[#FFFFFF] overflow-hidden pt-14 sm:pt-16 pb-3 sm:pb-5 px-4 sm:px-6 md:px-8">
          <div className="max-w-5xl xl:max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between">
            
            {/* Center Stage Group: Headline -> Subheadline -> Dual CTAs -> Non-Overlapping Mockup */}
            <div className="flex-1 flex flex-col items-center justify-center my-auto py-1 sm:py-2 gap-3 sm:gap-4">
              
              {/* Headline & High-Value Copy */}
              <div className="animate-creative-reveal text-center max-w-3xl sm:max-w-4xl mx-auto px-2">
                <h1 className="font-heading text-2xl xs:text-3xl sm:text-5xl md:text-[3.25rem] font-black text-[#101C2C] tracking-tight leading-[1.08] [text-wrap:balance]">
                  Rekayasa Sistem & Platform Digital Berkinerja Tinggi.
                </h1>
                <p className="mt-2.5 text-xs sm:text-sm md:text-[15px] text-[#526D9B] font-normal leading-relaxed max-w-2xl mx-auto [text-wrap:balance]">
                  Kami merancang arsitektur komputasi terdistribusi dan platform modern yang membantu bisnis Anda scale secara masif, aman, dan tanpa downtime.
                </p>

                {/* Primary & Secondary Action CTAs (Positioned right under subheadline) */}
                <div className="flex items-center justify-center gap-3 pt-3.5 sm:pt-4 flex-wrap">
                  <a
                    href="#works"
                    className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-full bg-[#101C2C] text-[#FFFFFF] text-xs font-semibold uppercase tracking-wider hover:bg-[#526D9B] transition-all shadow-sm active:scale-95"
                  >
                    <span>LIHAT PORTOFOLIO</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://wa.me/6281234567890?text=Halo%20Kadaek,%20kami%20ingin%20konsultasi%20proyek."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-full border border-[#101C2C]/15 bg-[#E9EDF2] text-[#101C2C] text-xs font-semibold uppercase tracking-wider hover:bg-[#101C2C] hover:text-[#FFFFFF] transition-all shadow-sm active:scale-95"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>KONSULTASI PROYEK</span>
                  </a>
                </div>
              </div>

              {/* Center Stage: Unified Non-Overlapping Architectural Console */}
              <div className="animate-creative-reveal-delay-1 w-full flex items-center justify-center pt-1 sm:pt-2">
                <HeroFloatingShowcase />
              </div>

            </div>

            {/* Bottom High-Impact Social Proof & Real Business Metrics (Screen 1 Trust) */}
            <div className="animate-creative-reveal-delay-2 pt-3 sm:pt-3.5 border-t border-[#101C2C]/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 shrink-0">
              {/* 3 Real Impact Achievement Metrics */}
              <div className="flex items-center gap-5 sm:gap-8 text-center sm:text-left flex-wrap justify-center sm:justify-start">
                <div>
                  <div className="text-sm sm:text-base font-heading font-black text-[#101C2C] leading-none">12+</div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-[#526D9B] mt-0.5">Sistem Enterprise</div>
                </div>
                <div className="h-5 w-px bg-[#101C2C]/10 hidden sm:block" />
                <div>
                  <div className="text-sm sm:text-base font-heading font-black text-[#101C2C] leading-none">Rp 150M+</div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-[#526D9B] mt-0.5">Throughput Transaksi</div>
                </div>
                <div className="h-5 w-px bg-[#101C2C]/10 hidden sm:block" />
                <div>
                  <div className="text-sm sm:text-base font-heading font-black text-emerald-600 leading-none">99.99%</div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-[#526D9B] mt-0.5">Uptime SLA Terverifikasi</div>
                </div>
              </div>

              {/* Location & Studio Signature */}
              <div className="text-[11px] sm:text-xs font-mono text-[#526D9B] text-center sm:text-right">
                <span className="text-[#101C2C] font-semibold">Kadaek Studio</span> · Jakarta & Bandung, ID
              </div>
            </div>

          </div>
        </section>

        {/* ── 3. DISCIPLINES (FULL SCREEN VIEWPORT 2) ── */}
        <section id="disciplines" className="snap-start snap-always relative min-h-[100dvh] flex items-center justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto w-full">
            <ScrollReveal direction="up">
              <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between mb-6 sm:mb-8 pb-3 border-b border-[#101C2C]/10 gap-1.5 sm:gap-2">
                <span className="text-xs font-mono text-[#526D9B] uppercase tracking-widest font-semibold">
                  [ 01 — DISCIPLINES ]
                </span>
                <span className="text-xs font-mono text-[#526D9B] uppercase tracking-wider">
                  Rekayasa Perangkat Lunak & Sistem
                </span>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {disciplines.map((item, idx) => (
                <ScrollReveal key={item.num} delay={idx * 100} direction="up">
                  <div className="p-5 sm:p-6 md:p-7 rounded-2xl border border-[#101C2C]/10 bg-[#E9EDF2]/40 hover:bg-[#E9EDF2]/80 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
                    <div>
                      <div className="font-mono text-xs text-[#526D9B] font-semibold mb-3 sm:mb-4">
                        /{item.num}
                      </div>

                      <h3 className="font-heading text-lg sm:text-xl font-extrabold text-[#101C2C] tracking-tight uppercase mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#526D9B] font-normal leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-[#101C2C]/10 text-xs font-mono text-[#101C2C] font-medium">
                      {item.stack}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. SELECTED WORKS (FULL SCREEN VIEWPORT 3) ── */}
        <section id="works" className="snap-start snap-always relative min-h-[100dvh] flex items-center justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 border-t border-[#101C2C]/10 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto w-full">
            <ScrollReveal direction="up">
              <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between mb-6 sm:mb-8 pb-3 border-b border-[#101C2C]/10 gap-1.5 sm:gap-2">
                <span className="text-xs font-mono text-[#526D9B] uppercase tracking-widest font-semibold">
                  [ 02 — SELECTED WORKS ]
                </span>
                <span className="text-xs font-mono text-[#526D9B] uppercase tracking-wider">
                  Studi Kasus & Rekayasa Terpilih
                </span>
              </div>
            </ScrollReveal>

            <div className="divide-y divide-[#101C2C]/10 border-b border-[#101C2C]/10">
              {projects.map((proj, idx) => (
                <ScrollReveal key={proj.num} delay={idx * 80} direction="up">
                  <div className="py-4 sm:py-5 md:py-6 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-6 group hover:bg-[#E9EDF2]/40 px-3 sm:px-4 rounded-xl transition-all duration-300">
                    <div className="flex items-start sm:items-baseline gap-3 sm:gap-6 md:gap-8">
                      <span className="text-xs sm:text-sm font-mono text-[#526D9B] font-semibold group-hover:text-[#101C2C] transition-colors shrink-0 pt-0.5 sm:pt-0">
                        /{proj.num}
                      </span>
                      <div>
                        <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-extrabold text-[#101C2C] tracking-tight group-hover:text-[#526D9B] group-hover:translate-x-0.5 transition-all duration-300">
                          {proj.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#526D9B] mt-1 font-normal max-w-xl leading-relaxed">
                          {proj.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-4 sm:gap-6 pt-2 md:pt-0 border-t md:border-t-0 border-[#101C2C]/5">
                      <div className="text-left md:text-right">
                        <div className="font-mono text-[11px] sm:text-xs text-[#101C2C] font-semibold uppercase">
                          {proj.category}
                        </div>
                        <div className="font-mono text-[10px] sm:text-[11px] text-[#526D9B] mt-0.5">
                          Tahun {proj.year}
                        </div>
                      </div>

                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#101C2C]/15 bg-[#E9EDF2] group-hover:bg-[#101C2C] group-hover:text-white text-[#101C2C] flex items-center justify-center transition-all duration-300 shrink-0 group-hover:scale-105">
                        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. DIRECT CONTACT & FOOTER (FULL SCREEN VIEWPORT 4) ── */}
        <section id="contact" className="snap-start snap-always relative min-h-[100dvh] flex flex-col justify-between pt-16 sm:pt-20 border-t border-[#101C2C]/10 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full flex-1 flex flex-col justify-center py-6 sm:py-10">
            <ScrollReveal direction="up">
              <span className="text-xs font-mono text-[#526D9B] uppercase tracking-widest font-semibold">
                [ 03 — GET IN TOUCH ]
              </span>
            </ScrollReveal>

            <div className="mt-4 sm:mt-6 max-w-3xl">
              <ScrollReveal direction="up" delay={100}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#101C2C] tracking-tight leading-tight">
                  Punya visi proyek atau sistem yang ingin diakselerasi?
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={180}>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-[#526D9B] leading-relaxed">
                  Kami siap mendiskusikan kebutuhan teknis, estimasi timeline, serta arsitektur solusi untuk bisnis Anda.
                </p>
              </ScrollReveal>

              {/* Email Direct Access */}
              <ScrollReveal direction="up" delay={260}>
                <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 flex-wrap">
                  <a
                    href={`mailto:${email}`}
                    className="font-heading text-2xl sm:text-4xl md:text-5xl font-black text-[#101C2C] hover:text-[#526D9B] tracking-tight transition-colors break-all sm:break-normal"
                  >
                    {email}
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#101C2C]/15 bg-[#E9EDF2] hover:bg-[#101C2C] hover:text-[#FFFFFF] text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#101C2C] transition-colors shadow-sm self-start sm:self-center cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "COPIED" : "COPY EMAIL"}</span>
                  </button>
                </div>
              </ScrollReveal>

              {/* WhatsApp Call to Action */}
              <ScrollReveal direction="up" delay={340}>
                <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono">
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#101C2C] hover:bg-[#526D9B] text-[#FFFFFF] font-medium transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>Konsultasi Cepat via WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-70" />
                  </a>

                  <span className="text-[#526D9B] font-medium text-[11px] sm:text-xs">
                    Respon dalam 1×24 jam kerja
                  </span>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* ── FOOTER DOCKED AT BOTTOM OF FINAL SCREEN ── */}
          <footer className="border-t border-[#101C2C]/10 px-4 sm:px-6 md:px-8 py-5 sm:py-7 bg-[#E9EDF2] w-full mt-auto">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs font-mono text-[#526D9B] text-center sm:text-left">
              <div className="flex items-center gap-2.5">
                <KadaekMonogram className="w-4 h-4 sm:w-5 sm:h-5 text-[#101C2C]" />
                <span className="text-[#101C2C] font-heading font-extrabold tracking-widest uppercase text-xs sm:text-sm">
                  KADAEK
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-1 text-[11px] sm:text-xs">
                <span>ENGINEERED PRECISION</span>
                <span className="hidden xs:inline">•</span>
                <span>JAKARTA & BANDUNG, ID</span>
                <span className="hidden xs:inline">•</span>
                <span>© 2026 ALL RIGHTS RESERVED</span>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
