const capabilities = [
  {
    icon: "⭐",
    title: "Review intelligence",
    body: "Sentiment patterns, recurring complaints, peak period analysis, and service quality signals across all major platforms.",
  },
  {
    icon: "🍽️",
    title: "Menu & pricing analysis",
    body: "Food cost estimates, pricing gaps relative to competitors, margin risk by dish category, and upsell opportunities.",
  },
  {
    icon: "📍",
    title: "Competitor benchmarking",
    body: "Your 8 nearest competitors mapped by price tier, cuisine, rating, and volume — with clear positioning gaps identified.",
  },
  {
    icon: "💰",
    title: "Financial hypothesis",
    body: "Where the money is likely going. Structural profit drivers and loss patterns surfaced from public signals, ready to validate against your own data.",
  },
  {
    icon: "✅",
    title: "Ranked action list",
    body: "Every finding converts into a concrete action, ranked by estimated impact. No raw data dumps — just what to do next.",
  },
  {
    icon: "🧪",
    title: "30-day experiments",
    body: "Low-risk, testable changes you can run in-house without a consultant. Each with a clear hypothesis and success metric.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-20 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">What&apos;s in the report</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Six dimensions. One report.
            <br />All actionable.
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Every section of the Disha report is designed to produce a decision,
            not just an observation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-2xl mb-3">{c.icon}</div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">{c.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
