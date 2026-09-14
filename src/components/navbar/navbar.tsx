"use client"

import { useContext, useEffect, useState } from "react"
import { ToastContext } from "../provider/toast-context"

const navItems = ["Home", "Skills", "Projects", "Experience", "Contact"]

export default function Navbar() {
  const [active, setActive] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { showToast } = useContext(ToastContext)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: "-50% 0px -50% 0px" },
    )

    navItems.forEach((item) => {
      const section = document.getElementById(item.toLowerCase())
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const handleDownload = () => {
    try {
      const link = document.createElement("a")
      link.href = "/resume.pdf"
      link.download = "Nithin_Resume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      showToast("Downloaded", "Your resume has been downloaded.", "success")
    } catch (error) {
      showToast("Error", "Failed to download resume.", "error")
      console.error(error)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 px-6 lg:px-12 py-4 animate-nav-in ${
        scrolled ? "bg-background-dark/90 border-white/10" : "bg-background-dark/40 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollToSection("home")} className="flex items-center gap-3 cursor-pointer group">
          <div className="size-10 rounded-lg bg-linear-to-br from-primary to-[#a855f7] flex items-center justify-center shadow-[0_0_12px_rgba(37,192,244,0.35)] transition-shadow group-hover:shadow-[0_0_18px_rgba(37,192,244,0.5)]">
            <span className="material-symbols-outlined text-white">terminal</span>
          </div>
          <h2 className="text-xl font-bold text-white">
            Nithin<span className="text-primary">.Dev</span>
          </h2>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const id = item.toLowerCase()
            const isActive = active === id
            return (
              <button
                onClick={() => scrollToSection(id)}
                key={item}
                aria-current={isActive ? "page" : undefined}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive ? "text-primary" : "text-slate-300 hover:text-white"
                }`}
              >
                {item}
                <span
                  className={`absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full bg-primary transition-all duration-300 ${
                    isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                  }`}
                />
              </button>
            )
          })}

          <button
            onClick={handleDownload}
            className="ml-4 bg-primary/10 hover:bg-primary border border-primary text-primary hover:text-background-dark text-sm font-bold px-6 py-2.5 rounded-lg transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">download</span>
            Resume
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2 relative"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`material-symbols-outlined transition-transform duration-300 inline-block ${
              isMenuOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-18.25 bg-background-dark/95 backdrop-blur-md border-b border-white/10 p-6 md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => {
            const id = item.toLowerCase()
            const isActive = active === id
            return (
              <button
                key={item}
                onClick={() => scrollToSection(id)}
                aria-current={isActive ? "page" : undefined}
                className={`text-left text-lg font-medium transition-colors flex items-center gap-2 ${
                  isActive ? "text-primary" : "text-slate-300 hover:text-primary"
                }`}
              >
                {isActive && <span className="size-1.5 rounded-full bg-primary" />}
                {item}
              </button>
            )
          })}
          <button
            onClick={handleDownload}
            className="w-full mt-2 text-center text-sm font-bold bg-primary text-background-dark px-6 py-3 rounded-lg hover:bg-cyan-300 transition-colors"
          >
            Download Resume
          </button>
        </nav>
      </div>
    </header>
  )
}