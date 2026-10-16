"use client";

export default function HeroFloatingShowcase() {
  return (
    <div className="relative w-full max-w-4xl mx-auto select-none px-4 pt-0 pb-1 sm:pb-2 flex items-center justify-center">
      {/* ── REAL 3D LAPTOP & SMARTPHONE DUO MOCKUP (100% TRANSPARENT ALPHA, SEAMLESS BLEND) ── */}
      <div className="relative w-full max-w-[270px] xs:max-w-[310px] sm:max-w-[420px] md:max-w-[490px] lg:max-w-[550px] transform hover:scale-[1.01] transition-all duration-500">
        <img
          src="/real_devices_transparent.png"
          alt="Kadaek Platform Hub on Real MacBook Pro and iPhone"
          className="w-full h-auto object-contain mx-auto drop-shadow-[0_22px_36px_rgba(16,28,44,0.10)]"
        />
        {/* Natural contact shadows under devices */}
        <div className="absolute -bottom-2 left-[22%] right-[2%] h-3.5 bg-slate-900/10 blur-lg rounded-full pointer-events-none" />
        <div className="absolute -bottom-1 left-[1%] w-[18%] h-2.5 bg-slate-900/12 blur-md rounded-full pointer-events-none" />
      </div>
    </div>
  );
}
