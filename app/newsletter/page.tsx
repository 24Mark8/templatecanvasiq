
"use client";

import { useEffect } from "react";

export default function NewsletterPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://subscribe-forms.beehiiv.com/v3/loader.js";
    script.async = true;
    script.dataset.beehiivForm =
      "b4f3ed0a-5cb2-4254-9177-2a0260f6d764";

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            TemplateCanvasIQ presents
          </p>

          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
            Data, Decoded
          </h1>

          <p className="mt-6 text-xl text-slate-300">
            I look, so you don't have to.
          </p>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            The latest developments in Power BI, AI and data analytics,
            explained clearly with practical insights you can use.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold text-slate-900">
            Get the free weekly briefing
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            I look across the world of data so you can focus on what matters.
            Discover useful news, Power BI tips and ideas to make your
            reporting more effective.
          </p>

          <ul className="mt-6 space-y-3 text-slate-700">
            <li>✓ Important developments without the noise</li>
            <li>✓ Practical Power BI and analytics insights</li>
            <li>✓ Ideas you can put into practice</li>
          </ul>

          <div className="mt-8">
            <div
              data-beehiiv-form="b4f3ed0a-5cb2-4254-9177-2a0260f6d764"
            />
          </div>

          <p className="mt-4 text-center text-xs leading-5 text-slate-500">
            Free to join. Unsubscribe whenever you like.
          </p>
        </div>
      </section>

      <footer className="px-6 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} TemplateCanvasIQ
      </footer>
    </main>
  );
}
