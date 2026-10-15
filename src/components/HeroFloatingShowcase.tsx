"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Shield, Activity, Database, Smartphone } from "lucide-react";

export default function HeroFloatingShowcase() {
  const [activeTab, setActiveTab] = useState<"fintrack" | "fleetpulse" | "security">("fintrack");

  return (
    <div className="relative w-full max-w-[540px] sm:max-w-[620px] mx-auto select-none px-2 sm:px-4">
      {/* ── TOP PRODUCT SWITCHER TABS ── */}
      <div className="flex items-center justify-center gap-1.5 mb-2.5">
        {[
          { id: "fintrack", label: "FinTrack Banking Core", icon: Activity },
          { id: "fleetpulse", label: "FleetPulse Telemetry", icon: Database },
          { id: "security", label: "Atlas Security Guard", icon: Shield },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono transition-all cursor-pointer ${
                isActive
                  ? "bg-[#101C2C] text-white font-semibold shadow-xs"
                  : "bg-[#E9EDF2]/80 text-[#526D9B] hover:text-[#101C2C] hover:bg-[#E9EDF2]"
              }`}
            >
              <Icon className="w-3 h-3" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ── MAIN SOFTWARE PRODUCT WINDOW (DESKTOP INTERFACE) ── */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-[#090F1A] border border-[#22334A] shadow-[0_20px_50px_-10px_rgba(16,28,44,0.35)] overflow-hidden">
        {/* Window Chrome Header */}
        <div className="h-9 px-4 bg-[#060B12] border-b border-[#1A2738] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
          </div>

          <div className="px-3 py-0.5 rounded-md bg-[#101A28] border border-[#1F2F44] text-[9px] font-mono text-[#8A9EB7] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>app.kadaek.id / production-core</span>
          </div>

          <div className="font-mono text-[9px] text-[#526D9B]">
            v2.4.0-stable
          </div>
        </div>

        {/* Product Dashboard Content */}
        <div className="p-4 sm:p-5 text-white">
          {/* Top Metrics Row */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-[#0E1724] border border-[#1E2E42]">
              <span className="text-[9px] font-mono text-[#8A9EB7] uppercase tracking-wider block">
                {activeTab === "fintrack" ? "Throughput" : activeTab === "fleetpulse" ? "Active Fleet" : "Audit Score"}
              </span>
              <div className="text-base sm:text-xl font-heading font-black text-white mt-0.5">
                {activeTab === "fintrack" ? "48.2k req/s" : activeTab === "fleetpulse" ? "1,420 Units" : "99.98% SLA"}
              </div>
              <span className="text-[9px] font-mono text-emerald-400">
                ↑ +14.2% real-time
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-[#0E1724] border border-[#1E2E42]">
              <span className="text-[9px] font-mono text-[#8A9EB7] uppercase tracking-wider block">
                {activeTab === "fintrack" ? "P99 Latency" : activeTab === "fleetpulse" ? "GPS Telemetry" : "Zero-Trust"}
              </span>
              <div className="text-base sm:text-xl font-heading font-black text-white mt-0.5">
                {activeTab === "fintrack" ? "6.4 ms" : activeTab === "fleetpulse" ? "0.2s sync" : "256-Bit GCM"}
              </div>
              <span className="text-[9px] font-mono text-emerald-400">
                ✓ Ultra-low latency
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-[#0E1724] border border-[#1E2E42]">
              <span className="text-[9px] font-mono text-[#8A9EB7] uppercase tracking-wider block">
                {activeTab === "fintrack" ? "Settlement" : activeTab === "fleetpulse" ? "Route Engine" : "Encryption"}
              </span>
              <div className="text-base sm:text-xl font-heading font-black text-white mt-0.5 truncate">
                {activeTab === "fintrack" ? "Rp 142.8M" : activeTab === "fleetpulse" ? "Optimized" : "Verified"}
              </div>
              <span className="text-[9px] font-mono text-[#8A9EB7]">
                Hourly aggregate
              </span>
            </div>
          </div>

          {/* Real-Time Telemetry Graph Visualization */}
          <div className="p-3 rounded-xl bg-[#0B1320] border border-[#1B2A3E] mb-3.5">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#8A9EB7] mb-2">
              <span className="font-semibold text-white">System Throughput & Event Telemetry</span>
              <span className="text-emerald-400">● Live 60 FPS</span>
            </div>
            
            {/* SVG Telemetry Curve */}
            <div className="relative h-16 sm:h-20 w-full overflow-hidden">
              <svg viewBox="0 0 400 80" className="w-full h-full preserve-3d">
                <defs>
                  <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#526D9B" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#526D9B" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,55 Q40,30 80,45 T160,25 T240,40 T320,15 T400,28 L400,80 L0,80 Z"
                  fill="url(#curveGradient)"
                />
                <path
                  d="M0,55 Q40,30 80,45 T160,25 T240,40 T320,15 T400,28"
                  fill="none"
                  stroke="#8A9EB7"
                  strokeWidth="2"
                />
                {/* Data point pulses */}
                <circle cx="160" cy="25" r="3" fill="#34D399" />
                <circle cx="320" cy="15" r="3.5" fill="#60A5FA" />
              </svg>
            </div>
          </div>

          {/* Live System Process Logs */}
          <div className="space-y-1.5 font-mono text-[9px] sm:text-[10px]">
            <div className="p-2 rounded-lg bg-[#0E1724]/90 border border-[#1A2738] flex items-center justify-between text-[#8A9EB7]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-white font-medium">CORE_ORCHESTRATOR_CLUSTER</span>
              </div>
              <span className="text-emerald-400">200 OK · 4ms</span>
            </div>
            <div className="p-2 rounded-lg bg-[#0E1724]/90 border border-[#1A2738] flex items-center justify-between text-[#8A9EB7]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span className="text-white font-medium">PAYMENT_ROUTER_SERVICE</span>
              </div>
              <span className="text-[#8A9EB7]">TLS 1.3 · Verified</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── COMPANION MOBILE APP CARD (OVERLAPPING SUDUT KANAN BAWAH) ── */}
      <div className="animate-float absolute -right-2 sm:-right-6 -bottom-3 sm:-bottom-5 w-40 sm:w-48 rounded-2xl bg-[#060B12]/95 backdrop-blur-xl border border-white/20 p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-20 hidden xs:block">
        <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-white/10 text-[8px] font-mono text-white/60">
          <div className="flex items-center gap-1 text-white font-semibold">
            <Smartphone className="w-3 h-3 text-emerald-400" />
            <span>Kadaek Mobile</span>
          </div>
          <span>Live</span>
        </div>
        <span className="text-[8px] font-mono text-white/50 block">Managed Assets</span>
        <div className="text-xs sm:text-sm font-heading font-black text-white mt-0.5">
          Rp 24,85 Miliar
        </div>
        <div className="mt-2 py-1 px-2 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-[8px] font-mono text-emerald-300 flex items-center justify-between">
          <span>Cluster ID-01</span>
          <span className="font-bold">● Active</span>
        </div>
      </div>
    </div>
  );
}
