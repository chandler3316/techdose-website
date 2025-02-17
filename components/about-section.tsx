export function AboutSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-serif tracking-tight">"What is TechFuel?"</h2>

        <div className="space-y-6 text-xl md:text-2xl text-gray-800">
          <p>TechFuel is our attempt at making technology and development more accessible.</p>
          <p>TechFuel is digestible, simplified, and made to be understood.</p>
          <p>Our goal is to learn with you, as we attempt to teach modern technology concepts in an easier format.</p>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-2xl md:text-3xl text-gray-900">Join us on our journey.</p>
        </div>

        <div className="pt-12">
          <div className="relative max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 text-lg"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

