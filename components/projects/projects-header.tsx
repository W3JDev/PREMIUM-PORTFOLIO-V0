"use client"

import { motion } from "framer-motion"

export default function ProjectsHeader() {
  return (
    <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(125,249,255,0.1),transparent_70%)] z-0" />

      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background z-10" />

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          suppressHydrationWarning
        >
          Project Portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto"
          suppressHydrationWarning
        >
          A curated collection of projects showcasing my problem-solving approach and technical expertise
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
            F&B Technology
          </span>
          <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
            Web Development
          </span>
          <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
            Blockchain
          </span>
          <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
            UI/UX Design
          </span>
          <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
            Automation
          </span>
        </motion.div>
      </div>
    </div>
  )
}
