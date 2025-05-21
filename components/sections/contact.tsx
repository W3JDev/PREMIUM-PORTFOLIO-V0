"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formStatus, setFormStatus] = useState("")

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("Transmitting...")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setFormStatus("Transmission received. I will respond swiftly.")
    ;(e.target as HTMLFormElement).reset()

    setTimeout(() => {
      setFormStatus("")
    }, 5000)
  }

  return (
    <section id="contact" className="py-24 md:py-40 glass-morph">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.span variants={itemVariants} className="section-subtitle block">
            Let's Collaborate
          </motion.span>
          <motion.h2 variants={itemVariants} className="section-title">
            The Nexus
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Actively seeking visionary remote projects and opportunities to apply a unique fusion of skills. If you're
            building something impactful, or need a multifaceted problem-solver, let's connect.
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                  Your Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="e.g., Elara Vance"
                  className="bg-transparent border-primary/15 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="e.g., elara@visionary.tech"
                  className="bg-transparent border-primary/15 focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-sm font-medium text-muted-foreground">
                Subject / Project Idea
              </Label>
              <Input
                id="subject"
                name="subject"
                required
                placeholder="e.g., Revolutionizing F&B with AI"
                className="bg-transparent border-primary/15 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                Your Message
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Detail your vision or inquiry..."
                className="bg-transparent border-primary/15 focus:border-primary resize-none"
              />
            </div>

            <div className="text-center pt-4">
              <Button
                type="submit"
                className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-12 py-6 text-lg"
                data-cursor="hover"
              >
                Send Transmission
              </Button>
              {formStatus && <p className="text-sm mt-4 text-primary animate-pulse">{formStatus}</p>}
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <p className="mb-2 text-muted-foreground">Or connect directly:</p>
            <a
              href="mailto:jewel.dev.innovator@gmail.com"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
              data-cursor="hover"
            >
              <Mail className="h-4 w-4 mr-2" />
              jewel.dev.innovator@gmail.com
            </a>

            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-transform hover:scale-110"
                data-cursor="hover"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-transform hover:scale-110"
                data-cursor="hover"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-transform hover:scale-110"
                data-cursor="hover"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>

            <p className="text-xs text-muted-foreground/70 mt-8">
              Global Aspirations: Open to impactful remote roles and potential migration (Canada, Australia, Europe, NZ,
              Japan, Singapore).
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
