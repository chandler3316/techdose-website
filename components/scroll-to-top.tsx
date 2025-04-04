"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()

  // This effect runs whenever the pathname changes (i.e., when navigation occurs)
  useEffect(() => {
    // Scroll to the top of the page with smooth behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use "instant" instead of "smooth" for immediate scrolling
    })
  }, [pathname]) // Re-run this effect when the pathname changes

  return null
}

