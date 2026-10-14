import {
  Rocket,
  ShieldCheck,
  Headphones,
  Cpu,
  BadgePercent,
  Layers,
} from "lucide-react";

export default function WhyUs() {
  const points = [
    {
      icon: Rocket,
      title: "Pengembangan Cepat & Terukur",
      desc: "Metodologi Agile dengan sprint terstruktur memastikan fitur diluncurkan tepat waktu tanpa mengorbankan stabilitas.",
    },
    {
      icon: Cpu,
      title: "Teknologi Terkini",
      desc: "Kami selalu menggunakan stack modern yang efisien, mudah dirawat, dan didukung komunitas teknologi dunia.",
    },
    {
      icon: ShieldCheck,
      title: "Keamanan Standar Tinggi",
      desc: "Setiap baris kode dan arsitektur server diuji dengan standar keamanan ketat untuk melindungi data sensitif Anda.",
    },
    {
      icon: Headphones,
      title: "Dukungan Responsif 24/7",
      desc: "Tim teknis kami siap memantau dan menangani kendala teknis dengan Service Level Agreement (SLA) yang jelas.",
    },
    {
      icon: BadgePercent,
      title: "Efisiensi Investasi",
      desc: "Perkiraan anggaran yang transparan dan dapat disesuaikan dengan skala prioritas bisnis Anda tanpa biaya tersembunyi.",
    },
    {
      icon: Layers,
      title: "Skalabilitas Masa Depan",
      desc: "Dirancang untuk bertumbuh bersama bisnis Anda, mampu menangani peningkatan beban pengguna tanpa kendala.",
    },
  ];

  return (
    <section id="keunggulan" className="py-24 bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-800/50 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Mengapa kadaek
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Keunggulan yang Membedakan Kami
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Kami mengutamakan sinergi antara keandalan sistem, kenyamanan pengguna, dan tujuan bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
