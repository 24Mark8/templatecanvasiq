export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-4xl px-6 py-20">

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
          ARTICLE SERIES • PART 1
        </p>

        <h1 className="mt-4 text-5xl font-extrabold leading-tight text-slate-900">
          Why Free-Text Incident Data Is One of the Biggest Untapped Resources
        </h1>

        <div className="mt-6 flex gap-6 text-sm text-slate-500">
          <span>Published August 2026</span>
          <span>•</span>
          <span>8 minute read</span>
        </div>

        <hr className="my-10 border-slate-200" />

        <div className="space-y-6 text-lg leading-8 text-slate-700">

          <p>
            Every day, organisations collect thousands of incident reports.
            These reports contain structured fields, but some of the most
            valuable information is often hidden within the free-text narrative.
          </p>

          <p>
            Free-text descriptions explain what happened, why it happened and
            what could have prevented it. Unfortunately, analysing thousands of
            narratives manually is time-consuming, inconsistent and difficult to
            scale.
          </p>

          <p>
            Over more than two decades working in healthcare analytics, I
            repeatedly encountered the same challenge: organisations possess
            rich information but lack a reusable method for categorising and
            analysing it effectively.
          </p>

          <p>
            This article introduces the problem and explains why a reusable
            categorisation framework can transform free-text data into
            actionable intelligence.
          </p>

          <p>
            In Part 2, we'll explore why hard-coded keyword searches become
            increasingly difficult to maintain and what a better alternative
            looks like.
          </p>

        </div>

        <div className="mt-16">
          <a
            href="/"
            className="font-semibold text-blue-700 hover:text-blue-900"
          >
            ← Back to Home
          </a>
        </div>

      </section>
    </main>
  );
}