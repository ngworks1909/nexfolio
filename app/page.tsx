"use client"

import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Skills from "@/components/skills/skills"
import { motion } from "framer-motion"

export default function Home() {
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <motion.div className="relative min-h-screen bg-white" initial="hidden" animate="visible" variants={pageVariants}>
      <motion.div variants={childVariants}>
          <Navbar />
      </motion.div>
      <div className="relative z-10">
        <motion.div variants={childVariants}>
          <Hero />
        </motion.div>
        <motion.div variants={childVariants}>
          <Skills />
        </motion.div>
      </div>
    </motion.div>
  )
}

