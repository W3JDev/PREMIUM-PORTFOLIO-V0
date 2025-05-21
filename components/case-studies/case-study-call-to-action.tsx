"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CaseStudyCallToAction() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="glass-morph rounded-lg p-8 md:p-12 mb-16 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Interested in working together?</h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/contact">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg">
            Get in Touch
          </Button>
        </Link>
        <Link href="/projects">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
          >
            View More Projects
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
