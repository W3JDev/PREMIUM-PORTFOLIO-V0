"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  category: string
  slug: string
}

export default function BlogCard({ title, excerpt, date, readTime, image, category, slug }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="glass-morph rounded-lg overflow-hidden group"
      whileHover={{ y: -10 }}
      data-cursor="hover"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/20">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{excerpt}</p>

        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center">
            <Calendar className="w-3 h-3 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>

        <Link href={`/blog/${slug}`} className="flex items-center text-primary text-sm font-medium hover:underline">
          <span>Read Article</span>
          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}
