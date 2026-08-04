import { FileText, Brain, Rocket } from "lucide-react";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Paste Your Job Description",
    description:
      "Copy a client request from Upwork, Fiverr, LinkedIn, or any platform.",
  },
  {
    icon: Brain,
    number: "02",
    title: "AI Analyzes The Opportunity",
    description:
      "Our AI identifies client needs, required skills, and winning talking points.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Generate Your Proposal",
    description:
      "Receive a personalized proposal designed to improve your chances of winning.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 px-6 py-24">
      <SectionTitle
        badge="How It Works"
        title="Create winning proposals in three simple steps"
        subtitle="From job description to professional proposal in less than a minute."
      />

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <Card key={step.number}>
              <div className="flex items-center justify-between">
                <Icon size={42} className="text-blue-600" />

                <span className="text-4xl font-bold text-slate-200">
                  {step.number}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {step.description}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}