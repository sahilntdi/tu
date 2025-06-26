"use client"

import { useEffect, useRef } from "react"
import { Headphones, Mic, Radio, AudioWaveform } from "lucide-react"

export default function PodcastSection() {
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
      icon: <Headphones className="w-8 h-8" />,
      title: "Professional Equipment",
      description: "Pellentesque et ex vitae ligula efficitur pretium. Nulla vestibulum aliquam augue.",
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Audio Enhancement",
      description: "Pellentesque et ex vitae ligula efficitur pretium. Nulla vestibulum aliquam augue.",
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Multi-Guest Capabilities",
      description: "Pellentesque et ex vitae ligula efficitur pretium. Nulla vestibulum aliquam augue.",
    },
    {
      icon: <AudioWaveform className="w-8 h-8" />,
      title: "Post-Production Services",
      description: "Pellentesque et ex vitae ligula efficitur pretium. Nulla vestibulum aliquam augue.",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative z-30 bg-white min-h-screen px-4 sm:px-6 lg:px-8 py-16 lg:py-24 transform translate-y-4 opacity-0 transition-all duration-1000 ease-out overflow-hidden"
    >
      {/* Mobile Background Image */}
      <div
        className="absolute inset-0 lg:hidden bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('/placeholder.svg?height=600&width=400')`,
        }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 h-full flex flex-col">
        {/* Main Content - Center Left Aligned */}
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-4xl mx-auto lg:mx-0 lg:ml-16 xl:ml-24">
            <div className="space-y-8 lg:space-y-12 max-w-2xl">
              {/* Heading - Left Aligned */}
              <div className="text-left">
                <h2 className="text-red-500 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-2 lg:mb-4">
                  PODCAST
                </h2>
                <h3
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-transparent"
                  style={{
                    WebkitTextStroke: "3px #ef4444",
                    textStroke: "3px #ef4444",
                  }}
                >
                  STUDIO
                </h3>
              </div>

              {/* Description - Left Aligned */}
              <p className="text-gray-800 text-base sm:text-lg lg:text-xl leading-relaxed text-left">
                augue, in egestas leo ornare eget. Phasellus commodo pretium ante a congue. Ut quam dolor, egestas.
              </p>

              {/* Features - Left Aligned Vertical List */}
              <div className="space-y-6 lg:space-y-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 sm:gap-6 text-left bg-gray-50/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 hover:bg-gray-100/80 transition-all duration-300 transform hover:scale-[1.02] shadow-lg border border-gray-200/50"
                  >
                    <div className="flex-shrink-0 text-red-500 mt-1">{feature.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-red-500 text-lg sm:text-xl font-bold mb-2">{feature.title}</h4>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action - Left Aligned */}
              <div className="text-left">
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Book Studio Time
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Images - Desktop Only */}
        <div className="hidden lg:block absolute bottom-0 left-0 right-0">
          {/* Large Image - Left Bottom */}
          <div className="absolute bottom-0 left-8 xl:left-16">
            <div className="w-80 h-96 rounded-[3rem] overflow-hidden bg-gray-200 shadow-2xl border-4 border-gray-300/50">
              <img
                src="/placeholder.svg?height=384&width=320"
                alt="Main podcast host with headphones and microphone"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Smaller Image - Right Bottom */}
          <div className="absolute bottom-0 right-8 xl:right-16">
            <div className="w-64 h-80 rounded-[3rem] overflow-hidden bg-gray-200 shadow-2xl border-4 border-gray-300/50">
              <img
                src="/placeholder.svg?height=320&width=256"
                alt="Second podcast host with headphones"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mobile Images */}
        <div className="lg:hidden mt-12 grid grid-cols-2 gap-6">
          <div className="w-full aspect-[3/4] rounded-[2rem] overflow-hidden bg-gray-200 shadow-xl border-2 border-gray-300/50">
            <img
              src="/placeholder.svg?height=300&width=225"
              alt="Main podcast host"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-[3/4] rounded-[2rem] overflow-hidden bg-gray-200 shadow-xl border-2 border-gray-300/50">
            <img
              src="/placeholder.svg?height=300&width=225"
              alt="Second podcast host"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-1/4 w-4 h-4 sm:w-6 sm:h-6 bg-red-500 rounded-full opacity-60 animate-pulse hidden lg:block"></div>
        <div className="absolute top-1/3 left-1/3 w-3 h-3 sm:w-4 sm:h-4 bg-red-500/40 rounded-full animate-pulse animation-delay-500"></div>
        <div className="absolute top-1/2 right-1/3 w-6 h-6 sm:w-8 sm:h-8 bg-gray-300/50 rounded-full animate-pulse animation-delay-1000 hidden lg:block"></div>

        {/* Mobile specific decorative elements */}
        <div className="absolute top-20 left-8 w-3 h-3 bg-red-500/60 rounded-full animate-pulse lg:hidden"></div>
        <div className="absolute top-32 right-12 w-5 h-5 bg-gray-400/30 rounded-full animate-pulse animation-delay-700 lg:hidden"></div>
      </div>
    </section>
  )
}
