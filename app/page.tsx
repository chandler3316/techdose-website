"use client"

import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { LearnSection } from "@/components/learn-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <LearnSection />
      <ContactSection />
    </>
  )
}

