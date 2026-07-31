export default function Hero() {
  return (
    <section className="px-6 py-24 text-center">

      <div className="mx-auto max-w-5xl">

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          AI-Powered Freelance Assistant
        </span>

        <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900">
          Win more freelance jobs with
          <span className="text-blue-600">
            {" "}AI-generated proposals
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Create personalized proposals for Upwork, Fiverr,
          and direct clients in seconds.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700">
            Generate Proposal
          </button>

          <button className="rounded-xl border px-8 py-4 font-semibold hover:bg-gray-50">
            See Demo
          </button>

        </div>

      </div>

    </section>
  );
}