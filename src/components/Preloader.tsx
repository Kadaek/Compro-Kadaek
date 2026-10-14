"use client";

import { useEffect, useState } from "react";
import { KadaekMonogram } from "@/components/KadaekLogo";

export default function Preloader() {
  // 5-second cinematic storyboard:
  // 0.0s - 1.2s : The Struggle
  // 1.2s - 2.3s : The Glance / Side-Eye
  // 2.3s - 3.5s : Screw It, Let's Build
  // 3.5s - 4.4s : The Payoff
  // 4.4s - 5.0s : KADAEK Reveal
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

    const t1 = setTimeout(() => setStage(1), 1200);
    const t2 = setTimeout(() => setStage(2), 2300);
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
      className={`fixed inset-0 z-[99999] bg-[#0A0F17] text-[#FFFFFF] flex flex-col justify-between p-6 sm:p-10 select-none transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isDone ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      {/* ── Top Header Bar ── */}
      <div className="relative z-20 flex items-center justify-between text-xs font-mono text-[#526D9B]">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="tracking-[0.25em] uppercase text-[11px] font-semibold text-zinc-300">
            02:41 AM • JAKARTA STUDIO
          </span>
        </div>

        <button
          onClick={handleSkip}
          className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 hover:text-white px-3.5 py-1.5 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all cursor-pointer backdrop-blur-md"
        >
          SKIP ↗
        </button>
      </div>

      {/* ── CENTER: Photorealistic Film Frame with Ken Burns Push-in ── */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center max-w-4xl mx-auto w-full">
        {stage < 4 ? (
          <div className="w-full flex flex-col items-center">
            {/* Cinematic Frame */}
            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.8)] relative bg-black group">
              {/* Optional Video playback if user drops intro.mp4, else photographic master */}
              <video
                src="/intro.mp4"
                poster="/cinematic_hero.jpg"
                autoPlay
                muted
                playsInline
                loop
                className="w-full h-full object-cover transform scale-100 animate-[pulse_8s_ease-in-out_infinite]"
              />

              {/* Film Grain & Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

              {/* Subtitles Overlay: Editorial Storyboard */}
              <div className="absolute bottom-6 inset-x-0 text-center px-6">
                {stage === 0 && (
                  <p className="font-heading text-base sm:text-xl font-bold text-white drop-shadow-md">
                    Jam 02:40 Subuh. Gaji UMR. Lembur weekend tanpa ujung.
                  </p>
                )}
                {stage === 1 && (
                  <p className="font-heading text-base sm:text-xl font-bold text-sky-300 drop-shadow-md">
                    Sebuah lirikan penuh arti. &ldquo;Dahlah bro, kita bikin startup berdua.&rdquo;
                  </p>
                )}
                {stage === 2 && (
                  <p className="font-heading text-base sm:text-xl font-extrabold text-emerald-400 drop-shadow-md">
                    Modal skill, kopi hitam, dan nekat. Arsitektur dibangun dari nol.
                  </p>
                )}
                {stage === 3 && (
                  <p className="font-heading text-base sm:text-xl font-extrabold text-white drop-shadow-md flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Build passed. Zero funding. Big dreams.
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Stage 4: Triumphant KADAEK Wordmark Reveal */
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
      <div className="relative z-20 max-w-md w-full mx-auto">
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
