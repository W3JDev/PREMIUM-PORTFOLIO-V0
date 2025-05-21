"use client"

import { motion } from "framer-motion"
import { Code, Layout, Database, FileText, BarChart } from "lucide-react"

interface Technology {
  name: string
  icon: string
}

interface ProjectTechnologiesProps {
  technologies: Technology[]
}

export default function ProjectTechnologies({ technologies }: ProjectTechnologiesProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code className="w-4 h-4" />
      case "Layout":
        return <Layout className="w-4 h-4" />
      case "Database":
        return <Database className="w-4 h-4" />
      case "FileText":
        return <FileText className="w-4 h-4" />
      case "BarChart":
        return <BarChart className="w-4 h-4" />
      default:
        return <Code className="w-4 h-4" />
    }
  }

  return (
    <div className="glass-morph rounded-lg p-6">
      <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>

      <div className="space-y-3">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center gap-3 p-3 bg-muted/30 rounded-md hover:bg-muted/50 transition-colors"
          >
            <div className="p-2 rounded-full bg-primary/20 text-primary">{getIcon(tech.icon)}</div>
            <span className="text-white">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
