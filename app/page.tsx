export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <nav className="border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h2 className="text-xl font-bold text-blue-700">
            TemplateCanvasIQ
          </h2>

          <div className="flex gap-6 text-sm font-medium text-slate-700">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Articles</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold text-slate-900">
          Transforming NHS Data into Actionable Intelligence
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-slate-600">
          Power BI dashboards, Datix analytics, and the NHS Incident Intelligence
          Toolkit designed to help healthcare organisations make better decisions.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
            View Dashboard Gallery
          </button>

          <button className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100">
            Learn More
          </button>
        </div>
      </section>

    </main>
  );
}