import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white px-6 py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            🚀 AI-Powered Freelance Assistant
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Win More Freelance Jobs with{" "}
            <span className="text-blue-600">
              AI-Generated Proposals
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Stop spending hours writing proposals. Generate personalized,
            persuasive proposals for Upwork, Fiverr, LinkedIn, and direct
            clients in under 60 seconds.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Button>Start Free</Button>

            <Button variant="secondary">
              Watch Demo
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-slate-500 lg:justify-start">
            <div>
              <span className="block text-2xl font-bold text-slate-900">
                10k+
              </span>
              Proposals Generated
            </div>

            <div>
              <span className="block text-2xl font-bold text-slate-900">
                95%
              </span>
              Time Saved
            </div>

            <div>
              <span className="block text-2xl font-bold text-slate-900">
                24/7
              </span>
              AI Assistance
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-1 justify-center">
          <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
            <div className="mb-6 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg bg-slate-100 p-4">
                <p className="text-sm font-semibold text-slate-500">
                  Job Description
                </p>
                <p className="mt-2 text-slate-700">
                  Looking for a React developer to build a modern dashboard...
                </p>
              </div>

              <div className="rounded-lg bg-blue-50 p-4">
                <p className="text-sm font-semibold text-blue-700">
                  AI Proposal
                </p>
                <p className="mt-2 text-slate-700">
                  Hi! I have extensive experience building responsive React
                  applications with TypeScript and Tailwind CSS...
                </p>
              </div>

              <div className="rounded-lg bg-green-50 p-4">
                <p className="text-sm font-semibold text-green-700">
                  Match Score
                </p>
                <p className="mt-2 text-3xl font-bold text-green-600">
                  96%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}