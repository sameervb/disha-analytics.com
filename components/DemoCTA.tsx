import { Phone, Mail } from "lucide-react";

export default function DemoCTA() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
          Get in touch
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
          Start with a conversation.
        </h2>
        <p className="text-lg text-slate-500 max-w-xl mx-auto mb-12 leading-relaxed">
          We&apos;re running a pilot with Luxembourg restaurants. If you&apos;d like an intelligence
          report for your restaurant, or want to discuss an institutional partnership,
          reach out directly. No form, no wait.
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
                Call
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
                Email
              </div>
              <div className="text-base font-semibold text-slate-900">sameerbh08@gmail.com</div>
            </div>
          </a>
        </div>

        <p className="mt-10 text-xs text-slate-400">Typically respond within 24 hours.</p>
      </div>
    </section>
  );
}
