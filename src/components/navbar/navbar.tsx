"use client"

import { useContext, useEffect, useState } from "react"
import { ToastContext } from "../provider/toast-context"

const navItems = ["Home", "Skills", "Projects", "Experience", "Contact"]

export default function Navbar() {
  const [active, setActive] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
      {
        rootMargin: "-50% 0px -50% 0px",
      },
    )

    navItems.forEach((item) => {
      const section = document.getElementById(item.toLowerCase())
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/10 px-6 lg:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollToSection("home")} className="flex items-center gap-3 cursor-pointer group">
          <div className="size-10 rounded-lg bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center">
            <span className="material-symbols-outlined text-white">terminal</span>
          </div>
          <h2 className="text-xl font-bold text-white">
            Nithin<span className="text-blue-500">.Dev</span>
          </h2>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              onClick={() => scrollToSection(item.toLowerCase())}
              key={item}
              className={`text-sm font-medium transition-all ${
                active === item.toLowerCase() ? "text-blue-500" : "text-slate-300 hover:text-blue-500"
              }`}
            >
              {item}
            </button>
          ))}

          <button
            onClick={handleDownload}
            className="bg-blue-500/10 hover:bg-blue-500 border border-blue-500 text-blue-500 hover:text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-all"
          >
            Resume
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{isMenuOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-18.25 bg-background-dark border-b border-white/10 p-6 md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-left text-lg font-medium transition-colors ${
                active === item.toLowerCase() ? "text-blue-500" : "text-slate-300 hover:text-blue-500"
              }`}
            >
              {item}
            </button>
          ))}
          <button
            onClick={handleDownload}
            className="w-full mt-2 text-center text-sm font-bold bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Download Resume
          </button>
        </nav>
      </div>
    </header>
  )
}
