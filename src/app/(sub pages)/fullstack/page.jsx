import HorizontalScroll from "@/components/projects/HorizontalScroll";
import { projectsData } from "@/app/data";

export const metadata = {
  title: "Fullstack Projects",
};

export default function Home() {
  const fullstackProjects = projectsData;

  return (
    <main className="relative min-h-screen w-full bg-background overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="glass-droplet glass-droplet--blue droplet-float-slow"
          style={{
            width: "230px",
            height: "230px",
            top: "12%",
            left: "-40px",
          }}
        />
        <div
          className="glass-droplet glass-droplet--soft droplet-float-medium"
          style={{
            width: "180px",
            height: "180px",
            top: "40%",
            right: "-60px",
          }}
        />
        <div
          className="glass-droplet glass-droplet--blue droplet-float-fast"
          style={{
            width: "260px",
            height: "260px",
            bottom: "-80px",
            left: "25%",
          }}
        />
      </div>

      <div className="relative z-10">
        <HorizontalScroll projects={fullstackProjects} />
      </div>
    </main>
  );
}
