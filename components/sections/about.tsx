"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import ParallaxSection from "@/components/parallax-section"

export default function About() {
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
    <section id="about" className="py-24 md:py-40 overflow-hidden">
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
            The Genesis
          </motion.span>
          <motion.h2 variants={itemVariants} className="section-title">
            My Odyssey
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <ParallaxSection className="lg:col-span-2" direction="up">
            <div className="relative overflow-hidden rounded-lg border-2 border-primary/15 shadow-2xl">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Jewel - Visionary Technologist"
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
                suppressHydrationWarning
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </ParallaxSection>

          <ParallaxSection className="lg:col-span-3" direction="down">
            <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
              From Service Artistry to Digital Architecture
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed text-lg">
              My journey began in the demanding F&B sector (Table & Apron), mastering precision, client-centric service,
              and operational efficiency. This foundation in understanding real-world systems and human interaction
              became the unexpected catalyst for my pivot to technology.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              Driven by an innate curiosity to solve problems at scale, I embarked on a self-taught journey into IT,
              becoming a polymath in web development, design, automation, and emerging technologies like blockchain and
              AI. My F&B experience provides a unique lens, enabling me to bridge the gap between operational needs and
              technical possibilities, transforming challenges into elegant digital solutions.
            </p>

            <div className="border-l-2 border-primary pl-6 py-2 mb-8">
              <h4 className="text-2xl font-semibold mb-2 text-white">Career Philosophy:</h4>
              <p className="text-foreground/80 italic text-lg">
                "Leverage diverse experiences to innovate with purpose. Engineer solutions that are not just functional,
                but intuitive and impactful. Continuously learn, adapt, and build for a better future."
              </p>
            </div>

            <h4 className="text-2xl font-semibold mb-3 text-white">Key Soft Skills (Honed in F&B):</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-8 text-lg">
              <li>Problem-Solving & Critical Thinking under pressure</li>
              <li>Adaptability & Resilience in dynamic environments</li>
              <li>Exceptional Communication & Interpersonal skills</li>
              <li>Meticulous Attention to Detail & Quality Assurance</li>
            </ul>

            <Button
              className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              data-cursor="hover"
            >
              <FileText className="mr-2 h-4 w-4" />
              View Résumé
            </Button>
          </ParallaxSection>
        </div>
      </div>
    </section>
  )
}
