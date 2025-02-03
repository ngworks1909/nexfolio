"use client"
import { motion } from "framer-motion"
import SkillBox from "./skill-card"
import { GrMysql } from "react-icons/gr"
import { FaReact, FaPython, FaJava, FaNode} from "react-icons/fa"
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiPrisma,
  SiCloudflare,
  SiLinux,
  SiTypescript,
  SiNextdotjs,
  SiTurborepo,
  SiHtml5,
  SiCss3,
  SiGooglepubsub,
  SiSocketdotio
} from "react-icons/si"

import { DiRedis } from "react-icons/di";
import {LuServerOff} from 'react-icons/lu'

const skills = [
  { logo: <FaJava />, skill: "Java" },
  { logo: <FaPython />, skill: "Python" },
  { logo: <SiHtml5 />, skill: "HTML" },
  { logo: <SiCss3 />, skill: "CSS" },
  { logo: <SiJavascript />, skill: "Javascript" },
  { logo: <FaReact />, skill: "React.js" },
  { logo: <SiExpress />, skill: "Express.js" },
  { logo: <FaNode />, skill: "Node.js" },
  { logo: <SiMongodb />, skill: "MongoDB" },
  { logo: <SiTypescript />, skill: "Typescript" },
  { logo: <SiLinux />, skill: "Linux" },
  { logo: <GrMysql />, skill: "MySQL" },
  { logo: <SiPostgresql />, skill: "Postgres" },
  { logo: <SiFirebase />, skill: "Firebase" },
  { logo: <SiPrisma />, skill: "Prisma" },
  { logo: <SiCloudflare />, skill: "Cloudflare" },
  { logo: <SiNextdotjs />, skill: "Next.js" },
  { logo: <SiSocketdotio />, skill: "Socket.io" },
  { logo: <DiRedis />, skill: "Redis" },
  { logo: <SiGooglepubsub />, skill: "Pub/Subs" },
  { logo: <LuServerOff />, skill: "Rate Limiting" },
  { logo: <SiTurborepo />, skill: "Turborepo" },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl font-bold text-gray-800">Skills</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Here are the technologies and tools I specialize in.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <SkillBox key={index} logo={skill.logo} skill={skill.skill} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

