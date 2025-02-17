import Link from "next/link"
import Image from "next/image"

export function LearnSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif mb-12">Learn Tech Here:</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* API Card */}
          <Link
            href="/learn/api"
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-100">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/APIlearntechdev-scGV1bibUEZ6tIEq7kgpDeyTFNsX7Q.png"
                alt="API Illustration"
                width={400}
                height={225}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif mb-4">What is an API?</h3>
              <p className="text-gray-600">
                An Application Programming Interface (API) is a set of rules and protocols that allows different
                software applications to communicate with each other.
              </p>
            </div>
          </Link>

          {/* Cloud Computing Card */}
          <Link
            href="/learn/cloud-computing"
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-100">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cloudcomputinglearntechdev.jpg-7Ij5RiI5rW0pWipY7SJ5Q4lqKZQEnJ.jpeg"
                alt="Cloud Computing Illustration"
                width={400}
                height={225}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif mb-4">What is Cloud Computing?</h3>
              <p className="text-gray-600">
                Cloud computing is the delivery of computing services over the Internet to offer faster innovation,
                flexible resources, and economies of scale.
              </p>
            </div>
          </Link>

          {/* Chain of Thought Card */}
          <Link
            href="/learn/chain-of-thought"
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-100">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cotlarntechdev-lWvR5IAXM17EynTowWwMB4XdCbKkCk.webp"
                alt="Chain of Thought Illustration"
                width={400}
                height={225}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif mb-4">What is Chain of Thought?</h3>
              <p className="text-gray-600">
                Chain of Thought is a problem-solving technique where one breaks down complex problems into smaller,
                manageable steps.
              </p>
            </div>
          </Link>

          {/* Backend and Frontend Card */}
          <Link
            href="/learn/backend-frontend"
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-100">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/frontAndBackEndLearnwebdev.jpg-jNLd3wENeCdBlzTRha7LxfBjNjsWSJ.jpeg"
                alt="Backend and Frontend Illustration"
                width={400}
                height={225}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif mb-4">What are Backend and Frontend?</h3>
              <p className="text-gray-600">
                Backend refers to the server-side of an application, while Frontend is the client-side. Together, they
                form the full stack of web development.
              </p>
            </div>
          </Link>

          {/* F12 Key Card */}
          <Link
            href="/learn/f12-key"
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-100">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/F12learntechdev.jpg-OqINSg1UoP6ubSkK1r2MAay4xF2oa2.jpeg"
                alt="F12 Key Illustration"
                width={400}
                height={225}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif mb-4">What does the F12 key do?</h3>
              <p className="text-gray-600">
                In web browsers, the F12 key typically opens the Developer Tools, allowing developers to inspect and
                debug websites.
              </p>
            </div>
          </Link>

          {/* Web Dev Basic Languages Card */}
          <Link
            href="/learn/web-dev-languages"
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-100">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/basicWebDevlearntechddev-Fm5GB0yFikxjJwF2tRDbk2BrxU7TvG.png"
                alt="Web Dev Languages Illustration"
                width={400}
                height={225}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif mb-4">What are the basic Web Dev languages?</h3>
              <p className="text-gray-600">
                The core languages of web development are HTML (structure), CSS (styling), and JavaScript
                (interactivity).
              </p>
            </div>
          </Link>

          {/* LLMs Card */}
          <Link
            href="/learn/llms"
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-100">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LLMSlearntechdev.jpg-1emOFBaTA0sP8o2V8vVh38YplpdHhR.jpeg"
                alt="LLMs Illustration"
                width={400}
                height={225}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif mb-4">What are LLMs?</h3>
              <p className="text-gray-600">
                LLMs, or Large Language Models, are advanced AI systems trained on vast amounts of text data. They can
                understand, generate, and manipulate human-like text for various applications.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

