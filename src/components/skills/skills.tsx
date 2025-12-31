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

export default memo(function Skills() {
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
  return (
    <section id="skills" className="relative z-10 grow py-12 md:py-20 px-4">
      <div className="layout-container mx-auto max-w-6xl">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            My Arsenal
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Technologies <span className="text-primary">&amp;</span> Tools
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            A curated collection of the core technologies I use to build
            scalable, high-performance backend systems and full-stack
            applications.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SKILLS_DATA.map((skill) => {
            const Icon = skill.icon; // 🔥 IMPORTANT

            return (
              <div
                key={skill.name}
                className="group relative flex flex-col items-center justify-center gap-4 rounded-xl border border-glass-border bg-glass-bg p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:bg-white/5 hover:shadow-[0_0_30px_-5px_rgba(37,192,244,0.3)]"
              >
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#333]/50 border border-white/5 p-4 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:border-primary/30">
                  <Icon className="text-4xl text-white opacity-90 group-hover:opacity-100 group-hover:text-primary transition-colors" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 group-hover:text-slate-300">
                    {skill.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-20 border-t border-glass-border pt-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                Currently Exploring
              </h3>
              <p className="text-slate-400">
                Expanding my horizons with modern infrastructure and data
                technologies.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {EXPLORING_SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 rounded-lg border border-glass-border bg-glass-bg px-4 py-3 backdrop-blur-sm transition-colors hover:border-primary/30"
                >
                  <skill.icon className="w-6 h-6 text-primary" />
                  <span className="font-medium text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
