import React, { useRef, useState } from "react";
import Page1Bottom from "../components/Page1Bottom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import TiltText from "../components/TiltText";

const Page1 = () => {
  const [Xval, setXval] = useState(0);
  const [Yval, setYval] = useState(0);
  const tiltRef = useRef(null);

  function movement(e) {
    const rect = tiltRef.current.getBoundingClientRect();
    setXval((e.clientX - rect.x - rect.width / 2) / 30);
    setYval(-(e.clientY - rect.y - rect.height / 2) / 30);
  }

  useGSAP(() => {
    gsap.to(tiltRef.current, {
      transform: `perspective(1000px) rotateX(${Yval}deg) rotateY(${Xval}deg)`,
      duration: 1.2,
      ease: "power2.out",
    });
  }, [Xval, Yval]);

  return (
    <div
      onMouseMove={movement}
      id="page1"
      className="relative min-h-screen w-full bg-white overflow-x-hidden flex items-stretch p-3"
    >
      <div className="w-full h-full lg:h-screen rounded-[40px] bg-[url(../assets/bg.jpg)] p-4 flex flex-col justify-between" style={{ opacity: 1 }}>
        {/* Logo */}
        <div className="absolute top-8 left-10 text-white font-[Verdana] font-bold text-3xl sm:text-4xl lg:text-5xl">
          M.
        </div>

        {/* Main Hero Content */}
        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 items-center lg:justify-center gap-8 px-4 sm:px-8 lg:px-16 flex-1">
          {/* Left: Tilt Text */}
          <div className="mt-4 flex justify-center lg:justify-start">
            <TiltText abc={tiltRef} />
          </div>

          {/* Right: Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              className="w-40 sm:w-56 md:w-72 lg:w-80 xl:w-96 aspect-square object-cover rounded-full shadow-lg ring-2 ring-yellow-500/40"
              src="/assets/image.png"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/assets/image.jpg'; }}
              alt="Profile Graphic"
            />
          </div>
        </div>

        {/* Footer */}
        <Page1Bottom />
      </div>
    </div>
  );
};

export default Page1;
