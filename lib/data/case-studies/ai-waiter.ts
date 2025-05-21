import type { CaseStudyData } from "@/components/case-studies/case-study-template"

export const aiWaiterCaseStudy: CaseStudyData = {
  title: "AI Waiter & Menu Assistant",
  subtitle: "Revolutionizing Restaurant Customer Experience Through Artificial Intelligence",
  description:
    "An AI-powered assistant that provides personalized menu recommendations and streamlines the ordering process, enhancing customer experience and increasing average order value.",
  coverImage: "/placeholder.svg?height=600&width=1200",
  client: "Fusion Bistro Group",
  timeline: "2022 - 2023",
  role: "AI Solution Architect & Lead Developer",
  team: ["AI Developer (MNJ)", "UX Designer", "Restaurant Consultant", "Mobile Developer"],
  tags: ["F&B Tech", "Artificial Intelligence", "NLP", "Mobile App", "Customer Experience"],
  category: "F&B Technology",
  overview: {
    challenge:
      "Restaurants were struggling with inconsistent service quality, missed upselling opportunities, and inefficient ordering processes that impacted customer satisfaction and revenue.",
    approach:
      "Developed an AI-powered mobile solution that understands customer preferences, provides personalized recommendations, and streamlines the ordering process.",
    outcome:
      "Increased average order value by 35%, reduced order times by 30%, and significantly improved customer satisfaction scores.",
  },
  sections: [
    {
      title: "The Challenge",
      content: `
        <p>Fusion Bistro Group, a collection of mid to high-end restaurants, faced several critical challenges in their operations:</p>
        
        <ul>
          <li><strong>Inconsistent Service Quality:</strong> With varying levels of staff experience and high turnover, menu knowledge and service quality were inconsistent across locations.</li>
          <li><strong>Missed Upselling Opportunities:</strong> Staff often lacked the knowledge or confidence to make appropriate pairing and upselling suggestions.</li>
          <li><strong>Inefficient Ordering Process:</strong> Traditional ordering methods were time-consuming and error-prone, leading to longer wait times and occasional mistakes.</li>
          <li><strong>Limited Customer Insights:</strong> The business had minimal data on customer preferences and ordering patterns to inform menu development and marketing strategies.</li>
          <li><strong>Dietary Accommodation Challenges:</strong> Staff struggled to confidently answer questions about allergens and dietary restrictions, creating potential safety concerns.</li>
        </ul>
        
        <p>These challenges were directly impacting customer satisfaction, operational efficiency, and ultimately, the group's revenue and growth potential.</p>
      `,
      imageUrl: "/placeholder.svg?height=600&width=800",
      imagePosition: "right",
      imageCaption: "Traditional menu and ordering process challenges",
    },
    {
      title: "The Approach",
      content: `
        <p>I led the development of an innovative solution with a customer-centric approach:</p>
        
        <ol>
          <li><strong>Comprehensive Menu Analysis:</strong> Conducted detailed analysis of menu items, ingredients, flavor profiles, and historical sales data.</li>
          <li><strong>Customer Research:</strong> Performed extensive customer interviews and observational studies to understand decision-making processes when ordering.</li>
          <li><strong>AI Model Development:</strong> Created and trained natural language processing (NLP) models to:
            <ul>
              <li>Understand customer preferences and dietary requirements</li>
              <li>Generate contextually appropriate recommendations</li>
              <li>Learn from customer interactions and feedback</li>
            </ul>
          </li>
          <li><strong>Mobile Application Design:</strong> Developed an intuitive mobile interface that:
            <ul>
              <li>Presents menu items with rich visuals and descriptions</li>
              <li>Facilitates natural language interaction with the AI assistant</li>
              <li>Streamlines the ordering and payment process</li>
            </ul>
          </li>
          <li><strong>Integration Strategy:</strong> Created seamless integration with existing POS systems and kitchen display systems to ensure operational efficiency.</li>
        </ol>
      `,
      imageUrl: "/placeholder.svg?height=600&width=800",
      imagePosition: "left",
      imageCaption: "AI Waiter system architecture and data flow",
    },
    {
      title: "The Solution",
      content: `
        <p>The AI Waiter & Menu Assistant delivered a comprehensive solution with several key components:</p>
        
        <h3>1. Intelligent Menu Interface</h3>
        <p>Developed a visually rich digital menu that:</p>
        <ul>
          <li>Displays high-quality images and detailed descriptions of each dish</li>
          <li>Highlights ingredient information and nutritional data</li>
          <li>Allows filtering based on dietary preferences and restrictions</li>
          <li>Updates in real-time based on item availability</li>
        </ul>
        
        <h3>2. AI Recommendation Engine</h3>
        <p>Created a sophisticated recommendation system that:</p>
        <ul>
          <li>Suggests items based on customer preferences and ordering history</li>
          <li>Recommends appropriate wine and beverage pairings</li>
          <li>Identifies complementary side dishes and appetizers</li>
          <li>Adapts recommendations based on time of day, weather, and seasonal factors</li>
        </ul>
        
        <h3>3. Natural Language Interaction</h3>
        <p>Implemented conversational AI capabilities that:</p>
        <ul>
          <li>Answer detailed questions about menu items and ingredients</li>
          <li>Provide information about preparation methods and flavor profiles</li>
          <li>Offer suggestions based on customer preferences expressed in natural language</li>
          <li>Handle special requests and modifications</li>
        </ul>
        
        <h3>4. Streamlined Ordering System</h3>
        <p>Developed an efficient ordering process that:</p>
        <ul>
          <li>Allows customers to place orders directly through the application</li>
          <li>Sends orders instantly to the kitchen display system</li>
          <li>Enables easy modification of orders before submission</li>
          <li>Facilitates seamless payment processing</li>
        </ul>
        
        <h3>5. Analytics Dashboard</h3>
        <p>Created a comprehensive analytics system that provides:</p>
        <ul>
          <li>Insights into customer preferences and ordering patterns</li>
          <li>Data on most frequently asked questions and concerns</li>
          <li>Performance metrics for menu items and recommendations</li>
          <li>Trends analysis to inform menu development and marketing</li>
        </ul>
      `,
      imageUrl: "/placeholder.svg?height=600&width=800",
      imagePosition: "full",
      imageCaption: "AI Waiter mobile application interface",
    },
    {
      title: "Technical Implementation",
      content: `
        <p>The AI Waiter & Menu Assistant was built using a sophisticated technology stack:</p>
        
        <h3>Backend Infrastructure</h3>
        <ul>
          <li><strong>Python-based AI Engine:</strong> Developed using TensorFlow and PyTorch for natural language processing and recommendation algorithms</li>
          <li><strong>Cloud-based Architecture:</strong> Deployed on AWS with auto-scaling capabilities to handle varying loads</li>
          <li><strong>RESTful API Layer:</strong> Built with FastAPI to facilitate communication between the mobile app and backend services</li>
          <li><strong>PostgreSQL Database:</strong> Stores menu data, customer preferences, and interaction history</li>
        </ul>
        
        <h3>Mobile Application</h3>
        <ul>
          <li><strong>React Native Framework:</strong> Enables cross-platform functionality on iOS and Android devices</li>
          <li><strong>Custom UI Components:</strong> Designed for intuitive interaction and visual appeal</li>
          <li><strong>Offline Capabilities:</strong> Core menu functionality works even with limited connectivity</li>
          <li><strong>Push Notification System:</strong> Alerts customers about order status and special offers</li>
        </ul>
        
        <h3>Integration Layer</h3>
        <ul>
          <li><strong>POS System Connectors:</strong> Custom adapters for popular restaurant POS systems</li>
          <li><strong>Kitchen Display Integration:</strong> Direct communication with kitchen management systems</li>
          <li><strong>Payment Gateway:</strong> Secure processing of various payment methods</li>
          <li><strong>Inventory Management:</strong> Real-time updates to reflect item availability</li>
        </ul>
        
        <h3>Data Security & Privacy</h3>
        <ul>
          <li><strong>End-to-end Encryption:</strong> Secures all customer data and transactions</li>
          <li><strong>GDPR Compliance:</strong> Implements data protection measures according to regulations</li>
          <li><strong>Anonymized Analytics:</strong> Ensures customer privacy while providing valuable insights</li>
        </ul>
      `,
    },
    {
      title: "The Results",
      content: `
        <p>The implementation of the AI Waiter & Menu Assistant delivered exceptional results across multiple dimensions:</p>
        
        <h3>Business Impact:</h3>
        <ul>
          <li><strong>35% increase in average order value</strong> through effective upselling and recommendations</li>
          <li><strong>30% reduction in order processing time</strong> from customer decision to kitchen receipt</li>
          <li><strong>22% increase in dessert and beverage attachment rate</strong> through timely suggestions</li>
          <li><strong>15% overall revenue growth</strong> across participating restaurant locations</li>
          <li><strong>28% reduction in order errors</strong> due to digital order placement</li>
        </ul>
        
        <h3>Customer Experience Improvements:</h3>
        <ul>
          <li><strong>92% customer satisfaction rating</strong> with the AI assistant's recommendations</li>
          <li><strong>4.8/5 average app rating</strong> across iOS and Android platforms</li>
          <li><strong>87% of customers</strong> reported feeling more confident in their ordering decisions</li>
          <li><strong>94% of customers with dietary restrictions</strong> found the system helpful in identifying suitable options</li>
        </ul>
        
        <h3>Operational Enhancements:</h3>
        <ul>
          <li><strong>Reduced training requirements</strong> for new staff members</li>
          <li><strong>More efficient table turnover</strong> due to streamlined ordering and payment processes</li>
          <li><strong>Valuable data collection</strong> on customer preferences and behavior</li>
          <li><strong>Improved inventory management</strong> through better demand forecasting</li>
        </ul>
        
        <p>The system continues to evolve with regular updates based on customer feedback, new AI capabilities, and changing restaurant needs.</p>
      `,
    },
  ],
  process: {
    title: "Development Process",
    steps: [
      {
        number: 1,
        title: "Research & Discovery",
        description:
          "Conducted extensive research on restaurant operations, customer behavior, and existing AI solutions in the F&B space.",
        icon: "Search",
      },
      {
        number: 2,
        title: "Data Collection & Analysis",
        description:
          "Gathered and analyzed menu data, customer preferences, and ordering patterns to inform the AI model development.",
        icon: "Database",
      },
      {
        number: 3,
        title: "AI Model Development",
        description:
          "Created and trained natural language processing and recommendation models using machine learning techniques.",
        icon: "Cpu",
      },
      {
        number: 4,
        title: "UX/UI Design",
        description:
          "Designed intuitive user interfaces with a focus on accessibility, visual appeal, and ease of navigation.",
        icon: "PenTool",
      },
      {
        number: 5,
        title: "Mobile App Development",
        description:
          "Built cross-platform mobile application with React Native, implementing the designed user interfaces and AI integration.",
        icon: "Code",
      },
      {
        number: 6,
        title: "Backend Development",
        description:
          "Developed cloud-based backend services to handle data processing, AI operations, and third-party integrations.",
        icon: "Server",
      },
      {
        number: 7,
        title: "Testing & Refinement",
        description:
          "Conducted extensive testing with actual users in restaurant environments, gathering feedback for iterative improvements.",
        icon: "Layers",
      },
      {
        number: 8,
        title: "Deployment & Training",
        description:
          "Implemented the system across multiple restaurant locations with comprehensive staff training and support.",
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
    caption: "AI Waiter application interfaces and implementation at Fusion Bistro restaurants",
  },
  metrics: {
    title: "Impact Metrics",
    items: [
      {
        label: "Average Order Value",
        before: "$42",
        after: "$57",
        improvement: "+35%",
      },
      {
        label: "Order Processing Time",
        before: "12 min",
        after: "8.5 min",
        improvement: "-30%",
      },
      {
        label: "Dessert & Beverage Sales",
        before: "18%",
        after: "40%",
        improvement: "+22%",
      },
      {
        label: "Customer Satisfaction",
        value: "92%",
        description: "Customers satisfied with AI recommendations",
      },
    ],
  },
  testimonial: {
    quote:
      "The AI Waiter has transformed how we interact with our customers. Not only has it increased our revenue through better upselling, but it's also enhanced the dining experience by providing personalized recommendations that truly delight our guests. The data insights we've gained have been invaluable for menu development and marketing strategies.",
    author: "Sophia Chen",
    role: "Director of Operations",
    company: "Fusion Bistro Group",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  technologies: [
    { name: "Python", icon: "Code" },
    { name: "TensorFlow", icon: "Cpu" },
    { name: "React Native", icon: "Layout" },
    { name: "AWS", icon: "Server" },
    { name: "PostgreSQL", icon: "Database" },
    { name: "FastAPI", icon: "Code" },
  ],
  links: {
    github: "https://github.com/yourusername/ai-waiter",
    live: "https://example.com/ai-waiter-demo",
  },
  nextProject: {
    title: "Junior Coin (JNR)",
    subtitle: "Building community engagement through blockchain technology",
    slug: "junior-coin",
    image: "/placeholder.svg?height=600&width=1200",
  },
}
