export const initialCandidateProfile = {
  id: "cand-101",
  name: "Alex Morgan",
  headline: "MCA Candidate • Full Stack & Applied AI Developer",
  email: "alex.morgan@example.com",
  phone: "+91 98765 43210",
  location: "Bangalore, Karnataka, India",
  degree: "Master of Computer Applications (MCA)",
  university: "Bangalore Institute of Technology",
  graduationYear: "2026",
  cgpa: "8.9 / 10",
  targetRole: "Full Stack AI Engineer",
  experienceLevel: "Entry-to-Mid (1.5 Years Internship & Projects)",
  bio: "Final-year MCA student passionate about building scalable full-stack web applications and integrating Large Language Models and computer vision models into real-world SaaS platforms.",
  avatarLetter: "AM",
  githubUrl: "https://github.com/alexmorgan",
  linkedinUrl: "https://linkedin.com/in/alexmorgan",
  portfolioUrl: "https://alexmorgan.dev",
  resumeName: "Alex_Morgan_MCA_Resume_2026.pdf",
  resumeSize: "245 KB",
  resumeLastUpdated: "12 Nov 2026",
  missingItems: [
    { id: "github", label: "Link active GitHub project repository", impact: "+5% Completion", completed: false },
    { id: "cert", label: "Upload AWS / Cloud Certification badge", impact: "+10% Completion", completed: false }
  ]
};

export const initialApplications = [
  {
    id: "app-101",
    jobId: 1,
    title: "Senior AI / ML Research Engineer",
    company: "NeuralWave AI",
    location: "Bangalore, India",
    salary: "₹26 - 38 LPA",
    appliedDate: "14 Nov 2026",
    status: "Interview",
    matchScore: 98,
    notes: "Technical interview scheduled with Lead AI Architect."
  },
  {
    id: "app-102",
    jobId: 2,
    title: "Lead Full Stack React & Node Developer",
    company: "CloudScale Systems",
    location: "Remote, India",
    salary: "₹20 - 30 LPA",
    appliedDate: "12 Nov 2026",
    status: "Shortlisted",
    matchScore: 95,
    notes: "Resume screened and passed to Engineering VP for round 2."
  },
  {
    id: "app-103",
    jobId: 7,
    title: "Frontend React & Next.js Engineer",
    company: "OmniTech Solutions",
    location: "Chennai, India",
    salary: "₹16 - 24 LPA",
    appliedDate: "09 Nov 2026",
    status: "Under Review",
    matchScore: 96,
    notes: "Application viewed by Talent Acquisition team."
  },
  {
    id: "app-104",
    jobId: 3,
    title: "Data Scientist & Analytics Specialist",
    company: "Synthex Data Labs",
    location: "Hyderabad, India",
    salary: "₹22 - 32 LPA",
    appliedDate: "05 Nov 2026",
    status: "Applied",
    matchScore: 93,
    notes: "Application dispatched via CareerAI matching gateway."
  },
  {
    id: "app-105",
    jobId: 5,
    title: "Cybersecurity Analyst & Threat Hunter",
    company: "CyberShield Security",
    location: "Pune, India",
    salary: "₹19 - 28 LPA",
    appliedDate: "28 Oct 2026",
    status: "Rejected",
    matchScore: 91,
    notes: "Role required 5+ years SOC experience; skill feedback provided."
  }
];

export const candidateSkillsList = [
  { name: "React.js & React 19", proficiency: 95, level: "Advanced", category: "Frontend" },
  { name: "JavaScript / ES6+ & TypeScript", proficiency: 92, level: "Advanced", category: "Languages" },
  { name: "Tailwind CSS & Modern UI", proficiency: 96, level: "Expert", category: "Frontend" },
  { name: "Python & Data Structures", proficiency: 90, level: "Advanced", category: "Languages" },
  { name: "Node.js & Express APIs", proficiency: 88, level: "Advanced", category: "Backend" },
  { name: "SQL & PostgreSQL Databases", proficiency: 84, level: "Intermediate", category: "Databases" },
  { name: "PyTorch & Deep Learning", proficiency: 85, level: "Intermediate", category: "AI & ML" },
  { name: "LLM Fine-Tuning & RAG", proficiency: 86, level: "Intermediate", category: "AI & ML" },
  { name: "Git & Version Control", proficiency: 92, level: "Advanced", category: "Tools" },
  { name: "RESTful API Architecture", proficiency: 94, level: "Advanced", category: "Backend" },
  { name: "Redux Toolkit / Context API", proficiency: 89, level: "Advanced", category: "Frontend" },
  { name: "Pandas & NumPy Analytics", proficiency: 82, level: "Intermediate", category: "AI & ML" },
  { name: "Vite & Modern Build Tools", proficiency: 90, level: "Advanced", category: "Tools" },
  { name: "Responsive & Accessible UX", proficiency: 93, level: "Advanced", category: "Frontend" }
];

export const missingSkillsGap = [
  {
    name: "Docker & Containerization",
    currentProficiency: 45,
    targetProficiency: 85,
    gap: 40,
    priority: "High",
    impact: "+12% Match Score",
    recommendation: "Essential for microservices deployments across cloud workloads."
  },
  {
    name: "Kubernetes Cluster Management",
    currentProficiency: 30,
    targetProficiency: 75,
    gap: 45,
    priority: "High",
    impact: "+9% Match Score",
    recommendation: "Required by 70% of Tier-1 SaaS engineering openings."
  },
  {
    name: "Next.js App Router & SSR",
    currentProficiency: 55,
    targetProficiency: 90,
    gap: 35,
    priority: "Medium",
    impact: "+7% Match Score",
    recommendation: "Standard in modern React production enterprise stacks."
  },
  {
    name: "Vector Databases (Pinecone / Qdrant)",
    currentProficiency: 58,
    targetProficiency: 85,
    gap: 27,
    priority: "Medium",
    impact: "+8% Match Score",
    recommendation: "Critical for enterprise retrieval-augmented generation (RAG) pipelines."
  },
  {
    name: "AWS Cloud Infrastructure (EC2 / S3 / Lambda)",
    currentProficiency: 50,
    targetProficiency: 80,
    gap: 30,
    priority: "Medium",
    impact: "+6% Match Score",
    recommendation: "Cloud deployment competency accelerates hiring decisions."
  }
];

export const recommendedCourses = [
  {
    id: "course-1",
    title: "Docker & Kubernetes for Production Microservices",
    provider: "Cloud Native Mastery",
    duration: "6 Weeks",
    level: "Intermediate",
    rating: 4.9,
    enrolledCount: "14,200+",
    tags: ["DevOps", "Docker", "Kubernetes"],
    targetGap: "Docker & Containerization",
    description: "Master multi-stage Docker builds, Compose orchestration, and production Kubernetes deployments."
  },
  {
    id: "course-2",
    title: "Next.js 15 Full-Stack Architecture & Server Actions",
    provider: "Modern Web Institute",
    duration: "4 Weeks",
    level: "Advanced",
    rating: 4.8,
    enrolledCount: "9,800+",
    tags: ["React 19", "Next.js", "Full Stack"],
    targetGap: "Next.js App Router & SSR",
    description: "Deep dive into server components, server actions, dynamic caching, and full-stack optimizations."
  },
  {
    id: "course-3",
    title: "Production RAG & Vector Databases with LangChain",
    provider: "DeepLearning.AI Hub",
    duration: "5 Weeks",
    level: "Advanced",
    rating: 4.9,
    enrolledCount: "18,400+",
    tags: ["LLMs", "Vector DB", "Pinecone"],
    targetGap: "Vector Databases",
    description: "Architect production retrieval engines using Pinecone, dense embeddings, and rerankers."
  },
  {
    id: "course-4",
    title: "AWS Certified Solutions Architect Associate Prep",
    provider: "Cloud Academy",
    duration: "8 Weeks",
    level: "Comprehensive",
    rating: 4.7,
    enrolledCount: "26,100+",
    tags: ["AWS", "Cloud", "Certification"],
    targetGap: "AWS Cloud Infrastructure",
    description: "End-to-end guidance to design fault-tolerant, scalable architectures on Amazon Web Services."
  }
];

export const careerImprovementTips = [
  {
    id: "tip-1",
    title: "Deploy Containerized MCA Capstone Project",
    category: "Portfolio Enhancement",
    effort: "2-3 days",
    description: "Package your full-stack React project with a Dockerfile and docker-compose. Add the badge to your GitHub repository.",
    status: "Recommended"
  },
  {
    id: "tip-2",
    title: "Implement Semantic Vector Search in Project Demo",
    category: "AI Skill Boost",
    effort: "1 week",
    description: "Connect a free Pinecone serverless index to demonstrate live candidate-job embedding matching.",
    status: "High Impact"
  },
  {
    id: "tip-3",
    title: "Publish Technical Case Study on Modern React Architecture",
    category: "Professional Visibility",
    effort: "1-2 days",
    description: "Write an overview on Medium or LinkedIn about building modern responsive dashboards with Tailwind CSS.",
    status: "Quick Win"
  }
];

export const candidateNotifications = [
  {
    id: "notif-1",
    title: "Interview Scheduled with NeuralWave AI",
    time: "2 hours ago",
    unread: true,
    description: "Technical Round 1 is set for Thursday, 10:30 AM IST. Check your registered email for meeting link."
  },
  {
    id: "notif-2",
    title: "Application Shortlisted by CloudScale Systems",
    time: "Yesterday",
    unread: true,
    description: "Your Full Stack profile passed initial screening with a 95% AI Match score."
  },
  {
    id: "notif-3",
    title: "New AI Match: Lead Full Stack Engineer",
    time: "2 days ago",
    unread: false,
    description: "A new role matching 96% of your skills was posted by OmniTech Solutions."
  }
];
