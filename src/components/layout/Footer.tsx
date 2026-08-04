const footerLinks = {
  Product: [
    "Features",
    "Pricing",
    "Testimonials",
    "FAQ",
  ],
  Company: [
    "About",
    "Blog",
    "Contact",
    "Careers",
  ],
  Resources: [
    "Help Center",
    "Documentation",
    "Community",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 px-6 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-bold">
            ProposalAI
          </h2>

          <p className="mt-4 text-slate-400">
            Create winning freelance proposals
            with the power of AI.
          </p>
        </div>

        {Object.entries(footerLinks).map(
          ([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold">
                {title}
              </h3>

              <ul className="mt-4 space-y-3 text-slate-400">
                {links.map((link) => (
                  <li
                    key={link}
                    className="hover:text-white cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} ProposalAI.
        All rights reserved.
      </div>
    </footer>
  );
}