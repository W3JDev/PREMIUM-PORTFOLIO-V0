"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface RelatedProjectsProps {
  currentSlug: string
}

// This would normally come from a CMS or database
const getRelatedProjects = (currentSlug: string) => {
  return [
    {
      title: "AI Waiter & Menu Assistant",
      excerpt: "AI-powered assistant for smart recommendations and efficient ordering in restaurants.",
      image: "/placeholder.svg?height=300&width=500",
      category: "F&B Tech / AI Application",
      slug: "ai-waiter-assistant",
    },
    {
      title: "Junior Coin (JNR)",
      excerpt: "Community token on Solana blockchain fostering engagement and exploring tokenomics.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Blockchain / Community Project",
      slug: "junior-coin",
    },
    {
      title: "W3J Protocol & Training Docs",
      excerpt: "Comprehensive documentation and training materials improving understanding and efficiency.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Technical Writing / Content",
      slug: "w3j-protocol-docs",
    },
  ].filter((project) => project.slug !== currentSlug)
}

export default function RelatedProjects({ currentSlug }: RelatedProjectsProps) {
  const relatedProjects = getRelatedProjects(currentSlug)

  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8">Related Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {relatedProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={`/projects/${project.slug}`} className="block group">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>

              <p className="text-xs uppercase tracking-wider text-primary opacity-80 mb-1">{project.category}</p>
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2">{project.excerpt}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
