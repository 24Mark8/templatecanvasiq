export default function gallery() {
  return (
    <main className="min-h-screen bg-white">

      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h2 className="text-2xl font-extrabold tracking-tight text-blue-700">
            TemplateCanvasIQ
          </h2>

          <div className="flex gap-8 text-sm font-medium">
            <a href="/" className="text-slate-700 hover:text-blue-700">Home</a>
            <a href="/#about" className="text-slate-700 hover:text-blue-700">About</a>
            <a href="/#services" className="text-slate-700 hover:text-blue-700">Services</a>
            <a href="/#articles" className="text-slate-700 hover:text-blue-700">Articles</a>
            <a href="/#contact" className="text-slate-700 hover:text-blue-700">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-700">
          DASHBOARD GALLERY
        </p>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
          Pressure Injury Intelligence Toolkit
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600">
          A ready-to-use Power BI solution for turning Pressure Injury incident
          data into structured intelligence.
        </p>
      </section>

      {/* GALLERY */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-10 md:grid-cols-2">

            {/* PAGE 1 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img
                src="/gallery/pressure-injury-overview.png"
                alt="Pressure Injury Intelligence dashboard overview"
                className="w-full"
              />

              <div className="p-7">
                <p className="text-sm font-semibold text-blue-700">01</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  Pressure Injury Intelligence
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  A high-level view of Pressure Injury incidents, highlighting
                  trends, matched themes, harm and unclassified cases.
                </p>
              </div>
            </div>

            {/* PAGE 2 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img
                src="/gallery/pressure-injury-detail.png"
                alt="Pressure Injury Detail dashboard"
                className="w-full"
              />

              <div className="p-7">
                <p className="text-sm font-semibold text-blue-700">02</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  Pressure Injury Detail
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  Explore categories, keywords and individual incident
                  narratives identified by the categorisation engine.
                </p>
              </div>
            </div>

            {/* PAGE 3 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img
                src="/gallery/pressure-injury-trends.png"
                alt="Pressure Injury Trends and Emerging Risk dashboard"
                className="w-full"
              />

              <div className="p-7">
                <p className="text-sm font-semibold text-blue-700">03</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  Pressure Injury Trends & Emerging Risk
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  Identify changing patterns in Pressure Injury matches and
                  highlight areas that may warrant further review.
                </p>
              </div>
            </div>

            {/* PAGE 4 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img
                src="/gallery/pressure-injury-explorer.png"
                alt="Pressure Injury Incident Explorer dashboard"
                className="w-full"
              />

              <div className="p-7">
                <p className="text-sm font-semibold text-blue-700">04</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  Incident Explorer
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  Explore individual incident narratives, matched categories
                  and keyword signals to understand the context behind
                  Pressure Injury patterns.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center text-white">

          <h2 className="text-3xl font-bold">
            Pressure Injury Intelligence Toolkit
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            Explore the Toolkit and see how incident narratives can be
            transformed into structured intelligence.
          </p>

          <a
            href="/toolkit"
            className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-slate-100"
          >
            Explore the Toolkit
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 py-12">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-2xl font-bold text-white">
            TemplateCanvasIQ
          </h2>

          <p className="mt-3 max-w-xl text-slate-300">
            Transforming complex data into actionable intelligence.
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <a href="/" className="text-slate-300 hover:text-white">Home</a>
            <a href="/#about" className="text-slate-300 hover:text-white">About</a>
            <a href="/#services" className="text-slate-300 hover:text-white">Services</a>
            <a href="/#articles" className="text-slate-300 hover:text-white">Articles</a>
            <a href="/#contact" className="text-slate-300 hover:text-white">Contact</a>
          </div>

          <div className="mt-8 border-t border-slate-700 pt-6">
            <p className="text-sm text-slate-400">
              © 2026 TemplateCanvasIQ. All rights reserved.
            </p>
          </div>

        </div>
      </footer>

    </main>
  );
}