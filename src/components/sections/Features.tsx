const features = [
  {
    title: "AI Proposal Writing",
    description:
      "Generate professional proposals tailored to each client."
  },
  {
    title: "Client Analysis",
    description:
      "Understand job requirements and highlight your strengths."
  },
  {
    title: "Proposal Improvement",
    description:
      "Rewrite proposals to make them clearer and more persuasive."
  }
];


export default function Features() {
  return (
    <section id="features" className="px-6 py-20">

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">

        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl bg-white p-6 shadow"
          >
            <h3 className="text-xl font-bold">
              {feature.title}
            </h3>

            <p className="mt-3 text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}