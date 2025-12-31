import ExperienceCard from "./experience-card"
import "./experience.css"

export interface ExperienceItem {
  company: string
  role: string
  duration: string
  icon: string
  description: string
  tech: string[]
  current?: boolean
}

export default function Experience() {
  const EXPERIENCE_DATA: ExperienceItem[] = [
    {
      company: "Tata Consultancy Services",
      role: "Full Stack Developer",
      duration: "Jul 2025 – Present",
      icon: "corporate_fare",
      description:
        "Working on a medical insurance platform involving policy management, claims processing, and internal dashboards. Developing RESTful APIs, frontend features, and improving performance using caching strategies.",
      tech: ["Node.js", "React", "Express.js", "MongoDB", "Redis"],
      current: true,
    },
    {
      company: "Fivlog Technologies Pvt. Ltd.",
      role: "Fullstack Developer",
      duration: "Oct 2024 – Jun 2025",
      icon: "code",
      description:
        "Built scalable backend services and real-time socket servers for interactive and multiplayer applications. Designed APIs, implemented WebSocket communication, and maintained a clean monorepo architecture.",
      tech: ["Turborepo", "Node.js", "Prisma", "MySQL", "WebSockets"],
    },
    
  ]

  return (
    <section id="experience" className="relative z-10 grow flex flex-col">
      <section className="pt-20 pb-10 px-4 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Open to Work
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-linear-to-r from-white via-slate-200 to-slate-500">
          Professional Journey
        </h1>
        <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
          A timeline of my career as a full-stack engineer, building scalable systems and robust backends for enterprise
          clients.
        </p>
      </section>

      <section className="relative max-w-5xl mx-auto px-4 pb-24 w-full">
        <div className="relative timeline-line">
          {EXPERIENCE_DATA.map((item, index) => (
            <ExperienceCard key={`${item.company}-${item.duration}`} item={item} isLeft={index % 2 === 0} />
          ))}
        </div>
        <div className="absolute bottom-0 left-8 md:left-1/2 w-px h-24 bg-linear-to-t from-background-dark to-transparent transform -translate-x-1/2"></div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-20 w-full">
        <h2 className="text-2xl font-bold mb-8 text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">emoji_events</span>
          Key Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-xl hover:bg-surface-dark transition-colors border border-border-dark/50">
            <div className="text-4xl font-bold text-primary mb-2">40%</div>
            <h3 className="text-lg font-bold text-white mb-2">Latency Reduction</h3>
            <p className="text-slate-400 text-sm">
              Optimized complex SQL queries and implemented Redis caching strategies.
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl hover:bg-surface-dark transition-colors border border-border-dark/50">
            <div className="text-4xl font-bold text-purple-400 mb-2">4+</div>
            <h3 className="text-lg font-bold text-white mb-2">Projects Delivered</h3>
            <p className="text-slate-400 text-sm">
              Successfully delivered enterprise-grade applications on time and budget.
            </p>
          </div>
          <div className="glass-card p-6 rounded-xl hover:bg-surface-dark transition-colors border border-border-dark/50">
            <div className="text-4xl font-bold text-cyan-300 mb-2">500+</div>
            <h3 className="text-lg font-bold text-white mb-2">Active Users</h3>
            <p className="text-slate-400 text-sm">Built systems supporting daily operations for large user bases.</p>
          </div>
        </div>
      </section>
    </section>
  )
}
