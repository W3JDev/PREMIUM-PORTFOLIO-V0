"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import InteractiveCertificate from "@/components/interactive-certificate"
import SkillMeter from "@/components/skill-meter"
import { Code, Database, Layout, Server, Cpu, Globe } from "lucide-react"

const certifications = [
  {
    title: "Full-Stack Web Development",
    issuer: "FreeCodeCamp",
    date: "2022",
    credentialUrl: "https://www.freecodecamp.org/certification/example",
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "Express", "Responsive Design"],
    logo: "/images/certifications/freecodecamp.png", // Updated with a more representative image path
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "FreeCodeCamp",
    date: "2021",
    credentialUrl: "https://www.freecodecamp.org/certification/example",
    skills: ["JavaScript", "ES6", "Algorithms", "Data Structures", "OOP", "Functional Programming"],
    logo: "/images/certifications/javascript.png", // Updated with a more representative image path
  },
  {
    title: "Google Developer Certification",
    issuer: "Google",
    date: "2022",
    credentialUrl: "https://developers.google.com/certification",
    skills: ["Web Performance", "PWAs", "Mobile Web", "Firebase", "Google APIs"],
    logo: "/images/certifications/google.png", // Updated with a more representative image path
  },
  {
    title: "WSET Level 2",
    issuer: "Wine & Spirit Education Trust",
    date: "2019",
    skills: ["Wine Knowledge", "Food Pairing", "Service Standards", "Tasting Techniques"],
    logo: "/images/certifications/wset.png", // Updated with a more representative image path
  },
]

const skills = [
  { skill: "Frontend Development", level: 95, icon: <Layout size={16} /> },
  { skill: "Backend Development", level: 85, icon: <Server size={16} /> },
  { skill: "Database Management", level: 80, icon: <Database size={16} /> },
  { skill: "UI/UX Design", level: 75, icon: <Layout size={16} /> },
  { skill: "DevOps", level: 70, icon: <Cpu size={16} /> },
  { skill: "Blockchain Development", level: 65, icon: <Globe size={16} /> },
  { skill: "Mobile Development", level: 60, icon: <Code size={16} /> },
]

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="certifications" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
          suppressHydrationWarning
        >
          <motion.span variants={itemVariants} className="section-subtitle block">
            Credentials & Expertise
          </motion.span>
          <motion.h2 variants={itemVariants} className="section-title">
            Certifications & Skills
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
            A showcase of formal education, professional certifications, and self-taught expertise that forms the
            foundation of my technical and domain knowledge.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 flex items-center"
            >
              <span className="bg-primary/20 p-2 rounded-full mr-3">
                <Code className="h-5 w-5 text-primary" />
              </span>
              Technical Proficiency
            </motion.h3>

            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillMeter skill={skill.skill} level={skill.level} icon={skill.icon} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 p-6 glass-morph rounded-lg"
            >
              <h4 className="text-xl font-semibold text-white mb-4">Education</h4>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h5 className="text-lg font-medium text-white">Computer Science Diploma</h5>
                  <p className="text-sm text-muted-foreground">Self-Directed Learning, 2020-2022</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Comprehensive self-taught curriculum covering algorithms, data structures, web development, and
                    software engineering principles.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h5 className="text-lg font-medium text-white">Hospitality Management</h5>
                  <p className="text-sm text-muted-foreground">F&B Industry Experience, 2017-2020</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Practical experience in service excellence, operational efficiency, and customer experience design.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 flex items-center"
            >
              <span className="bg-primary/20 p-2 rounded-full mr-3">
                <Code className="h-5 w-5 text-primary" />
              </span>
              Professional Certifications
            </motion.h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <InteractiveCertificate {...cert} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
