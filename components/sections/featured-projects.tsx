"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import ProjectCard3D from "@/components/3d-project-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Updated to use placeholder SVGs instead of non-existent image paths
const featuredProjects = [
  {
    title: "EZX Attendance System",
    category: "F&B Automation / HR Tech",
    image: "/placeholder.svg?height=600&width=600", // Using placeholder SVG
  },
  {
    title: "AI Waiter Assistant",
    category: "F&B Tech / AI Application",
    image: "/placeholder.svg?height=600&width=600", // Using placeholder SVG
  },
  {
    title: "Junior Coin (JNR)",
    category: "Blockchain / Community Project",
    image: "/placeholder.svg?height=600&width=600", // Using placeholder SVG
  },
]

export default function FeaturedProjects() {
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
    <section id="featured-projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.span variants={itemVariants} className="section-subtitle block">
            Featured Work
          </motion.span>
          <motion.h2 variants={itemVariants} className="section-title">
            Interactive Showcase
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
            Explore these selected projects in 3D. Hover to interact and click to view details.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard3D
                title={project.title}
                category={project.category}
                image={project.image}
                onClick={() => console.log(`Clicked on ${project.title}`)}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/projects">
            <Button
              className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              data-cursor="hover"
            >
              View All Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
