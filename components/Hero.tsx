export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-accent uppercase tracking-widest mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span>
          AI Restaurant Intelligence Platform
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
          Your restaurant deserves
          <br />
          <span className="text-accent">better than instinct.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10">
          Disha is an AI analytics platform that scans 8 public data sources and delivers a
          structured intelligence report — competitive positioning, pricing gaps, review patterns,
          ranked actions — in under 5 minutes.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#product"
            className="px-6 py-3.5 rounded-xl bg-accent text-white font-semibold text-base hover:bg-accent-dark transition-colors shadow-sm"
          >
            See how it works ↓
          </a>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-base hover:border-slate-300 hover:bg-slate-50 transition-colors"
          >
            Get in touch
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: "5 min", label: "Full intelligence report" },
            { value: "8", label: "Data sources scanned" },
            { value: "6", label: "AI specialist agents" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-extrabold text-slate-900">{stat.value}</div>
              <div className="text-xs text-slate-400 mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
