'use client'

import { motion } from 'framer-motion'

export function LoadingDots() {
  return (
    <div className="flex justify-center items-center space-x-2 h-24">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="w-4 h-4 bg-primary rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />
      ))}
    </div>
  )
}
