"use client"

import { motion } from "framer-motion"
import { Tag, Github, ExternalLink, FileText } from "lucide-react"
import { Code, Layout, Database, Server, Cpu, Globe, PenTool, Layers, BarChart, Zap, Users } from "lucide-react"

interface CaseStudySidebarProps {
  client: string
  timeline: string
  role: string
  team?: string[]
  tags: string[]
  technologies?: {
    name: string
    icon: string
  }[]
  links?: {
    github?: string
    live?: string
    case?: string
  }
}

export default function CaseStudySidebar({
  client,
  timeline,
  role,
  team,
  tags,
  technologies,
  links,
}: CaseStudySidebarProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code className="w-4 h-4" />
      case "Layout":
        return <Layout className="w-4 h-4" />
      case "Database":
        return <Database className="w-4 h-4" />
      case "Server":
        return <Server className="w-4 h-4" />
      case "Cpu":
        return <Cpu className="w-4 h-4" />
      case "Globe":
        return <Globe className="w-4 h-4" />
      case "PenTool":
        return <PenTool className="w-4 h-4" />
      case "Layers":
        return <Layers className="w-4 h-4" />
      case "BarChart":
        return <BarChart className="w-4 h-4" />
      case "Zap":
        return <Zap className="w-4 h-4" />
      case "Users":
        return <Users className="w-4 h-4" />
      default:
        return <Code className="w-4 h-4" />
    }
  }

  return (
    <div className="sticky top-24 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-morph rounded-lg p-6"
      >
        <h3 className="text-xl font-bold text-white mb-4">Project Details</h3>

        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-muted-foreground">Client</h4>
            <p className="text-white">{client}</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-muted-foreground">Timeline</h4>
            <p className="text-white">{timeline}</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-muted-foreground">Role</h4>
            <p className="text-white">{role}</p>
          </div>

          {team && team.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Team</h4>
              <ul className="list-disc list-inside text-white">
                {team.map((member, index) => (
                  <li key={index}>{member}</li>
                ))}
              </ul>
            </div>
          )}

          {links && (
            <div className="pt-2">
              <div className="flex flex-wrap gap-3">
                {links.github && (
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-md text-sm text-white hover:bg-muted/80 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                )}

                {links.live && (
                  <a
                    href={links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-md text-sm text-primary hover:bg-primary/30 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}

                {links.case && (
                  <a
                    href={links.case}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-md text-sm text-white hover:bg-muted/80 transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Case Study</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {technologies && technologies.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-morph rounded-lg p-6"
        >
          <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>

          <div className="space-y-3">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="flex items-center gap-3 p-3 bg-muted/30 rounded-md hover:bg-muted/50 transition-colors"
              >
                <div className="p-2 rounded-full bg-primary/20 text-primary">{getIcon(tech.icon)}</div>
                <span className="text-white">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass-morph rounded-lg p-6"
      >
        <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="flex items-center px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
