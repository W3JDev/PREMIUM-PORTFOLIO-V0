"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import BlogCard from "@/components/blog-card"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "Optimizing F&B Operations with Custom Tech Solutions",
    excerpt: "How custom software can streamline restaurant operations and improve customer experience.",
    date: "May 15, 2023",
    readTime: "5 min read",
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
]

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="blog" className="py-24 md:py-32 glass-morph">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
          suppressHydrationWarning
        >
          <motion.span variants={itemVariants} className="section-subtitle block">
            Insights & Perspectives
          </motion.span>
          <motion.h2 variants={itemVariants} className="section-title">
            The Blog
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
            Exploring the intersection of F&B, technology, and innovation through articles, tutorials, and thought
            pieces.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
          suppressHydrationWarning
        >
          <Button
            className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            data-cursor="hover"
          >
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
