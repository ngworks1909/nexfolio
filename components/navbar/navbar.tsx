"use client"

import { Menu, Home, BadgeCheck, Briefcase, FolderOpen, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { VisuallyHidden } from "@/components/ui/visually-hidden"
import { DialogTitle } from "@/components/ui/dialog"
import type React from "react"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("")
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const navItems = [
    { href: "", label: "Home", icon: <Home className="w-5 h-5 mr-1" /> },
    { href: "#skills", label: "Skills", icon: <BadgeCheck className="w-5 h-5 mr-1" /> },
    { href: "#experience", label: "Experience", icon: <Briefcase className="w-5 h-5 mr-1" /> },
    { href: "#projects", label: "Projects", icon: <FolderOpen className="w-5 h-5 mr-1" /> },
    { href: "#contact", label: "Contact", icon: <Mail className="w-5 h-5 mr-1" /> },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault()
    if (href === "") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const targetId = href.replace("#", "")
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setActiveSection(href)
    setIsSheetOpen(false)
  }

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navItems.map((item) => item.href.replace("#", ""))
      let currentActiveSection = ""

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentActiveSection = `#${section}`
            break
          }
        }
      }

      setActiveSection(currentActiveSection)
    }

    window.addEventListener("scroll", handleScrollSpy)
    return () => window.removeEventListener("scroll", handleScrollSpy)
  }, [navItems])

  return (
    <motion.header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/40 bg-white/80 backdrop-blur-sm supports-[backdrop-filter]:bg-white/60 transition-colors duration-300 shadow-sm">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <motion.div className="flex items-center space-x-4 md:space-x-6">
          <Button
            onClick={(e) => handleScroll(e, "")}
            variant="ghost"
            className={`flex text-md items-center space-x-2 hover:bg-transparent`}
          >
            <motion.span className="font-bold text-xl">Nithin Kumar.</motion.span>
          </Button>
          <nav className="hidden md:flex items-center space-x-4 text-sm font-medium">
            {navItems.map((item) => (
              <motion.div key={item.href}>
                <Button
                  variant="ghost"
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`flex items-center ${
                    activeSection === item.href ? "text-primary bg-gray-200" : "text-foreground hover:bg-accent"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Button>
              </motion.div>
            ))}
          </nav>
        </motion.div>
        <div className="flex-1 md:hidden"></div>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <motion.div>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </motion.div>
          </SheetTrigger>
          <SheetContent side="right">
            <VisuallyHidden>
              <DialogTitle>Navigation Menu</DialogTitle>
            </VisuallyHidden>
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`p-0 justify-start flex items-center ${
                    activeSection === item.href ? "text-primary bg-gray-200" : "text-foreground hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}

