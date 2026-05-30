'use client'
import { MessageSquare, Target, Receipt, TrendingUp, ListOrdered, FlaskConical } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Capabilities() {
  const { t } = useLanguage()

  const capabilities = [
    { Icon: MessageSquare, title: t.capabilities.cap1title, body: t.capabilities.cap1body },
    { Icon: Target,        title: t.capabilities.cap2title, body: t.capabilities.cap2body },
    { Icon: Receipt,       title: t.capabilities.cap3title, body: t.capabilities.cap3body },
    { Icon: TrendingUp,    title: t.capabilities.cap4title, body: t.capabilities.cap4body },
    { Icon: ListOrdered,   title: t.capabilities.cap5title, body: t.capabilities.cap5body },
    { Icon: FlaskConical,  title: t.capabilities.cap6title, body: t.capabilities.cap6body },
  ]

  return (
    <section id="capabilities" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="bg-slate-50 rounded-2xl border border-slate-100 p-6 hover:border-slate-200 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <c.Icon size={20} strokeWidth={1.5} className="text-accent" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-1.5">{c.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
