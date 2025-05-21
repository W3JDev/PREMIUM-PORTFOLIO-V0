"use client"

import { motion } from "framer-motion"
import { Tag } from "lucide-react"
import { Button } from "@/components/ui/button"

const popularTags = [
  "F&B Tech",
  "Web Development",
  "Blockchain",
  "UX Design",
  "Career",
  "JavaScript",
  "React",
  "Restaurant Operations",
  "Efficiency",
  "Automation",
]

const popularPosts = [
  {
    title: "Optimizing F&B Operations with Custom Tech Solutions",
    date: "May 15, 2023",
    slug: "optimizing-fb-operations",
  },
  {
    title: "The Future of Web3 in Everyday Applications",
    date: "April 22, 2023",
    slug: "future-of-web3",
  },
  {
    title: "Building Responsive UIs with Modern CSS Techniques",
    date: "March 10, 2023",
    slug: "responsive-ui-modern-css",
  },
]

export default function BlogSidebar() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-morph rounded-lg p-6"
      >
        <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
        <p className="text-sm text-muted-foreground mb-4">Subscribe to get notified about new articles and insights.</p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-2 bg-muted border border-muted rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass-morph rounded-lg p-6"
      >
        <h3 className="text-xl font-bold text-white mb-4">Popular Posts</h3>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <a key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <h4 className="text-sm font-medium text-white group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h4>
              <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass-morph rounded-lg p-6"
      >
        <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <a
              key={tag}
              href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex items-center px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground hover:text-white hover:bg-muted/80 transition-colors"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
