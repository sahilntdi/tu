"use client"

import { useEffect, useRef } from "react"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="sticky top-0 z-20 bg-red-500 min-h-screen px-4 sm:px-6 lg:px-8 py-16 lg:py-24 transform translate-y-4 opacity-0 transition-all duration-1000 ease-out"
    >
      <div className="max-w-7xl mx-auto">
        {/* About Us Heading */}
        <div className="text-center mb-16">
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
          <div className="relative">
            <div className="border-4 border-white p-4 bg-white shadow-2xl">
              <div className="aspect-[4/3] bg-gray-900 rounded overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Professional recording studio with mixing console and equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-white rounded-full opacity-80"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white/20 rounded-full"></div>
          </div>

          {/* Right - Text Content */}
          <div className="space-y-8 text-white">
            <p className="text-lg sm:text-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>

            <p className="text-lg sm:text-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>

            {/* Optional CTA or additional content */}
            <div className="pt-8">
              <button className="bg-white text-red-500 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
