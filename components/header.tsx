"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Odyssey", href: "#about" },
  { name: "Arsenal", href: "#skills" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "#blog" },
  { name: "Nexus", href: "#contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Update header style based on scroll position
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]")
      let currentSection = "hero"

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        if (sectionTop <= 150) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-3 glass-morph shadow-lg" : "py-5",
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="text-4xl font-black tracking-tighter text-white flex">
          {["M", "N", "J"].map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              whileHover={{ y: -5, color: "hsl(var(--primary))" }}
              className="transition-colors duration-300"
            >
              {letter}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            .
          </motion.span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "relative py-2 text-foreground transition-colors duration-300 hover:text-primary",
                activeSection === link.href.substring(1) && "text-primary",
              )}
              data-cursor="hover"
            >
              <span>{link.name}</span>
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 origin-right",
                  activeSection === link.href.substring(1) && "scale-x-100 origin-left",
                )}
              />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={() => setIsOpen(true)}
          data-cursor="hover"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-xl z-50 p-8 md:hidden transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-end mb-8">
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={() => setIsOpen(false)}
            data-cursor="hover"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="flex flex-col items-center space-y-8 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-2xl relative py-2 text-foreground transition-colors duration-300 hover:text-primary",
                activeSection === link.href.substring(1) && "text-primary",
              )}
              onClick={() => setIsOpen(false)}
              data-cursor="hover"
            >
              <span>{link.name}</span>
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 origin-right",
                  activeSection === link.href.substring(1) && "scale-x-100 origin-left",
                )}
              />
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
