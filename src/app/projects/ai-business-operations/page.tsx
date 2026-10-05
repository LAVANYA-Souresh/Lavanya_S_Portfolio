import Link from "next/link";

export default function AIProjectPage() {
  return (
    <main className="min-h-screen bg-[#080b12] text-white">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#080b12]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          <Link
            href="/"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            ← Back to Portfolio
          </Link>

          <span className="font-mono text-xs text-emerald-400">
            CASE_STUDY / 001
          </span>

        </div>
      </nav>


      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.15),transparent_45%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">

          <div className="max-w-4xl">

            <div className="mb-6 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 font-mono text-xs text-emerald-300">
              AI ENGINEERING / GENERATIVE AI / BUSINESS INTELLIGENCE
            </div>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              AI Business Operations Engineer
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              An AI-powered business operations platform that transforms
              structured business data and operational knowledge into
              contextual insights, explanations, recommendations, and
              actionable workflows.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Python",
                "FastAPI",
                "PostgreSQL",
                "Machine Learning",
                "Generative AI",
                "LLMs",
                "RAG",
                "Docker",
              ].map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href="#architecture"
                className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400"
              >
                Explore Architecture
              </a>

              <a
                href="#implementation"
                className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/5 hover:text-white"
              >
                View Roadmap
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* Project Snapshot */}
      <section className="border-b border-white/10">

        <div className="mx-auto max-w-6xl px-6 py-10">

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <ProjectStat
              label="Project Type"
              value="AI Engineering"
            />

            <ProjectStat
              label="Architecture"
              value="End-to-End AI System"
            />

            <ProjectStat
              label="Primary Language"
              value="Python"
            />

            <ProjectStat
              label="Status"
              value="In Development"
            />

          </div>

        </div>

      </section>


      {/* Overview */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">

          <div>

            <p className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-400">
              01 / Overview
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              From raw data to decisions.
            </h2>

          </div>

          <div className="space-y-6 leading-8 text-gray-400">

            <p>
              Businesses generate information through sales, inventory,
              customers, transactions, operational records, and internal
              knowledge. The challenge is not simply storing this information,
              but converting it into decisions.
            </p>

            <p>
              This project explores how an AI engineering system can combine
              structured data processing, machine learning, retrieval
              augmented generation, and large language models to create a
              practical decision-support layer.
            </p>

            <p>
              The system is intentionally designed as more than a chatbot.
              It separates data processing, retrieval, reasoning, validation,
              and action generation so that each layer can be tested and
              improved independently.
            </p>

          </div>

        </div>

      </section>


      {/* Problem */}
      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-6xl px-6 py-20">

          <div className="grid gap-10 md:grid-cols-2">

            <div>

              <p className="font-mono text-xs uppercase tracking-[0.25em] text-purple-400">
                02 / Problem
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Business data is useful only when it leads to action.
              </h2>

              <p className="mt-5 leading-8 text-gray-500">
                A dashboard can show what happened. An intelligent operations
                layer should help explain why it happened and what could be
                done next.
              </p>

            </div>

            <div className="space-y-4">

              {[
                "Important information can be distributed across multiple data sources.",
                "Manual analysis can consume significant operational time.",
                "Metrics alone may not explain the underlying business problem.",
                "Decision makers need contextual explanations instead of isolated numbers.",
                "Recommendations should be traceable to the underlying data and knowledge.",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5 text-sm leading-7 text-gray-400"
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* Solution */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="grid gap-10 md:grid-cols-3">

          <SolutionCard
            number="01"
            title="Understand"
            description="Process structured business information and identify important metrics, trends, and anomalies."
          />

          <SolutionCard
            number="02"
            title="Reason"
            description="Combine retrieved context, analytical results, and language-model reasoning to explain business situations."
          />

          <SolutionCard
            number="03"
            title="Act"
            description="Convert analysis into structured recommendations, alerts, and operational actions."
          />

        </div>

      </section>


      {/* Architecture */}
      <section
        id="architecture"
        className="border-y border-white/10 bg-white/[0.02]"
      >

        <div className="mx-auto max-w-6xl px-6 py-20">

          <div className="text-center">

            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
              03 / Architecture
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              System Architecture
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
              A modular architecture separating data ingestion, processing,
              intelligence, retrieval, decision support, and application
              layers.
            </p>

          </div>


          {/* Architecture diagram */}

          <div className="mt-12 overflow-x-auto">

            <div className="mx-auto flex min-w-[1000px] items-center justify-center gap-4">

              <ArchitectureBox
                title="Data Sources"
                items={[
                  "Sales Data",
                  "Customer Data",
                  "Inventory",
                  "Operational Records",
                ]}
              />

              <Arrow />

              <ArchitectureBox
                title="Data Layer"
                items={[
                  "Python",
                  "Pandas",
                  "PostgreSQL",
                  "Data Validation",
                ]}
              />

              <Arrow />

              <ArchitectureBox
                title="Intelligence"
                items={[
                  "ML Models",
                  "Feature Analysis",
                  "Anomaly Detection",
                  "Forecasting",
                ]}
              />

              <Arrow />

              <ArchitectureBox
                title="AI Layer"
                items={[
                  "LLM",
                  "RAG",
                  "Embeddings",
                  "Reasoning",
                ]}
              />

              <Arrow />

              <ArchitectureBox
                title="Action Layer"
                items={[
                  "Insights",
                  "Recommendations",
                  "Alerts",
                  "Tasks",
                ]}
              />

            </div>

          </div>

        </div>

      </section>


      {/* AI Workflow */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber-400">
          04 / AI Workflow
        </p>

        <h2 className="mt-4 text-3xl font-bold">
          How the intelligence layer works
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-gray-400">
          The AI layer follows a controlled pipeline instead of sending raw
          business questions directly to an LLM.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-5">

          {[
            [
              "01",
              "Collect",
              "Retrieve relevant operational data from structured sources.",
            ],
            [
              "02",
              "Analyze",
              "Calculate KPIs, trends, anomalies, and other analytical signals.",
            ],
            [
              "03",
              "Retrieve",
              "Retrieve relevant business knowledge and historical context.",
            ],
            [
              "04",
              "Reason",
              "Combine analytical signals and retrieved context to generate structured reasoning.",
            ],
            [
              "05",
              "Act",
              "Convert validated reasoning into recommendations and operational outputs.",
            ],
          ].map(([number, title, description]) => (

            <div
              key={number}
              className="rounded-2xl border border-white/10 bg-[#0d111a] p-5"
            >

              <span className="font-mono text-xs text-emerald-400">
                {number}
              </span>

              <h3 className="mt-4 font-semibold">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {description}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* Example */}
      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-6xl px-6 py-20">

          <div className="grid gap-12 md:grid-cols-2">

            <div>

              <p className="font-mono text-xs uppercase tracking-[0.25em] text-pink-400">
                05 / Example Use Case
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Turning a business question into an action.
              </h2>

            </div>

            <div className="space-y-5">

              <ExampleStep
                label="QUESTION"
                text='“Why did product sales decline this month?”'
              />

              <ExampleStep
                label="ANALYSIS"
                text="The system analyzes sales trends, product-level performance, customer segments, and historical patterns."
              />

              <ExampleStep
                label="RETRIEVAL"
                text="Relevant business context and historical operational information are retrieved."
              />

              <ExampleStep
                label="REASONING"
                text="The AI combines analytical evidence with retrieved context to generate a structured explanation."
              />

              <ExampleStep
                label="ACTION"
                text="The system produces prioritized recommendations for the business user."
              />

            </div>

          </div>

        </div>

      </section>


      {/* Engineering Decisions */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2">

          <div>

            <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-400">
              06 / Engineering
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Engineering decisions
            </h2>

            <p className="mt-5 leading-8 text-gray-500">
              The goal is to demonstrate engineering judgment rather than
              simply connecting an application to an LLM API.
            </p>

          </div>

          <div className="space-y-5">

            <EngineeringItem
              title="Modular architecture"
              description="Separate components make the system easier to test, replace, debug, and extend."
            />

            <EngineeringItem
              title="Structured AI outputs"
              description="Model responses should follow predictable schemas wherever possible so downstream components can process them safely."
            />

            <EngineeringItem
              title="Retrieval before generation"
              description="Relevant context is retrieved before generation to reduce unsupported responses and improve contextual relevance."
            />

            <EngineeringItem
              title="Data-grounded reasoning"
              description="Business recommendations should be grounded in analytical results and retrieved information rather than generated from model memory alone."
            />

            <EngineeringItem
              title="Human-in-the-loop design"
              description="The system supports decision making rather than blindly executing high-impact business actions."
            />

          </div>

        </div>

      </section>


      {/* Tech Stack */}
      <section className="border-y border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-6xl px-6 py-20">

          <div className="text-center">

            <p className="font-mono text-xs uppercase tracking-[0.25em] text-violet-400">
              07 / Technology
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Technology Stack
            </h2>

          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <TechCard
              category="Backend"
              technologies="Python · FastAPI"
            />

            <TechCard
              category="Data"
              technologies="PostgreSQL · Pandas"
            />

            <TechCard
              category="AI"
              technologies="LLMs · RAG · Embeddings"
            />

            <TechCard
              category="ML"
              technologies="Scikit-learn · Analytics"
            />

            <TechCard
              category="Infrastructure"
              technologies="Docker · REST APIs"
            />

            <TechCard
              category="Version Control"
              technologies="Git · GitHub"
            />

            <TechCard
              category="Evaluation"
              technologies="Accuracy · Relevance · Latency"
            />

            <TechCard
              category="Frontend"
              technologies="Next.js · Tailwind CSS"
            />

          </div>

        </div>

      </section>


      {/* Evaluation */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2">

          <div>

            <p className="font-mono text-xs uppercase tracking-[0.25em] text-orange-400">
              08 / Evaluation
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              How the system will be evaluated
            </h2>

          </div>

          <div className="space-y-5">

            <EvaluationItem
              title="Analytical correctness"
              description="Verify that calculated metrics, trends, and anomaly signals match the underlying data."
            />

            <EvaluationItem
              title="Retrieval relevance"
              description="Measure whether retrieved documents and business context are relevant to the query."
            />

            <EvaluationItem
              title="Response quality"
              description="Evaluate whether generated explanations are useful, grounded, and consistent with available evidence."
            />

            <EvaluationItem
              title="System latency"
              description="Track response time across retrieval, analysis, model generation, and API processing."
            />

          </div>

        </div>

      </section>


      {/* Implementation Roadmap */}
      <section
        id="implementation"
        className="border-y border-white/10 bg-white/[0.02]"
      >

        <div className="mx-auto max-w-6xl px-6 py-20">

          <p className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-400">
            09 / Implementation
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Development roadmap
          </h2>

          <div className="mt-10 space-y-4">

            <RoadmapItem
              number="01"
              title="Data pipeline"
              description="Create the dataset, validation pipeline, transformations, and PostgreSQL schema."
              status="Next"
            />

            <RoadmapItem
              number="02"
              title="Business analytics"
              description="Implement KPI calculations, trend analysis, anomaly detection, and baseline forecasting."
              status="Planned"
            />

            <RoadmapItem
              number="03"
              title="AI intelligence layer"
              description="Add LLM integration, prompt orchestration, structured outputs, and reasoning workflows."
              status="Planned"
            />

            <RoadmapItem
              number="04"
              title="RAG pipeline"
              description="Build document ingestion, chunking, embeddings, vector retrieval, and contextual generation."
              status="Planned"
            />

            <RoadmapItem
              number="05"
              title="Action engine"
              description="Convert validated AI outputs into recommendations, alerts, and trackable actions."
              status="Planned"
            />

            <RoadmapItem
              number="06"
              title="Deployment"
              description="Containerize the application and deploy the API and frontend as a usable portfolio demonstration."
              status="Planned"
            />

          </div>

        </div>

      </section>


      {/* Current Status */}
      <section>

        <div className="mx-auto max-w-6xl px-6 py-20">

          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.04] p-8 md:p-10">

            <p className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-400">
              10 / Project Status
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Actively developing
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-gray-400">
              This project is being developed as a portfolio-grade AI
              engineering system. Implementation details, experiments,
              evaluation results, and deployment components will be documented
              as each stage is completed.
            </p>

            <div className="mt-6 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 font-mono text-xs text-emerald-300">
              STATUS: BUILDING
            </div>

          </div>

        </div>

      </section>


      {/* Links */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:flex-row md:items-center">

          <div>

            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gray-500">
              Explore the implementation
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              Follow the project development
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Source code and live deployment will be connected once the
              implementation is ready.
            </p>

          </div>

          <div className="flex flex-wrap gap-3">

            {/* Replace # with your GitHub repository URL later */}
            <a
              href="#"
              className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400"
            >
              GitHub Repository
            </a>

            <Link
              href="/"
              className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/5 hover:text-white"
            >
              Portfolio
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}


/* ------------------------------------------------ */
/* Components                                      */
/* ------------------------------------------------ */


function ArchitectureBox({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="w-48 rounded-2xl border border-white/10 bg-[#0d111a] p-5 shadow-xl">

      <h3 className="font-semibold text-white">
        {title}
      </h3>

      <div className="mt-4 space-y-2">

        {items.map((item) => (
          <div
            key={item}
            className="rounded-lg bg-white/[0.04] px-3 py-2 text-xs text-gray-400"
          >
            {item}
          </div>
        ))}

      </div>

    </div>
  );
}


function Arrow() {
  return (
    <div className="text-2xl text-emerald-400">
      →
    </div>
  );
}


function ProjectStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
        {label}
      </p>

      <p className="mt-3 text-sm font-semibold text-gray-200">
        {value}
      </p>

    </div>
  );
}


function SolutionCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d111a] p-6">

      <span className="font-mono text-xs text-emerald-400">
        {number}
      </span>

      <h3 className="mt-5 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-gray-500">
        {description}
      </p>

    </div>
  );
}


function ExampleStep({
  label,
  text,
}: {
  label: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d111a] p-5">

      <p className="font-mono text-xs text-emerald-400">
        {label}
      </p>

      <p className="mt-3 text-sm leading-7 text-gray-400">
        {text}
      </p>

    </div>
  );
}


function EngineeringItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border-b border-white/10 pb-5">

      <h3 className="font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-7 text-gray-500">
        {description}
      </p>

    </div>
  );
}


function TechCard({
  category,
  technologies,
}: {
  category: string;
  technologies: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d111a] p-5">

      <p className="font-mono text-xs uppercase tracking-wider text-emerald-400">
        {category}
      </p>

      <p className="mt-3 text-sm leading-6 text-gray-400">
        {technologies}
      </p>

    </div>
  );
}


function EvaluationItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d111a] p-5">

      <h3 className="font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-7 text-gray-500">
        {description}
      </p>

    </div>
  );
}


function RoadmapItem({
  number,
  title,
  description,
  status,
}: {
  number: string;
  title: string;
  description: string;
  status: string;
}) {
  return (
    <div className="flex gap-5 rounded-2xl border border-white/10 bg-[#0d111a] p-5">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 font-mono text-xs text-emerald-400">
        {number}
      </div>

      <div className="flex-1">

        <div className="flex flex-wrap items-center justify-between gap-3">

          <h3 className="font-semibold">
            {title}
          </h3>

          <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase text-gray-500">
            {status}
          </span>

        </div>

        <p className="mt-2 text-sm leading-7 text-gray-500">
          {description}
        </p>

      </div>

    </div>
  );
}