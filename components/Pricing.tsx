"use client";
import { useState } from "react";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "79",
    description: "For owners who want a monthly pulse on their business.",
    features: [
      "Monthly intelligence report",
      "4 competitor benchmarks",
      "PDF download",
      "Email delivery",
    ],
    recommended: false,
  },
  {
    name: "Growth",
    price: "129",
    description: "For owners actively working to improve margins and positioning.",
    features: [
      "Weekly refresh",
      "Menu pricing alerts",
      "Action priority list",
      "8 competitors tracked",
      "Owner walkthrough mode",
    ],
    recommended: true,
  },
  {
    name: "Multi-Location",
    price: "199",
    description: "For groups managing up to 3 locations from one dashboard.",
    features: [
      "Up to 3 locations",
      "Cross-location comparison",
      "Market share analysis",
      "POS data integration",
    ],
    recommended: false,
  },
];

export default function Pricing() {
  const [selected, setSelected] = useState(1);

  return (
    <section id="pricing" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Pays for itself in month one.
          </h2>
          <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
            Pilot findings suggest €1,000-2,000 in recoverable margin identified from a single
            report. The Growth plan costs €129 a month.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10 items-start">
          {tiers.map((tier, i) => {
            const isSelected = selected === i;
            return (
              <div key={tier.name} className="relative pt-3">
                {/* Recommended badge */}
                {tier.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-white text-xs font-bold tracking-wide shadow-sm">
                      Recommended
                    </span>
                  </div>
                )}

                <div
                  onClick={() => setSelected(i)}
                  className={`rounded-2xl border p-7 flex flex-col cursor-pointer transition-all duration-200 h-full ${
                    isSelected
                      ? "border-accent bg-accent/5 shadow-lg shadow-accent/10"
                      : "border-slate-100 bg-white hover:border-slate-200"
                  }`}
                >
                  <div className="mb-5">
                    <div className="text-sm font-semibold text-slate-500 mb-1">{tier.name}</div>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-sm font-semibold text-slate-500">€</span>
                      <span className="text-4xl font-bold text-slate-900 tabular-nums">{tier.price}</span>
                      <span className="text-sm text-slate-400 ml-1">/mo</span>
                    </div>
                    <p className="text-sm text-slate-500 mt-2.5 leading-relaxed">{tier.description}</p>
                  </div>

                  <ul className="flex-1 space-y-2.5 mb-6">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <Check
                          size={15}
                          strokeWidth={2.5}
                          className={`flex-shrink-0 mt-0.5 ${isSelected ? "text-accent" : "text-slate-300"}`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    onClick={(e) => e.stopPropagation()}
                    className={`block text-center px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors ${
                      isSelected
                        ? "bg-accent text-white hover:bg-accent-dark"
                        : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    Get started
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Grant note */}
        <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex-1">
            <div className="text-sm font-semibold text-emerald-800 mb-1">
              Grant-eligible implementation packages
            </div>
            <p className="text-sm text-emerald-700 leading-relaxed">
              Standard (€2,999) and Full Intelligence (€4,999) packages qualify for
              70-100% Luxembourg SMB digitalisation grants. Most owners pay
              under €1,500 out of pocket.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-4 py-2.5 rounded-xl bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 transition-colors"
          >
            Ask about grants
          </a>
        </div>
      </div>
    </section>
  );
}
