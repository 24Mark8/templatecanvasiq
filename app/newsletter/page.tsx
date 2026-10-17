
export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            TemplateCanvasIQ presents
          </p>

          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
            Data, Decoded
          </h1>

          <p className="mt-6 text-xl text-slate-300">
            I look, so you don't have to.
          </p>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            The latest developments in Power BI, AI and data analytics,
            explained clearly with practical insights you can use.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold text-slate-900">
            Get the free weekly briefing
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            I look across the world of data so you can focus on what matters.
            Discover useful news, Power BI tips and ideas to make your
            reporting more effective.
          </p>

          <ul className="mt-6 space-y-3 text-slate-700">
            <li>✓ Important developments without the noise</li>
            <li>✓ Practical Power BI and analytics insights</li>
            <li>✓ Ideas you can put into practice</li>
          </ul>

          <form
            action="https://YOUR-BEEHIIV-SIGNUP-URL"
            method="get"
            className="mt-8"
          >
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Email address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Sign me up
            </button>
          </form>

          <p className="mt-4 text-center text-xs leading-5 text-slate-500">
            Free to join. Unsubscribe whenever you like.
          </p>
        </div>
      </section>

      <footer className="px-6 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} TemplateCanvasIQ
      </footer>
    </main>
  );
}
