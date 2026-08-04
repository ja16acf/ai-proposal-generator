import { Check } from "lucide-react";

import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying ProposalAI.",
    features: [
      "5 AI proposals per month",
      "Basic proposal generation",
      "Copy proposals",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$9",
    description: "For freelancers who want more clients.",
    features: [
      "Unlimited proposals",
      "Proposal quality scoring",
      "Premium templates",
      "Advanced AI suggestions",
    ],
    popular: true,
  },
  {
    name: "Freelancer Plus",
    price: "$19",
    description: "For serious freelancers scaling up.",
    features: [
      "Client requirement analysis",
      "Portfolio matching",
      "Priority AI generation",
      "Everything in Pro",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white px-6 py-24">
      <SectionTitle
        badge="Pricing"
        title="Simple pricing that grows with you"
        subtitle="Start free and upgrade when ProposalAI helps you win more projects."
      />

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name}>
            {plan.popular && (
              <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                Most Popular
              </span>
            )}

            <h3 className="mt-5 text-2xl font-bold text-slate-900">
              {plan.name}
            </h3>

            <div className="mt-4">
              <span className="text-4xl font-bold text-slate-900">
                {plan.price}
              </span>

              {plan.price !== "$0" && (
                <span className="text-slate-500">
                  /month
                </span>
              )}
            </div>

            <p className="mt-4 text-slate-600">
              {plan.description}
            </p>

            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <Check
                    size={18}
                    className="text-green-600"
                  />

                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                variant={plan.popular ? "primary" : "secondary"}
              >
                Get Started
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}