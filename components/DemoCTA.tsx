"use client";
import { useState } from "react";

export default function DemoCTA() {
  const [form, setForm] = useState({ name: "", email: "", restaurant: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Disha Demo Request — ${form.restaurant || form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nRestaurant: ${form.restaurant}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:sameerbh08@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="demo" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Get started</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Schedule a 30-minute demonstration.
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            No preparation required. We bring the live platform and a sample
            intelligence report for your restaurant. You leave with something
            actionable.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-12 px-6 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Request sent</h3>
            <p className="text-slate-500">
              We&apos;ll be in touch within 24 hours to confirm a time.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-slate-50 rounded-2xl border border-slate-100 p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Your name <span className="text-red-400">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Maria Costa"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Email address <span className="text-red-400">*</span>
                </label>
                <input
                  required
                  type="email"
                  placeholder="you@restaurant.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Restaurant name &amp; city
              </label>
              <input
                type="text"
                placeholder="e.g. La Belle Époque, Luxembourg City"
                value={form.restaurant}
                onChange={(e) => setForm({ ...form, restaurant: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Anything you&apos;d like us to know?
              </label>
              <textarea
                rows={3}
                placeholder="What's your main challenge right now? (optional)"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent-dark transition-colors shadow-sm"
            >
              Request a demo →
            </button>

            <p className="text-xs text-slate-400 text-center">
              We typically respond within 24 hours. No commitment required.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
