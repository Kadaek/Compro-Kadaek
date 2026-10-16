"use client";

import HeroFloatingShowcase from "@/components/HeroFloatingShowcase";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="about"
      className="snap-start snap-always relative h-[100dvh] max-h-[100dvh] flex flex-col justify-center items-center bg-[#FFFFFF] overflow-hidden pt-16 sm:pt-20 pb-4 sm:pb-6 px-4 sm:px-6 md:px-8 w-full max-w-full"
    >
      {/* ── BACKGROUND ARCHITECTURAL GRID & CROSSHAIRS (Zero clutter, engineered feel) ── */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div className="max-w-6xl mx-auto h-full w-full relative">
          {/* Subtle vertical guide rails */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-[#101C2C]/[0.04]" />
          <div className="absolute right-4 sm:right-8 top-0 bottom-0 w-px bg-[#101C2C]/[0.04]" />

          {/* Subtle Crosshair '+' markers */}
          <div className="hidden md:flex absolute left-4 sm:left-8 top-1/4 -translate-x-1/2 -translate-y-1/2 items-center justify-center font-mono text-xs text-[#101C2C]/20 select-none">
            +
          </div>
          <div className="hidden md:flex absolute right-4 sm:right-8 top-1/4 translate-x-1/2 -translate-y-1/2 items-center justify-center font-mono text-xs text-[#101C2C]/20 select-none">
            +
          </div>
          <div className="hidden md:flex absolute left-4 sm:left-8 top-2/3 -translate-x-1/2 -translate-y-1/2 items-center justify-center font-mono text-xs text-[#101C2C]/20 select-none">
            +
          </div>
          <div className="hidden md:flex absolute right-4 sm:right-8 top-2/3 translate-x-1/2 -translate-y-1/2 items-center justify-center font-mono text-xs text-[#101C2C]/20 select-none">
            +
          </div>

          {/* Technical Sub-Coordinate Watermarks on Left & Right Margins */}
          <div className="hidden xl:flex absolute left-6 top-1/3 -translate-y-1/2 flex-col items-start gap-1 font-mono text-[9px] text-[#526D9B]/40 tracking-widest uppercase">
            <span>LATENCY: 0.8MS</span>
            <span>INDEX: 48 TOOLS</span>
          </div>
          <div className="hidden xl:flex absolute right-6 top-1/3 -translate-y-1/2 flex-col items-end gap-1 font-mono text-[9px] text-[#526D9B]/40 tracking-widest uppercase">
            <span>DISCOVERY HUB</span>
            <span>VERIFIED BUILDERS</span>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT CONTAINER (PERFECTLY CENTERED, SPACIOUS & LAYERED) ── */}
      <div className="relative z-10 max-w-5xl xl:max-w-6xl mx-auto w-full h-full flex flex-col items-center justify-center text-center my-auto">
        
        {/* Center Stage: Friendly Headline -> Subheadline -> Single Clean CTA */}
        <div className="animate-creative-reveal max-w-4xl lg:max-w-5xl mx-auto px-2 sm:px-4 text-center w-full">
          <h1 className="font-heading text-2xl xs:text-3xl sm:text-4xl md:text-[3rem] lg:text-[3.4rem] font-black text-[#101C2C] tracking-tight leading-[1.14] [text-wrap:balance]">
            Temukan solusimu dari ratusan ide para builder
          </h1>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-[#526D9B] font-normal leading-relaxed max-w-2xl mx-auto [text-wrap:balance]">
            Kumpulan tools, template, dan software buatan developer yang bisa langsung kamu coba. Punya project keren juga? Pajang karyamu di sini secara gratis!
          </p>

          {/* Clean Primary Action CTA: Jelajahi Tools (Airy & Defined, Generous Separation) */}
          <div className="flex items-center justify-center mt-3.5 sm:mt-5 mb-6 sm:mb-8 md:mb-10">
            <a
              href="#categories"
              className="inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#101C2C] text-[#FFFFFF] text-[11px] sm:text-xs font-bold tracking-wider hover:bg-[#526D9B] transition-all shadow-[0_4px_16px_rgba(16,28,44,0.14)] hover:shadow-[0_8px_24px_rgba(16,28,44,0.22)] active:scale-95 group"
            >
              <span>JELAJAHI TOOLS</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Center Stage: Real Device Showcase (Spaced gracefully below CTA, Zero Timpa Tindih) */}
        <div className="animate-creative-reveal-delay-1 w-full flex items-center justify-center pt-1 sm:pt-2">
          <HeroFloatingShowcase />
        </div>

      </div>
    </section>
  );
}
