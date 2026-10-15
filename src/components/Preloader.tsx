"use client";

import { useEffect, useState } from "react";
import { KadaekMonogram } from "@/components/KadaekLogo";

export default function Preloader() {
  // 5-second choreographed cinematic narrative:
  // Stage 0 (0.0s - 1.1s): The Struggle — Late night typing, red bug flashes
  // Stage 1 (1.1s - 2.2s): The Realization — Mutual glance, side-eye smirk
  // Stage 2 (2.2s - 3.5s): The Sync — Dual typing motion, code pouring down
  // Stage 3 (3.5s - 4.4s): The Payoff — Green success wave, mutual nod
  // Stage 4 (4.4s - 5.0s): KADAEK Wordmark reveal & seamless curtain drop
  const [stage, setStage] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [isDone, setIsDone] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        setIsDone(true);
        setShouldRender(false);
        return;
      }
    }

    const t1 = setTimeout(() => setStage(1), 1100);
    const t2 = setTimeout(() => setStage(2), 2200);
    const t3 = setTimeout(() => setStage(3), 3500);
    const t4 = setTimeout(() => setStage(4), 4400);
    const tEnd = setTimeout(() => {
      setIsDone(true);
      setTimeout(() => setShouldRender(false), 700);
    }, 5000);

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
    setTimeout(() => setShouldRender(false), 400);
  };

  if (!shouldRender) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-[99999] bg-[#0A0E17] text-[#FFFFFF] flex flex-col justify-between p-6 sm:p-10 select-none transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isDone ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      {/* ── Dynamic Ambient Screen Glow ── */}
      <div
        className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
          stage === 0
            ? "bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.14)_0%,transparent_70%)]"
            : stage === 1
            ? "bg-[radial-gradient(ellipse_at_center,rgba(82,109,155,0.18)_0%,transparent_70%)]"
            : stage === 2
            ? "bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.20)_0%,transparent_70%)]"
            : "bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.22)_0%,transparent_70%)]"
        }`}
      />

      {/* ── Top Bar ── */}
      <div className="relative z-20 flex items-center justify-between text-xs font-mono text-[#526D9B]">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="tracking-[0.2em] uppercase text-[11px] font-semibold text-zinc-300">
            02:41 AM • JAKARTA INDEPENDENT STUDIO
          </span>
        </div>

        <button
          onClick={handleSkip}
          className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 hover:text-white px-3.5 py-1.5 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all cursor-pointer backdrop-blur-md"
        >
          SKIP ↗
        </button>
      </div>

      {/* ── CENTER: LIVING CINEMATIC ANIMATION (60 FPS Motion) ── */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center max-w-3xl mx-auto w-full">
        {stage < 4 ? (
          <div className="w-full flex flex-col items-center">
            {/* The Animated SVG Scene */}
            <div className="w-full max-w-xl aspect-[16/9] relative rounded-2xl overflow-hidden border border-white/10 bg-[#070B12] shadow-[0_0_80px_rgba(0,0,0,0.9)] p-4 flex items-center justify-center">
              <svg
                viewBox="0 0 540 300"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Glowing Screen Cone Light on Desk */}
                  <linearGradient id="laptopLight" x1="270" y1="180" x2="270" y2="280" gradientUnits="userSpaceOnUse">
                    <stop
                      offset="0%"
                      stopColor={stage === 0 ? "#F43F5E" : stage === 2 ? "#38BDF8" : stage === 3 ? "#10B981" : "#526D9B"}
                      stopOpacity="0.5"
                    />
                    <stop offset="100%" stopColor="#070B12" stopOpacity="0" />
                  </linearGradient>

                  <linearGradient id="backlight" x1="220" y1="235" x2="320" y2="235" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Desk Surface & Light Cone */}
                <polygon points="230,195 310,195 380,265 160,265" fill="url(#laptopLight)" />
                <rect x="40" y="246" width="460" height="8" rx="2" fill="#151C28" stroke="#253248" strokeWidth="1" />
                <rect x="65" y="254" width="6" height="50" fill="#0F141E" />
                <rect x="469" y="254" width="6" height="50" fill="#0F141E" />

                {/* Coffee Mug with Animated Floating Steam */}
                <rect x="80" y="222" width="16" height="24" rx="3" fill="#1C2638" stroke="#324462" strokeWidth="1.5" />
                <path d="M96 228 C102 228 102 240 96 240" stroke="#324462" strokeWidth="1.5" fill="none" />
                {/* Steam Particles */}
                <g className="opacity-70 animate-pulse">
                  <path d="M86 216 Q90 208 86 200" stroke="#526D9B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  <path d="M92 214 Q88 206 92 196" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                </g>

                {/* ── Sleek MacBook Pro in Center ── */}
                <rect x="216" y="240" width="108" height="6" rx="2" fill="#243044" stroke="#374864" strokeWidth="0.8" />
                <rect x="254" y="240" width="32" height="3" rx="1" fill="#161E2C" />
                <rect x="224" y="235" width="92" height="5" rx="1" fill="url(#backlight)" />

                {/* Display Shell */}
                <rect x="224" y="148" width="92" height="84" rx="4" fill="#070A0F" stroke="#313F58" strokeWidth="1.2" />
                <rect
                  x="228"
                  y="152"
                  width="84"
                  height="76"
                  rx="3"
                  fill={stage === 3 ? "#0A1D1A" : "#06090F"}
                />

                {/* Laptop Camera Notch */}
                <rect x="266" y="152" width="8" height="3" rx="1" fill="#070A0F" />
                <circle cx="270" cy="153.5" r="0.8" fill="#1E293B" />

                {/* Dynamic Screen Content */}
                {stage === 0 && (
                  <g className="animate-pulse">
                    <circle cx="270" cy="186" r="10" fill="#F43F5E" />
                    <line x1="270" y1="180" x2="270" y2="187" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="270" cy="191" r="1.2" fill="#FFFFFF" />
                    {/* Bug error text lines */}
                    <rect x="240" y="204" width="60" height="2.5" rx="1" fill="#F43F5E" opacity="0.7" />
                    <rect x="248" y="211" width="44" height="2" rx="1" fill="#526D9B" opacity="0.5" />
                  </g>
                )}

                {stage === 1 && (
                  <g>
                    <circle cx="270" cy="186" r="8" fill="#F43F5E" opacity="0.75" />
                    <line x1="270" y1="181" x2="270" y2="187" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
                    <circle cx="270" cy="190.5" r="1" fill="#FFFFFF" />
                    <rect x="244" y="204" width="52" height="2.5" rx="1" fill="#526D9B" opacity="0.4" />
                  </g>
                )}

                {stage === 2 && (
                  <g>
                    {/* Animated Streaming Code Lines */}
                    <rect x="236" y="160" width="30" height="3.5" rx="1" fill="#38BDF8" className="animate-pulse" />
                    <rect x="270" y="160" width="22" height="3.5" rx="1" fill="#818CF8" />
                    <rect x="240" y="168" width="60" height="3" rx="1" fill="#94A3B8" opacity="0.8" />
                    <rect x="240" y="176" width="46" height="3" rx="1" fill="#38BDF8" />
                    <rect x="240" y="184" width="34" height="3" rx="1" fill="#34D399" />
                    <rect x="240" y="192" width="54" height="3" rx="1" fill="#94A3B8" opacity="0.6" />
                    {/* Blinking CLI Box */}
                    <rect x="236" y="202" width="68" height="18" rx="2" fill="#0C1420" stroke="#38BDF8" strokeWidth="0.8" />
                    <rect x="242" y="209" width="26" height="3.5" rx="1" fill="#38BDF8" />
                  </g>
                )}

                {stage === 3 && (
                  <g>
                    {/* Green Checkmark Success Payoff */}
                    <rect x="232" y="156" width="76" height="68" rx="2" fill="#091815" />
                    <circle cx="270" cy="186" r="12" fill="#10B981" />
                    <path d="M264 186 L268 190 L276 182" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <rect x="244" y="206" width="52" height="3.5" rx="1.5" fill="#34D399" />
                  </g>
                )}

                {/* ── LEFT CHARACTER (Dev 1 — Hoodie, Animated Hands & Eyes) ── */}
                <g className="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  {/* Body & Hoodie */}
                  <path
                    d={
                      stage === 0
                        ? "M130 246 L142 170 C148 158 190 160 198 172 L204 246 Z"
                        : stage === 1
                        ? "M118 246 L132 166 C140 156 182 156 190 166 L194 246 Z"
                        : "M135 246 L144 164 C152 156 194 156 202 166 L208 246 Z"
                    }
                    fill="#1A2535"
                    stroke="#2E3F58"
                    strokeWidth="1.8"
                  />

                  {/* Headphones around neck */}
                  <path d="M158 166 C170 176 180 176 190 166" stroke="#38BDF8" strokeWidth="2.8" strokeLinecap="round" fill="none" opacity="0.85" />
                  <rect x="154" y="162" width="6" height="9" rx="3" fill="#38BDF8" />
                  <rect x="187" y="162" width="6" height="9" rx="3" fill="#38BDF8" />

                  {/* Head & Hair */}
                  <circle
                    cx={stage === 0 ? "174" : stage === 1 ? "156" : "170"}
                    cy={stage === 0 ? "130" : stage === 1 ? "120" : "118"}
                    r="20"
                    fill="#131B27"
                    stroke="#2E3F58"
                    strokeWidth="1.8"
                  />
                  <path
                    d={
                      stage === 0
                        ? "M156 124 C158 106 184 102 194 114 C198 120 196 130 192 135 C190 120 170 116 158 127 Z"
                        : stage === 1
                        ? "M138 114 C140 96 166 92 176 104 C180 110 178 120 174 125 C172 110 152 106 140 117 Z"
                        : "M152 112 C154 94 180 90 190 102 C194 108 192 118 188 123 C186 108 166 104 154 115 Z"
                    }
                    fill="#080C13"
                  />

                  {/* Pose Details */}
                  {stage === 0 && (
                    <g>
                      <line x1="176" y1="128" x2="182" y2="132" stroke="#94A3B8" strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M170 188 L184 162 L182 140" stroke="#1A2535" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      <path d="M170 188 L184 162 L182 140" stroke="#2E3F58" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </g>
                  )}

                  {stage === 1 && (
                    <g>
                      {/* Wide-awake glance right */}
                      <ellipse cx="166" cy="122" rx="2.8" ry="3" fill="#FFFFFF" />
                      <circle cx="167.5" cy="121.5" r="1.5" fill="#080C13" />
                      <path d="M164 133 Q168 136 172 133" stroke="#94A3B8" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                    </g>
                  )}

                  {stage >= 2 && (
                    <g>
                      {/* Furious Animated Typing Arms */}
                      <circle cx="176" cy="122" r="1.8" fill="#38BDF8" />
                      <path
                        d="M172 185 L204 206 L222 232"
                        stroke="#1A2535"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        className={stage === 2 ? "animate-[bounce_0.3s_infinite]" : ""}
                      />
                      <path d="M172 185 L204 206 L222 232" stroke="#2E3F58" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </g>
                  )}
                </g>

                {/* ── RIGHT CHARACTER (Dev 2 — Glasses, Side-Eye Glance, Coffee) ── */}
                <g className="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  {/* Crewneck Sweater */}
                  <path d="M346 246 L352 164 C360 156 402 156 410 164 L416 246 Z" fill="#202D3F" stroke="#364964" strokeWidth="1.8" />

                  {/* Head */}
                  <circle cx="382" cy="118" r="20" fill="#131B27" stroke="#2E3F58" strokeWidth="1.8" />
                  <path d="M362 118 C362 96 392 90 404 98 C408 106 404 116 398 122 C394 104 372 102 362 118 Z" fill="#080C13" />

                  {/* Round Metal Glasses */}
                  <circle cx="372" cy="122" r="5.5" stroke="#94A3B8" strokeWidth="1.5" fill="none" />
                  <circle cx="388" cy="122" r="5.5" stroke="#94A3B8" strokeWidth="1.5" fill="none" />
                  <line x1="377.5" y1="122" x2="382.5" y2="122" stroke="#94A3B8" strokeWidth="1.5" />

                  {/* Poses */}
                  {stage === 0 && (
                    <g>
                      <circle cx="372" cy="122" r="1.6" fill="#94A3B8" />
                      <circle cx="388" cy="122" r="1.6" fill="#94A3B8" />
                      <line x1="375" y1="133" x2="385" y2="133" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M366 185 L338 210 L320 234" stroke="#202D3F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      <path d="M366 185 L338 210 L320 234" stroke="#364964" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </g>
                  )}

                  {stage === 1 && (
                    // The Iconic Side-Eye Smirk (Animated pupils looking hard left)
                    <g>
                      <circle cx="369" cy="122" r="2" fill="#38BDF8" />
                      <circle cx="385" cy="122" r="2" fill="#38BDF8" />
                      <path d="M368 114 Q373 110 378 114" stroke="#94A3B8" strokeWidth="1.5" fill="none" />
                      <path d="M374 132 Q381 136 388 131" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                      {/* Mug raised slightly */}
                      <path d="M364 185 L346 202 L332 214" stroke="#202D3F" strokeWidth="4" strokeLinecap="round" fill="none" />
                    </g>
                  )}

                  {stage >= 2 && (
                    <g>
                      <circle cx="371" cy="122" r="1.8" fill="#38BDF8" />
                      <circle cx="387" cy="122" r="1.8" fill="#38BDF8" />
                      <path
                        d={stage === 3 ? "M373 131 Q380 136 387 131" : "M374 132 L386 132"}
                        stroke="#94A3B8"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        fill="none"
                      />
                      {/* Animated typing arm alongside */}
                      <path
                        d="M364 185 L336 210 L322 232"
                        stroke="#202D3F"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        className={stage === 2 ? "animate-[bounce_0.28s_infinite]" : ""}
                      />
                      <path d="M364 185 L336 210 L322 232" stroke="#364964" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </g>
                  )}
                </g>
              </svg>
            </div>

            {/* Micro-Narrative Subtitles in Sync */}
            <div className="mt-8 text-center h-12 flex flex-col items-center justify-center">
              {stage === 0 && (
                <p className="font-sans text-sm sm:text-base text-zinc-400 font-normal animate-pulse">
                  02:40 AM. Bug tak kunjung beres. Gaji UMR. Lembur weekend tanpa ujung.
                </p>
              )}
              {stage === 1 && (
                <p className="font-heading text-base sm:text-xl text-sky-300 font-bold">
                  Sebuah lirikan penuh arti. &ldquo;Dahlah bro, kita bikin startup berdua.&rdquo;
                </p>
              )}
              {stage === 2 && (
                <p className="font-heading text-base sm:text-xl text-emerald-400 font-extrabold">
                  Modal skill, kopi hitam, dan nekat. Arsitektur dibangun dari nol.
                </p>
              )}
              {stage === 3 && (
                <p className="font-sans text-sm sm:text-base text-white font-semibold flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  Build passed. Presisi tercapai. Two devs. Zero funding. Big dreams.
                </p>
              )}
            </div>
          </div>
        ) : (
          /* Stage 4: Triumphant KADAEK Monogram & Launch Reveal */
          <div className="flex flex-col items-center text-center py-6 animate-fade-in scale-105 transition-transform duration-500">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mb-6 drop-shadow-[0_0_40px_rgba(56,189,248,0.6)]">
              <KadaekMonogram className="w-full h-full text-white" />
            </div>

            <h1 className="font-heading text-5xl sm:text-7xl font-black tracking-[0.16em] text-white uppercase leading-none">
              KADAEK
            </h1>

            <p className="font-mono text-xs sm:text-sm tracking-[0.35em] uppercase text-sky-300 font-bold mt-4">
              TWO DEVS. ZERO FUNDING. BIG DREAMS.
            </p>
          </div>
        )}
      </div>

      {/* ── Bottom Progress Bar ── */}
      <div className="relative z-20 max-w-md w-full mx-auto">
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#526D9B] via-sky-400 to-emerald-400 transition-all duration-300 ease-linear rounded-full"
            style={{ width: `${((stage + 1) / 5) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
