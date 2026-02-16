import { tracerDetail } from "@/data/portfolio";

export default function TracerDetail({ onClose }: { onClose: () => void }) {
  return (
    <div className="border border-border mt-6 bg-bg rounded-xl overflow-hidden shadow-sm">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface">
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-bold text-accent">
            TRACER
          </h3>
          <span className="font-sans text-[11px] px-2.5 py-0.5 rounded-md bg-accent-dim text-accent border border-accent-border font-semibold">
            최우수상
          </span>
        </div>
        <button
          onClick={onClose}
          className="text-sm text-muted hover:text-accent transition-colors"
        >
          Close
        </button>
      </header>

      <div className="p-6 md:p-8 space-y-10">
        {/* Background + Role */}
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-4">
            <div className="font-sans text-[10px] text-accent tracking-wider uppercase font-medium">
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
            <div className="border border-border bg-surface rounded-xl p-5 h-full">
              <div className="font-sans text-[10px] text-accent tracking-wider uppercase font-medium mb-4 pb-2 border-b border-border">
                ROLE &amp; CONTRIBUTIONS
              </div>
              <div className="text-heading text-sm font-semibold mb-4">
                {tracerDetail.role}
              </div>
              <ul className="space-y-2 text-muted text-xs">
                {tracerDetail.contributions.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#8226;</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Architecture Flow */}
        <section className="space-y-4">
          <div className="font-sans text-[10px] text-accent tracking-wider uppercase font-medium">
            SYSTEM ARCHITECTURE FLOW
          </div>
          <div className="overflow-x-auto pb-4">
            <div className="flex items-center justify-between min-w-[700px] p-6 border border-border bg-surface rounded-xl">
              {tracerDetail.architecture.map((node, i) => (
                <div key={i} className="contents">
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className={`w-28 h-14 rounded-lg border flex items-center justify-center text-center p-2 ${
                        i === 0 ||
                        i === tracerDetail.architecture.length - 1
                          ? "border-accent-border bg-accent-dim"
                          : "border-border bg-bg"
                      }`}
                    >
                      <span className="text-xs font-bold text-heading font-sans">
                        {node.name}
                      </span>
                    </div>
                    <span className="text-[10px] text-muted font-sans">
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
              className="p-5 border border-border rounded-xl bg-surface hover:border-[#cbd5e1] hover:shadow-sm transition-all duration-200"
            >
              <h5 className="text-heading font-semibold text-sm mb-2">
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
          <div className="font-sans text-[10px] text-accent tracking-wider uppercase font-medium">
            DEMO &mdash; SYSMON ENVIRONMENT
          </div>
          <div
            className="relative w-full overflow-hidden border border-border rounded-xl"
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

          <div className="font-sans text-[10px] text-accent tracking-wider uppercase font-medium mt-8">
            DEMO &mdash; NON-SYSMON ENVIRONMENT
          </div>
          <div
            className="relative w-full overflow-hidden border border-border rounded-xl"
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
        <section className="border border-accent-border bg-accent-dim rounded-xl px-8 py-6 flex flex-wrap gap-10 items-center justify-around">
          {tracerDetail.results.map((r, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="font-sans text-[10px] text-accent/60 tracking-wider uppercase">
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
