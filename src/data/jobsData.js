export const platformStatistics = [
  {
    id: "total-jobs",
    label: "Total Jobs",
    value: "45,000+",
    subtext: "Verified active job postings",
    change: "+12% this week"
  },
  {
    id: "registered-companies",
    label: "Registered Companies",
    value: "2,850+",
    subtext: "From startups to Fortune 500",
    change: "+85 new this month"
  },
  {
    id: "active-candidates",
    label: "Active Candidates",
    value: "185,000+",
    subtext: "Top tech talent & graduates",
    change: "Active in 35+ countries"
  },
  {
    id: "successful-matches",
    label: "Successful Matches",
    value: "94,200+",
    subtext: "AI-driven career placements",
    change: "94.8% match satisfaction"
  }
];

export const jobCategories = [
  {
    id: "software-development",
    name: "Software Development",
    iconName: "Code2",
    count: "12,450+ Jobs",
    description: "Full-Stack, Backend, Frontend, and Mobile Engineering roles",
    badge: "High Demand"
  },
  {
    id: "data-science",
    name: "Data Science",
    iconName: "Database",
    count: "8,320+ Jobs",
    description: "Data Analytics, Big Data Engineering & Predictive Modeling",
    badge: "Trending"
  },
  {
    id: "artificial-intelligence",
    name: "Artificial Intelligence",
    iconName: "Brain",
    count: "6,840+ Jobs",
    description: "Machine Learning, LLMs, NLP, Deep Learning & GenAI",
    badge: "Fastest Growing"
  },
  {
    id: "ui-ux-design",
    name: "UI/UX Design",
    iconName: "Palette",
    count: "4,190+ Jobs",
    description: "Product Design, User Experience Research & Design Systems",
    badge: "Creative"
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    iconName: "BarChart3",
    count: "3,750+ Jobs",
    description: "Growth Marketing, Performance Advertising, SEO & Analytics",
    badge: "Popular"
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    iconName: "ShieldCheck",
    count: "3,110+ Jobs",
    description: "Cloud Security, Ethical Hacking, SOC & Threat Intelligence",
    badge: "Critical Need"
  }
];

export const sampleJobsData = [
  {
    id: 1,
    company: "NeuralWave AI",
    logoLetter: "N",
    logoBg: "bg-purple-600",
    title: "Senior AI / ML Research Engineer",
    category: "artificial-intelligence",
    categoryName: "Artificial Intelligence",
    location: "Bangalore, India",
    workplaceType: "Hybrid",
    employmentType: "Full-time",
    salary: "₹26 - 38 LPA",
    matchScore: 98,
    experience: "3-5 Years",
    postedDate: "1 day ago",
    skills: ["PyTorch", "Python", "LLMs", "RAG", "MLOps", "Transformers"],
    description: "Design and implement production-ready LLM fine-tuning pipelines and neural search architectures for enterprise customers.",
    department: "Applied AI Research",
    openPositions: 2
  },
  {
    id: 2,
    company: "CloudScale Systems",
    logoLetter: "C",
    logoBg: "bg-blue-600",
    title: "Lead Full Stack React & Node Developer",
    category: "software-development",
    categoryName: "Software Development",
    location: "Remote, India",
    workplaceType: "Remote",
    employmentType: "Full-time",
    salary: "₹20 - 30 LPA",
    matchScore: 95,
    experience: "3-6 Years",
    postedDate: "2 days ago",
    skills: ["React.js", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "GraphQL"],
    description: "Architect mission-critical SaaS dashboards and scalable microservices powering over 10M daily user transactions.",
    department: "Platform Engineering",
    openPositions: 4
  },
  {
    id: 3,
    company: "Synthex Data Labs",
    logoLetter: "S",
    logoBg: "bg-indigo-600",
    title: "Data Scientist & Analytics Specialist",
    category: "data-science",
    categoryName: "Data Science",
    location: "Hyderabad, India",
    workplaceType: "On-site",
    employmentType: "Full-time",
    salary: "₹22 - 32 LPA",
    matchScore: 93,
    experience: "2-4 Years",
    postedDate: "Just now",
    skills: ["Python", "Pandas", "SQL", "Tableau", "Statistical Modeling", "Snowflake"],
    description: "Build predictive customer churn models, design dynamic A/B test experiments, and derive actionable business intelligence.",
    department: "Data Intelligence",
    openPositions: 1
  },
  {
    id: 4,
    company: "PixelCraft Studios",
    logoLetter: "P",
    logoBg: "bg-violet-600",
    title: "Senior Product & UI/UX Designer",
    category: "ui-ux-design",
    categoryName: "UI/UX Design",
    location: "Mumbai, India",
    workplaceType: "Hybrid",
    employmentType: "Full-time",
    salary: "₹18 - 25 LPA",
    matchScore: 92,
    experience: "3+ Years",
    postedDate: "3 days ago",
    skills: ["Figma", "Design Systems", "User Research", "Wireframing", "Interaction Design"],
    description: "Craft modern, accessible design systems and seamless candidate-job matching interaction experiences across mobile and web.",
    department: "Product & Experience",
    openPositions: 2
  },
  {
    id: 5,
    company: "CyberShield Security",
    logoLetter: "S",
    logoBg: "bg-slate-800",
    title: "Cybersecurity Analyst & Threat Hunter",
    category: "cybersecurity",
    categoryName: "Cybersecurity",
    location: "Pune, India",
    workplaceType: "Remote",
    employmentType: "Full-time",
    salary: "₹19 - 28 LPA",
    matchScore: 91,
    experience: "2-5 Years",
    postedDate: "4 days ago",
    skills: ["SIEM", "Penetration Testing", "SOC", "Network Security", "Cloud Guard", "Incident Response"],
    description: "Monitor zero-day threat vectors, configure real-time SOC alerting systems, and lead vulnerability audits for cloud workloads.",
    department: "SecOps",
    openPositions: 3
  },
  {
    id: 6,
    company: "Vortex Growth Agency",
    logoLetter: "V",
    logoBg: "bg-blue-700",
    title: "Growth & Digital Marketing Lead",
    category: "digital-marketing",
    categoryName: "Digital Marketing",
    location: "Gurugram, India",
    workplaceType: "On-site",
    employmentType: "Full-time",
    salary: "₹15 - 22 LPA",
    matchScore: 89,
    experience: "2-4 Years",
    postedDate: "5 days ago",
    skills: ["SEO/SEM", "Google Analytics 4", "Performance Ads", "Content Strategy", "HubSpot"],
    description: "Scale organic acquisition funnels and drive high-conversion multi-channel digital campaigns for high-growth tech startups.",
    department: "Growth Marketing",
    openPositions: 1
  },
  {
    id: 7,
    company: "OmniTech Solutions",
    logoLetter: "O",
    logoBg: "bg-indigo-700",
    title: "Frontend React & Next.js Engineer",
    category: "software-development",
    categoryName: "Software Development",
    location: "Chennai, India",
    workplaceType: "Hybrid",
    employmentType: "Full-time",
    salary: "₹16 - 24 LPA",
    matchScore: 96,
    experience: "2-4 Years",
    postedDate: "6 hours ago",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Redux Toolkit", "REST APIs"],
    description: "Develop blazing-fast single page web apps and interactive career dashboards with high standards for performance and SEO.",
    department: "Frontend Core",
    openPositions: 2
  },
  {
    id: 8,
    company: "DeepGen Intelligence",
    logoLetter: "D",
    logoBg: "bg-purple-700",
    title: "Computer Vision & Deep Learning Specialist",
    category: "artificial-intelligence",
    categoryName: "Artificial Intelligence",
    location: "Bangalore, India",
    workplaceType: "Remote",
    employmentType: "Full-time",
    salary: "₹28 - 40 LPA",
    matchScore: 97,
    experience: "4+ Years",
    postedDate: "12 hours ago",
    skills: ["OpenCV", "TensorFlow", "YOLOv8", "PyTorch", "C++", "Edge AI"],
    description: "Lead end-to-end visual inspection model deployments for automated medical diagnostics and autonomous vehicle vision systems.",
    department: "Vision AI",
    openPositions: 1
  }
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "Upload Your Resume",
    description: "Upload your CV in PDF or DOCX format. Our intelligent parser instantly extracts your projects, experiences, technical competencies, and education.",
    iconName: "FileUp",
    metric: "Instant 2-second parsing"
  },
  {
    step: "02",
    title: "AI Analyses Your Skills",
    description: "CareerAI's deep semantic matching models evaluate your skills, benchmark your profile against industry standards, and identify high-value skill gaps.",
    iconName: "Cpu",
    metric: "Multi-vector semantic analysis"
  },
  {
    step: "03",
    title: "Get Matching Jobs",
    description: "Receive accurately matched job openings scored with real-time match percentages, saving you hundreds of hours of manual searching.",
    iconName: "Target",
    metric: "Ranked by 95%+ precision score"
  },
  {
    step: "04",
    title: "Apply & Track Applications",
    description: "Apply in a single click with tailored resume highlights, receive AI interview prep recommendations, and monitor recruiter review milestones.",
    iconName: "CheckCircle2",
    metric: "Real-time pipeline tracker"
  }
];

export const careerDevelopmentFeatures = [
  {
    id: "skill-gap",
    title: "Skill Gap Analysis",
    subtitle: "Real-time market benchmark",
    description: "Discover what skills top employers require for your target role. Compare your current skillset side-by-side with industry requirements to focus on what matters most.",
    iconName: "Sliders",
    tag: "Diagnostic Tool",
    highlights: [
      "Identifies missing high-demand frameworks",
      "Benchmark against top 10% candidate profiles",
      "Calculates instant skill readiness percentage"
    ]
  },
  {
    id: "recommendations",
    title: "Personalized Career Recommendations",
    subtitle: "AI-guided career trajectory",
    description: "Get predictive career path recommendations based on your unique academic background, past projects, and long-term ambition—from Junior to Tech Lead.",
    iconName: "Compass",
    tag: "Trajectory Engine",
    highlights: [
      "Custom 1, 3, and 5-year career roadmaps",
      "Role transition guidance (e.g. Developer to AI Engineer)",
      "Salary progression forecasts"
    ]
  },
  {
    id: "learning",
    title: "Targeted Learning Suggestions",
    subtitle: "Hand-picked curriculum",
    description: "Receive tailored learning modules, open-source projects, and industry certifications specifically chosen to bridge your identified skill gaps.",
    iconName: "BookOpen",
    tag: "Curated Content",
    highlights: [
      "Targeted project ideas to build your portfolio",
      "Direct recommendations for top certifications",
      "Hands-on MCA student final-year project guidance"
    ]
  },
  {
    id: "tracking",
    title: "Career Progress Tracking",
    subtitle: "Dynamic readiness index",
    description: "Watch your Job Readiness Index rise as you complete recommended courses, add GitHub repositories, and earn technical badges.",
    iconName: "LineChart",
    tag: "Performance Metric",
    highlights: [
      "Real-time 0-100% Market Readiness Index",
      "Profile visibility boost for recruiters",
      "Automated milestone achievements"
    ]
  }
];
