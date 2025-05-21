"use client"

import { motion } from "framer-motion"

interface Metric {
  label: string
  before: string
  after: string
  improvement: string
}

interface ProjectMetricsProps {
  metrics: Metric[]
}

export default function ProjectMetrics({ metrics }: ProjectMetricsProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-6">Impact Metrics</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-morph rounded-lg p-6 text-center"
          >
            <h3 className="text-lg font-medium text-white mb-4">{metric.label}</h3>

            <div className="flex justify-between items-center mb-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Before</p>
                <p className="text-xl font-bold text-white">{metric.before}</p>
              </div>

              <div className="h-10 w-10 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  />
                </svg>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">After</p>
                <p className="text-xl font-bold text-white">{metric.after}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-muted">
              <p className="text-sm text-muted-foreground">Improvement</p>
              <p className="text-2xl font-bold text-primary">{metric.improvement}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
