"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    title: "EZX Attendance & Payroll System",
    category: "F&B Automation / HR Tech",
    tech: "Google Apps Script | Google Sheets | Automation",
    impact: "Impact: Reduced HR admin by 40hrs/month, cut payroll processing by 97% for 50+ employees.",
    description:
      "Problem: Manual, error-prone attendance tracking and payroll for F&B staff. Solution: Developed an automated system using Google Suite, eliminating 70% of HR workload and ensuring accuracy.",
    image: "/placeholder.svg?height=675&width=1200",
    featured: true,
  },
  {
    title: "AI Waiter & Menu Assistant",
    category: "F&B Tech / AI Application",
    tech: "Python | NLP | React Native (Concept) | Cloud AI",
    impact: "Projected: Reduce order times by 30%, increase avg. ticket size by 35%.",
    description:
      "Problem: Inconsistent service & missed upsell opportunities. Solution: Conceptualized an AI-powered assistant for smart recommendations and efficient ordering.",
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
  },
  {
    title: "Junior Coin (JNR)",
    category: "Blockchain / Community Project",
    tech: "Solana | Smart Contracts | Community Building",
    impact: "Achieved: 500+ community members, 3,500+ transactions.",
    description:
      "Problem: Exploring decentralized community engagement. Solution: Launched a token on Solana, fostering community growth and exploring tokenomics.",
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
  },
  {
    title: "W3J Protocol & Training Docs",
    category: "Technical Writing / Content",
    tech: "Content Strategy | Technical Writing | SEO",
    impact: "Impact: Reduced onboarding by 40%, increased content engagement by 25%.",
    description:
      "Problem: Complex information requiring clear communication. Solution: Developed comprehensive documentation and training materials, improving understanding and efficiency.",
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
  },
]

export default function Projects() {
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
    <section id="projects" className="py-24 md:py-40">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.span variants={itemVariants} className="section-subtitle block">
            Signature Works
          </motion.span>
          <motion.h2 variants={itemVariants} className="section-title">
            The Forge
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
            A curated selection of projects demonstrating the practical application of my F&B and technological
            expertise, focused on delivering tangible results and innovative solutions.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group rounded-xl overflow-hidden glass-morph transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 ${
                project.featured ? "md:col-span-2" : ""
              }`}
              data-cursor="hover"
            >
              <div className="relative">
                <div className={`aspect-${project.featured ? "video" : "[4/3]"} overflow-hidden bg-muted`}>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={project.featured ? 1200 : 800}
                    height={project.featured ? 675 : 600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
                  <p className="text-xs uppercase tracking-wider text-primary opacity-80 mb-1">{project.category}</p>
                  <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{project.tech}</p>
                  <p className="text-sm font-medium text-primary mb-3">{project.impact}</p>
                  <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-sm text-foreground/80 mb-2">{project.description}</p>
                    <span className="text-xs font-semibold text-primary inline-block">View Project &rarr;</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Link href="/projects">
            <Button
              className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              data-cursor="hover"
            >
              Access Full Project Archive
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
