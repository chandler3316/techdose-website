"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-3xl font-bold tracking-tighter">
              TechFuel
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-foreground/60 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground/60 hover:text-foreground transition-colors">
              About Us
            </Link>
            <Link href="/library" className="text-foreground/60 hover:text-foreground transition-colors">
              Our Library
            </Link>
            <Link href="/learn" className="text-foreground/60 hover:text-foreground transition-colors">
              Learn Tech Dev
            </Link>
            <Link href="/contact" className="text-foreground/60 hover:text-foreground transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white/80 backdrop-blur-sm border-b">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-foreground/60 hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-foreground/60 hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/library"
              className="block px-3 py-2 text-foreground/60 hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Our Library
            </Link>
            <Link
              href="/learn"
              className="block px-3 py-2 text-foreground/60 hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Learn Tech Dev
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-foreground/60 hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

