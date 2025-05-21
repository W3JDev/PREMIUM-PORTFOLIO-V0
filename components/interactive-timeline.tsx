"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TimelineEvent {
  year: string
  title: string
  description: string
  icon?: React.ReactNode
}

interface TimelineProps {
  events: TimelineEvent[]
}

export default function InteractiveTimeline({ events }: TimelineProps) {
  const [activeEvent, setActiveEvent] = useState<number>(0)

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20" />

      {/* Timeline events */}
      <div className="space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative pl-12 ${activeEvent === index ? "" : ""}`}
          >
            {/* Timeline dot */}
            <motion.div
              className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                activeEvent === index ? "bg-primary" : "bg-muted"
              }`}
              whileHover={{ scale: 1.2 }}
              onClick={() => setActiveEvent(index)}
              data-cursor="hover"
            >
              <span className="text-xs font-bold">{event.year}</span>
            </motion.div>

            {/* Content */}
            <div
              className={`glass-morph p-6 rounded-lg transition-all duration-300 ${
                activeEvent === index ? "border-primary/50 shadow-lg shadow-primary/10" : "border-primary/10"
              }`}
              onClick={() => setActiveEvent(index)}
              data-cursor="hover"
            >
              <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>

              <AnimatePresence mode="wait">
                {activeEvent === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground">{event.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
