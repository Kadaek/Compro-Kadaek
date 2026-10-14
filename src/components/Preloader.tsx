"use client";

import { useEffect, useState } from "react";
import { KadaekMonogram } from "@/components/KadaekLogo";

export default function Preloader() {
  // 5-second choreographed stages:
  // 0: 0.0s - 1.0s — THE STRUGGLE (exhaustion, endless bugs)
  // 1: 1.0s - 2.2s — THE REALIZATION (eye-contact, knowing smirk)
  // 2: 2.2s - 3.5s — SCREW IT, LET'S BUILD (coding in sync, UI assembling)
  // 3: 3.5s - 4.5s — THE PAYOFF (build passed, mutual nod)
  // 4: 4.5s - 5.0s — KADAEK (clean brand reveal & transition)
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

    const t1 = setTimeout(() => setStage(1), 1050);
    const t2 = setTimeout(() => setStage(2), 2200);
    const t3 = setTimeout(() => setStage(3), 3500);
    const t4 = setTimeout(() => setStage(4), 4450);
    const tEnd = setTimeout(() => {
      setIsDone(true);
      setTimeout(() => setShouldRender(false), 650);
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
    setTimeout(() => setShouldRender(false), 450);
  };

  if (!shouldRender) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-[99999] bg-[#FFFFFF] text-[#101C2C] flex flex-col justify-between p-6 sm:p-12 select-none transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isDone ? "opacity-0 pointer-events-none scale-[1.01]" : "opacity-100"
      }`}
    >
      {/* ── Top Bar: Discreet Status + Skip ── */}
      <div className="flex items-center justify-between text-xs font-mono text-[#526D9B]">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#101C2C] animate-pulse" />
          <span className="tracking-[0.2em] uppercase text-[11px] font-semibold text-[#101C2C]">
            {stage === 0 && "01 / THE STRUGGLE"}
            {stage === 1 && "02 / THE REALIZATION"}
            {stage === 2 && "03 / SCREW IT, LET'S BUILD"}
            {stage === 3 && "04 / THE PAYOFF"}
            {stage === 4 && "05 / KADAEK"}
          </span>
        </div>

        <button
          onClick={handleSkip}
          className="text-[11px] font-mono tracking-wider uppercase text-[#526D9B] hover:text-[#101C2C] px-3.5 py-1 rounded-full border border-[#101C2C]/10 bg-[#E9EDF2] hover:bg-[#101C2C] hover:text-white transition-all cursor-pointer"
        >
          SKIP ↗
        </button>
      </div>

      {/* ── Center Stage: Realistic Editorial Narrative ── */}
      <div className="my-auto flex flex-col items-center justify-center max-w-2xl mx-auto w-full">
        {stage < 4 && (
          <div className="w-full flex flex-col items-center">
            {/* SVG Illustration Container */}
            <div className="w-full max-w-lg aspect-[16/9] relative">
              <svg
                viewBox="0 0 520 290"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* ── Desk & Background Architectural Lines ── */}
                <line x1="60" y1="210" x2="460" y2="210" stroke="#101C2C" strokeWidth="2" />
                <rect x="75" y="210" width="6" height="60" fill="#E9EDF2" stroke="#101C2C" strokeWidth="1.5" />
                <rect x="439" y="210" width="6" height="60" fill="#E9EDF2" stroke="#101C2C" strokeWidth="1.5" />

                {/* Minimalist Ceramic Mug & Notebook */}
                <rect x="85" y="185" width="16" height="25" rx="3" fill="#E9EDF2" stroke="#101C2C" strokeWidth="1.5" />
                <path d="M101 191 C107 191 107 203 101 203" stroke="#101C2C" strokeWidth="1.5" fill="none" />
                <rect x="410" y="200" width="30" height="10" rx="1" fill="#E9EDF2" stroke="#101C2C" strokeWidth="1.5" />
                <line x1="415" y1="198" x2="435" y2="198" stroke="#526D9B" strokeWidth="1" />

                {/* ── Modern Sleek Laptop in Center ── */}
                <rect x="210" y="204" width="100" height="6" rx="2" fill="#101C2C" />
                {/* Thin Bezel Screen */}
                <rect x="218" y="132" width="84" height="72" rx="4" fill="#101C2C" />
                <rect
                  x="222"
                  y="136"
                  width="76"
                  height="64"
                  rx="2"
                  fill={stage === 3 ? "#101C2C" : "#E9EDF2"}
                  className="transition-colors duration-400"
                />

                {/* Laptop Display UI Details */}
                {stage === 0 && (
                  <g className="animate-pulse">
                    <circle cx="260" cy="162" r="9" fill="#F43F5E" />
                    <line x1="260" y1="157" x2="260" y2="163" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
                    <circle cx="260" cy="167" r="1" fill="#FFFFFF" />
                    <rect x="232" y="179" width="56" height="3" rx="1.5" fill="#526D9B" opacity="0.4" />
                    <rect x="240" y="186" width="40" height="2.5" rx="1" fill="#526D9B" opacity="0.3" />
                  </g>
                )}

                {stage === 1 && (
                  <g>
                    <circle cx="260" cy="162" r="7" fill="#F43F5E" opacity="0.7" />
                    <line x1="260" y1="158" x2="260" y2="163" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="260" cy="166" r="0.8" fill="#FFFFFF" />
                    <rect x="236" y="179" width="48" height="2.5" rx="1" fill="#526D9B" opacity="0.3" />
                  </g>
                )}

                {stage === 2 && (
                  <g>
                    {/* Clean Code Hierarchy Assembling */}
                    <rect x="228" y="142" width="28" height="4" rx="1" fill="#101C2C" />
                    <rect x="260" y="142" width="18" height="4" rx="1" fill="#526D9B" />
                    <rect x="232" y="150" width="56" height="4" rx="1" fill="#526D9B" opacity="0.7" />
                    <rect x="232" y="158" width="42" height="4" rx="1" fill="#101C2C" opacity="0.8" />
                    <rect x="232" y="166" width="30" height="4" rx="1" fill="#526D9B" />
                    <rect x="228" y="176" width="64" height="16" rx="2" fill="#FFFFFF" stroke="#101C2C" strokeWidth="1" />
                    <rect x="232" y="182" width="24" height="4" rx="1" fill="#526D9B" />
                  </g>
                )}

                {stage === 3 && (
                  <g>
                    {/* Clean High-Tech Build Passed Screen */}
                    <rect x="226" y="140" width="68" height="56" rx="2" fill="#FFFFFF" />
                    <circle cx="260" cy="160" r="11" fill="#101C2C" />
                    {/* Checkmark */}
                    <path d="M255 160 L259 164 L266 156" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <rect x="236" y="178" width="48" height="3" rx="1.5" fill="#526D9B" />
                    <rect x="244" y="184" width="32" height="2.5" rx="1" fill="#E9EDF2" />
                  </g>
                )}

                {/* ── LEFT CHARACTER (Dev 1 — Realistic Hoodie & Natural Anatomy) ── */}
                <g className="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  {/* Torso & Hoodie */}
                  <path
                    d={
                      stage === 0
                        ? "M130 210 L140 148 C144 140 180 142 186 152 L192 210 Z" // Slumped forward
                        : stage === 1
                        ? "M118 210 L130 146 C136 138 172 138 178 148 L180 210 Z" // Leaning back
                        : "M135 210 L144 145 C150 138 186 138 194 148 L198 210 Z" // Poised at desk
                    }
                    fill="#526D9B"
                    stroke="#101C2C"
                    strokeWidth="1.8"
                  />
                  {/* Hoodie Neckline & Drawstrings */}
                  <path d="M156 148 Q163 158 170 148" stroke="#101C2C" strokeWidth="1.5" fill="none" />

                  {/* Head & Natural Profile */}
                  <circle
                    cx={stage === 0 ? "170" : stage === 1 ? "152" : "166"}
                    cy={stage === 0 ? "118" : stage === 1 ? "110" : "108"}
                    r="19"
                    fill="#FFFFFF"
                    stroke="#101C2C"
                    strokeWidth="1.8"
                  />

                  {/* Hair (Messy modern undercut/waves) */}
                  <path
                    d={
                      stage === 0
                        ? "M152 114 C154 98 178 94 186 104 C190 110 188 118 184 122 C184 108 166 106 154 116 Z"
                        : stage === 1
                        ? "M134 106 C136 90 160 86 168 96 C172 102 170 110 166 114 C166 100 148 98 136 108 Z"
                        : "M148 104 C150 88 174 84 182 94 C186 100 184 108 180 112 C180 98 162 96 150 106 Z"
                    }
                    fill="#101C2C"
                  />

                  {/* Facial Expression (Realistic Eyes, Eyebrows & Mouth) */}
                  {stage === 0 && (
                    // Tired, stressed facepalm pose
                    <g>
                      <line x1="172" y1="116" x2="178" y2="119" stroke="#101C2C" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="173" y1="126" x2="179" y2="124" stroke="#101C2C" strokeWidth="1.5" strokeLinecap="round" />
                      {/* Arm coming up to support forehead */}
                      <path d="M165 170 L180 148 L178 128" stroke="#101C2C" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </g>
                  )}

                  {stage === 1 && (
                    // Turning head toward Dev 2, wide awake realization
                    <g>
                      {/* Eyebrow raised */}
                      <path d="M156 106 Q161 103 166 107" stroke="#101C2C" strokeWidth="1.5" fill="none" />
                      {/* Eye open looking right */}
                      <ellipse cx="161" cy="111" rx="2.5" ry="3" fill="#101C2C" />
                      <circle cx="162" cy="110" r="1" fill="#FFFFFF" />
                      {/* Half-open curious mouth */}
                      <path d="M160 121 Q164 124 167 121" stroke="#101C2C" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                      {/* Arm resting relaxed on chair edge */}
                      <path d="M142 165 L125 185 L120 205" stroke="#101C2C" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                    </g>
                  )}

                  {stage >= 2 && (
                    // Concentrated, focused, hands typing with precision
                    <g>
                      <line x1="168" y1="108" x2="174" y2="108" stroke="#101C2C" strokeWidth="1.8" strokeLinecap="round" />
                      <circle cx="172" cy="113" r="1.8" fill="#101C2C" />
                      {/* Confident mouth */}
                      <path
                        d={stage === 3 ? "M168 122 Q173 126 177 122" : "M168 122 L175 122"}
                        stroke="#101C2C"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                      {/* Arm reaching forward typing */}
                      <path d="M168 165 L200 182 L215 198" stroke="#101C2C" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </g>
                  )}
                </g>

                {/* ── RIGHT CHARACTER (Dev 2 — Realistic Round Glasses & Comedic Side-Eye) ── */}
                <g className="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  {/* Torso & Crewneck */}
                  <path d="M330 210 L336 145 C342 138 376 138 384 145 L390 210 Z" fill="#E9EDF2" stroke="#101C2C" strokeWidth="1.8" />
                  <path d="M352 144 Q360 152 368 144" stroke="#101C2C" strokeWidth="1.5" fill="none" />

                  {/* Head */}
                  <circle cx="360" cy="108" r="19" fill="#FFFFFF" stroke="#101C2C" strokeWidth="1.8" />

                  {/* Neat modern side-part hair */}
                  <path d="M342 108 C342 90 366 84 378 92 C382 100 378 110 372 114 C370 98 350 96 342 108 Z" fill="#101C2C" />

                  {/* Distinctive Round Glasses */}
                  <circle cx="352" cy="111" r="5" stroke="#101C2C" strokeWidth="1.4" fill="none" />
                  <circle cx="365" cy="111" r="5" stroke="#101C2C" strokeWidth="1.4" fill="none" />
                  <line x1="357" y1="111" x2="360" y2="111" stroke="#101C2C" strokeWidth="1.4" />

                  {/* Facial Expression Details */}
                  {stage === 0 && (
                    // Calm, stoic typing
                    <g>
                      <circle cx="352" cy="111" r="1.5" fill="#101C2C" />
                      <circle cx="365" cy="111" r="1.5" fill="#101C2C" />
                      <line x1="354" y1="121" x2="363" y2="121" stroke="#101C2C" strokeWidth="1.5" strokeLinecap="round" />
                      {/* Both hands poised on keyboard */}
                      <path d="M345 162 L320 182 L305 198" stroke="#101C2C" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </g>
                  )}

                  {stage === 1 && (
                    // Knowing Side-Eye Smirk (The Comedic Highlight)
                    <g>
                      {/* Pupils looking hard to the left towards Dev 1 */}
                      <circle cx="349" cy="111" r="2" fill="#101C2C" />
                      <circle cx="362" cy="111" r="2" fill="#101C2C" />
                      {/* Eyebrow cocked slightly */}
                      <path d="M348 103 Q353 100 357 104" stroke="#101C2C" strokeWidth="1.5" fill="none" />
                      {/* Knowing asymmetrical smirk */}
                      <path d="M352 121 Q358 123 365 119" stroke="#101C2C" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                      {/* Hand paused mid-air */}
                      <path d="M346 162 L328 178 L312 188" stroke="#101C2C" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                    </g>
                  )}

                  {stage === 2 && (
                    // Coding at high speed with friend
                    <g>
                      <circle cx="351" cy="111" r="1.8" fill="#101C2C" />
                      <circle cx="364" cy="111" r="1.8" fill="#101C2C" />
                      <line x1="353" y1="121" x2="363" y2="121" stroke="#101C2C" strokeWidth="1.5" strokeLinecap="round" />
                      {/* Fast typing arm */}
                      <path d="M344 162 L318 182 L300 198" stroke="#101C2C" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </g>
                  )}

                  {stage === 3 && (
                    // Satisfied mutual nod, confident smile
                    <g>
                      <circle cx="350" cy="110" r="1.8" fill="#101C2C" />
                      <circle cx="363" cy="110" r="1.8" fill="#101C2C" />
                      <path d="M352 120 Q358 124 364 120" stroke="#101C2C" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                      <path d="M348 162 L340 185 L335 204" stroke="#101C2C" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                    </g>
                  )}
                </g>
              </svg>
            </div>

            {/* Narrative Micro-Captions with Clean Timing */}
            <div className="mt-8 text-center h-12 flex flex-col items-center justify-center">
              {stage === 0 && (
                <p className="font-sans text-sm sm:text-base text-[#526D9B] font-normal">
                  Bug tak berujung. Lembur tanpa henti. Sistem yang melelahkan.
                </p>
              )}
              {stage === 1 && (
                <p className="font-heading text-sm sm:text-base text-[#101C2C] font-bold">
                  Sebuah lirikan penuh arti. &ldquo;Dahlah, gas bikin startup sendiri?&rdquo;
                </p>
              )}
              {stage === 2 && (
                <p className="font-heading text-sm sm:text-base text-[#101C2C] font-extrabold">
                  Modal skill dan nekat. Arsitektur dibangun dari nol.
                </p>
              )}
              {stage === 3 && (
                <p className="font-sans text-sm sm:text-base text-[#101C2C] font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Build passed. Presisi tercapai. Siap mengubah dunia.
                </p>
              )}
            </div>
          </div>
        )}

        {/* Stage 4: KADAEK Wordmark & Mission Payoff */}
        {stage === 4 && (
          <div className="flex flex-col items-center text-center py-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 drop-shadow-sm">
              <KadaekMonogram className="w-full h-full text-[#101C2C]" />
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl font-black tracking-[0.16em] text-[#101C2C] uppercase leading-none">
              KADAEK
            </h1>

            <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-[#526D9B] font-bold mt-4">
              TWO DEVS. ZERO FUNDING. BIG DREAMS.
            </p>
          </div>
        )}
      </div>

      {/* ── Bottom Progress: Disciplined Minimal Indicator ── */}
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
