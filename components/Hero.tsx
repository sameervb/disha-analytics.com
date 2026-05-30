'use client'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  const stats = [
    { value: t.hero.stat1value, label: t.hero.stat1label },
    { value: t.hero.stat2value, label: t.hero.stat2label },
    { value: t.hero.stat3value, label: t.hero.stat3label },
  ]

  return (
    <section className="pt-32 pb-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-accent uppercase tracking-widest mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
          {t.hero.tag}
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-6">
          {t.hero.headline1}
          <br />
          <span className="text-accent">{t.hero.headline2}</span>
        </h1>

        <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10">
          {t.hero.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-white font-semibold text-base hover:bg-accent-dark transition-colors shadow-sm"
          >
            {t.hero.cta1}
            <ChevronDown size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-base hover:border-slate-300 hover:bg-slate-50 transition-colors"
          >
            {t.hero.cta2}
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="flex items-center justify-center gap-0 max-w-sm mx-auto">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex-1 text-center ${i < stats.length - 1 ? 'border-r border-slate-200' : ''}`}
            >
              <div className="text-2xl font-bold text-slate-900 tabular-nums">{stat.value}</div>
              <div className="text-xs text-slate-400 mt-1 leading-tight px-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
