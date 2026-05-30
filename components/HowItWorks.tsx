const steps = [
  {
    number: "01",
    title: "Submit your restaurant",
    body: "Enter your restaurant name and city. That's all the input required. Disha handles the research from there.",
  },
  {
    number: "02",
    title: "Disha scans 8 sources",
    body:
      "Google Reviews, TripAdvisor, menus, pricing signals, competitor footprint, sector benchmarks. Scraped and structured automatically.",
  },
  {
    number: "03",
    title: "Six AI agents analyze",
    body:
      "Specialist agents examine reviews, pricing, margins, competition, and financial patterns independently. Then a synthesis agent draws conclusions.",
  },
  {
    number: "04",
    title: "You receive the report",
    body:
      "A structured intelligence report with ranked actions, validated hypotheses, and 30-day experiments you can act on immediately.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            From restaurant name to structured
            <br />report in under 5 minutes.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex gap-6 p-7 rounded-2xl border border-slate-100 bg-slate-50"
            >
              <div className="text-4xl font-bold text-slate-200 leading-none flex-shrink-0 tabular-nums select-none">
                {step.number}
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
