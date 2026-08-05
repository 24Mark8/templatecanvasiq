export default function ArticlePart1() {
  return (
    <main className="bg-slate-50">
      <article className="mx-auto max-w-4xl px-6 py-20">

        <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
          Article Series • Part 1
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight text-slate-900">
          Building a Reusable Framework for Categorising Datix Incident Narratives  
          – Part 1: There's Valuable Information Hidden in Every Incident Report
        </h1>

        <p className="mt-6 text-xl leading-8 text-slate-600">
          Free‑text incident narratives contain some of the richest patient safety insights —  
          but they’re also the hardest to analyse at scale.
        </p>

        <div className="mt-12 space-y-12">

          {/* INTRODUCTION */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              The Hidden Value Inside Incident Narratives
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              After more than 20 years working with NHS data, one thing has become increasingly obvious:
              some of the most valuable information isn’t held in dashboards or coded fields — it’s buried
              in the free‑text descriptions that people write when reporting incidents.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Those narratives contain patterns, recurring issues and lessons that can genuinely improve
              patient safety — but they’re difficult to analyse at scale.
            </p>
          </section>

          {/* CHALLENGE */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              The Challenge
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Anyone who has worked with incident data knows there isn’t just one way to describe the same event.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
              <li>"LMWH omitted"</li>
              <li>"Missed thromboprophylaxis dose"</li>
              <li>"Enoxaparin not administered"</li>
              <li>"Patient did not receive anticoagulant"</li>
            </ul>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              To humans, these describe the same issue. To a computer, they’re four completely different strings.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Analysts are left either manually reading thousands of incidents or relying on simple keyword
              searches that miss important information.
            </p>
          </section>

          {/* BETTER WAY */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              Looking for a Better Way
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              I didn’t want another one‑off solution. I wanted a reusable framework that could take free‑text
              narratives and categorise them consistently using a maintained keyword library.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Instead of rewriting code every time a new category was needed, I wanted to simply update the
              keyword library.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              The framework was designed to:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
              <li>categorise incidents consistently</li>
              <li>allow one incident to belong to multiple categories</li>
              <li>be easy to maintain</li>
              <li>work across different patient safety topics</li>
              <li>feed directly into Power BI dashboards</li>
            </ul>
          </section>

          {/* AI HELPS */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              Where AI Helps
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              People often ask, “Why not just use AI to do it all?”
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              AI is most useful during the design stage — spotting themes, suggesting categories,
              identifying synonyms and highlighting keywords that might otherwise be missed.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Once reviewed, the day‑to‑day categorisation is handled in Power Query using an approved
              keyword library, ensuring consistency and transparency.
            </p>
          </section>

          {/* WHY IT MATTERS */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              Why This Matters
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              When you can turn thousands of free‑text narratives into meaningful categories, you stop
              reading incidents one‑by‑one and start seeing the bigger picture.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              You can quickly identify recurring medication issues, documentation problems, communication
              failures or delays in care — and present those findings in a way that’s genuinely useful.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              The value isn’t in replacing human judgement — it’s in helping people see patterns they
              might otherwise miss.
            </p>
          </section>

          {/* NEXT */}
          <section className="rounded-2xl bg-slate-900 p-8 text-white">
            <h2 className="text-3xl font-bold">
              Coming Next
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              In Part 2, we’ll explore how the keyword library behind this framework was built — and why
              the approach makes the whole solution easy to maintain without constantly rewriting code.
            </p>
          </section>

        </div>

      </article>
    </main>
  );
}
