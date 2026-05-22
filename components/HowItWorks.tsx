const steps = [
  {
    number: "01",
    title: "Submit your restaurant",
    body: "Enter your restaurant name and city. No account needed to request a demo — we handle the setup.",
  },
  {
    number: "02",
    title: "Disha scans 8 sources",
    body:
      "Google Reviews, TripAdvisor, menus, pricing signals, competitor footprint, sector benchmarks — scraped and structured automatically.",
  },
  {
    number: "03",
    title: "Six AI agents analyse",
    body:
      "Specialist agents examine reviews, pricing, margins, competition, and financial patterns independently — then a synthesis agent draws conclusions.",
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
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">How it works</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            From restaurant name to structured
            <br />report in under 5 minutes.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex gap-5 p-7 rounded-2xl border border-slate-100 bg-slate-50"
            >
              <div className="text-3xl font-extrabold text-blue-100 leading-none flex-shrink-0 w-12">
                {step.number}
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
