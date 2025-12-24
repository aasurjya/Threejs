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
    category: "Full-Stack Development with 3D Visualization",
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
    demoLink: "https://nexprop.vercel.app/",
    sourceLink: "",
    image: "https://i.pinimg.com/1200x/56/4e/32/564e322cf1e235a491091696e4d3ef1d.jpg",
    status: "Live"
  },

  {
    id: 9,
    title: "EduSaaS - School Management System",
    category: "Education SaaS",
    description:
      "A multi-tenant School Management SaaS built with Flutter and Supabase covering admins, teachers, students, parents, and support staff.",
    technologies: [
      "Flutter",
      "Supabase",
      "Riverpod",
      "Isar",
      "fl_chart",
      "pdf",
      "Node.js",
    ],
    timeline: "ongoing",
    completionDate: "2025-04-01",
    role: "Lead Full-Stack Engineer",
    responsibilities: [
      "Defined multi-tenant Supabase schema with RLS policies and tenant_id isolation.",
      "Implemented Flutter app shells for role-based dashboards using Riverpod state management.",
      "Built offline-first syncing with Isar local cache, sync queues, and server-wins conflict resolution.",
      "Added charts, PDF generation, and printing workflows for reports and invoices.",
    ],
    achievements: [
      "Core modules: authentication, dashboards, students, attendance, exams, fees, messaging.",
      "Phase 2 modules: canteen & wallet, library, transport, hostel, timetable.",
    ],
    demoLink: "https://aasurjya.github.io/Flutter-school-management-/",
    sourceLink: "https://github.com/aasurjya",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    status: "In Progress",
  },
  {
    id: 8,
    title: "Ghor Bhara - Assamese Rental Marketplace",
    category: "Full-Stack Development with Supabase",
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
    id: 12,
    title: "pokharas.com",
    category: "Travel Marketplace",
    description:
      "pokharas.com is the ultimate guide to Pokhara, Nepal—pairing local hospitality with curated hotels, tours, restaurants, and adventure services for travelers seeking the Himalayas.",
    technologies: [
      "Next.js 14",
      "Node.js",
      "Prisma",
      "NextAuth",
      "Tailwind CSS",
      "Supabase",
      "Framer Motion",
      "React Three Fiber",
    ],
    timeline: "4 months",
    completionDate: "2023-10-20",
    role: "Full-Stack Developer",
    responsibilities: [
      "Built a content-rich landing experience showcasing curated listings with immersive layouts.",
      "Integrated search, filters, and highlight cards for categories such as Accommodation, Tours, Transport, and Wellness.",
      "Connected travel businesses with travelers via direct contact buttons and featured listings.",
      "Maintained consistent design language, gradients, and custom typography to echo Pokhara’s natural beauty.",
    ],
    achievements: [
      "500+ Listings",
      "10K+ Happy Travelers",
      "4.8 Average Rating",
    ],
    demoLink: "https://pokharas.com",
    sourceLink: "",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764b3d?auto=format&fit=crop&w=1200&q=80",
    status: "Live"
  }
  ,
  {
    id: 13,
    title: "NEXVR",
    category: "Product Design & Frontend Engineering",
    description:
      "Immersive 3D solutions for real estate, showcasing digital twins, virtual showrooms, and metaverse-ready experiences for 500+ live properties.",
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
    timeline: "5 months",
    completionDate: "2024-03-01",
    role: "Lead Frontend Engineer",
    responsibilities: [
      "Crafted an immersive landing experience combining 3D scenes with storytelling copy and subtle motion.",
      "Integrated performant data fetching for property counts and statuses using SWR + Zustand.",
      "Styled navigation and hero content to mirror NEXVR’s messaging pillars and highlight system status.",
    ],
    achievements: [
      "SYSTEM ONLINE: 500+ PROPERTIES LIVE",
      "Experience Reality Beyond Boundaries messaging",
    ],
    demoLink: "https://nexvr.vercel.app/",
    sourceLink: "",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
    status: "Live",
  },
   {
    id: 9,
    title: "BookSelfManager",
    category: "Full-Stack Development",
    description: "A full-stack application for managing a personal library of books. Allows users to add, organize, and track their books.",
    technologies: ["Docker", "JavaScript", "SQL"],
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
    category: "Frontend Development and API Integration",
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
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "3D/AR/VR", link: "https://www.canva.com/design/DAGNu_PYjqk/yvGJnfarxclW2mOi6dJ93w/view#1", icon: "projects", newTab: false },
  { label: "Fullstack", link: "/fullstack", icon: "code", newTab: false },
  { label: "Dashboard", link: "/dashboard", icon: "analytics", newTab: false },
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
