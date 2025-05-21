"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { Coffee, Code, Briefcase, GraduationCap, Award, Rocket, Lightbulb, Globe } from "lucide-react"

interface TimelineEvent {
  year: string
  title: string
  description: string
  icon: React.ReactNode
  category: string
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2018",
    title: "F&B Service Excellence",
    description:
      "Started career in the F&B industry at Table & Apron, mastering client service, operational efficiency, and attention to detail in a fast-paced environment.",
    icon: <Coffee className="h-5 w-5" />,
    category: "Career",
  },
  {
    year: "2019",
    title: "Tech Self-Education Journey",
    description:
      "Began self-taught journey into web development, learning HTML, CSS, JavaScript, and basic programming concepts while continuing F&B work.",
    icon: <Code className="h-5 w-5" />,
    category: "Education",
  },
  {
    year: "2020",
    title: "First Tech Project: EZX System",
    description:
      "Developed first major tech solution - the EZX Attendance & Payroll System - solving real operational challenges in the F&B industry.",
    icon: <Briefcase className="h-5 w-5" />,
    category: "Project",
  },
  {
    year: "2021",
    title: "Blockchain Exploration",
    description:
      "Expanded skill set to include blockchain development, launching the Junior Coin (JNR) community project on Solana.",
    icon: <GraduationCap className="h-5 w-5" />,
    category: "Education",
  },
  {
    year: "2022",
    title: "Full-Stack Development Mastery",
    description:
      "Achieved proficiency in full-stack development with React, Node.js, and database technologies, creating comprehensive web applications.",
    icon: <Award className="h-5 w-5" />,
    category: "Skill",
  },
  {
    year: "2023",
    title: "AI Integration Specialist",
    description:
      "Mastered AI integration in applications, developing intelligent systems that enhance user experiences and automate complex processes.",
    icon: <Rocket className="h-5 w-5" />,
    category: "Skill",
  },
  {
    year: "2024",
    title: "Web3 Platform Launch",
    description:
      "Launched a decentralized platform connecting F&B businesses with customers through blockchain technology, revolutionizing loyalty programs.",
    icon: <Globe className="h-5 w-5" />,
    category: "Project",
  },
  {
    year: "2025",
    title: "F&B Tech Innovation Hub",
    description:
      "Established an innovation hub focused on developing cutting-edge technology solutions specifically for the food and beverage industry.",
    icon: <Lightbulb className="h-5 w-5" />,
    category: "Vision",
  },
]

export default function DynamicTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeEvent, setActiveEvent] = useState<number>(0)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const translateY = useTransform(smoothProgress, [0, 1], [100, -100])

  // Update active event based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const { top, height } = containerRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const scrollPosition = (viewportHeight - top) / (height + viewportHeight)

      // Calculate which event should be active based on scroll position
      const eventIndex = Math.min(
        Math.max(Math.floor(scrollPosition * timelineEvents.length), 0),
        timelineEvents.length - 1,
      )

      setActiveEvent(eventIndex)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Career":
        return "bg-blue-500/20 text-blue-400"
      case "Education":
        return "bg-green-500/20 text-green-400"
      case "Project":
        return "bg-purple-500/20 text-purple-400"
      case "Skill":
        return "bg-amber-500/20 text-amber-400"
      case "Vision":
        return "bg-primary/20 text-primary"
      default:
        return "bg-primary/20 text-primary"
    }
  }

  return (
    <div ref={containerRef} className="relative min-h-[800px] py-20">
      {/* Timeline line */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20"
        style={{ scaleY: smoothProgress }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isInView ? 1 : 0 }}
        transition={{ duration: 1.5 }}
      />

      {/* Timeline events */}
      <div className="relative">
        {timelineEvents.map((event, index) => {
          const isLeft = index % 2 === 0
          const isActive = activeEvent >= index

          return (
            <motion.div
              key={event.year}
              className={`flex items-center mb-24 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Content */}
              <motion.div
                className={`w-5/12 ${isLeft ? "pr-12 text-right" : "pl-12 text-left"}`}
                initial={{ x: isLeft ? -50 : 50, opacity: 0 }}
                animate={{
                  x: isInView ? 0 : isLeft ? -50 : 50,
                  opacity: isInView ? 1 : 0,
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ y: translateY }}
              >
                <div
                  className={`glass-morph p-6 rounded-lg transition-all duration-500 ${
                    isActive ? "border-primary/50 shadow-lg shadow-primary/10" : "border-primary/10"
                  }`}
                >
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}
                  >
                    {event.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-2">{event.title}</h3>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                </div>
              </motion.div>

              {/* Center dot */}
              <motion.div
                className="w-2/12 flex justify-center relative"
                initial={{ scale: 0 }}
                animate={{ scale: isActive ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                    isActive ? "bg-primary" : "bg-muted"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: isActive ? 1 : 0.5 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {event.icon}
                  </motion.div>
                </motion.div>
                <motion.div
                  className={`absolute top-1/2 w-full h-0.5 ${
                    isLeft ? "right-0" : "left-0"
                  } ${isActive ? "bg-primary" : "bg-muted"}`}
                  style={{ width: "50%" }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.span
                  className={`absolute ${isLeft ? "left-0" : "right-0"} top-1/2 transform -translate-y-1/2 ${
                    isLeft ? "-translate-x-full -ml-4" : "translate-x-full ml-4"
                  } font-bold text-lg ${isActive ? "text-primary" : "text-muted-foreground"}`}
                >
                  {event.year}
                </motion.span>
              </motion.div>

              {/* Empty space for alternating layout */}
              <div className="w-5/12" />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
