import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  const stats = [
    { value: "100+", label: "Klien & Mitra" },
    { value: "250+", label: "Proyek Selesai" },
    { value: "99.8%", label: "Tingkat Kepuasan" },
    { value: "24/7", label: "Dukungan Teknis" },
  ];

  return (
    <section id="beranda" className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-xs sm:text-sm font-medium shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Solusi Rekayasa Perangkat Lunak & Transformasi Digital
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15]">
            Akselerasi Masa Depan Bisnis Bersama{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-300">
              kadaek
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Kami merancang, mengembangkan, dan mengelola ekosistem teknologi modern dengan arsitektur tangguh, performa tinggi, dan skalabilitas tanpa batas.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#kontak"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/25 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Konsultasi Proyek Gratis
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#layanan"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-medium text-slate-300 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-800 transition-all duration-200"
            >
              Jelajahi Solusi Kami
            </a>
          </div>

          {/* Value Highlights */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Standar Rekayasa Global</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Keamanan & Data Terlindungi</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Implementasi Cepat & Gesit</span>
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm text-center hover:border-slate-700 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                {item.value}
              </div>
              <div className="mt-2 text-sm text-slate-400 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
