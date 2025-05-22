"use client"

import { useState } from "react"
import BlogCard from "@/components/blog-card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

// This would normally come from a CMS or database
const blogPosts = [
  {
    title: "Optimizing F&B Operations with Custom Tech Solutions",
    excerpt: "How custom software can streamline restaurant operations and improve customer experience.",
    date: "May 15, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600",
    category: "F&B Tech",
    slug: "optimizing-fb-operations",
  },
  {
    title: "The Future of Web3 in Everyday Applications",
    excerpt: "Exploring practical applications of blockchain technology beyond cryptocurrencies.",
    date: "April 22, 2023",
    readTime: "7 min read",
    image: "/placeholder.svg?height=400&width=600",
    category: "Blockchain",
    slug: "future-of-web3",
  },
  {
    title: "Building Responsive UIs with Modern CSS Techniques",
    excerpt: "A deep dive into modern CSS features that make responsive design easier and more powerful.",
    date: "March 10, 2023",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=600",
    category: "Web Development",
    slug: "responsive-ui-modern-css",
  },
  {
    title: "From Service to Code: Transferable Skills from F&B to Tech",
    excerpt: "How the skills developed in hospitality can become valuable assets in a tech career.",
    date: "February 5, 2023",
    readTime: "4 min read",
    image: "/placeholder.svg?height=400&width=600",
    category: "Career",
    slug: "service-to-code-skills",
  },
  {
    title: "Implementing Smart Contracts for Restaurant Loyalty Programs",
    excerpt: "How blockchain technology can revolutionize customer loyalty in the food service industry.",
    date: "January 18, 2023",
    readTime: "9 min read",
    image: "/placeholder.svg?height=400&width=600",
    category: "Blockchain",
    slug: "smart-contracts-loyalty",
  },
  {
    title: "The Psychology of User Experience in Digital Menus",
    excerpt: "Understanding how design choices impact customer ordering behavior and satisfaction.",
    date: "December 12, 2022",
    readTime: "5 min read",
    image: "/placeholder.svg?height=400&width=600",
    category: "UX Design",
    slug: "psychology-digital-menus",
  },
  {
    title: "Automating Inventory Management for Small Restaurants",
    excerpt: "Cost-effective approaches to reducing waste and optimizing ordering through automation.",
    date: "November 5, 2022",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=600",
    category: "F&B Tech",
    slug: "automating-inventory-management",
  },
  {
    title: "Creating Accessible Web Applications: A Practical Guide",
    excerpt: "How to ensure your web applications are usable by everyone, regardless of ability.",
    date: "October 20, 2022",
    readTime: "7 min read",
    image: "/placeholder.svg?height=400&width=600",
    category: "Web Development",
    slug: "accessible-web-applications",
  },
]

export default function BlogGrid() {
  const [visiblePosts, setVisiblePosts] = useState(6)

  const loadMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 3, blogPosts.length))
  }

  return (
    <div className="mt-8">
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.slice(0, visiblePosts).map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            suppressHydrationWarning
          >
            <BlogCard {...post} />
          </motion.div>
        ))}
      </div>

      {visiblePosts < blogPosts.length && (
        <div className="text-center mt-12">
          <Button
            onClick={loadMore}
            className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Load More Articles
          </Button>
        </div>
      )}
    </div>
  )
}
