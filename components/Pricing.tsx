'use client'
import { useState } from 'react'
import { Check, Minus } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

const YES = true
const GROWTH_PLUS = 'growth+'
const NO = false

type RowValue = boolean | 'growth+'

const tableRows: { key: string; market: RowValue; full: RowValue }[] = [
  { key: 'row1', market: YES,         full: YES },
  { key: 'row2', market: YES,         full: YES },
  { key: 'row3', market: YES,         full: YES },
  { key: 'row4', market: GROWTH_PLUS, full: YES },
  { key: 'row5', market: NO,          full: YES },
  { key: 'row6', market: NO,          full: YES },
  { key: 'row7', market: NO,          full: YES },
  { key: 'row8', market: NO,          full: YES },
]

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

  const fullFeatures = [
    t.pricing.fullF1, t.pricing.fullF2, t.pricing.fullF3, t.pricing.fullF4,
    t.pricing.fullF5, t.pricing.fullF6, t.pricing.fullF7, t.pricing.fullF8,
  ]

  function CellValue({ value, note }: { value: RowValue; note?: string }) {
    if (value === true) {
      return <Check size={16} strokeWidth={2.5} className="text-accent mx-auto" />
    }
    if (value === GROWTH_PLUS) {
      return <span className="text-xs font-semibold text-slate-400">{note}</span>
    }
    return <Minus size={14} strokeWidth={2} className="text-slate-200 mx-auto" />
  }

  return (
    <section id="pricing" className="py-20 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
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

        {/* ── Comparison table ── */}
        <div className="mb-16 rounded-2xl border border-slate-200 bg-white overflow-hidden">
          <div className="grid grid-cols-3 border-b border-slate-100">
            <div className="p-5 text-xs font-semibold uppercase tracking-widest text-slate-400">
              {t.pricing.compTitle}
            </div>
            <div className="p-5 text-center border-l border-slate-100">
              <div className="text-sm font-bold text-slate-900">{t.pricing.colMarket}</div>
              <div className="text-2xl font-bold text-slate-900 tabular-nums mt-1">{t.pricing.monthlyMarket}</div>
              <div className="text-xs text-slate-400">{t.pricing.monthlyLabel.toLowerCase()}</div>
            </div>
            <div className="p-5 text-center border-l border-slate-100 bg-slate-950">
              <div className="text-sm font-bold text-white">{t.pricing.colFull}</div>
              <div className="text-2xl font-bold text-white tabular-nums mt-1">{t.pricing.monthlyFull}</div>
              <div className="text-xs text-slate-500">{t.pricing.monthlyLabel.toLowerCase()}</div>
            </div>
          </div>

          {tableRows.map((row, i) => {
            const rowLabel = t.pricing[row.key as keyof typeof t.pricing] as string
            const isLast = i === tableRows.length - 1
            return (
              <div
                key={row.key}
                className={`grid grid-cols-3 ${!isLast ? 'border-b border-slate-50' : ''} ${i % 2 === 0 ? '' : 'bg-slate-50/50'}`}
              >
                <div className="px-5 py-3.5 text-sm text-slate-600">{rowLabel}</div>
                <div className="px-5 py-3.5 text-center border-l border-slate-100">
                  <CellValue value={row.market} note={t.pricing.row4marketNote} />
                </div>
                <div className="px-5 py-3.5 text-center border-l border-slate-100 bg-slate-950/[0.02]">
                  <CellValue value={row.full} />
                </div>
              </div>
            )
          })}

          {/* Setup + CTA row */}
          <div className="grid grid-cols-3 border-t border-slate-200 bg-slate-50">
            <div className="px-5 py-4 text-xs font-semibold text-slate-400 uppercase tracking-widest self-center">
              {t.pricing.setupLabel}
            </div>
            <div className="px-5 py-4 text-center border-l border-slate-200">
              <div className="text-sm font-semibold text-slate-500">{t.pricing.setupMarket}</div>
              <a
                href="#market-intelligence"
                className="mt-3 inline-block text-xs font-semibold text-accent hover:underline underline-offset-2"
              >
                {t.pricing.ctaMarket} ↓
              </a>
            </div>
            <div className="px-5 py-4 text-center border-l border-slate-200 bg-slate-950/[0.02]">
              <div className="text-sm font-bold text-slate-900">{t.pricing.setupFull}</div>
              <a
                href="#contact"
                className="mt-3 inline-block text-xs font-semibold text-accent hover:underline underline-offset-2"
              >
                {t.pricing.ctaFull} →
              </a>
            </div>
          </div>
        </div>

        {/* ── Market Intelligence tiers ── */}
        <div id="market-intelligence" className="mb-12">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">
              {t.pricing.marketTitle}
            </p>
            <p className="text-sm text-slate-500">{t.pricing.marketDesc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
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
        </div>

        {/* ── Full Intelligence product ── */}
        <div className="mb-10 rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-10">
              {/* Left — product info */}
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
                  {t.pricing.fullTitle}
                </p>
                <p className="text-sm text-slate-500 mb-6">{t.pricing.fullDesc}</p>

                <ul className="space-y-2.5">
                  {fullFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <Check size={15} strokeWidth={2.5} className="flex-shrink-0 mt-0.5 text-emerald-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — pricing card */}
              <div className="flex-shrink-0 md:w-64">
                <div className="rounded-xl border border-slate-700 bg-slate-900 p-6 space-y-5">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">
                      {t.pricing.fullSetupLabel}
                    </div>
                    <div className="text-3xl font-bold text-white tabular-nums">{t.pricing.fullSetupPrice}</div>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{t.pricing.fullSetupNote}</p>
                  </div>

                  <div className="border-t border-slate-800 pt-5">
                    <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">
                      {t.pricing.fullMonthlyLabel}
                    </div>
                    <div className="text-2xl font-bold text-white tabular-nums">{t.pricing.fullMonthlyPrice}</div>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{t.pricing.fullMonthlyNote}</p>
                  </div>

                  <a
                    href="#contact"
                    className="block text-center px-4 py-3 rounded-xl bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-colors"
                  >
                    {t.pricing.fullCta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Grant block ── */}
        <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex-1">
            <div className="text-sm font-semibold text-emerald-800 mb-1">{t.pricing.grantHeadline}</div>
            <p className="text-sm text-emerald-700 leading-relaxed">{t.pricing.grantBody}</p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-4 py-2.5 rounded-xl bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 transition-colors"
          >
            {t.pricing.grantCta}
          </a>
        </div>

      </div>
    </section>
  )
}
