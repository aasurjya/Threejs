import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import PageTransition from "@/components/transitions/PageTransition";
import SectionTransition from "@/components/transitions/SectionTransition";
import dynamic from "next/dynamic";

const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <PageTransition>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <SectionTransition variant="scale" delay={0.3}>
        <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
          <RenderModel>
            <HatModel />
          </RenderModel>
        </div>
      </SectionTransition>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <SectionTransition variant="slideUp" delay={0.5} className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-accent">
            Aasurjya
          </h1>
          <p className="font-light text-foreground text-lg">
            AR VR Developer
          </p>
        </SectionTransition>
      </div>

      <SectionTransition variant="slideUp" delay={0.7}>
        <AboutDetails />
      </SectionTransition>
    </PageTransition>
  );
}