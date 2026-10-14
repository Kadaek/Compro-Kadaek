"use client";

import { useState } from "react";
import { Sparkles, ArrowUpRight, Mail, Check, MessageCircle } from "lucide-react";

export default function WelcomePage() {
  const [copied, setCopied] = useState(false);
  const email = "halo@kadaek.id";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col justify-between selection:bg-blue-600 selection:text-white relative overflow-hidden font-sans">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-cyan-400/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute -bottom-20 right-1/4 w-[400px] h-[250px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Top Bar */}
      <header className="max-w-6xl w-full mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            kadaek<span className="text-blue-500">.</span>
          </span>
        </div>

        {/* Status indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Menerima Proyek Baru</span>
        </div>
      </header>

      {/* Main Content (Center) */}
      <main className="max-w-3xl w-full mx-auto px-6 py-12 flex flex-col items-center text-center">
        {/* Subtle pill tag */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/40 border border-blue-800/40 text-blue-400 text-xs font-medium tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Software Engineering & Digital Transformation</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
          Membangun Solusi Digital dengan{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
            Presisi & Dampak Nyata.
          </span>
        </h1>

        {/* Tagline / Subtitle */}
        <p className="text-slate-400 text-base sm:text-xl font-normal leading-relaxed max-w-2xl mb-10">
          Kami adalah studio teknologi yang berfokus merancang perangkat lunak berkecepatan tinggi, arsitektur scalable, dan pengalaman digital kelas dunia untuk bisnis Anda.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Kadaek,%20saya%20tertarik%20untuk%20konsultasi%20proyek."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/25 transition-all duration-200 active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Diskusi via WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 opacity-70" />
          </a>

          <button
            onClick={handleCopyEmail}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-300 bg-slate-900/90 hover:bg-slate-800/90 hover:text-white border border-slate-800 transition-all duration-200"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Email Tersalin!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Salin Email ({email})</span>
              </>
            )}
          </button>
        </div>

        {/* Minimal Focus Area Pills */}
        <div className="mt-16 pt-10 border-t border-slate-800/60 w-full flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-400">
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
            Web & Enterprise Apps
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
            Mobile Development
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
            Cloud & System Architecture
          </span>
          <span className="px-3.5 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
            UI/UX Product Design
          </span>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl w-full mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 border-t border-slate-900">
        <div>
          © 2026 kadaek. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${email}`}
            className="hover:text-slate-300 transition-colors"
          >
            {email}
          </a>
          <span>•</span>
          <span>Indonesia</span>
        </div>
      </footer>
    </div>
  );
}
