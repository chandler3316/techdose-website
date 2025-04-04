"use client"

import { LearnSection } from "@/components/learn-section"

export default function LearnPage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Learn Tech Dev</h1>
          <p className="text-xl text-gray-600">
            Explore our comprehensive collection of technology concepts, explained simply and clearly.
          </p>
        </div>

        {/* Reusing the LearnSection component that contains all definitions */}
        <LearnSection />

        {/* Additional Resources Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-8">Additional Resources</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-4">Video Tutorials</h3>
              <p className="text-gray-600 mb-4">[Add links to video tutorials here]</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-4">Practice Projects</h3>
              <p className="text-gray-600 mb-4">[Add links to practice projects here]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

