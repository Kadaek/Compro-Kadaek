"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Terminal,
  Database,
  Sparkles,
  Layers,
  ArrowUpRight,
  Activity,
  Check,
  Copy,
  Sliders,
  Cpu,
  Zap,
} from "lucide-react";

export const CATEGORIES_DATA = [
  {
    id: "cli",
    num: "01",
    title: "Developer Tools & CLI",
    subtitle: "Terminal Utilities & Script Otomasi",
    desc: "Utilitas command-line siap pakai, sinkronisasi env satu tim, dan script otomatisasi alur ngoding.",
    metric: "18 Scripts",
    icon: Terminal,
    color: "emerald",
  },
  {
    id: "db",
    num: "02",
    title: "Backend & Database",
    subtitle: "Schema Visualizer & Microservices",
    desc: "Engine API siap pakai, visualizer relasi database, dan monitoring latensi query performa tinggi.",
    metric: "14 Engines",
    icon: Database,
    color: "cyan",
  },
  {
    id: "ai",
    num: "03",
    title: "AI & Otomasi Cerdas",
    subtitle: "Local LLM & Neural Reasoning",
    desc: "Runner model AI lokal, asisten koding cerdas, dan utilitas pemrosesan token real-time.",
    metric: "12 Models",
    icon: Sparkles,
    color: "purple",
  },
  {
    id: "ui",
    num: "04",
    title: "Komponen & Desain Web",
    subtitle: "React UI & Tailwind System",
    desc: "Koleksi komponen web minimalis, motion springs, dan template landing page siap copy-paste.",
    metric: "24 Kits",
    icon: Layers,
    color: "amber",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  // ── WIDGET 1: Terminal State ──
  const [terminalCmd, setTerminalCmd] = useState("npx kadaek pull cli-suite");
  const [terminalOutput, setTerminalOutput] = useState([
    "✔ Connecting to kadaek.internal [127.0.0.1:443]",
    "✔ 18 developer utilities synced in 1.2ms",
    "⚡ Ready: dev-sync, proxy-gate, env-guard",
  ]);
  const [copiedCmd, setCopiedCmd] = useState(false);

  const runTerminalCommand = (cmd: string, output: string[]) => {
    setTerminalCmd(cmd);
    setTerminalOutput(["Running: " + cmd + "...", ...output]);
  };

  // ── WIDGET 2: Database Latency Ticker ──
  const [dbLatency, setDbLatency] = useState(0.82);
  const [activeTable, setActiveTable] = useState("users");

  useEffect(() => {
    const timer = setInterval(() => {
      setDbLatency(+(0.75 + Math.random() * 0.18).toFixed(2));
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  // ── WIDGET 3: AI Neural Streamer ──
  const [aiTokens, setAiTokens] = useState(148);

  useEffect(() => {
    const interval = setInterval(() => {
      setAiTokens(140 + Math.floor(Math.random() * 24));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  // ── WIDGET 4: Component Playground ──
  const [componentActive, setComponentActive] = useState(true);
  const [componentVariant, setComponentVariant] = useState<"solid" | "glass" | "outline">("solid");
  const [clickCount, setClickCount] = useState(42);

  return (
    <section
      id="categories"
      className="snap-start snap-always relative h-[100dvh] max-h-[100dvh] flex flex-col justify-center items-center bg-[#FFFFFF] overflow-hidden pt-16 sm:pt-20 pb-4 sm:pb-6 px-4 sm:px-6 md:px-8 w-full max-w-full border-t border-[#101C2C]/10"
    >
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-center my-auto">
        
        {/* ── SECTION HEADER (CLEAN ARCHITECTURAL, ZERO BADGES) ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 sm:mb-6 pb-3 border-b border-[#101C2C]/10 gap-2 shrink-0">
          <div>
            <span className="font-mono text-[11px] text-[#526D9B] tracking-widest uppercase font-semibold block mb-1">
              01 / LINGKUNGAN EKOSISTEM
            </span>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-black text-[#101C2C] tracking-tight">
              Bukan Sekadar Kategori — Ini Lingkungan Nyata
            </h2>
          </div>

          <div className="font-mono text-[11px] text-[#526D9B] tracking-wider uppercase">
            [ 04 KONSOL INTERAKTIF ]
          </div>
        </div>

        {/* ── LIVING INTERACTIVE MASTER CONSOLE (100% 100DVH FIT ON BOTH DESKTOP & MOBILE) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 items-stretch flex-1 max-h-[520px] sm:max-h-[540px]">
          
          {/* ── SELECTOR TABS: HORIZONTAL ON MOBILE (<lg), VERTICAL ON DESKTOP (lg+) ── */}
          <div className="lg:col-span-5 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-1 lg:pb-0 no-scrollbar shrink-0">
            {CATEGORIES_DATA.map((cat, idx) => {
              const Icon = cat.icon;
              const isActive = activeTab === idx;
              return (
                <div
                  key={cat.id}
                  onClick={() => setActiveTab(idx)}
                  className={`group relative p-2.5 sm:p-3.5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between gap-2 sm:gap-3 text-left shrink-0 lg:shrink select-none ${
                    isActive
                      ? "bg-white border-[#101C2C]/40 shadow-[0_4px_16px_rgba(16,28,44,0.06)] ring-1 ring-[#101C2C]/15"
                      : "bg-[#FAFBFC] border-[#101C2C]/10 hover:bg-white hover:border-[#101C2C]/25"
                  }`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div
                      className={`w-7 h-7 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors shadow-xs ${
                        isActive
                          ? "bg-[#101C2C] text-white"
                          : "bg-[#E9EDF2]/60 text-[#101C2C] group-hover:bg-[#101C2C] group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-baseline gap-1.5 sm:gap-2">
                        <span className="font-mono text-[9px] sm:text-[10px] text-[#526D9B] font-bold">
                          /{cat.num}
                        </span>
                        <h3 className="font-heading text-xs sm:text-sm font-black text-[#101C2C] whitespace-nowrap lg:whitespace-normal truncate">
                          {cat.title}
                        </h3>
                      </div>
                      <p className="hidden lg:block text-[11px] text-[#526D9B] truncate mt-0.5">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="hidden lg:flex items-center gap-2 shrink-0">
                    <span className="font-mono text-[11px] text-[#526D9B] font-semibold">
                      {cat.metric}
                    </span>
                    <ArrowUpRight
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isActive
                          ? "text-[#101C2C] translate-x-0.5 -translate-y-0.5"
                          : "text-[#526D9B]/50 group-hover:text-[#101C2C]"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── RIGHT: LIVING INTERACTIVE WORKSPACE VIEWPORT ── */}
          <div className="lg:col-span-7 rounded-2xl border border-[#101C2C]/20 bg-[#0F172A] text-slate-100 p-4 sm:p-5 flex flex-col justify-between shadow-[0_16px_40px_rgba(16,28,44,0.12)] overflow-hidden min-h-[300px]">
            
            {/* ── VIEWPORT 0: TERMINAL & CLI ── */}
            {activeTab === 0 && (
              <div className="flex flex-col justify-between h-full font-mono text-xs select-none">
                {/* Traffic Lights & Title */}
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-800 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="font-mono text-slate-400">zsh — kadaek@edge</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(terminalCmd);
                      setCopiedCmd(true);
                      setTimeout(() => setCopiedCmd(false), 1500);
                    }}
                    className="hover:text-white transition-colors"
                    title="Copy command"
                  >
                    {copiedCmd ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Shell Prompt & Output */}
                <div className="my-auto py-3 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs sm:text-sm">
                    <span>❯</span>
                    <span className="text-white font-semibold">{terminalCmd}</span>
                    <span className="w-2 h-4 bg-emerald-400 animate-pulse" />
                  </div>

                  <div className="space-y-1.5 text-slate-400 text-[11px] sm:text-xs min-h-[90px] pt-1">
                    {terminalOutput.map((line, i) => (
                      <div
                        key={i}
                        className={
                          line.startsWith("⚡")
                            ? "text-amber-300 font-medium"
                            : line.startsWith("✔")
                            ? "text-emerald-300 font-medium"
                            : "text-slate-400"
                        }
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tactile Command Triggers */}
                <div className="pt-2.5 border-t border-slate-800 flex items-center justify-between flex-wrap gap-2 text-[10px] sm:text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-500">Klik tes:</span>
                    <button
                      onClick={() =>
                        runTerminalCommand("kadaek sync --keys", [
                          "✔ AES-256 GCM key derivation complete",
                          "✔ Synced 4 env files to cluster",
                          "⚡ Zero leakage verified",
                        ])
                      }
                      className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    >
                      $ sync --keys
                    </button>
                    <button
                      onClick={() =>
                        runTerminalCommand("kadaek benchmark", [
                          "✔ 1,000,000 requests dispatched",
                          "✔ p99: 1.14ms | Error: 0.00%",
                          "⚡ Throughput: 42,910 req/s",
                        ])
                      }
                      className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    >
                      $ benchmark
                    </button>
                  </div>
                  <span className="text-emerald-400 font-semibold">Ready in 1.2ms</span>
                </div>
              </div>
            )}

            {/* ── VIEWPORT 1: DATABASE & BACKEND ── */}
            {activeTab === 1 && (
              <div className="flex flex-col justify-between h-full font-mono text-xs select-none">
                {/* Node Status Bar */}
                <div className="flex items-center justify-between pb-2.5 border-b border-cyan-950 text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
                    <span className="text-cyan-300 font-bold uppercase">Postgres Cluster V16</span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400">
                    <span>Latency:</span>
                    <span className="font-bold text-white bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                      {dbLatency} ms
                    </span>
                  </div>
                </div>

                {/* Schema Visualizer */}
                <div className="grid grid-cols-2 gap-3 my-auto py-2 text-[11px]">
                  <div
                    onClick={() => setActiveTable("users")}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      activeTable === "users"
                        ? "bg-cyan-950/80 border-cyan-500/60 shadow-md"
                        : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div className="text-cyan-300 font-bold flex items-center justify-between mb-2">
                      <span>tbl_users</span>
                      <span className="text-[10px] text-cyan-500">PK</span>
                    </div>
                    <div className="text-slate-400 space-y-1">
                      <div>id: <span className="text-emerald-400">UUID</span></div>
                      <div>email: <span className="text-amber-400">VARCHAR</span></div>
                      <div>created_at: <span className="text-purple-400">TIMESTAMP</span></div>
                    </div>
                  </div>

                  <div
                    onClick={() => setActiveTable("sessions")}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      activeTable === "sessions"
                        ? "bg-cyan-950/80 border-cyan-500/60 shadow-md"
                        : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div className="text-cyan-300 font-bold flex items-center justify-between mb-2">
                      <span>tbl_sessions</span>
                      <span className="text-[10px] text-cyan-500">FK</span>
                    </div>
                    <div className="text-slate-400 space-y-1">
                      <div>user_id: <span className="text-purple-400">REF</span></div>
                      <div>token: <span className="text-emerald-400">JWT</span></div>
                      <div>expires_in: <span className="text-amber-400">INT4</span></div>
                    </div>
                  </div>
                </div>

                {/* Telemetry Footer */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-cyan-950">
                  <span className="truncate">EXPLAIN ANALYZE index_scan on {activeTable}</span>
                  <span className="text-emerald-400 font-bold shrink-0">100% HEALTHY</span>
                </div>
              </div>
            )}

            {/* ── VIEWPORT 2: AI & NEURAL STREAMING ── */}
            {activeTab === 2 && (
              <div className="flex flex-col justify-between h-full font-mono text-xs select-none">
                {/* AI Header */}
                <div className="flex items-center justify-between pb-2.5 border-b border-purple-950 text-[11px]">
                  <div className="flex items-center gap-1.5 text-purple-300">
                    <Cpu className="w-3.5 h-3.5 text-purple-400 animate-spin" style={{ animationDuration: "8s" }} />
                    <span className="font-bold">kadaek-reasoner-7b</span>
                  </div>
                  <div className="flex items-center gap-1 text-purple-400">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-white font-bold">{aiTokens}</span> tok/s
                  </div>
                </div>

                {/* Stream Box */}
                <div className="my-auto py-2 space-y-2 text-xs">
                  <div className="text-purple-300/80 flex items-center gap-1.5 text-[11px]">
                    <span className="text-purple-400 font-bold">PROMPT:</span>
                    <span className="truncate">&quot;Generate zero-alloc ring buffer Go&quot;</span>
                  </div>

                  <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-800/40 text-purple-200 text-xs leading-relaxed font-mono">
                    <span className="text-emerald-400 font-bold">type</span> RingBuffer struct &#123;
                    <div className="pl-4 text-purple-300">
                      buf: [1024]byte,<br />
                      head, tail: uint32
                    </div>
                    &#125;
                    <span className="inline-block w-2 h-4 bg-purple-400 ml-1 animate-pulse align-middle" />
                  </div>
                </div>

                {/* Audio/Tensor Spectrum Bar */}
                <div className="pt-2 border-t border-purple-950 flex items-center justify-between text-[11px] text-purple-400">
                  <div className="flex items-center gap-1">
                    {[12, 24, 18, 30, 22, 16, 28, 14, 20, 26].map((h, i) => (
                      <span
                        key={i}
                        className="w-1 bg-purple-400/80 rounded-full animate-pulse"
                        style={{
                          height: `${h * 0.55}px`,
                          animationDelay: `${i * 0.12}s`,
                          animationDuration: "0.85s",
                        }}
                      />
                    ))}
                    <span className="ml-2 text-[10px] text-purple-400 font-mono">INFERENCE ACTIVE</span>
                  </div>
                  <span className="text-emerald-400 font-bold text-[10px]">LOCAL TENSOR READY</span>
                </div>
              </div>
            )}

            {/* ── VIEWPORT 3: COMPONENT LAB ── */}
            {activeTab === 3 && (
              <div className="flex flex-col justify-between h-full font-sans text-xs select-none">
                {/* Control Bar */}
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-700 text-[11px]">
                  <span className="font-mono text-amber-400 font-bold uppercase flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5" />
                    Interactive Component Lab
                  </span>
                  <div className="flex items-center gap-1.5 bg-slate-900 px-2 py-0.5 rounded border border-slate-700 font-mono text-[11px]">
                    <span className="text-slate-400">Variant:</span>
                    <span className="text-amber-400 font-semibold">{componentVariant}</span>
                  </div>
                </div>

                {/* Tactile Living Components Preview */}
                <div className="my-auto py-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setComponentActive(!componentActive)}
                      className={`w-11 h-6 flex items-center rounded-full p-0.5 cursor-pointer transition-colors duration-300 ${
                        componentActive ? "bg-amber-500" : "bg-slate-700"
                      }`}
                      aria-label="Toggle demo switch"
                    >
                      <div
                        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                          componentActive ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                    <span className="font-mono text-xs text-slate-300 font-medium">
                      {componentActive ? "State: ACTIVE" : "State: MUTED"}
                    </span>
                  </div>

                  <button
                    onClick={() => setClickCount(c => c + 1)}
                    className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all active:scale-95 shadow-md ${
                      componentVariant === "solid"
                        ? "bg-amber-400 text-slate-950 hover:bg-amber-300"
                        : componentVariant === "glass"
                        ? "bg-white/10 text-amber-300 border border-amber-400/30 hover:bg-white/20 backdrop-blur-md"
                        : "border border-amber-400 text-amber-400 hover:bg-amber-400/10"
                    }`}
                  >
                    🚀 Trigger ({clickCount})
                  </button>
                </div>

                {/* Style Selectors */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[11px] font-mono">
                  <span className="text-slate-400">Pilih style:</span>
                  <div className="flex items-center gap-1.5">
                    {(["solid", "glass", "outline"] as const).map(v => (
                      <button
                        key={v}
                        onClick={() => setComponentVariant(v)}
                        className={`px-2.5 py-1 rounded-lg transition-all capitalize ${
                          componentVariant === v
                            ? "bg-amber-400/20 text-amber-300 border border-amber-400/40 font-bold"
                            : "bg-slate-800 text-slate-400 hover:text-white"
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
