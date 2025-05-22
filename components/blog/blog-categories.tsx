"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const categories = [
  { name: "All", count: 12 },
  { name: "F&B Tech", count: 4 },
  { name: "Web Development", count: 3 },
  { name: "Blockchain", count: 2 },
  { name: "UX Design", count: 2 },
  { name: "Career", count: 1 },
]

export default function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories.map((category) => (
        <motion.button
          key={category.name}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setActiveCategory(category.name)}
          className={cn(
            "px-4 py-2 rounded-full text-sm transition-colors relative",
            activeCategory === category.name ? "text-primary-foreground" : "text-muted-foreground hover:text-white",
          )}
          suppressHydrationWarning
        >
          {activeCategory === category.name && (
            <motion.div
              layoutId="activeCategoryBg"
              className="absolute inset-0 bg-primary rounded-full"
              initial={false}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">
            {category.name} ({category.count})
          </span>
        </motion.button>
      ))}
    </div>
  )
}
