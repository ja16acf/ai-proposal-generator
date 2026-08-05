import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Features",
    "Pricing",
    "Testimonials",
    "FAQ",
  ];

  return (
    <nav className="border-b border-slate-200 bg-white px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">
          ProposalAI
        </h1>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-slate-600 hover:text-blue-600"
            >
              {link}
            </a>
          ))}

          <button className="rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700">
            Start Free
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mt-4 space-y-4 md:hidden">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-slate-600 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}

          <button className="w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white">
            Start Free
          </button>
        </div>
      )}
    </nav>
  );
}