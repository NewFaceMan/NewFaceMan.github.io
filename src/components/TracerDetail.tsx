import { tracerDetail } from "@/data/portfolio";

export default function TracerDetail({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-card rounded-xl overflow-hidden border border-border shadow-2xl mt-4">
      {/* Top Bar */}
      <header className="flex items-center justify-between px-6 py-4 bg-bg/80 backdrop-blur-md border-b border-primary/20">
        <div className="flex items-center gap-4">
          <h3 className="text-2xl font-bold tracking-tighter text-primary">TRACER</h3>
          <div className="h-6 w-px bg-border" />
          <span className="flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-600 dark:text-yellow-400 text-xs font-bold uppercase tracking-widest">
            🏆 최우수상
          </span>
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-primary/70 hover:text-primary transition-colors text-sm font-medium font-mono"
        >
          ▲ 접기
        </button>
      </header>

      <div className="p-6 md:p-8 space-y-10">
        {/* Background + Role */}
        <section className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          <div className="lg:col-span-6 space-y-4">
            <span className="inline-block px-3 py-1 bg-badge text-primary text-xs font-bold rounded">
              Project Background
            </span>
            <h4 className="text-2xl md:text-3xl font-bold text-heading leading-tight">
              Automated Incident Response &amp;<br />Digital Forensic Artifact Analysis
            </h4>
            <p className="text-body leading-relaxed">{tracerDetail.background}</p>
          </div>

          {/* Role Terminal - always dark */}
          <div className="lg:col-span-4">
            <div className="bg-[#1e293b] rounded-lg overflow-hidden border border-[#334155] h-full shadow-inner">
              <div className="bg-[#0f172a] px-4 py-2 flex items-center gap-2 border-b border-[#334155]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-[10px] text-slate-500 font-mono ml-2">bash — tracer-profile</span>
              </div>
              <div className="p-5 font-mono text-sm space-y-3">
                <div className="flex gap-2">
                  <span className="text-[#22d3ee]">$</span>
                  <span className="text-slate-300">whoami</span>
                </div>
                <div className="text-white pl-4">
                  <span className="text-[#22d3ee] font-bold">Role:</span> {tracerDetail.role}
                </div>
                <div className="flex gap-2">
                  <span className="text-[#22d3ee]">$</span>
                  <span className="text-slate-300">ls contribution/</span>
                </div>
                <ul className="text-slate-400 pl-4 space-y-1 list-disc list-inside">
                  {tracerDetail.contributions.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <span className="text-[#22d3ee]">$</span>
                  <span className="w-2 h-4 bg-[#22d3ee]/60 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Flow */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-primary">⚙️</span>
            <h4 className="text-sm font-bold uppercase tracking-widest text-muted">
              System Architecture Flow
            </h4>
          </div>
          <div className="overflow-x-auto pb-4">
            <div className="flex items-center justify-between min-w-[700px] p-6 bg-border-light rounded-xl border border-border">
              {tracerDetail.architecture.map((node, i) => (
                <div key={i} className="contents">
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className={`w-28 h-16 rounded-lg border bg-badge flex items-center justify-center text-center p-2 ${
                        i === 0 || i === tracerDetail.architecture.length - 1
                          ? "border-primary/40 shadow-[0_0_15px_rgba(var(--primary-rgb),0.15)]"
                          : "border-primary/30"
                      }`}
                    >
                      <span className="text-xs font-bold text-heading">{node.name}</span>
                    </div>
                    <span className="text-[10px] text-muted font-mono">{node.label}</span>
                  </div>
                  {i < tracerDetail.architecture.length - 1 && (
                    <div className="flex-1 px-2 flex flex-col items-center">
                      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
                      <span className="text-[9px] text-primary/60 mt-1 font-mono">→</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tracerDetail.detailFeatures.map((feat, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-bg border border-border hover:border-primary/40 transition-all group shadow-sm"
            >
              <div className="w-12 h-12 rounded-lg bg-badge flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>
              <h5 className="text-heading font-bold text-lg mb-2">{feat.title}</h5>
              <p className="text-muted text-sm leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </section>

        {/* Demo Video */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-primary">🎬</span>
            <h4 className="text-sm font-bold uppercase tracking-widest text-muted">
              Demo Video — Sysmon 환경에서의 시연 영상
            </h4>
          </div>
          <div className="relative w-full overflow-hidden rounded-xl border border-border shadow-sm" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/jJ9hbm4Bhb8"
              title="TRACER 시연 영상"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* Results Bar */}
        <section className="bg-primary px-8 py-6 rounded-xl flex flex-wrap gap-8 items-center justify-around">
          {tracerDetail.results.map((r, i) => (
            <div key={i} className="flex items-center gap-4">
              {i > 0 && <div className="w-px h-10 bg-white/20 dark:bg-[var(--bg)]/20 hidden md:block mr-4" />}
              <div className="bg-white dark:bg-[var(--bg)] p-2 rounded-lg text-2xl">{r.icon}</div>
              <div className="flex flex-col">
                <span className="text-[10px] text-white/60 dark:text-[var(--bg)]/60 font-bold uppercase tracking-widest">{r.label}</span>
                <span className="text-xl font-black text-white dark:text-[var(--bg)] leading-none">{r.value}</span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
