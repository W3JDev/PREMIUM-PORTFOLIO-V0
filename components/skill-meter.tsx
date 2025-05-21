"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface SkillMeterProps {
  skill: string
  level: number // 0-100
  color?: string
  icon?: React.ReactNode
}

export default function SkillMeter({ skill, level, color = "hsl(var(--primary))", icon }: SkillMeterProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          {icon && <span className="text-primary">{icon}</span>}
          <span className="text-sm font-medium text-white">{skill}</span>
        </div>
        <span className="text-xs font-semibold text-primary">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${level}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}
