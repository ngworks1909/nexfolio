"use client"

import { motion } from "framer-motion"
import { Download, Eye } from "lucide-react"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si"
import { Button } from "../ui/button"
import { RainbowButton } from "../ui/rainbow-button"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.3,
      },
    },
  }

  return (
    <motion.div
      className="py-12 md:py-24 lg:py-32 relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Grid pattern background */}
      <div className="absolute top-10 inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="gridPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              {/* Vertical lines */}
              <path
                d="M 100 0 L 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-gray-400"
                strokeDasharray="4 6"
              />
              {/* Horizontal lines */}
              <path
                d="M 0 100 L 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-gray-400"
                strokeDasharray="4 6"
              />
              {/* Dots at intersections */}
              <circle cx="100" cy="100" r="1.5" fill="currentColor" className="text-gray-400" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridPattern)" />
        </svg>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
              variants={itemVariants}
            >
              Full Stack Developer
            </motion.h1>
            <motion.p
              className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
              variants={itemVariants}
            >
              Building digital experiences with modern technologies. Focused on creating elegant solutions to complex
              problems.
            </motion.p>
          </motion.div>
          <motion.div className="flex flex-wrap justify-center gap-4" variants={itemVariants}>
            <Link href="https://github.com" target="_blank">
              <Button variant="outline" size="icon" className="rounded-full">
                <FaGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Button variant="outline" size="icon" className="rounded-full">
                <FaLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://leetcode.com" target="_blank">
              <Button variant="outline" size="icon" className="rounded-full">
                <SiLeetcode className="h-5 w-5" />
                <span className="sr-only">LeetCode</span>
              </Button>
            </Link>
            <Link href="https://geeksforgeeks.org" target="_blank">
              <Button variant="outline" size="icon" className="rounded-full">
                <SiGeeksforgeeks className="h-5 w-5" />
                <span className="sr-only">GeeksforGeeks</span>
              </Button>
            </Link>
          </motion.div>
          <motion.div className="flex flex-col sm:flex-row gap-4 mt-8" variants={itemVariants}>
            <Button
              variant="outline"
              className="w-full sm:w-auto h-12 px-6 text-base font-medium rounded-full transition-all"
            >
              <Eye className="mr-2 h-5 w-5" /> View Resume
            </Button>
            <RainbowButton className="w-full sm:w-auto h-12 px-6 text-base font-medium rounded-full">
              <Download className="mr-2 h-5 w-5" /> Download Resume
            </RainbowButton>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

