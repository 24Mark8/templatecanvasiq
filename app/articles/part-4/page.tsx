export default function ArticlePart4() {
  return (
    <main className="bg-slate-50">
      <article className="mx-auto max-w-4xl px-6 py-20">

        <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
          Article Series • Part 4
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight text-slate-900">
          Building the Power Query Categorisation Engine
        </h1>

        <p className="mt-6 text-xl leading-8 text-slate-600">
          Turning free-text incident narratives into structured intelligence
          using a scalable, reusable Power Query framework.
        </p>

        <div className="mt-12 space-y-12">

          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              Introduction
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              In Part 3 we designed a reusable keyword library that separates
              business knowledge from technical implementation. Now it's time
              to put that library to work.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              In this article we'll build a Power Query categorisation engine
              capable of automatically analysing incident narratives,
              identifying keyword matches and assigning one or more categories
              to every incident.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              Why Power Query?
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Power Query is available across Excel, Power BI and Microsoft
              Fabric, making it an excellent platform for NHS reporting teams.
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-lg text-slate-700">
              <li>Automatic categorisation during every refresh</li>
              <li>Consistent business rules across reports</li>
              <li>No complex nested IF statements</li>
              <li>Easy maintenance through the keyword library</li>
              <li>Scalable to hundreds of thousands of incidents</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              The Three Core Tables
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">
                  Incidents
                </h3>

                <p className="mt-3 text-slate-600">
                  Contains the original incident data including the free-text
                  description that will be categorised.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">
                  Keyword Library
                </h3>

                <p className="mt-3 text-slate-600">
                  Stores every keyword together with its category, priority and
                  active status.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">
                  Category Master
                </h3>

                <p className="mt-3 text-slate-600">
                  Stores colours, display order, owners and metadata for each
                  category.
                </p>
              </div>

            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              How the Engine Works
            </h2>

            <ol className="mt-6 space-y-4 text-lg text-slate-700">
              <li>1. Read the incident description.</li>
              <li>2. Convert the text into a consistent format.</li>
              <li>3. Compare against every active keyword.</li>
              <li>4. Return every matching category.</li>
              <li>5. Create one record for each match.</li>
              <li>6. Assign "Other / Unclassified" if nothing matches.</li>
            </ol>
          </section>

          <section className="rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Why Multiple Categories Matter
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Real NHS incidents rarely involve a single issue. One incident may
              include a medication error, delayed treatment and communication
              failure. This framework captures every relevant category,
              providing a richer understanding of why incidents occur.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              Designed for Continuous Improvement
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              One of the biggest strengths of this approach is that the business
              rules are completely separated from the Power Query code.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              To improve the framework, simply add new keywords to the library,
              refresh the data and the categorisation engine automatically
              applies the updated logic.
            </p>
          </section>

          <section className="rounded-2xl bg-slate-900 p-8 text-white">
            <h2 className="text-3xl font-bold">
              Coming Next
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              In Part 5 we'll explore how Artificial Intelligence can help
              identify emerging themes, suggest new keywords and accelerate the
              continuous improvement of incident categorisation while keeping
              human expertise firmly in control.
            </p>
          </section>

        </div>

      </article>
    </main>
  );
}