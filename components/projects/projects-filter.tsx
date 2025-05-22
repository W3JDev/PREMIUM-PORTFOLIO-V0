"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, SlidersHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const categories = [
  { value: "all", label: "All Categories" },
  { value: "f&b-tech", label: "F&B Technology" },
  { value: "web-dev", label: "Web Development" },
  { value: "blockchain", label: "Blockchain" },
  { value: "ui-ux", label: "UI/UX Design" },
  { value: "automation", label: "Automation" },
]

const sortOptions = [
  { value: "latest", label: "Latest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "a-z", label: "A-Z" },
  { value: "z-a", label: "Z-A" },
  { value: "impact", label: "Highest Impact" },
]

export default function ProjectsFilter() {
  const [category, setCategory] = useState("all")
  const [sortBy, setSortBy] = useState("latest")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")

  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
        <div className="w-full md:w-auto relative">
          <Input
            type="search"
            placeholder="Search projects..."
            className="pl-10 py-6 bg-background/80 backdrop-blur-sm border-primary/20 focus:border-primary w-full md:w-80"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        </div>

        <div className="flex gap-4 w-full md:w-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                <span>Sort By: {sortOptions.find((option) => option.value === sortBy)?.label}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Sort Projects</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
                {sortOptions.map((option) => (
                  <DropdownMenuRadioItem key={option.value} value={option.value}>
                    {option.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <span>Category: {categories.find((cat) => cat.value === category)?.label}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={category} onValueChange={setCategory}>
                {categories.map((cat) => (
                  <DropdownMenuRadioItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((cat) => (
          <motion.button
            key={cat.value}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveFilter(cat.value)}
            className={cn(
              "px-4 py-2 rounded-full text-sm transition-colors relative",
              activeFilter === cat.value ? "text-primary-foreground" : "text-muted-foreground hover:text-white",
            )}
            suppressHydrationWarning
          >
            {activeFilter === cat.value && (
              <motion.div
                layoutId="activeFilterBg"
                className="absolute inset-0 bg-primary rounded-full"
                initial={false}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{cat.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
