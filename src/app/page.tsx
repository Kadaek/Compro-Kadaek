import ClientShell from "@/components/ClientShell";

const SERVICES = [
  { n: "01", title: "Web & Enterprise Apps",           tech: "Next.js · Node · TypeScript · PostgreSQL" },
  { n: "02", title: "Mobile Development",              tech: "Flutter · React Native · Swift" },
  { n: "03", title: "Cloud Architecture & DevOps",     tech: "AWS · GCP · Docker · Kubernetes" },
  { n: "04", title: "UI / UX & Product Design",        tech: "Figma · Prototyping · Motion" },
  { n: "05", title: "AI Integration & Data Systems",   tech: "LLM · Pipelines · Analytics" },
];

const TICKER = [
  "Web Engineering", "Product Design", "System Architecture",
  "Mobile Apps", "Cloud Infrastructure", "AI Integration",
  "Performance", "Digital Strategy",
];

function splitWords(text: string) {
  return text.split(" ").map((word, i) => (
    <span key={i} className="split-word mr-[0.25em]">
      <span style={{ transitionDelay: `${i * 0.08}s` }}>{word}</span>
    </span>
  ));
}

export default function Home() {
  return (
    <>
      <ClientShell />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col">

        {/* Nav */}
        <nav className="flex items-center justify-between px-8 pt-8 pb-0">
          {/* Logo */}
          <div className="flex items-center gap-2.5" data-reveal>
            <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center">
              <span className="text-[11px] font-black text-black tracking-tight">K</span>
            </div>
            <span className="text-sm font-semibold tracking-[0.18em] uppercase text-white/80">Kadaek</span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-8" data-reveal data-delay="2">
            <div className="hidden md:flex items-center gap-2 text-[11px] font-mono tracking-widest text-white/25">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>WIB&nbsp;</span>
              <span id="live-clock" />
            </div>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Kadaek%2C%20saya%20ingin%20konsultasi%20proyek."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono uppercase tracking-[0.22em] text-white/40 hover:text-white transition-colors duration-300"
            >
              Hubungi ↗
            </a>
          </div>
        </nav>

        {/* Main Hero Text */}
        <div className="flex-1 flex flex-col items-start justify-end px-8 pb-16 md:pb-20 pt-20">

          {/* Overline */}
          <p
            className="text-[11px] font-mono uppercase tracking-[0.4em] text-white/25 mb-7"
            data-reveal data-delay="1"
          >
            Studio Teknologi — Bandung, Indonesia
          </p>

          {/* Headline - split word animated */}
          <h1
            className="text-[clamp(3.2rem,9.5vw,10rem)] font-black leading-[0.88] tracking-[-0.03em] text-white max-w-[14ch]"
            data-split
          >
            {splitWords("Kami Membangun Masa Depan Digital.")}
          </h1>

          {/* Bottom Row */}
          <div className="mt-16 flex flex-col md:flex-row items-start md:items-end justify-between w-full gap-8">
            <p
              className="text-sm text-white/35 max-w-xs leading-relaxed font-light"
              data-reveal data-delay="3"
            >
              Rekayasa presisi untuk perusahaan yang berambisi lebih dari rata-rata.
            </p>
            <div className="flex items-center gap-6" data-reveal data-delay="4">
              <a
                href="#reel"
                className="group flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 hover:text-white transition-colors duration-400"
              >
                <span className="w-8 h-8 rounded-full border border-white/15 group-hover:border-white/40 flex items-center justify-center transition-colors">
                  <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 fill-current">
                    <polygon points="2,1 9,5 2,9" />
                  </svg>
                </span>
                Lihat Reel
              </a>
              <a
                href="#services"
                className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 hover:text-white transition-colors duration-300"
              >
                Layanan ↓
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
          <div className="w-px h-12 bg-white origin-top animate-[scaleY_2s_ease-in-out_infinite]"
            style={{ animation: "scrollPulse 2s ease-in-out infinite" }} />
        </div>
      </section>

      {/* ─── TICKER ───────────────────────────────────────────── */}
      <div className="border-y border-white/[0.05] py-4 overflow-hidden">
        <div className="marquee-inner whitespace-nowrap">
          {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-5 px-6 text-[11px] font-mono uppercase tracking-[0.3em] text-white/18">
              <span>{item}</span>
              <span className="w-1 h-1 rounded-full bg-blue-500/50" />
            </span>
          ))}
        </div>
      </div>

      {/* ─── VIDEO REEL ───────────────────────────────────────── */}
      <section id="reel" className="reel-wrapper" style={{ height: "70vh" }}>
        {/* Replace src with your actual video file at public/reel.mp4 */}
        <video
          id="reel-video"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover opacity-70"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%230a0a14'/%3E%3Cstop offset='1' stop-color='%23060d1a'/%3E%3C/linearGradient%3E%3Crect width='1920' height='1080' fill='url(%23g)'/%3E%3C/svg%3E"
        >
          {/* Drop your reel.mp4 into /public and uncomment: */}
          {/* <source src="/reel.mp4" type="video/mp4" /> */}
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Reel label */}
        <div className="absolute bottom-6 left-8 right-8 flex items-end justify-between">
          <div data-reveal>
            <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/30 mb-1">
              2024 — 2026
            </p>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-white/50">
              Selected Works Reel
            </p>
          </div>
          <button
            id="sound-btn"
            className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30 hover:text-white/70 transition-colors border border-white/10 hover:border-white/30 px-3 py-1.5 rounded-full"
            data-hover
          >
            SOUND OFF
          </button>
        </div>

        {/* Center play visual (shown when no video loaded) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-sm bg-white/5">
            <svg viewBox="0 0 12 12" className="w-4 h-4 fill-white/40 ml-0.5">
              <polygon points="2,1 11,6 2,11" />
            </svg>
          </div>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────────────── */}
      <section className="grid grid-cols-2 md:grid-cols-4">
        {[
          { n: "100+",  l: "Klien Aktif" },
          { n: "250+",  l: "Proyek Selesai" },
          { n: "99.8%", l: "Uptime SLA" },
          { n: "5 ★",   l: "Rata-rata Rating" },
        ].map((s, i) => (
          <div key={i} className="stat-card p-10 md:p-12" data-reveal data-delay={String(i + 1)}>
            <div className="text-5xl md:text-6xl font-black text-white tabular-nums leading-none">
              {s.n}
            </div>
            <div className="mt-3 text-[10px] font-mono uppercase tracking-[0.3em] text-white/25">
              {s.l}
            </div>
            <div className="stat-underline mt-6" />
          </div>
        ))}
      </section>

      {/* ─── SERVICES ─────────────────────────────────────────── */}
      <section id="services" className="px-8 py-24">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-12" data-reveal>
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/20">
            Kapabilitas
          </span>
          <div className="h-px flex-1 bg-white/[0.05]" />
        </div>

        <div data-reveal data-delay="2">
          {SERVICES.map((s) => (
            <div key={s.n} className="service-row group flex items-center gap-6 md:gap-10 py-6 px-2 cursor-pointer" data-hover>
              <span className="row-num text-[11px] font-mono text-white/15 w-7 shrink-0 tabular-nums transition-colors duration-300">
                {s.n}
              </span>
              <span className="flex-1 text-xl md:text-3xl font-bold text-white/60 group-hover:text-white transition-colors duration-400">
                {s.title}
              </span>
              <span className="hidden md:block text-[11px] font-mono tracking-widest text-white/18 text-right group-hover:text-white/40 transition-colors duration-300 shrink-0">
                {s.tech}
              </span>
              <span className="row-arrow text-white/15 group-hover:text-blue-400 shrink-0 text-lg">
                ↗
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CLOSING CTA ──────────────────────────────────────── */}
      <section className="border-t border-white/[0.05] px-8 py-28 md:py-40 flex flex-col items-start">
        <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/20 mb-10" data-reveal>
          Siap Berkolaborasi
        </p>

        <a
          href="mailto:halo@kadaek.id"
          className="cta-big text-[clamp(2.5rem,7vw,7.5rem)] font-black leading-[0.9] tracking-[-0.03em] text-white hover:text-blue-400 transition-colors duration-500 break-all md:break-normal"
          data-split
        >
          {splitWords("halo@kadaek.id")}
        </a>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6" data-reveal data-delay="2">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-white/15 hover:border-white/40 px-6 py-3 text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 hover:text-white transition-all duration-300"
          >
            WhatsApp
            <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform inline-block">↗</span>
          </a>
          <span className="text-[10px] font-mono text-white/15">
            Respons dalam 1 × 24 jam kerja
          </span>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.04] px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/15">
          © 2026 Kadaek Studio
        </span>
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/15">
          Bandung ID
        </span>
      </footer>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
        }
      `}</style>
    </>
  );
}
