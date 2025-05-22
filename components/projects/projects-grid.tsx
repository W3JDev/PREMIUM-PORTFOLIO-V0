"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ProjectCard from "@/components/projects/project-card"
import { Button } from "@/components/ui/button"
import { getProjects } from "@/lib/data/projects"

export default function ProjectsGrid() {
  const [visibleProjects, setVisibleProjects] = useState(6)
  const projects = getProjects()

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length))
  }

  return (
    <div className="mt-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            suppressHydrationWarning
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.coverImage}
              category={project.category}
              slug={project.slug}
              impact={project.impact}
              technologies={project.technologies.map((tech) => tech.name)}
            />
          </motion.div>
        ))}
      </div>

      {visibleProjects < projects.length && (
        <div className="text-center mt-12">
          <Button
            onClick={loadMore}
            className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Load More Projects
          </Button>
        </div>
      )}
    </div>
  )
}
