"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export function Hero() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set loaded state after a small delay to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative bg-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero background with image */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center justify-center h-full">
          <Image
            src="/images/tf-hero-clean.png"
            alt="TechFuel - A better way to learn web development"
            width={1200}
            height={800}
            priority
            className="object-contain max-w-full max-h-full"
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </div>
    </div>
  )
}

