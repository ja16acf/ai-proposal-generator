import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import {
  WandSparkles,
  Search,
  Gauge,
} from "lucide-react";

const features = [
  {
    icon: WandSparkles,
    title: "AI Proposal Generator",
    description:
      "Generate personalized proposals in seconds.",
  },
  {
    icon: Search,
    title: "Job Analysis",
    description:
      "Understand exactly what the client wants.",
  },
  {
    icon: Gauge,
    title: "Proposal Score",
    description:
      "See how well your proposal matches the job.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-white px-6 py-24"
    >
      <SectionTitle
        badge="Features"
        title="Everything you need to win more clients"
        subtitle="ProposalAI helps freelancers create better proposals faster."
      />

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card key={feature.title}>
              <Icon
                size={42}
                className="text-blue-600"
              />

              <h3 className="mt-6 text-xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {feature.description}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}