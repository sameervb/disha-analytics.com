'use client'
import { useLanguage } from '@/lib/LanguageContext'

export default function PilotFinding() {
  const { t } = useLanguage()

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-10 md:p-14 relative overflow-hidden">
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
              {t.pilotFinding.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 leading-snug tracking-tight">
              {t.pilotFinding.headline}
            </h2>
            <p className="text-slate-400 leading-relaxed text-base">
              {t.pilotFinding.body}
            </p>
          </div>

          {/* Stat callout */}
          <div className="relative mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row gap-6 sm:items-center">
            <div>
              <div className="text-4xl font-bold text-white tabular-nums">€200,000+</div>
              <div className="text-sm text-slate-500 mt-1">in structural losses identified</div>
            </div>
            <div className="h-px sm:h-12 sm:w-px bg-slate-800" />
            <div>
              <div className="text-4xl font-bold text-white tabular-nums">4.6 ★</div>
              <div className="text-sm text-slate-500 mt-1">Google rating — not visible from outside</div>
            </div>
            <div className="h-px sm:h-12 sm:w-px bg-slate-800" />
            <div>
              <div className="text-4xl font-bold text-white tabular-nums">5 yrs</div>
              <div className="text-sm text-slate-500 mt-1">of accumulation before detection</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
