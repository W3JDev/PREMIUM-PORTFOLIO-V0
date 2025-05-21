"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import Image from "next/image"

interface CertificateProps {
  title: string
  issuer: string
  date: string
  credentialUrl?: string
  skills: string[]
  logo?: string
}

export default function InteractiveCertificate({ title, issuer, date, credentialUrl, skills, logo }: CertificateProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  // Create a fallback logo if none is provided
  const renderLogo = () => {
    if (logo) {
      return (
        <div className="relative w-12 h-12">
          <Image
            src={logo || "/placeholder.svg"}
            alt={issuer}
            fill
            className="object-contain"
            onError={(e) => {
              // If image fails to load, replace with Award icon
              e.currentTarget.style.display = "none"
              document.getElementById(`fallback-${title.replace(/\s+/g, "-")}`)?.classList.remove("hidden")
            }}
          />
          <Award id={`fallback-${title.replace(/\s+/g, "-")}`} className="w-10 h-10 text-primary/70 hidden" />
        </div>
      )
    } else {
      return <Award className="w-10 h-10 text-primary/70" />
    }
  }

  return (
    <div
      className="h-[300px] w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      data-cursor="hover"
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden glass-morph rounded-lg p-6 flex flex-col">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{issuer}</p>
              <p className="text-xs text-primary mt-1">{date}</p>
            </div>
            <div className="flex-shrink-0">{renderLogo()}</div>
          </div>

          <div className="mt-auto text-center text-sm text-muted-foreground">
            <p>Click or hover to view details</p>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden glass-morph rounded-lg p-6 flex flex-col rotate-y-180">
          <h4 className="text-lg font-semibold text-white mb-3">Skills & Knowledge</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>

          {credentialUrl && (
            <a
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex items-center justify-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <span>View Credential</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </motion.div>
    </div>
  )
}
