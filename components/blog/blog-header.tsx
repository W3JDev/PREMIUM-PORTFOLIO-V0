"use client"

import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function BlogHeader() {
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
          The Blog
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          suppressHydrationWarning
        >
          Insights at the intersection of F&B operations, technology, and innovation
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-md mx-auto relative"
        >
          <Input
            type="search"
            placeholder="Search articles..."
            className="pl-10 py-6 bg-background/80 backdrop-blur-sm border-primary/20 focus:border-primary"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        </motion.div>
      </div>
    </div>
  )
}
