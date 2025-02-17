"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AIhomepage.jpg-iqOLwmBBCtSDcogMajhoEDMpkgJW5f.jpeg",
    alt: "AI Technology",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/programminghome.jpg-ywdlpbvnePHVbT57NacRDggG4KadcT.jpeg",
    alt: "Programming Languages",
  },
]

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="relative bg-black text-white h-screen">
      {images.map((image, index) => (
        <div
          key={image.url}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image.url})`,
            opacity: currentImage === index ? 1 : 0,
          }}
        />
      ))}
      <div className="relative flex flex-col justify-center items-center h-full max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">TechFuel</h1>
        <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-12">A better way to learn web development</p>
        <Button
          variant="outline"
          size="icon"
          onClick={nextImage}
          className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2"
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next image</span>
        </Button>
      </div>
    </div>
  )
}

