'use client'
import { useState } from 'react'
import { MessageSquare, Target, Receipt, TrendingUp, ListOrdered, FlaskConical } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Capabilities() {
  const { t } = useLanguage()
  const [mode, setMode] = useState<'market' | 'full'>('market')

  const caps = [
    { Icon: MessageSquare, title: t.capabilities.cap1title, bodyM: t.capabilities.cap1bodyM, bodyF: t.capabilities.cap1bodyF },
    { Icon: Target,        title: t.capabilities.cap2title, bodyM: t.capabilities.cap2bodyM, bodyF: t.capabilities.cap2bodyF },
    { Icon: Receipt,       title: t.capabilities.cap3title, bodyM: t.capabilities.cap3bodyM, bodyF: t.capabilities.cap3bodyF },
    { Icon: TrendingUp,    title: t.capabilities.cap4title, bodyM: t.capabilities.cap4bodyM, bodyF: t.capabilities.cap4bodyF },
    { Icon: ListOrdered,   title: t.capabilities.cap5title, bodyM: t.capabilities.cap5bodyM, bodyF: t.capabilities.cap5bodyF },
    { Icon: FlaskConical,  title: t.capabilities.cap6title, bodyM: t.capabilities.cap6bodyM, bodyF: t.capabilities.cap6bodyF },
  ]

  const isFull = mode === 'full'

  return (
    <section id="capabilities" className="py-20 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            {t.capabilities.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            {t.capabilities.headline1}
            <br />
            {t.capabilities.headline2}
          </h2>
          <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
            {t.capabilities.subheadline}
          </p>
        </div>

        {/* Global toggle */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">View:</span>
          <div className="flex gap-1 p-1 bg-slate-200 rounded-lg">
            <button
              onClick={() => setMode('market')}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${
                !isFull ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {t.capabilities.toggleMarket}
            </button>
            <button
              onClick={() => setMode('full')}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${
                isFull ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {t.capabilities.toggleFull}
            </button>
          </div>
          {isFull && (
            <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
              With your business data connected
            </span>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {caps.map((c) => (
            <div
              key={c.title}
              className={`rounded-2xl border p-6 transition-all duration-300 ${
                isFull
                  ? 'bg-slate-900 border-slate-800'
                  : 'bg-white border-slate-100 hover:border-slate-200'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                isFull ? 'bg-slate-800' : 'bg-blue-50'
              }`}>
                <c.Icon size={20} strokeWidth={1.5} className={isFull ? 'text-blue-400' : 'text-accent'} />
              </div>
              <h3 className={`text-base font-semibold mb-1.5 ${isFull ? 'text-white' : 'text-slate-900'}`}>
                {c.title}
              </h3>
              <p className={`text-sm leading-relaxed transition-all duration-300 ${isFull ? 'text-slate-400' : 'text-slate-500'}`}>
                {isFull ? c.bodyF : c.bodyM}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
