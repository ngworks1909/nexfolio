import "./projects.css"
import { useState } from "react"

export default function Projects() {
  const [showArchives, setShowArchives] = useState(false)
  
  const projects = [
  {
    image: "/nexgpt.png",
    title: "NexGPT (Legal Policy Assistant)",
    description:
      "A domain-specific Retrieval-Augmented Generation (RAG) system that allows users to query company policies in natural language.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "OpenAI API",
      "NextAuth.js",
    ],
    githubLink: "https://github.com/ngworks1909/nexgpt",
  },
  {
    image: "/wqs.png",
    title: "Water Quality Testing Management System",
    description:
      "Water testing management platform with user-technician workflows and real-time status updates.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Socket.IO",
      "PostgreSQL",
      "Prisma",
      "Turborepo",
      "Redis",
      "Event Driven Messages"
    ],
    githubLink: "https://github.com/ngworks1909/wqs",
  },

  {
    image:
      "/spotify.png",
    title: "Spotify Clone",
    description:
      "A full-featured music streaming web app inspired by Spotify, supporting playlists, authentication, and real-time updates.",
    techStack: [ 
      "React.js", 
      "Node.js", 
      "Express.js", 
      "Typescript", 
      "Firebase"
    ],
    githubLink: "https://github.com/ngworks1909/spotify-clone",
  },

  {
    image:
      "/nexgn.png",
    title: "NexGN Chat",
    description:
      "A modern chat application built with Next.js, Prisma, PostgreSQL, WebSockets, and Firebase, enabling real-time messaging and media sharing.",
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "WebSockets",
      "Node.js",
      "Express.js",
      "Turborepo",
    ],
    githubLink: "https://github.com/ngworks1909/nexchat",
  },
  
  {
    image:
      "tlrs.png",
    title: "Tlrs",
    description:
      "A web platform connecting customers with professional tailors for customized clothing orders and progress tracking.",
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Turborepo",
    ],
    githubLink: "https://github.com/ngworks1909/tlrs",
  },
];

  return (
    <section id="projects" className="bg-background-dark font-display min-h-screen flex flex-col antialiased selection:bg-primary selection:text-background-dark">
      <div className="relative flex h-full grow flex-col overflow-x-hidden">
        <header className="w-full px-6 pt-16 pb-8 md:px-12 md:pt-24 md:pb-12 lg:px-20 lg:pt-32 lg:pb-16 flex flex-col items-center text-center">
          <div className="max-w-4xl w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
              Architecting{" "}
              <span className="text-primary neon-text">Scalable Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              A showcase of high-performance backends, distributed systems, and
              modern full-stack applications.
            </p>
          </div>
        </header>
        <section className="w-full px-6 pb-24 md:px-12 lg:px-20 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-350">
            {(showArchives ? projects : projects.slice(0, 3)).map((project) => (
                <article key={project.title} className="glass-card rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 group">
              <div className="relative w-full aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-background-dark via-transparent to-transparent opacity-60 z-10"></div>
                <img
                  alt="Data visualization dashboard screen"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt={project.title}
                  src={project.image}
                />
              </div>
              <div className="p-6 flex flex-col grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                      {tech}
                    </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => {
                window.open(project.githubLink, '_blank', 'noopener,noreferrer');
              }} className="flex-1 flex items-center justify-center gap-2 h-10 rounded-lg bg-transparent border border-white/20 text-white font-medium text-sm transition-all hover:border-primary hover:text-primary">
                      <img
                        alt="GitHub"
                        className="w-4 h-4 invert"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-yaSglOjwVnKglC-K9jmTF5isUyVRg9wTdVs4yFLAe8CV1-nMMU-wpyE7bayOotbEqcXkCn7kn3PcAP7OmStrCEQh95ukq5Gzg1yRmwltEo2_tT3ATbuWCby6Su0eveEb0DnVgCfl7spTWzJxhJ05w7VHFghTYFlfLOsQfIHiy1agRRD7_CFAETWUh_s6cEz0--g0YP005d9eKuN36rBYOuDPExzJvuKkM7CQNq4osJwvU80XUJ0i_UShKXdjvLpYoI5NZlFcKiiv"
                      />
                      Source
                    </button>
                  </div>
                </div>
              </div>
            </article>
            ))}
          </div>
        </section>
        <div className="w-full flex justify-center pb-20">
          <button onClick={() => setShowArchives(!showArchives)} className="group flex items-center gap-2 px-8 py-3 rounded-xl border border-white/10 text-gray-300 font-bold hover:bg-white/5 hover:text-primary hover:border-primary transition-all duration-300">
            <span>{showArchives ? "Hide Archives" : "View Archives"}</span>
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              {showArchives ? "arrow_back" : "arrow_forward"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
