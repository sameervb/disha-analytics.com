import { Users2, Compass, Clock } from "lucide-react";

const problems = [
  {
    Icon: Users2,
    title: "No finance team",
    body:
      "Chain restaurants have analysts, controllers, and BI tools. Independent owners have an accountant they see once a year. After the damage is done.",
  },
  {
    Icon: Compass,
    title: "Decisions made on instinct",
    body:
      "Pricing, menu design, opening hours, staffing. Set by intuition, not by data. The information exists publicly. Nobody has been surfacing it.",
  },
  {
    Icon: Clock,
    title: "Problems surface too late",
    body:
      "By the time margins collapse, years of avoidable loss have accumulated. The signals were in reviews, pricing, and competitor behavior the whole time.",
  },
];

export default function Problem() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            The problem
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Great food. No visibility into
            <br />why the numbers don&apos;t add up.
          </h2>
          <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
            Independent restaurants operate on instinct. Not because owners aren&apos;t
            smart, but because they&apos;ve never had access to the right tools.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl border border-slate-100 p-7"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-5">
                <p.Icon size={20} strokeWidth={1.5} className="text-accent" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
