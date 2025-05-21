export interface ProjectSummary {
  title: string
  description: string
  coverImage: string
  category: string
  slug: string
  impact?: string
  technologies: { name: string; icon: string }[]
}

export function getProjects(): ProjectSummary[] {
  return [
    {
      title: "EZX Attendance & Payroll System",
      description:
        "A comprehensive solution that revolutionized staff management and payroll processing for a growing restaurant, reducing administrative overhead by 97%.",
      coverImage: "/placeholder.svg?height=600&width=800",
      category: "F&B Technology",
      slug: "ezx-attendance-system",
      impact: "Impact: Reduced HR admin by 40hrs/month, cut payroll processing by 97%",
      technologies: [
        { name: "Google Apps Script", icon: "Code" },
        { name: "JavaScript", icon: "Code" },
        { name: "Google Sheets", icon: "Database" },
        { name: "HTML/CSS", icon: "Layout" },
        { name: "Google Forms", icon: "FileText" },
        { name: "Google Data Studio", icon: "BarChart" },
      ],
    },
    {
      title: "AI Waiter & Menu Assistant",
      description:
        "An AI-powered assistant that provides personalized menu recommendations and streamlines the ordering process, enhancing customer experience and increasing average order value.",
      coverImage: "/placeholder.svg?height=600&width=800",
      category: "F&B Technology",
      slug: "ai-waiter-assistant",
      impact: "Impact: Increased avg. order value by 35%, reduced order times by 30%",
      technologies: [
        { name: "Python", icon: "Code" },
        { name: "NLP", icon: "Cpu" },
        { name: "React Native", icon: "Layout" },
        { name: "Cloud AI", icon: "Cloud" },
        { name: "Firebase", icon: "Database" },
      ],
    },
    {
      title: "Junior Coin (JNR)",
      description:
        "A community-focused token on the Solana blockchain that explores decentralized engagement models and innovative tokenomics for small-scale ecosystems.",
      coverImage: "/placeholder.svg?height=600&width=800",
      category: "Blockchain",
      slug: "junior-coin",
      impact: "Impact: Built community of 500+ members, facilitated 3,500+ transactions",
      technologies: [
        { name: "Solana", icon: "Code" },
        { name: "Rust", icon: "Code" },
        { name: "Smart Contracts", icon: "FileText" },
        { name: "Web3.js", icon: "Code" },
        { name: "Community Building", icon: "Users" },
      ],
    },
    {
      title: "W3J Protocol & Training Docs",
      description:
        "Comprehensive technical documentation and training materials that simplified complex blockchain concepts, improving onboarding efficiency and user understanding.",
      coverImage: "/placeholder.svg?height=600&width=800",
      category: "Technical Writing",
      slug: "w3j-protocol-docs",
      impact: "Impact: Reduced onboarding time by 40%, increased content engagement by 25%",
      technologies: [
        { name: "Technical Writing", icon: "FileText" },
        { name: "Content Strategy", icon: "PenTool" },
        { name: "Information Architecture", icon: "Layers" },
        { name: "SEO", icon: "Search" },
        { name: "User Education", icon: "Users" },
      ],
    },
    {
      title: "Restaurant Inventory Management System",
      description:
        "An automated inventory tracking and ordering system that minimizes waste, optimizes stock levels, and streamlines supplier relationships for food service businesses.",
      coverImage: "/placeholder.svg?height=600&width=800",
      category: "F&B Technology",
      slug: "restaurant-inventory-system",
      impact: "Impact: Reduced food waste by 32%, lowered inventory costs by 18%",
      technologies: [
        { name: "Node.js", icon: "Code" },
        { name: "Express", icon: "Server" },
        { name: "MongoDB", icon: "Database" },
        { name: "React", icon: "Layout" },
        { name: "Data Analytics", icon: "BarChart" },
      ],
    },
    {
      title: "Digital Menu Optimization Platform",
      description:
        "A data-driven platform that analyzes customer ordering patterns and optimizes digital menu layouts to increase sales of high-margin items and enhance the overall customer experience.",
      coverImage: "/placeholder.svg?height=600&width=800",
      category: "UI/UX Design",
      slug: "digital-menu-optimization",
      impact: "Impact: Increased high-margin item sales by 28%, improved user engagement by 45%",
      technologies: [
        { name: "UX Research", icon: "Search" },
        { name: "UI Design", icon: "PenTool" },
        { name: "A/B Testing", icon: "Layers" },
        { name: "Data Visualization", icon: "BarChart" },
        { name: "Behavioral Analytics", icon: "Users" },
      ],
    },
    {
      title: "F&B Staff Training Platform",
      description:
        "An interactive learning management system specifically designed for restaurant staff training, featuring microlearning modules, skill assessments, and performance tracking.",
      coverImage: "/placeholder.svg?height=600&width=800",
      category: "Education Technology",
      slug: "fb-training-platform",
      impact: "Impact: Reduced training time by 35%, improved staff retention by 22%",
      technologies: [
        { name: "Next.js", icon: "Code" },
        { name: "Tailwind CSS", icon: "Layout" },
        { name: "PostgreSQL", icon: "Database" },
        { name: "GraphQL", icon: "Code" },
        { name: "AWS", icon: "Server" },
      ],
    },
    {
      title: "Smart Restaurant Analytics Dashboard",
      description:
        "A comprehensive business intelligence tool that integrates data from POS, reservation systems, and customer feedback to provide actionable insights for restaurant management.",
      coverImage: "/placeholder.svg?height=600&width=800",
      category: "Data Analytics",
      slug: "restaurant-analytics-dashboard",
      impact: "Impact: Increased operational efficiency by 25%, improved customer satisfaction by 18%",
      technologies: [
        { name: "Python", icon: "Code" },
        { name: "D3.js", icon: "BarChart" },
        { name: "Machine Learning", icon: "Cpu" },
        { name: "API Integration", icon: "Code" },
        { name: "Data Modeling", icon: "Database" },
      ],
    },
    {
      title: "Blockchain-Based Loyalty Program",
      description:
        "A tokenized loyalty system that uses blockchain technology to create transparent, transferable, and fraud-resistant customer rewards for restaurant chains.",
      coverImage: "/placeholder.svg?height=600&width=800",
      category: "Blockchain",
      slug: "blockchain-loyalty-program",
      impact: "Impact: Increased customer retention by 40%, boosted repeat visits by 35%",
      technologies: [
        { name: "Ethereum", icon: "Code" },
        { name: "Solidity", icon: "Code" },
        { name: "Smart Contracts", icon: "FileText" },
        { name: "React", icon: "Layout" },
        { name: "Web3.js", icon: "Code" },
      ],
    },
  ]
}
