export default function ArticlePart1() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-4xl px-6 py-20">

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
          ARTICLE SERIES • PART 1
        </p>

        <h1 className="mt-4 text-5xl font-extrabold leading-tight text-slate-900">
          Building a Reusable Framework for Categorising Datix Incident Narratives – Part 1: There's Valuable Information Hidden in Every Incident Report
        </h1>

        <div className="mt-6 flex gap-6 text-sm text-slate-500">
          <span>Published July 10, 2026</span>
          <span>•</span>
          <span>8 minute read</span>
        </div>

        <hr className="my-10 border-slate-200" />

        <div className="space-y-6 text-lg leading-8 text-slate-700">

          <p>
            After more than 20 years working with NHS data, one thing has become increasingly obvious to me:
            some of the most valuable information isn't held in dashboards or coded fields—it's buried in the
            free-text descriptions that people write when reporting incidents.
          </p>

          <p>
            Every day, staff take the time to explain what happened, why it happened and, sometimes, how it
            could have been prevented. Those narratives contain patterns, recurring issues and lessons that can
            genuinely improve patient safety.
          </p>

          <p>
            The problem is that they're difficult to analyse at scale.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10">The challenge</h2>

          <p>
            Anyone who has worked with incident data knows there isn't just one way to describe the same event.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>"LMWH omitted"</li>
            <li>"Missed thromboprophylaxis dose"</li>
            <li>"Enoxaparin not administered"</li>
            <li>"Patient did not receive anticoagulant"</li>
          </ul>

          <p>
            To us, they're describing the same issue. To a computer, they're four completely different pieces of text.
          </p>

          <p>
            That usually leaves analysts with two choices: manually read hundreds or thousands of incidents, or rely on
            simple keyword searches that often miss important information. Neither approach is ideal when you're trying
            to identify trends across a large organisation.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10">Looking for a better way</h2>

          <p>
            I didn't want to build another report that solved one specific problem. I wanted something I could use again
            and again.
          </p>

          <p>
            The idea was to create a reusable framework that could take free-text incident narratives and consistently
            categorise them using a maintained keyword library. Rather than changing code every time a new category was
            needed, I could simply update the keyword library.
          </p>

          <p>The framework was designed to:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>categorise incidents consistently</li>
            <li>allow one incident to belong to more than one category</li>
            <li>be easy to maintain</li>
            <li>work across different patient safety topics</li>
            <li>feed directly into Power BI dashboards</li>
          </ul>

          <p>
            Once it was built, I realised it could be applied to far more than just one project.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10">Where AI helps</h2>

          <p>
            People often ask, "Why not just use AI to do it all?"
          </p>

          <p>
            For me, AI is at its best during the design stage. I use it to help spot themes in sample incidents,
            suggest categories, identify synonyms and highlight keywords I may have missed.
          </p>

          <p>
            Once those categories and keywords have been reviewed, the day-to-day categorisation is handled by Power
            Query using an approved keyword library.
          </p>

          <p>
            That means every result is consistent, transparent and repeatable—something that's essential when reporting
            information that people rely on to make decisions.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10">Why this matters</h2>

          <p>
            When you can turn thousands of free-text narratives into meaningful categories, you stop spending hours
            reading individual incidents and start seeing the bigger picture.
          </p>

          <p>
            You can quickly identify recurring medication issues, documentation problems, communication failures or
            delays in care, and present those findings in a way that's useful to clinicians and managers.
          </p>

          <p>
            That's where the real value lies—not replacing human judgement, but helping people see patterns they might
            otherwise miss.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10">What's next?</h2>

          <p>
            In the next article, I'll show how I built the keyword library that sits behind this framework, why I chose
            that approach, and how it makes the whole solution easy to maintain without constantly rewriting code.
          </p>

        </div>

        <div className="mt-16">
          <a href="/" className="font-semibold text-blue-700 hover:text-blue-900">
            ← Back to Home
          </a>
        </div>

      </section>
    </main>
  );
}
