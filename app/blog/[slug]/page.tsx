import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import BlogAuthor from "@/components/blog/blog-author"
import RelatedPosts from "@/components/blog/related-posts"
import BlogComments from "@/components/blog/blog-comments"
import { Skeleton } from "@/components/ui/skeleton"

// This would normally come from a CMS or database
const getBlogPost = (slug: string) => {
  return {
    title: "Optimizing F&B Operations with Custom Tech Solutions",
    excerpt: "How custom software can streamline restaurant operations and improve customer experience.",
    content: `
      <p class="lead">In today's competitive F&B landscape, operational efficiency is the difference between thriving and merely surviving. This article explores how custom technology solutions can transform restaurant operations.</p>
      
      <h2>The Challenge of Modern F&B Operations</h2>
      <p>Restaurant and food service businesses face unique challenges: high staff turnover, thin profit margins, inventory management complexities, and ever-increasing customer expectations. Off-the-shelf software often fails to address these specific pain points, leading to inefficiencies and lost revenue.</p>
      
      <p>Consider these common operational challenges:</p>
      <ul>
        <li>Manual inventory tracking leading to waste and overordering</li>
        <li>Inefficient staff scheduling resulting in either understaffing or labor cost overruns</li>
        <li>Disconnected systems requiring duplicate data entry</li>
        <li>Limited visibility into real-time business performance</li>
      </ul>
      
      <h2>Custom Solutions for Specific Problems</h2>
      <p>Custom technology solutions can address these challenges by creating systems tailored to your specific operational workflow. For example, the EZX Attendance & Payroll System I developed reduced HR administrative work by 40 hours per month and cut payroll processing time by 97% for a restaurant with 50+ employees.</p>
      
      <p>Key benefits of custom F&B technology include:</p>
      <ol>
        <li><strong>Integration capabilities</strong> - Connect your POS, inventory, scheduling, and accounting systems</li>
        <li><strong>Workflow optimization</strong> - Design processes that match how your team actually works</li>
        <li><strong>Scalability</strong> - Grow your technology alongside your business</li>
        <li><strong>Competitive advantage</strong> - Create unique customer experiences your competitors can't easily replicate</li>
      </ol>
      
      <h2>Implementation Approach</h2>
      <p>Successful implementation of custom F&B technology requires a methodical approach:</p>
      
      <h3>1. Operational Assessment</h3>
      <p>Begin with a thorough analysis of current workflows, pain points, and inefficiencies. Involve staff at all levels to understand real-world challenges.</p>
      
      <h3>2. Solution Design</h3>
      <p>Develop a solution that addresses specific operational challenges while considering the unique aspects of your business model and brand experience.</p>
      
      <h3>3. Iterative Development</h3>
      <p>Build the solution in phases, gathering feedback from actual users throughout the process to ensure it meets real-world needs.</p>
      
      <h3>4. Training & Integration</h3>
      <p>Implement comprehensive training programs and ensure seamless integration with existing systems.</p>
      
      <h3>5. Continuous Improvement</h3>
      <p>Establish metrics to measure success and continuously refine the solution based on performance data and user feedback.</p>
      
      <h2>Case Study: EZX System Implementation</h2>
      <p>When implementing the EZX system at Table & Apron, we faced initial resistance to change from long-time staff members. By involving these team members in the design process and demonstrating early wins (like eliminating the need for manual timesheet calculations), we gained buy-in across the organization.</p>
      
      <p>The results were transformative:</p>
      <ul>
        <li>Payroll processing time reduced from 2 days to 1 hour</li>
        <li>Scheduling conflicts reduced by 80%</li>
        <li>Labor cost as percentage of revenue optimized by 4%</li>
        <li>Manager time spent on administrative tasks reduced by 15 hours per week</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>You don't need to implement a comprehensive system all at once. Start with addressing your most painful operational challenge, then expand as you see results. The key is to begin with a clear understanding of the specific problem you're trying to solve and how technology can address it.</p>
      
      <p>Whether you're looking to optimize inventory management, streamline staff scheduling, or create a unique customer experience, custom technology solutions can provide the competitive edge your F&B business needs in today's challenging market.</p>
    `,
    date: "May 15, 2023",
    readTime: "8 min read",
    author: {
      name: "MNJ",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "F&B Innovator & Full-Stack Developer with a passion for solving operational challenges through technology.",
    },
    image: "/placeholder.svg?height=600&width=1200",
    category: "F&B Tech",
    tags: ["Operations", "Efficiency", "Custom Software", "Restaurant Tech"],
    slug: "optimizing-fb-operations",
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all articles
        </Link>

        <div className="relative h-[40vh] md:h-[60vh] rounded-xl overflow-hidden mb-8">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/20 mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <article className="w-full lg:w-3/4">
            <div
              className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-headings:font-playfair prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-white prose-li:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex justify-between items-center">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </div>
            </div>

            <hr className="my-12 border-muted" />

            <Suspense fallback={<Skeleton className="h-40 w-full" />}>
              <BlogAuthor author={post.author} />
            </Suspense>

            <hr className="my-12 border-muted" />

            <Suspense fallback={<Skeleton className="h-60 w-full" />}>
              <RelatedPosts currentSlug={params.slug} />
            </Suspense>

            <hr className="my-12 border-muted" />

            <Suspense fallback={<Skeleton className="h-80 w-full" />}>
              <BlogComments />
            </Suspense>
          </article>

          <aside className="w-full lg:w-1/4">
            <div className="sticky top-24">
              <div className="glass-morph rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Table of Contents</h3>
                <nav className="space-y-2 text-sm">
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                    The Challenge of Modern F&B Operations
                  </a>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                    Custom Solutions for Specific Problems
                  </a>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                    Implementation Approach
                  </a>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors pl-4">
                    1. Operational Assessment
                  </a>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors pl-4">
                    2. Solution Design
                  </a>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors pl-4">
                    3. Iterative Development
                  </a>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors pl-4">
                    4. Training & Integration
                  </a>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors pl-4">
                    5. Continuous Improvement
                  </a>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                    Case Study: EZX System Implementation
                  </a>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                    Getting Started
                  </a>
                </nav>
              </div>

              <div className="glass-morph rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Subscribe to get notified about new articles and insights.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 bg-muted border border-muted rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
