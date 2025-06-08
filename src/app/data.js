/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    title: "AR Storytelling Experience",
    category: "Augmented Reality",
    description: "An immersive AR application that brings children's stories to life through interactive 3D characters and environments. Users can point their device at story pages to see animated characters emerge and interact with the narrative.",
    technologies: ["Unity", "ARKit", "ARCore", "C#", "Blender", "Adobe After Effects"],
    timeline: "6 months",
    completionDate: "2023-12-15",
    role: "Lead AR Developer & 3D Artist",
    responsibilities: [
      "Designed and implemented AR tracking systems",
      "Created 3D character models and animations",
      "Optimized performance for mobile devices",
      "Integrated spatial audio systems"
    ],
    achievements: [
      "95% user engagement rate",
      "Featured in App Store",
      "Downloaded by 50K+ users",
      "4.8/5 star rating"
    ],
    demoLink: "https://ar-storytelling.example.com",
    sourceLink: "https://github.com/aasurjya/ar-storytelling",
    image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "Live"
  },
  {
    id: 2,
    title: "VR Training Simulator",
    category: "Virtual Reality",
    description: "A comprehensive VR training platform for industrial safety procedures. Features realistic physics simulations, haptic feedback, and detailed analytics to track learning progress and safety compliance.",
    technologies: ["Unity", "Oculus SDK", "SteamVR", "C#", "Node.js", "MongoDB"],
    timeline: "8 months",
    completionDate: "2023-09-20",
    role: "VR Developer & Systems Architect",
    responsibilities: [
      "Developed VR interaction systems",
      "Implemented physics-based simulations",
      "Created analytics dashboard",
      "Designed user experience workflows"
    ],
    achievements: [
      "40% reduction in training time",
      "99% safety compliance rate",
      "Deployed across 15 facilities",
      "ROI of 300% within first year"
    ],
    demoLink: "https://vr-training.example.com",
    sourceLink: "https://github.com/aasurjya/vr-training",
    image: "https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "Live"
  },
  {
    id: 3,
    title: "Smart City Dashboard",
    category: "Full-Stack Development",
    description: "A real-time data visualization platform for smart city management. Integrates IoT sensors, traffic systems, and environmental data to provide actionable insights for urban planning and emergency response.",
    technologies: ["React", "Next.js", "D3.js", "AWS", "Docker", "PostgreSQL"],
    timeline: "10 months",
    completionDate: "2023-06-30",
    role: "Full-Stack Developer & Data Architect",
    responsibilities: [
      "Built responsive dashboard interface",
      "Designed real-time data pipelines",
      "Implemented microservices architecture",
      "Created data visualization components"
    ],
    achievements: [
      "Processing 1M+ data points daily",
      "30% improvement in response times",
      "Adopted by 5 major cities",
      "99.9% uptime maintained"
    ],
    demoLink: "https://smart-city-dashboard.example.com",
    sourceLink: "https://github.com/aasurjya/smart-city-dashboard",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "Live"
  },
  {
    id: 4,
    title: "AI-Powered Learning Platform",
    category: "Machine Learning",
    description: "An adaptive learning platform that uses AI to personalize educational content based on individual learning patterns. Features include progress tracking, intelligent recommendations, and collaborative learning tools.",
    technologies: ["Python", "TensorFlow", "React", "FastAPI", "Redis", "Kubernetes"],
    timeline: "12 months",
    completionDate: "2023-03-15",
    role: "ML Engineer & Platform Developer",
    responsibilities: [
      "Developed recommendation algorithms",
      "Built scalable ML pipelines",
      "Designed user interface components",
      "Implemented A/B testing framework"
    ],
    achievements: [
      "85% improvement in learning outcomes",
      "500K+ active users",
      "Featured in EdTech conferences",
      "Patent filed for adaptive algorithms"
    ],
    demoLink: "https://ai-learning.example.com",
    sourceLink: "https://github.com/aasurjya/ai-learning-platform",
    image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "Live"
  },
  {
    id: 5,
    title: "Blockchain Supply Chain",
    category: "Blockchain Development",
    description: "A transparent supply chain management system built on blockchain technology. Enables end-to-end traceability of products from manufacturing to delivery, ensuring authenticity and reducing fraud.",
    technologies: ["Solidity", "Web3.js", "React", "IPFS", "Ethereum", "Node.js"],
    timeline: "9 months",
    completionDate: "2022-11-10",
    role: "Blockchain Developer & Smart Contract Architect",
    responsibilities: [
      "Developed smart contracts",
      "Implemented IPFS integration",
      "Built web3 frontend interface",
      "Designed tokenomics system"
    ],
    achievements: [
      "Tracked 100K+ products",
      "Zero fraud incidents",
      "Reduced verification time by 90%",
      "Adopted by 20+ manufacturers"
    ],
    demoLink: "https://blockchain-supply.example.com",
    sourceLink: "https://github.com/aasurjya/blockchain-supply-chain",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "Live"
  },
  {
    id: 6,
    title: "IoT Environmental Monitor",
    category: "IoT Development",
    description: "A comprehensive environmental monitoring system using IoT sensors to track air quality, temperature, humidity, and noise levels. Provides real-time alerts and historical data analysis for environmental compliance.",
    technologies: ["Arduino", "Raspberry Pi", "Python", "InfluxDB", "Grafana", "MQTT"],
    timeline: "7 months",
    completionDate: "2022-08-25",
    role: "IoT Developer & Systems Engineer",
    responsibilities: [
      "Designed sensor networks",
      "Developed data collection systems",
      "Built monitoring dashboards",
      "Implemented alert mechanisms"
    ],
    achievements: [
      "Monitoring 50+ locations",
      "99.5% sensor uptime",
      "Early warning system saved $2M",
      "Published research paper"
    ],
    demoLink: "https://iot-environmental.example.com",
    sourceLink: "https://github.com/aasurjya/iot-environmental-monitor",
    image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800",
    status: "Live"
  }
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/aasurjya",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/aasurjya-bikash-handique/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://x.com/ardevsabh",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];