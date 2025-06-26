"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isStudioVisible, setIsStudioVisible] = useState(false)

  useEffect(() => {
    // Trigger STUDIO animation after component mounts
    const timer = setTimeout(() => {
      setIsStudioVisible(true)
    }, 800) // Delay to let TUSSLE appear first

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="sticky top-0 z-10 bg-slate-800 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen">
      {/* Background Microphone Image */}
      <div className="absolute inset-0 hidden lg:block">
        <div
          className="absolute right-0 top-0 w-3/5 h-full bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url('/placeholder.svg?height=800&width=600')`,
            backgroundPosition: "center right",
          }}
        />

        {/* Lens Effect Overlay */}
        <div className="absolute right-0 top-0 w-3/5 h-full">
          {/* Gradient overlay for smooth blending */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-800/20 to-slate-800"></div>

          {/* Lens blur effect */}
          <div className="absolute inset-0 backdrop-blur-[1px] bg-slate-800/10"></div>

          {/* Subtle vignette effect */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-slate-800/30"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
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
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
                CONTACT US
              </button>
            </div>
          </div>

          {/* Right Content - Mobile Microphone Display */}
          <div className="relative flex justify-center lg:hidden animate-fade-in-right animation-delay-300">
            <div className="relative">
              {/* Mobile microphone display */}
              <div className="w-80 h-96 sm:w-96 sm:h-[400px] bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center shadow-2xl">
                <div className="text-center text-gray-400">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z" />
                      <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
                      <path d="M12 18v4" />
                      <path d="M8 22h8" />
                    </svg>
                  </div>
                  <p className="text-sm">Studio Microphone</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-red-500/20 rounded-full animate-pulse animation-delay-1000"></div>
            </div>
          </div>

          {/* Desktop - Empty space for background image */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Floating Elements for Desktop */}
      <div className="absolute right-8 top-1/4 hidden lg:block animate-pulse">
        <div className="w-4 h-4 bg-red-500 rounded-full opacity-60"></div>
      </div>
      <div className="absolute right-16 bottom-1/3 hidden lg:block animate-pulse animation-delay-1000">
        <div className="w-6 h-6 bg-red-500/30 rounded-full"></div>
      </div>
      <div className="absolute right-32 top-1/2 hidden lg:block animate-pulse animation-delay-500">
        <div className="w-3 h-3 bg-white/20 rounded-full"></div>
      </div>
    </section>
  )
}
