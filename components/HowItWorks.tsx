'use client'
import { useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

export default function HowItWorks() {
  const { t } = useLanguage()
  const [tab, setTab] = useState<'market' | 'full'>('market')

  const marketSteps = [
    { n: t.howItWorks.m1n, title: t.howItWorks.m1title, body: t.howItWorks.m1body },
    { n: t.howItWorks.m2n, title: t.howItWorks.m2title, body: t.howItWorks.m2body },
    { n: t.howItWorks.m3n, title: t.howItWorks.m3title, body: t.howItWorks.m3body },
    { n: t.howItWorks.m4n, title: t.howItWorks.m4title, body: t.howItWorks.m4body },
  ]

  const fullSteps = [
    { n: t.howItWorks.f1n, title: t.howItWorks.f1title, body: t.howItWorks.f1body },
    { n: t.howItWorks.f2n, title: t.howItWorks.f2title, body: t.howItWorks.f2body },
    { n: t.howItWorks.f3n, title: t.howItWorks.f3title, body: t.howItWorks.f3body },
    { n: t.howItWorks.f4n, title: t.howItWorks.f4title, body: t.howItWorks.f4body },
  ]

  const steps = tab === 'market' ? marketSteps : fullSteps

  return (
    <section id="how-it-works" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            {t.howItWorks.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            {t.howItWorks.headline1}
            <br />
            {t.howItWorks.headline2}
          </h2>
          <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
            {t.howItWorks.subheadline}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-1 p-1 bg-slate-100 rounded-xl w-fit mb-8">
          <button
            onClick={() => setTab('market')}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              tab === 'market'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {t.howItWorks.tabMarket}
          </button>
          <button
            onClick={() => setTab('full')}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              tab === 'full'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {t.howItWorks.tabFull}
          </button>
        </div>

        {/* Tab intro */}
        <p className="text-sm text-slate-500 mb-6 leading-relaxed">
          {tab === 'market' ? t.howItWorks.marketIntro : t.howItWorks.fullIntro}
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-5">
          {steps.map((step) => (
            <div
              key={step.n + step.title}
              className={`flex gap-6 p-7 rounded-2xl border ${
                tab === 'full'
                  ? 'border-slate-800 bg-slate-950'
                  : 'border-slate-100 bg-slate-50'
              }`}
            >
              <div className={`text-4xl font-bold leading-none flex-shrink-0 tabular-nums select-none ${
                tab === 'full' ? 'text-slate-700' : 'text-slate-200'
              }`}>
                {step.n}
              </div>
              <div>
                <h3 className={`text-base font-semibold mb-2 ${tab === 'full' ? 'text-white' : 'text-slate-900'}`}>
                  {step.title}
                </h3>
                <p className={`text-sm leading-relaxed ${tab === 'full' ? 'text-slate-400' : 'text-slate-500'}`}>
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Nudge to Full Intelligence when on market tab */}
        {tab === 'market' && (
          <div className="mt-6 flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100">
            <p className="text-sm text-slate-500">
              Connect your actual business data to validate every finding.
            </p>
            <button
              onClick={() => setTab('full')}
              className="flex-shrink-0 ml-4 text-sm font-semibold text-accent hover:underline underline-offset-4"
            >
              {t.howItWorks.tabFull} →
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
