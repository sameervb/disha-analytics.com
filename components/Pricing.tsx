'use client'
import { useState } from 'react'
import { Check } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Pricing() {
  const { t } = useLanguage()
  const [selected, setSelected] = useState(1)

  const tiers = [
    {
      name: t.pricing.tier1name,
      price: t.pricing.tier1price,
      description: t.pricing.tier1desc,
      features: [t.pricing.tier1f1, t.pricing.tier1f2, t.pricing.tier1f3, t.pricing.tier1f4],
      recommended: false,
    },
    {
      name: t.pricing.tier2name,
      price: t.pricing.tier2price,
      description: t.pricing.tier2desc,
      features: [t.pricing.tier2f1, t.pricing.tier2f2, t.pricing.tier2f3, t.pricing.tier2f4, t.pricing.tier2f5],
      recommended: true,
    },
    {
      name: t.pricing.tier3name,
      price: t.pricing.tier3price,
      description: t.pricing.tier3desc,
      features: [t.pricing.tier3f1, t.pricing.tier3f2, t.pricing.tier3f3, t.pricing.tier3f4],
      recommended: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            {t.pricing.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            {t.pricing.headline}
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            {t.pricing.subheadline}
          </p>
        </div>

        {/* Software subscription tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-10 items-start">
          {tiers.map((tier, i) => {
            const isSelected = selected === i
            return (
              <div key={tier.name} className="relative pt-3">
                {tier.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-white text-xs font-bold tracking-wide shadow-sm">
                      {t.pricing.recommended}
                    </span>
                  </div>
                )}

                <div
                  onClick={() => setSelected(i)}
                  className={`rounded-2xl border p-7 flex flex-col cursor-pointer transition-all duration-200 h-full ${
                    isSelected
                      ? 'border-accent bg-accent/5 shadow-lg shadow-accent/10'
                      : 'border-slate-100 bg-white hover:border-slate-200'
                  }`}
                >
                  <div className="mb-5">
                    <div className="text-sm font-semibold text-slate-500 mb-1">{tier.name}</div>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-sm font-semibold text-slate-500">€</span>
                      <span className="text-4xl font-bold text-slate-900 tabular-nums">{tier.price}</span>
                      <span className="text-sm text-slate-400 ml-1">{t.pricing.perMonth}</span>
                    </div>
                    <p className="text-sm text-slate-500 mt-2.5 leading-relaxed">{tier.description}</p>
                  </div>

                  <ul className="flex-1 space-y-2.5 mb-6">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <Check
                          size={15}
                          strokeWidth={2.5}
                          className={`flex-shrink-0 mt-0.5 ${isSelected ? 'text-accent' : 'text-slate-300'}`}
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
                        ? 'bg-accent text-white hover:bg-accent-dark'
                        : 'border border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {t.pricing.getStarted}
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* White-Glove Implementation — visually distinct block */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8">
          <div className="flex flex-col md:flex-row gap-8 md:items-center">
            <div className="flex-1">
              <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
                White-glove implementation
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {t.pricing.grantHeadline}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {t.pricing.grantBody}
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#contact"
                className="inline-flex px-5 py-3 rounded-xl bg-white text-slate-900 text-sm font-semibold hover:bg-slate-100 transition-colors"
              >
                {t.pricing.grantCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
