import React, { useState } from "react";
import 'remixicon/fonts/remixicon.css'

const Skills = () => {
  const [open, setOpen] = useState({ prog: false, web: false });
  return (
    <div id="skills" className="h-auto w-full overflow-x-hidden p-3 bg-white">
      <div className="p-8 h-full w-full bg-black rounded-[20px] sm:rounded-[40px] flex flex-col items-center justify-center relative overflow-hidden">
        <video
          className="absolute w-full h-full object-cover opacity-40 z-0 pointer-events-none"
          autoPlay
          loop
          muted
          src="/assets/bg.mp4"
        ></video>
        <div className="relative z-10 flex flex-col items-center w-full h-full justify-center text-white uppercase px-2">
          <h1 className="tracking-wide uppercase text-white font-[anzo1] text-8xl sm:text-8xl md:text-8xl m-0 text-center mb-4 sm:mb-8">Skills</h1>

          <div className="w-full max-w-xs mb-2 sm:mb-4">
            <button
              className="w-full flex justify-between items-center bg-gray-800 px-3 sm:px-4 py-2 sm:py-3 rounded-t-lg font-bold text-base sm:text-lg focus:outline-none"
              onClick={() => setOpen(o => ({ ...o, prog: !o.prog }))}
            >
              Programming
              <i className={`ri-arrow-${open.prog ? 'up' : 'down'}-s-line text-2xl`}></i>
            </button>
            {open.prog && (
              <ul className="bg-gray-900 rounded-b-lg px-3 sm:px-4 py-1 sm:py-2 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>C</li>
                <li>C++</li>
                <li>Python</li>
              </ul>
            )}
          </div>
          <div className="w-full max-w-xs mb-4">
            <button
              className="w-full flex justify-between items-center bg-gray-800 px-4 py-3 rounded-t-lg font-bold text-lg focus:outline-none"
              onClick={() => setOpen(o => ({ ...o, web: !o.web }))}
            >
              Web Development
              <i className={`ri-arrow-${open.web ? 'up' : 'down'}-s-line text-2xl`}></i>
            </button>
            {open.web && (
              <ul className="bg-gray-900 rounded-b-lg px-4 py-2 space-y-2 text-base">
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>MySQL</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
