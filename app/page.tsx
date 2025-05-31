"use client"

import Contact from "@/components/contact/contact"
import Experience from "@/components/experience/experience"
import { Footer } from "@/components/footer/footer"
import Hero from "@/components/hero/hero"
import Navbar from "@/components/navbar/navbar"
import Projects from "@/components/projects/projects"
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <motion.div className="flex-grow pt-14" initial="hidden" animate="visible" variants={pageVariants}>
        <main className="container px-4 md:px-6 overflow-y-auto">
          <motion.div variants={childVariants}>
            <Hero />
          </motion.div>
          <motion.div variants={childVariants}>
            <Skills />
          </motion.div>
          <motion.div variants={childVariants}>
            <Experience />
          </motion.div>
          <motion.div variants={childVariants}>
            <Projects />
          </motion.div>
          <motion.div variants={childVariants}>
            <Contact />
          </motion.div>
        </main>
        <motion.div variants={childVariants}>
            <Footer />
          </motion.div>
      </motion.div>
    </div>
  )
}

