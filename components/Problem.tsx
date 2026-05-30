'use client'
import { Layers, Map, AlertTriangle } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Problem() {
  const { t } = useLanguage()

  const problems = [
    {
      Icon: Layers,
      title: t.problem.card1title,
      body: t.problem.card1body,
    },
    {
      Icon: Map,
      title: t.problem.card2title,
      body: t.problem.card2body,
    },
    {
      Icon: AlertTriangle,
      title: t.problem.card3title,
      body: t.problem.card3body,
    },
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            {t.problem.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            {t.problem.headline1}
            <br />
            {t.problem.headline2}
          </h2>
          <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
            {t.problem.subheadline}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-slate-50 rounded-2xl border border-slate-100 p-7"
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
  )
}
