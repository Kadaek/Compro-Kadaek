"use client";

import { useEffect, useState } from "react";
import { KadaekBrand, KadaekMonogram } from "@/components/KadaekLogo";

export default function Preloader() {
  // Stages:
  // 0: 0.0s - 1.0s — THE STRUGGLE
  // 1: 1.0s - 2.2s — THE REALIZATION
  // 2: 2.2s - 3.5s — SCREW IT, LET'S BUILD
  // 3: 3.5s - 4.5s — THE PAYOFF
  // 4: 4.5s - 5.0s — KADAEK REVEAL
  const [stage, setStage] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [isDone, setIsDone] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Respect reduced-motion preferences
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        setIsDone(true);
        setShouldRender(false);
        return;
      }
    }

    // Storyboard Timeline (Total 5.0 seconds maximum)
    const t1 = setTimeout(() => setStage(1), 1000); // 1.0s
    const t2 = setTimeout(() => setStage(2), 2200); // 2.2s
    const t3 = setTimeout(() => setStage(3), 3500); // 3.5s
    const t4 = setTimeout(() => setStage(4), 4500); // 4.5s
    const tEnd = setTimeout(() => {
      setIsDone(true);
      setTimeout(() => setShouldRender(false), 600);
    }, 5000); // 5.0s max

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(tEnd);
    };
  }, []);

  const handleSkip = () => {
    setIsDone(true);
    setTimeout(() => setShouldRender(false), 500);
  };

  if (!shouldRender) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-[99999] bg-[#FFFFFF] text-[#101C2C] flex flex-col justify-between p-6 sm:p-10 select-none transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isDone ? "opacity-0 pointer-events-none scale-[1.02]" : "opacity-100"
      }`}
    >
      {/* ── TOP BAR: Phase Label + Skip ── */}
      <div className="flex items-center justify-between text-xs font-mono text-[#526D9B]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#101C2C] animate-pulse" />
          <span className="tracking-[0.18em] uppercase text-[11px] font-medium">
            {stage === 0 && "01 / THE STRUGGLE"}
            {stage === 1 && "02 / THE REALIZATION"}
            {stage === 2 && "03 / SCREW IT, LET'S BUILD"}
            {stage === 3 && "04 / THE PAYOFF"}
            {stage === 4 && "05 / KADAEK"}
          </span>
        </div>

        <button
          onClick={handleSkip}
          className="text-[11px] font-mono tracking-wider uppercase text-[#526D9B] hover:text-[#101C2C] px-3 py-1 rounded-full border border-[#101C2C]/10 bg-[#E9EDF2] hover:bg-[#101C2C] hover:text-white transition-all cursor-pointer"
        >
          SKIP ↗
        </button>
      </div>

      {/* ── MAIN STAGE: Editorial Character Illustration ── */}
      <div className="my-auto flex flex-col items-center justify-center max-w-xl mx-auto w-full">
        {/* Stage 0 to 3: Character Vignette */}
        {stage < 4 && (
          <div className="w-full flex flex-col items-center">
            {/* SVG Editorial Illustration (Consistent Characters & Desk) */}
            <div className="w-72 sm:w-96 aspect-[16/10] relative">
              <svg
                viewBox="0 0 400 250"
                className="w-full h-full text-[#101C2C]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* ── Desk Surface ── */}
                <rect x="50" y="175" width="300" height="8" rx="4" fill="#101C2C" />
                <rect x="70" y="183" width="8" height="55" rx="3" fill="#E9EDF2" stroke="#101C2C" strokeWidth="2" />
                <rect x="322" y="183" width="8" height="55" rx="3" fill="#E9EDF2" stroke="#101C2C" strokeWidth="2" />

                {/* Coffee Mug on Desk */}
                <rect x="75" y="155" width="14" height="20" rx="3" fill="#E9EDF2" stroke="#101C2C" strokeWidth="2" />
                <path d="M89 160 C94 160 94 170 89 170" stroke="#101C2C" strokeWidth="2" fill="none" />
                {/* Steam */}
                <path d="M82 148 Q84 142 82 136" stroke="#526D9B" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />

                {/* ── Center Laptop ── */}
                {/* Base */}
                <rect x="170" y="170" width="60" height="5" rx="2" fill="#101C2C" />
                {/* Screen Shell */}
                <rect x="175" y="112" width="50" height="58" rx="4" fill="#101C2C" />
                {/* Screen Display */}
                <rect
                  x="178"
                  y="115"
                  width="44"
                  height="52"
                  rx="2"
                  fill={stage === 3 ? "#101C2C" : "#E9EDF2"}
                  className="transition-colors duration-300"
                />

                {/* Laptop Screen Content Based on Stage */}
                {stage === 0 && (
                  <g className="animate-pulse">
                    {/* Bug / Red Error mark */}
                    <circle cx="200" cy="136" r="8" fill="#F43F5E" />
                    <text x="200" y="140" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">!</text>
                    <rect x="184" y="150" width="32" height="3" rx="1.5" fill="#526D9B" opacity="0.5" />
                  </g>
                )}

                {stage === 1 && (
                  <g>
                    {/* Still Error, but static */}
                    <circle cx="200" cy="136" r="7" fill="#F43F5E" opacity="0.8" />
                    <text x="200" y="140" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">!</text>
                    <rect x="186" y="150" width="28" height="2.5" rx="1" fill="#526D9B" opacity="0.4" />
                  </g>
                )}

                {stage === 2 && (
                  <g>
                    {/* Assembling modules / Code streams */}
                    <rect x="183" y="122" width="16" height="6" rx="1.5" fill="#526D9B" />
                    <rect x="203" y="122" width="14" height="6" rx="1.5" fill="#101C2C" />
                    <rect x="183" y="132" width="34" height="6" rx="1.5" fill="#526D9B" opacity="0.8" />
                    <rect x="183" y="142" width="22" height="6" rx="1.5" fill="#101C2C" />
                    <rect x="183" y="152" width="34" height="4" rx="1" fill="#101C2C" opacity="0.3" />
                  </g>
                )}

                {stage === 3 && (
                  <g>
                    {/* Success glow / Assembled app */}
                    <rect x="183" y="122" width="34" height="38" rx="2" fill="#E9EDF2" />
                    <circle cx="200" cy="138" r="8" fill="#101C2C" />
                    {/* Checkmark */}
                    <path d="M196 138 L199 141 L205 135" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <rect x="188" y="152" width="24" height="2" rx="1" fill="#526D9B" />
                  </g>
                )}

                {/* ── LEFT CHARACTER (Dev 1 — Expressive / Frustrated to Builder) ── */}
                <g className="transition-all duration-500">
                  {/* Body / Torso */}
                  <path
                    d={
                      stage === 0
                        ? "M110 175 L120 120 L150 125 L145 175 Z" // Slumped
                        : stage === 1
                        ? "M100 175 L112 118 L142 120 L140 175 Z" // Leaning back
                        : "M115 175 L125 118 L155 120 L150 175 Z" // Upright & coding
                    }
                    fill="#526D9B"
                  />

                  {/* Head */}
                  <circle
                    cx={stage === 0 ? "138" : stage === 1 ? "124" : "138"}
                    cy={stage === 0 ? "105" : stage === 1 ? "98" : "96"}
                    r="15"
                    fill="#101C2C"
                  />

                  {/* Face Profile Details */}
                  {stage === 0 && (
                    // Facepalm / Slumped in hands
                    <g>
                      <path d="M142 108 L152 118 L148 135" stroke="#101C2C" strokeWidth="4" strokeLinecap="round" fill="none" />
                      {/* Frustration sweat / line */}
                      <path d="M152 98 Q155 94 153 90" stroke="#526D9B" strokeWidth="2" strokeLinecap="round" fill="none" />
                    </g>
                  )}

                  {stage === 1 && (
                    // Leaning back, wide eyes looking at Dev 2
                    <g>
                      <circle cx="131" cy="98" r="2.5" fill="#FFFFFF" />
                      <circle cx="132" cy="98" r="1.2" fill="#101C2C" />
                      {/* Curious open mouth */}
                      <ellipse cx="132" cy="105" rx="2" ry="1.5" fill="#FFFFFF" />
                      {/* Arm leaning on chair */}
                      <path d="M112 135 L95 155 L95 175" stroke="#101C2C" strokeWidth="4" strokeLinecap="round" fill="none" />
                    </g>
                  )}

                  {(stage === 2 || stage === 3) && (
                    // Typing furiously / Focused & proud
                    <g>
                      <circle cx="145" cy="96" r="2" fill="#FFFFFF" />
                      <circle cx="146" cy="96" r="1" fill="#101C2C" />
                      {/* Arm reaching forward to keyboard */}
                      <path d="M140 135 L168 152 L180 168" stroke="#101C2C" strokeWidth="4" strokeLinecap="round" fill="none" />
                    </g>
                  )}
                </g>

                {/* ── RIGHT CHARACTER (Dev 2 — Calm typer, Knowing side-eye) ── */}
                <g className="transition-all duration-500">
                  {/* Body / Torso */}
                  <path d="M255 175 L250 118 L280 116 L290 175 Z" fill="#E9EDF2" stroke="#101C2C" strokeWidth="3" />

                  {/* Head */}
                  <circle cx="264" cy="95" r="15" fill="#101C2C" />

                  {/* Face details */}
                  {stage === 0 && (
                    // Calm, focused typing
                    <g>
                      <line x1="255" y1="96" x2="259" y2="96" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                      {/* Arm to keyboard */}
                      <path d="M260 132 L238 150 L225 168" stroke="#101C2C" strokeWidth="4" strokeLinecap="round" fill="none" />
                    </g>
                  )}

                  {stage === 1 && (
                    // Knowing side-eye smirk toward Dev 1
                    <g>
                      {/* Eye looking left toward friend */}
                      <ellipse cx="256" cy="95" rx="3" ry="2" fill="#FFFFFF" />
                      <circle cx="254.5" cy="95" r="1.5" fill="#101C2C" />
                      {/* Subtle smirk */}
                      <path d="M254 102 Q258 103 260 100" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                      {/* Arm poised */}
                      <path d="M260 132 L245 152 L230 166" stroke="#101C2C" strokeWidth="4" strokeLinecap="round" fill="none" />
                    </g>
                  )}

                  {stage === 2 && (
                    // Also typing fast, partner in crime!
                    <g>
                      <circle cx="256" cy="95" r="2" fill="#FFFFFF" />
                      <circle cx="255" cy="95" r="1" fill="#101C2C" />
                      {/* Arm coding alongside */}
                      <path d="M258 132 L235 150 L220 168" stroke="#101C2C" strokeWidth="4" strokeLinecap="round" fill="none" />
                    </g>
                  )}

                  {stage === 3 && (
                    // Satisfied nod, confident grin
                    <g>
                      <circle cx="256" cy="94" r="2" fill="#FFFFFF" />
                      <circle cx="255" cy="94" r="1" fill="#101C2C" />
                      <path d="M253 100 Q258 104 262 101" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                      {/* Thumbs up or leaning back */}
                      <path d="M265 132 L280 148 L285 165" stroke="#101C2C" strokeWidth="4" strokeLinecap="round" fill="none" />
                    </g>
                  )}
                </g>
              </svg>
            </div>

            {/* Narrative Micro-Captions */}
            <div className="mt-6 text-center h-12 flex flex-col items-center justify-center">
              {stage === 0 && (
                <p className="font-sans text-sm sm:text-base text-[#526D9B] font-medium animate-fade-in">
                  Bug numpuk. Gaji UMR. Lembur weekend tanpa ujung.
                </p>
              )}
              {stage === 1 && (
                <p className="font-heading text-sm sm:text-base text-[#101C2C] font-bold animate-fade-in">
                  &ldquo;Lu mikir apa yang lagi gua pikirin?&rdquo;
                </p>
              )}
              {stage === 2 && (
                <p className="font-heading text-sm sm:text-base text-[#101C2C] font-extrabold animate-fade-in">
                  Screw it. Modal skill dan nekat—kita bangun startup sendiri.
                </p>
              )}
              {stage === 3 && (
                <p className="font-sans text-sm sm:text-base text-emerald-600 font-semibold animate-fade-in flex items-center gap-2">
                  <span>●</span> Build passed. Zero errors. Ready to conquer.
                </p>
              )}
            </div>
          </div>
        )}

        {/* Stage 4: Official KADAEK Wordmark & Tagline Payoff */}
        {stage === 4 && (
          <div className="flex flex-col items-center text-center animate-fade-in py-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 drop-shadow-sm">
              <KadaekMonogram className="w-full h-full text-[#101C2C]" />
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl font-black tracking-[0.14em] text-[#101C2C] uppercase leading-none">
              KADAEK
            </h1>

            <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-[#526D9B] font-bold mt-4">
              TWO DEVS. ZERO FUNDING. BIG DREAMS.
            </p>
          </div>
        )}
      </div>

      {/* ── BOTTOM PROGRESS: Minimal 5-Second Indicator ── */}
      <div className="max-w-md w-full mx-auto">
        <div className="w-full h-1 bg-[#E9EDF2] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#101C2C] transition-all duration-300 ease-linear rounded-full"
            style={{ width: `${((stage + 1) / 5) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
