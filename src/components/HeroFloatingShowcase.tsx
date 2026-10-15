"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MonographPlate {
  plateNo: string;
  category: string;
  title: string;
  desc: string;
  src: string;
  medium: string;
}

export default function HeroFloatingShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const plates: MonographPlate[] = [
    {
      plateNo: "PL. 01",
      category: "STUDIO & APPARATUS",
      title: "Engineering Sanctuary",
      desc: "Studio rekayasa sistem berarsitektur modern dan kolaboratif.",
      src: "/images/startup-loft.webp",
      medium: "Monograph Plate · ID & SG Studio",
    },
    {
      plateNo: "PL. 02",
      category: "FOUNDERS AT BENCH",
      title: "Engineered by Founders",
      desc: "Dua developer independen dengan dedikasi presisi tinggi.",
      src: "/images/founders-studio.webp",
      medium: "Archival Record · Core Builders",
    },
    {
      plateNo: "PL. 03",
      category: "PRODUCTION CORE",
      title: "Production-Grade Systems",
      desc: "Arsitektur produk digital & platform finansial modern.",
      src: "/images/product-showcase.webp",
      medium: "System Telemetry · FinTrack Engine",
    },
  ];

  // Auto page-turn every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % plates.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [plates.length]);

  const nextPage = () => setCurrentSlide((prev) => (prev + 1) % plates.length);
  const prevPage = () => setCurrentSlide((prev) => (prev - 1 + plates.length) % plates.length);

  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto select-none pt-4 pb-6 pr-3 sm:pr-4 pl-1">
      {/* ── SILK BOOKMARK RIBBON (PITA PEMBATAS BUKU KLASIK) ── */}
      <div
        className="absolute -top-1 left-14 sm:left-18 w-3.5 sm:w-4 h-10 sm:h-11 bg-[#8B1E2F] shadow-md z-30 flex items-end justify-center pointer-events-none"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 50% 82%, 0% 100%)",
        }}
      />

      {/* ── STACKED BOOK PAGES (KETEBALAN KERTAS BUKU DI SISI KANAN) ── */}
      {/* Page Layer 2 (Bawah) */}
      <div className="absolute top-2.5 -right-3 bottom-2.5 w-3.5 bg-[#E1E4DE] rounded-r-xl border-y border-r border-[#101C2C]/20 shadow-sm" />
      {/* Page Layer 1 (Atas) */}
      <div className="absolute top-1.5 -right-1.5 bottom-1.5 w-2 bg-[#EEF0EB] rounded-r-xl border-y border-r border-[#101C2C]/15" />

      {/* ── HARDBOUND BOOK COVER CASING ── */}
      <div className="animate-float relative rounded-2xl bg-[#0D1622] border border-[#22334A] shadow-[0_22px_45px_-12px_rgba(16,28,44,0.35)] overflow-hidden flex flex-row">
        {/* Book Spine (Punggung Buku Fisik di Sisi Kiri) */}
        <div className="w-8 sm:w-9 shrink-0 bg-[#080E17] border-r border-[#1F2F44] flex flex-col justify-between items-center py-5 relative select-none">
          {/* Spine crease shadow (Lipatan engsel buku) */}
          <div className="absolute inset-y-0 right-0 w-2 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />

          {/* Top Volume Stamp */}
          <span className="text-[8px] font-mono font-bold text-white/35 tracking-widest uppercase">
            VOL.1
          </span>

          {/* Vertical Spine Title */}
          <div className="[writing-mode:vertical-rl] rotate-180 flex items-center gap-2 text-[9px] font-mono tracking-[0.22em] text-[#8A9EB7] uppercase font-medium">
            <span>KADAEK</span>
            <span className="w-1 h-1 rounded-full bg-[#526D9B]" />
            <span>ARCHIVAL FOLIO</span>
          </div>

          {/* Bottom Stamp */}
          <span className="text-[8px] font-mono text-white/25">
            2024
          </span>
        </div>

        {/* Book Body (Halaman Monograph Utama) */}
        <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between min-w-0 bg-gradient-to-b from-[#0F1B2B] to-[#0A121D]">
          {/* Monograph Editorial Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#22334A]/80 text-[10px] font-mono">
            <div className="flex items-center gap-2 text-[#8A9EB7]">
              <span className="font-semibold text-white tracking-wider">
                MONOGRAPH
              </span>
              <span className="text-white/30">/</span>
              <span className="tracking-widest uppercase text-white/70">
                {plates[currentSlide].plateNo}
              </span>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-2">
              <span className="text-white/50 tracking-wider hidden sm:inline">
                PAGE {currentSlide + 1} OF {plates.length}
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={prevPage}
                  aria-label="Previous plate"
                  className="w-6 h-6 rounded border border-white/10 hover:border-white/30 hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={nextPage}
                  aria-label="Next plate"
                  className="w-6 h-6 rounded border border-white/10 hover:border-white/30 hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Tipped-In Photography Plate */}
          <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-[#22334A] bg-[#070C14] shadow-inner group">
            {plates.map((plate, index) => {
              const isActive = index === currentSlide;
              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={plate.src}
                    alt={plate.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  {/* Subtle photographic plate sheen */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10 pointer-events-none" />
                </div>
              );
            })}
          </div>

          {/* Editorial Caption / Plate Annotation */}
          <div className="pt-3.5 mt-2.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 border-t border-[#22334A]/50">
            <div className="min-w-0">
              <div className="text-[9px] font-mono uppercase tracking-widest text-emerald-400 font-medium">
                {plates[currentSlide].category}
              </div>
              <h3 className="font-heading text-sm sm:text-base font-bold text-white tracking-tight truncate mt-0.5">
                {plates[currentSlide].title}
              </h3>
              <p className="text-[11px] text-[#8A9EB7] mt-0.5 line-clamp-1">
                {plates[currentSlide].desc}
              </p>
            </div>

            <div className="shrink-0 text-left sm:text-right mt-1 sm:mt-0">
              <span className="text-[9px] font-mono text-white/35 uppercase tracking-wider block">
                {plates[currentSlide].medium}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
