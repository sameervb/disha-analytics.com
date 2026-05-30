'use client'
import { useLanguage } from '@/lib/LanguageContext'
import { Language } from '@/lib/i18n/translations'
import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

const options: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'de', label: 'DE' },
  { code: 'lb', label: 'LB' },
]

export default function LanguageSelector() {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors px-2 py-1 rounded-lg hover:bg-slate-100"
        aria-label="Select language"
      >
        {lang.toUpperCase()}
        <ChevronDown size={12} strokeWidth={2.5} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-xl shadow-lg shadow-slate-200/60 py-1 z-50 min-w-[60px]">
          {options.map((opt) => (
            <button
              key={opt.code}
              onClick={() => { setLang(opt.code); setOpen(false) }}
              className={`w-full text-left px-3 py-1.5 text-xs font-semibold transition-colors ${
                lang === opt.code
                  ? 'text-accent bg-blue-50'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
