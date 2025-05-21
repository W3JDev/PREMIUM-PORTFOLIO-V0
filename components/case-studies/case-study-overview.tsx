"use client"

import { motion } from "framer-motion"

interface CaseStudyOverviewProps {
  description: string
  challenge: string
  approach: string
  outcome: string
}

export default function CaseStudyOverview({ description, challenge, approach, outcome }: CaseStudyOverviewProps) {
  return (
    <div className="mb-16">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl text-muted-foreground mb-12"
      >
        {description}
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-morph rounded-lg p-6"
        >
          <h3 className="text-xl font-bold text-white mb-3">The Challenge</h3>
          <p className="text-muted-foreground">{challenge}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-morph rounded-lg p-6"
        >
          <h3 className="text-xl font-bold text-white mb-3">The Approach</h3>
          <p className="text-muted-foreground">{approach}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-morph rounded-lg p-6"
        >
          <h3 className="text-xl font-bold text-white mb-3">The Outcome</h3>
          <p className="text-muted-foreground">{outcome}</p>
        </motion.div>
      </div>
    </div>
  )
}
