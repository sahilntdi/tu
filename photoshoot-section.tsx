"use client"

import { useEffect, useRef, useState } from "react"
import { Camera, Lightbulb, Aperture, Monitor, Palette, Zap } from "lucide-react"

export default function PhotoshootSection() {
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
      { threshold: 0.1 },
    )

    // Add scroll listener for smooth parallax effects
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

  const leftFeatures = [
    {
      icon: <Monitor className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />,
      title: "Fully Equipped Studio Space",
      description: "Professional studio with all necessary equipment and backdrops for any shoot.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />,
      title: "Professional Lighting Setup",
      description: "Advanced lighting systems and customizable backdrops for perfect shots.",
    },
    {
      icon: <Camera className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />,
      title: "High-End Camera Equipment",
      description: "State-of-the-art cameras and lenses for exceptional image quality.",
    },
  ]

  const rightFeatures = [
    {
      icon: <Aperture className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />,
      title: "Creative Direction",
      description: "Expert styling and creative direction to bring your vision to life.",
    },
    {
      icon: <Palette className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />,
      title: "Post-Production Services",
      description: "Professional editing and retouching for polished final results.",
    },
    {
      icon: <Zap className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />,
      title: "Quick Turnaround",
      description: "Fast delivery without compromising on quality and attention to detail.",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="sticky top-0 z-40 min-h-screen px-4 sm:px-6 lg:px-8 py-16 lg:py-24 transform translate-y-4 opacity-0 transition-all duration-1000 ease-out overflow-hidden"
      style={{ backgroundColor: "#1A2331" }}
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
        {/* Header */}
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "animate-slide-in-bottom" : "opacity-0 translate-y-10"
          }`}
          style={{
            transform: `translateY(${scrollY * -0.02}px)`,
          }}
        >
          <h2 className="text-[#DC2751] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-2">
            PHOTOSHOOT
          </h2>
          <h3
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-transparent mb-6"
            style={{
              WebkitTextStroke: "3px #DC2751",
              textStroke: "3px #DC2751",
            }}
          >
            STUDIO
          </h3>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Professional photoshoot services with state-of-the-art equipment and creative expertise.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left Features Column */}
          <div
            className={`space-y-8 lg:space-y-10 order-1 lg:order-1 transition-all duration-1000 ease-out ${
              isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-10"
            }`}
            style={{
              animationDelay: "0.3s",
              transform: `translateY(${scrollY * -0.03}px)`,
            }}
          >
            {leftFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-700/70 transition-all duration-300 transform hover:scale-[1.02] border border-slate-600/30 h-32 flex items-center"
                style={{
                  transform: `translateY(${scrollY * -0.01 * (index + 1)}px)`,
                  animationDelay: `${0.5 + index * 0.1}s`,
                }}
              >
                <div className="flex items-center gap-4 w-full">
                  <div className="flex-shrink-0 text-[#DC2751] transform transition-transform duration-300 hover:scale-110">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white text-lg lg:text-xl font-bold mb-2 leading-tight">{feature.title}</h4>
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed line-clamp-2">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div
            className={`flex justify-center order-3 lg:order-2 my-8 lg:my-0 transition-all duration-1000 ease-out ${
              isVisible ? "animate-slide-in-bottom" : "opacity-0 translate-y-10"
            }`}
            style={{
              animationDelay: "0.6s",
              transform: `translateY(${scrollY * -0.05}px)`,
            }}
          >
            <div className="relative">
              <div className="w-64 h-80 lg:w-72 lg:h-96 xl:w-80 xl:h-[28rem] rounded-3xl overflow-hidden bg-gradient-to-br from-[#DC2751] to-[#C21E47] p-1 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full rounded-3xl overflow-hidden" style={{ backgroundColor: "#1A2331" }}>
                  <img
                    src="/placeholder.svg?height=500&width=400"
                    alt="Professional photographer with camera"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </div>

              {/* Decorative elements with enhanced parallax */}
              <div
                className="absolute -top-4 -left-4 w-8 h-8 bg-[#DC2751] rounded-full opacity-80 animate-pulse"
                style={{
                  transform: `translateY(${scrollY * -0.08}px)`,
                }}
              ></div>
              <div
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#DC2751]/30 rounded-full animate-pulse animation-delay-500"
                style={{
                  transform: `translateY(${scrollY * -0.06}px)`,
                }}
              ></div>
              <div
                className="absolute top-1/2 -right-8 w-6 h-6 bg-white/20 rounded-full animate-pulse animation-delay-1000"
                style={{
                  transform: `translateY(${scrollY * -0.04}px)`,
                }}
              ></div>
            </div>
          </div>

          {/* Right Features Column */}
          <div
            className={`space-y-8 lg:space-y-10 order-2 lg:order-3 transition-all duration-1000 ease-out ${
              isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-10"
            }`}
            style={{
              animationDelay: "0.9s",
              transform: `translateY(${scrollY * -0.03}px)`,
            }}
          >
            {rightFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-700/70 transition-all duration-300 transform hover:scale-[1.02] border border-slate-600/30 h-32 flex items-center"
                style={{
                  transform: `translateY(${scrollY * -0.01 * (index + 1)}px)`,
                  animationDelay: `${1.1 + index * 0.1}s`,
                }}
              >
                <div className="flex items-center gap-4 w-full">
                  <div className="flex-shrink-0 text-[#DC2751] transform transition-transform duration-300 hover:scale-110">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white text-lg lg:text-xl font-bold mb-2 leading-tight">{feature.title}</h4>
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed line-clamp-2">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Decorative Elements with Enhanced Parallax */}
        <div
          className="absolute top-20 left-1/4 w-4 h-4 bg-[#DC2751]/40 rounded-full animate-pulse hidden lg:block"
          style={{
            transform: `translateY(${scrollY * -0.07}px)`,
          }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-6 h-6 bg-white/10 rounded-full animate-pulse animation-delay-700 hidden lg:block"
          style={{
            transform: `translateY(${scrollY * -0.05}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-[#DC2751]/30 rounded-full animate-pulse animation-delay-1000 hidden lg:block"
          style={{
            transform: `translateY(${scrollY * -0.06}px)`,
          }}
        ></div>

        {/* Additional floating elements for enhanced visual depth */}
        <div
          className="absolute top-1/2 left-8 w-3 h-3 bg-white/20 rounded-full animate-pulse animation-delay-300 hidden lg:block"
          style={{
            transform: `translateY(${scrollY * -0.04}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-1/3 right-8 w-4 h-4 bg-[#DC2751]/20 rounded-full animate-pulse animation-delay-800 hidden lg:block"
          style={{
            transform: `translateY(${scrollY * -0.08}px)`,
          }}
        ></div>
      </div>
    </section>
  )
}
