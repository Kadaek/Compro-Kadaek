import {
  Globe,
  Smartphone,
  Cloud,
  LayoutDashboard,
  ShieldAlert,
  Database,
  ArrowUpRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web & Enterprise Applications",
      description:
        "Pengembangan web aplikasi modern, portal bisnis, ERP/CRM kustom dengan teknologi terkini seperti Next.js, React, dan Node.js.",
      badge: "Fullstack",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Aplikasi iOS dan Android yang responsif, intuitif, dan berperforma tinggi menggunakan Flutter & React Native.",
      badge: "Cross-Platform",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure & DevOps",
      description:
        "Arsitektur cloud terkelola (AWS, GCP, Azure), otomatisasi CI/CD, kontainerisasi Docker/Kubernetes, serta optimasi biaya infrastruktur.",
      badge: "Scalability",
    },
    {
      icon: LayoutDashboard,
      title: "UI/UX & Product Design",
      description:
        "Riset pengguna, pembuatan wireframe, prototyping interaktif, dan desain antarmuka yang elegan untuk meningkatkan konversi.",
      badge: "Design",
    },
    {
      icon: ShieldAlert,
      title: "Cyber Security & Audit",
      description:
        "Audit keamanan sistem, vulnerability assessment, proteksi data, dan implementasi kepatuhan privasi standar industri.",
      badge: "Security",
    },
    {
      icon: Database,
      title: "Data Analytics & AI Integration",
      description:
        "Integrasi kecerdasan buatan (AI/LLM), otomatisasi workflow cerdas, data pipeline, dan visualisasi dashboard analitik interaktif.",
      badge: "AI & Data",
    },
  ];

  return (
    <section id="layanan" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-800/50 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            Layanan Kami
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Solusi Menyeluruh untuk Kebutuhan Digital Anda
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Dari perencanaan arsitektur hingga deployment dan pemeliharaan, kami mendampingi setiap tahap perkembangan sistem Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 p-8 hover:border-blue-500/50 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center text-xs font-semibold text-blue-400 group-hover:text-blue-300 gap-1">
                  <span>Pelajari lebih lanjut</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
