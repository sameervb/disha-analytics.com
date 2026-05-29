export default function DemoCTA() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
          Get in touch
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Start with a conversation.
        </h2>
        <p className="text-lg text-slate-500 max-w-xl mx-auto mb-12">
          We&apos;re running a pilot with Luxembourg restaurants. If you&apos;d like an intelligence
          report for your restaurant, or want to discuss an institutional partnership,
          reach out directly — no form, no wait.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 max-w-sm mx-auto sm:max-w-md">
          {/* Phone */}
          <a
            href="tel:+352691189912"
            className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-slate-200 hover:border-accent hover:bg-blue-50 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-slate-100 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
              <svg
                className="w-5 h-5 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                Call
              </div>
              <div className="text-base font-semibold text-slate-900">+352 691 189 912</div>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:sameerbh08@gmail.com"
            className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-slate-200 hover:border-accent hover:bg-blue-50 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-slate-100 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
              <svg
                className="w-5 h-5 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                Email
              </div>
              <div className="text-base font-semibold text-slate-900">sameerbh08@gmail.com</div>
            </div>
          </a>
        </div>

        <p className="mt-10 text-xs text-slate-400">
          Typically respond within 24 hours.
        </p>
      </div>
    </section>
  );
}
