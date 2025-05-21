"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, MenuIcon as Restaurant, Lightbulb } from "lucide-react"
import AnimatedProgress from "@/components/animated-progress"

const skills = [
  {
    title: "Technical Skills",
    icon: <Code className="h-6 w-6" />,
    items: [
      "<strong>Languages:</strong> JavaScript (ES6+), Python, Solidity, HTML5, CSS3, SQL",
      "<strong>Frameworks/Libraries:</strong> React, Node.js, Next.js, Express.js, Tailwind CSS, Web3.js",
      "<strong>Databases:</strong> PostgreSQL, MongoDB, Firebase",
      "<strong>Tools & Platforms:</strong> Git/GitHub, Docker, VS Code, Google Apps Script, Figma, Canva, Adobe Suite, AWS/Azure (Basics)",
      "<strong>Concepts:</strong> REST APIs, Agile Methodology, Responsive Design, Smart Contracts, dApp Development, AI/ML (Foundational)",
    ],
    progressBars: [
      { label: "Frontend Development", percentage: 95 },
      { label: "Backend Development", percentage: 85 },
      { label: "Blockchain Development", percentage: 75 },
    ],
  },
  {
    title: "F&B Operations & Management",
    icon: <Restaurant className="h-6 w-6" />,
    items: [
      "Operations Management & Workflow Optimization",
      "Menu Engineering & Cost Control",
      "Wine/Beverage Program Development (WSET)",
      "Service Protocols & Guest Experience Enhancement (RSA)",
      "POS Systems & F&B Technology Integration",
      "Inventory Management & Supplier Relations",
    ],
    progressBars: [
      { label: "Service Operations", percentage: 98 },
      { label: "F&B Technology Integration", percentage: 90 },
      { label: "Menu Engineering", percentage: 85 },
    ],
  },
  {
    title: "Digital & Creative Skills",
    icon: <Lightbulb className="h-6 w-6" />,
    items: [
      "Digital Marketing (SEO, Content Creation, Social Media)",
      "Graphic Design & Video Editing",
      "Technical Writing & Documentation",
      "UI/UX Design Principles",
      "No-Code/Low-Code Platform Development",
    ],
    progressBars: [
      { label: "UI/UX Design", percentage: 80 },
      { label: "Technical Writing", percentage: 90 },
      { label: "Digital Marketing", percentage: 75 },
    ],
  },
]

export default function Skills() {
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
    <section id="skills" className="py-24 md:py-40 glass-morph">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.span variants={itemVariants} className="section-subtitle block">
            Core Competencies
          </motion.span>
          <motion.h2 variants={itemVariants} className="section-title">
            The Arsenal
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg glass-morph transition-all duration-300 hover:shadow-2xl hover:border-primary/50 group"
              data-cursor="hover"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-primary/10 mr-4 group-hover:bg-primary/20 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white">{skill.title}</h3>
              </div>

              <div className="mb-6">
                {skill.progressBars.map((progress) => (
                  <AnimatedProgress key={progress.label} label={progress.label} percentage={progress.percentage} />
                ))}
              </div>

              <ul className="space-y-2 text-muted-foreground">
                {skill.items.map((item, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Removed the duplicate Certifications & Education section that was here */}
      </div>
    </section>
  )
}
