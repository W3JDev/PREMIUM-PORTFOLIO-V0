"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center pt-24 pb-12 relative overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(125,249,255,0.05),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(125,249,255,0.05),transparent_50%)] opacity-50 animate-shimmer z-0" />

      <div className="container mx-auto px-6 z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-3/5 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-8 leading-tight">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="block text-white"
              >
                F&B Innovator.
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="gradient-text block"
              >
                <TypeAnimation
                  sequence={["Full-Stack Architect.", 2000, "UI/UX Designer.", 2000, "Problem Solver.", 2000]}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                />
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="block text-white"
              >
                Blockchain Explorer.
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed"
          >
            MNJ: Translating complex F&B operational challenges into elegant, impactful technical solutions. A
            self-taught polymath driven by first-principles to build a more efficient and intuitive digital future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              data-cursor="hover"
            >
              View Signature Works
            </Button>
            <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-white" data-cursor="hover">
              Connect & Collaborate
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full lg:w-2/5 h-[300px] lg:h-[500px] relative"
        >
          <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="MNJ - Digital Sphere"
                width={800}
                height={800}
                className="w-full h-full object-cover rounded-full animate-float"
                priority
              />
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
      >
        <a href="#about" data-cursor="hover">
          <ChevronDown className="h-8 w-8 text-primary opacity-70" />
        </a>
      </motion.div>
    </section>
  )
}
