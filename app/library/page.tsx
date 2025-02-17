import Image from "next/image"

export default function LibraryPage() {
  const definitions = [
    {
      title: "What does the F12 key do?",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/F12learntechdev.jpg-OqINSg1UoP6ubSkK1r2MAay4xF2oa2.jpeg",
    },
    {
      title: "What are the basic Web Dev languages?",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/basicWebDevlearntechddev-Fm5GB0yFikxjJwF2tRDbk2BrxU7TvG.png",
    },
    {
      title: "What are Backend and Frontend?",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/frontAndBackEndLearnwebdev.jpg-jNLd3wENeCdBlzTRha7LxfBjNjsWSJ.jpeg",
    },
    {
      title: "What is an API?",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/APIlearntechdev-scGV1bibUEZ6tIEq7kgpDeyTFNsX7Q.png",
    },
    {
      title: "What is Cloud Computing?",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cloudcomputinglearntechdev.jpg-7Ij5RiI5rW0pWipY7SJ5Q4lqKZQEnJ.jpeg",
    },
    {
      title: "What is Chain of Thought?",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cotlarntechdev-lWvR5IAXM17EynTowWwMB4XdCbKkCk.webp",
    },
    {
      title: "What are LLMs?",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LLMSlearntechdev.jpg-1emOFBaTA0sP8o2V8vVh38YplpdHhR.jpeg",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Main Header */}
      <header className="py-24 text-center border-b">
        <h1 className="text-6xl font-serif tracking-tight">OUR LIBRARY</h1>
      </header>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Subject Header */}
        <h2 className="text-4xl font-serif mb-8">TECH ESSENTIALS</h2>

        <div className="grid md:grid-cols-[350px,1fr] gap-8">
          {/* Video List */}
          <div className="border rounded-lg overflow-hidden">
            <div className="p-4 border-b bg-gray-50">
              <div className="flex justify-between items-center">
                <span className="font-medium">Library</span>
                <span className="text-sm text-gray-500">{definitions.length} Videos</span>
              </div>
            </div>

            <div className="divide-y h-[400px] overflow-y-auto">
              {definitions.map((def, index) => (
                <button
                  key={index}
                  className="w-full flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="w-24 h-16 bg-gray-100 rounded flex-shrink-0 relative overflow-hidden">
                    <Image src={def.image || "/placeholder.svg"} alt={def.title} fill className="object-contain" />
                  </div>
                  <div>
                    <p className="font-medium">{def.title}</p>
                    <p className="text-sm text-gray-500">0:16</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Video Player */}
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Select a video to start watching</p>
          </div>
        </div>
      </section>
    </div>
  )
}

