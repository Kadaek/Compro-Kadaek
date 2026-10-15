"use client";

import { Activity, Cpu, ShieldCheck, Smartphone, Zap } from "lucide-react";
import { KadaekMonogram } from "@/components/KadaekLogo";

export default function HeroFloatingShowcase() {
  return (
    <div className="relative w-full max-w-[420px] sm:max-w-[540px] md:max-w-[620px] mx-auto select-none">
      
      {/* ── UNIFIED HIGH-CONTRAST ARCHITECTURAL PLATFORM CONSOLE (ZERO OVERLAPPING CARDS) ── */}
      <div className="relative w-full rounded-2xl border border-white/15 bg-[#090E17] shadow-[0_24px_50px_-12px_rgba(16,28,44,0.28)] overflow-hidden text-white backdrop-blur-xl animate-float">
        
        {/* Top Window Header */}
        <div className="px-3.5 sm:px-5 py-2 sm:py-2.5 border-b border-white/10 bg-[#0E1523] flex items-center justify-between gap-2">
          {/* Traffic Dots + OS Brand */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] inline-block opacity-90" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] inline-block opacity-90" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] inline-block opacity-90" />
            </div>
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-white">
              KADAEK OS
            </span>
          </div>

          {/* High-Contrast Endpoint Path */}
          <div className="text-[9px] sm:text-[11px] font-mono text-[#CBD5E1] font-medium truncate">
            api.kadaek.id/cluster-telemetry
          </div>

          {/* Live Status */}
          <div className="text-[9px] sm:text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1.5 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>99.99% SLA</span>
          </div>
        </div>

        {/* Console Body */}
        <div className="p-3.5 sm:p-5 space-y-3 sm:space-y-3.5">
          
          {/* 3 High-Contrast Non-Overlapping KPI Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            
            {/* KPI 1: Kadaek Pay Settlement */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.05] border border-white/10 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[8px] sm:text-[9.5px] font-mono text-[#94A3B8] mb-1">
                <span className="flex items-center gap-1 text-white font-medium">
                  <Smartphone className="w-3 h-3 text-emerald-400 shrink-0" />
                  Kadaek Pay
                </span>
                <span className="text-emerald-400 font-medium">60 FPS</span>
              </div>
              <div className="text-xs sm:text-base font-heading font-black text-white tracking-tight mt-0.5">
                Rp 148,2 Miliar
              </div>
              <div className="text-[8px] sm:text-[9px] font-mono text-[#94A3B8] mt-1 truncate">
                Settlement Core · 0s Lag
              </div>
            </div>

            {/* KPI 2: Cluster Throughput */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.05] border border-white/10 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[8px] sm:text-[9.5px] font-mono text-[#94A3B8] mb-1">
                <span className="flex items-center gap-1 text-white font-medium">
                  <Activity className="w-3 h-3 text-sky-400 shrink-0" />
                  Throughput
                </span>
                <span className="text-sky-400 font-medium">Cluster SG-01</span>
              </div>
              <div className="text-xs sm:text-base font-heading font-black text-sky-400 tracking-tight mt-0.5">
                48.200 req/s
              </div>
              <div className="text-[8px] sm:text-[9px] font-mono text-[#94A3B8] mt-1 truncate">
                128 Nodes Ingest
              </div>
            </div>

            {/* KPI 3: P99 Latency Core (Hidden on smallest screens, visible on sm+) */}
            <div className="hidden sm:flex p-2.5 sm:p-3 rounded-xl bg-white/[0.05] border border-white/10 flex-col justify-between">
              <div className="flex items-center justify-between text-[8px] sm:text-[9.5px] font-mono text-[#94A3B8] mb-1">
                <span className="flex items-center gap-1 text-white font-medium">
                  <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                  Latency P99
                </span>
                <span className="text-emerald-400 font-medium">TLS 1.3</span>
              </div>
              <div className="text-xs sm:text-base font-heading font-black text-emerald-400 tracking-tight mt-0.5">
                1.8 ms
              </div>
              <div className="text-[8px] sm:text-[9px] font-mono text-[#94A3B8] mt-1 truncate">
                Zero-Trust Hardware
              </div>
            </div>

          </div>

          {/* Real-Time Distributed Telemetry Waveform */}
          <div className="relative rounded-xl bg-black/50 border border-white/10 p-2.5 sm:p-3.5 overflow-hidden">
            <div className="flex items-center justify-between text-[8px] sm:text-[9.5px] font-mono text-[#94A3B8] mb-1.5">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span className="text-white font-semibold uppercase tracking-wider">
                  REAL-TIME DISTRIBUTED TRAFFIC
                </span>
              </div>
              <span className="text-emerald-400 font-medium">P99: 1.8ms · STABLE</span>
            </div>

            {/* High-Contrast Smooth SVG Area Chart */}
            <div className="h-12 sm:h-16 w-full relative">
              <svg viewBox="0 0 500 80" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="streamGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="50%" stopColor="#818CF8" />
                    <stop offset="100%" stopColor="#34D399" />
                  </linearGradient>
                </defs>

                {/* Subtle Gridlines */}
                <line x1="0" y1="20" x2="500" y2="20" stroke="#FFFFFF" strokeOpacity="0.08" strokeDasharray="3 3" />
                <line x1="0" y1="45" x2="500" y2="45" stroke="#FFFFFF" strokeOpacity="0.08" strokeDasharray="3 3" />
                <line x1="0" y1="70" x2="500" y2="70" stroke="#FFFFFF" strokeOpacity="0.08" strokeDasharray="3 3" />

                {/* Gradient Fill */}
                <path
                  d="M0,60 Q60,25 120,45 T240,30 T360,15 T500,25 L500,80 L0,80 Z"
                  fill="url(#streamGrad)"
                />

                {/* Line Curve */}
                <path
                  d="M0,60 Q60,25 120,45 T240,30 T360,15 T500,25"
                  fill="none"
                  stroke="url(#lineGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Pulse Peak Indicator */}
                <circle cx="360" cy="15" r="3.5" fill="#38BDF8" />
                <circle cx="360" cy="15" r="7" fill="#38BDF8" opacity="0.4" className="animate-ping" />
              </svg>
            </div>

            {/* Timestamps */}
            <div className="flex items-center justify-between text-[7.5px] sm:text-[8.5px] font-mono text-[#94A3B8] mt-1 pt-1 border-t border-white/5">
              <span>00:00:00</span>
              <span>06:00:00</span>
              <span>12:00:00</span>
              <span>18:00:00</span>
              <span className="text-emerald-400 font-semibold">LIVE NOW</span>
            </div>
          </div>

          {/* Engine Status Bar */}
          <div className="flex items-center justify-between text-[8px] sm:text-[9.5px] font-mono text-[#94A3B8] px-0.5">
            <div className="flex items-center gap-2">
              <span className="text-white font-medium">KERNEL: V2.4 MESH</span>
              <span>·</span>
              <span className="text-emerald-400">128/128 NODES OPERATIONAL</span>
            </div>
            <div className="hidden xs:flex items-center gap-1 text-white/80">
              <Zap className="w-2.5 h-2.5 text-amber-400" />
              <span>ZERO DOWNTIME CORE</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
