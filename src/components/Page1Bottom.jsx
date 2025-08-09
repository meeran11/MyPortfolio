import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Page1Bottom = () => {
  useGSAP(() => {
    gsap.to("#banner img", {
      rotate: 360,
      duration: 5,
      repeat: 1,
      ease: "linear"
    });
  });

  return (
    <div className="bg-black py-8 mt-4 w-full flex flex-col sm:flex-row items-center justify-between gap-2 px-4 sm:px-6 md:px-12 border-t border-gray-700">
      <h2 className="text-lg sm:text-2xl font-[anzo2] text-gray-200 text-center sm:text-left">
        WEBSITE DEVELOPER
      </h2>
      <div id="banner" className="flex items-center gap-4 flex-wrap justify-center">
          <img
            src='/assets/up.png'
            alt="upwork"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain hover:scale-110 transition-transform"
          />
          <img
            src='/assets/fiverr.png'
            alt="fiverr"
            className="w-20 h-20 sm:w-28 sm:h-28 object-contain hover:scale-110 transition-transform"
          />

      </div>
    </div>
  );
};

export default Page1Bottom;
