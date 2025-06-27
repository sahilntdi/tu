"use client"

import { useEffect, useRef } from "react"
import { Video, Monitor, Settings, Wifi, Edit } from "lucide-react"

export default function LiveStreamingSection() {
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

  const features = [
    {
      number: "01",
      icon: <Video className="w-6 h-6" />,
      title: "Multi-Camera Setup",
    },
    {
      number: "02",
      icon: <Monitor className="w-6 h-6" />,
      title: "Custom Branding & Graphics",
    },
    {
      number: "03",
      icon: <Wifi className="w-6 h-6" />,
      title: "Platform Compatibility",
    },
    {
      number: "04",
      icon: <Settings className="w-6 h-6" />,
      title: "Mastering Room",
    },
    {
      number: "05",
      icon: <Edit className="w-6 h-6" />,
      title: "Post-Stream Services",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="sticky top-0 z-50 bg-white min-h-screen px-4 sm:px-6 lg:px-8 py-16 lg:py-24 transform translate-y-4 opacity-0 transition-all duration-1000 ease-out"
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[#DC2751] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-2">
            LIVE STREAMING
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
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            augue, in egestas leo ornare eget. Phasellus commodo pretium ante a congue. Ut quam dolor, egestas.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Features List */}
          <div className="order-1 lg:order-1">
            <div className="bg-[#DC2751] rounded-3xl p-6 lg:p-8 shadow-2xl">
              <div className="space-y-4 lg:space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 lg:p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white transition-all duration-300 transform hover:scale-[1.02] border border-white/20 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-white group-hover:text-black text-xl lg:text-2xl font-bold min-w-[3rem]">
                        {feature.number}.
                      </span>
                      <div className="text-white/80 group-hover:text-black">{feature.icon}</div>
                    </div>
                    <h4 className="text-white group-hover:text-black text-lg lg:text-xl font-bold flex-1">
                      {feature.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Streaming Setup Image */}
          <div className="order-2 lg:order-2">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-6 lg:p-8 shadow-2xl">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-lg">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Live streaming setup with laptop, camera, and streaming interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#DC2751] rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#DC2751]/30 rounded-full animate-pulse animation-delay-500"></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-gray-400/30 rounded-full animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-20 left-1/4 w-4 h-4 bg-[#DC2751]/40 rounded-full animate-pulse hidden lg:block"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-gray-300/50 rounded-full animate-pulse animation-delay-700 hidden lg:block"></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-[#DC2751]/30 rounded-full animate-pulse animation-delay-1000 hidden lg:block"></div>
      </div>
    </section>
  )
}
