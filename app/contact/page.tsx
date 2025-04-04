import { ContactSection } from "@/components/contact-section"

export default function ContactPage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">Have questions or suggestions? We'd love to hear from you.</p>
        </div>

        {/* Reusing the ContactSection component */}
        <ContactSection />

        {/* Additional Contact Information */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Email</h3>
            <p className="text-gray-600">
              <a
                href="mailto:haneychandler24@techfuel.org"
                className="hover:underline hover:text-blue-600 transition-colors"
              >
                haneychandler24@techfuel.org
              </a>
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Social Media</h3>
            <p className="text-gray-600">
              <a
                href="https://www.instagram.com/tech.fuell/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-600 transition-colors"
              >
                Instagram : tech.fuell
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

