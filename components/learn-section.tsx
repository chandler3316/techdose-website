import Link from "next/link"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

export function LearnSection() {
  // Animation on scroll
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const cards = [
    {
      title: "What is an API?",
      path: "/learn/api",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/APIlearntechdev-scGV1bibUEZ6tIEq7kgpDeyTFNsX7Q.png",
      description:
        "An Application Programming Interface (API) is a set of rules and protocols that allows different software applications to communicate with each other.",
    },
    {
      title: "What is Cloud Computing?",
      path: "/learn/cloud-computing",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cloudcomputinglearntechdev.jpg-7Ij5RiI5rW0pWipY7SJ5Q4lqKZQEnJ.jpeg",
      description:
        "Cloud computing is the delivery of computing services over the Internet to offer faster innovation, flexible resources, and economies of scale.",
    },
    {
      title: "What is Chain of Thought?",
      path: "/learn/chain-of-thought",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cotlarntechdev-lWvR5IAXM17EynTowWwMB4XdCbKkCk.webp",
      description:
        "Chain of Thought is a problem-solving technique where one breaks down complex problems into smaller, manageable steps.",
    },
    {
      title: "What are Backend and Frontend?",
      path: "/learn/backend-frontend",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/frontAndBackEndLearnwebdev.jpg-jNLd3wENeCdBlzTRha7LxfBjNjsWSJ.jpeg",
      description:
        "Backend refers to the server-side of an application, while Frontend is the client-side. Together, they form the full stack of web development.",
    },
    {
      title: "What does the F12 key do?",
      path: "/learn/f12-key",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/F12learntechdev.jpg-OqINSg1UoP6ubSkK1r2MAay4xF2oa2.jpeg",
      description:
        "In web browsers, the F12 key typically opens the Developer Tools, allowing developers to inspect and debug websites.",
    },
    {
      title: "What are the basic Web Dev languages?",
      path: "/learn/web-dev-languages",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/basicWebDevlearntechddev-Fm5GB0yFikxjJwF2tRDbk2BrxU7TvG.png",
      description:
        "The core languages of web development are HTML (structure), CSS (styling), and JavaScript (interactivity).",
    },
    {
      title: "What are LLMs?",
      path: "/learn/llms",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LLMSlearntechdev.jpg-1emOFBaTA0sP8o2V8vVh38YplpdHhR.jpeg",
      description:
        "LLMs, or Large Language Models, are advanced AI systems trained on vast amounts of text data. They can understand, generate, and manipulate human-like text.",
    },
  ]

  return (
    <section ref={ref} className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl font-serif mb-12 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Learn Tech Here:
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Link
              key={card.title}
              href={card.path}
              className={`bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 overflow-hidden">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={`${card.title} Illustration`}
                  width={400}
                  height={225}
                  className="object-contain w-full h-full transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-4">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

