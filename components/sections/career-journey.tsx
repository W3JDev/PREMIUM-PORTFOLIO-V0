"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import DynamicTimeline from "@/components/dynamic-timeline"

export default function CareerJourney() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="career-journey" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
          suppressHydrationWarning
        >
          <motion.span variants={itemVariants} className="section-subtitle block">
            Professional Evolution
          </motion.span>
          <motion.h2 variants={itemVariants} className="section-title">
            Career Journey
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
            Explore the key milestones in my unconventional path from F&B service to technology innovation, with a
            vision extending to 2025.
          </motion.p>
        </motion.div>

        <DynamicTimeline />
      </div>
    </section>
  )
}
