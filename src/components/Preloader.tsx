"use client";

import { useEffect, useState } from "react";
import { KadaekMonogram } from "@/components/KadaekLogo";
import { FastForward } from "lucide-react";

export default function Preloader() {
  const [phase, setPhase] = useState<0 | 1 | 2 | 3>(0);
  const [percent, setPercent] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  const handleSkip = () => {
    setIsDone(true);
    setTimeout(() => setShouldRender(false), 900);
  };

  useEffect(() => {
    // Phase 0: Frustrated Solo Dev / Overtime (0s - 1.6s)
    // Phase 1: Connection with Buddy / Two Nodes Merge (1.6s - 3.2s)
    // Phase 2: Birth of Kadaek / Pure Skill Ignition (3.2s - 4.8s)
    // Phase 3: Launch / Wealth / Expansion (4.8s - 5.5s)

    const timer1 = setTimeout(() => setPhase(1), 1600);
    const timer2 = setTimeout(() => setPhase(2), 3200);
    const timer3 = setTimeout(() => setPhase(3), 4800);
    const timerExit = setTimeout(() => {
      setIsDone(true);
      setTimeout(() => setShouldRender(false), 1000);
    }, 5600);

    // Percentage Counter
    const pInterval = setInterval(() => {
      setPercent((p) => {
        if (p >= 100) {
          clearInterval(pInterval);
          return 100;
        }
        return p + 1;
      });
    }, 52);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timerExit);
      clearInterval(pInterval);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#101C2C] text-[#FFFFFF] flex flex-col justify-between p-6 sm:p-12 transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] select-none ${
        isDone ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* ── Top Bar ── */}
      <div className="flex items-center justify-between text-xs font-mono text-[#526D9B]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="tracking-[0.25em] uppercase text-zinc-300">
            {phase === 0 && "PHASE 01: THE 9-TO-9 RAT RACE"}
            {phase === 1 && "PHASE 02: TWO DEVS CONNECTING"}
            {phase === 2 && "PHASE 03: PURE SKILL STARTUP"}
            {phase === 3 && "PHASE 04: KADAEK ONLINE"}
          </span>
        </div>

        <button
          onClick={handleSkip}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-[11px] font-mono text-zinc-400 hover:text-white transition-all pointer-events-auto"
        >
          <span>LEWATI</span>
          <FastForward className="w-3 h-3" />
        </button>
      </div>

      {/* ── Center Stage: Pure Visual Animation ── */}
      <div className="max-w-xl mx-auto w-full my-auto flex flex-col items-center justify-center">
        {/* SCENE 0: Frustrated Solo Dev Monitor */}
        {phase === 0 && (
          <div className="flex flex-col items-center animate-fade-in">
            {/* Monitor Frame */}
            <div className="relative w-56 h-36 rounded-xl border-2 border-rose-500/60 bg-zinc-950 p-4 shadow-[0_0_40px_rgba(244,63,94,0.25)] flex flex-col justify-between overflow-hidden animate-pulse">
              {/* Screen Top Bar */}
              <div className="flex items-center justify-between border-b border-rose-500/20 pb-2">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-rose-500" />
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <div className="w-2 h-2 rounded-full bg-zinc-600" />
                </div>
                <span className="text-[9px] font-mono text-rose-400 uppercase tracking-wider">
                  OVERTIME_OVERLOAD
                </span>
              </div>

              {/* Shaking Error Lines */}
              <div className="space-y-1.5 py-2">
                <div className="h-1.5 bg-rose-500/40 rounded w-3/4 animate-pulse" />
                <div className="h-1.5 bg-rose-500/30 rounded w-full" />
                <div className="h-1.5 bg-rose-500/50 rounded w-1/2" />
                <div className="h-1.5 bg-rose-500/20 rounded w-2/3" />
              </div>

              {/* Warning Alert */}
              <div className="text-[10px] font-mono text-rose-400 font-bold flex items-center justify-between">
                <span>SYSTEM: BURNOUT 99%</span>
                <span>02:40 AM</span>
              </div>
            </div>

            {/* Stand */}
            <div className="w-8 h-4 bg-zinc-800" />
            <div className="w-24 h-1.5 bg-zinc-700 rounded-full" />

            <div className="mt-6 text-xs font-mono uppercase tracking-[0.25em] text-rose-400">
              Gaji UMR • Lembur Weekend • Muak
            </div>
          </div>
        )}

        {/* SCENE 1: Two Devs Connecting (The Buddy Call) */}
        {phase === 1 && (
          <div className="flex flex-col items-center animate-fade-in w-full">
            <div className="flex items-center justify-between w-full max-w-sm px-4">
              {/* Dev 1 Node */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-2xl border-2 border-[#526D9B] bg-[#526D9B]/10 flex items-center justify-center text-white font-mono font-bold shadow-[0_0_30px_rgba(82,109,155,0.4)]">
                  &lt;DEV_1/&gt;
                </div>
                <span className="text-[10px] font-mono text-[#526D9B] tracking-wider">
                  FOUNDER A
                </span>
              </div>

              {/* Animated Glowing Sync Beam */}
              <div className="flex-1 mx-4 relative flex items-center justify-center">
                <div className="w-full h-0.5 bg-gradient-to-r from-[#526D9B] via-emerald-400 to-[#526D9B] relative overflow-hidden">
                  <div className="absolute inset-0 bg-white w-12 animate-ping opacity-60" />
                </div>
                <div className="absolute -top-3 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-[9px] font-mono text-emerald-300 uppercase tracking-widest font-bold">
                  CALL CONNECTED
                </div>
              </div>

              {/* Dev 2 Node */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-2xl border-2 border-emerald-400/80 bg-emerald-500/10 flex items-center justify-center text-white font-mono font-bold shadow-[0_0_30px_rgba(52,211,153,0.4)]">
                  &lt;DEV_2/&gt;
                </div>
                <span className="text-[10px] font-mono text-emerald-400 tracking-wider">
                  FOUNDER B
                </span>
              </div>
            </div>

            <div className="mt-8 text-xs font-mono uppercase tracking-[0.25em] text-emerald-300 font-bold">
              &quot;Gas Bikin Startup Berdua, Modal Skill!&quot;
            </div>
          </div>
        )}

        {/* SCENE 2: Ignition of Startup & Monogram Fusion */}
        {phase === 2 && (
          <div className="flex flex-col items-center animate-fade-in">
            {/* Pulsing Energy Core */}
            <div className="relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 text-white scale-110 drop-shadow-[0_0_40px_rgba(82,109,155,0.9)] animate-bounce">
                <KadaekMonogram className="w-full h-full text-white" />
              </div>

              {/* Rotating Geometric Aura */}
              <div className="absolute -inset-6 rounded-full border border-dashed border-[#526D9B]/50 animate-spin -z-10" />
              <div className="absolute -inset-10 rounded-full border border-emerald-400/20 -z-10 animate-ping opacity-30" />
            </div>

            <div className="mt-8 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-[10px] font-mono text-emerald-300 uppercase tracking-widest font-bold mb-2">
                100% MODAL SKILL • NO INVESTOR • NO ORDAL
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-black text-white tracking-wider uppercase">
                STARTUP KADAEK LAHIR
              </h2>
            </div>
          </div>
        )}

        {/* SCENE 3: Wealth & Ready to Conquer */}
        {phase === 3 && (
          <div className="flex flex-col items-center animate-fade-in scale-105 transition-transform duration-500">
            {/* Glowing Golden & Navy Monogram */}
            <div className="w-28 h-28 drop-shadow-[0_0_50px_rgba(255,255,255,0.9)]">
              <KadaekMonogram className="w-full h-full text-white" />
            </div>

            <div className="mt-8 text-center">
              <span className="text-[11px] font-mono text-emerald-400 tracking-[0.3em] uppercase font-bold">
                ● STATUS: SIAP KAYA • HAYOLO
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-black tracking-widest text-white uppercase mt-1">
                KADAEK IS ONLINE.
              </h1>
            </div>
          </div>
        )}
      </div>

      {/* ── Bottom Bar: Clean Progress ── */}
      <div className="w-full max-w-md mx-auto">
        <div className="flex items-center justify-between text-xs font-mono text-[#526D9B] mb-2">
          <span>PROGRESS</span>
          <span className="text-white font-semibold tabular-nums">{percent}%</span>
        </div>

        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#526D9B] via-emerald-400 to-white transition-all duration-75 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
