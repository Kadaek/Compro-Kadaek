"use client";

import { Activity, Cpu, ShieldCheck, Smartphone, Terminal, Zap } from "lucide-react";

export default function HeroFloatingShowcase() {
  return (
    <div className="relative w-full max-w-[360px] xs:max-w-[420px] sm:max-w-[560px] md:max-w-[620px] mx-auto select-none px-2 sm:px-4">
      
      {/* ── 1. MAIN SOFTWARE CONSOLE PLATFORM (CLEAN, ARCHITECTURAL, ZERO STOCK PHOTO) ── */}
      <div className="relative w-full rounded-2xl sm:rounded-3xl border border-[#101C2C]/15 bg-[#090E17] shadow-[0_24px_60px_-15px_rgba(16,28,44,0.22)] overflow-hidden text-white backdrop-blur-xl animate-float">
        
        {/* Top Window Chrome / Browser Header */}
        <div className="px-3 sm:px-5 py-2 sm:py-2.5 border-b border-white/10 bg-[#0E1523] flex items-center justify-between gap-2">
          {/* Traffic Light Dots */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#EF4444]/80 inline-block" />
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#F59E0B]/80 inline-block" />
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#10B981]/80 inline-block" />
          </div>

          {/* Center Address / Domain Badge */}
          <div className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[8px] sm:text-[11px] font-mono text-[#8A9EB7] flex items-center gap-1.5 truncate max-w-[190px] sm:max-w-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-white/80 font-medium truncate">
              <span className="sm:hidden">kadaek.systems / core</span>
              <span className="hidden sm:inline">kadaek.platform / core-telemetry</span>
            </span>
          </div>

          {/* Right Status */}
          <div className="text-[8px] sm:text-[10px] font-mono text-emerald-400 font-medium flex items-center gap-1 shrink-0">
            <span>● 99.99% SLA</span>
          </div>
        </div>

        {/* Console Body */}
        <div className="p-3.5 sm:p-5 space-y-3 sm:space-y-4">
          
          {/* Top KPI Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
            
            {/* Metric 1: Kadaek Pay Settlement */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/10">
              <div className="flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-[#8A9EB7] mb-1">
                <span className="flex items-center gap-1 text-white font-medium">
                  <Smartphone className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400" />
                  Kadaek Pay
                </span>
                <span className="text-emerald-400">60 FPS</span>
              </div>
              <div className="text-xs sm:text-base font-heading font-black text-white tracking-tight">
                Rp 148,2 Miliar
              </div>
              <div className="text-[7.5px] sm:text-[8.5px] font-mono text-[#8A9EB7] mt-0.5 truncate">
                Settlement Core · 0s Lag
              </div>
            </div>

            {/* Metric 2: Cluster Throughput */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/10">
              <div className="flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-[#8A9EB7] mb-1">
                <span className="flex items-center gap-1 text-white font-medium">
                  <Activity className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-sky-400" />
                  Throughput
                </span>
                <span className="text-sky-400">P99 1.8ms</span>
              </div>
              <div className="text-xs sm:text-base font-heading font-black text-white tracking-tight">
                48.200 req/s
              </div>
              <div className="text-[7.5px] sm:text-[8.5px] font-mono text-emerald-400 mt-0.5 truncate">
                Cluster SG-01 · 128 Nodes
              </div>
            </div>

            {/* Metric 3: Distributed Security (Hidden on smallest, visible on sm+) */}
            <div className="hidden sm:block p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/10">
              <div className="flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-[#8A9EB7] mb-1">
                <span className="flex items-center gap-1 text-white font-medium">
                  <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400" />
                  Security Engine
                </span>
                <span className="text-emerald-400">Zero-Trust</span>
              </div>
              <div className="text-xs sm:text-base font-heading font-black text-white tracking-tight">
                TLS 1.3 GCM
              </div>
              <div className="text-[7.5px] sm:text-[8.5px] font-mono text-[#8A9EB7] mt-0.5 truncate">
                Hardware HSM · Encrypted
              </div>
            </div>

          </div>

          {/* Center Main Visual: Realtime Distributed Graph */}
          <div className="relative rounded-xl bg-black/40 border border-white/10 p-3 sm:p-4 overflow-hidden">
            <div className="flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-[#8A9EB7] mb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span className="text-white font-medium uppercase tracking-wider">
                  REAL-TIME DISTRIBUTED TRAFFIC STREAM
                </span>
              </div>
              <span className="text-[#8A9EB7]">BUFFER: 100% OK</span>
            </div>

            {/* SVG Telemetry Chart */}
            <div className="h-16 sm:h-24 w-full relative">
              <svg viewBox="0 0 500 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="50%" stopColor="#818CF8" />
                    <stop offset="100%" stopColor="#34D399" />
                  </linearGradient>
                </defs>

                {/* Subtle Gridlines */}
                <line x1="0" y1="25" x2="500" y2="25" stroke="#FFFFFF" strokeOpacity="0.07" strokeDasharray="4 4" />
                <line x1="0" y1="50" x2="500" y2="50" stroke="#FFFFFF" strokeOpacity="0.07" strokeDasharray="4 4" />
                <line x1="0" y1="75" x2="500" y2="75" stroke="#FFFFFF" strokeOpacity="0.07" strokeDasharray="4 4" />

                {/* Area Gradient Fill */}
                <path
                  d="M0,75 Q60,35 120,55 T240,40 T360,20 T500,30 L500,100 L0,100 Z"
                  fill="url(#chartGradient)"
                />

                {/* Main Curve Line */}
                <path
                  d="M0,75 Q60,35 120,55 T240,40 T360,20 T500,30"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Pulse Peak Indicator */}
                <circle cx="360" cy="20" r="4" fill="#38BDF8" />
                <circle cx="360" cy="20" r="8" fill="#38BDF8" opacity="0.3" className="animate-ping" />
              </svg>
            </div>

            {/* Bottom Chart Timestamps */}
            <div className="flex items-center justify-between text-[7px] sm:text-[8px] font-mono text-[#8A9EB7] mt-1 pt-1.5 border-t border-white/5">
              <span>00:00:00</span>
              <span>06:00:00</span>
              <span>12:00:00</span>
              <span>18:00:00</span>
              <span className="text-emerald-400 font-semibold">LIVE NOW</span>
            </div>
          </div>

          {/* Lower Engine Status Strip */}
          <div className="flex items-center justify-between text-[7.5px] sm:text-[8.5px] font-mono text-[#8A9EB7] px-1">
            <div className="flex items-center gap-2">
              <span className="text-white/90 font-medium">CORE KERNEL: V2.4</span>
              <span>·</span>
              <span className="text-emerald-400">ZERO DOWNTIME CLUSTER</span>
            </div>
            <div className="hidden xs:flex items-center gap-1.5 text-white/70">
              <Zap className="w-2.5 h-2.5 text-amber-400" />
              <span>HIGH EFFICIENCY ARCHITECTURE</span>
            </div>
          </div>

        </div>

      </div>

      {/* ── 2. NEAT FLOATING TELEMETRY SATELLITES (STRAIGHT 0° ROTATION, CRISP & RAPIH) ── */}
      {/* Top Left Floating Satellite Card */}
      <div className="animate-float-slow hidden sm:flex absolute -left-4 md:-left-6 top-8 px-3.5 py-2.5 rounded-xl bg-[#090E17]/95 border border-white/15 shadow-[0_16px_36px_rgba(0,0,0,0.35)] backdrop-blur-md items-center gap-2.5 text-white z-20">
        <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
          <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
        </div>
        <div>
          <div className="text-[9px] font-mono text-[#8A9EB7] uppercase tracking-wider">
            Fintech Engine
          </div>
          <div className="text-xs font-heading font-extrabold text-white">
            Rp 148,2 M · Active
          </div>
        </div>
      </div>

      {/* Bottom Right Floating Satellite Card */}
      <div className="animate-float hidden sm:flex absolute -right-4 md:-right-6 -bottom-3 px-3.5 py-2.5 rounded-xl bg-[#090E17]/95 border border-white/15 shadow-[0_16px_36px_rgba(0,0,0,0.35)] backdrop-blur-md items-center gap-2.5 text-white z-20">
        <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
          <Cpu className="w-3.5 h-3.5 text-sky-400" />
        </div>
        <div>
          <div className="text-[9px] font-mono text-[#8A9EB7] uppercase tracking-wider">
            Cloud Telemetry
          </div>
          <div className="text-xs font-heading font-extrabold text-white flex items-center gap-1.5">
            <span>48.200 req/s</span>
            <span className="text-[9px] font-mono text-emerald-400">● 100%</span>
          </div>
        </div>
      </div>

    </div>
  );
}
