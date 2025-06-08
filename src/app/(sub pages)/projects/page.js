import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import { projectsData } from "../../data";

export const metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's projects page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-30"
        priority
        sizes="100vw"
      />

      <ProjectShowcase projects={projectsData} />
    </>
  );
}