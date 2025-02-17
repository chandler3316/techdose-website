import Link from "next/link"
import { Youtube, Instagram, TwitterIcon as TikTok } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Logo and Social Links */}
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-bold tracking-tighter">
              TechFuel
            </Link>
            <div className="flex space-x-4">
              <Link href="#" className="p-2 rounded-full hover:bg-gray-200">
                <Youtube className="w-6 h-6" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="p-2 rounded-full hover:bg-gray-200">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="p-2 rounded-full hover:bg-gray-200">
                <TikTok className="w-6 h-6" />
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">ABOUT</h3>
            <p className="text-gray-600 leading-relaxed">
              TechFuel is the best place for simplified and digestible technology help. From practical examples to
              memorable learning devices, TechFuel aims to help beginning developers and tech enthusiasts.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">QUICK LINK</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                HOME
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                ABOUT US
              </Link>
              <Link href="/learn" className="text-gray-600 hover:text-gray-900">
                LEARN TECH DEV
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                CONTACT US
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>COPYRIGHT © 2025 DESIGN BY TECHFUEL</p>
        </div>
      </div>
    </footer>
  )
}

