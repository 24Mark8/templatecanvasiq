export default function DatixCategorisationPart2() {
  return (
    <main className="bg-slate-50 min-h-screen">

      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20">

          <span className="inline-block bg-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-6">
            Article Series • Part 2 of 7
          </span>

          <h1 className="text-5xl font-bold leading-tight">
            Building a Reusable Framework for Categorising
            <br />
            Datix Incident Narratives
          </h1>

          <p className="mt-6 text-xl text-slate-300 max-w-3xl">
            Why every successful categorisation engine starts with a
            well-designed keyword library.
          </p>

          <div className="mt-8 text-slate-400">
            August 2026 • 6 minute read
          </div>

        </div>
      </section>

      {/* Article */}
      <article className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl -mt-10 p-10">

        <h2 className="text-3xl font-bold mb-6">
          Introduction
        </h2>

        <p className="text-lg leading-8 mb-6">
          In Part 1, we explored why free-text incident narratives are one
          of the biggest barriers to meaningful NHS reporting. Although
          Datix contains valuable clinical information, inconsistent
          terminology makes reliable analysis extremely difficult.
        </p>

        <p className="text-lg leading-8 mb-10">
          The answer isn't simply artificial intelligence.
          It begins with something much simpler—a robust keyword library.
        </p>

        <hr className="my-10"/>

        <h2 className="text-3xl font-bold mb-6">
          Why a Keyword Library Matters
        </h2>

        <p className="text-lg leading-8 mb-6">
          Clinicians naturally describe similar incidents in different ways.
          A patient fall may be recorded as "fell", "slipped", "found on
          floor" or simply "fall".
        </p>

        <p className="text-lg leading-8 mb-10">
          Without standardisation, these appear as different events even
          though they describe the same incident type.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-10">
          <h3 className="font-semibold text-xl mb-3">
            Key Principle
          </h3>

          <p>
            Store business knowledge inside a keyword library—not inside
            Power Query code.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-6">
          Designing the Library
        </h2>

        <div className="overflow-x-auto mb-10">

          <table className="w-full border-collapse">

            <thead className="bg-slate-800 text-white">

              <tr>
                <th className="text-left p-4">Category</th>
                <th className="text-left p-4">Keyword</th>
                <th className="text-left p-4">Priority</th>
                <th className="text-left p-4">Active</th>
              </tr>

            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-4">Pressure Injury</td>
                <td className="p-4">pressure ulcer</td>
                <td className="p-4">1</td>
                <td className="p-4">✓</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Pressure Injury</td>
                <td className="p-4">pressure damage</td>
                <td className="p-4">1</td>
                <td className="p-4">✓</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Falls</td>
                <td className="p-4">fall</td>
                <td className="p-4">1</td>
                <td className="p-4">✓</td>
              </tr>

              <tr>
                <td className="p-4">Falls</td>
                <td className="p-4">slipped</td>
                <td className="p-4">2</td>
                <td className="p-4">✓</td>
              </tr>

            </tbody>

          </table>

        </div>

        <h2 className="text-3xl font-bold mb-6">
          Why Priority Matters
        </h2>

        <p className="text-lg leading-8 mb-10">
          Some keywords are stronger indicators than others.
          By assigning priorities, more specific phrases can take precedence,
          improving accuracy while reducing ambiguous classifications.
        </p>

        <h2 className="text-3xl font-bold mb-6">
          Designing for Reuse
        </h2>

        <p className="text-lg leading-8 mb-10">
          Although this framework has been developed using NHS incident
          reporting, the same methodology can categorise complaints,
          patient feedback, risk registers, safety observations and many
          other free-text datasets.
        </p>

        <div className="bg-green-50 border border-green-300 rounded-xl p-8">

          <h3 className="text-2xl font-bold mb-4">
            Key Takeaways
          </h3>

          <ul className="space-y-3 list-disc ml-6">

            <li>Separate business rules from Power Query code.</li>

            <li>Store keywords in one reusable library.</li>

            <li>Use priorities for more accurate matching.</li>

            <li>Allow the library to evolve over time.</li>

            <li>Build once and reuse across multiple datasets.</li>

          </ul>

        </div>

      </article>

    </main>
  );
}