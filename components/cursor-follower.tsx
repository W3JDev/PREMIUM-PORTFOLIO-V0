"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Mark component as mounted
    setIsMounted(true)

    // Safety check for browser environment
    if (typeof window === "undefined") return

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        (target.closest && target.closest("[data-cursor='hover']"))
      ) {
        setCursorVariant("hover")
      } else {
        setCursorVariant("default")
      }
    }

    // Add event listeners
    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("mouseover", handleMouseOver)

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", mouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  // Don't render anything until component is mounted
  if (!isMounted) return null

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 30,
      width: 30,
      backgroundColor: "rgba(125, 249, 255, 0)",
      border: "1px solid hsl(var(--primary))",
    },
    hover: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 50,
      width: 50,
      backgroundColor: "rgba(125, 249, 255, 0.1)",
      border: "1px solid hsl(var(--primary))",
    },
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-50 rounded-full pointer-events-none"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        style={{ translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="fixed top-0 left-0 z-50 w-2 h-2 rounded-full bg-primary pointer-events-none"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 28 }}
        style={{ translateX: "-50%", translateY: "-50%" }}
      />
    </>
  )
}
