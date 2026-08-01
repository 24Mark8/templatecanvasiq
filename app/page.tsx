export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h2 className="text-2xl font-extrabold tracking-tight text-blue-700">
            TemplateCanvasIQ
          </h2>

          <div className="flex gap-8 text-sm font-medium">
            <a
href="#"className="font-medium text-slate-700 transition-colors duration-200 hover:text-blue-700">Home</a>
<a href="#" className="font-medium text-slate-700 transition-colors duration-200 hover:text-blue-700">About</a>
<a href="#" className="font-medium text-slate-700 transition-colors duration-200 hover:text-blue-700">Services</a>
<a href="#" className="font-medium text-slate-700 transition-colors duration-200 hover:text-blue-700">Articles</a>
<a href="#" className="font-medium text-slate-700 transition-colors duration-200 hover:text-blue-700">Contact</a>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-32">
        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
          Transforming NHS Data into Actionable Intelligence
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-slate-600">
          Power BI dashboards, Datix analytics, and the NHS Incident Intelligence
          Toolkit designed to help healthcare organisations make better decisions.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
            View Dashboard Gallery
          </button>

          <button className="rounded-x1 border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100">
            Learn More
          </button>
        </div>
      </section>
<section className="bg-slate-50 py-20">
  <div className="mx-auto max-w-7xl px-6">
    <h2 className="text-3xl font-bold text-slate-900">
      What I Do
    </h2>

    <p className="mt-4 max-w-2xl text-lg text-slate-600">
      I help NHS organisations transform complex data into clear, actionable intelligence through Power BI, automation, and reusable analytics solutions.
    </p>
  </div>
</section>
    </main>
  );
}