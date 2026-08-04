export default function ArticlePart5() {
  return (
    <main className="bg-slate-50">
      <article className="mx-auto max-w-4xl px-6 py-20">

        <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
          Article Series • Part 5
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight text-slate-900">
          Using AI to Build Better Categories
        </h1>

        <p className="mt-6 text-xl leading-8 text-slate-600">
          How Artificial Intelligence can accelerate incident categorisation
          while keeping clinical expertise at the centre of every decision.
        </p>

        <div className="mt-12 space-y-12">

          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              Introduction
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Even the best keyword library will never be truly finished.
              Healthcare changes constantly, new terminology emerges and new
              incident types appear over time.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Rather than replacing human expertise, Artificial Intelligence can
              help identify patterns, suggest improvements and accelerate the
              ongoing development of a categorisation framework.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              AI as an Assistant, Not the Decision Maker
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              AI is most valuable when it supports subject matter experts rather
              than replacing them. Clinical and operational knowledge remains
              essential for validating categories and ensuring consistency.
            </p>

            <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                AI can help to:
              </h3>

              <ul className="mt-5 list-disc space-y-3 pl-6 text-slate-700">
                <li>Identify recurring phrases in free-text narratives.</li>
                <li>Suggest new keywords for existing categories.</li>
                <li>Highlight incidents that don't match current rules.</li>
                <li>Recommend potential new categories.</li>
                <li>Reduce manual review time.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              Learning from Unclassified Incidents
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Every categorisation engine will produce incidents that cannot be
              matched. Rather than treating these as failures, they become one
              of the most valuable sources of continuous improvement.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              AI can analyse these unclassified records, identify common
              language and suggest additions to the keyword library. Each review
              strengthens the framework and improves future categorisation.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              Human Review Remains Essential
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              AI suggestions should never be applied automatically. Every new
              keyword or category should be reviewed and approved by people who
              understand the clinical and operational context of the incidents.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              This human-in-the-loop approach combines the speed of AI with the
              judgement and experience of healthcare professionals.
            </p>
          </section>

          <section className="rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Continuous Improvement
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              A categorisation framework should evolve over time. By combining
              AI-assisted discovery with expert review, organisations can build
              a living keyword library that becomes more accurate with every
              refresh and every new incident analysed.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              The Future of Incident Intelligence
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              The real opportunity isn't simply categorising incidents faster.
              It's creating an intelligent framework that continually learns,
              adapts and provides richer insight into patient safety,
              operational performance and organisational risk.
            </p>
          </section>

          <section className="rounded-2xl bg-slate-900 p-8 text-white">
            <h2 className="text-3xl font-bold">
              Coming Next
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              In Part 6 we'll transform these structured categories into
              interactive Power BI dashboards that reveal trends, highlight
              emerging risks and support better decision-making across NHS
              organisations.
            </p>
          </section>

        </div>

      </article>
    </main>
  );
}