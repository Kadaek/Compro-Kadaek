"use client";

import Image from "next/image";
import { Activity, ShieldCheck, Smartphone, Terminal } from "lucide-react";

export default function HeroFloatingShowcase() {
  return (
    <div className="relative w-full max-w-[460px] sm:max-w-[500px] mx-auto select-none px-4 sm:px-8">
      <div className="relative w-full mx-auto">
        
        {/* ── LEFT TILTED FLOATING SOFTWARE CARD (MOBILE FINTECH APP UI) ── */}
        <div className="animate-float-slow absolute -left-5 sm:-left-9 top-1/2 -translate-y-1/2 w-[39%] sm:w-[41%] aspect-[4/3] -rotate-8 rounded-2xl overflow-hidden shadow-[0_20px_40px_-6px_rgba(16,28,44,0.35)] border border-white/20 bg-[#080E17]/95 backdrop-blur-md z-20 cursor-pointer hover:scale-105 hover:-rotate-4 hover:z-30 transition-all duration-300 p-2.5 sm:p-3 flex flex-col justify-between text-white">
          <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[8px] sm:text-[9px] font-mono text-[#8A9EB7]">
            <div className="flex items-center gap-1 font-semibold text-white">
              <Smartphone className="w-3 h-3 text-emerald-400" />
              <span>Kadaek Pay</span>
            </div>
            <span className="text-[7px] text-emerald-400">● 60 FPS</span>
          </div>

          <div className="my-1">
            <span className="text-[7px] font-mono text-[#8A9EB7] uppercase tracking-wider block">
              Settlement Core
            </span>
            <div className="text-xs sm:text-sm font-heading font-black text-white leading-tight">
              Rp 148,2 Miliar
            </div>
            <span className="text-[7px] font-mono text-emerald-400 mt-0.5 block">
              ↑ 99.99% Success SLA
            </span>
          </div>

          <div className="pt-1.5 border-t border-white/10 flex items-center justify-between text-[7px] font-mono text-[#8A9EB7]">
            <span>TLS 1.3 GCM</span>
            <span className="text-white font-semibold">Instant Ingest</span>
          </div>
        </div>

        {/* ── CENTER MAIN SOFTWARE PRODUCT (DESKTOP PLATFORM SHOWCASE) ── */}
        <div className="relative w-full aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_24px_50px_-10px_rgba(16,28,44,0.28)] border border-[#101C2C]/10 bg-[#101C2C] z-10 transition-all duration-500">
          <div className="relative w-full h-full">
            <Image
              src="/images/product-showcase.webp"
              alt="Kadaek Software Platform Architecture"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {/* Subtle high-precision product UI overlay badge */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[8px] sm:text-[9px] font-mono text-white flex items-center gap-1.5 pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>FINTRACK TELEMETRY CORE · V2.4</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT TILTED FLOATING SOFTWARE CARD (CLOUD NODE & API TELEMETRY) ── */}
        <div className="animate-float absolute -right-5 sm:-right-9 -bottom-2 sm:-bottom-4 w-[39%] sm:w-[41%] aspect-[4/3] rotate-8 rounded-2xl overflow-hidden shadow-[0_22px_45px_-6px_rgba(16,28,44,0.38)] border border-white/20 bg-[#080E17]/95 backdrop-blur-md z-20 cursor-pointer hover:scale-105 hover:rotate-4 hover:z-30 transition-all duration-300 p-2.5 sm:p-3 flex flex-col justify-between text-white">
          <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[8px] sm:text-[9px] font-mono text-[#8A9EB7]">
            <div className="flex items-center gap-1 font-semibold text-white">
              <Activity className="w-3 h-3 text-blue-400" />
              <span>Cluster SG-01</span>
            </div>
            <span className="text-[7px] text-emerald-400">4.2ms</span>
          </div>

          <div className="my-1">
            <span className="text-[7px] font-mono text-[#8A9EB7] uppercase tracking-wider block">
              Node Throughput
            </span>
            <div className="text-xs sm:text-sm font-heading font-black text-white leading-tight">
              48.200 req/s
            </div>
            {/* Mini SVG Sparkline */}
            <div className="h-3 w-full mt-1">
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

          <div className="pt-1.5 border-t border-white/10 flex items-center justify-between text-[7px] font-mono text-[#8A9EB7]">
            <span>128 / 128 Nodes</span>
            <span className="text-emerald-400 font-semibold">● Healthy</span>
          </div>
        </div>

      </div>
    </div>
  );
}
