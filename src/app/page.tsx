"use client";

import { useEffect, useState } from "react";
import { KadaekBrand, KadaekMonogram } from "@/components/KadaekLogo";
import { ArrowUpRight, Copy, Check, MessageSquare, Server, Cpu, Zap, ShieldCheck } from "lucide-react";

export default function Home() {
  const [time, setTime] = useState("");
  const [copied, setCopied] = useState(false);
  const email = "halo@kadaek.id";

  useEffect(() => {
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
    return () => clearInterval(interval);
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

  const projects = [
    {
      num: "01",
      title: "FinTrack Corporate",
      category: "Fintech Platform & Cloud Core",
      year: "2025",
      desc: "Platform automasi rekonsiliasi perbankan multi-entitas dengan latency sub-detik.",
    },
    {
      num: "02",
      title: "LogiSmart Fleet OS",
      category: "Industrial IoT & Mobile Systems",
      year: "2025",
      desc: "Sistem pelacakan armada logistik cerdas terintegrasi sensor IoT dan analitik rute.",
    },
    {
      num: "03",
      title: "EduCore Platform",
      category: "High-Load Streaming & Web Architecture",
      year: "2024",
      desc: "Infrastruktur pembelajaran daring untuk 100k+ pengguna aktif simultan tanpa buffering.",
    },
    {
      num: "04",
      title: "Atlas Protocols",
      category: "Web3 Systems & Security Auditing",
      year: "2024",
      desc: "Protokol komputasi terdesentralisasi dengan keamanan tingkat enterprise dan audit ketat.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#101C2C] flex flex-col justify-between">
      {/* ── 1. HEADER / NAVBAR ── */}
      <header className="sticky top-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#101C2C]/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Official Brand Logo */}
          <a href="#" className="flex items-center gap-3">
            <KadaekBrand />
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase">
            <a href="#about" className="text-[#526D9B] hover:text-[#101C2C] transition-colors font-medium">
              About
            </a>
            <a href="#capabilities" className="text-[#526D9B] hover:text-[#101C2C] transition-colors font-medium">
              Capabilities
            </a>
            <a href="#works" className="text-[#526D9B] hover:text-[#101C2C] transition-colors font-medium">
              Works
            </a>
            <a href="#contact" className="text-[#526D9B] hover:text-[#101C2C] transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-5">
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#526D9B]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>WIB {time || "00:00:00"}</span>
            </div>

            <a
              href="https://wa.me/6281234567890?text=Halo%20Kadaek,%20kami%20ingin%20konsultasi%20proyek."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#101C2C] text-[#FFFFFF] text-xs font-semibold uppercase tracking-wider hover:bg-[#526D9B] transition-colors shadow-sm"
            >
              <span>TALK TO US</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* ── 2. HERO SECTION ── */}
      <main className="flex-1">
        <section id="about" className="py-24 sm:py-32 px-6 max-w-6xl mx-auto">
          {/* Category Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#101C2C]/10 bg-[#E9EDF2] text-xs font-mono text-[#526D9B] tracking-wider uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-[#101C2C]" />
            <span>KADAEK TECHNOLOGY COMPANY • ENGINEERED PRECISION</span>
          </div>

          {/* Sized comfortably headline */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#101C2C] tracking-tight leading-[1.15] max-w-4xl">
            Membangun sistem teknologi & produk digital modern dengan{" "}
            <span className="text-[#526D9B]">presisi rekayasa.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-lg sm:text-xl text-[#526D9B] font-normal leading-relaxed max-w-3xl">
            Kadaek adalah studio rekayasa perangkat lunak independen. Kami berkolaborasi dengan founder, enterprise, dan brand visioner untuk mewujudkan infrastruktur teknologi berkecepatan tinggi, arsitektur tangguh, dan produk digital berkelas dunia.
          </p>

          {/* Action Row */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#101C2C] text-[#FFFFFF] text-xs font-semibold uppercase tracking-wider hover:bg-[#526D9B] transition-colors shadow-sm"
            >
              <span>JELAJAHI KAPABILITAS</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#101C2C]/15 bg-[#E9EDF2] text-[#101C2C] text-xs font-semibold uppercase tracking-wider hover:bg-[#101C2C] hover:text-[#FFFFFF] transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>MULAI PROYEK</span>
            </a>

            <div className="px-4 py-2.5 rounded-full border border-[#101C2C]/10 bg-[#E9EDF2] text-xs font-mono text-[#526D9B]">
              <span className="font-semibold text-[#101C2C]">● Q1/Q2 PARTNERSHIP:</span> ACTIVE
            </div>
          </div>
        </section>

        {/* ── 3. CAPABILITIES SECTION ── */}
        <section id="capabilities" className="py-24 px-6 border-t border-[#101C2C]/10 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row items-baseline justify-between mb-12 pb-4 border-b border-[#101C2C]/10 gap-2">
              <span className="text-xs font-mono text-[#526D9B] uppercase tracking-widest font-semibold">
                [ 01 — CAPABILITIES ]
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
                    className="p-8 sm:p-10 rounded-2xl border border-[#101C2C]/10 bg-[#E9EDF2]/60 hover:bg-[#E9EDF2] transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-[#101C2C] text-[#FFFFFF] flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-xs text-[#526D9B] font-semibold">
                          /{cap.num}
                        </span>
                      </div>

                      <h3 className="font-heading text-lg sm:text-xl font-extrabold text-[#101C2C] tracking-tight uppercase mb-3">
                        {cap.title}
                      </h3>
                      <p className="text-sm text-[#526D9B] font-normal leading-relaxed">
                        {cap.desc}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-[#101C2C]/10">
                      {cap.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono px-3 py-1 rounded-md bg-[#FFFFFF] border border-[#101C2C]/10 text-[#101C2C]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 4. SELECTED WORKS SECTION ── */}
        <section id="works" className="py-24 px-6 border-t border-[#101C2C]/10 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row items-baseline justify-between mb-12 pb-4 border-b border-[#101C2C]/10 gap-2">
              <span className="text-xs font-mono text-[#526D9B] uppercase tracking-widest font-semibold">
                [ 02 — SELECTED WORKS ]
              </span>
              <span className="text-xs font-mono text-[#526D9B] uppercase tracking-wider">
                Case Studies & Featured Engineering
              </span>
            </div>

            <div className="divide-y divide-[#101C2C]/10 border-b border-[#101C2C]/10">
              {projects.map((proj) => (
                <div
                  key={proj.num}
                  className="py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:bg-[#E9EDF2]/30 px-4 rounded-xl transition-colors"
                >
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="text-xs sm:text-sm font-mono text-[#526D9B] font-semibold">
                      /{proj.num}
                    </span>
                    <div>
                      <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#101C2C] tracking-tight group-hover:text-[#526D9B] transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-sm text-[#526D9B] mt-1.5 font-normal">
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

                    <div className="w-10 h-10 rounded-full border border-[#101C2C]/15 bg-[#E9EDF2] group-hover:bg-[#101C2C] group-hover:text-white text-[#101C2C] flex items-center justify-center transition-all shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. DIRECT CONTACT SECTION ── */}
        <section id="contact" className="py-24 sm:py-32 px-6 border-t border-[#101C2C]/10 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto">
            <span className="text-xs font-mono text-[#526D9B] uppercase tracking-widest font-semibold">
              [ 03 — GET IN TOUCH ]
            </span>

            <div className="mt-8 max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#101C2C]">
                Punya visi proyek atau sistem yang ingin diakselerasi?
              </h2>

              <p className="mt-3 text-base text-[#526D9B]">
                Kami siap mendiskusikan kebutuhan teknis, estimasi timeline, serta arsitektur solusi untuk bisnis Anda.
              </p>

              {/* Clean Sized Email */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 flex-wrap">
                <a
                  href={`mailto:${email}`}
                  className="font-heading text-3xl sm:text-5xl font-black text-[#101C2C] hover:text-[#526D9B] tracking-tight transition-colors"
                >
                  {email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#101C2C]/15 bg-[#E9EDF2] hover:bg-[#101C2C] hover:text-[#FFFFFF] text-xs font-mono uppercase tracking-wider text-[#101C2C] transition-colors shadow-sm self-start sm:self-center"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "COPIED" : "COPY EMAIL"}</span>
                </button>
              </div>

              {/* WhatsApp Call to Action */}
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
                  Respon &lt; 24 jam kerja
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── 6. FOOTER ── */}
      <footer className="border-t border-[#101C2C]/10 px-6 py-8 bg-[#E9EDF2]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#526D9B]">
          <div className="flex items-center gap-3">
            <KadaekMonogram className="w-5 h-5 text-[#101C2C]" />
            <span className="text-[#101C2C] font-heading font-bold tracking-wider uppercase">
              KADAEK TECHNOLOGY COMPANY
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
