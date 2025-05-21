import { Suspense } from "react"
import dynamic from "next/dynamic"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Contact from "@/components/sections/contact"
import Blog from "@/components/sections/blog"
import Certifications from "@/components/sections/certifications"
import LoadingScreen from "@/components/loading-screen"

// Dynamically import components with client-side interactivity
const CursorFollower = dynamic(() => import("@/components/cursor-follower"), {
  ssr: false,
  loading: () => null,
})
const CareerJourney = dynamic(() => import("@/components/sections/career-journey"), { ssr: false })
const FeaturedProjects = dynamic(() => import("@/components/sections/featured-projects"), { ssr: false })

export default function Home() {
  return (
    <main className="relative bg-background text-foreground">
      <Suspense fallback={<LoadingScreen />}>
        <CursorFollower />
        <Hero />
        <About />
        <Skills />
        <Certifications /> {/* This is now the single source for certifications and education */}
        <CareerJourney />
        <FeaturedProjects />
        <Projects />
        <Blog />
        <Contact />
      </Suspense>
    </main>
  )
}
