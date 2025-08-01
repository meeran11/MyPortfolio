import React from "react";

const TiltText = (props) => {
  return (
    <div id="tilt" ref={props.abc} className="md:mt-18 mt-16 sm:mt-28 flex flex-col items-center md:text-center sm:items-start w-full">
      <h1 className="md:text-center 2xl:text-8xl xl:text-6xl lg:text-5xl md:text-6xl text-3xl text-center sm:text-left text-white  sm:text-5xl uppercase leading-tight font-[anzo2] font-bold mb-2 sm:mb-4">
        I am a<br /><span className="2xl:text-[12rem] xl:text-9xl lg:text-8xl text-5xl md:text-7xl sm:text-6xl text-yellow-500">FRONT-END</span>
      </h1>
      <h1 className="md:text-center md:w-full md:text-5xl 2xl:text-8xl xl:text-6xl text-5xl text-center sm:text-left text-white leading-tight font-[anzo2] sm:text-5xl font-bold mb-2 sm:mb-4 sm:leading-5 xl:leading-4.5">
        DEVELOPER
      </h1>
      <h1 className="2xl:text-6xl md:text-center md:w-full
       xl:text-5xl text-center sm:text-left text-white text-3xl sm:text-4xl  font-[anzo3] leading-tight font-bold">
        To Hire
      </h1>
    </div>
  );
};

export default TiltText;
