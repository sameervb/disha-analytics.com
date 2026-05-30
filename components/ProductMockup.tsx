'use client'
import { useState } from 'react'
import { CheckCircle2, AlertCircle, Info, HelpCircle, ShieldCheck } from 'lucide-react'

const claims = [
  {
    id: 'CMP-014',
    badge: 'OBSERVED',
    color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    icon: CheckCircle2,
    iconColor: 'text-emerald-500',
    text: 'Nearest competitor reduced lunch entrée pricing by €3.50 on 14 Mar. Menu updated on TheFork.',
    source: 'TheFork · 14 Mar 2026',
  },
  {
    id: 'REV-031',
    badge: 'ESTIMATED',
    color: 'text-amber-700 bg-amber-50 border-amber-200',
    icon: AlertCircle,
    iconColor: 'text-amber-500',
    text: '22% of delivery reviews on Wolt mention cold food. Pattern skews Fri–Sun evenings. Estimated −0.4 stars impact on ranking.',
    source: 'Wolt · 847 reviews · 90-day window',
  },
  {
    id: 'MNU-007',
    badge: 'INFERRED',
    color: 'text-blue-700 bg-blue-50 border-blue-200',
    icon: Info,
    iconColor: 'text-blue-400',
    text: 'Main courses priced €3.20 below market median for French cuisine in Luxembourg City. Bottom quartile.',
    source: 'Competitor menu scrape · 8 restaurants',
  },
  {
    id: 'FIN-002',
    badge: 'HYPOTHESIS',
    color: 'text-red-700 bg-red-50 border-red-200',
    icon: HelpCircle,
    iconColor: 'text-red-400',
    text: 'Delivery revenue suppression estimated at €800–1,400/month based on Wolt ranking drop correlated with review patterns.',
    source: 'Synthesised · requires POS validation',
  },
]

const actions = [
  {
    rank: '01',
    impact: 'High',
    impactColor: 'text-emerald-700 bg-emerald-50',
    effort: '1–2 days',
    action: 'Raise main course prices by €2.50–3.00',
    rationale: 'You\'re in the bottom quartile for your cuisine in this city. Three competitors charge more for similar dishes.',
  },
  {
    rank: '02',
    impact: 'High',
    impactColor: 'text-emerald-700 bg-emerald-50',
    effort: '1 week',
    action: 'Fix weekend delivery cold-food issue',
    rationale: '22% of Wolt reviews mention cold food on Friday–Sunday evenings. This is suppressing your delivery ranking.',
  },
  {
    rank: '03',
    impact: 'Medium',
    impactColor: 'text-amber-700 bg-amber-50',
    effort: '2–3 days',
    action: 'Launch a lunch deal to match competitor pricing',
    rationale: 'Your nearest competitor cut lunch prices by €3.50 in March. You\'ve lost positioning in that daypart.',
  },
]

export default function ProductMockup() {
  const [tab, setTab] = useState<'internal' | 'owner'>('internal')

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/40 bg-white">
      {/* Tab bar */}
      <div className="flex items-center gap-0 border-b border-slate-200 bg-slate-50">
        <button
          onClick={() => setTab('internal')}
          className={`flex items-center gap-2 px-4 py-2.5 border-r border-slate-200 text-left transition-colors ${
            tab === 'internal'
              ? 'bg-white border-b-2 border-b-accent'
              : 'hover:bg-slate-100'
          }`}
        >
          <div className={`w-2 h-2 rounded-full ${tab === 'internal' ? 'bg-accent' : 'bg-slate-300'}`} />
          <span className={`text-xs font-semibold ${tab === 'internal' ? 'text-accent' : 'text-slate-400'}`}>
            Internal report
          </span>
        </button>
        <button
          onClick={() => setTab('owner')}
          className={`flex items-center gap-2 px-4 py-2.5 border-r border-slate-200 text-left transition-colors ${
            tab === 'owner'
              ? 'bg-white border-b-2 border-b-accent'
              : 'hover:bg-slate-100'
          }`}
        >
          <div className={`w-2 h-2 rounded-full ${tab === 'owner' ? 'bg-accent' : 'bg-slate-300'}`} />
          <span className={`text-xs font-semibold ${tab === 'owner' ? 'text-accent' : 'text-slate-400'}`}>
            Owner walkthrough
          </span>
        </button>
        <div className="ml-auto flex items-center gap-2 px-4">
          <ShieldCheck size={12} strokeWidth={2} className="text-emerald-500" />
          <span className="text-[10px] text-slate-400 hidden sm:block">4 validated · 3 inferred · 1 hypothesis</span>
        </div>
      </div>

      {/* Internal report view */}
      {tab === 'internal' && (
        <div className="p-5 bg-slate-950 space-y-3">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-0.5">Claim ledger</div>
              <div className="text-xs font-semibold text-slate-200">La Brasserie du Parc · Luxembourg-Ville</div>
            </div>
            <div className="text-[10px] text-slate-600 font-mono">Run #14 · 30 May 2026</div>
          </div>

          <div className="space-y-2.5">
            {claims.map((claim) => {
              const Icon = claim.icon
              return (
                <div key={claim.id} className="rounded-xl bg-slate-900 border border-slate-800 p-3.5">
                  <div className="flex items-start gap-2.5">
                    <Icon size={13} strokeWidth={2} className={`${claim.iconColor} flex-shrink-0 mt-0.5`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[9px] font-bold tracking-widest px-1.5 py-0.5 rounded border ${claim.color}`}>
                          {claim.badge}
                        </span>
                        <span className="text-[9px] font-mono text-slate-600">{claim.id}</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{claim.text}</p>
                      <p className="text-[10px] text-slate-600 mt-1 font-mono">{claim.source}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Owner walkthrough view */}
      {tab === 'owner' && (
        <div className="p-5 bg-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-0.5">Your action plan</div>
              <div className="text-xs font-semibold text-slate-800">3 things to do this month</div>
            </div>
            <div className="text-[10px] text-slate-400">Ranked by impact</div>
          </div>

          <div className="space-y-3">
            {actions.map((a) => (
              <div key={a.rank} className="rounded-xl border border-slate-100 p-4 hover:border-slate-200 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="text-2xl font-bold text-slate-100 tabular-nums leading-none mt-0.5 flex-shrink-0">
                    {a.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded ${a.impactColor}`}>
                        {a.impact} impact
                      </span>
                      <span className="text-[9px] text-slate-400">{a.effort}</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-900 mb-1 leading-snug">{a.action}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{a.rationale}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl bg-slate-50 border border-slate-100 px-4 py-3 flex items-center gap-2">
            <ShieldCheck size={13} strokeWidth={2} className="text-slate-400 flex-shrink-0" />
            <p className="text-[10px] text-slate-400 leading-relaxed">
              Every action links to a specific claim. Every claim shows its source and confidence level.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
