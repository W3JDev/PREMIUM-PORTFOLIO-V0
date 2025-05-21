import { Suspense } from "react"
import BlogHeader from "@/components/blog/blog-header"
import BlogGrid from "@/components/blog/blog-grid"
import BlogSidebar from "@/components/blog/blog-sidebar"
import BlogCategories from "@/components/blog/blog-categories"
import { Skeleton } from "@/components/ui/skeleton"

export default function BlogPage() {
  return (
    <main className="pt-24 pb-16">
      <BlogHeader />

      <div className="container mx-auto px-6 mt-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-3/4">
            <BlogCategories />

            <Suspense fallback={<BlogLoadingSkeleton />}>
              <BlogGrid />
            </Suspense>
          </div>

          <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </main>
  )
}

function BlogLoadingSkeleton() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="glass-morph rounded-lg overflow-hidden">
          <Skeleton className="h-48 w-full" />
          <div className="p-6">
            <Skeleton className="h-6 w-3/4 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6 mb-6" />
            <div className="flex justify-between">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-3 w-16" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
