"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface RelatedPostsProps {
  currentSlug: string
}

// This would normally come from a CMS or database
const getRelatedPosts = (currentSlug: string) => {
  return [
    {
      title: "The Future of Web3 in Everyday Applications",
      excerpt: "Exploring practical applications of blockchain technology beyond cryptocurrencies.",
      date: "April 22, 2023",
      image: "/placeholder.svg?height=200&width=300",
      category: "Blockchain",
      slug: "future-of-web3",
    },
    {
      title: "Automating Inventory Management for Small Restaurants",
      excerpt: "Cost-effective approaches to reducing waste and optimizing ordering through automation.",
      date: "November 5, 2022",
      image: "/placeholder.svg?height=200&width=300",
      category: "F&B Tech",
      slug: "automating-inventory-management",
    },
    {
      title: "The Psychology of User Experience in Digital Menus",
      excerpt: "Understanding how design choices impact customer ordering behavior and satisfaction.",
      date: "December 12, 2022",
      image: "/placeholder.svg?height=200&width=300",
      category: "UX Design",
      slug: "psychology-digital-menus",
    },
  ].filter((post) => post.slug !== currentSlug)
}

export default function RelatedPosts({ currentSlug }: RelatedPostsProps) {
  const relatedPosts = getRelatedPosts(currentSlug)

  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>

      <div className="grid md:grid-cols-3 gap-6">
        {relatedPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/blog/${post.slug}`} className="block group">
              <div className="relative h-40 rounded-lg overflow-hidden mb-3">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">{post.category}</span>
                </div>
              </div>

              <h4 className="text-base font-semibold text-white group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h4>
              <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
