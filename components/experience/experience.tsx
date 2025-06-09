"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceItem {
  company: string
  position: string
  period: string
  location: string
  projects: {
    name: string
    technologies: string[]
    responsibilities: string[]
  }[]
}

const experiences: ExperienceItem[] = [
  {
    company: "FIVLOG TECHNOLOGIES",
    position: "Full Stack Developer",
    period: "April 2024 - June 2025",
    location: "Hyderabad, Telangana",
    projects: [
      {
        name: "APP BACKEND",
        technologies: ["Node.js", "Express.js", "Typescript", "Firebase", "Prisma", "Turborepo", "Redis", "MySQL"],
        responsibilities: [
          "Built scalable RESTful APIs for user management and transactions, handling 10,000+ requests/second with consistent <150ms latency.",
          "Designed and optimized database schemas using Prisma ORM and SQL, improving query efficiency by 30%.",
          "Implemented Redis-based rate limiting and caching, reducing database load by 40% and increasing API uptime.",
        ],
      },
      {
        name: "SOCKET SERVER",
        technologies: ["Node.js", "Express.js", "Typescript", "Prisma", "Turborepo", "Redis", "socket.io", "MySQL"],
        responsibilities: [
          "Developed a WebSocket server using Socket.IO, Node.js, and TypeScript to enable real-time multiplayer functionality in games.",
          "Implemented room creation, player matchmaking, and game state synchronization for multiplayer Ludo and Cricket",
          "Optimized gameplay event handling and synchronization, ensuring <100 latency for smooth, engaging multiplayer experiences."
        ],
      },
      {
        name: "REAL ESTATE PLATFORM",
        technologies: ["Next.js", "NextAuth", "Typescript", "PostgreSQL", "Prisma" , "Redis", "Turborepo"],
        responsibilities: [
          "Developed a full-stack real estate web application allowing users to buy, sell, and rent properties including homes, apartments, and land.",
          "Implemented property listings, searchfilters, and user authentication with securerole-basedaccess(admin,buyer, seller).",
          "Integrated bidding functionality, property image uploads, and responsive UI for seamless experience across all devices.",
          "Designed RESTful APIs for smooth ddata exchange and used NextAuth for authentication."
        ],
      },
      {
        name: "ADMIN PANEL",
        technologies: ["React.js", "Vite", "Typescript", "Turborepo"],
        responsibilities: [
          "Developed an admin panel using Vite and React, allowing administrators to add, update, or remove games through a user-friendly interface.",
          "Implemented comprehensive user management features, including account management, permission control, and real-time activity monitoring.",
        ],
      }
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                      <div className="space-y-2">
                      
                      <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-4"
                >
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                          Experience
                        </h2>
                    </motion.div>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                          I&apos;ve  gained experience across various technologies, from backend systems to full-stack applications, contributing to impactful projects.
                        </p>
                      </div>
                    </div>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{exp.company}</CardTitle>
                <p className="text-gray-600">{exp.position}</p>
                <p className="text-sm text-gray-500">
                  {exp.period} | {exp.location}
                </p>
              </CardHeader>
              <CardContent>
                {exp.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="mb-6 last:mb-0">
                    <h4 className="text-lg font-semibold mb-2">{project.name}</h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <ul className="list-disc list-inside space-y-1">
                      {project.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-gray-700">
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

