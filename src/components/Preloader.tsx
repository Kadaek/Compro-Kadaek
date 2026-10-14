"use client";

import { useEffect, useState } from "react";
import { KadaekMonogram } from "@/components/KadaekLogo";

export default function Preloader() {
  // 5-second cinematic storyboard:
  // Stage 0: 0.0s - 1.1s — LATE NIGHT STRUGGLE (ambient glow, tired dev, persistent red bug)
  // Stage 1: 1.1s - 2.2s — THE GLANCE (screen light shifts, knowing side-eye look)
  // Stage 2: 2.2s - 3.5s — CODE SYNC (cool cyan light cone, furious dual typing, UI building)
  // Stage 3: 3.5s - 4.4s — THE BREAKTHROUGH (bright payoff, proud mutual nod)
  // Stage 4: 4.4s - 5.0s — KADAEK REVEAL (dramatic architectural transition)
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
      className={`fixed inset-0 z-[99999] bg-[#0E1724] text-[#FFFFFF] flex flex-col justify-between p-6 sm:p-12 select-none transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isDone ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      {/* ── Ambient Room Backlight that shifts dynamically ── */}
      <div
        className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
          stage === 0
            ? "bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.12)_0%,transparent_70%)]"
            : stage === 1
            ? "bg-[radial-gradient(ellipse_at_center,rgba(82,109,155,0.15)_0%,transparent_70%)]"
            : stage === 2
            ? "bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.16)_0%,transparent_70%)]"
            : "bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.22)_0%,transparent_70%)]"
        }`}
      />

      {/* ── Top Header Bar ── */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#526D9B]">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="tracking-[0.25em] uppercase text-[11px] font-semibold text-zinc-300">
            02:41 AM • JAKARTA
          </span>
        </div>

        <button
          onClick={handleSkip}
          className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 hover:text-white px-3.5 py-1.5 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
        >
          SKIP ↗
        </button>
      </div>

      {/* ── CENTERPIECE: Realistic Cinematic Illustration ── */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center max-w-2xl mx-auto w-full">
        {stage < 4 && (
          <div className="w-full flex flex-col items-center">
            {/* Cinematic Desk Vignette */}
            <div className="w-full max-w-xl aspect-[16/10] relative">
              <svg
                viewBox="0 0 600 340"
                className="w-full h-full drop-shadow-2xl"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Laptop Screen Light Cone onto Desk */}
                  <linearGradient id="screenGlow" x1="300" y1="180" x2="300" y2="280" gradientUnits="userSpaceOnUse">
                    <stop
                      offset="0%"
                      stopColor={stage === 0 ? "#F43F5E" : stage === 2 ? "#38BDF8" : stage === 3 ? "#FFFFFF" : "#526D9B"}
                      stopOpacity="0.45"
                    />
                    <stop offset="100%" stopColor="#0E1724" stopOpacity="0" />
                  </linearGradient>

                  {/* Keyboard backlight */}
                  <linearGradient id="kbGlow" x1="250" y1="240" x2="350" y2="240" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                {/* ── Screen Light Cast on Desk Surface ── */}
                <polygon points="255,185 345,185 410,270 190,270" fill="url(#screenGlow)" />

                {/* ── Realistic Studio Desk with Chamfered Edge ── */}
                <rect x="50" y="248" width="500" height="10" rx="3" fill="#1A2433" stroke="#2B384E" strokeWidth="1" />
                <line x1="50" y1="258" x2="550" y2="258" stroke="#0E1724" strokeWidth="2" />
                {/* Desk Legs */}
                <rect x="80" y="258" width="8" height="80" fill="#131B28" />
                <rect x="512" y="258" width="8" height="80" fill="#131B28" />

                {/* Coffee Mug & Translucent Steam */}
                <rect x="92" y="222" width="18" height="26" rx="4" fill="#243044" stroke="#3A4B66" strokeWidth="1.5" />
                <path d="M110 228 C116 228 116 242 110 242" stroke="#3A4B66" strokeWidth="1.5" fill="none" />
                <path
                  d="M99 214 Q103 206 99 198"
                  stroke="#526D9B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.45"
                  className="animate-pulse"
                />

                {/* Smartphone with glowing notification on desk */}
                <rect x="475" y="238" width="28" height="12" rx="2" fill="#151E2C" stroke="#2D3B50" strokeWidth="1" />
                <circle cx="482" cy="244" r="1.5" fill="#38BDF8" className="animate-ping opacity-60" />

                {/* ── Realistic MacBook Pro (Center) ── */}
                {/* Lower Unibody & Trackpad */}
                <rect x="238" y="242" width="124" height="6" rx="2" fill="#2B3648" stroke="#414F66" strokeWidth="0.8" />
                <rect x="282" y="242" width="36" height="3" rx="1" fill="#1E2736" />
                {/* Keyboard Deck Backlight */}
                <rect x="246" y="236" width="108" height="6" rx="1" fill="url(#kbGlow)" />

                {/* Display Shell & Ultra-thin Bezel */}
                <rect x="246" y="152" width="108" height="86" rx="5" fill="#0A0F17" stroke="#3D4B63" strokeWidth="1.2" />
                {/* Display Screen */}
                <rect
                  x="251"
                  y="157"
                  width="98"
                  height="76"
                  rx="3"
                  fill={stage === 3 ? "#0D1B2A" : "#0A0E17"}
                />

                {/* Camera Notch */}
                <rect x="296" y="157" width="8" height="3" rx="1" fill="#0A0F17" />
                <circle cx="300" cy="158.5" r="0.8" fill="#1E293B" />

                {/* Laptop Screen Content per Stage */}
                {stage === 0 && (
                  <g className="animate-pulse">
                    <circle cx="300" cy="190" r="11" fill="#F43F5E" />
                    <line x1="300" y1="184" x2="300" y2="191" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="300" cy="195" r="1.2" fill="#FFFFFF" />
                    <rect x="265" y="210" width="70" height="3" rx="1.5" fill="#F43F5E" opacity="0.6" />
                    <rect x="275" y="218" width="50" height="2" rx="1" fill="#526D9B" opacity="0.4" />
                  </g>
                )}

                {stage === 1 && (
                  <g>
                    <circle cx="300" cy="190" r="8" fill="#F43F5E" opacity="0.8" />
                    <line x1="300" y1="185" x2="300" y2="191" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
                    <circle cx="300" cy="194.5" r="1" fill="#FFFFFF" />
                    <rect x="270" y="210" width="60" height="2.5" rx="1.2" fill="#526D9B" opacity="0.4" />
                  </g>
                )}

                {stage === 2 && (
                  <g>
                    {/* Live IDE Code Assembly */}
                    <rect x="258" y="165" width="34" height="4" rx="1" fill="#38BDF8" />
                    <rect x="296" y="165" width="22" height="4" rx="1" fill="#818CF8" />
                    <rect x="262" y="174" width="70" height="3.5" rx="1" fill="#94A3B8" opacity="0.7" />
                    <rect x="262" y="183" width="52" height="3.5" rx="1" fill="#38BDF8" opacity="0.85" />
                    <rect x="262" y="192" width="38" height="3.5" rx="1" fill="#34D399" opacity="0.85" />
                    <rect x="258" y="204" width="84" height="20" rx="3" fill="#141E2E" stroke="#38BDF8" strokeWidth="0.8" />
                    <rect x="264" y="212" width="30" height="4" rx="1" fill="#38BDF8" />
                  </g>
                )}

                {stage === 3 && (
                  <g>
                    {/* Triumphant Build Passed Screen */}
                    <rect x="255" y="161" width="90" height="68" rx="2" fill="#0D1E30" />
                    <circle cx="300" cy="190" r="13" fill="#10B981" />
                    <path d="M294 190 L298 194 L306 186" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <rect x="270" y="212" width="60" height="4" rx="2" fill="#34D399" opacity="0.8" />
                    <rect x="280" y="220" width="40" height="2.5" rx="1" fill="#94A3B8" opacity="0.5" />
                  </g>
                )}

                {/* ── LEFT DEVELOPER (Realistic Anatomy, Hoodie & Headphones) ── */}
                <g className="transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  {/* Hoodie Shoulders & Body */}
                  <path
                    d={
                      stage === 0
                        ? "M145 248 L158 172 C164 160 206 162 214 174 L220 248 Z" // Exhausted slouch
                        : stage === 1
                        ? "M130 248 L146 168 C154 158 196 158 204 168 L208 248 Z" // Leaning back
                        : "M150 248 L160 166 C168 158 210 158 218 168 L224 248 Z" // Upright & coding
                    }
                    fill="#1F2C3F"
                    stroke="#324560"
                    strokeWidth="1.8"
                  />

                  {/* Over-ear Headphones Resting Around Neck */}
                  <path d="M174 168 C186 178 196 178 206 168" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.85" />
                  <rect x="170" y="164" width="7" height="10" rx="3.5" fill="#38BDF8" />
                  <rect x="203" y="164" width="7" height="10" rx="3.5" fill="#38BDF8" />

                  {/* Head & Natural Profile */}
                  <circle
                    cx={stage === 0 ? "192" : stage === 1 ? "172" : "188"}
                    cy={stage === 0 ? "134" : stage === 1 ? "124" : "120"}
                    r="22"
                    fill="#182333"
                    stroke="#324560"
                    strokeWidth="1.8"
                  />

                  {/* Wavy Modern Undercut Hair */}
                  <path
                    d={
                      stage === 0
                        ? "M170 128 C172 110 200 106 210 118 C215 125 212 135 208 140 C206 124 186 120 172 131 Z"
                        : stage === 1
                        ? "M150 118 C152 100 180 96 190 108 C195 115 192 125 188 130 C186 114 166 110 152 121 Z"
                        : "M166 114 C168 96 196 92 206 104 C211 111 208 121 204 126 C202 110 182 106 168 117 Z"
                    }
                    fill="#0A0E17"
                  />

                  {/* Facial Expression Details */}
                  {stage === 0 && (
                    <g>
                      {/* Heavy stressed eyes */}
                      <line x1="194" y1="131" x2="201" y2="135" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />
                      <line x1="195" y1="143" x2="202" y2="140" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />
                      {/* Arm supporting face */}
                      <path d="M185 195 L202 168 L200 144" stroke="#1F2C3F" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      <path d="M185 195 L202 168 L200 144" stroke="#324560" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </g>
                  )}

                  {stage === 1 && (
                    <g>
                      {/* Eyebrow arched in revelation */}
                      <path d="M176 118 Q182 114 188 119" stroke="#94A3B8" strokeWidth="1.6" fill="none" />
                      {/* Wide-awake eye glancing right at Dev 2 */}
                      <ellipse cx="182" cy="125" rx="3" ry="3.5" fill="#FFFFFF" />
                      <circle cx="183.5" cy="124.5" r="1.6" fill="#0A0E17" />
                      {/* Open realization smirk */}
                      <path d="M180 137 Q185 141 189 137" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                      {/* Arm hanging relaxed on chair */}
                      <path d="M158 190 L138 215 L132 242" stroke="#1F2C3F" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                    </g>
                  )}

                  {stage >= 2 && (
                    <g>
                      {/* Laser focused on screen */}
                      <line x1="190" y1="120" x2="197" y2="120" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="194" cy="126" r="2" fill="#38BDF8" />
                      {/* Confident grin */}
                      <path
                        d={stage === 3 ? "M190 137 Q195 142 200 137" : "M190 137 L198 137"}
                        stroke="#94A3B8"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        fill="none"
                      />
                      {/* Hands typing on laptop deck */}
                      <path d="M190 190 L228 212 L246 238" stroke="#1F2C3F" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      <path d="M190 190 L228 212 L246 238" stroke="#324560" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </g>
                  )}
                </g>

                {/* ── RIGHT DEVELOPER (Realistic Glasses & Comedic Side-Eye) ── */}
                <g className="transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  {/* Crewneck Sweater */}
                  <path d="M380 248 L386 166 C394 158 436 158 444 166 L450 248 Z" fill="#243348" stroke="#3D5373" strokeWidth="1.8" />
                  <path d="M410 165 Q418 174 426 165" stroke="#3D5373" strokeWidth="1.5" fill="none" />

                  {/* Head */}
                  <circle cx="418" cy="120" r="22" fill="#182333" stroke="#324560" strokeWidth="1.8" />

                  {/* Clean Side-Part Hair */}
                  <path d="M396 120 C396 98 426 92 438 100 C444 108 440 120 434 126 C430 108 406 106 396 120 Z" fill="#0A0E17" />

                  {/* Metal-Frame Round Glasses with Screen Light Glint */}
                  <circle cx="408" cy="124" r="6" stroke="#94A3B8" strokeWidth="1.6" fill="none" />
                  <circle cx="424" cy="124" r="6" stroke="#94A3B8" strokeWidth="1.6" fill="none" />
                  <line x1="414" y1="124" x2="418" y2="124" stroke="#94A3B8" strokeWidth="1.6" />

                  {/* Glass Reflection Glint */}
                  <path d="M405 120 L407 122" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />
                  <path d="M421 120 L423 122" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />

                  {/* Facial Expression per Stage */}
                  {stage === 0 && (
                    <g>
                      <circle cx="408" cy="124" r="1.8" fill="#94A3B8" />
                      <circle cx="424" cy="124" r="1.8" fill="#94A3B8" />
                      <line x1="411" y1="136" x2="421" y2="136" stroke="#94A3B8" strokeWidth="1.6" strokeLinecap="round" />
                      {/* Typing calmly */}
                      <path d="M400 188 L370 214 L350 238" stroke="#243348" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      <path d="M400 188 L370 214 L350 238" stroke="#3D5373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </g>
                  )}

                  {stage === 1 && (
                    // The Comedic Side-Eye Masterpiece
                    <g>
                      {/* Looking hard left at Dev 1 */}
                      <circle cx="404" cy="124" r="2.2" fill="#38BDF8" />
                      <circle cx="420" cy="124" r="2.2" fill="#38BDF8" />
                      {/* Eyebrow cocked */}
                      <path d="M403 115 Q409 111 414 116" stroke="#94A3B8" strokeWidth="1.6" fill="none" />
                      {/* Knowing smirk */}
                      <path d="M409 136 Q416 139 424 134" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" fill="none" />
                      {/* Hands paused mid-air */}
                      <path d="M400 188 L378 208 L360 220" stroke="#243348" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                    </g>
                  )}

                  {stage >= 2 && (
                    <g>
                      <circle cx="407" cy="124" r="2" fill="#38BDF8" />
                      <circle cx="423" cy="124" r="2" fill="#38BDF8" />
                      <path
                        d={stage === 3 ? "M409 135 Q416 140 423 135" : "M410 136 L422 136"}
                        stroke="#94A3B8"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        fill="none"
                      />
                      {/* Dual coding synergy */}
                      <path d="M398 188 L368 214 L352 238" stroke="#243348" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      <path d="M398 188 L368 214 L352 238" stroke="#3D5373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </g>
                  )}
                </g>
              </svg>
            </div>

            {/* Micro-Narrative Caption with High Craft */}
            <div className="mt-8 text-center h-12 flex flex-col items-center justify-center">
              {stage === 0 && (
                <p className="font-sans text-sm sm:text-base text-zinc-400 font-normal">
                  Jam 02:40 subuh. Bug tak kunjung kelar. Gaji tak kunjung naik.
                </p>
              )}
              {stage === 1 && (
                <p className="font-heading text-base sm:text-lg text-white font-bold">
                  Sebuah lirikan penuh arti. &ldquo;Dahlah bro, kita bikin startup sendiri.&rdquo;
                </p>
              )}
              {stage === 2 && (
                <p className="font-heading text-base sm:text-lg text-sky-300 font-extrabold">
                  Modal skill, kopi hitam, dan nekat. Arsitektur dibangun dari nol.
                </p>
              )}
              {stage === 3 && (
                <p className="font-sans text-sm sm:text-base text-emerald-400 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Build passed. Presisi tercapai. Siap mengubah industri.
                </p>
              )}
            </div>
          </div>
        )}

        {/* Stage 4: Triumphant KADAEK Reveal */}
        {stage === 4 && (
          <div className="flex flex-col items-center text-center py-6 animate-fade-in scale-105 transition-transform duration-500">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mb-6 drop-shadow-[0_0_40px_rgba(56,189,248,0.5)]">
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
      <div className="relative z-10 max-w-md w-full mx-auto">
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#526D9B] via-sky-400 to-white transition-all duration-300 ease-linear rounded-full"
            style={{ width: `${((stage + 1) / 5) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
