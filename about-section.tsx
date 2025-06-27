"use client"

import { useEffect, useRef, useState } from "react"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            entry.target.classList.add("animate-slide-up")
          }
        })
      },
      { threshold: 0.2, rootMargin: "-50px" },
    )

    // Add scroll listener for parallax effect
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="sticky top-0 z-20 bg-[#DC2751] min-h-screen px-4 sm:px-6 lg:px-8 py-16 lg:py-24 transform translate-y-4 opacity-0 transition-all duration-1000 ease-out"
    >
      <div className="max-w-7xl mx-auto">
        {/* About Us Heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "animate-slide-in-bottom" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-white text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
            ABOUT{" "}
            <span
              className="text-transparent"
              style={{
                WebkitTextStroke: "3px white",
                textStroke: "3px white",
              }}
            >
              US
            </span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Studio Image */}
          <div
            className={`relative transition-all duration-1000 ease-out ${
              isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-10"
            }`}
            style={{
              animationDelay: "0.3s",
              transform: `translateY(${scrollY * -0.05}px)`,
            }}
          >
            <div className="border-4 border-white p-0 bg-transparent shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className="aspect-[4/3] bg-gray-900 rounded overflow-hidden border-4 border-white">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Professional recording studio with mixing console and equipment"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>

            {/* Decorative elements with enhanced animations */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-white rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white/20 rounded-full animate-pulse animation-delay-500"></div>
          </div>

          {/* Right - Text Content */}
          <div
            className={`space-y-8 text-white transition-all duration-1000 ease-out ${
              isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-10"
            }`}
            style={{
              animationDelay: "0.6s",
              transform: `translateY(${scrollY * -0.03}px)`,
            }}
          >
            <p className="text-lg sm:text-xl leading-relaxed transform transition-all duration-700 hover:scale-105">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>

            <p className="text-lg sm:text-xl leading-relaxed transform transition-all duration-700 hover:scale-105">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
