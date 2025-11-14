import HorizontalScroll from "@/components/projects/HorizontalScroll";
import { projectsData } from "@/app/data";

export const metadata = {
  title: "Fullstack Projects",
};

export default function Home() {
  const fullstackProjects = projectsData.filter(
    p => p.category === "Full-Stack Development" || p.category === "Frontend Development"
  );

  return (
    <main className="min-h-screen w-full bg-background">
      <HorizontalScroll projects={fullstackProjects} />
    </main>
  );
}
