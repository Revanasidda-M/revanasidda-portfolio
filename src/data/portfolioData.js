// ============================================================
// portfolioData.js — Personal and Professional Portfolio Data
// All content for the single-page portfolio lives in this file.
// ============================================================

export const personalInfo = {
  name: "Revanasidda",
  firstName: "Revanasidda",
  brandName: "Revanasidda", // shown in the preloader, navbar and footer
  title: "Java Full Stack Developer",
  location: "Bengaluru, India",
  phone: "+91 7975136147",
  emails: {
    primary: "revanasiddafullstackdeveloper@gmail.com",
    secondary: "",
  },
  summary: "Graduate AI&DS Student who builds full-stack web apps with java and react",
  resumeUrl: "/Java-Resume.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/Revanasidda-M",
  linkedin: "https://www.linkedin.com/in/revanasidda-marpalli-995250358",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Revanasidda",
  titleHighlight: "Java Full Stack Developer",
  subtitle: "Building robust, scalable full-stack web applications and microservices using modern Java, Spring Boot, React, and cloud-ready architectures.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:revanasiddafullstackdeveloper@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Java-Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML) — keep it YOUR OWN trusted text.
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Revanasidda</span>, an Artificial Intelligence & Data Science engineering student and Java Full Stack Developer based in Bengaluru. I specialize in engineering clean, scalable enterprise web applications using Java, Spring Boot, and React, sharpening my skills through the placement training program at TAP Academy. Driven by curiosity and problem-solving, I aim to build high-performance software that delivers real-world impact.`,
  techStack: ["Java", "Spring Boot", "React", "MySQL", "Python", "Microservices"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A methodical engineering approach from requirements discovery to high-availability deployment.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Analyze user requirements, system architecture, and domain logic to define clear specifications.",
    },
    {
      number: "02",
      title: "Design",
      text: "Design modular database schemas, RESTful API endpoints, and clean, responsive UI wireframes.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Implement backend microservices with Java & Spring Boot alongside dynamic, reactive frontends in React.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Test endpoints thoroughly with Postman, containerize services, and deploy production-ready code with continuous monitoring.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Java" }, { name: "Python" }],
    },
    {
      title: "Web Development",
      skills: [{ name: "HTML" }, { name: "CSS" }, { name: "React" }],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL" }, { name: "MongoDB" }],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "VS Code" },
        { name: "Postman" },
      ],
    },
  ],
};

export const leadershipList = [
  {
    title: "College Tech Symposium & Hackathon",
    description:
      "Coordinated technical coding challenges and guided participants on full-stack Java and React problem solving.",
    role: "Technical Coordinator",
    badge: "Hackathon",
  },
  {
    title: "AI & Data Science Student Forum",
    description:
      "Organized peer learning sessions, coding workshops, and tech talks for junior engineering students.",
    role: "Core Member",
    badge: "Community",
  },
];

export const internshipsList = [
  {
    organization: "Robomanthon Pvt Ltd",
    role: "Cloud Native Java Microservices Engineer Intern",
    duration: "Feb 2026 to July 2026",
    skills: [
      "Microservices Architecture",
      "API Design",
      "Cloud Native Development",
      "Backend Optimization",
    ],
    tech: ["Java", "Spring Boot", "Microservices", "REST APIs", "Docker"],
  },
];

export const softSkillsList = [
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Active contributor in cross-functional teams, coordinating effectively to deliver high-quality solutions.",
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Methodical approach to debugging complex distributed architectures and optimizing algorithms.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Articulate in conveying technical concepts clearly to both technical teammates and stakeholders.",
  },
  {
    name: "Creativity",
    icon: "💡",
    desc: "Innovative mindset in architecting user-centric UI components and elegant system designs.",
  },
];

export const projects = [
  {
    id: "ai-ecommerce-platform",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "AI-Powered Full Stack E-Commerce Platform",
    description:
      "Online shopping application with product search, AI-powered recommendations, shopping cart, secure checkout, and order management.",
    techTags: [
      "Java",
      "Spring Boot",
      "React.js",
      "MySQL",
      "Spring Security",
      "REST APIs",
    ],
    links: { github: "", demo: "" },
    isFlagship: true,
  },
  {
    id: "food-delivery-application",
    number: "02",
    badge: null,
    title: "Food Delivery Application",
    description:
      "Online food ordering application with restaurant browsing, food search, cart, order placement, payment, and order tracking.",
    techTags: [
      "Java",
      "Spring Boot",
      "React.js",
      "MySQL",
      "Spring Security",
      "REST APIs",
    ],
    links: { github: "", demo: "" },
    isFlagship: false,
  },
  {
    id: "expense-tracker",
    number: "03",
    badge: null,
    title: "Expense Tracker",
    description:
      "Full-stack application to track income, expenses, transactions, account balance, and financial activities with an interactive dashboard.",
    techTags: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
    links: { github: "", demo: "" },
    isFlagship: false,
  },
  {
    id: "student-management-system",
    number: "04",
    badge: null,
    title: "Student Management System",
    description:
      "Full-stack application to manage student records, courses, and enrollments with CRUD operations.",
    techTags: ["Java", "Spring Boot", "React.js", "MySQL", "REST APIs"],
    links: { github: "", demo: "" },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [],
  viewAllUrl: "https://www.linkedin.com/in/revanasidda-marpalli-995250358",
};

export const education = {
  degree: "B.E Artificial Intelligence & Data Science",
  institution: "Government Engineering College Bidar",
  cgpa: "2022 - 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Java Full Stack Developer",
    "Java · Spring Boot · React",
    "Building Scalable Cloud-Native Solutions",
  ],
  credential: "B.E Artificial Intelligence & Data Science",
  copyright: `© ${new Date().getFullYear()} Revanasidda | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId:
    import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId:
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey:
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
