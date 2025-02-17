export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 border-b">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-serif text-center mb-24">ABOUT US</h1>
        </div>
      </section>

      {/* Personal Introduction Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Introduction */}
          <div className="text-xl leading-relaxed">
            <p>
              I'm Chandler Haney and I started TechFuel as a means to assist others in learning while also spreading my
              passion for technology. This is my mission and I hope you enjoy it as much as I do.
            </p>
          </div>

          {/* Personal Information */}
          <div className="space-y-4">
            <p className="text-xl leading-relaxed">
              I am a full-stack developer with a focus on web technologies. I am mainly interested in modern web
              development frameworks and cloud computing.
            </p>
            <p className="text-lg text-gray-600">Instagram: @chandler3316</p>
          </div>

          {/* Profile Photo */}
          <div className="aspect-w-16 aspect-h-9 max-w-2xl mx-auto mb-16">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="Chandler Haney"
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

