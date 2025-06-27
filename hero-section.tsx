"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isStudioVisible, setIsStudioVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // Trigger STUDIO animation after component mounts
    const timer = setTimeout(() => {
      setIsStudioVisible(true)
    }, 800) // Delay to let TUSSLE appear first

    // Add scroll listener for parallax effect
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className="sticky top-0 z-10 bg-slate-800 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen">
      {/* Background Microphone Image - Full Width with Parallax */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-60 transition-transform duration-75 ease-out"
          style={{
            backgroundImage: `url('/hero-microphone.jpg')`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />

        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-slate-800/40"></div>

        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/70 via-slate-800/30 to-slate-800/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div
            className="space-y-8 transform transition-all duration-1000 ease-out"
            style={{
              transform: `translateY(${scrollY * -0.1}px)`,
            }}
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-white text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-in-up drop-shadow-2xl">
                TUSSLE
              </h1>

              {/* Animated STUDIO */}
              <div className="relative overflow-hidden">
                <h2
                  className={`text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-transparent transition-all duration-1000 ease-out drop-shadow-2xl ${
                    isStudioVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                  }`}
                  style={{
                    WebkitTextStroke: "3px white",
                    textStroke: "3px white",
                  }}
                >
                  STUDIO
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg sm:text-xl max-w-lg leading-relaxed animate-fade-in-up animation-delay-500 drop-shadow-lg">
              Curabitur fermentum vitae eros eu porta. Curabitur et risus egestas, vulputate lacus eget, sodales odio.
              Mauris suscipit eleifend mauris.
            </p>

            {/* CTA Button */}
            <div className="animate-fade-in-up animation-delay-700">
              <button className="bg-[#DC2751] hover:bg-[#C21E47] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
                CONTACT US
              </button>
            </div>
          </div>

          {/* Desktop - Empty space for background image */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Static Floating Elements for Desktop */}
      <div className="absolute right-8 top-1/4 hidden lg:block animate-pulse z-20">
        <div className="w-4 h-4 bg-[#DC2751] rounded-full opacity-60"></div>
      </div>
      <div className="absolute right-16 bottom-1/3 hidden lg:block animate-pulse animation-delay-1000 z-20">
        <div className="w-6 h-6 bg-[#DC2751]/30 rounded-full"></div>
      </div>
      <div className="absolute right-32 top-1/2 hidden lg:block animate-pulse animation-delay-500 z-20">
        <div className="w-3 h-3 bg-white/20 rounded-full"></div>
      </div>
    </section>
  )
}
