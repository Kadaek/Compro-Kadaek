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
  const email = "submit@kadaek.id";

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "categories", "featured", "submit"];
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

  const categories = [
    {
      num: "01",
      title: "TOOLS DEVELOPER & CLI",
      desc: "Kumpulan script otomatisasi, command-line tool, dan utilitas terminal yang bikin alur ngoding kamu jadi jauh lebih cepat dan praktis.",
      stack: "CLI Tools · Script Otomatisasi · Terminal Apps",
    },
    {
      num: "02",
      title: "BACKEND & DATABASE",
      desc: "Engine API siap pakai, visualizer skema database, dan utilitas microservice yang mempermudah urusan server.",
      stack: "API Ready · Database Visualizer · Microservices",
    },
    {
      num: "03",
      title: "AI & OTOMASI CERDAS",
      desc: "Runner model AI lokal, asisten koding cerdas, dan tools pengolah data otomatis untuk memangkas waktu kerja manual.",
      stack: "Local AI · Otomasi Kerja · Prompt Tools",
    },
    {
      num: "04",
      title: "KOMPONEN & DESAIN WEB",
      desc: "Koleksi komponen siap pakai React & Tailwind, template landing page, dan inspirasi antarmuka modern yang tinggal copy-paste.",
      stack: "React UI · Tailwind Kits · Web Template",
    },
  ];

  const featuredProducts = [
    {
      num: "01",
      title: "Kadaek Core Gateway",
      maker: "Kadaek Labs",
      category: "Infra & Proxy Server",
      year: "2026",
      desc: "Reverse proxy cepat berbasis Go untuk membatasi traffic dan menjaga server tetap stabil saat diakses ribuan pengguna bersamaan.",
      url: "#",
    },
    {
      num: "02",
      title: "DevSync CLI",
      maker: "@dimasbuilds",
      category: "Tools Developer",
      year: "2026",
      desc: "Tool terminal praktis buat sinkronisasi file .env satu tim dengan enkripsi aman tanpa perlu kirim-kirim manual via chat.",
      url: "#",
    },
    {
      num: "03",
      title: "SchemaPulse",
      maker: "@techfajar",
      category: "Database & Monitor",
      year: "2025",
      desc: "Aplikasi visualisasi skema database yang otomatis mendeteksi query lemot di database PostgreSQL dan MySQL kamu.",
      url: "#",
    },
    {
      num: "04",
      title: "BentoFrame UI",
      maker: "@rezastudio",
      category: "Desain & Komponen Web",
      year: "2025",
      desc: "Koleksi komponen web minimalis bergaya bento grid yang siap dipakai untuk bikin website portofolio atau dokumentasi.",
      url: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#101C2C] flex flex-col justify-between selection:bg-[#101C2C] selection:text-white w-full max-w-full overflow-x-hidden">
      {/* ── CINEMATIC VISUAL PRELOADER ── */}
      <Preloader />

      {/* ── 1. HEADER / NAVBAR (100% TRANSPARENT, FIXED OVER SNAP SECTIONS) ── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-transparent pointer-events-none transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-16 sm:h-20 flex items-center justify-between pointer-events-auto w-full">
          {/* Brand Logo in Deep Navy */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <KadaekBrand inverted={false} />
          </a>

          {/* Clean Friendly Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
            {[
              { id: "about", label: "About" },
              { id: "categories", label: "Categories" },
              { id: "featured", label: "Featured Tools" },
              { id: "submit", label: "Submit" },
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

          {/* Right Action: Submit Product to Platform */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="#submit"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#101C2C] text-[#FFFFFF] text-[11px] sm:text-xs font-semibold tracking-wider hover:bg-[#526D9B] transition-all shadow-sm active:scale-95 shrink-0"
            >
              <span className="hidden xs:inline">SUBMIT PRODUK</span>
              <span className="xs:hidden">SUBMIT</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </header>

      {/* ── 2. HERO SECTION: 1 SECTION = 1 LAYAR (ZERO SCROLL, FRIENDLY COPY, DYNAMIC UNCLIPPED VISUAL) ── */}
      <main className="flex-1 w-full max-w-full">
        <section
          id="about"
          className="snap-start snap-always relative h-[100dvh] max-h-[100dvh] flex flex-col justify-center items-center bg-[#FFFFFF] overflow-hidden pt-16 sm:pt-20 pb-4 sm:pb-6 px-4 sm:px-6 md:px-8 w-full max-w-full"
        >
          <div className="max-w-5xl xl:max-w-6xl mx-auto w-full h-full flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 text-center my-auto">
            
            {/* Center Stage: Friendly Headline -> Subheadline -> Single CTA (Spacious, No Dempet) */}
            <div className="animate-creative-reveal max-w-3xl sm:max-w-4xl mx-auto px-2 pt-4 sm:pt-6 md:pt-8">
              <h1 className="font-heading text-2xl xs:text-3xl sm:text-5xl md:text-[3.25rem] font-black text-[#101C2C] tracking-tight leading-[1.14] [text-wrap:balance] mt-1 sm:mt-2">
                Temukan solusimu dari ratusan ide para builder
              </h1>
              <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-[#526D9B] font-normal leading-relaxed max-w-2xl mx-auto [text-wrap:balance]">
                Kumpulan tools, template, dan software buatan developer yang bisa langsung kamu coba. Punya project keren juga? Pajang karyamu di sini secara gratis!
              </p>

              {/* Single Primary Action CTA: Jelajahi Tools */}
              <div className="flex items-center justify-center pt-5 sm:pt-6">
                <a
                  href="#categories"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 sm:px-9 sm:py-4 rounded-full bg-[#101C2C] text-[#FFFFFF] text-xs sm:text-sm font-semibold tracking-wide hover:bg-[#526D9B] transition-all shadow-md hover:shadow-lg active:scale-95"
                >
                  <span>JELAJAHI TOOLS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Center Stage: Floating Available Tools Showcase (Lifted closer, reduced margin-top) */}
            <div className="animate-creative-reveal-delay-1 w-full flex items-center justify-center -mt-1 sm:-mt-2 md:-mt-3">
              <HeroFloatingShowcase />
            </div>

          </div>
        </section>

        {/* ── 3. CATEGORIES & ECOSYSTEM (FULL SCREEN VIEWPORT 2) ── */}
        <section id="categories" className="snap-start snap-always relative min-h-[100dvh] flex items-center justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto w-full">
            <ScrollReveal direction="up">
              <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between mb-6 sm:mb-8 pb-3 border-b border-[#101C2C]/10 gap-1.5 sm:gap-2">
                <span className="text-xs font-mono text-[#526D9B] uppercase tracking-widest font-semibold">
                  [ 01 — KATEGORI TOOLS ]
                </span>
                <span className="text-xs font-mono text-[#526D9B] uppercase tracking-wider">
                  Temukan apa yang kamu butuhkan
                </span>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {categories.map((item, idx) => (
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

        {/* ── 4. FEATURED PRODUCTS & TOOLS (FULL SCREEN VIEWPORT 3) ── */}
        <section id="featured" className="snap-start snap-always relative min-h-[100dvh] flex items-center justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 border-t border-[#101C2C]/10 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto w-full">
            <ScrollReveal direction="up">
              <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between mb-6 sm:mb-8 pb-3 border-b border-[#101C2C]/10 gap-1.5 sm:gap-2">
                <span className="text-xs font-mono text-[#526D9B] uppercase tracking-widest font-semibold">
                  [ 02 — TOOLS UNGGULAN ]
                </span>
                <span className="text-xs font-mono text-[#526D9B] uppercase tracking-wider">
                  Karya pilihan yang siap langsung kamu coba
                </span>
              </div>
            </ScrollReveal>

            <div className="divide-y divide-[#101C2C]/10 border-b border-[#101C2C]/10">
              {featuredProducts.map((proj, idx) => (
                <ScrollReveal key={proj.num} delay={idx * 80} direction="up">
                  <div className="py-4 sm:py-5 md:py-6 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-6 group hover:bg-[#E9EDF2]/40 px-3 sm:px-4 rounded-xl transition-all duration-300">
                    <div className="flex items-start sm:items-baseline gap-3 sm:gap-6 md:gap-8">
                      <span className="text-xs sm:text-sm font-mono text-[#526D9B] font-semibold group-hover:text-[#101C2C] transition-colors shrink-0 pt-0.5 sm:pt-0">
                        /{proj.num}
                      </span>
                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-extrabold text-[#101C2C] tracking-tight group-hover:text-[#526D9B] group-hover:translate-x-0.5 transition-all duration-300">
                            {proj.title}
                          </h3>
                          <span className="text-xs font-mono text-[#526D9B]">
                            oleh {proj.maker}
                          </span>
                        </div>
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
                          Rilis {proj.year}
                        </div>
                      </div>

                      <a
                        href={proj.url}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#101C2C]/15 bg-[#E9EDF2] group-hover:bg-[#101C2C] group-hover:text-white text-[#101C2C] flex items-center justify-center transition-all duration-300 shrink-0 group-hover:scale-105"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. SUBMIT PRODUCT & COMMUNITY ACCESS (FULL SCREEN VIEWPORT 4) ── */}
        <section id="submit" className="snap-start snap-always relative min-h-[100dvh] flex flex-col justify-between pt-16 sm:pt-20 border-t border-[#101C2C]/10 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full flex-1 flex flex-col justify-center py-6 sm:py-10">
            <ScrollReveal direction="up">
              <span className="text-xs font-mono text-[#526D9B] uppercase tracking-widest font-semibold">
                [ 03 — SUBMIT PRODUK ]
              </span>
            </ScrollReveal>

            <div className="mt-4 sm:mt-6 max-w-3xl">
              <ScrollReveal direction="up" delay={100}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#101C2C] tracking-tight leading-tight">
                  Punya tool atau karya digital yang mau dipamerin?
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={180}>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-[#526D9B] leading-relaxed">
                  Yuk daftarin project buatanmu di Kadaek Hub! Biar makin banyak yang tahu, dapet feedback langsung dari sesama builder, dan nambah pengguna pertama tanpa ribet dan tanpa biaya pendaftaran.
                </p>
              </ScrollReveal>

              {/* Direct Submission Email */}
              <ScrollReveal direction="up" delay={260}>
                <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 flex-wrap">
                  <a
                    href={`mailto:${email}?subject=Submission%20Produk%20Digital%20Kadaek`}
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

              {/* Direct Instant Action: WhatsApp Submission */}
              <ScrollReveal direction="up" delay={340}>
                <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono max-w-full">
                  <a
                    href="https://wa.me/6281234567890?text=Halo%20Kadaek,%20saya%20ingin%20submit%20produk/tools%20digital%20saya%20ke%20Kadaek%20Hub."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-[#101C2C] hover:bg-[#526D9B] text-[#FFFFFF] font-medium transition-colors shadow-sm text-xs sm:text-sm max-w-full truncate"
                  >
                    <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span>Submit via WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-70 shrink-0" />
                  </a>

                  <span className="text-[#526D9B] font-medium text-[11px] sm:text-xs">
                    Kurasi cepat 1×24 jam
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

              <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-3 gap-y-1 text-[10px] sm:text-xs">
                <span>CURATED DEVELOPER HUB</span>
                <span>•</span>
                <span>BUILT FOR BUILDERS</span>
                <span>•</span>
                <span>© 2026</span>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
