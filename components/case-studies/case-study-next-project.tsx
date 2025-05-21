"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface CaseStudyNextProjectProps {
  title: string
  subtitle: string
  slug: string
  image: string
}

export default function CaseStudyNextProject({ title, subtitle, slug, image }: CaseStudyNextProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold text-white mb-8">Next Project</h2>

      <Link href={`/projects/${slug}`} className="block group">
        <div className="relative h-[30vh] rounded-xl overflow-hidden">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent group-hover:opacity-90 transition-opacity" />
          <div className="absolute inset-0 flex flex-col justify-center p-8">
            <div className="max-w-lg">
              <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{title}</h3>
              <p className="text-lg text-muted-foreground mb-4">{subtitle}</p>
              <div className="flex items-center text-primary">
                <span className="mr-2">View Project</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
