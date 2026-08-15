export default function Toolkit() {
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
      <section className="mx-auto max-w-7xl px-6 py-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-700">
          INCIDENT INTELLIGENCE TOOLKIT
        </p>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
          Turn Incident Data into Intelligence
        </h1>

        <p className="mt-6 max-w-3xl text-xl text-slate-600">
          A reusable Power Query and Power BI toolkit for transforming raw
          incident narratives into structured, meaningful intelligence.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#toolkit"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Explore the Toolkit
          </a>

          <a
            href="/#services"
            className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100"
          >
            View Example Dashboard
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-bold text-slate-900">
            What Is the Incident Intelligence Toolkit?
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            The Incident Intelligence Toolkit provides a reusable framework
            for taking incident data from its original export through to
            categorisation, analysis and visual reporting.
          </p>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            It combines Power Query, Power BI, structured keyword libraries
            and AI-assisted review into one practical approach.
          </p>

          {/* WORKFLOW */}
          <div className="mt-14 grid gap-4 md:grid-cols-6">

            {[
              "Data Export",
              "Power Query",
              "Categorisation",
              "Review & Improve",
              "Power BI",
              "Incident Intelligence",
            ].map((step, index) => (
              <div
                key={step}
                className="relative rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm"
              >
                <div className="text-sm font-semibold text-blue-700">
                  0{index + 1}
                </div>

                <p className="mt-2 font-bold text-slate-900">
                  {step}
                </p>

                {index < 5 && (
                  <span className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-xl text-blue-600 md:block">
                    →
                  </span>
                )}
              </div>
            ))}

          </div>

          <div className="mt-12 rounded-2xl bg-blue-700 p-8 text-center text-white">
            <p className="text-xl font-semibold">
              Turn unstructured incident narratives into information that can
              support better questions, better conversations and better decisions.
            </p>
          </div>

        </div>
      </section>

      {/* TOOLKIT */}
      <section id="toolkit" className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-bold text-slate-900">
            What&apos;s Included?
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Eight connected components provide the foundation for a reusable
            incident intelligence framework.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            {/* 01 */}
            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold text-blue-700">01</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Categorisation Engine
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                A reusable Power Query framework that analyses incident
                narrative text and identifies relevant categories.
              </p>
              <p className="mt-4 text-sm text-slate-500">
                Automated matching • Multiple categories • Priority handling •
                Active/inactive keywords
              </p>
            </div>

            {/* 02 */}
            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold text-blue-700">02</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Editable Keyword Library
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Maintain the business rules outside the code. Add, remove or
                amend keywords as understanding of the incident data develops.
              </p>
              <p className="mt-4 text-sm text-slate-500">
                Category • Keyword • Priority • Active
              </p>
            </div>

            {/* 03 */}
            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold text-blue-700">03</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Category Master
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                A central master table controls how categories are presented
                consistently throughout reports and dashboards.
              </p>
              <p className="mt-4 text-sm text-slate-500">
                Category name • Colour • Display order • Owner
              </p>
            </div>

            {/* 04 */}
            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold text-blue-700">04</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                AI-Assisted Category Builder
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Use AI-assisted review to identify emerging themes, repeated
                terminology and potential new categories and keywords.
              </p>
              <p className="mt-4 text-sm text-slate-500">
                AI supports the review process — human judgement remains central.
              </p>
            </div>

            {/* 05 */}
            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold text-blue-700">05</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Multi-Category Matching
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Real incidents can involve several issues. The toolkit allows
                one incident to be assigned to multiple relevant categories.
              </p>
              <p className="mt-4 text-sm text-slate-500">
                Example: Communication + Medication + Documentation
              </p>
            </div>

            {/* 06 */}
            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold text-blue-700">06</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Other / Unclassified
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Incidents without a suitable match are retained and flagged
                for review rather than being forced into an unsuitable category.
              </p>
              <p className="mt-4 text-sm text-slate-500">
                Review → Identify → Improve → Refresh
              </p>
            </div>

           {/* 07 */}
      <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <p className="text-sm font-semibold text-blue-700">07</p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Power BI Dashboard Templates
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Turn structured incident data into professional dashboards showing
          trends, categories, harm levels, locations and themes.
        </p>

        <p className="mt-4 text-sm text-slate-500">
          From “How many?” to “What are the incidents telling us?”
        </p>
      </div>

      {/* Part 8 */}
      <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <p className="text-sm font-semibold text-blue-700">Part 8</p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Can Power BI Help Us Know Where to Look?
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Exploring the Amos report through maternity incident data and how
          Power BI can help identify themes, questions and areas for further
          investigation.
        </p>

        <a
          href="/articles/part-8"
          className="mt-6 inline-block font-semibold text-blue-700 hover:text-blue-900"
        >
          Read Article →
        </a>
      </div>

    </div>
  </div>
</section>

      {/* CONTINUOUS IMPROVEMENT */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-3xl font-bold text-slate-900">
            Built to Improve Over Time
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-600">
            The toolkit is designed as a continuous improvement framework.
            The more you review your data, the more useful the framework becomes.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-6">

            {[
              ["01", "Start"],
              ["02", "Categorise"],
              ["03", "Review"],
              ["04", "Improve"],
              ["05", "Refresh"],
              ["06", "Learn"],
            ].map(([number, title]) => (
              <div
                key={number}
                className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="text-3xl font-extrabold text-blue-700">
                  {number}
                </div>
                <p className="mt-2 font-bold text-slate-900">{title}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-bold text-slate-900">
            What You Get
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-bold text-slate-900">
                Core Toolkit
              </h3>

              <ul className="mt-5 space-y-3 text-slate-600">
                <li>✓ Power Query Categorisation Engine</li>
                <li>✓ Editable Keyword Library</li>
                <li>✓ Category Master</li>
                <li>✓ Multi-Category Matching</li>
                <li>✓ Other / Unclassified Handling</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-bold text-slate-900">
                Power BI
              </h3>

              <ul className="mt-5 space-y-3 text-slate-600">
                <li>✓ Dashboard Template</li>
                <li>✓ DAX Measure Library</li>
                <li>✓ KPI Examples</li>
                <li>✓ Trend Analysis</li>
                <li>✓ Category Analysis</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-bold text-slate-900">
                Supporting Resources
              </h3>

              <ul className="mt-5 space-y-3 text-slate-600">
                <li>✓ Sample Incident Dataset</li>
                <li>✓ Documentation</li>
                <li>✓ Implementation Guide</li>
                <li>✓ Example Reports</li>
                <li>✓ AI-Assisted Review Approach</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center text-white">

          <h2 className="text-3xl font-bold">
            From Raw Data to Real Intelligence
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            The Incident Intelligence Toolkit provides a reusable starting
            point for transforming incident reporting into structured,
            meaningful intelligence.
          </p>

          <a
            href="/"
            className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-slate-100"
          >
            Back to TemplateCanvasIQ
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

          <div className="mt-8 border-t border-slate-700 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-400">
              © 2026 TemplateCanvasIQ. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/mark-mundy-94257335b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="mailto:your@email.com"
                className="text-slate-300 hover:text-white"
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