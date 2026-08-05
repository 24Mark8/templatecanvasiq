import Link from "next/link";

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
            <a href="#hero" className="text-slate-700 hover:text-blue-700">Home</a>
            <a href="#about" className="text-slate-700 hover:text-blue-700">About</a>
            <a href="#services" className="text-slate-700 hover:text-blue-700">Services</a>
            <a href="#articles" className="text-slate-700 hover:text-blue-700">Articles</a>
            <a href="#contact" className="text-slate-700 hover:text-blue-700">Contact</a>
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

      {/* ABOUT + SERVICES */}
      <section id="about" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-bold text-slate-900">What I Do</h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            I help NHS organisations transform complex data into clear, actionable intelligence
            through Power BI, automation, and reusable analytics solutions.
          </p>

          {/* SERVICES GRID */}
          <section id="services" className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-slate-900">📊 Power BI Dashboard Design</h3>
              <p className="mt-4 text-slate-600">
                Designing clear, interactive dashboards that help NHS teams understand performance,
                identify trends, and make informed decisions.
              </p>
            </div>

            <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-slate-900">🩺 NHS Incident Intelligence Toolkit</h3>
              <p className="mt-4 text-slate-600">
                A reusable toolkit for incident categorisation, trend analysis, and patient safety
                reporting.
              </p>
            </div>

            <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-slate-900">🤖 Automation & AI</h3>
              <p className="mt-4 text-slate-600">
                Automating NHS reporting with Power Query, DAX and AI-assisted workflows to save
                time, improve consistency and reduce manual effort.
              </p>
            </div>
          </section>

          {/* BY THE NUMBERS — CENTRED */}
          <section className="mt-20 border-t border-slate-200 pt-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900">By the Numbers</h2>

            <div className="mt-12 grid gap-8 md:grid-cols-4">
              <div>
                <h3 className="text-4xl font-extrabold text-blue-700">24+</h3>
                <p className="mt-2 text-slate-600">Years in the NHS</p>
              </div>

              <div>
                <h3 className="text-4xl font-extrabold text-blue-700">100+</h3>
                <p className="mt-2 text-slate-600">Dashboards Delivered</p>
              </div>

              <div>
                <h3 className="text-4xl font-extrabold text-blue-700">1M+</h3>
                <p className="mt-2 text-slate-600">Data Records Analysed</p>
              </div>

              <div>
                <h3 className="text-4xl font-extrabold text-blue-700">24/7</h3>
                <p className="mt-2 text-slate-600">Decision Support</p>
              </div>
            </div>
          </section>

          {/* TAGS */}
          <div className="mt-12 flex flex-wrap justify-center gap-3 text-center">
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

     {/* ARTICLES */}
<section id="articles" className="py-24">
  <div className="mx-auto max-w-7xl px-6">
    <h2 className="text-3xl font-bold text-slate-900">
      Articles & Insights
    </h2>

    <p className="mt-4 max-w-3xl text-lg text-slate-600">
      Explore practical articles on incident intelligence, Power BI,
      analytics, automation and AI. Each article is based on real-world
      experience and designed to help organisations turn data into better
      decisions.
    </p>

    <div className="mt-12 grid gap-8 md:grid-cols-2">

      {/* PART 1 */}
      <Link
        href="/articles/part-1"
        className="block rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-500"
      >
        <p className="text-sm font-semibold text-blue-700">Part 1</p>
        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Why Free-Text Incident Data Is One of the Biggest Untapped Resources
        </h3><p className="mt-3 text-slate-600">
  Why free‑text incident narratives contain hidden insights that structured fields miss.
</p>


        <p className="mt-4 font-semibold text-blue-700">Read Article →</p>
      </Link>

      {/* PART 2 */}
      <Link
        href="/articles/datix-categorisation-part-2"
        className="block rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-500"
      >
        <p className="text-sm font-semibold text-blue-700">Part 2</p>
        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Building a Reusable Framework for Categorising Datix Incident Narratives
        </h3>
        <p className="mt-3 text-slate-600">
          Discover why a well-designed keyword library is the foundation of a scalable and reusable incident categorisation framework.
        </p>
        <p className="mt-5 font-semibold text-blue-700">Read Article →</p>
      </Link>

      {/* PART 3 */}
      <Link
        href="/articles/part-3"
        className="block rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-500"
      >
        <p className="text-sm font-semibold text-blue-700">Part 3</p>
        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Designing a Reusable Keyword Library
        </h3>
        <p className="mt-3 text-slate-600">
          Learn how to build a scalable keyword library that separates business rules
          from code and supports continuous improvement.
        </p>
        <p className="mt-5 font-semibold text-blue-700">Read Article →</p>
      </Link>

      {/* PART 4 — FIXED */}
      <Link
        href="/articles/part-4"
        className="block rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-500"
      >
        <p className="text-sm font-semibold text-blue-700">Part 4</p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Building the Power Query Categorisation Engine
        </h3>

        <p className="mt-3 text-slate-600">
          How to design a scalable, maintainable Power Query engine for categorising
          incident narratives using reusable logic.
        </p>

        <p className="mt-5 font-semibold text-blue-700">Read Article →</p>
      </Link>

      {/* PART 5 */}
      <Link
        href="/articles/part-5"
        className="block rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-500"
      >
        <p className="text-sm font-semibold text-blue-700">Part 5</p>
        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Using AI to Build Better Categories
        </h3><p className="mt-3 text-slate-600">
  How AI can strengthen categorisation frameworks and uncover patterns humans miss.
</p>

        <p className="mt-5 font-semibold text-blue-700">Read Article →</p>
      </Link>

      {/* PART 6 */}
      <Link
        href="/articles/part-6"
        className="block rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-500"
      >
        <p className="text-sm font-semibold text-blue-700">Part 6</p>
        <h3 className="mt-2 text-xl font-bold text-slate-900">
          From Categories to Insights
        </h3><p className="mt-3 text-slate-600">
  Turning categorised incident data into meaningful insights that drive improvement.
</p>

        <p className="mt-5 font-semibold text-blue-700">Read Article →</p>
      </Link>

      {/* PART 7 */}
      <Link
        href="/articles/part-7"
        className="block rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-blue-500 md:col-span-2"
      >
        <p className="text-sm font-semibold text-blue-700">Part 7</p>
        <h3 className="mt-2 text-xl font-bold text-slate-900">
          A Framework That Goes Beyond VTE
        </h3><p className="mt-3 text-slate-600">
  A generalisable framework that extends beyond VTE and supports wider safety themes.
</p>

        <p className="mt-5 font-semibold text-blue-700">Read Article →</p>
      </Link>

    </div>
  </div>
</section>



      {/* CONTACT */}
      <section id="contact" className="bg-slate-900 py-24">
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
      {/* FOOTER */}
      <footer className="bg-slate-900 py-12">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-2xl font-bold text-white">
            TemplateCanvasIQ
          </h2>

          <p className="mt-3 max-w-xl text-slate-300">
            Transforming complex data into actionable intelligence.
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <a href="#hero" className="text-slate-300 hover:text-white">Home</a>
            <a href="#about" className="text-slate-300 hover:text-white">About</a>
            <a href="#services" className="text-slate-300 hover:text-white">Services</a>
            <a href="#articles" className="text-slate-300 hover:text-white">Articles</a>
            <a href="#contact" className="text-slate-300 hover:text-white">Contact</a>
          </div>

          <div className="mt-8 border-t border-slate-700 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-400">
              © 2026 TemplateCanvasIQ. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/mark-mundy-94257335b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="mailto:your@email.com"
                className="text-slate-300 hover:text-white"
              >
                Email
              </a>
            </div>
          </div>

        </div>
      </footer>
    </main>
  );
}
