import React from 'react'
import {Github, Globe} from 'lucide-react'
import { ProjectCard } from './project-card'
import {motion} from 'framer-motion'

export default function Projects() {
  const projects =  [
    {
      title: "NexGN Chat",
      href: "https://ngworks-spotify.vercel.app",
      dates: "Dec 2024 - Present",
      active: true,
      description:
        "A modern chat application built with Next.js, Prisma, PostgreSQL, WebSockets, and Firebase. NexGN enables real-time messaging, image sharing, and audio/video calls, ensuring seamless and secure communication. Designed for both personal and professional use, it offers a sleek and intuitive interface.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Turborepo",
        "Redis",
        "Websockets",
        "Express.js",
        "Node.js"
      ],
      links: [
        {
          type: "Website",
          href: "https://ngworks-spotify.vercel.app",
          icon: <Globe className="size-3" />,
        },
      ],
      image: "/nexgn.png",
      video:
        "",
    },
    {
      title: "Spotify Clone",
      href: "https://ngworks-spotify.vercel.app",
      dates: "August 2024 - September 2024",
      active: true,
      description:
        "A full-featured music streaming web application inspired by Spotify. It allows users to browse, play, and manage songs seamlessly. Built with React, Firebase, Node.js, and Express, this app delivers a smooth and engaging audio experience with real-time updates and secure authentication.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://ngworks-spotify.vercel.app",
          icon: <Globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ngworks1909/spotify-clone",
          icon: <Github className="size-3" />,
        },
      ],
      image: "/spotify.png",
      video: "",
    },
    {
      title: "Tlrs",
      href: "https://tlrs.vercel.app",
      dates: "October 2024 - January 2025",
      active: true,
      description:
        "A web platform connecting customers with professional tailors for customized clothing services. Users can place orders, track progress, and communicate with tailors effortlessly. Developed with Next.js, Prisma, and PostgreSQL, Tlrs provides a smooth user experience for both clients and tailors.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Turborepo",
        "Redis",
      ],
      links: [
        {
          type: "Website",
          href: "https://tlrs.vercel.app",
          icon: <Globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ngworks1909/tlrs",
          icon: <Github className="size-3" />,
        },
      ],
      image: "/tlrs.png",
      video: "",
    },
    
  ]
  return (
    <section id="projects">
        <div className="space-y-12 w-full py-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
              
              <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Projects
                </h2>
            </motion.div>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mx-auto">
            {projects.map((project, id: number) => (
                <ProjectCard
                  href={project.href}
                  key={id}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
            ))}
          </div>
        </div>
      </section>
  )
}
