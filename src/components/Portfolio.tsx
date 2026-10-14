import { ExternalLink, Layers, Smartphone, BarChart3 } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "FinTrack Corporate Portal",
      category: "Fintech & Banking",
      description:
        "Platform automasi rekonsiliasi keuangan multi-bank terintegrasi dengan reporting analitik real-time.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      icon: BarChart3,
    },
    {
      title: "LogiSmart Supply Chain",
      category: "Logistics & Fleet",
      description:
        "Sistem pelacakan armada armada dan manajemen inventaris pergudangan berbasis IoT dan mobile app.",
      tags: ["Flutter", "Node.js", "Redis", "Google Maps API"],
      icon: Smartphone,
    },
    {
      title: "EduCore Learning Ecosystem",
      category: "EdTech Platform",
      description:
        "Aplikasi pembelajaran online interaktif untuk 50.000+ pelajar aktif dengan streaming video adaptif.",
      tags: ["React", "Next.js", "AWS S3", "WebRTC"],
      icon: Layers,
    },
  ];

  return (
    <section id="portofolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-block px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-800/50 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              Portofolio Unggulan
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Karya & Proyek Terpilih
            </h2>
            <p className="text-slate-400 text-base">
              Beberapa hasil kolaborasi strategis bersama mitra kami dalam membangun ekosistem digital.
            </p>
          </div>
          <a
            href="#kontak"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            Diskusikan Proyek Anda <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => {
            const Icon = proj.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col"
              >
                {/* Project Mock Banner */}
                <div className="h-48 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 flex items-center justify-center border-b border-slate-800 relative group-hover:scale-102 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="absolute top-4 right-4 text-xs font-medium px-2.5 py-1 rounded-full bg-slate-950/80 text-blue-300 border border-slate-800">
                    {proj.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">
                      {proj.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
