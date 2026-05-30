import { ArrowDown } from "lucide-react";

export default function ProductIntro() {
  return (
    <section id="product" className="py-20 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              What Disha is
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mb-5 leading-snug tracking-tight">
              Enterprise analytics for restaurants.
              <br />Without the enterprise team.
            </h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              Disha is an AI analytics platform built for independent restaurant owners. It does
              the research that chains pay analysts to do: pulling together competitive data,
              review signals, menu pricing, and financial patterns, then turning it into a clear
              PDF report with ranked actions.
            </p>
            <p className="text-slate-500 leading-relaxed mb-6">
              The same intelligence that took a consultant two days and cost thousands now takes
              five minutes.
            </p>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline underline-offset-4"
            >
              See the 4-step process
              <ArrowDown size={14} />
            </a>
          </div>

          {/* Video placeholder */}
          <div className="relative aspect-video bg-slate-900 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-800 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="relative text-center px-8">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-5">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white font-semibold text-sm mb-2">Product walkthrough</p>
              <p className="text-slate-400 text-xs leading-relaxed max-w-xs mx-auto">
                A live Disha report generated for a Luxembourg restaurant. Coming soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
