"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface CaseStudyHeaderProps {
  title: string
  subtitle: string
  coverImage: string
  category: string
}

export default function CaseStudyHeader({ title, subtitle, coverImage, category }: CaseStudyHeaderProps) {
  return (
    <div className="relative h-[40vh] md:h-[60vh] rounded-xl overflow-hidden mb-12">
      <Image src={coverImage || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/20 mb-4 inline-block"
        >
          {category}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-3xl"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  )
}
