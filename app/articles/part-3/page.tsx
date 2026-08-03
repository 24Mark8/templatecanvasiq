import Link from "next/link";

export default function ArticlePart3() {
  return (
    <main className="min-h-screen bg-white">
      <article className="mx-auto max-w-4xl px-6 py-20 text-slate-800">

        {/* Header */}
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
          Incident Intelligence Series • Part 3
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900">
          Designing a Reusable Keyword Library
        </h1>

        <div className="mt-6 flex gap-6 text-sm text-slate-600">
          <span>Published August 2026</span>
          <span>10 minute read</span>
        </div>

        <hr className="my-10 border-slate-200" />

        {/* Body */}
        <div className="prose prose-lg max-w-none prose-slate">

          <p>
            After defining your incident categories, the next challenge is deciding
            <strong> how incidents will actually be assigned to those categories.</strong>
          </p>

          <p>
            Many organisations begin by embedding hundreds of keywords directly into
            Power Query, SQL or DAX. It works at first — but as the list grows,
            maintaining the logic becomes increasingly difficult.
          </p>

          <p>
            A reusable Keyword Library separates clinical knowledge from technical
            implementation. Instead of editing code whenever terminology changes,
            users simply update a table.
          </p>

          <h2>Why Use a Keyword Library?</h2>

          <ul>
            <li>No hard‑coded keywords</li>
            <li>Easier maintenance</li>
            <li>Clinical teams can manage content</li>
            <li>Reusable across multiple projects</li>
            <li>Future‑proof and scalable</li>
          </ul>

          <h2>Recommended Structure</h2>

          <table className="w-full border border-slate-300 text-sm">
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

          <h2>Recommended Fields</h2>

          <h3>Category</h3>
          <p>
            The clinical area the keyword belongs to, such as Falls, Medication,
            Pressure Ulcer or VTE.
          </p>

          <h3>Keyword</h3>
          <p>
            The word or phrase that triggers the category. Avoid using terms that
            are too broad — for example, <em>patient</em> would match almost every
            incident.
          </p>

          <h3>Priority</h3>
          <p>
            Some incidents match several categories. Priority allows you to control
            which categories appear first when ordering results.
          </p>

          <h3>Match Type</h3>

          <ul>
            <li>Contains</li>
            <li>Starts With</li>
            <li>Exact Match</li>
            <li>Regular Expression (Advanced)</li>
          </ul>

          <p>
            Most NHS projects only require <strong>Contains</strong>, but designing
            for future flexibility is worthwhile.
          </p>

          <h3>Active</h3>
          <p>
            Rather than deleting obsolete keywords, simply deactivate them. This
            keeps your historical library intact.
          </p>

          <h2>Separate Business Logic from Code</h2>

          <p>
            Developers should build the categorisation engine once.
            Clinical subject matter experts should maintain the keyword library.
          </p>

          <p>
            This separation dramatically reduces maintenance and allows continuous
            improvement without modifying Power Query code.
          </p>

          <h2>Supporting Multiple Categories</h2>

          <p>Many incidents naturally belong to more than one category.</p>

          <blockquote>
            Patient developed a Grade 2 pressure ulcer following a fall.
          </blockquote>

          <p>This incident should return:</p>

          <ul>
            <li>Falls</li>
            <li>Pressure Ulcer</li>
          </ul>

          <p>Your categorisation engine should never stop after the first match.</p>

          <h2>Handling Unclassified Incidents</h2>

          <p>No keyword library will ever be complete.</p>

          <p>
            Assign unmatched incidents to <strong>Other / Unclassified</strong>.
            These become your improvement queue, allowing you to continually refine
            the library over time.
          </p>

          <h2>Common Mistakes</h2>

          <ul>
            <li>Using overly broad keywords</li>
            <li>Embedding keywords directly into code</li>
            <li>Deleting rather than deactivating keywords</li>
            <li>Not documenting why keywords were added</li>
            <li>Assuming every incident belongs to only one category</li>
          </ul>

          <h2>Key Takeaways</h2>

          <p>
            A reusable Keyword Library forms the foundation of a scalable incident
            categorisation framework. By storing categories, keywords, priorities,
            match types and activation status in a structured table, organisations
            can continually improve categorisation without rewriting code.
          </p>

          <p>
            In Part 4, we'll build the Power Query Categorisation Engine that reads
            the keyword library and automatically assigns one or more categories to
            every incident.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t pt-8">
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
