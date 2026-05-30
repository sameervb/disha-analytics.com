'use client'
import { useLanguage } from '@/lib/LanguageContext'

export default function HowItWorks() {
  const { t } = useLanguage()

  const steps = [
    { number: t.howItWorks.step1n, title: t.howItWorks.step1title, body: t.howItWorks.step1body },
    { number: t.howItWorks.step2n, title: t.howItWorks.step2title, body: t.howItWorks.step2body },
    { number: t.howItWorks.step3n, title: t.howItWorks.step3title, body: t.howItWorks.step3body },
    { number: t.howItWorks.step4n, title: t.howItWorks.step4title, body: t.howItWorks.step4body },
  ]

  return (
    <section id="how-it-works" className="py-20 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            {t.howItWorks.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            {t.howItWorks.headline1}
            <br />
            {t.howItWorks.headline2}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex gap-6 p-7 rounded-2xl border border-slate-100 bg-white"
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
  )
}
