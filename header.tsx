"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"

export default function Component() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const activityTimerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleUserActivity = () => {
      setIsNavbarVisible(true)

      // Clear existing timer
      if (activityTimerRef.current) {
        clearTimeout(activityTimerRef.current)
      }

      // Set new timer to hide navbar after 3 seconds
      activityTimerRef.current = setTimeout(() => {
        setIsNavbarVisible(false)
      }, 3000)
    }

    // Add event listeners for user activity
    const events = ["mousedown", "mousemove", "keypress", "scroll", "touchstart", "click"]

    events.forEach((event) => {
      document.addEventListener(event, handleUserActivity, true)
    })

    // Initial timer
    handleUserActivity()

    // Cleanup
    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, handleUserActivity, true)
      })
      if (activityTimerRef.current) {
        clearTimeout(activityTimerRef.current)
      }
    }
  }, []) // Empty dependency array

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact Us", href: "#" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 bg-slate-800/95 backdrop-blur-sm border-b border-slate-700/50 px-4 sm:px-6 py-4 transition-all duration-500 ease-in-out relative ${
        isNavbarVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center group cursor-pointer">
          <h1 className="text-white text-xl sm:text-2xl font-bold tracking-wide transition-all duration-300 group-hover:scale-105">
            TUSSLE
            <span className="block text-white text-xl sm:text-2xl font-light tracking-wider border-2 border-white px-1 sm:px-2 py-1 ml-0 mt-1 inline-block transition-all duration-300 group-hover:border-red-500 group-hover:text-red-500">
              STUDIO
            </span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-white hover:text-red-400 transition-all duration-300 flex items-center gap-2 group relative overflow-hidden px-2 py-1"
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 text-sm xl:text-base">
                {item.name}
              </span>
              <span className="w-2 h-2 bg-red-500 rounded-full transition-all duration-300 group-hover:scale-125 group-hover:bg-red-400"></span>
              <div className="absolute inset-0 bg-red-500/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded"></div>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-white hover:text-red-400 transition-colors duration-300 p-2"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
          ) : (
            <Menu className="w-6 h-6 transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-slate-800 border-t border-slate-700 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <nav className="px-4 py-4 space-y-2">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between text-white hover:text-red-400 hover:bg-slate-700 transition-all duration-300 px-4 py-3 rounded-lg group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <span className="text-base font-medium transition-transform duration-300 group-hover:translate-x-2">
                {item.name}
              </span>
              <span className="w-2 h-2 bg-red-500 rounded-full transition-all duration-300 group-hover:scale-125 group-hover:bg-red-400"></span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  )
}
