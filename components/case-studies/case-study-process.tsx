"use client"

import { motion } from "framer-motion"
import { Code, Search, Lightbulb, PenTool, Layers, Zap, BarChart, Users, CheckCircle, Rocket } from "lucide-react"

interface ProcessStep {
  number: number
  title: string
  description: string
  icon?: string
}

interface CaseStudyProcessProps {
  title: string
  steps: ProcessStep[]
}

export default function CaseStudyProcess({ title, steps }: CaseStudyProcessProps) {
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case "Code":
        return <Code className="h-6 w-6" />
      case "Search":
        return <Search className="h-6 w-6" />
      case "Lightbulb":
        return <Lightbulb className="h-6 w-6" />
      case "PenTool":
        return <PenTool className="h-6 w-6" />
      case "Layers":
        return <Layers className="h-6 w-6" />
      case "Zap":
        return <Zap className="h-6 w-6" />
      case "BarChart":
        return <BarChart className="h-6 w-6" />
      case "Users":
        return <Users className="h-6 w-6" />
      case "CheckCircle":
        return <CheckCircle className="h-6 w-6" />
      case "Rocket":
        return <Rocket className="h-6 w-6" />
      default:
        return <Lightbulb className="h-6 w-6" />
    }
  }

  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8">{title}</h2>

      <div className="relative">
        {/* Vertical line connecting steps */}
        <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20 hidden md:block" />

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6"
            >
              <div className="flex-shrink-0 flex md:block">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary z-10">
                  {getIcon(step.icon)}
                </div>
              </div>

              <div className="glass-morph rounded-lg p-6 flex-1">
                <div className="flex items-center mb-3">
                  <span className="text-sm font-medium text-primary mr-2">Step {step.number}</span>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
