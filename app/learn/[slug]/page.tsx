import { Calendar, Clock } from "lucide-react"
import Image from "next/image"

interface PageProps {
  params: {
    slug: string
  }
}

// This would typically come from a database or CMS
const definitions = {
  api: {
    title: "What is an API?",
    date: "February 6, 2025",
    time: "8:47 am",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/APIlearntechdev-scGV1bibUEZ6tIEq7kgpDeyTFNsX7Q.png",
    definition:
      "An Application Programming Interface (API) is a set of rules and protocols that allows different software applications to communicate with each other.",
    howToRemember:
      "Think of an API as a waiter in a restaurant. The waiter (API) takes your order (request) to the kitchen (server) and brings back your food (response). It's the messenger that lets different parts of a system communicate.",
    realWorldExample:
      "When you use a weather app on your phone, it uses an API to fetch weather data from a weather service. The app sends a request to the weather service's API, and the API returns the current weather data in a format the app can understand and display.",
    author: "Chandler Haney",
  },
  "cloud-computing": {
    title: "What is Cloud Computing?",
    date: "February 7, 2025",
    time: "10:15 am",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cloudcomputinglearntechdev.jpg-7Ij5RiI5rW0pWipY7SJ5Q4lqKZQEnJ.jpeg",
    definition:
      'Cloud computing is the delivery of computing services—including servers, storage, databases, networking, software—over the Internet ("the cloud") to offer faster innovation, flexible resources, and economies of scale.',
    howToRemember:
      "Think of cloud computing as renting a fully furnished apartment instead of buying and maintaining your own house. You get all the benefits without the hassle of maintenance.",
    realWorldExample:
      "When you use Google Docs, you're using cloud computing. The document is stored on Google's servers, not your computer, and you can access it from any device with an internet connection.",
    author: "Chandler Haney",
  },
  "chain-of-thought": {
    title: "What is Chain of Thought?",
    date: "February 8, 2025",
    time: "2:30 pm",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cotlarntechdev-lWvR5IAXM17EynTowWwMB4XdCbKkCk.webp",
    definition:
      "Chain of Thought is a problem-solving technique where one breaks down complex problems into smaller, manageable steps. In AI and programming, it refers to the process of explicitly showing the reasoning steps to arrive at a solution.",
    howToRemember:
      "Imagine you're building a Lego set. You don't just jump to the final product; you follow a series of steps, each building on the previous one. That's chain of thought.",
    realWorldExample:
      "When a math teacher solves a complex problem on the board, they show each step of their reasoning. This step-by-step explanation is a chain of thought.",
    author: "Chandler Haney",
  },
  "backend-frontend": {
    title: "What are Backend and Frontend?",
    date: "February 9, 2025",
    time: "11:20 am",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/frontAndBackEndLearnwebdev.jpg-jNLd3wENeCdBlzTRha7LxfBjNjsWSJ.jpeg",
    definition:
      "Backend refers to the server-side of an application, handling data storage, security, and business logic. Frontend is the client-side, focusing on user interface and experience. Together, they form the full stack of web development.",
    howToRemember:
      "Think of a restaurant: the backend is the kitchen (where food is prepared, recipes are stored), and the frontend is the dining area (where customers interact with the menu and eat).",
    realWorldExample:
      "In a social media app, the frontend is what you see and interact with (posts, likes, comments), while the backend manages data storage, user authentication, and processes like generating your feed.",
    author: "Chandler Haney",
  },
  "f12-key": {
    title: "What does the F12 key do?",
    date: "February 10, 2025",
    time: "3:45 pm",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/F12learntechdev.jpg-OqINSg1UoP6ubSkK1r2MAay4xF2oa2.jpeg",
    definition:
      "In web browsers, the F12 key typically opens the Developer Tools. This powerful feature allows developers to inspect and debug HTML, CSS, and JavaScript, monitor network activity, and analyze page performance.",
    howToRemember:
      "F12 is like x-ray vision for websites. Just as Superman uses his x-ray vision to see through walls, developers use F12 to see through the layers of a website.",
    realWorldExample:
      "A web developer notices a button is misaligned on a webpage. By pressing F12, they can inspect the button's HTML and CSS, make adjustments in real-time, and see the changes immediately.",
    author: "Chandler Haney",
  },
  "web-dev-languages": {
    title: "What are the basic Web Dev languages?",
    date: "February 11, 2025",
    time: "9:10 am",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/basicWebDevlearntechddev-Fm5GB0yFikxjJwF2tRDbk2BrxU7TvG.png",
    definition:
      "The core languages of web development are HTML (structure), CSS (styling), and JavaScript (interactivity). Additional languages like Python, Ruby, or PHP are often used for backend development.",
    howToRemember:
      "Think of building a house: HTML is the foundation and walls (structure), CSS is the paint and decorations (style), and JavaScript is the electricity and plumbing (functionality).",
    realWorldExample:
      "When you visit a website, you're seeing HTML structuring the content, CSS making it look appealing, and JavaScript allowing you to interact with elements like buttons or forms.",
    author: "Chandler Haney",
  },
  llms: {
    title: "What are LLMs?",
    date: "February 12, 2025",
    time: "1:55 pm",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LLMSlearntechdev.jpg-1emOFBaTA0sP8o2V8vVh38YplpdHhR.jpeg",
    definition:
      "LLMs, or Large Language Models, are advanced AI systems trained on vast amounts of text data. They can understand, generate, and manipulate human-like text, powering applications like chatbots, content generation, and language translation.",
    howToRemember:
      "Think of an LLM as a super-smart parrot that's read millions of books. It can mimic human-like responses based on all the patterns it's learned, but it's not actually thinking or understanding like a human.",
    realWorldExample:
      "When you use a chatbot like ChatGPT, you're interacting with an LLM. It can answer questions, write stories, or even help debug code based on the vast amount of text data it was trained on.",
    author: "Chandler Haney",
  },
}

export default function DefinitionPage({ params }: PageProps) {
  const definition = definitions[params.slug as keyof typeof definitions]

  if (!definition) {
    return <div>Definition not found</div>
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      {/* Title and Date */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-serif mb-6">{definition.title}</h1>
        <div className="flex justify-center gap-4 text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {definition.date}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {definition.time}
          </div>
        </div>
      </header>

      {/* Main Image */}
      <div className="mb-12 flex justify-center">
        <Image
          src={definition.image || "/placeholder.svg"}
          alt={definition.title}
          width={288}
          height={162}
          className="rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="space-y-8">
        {/* Definition */}
        <section>
          <h2 className="text-3xl font-serif mb-4">{definition.title}</h2>
          <ul className="list-disc pl-6">
            <li className="text-xl">{definition.definition}</li>
          </ul>
        </section>

        {/* How to Remember It */}
        <section>
          <h2 className="text-3xl font-serif mb-4">How Do I Remember It?</h2>
          <ul className="list-disc pl-6">
            <li className="text-xl">{definition.howToRemember}</li>
          </ul>
        </section>

        {/* Real World Example */}
        <section>
          <h2 className="text-3xl font-serif mb-4">Real World Example</h2>
          <ul className="list-disc pl-6">
            <li className="text-xl">{definition.realWorldExample}</li>
          </ul>
        </section>

        {/* Social Links and Author */}
        <footer className="pt-8 border-t">
          <p className="text-xl mb-4">Follow us on TikTok, Instagram, and YouTube below.</p>
          <p className="text-xl">By: {definition.author}</p>
        </footer>
      </div>
    </article>
  )
}

