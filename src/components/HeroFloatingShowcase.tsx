"use client";

import Image from "next/image";
import { Activity, Smartphone } from "lucide-react";

export default function HeroFloatingShowcase() {
  return (
    <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[460px] md:max-w-[490px] mx-auto select-none">
      <div className="relative w-full mx-auto">
        
        {/* ── LEFT TILTED FLOATING SOFTWARE CARD (MOBILE FINTECH APP UI) ── */}
        <div className="animate-float-slow absolute -left-3 sm:-left-6 md:-left-8 top-1/2 -translate-y-1/2 w-[42%] sm:w-[40%] aspect-[4/3] -rotate-6 sm:-rotate-8 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_16px_36px_-6px_rgba(16,28,44,0.35)] border border-white/20 bg-[#080E17]/95 backdrop-blur-md z-20 cursor-pointer hover:scale-105 hover:-rotate-3 hover:z-30 transition-all duration-300 p-2 sm:p-2.5 md:p-3 flex flex-col justify-between text-white will-change-transform">
          <div className="flex items-center justify-between pb-1 sm:pb-1.5 border-b border-white/10 text-[7px] sm:text-[8px] md:text-[9px] font-mono text-[#8A9EB7]">
            <div className="flex items-center gap-1 font-semibold text-white truncate">
              <Smartphone className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400 shrink-0" />
              <span className="truncate">Kadaek Pay</span>
            </div>
            <span className="text-[6.5px] sm:text-[7.5px] text-emerald-400 shrink-0 font-medium">● 60 FPS</span>
          </div>

          <div className="my-0.5 sm:my-1">
            <span className="text-[6.5px] sm:text-[7.5px] font-mono text-[#8A9EB7] uppercase tracking-wider block">
              Settlement Core
            </span>
            <div className="text-[11px] sm:text-xs md:text-sm font-heading font-black text-white leading-tight mt-0.5">
              Rp 148,2 M
            </div>
            <span className="text-[6.5px] sm:text-[7.5px] font-mono text-emerald-400 mt-0.5 block truncate">
              ↑ 99.99% SLA
            </span>
          </div>

          <div className="pt-1 sm:pt-1.5 border-t border-white/10 flex items-center justify-between text-[6.5px] sm:text-[7.5px] font-mono text-[#8A9EB7]">
            <span>TLS 1.3</span>
            <span className="text-white font-semibold">Instant Ingest</span>
          </div>
        </div>

        {/* ── CENTER MAIN SOFTWARE PRODUCT (DESKTOP PLATFORM SHOWCASE) ── */}
        <div className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_45px_-8px_rgba(16,28,44,0.25)] border border-[#101C2C]/10 bg-[#101C2C] z-10 transition-all duration-500">
          <div className="relative w-full h-full">
            <Image
              src="/images/product-showcase.webp"
              alt="Kadaek Software Platform Architecture"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 500px, 600px"
              priority
            />
            {/* Subtle high-precision product UI overlay badge */}
            <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[7px] sm:text-[8px] md:text-[9px] font-mono text-white flex items-center gap-1.5 pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>FINTRACK CORE · V2.4</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT TILTED FLOATING SOFTWARE CARD (CLOUD NODE & API TELEMETRY) ── */}
        <div className="animate-float absolute -right-3 sm:-right-6 md:-right-8 -bottom-2 sm:-bottom-3 md:-bottom-4 w-[42%] sm:w-[40%] aspect-[4/3] rotate-6 sm:rotate-8 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_18px_40px_-6px_rgba(16,28,44,0.35)] border border-white/20 bg-[#080E17]/95 backdrop-blur-md z-20 cursor-pointer hover:scale-105 hover:rotate-3 hover:z-30 transition-all duration-300 p-2 sm:p-2.5 md:p-3 flex flex-col justify-between text-white will-change-transform">
          <div className="flex items-center justify-between pb-1 sm:pb-1.5 border-b border-white/10 text-[7px] sm:text-[8px] md:text-[9px] font-mono text-[#8A9EB7]">
            <div className="flex items-center gap-1 font-semibold text-white truncate">
              <Activity className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400 shrink-0" />
              <span className="truncate">Cluster SG-01</span>
            </div>
            <span className="text-[6.5px] sm:text-[7.5px] text-emerald-400 shrink-0 font-medium">4.2ms</span>
          </div>

          <div className="my-0.5 sm:my-1">
            <span className="text-[6.5px] sm:text-[7.5px] font-mono text-[#8A9EB7] uppercase tracking-wider block">
              Node Throughput
            </span>
            <div className="text-[11px] sm:text-xs md:text-sm font-heading font-black text-white leading-tight mt-0.5">
              48.200 req/s
            </div>
            {/* Mini SVG Sparkline */}
            <div className="h-2.5 sm:h-3 w-full mt-0.5 sm:mt-1">
              <svg viewBox="0 0 100 15" className="w-full h-full">
                <path
                  d="M0,10 Q25,3 50,8 T100,2"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>

          <div className="pt-1 sm:pt-1.5 border-t border-white/10 flex items-center justify-between text-[6.5px] sm:text-[7.5px] font-mono text-[#8A9EB7]">
            <span>128 Nodes</span>
            <span className="text-emerald-400 font-semibold">● Healthy</span>
          </div>
        </div>

      </div>
    </div>
  );
}
