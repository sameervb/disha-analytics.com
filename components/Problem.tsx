const problems = [
  {
    icon: "👥",
    title: "No finance team",
    body:
      "Chain restaurants have analysts, controllers, and BI tools. Independent owners have an accountant they see once a year — after the damage is done.",
  },
  {
    icon: "🎯",
    title: "Decisions made on instinct",
    body:
      "Pricing, menu design, opening hours, staffing — set by intuition, not by data. The information exists publicly. Nobody has been surfacing it.",
  },
  {
    icon: "⏱️",
    title: "Problems surface too late",
    body:
      "By the time margins collapse, years of avoidable loss have accumulated. The signals were always there — in reviews, in pricing, in competitor behaviour.",
  },
];

export default function Problem() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">The problem</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Great food. No visibility into
            <br />why the numbers don&apos;t add up.
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Independent restaurants operate on instinct — not because owners
            aren&apos;t smart, but because they&apos;ve never had access to the right tools.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl border border-slate-100 p-7 shadow-sm"
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
