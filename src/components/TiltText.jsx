import React from "react";

const TiltText = (props) => {
  return (
    <div id="tilt" ref={props.abc} className="mt-12 sm:mt-20 flex flex-col items-center lg:items-start w-full">
      <h1 className="text-white text-3xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-8xl uppercase leading-tight font-[anzo2] font-bold mb-2 sm:mb-4 text-center lg:text-left">
        I am a <br />
        <span className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-9xl 2xl:text-[12rem] text-yellow-500">
          FRONT-END</span>
      </h1>
      <h1 className="text-white text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-8xl leading-tight font-[anzo2] font-bold mb-2 sm:mb-4 text-center lg:text-left">
        DEVELOPER
      </h1>
      <h1 className="text-gray-400 text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-[anzo3] leading-tight font-bold text-center lg:text-left">
        To Hire
      </h1>
    </div>
  );
};

export default TiltText;
