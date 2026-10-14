"use client";

import { useEffect, useState } from "react";
import { KadaekMonogram } from "@/components/KadaekLogo";
import { Terminal, Zap, ArrowRight, FastForward } from "lucide-react";

interface StoryStep {
  text: string;
  speaker: string;
  type: "pain" | "dialogue" | "punchline" | "launch";
}

const STORY: StoryStep[] = [
  {
    speaker: "REALITA #1",
    text: "Kerja 9-to-9, gaji kepotong pajak, biaya hidup ga ngotak, karir mentok di ordal...",
    type: "pain",
  },
  {
    speaker: "DEV 1 (Jam 02:14 Subuh)",
    text: "Bro, lu masih jago ngoding kan? Gua udah muak diperbudak sistem.",
    type: "dialogue",
  },
  {
    speaker: "DEV 2",
    text: "Masih lah gila. Tapi kita modal apa? Duit tipis, koneksi pejabat kaga punya.",
    type: "dialogue",
  },
  {
    speaker: "DEV 1",
    text: "Dahlah! Modal skill, kopi hitam, sama nekat. Kita bikin startup berdua. Kita buktiin kita bisa kaya!",
    type: "punchline",
  },
  {
    speaker: "KADAEK ENGINE",
    text: "SYSTEM BOOT: KELUAR DARI MATRIX. KADAEK RESMI BERDIRI.",
    type: "launch",
  },
];

export default function Preloader() {
  const [currentStep, setCurrentStep] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  // Skip button handler
  const handleSkip = () => {
    setIsDone(true);
    setTimeout(() => setShouldRender(false), 900);
  };

  // Step progression sequence (runs ~5.5s total)
  useEffect(() => {
    const stepIntervals = [1200, 1300, 1200, 1400, 1000];
    let currentIdx = 0;

    const advanceStep = () => {
      if (currentIdx < STORY.length - 1) {
        currentIdx += 1;
        setCurrentStep(currentIdx);
        setTimeout(advanceStep, stepIntervals[currentIdx]);
      } else {
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => setShouldRender(false), 1000);
        }, 1100);
      }
    };

    const firstTimer = setTimeout(advanceStep, stepIntervals[0]);

    // Progress counter (0 to 100%)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 55);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(progressInterval);
    };
  }, []);

  // Typewriter effect for current step text
  useEffect(() => {
    const fullText = STORY[currentStep].text;
    let charIndex = 0;
    setTypedText("");

    const typingInterval = setInterval(() => {
      if (charIndex <= fullText.length) {
        setTypedText(fullText.slice(0, charIndex));
        charIndex += 2; // quick typing speed
      } else {
        clearInterval(typingInterval);
      }
    }, 20);

    return () => clearInterval(typingInterval);
  }, [currentStep]);

  if (!shouldRender) return null;

  const currentItem = STORY[currentStep];

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#101C2C] text-[#FFFFFF] flex flex-col justify-between p-6 sm:p-12 transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] select-none ${
        isDone ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* ── TOP BAR: Header + Skip Button ── */}
      <div className="flex items-center justify-between text-xs font-mono text-[#526D9B]">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span className="tracking-[0.2em] uppercase text-zinc-300">
            STORY_OF_ORIGIN.log
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

      {/* ── CENTER: Story Dialogue & Monogram ── */}
      <div className="max-w-2xl mx-auto w-full my-auto flex flex-col items-center text-center">
        {/* Animated Brand Emblem */}
        <div className="relative mb-8">
          <div
            className={`w-20 h-20 sm:w-24 sm:h-24 transition-all duration-700 ${
              currentItem.type === "launch"
                ? "scale-110 drop-shadow-[0_0_35px_rgba(82,109,155,0.8)]"
                : "opacity-80"
            }`}
          >
            <KadaekMonogram className="w-full h-full text-white" />
          </div>

          {currentItem.type === "launch" && (
            <div className="absolute -inset-4 bg-[#526D9B]/20 rounded-2xl blur-xl animate-pulse -z-10" />
          )}
        </div>

        {/* Story Chapter Speaker Badge */}
        <div className="mb-4">
          <span
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase transition-all duration-300 ${
              currentItem.type === "pain"
                ? "bg-rose-500/10 text-rose-300 border border-rose-500/20"
                : currentItem.type === "dialogue"
                ? "bg-amber-500/10 text-amber-300 border border-amber-500/20"
                : currentItem.type === "punchline"
                ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                : "bg-blue-500/20 text-blue-300 border border-blue-400/30 font-bold"
            }`}
          >
            <Zap className="w-3 h-3" />
            <span>{currentItem.speaker}</span>
          </span>
        </div>

        {/* Typewritten Dialogue Text */}
        <div className="min-h-[110px] sm:min-h-[120px] flex items-center justify-center">
          <p
            className={`font-heading text-lg sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-snug transition-all duration-300 ${
              currentItem.type === "punchline"
                ? "text-emerald-300"
                : currentItem.type === "launch"
                ? "text-white scale-105"
                : "text-zinc-100"
            }`}
          >
            &ldquo;{typedText}&rdquo;
            <span className="inline-block w-2 h-5 sm:h-7 bg-white ml-1.5 animate-pulse" />
          </p>
        </div>

        {/* Story Scene Indicators */}
        <div className="flex items-center gap-2 mt-8">
          {STORY.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === currentStep
                  ? "w-8 bg-white"
                  : i < currentStep
                  ? "w-3 bg-white/40"
                  : "w-2 bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── BOTTOM BAR: Progress Bar & Philosophy ── */}
      <div className="w-full max-w-xl mx-auto">
        <div className="flex items-center justify-between text-xs font-mono text-[#526D9B] mb-2.5">
          <span className="tracking-widest uppercase text-[10px]">
            {progress < 85 ? "COMPILING AUDACITY..." : "STARTUP LAUNCHED"}
          </span>
          <span className="text-white font-semibold tabular-nums">
            {progress}%
          </span>
        </div>

        {/* Progress Hairline Bar */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#526D9B] to-white transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="text-center mt-3 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
          Modal Skill • Tanpa Ordal • Hayolo
        </div>
      </div>
    </div>
  );
}
