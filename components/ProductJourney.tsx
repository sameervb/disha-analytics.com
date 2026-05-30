'use client'
import { useState } from 'react'
import {
  Globe2, MessageSquare, Target, ShieldCheck, FlaskConical, ListOrdered,
  Check, RotateCcw,
} from 'lucide-react'

// ── Back face content for each card ──────────────────────────────────────────

function SourcesBack() {
  const sources = [
    { name: 'Google Reviews',    detail: '847 reviews' },
    { name: 'TripAdvisor',       detail: '312 reviews' },
    { name: 'TheFork',           detail: 'local pricing' },
    { name: 'Wolt',              detail: 'delivery data' },
    { name: 'Your website',      detail: 'menu structure' },
    { name: 'Competitor menus',  detail: '8 restaurants' },
    { name: 'Local market data', detail: 'sector rates' },
    { name: 'Sector benchmarks', detail: 'cuisine avg' },
  ]
  return (
    <div className="space-y-1.5">
      <div className="text-[9px] font-semibold uppercase tracking-widest text-slate-500 mb-2">
        La Brasserie du Parc · Luxembourg
      </div>
      {sources.map((s) => (
        <div key={s.name} className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Check size={10} strokeWidth={3} className="text-emerald-500 flex-shrink-0" />
            <span className="text-[11px] text-slate-700">{s.name}</span>
          </div>
          <span className="text-[10px] text-slate-400 font-mono">{s.detail}</span>
        </div>
      ))}
    </div>
  )
}

function ReviewsBack() {
  const signals = [
    { label: 'Cold food on delivery', pct: 22, bar: 'bg-amber-400', platform: 'Wolt · Fri–Sun PM' },
    { label: 'Service speed', pct: 8, bar: 'bg-blue-400', platform: 'Google · Fri lunch' },
    { label: 'Portion size praise', pct: 31, bar: 'bg-emerald-400', platform: 'TripAdvisor · all' },
  ]
  return (
    <div className="space-y-3">
      <div className="text-[9px] font-semibold uppercase tracking-widest text-slate-500 mb-2">Review signal analysis</div>
      {signals.map((s) => (
        <div key={s.label}>
          <div className="flex justify-between items-baseline mb-1">
            <span className="text-[11px] text-slate-700">{s.label}</span>
            <span className="text-[11px] font-bold text-slate-900 tabular-nums">{s.pct}%</span>
          </div>
          <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden mb-0.5">
            <div className={`h-full rounded-full ${s.bar}`} style={{ width: `${s.pct * 2.5}%` }} />
          </div>
          <div className="text-[9px] text-slate-400 font-mono">{s.platform}</div>
        </div>
      ))}
    </div>
  )
}

function MarketBack() {
  const rows = [
    { name: 'You', price: '€14.20', rating: '4.3', highlight: true },
    { name: 'Brasserie Neumünster', price: '€18.00', rating: '4.5', highlight: false },
    { name: 'Le Sud',  price: '€16.50', rating: '4.2', highlight: false },
    { name: 'Café Français', price: '€15.00', rating: '4.0', highlight: false },
  ]
  return (
    <div>
      <div className="text-[9px] font-semibold uppercase tracking-widest text-slate-500 mb-2">
        Price · French cuisine · Luxembourg City
      </div>
      <div className="space-y-1.5 mb-3">
        {rows.map((r) => (
          <div key={r.name} className={`flex items-center justify-between rounded px-2 py-1 ${r.highlight ? 'bg-red-50 border border-red-100' : ''}`}>
            <span className={`text-[11px] ${r.highlight ? 'font-bold text-slate-900' : 'text-slate-600'}`}>{r.name}</span>
            <div className="flex items-center gap-2">
              <span className={`text-[11px] font-mono ${r.highlight ? 'text-red-600 font-bold' : 'text-slate-500'}`}>{r.price}</span>
              <span className="text-[10px] text-slate-400">★{r.rating}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded px-2 py-1.5 bg-slate-100 flex justify-between">
        <span className="text-[10px] text-slate-500">Gap to market median</span>
        <span className="text-[11px] font-bold text-red-600">−€3.20</span>
      </div>
    </div>
  )
}

function ValidationBack() {
  const claims = [
    { badge: 'OBSERVED',   color: 'text-emerald-700 bg-emerald-50 border-emerald-200', id: 'CMP-014', text: 'Competitor cut lunch pricing −€3.50' },
    { badge: 'ESTIMATED',  color: 'text-amber-700 bg-amber-50 border-amber-200',       id: 'REV-031', text: '22% cold food reviews → −0.4 Wolt stars' },
    { badge: 'INFERRED',   color: 'text-blue-700 bg-blue-50 border-blue-200',           id: 'MNU-007', text: 'Bottom quartile pricing for cuisine type' },
    { badge: 'HYPOTHESIS', color: 'text-red-700 bg-red-50 border-red-200',             id: 'FIN-002', text: '€800–1,400/mo revenue suppression' },
  ]
  return (
    <div>
      <div className="text-[9px] font-semibold uppercase tracking-widest text-slate-500 mb-2">Claim ledger</div>
      <div className="space-y-1.5 mb-2">
        {claims.map((c) => (
          <div key={c.id} className="flex items-start gap-1.5">
            <span className={`text-[8px] font-bold px-1 py-0.5 rounded border flex-shrink-0 mt-0.5 ${c.color}`}>{c.badge}</span>
            <span className="text-[10px] text-slate-600 leading-snug">{c.text}</span>
          </div>
        ))}
      </div>
      <div className="rounded px-2 py-1 bg-emerald-50 border border-emerald-100">
        <span className="text-[9px] text-emerald-700 font-semibold">Connect POS data → VALIDATED findings</span>
      </div>
    </div>
  )
}

function ExperimentsBack() {
  return (
    <div>
      <div className="text-[9px] font-semibold uppercase tracking-widest text-slate-500 mb-2">30-day experiment #1</div>
      <div className="rounded-lg border border-slate-200 divide-y divide-slate-100 mb-2 overflow-hidden">
        {[
          { label: 'Hypothesis', value: 'Fix weekend delivery packaging' },
          { label: 'Metric',     value: 'Wolt rating ≥ 4.2' },
          { label: 'Baseline',   value: '3.8 · 847 reviews · 90d' },
          { label: 'Timeline',   value: '30 days from start' },
          { label: 'Success',    value: '+0.4 stars → ~€400/mo recovery' },
        ].map((r) => (
          <div key={r.label} className="flex gap-2 px-2 py-1">
            <span className="text-[9px] font-semibold text-slate-400 w-16 flex-shrink-0">{r.label}</span>
            <span className="text-[10px] text-slate-700 leading-snug">{r.value}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1.5 px-2">
        <div className="w-2 h-2 rounded-full bg-slate-300" />
        <span className="text-[9px] text-slate-400 font-semibold uppercase tracking-wide">Not started</span>
      </div>
    </div>
  )
}

function OwnerPlanBack() {
  const actions = [
    { n: '01', text: 'Raise mains by €2.50–3.00', impact: 'High',   impactColor: 'text-emerald-700 bg-emerald-50' },
    { n: '02', text: 'Fix weekend cold-food issue', impact: 'High',  impactColor: 'text-emerald-700 bg-emerald-50' },
    { n: '03', text: 'Launch a lunch deal',         impact: 'Medium', impactColor: 'text-amber-700 bg-amber-50' },
  ]
  return (
    <div>
      <div className="text-[9px] font-semibold uppercase tracking-widest text-slate-500 mb-2">Ranked action plan</div>
      <div className="space-y-2 mb-3">
        {actions.map((a) => (
          <div key={a.n} className="flex items-start gap-2">
            <span className="text-lg font-bold text-slate-100 leading-none flex-shrink-0 tabular-nums">{a.n}</span>
            <div>
              <p className="text-[11px] font-semibold text-slate-800 leading-snug">{a.text}</p>
              <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded ${a.impactColor}`}>{a.impact}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded px-2 py-1.5 bg-slate-100 flex justify-between">
        <span className="text-[10px] text-slate-500">Est. recovery</span>
        <span className="text-[11px] font-bold text-slate-900">€1,200–2,400/mo</span>
      </div>
    </div>
  )
}

// ── Card definitions ──────────────────────────────────────────────────────────

const stages = [
  {
    id: 'sources',
    n: '01',
    Icon: Globe2,
    title: 'Location & Sources',
    subtitle: '8 public data sources collected automatically. No setup required.',
    Back: SourcesBack,
  },
  {
    id: 'reviews',
    n: '02',
    Icon: MessageSquare,
    title: 'Review Intelligence',
    subtitle: 'Patterns across all platforms — not sentiment scores, operational signals.',
    Back: ReviewsBack,
  },
  {
    id: 'market',
    n: '03',
    Icon: Target,
    title: 'Market Position',
    subtitle: 'Competitor map with pricing gaps and positioning spaces identified.',
    Back: MarketBack,
  },
  {
    id: 'validation',
    n: '04',
    Icon: ShieldCheck,
    title: 'Validation Framework',
    subtitle: 'Every finding typed by confidence: observed, estimated, inferred, hypothesis.',
    Back: ValidationBack,
  },
  {
    id: 'experiments',
    n: '05',
    Icon: FlaskConical,
    title: 'Experiments',
    subtitle: '30-day testable actions with hypothesis, metric, baseline, and success threshold.',
    Back: ExperimentsBack,
  },
  {
    id: 'owner',
    n: '06',
    Icon: ListOrdered,
    title: 'Owner Plan',
    subtitle: 'Three ranked actions in plain language. Evidence trail one tap away.',
    Back: OwnerPlanBack,
  },
]

// ── Main component ────────────────────────────────────────────────────────────

export default function ProductJourney() {
  const [flipped, setFlipped] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setFlipped((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {stages.map(({ id, n, Icon, title, subtitle, Back }) => {
        const isFlipped = flipped.has(id)
        return (
          <div
            key={id}
            onClick={() => toggle(id)}
            className="relative cursor-pointer select-none"
            style={{ perspective: '1000px', height: '220px' }}
            aria-label={`${title} — click to see product view`}
          >
            <div
              style={{
                transformStyle: 'preserve-3d',
                transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                position: 'relative',
                width: '100%',
                height: '100%',
              }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 rounded-2xl border border-slate-100 bg-white p-5 flex flex-col"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} strokeWidth={1.5} className="text-accent" />
                  </div>
                  <span className="text-xs font-bold text-slate-200 tabular-nums">{n}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">{title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{subtitle}</p>
                </div>
                <div className="flex items-center gap-1 mt-3">
                  <span className="text-[10px] font-semibold text-accent">See product view</span>
                  <RotateCcw size={10} strokeWidth={2.5} className="text-accent" />
                </div>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 rounded-2xl border border-slate-800 bg-slate-950 p-4 overflow-hidden"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <Back />
                <div className="absolute bottom-3 right-3">
                  <RotateCcw size={10} strokeWidth={2.5} className="text-slate-600" />
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
