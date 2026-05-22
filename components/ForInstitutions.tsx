const partners = [
  {
    name: "House of Entrepreneurship",
    role: "Referral & grant channel",
    body:
      "Refer restaurant owner members to Disha as a certified AI intelligence tool. Grant eligibility is pre-mapped to existing SMB digitalisation programmes.",
  },
  {
    name: "Chamber of Commerce",
    role: "Sector intelligence partner",
    body:
      "Co-author aggregated sector reports across 10–15 Luxembourg restaurants. Published under the Chamber's name — valuable content for members and policymakers at zero cost.",
  },
  {
    name: "Luxinnovation / Ministry of Economy",
    role: "Policy & digital transformation",
    body:
      "Disha provides concrete evidence of AI adoption at the SMB level, aligned with Luxembourg's digital economy strategy and the Fit 4 Digital programme.",
  },
];

export default function ForInstitutions() {
  return (
    <section id="institutions" className="py-20 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3">
            For institutions
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Built for the Luxembourg ecosystem.
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Disha is designed to plug into existing advisory channels — not compete
            with them. We turn referral relationships into measurable outcomes for
            your members.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {partners.map((p) => (
            <div
              key={p.name}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-7"
            >
              <div className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">
                {p.role}
              </div>
              <h3 className="text-base font-bold text-white mb-3">{p.name}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {/* What we ask */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
          <div className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-4">
            What we&apos;re asking for
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                ask: "Access to members",
                detail: "5 restaurant pilot participants from your network — any cuisine, any size.",
              },
              {
                ask: "Presentation slot",
                detail: "30 minutes at a member event to demonstrate a live report.",
              },
              {
                ask: "Co-branding",
                detail: "Your name on the sector intelligence report. No budget required.",
              },
            ].map((item) => (
              <div key={item.ask}>
                <div className="text-sm font-bold text-white mb-1">{item.ask}</div>
                <div className="text-sm text-slate-400 leading-relaxed">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
