import { Suspense } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import CaseStudyHeader from "@/components/case-studies/case-study-header"
import CaseStudyOverview from "@/components/case-studies/case-study-overview"
import CaseStudySection from "@/components/case-studies/case-study-section"
import CaseStudyGallery from "@/components/case-studies/case-study-gallery"
import CaseStudyMetrics from "@/components/case-studies/case-study-metrics"
import CaseStudyProcess from "@/components/case-studies/case-study-process"
import CaseStudyTestimonial from "@/components/case-studies/case-study-testimonial"
import CaseStudySidebar from "@/components/case-studies/case-study-sidebar"
import CaseStudyNextProject from "@/components/case-studies/case-study-next-project"
import CaseStudyCallToAction from "@/components/case-studies/case-study-call-to-action"

export interface CaseStudyData {
  title: string
  subtitle: string
  description: string
  coverImage: string
  client: string
  timeline: string
  role: string
  team?: string[]
  tags: string[]
  category: string
  overview: {
    challenge: string
    approach: string
    outcome: string
  }
  sections: {
    title: string
    content: string
    imageUrl?: string
    imagePosition?: "left" | "right" | "full"
    imageCaption?: string
  }[]
  process: {
    title: string
    steps: {
      number: number
      title: string
      description: string
      icon?: string
    }[]
  }
  gallery?: {
    images: string[]
    caption?: string
  }
  metrics?: {
    title: string
    items: {
      label: string
      before?: string
      after?: string
      improvement?: string
      value?: string
      description?: string
    }[]
  }
  testimonial?: {
    quote: string
    author: string
    role: string
    company: string
    avatar?: string
  }
  technologies?: {
    name: string
    icon: string
  }[]
  links?: {
    github?: string
    live?: string
    case?: string
  }
  nextProject?: {
    title: string
    subtitle: string
    slug: string
    image: string
  }
}

interface CaseStudyTemplateProps {
  data: CaseStudyData
  slug: string
}

export default function CaseStudyTemplate({ data, slug }: CaseStudyTemplateProps) {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <Link href="/projects" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all projects
        </Link>

        <CaseStudyHeader
          title={data.title}
          subtitle={data.subtitle}
          coverImage={data.coverImage}
          category={data.category}
        />

        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <div className="w-full lg:w-2/3">
            <CaseStudyOverview
              description={data.description}
              challenge={data.overview.challenge}
              approach={data.overview.approach}
              outcome={data.overview.outcome}
            />

            <div className="space-y-16">
              {data.sections.map((section, index) => (
                <Suspense key={index} fallback={<Skeleton className="h-60 w-full" />}>
                  <CaseStudySection
                    title={section.title}
                    content={section.content}
                    imageUrl={section.imageUrl}
                    imagePosition={section.imagePosition}
                    imageCaption={section.imageCaption}
                  />
                </Suspense>
              ))}

              {data.process && (
                <Suspense fallback={<Skeleton className="h-80 w-full" />}>
                  <CaseStudyProcess title={data.process.title} steps={data.process.steps} />
                </Suspense>
              )}

              {data.gallery && (
                <Suspense fallback={<Skeleton className="h-80 w-full" />}>
                  <CaseStudyGallery images={data.gallery.images} caption={data.gallery.caption} />
                </Suspense>
              )}

              {data.metrics && (
                <Suspense fallback={<Skeleton className="h-60 w-full" />}>
                  <CaseStudyMetrics title={data.metrics.title} metrics={data.metrics.items} />
                </Suspense>
              )}

              {data.testimonial && (
                <Suspense fallback={<Skeleton className="h-40 w-full" />}>
                  <CaseStudyTestimonial testimonial={data.testimonial} />
                </Suspense>
              )}
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <CaseStudySidebar
              client={data.client}
              timeline={data.timeline}
              role={data.role}
              team={data.team}
              tags={data.tags}
              technologies={data.technologies}
              links={data.links}
            />
          </div>
        </div>

        <hr className="border-muted mb-16" />

        <CaseStudyCallToAction />

        {data.nextProject && (
          <Suspense fallback={<Skeleton className="h-60 w-full" />}>
            <CaseStudyNextProject
              title={data.nextProject.title}
              subtitle={data.nextProject.subtitle}
              slug={data.nextProject.slug}
              image={data.nextProject.image}
            />
          </Suspense>
        )}
      </div>
    </main>
  )
}
