export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h2 className="text-2xl font-extrabold tracking-tight text-blue-700">
            TemplateCanvasIQ
          </h2>

          <div className="flex gap-8 text-sm font-medium">
            <a
              href="#hero"
              className="font-medium text-slate-700 transition-colors duration-200 hover:text-blue-700"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-medium text-slate-700 transition-colors duration-200 hover:text-blue-700"
            >
              About
            </a>
            <a
              href="#services"
              className="font-medium text-slate-700 transition-colors duration-200 hover:text-blue-700"
            >
              Services
            </a>
            <a
              href="#articles"
              className="font-medium text-slate-700 transition-colors duration-200 hover:text-blue-700"
            >
              Articles
            </a>
            <a
              href="#contact"
              className="font-medium text-slate-700 transition-colors duration-200 hover:text-blue-700"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="mx-auto max-w-7xl px-6 py-32">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-700">
          TURNING NHS DATA INTO BETTER DECISIONS
        </p>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
          Transforming NHS Data into Actionable Intelligence
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-slate-600">
          Power BI dashboards, Datix analytics, and the NHS Incident Intelligence Toolkit designed
          to help healthcare organisations make better decisions.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
            View Dashboard Gallery
          </button>

          <button className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100">
            Learn More
          </button>
        </div>
      </section>

      {/* ABOUT + SERVICES + STATS */}
      <section id="about" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-slate-900">What I Do</h2>

          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            I help NHS organisations transform complex data into clear, actionable intelligence
            through Power BI, automation, and reusable analytics solutions.
          </p>

          <section id="services" className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold text-slate-900">📊 Power BI Dashboard Design</h3>
              <p className="mt-4 text-slate-600">
                Designing clear, interactive dashboards that help NHS teams understand performance,
                identify trends, and make informed decisions.
              </p>
            </div>

            <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold text-slate-900">🩺 NHS Incident Intelligence Toolkit</h3>
              <p className="mt-4 text-slate-600">
                A reusable toolkit for incident categorisation, trend analysis, and patient safety
                reporting.
              </p>
            </div>

            <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold text-slate-900">🤖 Automation & AI</h3>
              <p className="mt-4 text-slate-600">
                Automating NHS reporting with Power Query, DAX and AI-assisted workflows to save
                time, improve consistency and reduce manual effort.
              </p>
            </div>
          </section>

          <section className="mt-20 border-t border-slate-200 pt-16">
            <h2 className="text-center text-3xl font-bold text-slate-900">By the Numbers</h2>

            <div className="mt-12 grid gap-8 text-center md:grid-cols-4">
              <div>
                <h3 className="text-4xl font-extrabold text-blue-700">24+</h3>
                <p className="mt-2 text-slate-600">Years in the NHS</p>
              </div>

              <div>
                <h3 className="text-4xl font-extrabold text-blue-700">100+</h3>
                <p className="mt-2 text-slate-600">Power BI Dashboards</p>
              </div>

              <div>
                <h3 className="text-4xl font-extrabold text-blue-700">1M+</h3>
                <p className="mt-2 text-slate-600">Records Analysed</p>
              </div>

              <div>
                <h3 className="text-4xl font-extrabold text-blue-700">24/7</h3>
                <p className="mt-2 text-slate-600">Decision Support</p>
              </div>
            </div>
          </section>

          <div className="mt-12 flex flex-wrap gap-3">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              Power BI
            </span>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              Microsoft Fabric
            </span>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              AI Automation
            </span>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              Business Intelligence
            </span>
          </div>
        </div>
      </section>

      {/* ARTICLES STRIP */}
      <section id="articles" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-slate-900">Articles & Insights</h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Short, practical pieces on NHS analytics, incident reporting, and executive‑ready
            dashboards.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Designing NHS Incident Dashboards That Executives Actually Use
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                How to move from raw incident lists to clear, board‑level insight.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Making Waiting Time Reporting Less Painful
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Practical patterns for variation, trend, and pressure views in Power BI.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                From Datix to Intelligence: A Toolkit Approach
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Why a reusable incident model beats one‑off reports every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-slate-900 py-20">
        <div className="mx-auto max-w-7xl px-6 text-slate-50">
          <h2 className="text-3xl font-bold">Let’s talk about your NHS data</h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-200">
            Share your current challenges—incidents, waiting times, performance—and get an honest
            view of what’s possible with TemplateCanvasIQ.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
              Request a 20‑minute call
            </button>
            <button className="rounded-xl border border-slate-400 px-6 py-3 font-semibold text-slate-50 hover:bg-slate-800">
              Email me your current dashboard
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
