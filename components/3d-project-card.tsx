"use client"

import { useState, useRef, Suspense } from "react"
import { motion } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { useTexture, Text, Float } from "@react-three/drei"
import * as THREE from "three"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  onClick?: () => void
}

// Create a function to generate a project mockup texture
function createProjectMockup(title: string, category: string): THREE.CanvasTexture {
  const canvas = document.createElement("canvas")
  canvas.width = 512
  canvas.height = 512
  const ctx = canvas.getContext("2d")
  if (ctx) {
    // Create a more representative mockup image
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 512)
    gradient.addColorStop(0, "#1a1a2e")
    gradient.addColorStop(1, "#16213e")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 512, 512)

    // Add a mock UI frame
    ctx.fillStyle = "#0f3460"
    ctx.fillRect(50, 50, 412, 412)

    // Add a header bar
    ctx.fillStyle = "#1a1a2e"
    ctx.fillRect(50, 50, 412, 60)

    // Add some mock content based on project type
    if (title.includes("EZX") || title.includes("Attendance")) {
      // Dashboard style mockup
      ctx.fillStyle = "#e94560"
      ctx.fillRect(80, 140, 160, 160) // Chart

      ctx.fillStyle = "#7DF9FF"
      ctx.fillRect(260, 140, 160, 70) // Stat box 1

      ctx.fillStyle = "#50C878"
      ctx.fillRect(260, 230, 160, 70) // Stat box 2

      // Table rows
      ctx.fillStyle = "#ffffff20"
      ctx.fillRect(80, 320, 352, 30)
      ctx.fillRect(80, 360, 352, 30)
      ctx.fillRect(80, 400, 352, 30)
    } else if (title.includes("AI") || title.includes("Waiter")) {
      // AI interface mockup
      ctx.fillStyle = "#7DF9FF20"
      ctx.fillRect(80, 140, 352, 100) // Chat area 1

      ctx.fillStyle = "#7DF9FF40"
      ctx.fillRect(80, 250, 352, 60) // Chat area 2

      ctx.fillStyle = "#e9456020"
      ctx.fillRect(80, 320, 352, 80) // Response area

      // Input field
      ctx.fillStyle = "#ffffff10"
      ctx.fillRect(80, 410, 300, 40)
      ctx.fillStyle = "#e94560"
      ctx.fillRect(390, 410, 40, 40) // Send button
    } else if (title.includes("Coin") || title.includes("Blockchain")) {
      // Blockchain mockup
      ctx.fillStyle = "#e94560"
      ctx.fillRect(80, 140, 352, 80) // Price chart

      // Token stats
      ctx.fillStyle = "#7DF9FF30"
      ctx.fillRect(80, 230, 170, 80)
      ctx.fillStyle = "#50C87830"
      ctx.fillRect(260, 230, 170, 80)

      // Transaction list
      ctx.fillStyle = "#ffffff10"
      ctx.fillRect(80, 320, 352, 30)
      ctx.fillStyle = "#ffffff15"
      ctx.fillRect(80, 360, 352, 30)
      ctx.fillStyle = "#ffffff20"
      ctx.fillRect(80, 400, 352, 30)
    } else {
      // Generic project mockup
      ctx.fillStyle = "#e94560"
      ctx.fillRect(80, 140, 352, 200)

      // Add some mock text lines
      ctx.fillStyle = "#ffffff"
      ctx.fillRect(80, 370, 352, 10)
      ctx.fillRect(80, 390, 250, 10)
      ctx.fillRect(80, 410, 300, 10)
    }

    // Add project title
    ctx.fillStyle = "#7DF9FF"
    ctx.font = "bold 24px Arial"
    ctx.textAlign = "center"
    ctx.fillText(title, 256, 90)

    // Add category
    ctx.fillStyle = "#ffffff80"
    ctx.font = "12px Arial"
    ctx.fillText(category, 256, 115)
  }
  return new THREE.CanvasTexture(canvas)
}

function ProjectModel({
  title,
  category,
  image,
  isHovered,
}: { title: string; category: string; image: string; isHovered: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [texture, setTexture] = useState<THREE.Texture | null>(null)
  const [hasError, setHasError] = useState(false)

  // Try to load the texture
  useTexture.preload(image)
  useTexture(
    image,
    (loadedTexture) => {
      // Success callback
      setTexture(loadedTexture)
      setHasError(false)
    },
    () => {
      // Error callback - create a mockup texture
      console.log(`Could not load texture: ${image}, using mockup instead`)
      setTexture(createProjectMockup(title, category))
      setHasError(true)
    },
  )

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Rotate more when hovered
      const rotationSpeed = isHovered ? 0.5 : 0.1
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * rotationSpeed) * 0.3

      // Scale up when hovered
      meshRef.current.scale.x = isHovered ? 1.1 : 1
      meshRef.current.scale.y = isHovered ? 1.1 : 1
      meshRef.current.scale.z = isHovered ? 1.1 : 1
    }
  })

  // If texture is not loaded yet, return null
  if (!texture) {
    return null
  }

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, 0, 0]} castShadow>
        <boxGeometry args={[2, 2, 0.1]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      {isHovered && (
        <Text
          position={[0, -1.5, 0]}
          fontSize={0.2}
          color="#7DF9FF"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Geist_Bold.json"
        >
          {title}
        </Text>
      )}
    </Float>
  )
}

export default function ProjectCard3D({ title, category, image, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="h-[300px] rounded-lg overflow-hidden glass-morph cursor-pointer"
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      data-cursor="hover"
    >
      <Canvas shadows camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Suspense fallback={null}>
          <ProjectModel title={title} category={category} image={image} isHovered={isHovered} />
        </Suspense>
      </Canvas>

      <div className="p-4 bg-gradient-to-t from-background to-transparent">
        <p className="text-xs uppercase tracking-wider text-primary opacity-80">{category}</p>
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
    </motion.div>
  )
}
