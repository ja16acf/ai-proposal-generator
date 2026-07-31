export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <h1 className="text-2xl font-bold text-blue-600">
          ProposalAI
        </h1>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-gray-600 hover:text-blue-600">
            Features
          </a>

          <a href="#pricing" className="text-gray-600 hover:text-blue-600">
            Pricing
          </a>

          <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
}