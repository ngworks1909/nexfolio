"use client"

import type React from "react"
import { motion } from "framer-motion"

interface SkillBoxProps {
  logo: React.ReactNode
  skill: string
}

export default function SkillBox({ logo, skill }: SkillBoxProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gray-50 rounded-lg shadow-md px-4 py-8 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg"
    >
      <div className="text-4xl mb-3 text-primary">{logo}</div>
      <p className="text-sm font-medium text-gray-700 text-center break-words">{skill}</p>
    </motion.div>
  )
}

