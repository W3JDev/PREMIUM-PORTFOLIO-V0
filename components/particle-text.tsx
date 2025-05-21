"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface ParticleTextProps {
  text: string
  className?: string
}

export default function ParticleText({ text, className = "" }: ParticleTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isClient, setIsClient] = useState(false)

  // Only run client-side code after component mounts
  useEffect(() => {
    setIsClient(true)

    // Skip the rest if we're not on the client or canvas isn't available
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth || window.innerWidth
    canvas.height = 200

    // Draw text
    ctx.font = "bold 80px var(--font-playfair)"
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(text, canvas.width / 2, canvas.height / 2)

    // Simple animation instead of complex particle system
    let frame: number

    const animate = () => {
      // Simple pulsing effect
      const time = Date.now() * 0.001
      const scale = 1 + Math.sin(time) * 0.02

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.save()
      ctx.translate(canvas.width / 2, canvas.height / 2)
      ctx.scale(scale, scale)
      ctx.translate(-canvas.width / 2, -canvas.height / 2)

      ctx.font = "bold 80px var(--font-playfair)"
      ctx.fillStyle = "white"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(text, canvas.width / 2, canvas.height / 2)

      ctx.restore()

      frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)

    // Clean up
    return () => {
      if (frame) cancelAnimationFrame(frame)
    }
  }, [text])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className={className}
    >
      <canvas ref={canvasRef} className="w-full h-[200px]" />
    </motion.div>
  )
}
