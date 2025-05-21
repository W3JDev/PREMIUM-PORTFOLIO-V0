"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"

interface BlogAuthorProps {
  author: {
    name: string
    avatar: string
    bio: string
  }
}

export default function BlogAuthor({ author }: BlogAuthorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-morph rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center"
    >
      <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
        <Image src={author.avatar || "/placeholder.svg"} alt={author.name} fill className="object-cover" />
      </div>

      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold text-white mb-2">About {author.name}</h3>
        <p className="text-muted-foreground mb-4">{author.bio}</p>

        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
