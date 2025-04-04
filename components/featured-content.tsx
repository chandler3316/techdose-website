export function FeaturedContent() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* AI Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Artificial Intelligence</h2>
            <p className="text-lg text-muted-foreground">
              Dive into the world of AI and machine learning. Learn how modern artificial intelligence is transforming
              web development and software engineering.
            </p>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AIhomepage.jpg-iqOLwmBBCtSDcogMajhoEDMpkgJW5f.jpeg"
              alt="AI Technology Visualization"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Programming Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
          <div className="space-y-4 md:order-2">
            <h2 className="text-3xl font-bold tracking-tight">Programming Languages</h2>
            <p className="text-lg text-muted-foreground">
              Master the essential programming languages for web development. From HTML and CSS to JavaScript and
              beyond, build a strong foundation in coding.
            </p>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden md:order-1">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/programminghome.jpg-ywdlpbvnePHVbT57NacRDggG4KadcT.jpeg"
              alt="Programming Languages Overview"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Web Development Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Web Development Process</h2>
            <p className="text-lg text-muted-foreground">
              Understand the complete web development lifecycle. From initial concept to deployment, learn the tools and
              techniques used by professional developers.
            </p>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/webdevhome.jpg-oeI3EzIZoW9iynMBPR3UvMcnYx4cV3.jpeg"
              alt="Web Development Process"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

