export default function ArticlePart7() {
  return (
    <main className="bg-slate-50">
      <article className="mx-auto max-w-4xl px-6 py-20">

        <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
          Article Series • Part 7
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight text-slate-900">
          A Framework That Goes Beyond VTE
        </h1>

        <p className="mt-6 text-xl leading-8 text-slate-600">
          How a reusable incident categorisation framework can transform
          reporting across an entire NHS organisation.
        </p>

        <div className="mt-12 space-y-12">

          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              Introduction
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Although this series has used Venous Thromboembolism (VTE)
              incidents as an example, the framework was never designed to solve
              just one reporting challenge.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              The principles behind the framework are deliberately generic,
              allowing the same approach to be applied across almost any type of
              free-text incident data.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              One Framework, Many Applications
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              By replacing the keyword library, the same Power Query engine can
              categorise completely different incident types without changing
              the underlying logic.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">
                  Clinical Incidents
                </h3>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                  <li>Pressure ulcers</li>
                  <li>Falls</li>
                  <li>Medication safety</li>
                  <li>VTE</li>
                  <li>Patient identification</li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">
                  Operational Incidents
                </h3>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                  <li>Delayed discharge</li>
                  <li>Equipment failures</li>
                  <li>Staffing pressures</li>
                  <li>Communication issues</li>
                  <li>Capacity management</li>
                </ul>
              </div>

            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              Why Reusability Matters
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Many organisations build categorisation logic from scratch every
              time a new reporting requirement appears. This leads to duplicated
              effort, inconsistent business rules and dashboards that cannot be
              easily maintained.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              A reusable framework changes that approach. The engine remains the
              same, while the keyword library evolves to meet new business
              needs.
            </p>
          </section>

          <section className="rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Building an Incident Intelligence Platform
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              The long-term vision is not simply to categorise incidents. It is
              to create an incident intelligence platform where structured
              categorisation, Power BI dashboards, automation and AI work
              together to support better decision-making across the organisation.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              Lessons from the Series
            </h2>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">

              <ol className="space-y-4 text-lg text-slate-700">
                <li><strong>1.</strong> Free-text contains valuable information.</li>
                <li><strong>2.</strong> Structured categorisation unlocks that value.</li>
                <li><strong>3.</strong> A reusable keyword library improves consistency.</li>
                <li><strong>4.</strong> Power Query provides a scalable engine.</li>
                <li><strong>5.</strong> AI accelerates continuous improvement.</li>
                <li><strong>6.</strong> Power BI transforms categories into actionable insight.</li>
                <li><strong>7.</strong> The framework can be applied across the NHS.</li>
              </ol>

            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              Final Thoughts
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Healthcare organisations generate enormous volumes of free-text
              information every day. Hidden within those narratives are the
              insights needed to improve patient safety, operational
              performance and organisational learning.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              By combining reusable categorisation, Power Query, AI and modern
              analytics, organisations can move beyond simply recording
              incidents to understanding them—and ultimately preventing them.
            </p>
          </section>

          <section className="rounded-2xl bg-slate-900 p-8 text-white">
            <h2 className="text-3xl font-bold">
              Thank You for Reading
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              I hope this series has demonstrated that incident categorisation
              doesn't have to be complex. With the right framework, it becomes
              scalable, reusable and capable of delivering meaningful insight
              across an entire organisation.
            </p>

            <p className="mt-6 text-lg font-semibold text-blue-300">
              This is just the beginning of the TemplateCanvasIQ Incident
              Intelligence journey.
            </p>
          </section>

        </div>

      </article>
    </main>
  );
}