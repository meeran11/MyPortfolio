import React from "react";

const About = () => {
  return (
    <div id="about" className="h-screen p-3 bg-white">
    <div className="p-2 px-6 sm:p-5 h-full w-full bg-black rounded-[40px] flex flex-col items-center justify-center relative overflow-hidden">
      <video
        className="absolute w-full h-full object-cover opacity-40 z-0 pointer-events-none"
        autoPlay
        loop
        muted
        src="/src/assets/1.mp4"
      ></video>
      <div className="relative z-10 flex flex-col items-center w-full h-full justify-center">
        <h1 className="tracking-wide uppercase text-white font-[anzo1] text-8xl m-0 text-center">
          ABOUT
        </h1>
        <h3 className="uppercase text-gray-400 font-[anzo2] text-base sm:text-xl text-center mb-2 sm:mb-4">
          INTUITIVE APPROACH | FUTURE-FOCUSED STRATEGY | UNCOMPROMISING DISCIPLINE
        </h3>
        <div className="px-2 sm:px-6 py-2 sm:py-6 max-w-2xl mx-auto mb-4 sm:mb-10">
          <p className="text-white font-extralight font-[anzo3] text-sm sm:text-lg text-center leading-relaxed">
            Anyone can create. Some have the talent to design. But who can capture and translate your vision into a lasting legacy?<br/>
            True design is more than aesthetics; web design is a complete extension of your brand – a seamless blend of visual identity, your story and messaging, your goals and strategy working together to create a powerful digital experience. It’s not a separate piece – it’s your brand in action.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
