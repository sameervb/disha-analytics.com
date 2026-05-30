'use client'
import Image from 'next/image'
import { ArrowLeft, Mail } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import LanguageSelector from '@/components/ui/LanguageSelector'

export default function InstitutionsPage() {
  const { t } = useLanguage()

  const partners = [
    { name: t.institutions.partner1name, role: t.institutions.partner1role, body: t.institutions.partner1body },
    { name: t.institutions.partner2name, role: t.institutions.partner2role, body: t.institutions.partner2body },
    { name: t.institutions.partner3name, role: t.institutions.partner3role, body: t.institutions.partner3body },
  ]

  const asks = [
    { title: t.institutions.ask1title, body: t.institutions.ask1body },
    { title: t.institutions.ask2title, body: t.institutions.ask2body },
    { title: t.institutions.ask3title, body: t.institutions.ask3body },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Minimal nav */}
      <nav className="border-b border-slate-800 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center">
            <Image src="/disha-logo-light.png" alt="Disha" width={80} height={28} />
          </a>
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={14} />
              {t.institutions.backToSite}
            </a>
          </div>
        </div>
      </nav>

      <main className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3">
              {t.institutions.label}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight leading-tight">
              {t.institutions.headline}
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              {t.institutions.subheadline}
            </p>
          </div>

          {/* Partner cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {partners.map((p) => (
              <div
                key={p.name}
                className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-7"
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
                  {p.role}
                </div>
                <h3 className="text-base font-semibold text-white mb-3">{p.name}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          {/* What we're asking for */}
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-8 mb-10">
            <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-6">
              {t.institutions.askHeadline}
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {asks.map((item) => (
                <div key={item.title}>
                  <div className="text-sm font-semibold text-white mb-1.5">{item.title}</div>
                  <div className="text-sm text-slate-400 leading-relaxed">{item.body}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="mailto:sameerbh08@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 font-semibold text-base hover:bg-slate-100 transition-colors"
            >
              <Mail size={16} />
              {t.institutions.ctaLabel}
            </a>
            <p className="mt-4 text-xs text-slate-600">sameerbh08@gmail.com · +352 691 189 912</p>
          </div>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-slate-800 px-6 py-8 text-center text-xs text-slate-700">
        © {new Date().getFullYear()} Disha Analytics · Luxembourg
      </footer>
    </div>
  )
}
