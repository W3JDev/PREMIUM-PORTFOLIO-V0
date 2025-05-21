"use client"

import { Github, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const letterVariants = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <footer className="py-16 text-center">
      <div className="flex justify-center mb-6">
        <div className="text-3xl font-black tracking-tighter text-white flex">
          {["M", "N", "J"].map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              whileHover={{ y: -5, color: "hsl(var(--primary))" }}
              className="transition-colors duration-300"
            >
              {letter}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            .
          </motion.span>
        </div>
      </div>
      <p className="text-muted-foreground text-sm">&copy; {currentYear} MNJ. Crafted with Vision & Precision.</p>
      <p className="text-xs text-muted-foreground/70 mt-1">
        Based in Petaling Jaya, Malaysia. Open to Global Remote Collaboration.
      </p>
      <div className="flex justify-center space-x-6 mt-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-transform hover:scale-110"
          data-cursor="hover"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-transform hover:scale-110"
          data-cursor="hover"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-transform hover:scale-110"
          data-cursor="hover"
        >
          <Twitter className="h-5 w-5" />
        </a>
      </div>
    </footer>
  )
}
