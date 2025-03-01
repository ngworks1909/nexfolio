"use client"

import { motion } from "framer-motion"
import { Download, Eye } from 'lucide-react'
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si"
import { Button } from "../ui/button"
import { RainbowButton } from "../ui/rainbow-button"

export default function Hero() {
  const handleDownload = async () => {
    try {
      const response = await fetch("/resume.pdf")
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "resume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error downloading resume:", error)
    }
  }

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
      className="py-12 md:py-24 lg:py-32 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container px-4 md:px-6 relative z-10 w-full max-w-4xl mx-auto">
        <motion.div 
          className="relative w-full rounded-3xl overflow-hidden bg-background/50 backdrop-blur-sm shadow-lg"
          variants={itemVariants}
        >
          {/* Decorative dashed border overlay */}
          <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-3xl pointer-events-none" />
          
          <div className="flex flex-col items-center justify-center space-y-0 text-center w-full p-1">
            {/* Header section */}
            <motion.div 
              className="w-full p-6 border-b border-dashed border-primary/30"
              variants={itemVariants}
            >
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
                variants={itemVariants}
              >
                Full Stack Developer
              </motion.h1>
            </motion.div>
            
            {/* Description section */}
            <motion.div 
              className="w-full p-6 border-b border-dashed border-primary/30"
              variants={itemVariants}
            >
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Building digital experiences with modern technologies. Focused on creating elegant solutions to complex
                problems.
              </p>
            </motion.div>

            {/* Social links and buttons */}
            <motion.div 
              className="w-full p-6 flex flex-col items-center"
              variants={itemVariants}
            >
              <motion.div 
                className="flex flex-wrap justify-center gap-4 mb-8" 
                variants={itemVariants}
              >
                <Link href="https://github.com/ngworks1909" target="_blank">
                  <Button variant="outline" size="icon" className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300">
                    <FaGithub className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/k-nithin-kumar-reddy-847284205/" target="_blank">
                  <Button variant="outline" size="icon" className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300">
                    <FaLinkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://leetcode.com/Nithin_1909/" target="_blank">
                  <Button variant="outline" size="icon" className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300">
                    <SiLeetcode className="h-5 w-5" />
                    <span className="sr-only">LeetCode</span>
                  </Button>
                </Link>
                <Link href="https://auth.geeksforgeeks.org/user/nithinkanduru1908/practice" target="_blank">
                  <Button variant="outline" size="icon" className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300">
                    <SiGeeksforgeeks className="h-5 w-5" />
                    <span className="sr-only">GeeksforGeeks</span>
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4" 
                variants={itemVariants}
              >
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto h-12 px-6 text-base font-medium rounded-full transition-all border-primary/30 hover:border-primary"
                  >
                    <Eye className="mr-2 h-5 w-5" /> View Resume
                  </Button>
                </Link>
                <RainbowButton
                  onClick={handleDownload}
                  className="w-full sm:w-auto h-12 px-6 text-base font-medium rounded-full"
                >
                  <Download className="mr-2 h-5 w-5" /> Download Resume
                </RainbowButton>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary rounded-br-xl" />
        </motion.div>
      </div>

      {/* Enhanced animated particles */}
      <motion.div
        className="absolute top-1/4 right-[10%] h-2 w-2 rounded-full bg-primary opacity-70"
        animate={{
          y: [0, 10, 0],
          opacity: [0.7, 0.4, 0.7],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-[15%] h-3 w-3 rounded-full bg-primary opacity-50"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 0.2, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-2/3 right-[25%] h-2 w-2 rounded-full bg-primary/60"
        animate={{
          y: [0, -12, 0],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 left-[30%] h-1.5 w-1.5 rounded-full bg-primary/70"
        animate={{
          y: [0, 8, 0],
          opacity: [0.7, 0.4, 0.7],
        }}
        transition={{
          duration: 3.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      
      {/* Additional decorative elements */}
      <motion.div
        className="absolute top-[15%] left-[20%] h-20 w-20 rounded-full border border-dashed border-primary/20"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[15%] h-32 w-32 rounded-full border border-dashed border-primary/10"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.05, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </motion.div>
  )
}
