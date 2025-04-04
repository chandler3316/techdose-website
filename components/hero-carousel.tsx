"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const SLIDE_DURATION = 5000 // 5 seconds

const slides = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AIhomepage.jpg-iqOLwmBBCtSDcogMajhoEDMpkgJW5f.jpeg",
    alt: "AI Technology",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/programminghome.jpg-ywdlpbvnePHVbT57NacRDggG4KadcT.jpeg",
    alt: "Programming Languages",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/webdevhome.jpg-oeI3EzIZoW9iynMBPR3UvMcnYx4cV3.jpeg",
    alt: "Web Development Process",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, SLIDE_DURATION)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="relative flex-1 w-full overflow-hidden">
      {/* Slides */}
      <div
        className="h-full flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="h-full w-full flex-shrink-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.url})`,
            }}
          />
        ))}
      </div>

      {/* Hero Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">WebDose</h1>
          <p className="text-xl md:text-2xl text-white font-light">A better way to learn web development</p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
        onClick={previousSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? "bg-white" : "bg-white/50"}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

