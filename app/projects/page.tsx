import { Suspense } from "react"
import ProjectsHeader from "@/components/projects/projects-header"
import ProjectsGrid from "@/components/projects/projects-grid"
import ProjectsFilter from "@/components/projects/projects-filter"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProjectsPage() {
  return (
    <main className="pt-24 pb-16">
      <ProjectsHeader />

      <div className="container mx-auto px-6 mt-12">
        <Suspense fallback={<Skeleton className="h-12 w-full max-w-md mx-auto mb-8" />}>
          <ProjectsFilter />
        </Suspense>

        <Suspense fallback={<ProjectsLoadingSkeleton />}>
          <ProjectsGrid />
        </Suspense>
      </div>
    </main>
  )
}

function ProjectsLoadingSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
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
