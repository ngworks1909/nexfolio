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
    period: "Oct 2024 - Present",
    location: "Hyderabad, Telangana",
    projects: [
      {
        name: "APP BACKEND",
        technologies: ["Node.js", "Express.js", "Typescript", "Firebase", "Prisma", "Turborepo", "Redis", "MySQL"],
        responsibilities: [
          "Developed a backend application enabling user account creation, secure login, and transaction-related operations through RESTful APIs.",
          "Implemented database-driven functionality for fetching games, creating game rooms, and managing user sessions using Prisma as ORM and SQL as the database.",
          "Integrated Redis for rate-limiting, ensuring enhanced API security and performance optimization.",
        ],
      },
      {
        name: "SOCKET SERVER",
        technologies: ["Node.js", "Express.js", "Typescript", "Prisma", "Turborepo", "Redis", "socket.io", "MySQL"],
        responsibilities: [
          "Developed a WebSocket server using Socket.IO, Node.js, and TypeScript to enable real-time multiplayer interactions.",
          "Implemented room creation and gameplay logic for Ludo and Cricket, supporting engaging multiplayer experiences.",
        ],
      },
      {
        name: "ADMIN PANEL",
        technologies: ["React.js", "Vite", "Typescript", "Turborepo"],
        responsibilities: [
          "Developed an admin panel using Vite and React, enabling administrators to dynamically add new games to the app.",
          "Implemented user management features for managing accounts, permissions, and activity monitoring.",
        ],
      },
      {
        name: "PORTFOLIO",
        technologies: ["React.js", "Vite", "Typescript", "Turborepo"],
        responsibilities: [
          "Developed a portfolio application using Vite and React, enabling users to explore and download Unity-based apps for Android and mobile devices.",
          "Ensured compatibility and responsiveness for a seamless user experience across various devices.",
        ],
      },
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

