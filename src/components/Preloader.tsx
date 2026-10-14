"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Increment progress counter with realistic pacing (faster as it finishes)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const jump = prev < 50 ? Math.floor(Math.random() * 8) + 4 : Math.floor(Math.random() * 12) + 8;
        const next = prev + jump;
        return next > 100 ? 100 : next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const exitTimer = setTimeout(() => {
        setIsDone(true);
      }, 400);

      const unmountTimer = setTimeout(() => {
        setShouldRender(false);
      }, 1400);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(unmountTimer);
      };
    }
  }, [progress]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#101C2C] text-[#FFFFFF] flex flex-col justify-between p-8 sm:p-12 transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] pointer-events-none select-none ${
        isDone ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Top Bar Status */}
      <div className="flex items-center justify-between text-xs font-mono text-[#526D9B] tracking-[0.2em] uppercase">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#526D9B] animate-pulse" />
          <span>INITIALIZING SYSTEM</span>
        </div>
        <div>
          <span>EDITION &apos;26</span>
        </div>
      </div>

      {/* Centerpiece: Self-Drawing Geometric Monogram & Brand Reveal */}
      <div className="flex flex-col items-center justify-center my-auto">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-white"
          >
            {/* Outer Box with Stroke Draw Animation */}
            <rect
              x="5"
              y="5"
              width="90"
              height="90"
              stroke="currentColor"
              strokeWidth="7"
              strokeDasharray="360"
              strokeDashoffset={360 - (progress / 100) * 360}
              className="transition-[stroke-dashoffset] duration-75"
            />

            {/* Vertical Stem */}
            <line
              x1="33"
              y1="5"
              x2="33"
              y2="95"
              stroke="currentColor"
              strokeWidth="7"
              strokeDasharray="90"
              strokeDashoffset={progress > 20 ? 90 - ((progress - 20) / 80) * 90 : 90}
              className="transition-[stroke-dashoffset] duration-75"
            />

            {/* Diagonal Slash 1 */}
            <line
              x1="33"
              y1="55"
              x2="95"
              y2="5"
              stroke="currentColor"
              strokeWidth="7"
              strokeDasharray="100"
              strokeDashoffset={progress > 40 ? 100 - ((progress - 40) / 60) * 100 : 100}
              className="transition-[stroke-dashoffset] duration-75"
            />

            {/* Diagonal Slash 2 */}
            <line
              x1="33"
              y1="55"
              x2="80"
              y2="95"
              stroke="currentColor"
              strokeWidth="7"
              strokeDasharray="80"
              strokeDashoffset={progress > 55 ? 80 - ((progress - 55) / 45) * 80 : 80}
              className="transition-[stroke-dashoffset] duration-75"
            />

            {/* Accent Diagonal Slash */}
            <line
              x1="5"
              y1="95"
              x2="95"
              y2="40"
              stroke="#526D9B"
              strokeWidth="7"
              strokeDasharray="110"
              strokeDashoffset={progress > 70 ? 110 - ((progress - 70) / 30) * 110 : 110}
              className="transition-[stroke-dashoffset] duration-75"
            />
          </svg>
        </div>

        {/* Wordmark Reveal */}
        <div className="mt-8 overflow-hidden text-center">
          <h1
            className={`font-heading text-2xl sm:text-3xl font-black tracking-[0.2em] text-[#FFFFFF] uppercase transition-all duration-700 ${
              progress > 60 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            KADAEK
          </h1>
          <p
            className={`font-sans text-[10px] tracking-[0.35em] text-[#526D9B] uppercase font-semibold mt-1 transition-all duration-700 delay-100 ${
              progress > 75 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            ENGINEERED PRECISION
          </p>
        </div>
      </div>

      {/* Bottom Counter & Precision Progress Bar */}
      <div className="w-full max-w-sm mx-auto">
        <div className="flex items-center justify-between text-xs font-mono text-[#526D9B] mb-3">
          <span>PROGRESS</span>
          <span className="font-semibold text-white tabular-nums">
            {progress < 10 ? `0${progress}` : progress}%
          </span>
        </div>

        {/* High-tech Hairline Progress Bar */}
        <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
