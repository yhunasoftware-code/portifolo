/**
 * Portfolio Data Configuration - Abraham Alemu
 * Consistent 2-color scheme: Violet (#8b5cf6) & Cyan (#06b6d4)
 */

const portfolioData = {
  profile: {
    name: "Abraham Alemu",
    fullName: "Abraham Alemu | Software Engineer",
    title: "Website Developer & Software Engineer",
    tagline: "Building high-performance web applications, intelligent systems, and modern digital experiences.",
    availability: "Available for new projects",
    isAvailable: true,
    location: "Addis Ababa, Ethiopia (Open to Remote Worldwide)",
    email: "yhunialemu69@gmail.com",
    phone: "+251 99 259 6308",
    experienceYears: "2+",
    projectsCompleted: "15+",
    satisfactionRate: "100%",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      telegram: "https://t.me",
    },
    heroStats: [
      {
        value: "B.Sc.",
        label: "Software Engineering",
        gradient: "gradient-primary",
        icon: "graduation-cap"
      },
      {
        value: "2+ Years",
        label: "Engineering Experience",
        gradient: "gradient-primary-reverse",
        icon: "briefcase"
      },
      {
        value: "10+",
        label: "Deployed Systems",
        gradient: "gradient-primary",
        icon: "cpu"
      }
    ],
    aboutText: [
      "I am Abraham Alemu, a dedicated Software Engineer and Website Developer with a Software Engineering degree and practical experience engineering dependable production applications.",
      "My work spans full-stack web platforms, mobile solutions, and intelligent predictive algorithms—such as my real-time University Bus Transport System & App and the Student Performance Predictor Machine Learning Model.",
      "I focus on clean code, responsive interfaces, sub-second latency, and scalable databases, leveraging modern JavaScript/TypeScript, React, Node.js, and data-driven systems."
    ],
    highlights: [
      "Modular, testable, and maintainable software architecture",
      "Pixel-perfect responsive UX/UI implementation",
      "Real-time tracking, WebSockets & RESTful APIs",
      "Predictive modeling & machine learning data pipelines",
      "Database design, query tuning & security workflows"
    ]
  },

  skills: {
    core: [
      {
        name: "JavaScript & TypeScript",
        level: 95,
        description: "ES6+, Async/Await, WebSockets, DOM manipulation, Type safety",
        color: "violet",
        icon: "code"
      },
      {
        name: "React.js & Next.js",
        level: 92,
        description: "Hooks, Context API, Server Components, State Management, SPAs",
        color: "cyan",
        icon: "atom"
      },
      {
        name: "Modern UI/UX & Tailwind",
        level: 90,
        description: "Responsive layouts, Glassmorphism, Micro-animations, Mobile-first",
        color: "violet",
        icon: "palette"
      },
      {
        name: "Backend, APIs & ML Models",
        level: 88,
        description: "Node.js, Express, Python, PostgreSQL, REST APIs, Predictive Models",
        color: "cyan",
        icon: "database"
      }
    ],
    additional: [
      { name: "RESTful APIs", category: "Backend" },
      { name: "Git & GitHub Workflow", category: "DevOps" },
      { name: "Machine Learning Basics", category: "AI / ML" },
      { name: "Real-Time GPS / WebSockets", category: "IoT / Mobile" },
      { name: "PostgreSQL & SQL Modeling", category: "Database" },
      { name: "Tailwind CSS & Glassmorphism", category: "Frontend" },
      { name: "JWT Authentication & Security", category: "Security" },
      { name: "Performance & SEO Audits", category: "Optimization" }
    ]
  },

  services: [
    {
      id: "web-dev",
      title: "Modern Web Applications",
      description: "End-to-end development of dynamic, reactive, and responsive web applications built with React and modern TypeScript.",
      icon: "layout",
      features: [
        "Component-driven clean architecture",
        "Sub-second loading times",
        "Fully responsive on mobile, tablet & desktop",
        "Clean, maintainable source code"
      ]
    },
    {
      id: "system-dev",
      title: "Full-Stack System Engineering",
      description: "Complete business systems including secure authentication, role-based access control, database design, and real-time processing.",
      icon: "server",
      features: [
        "Scalable database models (SQL/NoSQL)",
        "Secure RESTful API endpoints",
        "Administrative control dashboards",
        "High reliability & data integrity"
      ]
    },
    {
      id: "smart-models",
      title: "Predictive Models & Data Apps",
      description: "Designing data-driven systems and machine learning models for early risk detection, trend forecasting, and interactive analytics.",
      icon: "cpu",
      features: [
        "Feature engineering & model training",
        "Real-time prediction API endpoints",
        "Visual analytics & chart dashboards",
        "Data-driven decision support"
      ]
    },
    {
      id: "perf-seo",
      title: "Speed, SEO & Optimization",
      description: "Auditing and optimizing existing web platforms to achieve top-tier Lighthouse scores, responsive accessibility, and search visibility.",
      icon: "zap",
      features: [
        "Asset compression & bundle splitting",
        "Core Web Vitals enhancement",
        "Structured Schema metadata & OpenGraph",
        "Security hardening & best practices"
      ]
    }
  ],

  projects: [
    {
      id: "bus-transport-system",
      title: "University Bus Transport System & App",
      category: "Full-Stack & Mobile",
      tagline: "Real-Time Campus Fleet Tracking, Route Navigation & Student Mobile App",
      description: "An end-to-end campus mobility solution combining real-time GPS shuttle tracking, student mobile app for live arrival ETAs, driver dispatch management, digital QR bus passes, and route scheduling.",
      highlights: [
        "Live GPS Tracking with Real-Time Shuttle Location on Map",
        "Student Mobile Web App with Accurate Arrival Predictions (ETA)",
        "Driver Shift & Route Allocation Management Portal",
        "Digital Student Bus Pass with Secure QR Verification"
      ],
      tags: ["React", "Node.js", "WebSockets / GPS", "Leaflet Maps", "Tailwind CSS", "REST API"],
      liveUrl: "#contact",
      githubUrl: "https://github.com",
      accent: "cyan",
      stats: {
        fleet: "20+ Campus Buses",
        users: "5,000+ Daily Students",
        latency: "<500ms Real-Time GPS"
      }
    },
    {
      id: "student-performance-predictor",
      title: "Student Performance Predictor Model",
      category: "AI & Analytics",
      tagline: "Machine Learning Model for Early Academic Risk Alerts & GPA Forecasts",
      description: "An intelligent educational data mining application that uses predictive machine learning to forecast student academic performance, identify at-risk learners early in the semester, and provide actionable interventions for advisors.",
      highlights: [
        "Supervised Machine Learning Algorithm for Semester Grade Prediction",
        "Early Warning System for At-Risk Academic Intervention",
        "Interactive Faculty Dashboard with Visual Trend Analysis",
        "Feature Importance Analysis (Attendance, Quiz Scores, Engagement)"
      ],
      tags: ["Python", "Scikit-Learn", "React", "Node.js", "Chart.js", "Tailwind CSS"],
      liveUrl: "#contact",
      githubUrl: "https://github.com",
      accent: "violet",
      stats: {
        accuracy: "92.4% Prediction Accuracy",
        dataset: "10,000+ Student Records",
        latency: "Instant Inference"
      }
    },
    {
      id: "banking-system",
      title: "Enterprise Core Banking System",
      category: "Full-Stack",
      tagline: "Secure FinTech Account & Transaction Processing Platform",
      description: "A comprehensive banking management platform featuring multi-tier account handling, encrypted fund transfers, real-time transaction logs, automated balance reconciliation, and interactive financial reporting dashboards.",
      highlights: [
        "Account & Customer Portfolio Management",
        "Instant Secure Fund Transfer & Ledger Auditing",
        "Automated PDF Statement & Financial Reports",
        "Role-Based Access Control (Admin, Teller, Auditor)"
      ],
      tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "JWT Auth", "REST API"],
      liveUrl: "#contact",
      githubUrl: "https://github.com",
      accent: "cyan",
      stats: {
        security: "Bank-Grade Encryption",
        speed: "<120ms Latency",
        uptime: "99.98%"
      }
    },
    {
      id: "hotel-management",
      title: "Smart Hotel & Resort Management SaaS",
      category: "Enterprise",
      tagline: "Comprehensive Booking, Room Allocation & Guest Services Suite",
      description: "An all-in-one hospitality management solution designed to streamline reservations, dynamic room assignment, housekeeping dispatch, invoicing, and executive revenue analytics.",
      highlights: [
        "Interactive Room Grid & Live Availability Matrix",
        "Instant Reservation Engine & Payment Gateway",
        "Automated Check-in / Check-out Workflow",
        "Executive Revenue & Occupancy Analytics Dashboard"
      ],
      tags: ["React.js", "Express.js", "MongoDB", "Chart.js", "Tailwind CSS"],
      liveUrl: "#contact",
      githubUrl: "https://github.com",
      accent: "violet",
      stats: {
        efficiency: "+45% Operations Speed",
        rooms: "500+ Capacity",
        analytics: "Real-time KPI"
      }
    }
  ],

  testimonials: [
    {
      quote: "The University Bus Transport app solved our campus transit chaos. Students now see exact bus arrivals in real time, and route dispatching is seamless.",
      author: "Campus Operations Director",
      role: "University Transportation Services",
      rating: 5
    },
    {
      quote: "Abraham's Student Performance Predictor model provided our academic advisors with early warnings that helped hundreds of students improve their semester outcomes.",
      author: "Dean of Academic Affairs",
      role: "Faculty of Computing & Technology",
      rating: 5
    },
    {
      quote: "Delivered our software with exceptional speed, clean architecture, and remarkable attention to detail. One of the sharpest engineers we've worked with.",
      author: "Senior Software Architect",
      role: "Enterprise Systems",
      rating: 5
    }
  ]
};

window.portfolioData = portfolioData;
