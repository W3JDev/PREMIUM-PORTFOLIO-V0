"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedProgressProps {
  label: string
  percentage: number
  color?: string
}

export default function AnimatedProgress({ label, percentage, color = "hsl(var(--primary))" }: AnimatedProgressProps) {
  const [isVisible, setIsVisible] = useState(false, { suppressHydrationWarning: true })
  const ref = useRef(null, { suppressHydrationWarning: true })
  const inView = useInView(ref, { once: true, amount: 0.3, suppressHydrationWarning: true })

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-white">{label}</span>
        <span className="text-xs font-semibold text-primary">{percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${percentage}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}
