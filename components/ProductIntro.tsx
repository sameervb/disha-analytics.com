'use client'
import { ArrowDown } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import ProductMockup from '@/components/ProductMockup'

export default function ProductIntro() {
  const { t } = useLanguage()

  return (
    <section id="product" className="py-20 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div className="md:sticky md:top-24">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              {t.productIntro.label}
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mb-5 leading-snug tracking-tight">
              {t.productIntro.headline}
            </h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              {t.productIntro.body1}
            </p>
            <p className="text-slate-500 leading-relaxed mb-6">
              {t.productIntro.body2}
            </p>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline underline-offset-4"
            >
              {t.productIntro.link}
              <ArrowDown size={14} />
            </a>
          </div>

          {/* Product mockup — replaces Coming Soon video */}
          <div>
            <ProductMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
