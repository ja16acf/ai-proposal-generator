export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold text-blue-600">
            ProposalAI
          </h1>

          <button className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          AI-Powered Proposal Writing
        </span>

        <h2 className="mt-8 max-w-4xl text-5xl font-bold tracking-tight text-slate-900">
          Win more freelance projects with AI-generated proposals.
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          Generate personalized, persuasive proposals in seconds for Upwork,
          Fiverr, LinkedIn, and direct clients.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700">
            Start Free
          </button>

          <button className="rounded-xl border border-slate-300 px-8 py-4 font-semibold hover:bg-white">
            View Demo
          </button>
        </div>
      </main>
    </div>
  );
}