import { useState } from "react";
import { ChevronDown } from "lucide-react";

import SectionTitle from "../ui/SectionTitle";

const faqs = [
  {
    question: "What is ProposalAI?",
    answer:
      "ProposalAI is an AI-powered assistant that helps freelancers create personalized proposals for jobs and client opportunities.",
  },
  {
    question: "Can I use it for Upwork and Fiverr?",
    answer:
      "Yes. ProposalAI is designed to help freelancers create proposals for platforms like Upwork, Fiverr, LinkedIn, and direct client projects.",
  },
  {
    question: "How does the AI generate proposals?",
    answer:
      "The AI analyzes the job requirements, identifies important skills, and creates a proposal tailored to the client's needs.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. New users can start with the free plan and upgrade when they need more proposal generation features.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white px-6 py-24">
      <SectionTitle
        badge="FAQ"
        title="Frequently asked questions"
        subtitle="Everything you need to know about ProposalAI."
      />

      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-white"
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}