"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"

interface Testimonial {
  quote: string
  author: string
  role: string
  avatar: string
}

interface ProjectTestimonialProps {
  testimonial: Testimonial
}

export default function ProjectTestimonial({ testimonial }: ProjectTestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="glass-morph rounded-lg p-8 relative"
    >
      <div className="absolute top-6 left-6 text-primary/20">
        <Quote className="w-16 h-16" />
      </div>

      <div className="relative z-10">
        <p className="text-xl text-white italic mb-6 relative z-10">{testimonial.quote}</p>

        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={testimonial.avatar || "/placeholder.svg"}
              alt={testimonial.author}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h4 className="font-medium text-white">{testimonial.author}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
