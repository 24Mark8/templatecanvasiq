import Link from "next/link";

export default function ArticlePart3() {
  return (
    <main className="bg-slate-50">
      <article className="mx-auto max-w-4xl px-6 py-20">

        <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
          Incident Intelligence Series • Part 3
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight text-slate-900">
          Designing a Reusable Keyword Library
        </h1>

        <p className="mt-6 text-xl leading-8 text-slate-600">
          How a structured keyword library separates clinical knowledge from code,
          improves consistency, and makes incident categorisation scalable.
        </p>

        <div className="mt-12 space-y-12">

          {/* INTRO */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              Why Use a Keyword Library?
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              After defining your incident categories, the next challenge is deciding
              how incidents will actually be assigned to those categories.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Many organisations begin by embedding hundreds of keywords directly into
              Power Query, SQL or DAX. It works at first — but as the list grows,
              maintaining the logic becomes increasingly difficult.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              A reusable Keyword Library separates clinical knowledge from technical
              implementation. Instead of editing code whenever terminology changes,
              users simply update a table.
            </p>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-slate-700">
              <li>No hard‑coded keywords</li>
              <li>Easier maintenance</li>
              <li>Clinical teams can manage content</li>
              <li>Reusable across multiple projects</li>
              <li>Future‑proof and scalable</li>
            </ul>
          </section>

          {/* STRUCTURE */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              Recommended Structure
            </h2>

            <table className="mt-6 w-full border border-slate-300 text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border border-slate-300 px-3 py-2 text-left">Category</th>
                  <th className="border border-slate-300 px-3 py-2 text-left">Keyword</th>
                  <th className="border border-slate-300 px-3 py-2 text-left">Priority</th>
                  <th className="border border-slate-300 px-3 py-2 text-left">Match Type</th>
                  <th className="border border-slate-300 px-3 py-2 text-left">Active</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border border-slate-300 px-3 py-2">Falls</td>
                  <td className="border border-slate-300 px-3 py-2">slipped</td>
                  <td className="border border-slate-300 px-3 py-2">2</td>
                  <td className="border border-slate-300 px-3 py-2">Contains</td>
                  <td className="border border-slate-300 px-3 py-2">Yes</td>
                </tr>

                <tr>
                  <td className="border border-slate-300 px-3 py-2">Medication</td>
                  <td className="border border-slate-300 px-3 py-2">insulin</td>
                  <td className="border border-slate-300 px-3 py-2">1</td>
                  <td className="border border-slate-300 px-3 py-2">Contains</td>
                  <td className="border border-slate-300 px-3 py-2">Yes</td>
                </tr>

                <tr>
                  <td className="border border-slate-300 px-3 py-2">Pressure Ulcer</td>
                  <td className="border border-slate-300 px-3 py-2">grade 2</td>
                  <td className="border border-slate-300 px-3 py-2">1</td>
                  <td className="border border-slate-300 px-3 py-2">Contains</td>
                  <td className="border border-slate-300 px-3 py-2">Yes</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* FIELDS */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              Recommended Fields
            </h2>

            <h3 className="mt-6 text-2xl font-semibold text-slate-900">Category</h3>
            <p className="mt-2 text-lg leading-8 text-slate-700">
              The clinical area the keyword belongs to, such as Falls, Medication,
              Pressure Ulcer or VTE.
            </p>

            <h3 className="mt-6 text-2xl font-semibold text-slate-900">Keyword</h3>
            <p className="mt-2 text-lg leading-8 text-slate-700">
              The word or phrase that triggers the category. Avoid overly broad terms —
              for example, <em>patient</em> would match almost every incident.
            </p>

            <h3 className="mt-6 text-2xl font-semibold text-slate-900">Priority</h3>
            <p className="mt-2 text-lg leading-8 text-slate-700">
              Some incidents match several categories. Priority controls which appear first.
            </p>

            <h3 className="mt-6 text-2xl font-semibold text-slate-900">Match Type</h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
              <li>Contains</li>
              <li>Starts With</li>
              <li>Exact Match</li>
              <li>Regular Expression (Advanced)</li>
            </ul>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Most NHS projects only require <strong>Contains</strong>, but designing
              for future flexibility is worthwhile.
            </p>

            <h3 className="mt-6 text-2xl font-semibold text-slate-900">Active</h3>
            <p className="mt-2 text-lg leading-8 text-slate-700">
              Rather than deleting obsolete keywords, simply deactivate them. This keeps
              your historical library intact.
            </p>
          </section>

          {/* MULTIPLE CATEGORIES */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              Supporting Multiple Categories
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Many incidents naturally belong to more than one category.
            </p>

            <blockquote className="mt-4 border-l-4 border-blue-600 bg-blue-50 p-4 text-slate-800">
              Patient developed a Grade 2 pressure ulcer following a fall.
            </blockquote>

            <p className="mt-4 text-lg leading-8 text-slate-700">This incident should return:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
              <li>Falls</li>
              <li>Pressure Ulcer</li>
            </ul>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Your categorisation engine should never stop after the first match.
            </p>
          </section>

          {/* UNCLASSIFIED */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              Handling Unclassified Incidents
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              No keyword library will ever be complete.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Assign unmatched incidents to <strong>Other / Unclassified</strong>.
              These become your improvement queue, allowing you to continually refine
              the library over time.
            </p>
          </section>

          {/* MISTAKES */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900">
              Common Mistakes
            </h2>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
              <li>Using overly broad keywords</li>
              <li>Embedding keywords directly into code</li>
              <li>Deleting rather than deactivating keywords</li>
              <li>Not documenting why keywords were added</li>
              <li>Assuming every incident belongs to only one category</li>
            </ul>
          </section>

          {/* NEXT */}
          <section className="rounded-2xl bg-slate-900 p-8 text-white">
            <h2 className="text-3xl font-bold">
              Coming Next
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              In Part 4, we’ll build the Power Query Categorisation Engine that reads
              the keyword library and automatically assigns one or more categories to
              every incident.
            </p>
          </section>

        </div>

        <div className="mt-16">
          <Link
            href="/articles"
            className="font-semibold text-blue-700 hover:text-blue-800"
          >
            ← Back to Articles
          </Link>
        </div>

      </article>
    </main>
  );
}
