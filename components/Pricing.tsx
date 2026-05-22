const tiers = [
  {
    name: "Starter",
    price: "€79",
    period: "/month",
    description: "For owners who want a monthly pulse on their business.",
    features: [
      "Monthly intelligence report",
      "4 competitor benchmarks",
      "PDF download",
      "Email delivery",
    ],
    cta: "Request a demo",
    featured: false,
  },
  {
    name: "Growth",
    price: "€129",
    period: "/month",
    description: "For owners actively working to improve margins and positioning.",
    features: [
      "Weekly refresh",
      "Menu pricing alerts",
      "Action priority list",
      "8 competitors tracked",
      "Owner walkthrough mode",
    ],
    cta: "Request a demo",
    featured: true,
  },
  {
    name: "Multi-Location",
    price: "€199",
    period: "/month",
    description: "For groups managing up to 3 locations from one dashboard.",
    features: [
      "Up to 3 locations",
      "Cross-location comparison",
      "Market share analysis",
      "Full POS data integration",
    ],
    cta: "Request a demo",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Pays for itself in month one.
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            The average Growth plan client recovers €1,000–1,500 in margin from the
            first action alone. The subscription costs €129.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border p-7 flex flex-col ${
                tier.featured
                  ? "border-accent bg-blue-50 shadow-lg shadow-blue-100"
                  : "border-slate-100 bg-white shadow-sm"
              }`}
            >
              {tier.featured && (
                <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
                  Most popular
                </div>
              )}
              <div className="mb-4">
                <div className="text-lg font-bold text-slate-900">{tier.name}</div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                  <span className="text-sm text-slate-400">{tier.period}</span>
                </div>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">{tier.description}</p>
              </div>

              <ul className="flex-1 space-y-2 mb-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`block text-center px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${
                  tier.featured
                    ? "bg-accent text-white hover:bg-accent-dark"
                    : "border border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Implementation note */}
        <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex-1">
            <div className="text-sm font-bold text-emerald-800 uppercase tracking-widest mb-1">
              Implementation packages — grant eligible
            </div>
            <p className="text-sm text-emerald-700 leading-relaxed">
              Standard (€2,999) and Full Intelligence (€4,999) packages qualify for
              70–100% Luxembourg SMB digitalisation grants. Most owners pay
              under €1,500 out of pocket.
            </p>
          </div>
          <a
            href="#demo"
            className="flex-shrink-0 px-4 py-2.5 rounded-xl bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 transition-colors"
          >
            Ask about grants
          </a>
        </div>
      </div>
    </section>
  );
}
