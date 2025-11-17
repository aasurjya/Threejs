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
    id: 11,
    title: "Blockchain Insurance App",
    category: "Full-Stack Development",
    description: "A university project on a blockchain-based insurance application. The project explores the use of blockchain for insurance processes, featuring a mobile app component.",
    technologies: ["Hyperledger Fabric", "NodeJS", "Kubernates"],
    timeline: "6 months",
    completionDate: "2022",
    role: "Researcher",
    responsibilities: [
      "Developed a proof-of-concept for a decentralized insurance application.",
      "Focused on computer science, blockchain databases, and mobile app integration."
    ],
    demoLink: "",
    sourceLink: "http://agnee.tezu.ernet.in:8999/cgi-bin/koha/opac-detail.pl?biblionumber=57680&shelfbrowse_itemnumber=213769#holdings",
    image: "https://i.pinimg.com/1200x/9d/7f/7c/9d7f7c9e91cce0af6f3d0ee06b6b6062.jpg",
    status: "Completed"
  },
  {
    id: 7,
    title: "NexProp - Premium Real Estate",
    category: "Full-Stack Development",
    description: "A premium real estate platform with an interactive 3D building viewer for luxury properties. Users can orbit buildings, inspect units, and explore a modern, responsive UI built with advanced animations and performance optimizations.",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Three.js",
      "Framer Motion",
      "SWR",
      "GSAP",
      "Zustand",
      "Node.js",
    ],
    timeline: "3 months",
    completionDate: "2024-01-01",
    role: "Full-Stack Developer",
    responsibilities: [
      "Built an interactive 3D building viewer with camera controls, unit selection, and responsive layout using Three.js, React Three Fiber, and @react-three/drei.",
      "Integrated GLTF models, optimized model loading, and tuned performance for smooth interactions on web and mobile.",
      "Implemented state management with Zustand and data fetching with SWR for a responsive, reactive UI.",
      "Designed and developed a modern, animation-rich interface using Tailwind CSS, Framer Motion, GSAP, and Headless UI.",
      "Configured linting, project structure, and developer tooling with ESLint, lucide-react, and Node.js-based tooling."
    ],
    demoLink: "https://nexprop-a.vercel.app/",
    sourceLink: "",
    image: "https://i.pinimg.com/1200x/56/4e/32/564e322cf1e235a491091696e4d3ef1d.jpg",
    status: "Live"
  },
  {
    id: 8,
    title: "Ghor Bhara - Assamese Rental Marketplace",
    category: "Full-Stack Development",
    description: "A full-stack Assamese rental marketplace connecting tenants with verified landlords, featuring secure payments, rich dashboards, 3D/visual enhancements, and a production-grade Supabase-backed backend.",
    technologies: [
      "Next.js 15",
      "Supabase",
      "Razorpay",
      "AWS S3",
      "Playwright",
      "CloudFront",
      "Node.js",

    ],
    timeline: "4 months",
    completionDate: "2023-11-01",
    role: "Full-Stack Developer",
    responsibilities: [
      "Designed and implemented a multi-role rental marketplace (tenant, landlord, admin) using Next.js, React, and TypeScript.",
      "Integrated Supabase for database, authentication, and server-side operations, including custom helpers for auth flows and typed user models.",
      "Implemented secure payments with Razorpay and file storage flows with AWS S3 and presigned URLs for documents and media.",
      "Built a modern, accessible UI system with Tailwind CSS 4, Radix UI, lucide-react, and a variant-based component architecture (CVA, clsx, tailwind-merge, next-themes).",
      "Added analytics dashboards, charts, and rich visuals using Recharts, Three.js / React Three Fiber, particle effects, and animated UI states.",
      "Established a robust testing stack with Jest, React Testing Library, Supertest, and Playwright plus linting and build tooling (ESLint, Vercel, Supabase CLI)."
    ],
    demoLink: "https://tiloirent.vercel.app/",
    sourceLink: "",
    image: "https://i.pinimg.com/1200x/1d/b5/5c/1db55cd0d4cd8792b2043614d6f90e1a.jpg",
    status: "Live"
  },
  {
    id: 9,
    title: "BookSelfManager",
    category: "Full-Stack Development",
    description: "A full-stack application for managing a personal library of books. Allows users to add, organize, and track their books.",
    technologies: ["Docker", "JavaScript", , "SQL"],
    timeline: "2 months",
    completionDate: "2023-09-01",
    role: "Full-Stack Developer",
    responsibilities: [
      "Developed the backend and frontend of the application",
      "Containerized the application using Docker"
    ],
    demoLink: "",
    sourceLink: "https://github.com/aasurjya/BookSelfManager",
    image: "https://i.pinimg.com/1200x/8c/6c/41/8c6c41c1e82af0da8223790fb7d1c0da.jpg",
    status: "Completed"
  },
  {
    id: 10,
    title: "Movies App",
    category: "Frontend Development",
    description: "A simple and elegant movie browsing application built with Vue.js.",
    technologies: ["Vue.js", "Netlify"],
    timeline: "1 month",
    completionDate: "2023-08-01",
    role: "Frontend Developer",
    responsibilities: [
      "Developed the user interface using Vue.js",
      "Deployed the application to Netlify"
    ],
    demoLink: "https://aasurjya-movies-app.netlify.app/",
    sourceLink: "https://github.com/aasurjya/movies-app-vue",
    image: "https://i.pinimg.com/1200x/15/28/9d/15289d665fb692e8a54915a43a44e070.jpg",
    status: "Live"
  },
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
  { label: "3D/AR/VR", link: "https://www.canva.com/design/DAGNu_PYjqk/yvGJnfarxclW2mOi6dJ93w/view#1", icon: "projects", newTab: false },
  { label: "Fullstack", link: "/fullstack", icon: "code", newTab: false },
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
