"use client";

import { Search, Terminal, Activity, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function HeroFloatingShowcase() {
  return (
    <div className="relative w-full max-w-full sm:max-w-5xl mx-auto select-none px-2 sm:px-4 pt-0 pb-2 overflow-hidden sm:overflow-visible">
      {/* ── DYNAMIC REALISTIC SOFTWARE TOOLS (ZERO TYPOS, GAK KAKU, GAK KEPOTONG, PURE VECTOR) ── */}
      <div className="relative flex items-center justify-center min-h-[200px] xs:min-h-[240px] sm:min-h-[300px] md:min-h-[340px] w-full max-w-full">
        
        {/* 1. LEFT WINDOW: DARK MODE CODE & BACKEND ENGINE (TILT -4 DEG) */}
        <div className="absolute left-0 sm:left-4 md:left-8 bottom-2 sm:bottom-4 z-10 w-[240px] xs:w-[280px] sm:w-[320px] md:w-[360px] rounded-2xl bg-[#0B111A] border border-slate-800/80 shadow-[0_20px_50px_rgba(11,17,26,0.25)] p-3.5 sm:p-4 text-left transform -rotate-3 hover:rotate-0 transition-all duration-500 hidden sm:block">
          {/* Window Header */}
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-800">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[11px] font-mono text-slate-400">gateway.ts</span>
            <div className="w-3" />
          </div>

          {/* Real, Accurate, Typo-Free Code */}
          <div className="font-mono text-[11px] sm:text-xs leading-relaxed space-y-1 text-slate-300">
            <p>
              <span className="text-purple-400">import</span> &#123; createGateway &#125; <span className="text-purple-400">from</span> <span className="text-emerald-400">&quot;@kadaek/core&quot;</span>;
            </p>
            <p className="pt-1">
              <span className="text-blue-400">const</span> app = <span className="text-amber-300">createGateway</span>(&#123;
            </p>
            <p className="pl-4 text-slate-400">
              rateLimit: <span className="text-emerald-400">&quot;10k/sec&quot;</span>,
            </p>
            <p className="pl-4 text-slate-400">
              zeroDowntime: <span className="text-orange-400">true</span>,
            </p>
            <p>&#125;);</p>
            <p className="pt-1.5 flex items-center gap-1.5 text-[10px] text-emerald-400 border-t border-slate-800/60 mt-2">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>Proxy listening on port 8080 · 0.8ms</span>
            </p>
          </div>
        </div>

        {/* 2. CENTER WINDOW: HERO PRODUCT DASHBOARD (ELEVATED, CLEAN, Z-20) */}
        <div className="relative z-20 w-full max-w-[340px] xs:max-w-[420px] sm:max-w-[480px] md:max-w-[540px] rounded-2xl bg-[#FFFFFF] border border-[#101C2C]/10 shadow-[0_25px_60px_rgba(16,28,44,0.12)] p-4 sm:p-5 text-left transform hover:-translate-y-1.5 transition-all duration-500">
          
          {/* App Topbar */}
          <div className="flex items-center justify-between gap-3 pb-3 border-b border-[#101C2C]/8">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#101C2C] text-white flex items-center justify-center">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="font-heading text-xs sm:text-sm font-bold text-[#101C2C]">
                  Kadaek Hub
                </h4>
                <div className="text-[10px] font-mono text-emerald-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Platform
                </div>
              </div>
            </div>

            {/* Clean Mini Search */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F8FAFC] border border-[#101C2C]/8 text-[11px] font-mono text-[#526D9B]">
              <Search className="w-3 h-3 text-[#526D9B]" />
              <span className="hidden xs:inline">Cari 48+ tools...</span>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-2 py-3 border-b border-[#101C2C]/6">
            <div className="p-2 rounded-lg bg-[#F8FAFC]">
              <div className="text-[10px] font-mono text-[#526D9B]">Tools Aktif</div>
              <div className="text-sm font-heading font-bold text-[#101C2C]">48 Project</div>
            </div>
            <div className="p-2 rounded-lg bg-[#F8FAFC]">
              <div className="text-[10px] font-mono text-[#526D9B]">Developer</div>
              <div className="text-sm font-heading font-bold text-[#101C2C]">1,400+</div>
            </div>
            <div className="p-2 rounded-lg bg-[#F8FAFC]">
              <div className="text-[10px] font-mono text-[#526D9B]">Akses</div>
              <div className="text-sm font-heading font-bold text-emerald-600">Free 100%</div>
            </div>
          </div>

          {/* Real Curated Tool Preview Row */}
          <div className="pt-3 flex items-center justify-between text-xs font-mono">
            <div>
              <div className="font-bold text-[#101C2C]">SchemaPulse v2.1</div>
              <div className="text-[10px] text-[#526D9B]">Database visualizer oleh @techfajar</div>
            </div>
            <div className="flex items-center gap-1 text-emerald-600 font-semibold">
              <span>Tersedia</span>
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* 3. RIGHT WINDOW: REAL API ENGINE & STATUS (TILT +4 DEG) */}
        <div className="absolute right-0 sm:right-4 md:right-8 bottom-2 sm:bottom-4 z-10 w-[240px] xs:w-[270px] sm:w-[300px] md:w-[340px] rounded-2xl bg-[#FFFFFF] border border-[#101C2C]/10 shadow-[0_20px_50px_rgba(16,28,44,0.1)] p-3.5 sm:p-4 text-left transform rotate-3 hover:rotate-0 transition-all duration-500 hidden md:block">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#101C2C]/8">
            <div className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-[#101C2C]" />
              <span className="text-[11px] font-mono font-semibold text-[#101C2C]">API Explorer</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">200 OK</span>
          </div>

          {/* Real JSON Payload (100% Typo-Free) */}
          <div className="font-mono text-[10px] sm:text-[11px] leading-relaxed bg-[#F8FAFC] p-2.5 rounded-lg border border-[#101C2C]/5 text-slate-700">
            <p><span className="text-slate-400">&#123;</span></p>
            <p className="pl-3">&quot;tool&quot;: <span className="text-emerald-600">&quot;DevSync CLI&quot;</span>,</p>
            <p className="pl-3">&quot;author&quot;: <span className="text-blue-600">&quot;@dimasbuilds&quot;</span>,</p>
            <p className="pl-3">&quot;latency&quot;: <span className="text-purple-600">&quot;1.2ms&quot;</span>,</p>
            <p className="pl-3">&quot;verified&quot;: <span className="text-emerald-600">true</span></p>
            <p><span className="text-slate-400">&#125;</span></p>
          </div>
        </div>

      </div>
    </div>
  );
}
