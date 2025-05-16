"use client"

import { useEffect, useRef, type ReactNode, useState } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-in-right" | "slide-in-left" | "zoom-in"
  delay?: number
}

export function AnimatedSection({ children, className = "", animation = "fade-up", delay = 0 }: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate")
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [delay])

  const animationClasses = {
    "fade-up": "opacity-0 translate-y-10 transition-all duration-700 ease-out",
    "fade-in": "opacity-0 transition-opacity duration-700 ease-out",
    "slide-in-right": "opacity-0 translate-x-10 transition-all duration-700 ease-out",
    "slide-in-left": "opacity-0 -translate-x-10 transition-all duration-700 ease-out",
    "zoom-in": "opacity-0 scale-95 transition-all duration-700 ease-out",
  }

  return (
    <div
      ref={sectionRef}
      className={`${className} ${animationClasses[animation]}`}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </div>
  )
}

export function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-indigo-700 hover:scale-110 z-50 ${
        showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  )
}
