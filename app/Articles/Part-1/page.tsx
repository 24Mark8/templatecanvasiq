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
            Every day, healthcare organisations collect thousands of incident
            reports. These reports often contain structured fields such as harm,
            location and specialty, but the most valuable information is usually
            hidden inside the free-text description.
          </p>

          <p>
            Free-text narratives explain what happened, why it happened and what
            could have prevented it. Unfortunately, this information is rarely
            analysed consistently because reading thousands of incident reports
            manually is both time-consuming and subjective.
          </p>

          <p>
            Over the past two decades, I have worked extensively with incident
            reporting data and repeatedly encountered the same challenge:
            organisations have rich information available, but no scalable way
            to categorise and analyse it.
          </p>

          <p>
            This article introduces the problem and explains why a reusable
            categorisation framework provides a more sustainable approach than
            relying on manual review or isolated keyword searches.
          </p>

          <p>
            In the next article, we'll explore why hard-coded keyword searches
            become increasingly difficult to maintain as reporting requirements
            evolve.
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