import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-6 w-full max-w-7xl mx-auto px-4">
        
        {/* Education Section */}
        <div className="col-span-12 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-accent mb-6 text-center uppercase tracking-widest">
            Education
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ItemLayout className={"!p-8 flex-col items-start justify-start h-full hover:scale-[1.02] transition-transform duration-300"}>
              <div className="flex flex-col h-full w-full">
                <span className="text-accent text-sm font-bold tracking-wider mb-2 uppercase">2022 - 2025</span>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">IIT Jodhpur</h3>
                <p className="text-foreground/80 font-medium mb-4">M.Tech in AR & VR</p>
                <div className="w-12 h-0.5 bg-accent/50 mb-4"></div>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  Specialized research in Augmented Reality and Virtual Reality technologies.
                </p>
              </div>
            </ItemLayout>

            <ItemLayout className={"!p-8 flex-col items-start justify-start h-full hover:scale-[1.02] transition-transform duration-300"}>
              <div className="flex flex-col h-full w-full">
                <span className="text-accent text-sm font-bold tracking-wider mb-2 uppercase">2018 - 2022</span>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">Tezpur University</h3>
                <p className="text-foreground/80 font-medium mb-4">B.Tech in CSE</p>
                <div className="w-12 h-0.5 bg-accent/50 mb-4"></div>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  Computer Science and Engineering.<br/>
                  <span className="italic opacity-80 mt-1 block">First Division</span>
                </p>
              </div>
            </ItemLayout>
          </div>
        </div>

        {/* Stats Section */}
        <div className="col-span-12 grid grid-cols-12 gap-6">
          <ItemLayout className={"col-span-6 md:col-span-6 !p-6 flex-col items-center text-accent/90"}>
            <p className="font-bold text-4xl sm:text-6xl mb-2">
              15+
            </p>
            <p className="font-medium text-xs sm:text-sm uppercase tracking-widest text-foreground/70">
              Projects Completed
            </p>
          </ItemLayout>

          <ItemLayout className={"col-span-6 md:col-span-6 !p-6 flex-col items-center text-accent/90"}>
            <p className="font-bold text-4xl sm:text-6xl mb-2">
              2.5+
            </p>
            <p className="font-medium text-xs sm:text-sm uppercase tracking-widest text-foreground/70">
              Years Experience
            </p>
          </ItemLayout>
        </div>

      </div>
    </section>
  );
};

export default AboutDetails;
