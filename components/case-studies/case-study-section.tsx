"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface CaseStudySectionProps {
  title: string
  content: string
  imageUrl?: string
  imagePosition?: "left" | "right" | "full"
  imageCaption?: string
}

export default function CaseStudySection({
  title,
  content,
  imageUrl,
  imagePosition = "full",
  imageCaption,
}: CaseStudySectionProps) {
  // Determine layout based on image position
  const renderContent = () => {
    if (!imageUrl || imagePosition === "full") {
      return (
        <>
          <h2 className="text-3xl font-bold text-white mb-6">{title}</h2>
          <div
            className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-headings:font-playfair prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-white prose-li:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          {imageUrl && (
            <div className="mt-8">
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
              </div>
              {imageCaption && <p className="text-sm text-muted-foreground mt-2 text-center">{imageCaption}</p>}
            </div>
          )}
        </>
      )
    }

    if (imagePosition === "left") {
      return (
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative rounded-lg overflow-hidden aspect-square">
              <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </div>
            {imageCaption && <p className="text-sm text-muted-foreground mt-2 text-center">{imageCaption}</p>}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl font-bold text-white mb-6">{title}</h2>
            <div
              className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-headings:font-playfair prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-white prose-li:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </motion.div>
        </div>
      )
    }

    // Right image position
    return (
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl font-bold text-white mb-6">{title}</h2>
          <div
            className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-headings:font-playfair prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-white prose-li:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <div className="relative rounded-lg overflow-hidden aspect-square">
            <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
          {imageCaption && <p className="text-sm text-muted-foreground mt-2 text-center">{imageCaption}</p>}
        </motion.div>
      </div>
    )
  }

  return <section>{renderContent()}</section>
}
