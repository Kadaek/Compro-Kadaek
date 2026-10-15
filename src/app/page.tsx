"use client";

import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";
import ScrollReveal from "@/components/ScrollReveal";
import { KadaekBrand, KadaekMonogram } from "@/components/KadaekLogo";
import { ArrowUpRight, Copy, Check, MessageSquare } from "lucide-react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("about");
  const email = "halo@kadaek.id";

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      const sections = ["about", "disciplines", "works", "contact"];
      const scrollPosition = window.scrollY + 250;

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

      {/* ── TOP SCROLL PROGRESS BAR ── */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-white z-[60] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* ── 1. HEADER / NAVBAR (CINEMATIC DARK GLASS) ── */}
      <header className="sticky top-0 z-50 bg-[#101C2C]/85 backdrop-blur-md border-b border-white/10 text-white">
        <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
          {/* Brand Logo in White */}
          <a href="#" className="flex items-center gap-3 group">
            <KadaekBrand inverted={true} />
          </a>

          {/* Clean Professional Navigation Links with Active Spy */}
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
                className={`transition-colors relative py-1 ${
                  activeSection === item.id
                    ? "text-white font-semibold"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white rounded-full transition-all" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Kadaek,%20kami%20ingin%20konsultasi%20proyek."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-[#101C2C] text-xs font-semibold tracking-wider hover:bg-[#E9EDF2] transition-all shadow-sm active:scale-95"
            >
              <span>TALK TO US</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* ── 2. HERO SECTION (FULL-BLEED STARTUP VIDEO BACKGROUND - NO WHITE BG) ── */}
      <main className="flex-1">
        <section id="about" className="relative pt-16 sm:pt-24 pb-24 sm:pb-36 px-6 overflow-hidden bg-[#101C2C] text-white">
          {/* Ambient Full-Bleed Startup Video Background */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover opacity-60 filter saturate-105 contrast-110"
            >
              <source src="/videos/startup-office.mp4" type="video/mp4" />
            </video>

            {/* Cinematic Scrim & Fade to keep video fully visible while guaranteeing AAA text contrast */}
            <div className="absolute inset-0 bg-[#101C2C]/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101C2C] via-transparent to-[#101C2C]/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#101C2C]/80 via-[#101C2C]/40 to-transparent" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Main Editorial Headline */}
            <div className="max-w-4xl">
              <ScrollReveal direction="up" delay={0}>
                <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.06] drop-shadow-sm">
                  Membangun sistem teknologi & produk digital modern dengan{" "}
                  <span className="text-[#94B2E6]">presisi rekayasa.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={150}>
                <p className="mt-8 text-lg sm:text-xl text-white/85 font-normal leading-relaxed max-w-2xl drop-shadow-sm">
                  Kadaek adalah studio rekayasa perangkat lunak independen. Kami berkolaborasi dengan founder dan korporasi untuk merancang infrastruktur komputasi berkecepatan tinggi, arsitektur tangguh, dan produk digital berkelas dunia.
                </p>
              </ScrollReveal>

              {/* Action Buttons */}
              <ScrollReveal direction="up" delay={300}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="#works"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#101C2C] text-xs font-semibold uppercase tracking-wider hover:bg-[#E9EDF2] transition-all shadow-md active:scale-95"
                  >
                    <span>LIHAT PORTOFOLIO</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/25 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/20 transition-all shadow-md active:scale-95 backdrop-blur-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>KONSULTASI PROYEK</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── 3. DISCIPLINES (ARCHITECTURAL WITH STAGGERED SCROLL REVEAL) ── */}
        <section id="disciplines" className="py-24 px-6 border-t border-[#101C2C]/10 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal direction="up">
              <div className="flex flex-col sm:flex-row items-baseline justify-between mb-16 pb-4 border-b border-[#101C2C]/10 gap-2">
                <span className="text-xs font-mono text-[#526D9B] uppercase tracking-widest font-semibold">
                  [ 01 — DISCIPLINES ]
                </span>
                <span className="text-xs font-mono text-[#526D9B] uppercase tracking-wider">
                  Rekayasa Perangkat Lunak & Sistem
                </span>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {disciplines.map((item, idx) => (
                <ScrollReveal key={item.num} delay={idx * 120} direction="up">
                  <div className="p-8 sm:p-10 rounded-2xl border border-[#101C2C]/10 bg-[#E9EDF2]/40 hover:bg-[#E9EDF2]/80 hover:-translate-y-1.5 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
                    <div>
                      <div className="font-mono text-xs text-[#526D9B] font-semibold mb-6">
                        /{item.num}
                      </div>

                      <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#101C2C] tracking-tight uppercase mb-3">
                        {item.title}
                      </h3>

                      <p className="text-sm sm:text-base text-[#526D9B] font-normal leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#101C2C]/10 text-xs font-mono text-[#101C2C] font-medium">
                      {item.stack}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. SELECTED WORKS (WITH SMOOTH SCROLL REVEAL) ── */}
        <section id="works" className="py-24 px-6 border-t border-[#101C2C]/10 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal direction="up">
              <div className="flex flex-col sm:flex-row items-baseline justify-between mb-16 pb-4 border-b border-[#101C2C]/10 gap-2">
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
                <ScrollReveal key={proj.num} delay={idx * 90} direction="up">
                  <div className="py-10 sm:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:bg-[#E9EDF2]/30 px-4 rounded-xl transition-all duration-300">
                    <div className="flex items-baseline gap-6 sm:gap-10">
                      <span className="text-xs sm:text-sm font-mono text-[#526D9B] font-semibold group-hover:text-[#101C2C] transition-colors">
                        /{proj.num}
                      </span>
                      <div>
                        <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#101C2C] tracking-tight group-hover:text-[#526D9B] group-hover:translate-x-1 transition-all duration-300">
                          {proj.title}
                        </h3>
                        <p className="text-sm text-[#526D9B] mt-2 font-normal max-w-xl">
                          {proj.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 pl-12 md:pl-0">
                      <div className="hidden sm:block text-right">
                        <div className="font-mono text-xs text-[#101C2C] font-semibold uppercase">
                          {proj.category}
                        </div>
                        <div className="font-mono text-[11px] text-[#526D9B] mt-0.5">
                          Tahun {proj.year}
                        </div>
                      </div>

                      <div className="w-11 h-11 rounded-full border border-[#101C2C]/15 bg-[#E9EDF2] group-hover:bg-[#101C2C] group-hover:text-white text-[#101C2C] flex items-center justify-center transition-all duration-300 shrink-0 group-hover:scale-105">
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. DIRECT CONTACT SECTION (SMOOTH SCROLL REVEAL) ── */}
        <section id="contact" className="py-24 sm:py-36 px-6 border-t border-[#101C2C]/10 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal direction="up">
              <span className="text-xs font-mono text-[#526D9B] uppercase tracking-widest font-semibold">
                [ 03 — GET IN TOUCH ]
              </span>
            </ScrollReveal>

            <div className="mt-8 max-w-3xl">
              <ScrollReveal direction="up" delay={100}>
                <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#101C2C] tracking-tight">
                  Punya visi proyek atau sistem yang ingin diakselerasi?
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={180}>
                <p className="mt-4 text-base sm:text-lg text-[#526D9B] leading-relaxed">
                  Kami siap mendiskusikan kebutuhan teknis, estimasi timeline, serta arsitektur solusi untuk bisnis Anda.
                </p>
              </ScrollReveal>

              {/* Email Direct Access */}
              <ScrollReveal direction="up" delay={260}>
                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 flex-wrap">
                  <a
                    href={`mailto:${email}`}
                    className="font-heading text-3xl sm:text-5xl font-black text-[#101C2C] hover:text-[#526D9B] tracking-tight transition-colors"
                  >
                    {email}
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#101C2C]/15 bg-[#E9EDF2] hover:bg-[#101C2C] hover:text-[#FFFFFF] text-xs font-mono uppercase tracking-wider text-[#101C2C] transition-colors shadow-sm self-start sm:self-center cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "COPIED" : "COPY EMAIL"}</span>
                  </button>
                </div>
              </ScrollReveal>

              {/* WhatsApp Call to Action */}
              <ScrollReveal direction="up" delay={340}>
                <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono">
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#101C2C] hover:bg-[#526D9B] text-[#FFFFFF] font-medium transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Konsultasi Cepat via WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4 opacity-70" />
                  </a>

                  <span className="text-[#526D9B] font-medium">
                    Respon dalam 1×24 jam kerja
                  </span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      {/* ── 6. FOOTER ── */}
      <footer className="border-t border-[#101C2C]/10 px-6 py-10 bg-[#E9EDF2]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#526D9B]">
          <div className="flex items-center gap-3">
            <KadaekMonogram className="w-5 h-5 text-[#101C2C]" />
            <span className="text-[#101C2C] font-heading font-extrabold tracking-widest uppercase">
              KADAEK
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span>ENGINEERED PRECISION</span>
            <span>•</span>
            <span>JAKARTA & BANDUNG, ID</span>
            <span>•</span>
            <span>© 2026 ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
