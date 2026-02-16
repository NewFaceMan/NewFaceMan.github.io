import { tracerDetail } from "@/data/portfolio";

export default function TracerDetail({ onClose }: { onClose: () => void }) {
  return (
    <div className="border border-border mt-6 bg-surface">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div className="flex items-center gap-4">
          <h3 className="font-mono text-lg font-bold text-accent tracking-wide">
            TRACER
          </h3>
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 border border-accent/40 text-accent">
            최우수상
          </span>
        </div>
        <button
          onClick={onClose}
          className="font-mono text-[11px] text-muted hover:text-accent transition-colors tracking-wider"
        >
          CLOSE
        </button>
      </header>

      <div className="p-6 md:p-8 space-y-10">
        {/* Background + Role */}
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-4">
            <div className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase">
              PROJECT BACKGROUND
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-heading leading-tight">
              Automated Incident Response &amp;
              <br />
              Digital Forensic Artifact Analysis
            </h4>
            <p className="text-body text-sm leading-relaxed">
              {tracerDetail.background}
            </p>
          </div>

          {/* Role & Contributions */}
          <div className="lg:col-span-2">
            <div className="border border-border bg-bg p-5 font-mono text-sm h-full">
              <div className="text-[10px] text-accent tracking-[0.2em] uppercase mb-4 pb-2 border-b border-border">
                ROLE &amp; CONTRIBUTIONS
              </div>
              <div className="text-heading text-sm mb-4">
                {tracerDetail.role}
              </div>
              <ul className="space-y-2 text-muted text-xs">
                {tracerDetail.contributions.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5 text-[10px]">
                      &#9656;
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Architecture Flow */}
        <section className="space-y-4">
          <div className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase">
            SYSTEM ARCHITECTURE FLOW
          </div>
          <div className="overflow-x-auto pb-4">
            <div className="flex items-center justify-between min-w-[700px] p-6 border border-border bg-bg">
              {tracerDetail.architecture.map((node, i) => (
                <div key={i} className="contents">
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className={`w-28 h-14 border flex items-center justify-center text-center p-2 ${
                        i === 0 ||
                        i === tracerDetail.architecture.length - 1
                          ? "border-accent/40 bg-accent-dim shadow-[0_0_10px_rgba(13,148,136,0.06)]"
                          : "border-border bg-surface"
                      }`}
                    >
                      <span className="text-xs font-bold text-heading font-mono">
                        {node.name}
                      </span>
                    </div>
                    <span className="text-[10px] text-muted font-mono">
                      {node.label}
                    </span>
                  </div>
                  {i < tracerDetail.architecture.length - 1 && (
                    <div className="flex-1 px-3 flex items-center">
                      <div className="h-px w-full bg-border" />
                      <span className="text-accent text-xs mx-1 shrink-0">
                        &rarr;
                      </span>
                      <div className="h-px w-full bg-border" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tracerDetail.detailFeatures.map((feat, i) => (
            <div
              key={i}
              className="p-5 border border-border hover:border-accent/30 transition-colors bg-bg"
            >
              <h5 className="text-heading font-bold text-sm mb-2">
                {feat.title}
              </h5>
              <p className="text-muted text-xs leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </section>

        {/* Demo Videos */}
        <section className="space-y-6">
          <div className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase">
            DEMO &mdash; SYSMON ENVIRONMENT
          </div>
          <div
            className="relative w-full overflow-hidden border border-border"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/jJ9hbm4Bhb8"
              title="TRACER 시연 영상"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase mt-8">
            DEMO &mdash; NON-SYSMON ENVIRONMENT
          </div>
          <div
            className="relative w-full overflow-hidden border border-border"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/oLme94BEYio"
              title="TRACER Non-Sysmon 시연 영상"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* Results */}
        <section className="border border-accent/30 bg-accent-dim px-8 py-6 flex flex-wrap gap-10 items-center justify-around">
          {tracerDetail.results.map((r, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="font-mono text-[10px] text-accent/60 tracking-[0.2em] uppercase">
                {r.label}
              </span>
              <span className="text-lg font-bold text-heading mt-1">
                {r.value}
              </span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
