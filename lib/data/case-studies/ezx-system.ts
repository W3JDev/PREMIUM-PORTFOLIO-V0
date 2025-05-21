import type { CaseStudyData } from "@/components/case-studies/case-study-template"

export const ezxSystemCaseStudy: CaseStudyData = {
  title: "EZX Attendance & Payroll System",
  subtitle: "Transforming F&B Operations Through Custom Technology",
  description:
    "A comprehensive solution that revolutionized staff management and payroll processing for a growing restaurant, reducing administrative overhead by 97%.",
  coverImage: "/placeholder.svg?height=600&width=1200",
  client: "Table & Apron",
  timeline: "2020 - 2022",
  role: "Full-Stack Developer & System Architect",
  team: ["Lead Developer (MNJ)", "Restaurant Manager (Collaborator)", "HR Specialist (Advisor)"],
  tags: ["F&B Tech", "Automation", "Google Apps Script", "Operational Efficiency"],
  category: "F&B Technology",
  overview: {
    challenge:
      "Manual attendance tracking and complex payroll calculations were consuming 40+ hours of management time monthly and causing frequent errors.",
    approach:
      "Developed a custom solution using Google Apps Script and Sheets to automate attendance tracking, payroll calculations, and reporting.",
    outcome:
      "Reduced payroll processing time by 97%, eliminated calculation errors, and provided valuable operational insights.",
  },
  sections: [
    {
      title: "The Challenge",
      content: `
        <p>Table & Apron, a growing restaurant with 50+ employees, faced significant operational challenges:</p>
        
        <ul>
          <li><strong>Manual Attendance Tracking:</strong> Staff attendance was recorded on paper timesheets, leading to frequent errors, disputes, and time-consuming verification processes.</li>
          <li><strong>Complex Payroll Calculations:</strong> Different pay rates, overtime rules, and service charge distributions created a payroll nightmare that took managers 2+ days per month to process.</li>
          <li><strong>Scheduling Inefficiencies:</strong> Without visibility into historical attendance patterns and labor costs, managers struggled to optimize staffing levels.</li>
          <li><strong>Limited Data Insights:</strong> The business lacked actionable data on labor costs, attendance patterns, and operational efficiency.</li>
        </ul>
        
        <p>These challenges were not only consuming valuable management time but also affecting staff morale due to occasional payroll errors and scheduling conflicts.</p>
      `,
      imageUrl: "/placeholder.svg?height=600&width=800",
      imagePosition: "right",
      imageCaption: "Previous manual attendance tracking system",
    },
    {
      title: "The Approach",
      content: `
        <p>I approached this challenge with a systematic methodology:</p>
        
        <ol>
          <li><strong>Comprehensive Needs Analysis:</strong> Conducted in-depth interviews with staff at all levels to understand pain points and requirements.</li>
          <li><strong>Technology Selection:</strong> Chose Google Apps Script and Google Sheets as the technology stack due to:
            <ul>
              <li>Low implementation cost (critical for a small business)</li>
              <li>Familiar interface requiring minimal training</li>
              <li>Robust cloud infrastructure with excellent uptime</li>
              <li>Powerful automation capabilities</li>
            </ul>
          </li>
          <li><strong>Iterative Development:</strong> Built the system in phases, starting with core attendance tracking, then adding payroll processing, and finally implementing reporting and analytics.</li>
          <li><strong>User-Centered Design:</strong> Created intuitive interfaces for different user roles (staff, managers, payroll administrators) with appropriate access controls.</li>
          <li><strong>Continuous Feedback Loop:</strong> Implemented regular check-ins with users to gather feedback and make improvements.</li>
        </ol>
      `,
      imageUrl: "/placeholder.svg?height=600&width=800",
      imagePosition: "left",
      imageCaption: "System architecture diagram",
    },
    {
      title: "The Solution",
      content: `
        <p>The EZX Attendance & Payroll System delivered a comprehensive solution with several integrated components:</p>
        
        <h3>1. Digital Attendance Tracking</h3>
        <p>Replaced paper timesheets with a digital check-in/out system accessible via tablets at the restaurant entrance. The system:</p>
        <ul>
          <li>Automatically calculated hours worked with built-in validation</li>
          <li>Flagged anomalies (missed check-outs, unusual hours)</li>
          <li>Provided real-time attendance dashboards for managers</li>
        </ul>
        
        <h3>2. Automated Payroll Processing</h3>
        <p>Developed an automated payroll calculation engine that:</p>
        <ul>
          <li>Applied appropriate pay rates based on role and shift type</li>
          <li>Calculated overtime according to labor regulations</li>
          <li>Distributed service charges based on hours worked and position</li>
          <li>Generated payroll reports and payment instructions</li>
        </ul>
        
        <h3>3. Smart Scheduling Tools</h3>
        <p>Created scheduling tools that:</p>
        <ul>
          <li>Visualized historical staffing patterns against sales data</li>
          <li>Highlighted potential understaffing or overstaffing</li>
          <li>Tracked time-off requests and availability</li>
        </ul>
        
        <h3>4. Management Analytics</h3>
        <p>Implemented dashboards providing insights on:</p>
        <ul>
          <li>Labor cost as percentage of revenue</li>
          <li>Attendance patterns and trends</li>
          <li>Staff productivity metrics</li>
          <li>Projected labor costs based on schedules</li>
        </ul>
      `,
      imageUrl: "/placeholder.svg?height=600&width=800",
      imagePosition: "full",
      imageCaption: "EZX System dashboard interface",
    },
    {
      title: "The Results",
      content: `
        <p>The implementation of the EZX System delivered transformative results:</p>
        
        <h3>Quantitative Impacts:</h3>
        <ul>
          <li><strong>97% reduction in payroll processing time</strong> (from 2 days to 1 hour per month)</li>
          <li><strong>40 hours/month of HR administrative work eliminated</strong></li>
          <li><strong>80% reduction in scheduling conflicts</strong></li>
          <li><strong>4% optimization in labor cost as percentage of revenue</strong></li>
          <li><strong>100% elimination of payroll calculation errors</strong></li>
          <li><strong>15 hours/week of manager time redirected</strong> from administrative tasks to customer experience and staff development</li>
        </ul>
        
        <h3>Qualitative Improvements:</h3>
        <ul>
          <li><strong>Enhanced staff satisfaction</strong> due to transparent and accurate payroll</li>
          <li><strong>Improved operational visibility</strong> for business owners</li>
          <li><strong>Better work-life balance for managers</strong> who no longer needed to spend weekends on administrative tasks</li>
          <li><strong>Data-driven decision making</strong> around staffing and scheduling</li>
        </ul>
        
        <p>The system continues to evolve with new features and optimizations based on ongoing user feedback and changing business needs.</p>
      `,
    },
  ],
  process: {
    title: "Development Process",
    steps: [
      {
        number: 1,
        title: "Discovery & Research",
        description:
          "Conducted interviews with staff at all levels to understand pain points and requirements. Analyzed existing workflows and identified bottlenecks.",
        icon: "Search",
      },
      {
        number: 2,
        title: "Concept & Planning",
        description:
          "Developed system architecture and data flow diagrams. Created wireframes for user interfaces and established project timeline.",
        icon: "Lightbulb",
      },
      {
        number: 3,
        title: "Core Development",
        description:
          "Built the foundational system components including database structure, authentication, and core business logic.",
        icon: "Code",
      },
      {
        number: 4,
        title: "User Interface Design",
        description:
          "Designed intuitive interfaces for different user roles with appropriate access controls and visual feedback.",
        icon: "PenTool",
      },
      {
        number: 5,
        title: "Testing & Iteration",
        description:
          "Conducted extensive testing with actual users, gathered feedback, and made iterative improvements.",
        icon: "Layers",
      },
      {
        number: 6,
        title: "Deployment & Training",
        description:
          "Implemented the system with comprehensive training sessions for all staff members and created documentation.",
        icon: "Rocket",
      },
    ],
  },
  gallery: {
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    caption: "EZX System interfaces and implementation at Table & Apron",
  },
  metrics: {
    title: "Impact Metrics",
    items: [
      {
        label: "Payroll Processing Time",
        before: "48 hours",
        after: "1 hour",
        improvement: "97%",
      },
      {
        label: "HR Admin Work",
        before: "40 hrs/month",
        after: "2 hrs/month",
        improvement: "95%",
      },
      {
        label: "Scheduling Conflicts",
        before: "15/month",
        after: "3/month",
        improvement: "80%",
      },
      {
        label: "Labor Cost % of Revenue",
        before: "32%",
        after: "28%",
        improvement: "4%",
      },
    ],
  },
  testimonial: {
    quote:
      "The EZX system completely transformed our operations. What used to take days now takes minutes, and the insights we've gained have helped us make smarter business decisions. It's rare to find someone who understands both the technical aspects and the practical realities of restaurant operations.",
    author: "Marcus Lee",
    role: "Operations Director",
    company: "Table & Apron",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  technologies: [
    { name: "Google Apps Script", icon: "Code" },
    { name: "JavaScript", icon: "Code" },
    { name: "HTML/CSS", icon: "Layout" },
    { name: "Google Sheets", icon: "Database" },
    { name: "Google Forms", icon: "FileText" },
    { name: "Google Data Studio", icon: "BarChart" },
  ],
  links: {
    github: "https://github.com/yourusername/ezx-system",
    live: "https://example.com/ezx-demo",
  },
  nextProject: {
    title: "AI Waiter & Menu Assistant",
    subtitle: "Revolutionizing customer service with AI-powered recommendations",
    slug: "ai-waiter-assistant",
    image: "/placeholder.svg?height=600&width=1200",
  },
}
