"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { VisuallyHidden } from "@/components/ui/visually-hidden"
import { DialogTitle } from "@/components/ui/dialog"
import type React from "react" // Added import for React

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("")
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navItems = [
    { href: "/", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.3,
      },
    },
  }

  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault()
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const targetId = href.replace("#", "")
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setActiveSection(href)
    setIsSheetOpen(false) // Close the sheet after clicking a link
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
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/40 bg-white/80 backdrop-blur-sm supports-[backdrop-filter]:bg-white/60 transition-colors duration-300 shadow-sm"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <motion.div className="flex items-center space-x-4 md:space-x-6" variants={itemVariants}>
          <Button
            onClick={(e) => handleScroll(e, "/")}
            variant="ghost"
            className="flex text-md items-center space-x-2 hover:bg-transparent"
          >
            <motion.span className="font-bold" variants={itemVariants}>
              Nithin Kumar.
            </motion.span>
          </Button>
          <nav className="hidden md:flex items-center space-x-4 text-sm font-medium">
            {navItems.map((item) => (
              <motion.div key={item.href} variants={itemVariants}>
                <Button
                  variant="ghost"
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`p-0 hover:bg-transparent ${
                    activeSection === item.href ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
          </nav>
        </motion.div>
        <div className="flex-1 md:hidden"></div>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <motion.div variants={itemVariants}>
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
                  className={`p-0 justify-start hover:bg-transparent ${
                    activeSection === item.href ? "text-primary" : "text-foreground"
                  }`}
                >
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

