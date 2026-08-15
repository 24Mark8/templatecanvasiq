export default function ArticlePart8() {
  return (
    <main className="bg-slate-50">
      <article className="mx-auto max-w-4xl px-6 py-20">

        <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
          Article Series • Part 8
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight text-slate-900">
          Can Power BI Help Us Know Where to Look?
        </h1>

        <p className="mt-6 text-xl leading-8 text-slate-600">
          Exploring the Amos report through maternity incident data.
        </p>

        <div className="mt-12 space-y-12">

          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              Introduction
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              What happens when we take a published investigation such as the
              Amos report and look at our own maternity incident data through
              that lens?
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              That was the question behind my latest Power BI experiment.
              Rather than trying to reproduce the findings of the Amos
              investigation, I wanted to see whether its themes and
              recommendations could help us identify areas within our own
              incident data that might deserve a closer look.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              The result is an interesting example of how external learning can
              be combined with local data to support safety intelligence.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              From Incident Data to Questions
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Incident reporting systems contain a huge amount of information,
              but simply counting incidents does not necessarily tell us where
              the greatest opportunities for learning are.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              This is where categorisation becomes useful. By applying a
              structured maternity categorisation layer to incident narratives,
              it becomes possible to move from individual records towards
              broader themes.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              I then added another layer: mapping those maternity categories to
              themes, recommendations and questions identified through the Amos
              report.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              Creating the Amos Alignment Layer
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              The Power BI model now contains a dedicated alignment layer that
              connects our existing maternity categories with the relevant Amos
              recommendations, themes and questions.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-4">

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">
                  Maternity Category
                </h3>

                <p className="mt-3 text-slate-600">
                  What is appearing in our incident data?
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">
                  Amos Recommendation
                </h3>

                <p className="mt-3 text-slate-600">
                  Which recommendation does it relate to?
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">
                  Amos Theme
                </h3>

                <p className="mt-3 text-slate-600">
                  What wider area of concern does it sit within?
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">
                  Amos Question
                </h3>

                <p className="mt-3 text-slate-600">
                  What question might we need to ask?
                </p>
              </div>

            </div>
          </section>

          <section className="rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              The Important Distinction
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              The alignment does not mean that our local incidents prove the
              findings of the Amos report.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Nor does a high number of incidents automatically mean that the
              corresponding Amos recommendation is failing locally.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Instead, the Amos framework provides a lens. It gives us another
              way of looking at our data and, importantly, helps us ask better
              questions about what the data might be telling us.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              Can Power BI Help Us Know Where to Look?
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              This is where Power BI becomes particularly interesting.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              A traditional incident report might tell us that there were a
              certain number of maternity incidents during a particular
              period. A categorised dashboard can go further by showing which
              themes those incidents relate to.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Adding the Amos alignment introduces another dimension. We can
              begin to ask whether particular categories are concentrated
              around specific Amos themes or recommendations.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              That does not give us the answer. But it can help us decide where
              the next question should be asked.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              From Numbers to Investigation
            </h2>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">

              <ol className="space-y-5 text-lg text-slate-700">
                <li>
                  <strong>1.</strong> Incident data identifies what is being
                  reported.
                </li>

                <li>
                  <strong>2.</strong> Categorisation helps reveal recurring
                  themes.
                </li>

                <li>
                  <strong>3.</strong> Amos alignment provides an additional
                  safety lens.
                </li>

                <li>
                  <strong>4.</strong> Power BI makes those relationships easier
                  to explore.
                </li>

                <li>
                  <strong>5.</strong> The resulting insight helps identify
                  questions for further investigation.
                </li>
              </ol>

            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              What I Found Interesting
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              The most interesting part of this experiment was not producing
              another dashboard.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              It was seeing how different sources of information can be brought
              together to create a more useful starting point for discussion.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              The incident data tells us what is appearing locally. The
              categorisation framework helps organise that information. The
              Amos report provides external learning and context. Power BI
              brings the different layers together in a form that can be
              explored.
            </p>
          </section>

          <section className="rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              A Dashboard Should Start a Conversation
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              One of the things I am increasingly interested in is moving away
              from dashboards that simply present numbers.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              A useful safety dashboard should help someone decide what to
              explore next.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              In this case, the purpose of the Amos alignment is not to produce
              a definitive score. It is to provide context and prompts for
              investigation.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              Where This Could Go Next
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              This experiment also raises some interesting possibilities for
              future development.
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700">
              <li>Tracking maternity themes over time.</li>
              <li>Exploring emerging incident patterns.</li>
              <li>Identifying categories requiring deeper review.</li>
              <li>Connecting incidents to wider safety frameworks.</li>
              <li>Using the data to support learning and assurance conversations.</li>
            </ul>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              The important point is that these should remain prompts for
              investigation rather than automated conclusions.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              Final Thoughts
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Power BI cannot tell us why an incident happened. It cannot
              replace clinical review, investigation or professional judgement.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              What it can do is help us organise large amounts of information,
              connect local data with external learning and make patterns
              easier to explore.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              For me, that is the real value of the Amos alignment experiment.
              It is not about proving anything. It is about helping us know
              where to look, what questions to ask and where further
              investigation might be worthwhile.
            </p>
          </section>

          <section className="rounded-2xl bg-slate-900 p-8 text-white">
            <h2 className="text-3xl font-bold">
              Thank You for Reading
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              This experiment has shown me that Power BI can be more than a
              reporting tool. When combined with structured categorisation and
              external learning, it can become a way of helping people explore
              complex safety information and decide where to look next.
            </p>

            <p className="mt-6 text-lg font-semibold text-blue-300">
              The next question is not simply “How many incidents did we have?”
              but “What should we look at next?”
            </p>
          </section>

          <footer className="rounded-2xl bg-blue-700 p-8 text-center text-white">
            <p className="text-lg font-semibold">
              TemplateCanvasIQ • NHS Incident Intelligence
            </p>

            <p className="mt-2 text-sm text-blue-100">
              Turning incident data into insight.
            </p>
          </footer>

        </div>

      </article>
    </main>
  );
}