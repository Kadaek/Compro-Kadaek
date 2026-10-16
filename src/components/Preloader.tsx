"use client";

import { useEffect, useState } from "react";
import { KadaekMonogram } from "@/components/KadaekLogo";

export default function Preloader() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Snappy, lightweight timing: finishes roll & settle in ~0.8s, brief display for ~0.3s
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1100);

    // Fast, clean unmount
    const unmountTimer = setTimeout(() => {
      setShouldRender(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      role="status"
      aria-label="Loading Kadaek"
      className={`fixed inset-0 z-[99999] bg-[#FFFFFF] text-[#101C2C] flex flex-col items-center justify-center p-6 select-none transition-opacity duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center text-center">
        {/* Monogram: Ultra-smooth single-arc roll directly into center */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 text-[#101C2C] animate-smooth-roll origin-center">
          <KadaekMonogram className="w-full h-full text-[#101C2C]" />
        </div>

        {/* Wordmark: Crisp slide-up & clean fade, no distortion */}
        <div className="animate-name-reveal flex flex-col items-center">
          <h1 className="font-heading text-3xl sm:text-4xl font-black tracking-[0.22em] text-[#101C2C] uppercase leading-none">
            KADAEK
          </h1>

          {/* Minimal accent line: Clean horizontal expansion */}
          <div className="w-12 h-0.5 bg-[#101C2C] rounded-full mt-4 animate-line-expand origin-center" />
        </div>
      </div>
    </div>
  );
}
