"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"

export default function Navbar() {
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

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <motion.div className="flex items-center space-x-4 md:space-x-6" variants={itemVariants}>
          <Link href="/" className="flex items-center space-x-2">
            <motion.span className="font-bold" variants={itemVariants}>
              Nithin Kumar.
            </motion.span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4 text-sm font-medium">
            {navItems.map((item) => (
              <motion.div key={item.href} variants={itemVariants}>
                <Link href={item.href} className="transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
        <div className="flex-1 md:hidden"></div>
        <Sheet>
          <SheetTrigger asChild>
            <motion.div variants={itemVariants}>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </motion.div>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="transition-colors hover:text-primary">
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}

