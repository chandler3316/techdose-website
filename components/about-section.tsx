"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

// Define the structure of our definitions
interface Definition {
  id: string
  title: string
  path: string
}

export function AboutSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<Definition[]>([])
  const [showResults, setShowResults] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Our definitions database with correct paths to individual definition pages
  const definitions: Definition[] = [
    { id: "f12-key", title: "What does the F12 key do?", path: "/learn/f12-key" },
    { id: "web-dev-languages", title: "What are the basic Web Dev languages?", path: "/learn/web-dev-languages" },
    { id: "backend-frontend", title: "What are Backend and Frontend?", path: "/learn/backend-frontend" },
    { id: "api", title: "What is an API?", path: "/learn/api" },
    { id: "cloud-computing", title: "What is Cloud Computing?", path: "/learn/cloud-computing" },
    { id: "chain-of-thought", title: "What is Chain of Thought?", path: "/learn/chain-of-thought" },
    { id: "llms", title: "What are LLMs?", path: "/learn/llms" },
  ]

  // Search function
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)

    if (value.trim() === "") {
      setSearchResults([])
      return
    }

    // Filter definitions based on search term
    const results = definitions.filter((def) => def.title.toLowerCase().includes(value.toLowerCase()))

    setSearchResults(results)
    setShowResults(true)
  }

  // Handle clicking on a search result
  const handleResultClick = (result: Definition) => {
    setSearchTerm("")
    setSearchResults([])
    setShowResults(false)
    router.push(result.path)
  }

  // Close search results when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-serif tracking-tight">"What is TechFuel?"</h2>

        <div className="space-y-6 text-xl md:text-2xl text-gray-800">
          <p>TechFuel is our attempt at making technology and development more accessible.</p>
          <p>TechFuel is digestible, simplified, and made to be understood.</p>
          <p>Our goal is to learn with you, as we attempt to teach modern technology concepts in an easier format.</p>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-2xl md:text-3xl text-gray-900">Join us on our journey.</p>
        </div>

        <div className="pt-12" ref={searchRef}>
          <div className="relative max-w-lg mx-auto">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search for tech definitions..."
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 text-lg transition-all duration-300 hover:shadow-md focus:shadow-md"
                value={searchTerm}
                onChange={handleSearch}
                onFocus={() => searchResults.length > 0 && setShowResults(true)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Search Results */}
            {showResults && searchResults.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                <ul className="py-1">
                  {searchResults.map((result) => (
                    <li key={result.id}>
                      <button
                        className="w-full px-4 py-2 text-left hover:bg-gray-100 text-gray-700 transition-all duration-200 hover:pl-6"
                        onClick={() => handleResultClick(result)}
                      >
                        {result.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

