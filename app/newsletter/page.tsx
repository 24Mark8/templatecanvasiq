"use client";

import Script from "next/script";

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
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

      {/* SIGNUP CARD */}
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

          {/* Beehiiv Embed */}
          <div className="mt-8">
            <div data-beehiiv-form="b4f3ed0a-5cb2-4254-9177-2a0260f6d764" />

            <Script
              src="https://subscribe-forms.beehiiv.com/v3/loader.js"
              strategy="afterInteractive"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white px-6 py-10">
        <div className="mx-auto max-w-4xl">
          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <a href="/" className="text-slate-500 hover:text-slate-900">
              Home
            </a>
            <a href="/#about" className="text-slate-500 hover:text-slate-900">
              About
            </a>
            <a href="/#services" className="text-slate-500 hover:text-slate-900">
              Services
            </a>
            <a href="/#articles" className="text-slate-500 hover:text-slate-900">
              Articles
            </a>
            <a href="/newsletter" className="text-slate-500 hover:text-slate-900">
              Newsletter
            </a>
            <a href="/#contact" className="text-slate-500 hover:text-slate-900">
              Contact
            </a>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-500">
              © 2026 TemplateCanvasIQ. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/mark-mundy-94257335b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-900"
              >
                LinkedIn
              </a>

              <a
                href="mailto:MarkMundy1971@Hotmail.com"
                className="text-slate-500 hover:text-slate-900"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
