import React, { useRef, useState } from "react";
import Page1Bottom from "../components/Page1Bottom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import TiltText from "../components/TiltText";

const Page1 = () => {
  const [Xval, setXval] = useState(0)
  const [Yval, setYval] = useState(0)
  const tiltRef = useRef(null);
  function movement(e) {
    setXval((e.clientX - tiltRef.current.getBoundingClientRect().x - (tiltRef.current.getBoundingClientRect().width/2))/30)
    setYval(-(e.clientY - tiltRef.current.getBoundingClientRect().y - (tiltRef.current.getBoundingClientRect().height/2))/30)
  }


  useGSAP(function(){
    gsap.to(tiltRef.current,{
      transform : `rotateX(${Yval}deg) rotateY(${Xval}deg)`,
      duration : 3,
      ease: 'elastic.out(1,0.3)'
    })
  },[Xval,Yval])


  return (
    <div
      onMouseMove={(e) => {
        movement(e);
      }}
      id="page1"
      className="relative flex flex-col sm:flex-row justify-between items-center overflow-hidden overflow-x-hidden h-screen w-full h-auto p-1.5 bg-white"
    > 
      <div className="h-full w-full px-3 rounded-[40px] bg-gradient-to-b from-[#06050f] via-[#302e2e] to-[#000000]">
      <div className="fixed absolute top-12 left-12 text-white text-5xl font-bold">M.</div>
      <div id="page1-in" className="relative z-20 w-full h-full flex flex-col items-center justify-between">
        <div className="md:flex-col relative mb-2 2xl:p-20 h-full w-full lg:px-10 sm:flex justify-center sm:justify-between flex flex-col sm:flex-row items-center justify-center gap-2">
          <div className="flex flex-col sm:flex-row items-center">
            <TiltText abc={tiltRef}/>
          </div>
          <img className='md:h-[580px] md:w-[580px] md:justify-center absolute 2xl:h-[28rem] 2xl:w-[28rem] xl:h-96 xl:w-96 lg:h-64 lg:w-64 h-56 w-56 justify-center sm:mt-20 sm:-right-8 md:left-20 sm:-bottom-2' src="assets/pic.png" alt="" />
        </div>
        <Page1Bottom />
      </div>
      </div>
    </div>
  );
};

export default Page1;