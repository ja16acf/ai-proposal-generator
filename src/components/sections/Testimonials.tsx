import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Freelance Designer",
    quote:
      "ProposalAI helped me create better proposals in minutes instead of spending hours writing them.",
  },
  {
    name: "David K.",
    role: "Full Stack Developer",
    quote:
      "The AI suggestions helped me focus on client needs and improve my proposal quality.",
  },
  {
    name: "Michael R.",
    role: "Marketing Consultant",
    quote:
      "I can now respond to more opportunities quickly without sacrificing professionalism.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 px-6 py-24">
      <SectionTitle
        badge="Testimonials"
        title="Freelancers are working smarter"
        subtitle="See how ProposalAI helps professionals save time and create stronger proposals."
      />

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name}>
            <p className="text-slate-600">
              "{testimonial.quote}"
            </p>

            <div className="mt-6">
              <h3 className="font-bold text-slate-900">
                {testimonial.name}
              </h3>

              <p className="text-sm text-slate-500">
                {testimonial.role}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}