"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  category: string
  slug: string
  impact?: string
  technologies?: string[]
}

export default function ProjectCard({
  title,
  description,
  image,
  category,
  slug,
  impact,
  technologies,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group rounded-xl overflow-hidden glass-morph transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 h-full flex flex-col"
      data-cursor="hover"
    >
      <Link href={`/projects/${slug}`} className="block flex-grow">
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden bg-muted">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
            <p className="text-xs uppercase tracking-wider text-primary opacity-80 mb-1">{category}</p>
            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{title}</h3>
            {impact && <p className="text-sm font-medium text-primary mb-3">{impact}</p>}
          </div>
        </div>

        <div className="p-6 pt-0">
          <p className="text-sm text-foreground/80 mb-4 line-clamp-3">{description}</p>

          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                  +{technologies.length - 3} more
                </span>
              )}
            </div>
          )}

          <div className="flex items-center text-primary text-sm font-medium group-hover:underline">
            <span>View Case Study</span>
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
