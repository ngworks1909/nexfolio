import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaLinux,
  FaGitAlt,
  FaDocker,
  FaChartLine,
} from "react-icons/fa";

import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiPrisma,
  SiCloudflare,
  SiNextdotjs,
  SiSocketdotio,
  SiTurborepo,
  SiExpo,
  SiJest,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { MdSwapHoriz } from "react-icons/md";
import { memo } from "react";
import Reveal from "../../reveal/reveal";

const SKILLS_DATA = [
  { name: "Java", category: "Language", icon: FaJava },
  { name: "Python", category: "Language", icon: FaPython },
  { name: "HTML", category: "Frontend", icon: FaHtml5 },
  { name: "CSS", category: "Frontend", icon: FaCss3Alt },
  { name: "JavaScript", category: "Language", icon: FaJs },
  { name: "TypeScript", category: "Language", icon: SiTypescript },

  { name: "React.js", category: "Frontend Library", icon: FaReact },
  { name: "Next.js", category: "React Framework", icon: SiNextdotjs },
  { name: "Expo", category: "React Native", icon: SiExpo },

  { name: "Node.js", category: "Runtime", icon: FaNodeJs },
  { name: "Express.js", category: "Backend Framework", icon: SiExpress },

  { name: "MongoDB", category: "NoSQL DB", icon: SiMongodb },
  { name: "MySQL", category: "Relational DB", icon: SiMysql },
  { name: "PostgreSQL", category: "Relational DB", icon: SiPostgresql },
  { name: "Redis", category: "Caching", icon: DiRedis },
  { name: "Prisma", category: "ORM", icon: SiPrisma },

  { name: "Socket.IO", category: "Real-time", icon: SiSocketdotio },
  { name: "Cloudflare", category: "Edge Network", icon: SiCloudflare },
  { name: "Turborepo", category: "Monorepo Tool", icon: SiTurborepo },

  { name: "Firebase", category: "BaaS", icon: SiFirebase },
  { name: "Linux", category: "OS", icon: FaLinux },
  { name: "Git", category: "Version Control", icon: FaGitAlt },
  { name: "Jest", category: "Testing", icon: SiJest },
];

const EXPLORING_SKILLS = [
  { name: "Docker", icon: FaDocker },
  { name: "gRPC", icon: MdSwapHoriz },
  { name: "Data Science", icon: FaChartLine },
];

export default memo(function Skills() {
  return (
    <section id="skills" className="relative z-10 grow py-12 md:py-20 px-4">
      <div className="layout-container mx-auto max-w-6xl">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-4">
            <span
              className="w-2 h-2 rounded-full bg-primary animate-pulse"
              aria-hidden="true"
            ></span>
            My Arsenal
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Technologies <span className="text-primary">&amp;</span> Tools
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            A curated collection of the core technologies I use to build
            scalable, high-performance backend systems and full-stack
            applications.
          </p>
        </Reveal>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 list-none">
          {SKILLS_DATA.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <Reveal
                key={skill.name}
                as="li"
                delay={(index % 8) * 60}
                className="group relative flex flex-col items-center justify-center gap-4 rounded-xl border border-glass-border bg-glass-bg p-8 backdrop-blur-sm transition-all duration-300 ease-out hover:scale-[1.03] hover:border-primary/40 hover:bg-primary/5"
              >
                <span
                  className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                ></span>

                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary/5 border border-white/5 p-4 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:shadow-[0_0_20px_-2px_rgba(37,192,244,0.4)]">
                  <Icon
                    className="text-4xl text-white/80 group-hover:text-primary transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 group-hover:text-slate-300 transition-colors duration-300">
                    {skill.category}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <div className="mt-20 border-t border-glass-border pt-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <Reveal className="max-w-xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                Currently Exploring
              </h3>
              <p className="text-slate-400">
                Expanding my horizons with modern infrastructure and data
                technologies.
              </p>
            </Reveal>
            <ul className="flex flex-wrap gap-4 list-none">
              {EXPLORING_SKILLS.map((skill, index) => (
                <Reveal
                  key={skill.name}
                  as="li"
                  delay={index * 80}
                  direction="right"
                  className="flex items-center gap-3 rounded-lg border border-glass-border bg-glass-bg px-4 py-3 backdrop-blur-sm transition-colors hover:border-primary/30"
                >
                  <skill.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  <span className="font-medium text-white">{skill.name}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
});