import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import AboutDetails from "@/components/about";
import TypingText from "../../../components/TypingText";
import SlideUpReveal from "../../../components/SlideUpReveal";

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <div className="-z-40 fixed inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      <div className="relative w-full h-screen flex flex-col items-start justify-center px-8 sm:px-16 md:px-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/20 rounded-full blur-[120px] -z-10" />
        
        <div className="w-full max-w-6xl">
          <h1 className="font-bold text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-accent tracking-tighter mb-8 break-words">
            <TypingText
              text="Aasurjya Bikash Handique"
              speedMs={50}
              startDelayMs={200}
            />
          </h1>
          
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 mt-12">
            <div className="w-full md:w-1/3">
              <h2 className="text-sm sm:text-base text-accent font-semibold tracking-[0.2em] uppercase border-l-2 border-accent pl-4">
                About Me
              </h2>
            </div>
            
            <div className="w-full md:w-2/3 font-light text-base sm:text-lg md:text-xl leading-relaxed text-foreground/90 mix-blend-difference sm:mix-blend-normal">
              <SlideUpReveal
                text={`Hi, I’m Aasurjya Bikash Handique, a tech enthusiast specializing in AR/VR development with an M.Tech from IIT Jodhpur.\nI create immersive applications using tools like Unity, ARKit, and ARCore, focusing on performance optimization and 3D asset integration.\nCurrently working at iHub Drishti, I’ve led projects like AR storytelling apps, VR training modules, and AR-based educational tools.\nWith experience in full-stack development, I build robust applications using React, Next.js, and AWS services, alongside expertise in Docker and Kubernetes.\nHands on experience as UI/UX designer, I craft intuitive, user-centric designs to enhance digital experiences.\nI’m passionate about solving real-world problems through innovative technology`}
              />
            </div>
          </div>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
