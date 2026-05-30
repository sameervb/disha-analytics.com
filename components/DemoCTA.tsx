'use client'
import { Phone, Mail } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

export default function DemoCTA() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
          {t.contact.label}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
          {t.contact.headline}
        </h2>
        <p className="text-lg text-slate-500 max-w-xl mx-auto mb-12 leading-relaxed">
          {t.contact.body}
        </p>

        <div className="grid sm:grid-cols-2 gap-5 max-w-sm mx-auto sm:max-w-md">
          <a
            href="tel:+352691189912"
            className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-slate-200 hover:border-accent/40 hover:bg-blue-50/50 transition-all group"
          >
            <div className="w-11 h-11 rounded-xl bg-slate-100 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
              <Phone size={18} strokeWidth={1.5} className="text-accent" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">
                {t.contact.callLabel}
              </div>
              <div className="text-base font-semibold text-slate-900">+352 691 189 912</div>
            </div>
          </a>

          <a
            href="mailto:sameerbh08@gmail.com"
            className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-slate-200 hover:border-accent/40 hover:bg-blue-50/50 transition-all group"
          >
            <div className="w-11 h-11 rounded-xl bg-slate-100 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
              <Mail size={18} strokeWidth={1.5} className="text-accent" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">
                {t.contact.emailLabel}
              </div>
              <div className="text-base font-semibold text-slate-900">sameerbh08@gmail.com</div>
            </div>
          </a>
        </div>

        <p className="mt-10 text-xs text-slate-400">{t.contact.footerNote}</p>
      </div>
    </section>
  )
}
