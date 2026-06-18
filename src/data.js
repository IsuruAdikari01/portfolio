export const personalInfo = {
  name: "Isuru Adikari",
  roles: ["IT Undergraduate", "Software Developer", "MERN Stack Engineer", "Problem Solver"],
  email: "isuruadikari2001@gmail.com",
  phone: "+94714227693",
  location: "Malabe, Sri Lanka",
  linkedin: "https://www.linkedin.com/in/isuru-adikari-a15409371",
  github: "https://github.com/IsuruAdikari01",
  summary:
    "Third-year IT undergraduate specializing in web development and software engineering. Experienced in building modern web applications using the MERN stack. Passionate about solving real-world problems through coding and continuously improving skills.",
};

export const education = [
  {
    id: 1,
    institution: "SLIIT",
    degree: "BSc (Hons) in Information Technology",
    period: "2023 – Present",
    details: "Specializing in Web Development & Software Engineering",
    icon: "🎓",
    current: true,
  },
  {
    id: 2,
    institution: "Advanced Level",
    degree: "GCE A/L Examination",
    period: "2022",
    details: "Results: 1C, 2S",
    icon: "📚",
    current: false,
  },
  {
    id: 3,
    institution: "Ordinary Level",
    degree: "GCE O/L Examination",
    period: "2019",
    details: "Results: 1B, 7C, 1S",
    icon: "🏫",
    current: false,
  },
];

export const skillCategories = [
  {
    category: "Programming",
    color: "#00d4ff",
    icon: "💻",
    skills: [
      { name: "Java", level: 80 },
      { name: "Python", level: 75 },
      { name: "C/C++", level: 70 },
      { name: "Kotlin", level: 60 },
    ],
  },
  {
    category: "Web Development",
    color: "#9b59ff",
    icon: "🌐",
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 82 },
      { name: "Node.js", level: 78 },
      { name: "HTML/CSS", level: 90 },
      { name: "MongoDB", level: 75 },
      { name: "Express.js", level: 78 },
    ],
  },
  {
    category: "Tools & Platforms",
    color: "#ff2d78",
    icon: "🛠️",
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 70 },
      { name: "Postman", level: 75 },
      { name: "Android Studio", level: 65 },
      { name: "MySQL", level: 72 },
    ],
  },
];

export const techBadges = [
  "React", "Node.js", "MongoDB", "Express", "Java", "Python",
  "C++", "Kotlin", "MySQL", "Git", "Figma", "HTML/CSS",
  "JavaScript", "Postman", "Android Studio", "VS Code",
];

export const projects = [
  {
    id: 1,
    title: "Pet Care System",
    description:
      "A full-stack pet adoption and care management platform with seamless API integration. Includes pet listings, adoption requests, and user management.",
    tech: ["MongoDB", "Express", "React", "Node.js", "REST API"],
    github: "https://github.com/IsuruAdikari01",
    color: "#00d4ff",
    gradient: "from-cyan-500/20 to-blue-600/20",
    accentColor: "rgba(0, 212, 255, 0.3)",
    icon: "🐾",
    svgScene: "pet",
  },
  {
    id: 2,
    title: "Canteen Management System",
    description:
      "Smart food ordering platform with JWT authentication, role-based access control for students, staff & admins, and a dynamic promotions engine.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    github: "https://github.com/IsuruAdikari01",
    color: "#9b59ff",
    gradient: "from-purple-500/20 to-violet-600/20",
    accentColor: "rgba(155, 89, 255, 0.3)",
    icon: "🍽️",
    svgScene: "canteen",
  },
  {
    id: 3,
    title: "Health Monitoring App",
    description:
      "Android application for daily mood tracking and health monitoring with interactive charts, wellness analytics, and personalized insights.",
    tech: ["Kotlin", "Android Studio", "SQLite", "Charts API"],
    github: "https://github.com/IsuruAdikari01",
    color: "#00ff88",
    gradient: "from-emerald-500/20 to-teal-600/20",
    accentColor: "rgba(0, 255, 136, 0.3)",
    icon: "❤️",
    svgScene: "health",
  },
  {
    id: 4,
    title: "Online Advertising Agency",
    description:
      "Full-featured web app for digital campaign management with analytics dashboard, ad performance tracking and client reporting system.",
    tech: ["HTML", "CSS", "JavaScript", "Chart.js"],
    github: "https://github.com/IsuruAdikari01",
    color: "#ff2d78",
    gradient: "from-pink-500/20 to-rose-600/20",
    accentColor: "rgba(255, 45, 120, 0.3)",
    icon: "📢",
    svgScene: "ads",
  },
  {
    id: 5,
    title: "Online Tour Guide System",
    description:
      "Travel booking platform built with JSP & Servlets. Features destination browsing, guide selection, itinerary creation and booking management.",
    tech: ["Java", "JSP", "Servlets", "MySQL", "Bootstrap"],
    github: "https://github.com/IsuruAdikari01",
    color: "#ffa500",
    gradient: "from-orange-500/20 to-amber-600/20",
    accentColor: "rgba(255, 165, 0, 0.3)",
    icon: "✈️",
    svgScene: "tour",
  },
];

export const languages = [
  { name: "Sinhala", level: "Native", pct: 100, color: "#00d4ff" },
  { name: "English", level: "Intermediate", pct: 65, color: "#9b59ff" },
  { name: "Tamil", level: "Beginner", pct: 25, color: "#ff2d78" },
];

export const softSkills = [
  { name: "Team Collaboration", icon: "🤝" },
  { name: "Problem Solving", icon: "🧩" },
  { name: "Time Management", icon: "⏰" },
  { name: "Adaptability", icon: "🔄" },
  { name: "Critical Thinking", icon: "💡" },
  { name: "Communication", icon: "💬" },
];
