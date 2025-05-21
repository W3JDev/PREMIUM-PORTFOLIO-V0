import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import CaseStudyTemplate, { type CaseStudyData } from "@/components/case-studies/case-study-template"
import { ezxSystemCaseStudy } from "@/lib/data/case-studies/ezx-system"
import { aiWaiterCaseStudy } from "@/lib/data/case-studies/ai-waiter"
import { juniorCoinCaseStudy } from "@/lib/data/case-studies/junior-coin"

// This would normally come from a CMS or database
const getCaseStudy = (slug: string): CaseStudyData => {
  const caseStudies: Record<string, CaseStudyData> = {
    "ezx-attendance-system": ezxSystemCaseStudy,
    "ai-waiter-assistant": aiWaiterCaseStudy,
    "junior-coin": juniorCoinCaseStudy,
  }

  // Return the requested case study or a default one if not found
  return caseStudies[slug] || ezxSystemCaseStudy
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudy(params.slug)

  return (
    <Suspense fallback={<CaseStudyLoading />}>
      <CaseStudyTemplate data={caseStudy} slug={params.slug} />
    </Suspense>
  )
}

function CaseStudyLoading() {
  return (
    <div className="pt-24 pb-16 container mx-auto px-6">
      <Skeleton className="h-[60vh] w-full rounded-xl mb-12" />
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3">
          <Skeleton className="h-20 w-full mb-12" />
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-40 w-full" />
          </div>
          <div className="space-y-16">
            <div>
              <Skeleton className="h-10 w-1/3 mb-6" />
              <Skeleton className="h-6 w-full mb-4" />
              <Skeleton className="h-6 w-full mb-4" />
              <Skeleton className="h-6 w-full mb-4" />
              <Skeleton className="h-6 w-3/4" />
            </div>
            <div>
              <Skeleton className="h-10 w-1/3 mb-6" />
              <Skeleton className="h-6 w-full mb-4" />
              <Skeleton className="h-6 w-full mb-4" />
              <Skeleton className="h-6 w-full mb-4" />
              <Skeleton className="h-6 w-3/4" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <Skeleton className="h-80 w-full mb-8" />
          <Skeleton className="h-60 w-full" />
        </div>
      </div>
    </div>
  )
}
