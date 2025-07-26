import React from "react";
import 'remixicon/fonts/remixicon.css'

const Page5 = () => {
  return (
    <div id="projects" className="h-screen p-3 bg-white">
    <div className="h-full w-full bg-black rounded-[40px] flex flex-col items-center justify-center relative overflow-hidden">
      <video
        className="absolute w-full h-full object-cover opacity-40 z-0"
        autoPlay
        loop
        muted
        src="/src/assets/bg.mp4"
      ></video>
      <div className="relative z-10 flex flex-col items-center w-full h-full justify-center">
        <h1 className="text-8xl tracking-wide uppercase text-white font-[anzo1] m-0 text-center">
          PROJECTS
        </h1>
        <h3 className="uppercase text-gray-400 font-[anzo2] text-3xl text-center mb-4">
          Checkout My GitHub!
        </h3>
        <div className="flex justify-center w-full">
          <a href="https://github.com/meeran11" target="_blank" rel="noopener noreferrer">
            <i className="ri-github-line text-black bg-white rounded-full text-[15vh] cursor-pointer hover:opacity-80"></i>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Page5;
