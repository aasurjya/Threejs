import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import PageTransition from "@/components/transitions/PageTransition";
import SectionTransition from "@/components/transitions/SectionTransition";

import dynamic from "next/dynamic";
const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

const MyAvatar = dynamic(() => import("@/components/models/MyAvatar"), {
  ssr: false,
});

export default function Home() {
  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col items-center justify-between relative">
        <Image
          priority
          sizes="100vw"
          src={bg}
          alt="background-image"
          fill
          className="-z-50 w-full h-full object-cover object-center opacity-50"
        />

        <div className="w-full h-screen">
          <SectionTransition variant="fade" delay={0.2}>
            <Navigation />
          </SectionTransition>
          
          <SectionTransition variant="scale" delay={0.5}>
            <RenderModel>
              <MyAvatar/>
            </RenderModel>
          </SectionTransition>
        </div>
      </main>
    </PageTransition>
  );
}