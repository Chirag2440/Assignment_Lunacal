import React from "react";
import { AboutMeSection } from "./sections/AboutMeSection";
import { GallerySection } from "./sections/GallerySection";
import { ProfileSection } from "./sections/ProfileSection";

export const MacbookPro = (): JSX.Element => {
  return (
    <main
      className="overflow-hidden bg-[linear-gradient(180deg,rgba(55,62,68,1)_0%,rgba(25,27,31,1)_100%)] w-full min-h-screen flex items-center justify-center p-4 lg:p-8"
      data-model-id="1:102"
    >
      <div className="w-full max-w-[1670px] grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Empty left side - only visible on laptop screens */}
        <section className="hidden lg:block"></section>

        {/* Right side with widgets */}
        <section className="flex flex-col gap-6 w-full">
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
            <AboutMeSection />
          </div>

          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <GallerySection />
          </div>
        </section>
      </div>
    </main>
  );
};
