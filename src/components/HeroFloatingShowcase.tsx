"use client";

import { Activity, Cpu, ShieldCheck, Smartphone, Zap } from "lucide-react";
import { KadaekMonogram } from "@/components/KadaekLogo";

export default function HeroFloatingShowcase() {
  return (
    <div className="relative w-full max-w-[340px] xs:max-w-[400px] sm:max-w-[480px] md:max-w-[530px] mx-auto select-none px-3 sm:px-6">
      <div className="relative w-full mx-auto">
        
        {/* ── 1. LEFT COMPANION: MOBILE FINTECH APP CARD (SUBTLE -3° ROTATION, AESTHETIC & SLEEK) ── */}
        <div className="animate-float-slow absolute -left-3 sm:-left-7 md:-left-9 top-1/2 -translate-y-1/2 w-[44%] sm:w-[42%] aspect-[4/3] -rotate-3 rounded-2xl overflow-hidden shadow-[0_18px_40px_-6px_rgba(16,28,44,0.38)] border border-white/20 bg-[#080E17]/95 backdrop-blur-md z-20 cursor-pointer hover:scale-105 hover:-rotate-1 hover:z-30 transition-all duration-300 p-2.5 sm:p-3 flex flex-col justify-between text-white will-change-transform">
          <div className="flex items-center justify-between pb-1 sm:pb-1.5 border-b border-white/10 text-[7px] sm:text-[8px] font-mono text-[#8A9EB7]">
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
              ↑ 99.99% SLA · TLS 1.3
            </span>
          </div>

          <div className="pt-1 sm:pt-1.5 border-t border-white/10 flex items-center justify-between text-[6.5px] sm:text-[7.5px] font-mono text-[#8A9EB7]">
            <span>Kernel Ingest</span>
            <span className="text-white font-semibold">Active</span>
          </div>
        </div>

        {/* ── 2. CENTER STAGE: ARCHITECTURAL PLATFORM CONSOLE (MODULAR, COMPACT & SHARP) ── */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl border border-[#101C2C]/15 bg-[#090E17] shadow-[0_24px_55px_-10px_rgba(16,28,44,0.25)] overflow-hidden text-white backdrop-blur-xl z-10 animate-float transition-all duration-500">
          
          {/* Top Window Header */}
          <div className="px-3 sm:px-4 py-2 sm:py-2.5 border-b border-white/10 bg-[#0E1523] flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <KadaekMonogram className="w-3.5 h-3.5 text-white shrink-0" />
              <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider text-white">
                KADAEK OS
              </span>
            </div>

            <div className="text-[8px] sm:text-[9.5px] font-mono text-[#8A9EB7] truncate">
              api.kadaek.id/mesh
            </div>

            <div className="text-[8px] sm:text-[9.5px] font-mono text-emerald-400 font-medium shrink-0">
              99.99% SLA
            </div>
          </div>

          {/* Console Content */}
          <div className="p-3 sm:p-4 space-y-2.5 sm:space-y-3">
            
            {/* Top Stat Row */}
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
              <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="text-[7px] sm:text-[8px] font-mono text-[#8A9EB7] uppercase tracking-wider">
                  Throughput Ingest
                </div>
                <div className="text-xs sm:text-base font-heading font-black text-white mt-0.5">
                  48.200 req/s
                </div>
              </div>

              <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="text-[7px] sm:text-[8px] font-mono text-[#8A9EB7] uppercase tracking-wider">
                  P99 Latency Core
                </div>
                <div className="text-xs sm:text-base font-heading font-black text-emerald-400 mt-0.5">
                  1.8 ms
                </div>
              </div>
            </div>

            {/* SVG Telemetry Stream Graph */}
            <div className="relative rounded-xl bg-black/40 border border-white/10 p-2.5 sm:p-3 overflow-hidden">
              <div className="flex items-center justify-between text-[7px] sm:text-[8px] font-mono text-[#8A9EB7] mb-1.5">
                <span className="text-white font-medium">DISTRIBUTED TRAFFIC</span>
                <span className="text-emerald-400">LIVE NOW</span>
              </div>

              <div className="h-12 sm:h-16 w-full relative">
                <svg viewBox="0 0 400 80" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="kdeqGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0,60 Q50,25 100,45 T200,30 T300,15 T400,25 L400,80 L0,80 Z"
                    fill="url(#kdeqGradient)"
                  />
                  <path
                    d="M0,60 Q50,25 100,45 T200,30 T300,15 T400,25"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="300" cy="15" r="3.5" fill="#38BDF8" />
                  <circle cx="300" cy="15" r="7" fill="#38BDF8" opacity="0.3" className="animate-ping" />
                </svg>
              </div>
            </div>

            {/* Status Footer */}
            <div className="flex items-center justify-between text-[7px] sm:text-[8px] font-mono text-[#8A9EB7] pt-0.5">
              <span>KERNEL: KADAEK-V2.4</span>
              <span className="text-emerald-400">● 128 NODES HEALTHY</span>
            </div>

          </div>

        </div>

        {/* ── 3. RIGHT COMPANION: CLOUD TELEMETRY CARD (SUBTLE +3° ROTATION) ── */}
        <div className="animate-float absolute -right-3 sm:-right-7 md:-right-9 -bottom-2 sm:-bottom-3 w-[44%] sm:w-[42%] aspect-[4/3] rotate-3 rounded-2xl overflow-hidden shadow-[0_18px_40px_-6px_rgba(16,28,44,0.38)] border border-white/20 bg-[#080E17]/95 backdrop-blur-md z-20 cursor-pointer hover:scale-105 hover:rotate-1 hover:z-30 transition-all duration-300 p-2.5 sm:p-3 flex flex-col justify-between text-white will-change-transform">
          <div className="flex items-center justify-between pb-1 sm:pb-1.5 border-b border-white/10 text-[7px] sm:text-[8px] font-mono text-[#8A9EB7]">
            <div className="flex items-center gap-1 font-semibold text-white truncate">
              <Activity className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-sky-400 shrink-0" />
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
            <div className="h-2 sm:h-2.5 w-full mt-0.5">
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
